### app/src/shared/UBTConnectLibrary/TagToggle/README.md

**Change 1**

Before:

> Events: `Event_Click(IsSelected)` → `onEventClick(isSelected)` (only when enabled). Placeholders: none. Children:
> `CustomContainer`, `IconText` + `Icon` (Tag.IconId set; size `icon-non-standard-16`).

After:

> The block raises one event: `Event_Click(IsSelected)` → `onEventClick(isSelected)`. The block raises it only when
> isEnabled is true. The block has no placeholders. The block has these children:
> 
> - `CustomContainer`.
> - `IconText` and `Icon`, when Tag.IconId is set. The size is `icon-non-standard-16`.

**Change 2**

Before:

> Colours of the unselected / disabled states and the icon variant come from the compiled view (:167-330); the
> selected text tag is also checked against the HouseholdCarousel capture (`text-neutral-0`, `background-primary`…).

After:

> The colours of the unselected and disabled states and the icon variant come from the compiled view (:167-330).
> The test also compares the selected text tag with the HouseholdCarousel capture (`text-neutral-0`, `background-primary`…)
> [TagToggle.test.tsx].

