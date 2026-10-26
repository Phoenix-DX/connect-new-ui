# App_NotificationIcon

OutSystems: `UBTConnect.App_Common_Blocks.App_NotificationIcon` · pack
`migration/blocks/UBTConnect.App_Common_Blocks.App_NotificationIcon.md`

The block has no inputs, no events and no placeholders. The block has two children:

- App_IconBadge. It has these settings:
  - isLoading = not `UBTConnect.Notifications_IsSynched`.
  - BadgeNumber = LocalNotifications.
  - MaxNotifications 9.
  - The icon is `notifications`, in neutral-0.
- App_NotificationRefresh (Datetime = `UBTConnect.Notifications_LastChecked`).

The component renders from props only (`isLoading`, `unreadNumber`, `lastChecked`, `onIconClick`,
`onRefreshUpdated`). The flows are in `useNotificationIcon` (`platform/session/useNotificationIcon.ts`). The pages
(CountryList, HomeFeed, Notes, Updates_SingleList) call the hook and give the result to the component:

- OnReady / App_NotificationRefresh Updated: the block sets LocalNotifications = GetUnreadNotificationNumber.
  - GetUnreadNotificationNumber returns the client variable `Connect2_LegacyShared.UnreadNotificationsNumber`.
  - The shell keeps this variable.
  - The hook sets LocalNotifications before the first paint (`useState(getUnreadNotificationNumber)`).
- IconClick: the user clicks the icon. The block runs GetHasNewNotifications (flag `C2NewNotifications`, decision D11).
  - When the flag is on, the app opens `/UBTConnect/Notifications`.
  - Otherwise, the app opens `/UBTConnect/MessageList`.

## Captured variants (1 distinct in the pack; 3 tested)

| Capture | Source                                        |
| ------- | --------------------------------------------- |
| v1      | CountryList/default (pack: wrappers only)     |
| v2      | HomeFeed/default (synchronised, full markup)  |
| v3      | HomeFeed/loading (not synchronised: skeleton) |

The stories give 2 unread notifications as a prop. The captured number is masked.

## Not captured

- Zero unread notifications (icon without badge): this case is a branch of App_IconBadge. The tests of App_IconBadge cover it.
