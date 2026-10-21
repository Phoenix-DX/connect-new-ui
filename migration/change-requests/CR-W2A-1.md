# CR-W2A-1: UBTConnect_Utils GetSignedImagesInBulk — add the action to the contract and its mock

- Status: applied (wave 2C, 2026-10-14; mock images per Q-W2C-1 applied in the foundation follow-up, 2026-10-14)
- Raised by: wave 2 batch A (shared blocks), 2026-10-14
- Block: `UBTConnect_Utils.CW_Image.UBT_LazyImage` → `app/src/shared/UBTConnect_Utils/UBT_LazyImage/`
- Other routes using it (catalog/blocks.md): BookmarksByGroup, ContactByEmailMember, ContactUsDetails, CountryDetails,
  CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject,
  Locality_Details, Menu, MessageDetail, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel,
  SupperMeeting_Details, Updates_SingleList
- Related question: Q-W2C-1 (what the mock shows for person images; wave 2C report)

## Evidence
- Recorded call: `migration/screens/CountryDetails/analysis/calls.json` (also HouseholdDetails, HouseholdCarousel):
  `/UBTConnect/screenservices/UBTConnect_Utils/ActionGetSignedImagesInBulk` with input `BulkSignedImagesParameters`.
- Flow: `UBT_LazyImage.mvc.js:742-760` (OnReady → `Cache_SignedImageURL_Get(EntityId, LocalImageType,
  LocalImageSizeId)`), `UBTConnect_Utils.controller.js:543-690` (MemoryClientCache `GetCacheableObjectInBulk`, TTL 300 s,
  timeout 10, bulk of 15) and `:769-800` (`Cache_SignedImageURL_GetCallback` → `GetSignedImagesInBulk` server action).
- `app/src/api/openapi.yaml` has no `UBTConnect_Utils/ActionGetSignedImagesInBulk` path.

## Expected change
1. Contract: `UBTConnect_Utils/ActionGetSignedImagesInBulk` (input `BulkSignedImagesParameters`, output `Results`).
2. Mock: member / household / locality images are person data → fictional signed URLs (or empty URL, as TST showed for
   the captured members: fallback icon) in a `mocks.ts`, not a fixture.
3. Shell or shared lib: `getCacheableObjectInBulk` (bulk callback, key = CacheKey(Type) + parts) next to
   `getCacheableObject` in `src/shell/memoryCache.ts`, or a decision to fetch per image.

## Workaround in the route until applied
`<NotCaptured name="CR-W2A-1: UBT_LazyImage signed image URL (GetSignedImagesInBulk)">` inside the loading
SkeletonSection, whenever ImageURL is empty and the entity has an id and an image type.

## Resolution (foundation owner)
Set `- Status: applied` above when done.
- Change (wave 2C, 2026-10-14):
  1. Contract: already present (`app/src/api/openapi.yaml:2906`, `UBTConnect_Utils/ActionGetSignedImagesInBulk`,
     input `BulkSignedImagesParameters`, output `Results`); nothing to add.
  2. Mock: `app/src/shared/UBTConnect_Utils/UBT_LazyImage/mocks.ts` (contractHandler). Evidence checked: no recorded
     result (calls.json keeps no outputs, no fixture). The screen captures show the signed-image path answered a real
     URL for most images (`<img data-masked-src="user-image">` with a rendered size: Locality_Details 67, Photobook 69,
     HouseholdCarousel 31, SupperMeeting_Carousel 24, …) and the fallback icon for others (HouseholdDetails 12,
     Household_Relations 10, SupperMeeting_* 42, CountryList 5, …). So TST did not answer empty URLs, and its URLs are
     person data. The mock answers `SignedURL: ""` (fallback icon) for every image until the user answers Q-W2C-1:
     (a) keep empty URLs everywhere, (b) neutral non-person placeholder images shipped with the app, for the images
     that showed a photo on TST, (c) another source.
  3. `getCacheableObjectInBulk` (+ `cacheKeyPart` / `getCacheKeyParts`) in `app/src/shell/memoryCache.ts`, tests in
     `memoryCache.test.ts`; `cache_SignedImageURL_Get` / `_GetCallback` / `_GetCacheKey` in
     `app/src/shared/UBTConnect_Utils/lib/actions.ts`; UBT_LazyImage calls it instead of its `<NotCaptured>`.
  Not settled: MemoryClientCache's own source is not available: Timeout 10 is read as a 10 ms collection window, a key
  answered with an Error is not stored and gives an empty URL.
- Regression parity run on: none (no route built yet uses UBT_LazyImage); UBT_LazyImage unit tests updated.
- Follow-up (foundation, 2026-10-14; decision Q-W2C-1, user): the mock answers a neutral, non-person placeholder where
  TST showed a photo and an empty URL where it showed the fallback icon. Rule and evidence in
  `app/src/shared/UBTConnect_Utils/UBT_LazyImage/mocks.ts` (`mockSignedImageURL`): in the loaded captures every image
  Type that asked for a signed URL showed a photo at every size → Member → `public/mock-images/placeholder-square.svg`
  (avatars render square), Household / Locality / Subdivision → `placeholder-landscape.svg` (cards render 3:2),
  FeedItem / other → empty (never captured). The only loaded-state fallbacks are per entity (2 of 20 HouseholdCarousel
  member avatars) or had no EntityId (2 SupperMeeting_Carousel slides never loaded: no call); a route mock reproduces
  the first with `markNoPhoto(type, id)`. Tests: `UBT_LazyImage.test.tsx`.
