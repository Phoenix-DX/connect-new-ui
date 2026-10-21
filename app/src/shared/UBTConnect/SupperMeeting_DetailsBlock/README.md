# SupperMeeting_DetailsBlock

OutSystems: `UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock` · pack
`migration/blocks/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.md`.

| Input           | Type                | Prop             | Default |
| --------------- | ------------------- | ---------------- | ------- |
| In_SubdivsionId | Long Integer (text) | `inSubdivsionId` | `'0'`   |

Placeholder: `Placeholder_CarouselTag` → `placeholderCarouselTag`. Events: none.

Children: SubLayout_DirectoryDetailScreen, SkeletonSection, ImageCard_LazyLoading, UBT_LazyImage,
SupperMeeting_ImageCard_Content, SubLayout_DirectoryDetailScreen_Section, Directory_EntityDetailsActions,
SupperMeeting_HouseholdList.

Data: DataActionGetSubdivision (`api.ts`; mock `mocks.ts`: recorded fixture, any id).

Ported actions: Get_LookupSection, GetSkeleton_UI_SubdivisionDetails (`../lib/actions.ts`).

Navigation (OnClick_NavigateToHousehold) calls GetHasCarouselEnabled (flag C2EnableCarousel):

- When GetHasCarouselEnabled is true: SetPreloadObject(CarouselHouseholdItem of every listed household) and
  HouseholdCarousel(In_StartingHouseholdId).
- Otherwise: HouseholdDetails(HouseholdId).

## Captures

| Capture | Source                                                                                 |
| ------- | -------------------------------------------------------------------------------------- |
| v1      | SupperMeeting_Carousel/default (pack: wrapper only)                                    |
| v2      | SupperMeeting_Details/default (card content, actions, household list, photo collapsed) |
| v3      | SupperMeeting_Details/loading (same collapsing)                                        |

## Not captured / not settled

- The block declares Handler_Bookmark (empty) and Handler_Share (ShowComingSoonMessage). No widget calls them. The React component does not port them.
- When the view is restored from cache or history, ScreenEvent_OnReady skips the skeleton and the refresh. Here the
  block refetches on mount.
- The navigation branches are not captured; HouseholdDetails (flag off) follows the compiled code only.
