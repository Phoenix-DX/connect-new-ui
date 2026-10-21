# Instructions for a writer agent (phase B)

You rewrite the prose of English files into simpler, clearer English (ASD-STE100 writing rules, no STE dictionary).
Readers: a manager who is not a native speaker, and AI agents that build from these files.
Work from the project root `/Users/khaitruong/Projects/connect-new`.

## Hard rules

- Never open, read or print anything in `.auth/` or `migration/.raw/`.
- Edit only the files of your batch (`migration/english-docs/batches.json`, your batch id). Edit them in place.
- Never edit the backup `migration/.ste-backup/2026-10-21/`. Use it as the original: `<backup>/<path>`.
- Write nothing else in the project. Scratch scripts go to `/private/tmp/` only.

## Read first

1. `migration/english-docs/style-rules.md`
2. `migration/english-docs/glossary.md`

## How to rewrite

1. Change only prose: paragraphs and list items. Keep exactly: headings, tables (every row byte for byte),
   code blocks, component trees, mermaid diagrams, inline code, identifiers, IDs, numbers, file paths, links,
   evidence references such as `[HF:150-153]` or `[pack.md]`.
2. Keep every fact. Do not add a fact that is not in the original or in its evidence. Do not drop a fact.
3. If a sentence does not say who does what and when, look in the evidence. Allowed evidence:
   - route spec of screen S: `migration/screens/S/analysis/` (`digest.md`, `calls.md`, `sources/pretty/*.mvc.js`,
     `dom/*.html`), the same spec's tables, `migration/screens/S/feedback.md`, `notes.md`, `questions.md`,
     `migration/change-requests/CR-S-*.md`, `migration/knowledge/*.md`, `app/src/screens/S/`;
   - README: the component files in the same folder, and `migration/blocks/<Module>.<Flow>.<Block>.md`;
   - other docs: the files that the doc names.
   If you find the answer, write it and add a reference in the format the file already uses. If you do not find it,
   keep the original wording. Write `Unclear: <question>.` only when the original itself is not clear.
4. Mistakes that the pilot review found. Do not repeat them:
   - Do not add an order ("from top to bottom"), a cause ("so", "because") or a purpose that the original does not say.
   - Do not change the subject: "the original app" and "the React app" are different; "the provider" is not "the app".
   - Never replace a stated fact with an `Unclear:` question.
   - When you split a sentence, keep each condition on every part that it covers.
   - Keep the certainty: "pending", "proposed", "open", "assumed" stay as they are.
   - Check a flag claim in the code: "shows only when the flag is on" is different from "the click checks the flag".
   - Do not add an actor that the original does not name ("the team", "the developer"). Make the object the subject.
   - Keep the nesting of a structure. A flat list of siblings is wrong when the compiled view nests them.
   - Keep modal meaning: "would" (hypothetical) is not "can" (possible); a popup window is not a tab.
5. Stale facts: if the file says something that newer evidence contradicts (a question marked open that is answered,
   a count that changed, behavior that feedback or a change request changed), do not change it. Report it.
   In a route spec, check each "open" or "pending" item against `questions.md`, `feedback.md` and the status line of
   each change request. This is the most common stale fact.
6. Conditions with two or more parts become a list. A paragraph has a maximum of 6 sentences. A sentence has a
   maximum of 25 words (20 for an instruction). Instructions to a developer or an agent are imperative.
7. Quoted UI text and quoted words of the user stay as written. The linter skips text in double quotes.

## Checks for each file (fix until clean)

1. `python3 migration/tools/meaning_guard.py check migration/.ste-backup/2026-10-21/<path> <path> --mode ste` → OK.
   Each "new" item must come from evidence that you looked up. List it in the report with its source.
2. `python3 migration/tools/ste_lint.py <path>` → 0 errors. Check the warnings by hand and fix the real ones.

## Report (short, English)

Per file: lint errors before → after, guard result, each clarification (sentence + evidence), each `Unclear:` item,
each stale fact (statement + newer evidence with file and line). End with totals.
