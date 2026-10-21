# context-031 · MCP coverage check, spec coverage, Atlas/KB/Scorecard removed (2026-10-21)

## Result
- MCP (Service Studio, DEV) reads every Service Studio folder of UBTConnect: screens, blocks, client/server/service
  actions, integrations (0), roles, exceptions, entities, structures, client variables, site properties, locales (0),
  resources. Read-only calls only.
- Spec coverage of the 64 built screens (closure over TST compiled code, name match): client side about 95 % in the
  specs; screens 64/64, own blocks 110/110, client actions 73/99, structures 25/40, client variables 17/17.
  Gap: server side (data action → server/service action → entity) is not in the specs (44 service actions).
  MCP `getScreen` shows it (Services: `GetServices` → `Service_ConnectServices_GetByUser`).
- Vietnamese in the project: Atlas/KB content (now deleted), `RUNBOOK.md`, `scope-review.md`, `scope-plan.md`,
  `sitemap.md`/`.html` (labels in `tools/sitemap.py`), quoted user words; the app UI has none.
- Atlas, Build KB and KB Scorecard deleted (folders and artifacts), at the user's request.

## Decisions (who, date)
- User, 2026-10-21: delete Atlas + KB + Scorecard locally, and the artifacts new Atlas, Build KB, old Atlas
  (3 deleted; the Scorecard and empty Dashboard links no longer existed).
- Kept pending the user's confirm: "Connect-new 3.12 KB Guide" (Claude Docs, 2026-10-19). It is a VI step guide
  for skill 3.12 on another project (`~/Projects/fe-kb`), not this project's KB.

## Facts learned (evidence)
- TST `UBTConnect.languageResources.js` holds only default validation messages: no extra locale.
- TST defines 201 module client actions and all 28 client variables (`UBTConnect.controller.js`, `.clientVariables.js`).
- 3 screens exist on DEV only: OrbitAdminMilestoneDetail, OrbitAdminMilestones, PassportScan (not on the board).
- Editing `route-spec.md` breaks the `spec.complete.json` hash (`route.py` reports "edited after spec-done");
  the 4 required headings must stay (`SPEC_SECTIONS`).

## Files changed
- Deleted `migration/atlas/`, `migration/kb/`, `migration/scorecard/` (672 files; no git, not recoverable).
- Added 4 TST scripts to `migration/runtime-sources/` (logged in `knowledge/runtime-sources.md`).

## Open issues
- The user's boss (non-Vietnamese) will review the folder: specs in English, ASD-STE100. Options given:
  A translate VI docs (low), B STE rewrite of ~580 spec files (high, pilot on 3 routes first), STE level
  (rule checker vs the official dictionary). No decision yet.

## Next
- User decides scope A / A + pilot B and the STE level; confirm or keep the 3.12 KB Guide doc.
