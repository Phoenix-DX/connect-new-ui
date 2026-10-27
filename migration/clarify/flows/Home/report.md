# Flow report: Home

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: 2, FeedItemDetail, HomeFeed; not built: none) |
| Own blocks | Feed_Embeded, FeedBlock_CommunityPopulation, FeedBlock_Services, FeedBlock_Updates, Section_FeedWrapper |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/home-feed.md` and the rules it names, TST compiled code of the 7 files of the flow and of `Dialog_GoExternalApp` (`tst_source.py show`; the TST line numbers are of its output) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 123 · partial 5 · missing 0 · differs 1 · mock-only 5 · n/a 14 · unclear 0 (same as `checklist.json`).
- **F1** (minor): the subscription banner of an update without access shows plain text. TST shows an IconText with a lock
  icon in two centred containers.
- **F2** (minor): the queries of GetServices and FetchUpdates keep the library cache defaults. A new visit to HomeFeed
  within 5 minutes shows the old lists without the skeleton, and a reconnect fetches again.
- **F4** (minor): the open Dialog_GoExternalApp leaves out two containers of the TST view: the centred body container
  and the flex row of the confirm label.
- **F3** (info): the "Add Service" tile has an empty icon id, not AddCircle. No screen shows the tile.
- Status: in React a user can open every service, see the community count and the latest updates, and open, mark and
  share an update. The user can also share a feed item and open one feed item. No finding blocks the flow. The
  branches for the other value of three TST flags are not built, by the flag decisions of 2026-10-14.

## 2. Screens

### 2.1 HomeFeed

Route `/UBTConnect/HomeFeed`, page `app/src/pages/HomeFeed/HomeFeedPage.tsx`. The flows of the two blocks with logic
are in `hooks/useFeedServices.ts` and `hooks/useFeedUpdates.ts`. Board: `build`, built (V2, default screen, D8(b), user
2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User | A signed-in user opens the screen (TST checkRegistered) | MEMBER_ROUTE (member, enforce): HomeFeed is not in ROUTE_META | `match` | app/src/app/routes.ts:40-57, 92; TST HomeFeed.mvc.js:1059 |
| 002 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:8 |
| 003 | lifecycle and IsScreenInitialized | OnInitialize sets IsScreenInitialized False; OnReady sets it True | useState(false); an effect sets true after the mount (one resolved promise) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:88-98; TST HomeFeed.mvc.js:727-741, 880-894 |
| 004 | local variables HasUpdates (True), ShareableUpdateItem, IsShareOpen, ShareableObjectId, ShareObjectTypeId, ShareableFeedItem | screen variables that the view cache keeps | useViewState with the same names and defaults | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:82-87; TST HomeFeed.mvc.js:13-33 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 005 | data action GetCommunityStatistics (OnDemand, Get_UI_CommunityNumbers) | DEV: refreshed in OnReady when the view is not restored; its output feeds only the dead else branch. TST: no data action | no data action | `match` | TST HomeFeed.mvc.js:645-648 (dataFetchActionNames empty); pack/screens.md HomeFeed<br>DEV and TST differ (section 6.1). React follows TST. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 006 | Layout_HomePage args | ContentBackgroundColor Neutral4, SVGHeight "260px", OnSearchClick → OnClick_Search | HomeLayout contentBackgroundColor Neutral4, sVGHeight 260px, onOnSearchClick; the other inputs keep the library defaults | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:131-138; app/src/components/layout/HomeLayout/HomeLayout.tsx:62-67; TST HomeFeed.mvc.js:148-157 |
| 007 | Placeholder_Header_Title AppLogo_White, Placeholder_Header_Right App_NotificationIcon | two blocks, no arguments | AppLogo_White; NotificationIcon with useNotificationIcon() | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:78, 139-140; TST HomeFeed.mvc.js:183, 203 |
| 008 | Section_FeedWrapper #Section_Services > FeedBlock_Services | isTransparentBackground True, MarginTopSizeId Base, ShowHeader False, showViewAll False; FeedBlock_Services ForceAddService False (ItemPerPage default 6) | the same four inputs; FeedServices with itemPerPage 6, forceAddService false | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:55-60, 143-152; TST HomeFeed.mvc.js:241-249 |
| 009 | If True [DEAD BRANCH] around Section_CommunityPopulation; else CustomContainer > Directory_CommunityNumbers | constant condition: the else branch never renders | no If; the else branch is not built | `n/a` | pack/screens.md HomeFeed; TST HomeFeed.mvc.js:286-292 (no If, no Directory_CommunityNumbers)<br>dead in the model |
| 010 | Section_FeedWrapper #Section_CommunityPopulation > FeedBlock_CommunityPopulation | isTransparentBackground True, ShowHeader False, showViewAll False | the same three inputs; CommunityPopulation with useCommunityPopulationQuery() | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:79, 153-168; TST HomeFeed.mvc.js:286-292 |
| 011 | If HasUpdates > Section_FeedWrapper #Section_Updates > FeedBlock_Updates | isTransparentBackground False, MarginTopSizeId Small, ShowHeader True, showViewAll True, Title "Updates"; OnClick_ViewAll, Event_NoUpdates and Event_Share handled | hasUpdates && Section_FeedWrapper with the same inputs > FeedUpdates(onEventNoUpdates, onEventShare) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:169-184; TST HomeFeed.mvc.js:313-372 |
| 012 | Feed_Embeded (no FeedItemId), Event_Share → Handler_ShareFeed | FeedItemId keeps its default "" | EmbeddedFeed with useEmbeddedFeed() (FeedItemId '') and onEventShare = onShareFeed | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:80, 185; TST HomeFeed.mvc.js:404-410 |
| 013 | If IsScreenInitialized > Dialog_ExitConfirmation | the exit dialog after OnReady | isScreenInitialized && DialogExitConfirmation | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:186; TST HomeFeed.mvc.js:435-436; decision U15 (migration/app-shell.spec.md:382) |
| 014 | Placeholder Bottom: BottomBarMenu | ActiveItem Home, isRootPage True | BottomBar activeItem Home, isRootPage | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:189; TST HomeFeed.mvc.js:459-462 |
| 015 | Placeholder_CommonUI_Inside_Layout: CommonUI_InsideLayout | no arguments | CommonUiLayout with no inputs | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:190; TST HomeFeed.mvc.js:482 |
| 016 | If True #HideInServiceStudio [DEAD BRANCH] around ShareSheet | constant condition: the ShareSheet always renders | ShareSheetContainer always renders; no If | `n/a` | pack/screens.md HomeFeed; TST HomeFeed.mvc.js:503 (ShareSheet with no If)<br>dead in the model |
| 017 | ShareSheet args and Event_ClosedShareSheet | In_IsOpen IsShareOpen, In_ShareableObjectId, In_ShareObjectTypeId, In_UpdateDate If(Update, Date, NullDate()), In_UpdateType If(Update, UpdateItemTypeId, ""); Event_ClosedShareSheet → Handler_CloseShareSheet | the same expressions; NullDate() as '1900-01-01' | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:29-30, 192-201; TST HomeFeed.mvc.js:503-527 |
| 018 | ShareSheet placeholder: If ShareObjectTypeId = Update > Update_ListItem | HasBorderBottom False, IgnoreReadBackground True, In_IsRead False, IsEnabled False, ShowImage False, other inputs from ShareableUpdateItem | isUpdate && UpdateListItem with the same inputs | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:203-219; TST HomeFeed.mvc.js:553-597 |
| 019 | ShareSheet placeholder: If ShareObjectTypeId = Feed > ShareableObject_Generic | In_ShareableObject ShareableFeedItem | ShareableObject inShareableObject = shareableFeedItem | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:220-222; TST HomeFeed.mvc.js:599-600 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 020 | Handler_CloseShareSheet | IsShareOpen = False | setIsShareOpen(false) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:199-201; TST HomeFeed.mvc.js:856-870 |
| 021 | Handler_NoUpdates | HasUpdates = False | setHasUpdates(false) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:101-103; TST HomeFeed.mvc.js:751-765 |
| 022 | Handler_ShareFeed | ShareObjectTypeId Feed, ShareableObjectId = Event_ShareId, IsShareOpen True, ShareableFeedItem ConnectEntityTypeId FeedItem, SignedURL, Title, Subtitle | the same assignments; the other fields of ShareableFeedItem keep their values | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:115-126; TST HomeFeed.mvc.js:775-812 |
| 023 | Handler_ShareUpdate | ShareObjectTypeId Update, ShareableObjectId = Event_ShareableUpdateItem.MemberId, ShareableUpdateItem = the item, IsShareOpen True | the same assignments | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:105-113; TST HomeFeed.mvc.js:904-931 |
| 024 | OnClick_Search | navigate Search (transition Inherited = Default) | navigate(/UBTConnect/Search) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:136-138; TST HomeFeed.mvc.js:704-717 |
| 025 | Section_UpdatesOnClick_ViewAll | navigate Updates_SingleList (Default) | navigate(/UBTConnect/Updates_SingleList) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:178-180; TST HomeFeed.mvc.js:651-664 |
| 026 | ScreenEvent_OnInitialize | IsScreenInitialized = False | useState(false) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:89; TST HomeFeed.mvc.js:880-894 |
| 027 | ScreenEvent_OnReady | DEV: IsScreenInitialized = True, JS IsRestoredFromCache, refresh GetCommunityStatistics when not restored. TST: IsScreenInitialized = True only | sets isScreenInitialized; no refresh | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:90-98; TST HomeFeed.mvc.js:727-741<br>DEV and TST differ (section 6.1). React follows TST. |
| 028 | ButtonOnClick → UBTConnect_Utils TestDownload (TST only) | no widget calls the action | not implemented | `n/a` | TST HomeFeed.mvc.js:674-695; KB ui/home-feed.md:33<br>dead in TST: no widget binds it. DEV has no such action (section 6.1). |
| 029 | unreachable end nodes (7 actions) | not connected | not implemented | `n/a` | pack/screens.md HomeFeed<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 030 | BR-UBTCON-051 | the Updates section shows until FeedBlock_Updates raises Event_NoUpdates | hasUpdates (view state, default true) set false by onNoUpdates | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:82, 101-103, 169; BR-UBTCON-051 |
| 031 | BR-UBTCON-052 | share sheet for a feed item or an update; an update goes under its MemberId; type and date only for Update | the two handlers, the ShareSheet expressions and the two placeholder Ifs | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:105-127, 192-222; BR-UBTCON-052 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 032 | screen strings (1) | "Updates" | the same text | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:174 |

**Validations**: the screen has no input widget and no validation node.

The string of the screen matches.

### 2.2 FeedItemDetail

Route `/UBTConnect/FeedItemDetail`, page `app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx`, variables and handlers
in `hooks/useFeedItemDetail.ts`. Board: `build`, built (V4b, Feed CMS mock D8(b), user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 033 | roles Registered, UBTOne_User | A signed-in user opens the screen (TST checkRegistered) | MEMBER_ROUTE (member, enforce) | `match` | app/src/app/routes.ts:40-57, 92; TST FeedItemDetail.mvc.js:454 |
| 034 | input FeedItemId (Text, mandatory) | query string input | readFeedItemDetailInputs: FeedItemId from the query string, '' when absent | `match` | app/src/pages/FeedItemDetail/inputs.ts:10-12; app/src/app/routes.generated.ts:61; TST FeedItemDetail.mvc.js:25 |
| 035 | lifecycle | none | no lifecycle effect in the page or hook | `match` | app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx:20-25; TST FeedItemDetail.mvc.js:445-449 |
| 036 | local variables IsShareOpen, ShareableObjectId, ShareObjectTypeId, ShareableFeedItem | screen variables | useViewState with the same names and defaults | `match` | app/src/pages/FeedItemDetail/hooks/useFeedItemDetail.ts:31-34; TST FeedItemDetail.mvc.js:13-22 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 037 | data actions and aggregates | none | none | `match` | pack/screens.md FeedItemDetail; app/src/pages/FeedItemDetail/inputs.ts:1-3 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 038 | Layout_DetailPage, Placeholder_Header_Title | text "Feed Item"; the layout inputs keep their defaults | DetailLayout headerTitle "Feed Item", onBack = navigateBack | `match` | app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx:29-35; TST FeedItemDetail.mvc.js:149-167 |
| 039 | Content: Feed_Embeded(FeedItemId), Event_Share → Handler_ShareFeed | FeedItemId = the screen input | EmbeddedFeed feedItemId, useEmbeddedFeed(FeedItemId), onEventShare = onShareFeed | `match` | app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx:24, 33; TST FeedItemDetail.mvc.js:172-174 |
| 040 | Placeholder_CommonUI_Inside_Layout: CommonUI_InsideLayout | no arguments | CommonUiLayout with no inputs | `match` | app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx:34; TST FeedItemDetail.mvc.js:209 |
| 041 | ShareSheet > ShareableObject_Generic | In_IsOpen, In_ShareableObjectId, In_ShareObjectTypeId, In_UpdateDate NullDate(), In_UpdateType ""; Event_ClosedShareSheet → Handler_CloseShareSheet; placeholder ShareableObject_Generic(ShareableFeedItem) | ShareSheetContainer with the same inputs and ShareableObject | `match` | app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx:36-46; TST FeedItemDetail.mvc.js:230-272 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 042 | Handler_CloseShareSheet | IsShareOpen = False | onCloseShareSheet: setIsShareOpen(false) | `match` | app/src/pages/FeedItemDetail/hooks/useFeedItemDetail.ts:49-51; TST FeedItemDetail.mvc.js:318-332 |
| 043 | Handler_ShareFeed | the feed arm of Handler_ShareFeed of HomeFeed (BR-UBTCON-052) | onShareFeed with the same assignments | `match` | app/src/pages/FeedItemDetail/hooks/useFeedItemDetail.ts:36-47; TST FeedItemDetail.mvc.js:342-368; BR-UBTCON-052 |
| 044 | unreachable end nodes (2 actions) | not connected | not implemented | `n/a` | pack/screens.md FeedItemDetail<br>dead in the model |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 045 | screen strings (1) | "Feed Item" | the same text | `match` | app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx:32 |

**Validations**: the screen has no input widget and no validation node.

The string of the screen matches.

## 3. Blocks of the flow

No block of the flow has an input widget or a validation node.

### 3.1 Feed_Embeded

Used by HomeFeed, FeedItemDetail and MessageDetail (flow Legacy_MyNotificationsFlow). React: the view and the share dialog
state are in `app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx`. The flags, the client variable, the feed
configuration and the handlers are in `app/src/platform/session/useEmbeddedFeed.ts`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 046 | input FeedItemId (Text) and event Event_Share(ShareId, Title, Subtitle, ImageURL) | FeedItemId default "" | feedItemId = ''; onEventShare with the four values | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:9-29, 36-46 |
| 047 | local variables SharePopUp_Show, SharePopUp_Id, ShareFeedItem_Title, isLoadingDocument | popup state; isLoadingDocument is written by the download handlers only | three useState; isLoadingDocument not kept | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:31-33, 49-51 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 050 | server side of Embedded_FeedCMS: DataActionGetFeedConfig (FeedItemId, B2CTenant) | screen service of UBTConnect_EmbedFeed | useFeedConfigQuery → callAction('UBTConnect_EmbedFeed', 'Embedded_FeedCMS/DataActionGetFeedConfig'); the mock answers fictional values | `mock-only` | app/src/api/feed/repository.ts:7-9; app/src/components/feed/FeedCms/mocks.ts:4-12<br>Production needs the data action DataActionGetFeedConfig of Embedded_FeedCMS (module UBTConnect_EmbedFeed). |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 048 | If GetHasFeedEnabled() > Embedded_FeedCMS(B2CTenant = Client.Embedd_B2CTenant, FeedItemId) | the CMS block only with the flag | isFeedEnabled && FeedCms(b2CTenant, feedItemId) | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:83-92; app/src/platform/session/useEmbeddedFeed.ts:38-40; TST Feed_Embeded.mvc.js:154-159 |
| 049 | Embedded_FeedCMS (UBTConnect_EmbedFeed.Blocks) | the Feed CMS SDK in a block of module UBTConnect_EmbedFeed | FeedCms: a same-size mock page; the real URL plugs in later | `differs` | board row HomeFeed, decision D8(b) (user, 2026-10-14); app/src/components/feed/FeedCms/FeedCms.tsx |
| 051 | SharePopup In_ContactPopupData | EntityTypeId FeedItem, EntityId TextToInteger(SharePopUp_Id), IsAvatarImage False, ActionName "Share " + title, ShowPopup SharePopUp_Show, the other fields empty, 0 or False | the same record; EntityId with textToLongInteger | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:94-110; TST Feed_Embeded.mvc.js:215-227 |
| 052 | HandleDownload (FileTransferPlugin.FileTransfer) | a plugin block that renders nothing | an empty OSBlock | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:116-118 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 053 | Embedded_FeedCMSOnShare, GetHasExtendedShare True | trigger Event_Share with the four values | hasExtendedShare → onEventShare(shareId, title, subtitle, imageURL) | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:60-69; TST Feed_Embeded.mvc.js:456-487; migration/knowledge/flag-values-tst.json getHasExtendedShare true |
| 054 | Embedded_FeedCMSOnShare, GetHasExtendedShare False, and the legacy SharePopup handlers | JSUtils_Console_Log, open SharePopup; Handle_Share (Cancel), Handle_Share_Connect (→ LegacyShareObject), Handle_Share_Others (ShareEntity_ByURL) | the popup opens with Cancel and Share to Connect; no console log; Share to others not wired | `n/a` | migration/flags.md getHasExtendedShare: default-only, TST value on (user, 2026-10-14); migration/knowledge/flag-values-tst.json<br>The README of EmbeddedFeed lists the parts that are not wired. |
| 055 | Handle_Download (OnDownloaded) | OpenInApp_TryOpenFileInApp(Filename, URL, "connect-feed-documents", "pdf") | openInApp_TryOpenFileInApp(filename, url, 'connect-feed-documents', 'pdf') | `match` | app/src/platform/session/useEmbeddedFeed.ts:46-48; TST Feed_Embeded.mvc.js:685-707 |
| 056 | HandleDownloadOnDownloadComplete, OnDownloadError, OnDownloadProgress | media scan and open; "Document not found" → its own Info message, else the generic message; progress empty | not ported | `match` | migration/knowledge/pwa-file-plugins.md:21-38, 6(c); app/src/components/feed/EmbeddedFeed/README.md; TST Feed_Embeded.mvc.js:545-683<br>On the web TryOpenFileInApp opens the URL in a new tab and starts no plugin download, so the three events never fire on TST or in React. A native build needs the handlers. |
| 057 | unreachable end nodes (6 actions) | not connected | not implemented | `n/a` | pack/blocks.md Feed_Embeded<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 058 | BR-UBTCON-064 | the embedded feed shows only with GetHasFeedEnabled | isFeedEnabled = flagValue('C2EnableFeed') | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:83; app/src/platform/session/useEmbeddedFeed.ts:38; BR-UBTCON-064 |
| 059 | BR-UBTCON-065 | extended share on: Event_Share; off: the legacy SharePopup | the on arm as TST; the off arm is n/a by the flag decision | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:60-73; BR-UBTCON-065 |
| 060 | BR-UBTCON-066 | two download error messages, Info auto-close | no handler; the events never fire on the web | `match` | migration/knowledge/pwa-file-plugins.md 6(c); BR-UBTCON-066 |
| 061 | Client.Embedd_B2CTenant (read) | Text, no default | getClientVar('UBTConnect.Embedd_B2CTenant'), default '' | `match` | app/src/platform/session/clientVars.ts:27; app/src/platform/session/useEmbeddedFeed.ts:39; pack/data.md |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 062 | block strings (2 of 5) | "Share " (ActionName prefix), "connect-feed-documents" | the same texts | `match` | app/src/components/feed/EmbeddedFeed/EmbeddedFeed.tsx:100; app/src/platform/session/useEmbeddedFeed.ts:47<br>The other three strings ("Document not found" and the two messages) belong to the download event row. |

### 3.2 FeedBlock_CommunityPopulation

Used by HomeFeed and CountryList. React: `app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx`. The
page runs `useCommunityPopulationQuery` of `api/member`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 063 | inputs, events, locals | none; used by CountryList and HomeFeed | CommunityPopulation props isLoading, total, onClick; the caller runs the query and the click | `match` | app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx:8-17, 22-25 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 064 | data action FetchCount (AtStart) | Get_UI_MembersStatistics(RegionsSubscriptionId Global) at block start | useCommunityPopulationQuery on mount: no retry, staleTime 0, gcTime 0, no refetch on reconnect | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:79; app/src/api/member/hooks.ts:42-55; TST FeedBlock_CommunityPopulation.mvc.js:344 |
| 065 | server side of DataActionFetchCount | Connect_Geography_CS Get_UI_MembersStatistics(Global) | recordedHandler: the recorded TST answer | `mock-only` | app/src/components/feed/CommunityPopulation/mocks.ts:4-6<br>Production needs the data action DataActionFetchCount of FeedBlock_CommunityPopulation, which calls Connect_Geography_CS Get_UI_MembersStatistics. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 066 | CustomContainer and Clicked → OnClick_Block | PrimaryGradientRadial, padding V Small H Base, radius Medium, IsSkeletonElement True | the same options; onClicked = onClick | `match` | app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx:28-36; TST FeedBlock_CommunityPopulation.mvc.js:162-180 |
| 067 | CustomText "Community Population" | Neutral0, DoubleExtraSmall, SemiBold; outside the skeleton | the same | `match` | app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx:37-44; TST FeedBlock_CommunityPopulation.mvc.js:217-222 |
| 068 | SkeletonSection > CustomText count | In_IsLoading = not IsDataFetched and not HasFetchError; text If(loading, "00000", FormatDecimal(TotalNumberOfMembers, 0, "", ",")); Neutral0, Heading2, SemiBold | isLoading = isPending; '00000' or formatCount(total) (no group separator); '0' after an error | `match` | app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx:19-20, 45-54; app/src/pages/HomeFeed/HomeFeedPage.tsx:162-163; TST FeedBlock_CommunityPopulation.mvc.js:245-275 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 069 | OnClick_Block | navigate Updates_SingleList (Default) | navigate(/UBTConnect/Updates_SingleList) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:164-166; TST FeedBlock_CommunityPopulation.mvc.js:361-375 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 070 | block strings (2) | "Community Population", "00000" | the same texts | `match` | app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx:38, 52 |

### 3.3 FeedBlock_Services

React files under `app/src/pages/HomeFeed/`: the view `components/FeedBlock_Services.tsx`, the flows
`hooks/useFeedServices.ts`, the pages `hooks/feedServicesState.ts` and the confirm `hooks/goToExternalApp.ts`. The
referenced UBTConnect_Utils dialog is `components/Dialog_GoExternalApp.tsx`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 071 | inputs ItemPerPage (6) and ForceAddService | HomeFeed passes ForceAddService False | useFeedServices({ itemPerPage: 6, forceAddService: false }) | `match` | app/src/pages/HomeFeed/HomeFeedPage.tsx:58; app/src/pages/HomeFeed/hooks/useFeedServices.ts:18-24 |
| 072 | locals MainElementClass, Local_ServicesPerPage, ExternalAppPopUp_Id, Local_ExternalApp_PopUpInfo | "ubt-services-carousel", pages, popup id, popup info | MAIN_ELEMENT_CLASS, pages, two useState | `match` | app/src/pages/HomeFeed/hooks/feedServicesState.ts:7, 12; app/src/pages/HomeFeed/hooks/useFeedServices.ts:55-56; TST FeedBlock_Services.mvc.js:41-51 |
| 073 | lifecycle OnInitialize | Local_ServicesPerPage = one page of five empty items | INITIAL_PAGES until the data | `match` | app/src/pages/HomeFeed/hooks/feedServicesState.ts:14-17; app/src/pages/HomeFeed/hooks/useFeedServices.ts:66-69; TST FeedBlock_Services.mvc.js:730-750 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 074 | data action GetServices (AtStart) with OnAfterFetch | fetch at block start; each new HomeFeed shows the skeleton page until the answer | useFeedServicesQuery on mount with the library cache defaults: a new visit in the next 5 minutes shows the previous services at once and fetches again; a reconnect fetches again | `partial` | app/src/api/service/hooks.ts:21-33; app/src/api/client/queryClient.ts:15-18; TST FeedBlock_Services.mvc.js:709<br>**F2** (minor) |
| 075 | server side of DataActionGetServices | GetExternalLinks_ElGusto, GetExternalPackages_CommunityTradelink, _HR100, _Trove (UBTConnect_ServerConfigs), Service_ConnectServices_GetByUser (Connect_Services_CS) | recordedHandler: the recorded TST answer | `mock-only` | app/src/pages/HomeFeed/mocks.ts:14-15, 23<br>Production needs DataActionGetServices of FeedBlock_Services with the four UBTConnect_ServerConfigs server actions and Connect_Services_CS Service_ConnectServices_GetByUser. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 076 | CustomContainer #DIV_Services | ExtendedClasses MainElementClass; Neutral0 at opacity 0.87; padding Small; radius Large; shadow Small | the same options | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:77-87; TST FeedBlock_Services.mvc.js:180-242 |
| 077 | Columns_Two, Left: CustomText "Services" | ReduceLast, spacing Small, align Center, "padding-x-s"; text "margin-left-s", Base, SemiBold | the same | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:88-103; TST FeedBlock_Services.mvc.js:250-288 |
| 078 | Right: If GetHasCustomEvents() > CircleButton > Icon Settings, OnClick → OnClick_ServiceSettings | CircleButton Neutral0, border Neutral3, ExtraSmall_32; Icon Settings Neutral7 Base_24 | hasCustomEvents && CircleButton with the same inputs | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:104-122; app/src/pages/HomeFeed/HomeFeedPage.tsx:56; TST FeedBlock_Services.mvc.js:309-351 |
| 079 | Carousel #Carousel_Services | ExtendedClass MainElementClass, ItemsPerSlide 1/1/1, Dots, AutoPlay False, Loop False, Padding var(--space-s), StartingPosition 0 | the same inputs | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:124-131; TST FeedBlock_Services.mvc.js:414-444 |
| 080 | list Local_ServicesPerPage > Gallery > list ServiceItem | list classes with MainElementClass; Gallery 3/3/3, "__gallery" | the same classes and Gallery inputs | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:132-155; TST FeedBlock_Services.mvc.js:471-501 |
| 081 | SkeletonSection > CircleButton_WithLabel > Icon and Name, OnClick → OnClick_Service | In_IsLoading = not IsDataFetched or HasFetchError; Neutral0, Neutral3, Large_65; PaddingSize and icon size by "SVG_" in IconId | isLoading = not isSuccess or isError; the same inputs and the same SVG_ test | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:155-178; app/src/pages/HomeFeed/hooks/useFeedServices.ts:146; TST FeedBlock_Services.mvc.js:513-602 |
| 082 | Dialog_GoExternalApp(ExternalApp_PopUpInfo), OnPopUpReady → Handler_Dialog_ExternalAppPopUpReady | the popup info of the last click | Dialog_GoExternalApp externalAppPopUpInfo, onOnPopUpReady | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:189-194; TST FeedBlock_Services.mvc.js:642-648 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 083 | Handler_Dialog_ExternalAppPopUpReady | ExternalAppPopUp_Id = PopUpId | setExternalAppPopUpId(popUpId) | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:71-73; TST FeedBlock_Services.mvc.js:775-791 |
| 084 | OnAfterFetch_GetServices, ForceAddService False | ListClear; pages of ItemPerPage items (ConvertRecord Id, IconId, Name ← Label, Order); PageNumber from 1 | toPages | `match` | app/src/pages/HomeFeed/hooks/feedServicesState.ts:21-31; TST FeedBlock_Services.mvc.js:811-890; BR-UBTCON-053 |
| 085 | OnAfterFetch_GetServices, ForceAddService True: the "Add Service" tile | Id null, Label "Add Service", Order Length + 1, IconId AddCircle (connect-icon-add_circle) | the tile with iconId '' | `partial` | app/src/pages/HomeFeed/hooks/feedServicesState.ts:23-26; TST FeedBlock_Services.mvc.js:830-838; pack/references.md UBT_Icons2 AddCircle<br>HomeFeed passes ForceAddService False, so no screen shows the tile. **F3** (info) |
| 086 | OnClick_Service: Orbit | navigate OrbitLanding | go('OrbitLanding') | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:83-86; TST FeedBlock_Services.mvc.js:953-954 |
| 087 | OnClick_Service: LDM with GetHasNewLDM True | navigate LDM_MyEvents_V2 | hasNewLDM → go('LDM_MyEvents_V2') | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:87-91; TST FeedBlock_Services.mvc.js:957-965; BR-UBTCON-055 |
| 088 | OnClick_Service: LDM with GetHasNewLDM False | navigate LDM_MyEvents | not built: nothing happens | `n/a` | board row LDM_MyEvents: skip (user, 2026-10-16); migration/flags.md getHasNewLDM default-only, TST value on; TST FeedBlock_Services.mvc.js:968-969 |
| 089 | OnClick_Service: MyCalendar | navigate MyEntertaining | go('MyEntertaining') | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:92-95; TST FeedBlock_Services.mvc.js:976-977 |
| 090 | OnClick_Service: Assemble | navigate AssembleEvents | go('AssembleEvents') | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:96-99; TST FeedBlock_Services.mvc.js:982-983 |
| 091 | OnClick_Service: OrbitAdmin | navigate OrbitAdminLanding | go('OrbitAdminLanding') | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:100-103; TST FeedBlock_Services.mvc.js:988-989 |
| 092 | OnClick_Service: MyNotes | navigate Notes | go('Notes') | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:104-107; TST FeedBlock_Services.mvc.js:992-995<br>The KB says "coming soon" here (K1). |
| 093 | OnClick_Service: Trove, HR100, CommunityTradelink | Local_ExternalApp_PopUpInfo (AppName, PackageName from GetServices, IconId), then ConfirmAction(ExternalAppPopUp_Id) | setPopUpInfo with the same values, then await confirmAction(externalAppPopUpId) | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:110-120, 138-140; TST FeedBlock_Services.mvc.js:997-1029, 1065-1067; BR-UBTCON-056 |
| 094 | OnClick_Service: ElGusto | DEV: popup info ("El Gusto", SVG_ElGusto, URL) and ConfirmAction. TST: OpenInApp_OpenExternalLink(ExternalLinks_ElGusto, False) | openInApp_OpenExternalLink(externalLinksElGusto, false) | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:120-123; TST FeedBlock_Services.mvc.js:1031-1040; CR-HomeFeed-1; BR-UBTCON-056<br>DEV and TST differ (section 6.1). React follows TST. |
| 095 | OnClick_Service: OneSchoolGlobal | FeedbackMessage_AutoClose("Coming soon", "This feature will be coming soon.", Info, True, "", 0, False) | feedbackMessageAutoClose with the same arguments | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:124-134; TST FeedBlock_Services.mvc.js:1043-1046; BR-UBTCON-057 |
| 096 | OnClick_Service: otherwise (the Add tile, a null id, any other service) | End | return | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:135-137; TST FeedBlock_Services.mvc.js:1050-1052 |
| 097 | OnClick_Service: second MyNotes case of the third switch (DEV) | no node after the case; the first switch takes MyNotes | not implemented | `n/a` | pack/blocks.md FeedBlock_Services; TST FeedBlock_Services.mvc.js:1041-1052 (no such case)<br>dead in the model |
| 098 | OnClick_ServiceSettings | navigate Services | go('Services') | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:149-151; TST FeedBlock_Services.mvc.js:1119-1132 |
| 099 | unreachable end nodes (4 actions) | not connected | not implemented | `n/a` | pack/blocks.md FeedBlock_Services<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 100 | BR-UBTCON-053 | pages of six; Add tile only with ForceAddService; one page of five empty items while loading | toPages and INITIAL_PAGES | `match` | app/src/pages/HomeFeed/hooks/feedServicesState.ts:14-31; BR-UBTCON-053<br>The icon of the Add tile is F3. |
| 101 | BR-UBTCON-054 | Orbit, LDM, My Calendar, Assemble, Orbit Admin open their screens | the same five destinations, and MyNotes → Notes as TST | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:83-107; BR-UBTCON-054<br>The KB leaves out MyNotes → Notes (K1). |
| 102 | BR-UBTCON-055 | LDM V2 with the flag on, V1 with it off | the on arm; the off arm is n/a (board skip) | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:87-91; BR-UBTCON-055 |
| 103 | BR-UBTCON-056 | Trove, HR100, Community Tradelink ask first; El Gusto opens its link | the same | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:110-140; BR-UBTCON-056 |
| 104 | BR-UBTCON-057 | OneSchool Global says "coming soon"; any other service does nothing | the same; MyNotes opens Notes as TST | `match` | app/src/pages/HomeFeed/hooks/useFeedServices.ts:104-137; BR-UBTCON-057<br>The KB says MyNotes shows "coming soon" (K1). |
| 105 | Dialog_GoExternalApp (UBTConnect_Utils, referenced) | OnReady raises OnPopUpReady(PopUp.Id); "Move to <app>", icon, question, "Continue to <app>" and "Cancel"; confirm: PackageName "" → "Not available" message (type TextToInteger("Entities.UBT_MessageType.Error") = 0), else OpenInApp_OpenApp | the same events, texts and confirm flow; the open dialog leaves out the inline "text-align: center" container of the body and the CustomContainer (display flex, row, centred) of the confirm label | `partial` | app/src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx:31-35, 46-49, 58-127; app/src/pages/HomeFeed/hooks/goToExternalApp.ts:11-25; TST Dialog_GoExternalApp.mvc.js:211, 281, 426, 447-450, 494, 550, 593-631; BR-C2UTL-162, BR-C2UTL-163<br>**F4** (minor) |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 106 | block strings (7) | "Services", "Add Service", "Trove", "HR100", "Community Tradelink", "Coming soon", "This feature will be coming soon." | the same texts | `match` | app/src/pages/HomeFeed/components/FeedBlock_Services.tsx:101; app/src/pages/HomeFeed/hooks/feedServicesState.ts:25; app/src/pages/HomeFeed/hooks/useFeedServices.ts:111-133<br>"El Gusto" is a DEV string only: TST sets no app name for El Gusto. |
| 107 | Dialog_GoExternalApp strings (7) | "Move to ", "You’re about to leave this app and open ", ". Are you sure you want to continue?", "Continue to ", "Cancel", "Not available", "Sorry, this is not available in the platform you are using" | the same texts | `match` | app/src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx:64, 98, 109, 126; app/src/pages/HomeFeed/hooks/goToExternalApp.ts:14-15; TST Dialog_GoExternalApp.mvc.js:211, 426, 494, 550, 625 |

### 3.4 FeedBlock_Updates

React files under `app/src/pages/HomeFeed/`: the view `components/FeedBlock_Updates.tsx`, the flows
`hooks/useFeedUpdates.ts`, and the loading rows and read state `hooks/feedUpdatesState.ts`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 108 | events Event_NoUpdates and Event_Share(UpdateItemId, ShareableUpdateItem); local CarouselPreloadedHouseholds | two events to HomeFeed | onEventNoUpdates, onEventShare(updateItemId, item) | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:17-23, 55-58 |
| 109 | lifecycle OnInitialize and OnReady | restored view: swiped items read; fresh view: three loading rows | readOverrides from the preload object when restored; loadingItems() when not restored | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:60-66 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 110 | data action FetchUpdates (AtStart) with OnAfterFetch | Get_UI_UpdateItemsForHomePage at block start; each new HomeFeed shows the skeleton until the answer | useFeedUpdatesQuery on mount with the library cache defaults: a new visit in the next 5 minutes shows the previous items at once and fetches again; a reconnect fetches again | `partial` | app/src/api/update/hooks.ts:10-16; app/src/api/update/repository.ts:19-26; app/src/api/client/queryClient.ts:15-18<br>**F2** (minor) |
| 111 | FetchUpdates and GetServices on a view restored from the cache (back navigation) | the runtime ScreenStateCache restores the view; whether the AtStart data actions run again is runtime code, not in the app sources (U19) | enterView hydrates the saved query data, then both queries fetch again (staleTime 0) and the read overrides apply on top | `unclear` | app/src/platform/navigation/viewCache.ts:3-8, 73-80; app/src/api/update/hooks.ts:10-16; app/src/api/service/hooks.ts:27-33; migration/app-shell.spec.md:351 (U19)<br>Question: Does TST run FetchUpdates and GetServices again when HomeFeed comes back from the view cache (Q3)? |
| 112 | server side of DataActionFetchUpdates | Connect_Updates_CS Get_UI_UpdateItemsForHomePage | contractHandler: three fictional items from the shared update collection | `mock-only` | app/src/pages/HomeFeed/mocks.ts:24-26; app/src/mocks/modules/UBTConnect/Directory_Updates/mocks.ts:42-59<br>Production needs DataActionFetchUpdates of FeedBlock_Updates, which calls Connect_Updates_CS Get_UI_UpdateItemsForHomePage. |
| 113 | server side of Action_UI_UpdateItem_MarkAsRead and _MarkAsUnread | Connect_Updates_CS service actions | contractHandler: IsRead changes in the collection | `mock-only` | app/src/pages/HomeFeed/mocks.ts:27-34; app/src/api/update/repository.ts:44-53<br>Production needs the service actions Action_UI_UpdateItem_MarkAsRead and Action_UI_UpdateItem_MarkAsUnread of Connect_Updates_CS. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 114 | SkeletonSection > list "list list-group home-page--update-list" | In_IsLoading = not IsDataFetched and not HasFetchError | isLoading = not isSuccess and not isError; the same list class, with list-error after a failed fetch | `match` | app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:55-60; app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:108-109; TST FeedBlock_Updates.mvc.js:155, 180 |
| 115 | item CustomContainer | "overflow-hidden"; background If(IsRead, null, CyanLightest); padding V ExtraSmall H Base; margin V Small; border Neutral3, Small, radius Large | the same options | `match` | app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:64-78; TST FeedBlock_Updates.mvc.js:197-232 |
| 116 | Update_ListItem args and its five events | HasBorderBottom not HasAccess, IgnoreReadBackground True, IsEnabled HasAccess, PaddingSizeId Bottom If(HasAccess, null, Small), ShowImage False, In_* from the item; SendGift, OnClick, Share, MarkAsUnread, MarkAsRead | the same inputs and the five handlers | `match` | app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:79-108; TST FeedBlock_Updates.mvc.js:254-370 |
| 117 | If not HasAccess #DoesntHaveAccess: subscription banner | CustomContainer (Neutral2, H Small, V Small, radius Large), Clicked → OnClick_SubscriptionUpgrade > container (text-align center) > container display-inline-block > IconText "Subscription upgrade required" (BlueDark, ExtraSmall, SemiBold) > Icon Lock (BlueDark, NonStandard_16) | the CustomContainer with the same options and click, then the plain text; no inner containers, no IconText, no lock icon (inside NotCaptured) | `partial` | app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:109-123; TST FeedBlock_Updates.mvc.js:388-520<br>**F1** (minor) |
| 118 | empty container after the item | an empty container | div data-container | `match` | app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:124 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 119 | Event_ListItemOnClick, HasAccess False | OnClick_SubscriptionUpgrade → App_Subscription_ShowUpgradePopUp | await showUpgradePopUp() | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:83-86; TST FeedBlock_Updates.mvc.js:717; BR-UBTCON-058; BR-C2UTL-107 |
| 120 | Event_ListItemOnClick, HasAccess True and GetHasCarouselEnabled True | Action_UI_UpdateItem_MarkAsRead, ScreenModel_Flush, ListFilter(HasAccess) → Directory_Updates_GetCarouselPreloadedHouseholds → SetPreloadObject(CarouselPreloadedHouseholds) → HouseholdCarousel(In_StartingHouseholdId) | await markUpdateItemAsRead, then the same carousel steps; no local IsRead change, as TST | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:87-102; TST FeedBlock_Updates.mvc.js:639-703; CR-HomeFeed-2; BR-UBTCON-059 |
| 121 | Event_ListItemOnClick, GetHasCarouselEnabled False | navigate HouseholdDetails(HouseholdId) | not built: nothing after MarkAsRead | `n/a` | migration/flags.md getHasCarouselEnabled default-only, TST value on (user, 2026-10-14); migration/knowledge/flag-values-tst.json; TST FeedBlock_Updates.mvc.js:708-709 |
| 122 | [DISABLED] assign of CarouselPreloadedHouseholds (SwipeCallback.PropertyId) | disabled node | not implemented | `n/a` | pack/blocks.md FeedBlock_Updates; BR-UBTCON-059<br>dead in the model |
| 123 | Event_MarkAsRead | DEV: MarkAsRead, IsRead = True, Directory_Updates_RefreshBottomBarCount(ForceRefresh True). TST: MarkAsRead, then IsRead = True | markUpdateItemAsRead, then setRead(true) | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:118-122; TST FeedBlock_Updates.mvc.js:789-810<br>DEV and TST differ (section 6.1). React follows TST. |
| 124 | Event_MarkAsUnread | DEV: MarkAsUnread, IsRead = False, Directory_Updates_RefreshBottomBarCount(ForceRefresh True). TST: MarkAsUnread, then IsRead = False | markUpdateItemAsUnread, then setRead(false) | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:123-127; TST FeedBlock_Updates.mvc.js:744-765<br>DEV and TST differ (section 6.1). React follows TST. |
| 125 | Event_SendGift | message Info "Send gift" | showFeedbackMessage('Send gift', info) | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:115-117; TST FeedBlock_Updates.mvc.js:870-886 |
| 126 | FetchUpdatesOnAfterFetch | an empty list triggers Event_NoUpdates | an effect raises onEventNoUpdates for an empty answer | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:68-72; TST FeedBlock_Updates.mvc.js:834-850 |
| 127 | Handler__Share, GetHasExtendedShare True | trigger Event_Share(Current item, UpdateItemId) | hasExtendedShare → onEventShare(id, item) | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:111-114; TST FeedBlock_Updates.mvc.js:1034-1056 |
| 128 | Handler__Share, GetHasExtendedShare False | ShowComingSoonMessage | not built | `n/a` | migration/flags.md getHasExtendedShare default-only, TST value on (user, 2026-10-14); TST FeedBlock_Updates.mvc.js:1061-1062 |
| 129 | OnClick_SubscriptionUpgrade (banner) | App_Subscription_ShowUpgradePopUp | onClickUpgrade → showUpgradePopUp() | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:128; TST FeedBlock_Updates.mvc.js:1004-1018 |
| 130 | OnInitialize (restored view) | restored and IsDataFetched: GetPreloadObject; not null → AssignFromObject(EntitiesCarousel_SwippedItems); IsRead = IsRead or ListAny(EntityItemId = UpdateItemId) | restored → swipedItemsRead(getPreloadObject()); overrides only set read | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:62-65; app/src/pages/HomeFeed/hooks/feedUpdatesState.ts:36-50; TST FeedBlock_Updates.mvc.js:905-959 |
| 131 | OnReady (fresh view) | not from cache: three placeholder rows (Birth, "Loadin Name", CurrDate, MALE, "Loadinf Location", IsRead True, HasAccess True) | loadingItems() while FetchUpdates runs | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:66, 74; app/src/pages/HomeFeed/hooks/feedUpdatesState.ts:17-34; TST FeedBlock_Updates.mvc.js:1087-1121 |
| 132 | unreachable end nodes (8 actions) | not connected | not implemented | `n/a` | pack/blocks.md FeedBlock_Updates<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 133 | BR-UBTCON-058 | access: mark read and open; no access: the upgrade popup | the same | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:82-102; BR-UBTCON-058 |
| 134 | BR-UBTCON-059 | carousel flag on: HouseholdCarousel with the accessible households; off: HouseholdDetails | the on arm; the off arm is n/a by the flag decision | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:88-102; BR-UBTCON-059 |
| 135 | BR-UBTCON-060 | an empty answer hides the Updates section | the same | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:68-72; app/src/pages/HomeFeed/HomeFeedPage.tsx:101-103; BR-UBTCON-060 |
| 136 | BR-UBTCON-061 | a restored view marks the swiped updates read | the same | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:62-65; BR-UBTCON-061 |
| 137 | BR-UBTCON-062 | share opens the sheet with the extended-share flag on | the on arm | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:111-114; BR-UBTCON-062 |
| 138 | BR-UBTCON-063 | mark read or unread calls the server, then sets the flag; "Send gift" shows a test message | the same | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:115-127; BR-UBTCON-063 |
| 139 | Directory_Updates_GetCarouselPreloadedHouseholds (own action of the flow; BR-UBTCON-172) | read item: empty swipe callback; unread item: UpdatesCarousel_SetIsRead with the JSON of its parameters; ListAppend {Household, SwipeAction} | the same per item, in order | `match` | app/src/lib/ubtConnect/actions.ts:86-112; pack/actions.md; TST UBTConnect.controller.js:1831-1866; BR-UBTCON-172 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 140 | block strings (4) | "Send gift", "Loadin Name", "Loadinf Location", "Subscription upgrade required" | the same texts | `match` | app/src/pages/HomeFeed/hooks/useFeedUpdates.ts:116; app/src/pages/HomeFeed/hooks/feedUpdatesState.ts:25, 28; app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:120 |

### 3.5 Section_FeedWrapper

React: `app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx`, with the App_Common_Blocks Section in
`components/Section.tsx`.

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 141 | inputs and event OnClick_ViewAll | isTransparentBackground False, ShowHeader True, showViewAll True, Title "", MarginTopSizeId "" | the same defaults; onOnClickViewAll | `match` | app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx:19-50; TST Section_FeedWrapper.mvc.js:13-38 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 142 | Section(isTransparentBackground, MarginTopSizeId) | App_Common_Blocks Section | Section with the same two inputs | `match` | app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx:53-56; app/src/pages/HomeFeed/components/Section.tsx:23-48; _shared/pack/blocks.md Section |
| 143 | If ShowHeader > CustomContainer > Columns_Two > CustomText Title | margin V Base; ReduceLast; Neutral9, Base, SemiBold | the same | `match` | app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx:57-73; TST Section_FeedWrapper.mvc.js:220-288 |
| 144 | If showViewAll > IconText "View all" > Icon ArrowRightAlt | IsIconOnRight, SpacingSize Base, Neutral7, ExtraSmall, SemiBold, underlined; Icon Neutral8 Medium_20; Clicked → OnClick_ViewAll2 | the same | `match` | app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx:74-97; TST Section_FeedWrapper.mvc.js:309-361 |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 145 | OnClick_ViewAll2 | trigger OnClick_ViewAll | onClicked = onOnClickViewAll | `match` | app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx:87; TST Section_FeedWrapper.mvc.js:435-450 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 146 | block strings (1) | "View all" | the same text | `match` | app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx:78 |

### 3.6 Blocks of other flows

- AppLogo_White (App_Common): row 147, `match`.
- App_NotificationIcon (App_Common_Blocks, `_shared` pack): row 148, `match`. Its badge block App_IconBadge
  (BR-UBTCON-319) is not checked here.
- BottomBarMenu (App_Common): HomeFeed passes ActiveItem Home and isRootPage (row 014, `match`). The report of
  App_Common checks BR-UBTCON-314 to BR-UBTCON-318.
- CommonUI_InsideLayout (App_Common): HomeFeed and FeedItemDetail pass no argument (rows 015 and 040, `match`). The
  report of App_Common checks BR-UBTCON-310 to BR-UBTCON-313.
- Dialog_ExitConfirmation (App_Common_Blocks_PopupDialogs, shared): HomeFeed shows it after OnReady (row 013, `match`,
  decision U15). Its behaviour is not checked here.
- Section (App_Common_Blocks, shared): row 142, `match`.
- Directory_CommunityNumbers and Directory_CommunityNumbers__Number (Directory_CommonBlocks): only in the dead branch
  of row 009.
- The other 13 blocks of `pack/blocks.md` come through App_NotificationIcon, CommonUI_InsideLayout and BottomBarMenu.
  They are not checked here. The reports of App_Common, App_PIN, App_Policies and Legacy_Share check them.

## 4. Shared blocks and actions

The flow-level rows (screen `-` in `checklist.json`):

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 147 | AppLogo_White (App_Common, used by HomeFeed only) | static image ConnectLogoWhite, width 155px | img ConnectLogoWhite.svg, width 155px | `match` | app/src/pages/HomeFeed/components/AppLogo_White.tsx:7-12; App_Common/pack/blocks.md AppLogo_White |
| 148 | App_NotificationIcon (App_Common_Blocks, shared; BR-UBTCON-320) | App_IconBadge (LocalNotifications, Neutral0, Notifications, isLoading = not Notifications_IsSynched, max 9); IconClick: GetHasNewNotifications → Notifications, else MessageList; OnReady and Refresh Updated read GetUnreadNotificationNumber | useNotificationIcon and NotificationIcon with the same rules | `match` | app/src/platform/session/useNotificationIcon.ts:31-46; app/src/components/notification/NotificationIcon/NotificationIcon.tsx:24-44; _shared/pack/blocks.md App_NotificationIcon; BR-UBTCON-320 |

The flow calls none of the 15 shared actions of `pack/actions.md` on TST. The DEV model calls
Directory_Updates_RefreshBottomBarCount (BR-UBTCON-171) from FeedBlock_Updates, and TST does not (section 6.1). The
other 14 actions run through CommonUI_InsideLayout and BottomBarMenu, and the reports of those flows check them.

The client variables of `pack/data.md`: row 061 checks `Client.Embedd_B2CTenant`. The other nine belong to
App_NotificationIcon (row 148), the bottom-bar count and CommonUI_InsideLayout.

Not checked here (referenced blocks of other modules); the rows above check the arguments that the flow passes:
- UBTConnectLibrary: Layout_HomePage, Layout_DetailPage, CustomContainer, CustomText, Columns_Two, IconText, Icon,
  CircleButton, CircleButton_WithLabel, SkeletonSection, Update_ListItem.
- OutSystemsUI: Carousel, Gallery.
- UBTConnect_Utils: ShareSheet, ShareableObject_Generic, SharePopup. Row 105 checks Dialog_GoExternalApp against TST.
- NavigationHandler: ConfirmAction, SetPreloadObject, GetPreloadObject (platform code).

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | minor | FeedBlock_Updates / If not HasAccess (#DoesntHaveAccess) | TST: CustomContainer > container (text-align center) > container display-inline-block > IconText "Subscription upgrade required" (BlueDark, ExtraSmall, SemiBold) with Icon Lock (BlueDark, NonStandard_16). React renders the CustomContainer with plain text inside NotCaptured: no lock icon and no text style. A user without access to an update sees another banner. | `app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx:109-123` | Build the tree of TST `FeedBlock_Updates.mvc.js:388-520` with IconText and Icon (Q2). |
| F2 | minor | FeedBlock_Services / GetServices; FeedBlock_Updates / FetchUpdates | Both queries use the library defaults (gcTime 5 minutes, refetchOnReconnect true). TST fetches at block start: a new HomeFeed shows the skeleton page (five empty services, three loading rows) until the answer, and a reconnect does not fetch. React shows the old lists at once on a new visit, and fetches again after a reconnect. The comment of useFeedServicesQuery describes this; no decision record names it. | `app/src/api/service/hooks.ts:21-33`; `app/src/api/update/hooks.ts:10-16` | Set gcTime 0 and refetchOnReconnect false, as useCommunityPopulationQuery does (Q1). |
| F3 | info | FeedBlock_Services / OnAfterFetch_GetServices, ForceAddService True | The "Add Service" tile gets iconId '' instead of UBT_Icons2.AddCircle ("connect-icon-add_circle", `pack/references.md`). HomeFeed passes ForceAddService False, so no user sees the tile. | `app/src/pages/HomeFeed/hooks/feedServicesState.ts:23-26` | Use the AddCircle id and remove the comment "not captured". |
| F4 | minor | Dialog_GoExternalApp (UBTConnect_Utils) / open state | TST puts the icon in a container with "text-align: center" (:281) and the confirm label in a CustomContainer with display flex, row and centred items (:447-450). React leaves both out, and its component doc says so. The icon and the label do not get the TST alignment. | `app/src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx:31-35, 71-125` | Add the two containers from the TST view (Q2). |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

The DEV pack and the TST compiled code differ in eight places. React follows TST in each place.

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| HomeFeed / data action GetCommunityStatistics | OnDemand data action that calls Get_UI_CommunityNumbers | no data action | TST (row 005) | `UBTConnect.Home.HomeFeed.mvc.js:645-648` |
| HomeFeed / ScreenEvent_OnReady | IsScreenInitialized True, JS IsRestoredFromCache, refresh GetCommunityStatistics when not restored | IsScreenInitialized True only | TST (row 027) | `UBTConnect.Home.HomeFeed.mvc.js:727-741` |
| HomeFeed / Content | If True around Section_CommunityPopulation, else CustomContainer > Directory_CommunityNumbers | Section_CommunityPopulation with no If; no Directory_CommunityNumbers | TST (rows 009, 010) | `UBTConnect.Home.HomeFeed.mvc.js:286-292` |
| HomeFeed / ShareSheet | inside If True #HideInServiceStudio | no If | TST (row 016) | `UBTConnect.Home.HomeFeed.mvc.js:503` |
| HomeFeed / ButtonOnClick | no such action | screen action ButtonOnClick → UBTConnect_Utils TestDownload; no widget binds it | neither builds it (row 028) | `UBTConnect.Home.HomeFeed.mvc.js:674-695` |
| FeedBlock_Services / OnClick_Service, ElGusto | in the ExternalApps switch: popup info ("El Gusto", SVG_ElGusto, URL), then ConfirmAction | in the ExternalLinks switch: OpenInApp_OpenExternalLink(ExternalLinks_ElGusto, False) | TST (row 094) | `UBTConnect.Home.FeedBlock_Services.mvc.js:1031-1040` |
| FeedBlock_Services / third switch of OnClick_Service | an empty MyNotes case | no MyNotes case | TST (row 097) | `UBTConnect.Home.FeedBlock_Services.mvc.js:1041-1052` |
| FeedBlock_Updates / Event_MarkAsRead, Event_MarkAsUnread | Directory_Updates_RefreshBottomBarCount(ForceRefresh True) after the flag | no badge refresh | TST (rows 123, 124) | `UBTConnect.Home.FeedBlock_Updates.mvc.js:744-810` |

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these two places a KB page disagrees with the DEV pack and with TST. React
follows TST in each place.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-057: My Notes shows "This feature will be coming soon." and "does not open the Notes screen from here". BR-UBTCON-054 lists five in-app destinations without My Notes. | MyNotes opens Notes in the first switch of OnClick_Service. The DEV pack has the same branch. | `UBTConnect.Home.FeedBlock_Services.mvc.js:992-995` |
| K2 | `ui/home-feed.md`, FeedBlock_CommunityPopulation: "two texts in a skeleton" | Only the count is inside SkeletonSection; the label "Community Population" is outside. The DEV pack has the same tree. | `UBTConnect.Home.FeedBlock_CommunityPopulation.mvc.js:217-245` |

Three KB texts agree with TST and not with the DEV pack: BR-UBTCON-056 (El Gusto opens its link at once), BR-UBTCON-063
(no badge refresh) and the ButtonOnClick line of `ui/home-feed.md`. The DEV model changed after the KB extraction.

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | FeedBlock_Services and FeedBlock_Updates keep the library cache defaults (F2). Do you want each new HomeFeed to fetch with the skeleton, as TST does? | TST is the source of truth for the fetch moment. In React the second visit shows old data first. | (a) Set gcTime 0 and refetchOnReconnect false on both queries; the view cache still restores a back navigation. (b) Keep the cache and record a decision. | (a): it matches TST, and useCommunityPopulationQuery on the same screen already does it. |
| Q2 | Build the two states that the capture does not hold (the subscription banner, F1, and the open Dialog_GoExternalApp, F4) from the TST compiled view? | The NotCaptured marker says: never invent a design. The compiled view gives the full widget tree, so the build copies it. | (a) Build both from the compiled view now. (b) Capture the two states on TST first (read-only), then build. (c) Keep them as they are. | (a): the tree and the options are in the TST code; a capture adds only the pixels. |
| Q3 | Does TST run FetchUpdates and GetServices again when HomeFeed comes back from the view cache (row 111)? | React fetches both again after it restores the saved data. The flow code does not show what the runtime does. | (a) Check it on TST: open an update, go back, and watch the calls (read-only). (b) Accept the React refetch and record it under U19. | (a): one read-only check settles it. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 17 | 17 | 0 | 0 | 0 | 0 | 0 | 0 |
| data | 11 | 4 | 2 | 0 | 0 | 5 | 0 | 0 |
| ui | 41 | 37 | 1 | 0 | 1 | 0 | 2 | 0 |
| actions | 51 | 38 | 1 | 0 | 0 | 0 | 12 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 20 | 19 | 1 | 0 | 0 | 0 | 0 | 0 |
| strings | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | **148** | **123** | **5** | **0** | **1** | **5** | **14** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| Home-111 | `unclear` | `match` | migration/runtime-sources/OutSystemsReactView.js:7, 9; migration/runtime-sources/OutSystems.js:16-17; TST UBTConnect.Home.FeedBlock_Updates.mvc.js:1301; app/src/platform/navigation/viewCache.ts:73-80; app/src/api/update/hooks.ts:10-16; app/src/api/service/hooks.ts:27-33 |

## 12. Captures on TST (2026-10-27)

Read-only captures (`review/captures.md`, script `tools/capture_followup.cjs`). Row changes:

| Row | Before | After | Evidence |
|---|---|---|---|
| Home-111 | match | match | capture 2026-10-27 (review/captures.md §5): after Back to HomeFeed, DataActionFetchUpdates and DataActionGetServices run again (+118 ms), as React does |

Counts after the captures (checklist.json, 148 rows): match 123, partial 5, missing 0, differs 1, mock-only 5, n/a 14, unclear 0.
