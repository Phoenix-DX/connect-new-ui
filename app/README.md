# UBTConnect React clone

React app that replaces the OutSystems 11 mobile app UBTConnect. The UI and the server calls match the original 1:1.
The rules of the migration are in `../migration/AGENTS.md`, and the confirmed stack is in `../migration/architecture.md`.
The architecture is in [docs/architecture/overview.md](docs/architecture/overview.md).

```bash
nvm use              # Node from .nvmrc
npm install
npm run dev          # http://localhost:5173 → /UBTConnect/HomeFeed
npm run ci           # contract types, typecheck, lint, architecture, duplicates, unused code, flags, format, tests, build
npm run storybook    # http://localhost:6006: catalog of the shared blocks
npm run build:demo   # installable static demo with mock data: dist-demo/ + dist-demo.zip
```

## Folders of `src/`

| Folder        | What it holds                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| `app/`        | Router, route table with meta (`routes.ts`), `RouteGuard`, error boundaries, dialog wiring (`dialogs.ts`)         |
| `pages/`      | One folder per route: `<Route>Page.tsx`, `inputs.ts`, `hooks/`, `components/` and `mocks.ts` of that page only    |
| `containers/` | Code that calls hooks and renders one tree, only by the container criterion of the page template                  |
| `components/` | Props-only UI: `ui/` (patterns and `ui/os/` widgets), `layout/`, and one folder per domain                        |
| `api/`        | The typed `callAction` client (`client/`) and one folder per domain: types, mapper, repository, keys, hooks       |
| `platform/`   | App services by area: auth, session, settings, flags, navigation, device, storage, bootstrap, feedback, config    |
| `lib/`        | Pure helpers; one folder per OutSystems module (`structures.ts`, `staticEntities.ts`, `actions.ts`), `os-wire.ts` |
| `legacy/os/`  | OutSystems compatibility code (exceptions, client variable names, `StylesheetHost`); it shrinks over time         |
| `mocks/`      | MSW handlers, recorded fixtures, fictional data and the mock store                                                |
| `styles/`     | Design tokens and the CSS layer order (`legacy`, `app`)                                                           |
| `vendor/`     | Third-party scripts copied from the original (never edited)                                                       |
| `pwa/`, `sw/` | Service worker registration and the service worker                                                                |
| `test/`       | Helpers for tests and stories                                                                                     |

Import direction and the checks that enforce it: [quality checks](docs/guides/quality.md). The recipe for a new page is the
[page template](docs/guides/page-template.md). All guides: [docs/README.md](docs/README.md).

Mock data is served by MSW (recorded, anonymized fixtures in `src/mocks/fixtures/` when the stack uses them).

PWA (service worker only in the demo and production builds, manifest, caching): `docs/guides/pwa.md`.
Switch scenario/latency with `?mock=empty&latency=3000` on any page; switch feature flags with `?ffpanel=1`.
Routes are the original OutSystems paths. Unmigrated screens show a "not captured" marker.
Server calls follow the contract in `src/api/openapi.yaml` (`npm run gen:api` after a change).
