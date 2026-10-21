# HouseholdDetails_Members_Block

OutSystems: `UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block` · pack
`migration/blocks/UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.md`.

| Input                  | Type                    | Prop                    | Default |
| ---------------------- | ----------------------- | ----------------------- | ------- |
| isEnabled              | Boolean                 | `isEnabled`             | `true`  |
| In_HouseholdMembers    | UI_HouseholdMember List | `inHouseholdMembers`    | `[]`    |
| In_NonHouseholdMembers | UI_HouseholdMember List | `inNonHouseholdMembers` | `[]`    |
| In_IsLoading           | Boolean                 | `inIsLoading`           | `false` |

The pack lists three inputs; In_HouseholdMembers is in the compiled model (mvc.js:19-21).

Events: `Event_MemberOnClick(MemberId)` → `onEventMemberOnClick`, `Event_NonMemberOnClick(HouseholdId)` →
`onEventNonMemberOnClick`.

Children: SkeletonSection, CustomContainer, SubLayout_DirectoryDetailScreen_Section, Member_ListItem,
NonMember_ListItem, UBT_LazyImage, Directory_EntityDetailsActions, Icon.

Ported actions: GetSkeletonList_UI_HouseholdMembers, HasAccessToRegion, IsStringEquals (`../lib/actions.ts`). Upgrade
dialog: shell `showUpgradePopUp` (App_Subscription_ShowUpgradePopUp).

- Member row click: Handler_MemberOnClick(MemberRole <> Child ? Id : 0); chevron: Handler_MemberOnClick(Id). Nothing
  happens for 0 or when not enabled.
- Married child (row or chevron): HasAccessToRegion(LocalityName, CountryName) → Event_NonMemberOnClick(HouseholdId),
  else the upgrade dialog.

## Captures

| Capture | Source                                                                        |
| ------- | ----------------------------------------------------------------------------- |
| v1      | HouseholdCarousel/default (pack: wrapper only)                                |
| v2      | HouseholdDetails/default (5 members; avatars, actions and chevrons collapsed) |

## Not captured / not settled

- Married children rows (NonMember_ListItem) and the skeleton list: compiled view only (`it`).
- HouseholdDetails/loading (the parent HouseholdDetails_Block loading) is not a variant yet: it needs that block
  (not built in this batch).
