# Household_GalleryCard_List

OutSystems: `UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List` · pack
`migration/blocks/UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.md`.

| Input                           | Type                         | Prop                                        | Default |
| ------------------------------- | ---------------------------- | ------------------------------------------- | ------- |
| In_Household_GalleryCard_List   | UI_SubdivisionHousehold List | `inHouseholdGalleryCardList`                | `[]`    |
| In_IsLoading                    | Boolean                      | `inIsLoading`                               | `false` |
| (data fetch status of the list) | DataFetchStatus              | `inHouseholdGalleryCardListDataFetchStatus` | Fetched |

The pack lists only In_IsLoading. In_Household_GalleryCard_List is in the compiled model (mvc.js:16-18).

Local ItemsPerRow = 2.

Event: `Event_OnClick_Household_GalleryCard(HouseholdId)` → `onEventOnClickHouseholdGalleryCard`.

Children: SkeletonSection, SubLayout_DirectoryDetailScreen_Section, Directory_EmptyState, Gallery, Household_GalleryCard.

Ported action: Get_LookupSection (`../lib/actions.ts`).

## Captures

| Capture | Source                                                                         |
| ------- | ------------------------------------------------------------------------------ |
| v1      | SupperMeeting_Carousel/default (pack: wrapper only)                            |
| v2      | SupperMeeting_Details/default (11 households; cards collapsed)                 |
| v3      | SupperMeeting_Details/loading (4 skeleton rows, `list-error`; cards collapsed) |

## Not captured / not settled

- Empty list (Directory_EmptyState branch): compiled view only (`it`).
- `inHouseholdGalleryCardListDataFetchStatus` is the OutSystems data fetch status the parent passes with the list input
  (`_in_Household_GalleryCard_ListInDataFetchStatus`, mvc.js:267 → List `list-loading` / `list-error`).
