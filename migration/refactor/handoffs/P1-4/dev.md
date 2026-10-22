## Result
status: pass
summary: Ran `move.ts --alias-only` (2889 imports rewritten to `@/`, 0 files moved). Rule 11 is now `error` in eslint. `grep -r "from '\.\./\.\./" app/src` prints 0.

## Files changed
about 925 files under app/src (import lines only, plus prettier reformatting of 45 files whose import lines got shorter)
app/src/mocks/fixtures.ts (one comment line: example import path now `@/mocks/fixtures`)
app/eslint.config.js (rule 11 `error`; `src/sw` exempt; comment)
migration/tools/refactor/move.ts (added `.d.ts` to RESOLVE_EXTENSIONS so `../../api/schema` resolves)

## Commands run
node migration/tools/refactor/move.ts --alias-only (twice) → exit 0, typecheck passes
npm run format:check → pass (after prettier --write on 45 files)
npx eslint . → 0 errors, 1 warning (existing rule 4 warning)
npm run typecheck → pass
npx vitest run → 324 files, 1457 tests pass
rf.py diffcheck --move → FAIL only on the 3 intended non-move files (eslint.config.js, move.ts)

## Deviations from the brief
- `src/sw/sw.ts` keeps 2 `../pwa/` imports: the codemod skips `src/sw` by design. ESLint rule 11 is off for `src/sw`.
- In the components block the rule 11 pattern shares the rule with rule 4, so it stays `warn` there (no relative imports remain, so no effect).
- The codemod missed `.d.ts` targets (8 imports of `api/schema`); fixed the codemod, reran.
- Prettier reformatted 45 files (import lines changed length).

## Questions for the user
none
