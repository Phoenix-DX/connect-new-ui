# Reader notes: zDEV_Directory_CommunityBusinessBlocks (2026-10-27)

## TST presence check
- Pack elements absent on TST: none found. All four files exist in TST: CommunityBusinessDetails,
  CommunityBusinessDetails_CoomingSoon, CommunityBusinessCard_Content_Block, ComunityBusinessDetails_Block
  (`UBTConnect.zDEV_Directory_CommunityBusinessBlocks.*.mvc.js`).
- TST elements absent in the pack: none found for CoomingSoon (placeholders Header_Title, Header_Right,
  Header_Input_Icon, headerContent are Empty on TST, the pack omits them: consistent).
- TST confirms for CoomingSoon: controller has no data action, no client action, no server action, all lifecycle
  handlers null, checkPermissions = checkRegistered. Icon ellipsis-h Twotimes style icon; text "Comming soon".
- TST Locality_LocalityContacts (`UBTConnect.Directory_Locality.Locality_LocalityContacts.mvc.js:257`) renders
  CommunityBusinessCard_Content_Block per list item. So the Card block is live on TST (flow Directory_Locality).
- TST ComunityBusinessDetails_Block: `pack` says used by nothing in UBTConnect; this reader did not search TST
  for other users of it beyond the PWA file list (`UBTConnect.pwaServiceWorker.js:1146` only lists the script).
- Not checked in TST: UBTOne_User role (pack only), mandatory flag of In_CommunityBusinessId.

## Pack gaps
- `data.md` lists 10 service actions and 9 client variables for the whole flow (transitive through shared blocks);
  none is called by the two screens or two own blocks directly except Get_LocalityCommunityBusinessDetails (own block).
- Get_LocalityCommunityBusinessDetails: pack types CommunityBusinessId as Text; block input is Long Integer.
- `strings.md` has no string of the flow's own screens or blocks except the text widget "Comming soon".
- The `kb.md` index was not opened (judge reads it). `references.md` names no TST file for StaticInput; its default
  prompt text was not checked in TST (the React default is "Search for households. entities, news").
- Code in the pack widget tree for the Card block omits the event wiring to the parent; TST controller lines 381-387
  define Event_OnClick_Call/Email/Bookmark actions (bodies not read).

## Mock files per screen
- CommunityBusinessDetails_CoomingSoon: none (no `pages/<Screen>/mocks.ts`; screen makes no call).
- Related fixture: `app/src/mocks/fixtures/UBTConnect/DataActionGetOneSchoolGlobalDetails/01-5a0e2715.json`
  (Get_OneSchoolGlobalDetails data, not used by the two screens).
- Mock handlers found: AddBookmark2 only (`mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`).
  No handler for the other 9 service actions of data.md.

## Board line of the screen that is not built
`migration/board.md:54`: `| CommunityBusinessDetails | /UBTConnect/CommunityBusinessDetails |  | 64 |  | skip | V7 · skip:dead · zDEV flow; live links open CoomingSoon; revisit if TST links the real screen (user, 2026-10-14) | - |  |`
(CoomingSoon: `board.md:26`, build, D2(a), built.)

## Other facts for the judge
- No React block or page for CommunityBusinessCard_Content_Block, ComunityBusinessDetails_Block, or the page
  Locality_LocalityContacts (`ls app/src/pages | grep -i locality` gives Locality_Details only; board grep for
  `^| Locality_LocalityContacts ` gave no row).
- No React caller of the CoomingSoon route was found by `grep CoomingSoon app/src`; change requests
  CR-MyBookmarks-1.md:42 and CR-BookmarksByGroup-1.md:42 say the bookmark lists pass In_CommunityBusinessId.
- `routes.generated.ts:73` lists the unbuilt screen route with wave null.
