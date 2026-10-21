# CommonUI_InsideLayout

OutSystems: `UBTConnect.App_Common.CommonUI_InsideLayout` · pack
`migration/blocks/UBTConnect.App_Common.CommonUI_InsideLayout.md` · spec `migration/app-shell.spec.md` sections 2, 7, 9

| Input               | Type    | Prop                 | Default |
| ------------------- | ------- | -------------------- | ------- |
| In_ShowLockScreen   | Boolean | `inShowLockScreen`   | `false` |
| In_IgnorePolicy     | Boolean | `inIgnorePolicy`     | `false` |
| In_IgnoreLockScreen | Boolean | `inIgnoreLockScreen` | `false` |

The block declares the events `Event_OnScreenLocked` and `Event_OnScreenUnlocked`. The block never raises them. They
have no props. The block has no placeholders.

The block renders these children, in the captured order:

- `OfflineDataSyncEvents`.
- Block_PINUnlock. In the React app, this is the shell's `LockHost`.
   - The block does not render it when In_IgnoreLockScreen is on.
   - `LockHost` hides it in the same cases as HideLockScreen:
     - The user is signed out.
     - The user must register a PIN.
     - The screen ignores the lock.
- `Policy_Checker`. The block renders it when In_IgnorePolicy is off and `App_Policies_HasPolicyToAccept` is on.
- `Dialog_AccessRestrictedAction`. In the React app, this is the shell's `DialogAccessRestrictedAction`.
- `HandleOnResumeOpenLink`.
- `HandleImageLoadError`.
- One of two back handlers:
   - When IsNavigateToHomeOnBack is on, the block renders `PreventBackNavigation`. It opens HomeFeed.
   - Otherwise, the block renders `BackNavigationHandler` (priority −10000). At the first entry of the tab, it opens
     HomeFeed after 0 ms.

The layouts render this block in `Placeholder_CommonUI_Inside_Layout`. The Connect2 screens render it after their layout.
Until the layouts do this, the shell's `CommonUiHost` and `LockHost` in AppFrame stand in for the block. This block
replaces both on each screen. The back logic is the same as `shell/dialogs/commonUiBack.ts`. This block uses the
NavigationHandler blocks that the capture shows.

## Captured variants (2 distinct; 2 tested)

| Capture | Source                   | What it shows             |
| ------- | ------------------------ | ------------------------- |
| v1      | BookmarksByGroup/default | signed in: lock block     |
| v2      | Login/default            | signed out: no lock block |

## Not captured / not settled

- Policy_Checker, In_IgnoreLockScreen and the PreventBackNavigation branch: the source is the compiled view. The tests are in
  `CommonUI_InsideLayout.test.tsx`.
- In_ShowLockScreen (Block_PINUnlock In_ForceVisible): `LockHost` has no such input. Every caller passes false.
