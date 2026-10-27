# Brief for a flow agent (clarify-screens)

You verify one UI flow of the OutSystems module `UBTConnect` against the React app in `app/`. You write one report and
one checklist. You change no code. You make no commit.

## What you deliver

1. `migration/clarify/flows/<Flow>/report.md` in the format of `migration/clarify/templates/report.md`.
2. `migration/clarify/flows/<Flow>/checklist.json` in the format of `migration/clarify/templates/checklist.schema.json`:
   one row per checked item, the same rows that the tables of the report show.
3. Your final message: counts by verdict, the findings F1…, the questions for the user, and the DEV≠TST notes. Not the
   report text.

## What you read

| Read | Why |
|---|---|
| `migration/clarify/flows/<Flow>/pack/screens.md`, `blocks.md`, `actions.md`, `data.md`, `references.md`, `strings.md` | The checklist: the DEV model of the flow, from the MCP dump |
| `migration/clarify/flows/<Flow>/pack/app.md` | Where the React code of each screen is, and where the app names the actions |
| `migration/clarify/flows/<Flow>/pack/kb.md` | The KB pages and rules of the flow; read the UI pages it lists in full |
| The React files that `app.md` names, and the files they import when the behaviour lives there | The thing under test |
| `migration/clarify/flows/_shared/pack/blocks.md` and `actions.md` | A shared block or action, when a screen of your flow depends on its behaviour (read only that section) |
| `migration/clarify/flows/<OtherFlow>/pack/blocks.md` | A block of another flow that your screens use (read only that section) |
| `migration/board.md` | The decision and reason of a screen that is not built (`grep -n "^| <Screen> " migration/board.md`) |
| `python3 migration/clarify/tools/tst_source.py show <Screen>` | The TST compiled code, when the DEV model and the React app differ, or a DEV fact needs a check |
| `app/docs/architecture/overview.md`, `app/src/platform/README.md`, `app/src/api/README.md` | How the React app is built (read once, when needed) |
| `migration/app-shell.spec.md` (decisions U1…), `migration/change-requests/CR-*.md`, `app/docs/reference/stack.md` (ADRs), `app/docs/known-original-bugs.md`, `migration/knowledge/*.md` | The recorded decisions and facts that a `differs` row must cite |

Closed to you:
- `migration/screens/**` (the route specs, questions and notes of the migration). This work is independent of them,
  so that it finds what they missed.
- `migration/contexts/**`, `.auth/**`, `migration/.raw/**`, any `.extract/` folder of the KB.
- The MCP dump `migration/clarify/.dump/`: the pack is its readable form.
- The MCP itself: the review pass calls it, not you.

## How you check

Check every screen of the flow. Check every block of the flow that a built screen uses. Check the areas of the
template: identity, data, UI tree, screen actions, validations, business logic, strings. Write one row per item that
carries behaviour. Items are:
- a block instance with its arguments; an If condition; a list and its source; an input and its validations
- a screen action, and each branch, message or navigation inside it that can differ
- a data action with its fetch moment; a client action called; a client variable read or written
- a rule `BR-UBTCON-*` that the KB ties to the element

Give each row one verdict:

| Verdict | Use it when |
|---|---|
| `match` | React does the same thing. Cite `file:line`. |
| `partial` | Present, but a branch, a message, a parameter or an order differs. Name the difference. |
| `missing` | Not in React. |
| `differs` | React does something else on purpose: an ADR (`app/docs/architecture/`), a change request, a known original bug (`app/docs/known-original-bugs.md`) or a user decision on the board names it. Cite it. |
| `mock-only` | The UI call is there, but the server side is a mock (`app/src/mocks/`). Name the server or service action that production needs. Use it for the server side only; the React call itself gets its own row. |
| `n/a` | Not applicable by decision: the screen is `skip` on the board, or the flag is off on TST (`migration/knowledge/flag-values-tst.json`). Cite the decision. |
| `unclear` | No evidence either way. Write the question for the user in the row. |

Rules:

- Never guess. A row without evidence is `unclear`, with a question. Do not infer a behaviour from a name.
- A code comment that cites a past answer ("Q1 answered by the user", "decision B") is not evidence. A `differs`
  row cites a source outside `migration/screens/`. Valid sources: an ADR, a change request, `app-shell.spec.md`, the
  board, `known-original-bugs.md`. Without one, the row is `unclear`, and the user decides again.
- TST is the source of truth. When the DEV model (pack) and the React app differ, check the TST compiled code with
  `tst_source.py` before you write `missing` or `differs`. If TST agrees with React, the row is `match` and §6 of the
  report gets the DEV≠TST line.
- A dead branch in the model (`[DISABLED]`, `[DEAD BRANCH]`, "unreachable nodes") is one row with verdict `n/a` and
  the note "dead in the model"; React must not implement it.
- The logic of a referenced module (a block of `UBTConnectLibrary`, `UBT_AppManager`, `Connect2_*_MUI`, …) is not in
  the pack. `references.md` gives its signature and, when TST has it, its compiled file; `kb.md` names the KB pages
  of that module.
  - When `references.md` names a TST file, check the React app against that code (`tst_source.py show <file>`).
  - Else, when a KB page exists, check the React app against it and cite the rule id.
  - Else the row is `unclear`. Its question: "behaviour of <Block> in module <Module>: not in the dump, no TST
    file, no KB page". Do not write "not checked here" for a block your flow depends on.
- Mock data is not a finding. Meaningful mock data is a project rule; only a wrong shape, a missing field or a missing
  handler is a finding.
- Write the report in English, in the style of `migration/english-docs/style-rules.md`: short sentences, active voice,
  no hedge words, identifiers unchanged. Vietnamese is for the chat only.
- Never write a password, a PIN value, an account e-mail or any real member data into the report. The demo PIN of the
  mock is not a secret, but do not repeat it either.
- Findings get an id `F<n>` and a severity. A finding is one row of §5 and one or more rows of the checklist that
  carry `finding: "F<n>"`.
- Questions get an id `Q<n>`, with the evidence, the options and your recommendation. Do not answer a question
  yourself.
- Count the rows at the end (§8) and keep the counts equal to `checklist.json`.
- Run `python3 migration/tools/ste_lint.py migration/clarify/flows/<Flow>/report.md` and fix the errors (0 errors;
  warnings are for the reviewer).
- A KB page that disagrees with both DEV and TST is not a finding of the React app. List it in §6.2 "KB pages vs TST"
  with the id `K<n>`, the KB text, the TST evidence and the file.

## Budget and way of work

Read what the pack names, not the whole app. A screen of average size takes about 60 to 120 rows. Stop at the pack's
boundary. A shared action that 29 flows use gets one row ("shared, checked in the report of App_Common"). Check its
branches only when your flow depends on them.

The pilot (App_PIN) took 109 tool calls and 303k tokens. Keep to these rules:
- Start every shell command with `cd /Users/khaitruong/Projects/connect-new && `. Use absolute paths. The shell
  working directory resets between commands.
- Read the brief, the template and the schema once. Read the pack files in one command (`cat` of all pack files).
- Read the React files of one screen in one command: `cat -n` of the page, its hooks and its containers.
- Write `report.md` and `checklist.json` directly into `migration/clarify/flows/<Flow>/`, each with one
  `cat > file <<'EOF'` command (the Write tool refuses `.md` files of a subagent). Do not build them from pieces.
- Target: at most 70 tool calls and about 150k to 200k tokens for a flow of the size of App_PIN.
