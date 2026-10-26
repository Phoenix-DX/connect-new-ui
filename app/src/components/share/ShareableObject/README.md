# ShareableObject_Generic

OutSystems: `UBTConnect_Utils.CW_Share.ShareableObject_Generic` · pack
`migration/blocks/UBTConnect_Utils.CW_Share.ShareableObject_Generic.md`

| Input              | Type                       | Prop                | Default |
| ------------------ | -------------------------- | ------------------- | ------- |
| In_ShareableObject | UI_ShareableObject_Generic | `inShareableObject` | `{}`    |

Events: `Event_OnClick` → `onEventOnClick` (click on the text container, which gets `cursor: pointer`). Placeholders:
none. Markup from the compiled view: `div.shareable-object-generic` with UBT_LazyImage (SignedURL, entity type and id,
height Auto, width = local ImageWidth Auto, radius = local BorderRadius Medium). Then the text container, with these parts:

- Title (neutral-10, Small, semi-bold).
- Optional subtitle (neutral-7, ExtraSmall, regular).
- Optional location (IconText with a Small_12 `home_pin_fill` icon, top padding S).

## Captured variants (0)

No screen capture renders it: stories `CompiledView`, `TitleOnly`, checks in the test.

## Not settled

- UBT_IconSize.Small_12 → `icon-small` and UBT_Shape.Medium → `medium` come from the original CSS (`.icon-small`,
  `.border-radius-medium`), no capture.
