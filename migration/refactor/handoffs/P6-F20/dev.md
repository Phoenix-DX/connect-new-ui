# P6-F20 dev report

Status: pass

## Summary
Cause: the save test waited a fixed 20 ms (`setTimeout`) for the MSW save call and the "Your changes were saved." message. Under the full suite (many workers, CPU load) the answer arrives later, so the message was still null. Alone it was fast enough. No shared state found (freshPage resets storage, caches, calls).
Fix: wait with `waitFor` on the message, then assert the calls. Test only, no app change.

## Files changed
- app/src/pages/Services/Services.test.tsx (save test: fixed delay replaced by waitFor)

## Commands and results
- eslint on the file: clean
- `npx vitest run src/pages/Services`: 5 files / 30 tests passed (Services alone passes)
- `npx vitest run` x3: 489 files, 2681 tests passed each time; Services passed each time
