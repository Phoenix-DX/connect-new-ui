# TagToggle

OutSystems: `UBTConnectLibrary.ConnectPatterns.TagToggle` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.TagToggle.md`

| Input           | Type       | Prop              | Default                              |
| --------------- | ---------- | ----------------- | ------------------------------------ |
| Tag             | Record Tag | `tag`             | `{}` (IsSelected True, Enabled True) |
| ExtendedClasses | Text       | `extendedClasses` | `''`                                 |
| isEnabled       | Boolean    | `isEnabled`       | `true`                               |

The block raises one event: `Event_Click(IsSelected)` → `onEventClick(isSelected)`. The block raises it only when
isEnabled is true. The block has no placeholders. The block has these children:

- `CustomContainer`.
- `IconText` and `Icon`, when Tag.IconId is set. The size is `icon-non-standard-16`.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                    |
| ------- | ------------------------- |
| v1      | HouseholdCarousel/default |

The colours of the unselected and disabled states and the icon variant come from the compiled view (:167-330).
The test also compares the selected text tag with the HouseholdCarousel capture (`text-neutral-0`, `background-primary`…)
[TagToggle.test.tsx].
