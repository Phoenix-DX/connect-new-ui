import type { ReactNode } from 'react';
import type {
  GuestArrangementsData,
  MealDetailItem,
  MilestoneTransportItem,
  SpecialNeed,
  SpecialNeedsItem,
} from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { MemberInformationCard } from '@/components/orbit/MemberInformationCard';
import { MilestoneHeader } from '@/components/orbit/MilestoneHeader';
import { OrbitAccordion } from '@/components/orbit/OrbitAccordion';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { getFormattedDateTime, type GetCacheableSignedImageURL } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { DEPRECATED_AccordionItem } from '@/shared/osui/DEPRECATED_AccordionItem';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';

/** The view of the guest arrangements of a visiting member, props only. Layout_Orbit (CustomClass "orbit-detail")
    with the Auto MenuIcon and the MilestoneHeader of the preloaded names. Content: the skeleton of the milestone type
    while IsFetchingData; once GetGuestArrangements is fetched, with data (HasData) the member's name and one accordion
    per non-empty list (Special Need/s, Arrival Details, Meal Details, Departure Details), without data
    NoInformation_Orbit. BottomBar: ContactHelpdesk_Footer when HasData. After the layout: the legacy access-restricted
    dialog FreeSubscriptionAlert. No capture: the markup comes from the compiled view (Container = div[data-container]
    with its Style Classes; Expression = span[data-expression]; Icon = i[data-icon] "<style> fa fa-flag fa-1x").
    Containers with Animate render plain, as in the other Orbit routes. The flows are in `useGuestArrangements`.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction that the block passes to MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

const NO_INFORMATION =
  'No guest arrangement data has been found. Please check again later or contact the Orbit Helpdesk if you have any questions.';

export interface GuestArrangementsViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** In_PreloadEventName: the event name of the header. */
  preloadEventName: string;
  /** In_PreloadMilestoneName: the milestone name of the header. */
  preloadMilestoneName: string;
  /** In_OrbitMilestoneTypeId: the icon of the header. */
  orbitMilestoneTypeId: string;
  /** GetSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId): the skeleton. */
  skeletonLoadingId: number;
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** GetGuestArrangements.IsDataFetched. */
  isDataFetched: boolean;
  /** GetGuestArrangements.HasData: the arrangements and the helpdesk footer show. */
  hasData: boolean;
  /** GuestArrangementsData. */
  guestArrangements: GuestArrangementsData;
  /** The server call GetCacheableSignedImageURL that the member cards make for their photo. */
  getSignedImageURL: GetCacheableSignedImageURL;
  /** The ClickedMember event of a member card (OnHandle_ClickedMember). */
  onClickedMember: (householdId: string) => void;
  /** The ContactHelpdesk_Footer button (OnHandle_ContactHelpdesk). */
  onContactHelpdesk: () => void;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

/** An icon of the platform Icon widget (icon "flag", size 1x) with its Style Classes. */
const FlagIcon = ({ style }: { style: string }) => <i className={`${style} fa fa-flag fa-1x`} data-icon="" />;

/** The class of a row of the Arrival, Meal and Departure lists: padding top m for the first row, base otherwise;
    padding bottom m for the last row, base with a bottom border otherwise. */
const rowClass = (index: number, length: number): string =>
  `full-width padding-x-m${index === 0 ? ' padding-top-m' : ' padding-top-base'}${
    index === length - 1 ? ' padding-bottom-m' : ' padding-bottom-base border-bottom-neutral-4'
  }`;

/** The text of a special need: Type, then ": " + Notes when both are set, else Notes. */
const specialNeedText = (n: SpecialNeed): string =>
  `${n.Type}${n.Type !== '' && n.Notes !== '' ? `: ${n.Notes}` : n.Notes}`;

/** The display classes of the rows of an arrival or departure. */
const LINE = 'display-flex align-items-center justify-content-flex-start line-height-1';

/** An arrival or departure row. Arrival: the date row is visible when the start is set but shows the end; the
    travel-identifier row is visible when the arrival location is set. Departure: the date row is visible when the end
    is set but shows the start; the rows read the departure location and icon. Both as compiled. */
function TransportRow({
  transport,
  index,
  length,
  arrival,
}: {
  transport: MilestoneTransportItem;
  index: number;
  length: number;
  arrival: boolean;
}) {
  const mt = transport.MilestoneTransport;
  const info = mt.MilestoneInfo;
  const visibleDate = arrival ? info.MilestoneStartDateTime : info.MilestoneEndDateTime;
  const shownDate = arrival ? info.MilestoneEndDateTime : info.MilestoneStartDateTime;
  const location = arrival ? info.ArrivalLocation : info.DepartureLocation;
  const locationIcon = arrival
    ? transport.OrbitMilestoneType.IconTransportArrival
    : transport.OrbitMilestoneType.IconTransportDeparture;
  const hasDate = visibleDate !== '';
  return (
    <div className={rowClass(index, length)} data-container="">
      {hasDate && (
        <div className={LINE} data-container="">
          <FlagIcon style="icon orbit-icon-date-time text-neutral-10" />
          <span className="margin-left-base text-neutral-7" data-expression="">
            {getFormattedDateTime(shownDate, true, true, false, true, true, false)}
          </span>
        </div>
      )}
      {location !== '' && (
        <div className={`${LINE}${hasDate ? ' margin-top-base' : ''}`} data-container="">
          <FlagIcon style="icon text-neutral-10 orbit-icon-license-plate" />
          <span className="margin-left-base text-neutral-7" data-expression="">
            {mt.TravelIdentifier !== '' ? mt.TravelIdentifier : 'Not available'}
          </span>
        </div>
      )}
      {location !== '' && (
        <div className={`${LINE}${hasDate || mt.TravelIdentifier !== '' ? ' margin-top-base' : ''}`} data-container="">
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
}

/** A meal day: the date (weekday, no time) when set, then "Midday Meal: " and "Evening Meal: ". */
function MealRow({ meal, index, length }: { meal: MealDetailItem; index: number; length: number }) {
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
}

const transportKey = (t: MilestoneTransportItem, i: number) =>
  `${String(t.MilestoneTransport.SequenceNo)}-${String(i)}`;

export function GuestArrangementsView({
  id,
  preloadEventName,
  preloadMilestoneName,
  orbitMilestoneTypeId,
  skeletonLoadingId,
  isFetchingData,
  isDataFetched,
  hasData,
  guestArrangements: data,
  getSignedImageURL,
  onClickedMember,
  onContactHelpdesk,
  menu,
  commonUIElements,
}: GuestArrangementsViewProps) {
  const prefix = id.replace('$', '');

  /** One accordion section: Accordion_Orbit with default inputs and one expanded DEPRECATED_AccordionItem
      ("orbit-accordion-item", no padding) titled `title`. */
  const section = (accordion: number, title: string, content: ReactNode) => (
    <OrbitAccordion id={`${prefix}-$b${String(accordion)}`}>
      <DEPRECATED_AccordionItem
        id={`${prefix}-$b${String(accordion + 1)}`}
        isExpanded
        usePadding={false}
        extendedClass="orbit-accordion-item"
        title={<span data-expression="">{title}</span>}
        content={content}
      />
    </OrbitAccordion>
  );

  /** A member with special needs: Card_MemberInformation (no location, no personal info, no dot) and, in
      Placeholder_Info, the list of needs when it is not empty. */
  const specialNeedsRow = (item: SpecialNeedsItem, index: number) => (
    <MemberInformationCard
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
      getSignedImageURL={getSignedImageURL}
      onClickedMember={onClickedMember}
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
            keyOf={transportKey}
          >
            {(t, i) => <TransportRow transport={t} index={i} length={data.ArrivalDetails.length} arrival />}
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
            {(meal, i) => <MealRow meal={meal} index={i} length={data.MealDetails.length} />}
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
            keyOf={transportKey}
          >
            {(t, i) => <TransportRow transport={t} index={i} length={data.DepartureDetails.length} arrival={false} />}
          </OSList>,
        )}
    </div>
  );

  const content: ReactNode = isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b14`} inSkeletonLoadingId={skeletonLoadingId} />
  ) : isDataFetched ? (
    hasData ? (
      arrangements
    ) : (
      <OrbitNoInformation id={`${prefix}-$b13`} message={NO_INFORMATION} />
    )
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_GuestArrangements" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`}>{menu}</div>}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <MilestoneHeader
            id={`${prefix}-$b3`}
            inEventName={preloadEventName}
            inMilestoneName={preloadMilestoneName}
            inOrbitMilestoneTypeId={orbitMilestoneTypeId}
          />
        }
        content={content}
        bottomBar={hasData ? <ContactHelpdeskFooter id={`${prefix}-$b15`} onClick={onContactHelpdesk} /> : null}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
      <Dialog_AccessRestrictedAction_Legacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b16`} />
    </OSBlock>
  );
}
