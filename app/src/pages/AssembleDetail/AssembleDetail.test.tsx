import { act, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { ASSEMBLE_MEETINGS } from '@/mocks/fictional/assemble';
import { getPreloadObject, setPreloadObject } from '@/platform/navigation';
import { resetNavigation, renderRoutes } from '@/platform/navigation/testRouter';
import { applyTestSession } from '@/platform/session/testSession';
import { freshPage, setFlags } from '@/test/testSupport';
import AssembleDetail from './AssembleDetailPage';

/* The route on the fictional Assemble world (src/mocks/fictional/assemble.ts): the meeting, its invited halls and the
   GMS local contacts of the Bahia Blanca halls. */
const PATH = '/UBTConnect/AssembleDetail';
const LOCALITY = 'b2-b4-b14-b1-0';
const HALL = `${LOCALITY}-b3-0`;

function meetingOf(hallId: string, typeId: string) {
  const m = ASSEMBLE_MEETINGS.find((x) => x.HostingSubdivisionId === hallId && x.AssembleEventType.Id === typeId);
  if (!m) throw new Error('no fictional meeting');
  return m;
}
const urlOf = (m: { EventId: string; SeriesId: string; DateTime: string }, tile = 'Assemble') =>
  `${PATH}?EventId=${m.EventId}&SeriesId=${m.SeriesId}&Start=${m.DateTime}&AssembleEventTypeTile=${tile}`;
const title = (container: HTMLElement) =>
  container.querySelector('[data-block="Assemble.ScreenBlock_AssembleDetail"]')?.querySelector('span[data-expression]')
    ?.textContent;
const calls = (action: string) => (window.__osCalls ?? []).filter((c) => c.action === action).length;
const byId = (id: string) => document.getElementById(id);
/** The calls of the meeting, of the GMS contacts and of the halls (GetCacheableSubdivision_V2). */
const blockCalls = () => ({
  meeting: calls('DataActionGetAssembleEvent'),
  contacts: calls('ActionGetMemberContactByCacheKey'),
  halls: calls('ActionGetBulkSubdivisions_V2'),
});
/** The household ids of the open hall (its scroll anchors). */
const hallHouseholdIds = () =>
  [...(byId(`${HALL}-List_SubdivisionHousehold`)?.querySelectorAll('[data-dx-scroll-anchor-id]') ?? [])].map((a) =>
    a.getAttribute('data-dx-scroll-anchor-id'),
  );

function renderScreen() {
  return renderRoutes(
    {
      [PATH]: <AssembleDetail />,
      '/UBTConnect/HomeFeed': <div id="home" />,
      '/UBTConnect/HouseholdCarousel': <div id="carousel" />,
      '/UBTConnect/HouseholdDetails': <div id="household" />,
    },
    '/UBTConnect/HomeFeed',
  );
}

describe('AssembleDetail', () => {
  beforeEach(async () => {
    freshPage();
    resetNavigation();
    setFlags({});
    window.history.replaceState(null, '', `/UBTConnect/HomeFeed?mocksession=unlocked`);
    await applyTestSession();
  });

  it('a meeting: the preloaded title, then the meeting with its card, attendees and GMS contacts', async () => {
    const m = meetingOf('1210', '3');
    const { container, router } = renderScreen();
    setPreloadObject({
      AssembleEventSummary: { AssembleEventType: { Title: 'From the list' } },
      PreloadedFromListIndex: 3,
    });
    await act(() => router.navigate(urlOf(m)));
    expect(
      container.querySelector('[data-block="AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton"]'),
    ).not.toBeNull();
    await waitFor(() => {
      expect(container.querySelector('[data-block="Assemble.AssembleSummaryCard"]')).not.toBeNull();
    });
    expect(title(container)).toBe('Gospel Preaching');
    expect(calls('DataActionGetAssembleEvent')).toBe(1);
    // GetAssembleNotes, the screen data action fetched at start (route-actions gap 8).
    expect(calls('DataActionGetAssembleNotes')).toBe(1);
    expect(container.querySelector('[data-block="ConnectCorePatterns.ItemCard_ActionBar"]')).not.toBeNull();
    expect(byId('b2-b4-b14-Header')).toHaveTextContent('Host Locality');
    expect(byId('b2-b4-b15-Header')).toHaveTextContent('Interchange Meetings');
    // One loading row per contact id, then the contacts of GetCacheableMemberContactList.
    expect(container.querySelectorAll('[data-block="Assemble.AssembleEventDetail_Contact"]')).toHaveLength(2);
    await waitFor(() => {
      expect(byId('b2-b4-b18-b1-0-Block_HostContact')).toHaveTextContent('Martín Herrera');
    });
    expect(calls('ActionGetMemberContactByCacheKey')).toBe(1);
  });

  it('without a preload, the AssembleEventTypeTile input is the title until the meeting answers', async () => {
    const m = meetingOf('9203', '1');
    const { container, router } = renderScreen();
    await act(() => router.navigate(urlOf(m, 'Assemble Meeting')));
    expect(title(container)).toBe('Assemble Meeting');
    await waitFor(() => {
      expect(title(container)).toBe("Lord's Supper");
    });
  });

  it('a locality and a hall open: the hall households from GetCacheableSubdivision_V2', async () => {
    const m = meetingOf('1210', '1');
    const { container, router } = renderScreen();
    await act(() => router.navigate(urlOf(m)));
    await waitFor(() => {
      expect(byId(`${LOCALITY}-DIV_Locality_Header`)).not.toBeNull();
    });
    fireEvent.click(byId(`${LOCALITY}-DIV_Locality_Header`) as HTMLElement);
    expect(container.querySelectorAll('[data-block="Assemble.AssembleEventDetail_AttendeeSubdivision"]')).toHaveLength(
      3,
    );
    fireEvent.click(byId(`${HALL}-DIV_SubdivisionHousehold_Header`) as HTMLElement);
    await waitFor(() => {
      expect(byId(`${HALL}-$b3-0`)).not.toBeNull();
    });
    expect(calls('ActionGetBulkSubdivisions_V2')).toBe(3);
    expect(byId(`${HALL}-List_SubdivisionHousehold`)?.querySelectorAll('[data-block="Share.ContextMenu"]').length).toBe(
      byId(`${HALL}-List_SubdivisionHousehold`)?.querySelectorAll('[data-block="ScrollAnchors.ScrollAnchor"]').length,
    );
  });

  it('a household click with the carousel on: the ids of the hall as the preload, then HouseholdCarousel', async () => {
    setFlags({ C2EnableCarousel: true });
    const m = meetingOf('1210', '1');
    const { router, at } = renderScreen();
    await act(() => router.navigate(urlOf(m)));
    await waitFor(() => {
      expect(byId(`${LOCALITY}-DIV_Locality_Header`)).not.toBeNull();
    });
    fireEvent.click(byId(`${LOCALITY}-DIV_Locality_Header`) as HTMLElement);
    fireEvent.click(byId(`${HALL}-DIV_SubdivisionHousehold_Header`) as HTMLElement);
    await waitFor(() => {
      expect(byId(`${HALL}-$b3-0`)).not.toBeNull();
    });
    const householdId = byId(`${HALL}-$b3-1`)
      ?.querySelector('[data-dx-scroll-anchor-id]')
      ?.getAttribute('data-dx-scroll-anchor-id');
    const name = byId(`${HALL}-$b4-1`)?.querySelector('.font-semi-bold span');
    fireEvent.click(name as HTMLElement);
    await waitFor(() => {
      expect(at()).toBe(`/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=${String(householdId)}`);
    });
    // ScreenFrame deletes the preload after the first effects of the carousel screen (a tick later under load).
    await waitFor(() => {
      expect(getPreloadObject()).toBeNull();
    });
  });

  it('back from a household restores the title and the meeting without a new GetAssembleEvent', async () => {
    setFlags({ C2EnableCarousel: false });
    const m = meetingOf('1210', '3');
    const { container, router, at } = renderScreen();
    await act(() => router.navigate(urlOf(m)));
    await waitFor(() => {
      expect(container.querySelector('[data-block="Assemble.AssembleSummaryCard"]')).not.toBeNull();
    });
    await act(() => router.navigate('/UBTConnect/HouseholdDetails?HouseholdId=91004'));
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(at()).toBe(urlOf(m));
    });
    expect(title(container)).toBe('Gospel Preaching');
    expect(container.querySelector('[data-block="Assemble.AssembleSummaryCard"]')).not.toBeNull();
    expect(calls('DataActionGetAssembleEvent')).toBe(1);
  });

  it('back from a household restores the GMS contacts, the open locality and the open hall (no loading rows)', async () => {
    setFlags({ C2EnableCarousel: false });
    const m = meetingOf('1210', '1');
    const { container, router } = renderScreen();
    await act(() => router.navigate(urlOf(m)));
    await waitFor(() => {
      expect(byId('b2-b4-b18-b1-0-Block_HostContact')).toHaveTextContent('Martín Herrera');
    });
    fireEvent.click(byId(`${LOCALITY}-DIV_Locality_Header`) as HTMLElement);
    fireEvent.click(byId(`${HALL}-DIV_SubdivisionHousehold_Header`) as HTMLElement);
    // Every call of the visit is made: the meeting, the contacts and one GetBulkSubdivisions_V2 per hall.
    await waitFor(() => {
      expect(byId(`${HALL}-$b3-0`)).not.toBeNull();
      expect(blockCalls()).toEqual({ meeting: 1, contacts: 1, halls: 3 });
    });
    const households = hallHouseholdIds();
    expect(households.length).toBeGreaterThan(0);
    await act(() => router.navigate('/UBTConnect/HouseholdDetails?HouseholdId=91004'));
    await act(() => router.navigate(-1));
    // The first frame of the restored view: the contacts, the open locality and the open hall with its households.
    expect(byId('b2-b4-b18-b1-0-Block_HostContact')).toHaveTextContent('Martín Herrera');
    expect(container.querySelectorAll('[data-block="Assemble.AssembleEventDetail_Contact"]')).toHaveLength(2);
    expect(byId(`${LOCALITY}-DIV_LocalitySubdivisions_List`)).not.toBeNull();
    expect(hallHouseholdIds()).toEqual(households);
    expect(byId(`${HALL}-$b7-0`)).toBeNull();
    // A call starts in the OnReady effect: let the effects and their promises run before counting (no timer).
    await act(async () => {
      await Promise.resolve();
    });
    expect(blockCalls()).toEqual({ meeting: 1, contacts: 1, halls: 3 });
  });

  it('a locality closed when the user left: opened after the back navigation, its halls load as on a new visit', async () => {
    const m = meetingOf('1210', '1');
    const { router } = renderScreen();
    await act(() => router.navigate(urlOf(m)));
    await waitFor(() => {
      expect(byId(`${LOCALITY}-DIV_Locality_Header`)).not.toBeNull();
    });
    await act(() => router.navigate('/UBTConnect/HouseholdDetails?HouseholdId=91004'));
    await act(() => router.navigate(-1));
    expect(byId(`${LOCALITY}-DIV_LocalitySubdivisions_List`)).toBeNull();
    fireEvent.click(byId(`${LOCALITY}-DIV_Locality_Header`) as HTMLElement);
    fireEvent.click(byId(`${HALL}-DIV_SubdivisionHousehold_Header`) as HTMLElement);
    await waitFor(() => {
      expect(byId(`${HALL}-$b3-0`)).not.toBeNull();
      expect(calls('ActionGetBulkSubdivisions_V2')).toBe(3);
    });
  });

  it('the ids of the TST capture (the capture plan) answer the online prayer meeting of the world', async () => {
    // migration/capture-plan.json AssembleDetail: EventId, SeriesId and Start of the capture of 2026-11-06.
    const { container, router } = renderScreen();
    await act(() =>
      router.navigate(
        `${PATH}?Start=2026-11-06T07%3A00%3A00.000Z&EventId=58dbb5ab-047e-469d-9558-2f8967a7ec41&SeriesId=888d1cfc-697a-4d0e-88bc-2c5a3e3f898d`,
      ),
    );
    await waitFor(() => {
      expect(byId('b2-b4-b14-Header')).toHaveTextContent('Host Locality');
    });
    // The card of a virtual meeting without link, the title from the meeting type, no interchange locality, no GMS
    // contact, no note (the captured structure).
    expect(title(container)).toBe('Prayer Meeting');
    expect(
      container
        .querySelector('[data-block="NewConnect_Utilities.NC_Card_Item_Visual"] img[data-image]')
        ?.getAttribute('src'),
    ).toContain('VirtualMeeting.svg');
    expect(container.querySelector('[data-block="Assemble.AssembleCommon_VirtualMeetingURL"]')).toHaveTextContent(
      'Link is not available, refer to local signal chat',
    );
    expect(byId('b2-b4-b15-Header')).toBeNull();
    expect(byId('b2-b4-Section_GSMContacts')?.children).toHaveLength(0);
    expect(byId('b2-MeetingNotes')).toHaveTextContent('Your notes will appear here.');
    expect(byId('b2-Menu')).toBeNull();
  });

  it('mock scenario notfound: "Meeting not found"', async () => {
    sessionStorage.setItem('mock:mock', 'notfound');
    const { container, router } = renderScreen();
    await act(() => router.navigate(urlOf(meetingOf('1210', '2'))));
    await waitFor(() => {
      expect(container.querySelector('[data-block="Assemble.AssembleEventDetail__Error"]')).not.toBeNull();
    });
    expect(byId('b2-b4-b1-DIV_CustomErrorScreen')).toHaveTextContent('Meeting not found');
    expect(title(container)).toBe('Assemble');
  });
});
