import { act, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LOCALITY, MOCK_USER } from '@/mocks/fictional/directory';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import QRCodeGenerate from './QRCodeGeneratePage';

/* The page with its flows (useGenerateQrCode) in the app frame on a memory router, with the MSW mocks: the fictional
   pass of the mock member for event 7301 (src/mocks/fictional/orbit.ts) and the photo of the signed image mock. */
const PATH = '/UBTConnect/QRCodeGenerate';
const EVENT_DETAIL = '/UBTConnect/EventDetail';
const HELPDESK = '/UBTConnect/ContactByEmailOrbitHelpdesk';
const GET_QR_CODE = 'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode';
const routes = {
  [EVENT_DETAIL]: <p>EventDetail screen</p>,
  [PATH]: <QRCodeGenerate />,
  [HELPDESK]: <p>ContactByEmailOrbitHelpdesk screen</p>,
};
const QUERY = new URLSearchParams({
  In_EventId: '7301',
  In_MemberId: MOCK_USER_ID,
  In_EventName: 'Rosario Conference',
  In_EventStartDate: '2026-11-06T09:00:00.000Z',
  In_EventEndDate: '2026-11-08T17:00:00.000Z',
  In_EventLocation: 'Rosario Main Hall',
}).toString();

const skeleton = () => document.getElementById('b1-$b4');
const memberCard = () => document.querySelector('.orbit-qrcode-member-cont');
const noInformation = () => document.getElementById('b1-$b3');
const footer = () => document.querySelector('.contact-helpdesk-footer');
const qrCodeCalls = () => calledActions().filter((action) => action.endsWith(GET_QR_CODE));

/** Opens the page after EventDetail and waits for the end of RefreshData. */
async function open(search = `?${QUERY}`) {
  const view = renderRoutes(routes, EVENT_DETAIL);
  await act(() => view.router.navigate(`${PATH}${search}`));
  await waitFor(() => {
    expect(footer()).not.toBeNull();
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
  // The stored record keeps the country code only; the mock member's names and locality are merged in.
  appManager_SetCachedUserInfo({ CountryCode: 'AR' });
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('QRCodeGenerate page', () => {
  it('shows the pass of the member with the QR code, the footer and CommonUI', async () => {
    const { container } = await open();
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode"]')?.id).toBe(
      '$b1',
    );
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b2');
    expect(container.textContent).toContain('Rosario Conference');
    const card = memberCard();
    expect(card?.textContent).toContain(`${MOCK_USER.firstName} ${MOCK_USER.lastName}`);
    expect(card?.textContent).toContain(`${LOCALITY.name}, ${LOCALITY.country}`);
    expect(card?.textContent).toContain('Host');
    expect(card?.querySelector('.display-flex')?.textContent).toBe('Row: 12 & 12');
    expect(card?.textContent).toContain('GMP Tag: H-0417');
    expect(card?.querySelector('.orbit-member-photo')?.getAttribute('src')).toMatch(/placeholder-square\.svg$/);
    expect(card?.querySelector('.orbit-qrcode-code')?.getAttribute('src')).toMatch(/^blob:/);
    expect(skeleton()).toBeNull();
    expect(qrCodeCalls()).toHaveLength(1);
  });

  it('sends the block variables and the inputs in their order', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_QR_CODE}`);
    const view = await open();
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    const photo = view.container.querySelector('.orbit-member-photo')?.getAttribute('src') ?? '';
    expect(JSON.stringify(bodies[0])).toBe(
      JSON.stringify({
        UserName: `${MOCK_USER.firstName} ${MOCK_USER.lastName}`,
        UserLocation: `${LOCALITY.name}, ${LOCALITY.country}`,
        UserSignedURL: photo,
        IsFetchingData: true,
        In_MemberId: MOCK_USER_ID,
        In_EventId: '7301',
        In_EventName: 'Rosario Conference',
        In_EventStartDate: '2026-11-06T09:00:00.000Z',
        In_EventEndDate: '2026-11-08T17:00:00.000Z',
        In_EventLocation: 'Rosario Main Hall',
      }),
    );
  });

  it('shows the skeleton without the footer in the first frame and while Get_EventQRCode runs', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, `${PATH}?${QUERY}`);
    expect(skeleton()).not.toBeNull();
    expect(memberCard()).toBeNull();
    expect(footer()).toBeNull();
  });

  it('shows the NoInformation message when the member has no pass for the event', async () => {
    await open(`?In_EventId=7301&In_MemberId=990002&In_EventName=Rosario%20Conference`);
    expect(noInformation()?.textContent).toBe(
      "Unfortunately the QR Code couldn't be generated. Please try again later.",
    );
    expect(memberCard()).toBeNull();
  });

  it('keeps the skeleton and shows the error message when Get_EventQRCode fails', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    renderRoutes(routes, `${PATH}?${QUERY}`);
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(skeleton()).not.toBeNull();
    expect(footer()).toBeNull();
  });

  it('opens ContactByEmailOrbitHelpdesk with the event and the subject on a footer click', async () => {
    const view = await open();
    act(() => {
      fireEvent.click(footer() as Element);
    });
    await waitFor(() => {
      expect(view.at().startsWith(`${HELPDESK}?`)).toBe(true);
    });
    const query = new URLSearchParams(view.at().split('?')[1]);
    expect([...query.entries()]).toEqual([
      ['In_MilestoneId', ''],
      ['In_EventName', 'Rosario Conference'],
      ['In_EventId', '7301'],
      ['In_Subject', 'Rosario Conference - Rosario Main Hall - Fri 6 Nov 2026 - Sun 8 Nov 2026'],
    ]);
  });

  it('shows the same pass after a back navigation, without a second call', async () => {
    const view = await open();
    act(() => {
      fireEvent.click(footer() as Element);
    });
    await waitFor(() => {
      expect(view.at().startsWith(HELPDESK)).toBe(true);
    });
    await act(() => view.router.navigate(-1));
    expect(view.at()).toBe(`${PATH}?${QUERY}`);
    expect(skeleton()).toBeNull();
    expect(memberCard()?.textContent).toContain('GMP Tag: H-0417');
    expect(qrCodeCalls()).toHaveLength(1);
  });
});
