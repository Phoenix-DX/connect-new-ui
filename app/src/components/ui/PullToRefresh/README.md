# PullToRefresh

OutSystems UI: `OutSystemsUI_2_23.Private.PullToRefresh` · pack
`migration/blocks/OutSystemsUI_2_23.Private.PullToRefresh.md`

Inputs: none. Events: `OnContentPull` → `onContentPull` (not raised, see below). Placeholders: none.
Markup as captured: arrow (`fa-angle-down`) and spinner containers, and the `role="alert"` a11y container.

## Captured variants (1 distinct; 1 tested)

| Capture | Source              |
| ------- | ------------------- |
| v1      | MessageList/default |

## Not captured / not settled

- The pull gesture (`scripts/OutSystemsUI_2_23.PullToRefresh.js`, started on ready) is not ported: no drag and no
  `OnContentPull`. The a11y texts "Refreshing content" / "Content refreshed" (compiled view, shown after a first pull)
  never appear. Which layouts bind `OnContentPull` and what it refreshes is open (spec section 2, `UsePullToRefresh`).
