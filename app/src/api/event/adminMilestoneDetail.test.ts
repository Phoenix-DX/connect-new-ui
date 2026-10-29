import { describe, expect, it } from 'vitest';
import { wireList } from '@/lib/os-wire';
import {
  EMPTY_ADMIN_MILESTONE_TYPE,
  toAdminMilestoneInformation,
  toScanMilestoneQRCodeInputs,
  toScanMilestoneQRCodeResult,
  type ScanMilestoneQRCodeWire,
} from './adminMilestoneDetail';

/* The interim calls of ScreenBlock_AdminMilestoneDetail (not in the contract yet, decision I10-6). */
describe('adminMilestone mappers', () => {
  it('toAdminMilestoneInformation: HasQRCode and the whole OrbitMilestoneType record', () => {
    const type = { ...EMPTY_ADMIN_MILESTONE_TYPE, Id: 'meeting-admin', Name: 'Meeting' };
    expect(toAdminMilestoneInformation({ HasQRCode: true, OrbitMilestoneType: type })).toEqual({
      hasQRCode: true,
      orbitMilestoneType: type,
    });
  });

  it('toScanMilestoneQRCodeInputs: ScanClientId and ScannedQRCodeInfo with the milestone, member and admin', () => {
    const inputs = toScanMilestoneQRCodeInputs('ConnectMobile', {
      EventId: '7301',
      MilestoneId: '730104',
      MilestoneType: 'meeting-admin',
      MemberId: '9101',
      member: { FirstName: 'Lucía', Lastname: 'Herrera', LocalityName: 'San Nicolás', CountryName: 'Argentina' },
      admin: { MemberId: '9100', FirstName: 'Matías', LastName: 'Vitale', Locality: 'Bahia', Country: 'Argentina' },
    });
    expect(inputs.ScanClientId).toBe('ConnectMobile');
    expect(inputs.ScannedQRCodeInfo).toMatchObject({
      EventId: '7301',
      MilestoneId: '730104',
      MilestoneType: 'meeting-admin',
      ScanDate: '1900-01-01T00:00:00',
      ScannedUserInformation: { MemberId: '9101', MemberFirstName: 'Lucía', MemberLastName: 'Herrera' },
      ScannerAdminInfo: { AdminMemberId: '9100', AdminFirstName: 'Matías', AdminCountry: 'Argentina' },
    });
  });

  it('toScanMilestoneQRCodeResult: the fields the block reads, the seats unwrapped', () => {
    const wire: ScanMilestoneQRCodeWire = {
      QRCodeErrorTypeId: '',
      Response: {
        Status: { Success: true, ErrorMessage: '' },
        Result: '',
        MemberId: '9101',
        EventId: '7301',
        MilestoneId: '730104',
        MilestoneRef: '',
        MilestoneName: 'Conference Meeting',
        RowAllocation: '14',
        SeatingPlanName: 'Bahia Main Hall',
        PriorCheckIns: wireList([]),
        UserRole: 'Guest',
        GuestRole: '',
        Tag: 'Visitor',
        Seats: wireList([{ MilestoneName: 'Conference Meeting', SeatAllocation: '14' }]),
        ScanDate: '2026-11-14T13:05:00Z',
      },
    };
    expect(toScanMilestoneQRCodeResult(wire)).toEqual({
      UserRole: 'Guest',
      GuestRole: '',
      Tag: 'Visitor',
      Seats: [{ MilestoneName: 'Conference Meeting', SeatAllocation: '14' }],
      RowAllocation: '14',
      SeatingPlanName: 'Bahia Main Hall',
      Status: { Success: true, ErrorMessage: '' },
    });
  });
});
