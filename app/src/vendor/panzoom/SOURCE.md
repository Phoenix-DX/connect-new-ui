# PanZoom (anvaka panzoom, customised by the original app)

- File: `PanZoom.anvaka_panzoom_js.js`, byte-identical copy (BOM included) of the TST script
  `https://ubtm-tst.ubtconnectglobal.com/UBTConnect/scripts/PanZoom.anvaka_panzoom_js.js?DkjKuM8SUDMWxmXWUXZevg`
  (URL version from `migration/runtime-sources/moduleinfo.json`), fetched read-only (static GET, no session) on
  2026-10-15 into `migration/runtime-sources/`. Size 45 564 bytes, sha256
  `27f9a817c3de595947ca12b90c3e5d67907373ede118ab43a9516d29383984f5`.
- Loaded by the OutSystems block `PanZoom.PanZoom` (`View.getJsDependencies`, PanZoom.PanZoom.PanZoom.mvc.js:113-115).
- Version: the browserify bundle of anvaka/panzoom (https://github.com/anvaka/panzoom) with its dependencies (wheel,
  amator, bezier-easing, ngraph.events). The file states no upstream version; it is a customised build: options
  `triggerMinZoomReached`, `triggerZoomIn`, `doubleClickEnablesZoom` (lines 70-71, 352-353, 383, 446, 657) are not
  upstream options. Same version as TST (ADR-7); upgrade only together with the original.
- License: the file carries no license header for panzoom itself (upstream anvaka/panzoom is MIT); the embedded
  bezier-easing states "MIT License" (line 1363).
- Decision: ADR-7 (`migration/architecture.md`), Photobook Q1. Never edited: `index.ts` is the typed wrapper.
