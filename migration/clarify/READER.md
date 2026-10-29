# Brief for a reader agent (clarify-screens, stage 1 of 2)

You collect the evidence for one UI flow. You read; you do not judge. A judge agent (stage 2) gives the verdicts from
what you collect.

Model: Sonnet. You change no code. You make no commit.

## What you deliver

1. `migration/clarify/flows/<Flow>/draft.json`: the rows as JSON, format of
   `migration/clarify/templates/checklist.schema.json`, with `verdict` set to `""` (empty) on every row. This is the
   only row file: do not write the same rows again as Markdown.
2. `migration/clarify/flows/<Flow>/notes.md` (short, at most 80 lines): facts that are not rows:
   - the TST presence check: pack elements absent on TST, TST elements absent in the pack, with file and line
   - the pack gaps you saw: cut arguments, unread stretches
   - the mock files per screen
   - the board line of a screen that is not built
3. Your final message (English, short), four lines:
   - row counts per screen
   - the number of items not found in React
   - the TST presence check: pack elements absent on TST, and TST elements absent in the pack
   - what was unclear in the pack

## What you read

| Read | Why |
|---|---|
| `migration/clarify/flows/<Flow>/pack/*.md` (one `cat` of all of them) | The checklist: the DEV model of the flow |
| `app.md` of the pack → the React files it names; `cat -n` of a screen's page, hooks and containers in one command | Where each item lives in React |
| `python3 migration/clarify/tools/tst_source.py show <Screen or Block>` for each screen and own block | TST presence check and input constraints (MaxLength, Enabled, Mandatory) that the DEV dump omits |
| `references.md` → the TST file of a referenced block when the screen's behaviour depends on it | Its compiled code |
| `grep -n "^| <Screen> " migration/board.md` | The board row of a screen that is not built |

Closed to you: `migration/screens/**`, `migration/contexts/**`, `.auth/**`, `migration/.raw/**`, any `.extract/` folder of
the KB, `migration/clarify/.dump/`, the MCP. Do not read the KB (the judge does).

## Row format

Areas: identity, data, ui, actions, validations, logic, strings. One row per item that carries behaviour (see
`AGENT.md`, "How you check", for the item list). JSON fields of a row: `id` = `<Flow>-<nnn>`, `screen`, `area`,
`element`, `os`, `react`, `evidence`, `tst`, `verdict`, `note`, `verified`.

- `os`: one line from the pack: the argument, the condition, the node sequence of an action, the message.
- `react`: `app/src/…:line-line` and a quote of at most 4 lines. When you find nothing, write `not found` and the
  grep terms you tried (`searched: term1, term2`). Never write what React "probably" does.
- `evidence`: the `file:line` of the quote, the TST file, or `-`.
- `tst`: `present` when the element is in the TST compiled file, `absent` when it is not, `-` when not checked. For an
  input: the constraints from TST (`MaxLength=50, Enabled=not isSubmiting`).
- `note`: a fact that the judge needs. Examples: a flag the branch depends on; a `[DISABLED]` or `[DEAD BRANCH]`
  mark; a difference between the pack and TST; a mock file.
- `verdict` is `""`. `verified` is `"pack"`.

## Rules

- Copy, do not interpret. The quote is the evidence; the judge decides.
- Every screen action gets one row per branch, message and navigation that can differ. An If with two branches gives
  at least 3 rows: the condition, the true branch, the false branch.
- Every input gets one row for its constraints (mandatory, max length, type, enabled) and one per OnChange handler.
- Every server or service action of `data.md` gets a row with the React repository function and the mock handler
  (`app/src/mocks/` or `app/src/pages/<Screen>/mocks.ts`).
- Every client variable of `data.md` gets a row with the React read or write location.
- Strings: `grep -rn` the exact text of each string of `strings.md`. One row per string that is not in the React
  files; one row "N strings found" for the rest.
- A screen that is not built: one row with the board decision (`grep` result), no other rows.
- Never write a PIN value, password, account e-mail or real member data.

## Way of work

- Start every shell command with `cd /Users/khaitruong/Projects/connect-new && `. Use absolute paths.
- Do not dump a whole TST file into your scratch folder and read it back. Use `tst_source.py grep "<regex>" <file>`
  to find the lines, then `tst_source.py show <file> | sed -n 'A,Bp'` for the range you need.
- Use your own scratch folder: `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/<session>/scratchpad/<Flow>/`
  (other agents run in parallel; never write outside your folder).
- Write `draft.json` and `notes.md` into `migration/clarify/flows/<Flow>/` with one command each (`cat > file
  <<'EOF'`, or a generator script in your scratch folder). The Write tool refuses `.md` files of a subagent.
- After the write, check the file with `python3 -c "import json;print(len(json.load(open('…'))['rows']))"` and
  `wc -l` only. Do not print the file back.
- Target: at most 60 tool calls.
