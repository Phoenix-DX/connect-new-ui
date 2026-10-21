# CR-W3A-1: shell (body classes) — Layout.Layout sets the `connect-theme` theme class on the body

- Status: applied (foundation task Y, 2026-10-15)
- Raised by: wave 3 batch A (shared blocks), 2026-10-15
- Block: `Connect2_LegacyShared.Layout.Layout` → `app/src/shared/Connect2_LegacyShared/Layout` (shell area: body classes)
- Other routes using it (catalog/blocks.md): BookmarksByGroup, ConnectShare, LegacyShareObject, MessageDetail, MessageList, MyBookmarks
- Related question: the body of SetThemeClassToBody (Connect2_LegacyShared.controller.js is not in the sources)

## Evidence
- Captured markup: every screen using Layout.Layout has `<body class="phone portrait connect-theme osx is-ltr">`
  (e.g. `migration/screens/LegacyShareObject/analysis/dom/default.html` line 1).
- Handler: `migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Layout.Layout.mvc.js`
  OnInitialize: `Connect2_LegacySharedController.default.setThemeClassToBody$Action(Connect2_LegacySharedModel.staticEntities.themeClass.connect, callContext)`
  (ThemeClass.Connect = `connect-theme`, static-entities-tst.json).
- Parity difference it explains: `[class] body: connect-theme` missing on the legacy screens.

## Expected change
The shell owns the body classes. It needs an API for a layout to set the theme class (ThemeClass identifier) on the
body when it initializes, e.g. `setBodyThemeClass(ThemeClass.Connect)`. Whether SetThemeClassToBody removes the other
theme classes, and whether the class is removed when the screen leaves, is not in the sources (question to the user,
or the action's code from Connect2_LegacyShared.controller.js).

## Workaround in the route until applied
Layout.Layout does not touch the body (README "Not ported"); nothing visible is rendered for it.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change (foundation task Y, 2026-10-15): the action's code is now in the sources
  (`migration/runtime-sources/Connect2_LegacyShared.controller.js`): SetThemeClassToBody (:6959-6986) calls
  RemoveAllThemeClassesFromBody(Theme) (:6548-6600: removes MediaHub, Connect and Orbit except Theme, errors ignored,
  :6909-6915) then AddThemeClassToBody(Theme) (`body.classList.add`, :278-283). Nothing removes the class when the
  screen leaves (Layout.Layout has no OnDestroy). Ported in `app/src/shell/bodyTheme.ts` (`setThemeClassToBody`, test
  `bodyTheme.test.ts`), called by `app/src/shared/Connect2_LegacyShared/Layout/Layout.tsx` at initialization
  (`useLayoutEffect`, OnInitialize `Layout.Layout.mvc.js:415`) with `ThemeClass.Connect` (`connect-theme`). README
  and Layout tests updated.
- Regression parity run on: Login, PINUnlock, PINRegister, Splash, HomeFeed (2026-10-15, after the change; see the
  task Y report).
