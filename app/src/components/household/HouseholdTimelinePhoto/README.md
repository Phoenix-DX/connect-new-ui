# HouseholdDetails_TimelinePhoto

OutSystems: `UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto` · pack
`migration/blocks/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.md` · source
`migration/blocks/sources/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc.js` (p: below).

| Input            | Type                     | Prop              | Default |
| ---------------- | ------------------------ | ----------------- | ------- |
| In_BackgroundURL | Text                     | `inBackgroundURL` | `''`    |
| Label            | Text                     | `label`           | `''`    |
| Date             | DateTime (text)          | `date`            | `''`    |
| In_CardTypeId    | Text (UBT_ImageCardType) | `inCardTypeId`    | `''`    |
| IsSelected       | Boolean                  | `isSelected`      | `false` |

The pack lists no inputs; the five above are from the compiled model (p:12-45). Local MainContainerClass =
"ubt-household-image-card".

Event: `Selected(Date)` → `onSelected(date)` (CustomContainer Clicked, p:250-260).
Placeholders: none. Children: CustomContainer, UBT_LazyImage.

## Captures

None: no captured screen loaded the block (TimelinePhoto_List renders it, and no capture shows a timeline). The story
`CompiledView` renders the compiled view; `HouseholdDetails_TimelinePhoto.test.tsx` checks it against the compiled code.

## Not captured / not settled

- The whole block. The markup comes from the compiled view only. The label is an OutSystems Container with an
  Expression. It renders as `div[data-container] > span[data-expression]`, like the other captured Containers.
- Date: the OutSystems DateTime default (null date) is not reproduced; when Date is missing, the component returns `''`.
- EntityId: `NullIdentifier()` as text, sent as `"0"` (UBT_LazyImage treats "" and "0" as no entity).
