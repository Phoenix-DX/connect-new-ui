# context-075: TST drift of 2026-11-05, waves 1 and 2 (live code wins)

## Result
- The live static survey of 2026-11-05 showed that TST changed 34 compiled files of 23 captured routes after the
  October captures ([`migration/knowledge/tst-drift-2026-11-05.md`](../knowledge/tst-drift-2026-11-05.md)). The route
  check now reads the live copies (`migration/runtime-sources/live/`) for those routes: 24 differences on 8 routes.
- Every difference went through the decision loop: Opus proposes, Fable checks each cited line, loop until
  correct. Log rows 18–24 of [`auto-decisions-2026-11-05.md`](../clarify/auto-decisions-2026-11-05.md). All built.
- Wave 1 (commit `17f14317`): Bookmarks card access gate, Member and Interchange destinations. Notes Interchange tag.
  Locality_Details input `TagsList_SelectedTag` with `SetTags`. ItemCard_WithNotes without the event row.
- Wave 1, more: the HouseholdDetails gallery call with the live empty-list box (`UnavailableImage`). Search Events and
  Schools lists, the item event row and Orbit avatar, three navigations. NotificationDetails rebuilt on the live
  screen with the shared `containers/MessageInstance` after-fetch. Notifications navigation params. TagContent,
  AvatarImage and HorizontalTagList live inputs. The live `UBTConnectBase.css` and `connect-icon` font.
- Wave 2: the bookmark toggle moved to `UBTConnect_Utils` (contract from the live module controllers,
  `extra-actions.json`). The local C2 bookmark store reads by category. AssembleDetail attendee rows use the C2
  toggle. EntityDetailsActions got the `PendingOpen` reopen. `BookmarkCategory.OneSchoolGlobal = 'OneSchool Global'`.
- HostSurvey parity flake: a race of the port. The app-start sync wrote the tables one by one and the hook waited for
  one. Fixed in `orbitStaticEntities.ts` (row 18, commit `391be660`).
- Tool fixes in `route-actions/tools/`: the refresh function of a data action owns its OnAfterFetch call (call
  graph), aggregates in the fetch modes, the `noCaller` rule. They surfaced the bookmark module move.
- Wave 3: the Household_Relations Bookmark button (live: enabled, secondary/primary by the C2 state; row 25) with narrow parity rules for the October baseline.
- Gates: `npm run ci` green (732 files, 4822 tests after wave 3, build); parity sweep 51 of 51 clean with the drift rules (NotificationDetails, Household_Relations).

## Decisions (who, date)
- User 2026-11-05: Opus proposes first, Fable reviews and asks, loop until correct; never ask the user; full tests
  and thorough parity before a commit.
- Fable 2026-11-05 (rows 19–24): build 1:1 from the live compiled code. A captured state that the live code made
  obsolete gets narrow parity rules with reason and evidence (NotificationDetails `TST-DRIFT-2026-11-05-*`). The
  gallery call gets an `ignoreCalls` exemption. The Search pills and layout wait for a capture.
- Open for the user (row 23): the JSON key names of the contract. The runtime serialises with `nameForJson`, the
  contract keys with the attribute name; 245 structures differ. Options: (a) the generator emits the wire names,
  (b) a BFF translates, (c) defer to the backend phase.

## Facts learned (evidence)
- A static GET of `/UBTConnect/moduleservices/moduleinfo` gives the URL versions and the static-entity values;
  model and controller files need the version query. `migration/knowledge/runtime-sources.md`.
- The OutSystems runtime serialises records with the third argument of `this.attr` (`nameForJson`;
  `OutSystems.js`, `ServerDataConverter`); recorded fixtures confirm it ("Name" for `HouseholdName`).
- `contract_gen.py` reads `migration/runtime-sources/*.js` (not `live/`): the module files at the top level are
  the live ones since wave 2.

## Files changed
- `app/src`: api (bookmark, household, search, notification, message); containers (HouseholdDetails,
  MessageInstance, EntityDetailsActions); pages (Bookmarks, Notes, Locality_Details, Search, Notifications,
  NotificationDetails, MessageDetail, AssembleDetail). Components: ui/TagContent, AvatarImage, HorizontalTagList,
  UnavailableImage, search, household, note. Also lib, platform/storage, mocks, `app/public/UBTConnect` (css,
  fonts), `app/src/api/openapi.yaml`, `schema.d.ts`, the baselines (`.knip-known-unused.json`,
  `.dependency-cruiser-known-violations.json`).
- `migration/`: `runtime-sources/` (live module files), `contract/` (sources, extra-actions, README),
  `parity-exemptions.json`, `clarify/auto-decisions-2026-11-05.md`, `knowledge/` (drift, runtime-sources),
  `metrics/ledger.csv`; `route-actions/` (tools, config, routes); the skill `route-actions`.

## Open issues
- Re-capture needed (user accounts): NotificationDetails (3 states), Search (pills and layout), the 17 routes
  without a capture. The drift report lists the rest: legacy bookmark store dead on live, Household_Relations C2
  read, `recentSearch.ts` categories.
- `css_sets.py` cannot add a compiled-only sheet (`Unavailable_Image.css`) to a captured route; no visual effect today.

## Next
- The user's decision on row 23 (JSON key names). Re-captures: NotificationDetails, Household_Relations, Search pills and layout, the 17 routes without a capture. The legacy bookmark store decision.
