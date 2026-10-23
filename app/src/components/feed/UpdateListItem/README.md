# Update_ListItem

OutSystems: `UBTConnectLibrary.ConnectCorePatterns.Update_ListItem` · pack
`migration/blocks/UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.md`

| Input                  | Type                        | Prop                   | Default        |
| ---------------------- | --------------------------- | ---------------------- | -------------- |
| In_Type_UpdateFeedItem | Text (Connect_UpdateTypeId) | `inTypeUpdateFeedItem` | `''`           |
| In_AvatarImageURL      | Text                        | `inAvatarImageURL`     | `''`           |
| ShowImage              | Boolean                     | `showImage`            | `true`         |
| In_InitialsList        | TextGenderIdentifier list   | `inInitialsList`       | `[]`           |
| In_Name                | Text                        | `inName`               | `''`           |
| In_Date                | Date                        | `inDate`               | `'1900-01-01'` |
| In_Location            | Text                        | `inLocation`           | `''`           |
| In_IsRead              | Boolean                     | `inIsRead`             | `false`        |
| IsEnabled              | Boolean                     | `isEnabled`            | `true`         |
| HasBorderBottom        | Boolean                     | `hasBorderBottom`      | `true`         |
| In_ParentsNames        | Text                        | `inParentsNames`       | `''`           |
| In_BirthType           | Text                        | `inBirthType`          | `''`           |
| PaddingSizeId          | SpacingOptions              | `paddingSizeId`        | `{}`           |
| IgnoreReadBackground   | Boolean                     | `ignoreReadBackground` | `false`        |
| In_HasShare            | Boolean                     | `inHasShare`           | `false`        |

Events: `OnClick` → `onOnClick`; `Event_SendGift`, `Event_MarkAsRead`, `Event_Share`, `Event_MarkAsUnread` →
`onEvent…` (from ContextMenu). No placeholders, no server action.

Ported actions (`lib/actions.ts`):
GetBackgroundColor_IsRead, Get_{Background,Font}Color_{Avatar,Tag}_UpdateItem, FormatConnectDate_WithYear (with
FormatConnectDate, GetConnectWeekdayLabel__, GetConnectDateFormat__; `shared/lib/osDateTime.ts`).

## Captured variants (4 tested)

| Capture | Source                                         | What it shows                                 |
| ------- | ---------------------------------------------- | --------------------------------------------- |
| v1      | pack variant 1, HomeFeed/default               | wrapper only                                  |
| v2      | `HomeFeed/analysis/dom/default.html`           | unread birth, no read background, no border   |
| v3      | `Updates_SingleList/analysis/dom/default.html` | unread: cyan background, border, padding base |
| v4      | `Updates_SingleList/analysis/dom/default.html` | read row                                      |

## Not captured / not settled

- ShowImage True (Columns_Three with AvatarDouble / AvatarImage): every capture passes ShowImage False; compiled code
  only, tested.
- Gender values are opaque constants (`Gender.MALE` / `FEMALE`), Connect_UpdateTypeId values from the tag texts.
