# Brief · F58 · Client variables through typed platform accessors

Change step outside `steps.json` (no `rf.py` state). Decision: user, 2026-10-25 (question F58, answer "Chuyển sang
settings có kiểu (Recommended)"): pages, components and app code stop calling `getClientVar` / `setClientVar` by
string name; they use typed accessors that `platform/` exports. Plan v2 §7 metric "Users of `getClientVar` outside
`platform/`": 22 today, target 0. This step does the 15 files of pages, components and `app/`; the 5 cache blocks
(`legacy/os/cache/*`, owner F37), the 3 `lib/*/actions.ts` files (owner F35) and the adapter
`legacy/os/clientVarNames.ts` stay.

| Field | Value |
|---|---|
| Kind | change (no behavior change) |
| Parity level | visual, all routes |
| Developer model | opus |
| Handoff folder | `migration/refactor/handoffs/F58/` |

## Facts

- `platform/session/clientVars.ts`: `CLIENT_VAR_DEFAULTS` (names `<Module>.<Variable>` like the original, compiled
  defaults, persistence rules U5), `getClientVar`/`setClientVar`. The server settings of AppManager_SynchAppContext live
  in the typed store `platform/settings` (`store.ts`, `useSetting.ts`), read by OutSystems names through
  `legacy/os/clientVarNames.ts`.
- Files in scope (grep `getClientVar|setClientVar`, no tests): `app/RouteGuard.tsx`,
  `components/layout/CommonUiLayout/CommonUiLayout.tsx`, `pages/AcceptPendingPolicies/hooks/useAcceptPendingPolicies.ts`,
  `pages/EventBooklet/hooks/useEventBooklet.ts`, `pages/HouseholdCarousel/hooks/householdCarouselActions.ts`,
  `pages/MessageDetail/hooks/messageDetailState.ts`, `pages/MessageList/hooks/unreadNotifications.ts`,
  `pages/MessageList/hooks/useMessageList.ts`, `pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts`,
  `pages/PINUnlock/hooks/usePINUnlock.ts`, `pages/Photobook/components/Photobook_Carousel.tsx`,
  `pages/Profile/hooks/useProfile.ts`, `pages/Search/hooks/useSearch.ts`, `pages/Splash/hooks/useSplash.ts`,
  `pages/Updates_SingleList/hooks/useUpdatesSingleList.ts`.
- `components/**` may not import `platform/` (rule 4, frozen baseline): `CommonUiLayout` already has baseline rows.
  Do not add a row; if the component needs the value, prefer a prop from its caller, or keep its current import and
  say why in dev.md.

## Change

1. Design one small typed API in `platform/` for the client variables that these files use (for example
   `platform/session/clientVars.ts` named getters/setters such as `getLastUrl()`, `setIsNavigateToHomeOnBack(v)`, or one
   typed `clientVar.<name>` object; follow the style of `platform/settings`). Same storage, same defaults, same
   persistence, same timing (synchronous reads stay synchronous). Write the choice and the reason in dev.md.
2. Replace the string-name calls in the 15 files with the typed accessors. No behavior change. Keep `@origin` tags and
   the OutSystems names in comments where the file explains a flow.
3. The architecture checks must not grow any baseline (`npm --prefix app run arch`,
   `node app/build/check-arch-baselines.mjs`, `python3 migration/tools/refactor/arch_baseline.py check --strict`,
   `npm --prefix app run unused`, `npm --prefix app run flags`). Delete baseline rows that go away.
4. Tests: existing tests pass; tests that set client variables by name may keep doing so through the test helpers, or
   use the new accessors. Add unit tests for the new accessors (defaults, persistence).
5. Measure the metric after the change (grep as above): expected 7 (5 cache blocks + 3 lib files minus overlaps;
   report the exact list).

## Gate commands for the tester

```
npm --prefix app run ci
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F58/parity.md
npm --prefix app run e2e:pwa
npm --prefix app run build && node app/build/bundle-report.mjs   # W21: +0.3 kB per step
```

## Not in this step

The 5 cache blocks (F37), `lib/*/actions.ts` (F35), docs (the documenter).
