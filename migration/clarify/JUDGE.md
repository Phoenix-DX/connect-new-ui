# Brief for a judge agent (clarify-screens, stage 2 of 2)

You give the verdicts for one UI flow from the evidence a reader agent collected, and you write the report. Model:
Opus; Fable for a flow the orchestrator marks as hard. You change no code. You make no commit.

## What you deliver

1. `migration/clarify/flows/<Flow>/report.md` in the format of `migration/clarify/templates/report.md`.
2. `migration/clarify/flows/<Flow>/checklist.json` in the format of `migration/clarify/templates/checklist.schema.json`:
   the rows of `draft.json` with a verdict on every row, plus the rows you add.
3. Your final message (English, short), one line each:
   - counts by verdict
   - the findings F1… with severity
   - the questions Q1…
   - the DEV≠TST notes and the KB disagreements K1…
   - the number of rows where the evidence was not enough
   - what was unclear in the evidence or the brief

## What you read

| Read | Why |
|---|---|
| `migration/clarify/AGENT.md`, sections "How you check" and "Rules" | The verdict rules; they apply to you |
| `migration/clarify/flows/<Flow>/evidence.md` and `draft.json` | The evidence rows |
| `migration/clarify/flows/<Flow>/pack/screens.md`, `blocks.md`, `kb.md` | The model, to read a branch in context; the KB pages and rules to cite |
| `migration/clarify/flows/<Flow>/pack/decisions.md` | The recorded decisions that name the flow's screens (board, app-shell.spec, CRs, ADRs, known bugs, knowledge): read it before you grep those sources |
| The KB UI pages that `kb.md` lists, in full; a rule file when you cite it | Rules `BR-UBTCON-*` |
| `migration/app-shell.spec.md`, `migration/change-requests/CR-*.md`, `app/docs/reference/stack.md` (ADRs), `app/docs/known-original-bugs.md`, `migration/board.md`, `migration/knowledge/*.md` | The recorded decisions a `differs` row must cite |
| A React file or a TST file, only where a row's evidence is not enough to decide | At most 20 such reads |

Closed to you: `migration/screens/**`, `migration/contexts/**`, `.auth/**`, `migration/.raw/**`, any `.extract/` folder of
the KB, `migration/clarify/.dump/`, the MCP (the orchestrator's review pass calls it).

## How you judge

- One verdict per row, from the table in `AGENT.md`. The evidence column of the reader is the proof. When it is not
  enough, read the file yourself (at most 20 reads). When that does not settle it, the verdict is `unclear` with a
  question.
- `not found` in the evidence is not yet `missing`. Check that the reader searched the right place: the hook, the
  container, `platform/`, `lib/`. One targeted grep is allowed per such row. Then write `missing`, or the location.
- A `differs` row cites a recorded decision outside `migration/screens/`. A code comment is not a decision.
- `TST = absent` for an element of the pack: the element is DEV only. The row is `match` when React follows TST, and
  §6.1 gets one line (DEV, TST, what React follows).
- A branch that depends on a flag: `n/a` when the flag has the other value on TST (`migration/knowledge/flag-values-tst.json`)
  and the branch is not built; a finding when the branch is built wrongly.
- A branch that can run only in the native app (Cordova plugin, app links): `n/a` with the note "native only" and the
  knowledge page that says so (`migration/knowledge/pwa-file-plugins.md`, `app-shell.spec.md` U14).
- Runtime defaults of the OutSystems client are TST behaviour. Examples: a failed data fetch calls `handleError`; the
  document title; the built-in validation messages. Compare React with them. Cite `OutSystems.js` or
  `OutSystemsReactView.js` (in `migration/runtime-sources/`) by line.

### The n/a verdict

`n/a` covers three cases, each with its note. A board or flag decision: "skip", "flag off on TST". An element that
  is dead in the model: "dead in the model". An element that another flow owns: "owned by flow X, see its report",
  for example a shared block's internals or an action of a block-only flow.

### Other rules

- A KB rule that disagrees with both DEV and TST is a `K<n>` line of §6.2, not a finding.
- Severity: blocker (the user cannot complete the flow), major (a visible behaviour, rule or data differs), minor
  (text, class, edge case), info (no user impact).
- Questions `Q<n>`: evidence, options, recommendation. Do not answer them.
- Run `python3 migration/tools/ste_lint.py migration/clarify/flows/<Flow>/report.md`; 0 errors.
- Never write a PIN value, password, account e-mail or real member data.

## Way of work

- Start every shell command with `cd /Users/khaitruong/Projects/connect-new && `. Use absolute paths.
- Read the evidence and the pack in one command each. Read the KB pages in one command.
- Write `report.md` into `migration/clarify/flows/<Flow>/` with one `cat > file <<'EOF'` command (the Write tool
  refuses `.md` files of a subagent). Build `checklist.json` from `draft.json` with one Python script; the counts of
  §8 must equal the file.
- Target: at most 50 tool calls.
