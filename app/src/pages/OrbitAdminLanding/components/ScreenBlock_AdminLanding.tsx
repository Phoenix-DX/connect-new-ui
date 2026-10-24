// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding
import { useEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitEventCard } from '@/components/orbit/OrbitEventCard';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { Event_Screen } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getAdminEventsList } from '@/pages/OrbitAdminLanding/api';
import type { AdminEventItem, AdminLandingVariablesWire } from '@/pages/OrbitAdminLanding/types';
import { onApplicationEvent_ClickEvent } from './actions';
import { MenuAction_Menu } from './staticEntities';

/** Long Integer null identifier (Long Integers stay text). */
const NULL_ID = '0';

/** Block variables (SB model :26-51) and the fetch state of Get_AdminEventsList the view reads. */
interface Model {
  isFetchingData: boolean;
  eventsSummary: AdminEventItem[];
  userFirstName: string;
  userMemberId: string;
  /** Get_AdminEventsList.IsDataFetched. */
  isDataFetched: boolean;
}

const INITIAL_MODEL: Model = {
  isFetchingData: false,
  eventsSummary: [],
  userFirstName: '',
  userMemberId: NULL_ID,
  isDataFetched: false,
};

/** The block variables the data action sends (screenData.variables, see AdminLandingVariablesWire). */
const variablesOf = (m: Model): AdminLandingVariablesWire => ({
  IsFetchingData: m.isFetchingData,
  UserFirstName: m.userFirstName,
  UserMemberId: m.userMemberId,
});

/** TextToLongIntegerValidate(MemberId) ? TextToLongInteger(MemberId) : NullIdentifier() (SB ctrl :546). */
const textToLongIntegerOrNull = (value: string): string =>
  /^\s*-?\d+\s*$/.test(value) ? String(BigInt(value)) : NULL_ID;

const NO_ADMIN_EVENT_MESSAGE =
  'There are no events currently where QR scanning is required. If you have any questions, please contact your regional Orbit helpdesk.';

export interface ScreenBlock_AdminLandingProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Event NavigateTo_EventDetail(EventId, EventName, EventStartDate, EventEndDate, EventLocation, EventTypeFriendly). */
  onNavigateToEventDetail: (
    eventId: string,
    eventName: string,
    eventStartDate: string,
    eventEndDate: string,
    eventLocation: string,
    eventTypeFriendly: string,
  ) => Promise<void> | void;
}

/** Orbit admin landing (SB = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow
    .ScreenBlock_AdminLanding.mvc.js; view :170-425, controller :445-680). Layout_Orbit with the back MenuIcon, the
    Orbit flag title, the admin's first name (HeaderContent, :226-258), then the admin events: the OrbitLanding
    skeleton while fetching, the Card_Event list, or NoInformation_Orbit (Content, :260-388).
    The data action is on demand: OnReady (:507-570) → nothing for a view restored from the cache (P-BACK); else
    IsFetchingData True, UserFirstName / UserMemberId from the cached user info, Refresh_GetEventsByMemberId →
    Get_AdminEventsList → OnAfterFetch (:643-662): EventsSummary = Response, IsFetchingData False. */
export function ScreenBlock_AdminLanding({ id, bottomBar, onNavigateToEventDetail }: ScreenBlock_AdminLandingProps) {
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** Refresh_GetEventsByMemberId (:476-506): Get_AdminEventsList, then OnAfterFetch_Get_AdminEventsList (:643-662). */
  const refreshGetEventsByMemberId = async () => {
    const events = await getAdminEventsList(variablesOf(m()));
    set({ isDataFetched: true });
    set({ eventsSummary: events, isFetchingData: false });
  };

  /* OnReady (:507-570): WasCurrentViewRestoredFromCache → nothing; else IsFetchingData True, AppManager_GetCachedUserInfo,
     UserFirstName = its FirstName, UserMemberId = its MemberId as a Long Integer (else the null identifier), then
     Refresh_GetEventsByMemberId. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    void (async () => {
      try {
        set({ isFetchingData: true });
        const userInformation = appManager_GetCachedUserInfo();
        set({
          userFirstName: userInformation.FirstName,
          userMemberId: textToLongIntegerOrNull(userInformation.MemberId),
        });
        await refreshGetEventsByMemberId();
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnHandle_EventCardClicked (:579-642): trigger NavigateTo_EventDetail with the event's id, title, dates, location
      and the row's TypeFriendly, then OnApplicationEvent_ClickEvent with the event (AuditPayload_ClickEventRec). */
  const onHandleEventCardClicked = async (eventSummary: Event_Screen, inEventFriendlyType: string) => {
    const eventInfo = eventSummary.EventInfo ?? {};
    await onNavigateToEventDetail(
      eventSummary.EventId ?? NULL_ID,
      eventSummary.Title ?? '',
      eventInfo.StartEventDate ?? '',
      eventInfo.EndEventDate ?? '',
      eventInfo.EventLocation ?? '',
      inEventFriendlyType,
    );
    onApplicationEvent_ClickEvent({
      EventId: eventSummary.EventId ?? NULL_ID,
      EventTitle: eventSummary.Title ?? '',
      EventLocation: eventInfo.EventLocation ?? '',
      EventStartDate: eventInfo.StartEventDate ?? '',
      EventEndDate: eventInfo.EndEventDate ?? '',
    });
  };

  const s = state;
  const prefix = id.replace('$', '');

  /* Content (:260-388): If not fetching → (If fetched and not fetching → the card list or NoInformation_Orbit), else
     the OrbitLanding skeleton. */
  const content = s.isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.OrbitLanding} />
  ) : !s.isDataFetched ? null : s.eventsSummary.length > 0 ? (
    <OSList
      className="list list-group orbit-card-list"
      animateItems
      disableVirtualization
      source={s.eventsSummary}
      keyOf={(p, i) => `${p.event.EventId ?? ''}-${String(i)}`}
    >
      {(p, i) => (
        <div className="orbit-card-list-cont" data-container="">
          <OrbitEventCard
            id={`${prefix}-l1-7_${String(i)}-$b3`}
            inEventSummary={p.event}
            onClickedEvent={(eventSummary) => {
              void onHandleEventCardClicked(eventSummary, p.typeFriendly).catch(raiseToFlowHandler);
            }}
          />
        </div>
      )}
    </OSList>
  ) : (
    <OrbitNoInformation id={`${prefix}-$b4`} message={NO_ADMIN_EVENT_MESSAGE} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MenuAction_Menu} />}
        title={<i className="icon menu-icon-Orbit fa fa-flag fa-1x" data-icon="" />}
        headerContent={
          <div className="orbit-admin-header-cont" data-container="">
            <div className="orbit-admin-header-text-cont" data-container="">
              <span className="orbit-admin-header-text" data-expression="">
                {s.userFirstName}
              </span>
            </div>
          </div>
        }
        content={content}
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
