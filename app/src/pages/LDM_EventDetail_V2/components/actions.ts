import type { DetailGuestItem } from '@/api/event';
import { Connect_Subscription_Plan } from '@/lib/ubtConnect/staticEntities';
import { getUserInformation } from '@/platform/session/userInfo';

/* Client actions and JavaScript nodes the route's blocks call (runtime-sources/Connect2_OrbitMobile_MUI.controller.js
   = C, analysis/sources/pretty/*.mvc.js). The ones LDM_MyEvents_V2 calls too are shared (CR-LDM_EventDetail_V2-1):
   flipHouseholdName (src/lib/legacyShared), getLocalityName, addAuditEvent_LDM and
   getCurrentTimeInMill (src/lib/orbit), generateScreenURL (src/shell/navigation). */

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** GetOrdinalEnding_Integer(In_Number, False) (C:4260-4350): "" for 0, else "st" / "nd" / "rd" by the last digit,
    "th" for 11-13 and the other digits. */
export function getOrdinalEnding(n: number): string {
  if (n === 0) return '';
  const lastTwo = n % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return 'th';
  const last = n % 10;
  return last === 1 ? 'st' : last === 2 ? 'nd' : last === 3 ? 'rd' : 'th';
}

/** FormatDateForEventBanner(TextToDate(EventDate)) (C:1638-1660): FormatDateTime(date, "d" + ordinal + " MMMM yyyy"),
    e.g. "13th July 2026"; "" when the text has no date. */
export function formatDateForEventBanner(eventDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(eventDate);
  if (!match) return '';
  const [, y, m, d] = match;
  const day = Number(d);
  return `${String(day)}${getOrdinalEnding(day)} ${MONTHS[Number(m) - 1] ?? ''} ${y ?? ''}`;
}

/** IsFreeSubscriptionPlan (UBTConnect_Utils.controller.js :4178-4221): Cache_UserInfo_Get, then the user's
    SubscriptionType = Free. */
export async function isFreeSubscriptionPlan(): Promise<boolean> {
  const user = (await getUserInformation()).Directory_UserCurrent;
  return user.Directory_UserCurrent_Subscription.SubscriptionType === Connect_Subscription_Plan.Free;
}

/** IsRegionalSubscriptionPlan (UBTConnect_Utils.controller.js :4281-4324): Cache_UserInfo_Get, then the user's
    SubscriptionType = Regional. */
export async function isRegionalSubscriptionPlan(): Promise<boolean> {
  const user = (await getUserInformation()).Directory_UserCurrent;
  return user.Directory_UserCurrent_Subscription.SubscriptionType === Connect_Subscription_Plan.Regional;
}

/** HouseholdCarouselServerItem (Connect2_OrbitMobile_MUI): one household of the carousel list. */
interface HouseholdCarouselServerItem {
  Id: string;
  Name: string;
  HouseholdListIndex: number;
}

/** HouseholdCarouselPreloading (Connect2_LegacyShared) as SetPreloadObject keeps it. */
interface HouseholdCarouselPreloading {
  IsPreloaded: boolean;
  PreloadedCarouselItems: {
    Id: string;
    Name: string;
    Bucket: string;
    Path: string;
    Type: string;
    HouseholdListIndex: number;
  }[];
  IsFromMyUpdateFeed: boolean;
}

/** The outputs of CarouselFilteredEventResults, and the object that it gives to SetPreloadObject (null: none). */
interface CarouselFilteredEventResults {
  householdIdList: HouseholdCarouselServerItem[];
  numberFilteredToCurrent: number;
  numberFiltered: number;
  preloading: HouseholdCarouselPreloading | null;
}

/** CarouselFilteredEventResults(In_Guests, In_IsLimitedSubscription, In_CurrentListValue) (C:879-985):
    - Out_HouseholdIdList: the guests with HouseholdDisplay; with a limited subscription also without RecordDisabled.
      Each item has the HouseholderID and HouseholderName (HouseholdListIndex 0).
    - NumberFilteredToCurrent: the guests before In_CurrentListValue that the list leaves out; NumberFiltered: all of
      them.
    - With a limited subscription and no guest left, the action ends there: empty outputs and no preload object.
    - Else SetPreloadObject(HouseholdCarouselPreloading: IsPreloaded True, PreloadedCarouselItems = the list). */
export function carouselFilteredEventResults(
  guests: readonly DetailGuestItem[],
  isLimitedSubscription: boolean,
  currentListValue: number,
): CarouselFilteredEventResults {
  const displayed = guests.filter((g) => g.HouseholdDisplay);
  const kept = isLimitedSubscription ? displayed.filter((g) => !g.RecordDisabled) : displayed;
  if (isLimitedSubscription && kept.length === 0)
    return { householdIdList: [], numberFilteredToCurrent: 0, numberFiltered: 0, preloading: null };
  const numberFilteredToCurrent = guests.filter(
    (g, row) => row < currentListValue && (!g.HouseholdDisplay || (isLimitedSubscription && g.RecordDisabled)),
  ).length;
  const householdIdList = kept.map((g) => ({ Id: g.HouseholderID, Name: g.HouseholderName, HouseholdListIndex: 0 }));
  return {
    householdIdList,
    numberFilteredToCurrent,
    numberFiltered: guests.length - kept.length,
    preloading: {
      IsPreloaded: true,
      PreloadedCarouselItems: householdIdList.map((p) => ({ ...p, Bucket: '', Path: '', Type: '' })),
      IsFromMyUpdateFeed: false,
    },
  };
}
