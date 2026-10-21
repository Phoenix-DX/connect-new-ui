# NC_Result_Item__Image

OutSystems: `Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image` · pack
`migration/blocks/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.md` · compiled source
`migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc.js`

| Input                                        | Type              | Prop                                             | Default               |
| -------------------------------------------- | ----------------- | ------------------------------------------------ | --------------------- |
| ShowPlaceholderForImage                      | Boolean           | `showPlaceholderForImage`                        | `false`               |
| In_IsRoundImage                              | Boolean           | `inIsRoundImage`                                 | `false`               |
| In_ImageHeight                               | Integer           | `inImageHeight`                                  | `40`                  |
| In_ResultType                                | ResultListType Id | `inResultType`                                   | `0` (null identifier) |
| In_ResultItemVisualWidth                     | Integer           | `inResultItemVisualWidth`                        | `40`                  |
| In_SignedURL / In_Bucket / In_Path / In_Type | Text              | `inSignedURL` / `inBucket` / `inPath` / `inType` | `''`                  |
| CustomClass / HtmlDataItem                   | Text              | `customClass` / `htmlDataItem`                   | `''`                  |
| In_BorderRadius                              | Integer           | `inBorderRadius`                                 | `0`                   |
| IsLoading                                    | Boolean           | `isLoading`                                      | `false`               |
| In_IsReverseImageAndContent                  | Boolean           | `inIsReverseImageAndContent`                     | `false`               |

Event `OnClick_Item` → `onOnClickItem`. Placeholders `Label`, `ImagePlaceholder`, `Title_Placeholder`,
`Description_Placeholder`, `Action_Placeholder` → `label`, `imagePlaceholder`, `titlePlaceholder`,
`descriptionPlaceholder`, `actionPlaceholder`. LoadPhotoAsync reuses `../Result_Item_Image/useLoadPhotoAsync.ts`
(same flow, controller :642-700).

## Captured variants

None: never rendered in a capture (AssembleDetail, AssembleEvents). Built from the compiled view.

## Not settled

- The row, the image column and the text column all have the OnClick_Result_Item handler. The image column and the
  text column sit inside the row. So a click on the image or the text raises OnClick_Item twice: the event bubbles,
  and OutSystems containers do not stop it. Ported as compiled; not observed on TST.
