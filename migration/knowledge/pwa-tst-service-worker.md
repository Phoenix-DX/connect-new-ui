# TST service workers (PWA fact F2)

Source: the user ran `navigator.serviceWorker.getRegistrations()` in Chrome DevTools on the signed-in TST app,
2026-10-17. Captures and parity block service workers (`serviceWorkers: 'block'`), so they did not show this.

| Scope | Script | Owner |
|---|---|---|
| `https://ubtm-tst.ubtconnectglobal.com/UBTConnect/` | `/UBTConnect/pwaServiceWorker.js` | UBTConnect (the app being migrated) |
| `https://ubtm-tst.ubtconnectglobal.com/ConnectMobile/` | `/ConnectMobile/pwaServiceWorker.js` | another app on the same origin (not in scope) |

What is known:
- `pwaServiceWorker.js` is in neither the TST moduleinfo manifest nor the fetched runtime scripts.
  `OutSystems.js` `VersionsManager.supportsResourceCache` only checks `navigator.serviceWorker.getRegistrations()`.
  Something else registers the worker. Assumption: the PWA `index.html` registers it. Nobody has fetched that file.
- Content read 2026-10-17 (user approved the fetch): `migration/runtime-sources/UBTConnect.pwaServiceWorker.js`.
  It is 133 kB, served with `cache-control: max-age=2592000` and last modified 2026-10-15. See the next section.

## What `pwaServiceWorker.js` does (OutSystems-generated)
- `importScripts("./scripts/OutSystems.js", "./scripts/OutSystemsSettings.js")`. It logs through the runtime logger
  (`Service Worker-<cache>`).
- One cache, `CACHE_NAME = "UBTConnect-" + VERSION_TOKEN` (`wLhbjosmE9sz7igLthxbeg` at the fetch). The token is baked
  into the file, so each OutSystems publish changes the file. The browser then installs the new worker.
- **install**: precaches 1310 versioned URLs with up to 5 tries each: 1080 scripts, 52 css, about 100 images and
  fonts, `index.html?<v>` and `_error.html?<v>`. Then `skipWaiting()`. A single failed URL fails the whole install,
  and the old worker stays.
- **fetch**: cache-first for **every** request in scope. 90 `urlMappings` (`/UBTConnect`, `/UBTConnect/`, and one per
  screen path) map navigations to the cached `index.html?<v>`. A miss goes to the network. POSTs (screenservices) never
  match the cache, so they go to the network. On an error it answers nothing, and the fetch fails.
- **activate**: deletes every cache whose name starts with `UBTConnect` except the current one, then `clients.claim()`.
- Quirk: the mapping key `/UBTConnect/moduleservices/moduleinfo?cached` never matches, because the lookup uses the
  pathname only.

What it means for the React app:
- Production registers `/sw.js` with scope `/UBTConnect/` (`app/src/pwa/swRoutes.ts` SW_URL, `bootPlan.ts`
  APP_SCOPE). That is the same scope as TST's worker, and registrations are keyed by scope.
  - A same-origin cutover (P15) replaces TST's worker only when the new `index.html` runs.
  - Browsers re-check the **registered** script URL (`/UBTConnect/pwaServiceWorker.js`) on navigation. The handover
    file therefore belongs at that URL: either our worker or a kill switch.
- ConnectMobile's worker has its own scope. Production must keep scope `/UBTConnect/`. The demo's scope `/` is only for
  its own static host.
- The demo and a pilot on another origin do not meet these workers.
- **Cutover consequence.** A device with TST's worker serves every screen path from its cached OutSystems `index.html`.
  - The device gets the new app only after the browser's update check of `/UBTConnect/pwaServiceWorker.js` returns a new file.
  - The check runs on navigation and at least every 24 h. The main script bypasses the HTTP cache.
  - If that URL answers 404, the update fails and the device keeps the old cached app.
  - So the URL **must keep answering** after cutover, with our worker or a kill switch.
  - Recommendation: our worker also deletes the `UBTConnect-*` caches.
- **Decision (user, 2026-10-17): ADR-14 (option A).** Production serves our worker at `/UBTConnect/pwaServiceWorker.js`
  (scope `/UBTConnect/`), and it deletes the `UBTConnect-*` caches on activate. Not implemented yet (phase 5).
