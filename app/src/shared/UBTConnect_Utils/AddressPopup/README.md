# AddressPopup

OutSystems: `UBTConnect_Utils.CW_CTA_PopUps.AddressPopup` · pack `migration/blocks/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.md`
· compiled source `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc.js`

| Input               | Type                 | Prop                 | Default                 |
| ------------------- | -------------------- | -------------------- | ----------------------- |
| In_ContactPopupData | ContactPopupDataRec  | `inContactPopupData` | `{}`                    |
| ShowGoogleMaps      | Boolean              | `showGoogleMaps`     | `false`                 |
| In_ImageSizeId      | Text (UBT_ImageSize) | `inImageSizeId`      | `'xl'` (ExtraLarge_100) |

(The pack lists two inputs; In_ContactPopupData is in the compiled model.) Events `Event_OpenInGoogleMaps`,
`Event_OpenInMaps`, `Event_CopyAddress`, `Event_Cancel` → `onEventOpenInGoogleMaps`, `onEventOpenInMaps`,
`onEventCopyAddress`, `onEventCancel`. Icons OpenNew / ContentCopy: TST values.

## Captured variants (1; 1 tested)

| Capture | Source                    | What it shows |
| ------- | ------------------------- | ------------- |
| v1      | HouseholdCarousel/default | closed        |

No capture shows the open dialog. Tests with `it` cover the buttons and events.
