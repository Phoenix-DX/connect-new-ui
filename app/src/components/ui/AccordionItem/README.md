# AccordionItem (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Content.AccordionItem` · pack
`migration/blocks/OutSystemsUI_2_23.Content.AccordionItem.md` · compiled source
`migration/screens/HostSurvey/analysis/sources/pretty/OutSystemsUI_2_23.Content.AccordionItem.mvc.js`

| Input          | Type                     | Prop             | Default                       |
| -------------- | ------------------------ | ---------------- | ----------------------------- |
| StartsExpanded | Boolean                  | `startsExpanded` | `false`                       |
| Icon           | AccordionIconType Id     | `icon`           | `AccordionIconType.Caret`     |
| IconPosition   | AccordionIconPosition Id | `iconPosition`   | `AccordionIconPosition.Right` |
| IsDisabled     | Boolean                  | `isDisabled`     | `false`                       |
| ExtendedClass  | Text                     | `extendedClass`  | `''`                          |

Events `OnToggle(AccordionItemId, IsExpanded)` → `onOnToggle`, `Initialized(AccordionItemId)` → `onInitialized`.
Placeholders `Title`, `CustomIcon`, `Content` → `title`, `customIcon`, `content`.

Stack decision (`osui:Accordion`): hand-written, no library; provider from `OutSystemsUI_2_23.OutSystemsUI.js`
AccordionItem :4249-4720 (classes, a11y, click / keyboard toggle, height animation, parent notification). The content
placeholder keeps its OutSystems id (`<block id without $>-Content`) because the title's `aria-controls` points to it.

## Captured variants (2; 2 tested)

| Capture | Source             | What it shows                         |
| ------- | ------------------ | ------------------------------------- |
| v1      | HostSurvey/default | "Accommodation", expanded, first list |
| v2      | HostSurvey/default | "Meal Options", expanded              |

## Not captured / not settled

- Closed, disabled, PlusMinus / Custom icon and left position: from the provider code, tested with `it`.
- `aria-labelledby` on the content (provider :4461) is in no capture of the app (the capture tool drops it), so it is
  not rendered. The open/closed aria state switches at the start of the toggle (the provider: one tick later).
- The title `pointer-events` set and removed in the same open() call (:4586-4589) is a no-op and is not ported.
