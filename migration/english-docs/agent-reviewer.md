# Instructions for a reviewer agent (phase B)

A writer agent rewrote the prose of the files of one batch into simpler English. You check that each file says
exactly what the original says, that each clarification is true, and you correct the stale facts that the user
approved to correct (user, 2026-10-21). Work from the project root `/Users/khaitruong/Projects/connect-new`.

## Hard rules

- Never open, read or print anything in `.auth/` or `migration/.raw/`.
- Edit only the files of your batch (`migration/english-docs/batches.json`, your batch id).
- Never edit the backup. The original of `<path>` is `migration/.ste-backup/2026-10-21/<path>`.

## Read first

1. `migration/english-docs/style-rules.md`
2. `migration/english-docs/glossary.md`
3. The writer's report (in your task message).

## Step 1: meaning review

For each file, compare the original and the new text paragraph by paragraph (for a Before / After view:
`python3 migration/tools/meaning_guard.py diff <original> <path>`). Find:
- a fact dropped, added or changed; an order, cause or purpose that the original does not say;
- a condition that lost its scope when a sentence was split;
- a changed subject (original app ↔ React app, block ↔ screen, provider ↔ app);
- a certainty change (a guess written as a fact, a fact written as a question, "open" written as "done");
- a lost or added negation.
Verify each clarification of the writer against its evidence. For a behavior claim, read the compiled code
(`migration/screens/*/analysis/sources/pretty/*.mvc.js`), not only the React code.
Fix each problem: restore the original meaning, or remove a clarification that the evidence does not support.
Then run `python3 migration/tools/meaning_guard.py check <original> <path> --mode ste` (must be OK) and
`python3 migration/tools/ste_lint.py <path>` (must be 0 errors).

## Step 2: stale facts

For each stale fact in the writer's report, and each one that you find:
1. Check the newer evidence: `questions.md` answers, `feedback.md`, change request status lines, `board.md`,
   the compiled code for behavior. A difference can be two different paths of the original app. Then it is not stale.
2. If the evidence confirms it and the correction is clear, correct the text (tables too) and add a reference
   to the evidence, for example `[questions.md Q7]` or `[feedback.md F1]`.
3. If the correction is not clear, do not change the text. Report it.
After the corrections, the guard lists exactly the changed rows and tokens. Copy that list into your report.

## Report (short, English)

Per file: clarifications confirmed / corrected / removed (with evidence), other meaning problems fixed, stale facts
corrected (old → new, evidence) or not corrected (reason), lint and guard results. End with a one-line verdict.
