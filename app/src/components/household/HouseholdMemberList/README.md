# HouseholdMemberList

OutSystems: `UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block` · pack
`migration/blocks/UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.md`.

| Input                  | Type                    | Prop         | Default |
| ---------------------- | ----------------------- | ------------ | ------- |
| isEnabled              | Boolean                 | `isEnabled`  | `true`  |
| In_HouseholdMembers    | UI_HouseholdMember List | `members`    | `[]`    |
| In_NonHouseholdMembers | UI_HouseholdMember List | `nonMembers` | `[]`    |
| In_IsLoading           | Boolean                 | `isLoading`  | `false` |

The pack lists three inputs; In_HouseholdMembers is in the compiled model (mvc.js:19-21).

Events: `Event_MemberOnClick(MemberId)` → `onMemberClick`, `Event_NonMemberOnClick` → `onNonMemberClick(member)`.
The member call-to-actions (Directory_EntityDetailsActions) come in as the render prop `renderMemberActions`.

Children: SkeletonSection, CustomContainer, SubLayout_DirectoryDetailScreen_Section, Member_ListItem,
NonMember_ListItem, UBT_LazyImage, Directory_EntityDetailsActions, Icon.

Ported action: GetSkeletonList_UI_HouseholdMembers. The married-child check (HasAccessToRegion, then the upgrade dialog
`showUpgradePopUp`) is in `useHouseholdDetails`: a component must not import `platform/`.

- Member row click: Handler_MemberOnClick(MemberRole <> Child ? Id : 0); chevron: Handler_MemberOnClick(Id). Nothing
  happens for 0 or when not enabled.
- Married child (row or chevron): raises `onNonMemberClick(member)`. The hook runs HasAccessToRegion(LocalityName,
  CountryName) → the child's household, else the upgrade dialog.

## Captures

| Capture | Source                                                                        |
| ------- | ----------------------------------------------------------------------------- |
| v1      | HouseholdCarousel/default (pack: wrapper only)                                |
| v2      | HouseholdDetails/default (5 members; avatars, actions and chevrons collapsed) |

## Not captured / not settled

- Married children rows (NonMember_ListItem) and the skeleton list: compiled view only (`it`).
- HouseholdDetails/loading (the loading state of HouseholdDetailsContainer) is a capture of the container, not of this list.
