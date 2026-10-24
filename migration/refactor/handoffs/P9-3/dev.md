## Result
status: pass
summary: Docs step done with no app code change. README folder map, new overview diagram (folders and import direction), stale paths fixed, page-template final, ADR-15 text updated (status kept), stack.md regenerated. CLAUDE.md not edited: the proposal is in claude-md-proposal.md.

## Files changed
app/README.md
app/docs/README.md
app/docs/architecture/overview.md
app/docs/guides/page-template.md
app/docs/guides/screens.md
app/docs/guides/api-and-mocks.md
app/docs/known-original-bugs.md
app/docs/refactor/CHANGELOG.md
app/docs/reference/stack.md
migration/stack.json
migration/architecture.md
migration/tools/refactor/p9-3-adr15.py (new, edits ADR-15 text)
migration/tools/refactor/p9-3-doc-paths.py (new, path replacements)
migration/refactor/handoffs/P9-3/claude-md-proposal.md (new)
migration/refactor/handoffs/P9-3/dev.md (new)

## Commands run
stack.py render → architecture.md written
docs_gen.py --out <scratch> → only stack.md copied to app/docs/reference (other pages unchanged)
mermaid check (check_mermaid method, 4 diagrams of overview.md, scratch page) → 4 render; the old container diagram had a syntax error (braces in a label), fixed by quoting
prettier --check on the changed docs → pass
ste_lint on changed docs → 0 errors (README, overview, page-template, screens, api-and-mocks, known-original-bugs, CHANGELOG, proposal); stack.md keeps 29 errors from the generated ADR text (before my edit it had errors too)
git apply --check of the CLAUDE.md diff → applies

## Deviations from the brief
- stack.md still has STE errors in the old generated ADR text; I did not rewrite other ADRs.
- app/index.html comment (names src/shell/StylesheetHost.tsx; file is src/legacy/os/StylesheetHost.tsx) is listed in the CHANGELOG, not changed (code file).
- Quick checks (typecheck, vitest, eslint) not run: no code file changed.
- migration/tools/README.md still names src/shared in one row (outside app/docs; not in the brief).

## Questions for the user
- Apply the CLAUDE.md change in claude-md-proposal.md (2 edits)?

## Loop 1

- Cause: the ADR-15 text that I added in P9-3 was too long (P7-6, P9-1, P9-2, Restored views), so ste_lint on stack.md went from 25 to 29 errors.
- Fix: in `migration/stack.json` I split those four bullets into short sentences (ADR-15 `decision` only; status, by and at unchanged). The facts are the same; I dropped only the row counts of the baselines and the section detail that other docs hold.
- Render: `stack.py render`, then `docs_gen.py --out <scratch>`; I copied only `stack.md` to `app/docs/reference/`.
- Result: ste_lint 25 errors in `stack.md` and 25 in `migration/architecture.md` (same as HEAD). Prettier passes on `stack.md`. `architecture.md` is generated and is not prettier-formatted at HEAD either.
- Files changed: `migration/stack.json`, `migration/architecture.md`, `app/docs/reference/stack.md`. No `app/src` file touched.
- The AssembleEvents date test is in step F54, not here.
