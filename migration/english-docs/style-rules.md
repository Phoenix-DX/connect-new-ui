# Style rules for specs and docs

Status: **approved by the user** (2026-10-21).
Base: the writing rules of ASD-STE100 (Simplified Technical English). This project does not use the STE dictionary
(user, 2026-10-21). Goal: easy to read for a reviewer who is not a native speaker, and easy for an agent to follow.
`[lint]` = `migration/tools/ste_lint.py` checks the rule. The other rules need a writer and a reviewer.

## 1. What you must not change

1. Do not change code blocks, tables of data, component trees, mermaid diagrams or front matter. `[guard]`
2. Do not change identifiers, file paths, numbers, dates, flag names, IDs (D8, CR-Profile-2, ADR-14, Q3) or
   evidence references (`[HF:150-153]`, `[pack.md]`). `[guard]`
3. Do not change headings that a script reads. In `route-spec.md`: Summary, Patterns used, Unclear points,
   Decisions to confirm. `[guard]`
4. Do not change quoted words of the user. Keep the original text. Put an English translation after a Vietnamese
   quote: "Confirm cả hai" (English: "Confirm both").
5. Do not add a fact. Do not remove a fact. If the old text is not clear, read the evidence. If the evidence does not
   give the answer, write **Unclear:** and the question. Never guess.

`[guard]` = `migration/tools/meaning_guard.py` checks the rule.

## 2. Words

1. Use the terms of `glossary.md`, with their meaning only. One term for one thing.
2. Use simple, common English words. Use the short word: "use", not "utilize"; "start", not "commence".
3. Do not use vague modal verbs: `should`, `could`, `might`, `would`. `[lint]`
   - A rule or requirement: "must" or the imperative.
   - A possibility: "can", with the condition.
4. Do not use hedge words: `probably`, `likely`, `maybe`, `seems`. Use a certainty label (glossary §7). `[lint]`
5. Write the full term the first time in a file, then the short form: "OneSchoolGlobal (OSG)".

## 3. Sentences

1. Maximum 20 words in an instruction, 25 words in a description. Code, identifiers and references count as one
   word each. `[lint]`
2. One instruction in one sentence. One topic in one sentence.
3. Use the active voice. Say who or what does the action: "The screen calls `GetServices`", not
   "`GetServices` is called". `[lint]` (heuristic)
4. Write instructions in the imperative: "Do X." "Do not do Y."
5. Use the articles (a, an, the) and short verbs.
6. Do not join three or more nouns into one name. Example: "the notification count refresh timer" →
   "the timer that refreshes the notification count".
7. Repeat the noun if "it", "this" or "they" can refer to more than one thing.
8. Do not use "-ing" words as nouns or after a noun ("the list showing items" → "the list that shows items").
   `[lint]` (heuristic)

## 4. Conditions and structure

1. Put each condition before its result: "When X, the screen shows Y."
2. If there are two or more conditions, use a list or a table, not one long sentence.
3. One paragraph has one topic and a maximum of 6 sentences. `[lint]`
4. Use a numbered list for steps in a sequence. Use a bulleted list for items without a sequence.
5. Give each important statement its evidence reference, as before.

## 5. Example (from `screens/HomeFeed/route-spec.md` §0)

Before:
> A Share sheet opens from an update item or a feed item.

After:
> The Share sheet opens in two cases, and only when the flag C2ExtendedShare is on:
> 1. The user clicks Share in the menu of an update item.
> 2. The embedded Feed CMS sends a share event for a feed item.
>
> When the flag is off, the Share sheet does not open. The update item shows a "Coming soon" message, and the
> Feed CMS opens the legacy share dialog.

Why: the old sentence does not say what the user does, or what the flag changes. The new text gives the two
triggers and the flag (evidence: `FeedBlock_Updates.mvc.js:1043-1065`, `Feed_Embeded.mvc.js:455-495`).

Lesson from the pilot: the first draft of this example said "the Share option shows only when the flag is on".
The code does not support that: the click handler checks the flag. The review against the evidence found the error.
Every clarification needs this review.
