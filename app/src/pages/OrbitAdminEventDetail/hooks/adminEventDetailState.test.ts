import { describe, expect, it } from 'vitest';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';
import {
  adminEventDetailReducer,
  adminEventInformationInputs,
  EMPTY_SCANNED_USER,
  INITIAL_ADMIN_EVENT_DETAIL_STATE,
  scannedMemberName,
} from './adminEventDetailState';

/* The variables of ScreenBlock_AdminEventDetail, without React. The event is a fictional youth day. */
const INPUTS: AdminEventDetailInputs = {
  In_EventId: '7315',
  In_EventName: 'Youth Day - Azul',
  In_EventStartDate: '2026-11-14T13:00:00Z',
  In_EventEndDate: '2026-11-14T21:00:00Z',
  In_EventLocation: 'Azul Meeting Room',
  In_EventTypeFriendly: 'Youth Day',
};

describe('adminEventDetailState', () => {
  it('a new visit starts with the defaults: nothing fetched, no popup, the empty scanned user', () => {
    expect(INITIAL_ADMIN_EVENT_DETAIL_STATE).toEqual({
      isFetchingData: false,
      isProcessingData: false,
      scanResult: { Success: false, ErrorMessage: '' },
      scannedUser: EMPTY_SCANNED_USER,
      eventType: {},
      qrCodePopupOpened: false,
      scanError: { IsShowErrorMessage: false, Message: '' },
      isDataFetched: false,
      hasQRCode: false,
    });
    expect(EMPTY_SCANNED_USER.Member.Id).toBe('0');
  });

  it('the reducer assigns the variables of the patch and keeps the others', () => {
    const next = adminEventDetailReducer(INITIAL_ADMIN_EVENT_DETAIL_STATE, { isFetchingData: true, hasQRCode: true });
    expect(next).toEqual({ ...INITIAL_ADMIN_EVENT_DETAIL_STATE, isFetchingData: true, hasQRCode: true });
    expect(next).not.toBe(INITIAL_ADMIN_EVENT_DETAIL_STATE);
    expect(INITIAL_ADMIN_EVENT_DETAIL_STATE.isFetchingData).toBe(false);
  });

  it('Get_EventInformation sends the six inputs and IsFetchingData, IsProcessingData, QRCodePopupOpened', () => {
    const state = { ...INITIAL_ADMIN_EVENT_DETAIL_STATE, isFetchingData: true, qrCodePopupOpened: true };
    expect(adminEventInformationInputs(INPUTS, state)).toEqual({
      ...INPUTS,
      IsFetchingData: true,
      IsProcessingData: false,
      QRCodePopupOpened: true,
    });
  });

  it('the scanned member name: first and last name, the last name alone without a first name', () => {
    const member = { Id: '9101', FirstName: 'Lucía', Lastname: 'Herrera', LocalityName: '', CountryName: '' };
    expect(scannedMemberName(member)).toBe('Lucía Herrera');
    expect(scannedMemberName({ ...member, FirstName: '' })).toBe('Herrera');
    expect(scannedMemberName({ ...member, Lastname: '' })).toBe('Lucía ');
  });
});
