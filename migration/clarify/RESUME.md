# How to continue the clarify-screens work in a new session

Status on 2026-10-27 (end of the session): waves G1–G4 and the shared units are judged (see `INDEX.md`); the user
answered the G1–G3 questions by accepting the recommendations (`decisions.md`). Open: G4 and shared questions, G5 (4
not-built flows, short reports), the follow-up pass, P2 synthesis (architecture and infra gaps).

## Start

1. Open the project; CLAUDE.md makes the assistant run `python3 $SK/route.py plan` and read `migration/contexts/INDEX.md`
   (the "Now" block names this work and `context-055`).
2. Say: "Tiếp tục clarify-screens theo `migration/clarify/RESUME.md`" (English: "Continue clarify-screens per RESUME.md").
3. The assistant reads, in this order: `PLAN.md` (§5 phases, §8 decisions), `INDEX.md` (matrix, findings, questions
   with answers), `decisions.md`, `review/G1-review.md` … `review/G4-review.md`, the briefs `READER.md` and `JUDGE.md`.
   It does not read `migration/screens/**` for this work.

## Next steps, in order

1. Answer the open questions of G4 and the shared units (`python3 migration/clarify/tools/collect.py --questions G4`
   and `--questions X`); record them with `python3 migration/clarify/tools/answers.py accept-recommendations --groups
   G4,X --date YYYY-MM-DD` (or `set <Flow> <Qn> "<answer>"`), then `python3 migration/clarify/tools/collect.py`.
2. G5: short gap reports for Map, Deprecated_Calendar_PersonalEvent, zTemp_Flow, zDEV_Directory_CommunityBusinessBlocks
   (one Sonnet reader + one Opus judge, or the orchestrator alone; packs exist in `flows/<Flow>/pack/`).
3. Follow-up pass (facts the judges left open; list in the review files §1 "to re-check" and the `unclear` rows of
   `INDEX.md`): read-only TST checks, no code change.
4. P2 synthesis (`PLAN.md` §5 P2): `architecture-current.md` and `infra-gaps.md`, from the 44 reports; then a Vietnamese
   summary in chat.
5. P3 hand-over: context note, ledger report (`python3 $SK/ledger.py report`), commit on `clarify-screens`. No push.

## Way of work that the user decided

- Models: Sonnet reads and writes evidence (`READER.md`); Opus judges (`JUDGE.md`); Fable judges the hard flows
  (wrappers of referenced modules, many unclear rows) and the orchestrator's review pass.
- At most 10 agents in parallel. After each wave: `agent_cost.py` on the transcripts, a waste report to the user, and
  the user decides.
- Every verdict and decision rests on the source of truth (TST compiled code first, then the DEV model, the KB with a
  rule id, React `file:line`); no assumption; `unclear` + question otherwise.
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
