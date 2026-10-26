# Test · F59-c · Split the large pages files

Status: pass

## Result

All gates pass. Dev server http://localhost:5174 returned 200 and serves /Users/khaitruong/Projects/connect-new/app.

## Commands run

| Command | Exit | Key numbers |
|---|---|---|
| `npm --prefix app run ci` | 0 | typecheck, lint, tests, arch, knip, build all pass |
| `refactor_parity.py --level visual --all --ref both --app http://localhost:5174` | 0 | outsystems 64/64 clean, self 64/64 clean, 0 new differences (report: parity.md) |
| `node app/build/bundle-report.mjs` | 0 | HomeFeed 245.90 kB (base 245.80, +0.10; W21 limit +0.3 ok); Login 185.10 (base 185.06, +0.04). W45: HomeFeed +1.03 kB since 244.87 |
| `arch_baseline.py check --strict` | 0 | 72 warnings, 72 rows, 0 new, 0 gone |
| `check-arch-baselines.mjs` | 0 | dependency-cruiser 144 rows, 144 violations, 0 stale |
| eslint on changed files | 0 | no output |
| `f59-c-split.ts --dry-run` | 0 | Base is `HEAD` (14408db8, F58 committed; the wip commit no longer exists). The sources at HEAD are the originals, so the script reproduces the same four splits (line counts as in dev.md); only imports, headers, signatures not copied. |
| own check: sorted non-blank trimmed lines, `git show HEAD:<old>` vs union of new files | n/a | Only added: headers, imports, wrapper signature and call lines, destructuring/repeated names of the new factory/hook call. Only removed: moved imports and type imports. No logic line lost or added. |

## Move review

- Hook order in `useEventBooklet`: `useRef`, `useFlowState`, then `useEventBookletDataFlows(...)` where the removed
  non-hook code stood; no other hook moved. `useUpdatesSingleList`: only the Flags/Flows interfaces moved to
  `updatesSingleListFlows.ts`; body unchanged.
- `asUnknownError` is defined in `useEventBooklet.ts` (line 160) and passed in (line 179); the data flows call that
  same function (4 uses). The `legacy/os/exceptions` import stays in the hook.
- `useEventBookletDataFlows` calls no hook (grep finds only its own declaration).
- `createBookmarkRows` (factory, no hooks) is called each render in `BookmarkGroupView.tsx`; bodies are copied lines,
  so the DOM is the same (parity visual 64/64 clean confirms).
- 5 import-only edits (EventBookletView.tsx, GuestView, HelperView, EventBookletView.test.tsx, eventBookletState.test.ts):
  diffs show only import lines. Knip baseline: 2 rows removed, none added.

## Diff review

1. openapi.yaml, mocks, public css: no change. Pass.
2. No deleted test file. Pass.
3. Scope: only the four files, their new modules, 5 importers, knip json, handoff files, the tool script and ledger.csv. Pass.
4. `@origin` tag present once in each of the 5 new files. Pass.
5. No logic change (line-multiset check above). Pass.
6. n/a (move step).
7. No secret, password, PIN or email found. Pass.

Line counts all 400 or less (dev.md: 370, 336, 103, 67, 165, 187, 299, 362, 52).

## Questions for the user

None.
