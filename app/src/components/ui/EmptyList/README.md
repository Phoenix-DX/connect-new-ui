# EmptyList

OutSystems: `UBTConnectLibrary.ConnectPatterns.EmptyList` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.EmptyList.md`

| Input  | Type         | Prop     | Default |
| ------ | ------------ | -------- | ------- |
| IconId | UBT_Icons Id | `iconId` | `''`    |

Events: none. Placeholders: `TitlePlaceholder` → `titlePlaceholder`, `TextPlaceholder` → `textPlaceholder` (each in
its styled `<div>` as compiled). Child blocks: `CustomContainer` (flex, centred, Neutral3 border, Large radius),
`CircleButton` (Small_40, Primary background and border) with an `Icon` (Neutral0, Base_24).

## Captured variants (1 in the pack + 1 whole; 2 tested)

| Capture | Source                | What it shows                                |
| ------- | --------------------- | -------------------------------------------- |
| v1      | Notes/default         | no notes (pack)                              |
| v2      | Notes/default (whole) | v1 with the caller's CustomText placeholders |
