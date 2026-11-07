## Result
status: question
summary: The route mock now mirrors the TST capture of 2026-11-06: four month groups, guest lines 13/13/16/16 with 4/5/5/6 guest households, the sixth household shown as "+1", and published host names. Parity: loading and offline are clean. Default has 0 DOM differences, but 2 differences remain that need a user decision: the call `ActionGetAllApplicationEvents` x2, which TST sends from the image-error chain, and the guest-photo pixels (1.48%), which are now above the range of the existing pixel exemption.

## Files changed
app/src/pages/LDM_MyEvents_V2/mocks.ts
app/src/pages/LDM_MyEvents_V2/LDM_MyEvents_V2.test.tsx
migration/screens/LDM_MyEvents_V2/parity/default.json, default.build.png, default.diff.png, default.expected.png, loading.json, offline.json (written by route.py parity)

## Commands run
export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH (before every node command)
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/LDM_MyEvents_V2 → exit 0; 6 files, 74 tests passed
cd app && npx eslint src/pages/LDM_MyEvents_V2/mocks.ts src/pages/LDM_MyEvents_V2/LDM_MyEvents_V2.test.tsx → exit 0
npm --prefix app run arch → exit 0; no dependency violations (139 known violations ignored)
dev server check → HomeFeed 200; the vite cwd is /Users/khaitruong/Projects/connect-new/app
python3 tools/pipeline/route.py parity LDM_MyEvents_V2 --app http://localhost:5173 → exit 1:
  default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 1, call 1; pixels 1.48%, worst tile 44.8%; exempted DATA-GUEST-PHOTO-LDM-MYEVENTS-V2×19, CAPTURE-LINK-HREF-CURSOR-HOMEFEED×45, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED×1, ignoreSubtrees×1
    [pixel] hotspots 280,280; 280,520; 320,280; 240,520; 320,520 = the overlapping guest photo stacks only (default.diff.png)
    [call] calls:load: expected ActionGetAllApplicationEvents ×2, which the build does not send
  loading: all 0; pixels 0.00%
  offline: all 0; pixels 0.01%, worst tile 0.7%
python3 tools/pipeline/consistency_check.py --screen LDM_MyEvents_V2 → 2 problems, both NO-WIRE-IN-COMPONENTS in hooks/useLdmMyEvents.ts:189 and hooks/myTimelineFiltersState.ts:9. These files were not changed in this item, so the problems were there before.

## Deviations from the brief
- The new timeline data is local to the route, in `mocks.ts` (`TIMELINE_MEALS`, `timelineGroups`). It is built from the four newest meals of the shared `LDM_PAST_EVENTS`, which keeps their ids, hosts and dates. The shared `pastEventGroups` in `app/src/mocks/fictional/ldm.ts` is not changed, because that path is outside the allowed paths. As a result, the guest counts and host status on this route no longer match what LDM_EventDetail_V2 shows for the same meals (see question 3).
- The masked texts (event names, dates, host names, localities) keep the fictional values of the shared LDM world. Parity does not compare masked text, and their layout gives no difference.

## Questions for the user
1. Call `Connect2_LegacyShared/ActionGetAllApplicationEvents` ×2 at load (`analysis/calls.json`, ts 3585). It is new in the fresh capture; the old capture did not send it.
   - Evidence: `analysis/call-sites.md:24-25` shows the chain `HandleImageLoadError.applicationEvent_ImageError` → `zOnApplicationEvent_Wrapper` → `getAppEventName` → `cacheLocalApplicationEvents` → server `GetAllApplicationEvents`.
   - In `migration/sources/raw/Connect2_LegacyShared.controller@31dffc28.js` (around offset 150257), `GetAppEventName` calls `CacheLocalApplicationEvents` only when the local `LocalConnectApplicationEvents` table is empty. So the call happens only when a guest photo fails to load on a device with an empty event cache. The screen itself does not make it.
   - Precedent: EventDetail Q3 and the exemption CALL-IMAGE-ERROR-APPEVENTS-EVENTDETAIL.
   - Options:
     - a) A call exemption scoped to LDM_MyEvents_V2, like the EventDetail exemption. The detail regex must match the full sequence string printed in `parity/default.json`.
     - b) Build the shell image-error chain in `platform/`. This is outside the allowed paths, and the mock photos never fail, so the call would still not happen.
     - c) Re-capture with a warm cache.
   - Recommendation: a.
2. Pixel exemption DATA-GUEST-PHOTO-LDM-MYEVENTS-V2-PIXEL (`migration/parity-exemptions.json:1319-1329`). Its `detailRegex` `^0\.\d\d% pixels differ` accepts less than 1%. The capture now shows 19 guest photos (14 in the viewport, before 8), so the differing photo area is 1.48%. `default.diff.png` shows differences only at the photo stacks; all other areas are clean.
   - Options:
     - a) Widen the regex to `^[01]\.\d\d% pixels differ`.
     - b) Keep it, and accept a failing pixel check.
   - Recommendation: a.
3. Consistency of the shared LDM world. This route now shows meal 70415 (and the others) with the captured guest counts and a published host. LDM_EventDetail_V2 takes its data for the same meals from `app/src/mocks/fictional/ldm.ts`, where meal 70415 has 4 guests and "Host Allocation Pending" (its own capture).
   - Options:
     - a) Keep the data local to this route (done now).
     - b) Move the new guest lists into `ldm.ts`. That path is outside the allowed paths, and it would affect LDM_EventDetail_V2 and its tests.
   - Recommendation: a for this item, and b as a later item together with LDM_EventDetail_V2. Non-blocking.
