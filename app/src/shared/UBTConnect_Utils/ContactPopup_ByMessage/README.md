# ContactPopup_ByMessage

OutSystems: `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage` · pack
`migration/blocks/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.md` · compiled source
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js`

| Input                   | Type                         | Prop                     | Default                 |
| ----------------------- | ---------------------------- | ------------------------ | ----------------------- |
| In_ContactByMessageData | ContactByMessagePopupDataRec | `inContactByMessageData` | `{}`                    |
| In_ImageSizeId          | Text (UBT_ImageSize)         | `inImageSizeId`          | `'xl'` (ExtraLarge_100) |

Events `Event_SelectedMessageChannel(Event_MessageChannelId)`, `Event_Cancel` → `onEventSelectedMessageChannel`,
`onEventCancel`. Buttons: Email (`mail_fill`), WhatsApp, Signal, Call (`call_fill`) per Show* flag; ActionName
"Message" when empty. Type_MessageChannel and the icons are TST values (`static-entities-tst.json`).

## Captured variants (1; 1 tested)

| Capture | Source                    | What it shows |
| ------- | ------------------------- | ------------- |
| v1      | HouseholdCarousel/default | closed        |

The open popup is not captured; the button list is tested with `it`.
