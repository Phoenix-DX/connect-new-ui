// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { NoInformation_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '../../../shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { OrbitMilestoneType, OrbitSkeletonLoading } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getGmpMilestoneHost, type GmpMilestoneHostResponse } from '../api';
import type { MilestoneDetailInputs } from '../types';
import { ScreenBlock_AccommodationHost } from './ScreenBlock_AccommodationHost';

/** GetGmpMilestoneHost.Response before the data action answers (record defaults). */
const EMPTY_RESPONSE: GmpMilestoneHostResponse = {
  MilestoneType: '',
  MilestoneTitle: '',
  HostId: '0',
  Status: { Success: false, ErrorMessage: '' },
};

/** Block variables (MW model :30-40) and the data action output the view reads. */
interface Model {
  isFetchingData: boolean;
  userMemberId: string;
  response: GmpMilestoneHostResponse;
}

const INITIAL_MODEL: Model = { isFetchingData: false, userMemberId: '0', response: EMPTY_RESPONSE };

/** OutSystems TextToInteger: 0 for a text that is not an integer. */
const textToInteger = (text: string): string => {
  const n = Number.parseInt(text, 10);
  return Number.isNaN(n) ? '0' : String(n);
};

/* ScreenBlock_MilestoneWrapper (MW = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
   ScreenBlock_MilestoneWrapper.mvc.js: view :245-1110, controller :1110-1708). */

export interface ScreenBlock_MilestoneWrapperProps extends MilestoneDetailInputs {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Placeholders Menu_AccomodationHost / CommonUI_Elements_AccomodationHost (the other types' placeholders are not
      built: Q5). */
  menuAccomodationHost?: ReactNode;
  commonUIElementsAccomodationHost?: ReactNode;
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
  /** Event NavigateTo_GuestArrangements(MemberId, MilestoneTypeId, MilestoneTitle, HostId). */
  onNavigateToGuestArrangements: (
    memberId: string,
    milestoneTypeId: string,
    milestoneTitle: string,
    hostId: string,
  ) => void;
}

/** The milestone detail by type (MW view :257-1100). The view (MW :258-260):
    - from a notification (In_FromNotification) while IsFetchingData: Skeleton_Loading (MilestoneWrapper);
    - else, not from a notification or GetGmpMilestoneHost.Response.Status.Success: the block of the milestone type
      (Response.MilestoneType from a notification, else In_OrbitMilestoneTypeId): meal guest / host / helper →
      ScreenBlock_MealGuest / MealHost / MealHelper; accommodation guest / host / helper →
      ScreenBlock_AccommodationGuest / AccommodationHost / AccommodationHelper; any other type renders nothing. From a
      notification with Success its inputs take HostId, MilestoneTitle and MilestoneType of the answer. Only
      ScreenBlock_AccommodationHost was captured: the other blocks render <NotCaptured> (Q5);
    - else the Failed layout: Layout_Orbit "orbit-detail" titled In_EventName ("Event not found" when empty) with
      NoInformation_Orbit "This Event could not be found. …" (MW :998-1080).
    OnReady (MW :1211-1290): a view restored from the cache does nothing; not from a notification with every optional
    input set (In_HostId, In_OrbitMilestoneTypeId, In_MilestoneName) nothing either; otherwise IsFetchingData,
    UserMemberId = TextToInteger(AppManager_GetCachedUserInfo.MemberId) and DataActionGetGmpMilestoneHost, whose
    OnAfterFetch sets IsFetchingData False (MW :1163-1205). Not from a notification the view keeps the inputs. */
export function ScreenBlock_MilestoneWrapper(props: ScreenBlock_MilestoneWrapperProps) {
  const { id, In_FromNotification } = props;
  const prefix = id.replace('$', '');
  const T = OrbitMilestoneType;

  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  const latest = useRef(state);
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /* OnReady (MW :1211-1290), before paint as OnReady runs when the block mounts. */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    if (
      !In_FromNotification &&
      !(props.In_HostId === '0' || props.In_OrbitMilestoneTypeId === '' || props.In_MilestoneName === '')
    )
      return;
    set({
      isFetchingData: true,
      userMemberId: textToInteger(appManager_GetCachedUserInfo().MemberId),
    });
    void (async () => {
      try {
        const s = latest.current;
        const response = await getGmpMilestoneHost({
          UserMemberId: s.userMemberId,
          IsFetchingData: s.isFetchingData,
          In_FromNotification,
          In_MilestoneId: props.In_MilestoneId,
          In_EventId: props.In_EventId,
          In_HostId: props.In_HostId,
          In_OrbitMilestoneTypeId: props.In_OrbitMilestoneTypeId,
          In_MilestoneName: props.In_MilestoneName,
          In_EventName: props.In_EventName,
        });
        // OnAfterFetch_GetGmpMilestoneHost (MW :1163-1205): IsFetchingData = False
        set({ response, isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const r = state.response;
  const fromAnswer = In_FromNotification && r.Status.Success;
  const typeId = In_FromNotification ? r.MilestoneType : props.In_OrbitMilestoneTypeId;
  const childTypeId = fromAnswer ? r.MilestoneType : props.In_OrbitMilestoneTypeId;
  const childHostId = fromAnswer ? r.HostId : props.In_HostId;
  const childMilestoneName = fromAnswer ? r.MilestoneTitle : props.In_MilestoneName;

  let body: ReactNode = null;
  if (In_FromNotification && state.isFetchingData) {
    body = <Skeleton_Loading id={`${prefix}-$b9`} inSkeletonLoadingId={OrbitSkeletonLoading.MilestoneWrapper} />;
  } else if (In_FromNotification && !r.Status.Success) {
    body = (
      <Layout_Orbit
        id={`${prefix}-$b7`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu_Failed`} />}
        title={<span data-expression="">{props.In_EventName !== '' ? props.In_EventName : 'Event not found'}</span>}
        content={
          <NoInformation_Orbit
            id={`${prefix}-$b8`}
            message="This Event could not be found. Please check again later or contact the Orbit Helpdesk if you have any questions."
          />
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements_Failed`} />}
      />
    );
  } else if (typeId === T.AccommodationHost) {
    body = (
      <ScreenBlock_AccommodationHost
        id={`${prefix}-$b5`}
        In_OrbitMilestoneTypeId={childTypeId}
        In_MilestoneId={props.In_MilestoneId}
        In_PreloadEventName={props.In_EventName}
        In_PreloadMilestoneName={childMilestoneName}
        In_HostId={childHostId}
        In_EventId={props.In_EventId}
        menu={<div id={`${prefix}-Menu_AccomodationHost`}>{props.menuAccomodationHost}</div>}
        commonUIElements={
          <div id={`${prefix}-CommonUI_Elements_AccomodationHost`}>{props.commonUIElementsAccomodationHost}</div>
        }
        onNavigateToGuestArrangements={props.onNavigateToGuestArrangements}
        onNavigateToHouseholdDetail={props.onNavigateToHouseholdDetail}
        onNavigateToContactHelpdesk={props.onNavigateToContactHelpdesk}
      />
    );
  } else if (
    typeId === T.MealGuest ||
    typeId === T.MealHost ||
    typeId === T.MealHelper ||
    typeId === T.AccommodationGuest ||
    typeId === T.AccommodationHelper
  ) {
    body = <NotCaptured name={`ScreenBlock_MilestoneWrapper: milestone type ${typeId} (Q5)`} />;
  }

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper" id={id}>
      {body}
    </OSBlock>
  );
}
