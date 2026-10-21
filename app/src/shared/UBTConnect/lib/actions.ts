import type { CacheControl_UserInformation } from '../../UBTConnect_Utils/lib/structures';
import type {
  Filter_Common_Control_List,
  HeaderList,
  LookupSections,
  UI_HouseholdMember,
  UI_Screen_SubdivisionDetails,
  UI_SubdivisionHousehold,
} from './structures';
import { callAction } from '../../../lib/api';
import { MOCKS_BUILT } from '../../../lib/config';
import { log } from '../../../lib/log';
import { osList } from '../../../lib/os-wire';
import { scenario } from '../../../mocks/scenario';
import { getClientVar, setClientVar } from '../../../shell/session';
import { getUserInformation } from '../../../shell/userInfo';
import { SystemException, UserException, isInstanceOf } from '../../../lib/os-exceptions';
import {
  BookmarkCategory,
  Connect_Entity,
  MyBookmarks_Group,
  MyBookmarks_ObjectType,
  NoteCategory2,
  Photobook_Speed,
  Type_CarouselItemSwipeAction,
  Type_ShareObject,
  Connect_Subscription_Plan,
  UBT_Icons2,
} from './staticEntities';
import { getLookupConcepts, setLookupLabel_MaybeLowercase } from '../../UBTConnectLibrary/lib/actions';
import { jSUtils_String_Split } from '../../UBTJavaScriptUtils/lib/actions';
import { setCarouselStartingPosition } from '../../osui/lib/actions';
import { bookmark_SendFeedbackMessage } from '../../UBTConnect_Utils/lib/actions';
import {
  create_LocalBookmark,
  delete_LocalBookmarkByBookmarkId,
  getLocalBookmarkByObjectId,
} from '../../../shell/localEntities';
import type {
  CarouselPreloadedHouseholds,
  CarouselSwipeCallbackParametersItem,
  Updates_CarouselSwipeCallbackParameters,
  UI_Household_Card,
  UI_Household_Card_Content,
  UI_Screen_HouseholdDetails,
} from './structures';
import type { ActionsMenuOptions as HouseholdActionsMenuOptions } from '../../UBTConnectLibrary/lib/structures';
import type { UI_LocalityStatistics } from '../../Connect_Geography_CS/lib/structures';
import { markerJSON } from '../../Leaflet/lib/json';
import type { MarkerWithWindow } from '../../Leaflet/lib/structures';

/** Outputs of Get_IsUnsupportedVersion. */
export interface IsUnsupportedVersion {
  Out_IsUnsupportedAppVersion: boolean;
  Out_IsUnsupportedWebViewVersion: boolean;
  Out_IsUnsupportedBrowserVersion: boolean;
}

/** Mock scenario that shows the unsupported-browser card (decision U16): `?mock=unsupported-browser`. */
export const UNSUPPORTED_BROWSER_SCENARIO = 'unsupported-browser';

/** Get_IsUnsupportedVersion (UnsupportedVersion_Wrapper OnInitialize): native app, WebView or browser version below
    the minimum versions of the app settings (spec section 9 "Unsupported version", UC:4531-4589, 17351-17368). TST
    has no minimum versions (shell-observed U2), so every output is False; decision U16 builds the Browser variant as a
    mock scenario only, switched on by `?mock=unsupported-browser` (mock builds only: MOCKS_BUILT drops it from production). */
export function get_IsUnsupportedVersion(): IsUnsupportedVersion {
  return {
    Out_IsUnsupportedAppVersion: false,
    Out_IsUnsupportedWebViewVersion: false,
    Out_IsUnsupportedBrowserVersion: MOCKS_BUILT && scenario() === UNSUPPORTED_BROWSER_SCENARIO,
  };
}

/** Get_IsUnsupportedSystem (UC:4518-4545): Out_IsUnsupportedSystem = unsupported app version or
    unsupported browser version of Get_IsUnsupportedVersion (the WebView version is not included). */
export function get_IsUnsupportedSystem(): boolean {
  const v = get_IsUnsupportedVersion();
  return v.Out_IsUnsupportedAppVersion || v.Out_IsUnsupportedBrowserVersion;
}

/** Set_InitialClientVariables (UC:16008-16027): PhotobookCarousel_SelectedSpeed =
    Photobook_Speed.EightSeconds (8000, migration/knowledge/static-entities.md). */
export function set_InitialClientVariables(): void {
  setClientVar('UBTConnect.PhotobookCarousel_SelectedSpeed', Photobook_Speed.EightSeconds);
}

/** Client DateTime as the shell keeps it (`YYYY-MM-DDTHH:mm:ss`). */
const currDateTime = () => new Date().toISOString().slice(0, 19);
/** DiffMinutes(from, to): whole minutes between two client DateTimes. */
const diffMinutes = (from: string, to: string) => Math.trunc((Date.parse(`${to}Z`) - Date.parse(`${from}Z`)) / 60000);

/** Directory_Updates_RefreshBottomBarCount (UBTConnect.controller.js): when the last check is older than
    Directory_Updates_UnreadCount_CheckFrequency_Minut minutes (or ForceRefresh), Get_UI_UpdateItems_UnreadCount_All
    sets Directory_Updates_UnreadCount and the check time. */
export async function directory_Updates_RefreshBottomBarCount(forceRefresh = false): Promise<void> {
  const lastCheck = getClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck');
  const frequency = getClientVar('UBTConnect.Directory_Updates_UnreadCount_CheckFrequency_Minut');
  if (!(diffMinutes(lastCheck, currDateTime()) >= frequency || forceRefresh)) return;
  const out = await callAction('UBTConnect', 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All', {});
  setClientVar('UBTConnect.Directory_Updates_UnreadCount', out.UnreadCount);
  setClientVar('UBTConnect.Directory_Updates_UnreadCount_LastCheck', currDateTime());
}

/** ScrollTop (ScrollTopJS node): scrolls the container to the top; a missing container is only logged. */
export function scrollTop(scrollContainer: string, behaviour: ScrollBehavior): void {
  const container = document.querySelector(scrollContainer);
  if (container === null) {
    log.warn('Unable to scroll top');
    return;
  }
  container.scroll({ top: 0, behavior: behaviour });
}

/** JSON Serialize(Updates_CarouselSwipeCallbackParameters) with its defaults (runtime-sources/OutSystems.js JSONUtils
    serializeToJSON(record, false, false) → JSONConverter.to: an attribute equal to its default is left out, then
    JSON.stringify). UpdateItemId is a Long Integer: written as a JSON number. */
function serializeSwipeCallbackParameters(p: Updates_CarouselSwipeCallbackParameters | undefined): string {
  const id = p?.UpdateItemId ?? '';
  return id === '' || id === '0' ? '{}' : `{"UpdateItemId":${id}}`;
}

/**
 * Directory_Updates_GetCarouselPreloadedHouseholds(In_ParametersList) (UBTConnect.controller.js:1828-1925, copy in
 * migration/screens/HomeFeed/analysis/sources/raw/): for each item, in order (:1843-1880), a read item gets an empty
 * swipe callback (ActionId NullTextIdentifier, Parameters "", :1849-1856); an unread one gets UpdatesCarousel_SetIsRead
 * with its Updates_CarouselSwipeCallbackParameters as JSON (:1858-1866); ListAppend {Household = HouseholdId,
 * SwipeAction} (:1869-1875); Out_CarouselPreloadedHouseholds (:1884). Records are values: each appended item keeps its
 * own SwipeAction.
 */
export function directory_Updates_GetCarouselPreloadedHouseholds(
  in_ParametersList: CarouselSwipeCallbackParametersItem[],
): CarouselPreloadedHouseholds {
  const CarouselHouseholdItem = in_ParametersList.map((item) => ({
    Household: item.HouseholdId ?? '0',
    SwipeAction: item.IsRead
      ? { ActionId: '', Parameters: '' }
      : {
          ActionId: Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead,
          Parameters: serializeSwipeCallbackParameters(item.Updates_CarouselSwipeCallbackParameters),
        },
  }));
  return { CarouselHouseholdItem };
}

/* ---- Wave 3C ---- */
/** GetUserInformation_Wrapper_Assign (UC:13675-13690): App_Policies_HasPolicyToAccept = UserInformation.HasPoliciesToAccept. */
export function getUserInformation_Wrapper_Assign(userInformation: CacheControl_UserInformation): void {
  setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', userInformation.HasPoliciesToAccept);
}

const sameId = (a = '', b = '') => a.trim().toUpperCase() === b.trim().toUpperCase();

/** App_CommonFilter_DefineOptionNames (UC:271-300): Formatted = OptionList_Control with SelectedNames rebuilt: for each
    SelectedIds item, the DisplayText of the first In_Options item with the same Id (trimmed, upper case), when not "". */
export function app_CommonFilter_DefineOptionNames(
  optionList_Control: Filter_Common_Control_List,
): Filter_Common_Control_List {
  const options = optionList_Control.In_Options ?? [];
  const SelectedNames: string[] = [];
  for (const id of optionList_Control.SelectedIds ?? []) {
    const text = options.find((p) => sameId(p.Id, id))?.DisplayText ?? '';
    if (text !== '') SelectedNames.push(text);
  }
  return { ...optionList_Control, SelectedNames };
}

/** App_CommonFilter_CheckCountry (UC:189-230): IsEnabled = some SubscribedCountries item has the same Code as CountryCode
    (trimmed, upper case). */
export function app_CommonFilter_CheckCountry(countryCode: string, subscribedCountries: { Code?: string }[]): boolean {
  return subscribedCountries.some((c) => sameId(c.Code, countryCode));
}

/* ---- Wave 4B (SupperMeeting_ImageCard_Content_Statistics) ---- */
/** GetDescriptor_BretherenCount (UBTConnect.controller.js:8537): "Brethren: " + count. */
export function getDescriptor_BretherenCount(in_BretherenCount: number): string {
  return `${getLookupConcepts(false).Brethren.Plural}: ${String(in_BretherenCount)}`;
}

/** GetDescriptor_Subdivision_HouseholdCount (UBTConnect.controller.js:8813): "Households: " + count. */
export function getDescriptor_Subdivision_HouseholdCount(in_HouseholdCount: number): string {
  return `${getLookupConcepts(false).Household.Plural}: ${String(in_HouseholdCount)}`;
}

/** Get_NoteCategoryId_ByEntityTypeId(EntityTypeId) (UBTConnect.controller.js:6403-6489, copy in
    migration/screens/SupperMeeting_Details/analysis/sources/raw/): the note category of each entity type; any other
    type raises InvalidAction "Notes not available". */
export function get_NoteCategoryId_ByEntityTypeId(entityTypeId: string): string {
  switch (entityTypeId) {
    case Connect_Entity.Member:
      return NoteCategory2.Member;
    case Connect_Entity.Locality:
      return NoteCategory2.Locality;
    case Connect_Entity.Household:
      return NoteCategory2.Household;
    case Connect_Entity.Interchange:
      return NoteCategory2.Interchange;
    case Connect_Entity.SupperMeetings_aka_Subdivisions:
      return NoteCategory2.SupperMeeting;
    case Connect_Entity.OneSchoolGlobal:
      return NoteCategory2.OneSchoolGlobal;
    case Connect_Entity.FeedItem:
      return NoteCategory2.FeedItem;
    default:
      throw new UserException('Notes not available', 'UBTConnect.InvalidAction');
  }
}

/** GetShareType_FromEntity(EntityType, In_IsMyHousehold) (UBTConnect.controller.js:11087-, same copy): Locality and
    Interchange → Locality, Household → Household (My Household when In_IsMyHousehold), Supper Meetings → Supper
    Meeting, OneSchool Global, Feed Item → Feed; Member and any other type raise InvalidAction "Share not available". */
export function getShareType_FromEntity(entityType: string, isMyHousehold = false): string {
  switch (entityType) {
    case Connect_Entity.Locality:
    case Connect_Entity.Interchange:
      return Type_ShareObject.Locality;
    case Connect_Entity.Household:
      return isMyHousehold ? Type_ShareObject.MyHousehold : Type_ShareObject.Household;
    case Connect_Entity.SupperMeetings_aka_Subdivisions:
      return Type_ShareObject.SupperMeeting;
    case Connect_Entity.OneSchoolGlobal:
      return Type_ShareObject.OneSchoolGlobal;
    case Connect_Entity.FeedItem:
      return Type_ShareObject.Feed;
    default:
      throw new UserException('Share not available', 'UBTConnect.InvalidAction');
  }
}

/** GetNameAndSurname_ByFullName(In_FullName) (UBTConnect.controller.js:10027-10070, BookmarksByGroup copy):
    JSUtils_String_Split(In_FullName, " ") (:10044, UBTJavaScriptUtils); Out_Surname = the last part (:10047-10048);
    Out_Name = Out_Name + " " + each earlier part (:10056-10057, so it starts with a space). */
export function getNameAndSurname_ByFullName(fullName: string): { Out_Name: string; Out_Surname: string } {
  const list = jSUtils_String_Split(fullName, ' ');
  let name = '';
  list.forEach((part, row) => {
    name += row < list.length - 1 ? ` ${part}` : '';
  });
  return { Out_Name: name, Out_Surname: list[list.length - 1] ?? '' };
}

/* ---- Wave 4 foundation (CR-W4A-1, bookmarks). UC = UBTConnect.controller.js, BookmarksByGroup copy. ---- */

/** GetBookmarkCategoryId_ByEntityTypeId(EntityType) (UC:7152-7266): the C2 bookmark category of an entity type; Member
    and any other type raise InvalidAction "Bookmarks not available" (the second Interchange branch is unreachable). */
export function getBookmarkCategoryId_ByEntityTypeId(entityType: string): string {
  switch (entityType) {
    case Connect_Entity.Locality:
      return BookmarkCategory.Locality;
    case Connect_Entity.Household:
      return BookmarkCategory.Household;
    case Connect_Entity.Interchange:
      return BookmarkCategory.Interchange;
    case Connect_Entity.SupperMeetings_aka_Subdivisions:
      return BookmarkCategory.SupperMeeting;
    case Connect_Entity.OneSchoolGlobal:
      return BookmarkCategory.OneSchoolGlobal;
    default:
      throw new UserException('Bookmarks not available', 'UBTConnect.InvalidAction');
  }
}

/** GetBookmarkType_FromEntity(EntityType) (UC:7410-7540): the legacy bookmark type and group; Member and any other type
    raise InvalidAction "Bookmarks not available". */
export function getBookmarkType_FromEntity(entityType: string): { BookmarkType: string; BookmarkGroup: string } {
  switch (entityType) {
    case Connect_Entity.Locality:
    case Connect_Entity.Interchange:
      return { BookmarkType: MyBookmarks_ObjectType.Locality, BookmarkGroup: MyBookmarks_Group.Locations };
    case Connect_Entity.Household:
      return { BookmarkType: MyBookmarks_ObjectType.Contact, BookmarkGroup: MyBookmarks_Group.Contacts };
    case Connect_Entity.SupperMeetings_aka_Subdivisions:
      return { BookmarkType: MyBookmarks_ObjectType.Subdivision, BookmarkGroup: MyBookmarks_Group.Locations };
    case Connect_Entity.OneSchoolGlobal:
      return { BookmarkType: MyBookmarks_ObjectType.OneSchoolGlobal, BookmarkGroup: MyBookmarks_Group.Entities };
    default:
      throw new UserException('Bookmarks not available', 'UBTConnect.InvalidAction');
  }
}

/** The two server actions of ToggleBookmarkItem_C2. */
export interface BookmarkServerActions {
  /** ServiceAPIAddBookmark2(In_BookmarkCategoryId, In_ItemId as text) (UC:18251-18286): Success, Bookmark_Added
      (Connect_Bookmarks_CS UI_Bookmark_Added; Id and DateCreatedUtc are used). */
  addBookmark2(
    in_BookmarkCategoryId: string,
    in_ItemId: string,
  ): Promise<{ Success: boolean; Bookmark_Added: { Id: string; DateCreatedUtc: string } }>;
  /** ServiceAPIDeleteBookmarkByBookmarkId2(BookmarkId) (UC:18312-18336): Success. */
  deleteBookmarkByBookmarkId2(bookmarkId: string): Promise<{ Success: boolean }>;
}

/** The two server actions through the API contract (migration/contract/extra-actions.json, CR-W4A-1):
    `screenservices/UBTConnect/ServiceAPIAddBookmark2` and `…/ServiceAPIDeleteBookmarkByBookmarkId2`; mocks in
    `../Directory_EntityDetailsActions/mocks.ts`. Typed nullable so callers keep their guard. */
export const bookmarkServerActions: BookmarkServerActions | null = {
  addBookmark2: (in_BookmarkCategoryId, in_ItemId) =>
    callAction('UBTConnect', 'ServiceAPIAddBookmark2', {
      In_BookmarkCategoryId: in_BookmarkCategoryId,
      In_ItemId: in_ItemId,
    }),
  deleteBookmarkByBookmarkId2: (bookmarkId) =>
    callAction('UBTConnect', 'ServiceAPIDeleteBookmarkByBookmarkId2', { BookmarkId: bookmarkId }),
};

/** ToggleBookmarkItem_C2(In_ItemId, In_BookmarkType, IsBookmarked_C2) (UC:17105-17280):
    - bookmarked: GetLocalBookmarkByObjectId(In_ItemId) → DeleteBookmarkByBookmarkId2(its BookmarkId); on Success
      Delete_LocalBookmarkByBookmarkId and Bookmark_SendFeedbackMessage(not IsBookmarked_C2, False), else the error
      message;
    - not bookmarked: AddBookmark2(In_BookmarkType, LongIntegerToText(In_ItemId)); on Success Create_LocalBookmark(
      In_ItemId, In_BookmarkType, Bookmark_Added.Id, Bookmark_Added.DateCreatedUtc) and the success message, else the
      error message;
    - AllExceptions (not system): the error message, then the action ends normally; system exceptions are raised.
    Its outputs Out_LocalBookmarkId and Out_CreatedBookmarkId are never assigned (their defaults, "0"). */
export async function toggleBookmarkItem_C2(
  in_ItemId: string,
  in_BookmarkType: string,
  isBookmarked_C2: boolean,
  server: BookmarkServerActions,
): Promise<{ Out_LocalBookmarkId: string; Out_CreatedBookmarkId: string }> {
  const out = { Out_LocalBookmarkId: '0', Out_CreatedBookmarkId: '0' };
  try {
    if (isBookmarked_C2) {
      const local = await getLocalBookmarkByObjectId(in_ItemId);
      const deleted = await server.deleteBookmarkByBookmarkId2(local.BookmarkId);
      if (deleted.Success) {
        await delete_LocalBookmarkByBookmarkId(local.BookmarkId);
        bookmark_SendFeedbackMessage(!isBookmarked_C2, false);
      } else {
        bookmark_SendFeedbackMessage(!isBookmarked_C2, true);
      }
    } else {
      const added = await server.addBookmark2(in_BookmarkType, in_ItemId);
      if (added.Success) {
        await create_LocalBookmark(
          in_ItemId,
          in_BookmarkType,
          added.Bookmark_Added.Id,
          added.Bookmark_Added.DateCreatedUtc,
        );
        bookmark_SendFeedbackMessage(!isBookmarked_C2, false);
      } else {
        bookmark_SendFeedbackMessage(!isBookmarked_C2, true);
      }
    }
  } catch (ex) {
    if (isInstanceOf(ex, SystemException)) throw ex;
    bookmark_SendFeedbackMessage(!isBookmarked_C2, true);
  }
  return out;
}

/* ---- Wave 4C (household details and supper meeting blocks). UC = UBTConnect.controller.js (raw copy of the screen
   named in each comment). ---- */

/** Get_LookupSection (UC BookmarksByGroup :5992-6062): Actions / Households labels (SetLookupLabel_MaybeLowercase) and
    the OneSchoolStatistitics item ("Show student numbers", School icon). */
export function get_LookupSection(in_IsLowercase = false): Required<LookupSections> {
  const item = (singular: string, plural: string) => ({
    Singular: setLookupLabel_MaybeLowercase(singular, in_IsLowercase),
    Plural: setLookupLabel_MaybeLowercase(plural, in_IsLowercase),
  });
  return {
    Actions: item('Action', 'Actions'),
    Households: item('Household', 'Households'),
    OneSchoolStatistitics: {
      Singular: 'Show student numbers',
      Plural: 'Show student numbers',
      Icon: UBT_Icons2.School,
    },
  };
}

/** GetDescriptor_Subdivision_GenderSplit (UC SupperMeeting_Carousel :8744): In_BrothersCount + " " +
    GetLookupConcepts(False).Brother.Plural + " & " + In_SistersCount + " " + GetLookupConcepts(False).Sister.Plural. */
export function getDescriptor_Subdivision_GenderSplit(in_BrothersCount: number, in_SistersCount: number): string {
  const lookup = getLookupConcepts(false);
  return `${String(in_BrothersCount)} ${lookup.Brother.Plural} & ${String(in_SistersCount)} ${lookup.Sister.Plural}`;
}

/** GetSkeleton_UI_SubdivisionHousehold (UC HouseholdCarousel :12406): the placeholder row of the loading list. */
export function getSkeleton_UI_SubdivisionHousehold(): UI_SubdivisionHousehold {
  return { HouseholdName: 'John & Jane Smith', ChildrenNames: 'Jack' };
}

/** GetSkeletonList_UI_SubdivisionHousehold (UC SupperMeeting_Carousel :12992): ListLength skeleton rows (ListAppend,
    ListLength - 1 until none is left). */
export function getSkeletonList_UI_SubdivisionHousehold(in_ListLength: number): UI_SubdivisionHousehold[] {
  return Array.from({ length: Math.max(0, in_ListLength) }, getSkeleton_UI_SubdivisionHousehold);
}

/** GetSkeleton_UI_HouseholdMember (UC HouseholdCarousel :11776): FirstName / LastName "Example", Initials "MM" (the
    action also fills a UI_LocalityStatistics it does not return). The output is a new UI_HouseholdMemberRec, so it
    keeps the structure defaults; the only one not empty is HasNavigation = True (Connect_Household_CS.model.js,
    UI_HouseholdMemberRec), which shows the chevron column on the skeleton rows. */
export function getSkeleton_UI_HouseholdMember(): UI_HouseholdMember {
  return { FirstName: 'Example', LastName: 'Example', Initials: 'MM', HasNavigation: true };
}

/** GetSkeletonList_UI_HouseholdMembers (UC HouseholdCarousel :12642): ListLength skeleton members. */
export function getSkeletonList_UI_HouseholdMembers(in_ListLength: number): UI_HouseholdMember[] {
  return Array.from({ length: Math.max(0, in_ListLength) }, getSkeleton_UI_HouseholdMember);
}

/** GetSkeleton_UI_SubdivisionDetails (UC SupperMeeting_Carousel :12348): GetSkeleton_UI_SubdivisionCard (content of
    GetSkeleton_UI_SubdivisionCardContent, UC HouseholdCarousel :12289) and GetSkeleton_SubdivisionActions (:11353). */
export function getSkeleton_UI_SubdivisionDetails(): UI_Screen_SubdivisionDetails {
  return {
    Subdivision_Card: {
      Subdivision_Card_Content: {
        Name: 'Subdivision Name Example',
        BretherenCount: 10,
        HouseholdCount: 10,
        BrothersCount: 10,
        SistersCount: 10,
        Address: 'Subdivision Formatted Address Example',
      },
    },
    Subdivision_Actions: { HasBookmark: true, HasNotes: true, HasShare: true },
  };
}

/** IsStringEquals (UC HouseholdCarousel): both strings ToLower unless In_IsCaseSensitive, then Trim = Trim. */
export function isStringEquals(in_FirstString: string, in_SecondString: string, in_IsCaseSensitive: boolean): boolean {
  const first = in_IsCaseSensitive ? in_FirstString : in_FirstString.toLowerCase();
  const second = in_IsCaseSensitive ? in_SecondString : in_SecondString.toLowerCase();
  return first.trim() === second.trim();
}

/** HasAccessToRegion (UC HouseholdCarousel :13942-14075): both targets ToLower, Cache_UserInfo_Get (shell
    getUserInformation), then by subscription plan: Global → True; Regional or AdvancePlus → False for an empty
    country, else a subscribed country with that name or code (ToLower); Free → with no locality ("" or "0") the
    user's country name or code (IsStringEquals, not case sensitive), else the user's locality name or id; any other
    plan → False. */
export async function hasAccessToRegion(
  target_LocalityNameOrId: string,
  target_CountryNameOrCode: string,
): Promise<boolean> {
  const locality = target_LocalityNameOrId.toLowerCase();
  const country = target_CountryNameOrCode.toLowerCase();
  const user = (await getUserInformation()).Directory_UserCurrent;
  const plan = user.Directory_UserCurrent_Subscription.SubscriptionType;
  const geography = user.Directory_UserCurrent_Geography;
  if (plan === Connect_Subscription_Plan.Global) return true;
  if (plan === Connect_Subscription_Plan.Regional || plan === Connect_Subscription_Plan.AdvancePlus) {
    if (country === '') return false;
    return osList(user.Directory_UserCurrent_Subscription.SubscribedCountries).some(
      (p) => p.Name.toLowerCase() === country || p.Code.toLowerCase() === country,
    );
  }
  if (plan === Connect_Subscription_Plan.Free) {
    if (locality === '0' || locality === '') {
      const byName = isStringEquals(country, geography.Country_Name, false);
      return isStringEquals(country, geography.Country_Code, false) || byName;
    }
    return geography.Locality_Name.toLowerCase() === locality || geography.Locality_Id.toLowerCase() === locality;
  }
  return false;
}

/* ---- Wave 4E (HouseholdDetails_Block) ---- */
/** GetSkeleton_UI_HouseholdCardContent (UC HouseholdCarousel :11648): the fixed skeleton texts (DisplayOptions, LocalityId
    and SupperMeetingId keep their defaults). */
export function getSkeleton_UI_HouseholdCardContent(): UI_Household_Card_Content {
  return {
    Name: 'Example & Example',
    FamilyNames: 'Example, Example, Example, Example',
    Address: 'testing address testing addres NSW 2000',
    LocalityName: 'Example',
    CountryName: 'Example',
    SupperMeetingName: 'Example Example Example',
    TimezoneName: 'EAST',
    Surname: 'Example',
    TimezoneOffset: 12,
  };
}

/** GetSkeleton_UI_HouseholdCard (UC HouseholdCarousel :11584): Id 1, content of GetSkeleton_UI_HouseholdCardContent. */
export function getSkeleton_UI_HouseholdCard(): UI_Household_Card {
  return { Id: '1', Household_Card_Content: getSkeleton_UI_HouseholdCardContent() };
}

/** GetSkeleton_HouseholdActions (UC HouseholdCarousel :11220): HasBookmark, HasNotes, HasGift and HasShare True. */
export function getSkeleton_HouseholdActions(): HouseholdActionsMenuOptions {
  return { HasBookmark: true, HasNotes: true, HasGift: true, HasShare: true };
}

/** GetSkeleton_UI_HouseholdDetails (UC HouseholdCarousel :11716): HouseholdCard = GetSkeleton_UI_HouseholdCard,
    Household_Actions = GetSkeleton_HouseholdActions. */
export function getSkeleton_UI_HouseholdDetails(): UI_Screen_HouseholdDetails {
  return { HouseholdCard: getSkeleton_UI_HouseholdCard(), Household_Actions: getSkeleton_HouseholdActions() };
}

/* ---- Directory map screens (CR-CountryDetails-1, CR-BrowseDirectory-1): CountryDetails, BrowseDirectory. ---- */
/** GetLocalityLabel (UC BrowseCountries :9475-9539, :9491): Out_Label = In_LocalityName + ", " + In_CountryName. */
export function getLocalityLabel(in_LocalityName: string, in_CountryName: string): string {
  return `${in_LocalityName}, ${in_CountryName}`;
}

/** GetSkeleton_UI_LocalityStatistics (UC BrowseCountries :11824-11901): Statistics.Title "Adelaide", Subtitle "New South
    Wales" and five Statistics rows (ListAppendAll); every other attribute keeps its default (LocalityId "0", …). */
export function getSkeleton_UI_LocalityStatistics(): UI_LocalityStatistics {
  return {
    Statistics: {
      Title: 'Adelaide',
      Subtitle: 'New South Wales',
      Statistics: [
        { Name: 'Supper Meetings', Value: '83' },
        { Name: 'Bretheren', Value: '15868' },
        { Name: 'Households', Value: '4652' },
        { Name: 'Brothers', Value: '7934' },
        { Name: 'Sisters', Value: '7934' },
      ],
    },
  };
}

/** GetSkeletonList_UI_LocalityStatistics(ListLength = 4) (UC BrowseCountries :12708-12775): while ListLength > 0,
    ListAppend(GetSkeleton_UI_LocalityStatistics) and ListLength - 1. */
export function getSkeletonList_UI_LocalityStatistics(listLength = 4): UI_LocalityStatistics[] {
  return Array.from({ length: Math.max(0, listLength) }, getSkeleton_UI_LocalityStatistics);
}

/** Directory_BrowseByCountry_TooltipBuilder(MarkerWithTooltip, LinkOnClickAction) (UC BrowseCountries :1370-1460, JSON
    Serialize with Serialize Default Values False :1390, JavaScript1 :1461-1481): a div holding a link (href "#") whose
    text is Marker.ExtraData; a click prevents the default and the propagation and calls LinkOnClickAction(Marker.Id).
    Out: Object. A "" member is absent from the JSON: an empty text, and an Id the screen's action proxy (its
    LinkOnClickAction, e.g. CountryDetails.mvc.js:2296-2297) cannot convert. */
export function directory_BrowseByCountry_TooltipBuilder(
  markerWithTooltip: MarkerWithWindow,
  linkOnClickAction: (id: string) => unknown,
): HTMLElement {
  const marker = markerJSON(markerWithTooltip.Marker, false);
  const container = document.createElement('div');
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = marker.ExtraData ?? null; // `textContent = undefined` empties it too
  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (marker.Id === undefined)
      throw new TypeError(
        'Cannot assign a JavaScript undefined with value undefined to an output parameter of type Text',
      );
    linkOnClickAction(marker.Id);
  });
  container.appendChild(link);
  return container;
}

/* ---- Wave 4E (EntitiesCarousel family) ---- */
/** Get_CurrentEntityHeader (UC HouseholdCarousel :4174-4256): with In_IsSingleHeader the label of the list's Current
    record (the first; "" for an empty list); otherwise the label of the first record whose Index is
    In_CurrentHouseholdIndex (ListIndexOf), "" when there is none. */
export function get_CurrentEntityHeader(
  in_CurrentHouseholdIndex: number,
  in_HouseholdCarouselHeaderList: readonly HeaderList[],
  in_IsSingleHeader: boolean,
): string {
  if (in_IsSingleHeader) return in_HouseholdCarouselHeaderList[0]?.Label ?? '';
  const position = in_HouseholdCarouselHeaderList.findIndex((p) => (p.Index ?? 0) === in_CurrentHouseholdIndex);
  return position !== -1 ? (in_HouseholdCarouselHeaderList[position]?.Label ?? '') : '';
}

/** Get_IsInsideRenderBuffer (UC HouseholdCarousel :4445-4470): Abs(In_Index_CurrentElement - In_Index_ActiveElement)
    <= In_RenderBuffer. */
export function get_IsInsideRenderBuffer(
  in_RenderBuffer: number,
  in_Index_CurrentElement: number,
  in_Index_ActiveElement: number,
): boolean {
  return Math.abs(in_Index_CurrentElement - in_Index_ActiveElement) <= in_RenderBuffer;
}

/** Carousel_SetCurrentPosition(In_CarouselWidgetId, In_Position) (UBTConnect.controller.js:908-, copy in
    migration/screens/SupperMeeting_Carousel/analysis/sources/raw/; SetCurrentPositionJS): writes the Carousel's
    StartingPosition config, so a later redraw keeps the current slide. A failure is only logged (the JS catch). */
export function carousel_SetCurrentPosition(in_CarouselWidgetId: string, in_Position: number): void {
  try {
    setCarouselStartingPosition(in_CarouselWidgetId, in_Position);
  } catch (error) {
    log.error('An error occurred while updating the carousel:', error);
  }
}
