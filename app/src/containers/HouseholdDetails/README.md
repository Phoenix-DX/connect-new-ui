# HouseholdDetailsContainer

`UBTConnect.Directory_Household.HouseholdDetails_Block`: the household details card, actions and members. Used by
HouseholdDetailsPage, EntitiesCarousel_HouseholdDetails (HouseholdCarousel), Profile_HouseholdPreview (Profile) and
Locality_Details.

## Structure (P2-3)

| File                                                                 | Role                                                                                                      |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `pages/HouseholdDetails/hooks/useHouseholdDetails.ts`                | The flows (OnInitialize, OnParametersChanged, refreshes) with `useReducer`.                               |
| `pages/HouseholdDetails/hooks/householdDetailsState.ts`              | The state record, the reducer and the client actions (tested in `householdDetailsState.test.ts`).         |
| `containers/HouseholdDetails/HouseholdDetailsContainer.tsx`          | Takes `source` (`server` or `preview`) and `flags`; fills the slots; renders the view.                    |
| `components/household/HouseholdDetailsView/HouseholdDetailsView.tsx` | The card, props only. Uses HouseholdTags, HouseholdAddress, HouseholdMemberList, HouseholdTimelinePhotos. |
| `pages/HouseholdDetails/mocks.ts`, `mockData.ts`                     | The two MSW handlers and the fictional records.                                                           |

The data actions come from `src/api/household/`. The old `api.ts`, `logic.ts`, `types.ts` and block `mocks.ts` no
longer exist. The callers read the flags with `useHouseholdDetailsFlags()` and pass `flags`. The container gives
`entityActions`, `renderMemberActions` and `shareSheet` to the view as slots. Compiled source:
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js`
(view :241-1886, controller :1887-3058); line numbers in the code are from this file.

## Inputs → props

| Input                               | Prop                                              | Default        |
| ----------------------------------- | ------------------------------------------------- | -------------- |
| HouseholdId (Long Integer)          | `source.householdId`                              | required       |
| isEnabled                           | `isEnabled`                                       | `true`         |
| Preview (HouseholdPreviewStructure) | `source.preview` (`kind: 'preview'`)              | default record |
| In_ShowKebabMenu                    | `showKebabMenu`                                   | `false`        |
| In_CheckVisibility                  | `checkVisibility` (only sent to the data actions) | `false`        |
| In_IsSkeletonOnly                   | `isSkeletonOnly`                                  | `false`        |
| In_HideActions                      | `hideActions`                                     | `false`        |

Placeholder `Placeholder_CarouselTag` → `carouselTag`. Event `HouseholdDataFetched(LocalityName, CountryName,
DeceasedOrAncestry_View)` → `onHouseholdDataFetched`, raised after every GetHousehold.

## Data

- `DataActionGetHousehold` / `DataActionGetHousehold_Coordinates` (domain `src/api/household/`), on demand only: OnReady (unless restored
  from the view cache with the same age visibility) and OnParametersChanged (preview used, or In_IsSkeletonOnly turned
  False). Sent: the block inputs and `UserAge_Visibility`.
- Never recorded (households, members and coordinates are person data): `pages/HouseholdDetails/mocks.ts` answers fictional records from
  `mockData.ts` with the captured counts (HouseholdDetails: 5 members, no married children; Profile: 3), word lengths of
  the masked texts, every wire field present.
- Client actions: `householdDetailsState.ts` (tested); `getSkeleton_UI_HouseholdDetails` (UBTConnect lib),
  `getHasPhotobookAccess` (UBTConnect_Utils lib, flag `mobilePhotobook`).
- Bookmarks: the block only keeps `LocalIsBookmarked` from Directory_EntityDetailsActions' `OnChange_Bookmark`
  (card class `ubt-image-card__bookmarked`); the bookmark toggle stays in that block.

## Captures

| File      | Source                                                                                      | Story |
| --------- | ------------------------------------------------------------------------------------------- | ----- |
| `v1.html` | pack variant 1, HouseholdCarousel/default (wrapper only)                                    | V1    |
| `v2.html` | pack variant 2, Profile/default (wrapper and share sheet)                                   | V2    |
| `v3.html` | `migration/screens/HouseholdDetails/analysis/dom/default.html` (fetched, About, bookmarked) | V3    |
| `v4.html` | `migration/screens/HouseholdDetails/analysis/dom/loading.html` (before OnReady ends)        | V4    |
| `v5.html` | `migration/screens/Profile/analysis/dom/default.html` (isEnabled False, kebab menu)         | V5    |

In v3-v5 the block pack tool collapses the built children UBT_LazyImage, AddressPopup_Wrapper, Directory_EntityDetailsActions,
HouseholdMemberList and ShareSheet (`<!-- nested block -->`). Their own tests cover them.

## Not captured (rendered from the compiled code, tested in `HouseholdDetailsContainer.test.tsx` and `HouseholdDetailsView.test.tsx`)

- Photos tab:
  - "Household gallery" title, HouseholdTimelinePhotos with the shared HouseholdDetails_TimelinePhoto_List (TEMP_TimelineImages: the block never fills it, so the
    list is empty) and Coming soon.
  - The Photobook link, or no call-to-action without photobook access.
- Deceased / ancestry / hidden household (photo without id, no address, `link-disabled-view` links, Photos tag
  disabled).
- The open share sheet.
- The preview data of Profile_HouseholdPreview.

## Not settled

- Fictional coordinates (a city centre, UseCoordinates True): no capture shows the map of AddressPopup_Wrapper.
- View cache: one cached record per household (`Directory_Household.HouseholdDetails_Block#<HouseholdId>`), because a
  carousel shows several instances on one screen.
- A failed data action goes to the flow handler (`raiseToFlowHandler`); the skeleton stays.
- `carouselTag` for the placeholder (shared-code guide), whereas SupperMeeting_DetailsBlock named its own
  `placeholderCarouselTag`.
