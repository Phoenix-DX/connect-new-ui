# SupperMeeting_HouseholdList

OutSystems: `UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList` · pack
`migration/blocks/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.md`.

The block has props only (rule 4). Its input In_SubdivisionId and its data action DataActionGetSubdivisionHouseholds
are in the container `containers/SupperMeetingDetails` (`fetchSubdivisionHouseholds` of `api/locality`), which gives the
state to SupperMeeting_DetailsBlock, and that block gives it to this one.

| Data                                   | Prop            | Default |
| -------------------------------------- | --------------- | ------- |
| GetSubdivisionHouseholds.IsDataFetched | `isDataFetched` | `false` |
| GetSubdivisionHouseholds status Error  | `isError`       | `false` |
| GetSubdivisionHouseholds.List          | `households`    | `[]`    |

- Event: `Event_OnClick_Household(HouseholdId, HouseholdIdList)` → `onEventOnClickHousehold`: the clicked id and the
  HouseholdId of every row.
- Child: Household_GalleryCard_List (loading while not fetched; status Error, Fetched or Fetching).
- The skeleton rows (GetSkeletonList_UI_SubdivisionHousehold(4), `lib/ubtConnect/actions.ts`) are the initial
  `list` of the container.

## Captures

| Capture | Source                                                            | Story |
| ------- | ----------------------------------------------------------------- | ----- |
| v1      | SupperMeeting_Carousel/default (pack: wrapper only)               | V1    |
| v2      | SupperMeeting_Details/default (gallery list collapsed: own tests) | V2    |

The story `Failed` (status Error, the skeleton rows stay) is not captured; the test covers it.

## Not settled

- OnReady skips the skeleton and the refresh when the view is restored from cache (IsViewRestoredFromCache JS).
  Here the container refetches on mount and on a back navigation (README of the container).
- A failed fetch: the OutSystems runtime also hands the exception to the block's handleError; only the `list-error`
  state is reproduced.
