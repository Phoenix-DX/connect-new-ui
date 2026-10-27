# How to continue the clarify-screens work in a new session

Status on 2026-10-27, end of the second session:
- All 45 units are judged (`INDEX.md`: 5332 rows, unclear 11). The follow-up pass is done (`review/followup.md`).
- P2 is written: `architecture-current.md` (the front end today) and `infra-gaps.md` (what production needs: 27
  capabilities, the backend contract, the set-up order).
- The user answered the G1–G3 questions (`decisions.md`).
- Open: the 12 questions of G4 and the shared units; the 4 candidate findings of `review/followup.md`; 4 read-only
  captures on TST and one Orbit block comparison pass (followup.md §3); P3 hand-over.

## Start

1. Open the project; CLAUDE.md makes the assistant run `python3 $SK/route.py plan` and read `migration/contexts/INDEX.md`
   (the "Now" block names this work and `context-055`).
2. Say: "Tiếp tục clarify-screens theo `migration/clarify/RESUME.md`" (English: "Continue clarify-screens per RESUME.md").
3. The assistant reads, in this order: `PLAN.md` (§5 phases, §8 decisions), `INDEX.md` (matrix, findings, questions
   with answers), `decisions.md`, `review/G1-review.md` … `review/G4-review.md`, the briefs `READER.md` and `JUDGE.md`.
   It does not read `migration/screens/**` for this work.

## Next steps, in order

1. The user answers the 12 open questions of G4 and the shared units. List them with
   `python3 migration/clarify/tools/collect.py --questions G4` and `--questions X`. Record the answers with
   `python3 migration/clarify/tools/answers.py accept-recommendations --groups G4,X --date YYYY-MM-DD`, or one by one
   with `set <Flow> <Qn> "<answer>"`. Then run `python3 migration/clarify/tools/collect.py`.
2. The user accepts or rejects the 4 candidate findings of `review/followup.md`: validators trim, EventBooklet
   IsGuestView default, app-start failure toast, Policies device id store. Give the accepted ones F ids in the reports.
3. The 4 read-only captures on TST and the Orbit block comparison pass (`review/followup.md` §3), when the user allows
   a capture session. They settle the last 11 `unclear` rows.
4. Fold the answers of 1 and 2 into `infra-gaps.md` §10 (the "build now" list) and `decisions.md`.
5. P3 hand-over: context note, ledger report (`python3 $SK/ledger.py report`), commit on `clarify-screens`. No push.
   Then the work that follows the clarify reports is the user's call (fixes of the blockers and majors, the BFF).

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
