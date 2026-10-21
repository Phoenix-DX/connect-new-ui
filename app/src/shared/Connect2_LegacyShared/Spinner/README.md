# Spinner

OutSystems: `Connect2_LegacyShared.Reusable.Spinner` · pack `migration/blocks/Connect2_LegacyShared.Reusable.Spinner.md`

| Input      | Type    | Prop         | Default |
| ---------- | ------- | ------------ | ------- |
| ShowLoader | Boolean | `showLoader` | `false` |

Events: none. Placeholders: none.

## Captured variants (2 tested)

| Capture | Source                | What it shows        |
| ------- | --------------------- | -------------------- |
| v1      | MessageDetail/loading | spinner shown        |
| v2      | MessageList/default   | hidden (empty block) |

## Not captured

- The container has `animate: true`. OutSystems fades a container in/out when its visibility changes (this is in
  OutSystemsReactWidgets, not in the sources). This fade is not ported: the spinner appears and disappears at once.
