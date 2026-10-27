# Brief for a build agent (clarify-screens, major findings and "build now" items, 2026-10-27)

You build one group of items in the React app `app/`. The items are major findings of the flow reports and the
"build now" decisions of the user (`migration/clarify/infra-gaps.md` §10.4). The user ordered the build on 2026-10-27.
You change code, tests, mocks and docs. You make no commit (the orchestrator commits).

## Source of truth and evidence

- TST compiled code is the target. The finding row (report §5) names the TST file and lines. Read them yourself:
  `cd /Users/khaitruong/Projects/connect-new && python3 migration/clarify/tools/tst_source.py grep "<regex>" <file>` and
  `show <file> | sed -n 'A,Bp'`. `list <name>` finds the file. The React location is in the same row.
  - No whole-file dumps: a block file can be 400 KB. Read the model, the view and the actions you need, part by part.
- The checklist rows of the finding: `python3 -c "import json;[print(r['id'],r['verdict'],r['element'],'|',r.get('note','')[:200]) for r in json.load(open('migration/clarify/flows/<Flow>/checklist.json'))['rows'] if r.get('finding')=='<Fn>']"`.
- The user's decisions: `migration/clarify/decisions.md` (grep the finding or question id). Follow them.
- Facts about the app: `migration/knowledge/*.md`, `migration/knowledge/static-entities-tst.json` (static entity values),
  `migration/knowledge/flag-values-tst.json`. The shell rules: `migration/app-shell.spec.md`.
- Never read `migration/screens/**`, `migration/contexts/**`, `.auth/**`, `migration/.raw/**`, `.extract/`,
  `migration/clarify/.dump/`. No MCP.

## How to build

- 1:1 with TST: the same widgets, classes, ids, texts, conditions, order and calls. Nothing invented.
- Some items need a decision that no record gives: a library choice, a text that no capture shows, a server behaviour
  that no source shows. Do not guess. Write it in your note under "Decisions needed" with the options, the evidence
  and your recommendation. Build the part that needs no decision. Take the recommended option only when it is the
  plain TST reading. Otherwise leave that part open and say so.
- Follow the project's rules: `app/docs/guides/quality.md`, `app/docs/guides/page-template.md` and
  `app/docs/guides/shell.md`. A page has hooks with `useFlowState`, state files, and `actions.ts` for its JavaScript
  nodes and client actions. Keep the folder rules of `app/docs/architecture/overview.md` (import direction, `@/` alias).
  Use the typed exceptions in `src/legacy/os` and `callAction` for every server call. MSW mocks live in `src/mocks` or
  `pages/<S>/mocks.ts`, with meaningful fictional data (names, places, texts; never "Sample 1").
- Components: one folder per OutSystems block with the block's name (`@origin` tag, `OSBlock`, the instance ids of
  the compiled view). Add a README when the sibling components have one, and a story when they have one. Shared UI
  goes to `components/`, page-only blocks to `pages/<S>/components/`.
- A new library needs a decision (stable versions only: a major at least 9 months old, a version at least 60 days
  old). Write the candidates in "Decisions needed" with versions and dates; do not install one on your own.
- Keep every other screen as it is. A shared change (platform, components/ui, api) must keep the tests of its
  callers green. Do not touch files outside your group's areas; other agents work in parallel. If a fix needs a file of
  another area, write it in your note.
- Tests: Vitest next to the code for each behaviour you build (the TST line is the expected behaviour). Run
  `cd /Users/khaitruong/Projects/connect-new/app && npx vitest run <files or folders>`, `npx eslint <files>`,
  `npx prettier --check <files>`, `npm run typecheck`, `npm run arch`. All green before you hand back.
- Never write a PIN value, password, account e-mail or real member data.

## What you deliver

1. The code, tests, mocks and docs in `app/`.
2. `migration/clarify/builds/<group>.md` (English), one section per item. Each section has: id, TST evidence
   (file:line), files changed (path:line), what was built in a few sentences, the tests you ran. It ends with the
   proposed verdict of the rows (`match`, or open with the reason). A last section "Decisions needed" (options,
   evidence, recommendation) when there are any. Lint: `python3 migration/tools/ste_lint.py <file>`, 0 errors
   (sentences of at most 25 words, paragraphs of at most 6 sentences; use lists).
3. Final message (English, short): items built, items open with the reason, decisions needed, files changed, test
   results.

## Way of work

- Start every shell command with `cd /Users/khaitruong/Projects/connect-new && ` (or `.../app &&` for npm).
- Own scratch folder: `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/40a184a9-9061-4ea3-b0f5-ce76d88a7052/scratchpad/build-<group>/`.
- Budget: at most the number of tool calls in your prompt. Read a TST file in the parts you need, once.
