# LayoutRuntime_Top

OutSystems: `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top` · pack
`migration/blocks/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.md`

Inputs: none. Events: none. Placeholders: none. Renders an empty wrapper.

Its controller builds the back-navigation queue (`window.dx.Navigation.BeforeBackNavigation`, handlers by descending
priority until one prevents; p:NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js:303-376).
That queue is app-wide and lives in the shell (`src/shell/navigation/backQueue.ts`, `NavigationHost`), so the block
adds no behaviour.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |
