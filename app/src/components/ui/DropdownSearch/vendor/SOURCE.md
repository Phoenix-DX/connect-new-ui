# Virtual Select v1.3.0 (as bundled by OutSystems UI 2.23)

- File: `OutSystemsUI_2_23.VirtualSelect.js`, byte-identical copy (BOM included) of the TST script
  `https://ubtm-tst.ubtconnectglobal.com/UBTConnect/scripts/OutSystemsUI_2_23.VirtualSelect.js?sMljAvw7FUeXKlSm0NPpOg`
  (URL version from `migration/runtime-sources/moduleinfo.json`), fetched read-only (static GET, no session) on
  2026-10-15 into `migration/runtime-sources/`. Size 87 128 bytes, sha256
  `6aef0e46782c5ba1edfd34265fcb591318a6446bf880f7d93e550713d9b6c79a`.
- Header: "Virtual Select v1.3.0, https://sa-si-dev.github.io/virtual-select, Licensed under MIT". The file also
  defines `window.PopoverComponent` (its popover dependency).
- Decision: ADR-5 / stack `osui:DropdownSearch` (same provider and version as the original; npm `virtual-select-plugin`
  stops at 1.1.0). ADR-5 names `src/vendor/virtual-select/`; that folder belongs to another batch, so the copy lives next
  to the pattern (W5-B). Never edited: `index.ts` is the typed wrapper.
