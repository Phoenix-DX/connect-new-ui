# How to continue the clarify-screens work in a new session

Status on 2026-10-27, end of the fourth session: the clarify work is complete and the minor findings are fixed.
- Minor findings wave (2026-10-27): 51 of 56 fixed in `app/`, 4 withdrawn, 1 kept by decision (W34), 0 open
  (`fixes/README.md`, `fixes/manifest.json`, one note per group). Report §5 has a "Status" column; the checklist rows
  of a fixed finding are `match` with `fixed: 2026-10-27`. Tool: `tools/apply_fixes.py <manifest>`.
- Gates after the wave: typecheck, lint (0 errors), arch, 4060 tests, parity sweep (`fixes/README.md`).
- All 45 units are judged (`INDEX.md`: 5412 rows, unclear 5).
- The follow-up pass, the Orbit block pass and 4 read-only TST captures are done (`review/followup.md`,
  `review/orbit-blocks.md`, `review/captures.md`).
- P2 is written (`architecture-current.md`, `infra-gaps.md`, `dev-ahead.md`).
- The user answered every question (`decisions.md`, 59 rows).

Earlier status (third session): the clarify work was complete before the fix wave.

- Build wave (2026-10-27/28, `builds/README.md`): 3 blockers, 27 majors and 30 "build now" items built by 10 Opus
  agents; gates green.
- Decisions of the build wave (2026-10-28): the user answered all 13 (`builds/pending-decisions.md`, "Answers"; PD9 to
  PD13 per the Fable advice). Done the same day: PD2 (Choice constants), PD7 (`adaptivecards@2.5.0`), PD8
  (PlaceholderLib port, known bug B19), PD9 (rows recorded), PD10 to PD12 (known bugs B15 to B18), PD13 (Q2).
  Next: the follow-ups of `builds/README.md`.
- Survey drift check (2026-10-28, `review/survey-drift-2026-10-28.md`): TST was published again on 2026-10-27; 79
  files changed logic, 2 React routes copy removed screens. Decided (user, 2026-10-28): (c).
  - The source switch is done: the live code is the source of truth (`capture/survey-UBTConnect.json`, not
    committed). The survey of 2026-10-13 is `capture/survey-UBTConnect-2026-10-13.json`.
  - 1885 checklist rows are `stale`, 422 of them strong (`tools/mark_stale.py`, `INDEX.md` §1 "Stale (strong)"). A
    build or a new judge of a route reads the live code and its stale rows first.
  - Open for the user, later: the 5 new TST screens and the routes MyBookmarks and BookmarksByGroup. With them (user,
    2026-10-28, item 8 N1): TST added `GetMilestoneScanFF` and the milestone branch to OrbitAdminLanding again.
  - Open for the user, later: the bookmarkCategory constant ("OneSchool Global" on TST).
- The user's work list of 2026-10-28: one item at a time, and ask the user after each item.
  1. Survey drift check: done; decision (c) done (2026-10-28).
  2. Error handling of the data calls (B4 follow-up): done 2026-10-28 (`review/item2-fetch-errors.md`, §5 Status;
     design `review/item2-solution.md`, approved by the user). Open for later: the other W23 flows (§8.2 b) and a
     capture of `_error.html`.
  3. Merge the two custom dropdowns and add `useValidationWidget`: done 2026-10-28 (`review/item3-dropdowns.md` §4;
     design `review/item3-solution.md`, approved by the user; note `builds/item3-dropdowns.md`). Open: check D2 on
     TST when the test account has a host survey.
  4. SanitizedHtml `<nobr>` and the double `?` of `generateScreenURL`: done 2026-10-28 (`review/item4-findings.md`).
     Both are TST behaviours that React ports 1:1; the user keeps them (known original bugs B20, B21).
  5. HostSurvey Tooltip and MultiResolutionImageLoader: done 2026-10-28 (`review/item5-tooltip-loader.md` §4; design
     `review/item5-solution.md`, approved by the user; note `builds/item5-tooltip-loader.md`). Shared
     `components/ui/Tooltip` and `components/ui/MultiResolutionImageLoader`; ci green (4437 tests), parity 64 of 64
     clean. Not checked on TST (no Orbit event on the test account).
  6. The inputs of DataActionGetShare: done 2026-10-28 (`review/item6-getshare-inputs.md` §4; design
     `review/item6-solution.md`, approved by the user; note `builds/item6-getshare-inputs.md`). The call sends the
     four block variables, as TST. No visible change; ci green (4441 tests), parity 64 of 64 clean.
  7. The user's decisions: Photobook move log, `infra-gaps.md` §10.4 and §11.
     - 7.1 Photobook move log: decided 2026-10-28, (a) not ported (`review/item7-photobook-move-log.md`); rows 074,
       076, 105 are `differs`; no `unclear` row is left.
     - 7.2 `infra-gaps.md` §10.4: nothing open (30 of 30 "build now" items closed; checks done); §10.5 closed.
     - 7.3 `infra-gaps.md` §11: the set-up order is approved (user, 2026-10-28); no production work until ordered.
     The work list of 2026-10-28 is complete.
  8. The W23 flows and `_error.html` (user, 2026-10-28): evidence `review/item8-w23-errorpage.md` (R1-R6, P1-P7, 55
     hooks, N1-N6); design `review/item8-solution.md` approved (flow scope, static error page, open points as
     recommended, N2-N4 fixed in the waves). Build steps S0a, S0b, then groups B, A, C, D, then cleanup; notes in
     `builds/item8-*.md`.
     - Later (user, 2026-10-28): a separate item for the render and route errors (check the TST global error handler
       first, Q3 c); the production precache of `_error.html` waits for the production phase (Q4 a).

Open items for the user:
- The 13 decisions of the build wave: answered 2026-10-28.
- Legacy_OrbitEventsFlow F4 and App_Policies F2: answered (a) on 2026-10-27 (keep W34; keep networkMode 'always').
- Notes F2: built in the build wave; the Choice values follow TST since PD2 (2026-10-28).
- Directory_Updates F2: closed 2026-10-27 (capture, then the scroll-anchor port by the user's decision).
- Directory_Photobook rows 074/076/105: one recorded decision on the Splide move log (not ported, or ported via the
  platform logger).
- The artifact "Infra & FE readiness" (Vietnamese, one page with two tabs) is published at
  https://claude.ai/artifact/GRwjpVEAPtSCPaDPXiCCLM (accepted by the user 2026-10-27).
  - Rebuild after a data change: `tools/artifact_data.py`, then `tools/artifact_vi_sync.py`, then
    `tools/artifact_build.py`, then publish the same file path. The sync copies the matrix, the unclear rows, the
    finding status and the changed decisions. A new finding text still needs a translation. Updated with the fix
    status on 2026-10-27.
  - English companion "UBTConnect React Gaps": https://claude.ai/artifact/EFqfYQzRgJYjq6yQe2N4Yq (`template-gaps.html` +
    `data.en.json` → `react-gaps.en.html`); published 2026-10-27 without an accept step (user's instruction).
- After that, the user decides the next work: the 30 build items of `infra-gaps.md` §10.4 and the infra set-up
  order of §11.

## Start

1. Open the project; CLAUDE.md makes the assistant run `python3 $SK/route.py plan` and read `migration/contexts/INDEX.md`
   (the "Now" block names this work and `context-055`).
2. Say: "Tiếp tục clarify-screens theo `migration/clarify/RESUME.md`" (English: "Continue clarify-screens per RESUME.md").
3. The assistant reads, in this order: `PLAN.md` (§5 phases, §8 decisions), `INDEX.md` (matrix, findings, questions
   with answers), `decisions.md`, `review/G1-review.md` … `review/G4-review.md`, the briefs `READER.md` and `JUDGE.md`.
   It does not read `migration/screens/**` for this work.

## Next steps, in order

1. Record the user's decisions on the open items above with `python3 migration/clarify/tools/answers.py set <Flow>
   <Qn|Cn> "<answer>" --date YYYY-MM-DD`, then `python3 migration/clarify/tools/collect.py` and
   `python3 migration/clarify/tools/aggregate.py`.
2. Keep the artifacts in step with the documents. After a change, rebuild and republish to the same URL (see above).
   The user allows a publish without an accept step (2026-10-27).
3. When the user orders a build: one route or block at a time, from the TST compiled code (`tools/tst_source.py`).
   Each build goes through the parity gate of the migration. The commit message names the report row ids.

## Way of work that the user decided

- Evidence (user, 2026-10-28): the MCP (DEV) first, then the compiled TST code; cite both. TST wins on a difference,
  and the difference is written down. Runtime facts that the model cannot show come from TST and from read-only
  probes (`tools/probe_fetch_errors.cjs`), when the user allows them.
- A mismatch React ≠ TST (user, 2026-10-28): a Fable agent (React architect) proposes a design. The design keeps the
  behaviour and the logic, not the OutSystems structure, and gives options and reasons. The user approves it. Then the
  build follows: tests first, gates, records, a local commit.

- Models: Sonnet reads and writes evidence (`READER.md`); Opus judges (`JUDGE.md`); Fable judges the hard flows
  (wrappers of referenced modules, many unclear rows) and the orchestrator's review pass.
- At most 10 agents in parallel. After each wave: `agent_cost.py` on the transcripts, a waste report to the user, and
  the user decides.
- Every verdict and decision rests on the source of truth: TST compiled code first, then the DEV model, the KB with
  a rule id, React `file:line`. No assumption. Otherwise `unclear` and a question.
- Questions are answered by the user per wave, by id; "theo đề xuất" = accept the recommendation of each id.

## Tools

| Tool | Use |
|---|---|
| `tools/flow_pack.py [--block-flows] [Flow …]` | packs from the MCP dump (`.dump/espace.json`; re-dump with the MCP `getSerializedObject` + `migration/tools/mcp/unwrap.py` when DEV changes) |
| `tools/app_index.py`, `tools/kb_index.py`, `tools/decisions_index.py` | the React, KB and decision indexes of a pack |
| `tools/tst_source.py list|show|grep` | TST compiled code (survey + `migration/runtime-sources/` + `migration/shell/sources/`) |
| `tools/collect.py [--questions G<n>]` | `INDEX.md`; the questions of a group |
| `tools/probe_dropdown_d2.cjs` | read-only probe on TST: a closed HostSurvey dropdown with a message (D2 of item 3); needs an Orbit event with a host survey |
| `tools/probe_fetch_errors.cjs [--late]` | read-only probe on TST: aborts or holds one read, records the message (the user allows each run) |
| `tools/mark_stale.py [--mark …] [--dry-run]` | mark the checklist rows that rest on TST code changed by a later publish (`stale`, strong or weak); `review/survey-drift/impact.txt` |
| `tools/answers.py` | record the user's answers; `decisions.md` |
| `tools/agent_cost.py label=<transcript> …` | token-waste statistics of subagent transcripts |
