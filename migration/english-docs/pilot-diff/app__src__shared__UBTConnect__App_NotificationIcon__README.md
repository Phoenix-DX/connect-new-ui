### app/src/shared/UBTConnect/App_NotificationIcon/README.md

**Change 1**

Before:

> Inputs, events, placeholders: none. Children: App_IconBadge (isLoading = not `UBTConnect.Notifications_IsSynched`,
> BadgeNumber = LocalNotifications, MaxNotifications 9, icon `notifications` in neutral-0) and App_NotificationRefresh
> (Datetime = `UBTConnect.Notifications_LastChecked`).
> 
> - OnReady / App_NotificationRefresh Updated: LocalNotifications = GetUnreadNotificationNumber (client variable
>   `Connect2_LegacyShared.UnreadNotificationsNumber`, kept by the shell). OnReady is read before the first paint.
> - IconClick: GetHasNewNotifications (flag `C2NewNotifications`, decision D11) → `/UBTConnect/Notifications`, else
>   `/UBTConnect/MessageList`.

After:

> The block has no inputs, no events and no placeholders. The block has two children:
> 
> - App_IconBadge. It has these settings:
>   - isLoading = not `UBTConnect.Notifications_IsSynched`.
>   - BadgeNumber = LocalNotifications.
>   - MaxNotifications 9.
>   - The icon is `notifications`, in neutral-0.
> - App_NotificationRefresh (Datetime = `UBTConnect.Notifications_LastChecked`).
> 
> - OnReady / App_NotificationRefresh Updated: the block sets LocalNotifications = GetUnreadNotificationNumber.
>   - GetUnreadNotificationNumber returns the client variable `Connect2_LegacyShared.UnreadNotificationsNumber`.
>   - The shell keeps this variable.
>   - The React app sets LocalNotifications before the first paint
>     [App_NotificationIcon.tsx, `useState(getUnreadNotificationNumber)`].
> - IconClick: the user clicks the icon. The block runs GetHasNewNotifications (flag `C2NewNotifications`, decision D11).
>   - When the flag is on, the app opens `/UBTConnect/Notifications`.
>   - Otherwise, the app opens `/UBTConnect/MessageList`.

**Change 2**

Before:

> Stories set the client variables with a decorator (2 unread notifications; the captured number is masked).

After:

> The stories use a decorator to set the client variables. The decorator sets 2 unread notifications. The captured number is
> masked.

**Change 3**

Before:

> - Zero unread notifications (icon without badge): App_IconBadge branch, tested there.

After:

> - Zero unread notifications (icon without badge): this case is a branch of App_IconBadge. The tests of App_IconBadge cover it.

