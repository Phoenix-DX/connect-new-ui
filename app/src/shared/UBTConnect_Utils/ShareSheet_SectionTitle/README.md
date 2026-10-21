# ShareSheet_SectionTitle

OutSystems: `UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle` · pack
`migration/blocks/UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.md`

| Input       | Type                | Prop         | Default                    |
| ----------- | ------------------- | ------------ | -------------------------- |
| In_Label    | Text                | `inLabel`    | `''`                       |
| In_FontSize | Text (UBT_FontSize) | `inFontSize` | `UBT_FontSize.Small` (`s`) |

Events, placeholders: none. Markup from the compiled view: CustomContainer with bottom padding XS when In_FontSize is
DoubleExtraSmall (else S) and text options In_FontSize + SemiBold, holding a container with the label expression.

## Captured variants (0)

No screen capture renders it (the share sheet is closed in every capture): stories `CompiledView` and
`DoubleExtraSmall`, checks in `ShareSheet_SectionTitle.test.tsx`. Class values from the original CSS
(`.padding-bottom-xs`, `.font-size-xxs`, `.font-semi-bold`).
