# Context 053: Libraries view on the UI Flows dashboard

Date: 2026-10-26. Status: current.

## Result
- Knowledge comparison between this repository and `~/Projects/my-research/ubtconnect-module-relationship` (DEV Model API
  dependency analysis, 2026-10-26): 86/86 screens, 180/180 blocks, 44/44 UI flows by name; 67 of 74 used Utils elements and
  23 of 24 used LegacyShared elements are named in the repository docs; 88 of 200 own client actions are named.
- New artifact https://claude.ai/artifact/DLHY4vLnKkpCoUCkwS2EQj "UBTConnect Flows and Libraries": the UI Flows page plus a
  Libraries view (12 jobs, area bars, screen x job matrix with filters, elements by job, layout-inherited elements,
  contract against use, theme chain), a "Shared libraries" section in the screen drawer, a "Shared libraries in this
  flow" panel with the four Mermaid sequences on the flow pages, two Health findings, a Method section on the DEV source.
- The UI Flows artifact (JJCYpEtp) is untouched: `site/index.html` builds byte-identical except `builtAt`/`commit`.

## Decisions (user, 2026-10-26)
- Local commits allowed without asking; never push or write to a remote without explicit permission (CLAUDE.md rule 7).
- A new artifact for the merged page, not an update of JJCYpEtp. The user accepted it (2026-10-26) and asked for a
  commit and a push to `main` (push allowed for this one time).
- Area taxonomy of the dashboard (13 areas) for the Libraries view; `CommunityBusinessDetails_CoomingSoon` keeps the
  repository scope (in scope).

## Facts learned (evidence)
- my-research counts references of the UBTConnect module only; the run-time footprint of Connect2_LegacyShared on the
  Legacy_* screens is larger (blocks of Orbit/Assemble MUI render `BaseLayout_UpdatedOSUI` on 26 screens:
  `app/docs/reference/shared-blocks.md`). Stated on the page (Method).
- DEV-only screens (OrbitAdminMilestoneDetail, OrbitAdminMilestones, PassportScan) appear as normal screens in my-research.
- The content check of the README finds "mock app" once in both pages: it is a journey note in `migration/journeys/`
  (already on the published UI Flows page). Not changed.

## Files changed
- `migration/flows-dashboard/build_dashboard.py` (`--with-libraries`, `libraries()`, [lib] marker removal),
  `src/page.html` ([lib] blocks), `README.md`; new `content/libraries/{screen_map,flow_detail,summary,sequences}.json`
  and `SOURCE.md`; built `site/libraries.html` (`site/` is tracked; `site/index.html` changed only in `builtAt`/`commit`).
- `CLAUDE.md` rule 7 (push ban, local commits allowed).

## Open issues
- The Libraries view is committed on `refactor/architecture` and copied to `main` as the same commits (the dashboard
  files are equal on both branches). The refactor branch itself is not merged into `main`.
- Publish steps for the new artifact: README "Published artifacts".

## Next
- When the library data changes, refresh `content/libraries/` (see its `SOURCE.md`), build with `--with-libraries` and
  publish to DLHY4vLn… after the user's accept.
