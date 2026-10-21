# InactivityTimer

OutSystems: `UBT_AppManager.PIN.InactivityTimer` · pack `migration/blocks/UBT_AppManager.PIN.InactivityTimer.md`

Inputs: none. Events: `Timeout` → `onTimeout` (not raised, see below). Placeholders: none. Renders an empty wrapper.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |

## Not settled

- Behaviour of the original block:
  - OnInitialize registers a `PIN_OnTimeout` handler. It calls `PIN_SessionInactivity_Start` when
    `PIN_SessionInactivity_Use`. That call destroys the timer that is active, first (AM:7894-7930).
  - On timeout, `PIN_SessionInactivty_OnTimeout` redirects to PINUnlock or raises the custom event → `Timeout` → the
    caller sets `PIN_IsLocked`.
- The shell ports both: `pinSessionInactivityStart()` (one app-wide timer, which stays after the block is destroyed)
  and `registerInactivityTimeoutHandler()` (`src/shell/inactivity.ts`).
- The shell's `LockHost` stands in for this block inside Block_PINUnlock (register on mount, start, remove on unmount;
  CR-Services-1).
- This component does not call them, so it never raises `Timeout`. A caller that needs the event can wire those two APIs.
