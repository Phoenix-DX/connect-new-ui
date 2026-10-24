# FixedFooter

OutSystems: `UBTConnectLibrary.ConnectPatterns.FixedFooter` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.FixedFooter.md`

| Input                | Type    | Prop                   | Default |
| -------------------- | ------- | ---------------------- | ------- |
| useBottomBar         | Boolean | `useBottomBar`         | `false` |
| ExpectedFooterHeight | Text    | `expectedFooterHeight` | `''`    |
| ContentContainerId   | Text    | `contentContainerId`   | `''`    |

Events: none. Placeholders: `Content` → `children`. Classes `ubt-fixed-footer` (+ `--no-bottom-bar` without bottom bar).
OnReady (`JSUtils_SetStyleProperty`, `JSUtils_AddClass` in `../../UBTJavaScriptUtils/lib/actions.ts`): the caller's
element with id ContentContainerId gets `--ubt-fixed-footer---footer-height: <ExpectedFooterHeight>` and the class
`ubt-fixed-footer--content` (captured on ContactByEmailMember, Profile, Services…). The caller must render that element
with the id it passes.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                              |
| ------- | ----------------------------------- |
| v1      | ContactByEmailMember/default (pack) |

## Not captured

- `useBottomBar = true` (no `--no-bottom-bar`): from the compiled view, tested in `FixedFooter.test.tsx`.
