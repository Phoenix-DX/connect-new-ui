# PWA conversion: discussion plan

Status: **decided by the user on 2026-10-16** (section 7), except the BFF host (F2 was answered on 2026-10-17, section 7).
The user asked for this plan: "after the Orbit,
Assemble, Trove and LDM screens are done, plan a discussion about converting the React app to a PWA".
The user decides every item below. Auto mode does not cover these items, because the user asked to discuss them.
Accepted items become ADRs and update the stack item `pwa` only after the user confirms them.

## Summary

- The original is an **OutSystems 11 Mobile app** (`isWeb: false`). TST serves it to browsers as a PWA (`<link rel=manifest>`
  → `/UBTConnect/moduleservices/pwa/manifest`), and the same build also loads Cordova plugins. Offline support is
  minimal: the sync action is empty, and when offline the app only changes the text of the error toast.
- **TST registers a service worker** (F2, answered 2026-10-17: `/UBTConnect/pwaServiceWorker.js`; sections 5 and 7).
  On 2026-10-16 this was unknown. Every capture blocked service workers, so `serviceWorkers: []`
  in the captures proves nothing. On a browser the OutSystems runtime expects a service worker to do its pre-caching. The first step was to find the facts (phase 0).
- On 2026-10-16 the React app had no manifest and no service worker (stack: "No service worker in the mock phase"). It uses MSW in
  the browser, IndexedDB local entities and a mock sign-in. ADR-1 already fixes the target as **web / PWA only**.
  Phase 1 later added the service worker, manifest and icons (done 2026-10-16, ADR-9; section 8).
- Main recommendation: an **installable, online-first PWA** that reproduces the original's offline toasts. It uses Workbox
  through `vite-plugin-pwa` (injectManifest) and installs the service worker only in non-mock builds. Push, WebAuthn and
  real sign-in come with the BFF. The barcode scanner reuses the original's web scanner.
- 16 decisions (table in section 3). Phases 0–5 (section 4): roughly 13–25 developer-days on the PWA side.
  This estimate does not include the BFF/backend.
- Scope check: all 64 routes are finished, wave 8 included ([context-021](../contexts/context-021-wave8-complete.md)). **Trove is not a screen.** It is
  an external app opened by package name (`migration/screens/HomeFeed/route-spec.md:120, 168`; 0 hits in `board.md`). To be
  confirmed with the user.

Evidence keys: `AM` / `UC` = `migration/screens/HomeFeed/analysis/sources/raw/UBT_AppManager.controller.js` /
`UBTConnect.controller.js`; `RS/` = `migration/runtime-sources/`; `OSJS:N` = `RS/OutSystems.js` physical line N
(minified); `SV:<file>` = `capture/survey-UBTConnect.json` → `sources[<file>]`; `MD/` =
`migration/screens/MilestoneDetail/analysis/sources/raw/`.

## 1. What the original does (facts)

| Topic | Fact | Evidence |
|---|---|---|
| App type | OutSystems Mobile app (`isWeb: false`, home module UBTConnect, default transition SlideFromRight) | `RS/UBTConnect.appDefinition.js` |
| PWA manifest | All 51 runtime captures link `/UBTConnect/moduleservices/pwa/manifest`. The manifest content was never fetched. `cordova.js` is loaded too | `migration/screens/*/capture/runtime-*.json` → `environment.manifestLink`; `migration/app-shell.spec.md:21` |
| "Running as PWA" | `DeviceInfo_IsRunningAsPWA` = OSUI `IsRunningAsPWA.IsStandalone`. Only sent in the device/mobile context (telemetry); no UI branch found | AM:2825-2869, 832-833; clone `app/src/shell/deviceContext.ts:15-17, 37` |
| Service worker | Unknown on 2026-10-16 (answered 2026-10-17: TST registers `/UBTConnect/pwaServiceWorker.js`, F2 in section 7). Captures run with `serviceWorkers: 'block'`, so `[]` proves nothing. The runtime's `supportsResourceCache` picks "Pre-caching resources with Service Worker" whenever `navigator.serviceWorker` exists (`getRegistrations() !== null`) and native is false | `.claude/skills/outsystems-screen-spec/scripts/batch_capture.cjs:147`; `migration/knowledge/shell-observed.md:3`; OSJS:16 |
| Version / upgrade | The runtime VersionsManager checks for a new version in the background on navigation, upgrades resources and data model, and keeps `$OS_UBTConnect$UpgradeStatus` in sessionStorage. A 404 or API change raises `ViewHasChangedException`. Splash has `OnUpgradeProgress` | OSJS:15-16, 3; `runtime-HomeFeed.json` sessionStorageKeys; `migration/screens/Splash/analysis/sources/pretty/OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js:169-217` |
| Unsupported version | `Get_IsUnsupportedSystem` = app or browser below the minimum. "Upgrade" opens the Play Store (`market://`). TST has no minimum versions | UC:4518-4589, 17773-17790, 15869-15903; `app-shell.spec.md` §12a U2, U16 |
| Offline sync | `OfflineDataSync` is empty. Config: SyncOnOnline/Login/Resume True, Retry False, 30 s. OSUI `OfflineDataSyncCore` relays to `window.offlineDataSync` | UC:15118-15140, 15168-15180; `SV:OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js:823-848` |
| Network status | OSUI `NetworkStatusChanged` listens to `online`/`offline` on `document` (Cordova style). NetworkDetection pings `status/network-ping.txt` every 30 s (visible tab only) and only sets `App_NetworkStatus_IsOnline_IsPersistent`, which picks the toast text "No internet connection…" vs "Service Interruption". No offline screen, no body class | `SV:OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js:629-630, 656-668`; `migration/knowledge/shell-facts.md` U10, U11 |
| Local data | IndexedDB `<envKey>-Users` holds the client entities (notes, bookmarks, search history, recent searches, Orbit local entities). Runtime settings say WebSQL (`IndexedDBOffline=false`), yet TST runs IndexedDB. Also present: `firebaseLocalStorageDb`, about 90 client variables in localStorage (token, PIN and identity categories) | `shell-facts.md` "Client entities storage"; `RS/OutSystemsSettings.js`; `runtime-HomeFeed.json` environment/security |
| Memory cache | `MemoryClientCache` with `GetCacheableObject` (type, key, TTL); unlimited TTL = 604800 s; lost on reload | `migration/knowledge/runtime-sources.md`; clone `app/src/shell/memoryCache.ts:1-3` |
| Push | App start registers `FCM_NotificationCallback` (parse, local notification, refresh unread count, `Notifications_LastChecked`) and `FCM_DeeplinkCallback`. The FCM token is a client variable sent in the mobile context. SynchAppContext carries the Firebase key. FirebaseCloudMessagingPlugin is Cordova; its web behaviour was not fetched on 2026-10-16 (fetched later: F4 in section 7, TST web receives no push) | UC:15284-15316, 2567, 2722; AM:814-815, 1995-1996; `migration/knowledge/mock-fixtures.md:12` |
| `Wrapper_NotificationOpened` | Server call on MessageDetail when the message is unread (reached from the list, push and deep links). It is not push itself | `migration/screens/MessageDetail/route-spec.md:7, 76`; `migration/capture-plan.json` defaults.allowActions |
| Remote logout | Firebase RTDB event → `FRD_HandleEvent_Logout` → logout + delayed message | AM:5770-5840; `shell-facts.md` "Answers recorded" |
| Biometrics / PIN | FingerprintScanner (UBT_AppManager_Mobile), PINBiometricsMenu. TST `PIN_EnableFingerprint` = true. U13 decided: hidden now, WebAuthn later. The original keeps the PIN in localStorage; the clone keeps a hashed mock PIN (U5) | `SV:UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc.js`; `app-shell.spec.md` §12, §12a |
| Barcode | `CheckBarcodePlugin`: Cordova → plugin (else OS-PLUG-BARC-0012). Without Cordova, "Is PWA?" is really `navigator.mediaDevices !== undefined` → loads `OSBarcodePlugin.js` (web scanner: html5-qrcode + ZXing, uses `BarcodeDetector` when supported, rear camera). Otherwise OS-PLUG-BARC-0011 | `RS/BarcodePlugin.controller.js:21-94, 201-203`; `RS/BarcodePlugin.OSBarcodePlugin.js`; `migration/screens/OrbitAdminEventDetail/questions.md` Q1-Q2 |
| File transfer | `CheckFileTransferPlugin` loads `FileTransferPlugin.wrapper.js`, then Cordova, or PWA when `OSFileTransferPluginWrapper.Instance` exists (IsPWA True). The wrapper was not fetched on 2026-10-16 (fetched later: F3 and P8 in section 7). Orbit `OpenDocument` without Cordova: `window.open(url, "_blank")` | `MD/FileTransferPlugin.controller.js:22-30, 98-110, 274-277`; `RS/Connect2_OrbitMobile_MUI.controller.js:6202-6214` |
| Deep links | EventfulDeeplinks and AndroidAppLinks start at app start and need Cordova / `window.plugins.universalLinks`. Cold-start and resume links rewrite `ConnectSharing` links | UC:15351-15354; `MD/Connect2_AndroidAppLinksPlugin.controller.js:16, 110, 631`; `migration/knowledge/navigation.md:22-27` |
| External apps | `OpenInApp_OpenApp(package)` in a browser: Android/Windows → Play Store URL, otherwise the "Not available" toast. Trove, HR100 and CommunityTradelink are service items with packages | `app/src/shared/UBTConnect_Utils/lib/actions.ts:205-230`; HomeFeed `route-spec.md:120, 168` |
| Sign-in | Full-page B2C redirect → `/UBT_AppManager/Callback` → `ActionAppManager_Login` | `migration/knowledge/auth.md:9-14` |

## 2. What the clone has now

This section is as found on 2026-10-16. Phase 1 changed it (ADR-9: service worker, manifest, icons; section 8).

- Stack (`migration/stack.json`, all `confirmed` by the user 2026-10-14):
  - `pwa` = "No service worker in the mock phase" (Workbox with the production integration).
  - `auth` = mocked now; Azure B2C later through a BFF + HttpOnly cookie; web/PWA only.
  - `tokens` = never in browser storage.
  - `backend` = mock only, with the OutSystems action names.
  - `browsers` = iOS Safari 16+ and Chrome 110+.
  - `viewports` = phone 390×844.
- Rule `NO-BROWSER-STORAGE` stops routes from using localStorage, sessionStorage or IndexedDB; only the shell stores do.
- ADR-1 (web/PWA only) lists the web equivalents that are still to decide: push, WebAuthn, barcode, share, files, deep links and monitoring. ADR-8 does the bookmark sync in one IndexedDB transaction.
- `app/vite.config.ts` has no PWA plugin. `app/index.html` has `viewport-fit=cover`, but no manifest, theme-color or icons.
- `app/public/mockServiceWorker.js` (MSW) is registered at scope `/` when `config.useMocks` (`app/src/main.tsx:27-29`), and mocks are on by default (`app/src/lib/config.ts:18`).
- Shell stores:
  - `app/src/shell/localEntities/` (IndexedDB like TST, see the `database.ts` header);
  - `memoryCache.ts` (in memory);
  - `storage.ts` (namespaced mock session, U5);
  - `deviceContext.ts` (display-mode standalone);
  - network events (U11, `app/docs/guides/shell.md:210`).
- Adapters already in place:
  - barcode: `app/src/screens/OrbitAdminEventDetail/components/barcodePlugin.ts`, with a mock scanner;
  - download hook: `app/src/shared/FileTransferPlugin/lib/handleDownload.ts`;
  - external app: `openInApp_OpenApp`;
  - resume link: `app/src/shell/resume.ts`.
- Docs: `app/docs/architecture/overview.md:28` already names "installed PWA" as the user. There is no PWA guide, and `app/src/lib/device` does not exist yet (ADR-1 names it).

## 3. Decisions for the user

| Id | Question | Options | Recommendation | Evidence |
|---|---|---|---|---|
| P1 | Offline scope | (a) online-first: installable shell; offline shows the original toasts; (b) a + read-only offline for data the original already keeps locally (local entities, last screens); (c) offline-first with a write queue and background sync | **(a)**. It matches the original (empty sync action, toast only). (b) can come later as an enhancement through an ADR | UC:15118-15140; `shell-facts.md` U11 |
| P2 | Service-worker tooling | (a) `vite-plugin-pwa` generateSW; (b) `vite-plugin-pwa` injectManifest (own SW file using Workbox modules); (c) a hand-written SW | **(b)**. Workbox precache and routing, plus room for push and `notificationclick` handlers (P5) without changing tools | stack `pwa` note "Workbox"; ADR-1 |
| P3 | Caching per resource type | Hashed JS/CSS: precache. `index.html`: network-first with a precached navigation fallback. Original CSS per screen (`public/UBTConnect/css`): precache or stale-while-revalidate. Fonts/icons: cache-first. `os-assets` images: cache-first with expiry. Signed photo URLs: no cache. API (`POST /api/...`), BFF/auth routes, `network-ping.txt`, Feed CMS embeds: never cached | **Precache shell + original CSS** (parity depends on the CSS); no API caching (rule "tokens and personal data never in browser storage") | `vite.config.ts` (originalImages, mockFeedCms); `RS/Connect2_LegacyShared.controller.js` (GetCacheableSignedPhotoURL); stack `tokens` |
| P4 | Install, manifest, icons, splash | (a) copy the TST manifest values (name, icons, colours, start_url, scope `/UBTConnect/`); (b) new branding. Install prompt: (i) browser default only; (ii) a custom install banner | **(a) + (i)**. 1:1, and the original has no install UI (no `beforeinstallprompt` in the runtime). Needs F1 | OSJS (0 hits); `manifestLink` |
| P5 | Push notifications | (a) none (U12 today); (b) Web Push with the FCM JS SDK (keeps the FCM backend and tokens, VAPID); (c) standard Web Push (VAPID) sent by the new backend | **(a) at go-live**, if F4 shows that TST web has no push. Then **(b)** with the BFF if the product wants it. iOS: installed PWAs only, 16.4+ | UC:2567, 2722, 15284-15316; ADR-1 |
| P6 | Biometric unlock | (a) PIN only (U13, fingerprint hidden); (b) WebAuthn platform authenticator, verified by the BFF; (c) WebAuthn checked only in the browser | **(a) now, (b) with the BFF; never (c)** (a local-only check is not security) | `app-shell.spec.md` U13; TST `PIN_EnableFingerprint` true |
| P7 | Camera / barcode | (a) vendor the TST `OSBarcodePlugin.js` (as ADR-5/7); (b) an npm library (`html5-qrcode` has had no release since 2023; `@zxing/browser`; a `barcode-detector` polyfill); (c) native `BarcodeDetector` only | **(a)**. Same scanner, same version (rule: libraries the original ships keep the TST version); its CSS comes from `AddCSSJS`. Needs HTTPS and camera permission | `RS/BarcodePlugin.controller.js:68-94`; `migration/knowledge/auto-decisions-2026-10-16.md:85` |
| P8 | File download / open | (a) new tab, as built (U18; the original Orbit does the same on the web); (b) port the PWA wrapper (fetch → blob → `<a download>`, progress events) | **(a)**. Fetch `FileTransferPlugin.wrapper.js` (F3) to confirm it is not needed | `RS/Connect2_OrbitMobile_MUI.controller.js:6202-6214`; `migration/screens/ViewDocuments/questions.md` Q2 |
| P9 | Deep links | (a) plain URLs `/UBTConnect/<Screen>?…` + resume-link helper (U14), manifest scope `/UBTConnect/`; (b) + Chromium link capturing (`launch_handler`, `handle_links`); (c) + `share_target` | **(a)**. App Links and Universal Links belong to the store app; iOS PWAs cannot capture links | `app-shell.spec.md` U14; `MD/Connect2_AndroidAppLinksPlugin.controller.js:110` |
| P10 | Storage limits and IndexedDB eviction | (a) keep the IndexedDB local entities as the original does, call `navigator.storage.persist()` when installed, re-sync after eviction, clear on logout; (b) memory only | **(a)**, but **the user must confirm the exception**: bookmarks and notes are personal data, and stack `tokens` says "never in browser storage" | `localEntities/database.ts`; ADR-8; stack `tokens` |
| P11 | Update flow | (a) silent: the new SW waits and takes over on the next cold start (closest to the OutSystems background upgrade); (b) a "New version, reload" toast (not in the original); (c) `skipWaiting` + immediate reload | **(a)**, plus a forced reload only when the API contract version changes (equivalent of `ViewHasChangedException`). The unsupported-version card stays separate (U16) | OSJS:3, 15-16; UC:4518-4589 |
| P12 | Authentication in the PWA | (a) BFF on the same origin, full-page B2C redirect inside the standalone window, HttpOnly Secure SameSite cookie, SW never touches `/bff/*`; (b) MSAL.js in the browser, tokens in memory | **(a)** (already the stack's direction). Open: the BFF host. On iOS the installed app has its own cookie jar, so users sign in again after installing | stack `auth`, `tokens`; `knowledge/auth.md:9-14` |
| P13 | iOS limitations | (a) keep iOS 16+ and let features degrade (no install prompt, push only on 16.4+ installed apps, no Background Sync, no orientation lock, no `BarcodeDetector`, separate storage, eviction of sites that are not installed); (b) raise the minimum to 16.4 | **(a)** and document the gaps in `app/docs` | stack `browsers`; ADR-1 consequences |
| P14 | Testing | (a) Playwright PWA e2e (SW registers, offline reload shows the shell and the original toast, update flow, no MSW in the production build) + manual iOS/Android device matrix; (b) a + Lighthouse CI (performance and best practices; Lighthouse 12+ dropped the PWA category) | **(b)**. Parity runs keep `serviceWorkers: 'block'` | `batch_capture.cjs:147`; `parity_check.cjs:590` |
| P15 | Rollout | (a) big bang on the TST/production URL; (b) pilot on a new origin, then cutover on the same origin with a service-worker handover (replace or unregister any OutSystems SW, keep `start_url` so existing installs keep working); (c) per feature | **(b)** | depends on F2 |
| P16 | MSW vs the app SW | (a) app SW only in builds with `VITE_USE_MOCKS=false`; (b) demo build with both (MSW inside the app SW) | **(a)**. Only one SW per scope; matches stack `pwa` | `app/src/main.tsx:27-29`; `public/mockServiceWorker.js` |

### 3a. Proposed caching table (detail of P3, for discussion)

| Resource | Where it comes from | Proposed strategy | Why |
|---|---|---|---|
| App JS/CSS bundles (hashed) | `vite build` output | precache (Workbox manifest) | fast start, offline shell |
| `index.html` / navigations under `/UBTConnect/` | SPA entry | network-first, fallback to the precached `index.html` | new deploys picked up at once; offline still opens |
| Original OutSystems CSS per screen | `app/public/UBTConnect/css`, loaded by `app/src/shell/StylesheetHost.tsx` | precache (or stale-while-revalidate if the set is large) | parity depends on these files |
| Fonts, icon fonts | `app/public/UBTConnect/*.woff`, `.ttf` | cache-first | rarely change |
| Original images | `app/public/os-assets/`, `/UBTConnect/img/` | cache-first, expiry (e.g. 30 days, entry limit) | static assets |
| Signed / user photos | `GetCacheableSignedPhotoURL` | network only | signed URLs expire; personal data |
| API calls | `POST /api/<Module>/<Action>` (contract `app/src/api/openapi.yaml`) | network only (never cached by the SW) | stack `tokens`; TanStack Query already caches in memory |
| BFF / sign-in routes | future `/bff/*`, B2C callback | bypass the SW entirely | auth must never be served from a cache |
| Network ping | `status/network-ping.txt` (`cache: "no-store"`) | network only | it measures connectivity |
| Embeds (Feed CMS, MyEntertaining) | other origins (`vite.config.ts` mockFeedCms) | not handled | cross-origin, owned by the CMS |

Library versions (rule: major line ≥ 9 months old, newest version inside it ≥ 60 days old; libraries the original
ships keep the TST version; `migration/knowledge/stack-baseline.md`). This plan does not pin anything, because the
registry was not checked offline.
- `vite-plugin-pwa` 1.x line (1.0 released 2025, so ≥ 9 months by now). Check that its peer range covers Vite 7 (stack: `vite` 7.3.6).
- `workbox-*` 7.x line (7.0 released 2023): precaching, routing, strategies, expiration, window.
- Only if P5(b): the `firebase` JS SDK. Only if P6(b): `@simplewebauthn/browser`. Both follow the same rule.
- Barcode under P7(a): no npm package; the TST file is vendored (new ADR, like ADR-5/7).
- The exact list goes to the user in the ADR-2 process (scratch install, typecheck, build, tests, then `dep add`).

## 4. Phased plan

| Phase | Deliverables | Effort | Needs the user's decision before | Risks |
|---|---|---|---|---|
| 0. Facts | F1 static GET of `/UBTConnect/moduleservices/pwa/manifest` (name, icons, colours, start_url). F2 does TST register a service worker (user checks DevTools > Application, or one observe run without the SW block, reads only)? F3 fetch `FileTransferPlugin.wrapper.js` and `FirebaseCloudMessagingPlugin.controller.js` (TST manifest files, standing approval, logged in `runtime-sources.md`). F4 does TST web receive push at all? | 0.5–1 d | Approval for F1 (not in the survey manifest list) and F2 (changes the capture setting) | F2 may show an OutSystems SW that the cutover must replace (P15) |
| 1. Installable shell | ADR-9 "PWA service worker". `vite-plugin-pwa` (injectManifest), manifest + icons + `apple-touch-icon` + theme-color, precache of the shell and original CSS, navigation fallback, SW only in non-mock builds, silent update flow. `app/docs/guides/pwa.md` | 2–4 d | P2, P3, P4, P11, P16, version list | Stale cached CSS breaks parity (hash all assets); SW interfering with MSW |
| 2. Offline parity | Offline reload shows the shell. NetworkDetection ping (`status/network-ping.txt`, `no-store`) and toasts as the original. `storage.persist()`, eviction recovery, clear on logout | 1–3 d | P1, P10 | IndexedDB personal-data exception; Safari eviction |
| 3. Device features | Barcode scanner (vendored web scanner behind `barcodePlugin.ts` / `src/lib/device`), file open, deep links + resume link, external apps unchanged, keyboard/orientation as U18 | 3–5 d | P7, P8, P9, P13 | Camera permission UX on iOS standalone; scanner CSS parity |
| 4. With the BFF | B2C through the BFF (no tokens in the browser), SW denylist for auth routes, then optional Web Push and WebAuthn unlock | 4–8 d (PWA side) | P5, P6, P12, BFF host | Depends on the backend; iOS cookie jar; push needs server keys |
| 5. Test and rollout | Playwright PWA suite, device matrix, Lighthouse CI, pilot origin, cutover runbook with SW handover | 2–4 d + pilot | P14, P15 | Old installs pointing to the OutSystems `start_url`; rollback of a bad SW (kill-switch SW ready) |

Order: phase 0 can start any time (read-only). Phases 1–3 can run with mocks once wave 8 and the regression pass are
done. Phase 4 waits for the backend/BFF. Phase 5 comes last.

## 5. Risks and open facts

- **Original SW (F2, answered 2026-10-17).**
  - TST registers `/UBTConnect/pwaServiceWorker.js` on scope `/UBTConnect/`, so a same-origin cutover has to replace it.
    Otherwise users keep stale OutSystems files.
  - Browsers re-check the registered script URL, so the handover file goes at that URL: our worker, or a kill switch.
  - The content of the original worker was read 2026-10-17.
    It is cache-first for every screen path from its precache. Old caches are deleted only by a newer worker.
  - Hard requirement: `/UBTConnect/pwaServiceWorker.js` must keep answering at cutover (our worker or a kill
    switch), never 404.
  - **Decided (user, 2026-10-17): option A, ADR-14**: our worker at `/UBTConnect/pwaServiceWorker.js`, deleting
    the `UBTConnect-*` caches (`migration/knowledge/pwa-tst-service-worker.md`). Implementation is phase 5 work.
- **Parity tooling.** The parity gate and the captures block service workers (`.claude/skills/outsystems-screen-spec/scripts/parity_check.cjs:590`,
  `batch_capture.cjs:147`). PWA behaviour needs its own e2e tests and cannot rely on the parity reports.
- **Personal data at rest (P10).** IndexedDB already holds bookmarks, notes and search history (as TST does). The stack
  rule says no personal data in browser storage. Accepted by the user: P10 keeps IndexedDB, ADR-10 (2026-10-16).
- **PIN storage.** The original keeps the PIN in localStorage. The hashed mock PIN of the React app (U5) is not a production
  design. The production PIN location belongs to extras group C (`migration/extras-plan.md:16`) and the BFF.
- **`document` online/offline listeners.** OSUI `NetworkStatusChanged` listens on `document` (Cordova). In a browser
  these events go to `window`. Keep the window listeners of the React app (U11). Note it as a known difference only if a
  capture shows another behaviour.
- **iOS.** Home-screen apps run in their own storage and cookie container, and Safari may evict data of sites that
  are not installed. Every feature must degrade without errors.
- **MSW.** Only one SW per scope. If a mock build has a production SW, that SW replaces `mockServiceWorker.js` (P16).

## 6. Questions to ask in the discussion (grouped)

1. Scope: is Trove meant as a screen, or is it the external app opened by package name? Is P1(a) online-first enough for go-live?
2. Phase 0: may we run F1 and F2 (a static GET, and one observe run without the SW block)?
3. Platform: P2/P3/P11/P16 as recommended? Do we keep iOS 16+ (P13)?
4. Features: barcode as the vendored TST scanner (P7)? Files in a new tab (P8)? Plain-URL deep links (P9)?
5. Data: may IndexedDB keep notes and bookmarks in production (P10, an exception to stack `tokens`)?
6. Later, with the backend: push (P5), WebAuthn (P6), BFF host (P12), rollout path (P15).

## 7. Decisions recorded

| Id | Answer | Who, date |
|---|---|---|
| P1 | **(a) online-first**: installable shell, offline shows the original toasts | user, 2026-10-16 |
| F1 | approved, done: `migration/runtime-sources/UBTConnect.pwa-manifest.json` ("Connect 2.0", standalone, theme `#1992ab`, background `#ffffff`, 4 PNG icons 48–512, start_url `/UBTConnect/`, portrait, no `scope`) | user, 2026-10-16 |
| F2 | the user checks TST in DevTools > Application > Service Workers and reports | user, 2026-10-16; **answered 2026-10-17**: TST registers `/UBTConnect/pwaServiceWorker.js` (scope `/UBTConnect/`); the origin also has `/ConnectMobile/pwaServiceWorker.js` (other app). `migration/knowledge/pwa-tst-service-worker.md` |
| Trove | **external app**, kept as built (OpenInApp_OpenApp; no screen) | user, 2026-10-16 |
| P4 | **copy the TST manifest values** (F1) + **browser default install prompt only** (no custom banner) | user, 2026-10-16 |
| P13 | **keep iOS 16+**; features degrade without errors; gaps documented in `app/docs` | user, 2026-10-16 |
| P2 | **`vite-plugin-pwa` injectManifest** (own SW file with Workbox modules) | user, 2026-10-16 |
| P3 | **caching table 3a as proposed** (precache shell + original per-screen CSS; index network-first with fallback; fonts cache-first; images cache-first 30 d; never API, signed photos, BFF/auth, network ping) | user, 2026-10-16 |
| P11 | **silent update** on next cold start + forced reload only when the API contract version changes; U16 card separate | user, 2026-10-16 |
| P16 | **app SW only in builds with `VITE_USE_MOCKS=false`**; mock/demo builds keep MSW | user, 2026-10-16 |
| P7 | **vendor the TST `BarcodePlugin.OSBarcodePlugin.js`** web scanner (new ADR like ADR-5/7; HTTPS + camera permission) | user, 2026-10-16 |
| P8 | **new tab as built** (`window.open(url, "_blank")`); F3 fetch of `FileTransferPlugin.wrapper.js` to confirm the wrapper is not needed | user, 2026-10-16 |
| P9 | **plain URLs + resume-link helper** (U14), manifest scope `/UBTConnect/`; no link capturing, no share_target | user, 2026-10-16 |
| P14 | **Playwright PWA e2e + manual iOS/Android device matrix + Lighthouse CI**; parity keeps blocking SWs | user, 2026-10-16 |
| F3 | done (standing rule): FileTransfer/File/FileViewer plugin controllers + PWA wrappers fetched. `FileTransferPlugin.wrapper.js` downloads via XHR → blob → `<a download>` and sets `OSFileTransferWrapper.Instance`. Whether the original PWA then downloads in-app instead of opening a new tab was being analysed (`migration/knowledge/pwa-file-plugins.md`); **P8 is final only after that** (final: see the later P8 row) | 2026-10-16 |
| F4 | done: `FirebaseCloudMessagingPlugin.controller.js` has no web/PWA branch (0 hits for PWA, serviceWorker, firebase.messaging; every action calls `cordova.plugins.OSFirebaseCloudMessaging`), so **TST web receives no push** | 2026-10-16 |
| P8 | **final: new tab as built.** F3 analysis (`migration/knowledge/pwa-file-plugins.md`): on the web CheckFilePlugin is always False (Cordova only), so TryOpenFileInApp takes OpenInApp_ViewFile_Fallback → `window.open(url, "_blank")`; Orbit OpenDocument does the same. The wrapper's `<a download>` is never reached. Not ported side effect: the Check* actions load the plugin wrappers and inject the `fileviewer-plugin-css` style | user, 2026-10-16 + facts |
| P10 | **keep IndexedDB local entities as the original** (documented exception to stack `tokens`, by ADR: tokens and PIN never stored; `storage.persist()` when installed, re-sync after eviction, clear on logout) | user, 2026-10-16 |
| P5 | **no push at go-live** (same as the original web, F4); Web Push later with the BFF only by ADR | user, 2026-10-16 |
| P6 | **PIN only at go-live; WebAuthn later, verified by the BFF**; never a browser-only check | user, 2026-10-16 |
| P12 | **same-origin BFF + HttpOnly Secure SameSite cookie**, B2C redirect inside the standalone window, SW never touches `/bff/*`. BFF host: open | user, 2026-10-16 |
| P15 | **pilot on a new origin, then same-origin cutover** with SW handover (replace/unregister any OutSystems SW, keep `start_url`, kill-switch SW ready); handover details wait for F2 | user, 2026-10-16 |

## 8. Progress
- 2026-10-16:
  - Phase 0 done except F2 (user).
  - Phase 1 done (ADR-9: SW, manifest, icons, caching 3a, silent update, demo PWA).
  - Phase 2 done (NetworkDetection 1:1, ping network-only, `storage.persist()`, eviction recovery, logout clears local
    entities, 4 s navigation timeout).
  - Phase 3: barcode done (ADR-11); files and deep links already as decided (P8, P9).
  - The production bundle is mock-free (build guard).
  - Left: phase 4 (BFF: auth, push, WebAuthn), phase 5 (Playwright PWA e2e, device matrix, Lighthouse CI, pilot,
    cutover after F2).
  - Context: `migration/contexts/context-024-pwa-phases-2-3.md`.
- 2026-10-16 (late): phase 5 tooling done (ADR-12/13): `npm run e2e:pwa` (8 scenarios, Playwright) and `npm run lighthouse`
  (lighthouse 13.4.1, reports in `app/lighthouse-reports/`). Context: `migration/contexts/context-025-pwa-tests.md`.
- 2026-10-17: favicon 1:1 (`index.html` links TST `/UBTConnect/favicon.png`, the result of OSUI AddFavicon): removes the
  Lighthouse `/favicon.ico` 404. Left: phase 4 (BFF, needs the BFF host), device matrix (manual), pilot, cutover (F2).
- 2026-10-17 (user): ADR-11/12/13 confirmed explicitly; mobile performance track postponed ("tính sau"). F2 still open.
- 2026-10-17 (user): F2 answered; cutover handover = option A (ADR-14: our worker at `/UBTConnect/pwaServiceWorker.js`). Not implemented yet.
- 2026-10-17 (user): not going to production now; current focus is the local demo for colleagues. Phase 4/5 and ADR-14 code wait.
