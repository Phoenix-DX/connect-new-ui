# NavigationHandler

OutSystems: `NavigationHandler.NavigationHandler.NavigationHandler` · pack
`migration/blocks/NavigationHandler.NavigationHandler.NavigationHandler.md`

Inputs: none. Events: `Navigation(NavigationEvent)` → `onNavigation(event)`. Placeholders: none. Renders an empty
wrapper; while mounted it listens on `window` for `dx-before-navigation` and raises Navigation with the event.

## Captured variants (1 distinct; 1 tested)

| Capture | Source         |
| ------- | -------------- |
| v1      | Splash/default |

## Not captured / not settled

- The Navigation event: from the compiled controller, tested in `NavigationHandler.test.tsx`.
- The original NavigationHandler module dispatches `dx-before-navigation` (cancelable CustomEvent, detail `location`,
  `replace`, `resume()`) before every navigation (NavigationHandler.controller.js:858-944).
- The shell's navigation gate (`src/shell/navigation/navigationGate.ts`, tests in `navigationGate.test.tsx`) does the
  same.
