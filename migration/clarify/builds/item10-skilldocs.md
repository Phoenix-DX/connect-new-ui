# Item 10, I10-11 (a): skill docs, old app paths

Dir: `.claude/skills/outsystems-screen-spec/`. `route-agent.md` and all code files were not touched.

## Files changed (edits)

- `SKILL.md`: 5 (phase 5 and 6 table rows, P-OSUI path, freeze list, `route.py step … build` comment)
- `references/route-loop.md`: 3 (build step, reset, ready condition now `<S>Page.tsx`)
- `references/foundation-and-freeze.md`: 2 (block folder, frozen folders)
- `references/architecture-and-stack.md`: 3 (pattern reference files, required files, import rule now `npm run arch`)
- `references/recorded-mocks.md`: 2 (`pages/<S>/mocks.ts`, repository in `api/<domain>/` replaces `api.ts`)
- `references/parity-and-verification.md`: 2 (fingerprint folder list, `call` fix location)
- `references/end-to-end.md`: 3 (agent table x2, foundation prompt)

Total 20 edits in 7 files.

## Scaffold paths still written (`scripts/scaffold_react_app.py`, not changed)

- :10 `src/api/openapi.yaml -> gen:api -> callAction`; :15 and :309 `src/screens/<Screen>/index.tsx` auto-routing
- :233 `src/shared/**/__captures__` (ignore list)
- :401 `src/lib/os-wire.ts`; :423 `callAction` typing comment; :438-439 `callAction` from `src/lib/api.ts`, per-screen `api.ts`
- :441 writes `src/lib/api.ts`; :448 `src/screens/<Screen>/api.ts`; :491, :510 `callAction`
- :719-721 write `src/shell/README.md`, `src/shared/README.md`, `src/screens/README.md` (index.tsx, api.ts, types.ts layout)
- :761 story catalog comment names `src/shared, src/shell, src/components`

## Sentences left (meaning not certain)

- `SKILL.md:156`, `references/feature-flags.md:38,46`: flag store `src/lib/flags.ts` / `src/lib/flags` (route-agent says `src/platform/flags/`; what `flags.py export` writes was not checked).
- `SKILL.md:225`, `:255`: list of scaffold-written files (`src/lib/device.ts`, `flags.ts`, `src/components/FlagPanel.tsx`, `src/mocks/store.ts`, `src/lib/api.ts`); depends on the scaffold.
- `references/foundation-and-freeze.md:29`: `catalog.py` counts a block built when a file under `src/shared` or `src/shell` carries its tag; depends on `catalog.py` code. Also the `@os-block` tag itself (item10-routepy says R4 uses `@origin`).
- `references/parity-and-verification.md:29,72,78`: `src/lib/device.ts`, `src/lib/device-classes.json`, `callAction` logging in `window.__osCalls`; current locations not verified.
- `SKILL.md:225` and `references/recorded-mocks.md:76`: `callAction(...)` name; the replacement call function in `app/src/api/` was not confirmed.

## Tool calls

7 (before this file is written: grep, context read, check read, edit script, this file; plus handback).
