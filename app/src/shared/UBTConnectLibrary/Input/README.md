# Input

OutSystems: `UBTConnectLibrary.ConnectPatterns.Input` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.Input.md`

| Input              | Type                 | Prop                | Default |
| ------------------ | -------------------- | ------------------- | ------- |
| In_Options         | SearchInput (record) | `inOptions`         | `{}`    |
| In_ExtendedClasses | Text                 | `inExtendedClasses` | `''`    |

The pack lists In_ExtendedClasses only; In_Options is in the compiled model (`…ConnectPatterns.Input.mvc.js` :12-24).
Events: `Event_OnChange(SearchString)` → `onEventOnChange`, `Event_ClearString` → `onEventClearString`,
`Event_Submit(SearchString)` → `onEventSubmit`, `Event_OnReady(InputWidgetId)` → `onEventOnReady` (the input
element id), `Event_OnFocus` → `onEventOnFocus`. Placeholders: none.

Markup (view :157-372): `div.ubt-search-input` > InputWithIcon > InputWithIcon right > the search Input widget.
- The first InputWithIcon has the search icon while the text is empty.
- InputWithIcon right has the clear icon `cancel_fill` while there is text.
- The search Input widget is `span.input-search > input`. Its classes are
  `form-control <In_ExtendedClasses> border-radius-<BorderRadius> OSFillParent`. Its options are (prompt, mandatory,
  enabled, max length, autocomplete on/off).

Behaviour (controller :376-875):
- OnReady sets the initial string and attaches `clearStringAction` to the input element.
- OnReady focuses the input (FocusOnReady) and raises Event_OnReady.
- When the user types, the block validates a mandatory input.
- The block raises Event_OnChange at once (Debounce_DelayMS = -1) or after the delay (JSUtils_DebounceTimer, cancelled
  on destroy).
- Enter blurs the input and raises Event_Submit.
- The clear icon empties the input, focuses it and raises Event_ClearString.
- New parameters replace the text with a new InitalString (or always with IsSyncValueWithInput).
- New parameters also recompute the validity (IsForceInvalid, IsMandatory).

## Captured variants (1 distinct in the pack; 3 tested)

| Capture | Source                  | What it shows                      |
| ------- | ----------------------- | ---------------------------------- |
| v1      | BrowseCountries/default | pack: wrapper only                 |
| v2      | BrowseCountries/default | empty search, search icon, rounded |
| v3      | Notes/default           | disabled while loading             |

## Not captured / not settled

- The clear icon, the invalid state and the events are in no capture: tested from the compiled code. The invalid
  state is the platform Input widget markup (OutSystemsReactView.js ValidationWidget, CR-Profile-2): " not-valid" on
  the input, `aria-describedby`, `span.validation-message` after it, shared with `components/OSValidation` (no caller
  sets IsMandatory or IsForceInvalid).
- SearchInput defaults = the structure's attribute defaults (`UBTConnectLibrary.model.js:1477-1516`, SearchInputRec,
  copy in migration/screens/BrowseDirectory/analysis/sources/raw/).
  The defaults are: IsEnabled True, IsMandatory False, ValidationMessage
  "Required", MaxLength 50. The other defaults are: InitalString "", SearchPrompt "Search", IsForceInvalid False, Debounce_DelayMS -1,
  BorderRadius Shape.SoftRounded (`soft`, TST value), EnableAutocompleteHTML False, FocusOnReady False,
  IsSyncValueWithInput False. Settles question Q-W2C-2.
- CheckForEnterKeyPress / BlurInput / FocusOnInput (UBTConnectLibrary actions, not in the sources) are read as their
  names say: Enter key, blur, focus of the input.
