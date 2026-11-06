# context-078: shared store of the compiled sources (2026-11-05)

## Result
- `migration/sources/{raw,pretty,styles}/` holds every compiled TST file and styles bundle of the captures once:
  864 files, 125 MB, in place of 6,930 per-route copies (913 MB). `migration/screens/<S>/analysis/manifest.json`
  names the files of a route. Helper and CLI: `tools/common/sources_store.py` (`check`, `gc`, `migrate`).
- Writer: `analyze_capture.py` stores through the helper (raw, pretty, bundle.css, assets.json) and writes the
  manifest of its `--out` folder. Readers through the manifests: `contract_gen.py`, `static_entities.py`,
  `css_sets.py`, `block_pack.py`, `context_pack.py`, the route check (`os_static.py`, `check_route.py`,
  `extras_md.py`); `scope_guard.py` lists `migration/sources/**`.
- Citations rewritten to the store paths in three passes, by manifest (a deleted route by name). Pass 1: 650 exact
  citations in 302 files. Passes 2 and 3: folder and route-relative mentions in 119 files (`app/src` comments,
  route specs and packs, block packs, knowledge, tools, skill text). History folders keep the old paths (clarify,
  change-requests, refactor, contexts).
- The 68 route-check files regenerated from the MCP cache: the source links changed. The routes without a capture
  now read the blocks no capture holds from the live survey (`migration/sources/survey/`, `os_static.find_sources`).
  Their block counts grew (AssembleDetail 76 → 83). Before, those blocks came only from the raw copies of the
  deleted routes BookmarksByGroup and MyBookmarks, or were missing.

## Decisions (who, date)
- User 2026-11-05: manifest + tool changes (not symlinks); citations rewritten.
- Fable: store names stay the file names. The first version keeps the plain name; another content gets
  `<stem>@<sha8><ext>` (6 raw, 4 pretty names today). `styles/` is always suffixed (21 bundles, 16 asset maps).
  The store file keeps the newest mtime of the copies (contract_gen orders fetched copies by mtime).

## Facts learned (evidence)
- `openapi.yaml`, `routes.css.generated.ts` (banner only), `static-entities-tst.json`, the block packs and the
  HomeFeed context pack are identical through the store (diff modulo the path).
- `analyze_capture.py` on the HomeFeed capture to a scratch folder adds no store file and writes an equal manifest.
- Three citations named blocks captured only in the deleted routes BookmarksByGroup and MyBookmarks
  (`Connect2_LegacyShared.Utility.ItemOptionsMenu`, `Connect2_LegacyShared.Widgets.PopupMenu`,
  `OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2`). The first two are in `survey/` now; the third stays dead.

## Files changed
- New: `tools/common/sources_store.py`, `migration/sources/**`, `migration/screens/*/analysis/manifest.json`.
- Tools: the nine above. Docs: `tools/README.md` (store section), `README.md`, `migration/AGENTS.md`,
  `migration/english-docs/inventory.json`. Citations: `app/src` (138 files), `migration/screens/*/*.md`,
  `migration/blocks/**`, `migration/knowledge`, `.claude/skills/**`, `migration/pwa`.
- Deleted: `analysis/sources/raw/`, `analysis/sources/pretty/` and `analysis/styles/` of the 51 captured routes
  (6,930 files). The user ran `git rm` on 2026-11-06: the auto mode classifier blocks mass deletions for Claude.
  The 7 Orbit routes without a capture keep their lone block files directly under `analysis/sources/`.

## Open issues
- `.git` history still holds the old blobs; a clone shrinks only with a history rewrite (not planned).

## Next
- Row 23 and the re-captures (context-075).
