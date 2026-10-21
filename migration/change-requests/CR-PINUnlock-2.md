# CR-PINUnlock-2: BlockPinUnlock — support the PINUnlock screen instance (In_ForceVisible, Unlock, placeholder)

- Status: applied
- Raised by: PINUnlock, 2026-10-14
- Block: `UBTConnect.App_PIN.Block_PINUnlock` → `app/src/shell/dialogs/BlockPinUnlock.tsx`
- Other routes using it: every screen through CommonUI (lock container); PINUnlock (screen instance)
- Related question: Q2 (decision, open)

## Evidence
- Captured markup: `migration/screens/PINUnlock/analysis/dom/default.html` lines 5-305 (`$b1`: Layout_LoginFlow with
  `LayoutRuntime_Top` `b1-b1-$b1`, keypad shown, CommonUI_InsideLayout `$b2` inside `b1-Placeholder_CommonUI_Inside_Layout`).
- Expression / handler: `sources/pretty/UBTConnect.App_PIN.PINUnlock.mvc.js:128-186`: Block_PINUnlock
  `In_ForceVisible: true`, event `unlock$Action`, placeholder `placeholder_CommonUI_Inside_Layout` = CommonUI_InsideLayout
  (`In_IgnoreLockScreen: true, In_IgnorePolicy: true`).
- `sources/pretty/UBTConnect.App_PIN.Block_PINUnlock.mvc.js:160-335`: inputs `In_ForceVisible`, `In_IsCommonBlock`
  (passed to Layout_LoginFlow), local `UseOverlay` (default True), `IsUnsupportedSystem` (OnInitialize
  `Get_IsUnsupportedSystem`) → `ubt-layout--login__content__unsupported-card` branch, ContentWrapper `Unlock` raised
  as the block's `Unlock` (:297-304), placeholder `Placeholder_CommonUI_Inside_Layout` (:325-335).
- The shell component hard-codes `inForceVisible={false}`, has no `LayoutRuntime_Top`, no `onUnlock`, no placeholder.

## Expected change
`BlockPinUnlock` takes the block inputs `inForceVisible` (default False), `inIsCommonBlock` (LayoutRuntime_Top when
False), the `onUnlock` event (ContentWrapper Unlock) and `placeholderCommonUIInsideLayout`, and builds the
unsupported-system branch with U16's mock scenario. Then PINUnlock renders
`<BlockPinUnlock id="$b1" inForceVisible onUnlock={…} placeholderCommonUIInsideLayout={…} />`.

## Workaround in the route until applied
Q2 option A (pending the user's decision): the screen composes Block_PINUnlock's wrapper from the shared
`Layout_LoginFlow`, `Block_PINUnlock_ContentWrapper` and `CommonUI_InsideLayout` (`app/src/screens/PINUnlock/components/
BlockPINUnlockScreen.tsx`); the unsupported-system card is not built (as in the shell). Option B would render the block
as `<NotCaptured name="CR-PINUnlock-2: Block_PINUnlock">`.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: foundation owner, 2026-10-14 (batch approved by the user).
  - `app/src/shell/dialogs/BlockPinUnlock.tsx`: inputs `inForceVisible` (default False → ContentWrapper In_ForceVisible),
    `inIsCommonBlock` (default False: `LayoutRuntime_Top` `<s>-b1-$b1`), event `onUnlock` (ContentWrapper Unlock),
    placeholder `placeholderCommonUIInsideLayout` (inside `<s>-Placeholder_CommonUI_Inside_Layout`), and the
    unsupported-system branch: `get_IsUnsupportedSystem()` (new in `shared/UBTConnect/lib/actions.ts`, UC:4518-4545) on
    initialize → `div.ubt-layout--login__content__unsupported-card` > CustomContainer `<s>-$b2` (Neutral0, padding x
    ExtraLarge, margin x Base, radius Large) > UnsupportedVersion_Wrapper `<s>-$b3` (U16, `?mock=unsupported-browser`).
    `UBT_Shape.Large` = `large` added (original CSS `.border-radius-large`, UBTConnectBase.css:3394). The unused
    `locked` prop is gone.
  - CommonUI keeps its output: LockHost passes `inIsCommonBlock` (CommonUI_InsideLayout.mvc.js:201-206) and that
    instance keeps its static background markup; the screen instance renders the shared SVG_Background_LoginWrapper
    (compiled SVGCode with preserveAspectRatio="none"), as the PINUnlock route did.
  - Workaround removed: PINUnlock renders `<BlockPinUnlock id="$b1" inForceVisible onUnlock placeholderCommonUIInsideLayout>`;
    `components/BlockPINUnlockScreen.tsx` and `types.ts` `toAppPath` deleted (navigation through
    `useScreenController_NavigateToPage`, CR-Splash-2).
  Tests: `shell/dialogs/BlockPinUnlock.test.tsx` (CommonUI, PINUnlock instance with Unlock, unsupported system).
  Headless: `?mocksession=locked` → PINUnlock, PIN 1234 → back to the opened screen; `&mock=unsupported-browser` → the
  unsupported card, no keypad.
- Regression parity run on: 2026-10-14, after the last code change: Login (default, loading, offline), PINUnlock (default, loading, offline), PINRegister (default, loading, offline), Splash (default): 0 unexempted differences (DOM, styles, positions, text, pixels, calls); no exemption added.
