# Getting started

```bash
nvm use                # Node 24 LTS (.nvmrc)
npm install            # npm 11 runs install scripts only for packages in "allowScripts"
npm run dev            # http://localhost:5173 (strict port) → /UBTConnect/HomeFeed
npm run ci             # contract types, typecheck, lint, format, tests, build
npm run build:demo     # static PWA with mock data for colleagues: dist-demo/ + dist-demo.zip (guides/pwa.md)
npm run storybook      # http://localhost:6006: shared blocks
npm run e2e:pwa        # PWA e2e in headless Chrome, not part of ci (guides/pwa.md "Testing")
npm run lighthouse     # Lighthouse on the demo build, reports in lighthouse-reports/ (local only)
```

## While testing in the browser

| URL parameter                                     | Effect                                                                                        |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `?mock=empty` / `?mock=error` / `?mock=loading`   | every mocked call answers with empty lists, an HTTP 500, or never (loading state)             |
| `?mock=<name>`, `?mocksession=out\|nopin\|locked` | route scenarios and the start state of the session: see [API and mock data](api-and-mocks.md) |
| `?latency=3000`                                   | mock answer delay in ms (default 600)                                                         |
| `?ff=C2NewNotifications:on`                       | override a feature flag for the session                                                       |
| `?ffpanel=1`                                      | show the flag panel                                                                           |
| `?mock-reset=1`                                   | restart the in-memory mock data from its seed                                                 |

## Configuration

Build-time variables (`.env.example`), read only through `src/lib/config.ts`: `VITE_USE_MOCKS`, `VITE_DEMO`,
`VITE_APP_ENV`, `VITE_API_BASE_URL`, `VITE_ORBIT_URL`, `VITE_ASSEMBLE_URL`, `VITE_LDM_URL`. The app service worker
exists only in the demo build and with `VITE_USE_MOCKS=false` ([PWA](pwa.md)); dev keeps MSW's worker.

## Where to look first

- A bug on one screen: `src/screens/<Screen>/` ([screens](screens.md)); its `mocks.ts` header lists its scenarios.
- Something every screen shares (sign-in, PIN, navigation, local storage): `src/shell` ([shell](shell.md)).
- A form that validates, a dialog, a list: [platform widgets](os-widgets.md).
- Behaviour that looks wrong compared with the original: check [known original bugs](../known-original-bugs.md) first.
