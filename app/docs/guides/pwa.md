# PWA: service worker, manifest, demo build

The app is an installable, online-first PWA (ADR-9, decisions in `migration/pwa/pwa-discussion-plan.md` section 7).
Offline, it opens and shows the original toasts. It does not work offline with server data. Push, WebAuthn and BFF
sign-in come in later phases. The barcode scanner is the vendored TST web scanner (ADR-11, [device guide](device.md)).
The section [below](#offline-parity-phase-2) describes phase 2 (offline parity: network detection, `storage.persist()`,
eviction, logout clearing, navigation timeout).

## Build modes

One pure function decides what a build starts: `bootPlan()` in `src/pwa/bootPlan.ts`. `src/main.tsx` uses it at run
time, and `vite.config.ts` uses it at build time, so they always agree.

| Mode       | Command                              | Mocks                                      | Service worker               | Output       |
| ---------- | ------------------------------------ | ------------------------------------------ | ---------------------------- | ------------ |
| Dev        | `npm run dev`                        | MSW worker (`public/mockServiceWorker.js`) | MSW only                     | –            |
| Mock build | `npm run build` (CI)                 | MSW worker                                 | MSW only                     | `dist/`      |
| Demo build | `npm run build:demo`                 | in the page (`src/mocks/inProcess.ts`)     | app SW, scope `/`            | `dist-demo/` |
| Production | `VITE_USE_MOCKS=false npm run build` | none (no mock code, no mock files)         | app SW, scope `/UBTConnect/` | `dist/`      |

Production is mock-free (`build/mockFree.ts`, checked by `build/mockFreeBuild.test.ts`):

- Every import of mock code (MSW, `src/mocks/**`, the `mocks.ts` of screens, blocks and the shell) sits behind
  `MOCKS_BUILT` (`src/lib/config.ts`), e.g. `if (MOCKS_BUILT) await import('./mocks/browser')`. It is a build-time
  constant, so Rollup drops those imports and their chunks (`mocks-*`, `fixtures-*`). `config.useMocks` has the same
  value but sits in a frozen object that Rollup cannot fold. Do not gate an import on it.
- The production build copies `public/` without `mockServiceWorker.js`, `mock-embeds/` and `mock-images/`
  (`MOCK_PUBLIC_FILES`). Dev, the mock build and the demo build keep them.
- The build fails when a chunk still renders a mock module, and names it. Two small mock modules are still allowed
  (`KNOWN_MOCK_LEFTOVERS`, no fixture, no MSW): `src/mocks/scenario.ts` (`?mock=unsupported-browser` in
  `src/shared/UBTConnect/lib/actions.ts`) and `src/mocks/fictional/directory.ts` (the mock user of the mock sign-in,
  `src/shell/auth.ts`, until the identity provider exists). Remove an entry when the app gates its importer.

- Only one service worker per scope. At start, `clearStaleServiceWorkers()` (`src/pwa/register.ts`) removes the other
  mode's worker.
  - In an MSW build, it removes the app SW (and reloads once if the app SW controlled the page).
  - In the other builds, it removes MSW.
- Parity and captures run on the dev server and block service workers; nothing here changes them.
- Demo mocks: the same MSW handlers, called through msw's `getResponse()` from a wrapped `fetch`. Unhandled requests
  go to the network, `HttpResponse.error()` rejects like a network error, `delay()` and `?mock=` / `?latency=` work as
  in dev. The demo registers at `/` because its mock Feed CMS page (`/embed/feeds`) is same-origin but outside
  `/UBTConnect/`, and it must open offline inside HomeFeed. In production the CMS is another origin.

## Manifest and head

- The TST manifest (`src/pwa/manifest.json`, copy of `migration/runtime-sources/UBTConnect.pwa-manifest.json`) is at
  the original path `/UBTConnect/moduleservices/pwa/manifest` in every mode (`build/pwa.ts` serves it).
  `index.html` links it as every capture does (`environment.manifestLink`).
- The manifest has no `scope`. The scope defaults to `/UBTConnect/`.
- Icons: `/UBTConnect/img/UBTConnect.AppLogo.{48,96,192,512}.png` from TST (`public/os-assets/UBTConnect/img/`, served at
  the TST path by `build/staticFiles.ts`).
- Builds that register the app SW (demo, production) add two head tags. The original app does not have them: `<meta
name="theme-color" content="#1992ab">` and `<link rel="apple-touch-icon" href="/UBTConnect/img/UBTConnect.AppLogo.192.png">`.
- Install prompt: the browser's own (P4). There is no install banner, as in the original.

## Service worker lifecycle

`src/sw/sw.ts`, built by vite-plugin-pwa (injectManifest, IIFE) to `/sw.js`; registered by `registerAppServiceWorker()`
after the first render, only in a built app.

- **Silent update (P11).** No `skipWaiting`, no `clientsClaim`. A new version installs in the background and takes
  over when every window of the app has closed (next cold start). The first visit is not controlled; the next
  navigation is.
- **Forced update when the API contract changes (ready, not wired).** Builds carry `__API_CONTRACT_VERSION__`, a hash of
  `src/api/openapi.yaml`. `reloadForContractChange(serverVersion)` checks for a new worker, sends it `SKIP_WAITING`
  and reloads; with no new worker it just reloads (navigations are network-first). Wire it with the BFF: read the
  backend's contract version (for example a response header) in `src/lib/api.ts` and call the hook when it differs.
- **Kill switch / rollback:** deploy a `sw.js` that unregisters itself (phase 5, P15).

## Caching (table 3a)

Rules are pure functions in `src/pwa/swRoutes.ts` (unit-tested); a request no rule takes goes to the network untouched.

| Request                                                               | Strategy                                                                    |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Hashed bundles (`assets/*`), `index.html`                             | precache (revisioned)                                                       |
| Original per-screen CSS (`/UBTConnect/css/*.css`)                     | precache (Workbox revision = content hash, so a changed file is refetched)  |
| Fonts `/UBTConnect/*.{woff,woff2,ttf}`, `/UBTConnect/fonts/*`         | precache; other fonts (eot, SVG fonts, os-assets): cache-first, 60 entries  |
| Navigations under `/UBTConnect/` (and `/`)                            | network-first, 4 s timeout; then the precached `index.html`                 |
| Original images `/UBTConnect/img/*`, `/UBT_CW/img/*`, `/os-assets/*`  | cache-first, 30 days, 300 entries; HTML answers (SPA fallback) never cached |
| `POST /api/...`, `/bff/*`, `/UBT_AppManager/*`                        | never (network only, the SW does not answer)                                |
| `/UBTConnect/status/network-ping.txt`                                 | network-only, `cache: "no-store"`, never precached (phase 2)                |
| Signed URLs (`sig`, `se`, `token`, `X-Amz-Signature`…), other origins | never                                                                       |
| Demo only                                                             | precache of every file (mock data chunk, images, mock Feed CMS)             |

Production precache: about 290 files, 6.8 MB (half of it fonts). Demo: about 490 files, 13 MB.

## Testing

Four levels (ADR-12, P14). Parity and captures keep blocking service workers. The four levels below test the service worker.

| Level                  | Command / where                                                                     | In `npm run ci` |
| ---------------------- | ----------------------------------------------------------------------------------- | --------------- |
| Unit                   | `src/pwa/*.test.ts`, `src/mocks/inProcess.test.ts`                                  | yes             |
| Build checks           | `build/pwaBuild.test.ts`, `build/mockFreeBuild.test.ts`                             | yes             |
| PWA e2e                | `npm run e2e:pwa` (`build/e2e/`)                                                    | no (see below)  |
| Device matrix (manual) | checklist below                                                                     | no              |
| Lighthouse             | `npm run lighthouse` (`build/lighthouse/`), [below](#lighthouse-npm-run-lighthouse) | no              |

- Unit: `src/pwa/swRoutes.test.ts` (routes), `src/pwa/register.test.ts` (boot plan, registration branch, stale
  workers, contract hook), `src/mocks/inProcess.test.ts` (demo mocks).
- Build checks: `build/pwaBuild.test.ts` builds production and mock in a temp folder. Production emits `sw.js`, and its
  precache holds every original stylesheet. The mock build emits no `sw.js`. `build/mockFreeBuild.test.ts`: see
  "Build modes". Both tests build through `build/viteBuild.ts` (real `vite build` in a child process), as the e2e does.

### PWA e2e (`npm run e2e:pwa`)

`build/e2e/pwa.e2e.ts`: vitest in Node (`build/e2e/vitest.config.ts`, apart from the unit tests: `npm test` does not
match `*.e2e.ts`) that drives Playwright's library (1.62.1, already in the stack; no new runner). Helpers in
`build/e2e/harness.ts`.

- **Builds**, in parallel in a temp folder (`$TMPDIR/pwa-e2e-*`, removed afterwards; never `dist-demo/`):
  - the demo;
  - a second demo with `VITE_APP_ENV=demo-next-release` (the next release: new main bundle, new `index.html`, new
    `sw.js` revisions);
  - production.
- **Servers** on free `localhost` ports (other servers such as :5173 are left alone): the demo by its own `serve.mjs`,
  production by `vite preview`.
- **Browser**: the system Google Chrome (`channel: 'chrome'`), headless, one fresh persistent profile per scenario
  (Playwright's default contexts are incognito, where Chrome reports the installability error `in-incognito`).
  Without Chrome: `npx playwright install chromium` in `app/` (the Chromium of Playwright 1.62.1); the harness falls
  back to it, and `PWA_E2E_BROWSER=chromium` forces it.
- The e2e polls service-worker state changes (`expect.poll`). It never sleeps.

| Scenario   | Checks                                                                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Demo SW    | one registration, scope `/`, script `/sw.js`, no MSW; HomeFeed renders; Chrome parses the manifest without error and reports no installability error (CDP `Page.getInstallabilityErrors`)                                           |
| Manifest   | demo and production: `/UBTConnect/moduleservices/pwa/manifest` answers 200, `application/manifest+json`, equal to `src/pwa/manifest.json` (TST values); the 4 icons answer `image/png` at their declared sizes                      |
| Offline    | after one visit: stop the server **and** `setOffline(true)` (Playwright's offline mode does not cover the worker's own requests), reload: HomeFeed with mock updates, page controlled by `/sw.js`                                   |
| Ping       | offline the ping fails (no cached answer); never in Cache Storage (offline and online); not in the `sw.js` precache; online again `pong` through the worker                                                                         |
| Update     | the next release on the same origin, `registration.update()`: the new worker installs and waits (both `index.html` revisions precached); a reload keeps it waiting; with every window closed it activates and drops the old entries |
| PIN (demo) | `?mocksession=locked` opens PINUnlock with one keypad; a reload stays on PINUnlock; 0223 returns to HomeFeed                                                                                                                        |
| Production | only the app SW, scope `/UBTConnect/`; no request to MSW, a mock chunk (`mocks-`, `fixtures-`, …), mock images or the mock Feed CMS; `mockServiceWorker.js` not served; installable                                                 |

Run time: about 15 s (three builds about 6 s, eight tests about 7 s). The run was stable in consecutive runs on 2026-10-16.

**Not in `npm run ci`** (auto-accepted, 2026-10-16):

- `ci` runs anywhere without a browser (route agents, fresh clones; Playwright 1.62.1 has no browser downloaded).
- This suite needs Chrome and starts local servers.
- ADR-12 lists it as its own script.
- Run it after a change to `src/pwa/`, `src/sw/`, `build/`, `vite.config.ts`, `index.html` or the shell's start and
  lock. Run it before you hand out a demo.

### Device matrix (manual)

Playwright cannot install the app, use a camera or run iOS. Before a release (and after a change to the PWA files),
check on an HTTPS host (phones cannot use `http://<computer IP>`; see `build/demo/README-demo.md` "Host it"):

| Device                                       | Install                                    | Offline | PIN | Scanner | Update |
| -------------------------------------------- | ------------------------------------------ | ------- | --- | ------- | ------ |
| iPhone, Safari 16.0 to 16.3, installed       | Share > Add to Home Screen                 |         |     |         |        |
| iPhone, Safari 16.4+, installed              | Share > Add to Home Screen                 |         |     |         |        |
| Android, Chrome, installed                   | menu > Install app                         |         |     |         |        |
| Desktop Chrome (macOS or Windows), installed | install icon in the address bar, or menu   |         |     |         |        |
| Desktop Edge (Windows), installed            | App available > Install, or Apps > Install |         |     |         |        |

1. **Install**: the app has the name and icon "Connect 2.0" (TST AppLogo). It opens standalone at `/UBTConnect/`, with
   the theme colour `#1992ab` (desktop title bar, Android status bar). iOS shows no prompt by itself.
2. **Offline**: open once online and wait a few seconds; then airplane mode and a cold start (close the app first). The
   demo opens HomeFeed with its mock data; production opens the shell and shows the original toasts ("No internet
   connection. Please check your network settings and try again.").
3. **PIN** (demo): `/UBTConnect/HomeFeed?mocksession=locked` opens PINUnlock; reload, or leave and reopen the app: still
   locked; 0223 unlocks and returns to HomeFeed.
4. **Scanner** (`?scanner=web`, ADR-11, [device guide](device.md)): on OrbitAdminEventDetail, Scan QR Code asks for the
   camera, uses the rear camera and reads a QR code. The cross closes the scanner without a message. iOS decodes with
   ZXing.
5. **Update**: deploy a new build. Open the app: the old version keeps running. Close every window (iOS and Android:
   swipe the app away) and open the app again: the new version runs.

Note the device, OS and browser versions, the date and the result of each step in the review notes.

### Lighthouse (`npm run lighthouse`)

ADR-13: `build/lighthouse/lighthouse.run.ts` drives `lighthouse` 13.4.1 (dev). It replaces ADR-12's `@lhci/cli`
0.15.1. The scratch install of `@lhci/cli` failed `npm audit` (11 high advisories in its own dependencies; 0.15.1 is its
latest release). The run is one vitest run in Node (`build/lighthouse/vitest.config.ts`) so it reuses the e2e's build and server helpers.

- Builds the demo into a temp folder and serves it with its `serve.mjs` on a free port. Starts headless Chrome (same
  browser choice as the e2e) with a DevTools port for Lighthouse.
- Audits HomeFeed, Search and OrbitLanding once each. Settings:
  - `?latency=0` (no artificial mock delay, so the scores measure the app);
  - Lighthouse's default mobile emulation (412 px screen, simulated slow 4G and 4x CPU slowdown);
  - storage reset (every run is a first visit).

  Categories: performance, accessibility, best practices (Lighthouse 12
  removed the PWA category; the e2e checks installability).

- Reports stay on this machine: `app/lighthouse-reports/` (gitignored and prettier-ignored), `<Page>.report.html`,
  `<Page>.report.json` and `summary.json`, replaced on every run. Nothing is uploaded (no LHCI server, no public
  storage).
- Budgets: `build/lighthouse/budgets.ts`, from the first run with a noise margin (score minus 5; FCP, LCP and TBT plus
  20 %, at least 200 ms, rounded up to 100 ms; CLS plus 0.05). A miss prints `WARNING …` and the run still passes; only
  a failed Lighthouse run fails. Tighten them by ADR.
- About 25 s. Not in `npm run ci`, for the same reasons as the e2e, and because the numbers depend on the machine.

First scores (2026-10-16, two runs with the same scores):

| Page         | Performance | Accessibility | Best practices | FCP    | LCP    | TBT  | CLS   |
| ------------ | ----------- | ------------- | -------------- | ------ | ------ | ---- | ----- |
| HomeFeed     | 44          | 90            | 96             | 9.7 s  | 14.7 s | 0 ms | 0.244 |
| Search       | 56          | 95            | 100            | 9.3 s  | 14.1 s | 8 ms | 0     |
| OrbitLanding | 55          | 92            | 100            | 13.1 s | 18.2 s | 0 ms | 0.011 |

2026-10-17, after the favicon fix: HomeFeed best practices 96 → 100 (no console error); the other scores unchanged
(OrbitLanding CLS 0.021).

Budgets (minimum scores, maximum metrics):

| Page         | Performance | Accessibility | Best practices | FCP    | LCP    | TBT    | CLS  |
| ------------ | ----------- | ------------- | -------------- | ------ | ------ | ------ | ---- |
| HomeFeed     | 39          | 85            | 91             | 11.7 s | 17.7 s | 200 ms | 0.30 |
| Search       | 51          | 90            | 95             | 11.2 s | 17.0 s | 300 ms | 0.05 |
| OrbitLanding | 50          | 87            | 95             | 15.7 s | 21.8 s | 200 ms | 0.07 |

What the first reports point at (findings, nothing changed):

- render-blocking, unminified and partly unused original per-screen CSS (kept as captured) and unused JavaScript;
- colour contrast of original theme colours;
- `image-alt` and `unsized-images` on HomeFeed's Connect logo (original markup);
- HomeFeed's layout shift;
- `/favicon.ico` answered 404 (fixed 2026-10-17: `index.html` now has the original's `shortcut icon` link to
  `/UBTConnect/favicon.png`, the result of OutSystems UI AddFavicon).

## Demo build

`npm run build:demo` = typecheck + `vite build --mode demo` (`.env.demo`) + `build/zip-demo.mjs`. Output:
`dist-demo/` and `dist-demo.zip`, a static site for colleagues to run or host:

- Static copies of what dev answers with middleware:
  - original images at `/UBTConnect/img/*`, `/UBT_CW/img/*` (every build);
  - the mock Feed CMS at `/embed/feeds/index.html` and `/embed/feeds/item/<id>/index.html` (mock builds);
  - the manifest.
- Host files from `build/demo/`: `README-demo.md` (run, install, host), `serve.mjs` (Node) and `serve.py` (Python 3),
  zero-dependency local servers with SPA fallback on `localhost`; `_redirects` and `_headers` (Netlify, Cloudflare
  Pages); `404.html` (copy of `index.html`, for GitHub Pages and Cloudflare Pages).
- Hosting needs the domain root, HTTPS (phones), an SPA fallback, the `/embed/feeds/item/*` rewrite and the manifest
  type `application/manifest+json`.

## iOS (P13: keep iOS 16+, degrade without errors)

- No install prompt: Share > Add to Home Screen. The icon comes from `apple-touch-icon`.
- Installed apps have their own storage and cookies, separate from Safari: users sign in again after installing.
- Safari may evict the storage of sites that are not installed (about 7 days without use). The service worker and
  caches go with it. The next visit reinstalls them.
- No Background Sync. No orientation lock (the manifest's `portrait` is ignored). No `BarcodeDetector` (the vendored
  scanner decodes with ZXing instead). Web Push only for installed apps on 16.4+ (not used: P5).
- Where `navigator.serviceWorker` is missing (insecure origin, some private modes) the app runs without a worker; every
  step in `src/pwa/register.ts` returns quietly.

## Offline parity (phase 2)

Decisions: P1 online-first, P10 / ADR-10 IndexedDB kept (`migration/pwa/pwa-discussion-plan.md` section 7).

**Network detection (1:1, `src/shell/feedback/networkDetection.ts`).** Port of NetworkDetection's JavaScript node
(`migration/shell/sources/NetworkDetection.controller.js`, shell-facts U11), started once by `useNetworkStatusEvents`
(`networkStatus.ts`, mounted in AppFrame):

- The ping is `GET /UBTConnect/status/network-ping.txt?d=<now>` with `cache: "no-store"`, a 300 s abort timeout and one
  shared ping. The file is the TST one (`pong`, `public/UBTConnect/status/`), so dev, demo and production serve it at
  the TST path.
- The network is checked in four cases:
  - the initial check at start;
  - a timer check every 30 s while the tab is visible;
  - the browser `online` / `offline` events;
  - (production only) the API calls: an answer means online, and a failure is checked with a ping.
- With mocks, the API answers come from MSW or the page, so only the ping and the events decide.
- A change sets `App_NetworkStatus_IsOnline_IsPersistent`. A change shows no toast and sets no class. The flag only
  picks the text of a communication error: offline "No internet connection. Please check your network settings and try
  again.", online "Service Interruption" (`exceptionMessages.ts`, UC:16085-16101).
- OSUI `NetworkStatusChanged` needs no change: it listens on `window` (Init, :665-668). Its Cordova `deviceready` path
  listens on `document`, where browsers never send `online` / `offline`.

**Service worker.** The ping has its own network-only route (before the precache). The precache list excludes the ping
(the demo precaches every file). Navigations wait 4 s for the network, then the precached `index.html` answers
(`src/pwa/networkFirst.ts`; auto-accepted: Workbox NetworkFirst needs a runtime cache of navigations for its fallback, and
the app does not keep such a cache).

**Storage (ADR-10).**

- `navigator.storage.persist()` once per page load, only when installed (`display-mode: standalone` or iOS
  `navigator.standalone`), when the device database is first opened (`src/pwa/persistStorage.ts`).
- Eviction: a deleted database is recreated empty on the next transaction; the app start re-syncs notes, bookmarks and
  the Orbit static entities (`startup.ts`). If an Orbit table is empty and has no metadata row, no sync has
  filled it on this device (first visit, eviction, logout). The table stays "not read" until the sync, so
  MilestoneHeader and HostSurvey wait instead of raising "not found" (`orbitStaticEntities.ts` readMirror). Search history and recent searches are
  local only and start empty, as in the original.
- Logout (`shell/auth.ts` signOut, after Cache_InvalidateEverything, original order kept) clears the whole memory cache
  and every local entity store, metadata included (`localEntities/clearLocalEntities.ts`). The Orbit reference lists
  stay in the page's mirror for a new sign-in; the next app start re-syncs the stores.

**Tests.**

- Unit: `networkDetection.test.ts`, `networkStatus.test.tsx`, `src/pwa/{networkFirst,persistStorage,swRoutes}
.test.ts`, `auth.test.ts` (logout), `orbitStaticEntities.test.ts` (eviction).
- `npm run e2e:pwa` now covers the offline reload and the ping ([Testing](#testing)).
- Smoke by hand (headless Chromium, demo build in a temp folder served by `serve.mjs`): simulate offline by stopping the
  server **and** `context.setOffline(true)`. Playwright's offline mode does not cover the service worker's own requests.
- Checked on 2026-10-16:
  - the offline reload shows HomeFeed;
  - CountryList with `?mock=loading` (timeouts → communication error) shows "No internet connection…" offline and
    "Service Interruption" online again;
  - the ping fails offline and is never in Cache Storage;
  - after deleting the database, MilestoneDetail, HomeFeed, EventDetail and HostSurvey open without an error and the
    stores are re-synced.
