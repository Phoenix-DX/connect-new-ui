## Result
status: pass
summary: The page mocks now answer the capture plan's EventId with the in-person meeting of the fresh capture of 2026-11-07 (fictional values of the captured lengths), and the contact block now nests its three popup blocks as captured. The default and loading states have 0 differences, and both new calls are made in the captured order. The offline state keeps 4 differences on the header title: TST shows "Reading" from the preload of the AssembleEvents list, but the parity opens the route by URL, so React shows an empty title. Only the user can accept this (an exemption).

## Files changed
app/src/pages/AssembleDetail/mocks.ts
app/src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx
app/src/pages/AssembleDetail/AssembleDetail.test.tsx
migration/screens/AssembleDetail/parity/default.json, default.build.png, default.diff.png, loading.json, offline.json (written by route.py parity)

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/AssembleDetail src/mocks/handlers.test.ts → 10 files, 79 tests passed
cd app && npx vitest run src/containers/AssembleSummaryCard → passed
cd app && npx eslint src/pages/AssembleDetail/mocks.ts src/pages/AssembleDetail/AssembleDetail.test.tsx src/pages/AssembleDetail/components/AssembleEventDetail_Contact.tsx → exit 0 (prettier --check: clean)
npm --prefix app run arch → no dependency violations (139 known ignored)
python3 tools/pipeline/consistency_check.py --screen AssembleDetail → OK
python3 tools/pipeline/route.py parity AssembleDetail --app http://localhost:5173 (dev server cwd = this repo's app/, checked with lsof) →
- default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.01%, worst tile 0.7%
- loading: all 0; pixels 0.00%
- offline: text 1, layout 1, position 1, pixel 1 (all others 0); pixels 0.13%, worst tile 13.5%. What is left, all on `h1.header-title > div#b2-b1-b2-Title > div#b2-b1-Title > span`: text "Reading" → "", layout 65×21 → 0×21, position offset 110,2 → 142,2. The pixel hotspots are the title tile (160,0 and 200,0); 200,800 and 200,760 are small.

## Deviations from the brief
- I changed no code for the two calls. ActionGetMemberContactByCacheKey and ActionGetSignedPhotosInBulk were already where the compiled code puts them:
  - OnReady of AssembleEventDetail_ContactList → GetCacheableMemberContactList → GetMemberContactByCacheKey (hooks/useAssembleEventContactList.ts; AssembleEventDetail_ContactList.js:291).
  - LoadPhotoAsync of NC_Result_Item__Image → GetCacheableSignedPhotoURL → GetSignedPhotosInBulk (components/ui/ResultItemImage/useLoadPhotoAsync.ts).
  The old mock meeting was virtual and had no GMS contact, so neither call ran. The new meeting has one contact with an avatar to sign (Bucket, Path and Type set, no SignedURL), so both calls now run in the captured order. Call parity: 0. I did not edit the generated files analysis/calls.json and call-sites.md.
- I fixed a markup bug that the old capture could not show: FreeSubscriptionAlert, ContactPopup_ByPhone and ContactByMessage_Wrapper are now inside Div_EventContacts__Content__HostContact, as in the capture (default.html, contact block) and in AssembleEventDetail_Contact.mvc.js view :163-378. Before, they were siblings of it (6 structure differences).
- The shared file app/src/mocks/fictional/assemble.ts is unchanged. As in the Assemble_BrowseByCountry item, pages/AssembleDetail/mocks.ts does the override:
  - The capture plan's EventId (58dbb5ab-…) answers a page-local meeting. Every other EventId still answers the world's meeting.
  - A raw MSW handler answers GetMemberContactByCacheKey only for the new contact's CacheKey (880901). Every other key falls through to the Connect2_LegacyShared mock (same pattern as pages/Profile/mocks.ts). The handler keeps the error and empty scenarios.
- The values are fictional, with the word lengths of the masked capture:
  - "Reading" / "Reading - Saturday".
  - Hosted-at "Elm Street, Wexley, United Kingdom".
  - Time "7:30 PM on Saturday, 7 November 2026" (fixed date, so the text length does not depend on the day).
  - Counts 249 / 118 / 131.
  - Address "Elm Street  Wexley WX12 4HB" (double space, as captured).
  - Host locality "Wexley", interchange locality "Thornby".
  - Contact "Ruth Hadley", location "Wexley, United Kingdom", with a phone and an e-mail.
  - The hall photo uses the shared neutral placeholder.
- Known limit of the mock: the capture shows the halls collapsed, so their count is not known; the mock has 2 + 1. Their households come from the shared GetBulkSubdivisions_V2 mock, which does not know these hall ids, so an opened hall has no households (not captured).
- The virtual-meeting branch stays in the code and its tests. The world's online prayer meeting, opened by its world id, still renders it (new test "the online prayer meeting of the world: the virtual-meeting branch"). The capture-id test now checks the captured meeting: title, header, photo, address row, two localities, the contact, the call order and the nesting of the popup blocks.

## Questions for the user
1. AssembleDetail offline: what to do with the empty header title? (Decision; the exemption is yours to add.)
   Evidence: TST navigates from AssembleEvents (capture-plan via) and gets the title "Reading" from SetPreloadObject before the fetch. The fetch fails offline. The parity opens React by the plan's URL, with no preload and no AssembleEventTypeTile, so React shows "". The old capture masked the title ("••••••"), so only the pseudo difference showed; that one is already exempted by CAPTURE-2026-11-06-ASSEMBLEDETAIL-OFFLINE-EMPTY-TITLE. The new capture shows the text unmasked, so now text 1, layout 1, position 1 and pixel 1 (title tile 13.5%) are left.
   a) Extend CAPTURE-2026-11-06-ASSEMBLEDETAIL-OFFLINE-EMPTY-TITLE (offline state, same title span) to the kinds text, layout and position, and accept the pixel difference of the header tile. Same cause as the existing exemption. Recommended.
   b) Add `AssembleEventTypeTile=Reading` to the capture plan's AssembleDetail route, so React shows the title from the route input. This changes capture-plan.json and the parity URL, and TST's real URL has no such parameter.
   c) Make the parity runner set the list's preload before it opens the route (a tooling change in tools/pipeline).


## Master note (2026-11-07)
Q1 (offline title): the user decided a; CAPTURE-2026-11-06-ASSEMBLEDETAIL-OFFLINE-EMPTY-TITLE extended to text/layout/position and a -PIXEL rule added by the master; parity re-run by the master: default, loading, offline all 0. Status set to pass.
