# Tester report: P4-5 Flags registry

## Result
status: pass
summary: Every gate check passes. `npm run ci` exit 0, strict parity `--all --ref both` 64/64 clean on both references (first run, no rerun needed), bundle within 5 percent, `?ff=` works on dev (5174). Diff review: no behavior change found; focus points 1 to 4 confirmed with evidence below.

## Files changed
none (this file only)

## Commands run
- dev server check: `curl http://localhost:5174/UBTConnect/HomeFeed` → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
- `npm --prefix app run ci` → exit 0 (gen:api, typecheck, lint, format:check, test, vite build)
- `npx eslint` on src/platform/flags, src/legacy/os/flagNames.ts, src/app, src/platform/{navigation,bootstrap,config}, main.tsx, test/testSupport.ts, UBTConnect_Utils/lib/actions.ts, .storybook, build → exit 0, no output
- `npm --prefix app run arch` → 0 errors, 210 warnings (same as the developer). Warnings that name step files: only `UBTConnect_Utils/lib/actions.ts → legacy/os/os-wire.ts` and `platform/navigation/paths.ts → app/routes.generated.ts`, both present at HEAD; no cycle, none new.
- `python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P4-5.md` → PASS; outsystems 64/64 clean, self 64/64 clean; 4.2 min. No pixel-only self difference appeared, so no rerun.
- Flag variants: `migration/capture-plan.json` has `flagVariants: []` at top level and on all 58 screens entries. The parity run therefore covers only the default flag values (the registry defaults, as the capture). No variant exists to run; the flag-off/on paths are covered by the unit tests (routes.test.ts, osNavigate.test.tsx, flags.test.tsx, registry.test.ts), which ran in `ci`.
- `node app/build/bundle-report.mjs` (after the ci build) → HomeFeed 238.66 kB gzip (baseline 236.40, limit 248.2), Login 187.19 kB gzip (baseline 184.61, limit 193.8). Pass.
- `?ff=` on dev: Playwright, `HomeFeed?ff=C2NewNotifications:on,C2EnableCarousel:off&ffpanel=1` → sessionStorage `ff:overrides` = `{"C2NewNotifications":true,"C2EnableCarousel":false}`; the panel shows C2NewNotifications on.
- Production build: `VITE_USE_MOCKS=false npx vite build --outDir <scratchpad>/prod` → exit 0; `grep -rlE "ff:overrides|ffpanel"` in that output → no match. The mock build (`dist/`) contains `ff:overrides` in one chunk (index-D_IPYiuR.js). `mockFreeBuild.test.ts` (in ci) checks both cases.
- `lint:arch`, `rf.py diffcheck --move`: lint:arch done above; diffcheck not applicable (change step).

## Diff review
1. No change in openapi.yaml, mocks fixtures or public css: pass (`git diff HEAD --stat` on those paths is empty).
2. No deleted test file: pass (tests only modified or added).
3. Scope: pass. Changed files are platform/flags, platform/navigation, bootstrap, config, app (routes, AppFrame), main.tsx, `UBTConnect_Utils/lib/actions.ts` (named in the brief item 3), and test files/Storybook helpers for typed `setFlag`. Two test files in shared/ only got typed keys (`as const`).
4. `@origin`: pass. No new file ports an OutSystems screen or block (platform code).
5. Move step: not applicable.
6. Change step, behavior: pass. Details in the focus points below.
7. Secrets: pass (no password, PIN or email in the diff).

### Focus 1: route-level redirects (deviation 2 of dev.md)
HEAD had no redirect of a directly opened URL for the 6 routes. Evidence at HEAD:
- `git grep` of the 5 flag names in `app/`, `pages/`, `platform/`, `containers/`, `components/` finds no route-level check. The pages Notifications, MyBookmarks, LDM_MyEvents_V2, HouseholdCarousel, SupperMeeting_Carousel (`screens/<X>/index.tsx`) have no flag read that redirects (the only reads: MyBookmarks and LDM_MyEvents_V2 read `C2EnableCarousel` to choose a carousel navigation, not to redirect themselves). `Bookmarks` has no screen folder or page at HEAD.
- All navigations to these routes at HEAD are behind the flag check at the call site: `MessageDetail/index.tsx:44` (`getHasNewNotifications() ? Notifications : MessageList`), `BottomBarMenu.tsx:111` (`getHasNewBookmarks() ? 'Bookmarks' : otherwise`), and the HouseholdCarousel callers (AssembleDetail, BookmarksByGroup, LDM_EventDetail_V2, LDM_MyEvents_V2, MyBookmarks, Search), each under the carousel flag.
So the old code never redirected a direct URL, and the new code does not either (`app/routes.ts` comment and `flagRedirectTarget` run only inside `useOsNavigate`). Same behavior. The new redirect in `useOsNavigate` (`osNavigate.ts`) is an extra layer that is a no-op at today's call sites because they already navigate only to the non-redirected value. Note for later phases: a direct URL to these 6 routes is still not redirected; the plan wording "route-level flag redirect" is only partly met until Phase 6 (the developer states this in dev.md; no user decision needed for this step).

### Focus 2: the 30 old readers
`flags.ts` adapter: `isOn(key) = flagValue(key)`, `useFlagOn = useFlag`. Defaults: registry defaults are the 20 values of `flags.generated.json` (on = true, off = false; `registry.test.ts` compares keys, defaults, routes). One flag differs: `mobileDirectoryLocalityContacts` was outside the store (read as off, with a console warning); now in the registry with default off, no warning. `?ff=`: old text rule (on, true, 1, yes, any case, else off; a key alone = on) is kept by `parseFlagText` and `initFlagOverrides`; an unknown key now logs a warning and is ignored (old code stored it, no effect on a decided flag). sessionStorage values of the old text format are still read. `actions.ts` helpers: only `isOn` → `flagValue`, same keys.

### Focus 3: `fetchFlags`
`APP_START_STEPS` order: synchAppContext, fetchFlags, initializeWebComponents, bottomBarSlider, waitForFirstScreen, ... It runs `loadFlags()` before the session leaves `starting`; the developer states it makes no call in the mock phase and the values are the registry defaults. `appStartSteps.test.ts` was updated and passes. App-start parity unchanged (64/64).

### Focus 4: `FLAG_OVERRIDES_BUILT`
`config.ts`: `import.meta.env.DEV || MOCKS_BUILT`. `main.tsx` calls `initFlagOverrides` behind it. Production build has no `ff:overrides` (grep above); dev, mock and demo builds keep it (`?ff=` checked on dev; mock build dist contains the key; `mockFreeBuild.test.ts` passes).

## Deviations from the brief
none

## Questions for the user
none
