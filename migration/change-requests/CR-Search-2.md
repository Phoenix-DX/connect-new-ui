# CR-Search-2: shared Input — FocusOnReady leaves the captured input unfocused

- Status: rejected
- Raised by: Search, 2026-10-15
- Block: `UBTConnectLibrary.ConnectPatterns.Input` → `app/src/shared/UBTConnectLibrary/Input/Input.tsx`
- Other routes using it (catalog/blocks.md): every route with a search input and FocusOnReady True
- Related question: none yet (proposed exemption in the route report)

## Evidence
- Captured markup / styles: `migration/screens/Search/analysis/dom/default.html` lines 37-41 (`input#b1-b2-Input_Search`):
  the captured border colour is rgb(206, 212, 218) in default, loading and offline, i.e. the input is not focused.
- Expression / handler: `sources/pretty/UBTConnectLibrary.ConnectPatterns.Input.mvc.js` :598-601
  `if In_Options.FocusOnReady → JSUtilis_Element_Operations_Focus(Input_Search)`; Search passes FocusOnReady True
  (`ScreenBlock_Search.mvc.js` :311). The body of JSUtilis_Element_Operations_Focus (UBTJavaScriptUtils.controller.js)
  is not in the local sources.
- Parity difference it explains: `[style] … input#b1-b2-Input_Search … border-*-color rgb(206, 212, 218) → rgb(106, 113, 120)`
  (`:focus` rule `.layout-native .header-top-content .form-control[data-input]:focus` / neutral-7), and the pixel hotspots
  0-80 px at the top (parity/default.diff.png), in all three states.

## Expected change
Make the shared Input's FocusOnReady behave as the original runtime does in the capture (the focus does not stick on
first render: e.g. the original focus helper runs while the screen is still in its transition), once the
UBTJavaScriptUtils source shows what JSUtilis_Element_Operations_Focus does; or the user accepts the difference as an
exemption.

## Workaround in the route until applied
None: the route passes the original inputs (FocusOnReady True); the difference stays in the parity reports.

## Resolution (foundation owner)
- Rejected by the user, 2026-10-15: Search Q4 = keep FocusOnReady; the focus border is covered by the accepted exemption
  CAPTURE-UNFOCUSED-SEARCH-INPUT. No change.
