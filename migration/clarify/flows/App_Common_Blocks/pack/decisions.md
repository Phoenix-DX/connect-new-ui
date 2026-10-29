# Recorded decisions and facts that name the elements of UI flow App_Common_Blocks

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## app-shell.spec

- `migration/app-shell.spec.md:118` (App_IconBadge): - The badge is `App_IconBadge` (max 9). `isLoading = not Notifications_IsSynched`.
- `migration/app-shell.spec.md:132` (App_IconBadge): | updates | `connect-icon-list_alt` (inside `App_IconBadge`, `.ubt-badge.background-red`) | Updates | `/UBTConnect/Updates_SingleList` (627-630) | client var `Directory_Updates_UnreadCount`; refreshed on bottom-bar OnReady when older than `…CheckFrequency_Minut` → `ServiceAPIGet_UI_UpdateItems_Unrea
- `migration/app-shell.spec.md:111` (App_NotificationIcon): | HomePage | – | `App_Common.AppLogo_White` (`img` 155px wide) | `ConnectPatterns.Icon` + `App_NotificationIcon` | HF dom:16-40 |
- `migration/app-shell.spec.md:115` (App_NotificationIcon): The bell is the block `App_Common_Blocks.App_NotificationIcon` (HF p:UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js:139, 176,

## change requests

- `migration/change-requests/CR-HomeFeed-3.md:6` (App_IconBadge): `BottomBarContent`, `app/src/shared/osui/BottomBarItem`), `App_Common_Blocks.App_IconBadge` / `App_NotificationRefresh`
- `migration/change-requests/CR-HomeFeed-3.md:7` (App_IconBadge): (`app/src/shared/UBTConnect/App_IconBadge`, `App_NotificationRefresh`)
- `migration/change-requests/CR-HomeFeed-3.md:14` (App_IconBadge): - [structure] bottom bar item 3 (`b12-l1-67_2-$b2`, Updates with App_IconBadge): captured as a `div` directly in the list,
- `migration/change-requests/CR-HomeFeed-3.md:21` (App_NotificationIcon): `App_NotificationIcon id="$b3"`), as the Layout_HomePage story V1 does.
- `migration/change-requests/CR-HomeFeed-3.md:41` (App_NotificationIcon): App_NotificationIcon.mvc.js:12-13, OnReady :281-286): fixed by the seeding, block unchanged. (4) item wrappers/widths:
- `migration/change-requests/CR-HomeFeed-3.md:6` (App_NotificationRefresh): `BottomBarContent`, `app/src/shared/osui/BottomBarItem`), `App_Common_Blocks.App_IconBadge` / `App_NotificationRefresh`
- `migration/change-requests/CR-HomeFeed-3.md:7` (App_NotificationRefresh): (`app/src/shared/UBTConnect/App_IconBadge`, `App_NotificationRefresh`)
- `migration/change-requests/CR-HomeFeed-1.md:7` (External_Link): - Other routes using it (survey sources): OpenExternalLink in App_Common_Blocks.External_Link, App_Menu.Menu,

## knowledge

- `migration/knowledge/feature-flag-helpers.md:16` (App_NotificationIcon): | GetHasNewNotifications | outSystems_FF.C2NewNotifications | false | App_NotificationIcon, MessageDetail | yes: bell → Notifications / MessageList (D11) |

## flags

- `migration/flags.md:146` (App_NotificationIcon): - `action:getHasNewNotifications`: `UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js`, `UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js`
- `migration/flags.md:184` (ItemCardActions): - `action:toggleBookmarkItem_C2`: `UBTConnect.App_Common_Blocks.ItemCardActions.mvc.js`, `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`
