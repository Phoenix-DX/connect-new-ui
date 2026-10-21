# DEPRECATED_AccordionItem

OutSystems UI: `OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem` · pack
`migration/blocks/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.md` · source
`migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js` ·
stack: hand-written component with the captured DOM and classes, no library (decision for the DEPRECATED patterns).

| Input         | Type    | Prop            | Default |
| ------------- | ------- | --------------- | ------- |
| IsExpanded    | Boolean | `isExpanded`    | `false` |
| UsePadding    | Boolean | `usePadding`    | `true`  |
| IsDisabled    | Boolean | `isDisabled`    | `false` |
| ExtendedClass | Text    | `extendedClass` | `''`    |

Event `OnToggle(IsExpanded)` → `onOnToggle`. Placeholders `Title`, `Content` → `title`, `content`.

- View (:183-347) has these parts:
  - SectionItem (`role=tab`, data-expanded / aria-expanded / aria-disabled).
  - TitleWrapper (`role=button`, aria-hidden = IsDisabled, tabindex -1 when disabled or empty, `aria-controls` = the
    Content id).
  - Title placeholder `dividers full-width` (+ ` text-ellipsis` unless IsWebApp).
  - Icon.
  - ContentWrapper `section-expandable-content is--collapsed` (+ ` no-padding`).
  - Content placeholder (`tabpanel`).

  The capture has no `aria-labelledby` on ContentWrapper, so it is not rendered.

- JS nodes in `sectionDom.ts` (DOM functions, as the original): Expand / Collapse (height animation: inline height,
  100 ms timeout, `is--animating`, transitionend), SetAriaAttributes, CloseAll. SetGlobalActions puts `CollapseItem`,
  `ExpandItem`, `updateAccordion` on the SectionItem element for DEPRECATED_Accordion.
- OnReady (:577-655) sets these values:
  - HasContent (Content not empty).
  - The `.accordion` that contains the item (else the grandparent) → HasWrapper.
  - IsMultipleItems (`data-multiple-items`).
  - Open classes when IsExpanded.
  - Keyboard (Esc closes, Enter / Space toggle).
  - IsWebApp = IsWebApp() or IsLayoutNative() (`../lib/deviceDetection.ts`, from OutSystemsUI_2_23.controller.js and
    OutSystemsUI.js).

  OnParametersChanged reruns it: Expand / Collapse to the new IsExpanded.

- OnClick (:415-506): see the component; OnToggle carries the new state.

## Captured variants (4 tested)

| Capture | Source                  | What it shows                                       |
| ------- | ----------------------- | --------------------------------------------------- |
| v1      | EventDetail/default     | "Host Allocation", closed, no padding               |
| v2      | MilestoneDetail/default | first room, two guests (caller markup in the story) |
| v3      | MilestoneDetail/default | following room (`margin-top-s`), two guests         |
| v4      | MilestoneDetail/default | following room, one guest                           |

Stories render inside a stand-in `layout layout-native` (`../../test/nativeLayout.tsx`), as the Orbit screens do.

## Not captured / not settled

- Open, disabled and empty items, the animation and the keyboard: from the compiled code (behaviour tests).
- The original adds one more keydown listener on every OnParametersChanged (so Enter can toggle twice after an input
  change); the port keeps one handler.
- Rendering from IsExpanded covers the UpdateAttribute node (data-expanded after a click) and ToggleClass.
