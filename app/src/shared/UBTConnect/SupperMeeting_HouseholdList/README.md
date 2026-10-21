# SupperMeeting_HouseholdList

OutSystems: `UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList` · pack
`migration/blocks/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.md`.

| Input            | Type                | Prop              | Default |
| ---------------- | ------------------- | ----------------- | ------- |
| In_SubdivisionId | Long Integer (text) | `inSubdivisionId` | `'0'`   |

- Event: `Event_OnClick_Household(HouseholdId, HouseholdIdList)` → `onEventOnClickHousehold`.
- Child: Household_GalleryCard_List.
- Data: DataActionGetSubdivisionHouseholds (`api.ts`; mock `mocks.ts`: never recorded, eleven fictional households).
- Ported actions: GetSkeletonList_UI_SubdivisionHousehold (`../lib/actions.ts`).

## Captures

| Capture | Source                                                            |
| ------- | ----------------------------------------------------------------- |
| v1      | SupperMeeting_Carousel/default (pack: wrapper only)               |
| v2      | SupperMeeting_Details/default (gallery list collapsed: own tests) |

## Not settled

- OnReady skips the skeleton and the refresh when the view is restored from cache (IsViewRestoredFromCache JS).
  Here the block refetches on mount (the view cache keeps no block state).
- A failed fetch: the OutSystems runtime also hands the exception to the block's handleError; only the `list-error`
  state is reproduced.
