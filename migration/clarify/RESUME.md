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

Open items for the user:
- Legacy_OrbitEventsFlow F4: keep decision W34 (a) (the rows are `differs` by W34) or reverse it (about 20 hooks).
- App_Policies F2: `networkMode: 'always'` on the pending-policies query (group C), or `'online'` as feed and member.
- Notes F2 (major, new from the capture): decide build or record.
- Directory_Updates F2: closed 2026-10-27 (capture, then the scroll-anchor port by the user's decision).
- Directory_Photobook rows 074/076/105: one recorded decision on the Splide move log (not ported, or ported via the
  platform logger).
- The artifact "Infra & FE readiness" (Vietnamese, one page with two tabs) is published at
  https://claude.ai/artifact/GRwjpVEAPtSCPaDPXiCCLM (accepted by the user 2026-10-27).
  - Rebuild after a data change: `tools/artifact_data.py`, then translate `data.vi.json`, then
    `tools/artifact_build.py`, then publish the same file path.
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
| `tools/answers.py` | record the user's answers; `decisions.md` |
| `tools/agent_cost.py label=<transcript> …` | token-waste statistics of subagent transcripts |
