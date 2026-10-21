# App_NotificationRefresh

OutSystems: `UBTConnect.App_Common_Blocks.App_NotificationRefresh` · pack
`migration/blocks/UBTConnect.App_Common_Blocks.App_NotificationRefresh.md`

| Input    | Type     | Prop       | Default                 |
| -------- | -------- | ---------- | ----------------------- |
| Datetime | DateTime | `datetime` | `'1900-01-01T00:00:00'` |

Event: `Updated` → `onUpdated`. No markup (empty block wrapper). OnParametersChanged (mvc.js controller) assigns
Datetime to itself and triggers Updated: the parent re-reads its data when the Datetime it passes changes.

## Captured variants (1 distinct; 1 tested)

| Capture | Source              |
| ------- | ------------------- |
| v1      | CountryList/default |

## Not captured

- Nothing visible; the event is tested in `App_NotificationRefresh.test.tsx`.
