# context-041 · Refactor Phase 5 in progress, paused for the user (2026-10-23)

## Result
- P5 catalog steps done: P5-1 (1be0c50), P5-2-member (b9866d7), P5-2-country (d91327c), P5-2-locality (b314574)
  P5-2-update (64fee33). Hand-written steps: P5-F8 (9837e90, parity `--out`), P5-F9 (f695b28, map tile flake).
- Earlier today: Phase 4 and P4-F4 to P4-F7 (context-040).
- Every committed step: ci pass; parity strict 0 differences on both references (port 5174); bundle within +5 percent.

## Decisions (who, date)
- User 2026-10-23 10:5x: "Làm hết P5 thì dừng lại đợi tôi ra lệnh tiếp" (run to the end of P5, then stop); P5-4 gate
  by Opus/Fable under the overnight delegation. User 13:1x: pause now; resume later in a new session.
- Q15 (Opus high, rf Q12), M8 to M12: `migration/refactor/auto-decisions-2026-10-22.md` (Window 3).

## How to resume (next session)
1. `/refactor-master continue`. The active step and its stage are in `rf.py status`.
2. Prefetched developer diffs (decision M8) are in `migration/refactor/prefetch/` (git-ignored): `P5-2-app.patch`,
   `P5-3-event.patch`, `P5-3-bookmark.patch`, `P5-3-note.patch`; their dev.md files are in the handoff folders. Apply
   each one when its step is active: `rf.py start <id>`, `rf.py stage <id> dev`, `rf.py tokens <id> --agent dev --n <N>
   --model opus` (numbers in `prefetch/pending-tokens.txt`), `git apply --3way <patch>`, typecheck, `rf.py stage <id>
   test`, then the normal tester, documenter and commit.
3. Order: P5-2-app, P5-3-event, P5-3-bookmark, P5-3-note, then P5-3-message and P5-3-notification (no developer work
   yet), then P5-4 (after-gate: exemption list, Opus/Fable).
4. `P5-3-event.patch` conflicts with locality in `screens/LDM_MyEvents_V2/api.ts` and `types.ts`: let a developer (mode
   loop) resolve it on the main tree; do not resolve it by hand. The bookmark and note patches were made on a base
   that holds the app, update and bookmark diffs, so apply them after those steps.
5. Tester prompts: no `sleep` or polling loops (a rejected `sleep` loop stopped a tester at 12:55); foreground commands
   with a timeout; `--jobs 2` when a prefetch developer runs at the same time.

## Facts learned (evidence)
- Heavy parallel load (load average about 110) gave many `loading`-state parity differences in the first P5-2-update
  run (12:28); a clean rerun at normal load passed 64/64 on both references (load flakes, not a regression).
- The "app" table of `calls-by-domain.md` has about 20 non-app-start calls with no step (F10).

## Open issues
- Follow-ups F10 (domains of the other "app" calls, before P6); gaps for the user: G1 (SecurityException branch), G2
  (`MyBookmarks` cache record shapes). The user reviews Q10 to Q15, M1 to M12, G-P2-4, U1.

## Next
- Resume P5 as above; stop after P5-4 and wait for the user.
