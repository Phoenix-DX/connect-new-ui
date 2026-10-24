# SupperMeeting_DetailsBlock

OutSystems: `UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock` · pack
`migration/blocks/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.md`.

The view has props only. Its files import no `api/`, `platform/`, `containers/` or `pages/` (rule 4). The data, the
navigation and Directory_EntityDetailsActions are in the container `containers/SupperMeetingDetails` (README there),
which SupperMeeting_Details and SupperMeeting_Carousel render.

| Input / data                   | Prop                     | Note                                                  |
| ------------------------------ | ------------------------ | ----------------------------------------------------- |
| GetSubdivision.IsDataFetched   | `isDataFetched`          | false: the detail card and the actions are skeletons  |
| GetSubdivision.Subdivision     | `subdivision`            | GetSkeleton_UI_SubdivisionDetails until it answers    |
| GetSubdivisionHouseholds       | `households`             | `isDataFetched`, `isError`, `list` of the child block |
| Placeholder_CarouselTag        | `placeholderCarouselTag` | inside the card's image tag                           |
| Directory_EntityDetailsActions | `entityActions`          | slot: the container renders EntityDetailsActions      |
| Event_OnClick_Household        | `onHouseholdClick`       | of the household list: the id and every listed id     |

Children: SubLayout_DirectoryDetailScreen, SkeletonSection, ImageCard_LazyLoading, UBT_LazyImage,
SupperMeeting_ImageCard_Content, SubLayout_DirectoryDetailScreen_Section, the `entityActions` slot,
SupperMeeting_HouseholdList (props only).

Ported actions: Get_LookupSection, GetSkeleton_UI_SubdivisionDetails (`lib/ubtConnect/actions.ts`).

## Captures

| Capture | Source                                                                                 | Story |
| ------- | -------------------------------------------------------------------------------------- | ----- |
| v1      | SupperMeeting_Carousel/default (pack: wrapper only)                                    | V1    |
| v2      | SupperMeeting_Details/default (card content, actions, household list, photo collapsed) | V2    |
| v3      | SupperMeeting_Details/loading (same collapsing)                                        | V3    |

The stories give the fictional supper meeting 1210 of the directory cast with its eleven households
(`src/mocks/fictional/directory.ts`) and a stand-in with the wrapper of Directory_EntityDetailsActions in the slot.

## Not captured / not settled

- The block declares Handler_Bookmark (empty) and Handler_Share (ShowComingSoonMessage). No widget calls them. The
  React component does not port them.
- The navigation branches are not captured; HouseholdDetails (flag off) follows the compiled code only.
