# CR-<Screen>-<n>: <Block or shell area> — <one-line change>

- Status: open
- Raised by: <Screen>, <date>
- Block: `<Module.Flow.Block>` → `app/src/shared/<...>` (or shell area)
- Other routes using it (catalog/blocks.md): <list>
- Related question: Q<n> (if the user decided something about it)

## Evidence
- Captured markup: `migration/screens/<Screen>/analysis/dom/<state>.html` lines <a–b>
- Expression / handler: `sources/pretty/<file>`: `<quoted expression>`
- Parity difference it explains: `[kind] path: detail`

## Expected change
<what the shared component must do differently: new input, new state, markup difference, behaviour>

## Workaround in the route until applied
`<NotCaptured name="CR-<Screen>-<n>: …">` around <part>.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: <commit / summary>
- Regression parity run on: <routes and states>, result
