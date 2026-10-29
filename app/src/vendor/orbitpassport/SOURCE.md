# Orbit Passport host embed loader (OrbitPassportScanC2.PassportScan.js)

- File: `OrbitPassportScanC2.PassportScan.js`, byte-identical copy (BOM included) of the TST script
  `https://ubtm-tst.ubtconnectglobal.com/UBTConnect/scripts/OrbitPassportScanC2.PassportScan.js?1Zv9simO5LNQBm3aExkNWQ`
  (in the TST manifest; fetched read-only, static GET, no session, item 10, 2026-10-29, into
  `migration/runtime-sources/`, logged in `migration/knowledge/runtime-sources.md`). Size 27 095 bytes, sha256
  `35adc43ae885178b9665fb7d83c5b4938caa7c6f5b837c4bc1bc3e3d1d706125`.
- Content: the "Orbit Passport Portal — host embed loader", version 1.0.0 (`NS.version`), an ES5 IIFE that sets
  `window.OrbitPassport.embed` (configure, open, close, destroy, back, isConfigured, isReady, setIdToken,
  expireSession, sendCameraImage, sendGalleryImage, sendOcrResult, sendOcrError). It puts the portal page
  `<baseUrl>/passport` in an iframe inside the host container and talks to it with `postMessage`, to and from the
  portal origin only.
- Loaded by the OutSystems block `OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan` as its JS dependency
  (`ScreenBlock_PassportScan.mvc.js:148`); its JS nodes call the embed (`:699-782`).
- License: the file states none. It is written by the Orbit Passport portal team for host apps ("Drop this script into
  a host app"); to confirm with the portal owner before production.
- Decision: PassportScan Q1 (recommendation (a), open). Never edited: `index.ts` is the typed loader; same version as
  TST, upgrade only together with the original.
