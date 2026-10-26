# Brief · F57 · The last direct calls outside api/ (ShareSheet, userInfo)

Change step outside `steps.json` (no `rf.py` state). Decision: user, 2026-10-25 (question F57, answer "Mở bước sửa nhỏ
(Recommended)"). Plan v2 §7 metric "Files that call `callAction` outside `api/`": 6 today; 4 belong to F35 and F37.

| Field | Value |
|---|---|
| Kind | change (move calls into the api layer; no behavior change) |
| Parity level | visual, all routes |
| Developer model | sonnet |
| Handoff folder | `migration/refactor/handoffs/F57/` |

## Facts

- `app/src/containers/ShareSheet/api.ts` (64 lines): `callAction('UBTConnect_Utils', 'ShareSheet/DataActionGetRecentlyShared')`,
  `'ActionCS_ShareObject'`, `'ActionCS_CreateShareProfileLink'`.
- `app/src/platform/session/userInfo.ts` (47 lines): `callAction('UBTConnect_Utils', 'ActionGetUserInformation')` inside
  a cached getter.
- The api domains follow one pattern (`api/<domain>/repository.ts`, `mapper.ts`, `types.ts`, `keys.ts`, `hooks.ts`,
  `index.ts` barrel; tests per file). `api/share` and `api/member` (and `api/app`) exist.
  `app/docs/refactor/calls-by-domain.md` and `app/docs/guides/api-and-mocks.md` describe where a call belongs.

## Change

1. Put the 3 share calls in `api/share` (repository functions, types, mapper if the shape needs one), and the user
   information call in the domain that `calls-by-domain.md` names for it (`api/member` or `api/app`; say which and why
   in dev.md). Same call names, inputs, outputs, error handling and timing: no behavior change. Keep the cache of
   `userInfo.ts` where it is (platform/session owns the cache; only the call moves).
2. `containers/ShareSheet/api.ts` and `platform/session/userInfo.ts` import from the domain barrels. Delete
   `containers/ShareSheet/api.ts` if nothing is left in it (keep the tests: move them with the code).
3. Keep `@origin` tags. Run the architecture checks: the change must not add a row to any baseline
   (`npm --prefix app run arch`, `node app/build/check-arch-baselines.mjs`, `python3 migration/tools/refactor/arch_baseline.py check --strict`,
   `npm --prefix app run unused`). If a baseline row goes away, delete it (the baselines only shrink).
4. Measure: files that call `callAction` outside `api/` (`node migration/tools/refactor/measure-final.mjs` or a grep):
   expected 4.

Another developer works on step F52 (`app/build/check-flags.mjs`) at the same time: do not touch it. Do not run git
add, stash or commit. Docs: the documenter.

## Gate commands for the tester

```
npm --prefix app run ci
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F57/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs   # W21: +0.3 kB per step
```

## Fix loop 1 (master)

The tester failed the step on the W21 tripwire only: HomeFeed first load 245.53 kB gzip (HEAD 244.87, +0.66; budget
+0.3), Login 185.21 (+0.29). A bundle comparison of HEAD and this tree found the causes:

1. Entry chunk +278 B gzip (both screens): `platform/session/userInfo.ts` imports `fetchUserInformation` from the
   `@/api/member` barrel; it now lives in `api/member/repository.ts`, which the lazy `api/member/hooks.ts` also
   imports, so Rollup hoists the whole repository and `mapper.ts` (6 member calls) into the entry. Fix: put
   `fetchUserInformation` in its own small file (for example `api/member/userInformation.ts`) and re-export it from
   the `api/member/index.ts` barrel; `userInfo.ts` keeps importing the barrel. Then only that function is in the
   entry, as at HEAD. No lint rule forbids it (rule 12 is kept: the barrel re-exports it).
2. HomeFeed-only, the ShareSheet side, about +0.37 kB: the 3 share calls grew the share `repository` chunk (+233 B),
   and the new `api/share/hooks` chunk (`useRecentlySharedQuery`, +343 B) became a static first-load chunk, while
   `ShareSheetContainer` shrank (-181 B). Check whether the share code can stay out of the HomeFeed first load as at
   HEAD (for example the share hook or calls in a module that only the lazily loaded ShareSheet chunk imports), with
   the same rules (barrel re-export, no new baseline row, no behavior change).
Rebuild, run the bundle report and report the numbers. Append a "Loop 1" section to dev.md.
