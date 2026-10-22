# Shell behaviour observed on TST (2026-10-14)

Tool: `node migration/tools/shell_observe.cjs` (read-only guard with the plan allow list, service workers blocked, no
sign-in, no PIN entry; settings printed from a whitelist only). Answers app-shell.spec.md U1, U2, U3 (runtime side).

## U1: signed-out visitor
- `/UBTConnect/` and `/UBTConnect/HomeFeed` keep their URL for about 15 s, then go to `/UBTConnect/Login?…`.
- Calls: `ActionAppManager_SynchAppContext`, `ActionSync_Info_GetMain`, `ActionGet_RuntimeVersion` only. No Splash URL.
- The screen at `/UBTConnect/` before the redirect was not inspected (see knowledge/shell-facts.md for the code side).

## U2: SynchAppContext settings (TST)
| Setting | Value |
|---|---|
| PIN_Use | true |
| PIN_SessionInactivity_Use / _Seconds / _Navigate | true / 1200 / false (lock overlay in place, no redirect) |
| PIN_EnforceOnReady | false |
| PIN_EnableFingerprint | true |
| CheckDeviceOnReady | true |
| MinWebViewVersion_Chrome / _Safari, MinNativeAppVersion | "" (no minimum) |
| Firebase_CloudMessage_Use, Firebase_RealTimeDatabase_Use, AzureInsights_Use | true |
| DeviceAwareness_Use, PluginUse_PrivacyScreen | false |
| Streamline_Use, Streamline_TOTP_LoginCheck, EnableFrameworkExtension | true |

## U3: signed-in fresh tab
- `/UBTConnect/HomeFeed` renders, then about 17 s after the load the app goes to `/UBTConnect/PINUnlock` (no Splash).
  Calls before it: SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetUserInformation, GetNumberUnreadMessages,
  CacheableMapEntities, CacheableHouseholds, GetCacheInfo. With EnforceOnReady false and inactivity at 1200 s, the
  redirect comes from the app-start PIN check (spec section 9: PIN_Check after AfterInitialize), not from inactivity.
- A reload of that (not unlocked) tab stays on `/UBTConnect/PINUnlock`.
- Open: the cause of the ~15–17 s delay before the redirect. The cause is either the duration of the app-start calls on
  TST or a timer in the app. This is not determined. The mock reproduces the order of the calls. The delay in the mock comes from the
  mock latency setting.

## After a PIN unlock (2026-10-14, `node migration/tools/unlock_target.cjs /UBTConnect/Menu`)
- Fresh signed-in tab: `/UBTConnect/Menu` → app sends it to `/UBTConnect/PINUnlock` → PIN entered → back to
  `/UBTConnect/Menu` (the screen that was opened). Guard on, nothing blocked. Settles PINUnlock Q1 in favour of
  "return to the opened screen" (CR-PINUnlock-1: the shell's PIN redirect keeps the opened path as LastURL).

## Header SVG background: live TST keeps the compiled attributes (2026-10-14)
This is a read-only observation of TST `/UBTConnect/Login` (no session, guard on). The `.ubt-header-svg svg` has
`preserveAspectRatio="none"`, and the gradient keeps `x1 x2 y1 y2`, as the compiled SVGCode does
(`UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js:202`). The capture DOM lacks these attributes, so the capture
serializer drops them. Exemption `CAPTURE-SVG-PRESERVEASPECTRATIO` is a capture artifact. The React app follows the
compiled code in every instance (screen and CommonUI lock container). The OSUI InlineSVG container id is `<instance>-SVG`.

## Reopen from the start URL (2026-10-22, `journey_capture.cjs`, journey J1)
- New tab of a signed-in context at `/UBTConnect/` → `/UBTConnect/PINUnlock` → PIN entered → `/UBTConnect/`. The
  Splash has no URL of its own here. The start URL shows the home feed. Guard on, nothing blocked.
- New tab at `/UBTConnect/Splash` → PINUnlock → PIN entered → Splash again → PINUnlock again. Splash keeps its own
  href as `LastURL` (shell-facts.md U3), so the unlock returns to Splash, which checks the PIN again.
