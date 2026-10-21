# PreventBackNavigation

OutSystems: `NavigationHandler.NavigationHandler.PreventBackNavigation` · pack
`migration/blocks/NavigationHandler.NavigationHandler.PreventBackNavigation.md`

Inputs: none. Events: `BackNavigationPrevented(BackNavigationEvent)` → `onBackNavigationPrevented(event)`.
Placeholders: none. Child block: `BackNavigationHandler` (priority `LockScreenBackNavigationPriority` = 100000).

While the block is mounted, it prevents every back navigation (`PreventNavigation`) and raises the event.

The handler is the shell hook `usePreventBackNavigation` (same priority, same steps). The nested
`BackNavigationHandler` renders its wrapper without a handler of its own, so the queue holds one preventing entry, as
in the original block.

## Captured variants (1 distinct; 1 tested)

| Capture | Source              |
| ------- | ------------------- |
| v1      | PINRegister/default |
