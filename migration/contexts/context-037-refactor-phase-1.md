# context-037 · Refactor Phase 1 done by the agent team (2026-10-22)

## Result
- P1-1 to P1-4 committed on `refactor/architecture` between 15:40 and 16:30: ab01f0a, fdd21d0, 21d09af, faf8682.
  Advisor rule change: 9360165. Next step: P2-1 (not started).
- `src/shell/` is now `platform/<area>/`, `legacy/os/` and `app/`; `lib/` and `components/` moved; 2889 imports use
  `@/`, and rule 11 (no `../` imports) is an error. Every step: ci pass, parity strict 64/0 against OutSystems and the
  self reference, bundle equal to the baseline. Changes per step: `app/docs/refactor/CHANGELOG.md`.
- `lint:arch`: 1 error (the known cycle `cachedUserInfo` and `mockUser`, P3-4) and 244 warnings. The warnings rose
  because the moved files now match the warn-mode folder rules. `lint:arch` stops at `arch` until P3-4.

## Decisions (who, date)
- User, 2026-10-22 15:29: auto run until the end of P1, as for P0 ("Hãy auto chạy cho tới hết P1 như P0"). The window
  ended when P1-4 was committed. Decisions are the user's again.
- User, 2026-10-22 15:40: when the Opus advisor is not sure, ask Fable too (refactor-master SKILL.md §5.1).
- Auto decisions Q8 (self reference) and Q9 (shell test files): `migration/refactor/auto-decisions-2026-10-22.md`.

## Facts learned (evidence)
- The git-ignored self reference `migration/refactor-reference/` was missing at P1-1 (cause unknown; many files have
  the time 14:51). It was recorded again at 3b25ddd: 149/149 states, 162.4 MB. Claude Code auto mode blocked the first
  try; the second, after the user's instruction, ran.
- The codemod misses `../api/schema` imports (`.d.ts`); fixed in `move.ts` at P1-4. It skips `src/sw`.
- Prettier can fail after the codemod (long import lines); developers now run `format:check` before they report.
- Parity flake: `CountryDetails/default` against self, clean on rerun (P1-2 and P1-4).
- The repo has a remote `origin` (GitHub `connect-new-ui`); Claude did not push.
- Tokens of the run: about 638k (dev 181k, test 142k, docs 156k, advisors 159k), `migration/metrics/ledger.csv`.

## Files changed
- See the commits above. Tool path edits: `app/.prettierignore`, `flags.py` export (`src/platform/flags/`).

## Open issues
- The user reviews Q8 and Q9. Other scripts of the outsystems-screen-spec skill still name `src/shell` and `src/lib`
  (route.py, catalog.py, stack.py). The refactor does not use them (D4).
- `bootstrap/mocks.ts` also mocks shell-block calls: P5 follow-up in `move-map.csv`.

## Next
- `/refactor-master continue` starts P2-1. P2-4 has a user gate.
