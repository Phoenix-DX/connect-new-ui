# Platform widgets (`src/components`)

OutSystems platform widgets (Form, Input validation, Popup, List, RadioGroup) are not OutSystems blocks. They do not
live in `src/shared`. Each widget is a port of the OutSystems client runtime and has no `@os-block` tag. Each folder has
an `index.ts`; import from the folder. Header comments name the runtime file and the offsets that the port follows.

| Component                   | Use it for                                              |
| --------------------------- | ------------------------------------------------------- |
| `OSValidation/`             | built-in validation of Form, Input and TextArea widgets |
| `OSPopup/usePopupWidget.ts` | page effects of every Popup widget                      |
| `OSList/`                   | List and ListItem widgets, including swipe actions      |
| `OSRadioGroup/`             | RadioGroup and RadioButton widgets                      |
| `OSBlock.tsx`               | the wrapper OutSystems renders around every block       |
| `FlagPanel.tsx`             | the feature-flag panel shown with `?ffpanel=1`          |

## OSValidation

Ports the platform validation service and its React bindings.

- `validationService.ts` (no React): `ValidationService` keeps the widgets of one screen, their records
  (`Valid`, `ValidationMessage`) and the Form hierarchy.
  - `validate(id?)` validates a widget subtree. With no id, it validates the whole screen.
  - `validate(id?)` also recalculates the Forms, re-renders the widgets and returns the root result.
  - `isValid(id)` reads `<Widget>.Valid`.
  - `setWidgetValidity(id, valid, message)` is the action-side write.
  - The widgets call `register` and `unregister`.
- Messages: `MessagesProvider` and `UBTCONNECT_VALIDATION_MESSAGES` hold the texts of the app language resources
  (for example `Validation.Mandatory` = "This field is required.", `Validation.Email` = "Enter a valid email."). The
  data type of the widget (`Text`, `PhoneNumber`, `Email`) and its browser `validity` select the message.
- `OSValidation.tsx` exports these parts:
  - `useScreenValidationService()`: one service for each screen. The service stays for the life of the screen.
  - `ValidationServiceProvider`.
  - `OSForm`: a validation aggregator. Its `Valid` is the conjunction of the `Valid` values of its children.
  - `useInputWithVariableValidation`: registers an input and validates it from the element's value and `validity`.
    It returns the `not-valid` class, `aria-describedby` and the message element.
  - `ValidationMessage` (`<span id="<id>_DescribedBy" class="validation-message">`).
  - `useWidgetValidationRecord`.
- A widget outside a provider registers nowhere and is always valid. Typing does not clear a shown message. Only the
  next validation clears it.

How a screen validates:

1. Call `useScreenValidationService()`.
2. Wrap the markup in `ValidationServiceProvider`.
3. Render the inputs inside an `OSForm`.
4. Call `validation.validate()` (or `validate('<FormId>')`) in the button action, before the screen logic.
5. Continue only when the call returns true.

These files use the service: `src/pages/Profile/ProfilePage.tsx`, `src/pages/Login/LoginPage.tsx` (validate with no visible
widget), `src/pages/ContactUsDetails/ContactUsDetailsPage.tsx` (`components/MessageTextArea.tsx`) and the shared Input block
(`src/components/ui/Input/Input.tsx`).
Tests: `OSValidation.test.tsx`.

## OSPopup

`usePopupWidget(showPopup)` reproduces what the platform Popup widget does to the page. Every Popup port calls it while
the widget is in the screen, open or not. `OSPopupWidget` calls it when the caller renders the markup itself.

- Adds `popup-disable-scroll` to `<html>` while a dialog is open. Removes it when the dialog closes or unmounts.
- Sets `aria-hidden="true"` on `#reactContainer` while a dialog is open. On close, removes it only when the
  document has no `.popup-backdrop`.
- Re-runs on every client-variable change, because it subscribes to the shell state. The original app re-renders the
  block that owns the Popup widget in the same way. A closed dialog later in the tree therefore removes the class that an
  open dialog added, as on TST.

These files use it: `src/components/ui/Popup/Popup.tsx`, `src/components/ui/Dialog/Dialog.tsx`, `ContactPopup`,
`EntityDetailsActionsContainer` (`src/containers/EntityDetailsActions`) and the shell dialogs (`src/platform/feedback/dialogs`, `DialogExitConfirmation`).
Tests: `usePopupWidget.test.tsx`.

## OSList

`OSList` renders one iteration for each record. It has no wrapper for each row. Its class is `<className> OSFillParent`.
It takes the loading and error classes from `sourceDataFetchStatus`. It has an optional `onScrollEnding` (infinite
scroll, default threshold 2000 px).

`OSListItem` is a plain item. It is a swipeable item when the caller gives `leftActions` or `rightActions`.
`OSListItemAction` is a swipe button. The full prop table is in `src/components/ui/os/OSList/README.md`. Stories and tests are
in the folder.

## OSRadioGroup

`RadioGroup` (`value`, `onValueChange`, `validationMessage`) and `RadioButton` render
`div[data-radio-group][role=radiogroup]`. `RadioGroup` has an optional `onChange` that runs after paint.
`aria-activedescendant` is set to the selected button. The validation message span is present when a message is set.
`src/pages/Photobook/components/Photobook_Options_Right.tsx` uses these components.

## OSBlock

`<OSBlock name="<Flow>.<Block>" id?>` renders `<div class="OSBlockWidget" data-block="<name>">`. Every shared block's root
uses it. Keep the name: CSS and parity checks depend on it.

## NotCaptured

It lives in `src/platform/feedback/NotCaptured.tsx` (P3-1), not in `src/components`.

`<NotCaptured name="...">` renders `div.rv-missing[data-not-captured]` with "Not captured: <name>" and optional children.
It stands for any state or block the original capture never showed. Never replace it with an invented design. Search for
`data-not-captured` to list what is still open.
