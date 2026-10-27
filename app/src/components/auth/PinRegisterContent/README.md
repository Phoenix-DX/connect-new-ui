# Block_PINRegister_ContentWrapper

OutSystems: `UBTConnect.App_PIN.Block_PINRegister_ContentWrapper` · pack
`migration/blocks/UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.md` · knowledge `migration/knowledge/auth.md`

| Input        | Type    | Prop           | Default                 |
| ------------ | ------- | -------------- | ----------------------- |
| UseOverlay   | Boolean | `useOverlay`   | `true`                  |
| isFromMenu   | Boolean | `isFromMenu`   | `false`                 |
| RegisterText | Text    | `registerText` | `'Register a PIN code'` |
| ConfirmText  | Text    | `confirmText`  | `'Confirm PIN code'`    |
| EnableName   | Boolean | `enableName`   | `false`                 |
| UserName     | Text    | `userName`     | `''`                    |
| IsFirstUse   | Boolean | `isFirstUse`   | `true`                  |

The component renders from props only. It does not import `platform/`. The keypad `SetPin` event goes to the prop
`onSetPin`.

The flow (OnInitialize, name read, success routes, error messages) is in the hook `usePinRegisterContent`
(`src/platform/session/usePinRegisterContent.ts`). It wraps `usePinCodeRegister` and returns `userName`, `isFirstUse`,
`onSetPin` and `onBeforeSetPin` (ReplaceOnUpcomingNavigation of the keypad).

PINRegister and PINChange call the hook and pass the result as props. They also pass the PreventBackNavigation block
of the keypad (`renderPreventBackNavigation`). The hook is in `platform/session/` because two pages use it. The option
`enabled` (default `true`) is `false` on PINChange until the unlock.

Events: none (the hook handles them). Placeholders: none. The block fills `Pincode_Register` (PIN length 4). Errors go through
`feedbackMessageAutoClose` (error). User name: FirstName LastName of `appManager_GetCachedUserInfo`
(`src/platform/session/cachedUserInfo.ts`).

Success navigates:

- From the menu: to Menu with "Your PIN has been changed.".
- Otherwise: to the resume link, LastURL or HomeFeed with IsNavigateToHomeOnBack.

## Captured variants (2 tested)

| Capture | Source                                  | What it shows                                               |
| ------- | --------------------------------------- | ----------------------------------------------------------- |
| v1      | pack variant 1, PINRegister/default     | wrapper (nested Pincode_Register collapsed)                 |
| v2      | `PINRegister/analysis/dom/default.html` | EnableName, first entry, every block expanded (name masked) |

## Not captured / not settled

- The confirmation step, errors, the three success routes and isFromMenu: from the compiled code, tested in
  `usePinRegisterContent.test.tsx`.
- `ScreenController_NavigateToPage(URL, True)` (resume link, LastURL; :636-649) is the shared
  `useScreenController_NavigateToPage()` of `UBTJavaScriptUtils/lib/actions.ts` (CR-Splash-2). It is a replace
  navigation. A same-origin href becomes its in-app path (Splash stores `window.location.href` in LastURL).
- OnInitialize reads the name with `appManager_GetCachedUserInfo` (the counterpart of `AppManager_GetCachedUserInfo`,
  `Block_PINRegister_ContentWrapper.mvc.js:571-579`). The read is synchronous and local (the client variable
  `AppManager_UserExtended`), so the name is set before the first render and there is no server call. An empty record
  gives the name `" "` (FirstName + " " + LastName). UseOverlay False (ConnectLogo.svg) is from the compiled code only.
