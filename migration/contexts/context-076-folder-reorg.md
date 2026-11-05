# context-076: folder reorganisation (app / tools / migration / route-check)

## Result
- The top level: `app/` (source), `tools/` (every reusable script, by purpose), `migration/` (data), `capture/`.
  Also `route-check/` (the former `route-actions/`: reports and config) and `.claude/` (skills and agents, text only).
- `tools/` folders: `pipeline/` (the 24 scripts and `assets/` of the skill outsystems-screen-spec), `parity/`,
  `generate/`, `docs/`, `tst/`, `mcp/`, `refactor/` (the refactor-master scripts and the live refactor tools),
  `route-check/`. Index: `tools/README.md` (the former `migration/tools/README.md`).
- Deleted one-off scripts (18 refactor step scripts, 3 TST observation scripts, `mcp/graph.py`, 13 clarify probes).
  Commit `eee05575` is the last one that holds them.
- The skill `route-actions` is `route-check` (`/route-check status | continue | run | done | app-shell`).
- Path fixes: the `SK` constant in about 20 scripts. The root depth of `arch_baseline.py`, `test_rf.py`, `move.ts`.
  The route-check tools (`ROOT` = repository root, `HERE` = `route-check/`). `build_dashboard.py` reads
  `tools/generate/sitemap.py`. `app/package.json` `arch:baselines`. The banners of the generators.
- Generated files carry the new banner only; their content stays as committed (see Open issues).

## Decisions (who, date)
- User 2026-11-05: option (a) for the stale generated files: record the missing sources, regenerate, parity, CI.
- User 2026-11-05: groups A–G + J move to `tools/`; layout by purpose; one-offs deleted; `route-check/` at the root,
  not in `migration/`; clarify tools and the dashboard builder stay next to their data.

## Facts learned (evidence)
- `check_route.py HomeFeed` from the MCP cache writes the same route file as the mechanical path replace
  (`git diff route-check/routes/HomeFeed.md`: the two tool-name lines only).
- The generators are behind their sources. `docs_gen.py` changes `api.md` (the removed MyBookmarks operations),
  `screens.md` (flags) and `stack.md` (ADR-17 and the AdaptiveCards row disappear: the source of `stack.md` lacks them).
  `sitemap.py` gives 84 screens and 756 links (committed: 83 and 806). `css_sets.py` sets AssembleEvents to
  `capture` (committed: `compiled`). Not applied in this commit.
- `build_dashboard.py` rebuilds `site/` with 231 images deleted (the capture set changed); the committed `site/` was kept.

## Files changed
- Moves: `tools/**`, `route-check/**`, `.claude/skills/route-check/`; deletions as above.
- Text, root and `.claude/`: `CLAUDE.md`, `README.md`, `RUNBOOK.md`, `.gitignore`, the three `SKILL.md`, the skill
  references, the three agents.
- Text, `migration/`: `AGENTS.md`, `architecture.md`, `refactor/README.md`, the clarify guides, `flows-dashboard/README.md`,
  `journeys/README.md`, `english-docs/PLAN.md` and agents, `stack.json` (ADR-15 paths), knowledge and briefs.
- Text, `app/`: `docs/README.md`, `docs/guides/*.md`, `package.json`, four comments, the generated banners.
- `route-check/*.md` (tool-name lines), `route-check/config.json`.

## Open issues
- Done in the follow-up commit (user, option a, 2026-11-05): ADR-17 and the AdaptiveCards item recorded in `stack.json`
  (`stack.py adr new` + `adr accept`; the item by hand, no script command), `architecture.md` rendered, the four
  generators run (`api.md`, `screens.md`, `flags.md`, `stack.md`, `sitemap.*`, `routes.css.generated.ts` AssembleEvents
  = `capture`), parity AssembleEvents clean, CI green.
- Historical files keep the old paths on purpose: contexts, `migration/refactor/handoffs`, `log.md`,
  `auto-decisions-*.md`, `migration/clarify/review`, `migration/screens`, `app/docs/refactor`, `migration/flags.json`.

## Next
- The user's decision on row 23 (JSON key names); the re-captures (context-075).
