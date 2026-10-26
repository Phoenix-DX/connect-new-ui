# UI Flows dashboard

A static page for the manager. It shows the UBTConnect OutSystems module by UI flow: scope, specification status
and TST screenshots. It also shows the main user journeys, a navigation map per flow, the health of the original app and
the scope decisions. It has no content about the React app
(user, 2026-10-21). Background: [context-033](../contexts/context-033-ui-flows-dashboard.md).

## Files

| Path | Content |
|---|---|
| `build_dashboard.py` | Builder. Reads the repository data and writes `site/`. |
| `src/page.html` | Page template (layout, styles, script). The builder puts the data into it. |
| `content/content.en.json` | Text for areas, flows, scope reasons and decisions. A writer agent and a reviewer agent made it. |
| `site/index.html` | The built page. This is the artifact page. |
| `site/img/*.webp` | TST screenshots, 390 px wide. These are supporting files of the artifact. |
| `site/img/j/*.webp` | Journey screenshots from the last TST run. These are supporting files of the artifact. |
| `content/libraries/*.json` | Copies of the dependency analysis of `my-research` (DEV Model API): what UBTConnect_Utils and Connect2_LegacyShared do on each screen. See `content/libraries/SOURCE.md`. |
| `site/libraries.html` | The built page with the Libraries view (`--with-libraries`). A second artifact. It uses the same `site/img/`. |

The journeys come from `migration/journeys/` (`journeys.json` and the last run in `runs/`). The builder stops when a
step is not a link in the TST code.
| `site-review/` | Contact sheets for the privacy check. Local only (`.gitignore`). Never publish them. |

Data sources: `migration/survey/dev-inventory.json` (DEV snapshot from the OutSystems MCP),
`migration/survey/screens.json`, `migration/board.md`, `migration/tools/sitemap.py`, the route specifications and
`migration/screens/<Screen>/parity/*.expected.png` (TST captures with masked data).

## Build

Run from the project root (needs Python 3 and Pillow):

```bash
python3 migration/flows-dashboard/build_dashboard.py            # writes site/
python3 migration/flows-dashboard/build_dashboard.py --sheets   # also writes site-review/ for a privacy check
python3 migration/flows-dashboard/build_dashboard.py --with-libraries   # also writes site/libraries.html
```

The template `src/page.html` holds the Libraries parts between `/*[lib]*/ … /*[/lib]*/` and `<!--[lib]--> … <!--[/lib]-->`
markers. The builder removes them from `site/index.html`, with or without the flag, so the UI Flows page stays the same
(checked 2026-10-26: the build before and after the change differs only in `builtAt` and `commit`). Only
`site/libraries.html` keeps them. The Libraries page loads Mermaid from cdnjs (version 10.9.1) for the four sequence diagrams.

Build again only after a change to the data, the content or the template. Each build writes a new time stamp into
`site/index.html`.

## Checks before you publish

1. Privacy: after new screenshots, run the build with `--sheets` and look at each sheet in `site-review/`. Names,
   addresses and texts must show as dots. The check of 2026-10-21 found no personal data in the 149 images.
2. No React content: this command must find only OutSystems module names (for example `ReactiveHtmlSanitizer`) and
   parts of other words:

   ```bash
   grep -o -i -E "react|\.tsx|app/src|mock|parity|vite|fixture|localhost" migration/flows-dashboard/site/index.html | sort | uniq -c
   ```

## Publish as an artifact

Use the Artifact tool from the project root. The page follows the artifact page contract (no `<html>` skeleton,
light and dark tokens, Google Fonts only, no external script).

| Parameter | Value |
|---|---|
| `file_path` | `migration/flows-dashboard/site/index.html` |
| `root` | `migration/flows-dashboard/site` |
| `files` | one entry `{"path": "img/<file>"}` for each file in `site/img/` and `site/img/j/` (229 files on 2026-10-22, one publish) |
| `icon` | `map` |
| `description` | `UI flows and main user journeys of the UBTConnect OutSystems app on TST, with scope, specification status and TST screenshots.` |

The title comes from the page: "UBTConnect UI Flows and Journeys". The artifact is private. The owner shares it.

Views have their own links: the artifact link plus `#overview`, `#journeys`, `#journey-J<n>`, `#health`, `#method`,
`#flow-<Flow>` or `#screen-<Screen>`.

To update the page later, build again and publish to the same artifact URL (parameter `url`). Leave out the files that
did not change.

## Published artifacts

- https://claude.ai/artifact/KNHgnHAA6hKwTy64ivqyaG: first publish 2026-10-21 without journeys. Version 2
  (2026-10-21) adds the journeys and flow maps (user, 2026-10-21). Shared with the organization.
- https://claude.ai/artifact/JJCYpEtp6Q2V3xSbRkXA69 ("UBTConnect UI Flows and Journeys", first publish 2026-10-21,
  with journeys and flow maps). Same content as version 2 above. Update 2026-10-22: the 38 journeys with the TST
  run screenshots (the user accepted the local build, 2026-10-22).

- https://claude.ai/artifact/DLHY4vLnKkpCoUCkwS2EQj ("UBTConnect Flows and Libraries", first publish 2026-10-26 from
  `site/libraries.html` with the 229 images, parameter `root` = `site/`). The UI Flows page plus the Libraries view
  (user decision 2026-10-26: a new artifact, not an update of the one above; the user accepted it the same day).
  Private until the owner shares it.

When the page changes, publish it to the artifacts that the owner wants to keep current.
