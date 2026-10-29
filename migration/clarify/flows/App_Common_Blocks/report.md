# Flow report: App_Common_Blocks

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (block-only flow) |
| Own blocks | App_IconBadge, App_NotificationIcon, App_NotificationRefresh, External_Link, ItemCardActions, ListLoading, Section, SectionSeparator (8) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB rules of `pack/kb.md`, TST compiled code of the 8 blocks, `Connect2_LegacyShared.controller.js`, `migration/runtime-sources/OutSystems*.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 31 · partial 1 · missing 0 · differs 0 · mock-only 0 · n/a 10 · unclear 0 (same as `checklist.json`).
- **F1** (info): `App_NotificationIcon` starts `LocalNotifications` at -1 and sets it in OnReady. React starts it at
  the unread number. The skeleton state of -1 does not occur in React.
- The Share and Unmark handlers of `ItemCardActions` are `n/a`. The built user `NoteCard_Item` hides both buttons.
  The other user `Bookmarks_Card_Item` belongs to the screen Bookmarks, which is `skip` on the board.
- `ListLoading` is `n/a`: no element of the module uses it. The reader's note "no mock handler" for
  `DeleteBookmarkByBookmarkId2` is wrong: the mock is in `app/src/containers/EntityDetailsActions/mocks.ts`.
- Status: the badge, the bell, the external link, the note card actions and the section containers work as on TST.

## 2. Blocks

### 2.1 App_IconBadge

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -001 identity | inputs BadgeNumber (mandatory), MaxNotifications = 9, IconId, IconColor, isLoading (mandatory); event OnClick | `BottomBarIconBadge` with the same props; defaults for the mandatory inputs | match | `app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx:10-33`; users App_NotificationIcon and BottomBarMenu pass all inputs |
| -002 ui `SkeletonSection` | `In_IsLoading = isLoading or BadgeNumber = -1` | `isLoading \|\| badgeNumber === '-1'` | match | React `:37`; TST view `:199` |
| -003 ui If `BadgeNumber <> 0` true | link → IconClick; `IconBadge(Red, MaxNumber, Number)` with `Icon` ("ignore-loading", Base_24) | `OSLink` + `IconBadge` + `Icon` | match | React `:38-53`; TST `:246, 273, 302` |
| -004 ui If false | `Icon` alone, on Click → IconClick | `Icon` with `onClick={iconClick}` | match | React `:54-62` |
| -005 actions IconClick | trigger OnClick | `onOnClick?.()` | match | React `:34` |
| -037 logic `BR-UBTCON-319` | number only when not zero; skeleton while loading or -1 | the same | match | rows -002 to -004 |

### 2.2 App_NotificationIcon

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -006 identity | no inputs; local `LocalNotifications = -1`; OnReady | hook `useNotificationIcon` + component `NotificationIcon` | match | `app/src/platform/session/useNotificationIcon.ts:31-47`; `app/src/components/notification/NotificationIcon/NotificationIcon.tsx:24-45` |
| -007 data `LocalNotifications` | default -1 until OnReady | `useState(getUnreadNotificationNumber)` | partial | F1. DEV `pack/blocks.md` (local variable -1); TST OnReady `App_NotificationIcon.mvc.js:282-286`; `migration/change-requests/CR-HomeFeed-3.md:41` keeps the block unchanged; React `useNotificationIcon.ts:35` |
| -008 ui `App_IconBadge` args | BadgeNumber = LocalNotifications, Neutral0, Notifications, `isLoading = not Notifications_IsSynched`, Max 9 | the same | match | `NotificationIcon.tsx:34-41`; TST view `:139` |
| -009 data `Client.Notifications_IsSynched` | read | `useClientVar('UBTConnect.Notifications_IsSynched')` | match | `useNotificationIcon.ts:33,37` |
| -036 data `Client.Notifications_LastChecked` | read as Datetime of App_NotificationRefresh | `useClientVar('UBTConnect.Notifications_LastChecked')` | match | `useNotificationIcon.ts:34` |
| -010 ui `App_NotificationRefresh` args | Datetime = Notifications_LastChecked; on Updated → App_NotificationRefreshUpdated | `<NotificationRefresh datetime={lastChecked} onUpdated={onRefreshUpdated} />` | match | `NotificationIcon.tsx:42` |
| -011 actions App_NotificationRefreshUpdated | call OnReady | reads the unread number again | match | `useNotificationIcon.ts:43-45` |
| -012 actions OnReady | `LocalNotifications = GetUnreadNotificationNumber.UnreadNotifications` | reads `Connect2_LegacyShared.UnreadNotificationsNumber` | match | TST `Connect2_LegacyShared.controller.js:5579-5588` returns that client variable; React `useNotificationIcon.ts:22` |
| -013 actions IconClick: GetHasNewNotifications | flag wrapper | `flagValue('C2NewNotifications')` | match | `useNotificationIcon.ts:41`; `migration/knowledge/feature-flag-helpers.md:16`; `flag-values-tst.json:10` (false) |
| -014 logic If true | navigate Notifications | `/UBTConnect/Notifications` | match | the flag is false on TST; the branch is built correctly; TST `:252` |
| -015 logic If false | navigate MessageList | `/UBTConnect/MessageList` | match | TST `:256`; React `:41` |
| -038 logic `BR-UBTCON-320` | bell → Notifications when the flag is on, else MessageList; loading until synched | the same | match | rows -008, -013 to -015 |

### 2.3 App_NotificationRefresh

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -016 identity | input Datetime (mandatory); event Updated (mandatory); empty widget tree | `NotificationRefresh({ datetime, onUpdated })` | match | `app/src/components/notification/NotificationRefresh/NotificationRefresh.tsx:16-24` |
| -017 actions OnParametersChanged | trigger Updated | `useEffect` on a new `datetime`, not on mount | match | the runtime fires OnParametersChanged only when the inputs change (`migration/runtime-sources/OutSystemsReactView.js:7`, `UNSAFE_componentWillUpdate` → `fireAfterInputsChanged`; `OutSystems.js:17`); React `:17-22` |

### 2.4 External_Link

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -018 identity | In_Link (mandatory), IsEnabled = True, IconVisible = True; local FontSize = Small | the same props | match | `app/src/pages/OneSchoolGlobalDetails/components/External_Link.tsx:15-43`; user Map_PoIPreview belongs to Map (board skip) |
| -019 ui `IconText` + `Icon` | xs spacing; Primary or Neutral7; underlined; OpenNew, NonStandard_16, In_Visible = IconVisible | the same | match | React `:45-64` |
| -020 actions LinkClicked: iOS | `CheckIOsPlatform()` → navigate to In_Link.Link | `checkIOsPlatform()` → `navigateToPage(inLink.link, false)` | match | TST `External_Link.mvc.js:291-296`; JS `migration/shell/sources/UBTJavaScriptUtils.controller.js:60-68` (navigator.platform iphone, ipad, ipod); React `:31-35, 47` |
| -021 actions LinkClicked: else | `OpenInApp_OpenExternalLink(Url)` | `openInApp_OpenExternalLink(inLink.link, false)` | match | TST `:300` passes False for InNewTab; React `:48` |
| -039 logic `BR-UBTCON-334` | RedirectToURL on iOS, in-app browser helper elsewhere | the same | match | rows -020, -021 |

### 2.5 ItemCardActions

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -022 identity | ActionBarOptions, ObjectId (mandatory); event Event_AddNote (mandatory) | `ItemCardActions({ actionBarOptions, objectId, onEventAddNote })` | match | `app/src/pages/Notes/components/ItemCardActions.tsx:8-17`; built user NoteCard_Item passes `ShowUnbookmark: False, ShowAddNote: True, ShowShare: False` (`flows/Notes/pack/blocks.md:34`) |
| -042 identity BookmarkType, Event_ItemUnbookmarked | input and event for the Unmark path | not ported | n/a | used only by Bookmarks_Card_Item → Bookmarks_Card_List → Bookmarks, `skip` on the board (`migration/board.md:53`, user 2026-10-14) |
| -023 ui `CustomContainer` + `ItemCard_ActionBar` | vertical Small padding, Neutral2 top border | the same; only `onEventAddNote` wired | match | `ItemCardActions.tsx:21-28` |
| -024 actions Handler_OnClickAddNote | trigger Event_AddNote | `onEventAddNote` | match | `ItemCardActions.tsx:12,28` |
| -025 actions Handler_OnClickShare | empty action | not ported | n/a | Share hidden on Notes; other user is on Bookmarks (board skip, `board.md:53`) |
| -026 actions Handler_OnClickUnmark: ToggleBookmarkItem_C2 | `ToggleBookmarkItem_C2(BookmarkType, ObjectId, True)` | not ported | n/a | Unbookmark hidden on Notes; board skip of Bookmarks (`board.md:53`) |
| -027 actions Handler_OnClickUnmark: Event_ItemUnbookmarked | trigger the event | not ported | n/a | as row -026 |
| -040 logic `BR-UBTCON-335` | the parent hears of the unbookmark even after a failed delete | not ported | n/a | as row -026 |
| -028 actions ToggleBookmarkItem_C2 (shared, 9 flows) | body in `_shared/pack` | `app/src/lib/ubtConnect/actions.ts:249, 266` | n/a | this flow reaches it only from row -026; not checked here (shared) |
| -041 logic `BR-UBTCON-237`, `BR-UBTCON-238` | device copy after the server confirms the add or the delete | in `toggleBookmarkItem_C2` | n/a | as row -028 |
| -029 data AddBookmark2 | `Connect_Bookmarks_CS` service | `app/src/api/bookmark/repository.ts:108`; mock `app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39` | n/a | called from ToggleBookmarkItem_C2 only (row -028) |
| -030 data DeleteBookmarkByBookmarkId2 | `Connect_Bookmarks_CS` service | `app/src/api/bookmark/repository.ts:119`; mock in `app/src/containers/EntityDetailsActions/mocks.ts:17-20` | n/a | as row -029; the mock exists outside `app/src/mocks/`, which the index of `app.md` searches |

### 2.6 ListLoading

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -031 identity | container `list-updating`; used by nothing in the module | no port; the class exists in `Spinner.tsx:17-18` | n/a | dead in the model: `pack/blocks.md` "used by: nothing in this module"; TST file present (view `:124`) |

### 2.7 Section

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -032 identity | isTransparentBackground, AddHorizontalPadding = True, MarginTopSizeId | the same props | match | `app/src/pages/HomeFeed/components/Section.tsx:6-30` |
| -033 ui `CustomContainer` Options | Transparent or Neutral0; vertical Small; horizontal Base or none; margin top = MarginTopSizeId | the same | match | TST `Section.mvc.js:174-187` (the pack cuts the args); React `Section.tsx:37-43` |

### 2.8 SectionSeparator

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -034 ui `CustomContainer` | Neutral4 background, top padding xs | the same | match | `app/src/components/ui/SectionSeparator/SectionSeparator.tsx:14-25` |

### 2.9 Flow-level rows

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -035 strings | none (`pack/strings.md`) | none | match | the blocks render only data and icons |

No block has a validation.

## 3. Blocks of the flow

The flow uses no block of another UBTConnect flow. The referenced library blocks (`SkeletonSection`, `IconBadge`,
`Icon`, `IconText`, `CustomContainer`, `ItemCard_ActionBar`): this report checks only their arguments. The
`_libraries` unit owns their internals.

## 4. Shared blocks and actions

| Shared item | React location | Verdict |
|---|---|---|
| `ToggleBookmarkItem_C2` (folder Directory_MyBookmarks, 9 flows) | `app/src/lib/ubtConnect/actions.ts:249, 266` | not checked here (shared); not reached from a built screen of this flow |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | info | App_NotificationIcon / `LocalNotifications` | TST starts at -1 (skeleton) and sets the unread number in OnReady. React starts at the unread number. | `app/src/platform/session/useNotificationIcon.ts:35` | None needed for the user. Note the start value in the hook comment as a known difference. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| App_NotificationIcon IconClick | navigate with transition Inherited | transition Default | `navigate(path)` without a transition argument | `App_NotificationIcon.mvc.js:252,256`; `useNotificationIcon.ts:41` |
| External_Link LinkClicked (iOS) | navigate RedirectToURL, transition Inherited | `navigateTo(generateScreenURL(link))`, transition Default | `navigateToPage(link, false)` | `External_Link.mvc.js:296`; `External_Link.tsx:47` |
| Section Options | the dump cuts the args at "If…" | horizontal Base or null; margin top = MarginTopSizeId | TST | `Section.mvc.js:174-187` |

### 6.2 KB pages vs TST (for the KB owner)

None. The rules `BR-UBTCON-319`, `-320` and `-334` agree with TST.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 8 | 6 | 0 | 0 | 0 | 0 | 2 | 0 |
| data | 5 | 2 | 1 | 0 | 0 | 0 | 2 | 0 |
| ui | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 12 | 8 | 0 | 0 | 0 | 0 | 4 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 7 | 5 | 0 | 0 | 0 | 0 | 2 | 0 |
| strings | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 42 | 31 | 1 | 0 | 0 | 0 | 10 | 0 |
