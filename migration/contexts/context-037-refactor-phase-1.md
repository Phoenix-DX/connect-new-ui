# context-037 · Refactor Phase 1 done by the agent team (2026-10-22)

## Result
- P1-1 to P1-4 committed between 15:40 and 16:30 (ab01f0a, fdd21d0, 21d09af, faf8682); next step P2-1.
- `src/shell/` is now `platform/<area>/`, `legacy/os/` and `app/`; `lib/` and `components/` moved; 2889 imports use
  `@/`, and rule 11 (no `../` imports) is an error. Every step: ci pass, bundle equal to the baseline. Changes per
  step: `app/docs/refactor/CHANGELOG.md`.
- **Correction (17:00–19:40):** the parity runs of P1-1 to P1-4 used port 5173, served by another clone
  (`~/Pets/connect-new-ui`, `main`). A real run on HEAD found 2 regressions from P1-2 (Menu, Profile: MSW handler
  order changed when `shell` became `platform`), fixed in P1-fix. The self reference is now from a 3b25ddd worktree;
  after the fix, parity strict `--all` is 64/0 for both references (`app/docs/refactor/reports/P1-verify.md`, `P1-fix.md`).
- `lint:arch`: 1 error (known cycle `cachedUserInfo`/`mockUser`, P3-4) and 244 warn-mode warnings from the moves.

## Decisions (who, date)
- User, 2026-10-22 15:29: auto run to the end of P1 ("Hãy auto chạy cho tới hết P1 như P0"). It ended 16:30.
- User, 2026-10-22 19:15: self runs ignore the `localhost:<port>` origin ("Bỏ origin khi so").
- User, 2026-10-22 15:40: when the Opus advisor is not sure, ask Fable too (refactor-master §5.1, 9360165).
- Auto decisions Q8 (self reference) and Q9 (shell test files): `migration/refactor/auto-decisions-2026-10-22.md`.

## Facts learned (evidence)
- The git-ignored self reference `migration/refactor-reference/` was missing at P1-1 (cause unknown; many files have
  the time 14:51). The Q8 recording used the wrong server; the valid one is from a 3b25ddd worktree (149/149 states).
- A 200 from port 5173 does not prove which code runs: refactor-master §4 and the tester now check the server folder
  with `lsof` (62a78da). This repo's server runs on port 5174 while the other clone holds 5173.
- The codemod skips `src/sw`; it missed `.d.ts` imports until P1-4. Run `format:check` after it (long import lines).
- Parity flake: `CountryDetails/default` against self, clean on rerun (1 of 3 runs in P1-fix).
- The repo has a remote `origin` (GitHub `connect-new-ui`); Claude did not push.
- Tokens: about 638k for P1-1 to P1-4 and 139k for P1-fix (`migration/metrics/ledger.csv`).

## Files changed
- See the commits; tool paths: `app/.prettierignore`, `flags.py` export, `parity_check.cjs` (origin normalization).

## Open issues
- The user reviews Q8 (its recording was replaced, see the correction) and Q9.
- Scripts of the outsystems-screen-spec skill still name `src/shell` and `src/lib`; the refactor does not use them (D4).
- `bootstrap/mocks.ts` also mocks shell-block calls: P5 follow-up in `move-map.csv`.

## Next
- `/refactor-master continue` starts P2-1. P2-4 has a user gate.
