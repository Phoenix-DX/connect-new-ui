# Recorded decisions and facts that name the elements of UI flow Directory_Household_Blocks

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## change requests

- `migration/change-requests/CR-HouseholdDetails-1.md:6` (HouseholdDetails_Members_Block): (`getSkeleton_UI_HouseholdMember`) or `HouseholdDetails_Members_Block`, `src/components/OSList` +
- `migration/change-requests/CR-HouseholdDetails-1.md:7` (HouseholdDetails_Members_Block): `HouseholdDetails_Members_Block` + `HouseholdDetails_Block`, the ShareSheet popup (`src/shared/UBTConnect_Utils/ShareSheet`)
- `migration/change-requests/CR-HouseholdDetails-1.md:26` (HouseholdDetails_Members_Block): (`HouseholdDetails_Members_Block.tsx:126,178`), but the structure default of HasNavigation is True
- `migration/change-requests/CR-HouseholdDetails-1.md:60` (HouseholdDetails_Members_Block): - §3 `components/OSList`: `sourceDataFetchStatus` (+ `DataFetchStatus` 0/1/2, OutSystems.js Model.DataFetchStatus): ` list-loading` / ` list-error` before `OSFillParent`, storeListLength skips Fetching (OutSystemsReactWidgets.js pretty :1263-1267, :1325-1334). HouseholdDetails_Members_Block takes `i
- `migration/change-requests/CR-Profile-1.md:13` (HouseholdDetails_Members_Block): CTAs (HouseholdDetails_Members_Block, `HasCTAs`).
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:16` (Household_GalleryCard): (`migration/screens/SupperMeeting_Carousel/analysis/dom/default.html`: `Household_GalleryCard` under
- `migration/change-requests/CR-SupperMeeting_Details-1.md:6` (Household_GalleryCard_List): `src/shared/UBTConnect/Household_GalleryCard_List/mockData.ts` / `SupperMeeting_HouseholdList/mocks.ts`;
- `migration/change-requests/CR-SupperMeeting_Details-1.md:41` (Household_GalleryCard_List): household "Child One, Child Two" (`Household_GalleryCard_List/mockData.ts:9`). Expected: ChildrenNames `""` at those
- `migration/change-requests/CR-SupperMeeting_Carousel-1.md:6` (Household_GalleryCard_List): `src/shared/UBTConnect/Household_GalleryCard_List/mockData.ts` — foundation owner
