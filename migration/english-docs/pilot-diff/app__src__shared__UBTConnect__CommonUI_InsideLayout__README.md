### app/src/shared/UBTConnect/CommonUI_InsideLayout/README.md

**Change 1**

Before:

> Events: `Event_OnScreenLocked`, `Event_OnScreenUnlocked` are declared but never raised by the block (no props).
> Placeholders: none. Children, in the captured order: `OfflineDataSyncEvents`, Block_PINUnlock (the shell's `LockHost`:
> signed out, PIN to register and lock-ignoring screens hide it, as HideLockScreen; not rendered with
> In_IgnoreLockScreen), `Policy_Checker` (not In_IgnorePolicy and `App_Policies_HasPolicyToAccept`),
> `Dialog_AccessRestrictedAction` (shell `DialogAccessRestrictedAction`), `HandleOnResumeOpenLink`,
> `HandleImageLoadError`, then `PreventBackNavigation` → HomeFeed when IsNavigateToHomeOnBack, else
> `BackNavigationHandler` (priority −10000) → HomeFeed after 0 ms at the first entry of the tab.
> 
> Rendered by the layouts in `Placeholder_CommonUI_Inside_Layout` (Connect2 screens: after their layout). Until they do,
> the shell's `CommonUiHost` + `LockHost` in AppFrame stand in for it; this block replaces both per screen (the back logic
> is the same as `shell/dialogs/commonUiBack.ts`, here through the NavigationHandler blocks the capture shows).

After:

> The block declares the events `Event_OnScreenLocked` and `Event_OnScreenUnlocked`. The block never raises them. They
> have no props. The block has no placeholders.
> 
> The block renders these children, in the captured order:
> 
> - `OfflineDataSyncEvents`.
> - Block_PINUnlock. In the React app, this is the shell's `LockHost`.
>    - The block does not render it when In_IgnoreLockScreen is on.
>    - `LockHost` hides it in the same cases as HideLockScreen:
>      - The user is signed out.
>      - The user must register a PIN.
>      - The screen ignores the lock.
> - `Policy_Checker`. The block renders it when In_IgnorePolicy is off and `App_Policies_HasPolicyToAccept` is on.
> - `Dialog_AccessRestrictedAction`. In the React app, this is the shell's `DialogAccessRestrictedAction`.
> - `HandleOnResumeOpenLink`.
> - `HandleImageLoadError`.
> - One of two back handlers:
>    - When IsNavigateToHomeOnBack is on, the block renders `PreventBackNavigation`. It opens HomeFeed.
>    - Otherwise, the block renders `BackNavigationHandler` (priority −10000). At the first entry of the tab, it opens
>      HomeFeed after 0 ms.
> 
> The layouts render this block in `Placeholder_CommonUI_Inside_Layout`. The Connect2 screens render it after their layout.
> Until the layouts do this, the shell's `CommonUiHost` and `LockHost` in AppFrame stand in for the block. This block
> replaces both on each screen. The back logic is the same as `shell/dialogs/commonUiBack.ts`. This block uses the
> NavigationHandler blocks that the capture shows.

**Change 2**

Before:

> - Policy_Checker, In_IgnoreLockScreen and the PreventBackNavigation branch: from the compiled view, tested in
>   `CommonUI_InsideLayout.test.tsx`.
> - In_ShowLockScreen (Block_PINUnlock In_ForceVisible): `LockHost` takes no such input; every caller passes false.

After:

> - Policy_Checker, In_IgnoreLockScreen and the PreventBackNavigation branch: the source is the compiled view. The tests are in
>   `CommonUI_InsideLayout.test.tsx`.
> - In_ShowLockScreen (Block_PINUnlock In_ForceVisible): `LockHost` has no such input. Every caller passes false.

