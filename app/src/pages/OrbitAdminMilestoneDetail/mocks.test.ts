import { describe, expect, it } from 'vitest';
import { QRCodeScanResultUserMessage, scanOutcome } from './mocks';
import { QRCodeErrorType } from './staticEntities';

/* GetScanMilestoneQRCode of Connect2_OrbitMobile_BL and the QRCodeScanResult records: MCP (DEV) facts,
   migration/clarify/review/mcp-session-2026-10-29.md rows 5 and 5b (server code and data are not visible on TST). */
describe('OrbitAdminMilestoneDetail mocks: GetScanMilestoneQRCode outcomes', () => {
  it('QRCodeScanResult.UserMessage per record (the GenericError text keeps its spelling)', () => {
    expect(QRCodeScanResultUserMessage).toEqual({
      [QRCodeErrorType.CheckedIn]: 'Has Checked in',
      [QRCodeErrorType.CheckedInForOtherMilestone]: 'Has Checked in',
      [QRCodeErrorType.AlreadyCheckedInForMilestone]: 'This QR code has been scanned',
      [QRCodeErrorType.GenericError]: 'An error has occured',
      [QRCodeErrorType.Moved]: '',
      [QRCodeErrorType.NotAllocated]: '',
      [QRCodeErrorType.NotInvited]: '',
    });
  });

  it('a check-in keeps the API success; the outcome lookup always reads the AlreadyCheckedInForMilestone record', () => {
    expect(scanOutcome('checkedIn')).toEqual({
      QRCodeErrorTypeId: QRCodeErrorType.AlreadyCheckedInForMilestone,
      Success: true,
      ErrorMessage: '',
    });
  });

  it('a member already recorded for the milestone: no success, the AlreadyCheckedInForMilestone message and id', () => {
    expect(scanOutcome('localDuplicate')).toEqual({
      QRCodeErrorTypeId: QRCodeErrorType.AlreadyCheckedInForMilestone,
      Success: false,
      ErrorMessage: 'This QR code has been scanned',
    });
  });

  it('another API failure keeps the API message; the id is the AlreadyCheckedInForMilestone record', () => {
    expect(scanOutcome('apiFailure', 'Orbit API text')).toEqual({
      QRCodeErrorTypeId: QRCodeErrorType.AlreadyCheckedInForMilestone,
      Success: false,
      ErrorMessage: 'Orbit API text',
    });
  });
});
