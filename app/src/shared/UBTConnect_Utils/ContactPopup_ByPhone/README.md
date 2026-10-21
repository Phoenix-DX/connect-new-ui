# ContactPopup_ByPhone

OutSystems: `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone` · pack
`migration/blocks/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.md` · compiled source
`migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js`

| Input            | Type                       | Prop              | Default                 |
| ---------------- | -------------------------- | ----------------- | ----------------------- |
| In_CallPopupData | ContactByPhonePopupDataRec | `inCallPopupData` | `{}`                    |
| In_ImageSizeId   | Text (UBT_ImageSize)       | `inImageSizeId`   | `'xl'` (ExtraLarge_100) |

Events `Event_Call(Number)`, `Event_Cancel` → `onEventCall`, `onEventCancel`. Placeholders: none.

- Buttons (Action_SetContactPopupButtons :277-378): Phone set → `{Id "0", "Call"}` only; else Mobile (`call_fill`),
  Home (`home_fill`), Work (`enterprise`) for each non-empty number. ActionName "Call" when empty.
- Click (:379-420): Event_Call(Number) then navigation to `tel:` + Number (`changeWindowLocation`).

## Captured variants (1; 1 tested)

| Capture | Source                   | What it shows |
| ------- | ------------------------ | ------------- |
| v1      | ContactUsDetails/default | closed        |

The open popup (ContactPopup) is not captured; its button lists are tested with `it`. Icons Enterprise and HomeFill:
TST values (`static-entities-tst.json`).
