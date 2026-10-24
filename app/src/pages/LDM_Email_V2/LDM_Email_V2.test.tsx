import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { delay, http } from 'msw';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LDM_PAST_EVENTS, ldmEventDay, ldmEventName } from '@/mocks/fictional/ldm';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { freshPage, recordBodies } from '@/test/testSupport';
import LDM_Email_V2 from './LDM_Email_V2Page';
import { sentEventContactEmails } from './mocks';

/* The page in the app frame on a memory router, with the MSW mocks of the test setup: the fictional LDM world
   (src/mocks/fictional/ldm.ts) answers the coordinator of the meal, and EventContact goes to an in-memory collection. */
const PATH = '/UBTConnect/LDM_Email_V2';
const HOME = '/UBTConnect/HomeFeed';
const OTHER = '/UBTConnect/Other';
const GET = 'Connect2_OrbitMobile_MUI/ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails';
const routes = {
  [HOME]: <p>home</p>,
  [PATH]: <LDM_Email_V2 />,
  [OTHER]: <p>other</p>,
};
const MEAL = LDM_PAST_EVENTS[0];
if (!MEAL) throw new Error('no LDM meal');
const QUERY = `?EventHostId=${MEAL.eventHostId}&In_EventId=${MEAL.eventId}&In_IsContactOrganiser=True&EventDate=2026-10-03&EventLocality=Bahia%20Blanca`;
const fetchCalls = () => (window.__osCalls ?? []).filter((c) => c.action === 'DataActionGetCoordinatorDetails').length;
const open = async (query = QUERY) => {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
  appManager_SetCachedUserInfo({ FirstName: 'Julián', LastName: 'Vitale', Email: 'julian.vitale@example.test' });
});
afterEach(() => {
  setSignedInUser(null);
});

describe('LDM_Email_V2 page', () => {
  it('loads the coordinator of the meal with the screen inputs: To, the Subject "<meal> - <date>"', async () => {
    const bodies = recordBodies(GET);
    const { container } = await open();
    expect(screen.getByText('Contact Event Coordinator')).toBeInTheDocument();
    expect(container.querySelector('[data-block="LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2"]')?.id).toBe('$b1');
    await waitFor(() => {
      expect(container.querySelector('#b1-Input_To')).toHaveValue('Gustavo Ríos');
    });
    expect(container.querySelector('#b1-Input_From')).toHaveValue('julian.vitale@example.test');
    expect(container.querySelector('#b1-TextArea_Subject')).toHaveValue(`${ldmEventName(MEAL)} - ${ldmEventDay(MEAL)}`);
    expect(fetchCalls()).toBe(1);
    expect(bodies[0]).toEqual({
      In_EventHostId: MEAL.eventHostId,
      In_EventId: MEAL.eventId,
      In_IsMessageGuest: false,
      In_IsContactOrganiser: true,
      EventDate: '2026-10-03',
      EventLocality: 'Bahia Blanca',
    });
  });

  it('an unknown meal: "No Event Organiser information."', async () => {
    await open('?EventHostId=1&In_EventId=2');
    expect(await screen.findByText('No Event Organiser information.')).toBeInTheDocument();
  });

  it('Submit sends EventContact to the coordinator, goes back and shows the message after 500 ms', async () => {
    const { container, at } = await open();
    await waitFor(() => {
      expect(container.querySelector('#b1-ContactOrganiser_Form')).not.toBeNull();
    });
    fireEvent.change(container.querySelector('#b1-TextArea_Message') as Element, {
      target: { value: 'We will bring dessert.' },
    });
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });
    await waitFor(() => {
      expect(at()).toBe(HOME);
    });
    expect(sentEventContactEmails().all()).toEqual([
      expect.objectContaining({
        Message: 'We will bring dessert.',
        ContactMember: 'Gustavo Ríos',
        EmailFrom: 'julian.vitale@example.test',
        LastNameSender: 'Vitale',
      }),
    ]);
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Your message has been sent.');
    });
  });

  it('a back navigation starts from the defaults and fetches again (no block state is kept)', async () => {
    const { container, router } = await open();
    await waitFor(() => {
      expect(container.querySelector('#b1-Input_From')).not.toHaveValue('');
    });
    await act(() => router.navigate(OTHER));
    expect(screen.getByText('other')).toBeInTheDocument();
    server.use(http.post(`/api/${GET}`, () => delay('infinite')));
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(fetchCalls()).toBe(2);
    });
    expect(container.querySelector('#b1-MarkReadLoading')).not.toBeNull();
  });

  it('after a back navigation, a failed refresh and Try again, the From field is empty as on a new visit', async () => {
    const { container, router } = await open();
    await waitFor(() => {
      expect(container.querySelector('#b1-Input_From')).not.toHaveValue('');
    });
    await act(() => router.navigate(OTHER));
    server.use(http.post(`/api/${GET}`, () => new Response(null, { status: 500 }), { once: true }));
    await act(() => router.navigate(-1));
    const tryAgain = await screen.findByRole('button', { name: /try again/i });
    act(() => {
      fireEvent.click(tryAgain);
    });
    await waitFor(() => {
      expect(container.querySelector('#b1-Input_To')).toHaveValue('Gustavo Ríos');
    });
    // TryAgain does not assign UserInfo; a restored block state would still show the sender.
    expect(container.querySelector('#b1-Input_From')).toHaveValue('');
  });

  it('another EventHostId or In_EventId mounts a new block, which fetches again', async () => {
    const { container, router } = await open();
    await waitFor(() => {
      expect(container.querySelector('#b1-ContactOrganiser_Form')).not.toBeNull();
    });
    const second = LDM_PAST_EVENTS[1];
    if (!second) throw new Error('no second meal');
    await act(() =>
      router.navigate(`${PATH}?EventHostId=${second.eventHostId}&In_EventId=${second.eventId}`, { replace: true }),
    );
    await waitFor(() => {
      expect(container.querySelector('#b1-TextArea_Subject')).toHaveValue(
        `${ldmEventName(second)} - ${ldmEventDay(second)}`,
      );
    });
    expect(fetchCalls()).toBe(2);
  });
});
