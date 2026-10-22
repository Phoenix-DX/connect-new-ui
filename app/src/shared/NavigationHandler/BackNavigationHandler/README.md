# BackNavigationHandler

OutSystems: `NavigationHandler.NavigationHandler.BackNavigationHandler` · pack
`migration/blocks/NavigationHandler.NavigationHandler.BackNavigationHandler.md`

| Input    | Type    | Prop       | Default |
| -------- | ------- | ---------- | ------- |
| Priority | Integer | `priority` | `0`     |

Events: `BackNavigation(BackNavigationEvent)` → `onBackNavigation(event)`. Placeholders: none. Renders an empty
wrapper; the handler joins the shell's back queue through `useBackHandler` (`src/platform/navigation`) while mounted.
`BACK_PRIORITY` has the app's priorities (lock screen 100000, modal 10000, drawer 1000, exit dialog −1, CommonUI −10000).

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |

## Not captured

- Queue behaviour: from the compiled controller and the shell, tested in `BackNavigationHandler.test.tsx`.
