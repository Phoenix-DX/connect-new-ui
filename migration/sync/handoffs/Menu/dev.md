## Result
status: pass
summary: The fresh capture is a householder account again. The master set capture-plan Menu `scenarios.default = householder` (option A). I updated the header comment of mocks.ts (`member` = review-only) and the route notes. Parity is clean in all three states and the quick checks pass.

## Files changed
app/src/pages/Menu/mocks.ts (comment only)
migration/screens/Menu/notes.md (via `sync.py note`)

## Commands run
python3 tools/pipeline/route.py parity Menu --app http://localhost:5173 → default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0 (pixels 1.28%, worst tile 10.3%, within the limits as the report counts them; exemptions used are the existing ones); loading: all 0; offline: all 0; Menu: parity clean
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/Menu → 3 files, 22 tests passed
cd app && npx eslint src/pages/Menu/mocks.ts → no output (clean)
npm --prefix app run arch → no dependency violations (139 known ignored)

## Deviations from the brief
Earlier (before the master's answer) I made no change; now only the comment and the note, since the code already matched the capture.

## Questions for the user
none
