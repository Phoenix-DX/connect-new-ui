# Brief: P6-F12 Move check allows `@origin` tags; bundle report finds pages

A hand-written tool step (as P5-F8 and P5-F9), not in the catalog. Source: the tester of P6-G1-A
(`handoffs/P6-G1-A/test.md`). It runs while P6-G1-A is uncommitted in the tree: change ONLY the two tool files below
(and their tests or README lines); do not touch `app/src/` or the files of P6-G1-A.

## Problems

1. `rf.py diffcheck --move` (`.claude/skills/refactor-master/scripts/rf.py`, `cmd_diffcheck`) reports every added
   `@origin` line as "NOT A MOVE". Plan v2 §6, Phase 6 step A, asks for `@origin` tags in the move commit (rule 6 of
   §1.4: one JSDoc tag `@origin <OutSystems qualified name>` per file that ports a block or a screen). So every P6 step
   A fails the check.
2. `app/build/bundle-report.mjs` finds the route chunk only for `src/screens/<screen>/index.tsx` (line 32 to 34). After
   P6-G1-A, Login is `src/pages/Login/LoginPage.tsx` (the loader in `app/screens.ts` uses that name), so the report
   prints "route chunk not found".

## Do

1. `cmd_diffcheck`: accept an added line only when it is an `@origin` tag in a file that the same diff renames (a
   rename code `R`), and only in these forms: `/** @origin <name> */` or ` * @origin <name>` (name: letters, digits,
   `_` and `.`). Count the accepted tags and print `origin tags: <n>`. Every other rule stays as it is. A removed
   `@origin` line, or a tag in a file that is not renamed, still fails.
2. `bundle-report.mjs`: find the route chunk for `../pages/<screen>/<screen>Page.tsx` first, then for
   `../screens/<screen>/index.tsx`. Keep the output format.
3. Checks: `python3 -m py_compile` of rf.py; run `python3 .claude/skills/refactor-master/scripts/rf.py diffcheck
   --move` on the current tree (P6-G1-A is staged or in the work tree): it must print `origin tags: 10` and `ok`;
   then make a throwaway copy check that a non-tag line still fails (do not change the tree: for example, run the
   function on a fake diff in a scratch test, or describe the manual check). `npm --prefix app run build` then
   `node app/build/bundle-report.mjs`: Login and HomeFeed print sizes. Use Node 24
   (`export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH`).
4. Do not commit. Write dev.md.

## Gate (tester)

- The two checks above, run again; `git diff HEAD --stat` shows the tool files changed only (P6-G1-A files aside).
