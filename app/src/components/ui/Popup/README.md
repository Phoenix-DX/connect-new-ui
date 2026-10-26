# Popup

OutSystems: `UBTConnectLibrary.ConnectPatterns.Popup` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.Popup.md`
(compiled source `migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Popup.mvc.js`)

| Input           | Type    | Prop              | Default |
| --------------- | ------- | ----------------- | ------- |
| isOpen          | Boolean | `isOpen`          | `false` |
| Title           | Text    | `title`           | `''`    |
| ExtendedClasses | Text    | `extendedClasses` | `''`    |
| In_HasTopHeader | Boolean | `inHasTopHeader`  | `false` |

Events: `OnWidgetInitialize(WidgetId)` → `onOnWidgetInitialize` (on ready, the popup widget id), `OnClose` →
`onOnClose` (OnParametersChanged while isOpen is False, :343-377). Placeholders: `TopHeader` → `topHeader`, `Content`
→ `content`, `Footer` → `footer`.

Markup (view :185-330): OutSystems Popup widget (ShowPopup = isOpen, class `popup-dialog` + FormatClasses(FormatClasses(
`ubt-pop-up`, ExtendedClasses), `popup-dialog`)) in `<body>`. It has the popup markup captured on HouseholdDetails/default
(dom:1392-1398, as ContactPopup) with these parts:

- `text-align-center` container (visible = In_HasTopHeader) > TopHeader
- `ubt-pop-up--title` container (inline `text-align: center;`) > CustomText Title (neutral-10, base, semi-bold)
- CustomContainer (margin top base, bottom medium) > Content placeholder (`ubt-pop-up--content`)
- Footer placeholder (`ubt-pop-up--footer`)

## Not captured

No capture renders this block (built from the compiled view; stories `CompiledView` and `Closed`, tested in
`Popup.test.tsx`).

## Not settled

- The top header container has `animate: true` (animation on visibility change); its runtime markup is unknown, a plain
  container is rendered.
- The popup widget id given to OnWidgetInitialize is on no captured element (the captured popup markup has no id).
