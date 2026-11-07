## Result
status: pass
summary: The fresh capture uses MessageInstanceId 5981096, which the mock did not know, so the build showed the MessageList block. I added a fictional seed message for 5981096 (title and body "test", sent by a user, already read) to the page mock. Parity is clean in all 3 states.

## Files changed
app/src/pages/MessageDetail/mocks.ts

## Commands run
npm --prefix app run typecheck → exit 0
npx vitest run src/pages/MessageDetail → 7 files, 82 tests passed
npx eslint src/pages/MessageDetail/mocks.ts → no output
npm --prefix app run arch → no dependency violations
python3 tools/pipeline/route.py parity MessageDetail --app http://localhost:5173 → default: all kinds 0, pixels 0.01%, worst tile 0.7%; loading: all 0, pixels 0.00%; offline: all 0, pixels 0.01%; "parity clean"

## Deviations from the brief
title and body 'test' are the captured literal text of message 5981096 (unmasked in dom/default.raw.html), not a placeholder

## Loop 1
The coordinator asked for a realistic title and body instead of "test". I tried "Rota" (same length, 4 chars): the parity then fails (text "test" -> "Rota", default pixel 0.16% with worst tile 13.6% over the 3.0% limit, title width 27 -> 33 px). The captured text is NOT masked in the DOM (title span and body p are the literal "test", only the header title and the date are masked), so a different string cannot pass text parity. I restored "test" (the same generic TST test label that earlier seeds use, Q4); parity clean again (one run had a transient call flake, rerun clean).

## Questions for the user
none
