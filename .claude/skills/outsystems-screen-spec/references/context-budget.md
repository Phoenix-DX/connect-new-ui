# Context budget

Every token an agent reads is paid on every turn that follows, so what an agent is allowed to read matters more than how well it writes.

## Contents
1. What each role reads
2. The context pack
3. Reading rules for screen agents
4. Prompt caching and model choice
5. Measuring
6. Expected cost per route (estimate)

## 1. What each role reads

| Role | Always | On demand | Never |
|---|---|---|---|
| Screen agent (lite) | `references/route-agent.md`, `AGENTS.md`, `pack.md` (never SKILL.md, route-loop.md, end-to-end.md) | files listed at the end of the pack, by grep or line range | other screens' notes, `board.md` in full, `css-relevant.md` unless a diff needs it, whole `sources/` files |
| Screen agent (full) | as lite + its own spec once written | `digest.md`, `call-sites.md`, `diagrams.md`, cached action answers | as lite |
| Foundation owner | `AGENTS.md`, shell spec, foundation queue, change requests | users' `dom/*.html` of the block it builds | screen specs |
| Orchestrator | `board.py show/summary`, ledger report | catalog files | analysis folders |

## 2. The context pack

`context_pack.py` builds `migration/screens/<S>/pack.md` within a budget (default 14 000 tokens, estimated as characters / 3.5):

- markup compacted: shell and built shared blocks become one `<OSBlock … from=… elided=…/>` line with the line range in `dom/default.html`; runs of identical siblings (list rows) are folded after two; data URLs are elided; layouts are kept because their placeholders hold the screen's own content;
- calls of this screen only, with trigger chains, matching response types and cached server-side answers;
- logic only for screen-specific blocks;
- when over budget, the lowest-priority sections (other states, logic, calls) are truncated and the pack says what was cut and where to find it.

If a pack is still over budget after cuts, the screen is too big for one task: split it by block (one task per screen-specific block, then one to compose).

## 3. Reading rules for screen agents

- Read the pack once, fully. Do not re-open files whose content is already in the pack.
- For an expression, `grep -n` the compiled source for the name in the pack; read only the lines around the hit.
- For a collapsed block, trust the shared component; do not read its markup unless parity points at it.
- Do not read CSS to decide markup. Classes come from the DOM; the CSS is applied unchanged.
- Parity reports are already short; read the JSON only for the differences you fix.

## 4. Prompt caching and model choice

- Keep the stable prefix identical across screen tasks: skill instructions, `AGENTS.md`, then the screen pack last. Identical prefixes are cached by the API and by Claude Code.
- Use the most capable model for the foundation owner, full-tier specs and the scope session preparation; a faster model is usually enough for lite screens once the pack and parity gate exist, because the remaining work is composition against an automatic check. Decide from the ledger, not by default.

## 5. Measuring

```bash
python3 scripts/ledger.py add --screen <S> --phase build --tokens <n> --tier lite
python3 scripts/ledger.py report
```
Record every agent run (Claude Code reports total tokens per subagent). The report gives tokens by phase, per screen by tier (median and max), the most expensive screens and the waste on skipped screens. Measure two or three screens before changing the process, and again after each wave.

## 6. Expected cost per route (estimate)

Estimates, not measurements: replace them with your own ledger numbers after two or three routes. "Processed" is the sum of the context sent on every turn (what Claude Code reports as total tokens, mostly cache reads); "fresh" is new input (tool results, files read) plus the starting context.

Starting context of a route agent: tool and system instructions, `route-agent.md` (~1.5k), AGENTS.md (~3k) and the pack (6–14k): about 20–28k tokens. Before v3.4 the agent also loaded SKILL.md (~8k) and route-loop.md (~4k), about 30–40k; those ~10k tokens were paid again on every turn. A feedback round reads `feedback.md` and the touched files instead of the whole pack (route-agent.md section 5).

| Work | Turns | Processed | Fresh input | Output |
|---|---|---|---|---|
| Lite route, from start to `ready` | 35–55 | 1.6–3.2M | 120–200k | 18–35k |
| Full route, from start to `ready` | 80–140 | 6–12M | 300–600k | 45–90k |
| One feedback round (fix + `ready`) | 6–16 | 0.4–1.2M | 25–70k | 3–9k |
| Independent verifier (full tier) | 20–40 | 1–3M | 80–150k | 5–15k |
| OutSystems UI pattern (foundation, once per app) | 25–60 | 1–3M | 80–180k | 10–30k |
| Capture (batch_capture.cjs), any number of viewports and flag variants | 0 | 0 | 0 | 0 |
| `route.py parity` run (all states) | 1 | output only | 0.1–0.3k per clean state, 0.3–2k per state with differences | 0 |

v3.7 (stricter parity) moves these numbers: one `route.py parity` call replaces one `parity_check.cjs` call per state, but positions, text, pseudo-elements, pixels and calls find more differences, so the first routes of a wave need more fix loops (+15–35% fresh input against v3.6). Each extra viewport adds one state per captured state; it costs tokens only when it differs (usually device classes, fixed once in the shell). Each flag variant adds a state and its branch code (+5–15k fresh). Reading a diff image costs about 1–1.5k tokens: open it only for a `pixel` difference. Fewer defects reach the user's test, so feedback rounds get shorter, and the stronger gate lets you sample lite routes for independent verification less often (one in eight instead of one in five).

With prompt caching, cache reads cost a fraction of fresh input, so the bill tracks fresh input and output more than the processed total. What moves these numbers most: the number of captured states (each needs a parity run and possibly fixes), parity fix loops, MCP answers (1–4k each), and how many feedback rounds the user needs. One-off phases (scope, stack session, shell and shared blocks) are spent once and spread over all routes; a shared block typically costs as much as a lite route.
