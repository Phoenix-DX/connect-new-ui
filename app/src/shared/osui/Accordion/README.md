# Accordion (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Content.Accordion` · pack `migration/blocks/OutSystemsUI_2_23.Content.Accordion.md` ·
compiled source `migration/screens/HostSurvey/analysis/sources/pretty/OutSystemsUI_2_23.Content.Accordion.mvc.js`

| Input         | Type    | Prop            | Default |
| ------------- | ------- | --------------- | ------- |
| MultipleItems | Boolean | `multipleItems` | `false` |
| ExtendedClass | Text    | `extendedClass` | `''`    |

Event `Initialized(AccordionId)` → `onInitialized`. Placeholder `Content` → `children` (AccordionItem blocks).

Stack decision (`osui:Accordion`): hand-written, no library. Provider ported from
`migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` (Accordion :4066-4245): role `list` on the first `.list`
inside (else on the accordion), items register through `AccordionContext` (`accordionContext.ts`: Add / Click /
Removed notifications, CollapseAllItems), single open item unless MultipleItems, MultipleItems → False collapses all.

## Captured variants (1; 1 tested)

| Capture | Source             | What it shows                                        |
| ------- | ------------------ | ---------------------------------------------------- |
| v1      | HostSurvey/default | survey accordion, two expanded items (MultipleItems) |

AccordionItem v1 / v2 check the items' content. Client actions (AccordionExpandAll / CollapseAll) are not used
by the built screens and are not exposed.
