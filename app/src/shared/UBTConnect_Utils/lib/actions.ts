/* Client actions of UBTConnect_Utils used by the shared blocks, ported 1:1 from UBTConnect_Utils.controller.js
   (copy in migration/screens/Login/analysis/sources/raw/). */
import { callAction } from '../../../lib/api';
import { osList, wireList } from '../../../lib/os-wire';
import { isOn } from '../../../lib/flags';
import { log } from '../../../lib/log';
import { feedbackMessageAutoClose, PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { pageRedirect } from '@/platform/feedback/pageRedirect';
import {
  CACHE_TYPE,
  cacheKeyPart,
  getCacheableObjectInBulk,
  getCacheKeyParts,
  type BulkCacheResult,
} from '@/platform/storage/memoryCache';
import { getClientVar } from '@/platform/session/session';
import { jSUtils_PageOpenInNewTab } from '../../UBTJavaScriptUtils/lib/actions';
import { dropdownClose } from '../../osui/lib/actions';
import {
  Connect_BottomBar_Items,
  Connect_Entity,
  Mobile_OperatingSystem,
  NoteActionType,
  UBT_Icons,
} from './staticEntities';
import type { BottomBar_Item, CacheControl_Policies } from './structures';

export interface ConnectVersionDetails {
  Out_RuntimeVersion: number;
  Out_Environment: string;
  Out_NativeVersion: string;
}

/** Get_ConnectVersionDetails (:2273-2320): the server's runtime version (Get_RuntimeVersion), the environment
    (UBT_AppManager AppManager_GetEnvironment = client variable OutSystems_Environment) and the native app version
    (AppVersionPlugin GetVersionNumber, + "." + Build when both are set).
    OutSystems_Environment is kept by the shell from AppManager_SynchAppContext (AppManager_ClientCache.Environment,
    AM:5039; CR-Login-4). GetVersionNumber has no plugin in the browser, so Out_NativeVersion is empty (the TST capture
    of Version shows no native version). */
export async function get_ConnectVersionDetails(): Promise<ConnectVersionDetails> {
  const runtime = await callAction('UBTConnect_Utils', 'ActionGet_RuntimeVersion', {});
  const environment = getClientVar('UBT_AppManager.OutSystems_Environment');
  return { Out_RuntimeVersion: runtime.Out_RuntimeVersion, Out_Environment: environment, Out_NativeVersion: '' };
}

/* Feature-flag helpers (migration/knowledge/feature-flag-helpers.md): HasAccess of the per-user permission check,
   read through lib/flags (decided flags, flags.generated.json). */
/** GetHasNewNotifications: OutSystems_FF C2NewNotifications (D11: bell → Notifications when on, MessageList when off). */
export const getHasNewNotifications = (): boolean => isOn('C2NewNotifications');
/** GetHasNewBookmarks: OutSystems_FF C2NewBookmarks. */
export const getHasNewBookmarks = (): boolean => isOn('C2NewBookmarks');
/** GetHasC1DirectoryView: OutSystems_FF C2EnableC1DirectoryView. */
export const getHasC1DirectoryView = (): boolean => isOn('C2EnableC1DirectoryView');
/** Connect_LaunchDarkly_PermissionCheck(LaunchDarkly_FF record).HasAccess, for the records with a decided flag. */
export const connect_LaunchDarkly_PermissionCheck = (flag: 'mobileDirectoryBookmarkNote'): boolean => isOn(flag);

/** BottomBar_GetList (:153-245): the bottom bar items. The useMapsItems branch (Explore, Bookmarked and, for a
    householder, Settings) has identifiers no capture shows: the caller renders it as NotCaptured, so this returns
    the main list only, in the original order (Home 1, Directory 2, Updates 3, Bookmarks 5, Menu 5). */
export function bottomBar_GetList(): BottomBar_Item[] {
  const I = Connect_BottomBar_Items;
  return [
    { Id: I.Home, Order: 1, Label: I.Home, UBTIcon: UBT_Icons.Home, UBTIconActive: UBT_Icons.HomeFill },
    { Id: I.Directory, Order: 2, Label: I.Directory, UBTIcon: UBT_Icons.Union, UBTIconActive: UBT_Icons.Union },
    { Id: I.Updates, Order: 3, Label: I.Updates, UBTIcon: UBT_Icons.ListAlt, UBTIconActive: UBT_Icons.ListAltFill },
    {
      Id: I.Bookmarks,
      Order: 5,
      Label: I.Bookmarks,
      UBTIcon: UBT_Icons.Contacts,
      UBTIconActive: UBT_Icons.ContactsFill,
    },
    { Id: I.Menu, Order: 5, Label: I.Menu, UBTIcon: UBT_Icons.Widgets, UBTIconActive: UBT_Icons.WidgetsFill },
  ];
}

/** GetEntityType_Icon: the fallback icon of an entity type. FeedItem → UBT_Icons.FeedItem (`connect-icon-feed`, TST
    value, migration/knowledge/static-entities.md "TST values"). */
export function getEntityType_Icon(entityType: string): string {
  const E = Connect_Entity;
  if (entityType === E.Member) return UBT_Icons.PersonFill;
  if (entityType === E.Locality) return UBT_Icons.HomePIn;
  if (entityType === E.Household) return UBT_Icons.Home;
  if (entityType === E.Interchange) return UBT_Icons.PartnerExchange;
  if (entityType === E.SupperMeetings_aka_Subdivisions) return UBT_Icons.HouseFill;
  if (entityType === E.OneSchoolGlobal) return UBT_Icons.SchoolFill;
  if (entityType === E.FeedItem) return UBT_Icons.FeedItem;
  return UBT_Icons.ImageGallery;
}

/** GetImageType_FromEntity: the image Type sent to GetSignedImagesInBulk ("" = no signed image). */
export function getImageType_FromEntity(entityType: string): string {
  const E = Connect_Entity;
  if (entityType === E.Interchange || entityType === E.OneSchoolGlobal) return '';
  if (entityType === E.SupperMeetings_aka_Subdivisions) return 'Subdivision';
  return entityType;
}

/* ---- Wave 2C (CW_CTA_PopUps) ---- */
/** GetHasExtendedShare: OutSystems_FF C2ExtendedShare (migration/knowledge/feature-flag-helpers.md; TST: true). */
export const getHasExtendedShare = (): boolean => isOn('C2ExtendedShare');

/** GetComingSoonMessage (UBTConnect_Utils.controller.js, BookmarksByGroup copy): the fixed text. */
export const getComingSoonMessage = (): string => 'This feature will be available soon';

/** ShowComingSoonMessage: FeedbackMessage_AutoClose("", GetComingSoonMessage, Info, EncodedHTML True, "", 0, False). */
export function showComingSoonMessage(): void {
  feedbackMessageAutoClose({
    title: '',
    message: getComingSoonMessage(),
    messageType: 'info',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
}

/* Wave 2C (CR-W2A-1): signed image URLs through the memory cache. */
const SIGNED_IMAGE_TTL_SECONDS = 300;
const SIGNED_IMAGE_TIMEOUT = 10;
const SIGNED_IMAGE_BULK_SIZE = 15;

/** TextToInteger then IntegerToLongInteger (UBT_LazyImage OnReady, :740): a non-number gives 0. */
export const textToLongInteger = (text: string): string =>
  /^\s*-?\d+\s*$/.test(text) ? String(Number.parseInt(text, 10)) : '0';

/** Cache_SignedImageURL_GetCacheKey (UC:711-745): the cache type of a signed image = Image + the image type. */
export const cache_SignedImageURL_GetCacheKey = (type: string): string => CACHE_TYPE.image + type;

/** Cache_SignedImageURL_GetCallback (UC:767-805), with Cache_SignedImageURL_GetParameters (UC:854-900): one
    GetSignedImagesInBulk call for the waiting keys (Id, Type, Size), one answer per image (key, Error, SignedURL). */
export async function cache_SignedImageURL_GetCallback(cacheKeys: string[]): Promise<BulkCacheResult<string>[]> {
  const parameters = cacheKeys.map((key) => {
    const [Id = '', Type = '', Size = ''] = getCacheKeyParts(key);
    return { Id: textToLongInteger(Id), Type, Size };
  });
  const out = await callAction('UBTConnect_Utils', 'ActionGetSignedImagesInBulk', {
    BulkSignedImagesParameters: wireList(parameters),
  });
  return osList(out.Results).map((result) => ({
    key: cacheKeyPart(result.Id) + cacheKeyPart(result.Type) + cacheKeyPart(result.Size),
    error: result.Error,
    value: result.SignedURL,
  }));
}

/** Cache_SignedImageURL_Get (UC:543-700): the signed URL of an entity image, from the memory cache or the bulk server
    call (TTL 300 s, timeout 10, bulk of 15); "" for a null entity id or an empty type (ResultURL: Object || ""). */
export async function cache_SignedImageURL_Get(entityId: string, type: string, size: string): Promise<string> {
  const id = textToLongInteger(entityId);
  if (id === '0' || type === '') return '';
  const object = await getCacheableObjectInBulk(
    cache_SignedImageURL_GetCacheKey(type),
    cacheKeyPart(id) + cacheKeyPart(type) + cacheKeyPart(size),
    SIGNED_IMAGE_TTL_SECONDS,
    SIGNED_IMAGE_TIMEOUT,
    cache_SignedImageURL_GetCallback,
    SIGNED_IMAGE_BULK_SIZE,
  );
  return object ?? '';
}

/* ---- Wave 2E (Home.Feed_Embeded) ---- */
/** GetHasFeedEnabled: OutSystems_FF C2EnableFeed (migration/knowledge/feature-flag-helpers.md; TST: true). */
export const getHasFeedEnabled = (): boolean => isOn('C2EnableFeed');

/** OutSystems Index(Text, Search, 0, False, True) <> -1: Search found anywhere in Text, ignoring case. */
const containsIgnoreCase = (text: string, search: string) => text.toLowerCase().includes(search.toLowerCase());

/**
 * OpenInApp_OpenExternalLink(Url, InNewTab = False) (UBTConnect_Utils.controller.js:4491-4538, copy in
 * migration/screens/HomeFeed/analysis/sources/raw/):
 * - CheckInAppBrowserPlugin.IsAvailable and the Url holds "http://" or "https://" (:4508-4511): InAppBrowser Open(Url,
 *   Target SYSTEM when InNewTab, else IN_APP_BROWSER) (:4513-4514). The clone has no Cordova InAppBrowser: decision U18
 *   (app-shell.spec.md §12a) puts a new tab in the in-app browser's place, so the plugin counts as available and both
 *   targets open a new tab.
 * - otherwise InNewTab: JSUtils_PageOpenInNewTab(Url) (:4518-4521); else JSUtils_PageRedirect(Url, True) (:4523-4526).
 */
export function openInApp_OpenExternalLink(url: string, inNewTab = false): void {
  if (containsIgnoreCase(url, 'http://') || containsIgnoreCase(url, 'https://')) {
    window.open(url, '_blank', 'noopener');
  } else if (inNewTab) {
    jSUtils_PageOpenInNewTab(url);
  } else {
    pageRedirect(url, true);
  }
}

/** CommonPlugin GetPlatform (runtime-sources/CommonPlugin.controller.js:236-280): ToLower(cordova.platformId) when
    IsCordovaDefined (:425-512, `typeof(cordova) === "undefined"` → False), else the output default "". */
function getPlatform(): string {
  const cordova = (window as Window & { cordova?: { platformId?: string } }).cordova;
  return cordova === undefined ? '' : (cordova.platformId ?? '').toLowerCase();
}

/** CommonPlugin GetOperatingSystem (CommonPlugin.controller.js:147-200): GetPlatform "android" → Android, "ios" → iOS,
    else Other. The clone has no Cordova, so the browser result is Other. */
export function getOperatingSystem(): string {
  const platform = getPlatform();
  if (platform === 'android') return Mobile_OperatingSystem.Android;
  if (platform === 'ios') return Mobile_OperatingSystem.IOS;
  return Mobile_OperatingSystem.Other;
}

/**
 * OpenInApp_OpenApp(Package) (UBTConnect_Utils.controller.js:4360-4462, copy in
 * migration/screens/HomeFeed/analysis/sources/raw/), browser path:
 * - CheckAppLauncherPlugin (:4384): `!!window.cordova && !!window.plugins.launcher`
 *   (runtime-sources/Connect2_AppLauncherPlugin.controller.js:302) is False without Cordova, so CanLaunchWithData /
 *   LaunchWithData (:4386-4412) never run.
 * - IsCordovaDefined (:4421-4426, market:// link when True) is False (CommonPlugin.controller.js:508-512).
 * - GetOperatingSystem (:4430-4441): Android or Windows → OpenInApp_OpenExternalLink("https://play.google.com/store/
 *   apps/details?id=" + Package, True) (:4434-4435, :4448-4449); else FeedbackMessage_AutoClose2("Not available",
 *   "Sorry, this app is not available in the platform you are using", TextToInteger("Entities.UBT_MessageType.Error")
 *   = 0 = Info, True, "", 0, False) and return (:4439-4441). In the browser GetOperatingSystem is Other: the toast.
 */
export function openInApp_OpenApp(packageName: string): void {
  const os = getOperatingSystem();
  if (os === Mobile_OperatingSystem.Android || os === Mobile_OperatingSystem.Windows) {
    openInApp_OpenExternalLink(`https://play.google.com/store/apps/details?id=${packageName}`, true);
    return;
  }
  feedbackMessageAutoClose({
    title: 'Not available',
    message: 'Sorry, this app is not available in the platform you are using',
    messageType: 'info',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
}

/** Note_SendFeedbackMessages(ActionType, IsSuccess, IsNotFound = False) (UBTConnect_Utils.controller.js, define
    "UBTConnect_Utils.controller$Note_SendFeedbackMessages", TST copy in
    migration/screens/SupperMeeting_Details/analysis/sources/raw/): the add / edit / delete message, as a Success or an
    Error feedback message; another action type shows nothing. */
export function note_SendFeedbackMessages(actionType: string, isSuccess: boolean, isNotFound = false): void {
  let message: string;
  if (actionType === NoteActionType.Add) message = isSuccess ? 'Note added' : "Couldn't add note. Please try again.";
  else if (actionType === NoteActionType.Edit)
    message = isSuccess
      ? 'Note updated'
      : isNotFound
        ? 'This note no longer exists'
        : "Couldn't save your changes. Please try again.";
  else if (actionType === NoteActionType.Delete)
    message = isSuccess ? 'Note deleted' : "Couldn't delete note. Please try again.";
  else return;
  showFeedbackMessage(message, isSuccess ? PLATFORM_MESSAGE_TYPE.success : PLATFORM_MESSAGE_TYPE.error);
}

/** CleanAddressForMaps(Address) (UBTConnect_Utils.controller.js:1153-1215, JS node CleanAddressJS; copy in
    migration/screens/Login/analysis/sources/raw/): newlines / carriage returns, then runs of whitespace, become one
    space. Returns AddressSafe. */
export function cleanAddressForMaps(address: string): string {
  return address.replace(/(\n|\r)+/g, ' ').replace(/\s+/g, ' ');
}

/** Connect2_AppLauncherPlugin CheckAppLauncherPlugin (runtime-sources/Connect2_AppLauncherPlugin.controller.js:302):
    `!!window.cordova && !!window.plugins.launcher`; False in the clone (no Cordova), so CanLaunchWithData /
    LaunchWithData never run. */
export function checkAppLauncherPlugin(): boolean {
  const w = window as Window & { cordova?: unknown; plugins?: { launcher?: unknown } };
  return w.cordova !== undefined && w.plugins?.launcher !== undefined;
}

/* ---- Wave 4 foundation (CR-W4A-1) ---- */
/** Bookmark_SendFeedbackMessage(IsCreate, isError) (UBTConnect_Utils.controller.js:92-149, BookmarksByGroup copy): an
    Error message "Bookmark could not be added / removed. Please try again later." when isError, else a Success
    message "Added to / Removed from your Bookmarks" (IsCreate picks the text). */
export function bookmark_SendFeedbackMessage(isCreate = false, isError = false): void {
  if (isError) {
    showFeedbackMessage(
      isCreate
        ? 'Bookmark could not be added. Please try again later.'
        : 'Bookmark could not be removed. Please try again later.',
      PLATFORM_MESSAGE_TYPE.error,
    );
  } else {
    showFeedbackMessage(
      isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks',
      PLATFORM_MESSAGE_TYPE.success,
    );
  }
}

/* ---- Wave 4E (HouseholdDetails_Block) ---- */
/** GetHasPhotobookAccess (UBTConnect_Utils.controller.js:3537-3575, BookmarksByGroup copy): HasAccess of
    Connect_LaunchDarkly_PermissionCheck(LaunchDarkly_FF.MobilePhotobook) (migration/knowledge/feature-flag-helpers.md;
    flag `mobilePhotobook`, TST: true). */
export const getHasPhotobookAccess = (): boolean => isOn('mobilePhotobook');

/* ---- F11 (CR-MilestoneDetail-3): open a document ---- */

/** OpenInApp_ViewFile_Fallback(DownloadUrl) (UBTConnect_Utils.controller.js:4830-4895, copy in
    migration/screens/OrbitLanding/analysis/sources/raw/): CheckInAppBrowserPlugin.IsAvailable → InAppBrowser
    Open(DownloadUrl, Target SYSTEM); else the JS node `window.setTimeout(() => window.open(DownloadUrl, "_blank"))`.
    As in openInApp_OpenExternalLink, decision U18 counts the in-app browser as available and opens a new tab. */
export function openInApp_ViewFile_Fallback(downloadUrl: string): void {
  window.open(downloadUrl, '_blank', 'noopener');
}

/** Get_FileExtension JS node of OpenInApp_TryOpenFileInApp (:4817-4828): `filename.match(/^(.+?)(\.[^.]+)?$/)`; the
    name without its extension and the extension in lower case ("" without one). An empty name has no match: the node
    throws a TypeError (reading match[1] of null), as the original. */
function get_FileExtension(filename: string): { Filename_WithoutExtension: string; Extension: string } {
  const match = /^(.+?)(\.[^.]+)?$/.exec(filename);
  if (match === null) throw new TypeError("Cannot read properties of null (reading '1')");
  return {
    Filename_WithoutExtension: match[1] ?? '',
    Extension: match[2] ? match[2].slice(1).toLowerCase() : '',
  };
}

/** True when the Cordova runtime is there (CommonPlugin IsCordovaDefined: `typeof cordova !== "undefined"`). */
const isCordovaDefined = (): boolean => (window as Window & { cordova?: unknown }).cordova !== undefined;

/**
 * OpenInApp_TryOpenFileInApp(Filename, DownloadUrl, FolderToSave, FileExtension) → IsInApp, Filepath
 * (UBTConnect_Utils.controller.js:4568-4816, copy in migration/screens/OrbitLanding/analysis/sources/raw/). Once
 * through a do-while(False): Get_FileExtension(Filename); with an extension, CheckFileTransferPlugin, CheckFilePlugin and
 * CheckFileViewerPlugin; when all three are available, a PDF is downloaded into the cache folder FolderToSave
 * (CreateDirectory, GetMetadata, DownloadFile: the FileTransfer plugin then answers through HandleDownload), any other
 * file into the external "download" folder ("Please check your downloads folder"), and the action returns IsInApp
 * True. Otherwise OpenInApp_ViewFile_Fallback(DownloadUrl) and IsInApp False.
 * Web branch only: the plugin checks need Cordova (IsCordovaDefined) or the plugins' PWA wrappers
 * (OSFileTransferPluginWrapper…, FileTransferPlugin.controller.js CheckPWA :270-280), which the browser app does not
 * load, so they answer False and every call takes the fallback; the Cordova download branch is not ported (logged when
 * a Cordova runtime is present).
 */
export function openInApp_TryOpenFileInApp(
  filename: string,
  downloadUrl: string,
  folderToSave: string,
  fileExtension: string,
): { IsInApp: boolean; Filepath: string } {
  const info = get_FileExtension(filename);
  if (info.Extension !== '' && isCordovaDefined()) {
    // FileExtension = Get_FileExtension.Extension: it only picks the Cordova branch (PDF or downloads folder).
    log.warn('NotPorted', {
      Action: 'OpenInApp_TryOpenFileInApp (Cordova download)',
      FolderToSave: folderToSave,
      FileExtension: info.Extension || fileExtension,
    });
  }
  openInApp_ViewFile_Fallback(downloadUrl);
  return { IsInApp: false, Filepath: '' };
}

/** OpenPolicy ErrorMessage default, also the text every caller passes ("This policy couldn't be found."). */
export const POLICY_NOT_FOUND = "This policy couldn't be found.";

/** ApplicationPolicies_CW CanOpenApplicationPolicyDirectlyViaUrl: CanOpenDirectly = IsWeb, JS node
    `$parameters.IsWeb = !window.cordova` (migration/shell/sources/ApplicationPolicies_CW.controller.js, IsWebJS). */
const canOpenApplicationPolicyDirectlyViaUrl = (): boolean => !(window as { cordova?: unknown }).cordova;

/** UBTConnect_Utils OpenPolicy(PolicyInformation, ErrorMessage) (UBTConnect_Utils.controller.js, `openPolicy$Action`):
    Policy_Url <> "" → CanOpenApplicationPolicyDirectlyViaUrl → JSUtils_PageOpenInNewTab(Policy_Url) on the web; the
    native OpenApplicationPolicy(Url, FileName, ContentType) branch is out of scope (AGENTS rule 14). Policy_Url = "" →
    FeedbackMessageShow(ErrorMessage, Error). Moved here from TermsAndPoliciesMenu (audit A1) so the PIN unlock policy
    links can use it too. */
export function openPolicy(
  policyInformation: CacheControl_Policies['PolicyInformation_TermsAndConditions'] | undefined,
  errorMessage = POLICY_NOT_FOUND,
): void {
  const url = policyInformation?.Policy_Url ?? '';
  if (url === '') {
    showFeedbackMessage(errorMessage, PLATFORM_MESSAGE_TYPE.error);
    return;
  }
  if (canOpenApplicationPolicyDirectlyViaUrl()) jSUtils_PageOpenInNewTab(url);
}

/** DropdownTags_CloseOtherOnClick (controller.js:1462-1489, JavaScript1 :1490-1516; copy in
    migration/screens/AssembleEvents/analysis/sources/raw/UBTConnect_Utils.controller.js): on every
    `.osui-dropdown-tags` present now, a capture-phase click listener that closes each other one through
    DropdownAPI.Close(its `name`, the unique id) when it has a name. As compiled, the listeners are never removed and
    elements rendered later get none. CR-EventBooklet-2. */
export function dropdownTags_CloseOtherOnClick(): void {
  const elements = document.querySelectorAll('.osui-dropdown-tags');
  elements.forEach((el) => {
    el.addEventListener(
      'click',
      () => {
        elements.forEach((other) => {
          if (other !== el) {
            const elementName = other.getAttribute('name');
            if (elementName) dropdownClose(elementName);
          }
        });
      },
      true,
    );
  });
}
