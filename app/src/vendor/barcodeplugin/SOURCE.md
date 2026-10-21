# BarcodePlugin web scanner (OSBarcodePlugin.js)

- File: `BarcodePlugin.OSBarcodePlugin.js`, byte-identical copy (BOM included) of the TST script
  `https://ubtm-tst.ubtconnectglobal.com/UBTConnect/scripts/BarcodePlugin.OSBarcodePlugin.js?Ufxx88p_O+lnnXaXdIXhEw`
  (URL version from `migration/runtime-sources/moduleinfo.json`), fetched read-only (static GET, no session) on
  2026-10-16 into `migration/runtime-sources/`. Size 405 396 bytes, sha256
  `5daff690380132a67fbd463ecb30eb2cc87ea3cfdce33744cc46a3f097a893b1`.
- Loaded by the OutSystems BarcodePlugin module: CheckBarcodePlugin, without Cordova and with `navigator.mediaDevices`,
  runs AddCSSJS and `requireScript("scripts/BarcodePlugin.OSBarcodePlugin.js")`; ScanBarcode's RunWebScannerJS calls
  `OSBarcodePlugin.openScanner` (`migration/runtime-sources/BarcodePlugin.controller.js` :21-94, :201-222, :768-805).
- Content: the OutSystems web scanner (camera UI, close button, torch, orientation lock, error codes
  `OS-PLUG-BARC-0001`..`0006`) bundled by webpack with html5-qrcode (camera, `BarcodeDetector` when supported) and
  zxing-js (decoder fallback, e.g. iOS). The file states no upstream versions. The scanner CSS is not in this file: the
  controller injects it (AddCSSJS), ported in `src/lib/device/barcodePluginCss.ts`.
- License: line 1 says `For license information please see barcodeplugin.js.LICENSE.txt`; TST does not serve that file
  (GET `/UBTConnect/scripts/barcodeplugin.js.LICENSE.txt` → 404, 2026-10-16), so there is no license file to keep.
  Upstream html5-qrcode and zxing-js are Apache-2.0; to confirm with the plugin owner before production (ADR-11).
- Decision: ADR-11 (`migration/architecture.md`), OrbitAdminEventDetail Q1-Q2. Never edited: `index.ts` is the typed
  loader; same version as TST, upgrade only together with the original.
