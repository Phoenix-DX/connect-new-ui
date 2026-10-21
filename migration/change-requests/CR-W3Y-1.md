# CR-W3Y-1: Connect2_LegacyShared GetSignedPhotosInBulk — add the server action to the contract and its mock

- Status: applied
- Raised by: foundation task Y (wave 3 follow-up), 2026-10-15
- Block: `Connect2_LegacyShared.Utility.Result_Item_Image` → `app/src/shared/Connect2_LegacyShared/Result_Item_Image/`
  (LoadPhotoAsync → `GetCacheableSignedPhotoURL`, `app/src/shared/Connect2_LegacyShared/lib/actions.ts`)
- Other routes using it (catalog/blocks.md): BookmarksByGroup, LegacyShareObject, MessageDetail

## Evidence
- Flow: `Result_Item_Image.mvc.js:702-770` (LoadPhotoAsync, OnReady and OnParametersChanged) →
  `migration/runtime-sources/Connect2_LegacyShared.controller.js:3947-4115` (GetCacheableSignedPhotoURL: MemoryClientCache
  `GetCacheableObjectInBulk`, type DirectoryCacheType.Photos, TTL 300 s, timeout 10) → `:2983-3035`
  (GetBulkSignedPhotosURL) → `:7865-7880` server action `GetSignedPhotosInBulk`,
  `screenservices/Connect2_LegacyShared/ActionGetSignedPhotosInBulk`, input `BulkSignedPhotoParameters` (Bucket, Path,
  Type; `:2928-2933`), output `Results` (Bucket, Path, Type, SignedURL, Error; `:3012-3025`).
- `app/src/api/openapi.yaml` has no `Connect2_LegacyShared/ActionGetSignedPhotosInBulk` path; no `calls.json` of any
  route recorded the call (the captured photos of BookmarksByGroup may come from In_SignedURL passed by the screen).

## Expected change
1. Contract: `Connect2_LegacyShared/ActionGetSignedPhotosInBulk` (input `BulkSignedPhotoParameters`, output `Results`),
   from the module's screen services (TST) or a recording of a route that loads a photo without In_SignedURL.
2. Lib: implement `getSignedPhotosInBulk` in `app/src/shared/Connect2_LegacyShared/lib/actions.ts` with `callAction`
   (it is `undefined` now; `useLoadPhotoAsync` then starts calling it, nothing else changes).
3. Mock: register `Result_Item_Image/mocks.ts` (`mockGetSignedPhotosInBulk`: neutral landscape placeholder, rule of
   `migration/knowledge/mock-fixtures.md` Q-W2C-1) as a `contractHandler`.

## Workaround until applied
The action is ported and tested with the mock; without the server call the block keeps its earlier behaviour: the
photo shows only when the screen passes In_SignedURL, else the default image (captures v2, v5).

## Resolution (foundation owner)
Set `- Status: applied` above when done.
- Change:
- Regression parity run on:
- Change (orchestrator, 2026-10-15): `migration/tools/contract_gen.py` reads `migration/contract/extra-actions.json`
  (server calls reached only through a module client action); entry `screenservices/Connect2_LegacyShared/
  ActionGetSignedPhotosInBulk` (screens BookmarksByGroup, LegacyShareObject, MessageDetail), controller copied to
  `migration/contract/sources/raw/`; contract 96 operations (deterministic). `getSignedPhotosInBulk` calls it;
  `Result_Item_Image/mocks.ts` serves the landscape placeholder (mock-fixtures rule).
- Regression: ci 173 files / 715 tests.
