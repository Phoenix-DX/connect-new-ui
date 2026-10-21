# Reading an OutSystems 11 Reactive / Mobile screen from the browser

Use this when interpreting `analysis/` output or reading `.mvc.js` sources by hand. Everything here can be verified in the captured files; when a claim in the spec depends on one of these rules, cite the file and the line or expression you read.

## Contents
1. Where the code lives
2. Anatomy of a `.mvc.js` file
3. Reading expressions in the view
4. Data: data actions, aggregates, server actions
5. Lifecycle and state
6. Navigation
7. Styling
8. Wire format quirks
9. Mobile / PWA specifics
10. Common traps

## 1. Where the code lives

- `/<App>/moduleservices/moduleinfo` returns `manifest.urlVersions`: every script, stylesheet and image the app can load, with a cache-busting query. It is the complete inventory; scripts are loaded lazily, so a file missing from the Network tab may simply not have been needed yet.
- Script names: `<Module>.<Flow>.<ScreenOrBlock>.mvc.js` (one per screen/block), `<Module>.controller.js` (module-level client actions and the proxies of server actions), `<Module>.model.js` (structures, entities, static entity records), `<Module>.languageResources.js`, `<Module>.clientVariables.js`.
- A screen in the main module is often a thin shell. The real content is a block in another module (`..._MUI`, `..._CW`), conventionally named `ScreenBlock_*`. Always follow the shell into the block.
- The rendered DOM marks every block root with `data-block="<Flow>.<Block>"` (no module prefix). Map back to a file by matching the suffix `.<Flow>.<Block>.mvc.js` in the manifest.

## 2. Anatomy of a `.mvc.js` file

Each file contains several AMD `define(...)` modules:

| define name ends with | contains |
|---|---|
| `.mvc$model` | `VariablesRecord.attributesToDeclare` (inputs end with `In`, locals with `Var`), data-action output records (`...DataActRec`, fields end with `Out`) |
| `.mvc$view` | `getCssDependencies`, `getBlocks` (every block this view can render), `internalRender` (the widget tree) |
| `.mvc$controller` | data fetch definitions, client actions (`_name$Action`), event handlers (`onInitializeEventHandler`, `onReadyEventHandler`, `onRenderEventHandler`, `onDestroyEventHandler`, `onParametersChangedEventHandler`), exception handling |
| `...mvc$controller.<Action>.<Node>JS` | the body of a JavaScript node, verbatim |
| `.mvc$debugger` | breakpoint metadata, ignore |

`this.attr("Name", "jsName", "Name", mandatory, ..., OS.DataTypes.DataTypes.<Type>, function() { return <default>; }, ...)` declares a variable with its type and default value. Defaults matter: e.g. a `CountSize` defaulting to `4` is a page size.

## 3. Reading expressions in the view

- `React.createElement(OSWidgets.Container, { style: "a b", visible: true, ... }, children)` renders `<div class="a b" data-container>`. `OSWidgets.Text` → `<span data-expression>`, `OSWidgets.Expression` → `<span data-expression>`, `OSWidgets.Image` → `<img data-image>`, `OSWidgets.Link` → `<a data-link>`, `OSWidgets.List` → `<div class="list ..." data-list>`, `OSWidgets.Placeholder` → the content passed by the parent.
- `$if(condition, false, this, thenFn, elseFn)` is an If widget: both branches are UI states to describe.
- `model.getCachedValue(idService.getId("X.Style"), function () { return <expr>; }, ...)` is a computed property; the first function is the expression. Read it literally, it is the source of truth for dynamic classes, image URLs, visibility and texts.
- `getCurrent(callContext.iterationContext)` inside a list means "current row".
- `Module_Flow_Block_mvc_view` as an element type is a child block; its `inputs` are the parameters passed, `events` the handlers wired, `placeholders` the content injected.
- `OS.Navigation.VersionedURL.getVersionedUrl("img/Module.name.png")` is a static image.
- Static strings appear as plain string children: `}, "View All")`. `$text(["..."])` also renders text.

## 4. Data: data actions, aggregates, server actions

- `controller.callDataAction("DataActionX", "screenservices/<Module>/<Flow>/<Block>/DataActionX", ...)` is a Data Action fetched automatically (At Start unless "Only on Demand"). It runs on the server; its body is NOT in the browser. Use the OutSystems MCP to read it.
- `callAggregate...("AggregateName", "screenservices/...")` is an Aggregate executed on the server against OutSystems entities. The query definition is not in the browser.
- Aggregates or entities from `<Module>.entities.js` / `*_MCS` modules with Local Storage are client-side SQLite (Phone Apps). They do not appear as network calls. Check whether the screen reads them.
- `controller.callServerAction("Name", "screenservices/<Module>/ActionName", ...)` in a module controller is a server action called from client logic (e.g. on click). Its body is server-side.
- Request body of every screenservices call: `versionInfo`, `viewName`, `screenData.variables` (the runtime sends screen variables automatically; React does not need to replicate this), and for server actions `inputParameters`.
- Responses: `{ versionInfo, data: { <OutputName>: ... } }`. A `{ "List": [...] }` wrapper is how Record Lists travel.
- `onAfterFetch_<DataAction>` handlers copy outputs into local variables and set flags; read them to know what the UI actually uses.

## 5. Lifecycle and state

- Order: OnInitialize → (data actions start) → first render → OnReady → OnRender (every render) → OnDestroy.
- `OnParametersChanged` fires only when the parent re-renders the block with a different input value.
- Navigation destroys the previous screen. On Back, OnInitialize/OnReady run again unless the app restores views from a cache (look for JavaScript nodes that check whether the current view was restored from a cache); then the screen shows old data immediately and usually refreshes in the background.
- Client Variables persist per module in localStorage. Session Variables live on the server and are invisible in the browser; only the OutSystems MCP can reveal them.
- Feature flags often come from static entities (`staticEntities.<Entity>.<record>`) combined with a permission check action (e.g. LaunchDarkly wrappers). Record the flag name and every branch it selects.

## 6. Navigation

- `OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/App/Screen", { Param: value }), transition, ...)`: destination and input parameters (parameter names are case-sensitive and sometimes misspelled; keep them as is).
- `navigateBack(...)`: previous screen. Layout back buttons commonly use `(PreviousScreen)`.
- Bottom bars and menus can route the same tab to different screens based on flags. Read the click handler, not just the link.
- `NavigationHandler`-style libraries pass "preload objects" between screens in memory; capture what is passed.

## 7. Styling

- Stylesheets load in the order of `<link rel="stylesheet">` in the document. Order matters: later theme files override OutSystems UI. Keep it in the build.
- `:where(.backwards-compatibility)` and similar wrapper classes scope legacy themes; the wrapper element must exist in the rebuilt DOM for rules to apply.
- OutSystems UI sets device classes on `<body>` from JavaScript (`phone`/`tablet`/`desktop`, `portrait`/`landscape`, `ios`/`android`/`osx`, `is-ltr`). Media queries alone will not reproduce them; copy the captured body class.
- CSS custom properties on `<body style>` (e.g. `--footer-height`, `--viewport-height`) are set by runtime JS; copy them.
- Icon fonts (FontAwesome, the app's own icon font, etc.) come from `@font-face` in the bundle; an icon class without its font renders nothing.
- Some patterns (e.g. Gallery) pass layout through inline CSS variables (`--grid-phone`, `--grid-gap`). Read them from the DOM and from the block inputs.
- OutSystems UI version matters: `OutSystemsUI_2_23` and current OutSystems UI differ. Name the version found in the stylesheet list.

## 8. Wire format quirks

- Long Integer and Decimal travel as strings (`"123456"`). Keep them as strings unless proven safe.
- "No value" is never `null`: empty Text is `""`, numbers are `0`, dates `1900-01-01`, Identifier `0`/`""`. Write a mapper.
- DateTime is ISO; Date has no timezone.
- Booleans are real booleans.
- `RecordNotAvailable`/`IsFound`-style flags are app conventions; read the client logic that interprets them.

## 9. Mobile / PWA specifics

- Phone Apps open in a browser as a PWA: `link[rel=manifest]`, a service worker (requests marked with a gear icon in DevTools are served by it), offline cache.
- Native plugins (Cordova) are present but report unavailable in the browser; the code usually branches on availability. Only the web branch is in scope.
- Feedback messages (toasts) are rendered by the runtime, not by a block; their markup must be captured while one is visible.
- Transitions use classes like `slide-from-right-enter`, `-enter-active`, `-enter-done` on `.screen-container`.

## 10. Common traps

- Names lie: a flow called `Legacy_*` can be the live one; a block `New_*` can be unused. Trust the runtime capture and the click handlers.
- Several versions of a screen can coexist (`Screen`, `New_Screen`, a third newer screen) selected by flags. State which one was captured and how the others are reached.
- A data action can return more than the screen shows (e.g. "All*" lists used only as preload for the next screen). Describe what each output is used for.
- Calls captured after navigating away belong to other screens; the analyzer marks their scope.
- Masked text (`•••`) in the DOM is user data; describe its source field instead of guessing content.
