# UI Flows dashboard

A static page for the manager. It shows the UBTConnect OutSystems module by UI flow: scope, specification status,
TST screenshots, health of the original app and the scope decisions. It has no content about the React app
(user, 2026-10-21). Background: [context-033](../contexts/context-033-ui-flows-dashboard.md).

## Files

| Path | Content |
|---|---|
| `build_dashboard.py` | Builder. Reads the repository data and writes `site/`. |
| `src/page.html` | Page template (layout, styles, script). The builder puts the data into it. |
| `content/content.en.json` | Text for areas, flows, scope reasons and decisions. A writer agent and a reviewer agent made it. |
| `site/index.html` | The built page. This is the artifact page. |
| `site/img/*.webp` | TST screenshots, 390 px wide. These are the supporting files of the artifact. |
| `site-review/` | Contact sheets for the privacy check. Local only (`.gitignore`). Never publish them. |

Data sources: `migration/survey/dev-inventory.json` (DEV snapshot from the OutSystems MCP),
`migration/survey/screens.json`, `migration/board.md`, `migration/tools/sitemap.py`, the route specifications and
`migration/screens/<Screen>/parity/*.expected.png` (TST captures with masked data).

## Build

Run from the project root (needs Python 3 and Pillow):

```bash
python3 migration/flows-dashboard/build_dashboard.py            # writes site/
python3 migration/flows-dashboard/build_dashboard.py --sheets   # also writes site-review/ for a privacy check
```

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
| `files` | one entry `{"path": "img/<file>"}` for each file in `site/img/` (149 files, one publish) |
| `icon` | `map` |
| `description` | `UI flows of the UBTConnect OutSystems app on TST, with scope, specification status and TST screenshots.` |

The title comes from the page: "UBTConnect UI Flows". The artifact is private. The owner shares it.

Views have their own links: the artifact link plus `#overview`, `#health`, `#method`, `#flow-<Flow>` or
`#screen-<Screen>`.

To update the page later, build again and publish to the same artifact URL (parameter `url`). Leave out the files that
did not change.

## Published artifact

Not published yet. After the first publish, write the URL here.
