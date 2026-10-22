// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { Accordion_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/Accordion_Orbit';
import { Card_MemberInformation } from '../../../shared/Connect2_OrbitMobile_MUI/Card_MemberInformation';
import { ContactHelpdesk_Footer } from '../../../shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer';
import { MilestoneHeader } from '../../../shared/Connect2_OrbitMobile_MUI/MilestoneHeader';
import { NoInformation_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '../../../shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { checkDirectoryAccess, getFormattedDateTime } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import { DirectoryAPIFilter } from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { DEPRECATED_AccordionItem } from '../../../shared/osui/DEPRECATED_AccordionItem';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getCacheableSignedImageURL, getGuestArrangements } from '../api';
import type {
  GuestArrangementsData,
  GuestArrangementsVariablesWire,
  MealDetailItem,
  MilestoneTransportItem,
  SpecialNeed,
  SpecialNeedsItem,
} from '../types';
import {
  getContactHelpdeskSubject_Milestone,
  getSkeletonLoadingIdFromMilestoneTypeId,
  onApplicationEvent_ViewHousehold,
} from './actions';

/* ScreenBlock_GuestArrangements (SB = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
   ScreenBlock_GuestArrangements.mvc.js: model :1-182, view :183-1415, controller :1416-1780). No capture: markup from
   the compiled view (Container = div[data-container] with its Style Classes, or the extended `class` that replaces
   them; Expression = span[data-expression] with its Style Classes; Icon = i[data-icon] "<style> fa fa-flag fa-1x";
   OutSystemsReactWidgets.js). Containers with Animate (SB :515, :690, …) render plain, as in the other Orbit routes. */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB :284). */
const MENU_ACTION_AUTO = 'Auto';

/** GetGuestArrangements_ScreenRec default (SB :35-37). */
const EMPTY_DATA: GuestArrangementsData = {
  MemberId: '0',
  Title: '',
  FirstName: '',
  LastName: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  SpecialNeeds: [],
  ArrivalDetails: [],
  MealDetails: [],
  DepartureDetails: [],
};

/** Block variables (SB model :25-60) and the data action state the view reads. */
interface Model {
  guestArrangementsData: GuestArrangementsData;
  isFetchingData: boolean;
  /** GetGuestArrangements.IsDataFetched. */
  isDataFetched: boolean;
  /** GetGuestArrangements.HasData. */
  hasData: boolean;
}

const INITIAL_MODEL: Model = {
  guestArrangementsData: EMPTY_DATA,
  isFetchingData: false,
  isDataFetched: false,
  hasData: false,
};

export interface ScreenBlock_GuestArrangementsProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  In_MemberId: string;
  In_EventId: string;
  In_HostId: string;
  In_MilestoneId: string;
  In_PreloadEventName: string;
  In_PreloadMilestoneName: string;
  In_OrbitMilestoneTypeId: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event ContactHelpdesk(Subject, EventName). */
  onContactHelpdesk: (subject: string, eventName: string) => void;
}

/** An icon of the platform Icon widget (icon "flag", size 1x) with its Style Classes. */
const FlagIcon = ({ style }: { style: string }) => <i className={`${style} fa fa-flag fa-1x`} data-icon="" />;

/** The class of a row of the Arrival / Meal / Departure lists (SB :671-674, :921-924, :1113-1116): padding top m for
    the first row, base otherwise; padding bottom m for the last row, base with a bottom border otherwise. */
const rowClass = (index: number, length: number): string =>
  `full-width padding-x-m${index === 0 ? ' padding-top-m' : ' padding-top-base'}${
    index === length - 1 ? ' padding-bottom-m' : ' padding-bottom-base border-bottom-neutral-4'
  }`;

/** The text of a special need (SB :556-560): Type, then ": " + Notes when both are set, else Notes. */
const specialNeedText = (n: SpecialNeed): string =>
  `${n.Type}${n.Type !== '' && n.Notes !== '' ? `: ${n.Notes}` : n.Notes}`;

/** Guest arrangements of a visiting member (SB view :238-1412). Layout_Orbit (CustomClass "orbit-detail", SB :253)
    with the Auto MenuIcon and the MilestoneHeader of the preloaded names (SB :304-322). Content (SB :332-1336): the
    skeleton of the milestone type while fetching; once fetched, with data (HasData) the member's name and an accordion
    per non-empty list (Special Need/s, Arrival Details, Meal Details, Departure Details), without data
    NoInformation_Orbit. BottomBar: ContactHelpdesk_Footer when HasData (SB :1340-1366). After the layout: the legacy
    access-restricted dialog FreeSubscriptionAlert (SB :1398-1408). OnReady (SB :1466-1520): a view restored from the
    cache does nothing (P-BACK); else RefreshData (SB :1549-1582): IsFetchingData True, GetGuestArrangements →
    OnAfterFetch_GetGuestArrangements (SB :1521-1548): GuestArrangementsData = Response, IsFetchingData False. */
export function ScreenBlock_GuestArrangements(props: ScreenBlock_GuestArrangementsProps) {
  const {
    id,
    In_MemberId,
    In_EventId,
    In_HostId,
    In_MilestoneId,
    In_PreloadEventName,
    In_PreloadMilestoneName,
    In_OrbitMilestoneTypeId,
  } = props;
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

  /** The block variables the data action sends (screenData.variables, see GuestArrangementsVariablesWire). */
  const variables = (): GuestArrangementsVariablesWire => ({
    IsFetchingData: m().isFetchingData,
    In_MemberId,
    In_EventId,
    In_HostId,
    In_MilestoneId,
    In_PreloadEventName,
    In_PreloadMilestoneName,
    In_OrbitMilestoneTypeId,
  });

  /* OnReady (SB :1466-1520). Run before paint, as OnReady runs when the block mounts. */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    // RefreshData (SB :1549-1582)
    set({ isFetchingData: true });
    void (async () => {
      try {
        const result = await getGuestArrangements(variables());
        // OnAfterFetch_GetGuestArrangements (SB :1521-1548)
        set({ isDataFetched: true, hasData: result.HasData, guestArrangementsData: result.Response });
        set({ isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnHandle_ClickedMember(HouseholdId, Type = DirectoryAPIFilter.Member) (SB :1614-1700, view :495-498):
      CheckDirectoryAccess; with access NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold; without it
      App_Subscription_ShowUpgradePopUp. */
  const onHandleClickedMember = (householdId: string) => {
    void (async () => {
      try {
        const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
        if (hasAccess) {
          props.onNavigateToHouseholdDetail(householdId);
          onApplicationEvent_ViewHousehold(householdId, In_MilestoneId, In_EventId);
        } else {
          await showUpgradePopUp();
        }
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
  };

  /** OnHandle_ContactHelpdesk (SB :1583-1613): ContactHelpdesk(GetContactHelpdeskSubject_Milestone(
      In_OrbitMilestoneTypeId, In_PreloadEventName, In_PreloadMilestoneName, EventDetails.StartDate,
      EventDetails.Location), In_PreloadMilestoneName) — the milestone name as EventName, as compiled. */
  const onHandleContactHelpdesk = () => {
    const e = m().guestArrangementsData.EventDetails;
    props.onContactHelpdesk(
      getContactHelpdeskSubject_Milestone(
        In_OrbitMilestoneTypeId,
        In_PreloadEventName,
        In_PreloadMilestoneName,
        e.StartDate,
        e.Location,
      ),
      In_PreloadMilestoneName,
    );
  };

  const s = state;
  const data = s.guestArrangementsData;
  const prefix = id.replace('$', '');

  /** One accordion section (SB :397-628 and the three after it): Accordion_Orbit with default inputs and one expanded
      DEPRECATED_AccordionItem ("orbit-accordion-item", no padding) titled `title`. */
  const section = (accordion: number, title: string, content: ReactNode) => (
    <Accordion_Orbit id={`${prefix}-$b${String(accordion)}`}>
      <DEPRECATED_AccordionItem
        id={`${prefix}-$b${String(accordion + 1)}`}
        isExpanded
        usePadding={false}
        extendedClass="orbit-accordion-item"
        title={<span data-expression="">{title}</span>}
        content={content}
      />
    </Accordion_Orbit>
  );

  /** A member with special needs (SB :445-610): Card_MemberInformation (no location, no personal info, no dot) and,
      in Placeholder_Info, the list of needs when it is not empty (SB :511-602). */
  const specialNeedsRow = (item: SpecialNeedsItem, index: number) => (
    <Card_MemberInformation
      id={`${prefix}-l2_${String(index)}-$b6`}
      inHouseholderId={item.HouseholderId}
      inHideMemberInfoLocation
      isShowPersonalInfo={false}
      inDisplayDot={false}
      inMemberInformation={{
        HouseholderId: item.HouseholderId,
        MemberId: item.MemberId,
        FirstName: item.FirstName,
        LastName: item.LastName,
        Title: item.Title,
        IsHouseholder: false,
        SignedPhotoURL: item.SignedPhotoURL,
      }}
      getSignedImageURL={getCacheableSignedImageURL}
      onClickedMember={onHandleClickedMember}
      placeholderInfo={
        item.SpecialNeeds.length > 0 && (
          <div className="full-width" data-container="">
            <OSList
              className="list list-group orbit-member-list"
              animateItems
              disableVirtualization
              source={item.SpecialNeeds}
              keyOf={(n: SpecialNeed, k) => `${n.Category}-${n.Type}-${String(k)}`}
            >
              {(n) => (
                <div className="full width text-neutral-6 margin-top-xs" data-container="">
                  <span data-expression="">{specialNeedText(n)}</span>
                </div>
              )}
            </OSList>
          </div>
        )
      }
    />
  );

  /** An arrival (SB :666-834) or departure (SB :1108-1276) row. Arrival: the date row is visible when the start is set
      but shows the end; the travel-identifier row is visible when the arrival location is set. Departure: the date row
      is visible when the end is set but shows the start; the rows read the departure location and icon. Both as
      compiled. */
  const transportRow = (t: MilestoneTransportItem, index: number, length: number, arrival: boolean) => {
    const mt = t.MilestoneTransport;
    const info = mt.MilestoneInfo;
    const visibleDate = arrival ? info.MilestoneStartDateTime : info.MilestoneEndDateTime;
    const shownDate = arrival ? info.MilestoneEndDateTime : info.MilestoneStartDateTime;
    const location = arrival ? info.ArrivalLocation : info.DepartureLocation;
    const locationIcon = arrival
      ? t.OrbitMilestoneType.IconTransportArrival
      : t.OrbitMilestoneType.IconTransportDeparture;
    const hasDate = visibleDate !== '';
    const line = 'display-flex align-items-center justify-content-flex-start line-height-1';
    return (
      <div className={rowClass(index, length)} data-container="">
        {hasDate && (
          <div className={line} data-container="">
            <FlagIcon style="icon orbit-icon-date-time text-neutral-10" />
            <span className="margin-left-base text-neutral-7" data-expression="">
              {getFormattedDateTime(shownDate, true, true, false, true, true, false)}
            </span>
          </div>
        )}
        {location !== '' && (
          <div className={`${line}${hasDate ? ' margin-top-base' : ''}`} data-container="">
            <FlagIcon style="icon text-neutral-10 orbit-icon-license-plate" />
            <span className="margin-left-base text-neutral-7" data-expression="">
              {mt.TravelIdentifier !== '' ? mt.TravelIdentifier : 'Not available'}
            </span>
          </div>
        )}
        {location !== '' && (
          <div
            className={`${line}${hasDate || mt.TravelIdentifier !== '' ? ' margin-top-base' : ''}`}
            data-container=""
          >
            <FlagIcon style={`icon text-neutral-10 ${locationIcon}`} />
            <span className="margin-left-base text-neutral-7" data-expression="">
              {location}
            </span>
          </div>
        )}
        {mt.Notes !== '' && (
          <div
            className={`display-flex align-items-baseline justify-content-flex-start line-height-1${
              hasDate || location !== '' || mt.TravelIdentifier !== '' ? ' margin-top-base' : ''
            }`}
            data-container=""
          >
            <FlagIcon style="icon orbit-icon-arrangements text-neutral-10" />
            <span className="margin-left-base text-neutral-7 align-self-center" data-expression="">
              {mt.Notes}
            </span>
          </div>
        )}
      </div>
    );
  };

  /** A meal day (SB :916-1024): the date (weekday, no time) when set, then "Midday Meal: " and "Evening Meal: ". */
  const mealRow = (meal: MealDetailItem, index: number, length: number) => {
    const hasDate = meal.MilestoneDateTime !== '';
    return (
      <div className={rowClass(index, length)} data-container="">
        {hasDate && (
          <div
            className="display-flex align-items-center justify-content-flex-start line-height-1 text-neutral-10"
            data-container=""
          >
            <FlagIcon style="icon orbit-icon-date-time" />
            <span className="margin-left-base" data-expression="">
              {getFormattedDateTime(meal.MilestoneDateTime, false, true, false, false, true, false)}
            </span>
          </div>
        )}
        <div className={`text-align-left line-height-1${hasDate ? ' margin-top-base' : ''}`} data-container="">
          <span className="text-neutral-7" data-expression="">
            {`Midday Meal: ${meal.MiddayMeal}`}
          </span>
        </div>
        <div
          className={`text-align-left line-height-1${hasDate || meal.MiddayMeal !== '' ? ' margin-top-base' : ''}`}
          data-container=""
        >
          <span className="text-neutral-7" data-expression="">
            {`Evening Meal: ${meal.EveningMeal}`}
          </span>
        </div>
      </div>
    );
  };

  /** The arrangements (SB :336-1283). */
  const arrangements = (
    <div className="full-width margin-top-m" data-container="">
      <div className="full-width padding-x-m margin-bottom-m display-flex flex-direction-column" data-container="">
        <div className="full-width bold color-orbit-primary-7" data-container="">
          <span data-expression="">{`${data.Title} ${data.FirstName} ${data.LastName}`}</span>
        </div>
      </div>
      {data.SpecialNeeds.length > 0 &&
        section(
          4,
          'Special Need/s',
          <OSList
            className="list list-group orbit-household-list"
            animateItems
            disableVirtualization
            source={data.SpecialNeeds}
            keyOf={(item: SpecialNeedsItem) => item.MemberId}
          >
            {specialNeedsRow}
          </OSList>,
        )}
      {data.ArrivalDetails.length > 0 &&
        section(
          7,
          'Arrival Details',
          <OSList
            className="list list-group"
            animateItems
            disableVirtualization
            source={data.ArrivalDetails}
            keyOf={(t: MilestoneTransportItem, i) => `${String(t.MilestoneTransport.SequenceNo)}-${String(i)}`}
          >
            {(t, i) => transportRow(t, i, data.ArrivalDetails.length, true)}
          </OSList>,
        )}
      {data.MealDetails.length > 0 &&
        section(
          9,
          'Meal Details',
          <OSList
            className="list list-group"
            animateItems
            disableVirtualization
            source={data.MealDetails}
            keyOf={(meal: MealDetailItem, i) => `${meal.MilestoneDateTime}-${String(i)}`}
          >
            {(meal, i) => mealRow(meal, i, data.MealDetails.length)}
          </OSList>,
        )}
      {data.DepartureDetails.length > 0 &&
        section(
          11,
          'Departure Details',
          <OSList
            className="list list-group"
            animateItems
            disableVirtualization
            source={data.DepartureDetails}
            keyOf={(t: MilestoneTransportItem, i) => `${String(t.MilestoneTransport.SequenceNo)}-${String(i)}`}
          >
            {(t, i) => transportRow(t, i, data.DepartureDetails.length, false)}
          </OSList>,
        )}
    </div>
  );

  const content: ReactNode = s.isFetchingData ? (
    <Skeleton_Loading
      id={`${prefix}-$b14`}
      inSkeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId)}
    />
  ) : s.isDataFetched ? (
    s.hasData ? (
      arrangements
    ) : (
      <NoInformation_Orbit
        id={`${prefix}-$b13`}
        message="No guest arrangement data has been found. Please check again later or contact the Orbit Helpdesk if you have any questions."
      />
    )
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_GuestArrangements" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <MilestoneHeader
            id={`${prefix}-$b3`}
            inEventName={In_PreloadEventName}
            inMilestoneName={In_PreloadMilestoneName}
            inOrbitMilestoneTypeId={In_OrbitMilestoneTypeId}
          />
        }
        content={content}
        bottomBar={
          s.hasData ? <ContactHelpdesk_Footer id={`${prefix}-$b15`} onClick={onHandleContactHelpdesk} /> : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <Dialog_AccessRestrictedAction_Legacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b16`} />
    </OSBlock>
  );
}
