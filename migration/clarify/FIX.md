# Brief for a fix agent (clarify-screens, minor findings wave of 2026-10-27)

You fix a group of findings of the flow reports in the React app `app/`. The user ordered the fixes of the 56 minor
findings (2 are excluded by decision: App_Common F2, Directory_Updates F2). You change code and tests. You make no
commit (the orchestrator commits).

## Source of truth and evidence

- TST behaviour is the target: the finding row (report §5) names the TST file and lines. Read them yourself with
  `cd /Users/khaitruong/Projects/connect-new && python3 migration/clarify/tools/tst_source.py grep "<regex>" <file>` and
  `show <file> | sed -n 'A,Bp'` (no whole-file dumps). The React location is in the same row.
- The checklist rows of the finding: `python3 -c "import json;[print(r['id'],r['verdict'],r['element'],'|',r.get('note','')[:200]) for r in json.load(open('migration/clarify/flows/<Flow>/checklist.json'))['rows'] if r.get('finding')=='<Fn>']"`.
- The user's decision, when one exists, is in `migration/clarify/decisions.md` (grep the finding id); follow it.
- Never read `migration/screens/**`, `migration/contexts/**`, `.auth/**`, `migration/.raw/**`, `.extract/`,
  `migration/clarify/.dump/`. No MCP.

## How to change the code

- 1:1 with TST: the same condition, the same order, the same text, the same class. Nothing invented. When the TST
  behaviour needs a decision that the report does not record, do not guess. Write the question in your fix note and
  leave that finding open.
- Follow the project's rules: `app/docs/guides/quality.md`, the page template (`app/docs/guides/page-template.md`),
  the folder rules of `app/docs/architecture/overview.md` (import direction). Keep the no-CommonUI-lock rule and the
  typed exceptions in `src/legacy/os`. Use `callAction` for every server call and MSW mocks in `src/mocks` or
  `pages/<S>/mocks.ts`.
- Keep a change small and local. A shared change (router, `platform/`, `components/ui`) must keep every other screen
  as it is: run the tests of the folder you touched.
- Tests: adjust or add Vitest tests next to the code for each behaviour you change (the TST line is the expected
  behaviour). Run `cd /Users/khaitruong/Projects/connect-new/app && npx vitest run <files or folders>` and
  `npx eslint <files>` and `npm run typecheck`. All green before you hand back.
- Do not touch files outside your group's areas (listed in your prompt). Other agents work in parallel in the other
  areas. If a fix needs a file of another area, write it in your note instead of changing it.
- Never write a PIN value, password, account e-mail or real member data.

## What you deliver

1. The code and test changes in `app/`.
2. `migration/clarify/fixes/<group>.md` (English), one section per finding. Each section has: id, TST evidence
   (file:line), files changed (path:line), what changed in one or two sentences, the tests you ran. It ends with the
   proposed verdict of the rows (`match`, or still open with the reason). Lint: `python3 migration/tools/ste_lint.py <file>`,
   0 errors.
3. Final message (English, short): findings fixed, findings left open with the reason, files changed, test results.

## Way of work

- Start every shell command with `cd /Users/khaitruong/Projects/connect-new && ` (or `.../app &&` for npm).
- Own scratch folder: `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/40a184a9-9061-4ea3-b0f5-ce76d88a7052/scratchpad/fix-<group>/`.
- Budget: at most 90 tool calls.
