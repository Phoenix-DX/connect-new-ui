## Result
status: pass
summary: The memory cache is now TanStack queries in the app QueryClient (`api/client/cache.ts`, `api/client/queryClient.ts`), and its entries are query options in the domain `keys.ts` files (Q13 A, Q14 a, Q15 a). All 27 users moved, and `memoryCache.ts` is deleted; its test moved to `api/client/cache.test.ts` (one case replaced, four added). Typecheck, eslint, prettier and lint:arch pass (0 errors, 184 warnings as at HEAD). The full vitest suite passes: 376 files, 2033 tests.

## Files changed
Added:
app/src/api/client/cache.ts
app/src/api/client/queryClient.ts
app/src/api/image/keys.ts
app/src/api/image/index.ts
Moved (git mv) and rewritten:
app/src/platform/storage/memoryCache.test.ts → app/src/api/client/cache.test.ts
Deleted (git rm):
app/src/platform/storage/memoryCache.ts
Changed, api domains (keys.ts gets the cache entries, index.ts exports them):
app/src/api/app/keys.ts
app/src/api/app/index.ts
app/src/api/bookmark/keys.ts
app/src/api/bookmark/index.ts
app/src/api/country/keys.ts
app/src/api/country/index.ts
app/src/api/locality/keys.ts
app/src/api/locality/index.ts
app/src/api/member/keys.ts
app/src/api/member/index.ts
app/src/api/message/keys.ts
app/src/api/message/index.ts
Changed, production:
app/src/main.tsx
app/src/platform/bootstrap/appStartSteps.ts
app/src/platform/session/auth.ts
app/src/platform/session/userInfo.ts
app/src/screens/AcceptPendingPolicies/index.tsx
app/src/screens/Profile/index.tsx
app/src/screens/GuestArrangements/api.ts
app/src/screens/HelpersDetail/api.ts
app/src/screens/MilestoneDetail/api.ts
app/src/screens/OrbitAdminEventDetail/api.ts
app/src/screens/QRCodeGenerate/api.ts
app/src/shared/Connect2_LegacyShared/lib/actions.ts
app/src/shared/Connect2_LegacyShared/lib/staticEntities.ts
app/src/shared/UBTConnect_Utils/lib/actions.ts
app/src/shared/UBTConnect_Utils/CacheControl/CacheControl.tsx
app/src/shared/UBTConnect_Utils/CacheControl_AllCountries/CacheControl_AllCountries.tsx
app/src/shared/UBTConnect_Utils/CacheControl_AllLocalities/CacheControl_AllLocalities.tsx
app/src/shared/UBTConnect_Utils/CacheControl_Policies/CacheControl_Policies.tsx
app/src/shared/UBTConnect_Utils/CacheControl_UserInfo/CacheControl_UserInfo.tsx
Changed, test support and tests:
app/src/test/testSupport.ts
app/src/platform/bootstrap/appStartSteps.test.ts
app/src/platform/session/auth.test.ts
app/src/shared/Connect2_LegacyShared/lib/actions.test.ts
app/src/shared/UBTConnect/CacheControl_UserInfo_Wrapper/CacheControl_UserInfo_Wrapper.test.tsx
app/src/shared/UBTConnect/FilterSheet/FilterSheet.test.tsx
app/src/shared/UBTConnect_Utils/CacheControl/CacheControl.test.tsx
app/src/shared/UBTConnect_Utils/CacheControl_AllCountries/CacheControl_AllCountries.test.tsx
app/src/shared/UBTConnect_Utils/CacheControl_AllLocalities/CacheControl_AllLocalities.test.tsx
app/src/shared/UBTConnect_Utils/CacheControl_Policies/CacheControl_Policies.test.tsx
app/src/shared/UBTConnect_Utils/CacheControl_UserInfo/CacheControl_UserInfo.test.tsx
Changed, stories:
app/src/shared/UBTConnect/Block_PINUnlock_ContentWrapper/Block_PINUnlock_ContentWrapper.stories.tsx
app/src/shared/UBTConnect/CacheControl_UserInfo_Wrapper/CacheControl_UserInfo_Wrapper.stories.tsx
app/src/shared/UBTConnect/FilterSheet/FilterSheet.stories.tsx
app/src/shared/UBTConnect_Utils/CacheControl_AllCountries/CacheControl_AllCountries.stories.tsx
app/src/shared/UBTConnect_Utils/CacheControl_AllLocalities/CacheControl_AllLocalities.stories.tsx
app/src/shared/UBTConnect_Utils/CacheControl_Policies/CacheControl_Policies.stories.tsx
app/src/shared/UBTConnect_Utils/CacheControl_UserInfo/CacheControl_UserInfo.stories.tsx
app/src/shared/UBT_AppManager/PinCode/PinCode.stories.tsx
app/src/shared/UBT_AppManager_Mobile/PinUnlock_MobileWrapper/PinUnlock_MobileWrapper.stories.tsx
Handoff:
migration/refactor/handoffs/P5-4/exemptions.json (added: `[]`)
migration/refactor/handoffs/P5-4/dev.md (this report)

For the documenter, these files still name `memoryCache.ts`, `CACHE_TYPE` or the old TTL constants (I did not change them):
app/src/api/README.md ("GetUserInformation (P5-4) is not in app/"), app/src/shared/UBTConnect_Utils/CacheControl/README.md,
app/src/shared/UBTConnect_Utils/CacheControl_AllCountries/README.md, CacheControl_AllLocalities/README.md,
CacheControl_Policies/README.md, CacheControl_UserInfo/README.md, app/src/shared/UBTConnect_Utils/UBT_LazyImage/README.md,
app/docs/guides/shell.md, app/docs/reference/stack.md.

## Commands run
git branch --show-current → refactor/architecture (main tree, HEAD f674c24)
git rm app/src/platform/storage/memoryCache.ts; git mv memoryCache.test.ts → api/client/cache.test.ts → staged delete and rename
git add -N (the 4 new files, to count them in git diff --stat) → intent-to-add entries only, nothing staged with content
npm --prefix app run typecheck → exit 0
npx vitest run src/api/client/cache.test.ts → 1 file, 12 tests passed
npx vitest run src/api src/platform src/shared/UBTConnect_Utils src/shared/Connect2_LegacyShared src/shared/UBTConnect src/shared/UBT_AppManager src/shared/UBT_AppManager_Mobile src/test → 263 files, 1505 tests passed
npx vitest run src/screens/{AcceptPendingPolicies,Profile,GuestArrangements,HelpersDetail,MilestoneDetail,OrbitAdminEventDetail,QRCodeGenerate} → 1 file, 1 test passed
npx eslint <the 56 changed or added files> → exit 0, 0 problems (one no-unnecessary-condition error in cache.ts was fixed first)
npx prettier --check <the same files> → all formatted (prettier --write on cache.ts, cache.test.ts, queryClient.ts, UBTConnect_Utils/lib/actions.ts first)
npm --prefix app run lint:arch → depcruise 0 errors, 184 warnings (same count as the P5-3-notification gate; the step's files only keep their earlier rule-9 warnings); eslint 0 errors, 1 warning (components/ui/os/OSPopup/usePopupWidget.ts, not a step file)
npx vitest run (full suite, once at the end) → 376 files, 2033 tests passed (P5-3-notification: 2029; +4 new cache tests). The jsdom line "Not implemented: navigation to another Document" comes from shared/UBTJavaScriptUtils/lib/actions.test.ts (not a step file).
git diff --stat HEAD -- app/ → 58 files changed, 817 insertions, 710 deletions

## Deviations from the brief
Design (decisions Q13 A, Q14 a, Q15 a of the user, auto-accepted 2026-10-23):
- `api/client/queryClient.ts` has the one QueryClient of the app (same defaults as before: retry false, no refetch on window focus). `main.tsx` imports it. The flows and the app start use the same instance.
- `api/client/cache.ts` keeps the OutSystems names (`getCacheableObject`, `getCacheableObjectInBulk`, `peekCacheableObject`, `putCacheableObject`, `cacheKeyPart`, `getCacheKeyParts`, `clearMemoryCache`). An entry is a query with the key `['memoryCache', sessionEpoch, type, key]`. Its options: staleTime is a function that reads the TTL stored with the object (the TTL of the writer stays exact), gcTime Infinity, networkMode 'always', retry false, structuralSharing false. Single reads use `fetchQuery`. A put uses `QueryCache.build(...).setData(..., { manual: true })`, so a put without a reader also gets gcTime Infinity.
- The domain `keys.ts` files have the entries (cacheEntry or bulkCacheEntry: type, key, TTL, and for bulk caches the window and the bulk size): `memberCache` (userInfo 7200 s or the writer's TTL, legacyUserInfo), `appCache` (policies, mapObject 7200 s), `countryCache` (allCountries, countryLocalities 1200 s, regionSubscribedCountries 1200 s), `localityCache` (allLocalities, locality 1200 s, timezone 1200 s, subdivision 300 s with bulk size 0), `messageCache` (memberContacts 300 s), `bookmarkCache` (myBookmarks 604800 s), and the new `api/image` with `imageCache` (signedImage and legacySignedImage 300 s with bulk 15, signedPhoto 300 s with bulk size 0). The calls stay where they are (Phase 6).
- The cache type strings are the same as before ('Connect_CacheType.*', 'DirectoryCacheType.Images*', 'Photos', ...). The `…Type` fields of the domain entries give the same CacheTypeId inputs to GetCacheInfo, so the requests do not change.
- The bulk caches map one to one: one query per key, and a batcher in `cache.ts` keeps the queue per cache type, the 10 ms window, the bulk size (15, or 0 = each key at once) and the callback of the first miss. GetSignedImagesInBulk (both modules), GetSignedPhotosInBulk and GetBulkSubdivisions_V2 get the same keys in the same calls. Q14's stop condition does not apply.

Behavior changes (accepted in Q13):
- A reader that comes more than 10 s after a miss started now shares the running call. QueueJS starts a second call. The test "past the timeout a new reader starts another fetch" is replaced by "past the timeout a new reader shares the running fetch; the answer settles all, a falsy one is not stored" (cache.test.ts). The JSDoc of getCacheableObject records it. The documenter adds it to the CHANGELOG (log.md, Q13).

Condition of Q13 (kept, with a test):
- A reader after a logout never joins a pending miss of the session before. `clearMemoryCache` (logout and test page reload) raises the session epoch, which is part of every key, so the next reader starts its own call, as with the old `clearMemoryCache` that emptied the miss queues. The running miss settles its readers. Test: "clearMemoryCache (logout): a reader after it never joins a miss of the session before; …" (cache.test.ts).

Small differences, not visible in the app (no parity effect):
- The answer of a miss that settles after a logout is no longer served to the next session. The old code stored it in the emptied cache. Now the entry is removed when it settles (ADR-10: no data of the user stays). The same applies to a bulk call that is running at logout. auth.test.ts checks that no cache query keeps data after signOut.
- At logout, a bulk batch that waits for its 10 ms window is dropped with its call, as before. Its readers do not settle, as before. Their queries stay fetching under the old epoch, with no data.
- A falsy answer is stored with TTL 0 (stale at once) instead of not being stored. The next reader calls again, as before. One path is not identical: an object put while a miss of the same key runs, then a falsy answer of that miss. The old code keeps the put object; the new code replaces it. Only the DirectoryUser key has both a reader and writers, and its answer is never falsy, so this path cannot happen.
- A hit answers one microtask later (`fetchQuery(...).then`). A miss still starts its call in the same task.

Removed code (its logic is in the domain entries now; no other user):
- `invalidateEverything` and `CACHE_TYPE` (with the unused types AllSubdivisions and MyCalendarEvents). One `clearMemoryCache` at logout does Cache_InvalidateEverything and the ADR-10 full clear (comment in auth.ts).
- `DirectoryCacheType` in Connect2_LegacyShared/lib/staticEntities.ts (a comment points to the domain entries), `cache_SignedImageURL_GetCacheKey` in UBTConnect_Utils/lib/actions.ts, `USER_INFO_TTL_SECONDS` in userInfo.ts, and the TTL and bulk constants and `signedImageCacheType` of the five screen api.ts files.

Other:
- 58 code files, not about 46: the six domain barrels (`index.ts`, one export line each), `api/image/index.ts` and `staticEntities.ts` are extra. All are small changes.
- `CacheControl` looks up with the key only (`cacheQueryKey`). Its TimeToLiveSeconds and Timeout inputs stay unused, as its README says.
- I used `git rm`, `git mv` and `git add -N`. The index has the staged delete, the rename and four intent-to-add entries. I made no commit.
- exemptions.json is `[]`. The two changed paths need a pending miss that is older than 10 s, or a logout during a miss. No capture has them, so the `call` check does not change.

## Questions for the user
none
