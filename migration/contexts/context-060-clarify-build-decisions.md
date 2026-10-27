# context-060: the 13 build decisions answered and done (2026-10-28)

## Result
- The user answered PD1 to PD13 of `migration/clarify/builds/pending-decisions.md` ("Answers" table).
- Code done the same day: PD2, PD7 and PD8. Records done: PD9 to PD13.
- Gates: `npm run ci` green (4338 tests, knip 0 new, build OK); parity sweep 64 of 64 clean (0 diffs).
- Artifacts republished: EN EFqfYQzRgJYjq6yQe2N4Yq (v8), VI GRwjpVEAPtSCPaDPXiCCLM (v5).

## Decisions (user, 2026-10-28)
- PD1 to PD8: (a), one at a time, after the context and the options were explained.
- PD9 to PD13: "the rest per Fable", so (a) for each, as the Fable advisor recommended.
- A new question from the PD8 port (endless recursion, mock delimiters) went to a Fable advisor: (a), port 1:1, record
  the defect, fictional mock delimiters.

## Facts learned (evidence)
- Choice identifiers on TST are Yes, No, None (`migration/knowledge/static-entities-tst.json:2771`). The Notes capture
  sends SortByNewest "" on open and "Yes" after Apply (`migration/clarify/review/captures.md:21`).
- The TST bundle and the npm file `dist/adaptivecards.js` of version 2.5.0 have the same md5.
- jsdom has no `innerText`: the tests check the card elements, not the text.
- PlaceholderLib calls itself on every path. A first placeholder with no value recurses until the stack overflows
  (`PlaceholderLib.controller.js:428-479`). This is known bug B19 in `app/docs/known-original-bugs.md`.
- The TST runtime capture of GetMessageInstance has empty delimiters for a message whose sender is anonymized.
- OutSystems JSONDeserialize gives the default record for "" and parses other text leniently (`OutSystems.js`).

## Files changed
- App: `lib/ubtConnect/staticEntities.ts`, `components/widgets/AdaptiveCardViewer/`, `pages/MessageDetail/`
  (`placeholderLib.ts` new), `package.json` and the lock file, `docs/reference/stack.md`,
  `docs/known-original-bugs.md` (B15 to B19), six test and story files (Choice values).
- Migration: `knowledge/runtime-sources.md` (+ `PlaceholderLib.model.js`), `clarify/builds/` (README, manifest,
  pending-decisions), `clarify/decisions.md` (Q2), the Legacy_MyNotificationsFlow checklist (22 rows), INDEX, reports,
  artifacts, `clarify/RESUME.md`.

## Open issues
- The follow-ups in `migration/clarify/builds/README.md` (dropdown merge, `useValidationWidget`, B4 query callers).
- PD3 to PD5 need one TST check on a filtered LDM timeline when a test account has LDM events.
- The survey of 2026-10-13 is stale for at least one block: re-fetch the live TST scripts and compare.
- Photobook move log: one decision is still open.

## Next
- The user picks the next work: the follow-ups, the survey re-fetch, or `migration/clarify/infra-gaps.md` §10.4.
