# Card_MemberInformation

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.md` · source
`migration/screens/MilestoneDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc.js`

| Input                     | Type              | Prop                       | Default |
| ------------------------- | ----------------- | -------------------------- | ------- |
| In_MemberInformation      | MemberInformation | `inMemberInformation`      | `{}`    |
| In_DisplayDot             | Boolean           | `inDisplayDot`             | `false` |
| Is_ShowPersonalInfo       | Boolean           | `isShowPersonalInfo`       | `true`  |
| In_HideMemberInfoLocation | Boolean           | `inHideMemberInfoLocation` | `false` |
| In_HouseholderId          | Long Integer      | `inHouseholderId`          | `''`    |
| In_HouseholdLocality      | Text              | `inHouseholdLocality`      | `''`    |
| In_HouseholdCountryCode   | Text              | `inHouseholdCountryCode`   | `''`    |
| In_ShowAdminTag           | Boolean           | `inShowAdminTag`           | `false` |

(The pack table omits In_MemberInformation; it is a record input, `Connect2_OrbitMobile_IS.MemberInformationRec`, in `../lib/structures.ts`.)

Events: `ClickedMember(HouseholderId)` → `onClickedMember` (photo and text container). Event `ClickedPhone(Phone, Name,
LocalityId, MemberId, PhotoURL)` → `onClickedPhone` (phone icon). Both are raised to the parent, which handles them (the block's own event declarations at `:631-636` only resolve
when no parent binds them; every compiled parent binds ClickedMember, audit A1).
Placeholders: `Placeholder_OrbitAdmin` → `placeholderOrbitAdmin` (class `member-info-admin-tag`, only with
In_ShowAdminTag), `Placeholder_Info` → `placeholderInfo`. Extra prop `getSignedImageURL` (not an input): the server
call of OnReady.

Logic (`../lib/actions.ts`):

- OnReady `:562-620` → `cardMemberInformationOnReady`. Photo: signed URL of the member, else Images.User. The mock
  photo URL stays as it is.
- Name `:376`, location `:416`, age text style `:477`.
- Dot: In_DisplayDot and (IsHouseholder or IsSpouse). Age shown when Age > 0; phone icon when Phone is not "".
- The OutSystems Icon widget adds no `cursor: pointer` for its click (captured), the two Containers do.

## Captured variants (3 tested)

| Capture | Source                  | What it shows                       |
| ------- | ----------------------- | ----------------------------------- |
| v1      | MilestoneDetail/default | householder with dot, age and phone |
| v2      | MilestoneDetail/default | member without phone, no dot        |
| v3      | MilestoneDetail/default | member with phone, no dot (age 20)  |

The captures write the name span as `<!-- 1 nodes below depth 7 -->` (capture depth limit); it is replaced by a masked
`•••••` so the comparison skips that text. Everything else is verbatim.

## Placeholders / pending

`GetCacheableSignedImageURL` (Connect2_LegacyShared.controller.js:3692) is not built (LegacyShared belongs to another
agent): the default `getSignedImageURL` knows no photo, so the image shows Images.User. A screen passes the real action.

## Not captured / not settled

- In_ShowAdminTag True (admin tag, indented age), In_HideMemberInfoLocation True, In_HouseholdLocality/CountryCode set,
  Age >= 100 style, ClickedPhone arguments: built from the compiled view, tested with `it`.
- ClickedMember / ClickedPhone are empty in the block: what the screens do on them is their own logic (not settled here).
- Photo: the captured `src` is masked; real signed URL / mock photo URL behaviour comes from the compiled code only.
