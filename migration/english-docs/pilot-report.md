# Pilot report: STE rewrite (2026-10-21)

Scope: 3 route specs (Login, HomeFeed, Locality_Details), `migration/app-shell.spec.md` and 10 shared README files.
The new texts are in `pilot/`. The originals did not change (sha256 check against the backup).
Before / After of each file: `pilot-diff/`.

## 1. Results

| File | Lint errors before → after | Guard | Clarifications from evidence | Review fixes |
|---|---|---|---|---|
| Login route spec | 6 → 0 | OK | 0 | 0 |
| HomeFeed route spec | 8 → 0 | OK | 6 (1 corrected) | 4 |
| Locality_Details route spec | 10 → 0 | OK | 13 | 2 |
| app-shell.spec.md | 6 → 0 | OK | 4 | 3 |
| 10 README files | 18 → 0 | OK | 10 | 4 |

- Lint: 0 errors in all 14 files; 26 warnings, checked by hand (OutSystems names, states such as "is locked").
- Guard: all code blocks, tables, headings, IDs, numbers, paths and evidence references are unchanged.
- Each new identifier or reference comes from evidence that the reviewer checked.

## 2. What the review found

Two writer agents rewrote the files. Two other agents compared each changed paragraph with the original and checked
each clarification against its evidence. They fixed 12 problems; the orchestrator fixed 1 more:

- **A wrong clarification (HomeFeed, Share sheet).** The draft said "the Share option shows only when the flag
  C2ExtendedShare is on". The code shows the option and checks the flag on click. When the flag is off, the update
  item shows "Coming soon" and the Feed CMS opens the legacy share dialog. The same error was in the example of
  `style-rules.md` §5; that example is now correct.
- **A dropped fact (Locality_Details §3).** The writer replaced "ids are not compared" with an Unclear question. The
  reviewer restored the fact.
- **Changed scope or subject (6).** For example, a condition that covered two steps covered only one after the
  split; "the provider ports" instead of "the React app ports".
- **Small additions (5).** For example, "from top to bottom" (twice) and a causal "so" that the original does not say.

Conclusion: the review step is necessary. Without it, 13 of about 300 changed paragraphs (4 %) carry a wrong or
changed statement.

## 3. Stale facts in the original specs

The writers and the reviewers found statements that are older than later fixes. The pilot keeps them, because a
style rewrite does not change facts. All are confirmed:

| File | Statement | Newer evidence |
|---|---|---|
| Login | CR-Login-4 and Q7 are "open"; parity default row "1 position (Version span)" | Q7 answered, CR-Login-4 applied, parity 0 |
| HomeFeed | §9 "Layout search, OnSearchClick: nothing" | feedback F1: navigates to `/UBTConnect/Search` |
| HomeFeed | Toast "Sorry, this is not available in the platform you are using" | `notes.md` 2026-10-17: "Sorry, this app is not available …" |
| HomeFeed | §14 rows 11-14 "open" | Q3 answered; accepted exemptions |
| Locality_Details | §16 Q2, Q3, Q4, Q6, Q7 "pending"; §14 rows 2-6 "open" | all answered |
| Locality_Details | §13a `mobileDirectoryLocalityContacts` "undecided" | Q2: default-only, TST value off |
| app-shell.spec.md | §0 "41 build on the board" | 64 build rows |
| app-shell.spec.md | §4 a second click on the active root item raises `BottomBar_Clicked` | `BottomBarMenu.tsx:100-101` scrolls only |
| ShareSheet README | OnBack runs `Action_ResetAndCloseSheetState` | `ShareSheet.tsx:163-167`: the search step only goes back |
| BottomBarMenu README | OnParametersChanged runs all actions | `BottomBarMenu.tsx:83-97`: branches |

## 4. Cost

| Stage | Subagent tokens |
|---|---|
| Phase A: 2 translators + 1 reviewer | 234 k |
| Pilot: 2 writers | 410 k |
| Pilot: 2 reviewers | 240 k |
| **Total** | **884 k** |

Rates from the pilot (writer + reviewer): route specs 55 tokens per word; README files and the shell spec 37 tokens
per word. The orchestrator tokens are not in these numbers.

Estimate for phase B (remaining files):

| Part | Words | Estimate |
|---|---|---|
| 61 route specs | 76.7 k | 3.3–4.2 M |
| 227 README files | 41.1 k | 1.0–1.5 M (1.0 M with a 20 % review sample) |
| Other docs (app/docs, knowledge, patterns, shell, plans) | 27.6 k | 0.8–1.1 M |
| **Total** | | **5.1–6.8 M** |

The earlier estimate was 4–5 M. The pilot shows that the full review costs more than expected.

## 5. Decisions for the user (checkpoint 1)

1. Glossary (`glossary.md`) and style rules (`style-rules.md`): approve or change.
2. Style of the pilot texts: approve or change (see `pilot-diff/`).
3. Stale facts (§3): correct them in the specs, as a separate task, or keep them.
4. Phase B scope. The options are:
   - full (5.1–6.8 M);
   - full, with a review of 20 % of the README files;
   - lean: route specs, shell spec and app/docs (about 4.5 M).
5. Apply the 14 pilot files now. This needs `route.py spec-done` for 3 routes, and a parity sweep for the
   README files.
