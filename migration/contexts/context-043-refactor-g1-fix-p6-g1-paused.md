# context-043 · Gap G1 fixed; Phase 6 group G1 started, paused for the user (2026-10-23)

## Result
- Gap G1 (App_Common SecurityException branch) fixed on `refactor/architecture` (3faf89f); the tool fix P6-F12
  (`rf.py diffcheck --move` accepts `@origin` tags, bundle report finds `pages/`) (commit after 3faf89f).
- P6-G1-A done (4146e93): the 10 G1 routes are in `app/src/pages/<R>/<R>Page.tsx`.
- P6-G1-B-Login: developer pass, the change is in the main tree (uncommitted), rf stage `test`.
- Prefetched developer diffs (pass, base 4146e93), saved in `migration/refactor/prefetch/` (git-ignored):
  `P6-G1-B-Splash.patch`, `P6-G1-B-AcceptPendingPolicies.patch`, `P6-G1-B-Menu.patch`; their dev.md files are in the
  handoff folders; token numbers in `prefetch/pending-tokens.txt`. Their worktrees live in a scratchpad under
  `/private/tmp` and are lost at a reboot: use the patches.

## Decisions (who, date)
- User 2026-10-23: "Khi nào chạy phase 6 thì chờ tôi ra lệnh"; then "Chạy G1 xong chờ lệnh từ tôi" = both gap G1 and
  P6 group G1 ("Cả hai"), then stop. The user paused the run at about 17:20 to shut down the computer (option 1).
- W7 (G1 on the refactor branch), W8 (F10: domains just in time, by data ownership): Opus and Fable agree,
  `migration/refactor/auto-decisions-2026-10-22.md` Window 4.

## How to resume
1. `/refactor-master continue`: P6-G1-B-Login is at stage `test`: start the dev server (port 5174), run the tester.
2. Then for Splash, AcceptPendingPolicies, Menu in this order: `rf.py start`, `rf.py stage dev`, `rf.py tokens`
   (pending-tokens.txt), `git apply --3way <patch>`, typecheck and eslint on the changed files (a clean 3-way merge can
   leave an unused import), developer mode `resume` only for conflicts, then tester, documenter, commit.
3. Open decision for Opus + Fable before the Menu commit: the Menu developer moved `requestPhotoUpdate` from
   `api/update` to `api/member` (beyond F10; `handoffs/P6-G1-B-Menu/dev.md`, Deviations). Keep the move or revert it.
4. Shared blocks of two or more G1 routes were not moved by any B step (lists in the four dev.md files); decide where
   they go (plan step B item 3) before PINRegister, PINChange and Profile.
5. Remaining G1 routes: PINRegister, PINUnlock, PINChange, PINBiometricsMenu, TermsAndPoliciesMenu, Profile; then
   P6-G1-C (group gate by Opus + Fable). Then stop and wait for the user.

## Facts learned (evidence)
- `git commit` with staged renames of another step commits them too: use `git commit -- <paths>` for a tool step
  while a step is uncommitted (P6-F12, redone with `reset --soft`).

## Open issues
- G3 (three more unported App_Common branches), F11 (PopupMenu test flake): `migration/refactor/followups.md`.
