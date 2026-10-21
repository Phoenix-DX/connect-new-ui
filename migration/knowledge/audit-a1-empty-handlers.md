# Audit A1: empty and unwired handlers (2026-10-16)

Trigger: the HomeFeed search input had `onOnSearchClick={() => undefined}` and the wrong note "empty handler in the
original". HomeFeed.mvc.js:708-723 navigates to Search. This was fixed before the audit.

## Method

1. Grep `app/src/screens/**` and `app/src/shared/**` (tests and stories excluded) for these items:
   - `() => undefined`, `() => {}` and `noop`.
   - Handler props set to `undefined`.
   - Comments that say a handler is empty, not ported, not wired or never raised.
2. Scan every compiled view in `capture/survey-UBTConnect.json` → `sources` statically. Each
   `React.createElement(<child>.mvc$view, { events: { <name>$Action } })` is a binding (821 parent → child bindings with events).
   Compare each binding with the JSX of the React parent (the event props that the parent passes to the child component).
   For every binding that the React app does not pass, or passes as a no-op, read the compiled handler and its action flow.
3. "Empty" means the compiled client action has only debugger breakpoints. An event declaration
   `X$Action = function() { return Promise.resolve(); }` is the default of a block event.
   When the parent binds the event, the parent's handler replaces the default.
   So the declaration is NOT evidence that the click does nothing.

Paths: `SB` = the route's `migration/screens/<S>/analysis/sources/pretty/<file>.mvc.js` (or `analysis/sources/` for
ViewDocuments).

## Fixed (behaviour added)

| file:line | handler | what the original does | change |
|---|---|---|---|
| `app/src/shared/UBTConnect/Feed_Embeded/Feed_Embeded.tsx:62-66, :89` | Embedded_FeedCMS `OnDownloaded` (not passed) | `UBTConnect.Home.Feed_Embeded.mvc.js:169-182` → `Handle_Download` (:685-722): `OpenInApp_TryOpenFileInApp(Filename, URL, "connect-feed-documents", "pdf")` | wired to the shared `openInApp_TryOpenFileInApp` (web: fallback viewer in a new tab). README updated; the README question "port it when the real SDK is plugged in?" answered by auto mode with the 1:1 port. Test added. |
| `app/src/shared/UBTConnect/Block_PINUnlock_ContentWrapper/Block_PINUnlock_ContentWrapper.tsx:98-102` | `OnClick_TermsAndCondition`, `OnClick_PrivacyPolicy` (`openPolicy = () => undefined`) | `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js` view :607 / :675, controller :939-968 / :969-998: `UBTConnect_Utils.OpenPolicy(LocalCacheControlPolicies.CacheControl_Policies.PolicyInformation_<policy>, "This policy couldn't be found.")` | wired. `openPolicy` / `POLICY_NOT_FOUND` moved from `screens/TermsAndPoliciesMenu/components/actions.ts` to `shared/UBTConnect_Utils/lib/actions.ts` (the route re-exports them). README updated, test added. |

## Verified empty or unreachable: comment corrected

| file:line | handler | evidence | change |
|---|---|---|---|
| `app/src/screens/LDM_MyEvents_V2/components/EventCard_Box.tsx:28` | Container onClick | EventCard_Box.mvc.js:146-153 raises event Click_Card; its only parent on this route, EventCard_V2.mvc.js:176-180, binds only `_handleError`; the unbound event resolves (:236-238) | stays; comment cites the evidence |
| `app/src/screens/Notifications/components/MoreActionSheet.tsx:154-155` | `onMarkAllAsRead`, `onDeleteAllNotification` | Notifications_MoreActionSheet.mvc.js Handler_MarkAllAsRead :346-358 and Handler_DeleteAllNotification :254-265: breakpoints only. The suspected "DeleteAllNotification triggers Loaded" is Handler_FilterSheetLoaded (:276-306), bound to MoreActionSheet Loaded (:175-183); MoreActionSheet raises Loaded only from CacheControl_UserInfo_Wrapper (:1300-1345), rendered only with HasCountries or HasLocalities (view :652), which this sheet never sets | stays; comment rewritten with the line numbers |
| `app/src/shared/UBTConnectLibrary/SubLayout_Section/SubLayout_Section.tsx:22` | CustomContainer Clicked | the click raises the block's event Clicked; its only compiled parent (SubLayout_DirectoryDetailScreen_Section) binds no event | stays; the old note "controller clicked$Action resolves" (an event default) replaced |
| `app/src/shared/Connect2_OrbitMobile_MUI/Card_MemberInformation/Card_MemberInformation.tsx:35`, README | `ClickedMember` | the note said "the original action is empty"; :631-636 are event declarations; every compiled parent binds ClickedMember (and the clone passes it) | note corrected (no behaviour change) |

## Verified empty or unreachable: unchanged (comment already cites evidence)

| file:line | handler | evidence |
|---|---|---|
| `screens/ViewDocuments/components/ScreenBlock_ViewDocuments.tsx:173` | HandleDownloadOnDownloadProgress | ScreenBlock_ViewDocuments.mvc.js:869-892: breakpoints only |
| `screens/Household_Relations/components/HouseholdRelations_Block.tsx:286` | OnClick_Bookmark | HouseholdRelations_Block.mvc.js:1771-1792: breakpoints only |
| `screens/MyEntertaining/components/Embedded_MyEntertaining.tsx:129` | embed `onResize` | Embedded_MyEntertaining.mvc.js:1272-1274: empty JS callback ("autoResize is false by design") |
| `screens/MyEntertaining/components/connect2Entertaining.ts:84` | stand-in `refreshToken` | mock embed SDK (decision Q1 A), not an OutSystems handler |
| `shared/UBTConnect_EmbedFeed/Embedded_FeedCMS/Embedded_FeedCMS.tsx:99-102` | `onReady`, `onError`, `onFeedClick` | Action_OnFeedReady (Embedded_FeedCMS.mvc.js:482-505) breakpoints only; onError / onFeedClick (:1070-1077) only `JSUtils_Console_Log` |
| `shared/UBTConnect_Utils/NotesSheet/NotesSheet.tsx:159` | BackNavigationHandlerBackNavigation | NotesSheet.mvc.js:610-628 (HouseholdCarousel copy): breakpoints only |
| `shared/UBTConnect_Utils/ShareSheet/ShareSheet.tsx:459` | SearchResult_Item OnClick (not passed) | Handler_SearchResultItemOnClick, ShareSheet.mvc.js:3310-3324 (BookmarksByGroup copy): breakpoints only |
| `shared/Connect2_LegacyShared/NetworkWarning/NetworkWarning.tsx:9` | TryAgain | the block raises it; every parent passes its handler |
| `screens/LDM_MyEvents_V2/components/MyTimeline_V2.tsx` | EventCard_V2 CallPhoneEventCard (not passed) | EventCard_V2 never raises it (only its declaration, EventCard_V2.mvc.js:369) |
| `screens/LDM_MyEvents_V2/components/MyEvents_MyTimelineFilterButton.tsx:26` | Filter / ResetFilters / Close | the filter popup is NotCaptured (Q1) |
| `screens/LDM_MyEvents_V2/components/ScreenBlock_MyEvents_V2.tsx:83` | calendar events (EventCalendarWeekMonth, MonthYearSelector, DayCalendar, MonthCalendar, Agenda_V2) | CurrentEventView is always MyTimeline: those branches never render |
| `screens/Updates_SingleList/components/SectionHeader.tsx:122` | UpdateItem_Header Click_MarkAll | SectionHeader.mvc.js:236 passes ShowMarkAll False: the link is never shown |
| `screens/MessageList/index.tsx` | NavigateTo_B2CCallback / NavigateTo_B2CLanding | raised only by B2C_SignInFlowController* handlers of ScreenBlock_MessageList (:1451-1480, :2349+), whose block is not in the view: dead |
| `screens/MilestoneDetail/index.tsx:28` | NavigateTo_ContactHostByEmail | raised only by the meal / accommodation guest / helper blocks, not built (Q5) |
| `screens/Profile/index.tsx:518` | DropdownSearch OnChanged (locality, subdivision) | inside the NotCaptured address section (Q1, Profile.mvc.js:1269-1716) |
| `shared/Connect2_LegacyShared/ItemOptionsMenu/ItemOptionsMenu.tsx:67` | OnShareToOthers | shown only with the SocialSharing plugin: never on the web |
| `screens/LegacyShareObject/components/ScreenBlock_ShareObject.tsx:55` | ProfileList Share | ProfileList never raises it (0 triggers in its view) |
| `screens/AssembleDetail/index.tsx:30` | EventNotFound | AssembleEventDetail never raises it (0 triggers) |
| `screens/Locality_Details/index.tsx:228` | Event_OnClick_Bookmark | OneSchoolGlobal_List never raises it (0 triggers); Handler_OnClick_Bookmark has no node |
| `screens/Notes/components/ItemCard_ActionBar.tsx:28-31` | OnClickShare / OnClickUnbookmark | NoteCard_Item sets ShowUnbookmark and ShowShare False: never rendered |
| `shared/UBTConnect/Feed_Embeded/README.md` | SharePopup Event_ShareToOthers | native-only option; ShareEntity_ByURL not ported |
| HandleDownload events (Feed_Embeded, ViewDocuments, MilestoneDetail AccommodationHost) | OnDownloadComplete / Error / Progress | raised only by the Cordova FileTransfer plugin |
| `shared/UBTConnect/UnsupportedVersion_Native`, `_WebView` | Event_NavigateToPlaystore | store app only (decision U16) |
| `screens/Login/components/AppManager_Events.tsx` | OnCallback | mock sign-in (D3(a) / U4) |
| `shared/NavigationHandler/PreventBackNavigation/PreventBackNavigation.tsx` | BackNavigation | done by the shell hook `usePreventBackNavigation` |
| `shared/osui/OfflineDataSyncCore`, `shared/UBTConnect/OfflineDataSyncEvents` | sync events | sync engine not ported; UBTConnect's sync action is empty (spec 12a) |
| PullToRefresh users (layouts, Notifications) | OnContentPull | gesture script not ported (README); off on Notifications |
| `screens/MessageDetail` | AdaptiveCardEventExecuted, ShareObjectDetail events | not captured (Q1, Q2) |
| telemetry handlers (many `actions.ts`) | AzureInsights / AuditEvent | decision U17 (logged) |

Not event handlers (not audited further):
- Promise `.catch(() => undefined)` in Card_MemberInformation.tsx:77, useLoadPhotoAsync.ts:35, UBT_LazyImage.tsx:83.
- Rejection branches in Block_PINRegister_ContentWrapper.tsx:63 and SupperMeeting_DetailsBlock.tsx:54 (cited in place).
- `shared/osui/Carousel/testLayout.ts` (test helper).

## Not touched (another agent's folder)

- `screens/EventBooklet/components/PopUp_OrbitBookletFilters.tsx:98`: OnReady → DropdownTags_CloseOtherOnClick, a
  documented no-op until CR-EventBooklet-2; DropdownTags Initialized (→ OnInitialized_Dropdowns) is not passed either.
  For the EventBooklet route agent.

## Routes to re-stamp

- Behaviour: HomeFeed, FeedItemDetail (Feed_Embeded); PINUnlock and the shell lock dialog, PINChange
  (Block_PINUnlock_ContentWrapper); TermsAndPoliciesMenu (re-export).
- Comment only: LDM_MyEvents_V2, Notifications; shared comments in Card_MemberInformation (HelpersDetail,
  MilestoneDetail, GuestArrangements) and SubLayout_Section (via SubLayout_DirectoryDetailScreen_Section:
  ContactUsDetails, Household_Relations, HouseholdDetails_Block, SupperMeeting_HouseholdList,
  SupperMeeting_DetailsBlock users).

## Verification (2026-10-16)

- `npm --prefix app run ci`: pass (310 test files, 1362 tests, build).
- `route.py parity` clean after the last code change: HomeFeed, PINUnlock, PINChange, TermsAndPoliciesMenu,
  LDM_MyEvents_V2, Notifications (FeedItemDetail has no capture).
- Headless Playwright on the dev server: PINUnlock policy links (2) open the two cached policy URLs in a new tab;
  HomeFeed feed `feed:download` (posted from the feed iframe) opens the file URL in a new tab (`_blank`, `noopener`).
