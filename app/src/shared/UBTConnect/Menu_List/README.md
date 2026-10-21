# Menu_List

OutSystems: `UBTConnect.App_Menu.Menu_List` · pack `migration/blocks/UBTConnect.App_Menu.Menu_List.md` · compiled source
`migration/screens/ContactUsMenu/analysis/sources/pretty/UBTConnect.App_Menu.Menu_List.mvc.js`

| Input          | Type              | Prop            | Default                                     |
| -------------- | ----------------- | --------------- | ------------------------------------------- |
| In_MenuSection | UI_MenuSectionRec | `inMenuSection` | record default (HasSeparator True, no rows) |

Event `OnClick_MenuOption(UI_ListMenuOption)` → `onOnClickMenuOption(option)` (row click; ContactUsMenu reads `.Id`).
Structures `UI_MenuSection`, `UI_ListMenuOption` in `../lib/structures.ts` (IconRight defaults to
`UBT_Icons2.ChevronRight`, record default in UBTConnect.model.js).

Rendered: SectionSeparator (HasSeparator) · CustomContainer (Neutral0, padding-x Base) · title CustomContainer (when
SectionTitle ≠ "") · List `list list-group` of rows: SkeletonSection(IsLoading) > clickable CustomContainer (padding s,
bottom border Neutral3) > Columns_Three (ExpandMiddle, gutter s, centred): Icon | Label (+ LabelDescription, Neutral6) |
SkeletonSection(IconRightLoading) > Switch (useSwitch) / IconText(IconRightText + IconRight) / Icon(IconRight).

## Captured variants (4 tested)

| Capture | Source                    | What it shows                                                |
| ------- | ------------------------- | ------------------------------------------------------------ |
| v1      | ContactUsMenu/default     | pack variant 1: separator + container (nested, not compared) |
| v2      | PINBiometricsMenu/default | pack variant 2: no separator                                 |
| v3      | ContactUsMenu/default     | full DOM of the first section: title, four rows, chevrons    |
| v4      | PINBiometricsMenu/default | full DOM: one row                                            |

## Not captured / not settled

- Switch row (`item-switch` + `switch`), IconRightText, LabelDescription, IsLoading / IconRightLoading: from the compiled
  view only (story `NotCaptured_RowStates`, tested with `it`). The Switch markup is the platform Switch widget as
  captured elsewhere (`<span><input class="switch" data-switch type="checkbox">`, Notifications dom).
- `HideIconRight` is a record field the view never reads (TST build).
- Switch then row click: the record passed to the event carries the new SwitchValue.
  The order of the Switch change and the container click in the original was not observed.
