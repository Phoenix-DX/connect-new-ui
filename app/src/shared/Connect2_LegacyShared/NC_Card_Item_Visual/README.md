# NC_Card_Item_Visual

OutSystems: `Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual` · pack
`migration/blocks/Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.md` · compiled source
`migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc.js`

| Input                                        | Type              | Prop                                             | Default               |
| -------------------------------------------- | ----------------- | ------------------------------------------------ | --------------------- |
| ShowPlaceholderForImage                      | Boolean           | `showPlaceholderForImage`                        | `false`               |
| In_ImageHeight                               | Integer           | `inImageHeight`                                  | `202`                 |
| In_ResultType                                | ResultListType Id | `inResultType`                                   | `0` (null identifier) |
| In_SignedURL / In_Bucket / In_Path / In_Type | Text              | `inSignedURL` / `inBucket` / `inPath` / `inType` | `''`                  |
| In_FloatingPillPosition                      | Text              | `inFloatingPillPosition`                         | `''`                  |
| In_FloatingOverlayTextPosition               | Text              | `inFloatingOverlayTextPosition`                  | `''`                  |
| In_ImageCoverPositionX / Y                   | Text              | `inImageCoverPositionX` / `Y`                    | `''`                  |

Placeholders `Placeholder_FloatingPill` → `floatingPill`, `Placeholder_OverlayText` → `overlayText`,
`Placeholder_Image` → `image`. No events.

LoadPhotoAsync (controller :400-470, run by OnReady and OnParametersChanged) is the same flow as Result_Item_Image's:
the block reuses `../Result_Item_Image/useLoadPhotoAsync.ts` (GetCacheableSignedPhotoURL, Last_* reuse).

## Captured variants

None: the block was never rendered in a capture (AssembleDetail, AssembleEvents). Built from the compiled view; tests
cover the three image branches and the floating placeholders.

## Not settled

- The no-photo branch always shows `no_division_rectangle.png` (whatever In_ResultType is), as compiled.
