# LabelWithCopyIcon

OutSystems: `Connect2_LegacyShared.Utility.LabelWithCopyIcon` · pack
`migration/blocks/Connect2_LegacyShared.Utility.LabelWithCopyIcon.md` · source
`migration/blocks/sources/Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc.js`

| Input          | Type | Prop             | Default |
| -------------- | ---- | ---------------- | ------- |
| AttributeValue | Text | `attributeValue` | `''`    |

No events. Placeholders `Placeholder_Label`, `Placeholder_Icon`, `Placeholder_Value` → `placeholderLabel`,
`placeholderIcon`, `placeholderValue`.

Ported action: Placeholder_IconOnClick (controller :253-287, JS :313-317) → `navigator.clipboard.writeText`.

## Captured variants (0)

Only used inside the meeting info dialog (closed in every capture): built from the compiled view. Story `Default`.

## Not captured / not settled

- A clipboard failure: the JS node's promise is not awaited in the original either (no message).
