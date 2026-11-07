## Result
status: fail
summary: Parity is clean in 3 states, typecheck, arch, eslint, vitest pass. Two gate checks fail but neither comes from the developer's file: scope guard flags tools/sync/sync.py (a working-tree change, not in dev.md), and consistency_check reports 3 NO-INLINE-COLOR findings in the unchanged NotificationDetailBlock.tsx.

## Files changed
none

## Commands run
curl HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
python3 tools/sync/sync.py scope MessageDetail → exit 1: "changed 1 file(s) outside its scope: tools/sync/sync.py"
route.py parity MessageDetail --app http://localhost:5173 → exit 0; default/loading/offline all counts 0; pixels 0.01% / 0.00% / 0.01%; "parity clean"
consistency_check.py --screen MessageDetail → 3 problems (NotificationDetailBlock.tsx lines 164, 178, 183, inline style not in captured DOM); file not in the diff
npm --prefix app run typecheck → 0; npm --prefix app run arch → 0
eslint mocks.ts → 0; vitest src/pages/MessageDetail → 7 files, 82 tests pass

## Diff review
1 protected files untouched: pass. 2 outside allowed paths: dev change only app/src/pages/MessageDetail/mocks.ts (pass); tools/sync/sync.py is modified in the tree but not by the developer (finding). 3 no deleted test: pass. 4 @origin: unchanged. 5 no CSS/fetch/storage/console: pass. 6 fictional mock values (id 5981096 is the capture route id; title "test" is captured literal): pass. 7 no secrets: pass. 8 dev.md names mocks.ts, the only dev file in the page folder; parity artifacts are tool output.

## Deviations from the brief
none

## Questions for the user
- tools/sync/sync.py is modified in the tree (not by the developer). Is it the master's change? The scope guard needs it committed or allowed.
- consistency_check NO-INLINE-COLOR in NotificationDetailBlock.tsx: pre-existing and unrelated to this mock change; accept as known or fix in a separate item?
