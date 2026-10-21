# CR-SupperMeeting_Details-1: UBT_LazyImage parameter change + shared mocks for the supper meeting capture

- Status: applied
- Raised by: SupperMeeting_Details, 2026-10-15
- Blocks: `src/shared/UBTConnect_Utils/UBT_LazyImage/UBT_LazyImage.tsx`;
  `src/shared/UBTConnect/Household_GalleryCard_List/mockData.ts` / `SupperMeeting_HouseholdList/mocks.ts`;
  `src/shared/UBTConnect/Directory_EntityDetailsActions/mocks.ts` (FetchContactDetails) — foundation owner
- Other routes using them: every route with UBT_LazyImage whose entity id arrives after the first render (data-fed
  cards: SupperMeeting_Carousel, HouseholdDetails, Locality_Details…); SupperMeeting_Carousel (same household list)
- Related question: SupperMeeting_Details decision question (`route.py questions SupperMeeting_Details`)
- Related: CR-HouseholdDetails-1 §1 (actions menu skeleton) and §4 (`aria-hidden` on `#reactContainer`) also show on
  this route; for §4 the same Popup widget also toggles `html.popup-disable-scroll`
  (`migration/runtime-sources/OutSystemsReactWidgets.js`, Popup `disableScroll` in `UNSAFE_componentWillMount` /
  `UNSAFE_componentWillUpdate` / `componentWillUnmount`): `parity/loading.json` `html: missing .popup-disable-scroll`.

## 1. UBT_LazyImage does not run OnReady again when EntityId changes
- Evidence: `migration/screens/SupperMeeting_Details/parity/default.json`: the subdivision photo shows the no-photo
  fallback (extra `BasePatterns.CustomContainer`, `.hidden` + `max-height: 0` on `b3-b4-b2-b2-Content` / `img`), and
  `ActionGetSignedImagesInBulk called 1× in build, 2× in capture`; TST asks a second time right after
  DataActionGetSubdivision (`analysis/calls.md` #5 at 5020 ms → #8 at 5331 ms) and shows the photo
  (`dom/default.html:63`, `data-rendered-size="390x260"`).
- Cause: SupperMeeting_DetailsBlock first renders UBT_LazyImage with the skeleton card (no SubdivisionId), then with
  `card.SubdivisionId` (`SupperMeeting_DetailsBlock.tsx:87-92`). The original OnParametersChanged
  (`migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js:812-845`):
  if `EntityId <> LocalEntityId` → `LocalImageURL = ""`, `isFetched = False`, OnInitialize; then **always OnReady**
  (signed URL through Cache_SignedImageURL_Get, :719-785). The port re-runs only OnInitialize (`UBT_LazyImage.tsx:37-44`);
  `needsSignedUrl` / `signed` are decided once from the first inputs and OnReady runs once (`:49-63`).
- Expected change: on an input change run OnParametersChanged as compiled (reset URL and isFetched when the entity
  changed, then OnReady with the new inputs).

## 2. Shared mock data does not have the captured shapes
The route is `/UBTConnect/SupperMeeting_Details?In_SubdivsionId=1210` (`analysis/states.json`).
1. **Supper meeting contact details**: TST shows 3 actions, Bookmark | Notes | Share (`parity/default.expected.png`;
   `dom/default.html`, actions menu `b3-b8-b2-b1-Content`), so FetchContactDetails for EntityType `Supper Meetings`
   had no phone or email. The mock answers numbers and an email, so the build shows Call and Email too
   (`parity/default.json`: 2 × `CircleButton_IconPrimary` extra in build, "Notes" → "Call", "Share" → "Email").
   Expected: empty Phone / MobilePhone / HomePhone / WorkPhone / Email for EntityType `Supper Meetings` (as
   CR-HouseholdDetails-2 §1 asks for `Household`).
2. **Household list**: TST shows an empty subtitle (ChildrenNames) for households 3, 6, 7 and 11 of 11
   (`dom/default.html`, `l1-89_2`, `_5`, `_6`, `_10` `image-card-content__subtitle` spans empty); the mock gives every
   household "Child One, Child Two" (`Household_GalleryCard_List/mockData.ts:9`). Expected: ChildrenNames `""` at those
   four positions (fictional values elsewhere unchanged).

## Workaround in the route until applied
None in `src/screens/SupperMeeting_Details` (all inside shared blocks and shared mocks; MSW handlers are global, so a
route handler would change the data of other routes too). The route composes the blocks unchanged.

## Resolution (foundation owner)
Foundation owner, 2026-10-15:
- §1 `UBT_LazyImage.tsx`: OnParametersChanged on any input change (reset + OnInitialize on a new EntityId, then OnReady with the new inputs), test added.
- §2.1 `Directory_EntityDetailsActions/mocks.ts`: Supper Meetings answer empty phones / email. §2.2 `SupperMeeting_HouseholdList/mocks.ts`: ChildrenNames "" for households 3, 6, 7, 11.
- Parity 2026-10-15: loading 0; default class 5 / style 4 / pseudo 2 / pixel 1; offline class 1 (not analysed).
