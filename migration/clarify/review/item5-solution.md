# Item 5 solution: the Tooltip and the MultiResolutionImageLoader in React (proposal, 2026-10-28)

Status: **proposal, not approved**. No code changed. Facts T1–T5 and L1–L3 come from `item5-tooltip-loader.md`
(settled). `W<n>` = character offset in `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js`.
`Tooltip.mvc.js:<n>` = line in `OutSystemsUI_2_23.Content.Tooltip.mvc.js` (`tst_source.py show`).
`MRIL.mvc.js:<n>` = line in `Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc.js`.

`AccItem.mvc.js:<n>` = line in `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc.js`.
`OSUI.ctrl:<n>` = line in `migration/runtime-sources/OutSystemsUI_2_23.controller.js`.

## 1. Summary

- Two shared components replace the two stand-ins: `components/ui/Tooltip/` (the OutSystems UI block
  `Content.Tooltip`, T3) and `components/ui/MultiResolutionImageLoader/` (the Connect2_LegacyShared block, L1).
- Both are props-only components in `components/ui/`, as `Card`, `ImageLoadErrorHandler` and `NetworkWarning` are
  (`components/ui/README.md` groups 1 and 2). Rule 5 holds: they import only `components/ui/` and `lib/`.
- The Tooltip keeps its open state inside, as the OSUI provider does (W646900). The owner opens and closes it through
  a ref handle (`open()`, `close()`) that stands for the client actions TooltipOpen and TooltipClose (T2).
- The Tooltip ports the OnClick path of the provider. Click and focus open it; body click, Esc, Tab and blur close
  it. It renders the is-open classes, the aria attributes and the `top` placement with a flip to `bottom`. The hover
  path is out of scope.
- The loader renders the root with the two slots and ports the InitializeJS rules in one effect (MRIL.mvc.js:251-278).
  `PhotoLazyLoaded` and `Card_MemberInformation_Survey` use it; the inline copy goes away.
- Visible changes (section 4): a second click on the warning icon no longer closes the tooltip. The balloon gets its
  arrow, its dark style and its position. The helper card shows one image, not two.
- Open points for the user (section 6): the position provider, the `name` value, the inner ids, the open-state
  proof.

## 2. Tooltip design

### 2.1 Place and files

`app/src/components/ui/Tooltip/` with the tag `@origin OutSystemsUI_2_23.Content.Tooltip` (rule 13). It is a block
port, not a platform widget, so it does not go to `components/ui/os/` (`docs/guides/os-widgets.md`, first paragraph).
Story title `Shared/osui/Tooltip`, as `Card.stories.tsx:6`.

| File                        | Holds                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| `Tooltip.tsx`               | the markup, the open state, the handle, the events of the content and the body              |
| `balloonPosition.ts`        | `computeBalloonPosition(anchorRect, balloonRect, viewport, offset, arrowSize)`: pure numbers |
| `Tooltip.test.tsx`          | the behaviour tests (section 7)                                                             |
| `balloonPosition.test.ts`   | the position math with numbers                                                              |
| `Tooltip.stories.tsx`       | closed (as in the room form) and open (not captured, marked so)                             |
| `README.md`, `index.ts`     | as `OSDropdownCustom/README.md`: props, behaviour, not ported                               |

### 2.2 Props

| Block input or action (Tooltip.mvc.js) | Prop                       | Note                                                                                  |
| -------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------- |
| block instance                         | `id`                       | the `OSBlock` id; today `${scope}-Tooltip_UniqueName` (AccItem.tsx:114)               |
| Trigger (:28)                          | `trigger?: 'OnClick' \| 'OnHover'` | default OnHover is the provider default (W667300). The app passes OnClick (T1) |
| Position (:16)                         | `position?: 'top' \| 'bottom' \| 'left' \| 'right' \| …` | default `right` (TooltipConfig W667600). The app passes `top` |
| StartsOpen (:22)                       | `startsOpen?: boolean`     | default false; read at mount only (W662727: later changes do nothing)                 |
| ExtendedClass (:34)                    | `extendedClass?: string`   | classes on `.osui-tooltip` (W184573)                                                  |
| placeholder Content                    | `content: ReactNode`       | the icon                                                                              |
| placeholder Tooltip                    | `tooltip: ReactNode`       | the text                                                                              |
| event OnToggle (:482-514)              | `onToggle?(isOpen)`        | raised by every open and close (W654150, W653900)                                     |
| event Initialized (:345-376)           | not ported                 | no handler in the app (AccItem.mvc.js:348-383 has only `_handleError`)                |
| TooltipOpen, TooltipClose (T2)         | `ref: TooltipHandle`       | `open()` and `close()` (`useImperativeHandle`), section 2.5                           |

### 2.3 Markup (T3, Tooltip.mvc.js:168-247, and the attributes the provider adds at build)

```html
<div class="OSBlockWidget" data-block="Content.Tooltip" id="<id>">
  <div class="osui-tooltip[ osui-tooltip--is-open][ <extendedClass>]" name="<uniqueId>" data-container=""
       id="<id>-TooltipWrapper">
    <div class="osui-tooltip__content" id="<id>-Content" role="button" tabindex="0"
         aria-describedby="<id>-Tooltip" default-tabindex-element="">
      {content}
    </div>
    <div class="osui-tooltip__balloon-wrapper osui-balloon[ osui-tooltip__balloon-wrapper--is-open][ osui-balloon--is-open][ <placement>]"
         data-uniqueid="<uniqueId>" id="<id>-TooltipBallonWrapper" role="tooltip" aria-hidden="true|false"
         style="--osui-balloon-width: max-content; --osui-balloon-shape: var(--border-radius-sharp);
                --osui-floating-position-x: <x>px; --osui-floating-position-y: <y>px">
      <div class="osui-tooltip__balloon-wrapper__balloon OSInline" id="<id>-Tooltip">{tooltip}</div>
      <div class="osui-tooltip__balloon-arrow" id="<id>-ArrowElement" style="left: <ax>px; bottom: -5px"></div>
    </div>
  </div>
</div>
```

| Part                                  | Evidence                                                                                      |
| ------------------------------------- | --------------------------------------------------------------------------------------------- |
| the three containers and two placeholders, always in the DOM | Tooltip.mvc.js:181-247 (`$if(false, …)` renders the balloon branch always)      |
| `name` and `data-uniqueid`            | Tooltip.mvc.js:184-186, 209-211; value = GenerateUniqueId (:575-580, W155665)                 |
| `OSInline` on the balloon placeholder | Tooltip.mvc.js:221-223                                                                        |
| `role=button`, `aria-describedby`, `tabindex=0`, `default-tabindex-element` on the content | W658548, W658624, W658741, W658880; constants W6444, TabIndexShow `0` |
| `role=tooltip` on the wrapper         | W658819                                                                                       |
| `aria-hidden` = not open              | Balloon `_setA11YProperties` W110547 (useFocus is false, W664700: no role dialog, no tabindex) |
| `--osui-balloon-width`, `--osui-balloon-shape` | Balloon build W116600: `_setBalloonWidth` W111400 (max-content), `setBalloonShape` W117700 (`sharp`, W665500) |
| position variables, placement class, arrow style | FloatingUI W1278194-1280300, only while open                                       |

The inner ids follow the pattern of the PhotoLazyLoaded port (`<block>-Root`, `PhotoLazyLoaded.tsx:57-66`): a named
container gets `<blockId>-<name>`. No capture shows the block (`migration/blocks/OutSystemsUI_2_23.Content.Tooltip.md`:
"Captured DOM variants (0 distinct, 0 instances)"). **Unclear:** the exact ids on TST; open point O3.

### 2.4 Behaviour ported (T4), OnClick trigger only

The provider computes `IsHover = IsPhone ? false : (Trigger = OnHover or Trigger = null)` (Tooltip.mvc.js:586-592).
With Trigger = OnClick (T1) `IsHover` is false on every device, so the hover branch never runs for this app.

| #   | Behaviour                                                                                        | Provider                                   | React port                                              |
| --- | ------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------- |
| B1  | A click on the content opens; it never closes. The click does not reach the body.               | `_onClick` W650700 (stopPropagation, `_triggerOpen`) | `onClick` on the content: `stopPropagation`, open |
| B2  | Focus on the content opens.                                                                      | `_onFocus` W650850, listener W651750       | `onFocus` on the content                                |
| B3  | Blur: one tick later, close unless the active element is inside this tooltip.                    | `_onBlur` W649200-650600, AsyncInvocation W123356 | `onBlur` + `setTimeout(0)`; check `document.activeElement.closest('.osui-tooltip')` |
| B4  | Keydown on the content: Esc while open, or Tab, closes. The key does not propagate.              | `_onkeypressCallback` W651000              | `onKeyDown` on the content                              |
| B5  | Open: add `osui-tooltip--is-open` to the root and `osui-tooltip__balloon-wrapper--is-open` to the wrapper; OnToggle(true). | `_triggerOpen` W654300-654900 | state `isOpen = true`, classes rendered, `onToggle(true)` |
| B6  | Open: the balloon gets `osui-balloon--is-open`, `aria-hidden=false`, the position and the placement class. | Balloon `_toggleBalloon` W114300-116500 | rendered from state; position from an effect after open |
| B7  | Close: remove the three classes, `aria-hidden=true`, OnToggle(false); after 50 ms the position variables go to 0. | `_triggerClose` W653750, `unsetFloatingPosition` W1281400 | state `isOpen = false`; a 50 ms timeout resets x and y |
| B8  | A click on `document.body` while open closes. Clicks on the content, inside the content, or inside the balloon do not. | Balloon `_bodyClickCallback` W104400-104900, listener W64972, added only while open W113826-114300 | a `click` listener on `document.body` in an effect that runs while open |
| B9  | A click inside the balloon does not reach the body, unless the target is a focusable child.      | `_onBalloonClick` W647600-648600 (constants W6029) | `onClick` on the balloon content                |
| B10 | `open()` opens when closed; `close()` closes when open.                                          | `open` W663400, `close` W663000; API W882279, W880158; `TooltipClose(WidgetId)` finds the block by its id (W178260, W184573) | the handle methods |
| B11 | StartsOpen true opens at build; OnToggle(true) fires.                                            | `_setCssClasses` W651400-651600            | `isOpen` starts true; `onToggle(true)` in a mount effect |
| B12 | Position: `top`, centred on the content, above it by the offset; flip to `bottom` when it does not fit. The arrow sits at the bottom edge, centred on the content. | balloon options W664600-665600; FloatingUI offset W1277383-1277450, arrow W1277698, flip W1278059, arrow style W1279300-1280300 | `computeBalloonPosition` in an effect after open, re-run on scroll and resize (autoUpdate W1281188) |
| B13 | The offset = `--osui-floating-offset` of the content (8 px, `var(--space-s)`, OutSystemsUI.css "6.2.15 Tooltip"); final offset = sqrt(offset × arrow² ) / 2 with the 10 px arrow. | W693256, W1277400 | the same formula, the offset read with `getComputedStyle` |
| B14 | Unmount: remove the listeners and the timers.                                                    | OnDestroy → TooltipDestroy (Tooltip.mvc.js:532-556), dispose W663100 | effect cleanups                           |
| B15 | OnParametersChanged: a new Position updates the balloon; StartsOpen and Trigger changes do nothing for OnClick. | Tooltip.mvc.js:413-481, `changeProperty` W661400-662900 | `position` read at every open; `startsOpen` at mount only |

Out of scope, and why:

| Not ported                                                              | Reason                                                                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Hover: `osui-tooltip--is-hover`, mouseenter and mouseleave (W651400, W652100-652700) | `IsHover` is always false with Trigger OnClick (T1). T5: one user.                      |
| Another balloon opens → this one closes (`_balloonOnToggleCallback` W647100, custom event W111800) | one Tooltip in the app (T5). **Unclear:** other `osui-balloon` users in the app; open point O5 |
| The same-tick body-click guard `_isOpenedByApi` (W104600, reset W654800) | the app opens through a 500 ms timeout (T2), never in the tick of a click                              |
| Event Initialized, LogEvent calls (Tooltip.mvc.js:362, :395-398)        | no handler in the app; logs only                                                                       |
| `auto` placement, `shift` middleware (W1276500-1276900)                 | `top` is not `auto`; the app has one position                                                          |
| Window resize closes the balloon (W109500)                              | only with `useTriggerWidth`; the Tooltip does not set it (W664600-665600)                             |

### 2.5 Why a ref handle for open and close

The provider owns the open flag (`_isOpen`, W646900); the screen only sends TooltipOpen and TooltipClose by widget id
(T2, AccItem.mvc.js:1335, :2572-2583). A handle keeps one owner of the state and the same two verbs. The owner never
sees the body click or the Esc path. Section 5 lists the alternatives. The app has no `useImperativeHandle` yet
(grep over `app/src`); it is a standard React API and fits a block with its own runtime object.

### 2.6 Use in HostSurvey_AccommodationItem

- `tooltipRef.current?.close()` in OnChange_Inputs for the room name (today `setTooltipOpen(false)`, AccItem.tsx:146;
  TST AccItem.mvc.js:1335).
- `delayTooltip(isOpen)` keeps its 500 ms timeout (AccItem.tsx:166-170; TST :2572-2583) and calls `open()` or
  `close()`. OnDestroy keeps `clearTimeout` (AccItem.tsx:172-177; TST :2585-2590).
- The state `tooltipOpen` (AccItem.tsx:126) goes away. The markup at :352-365 becomes
  `<Tooltip id={ids.tooltip} ref={tooltipRef} trigger="OnClick" position="top" content={<i className="icon orbit-icon-circle-warning" data-icon="" />} tooltip="Room name must be unique." />`.
- `OSBlock` moves inside the Tooltip (the component renders it), as `ImageLoadErrorHandler.tsx:49` does.

## 3. Loader design

### 3.1 Place and files

`app/src/components/ui/MultiResolutionImageLoader/` with `@origin Connect2_LegacyShared.Widgets.MultiResolutionImageLoader`.
Story title `Shared/Connect2_LegacyShared/MultiResolutionImageLoader` (as `ImageLoadErrorHandler.stories.tsx:5`).
Files: `MultiResolutionImageLoader.tsx`, `MultiResolutionImageLoader.test.tsx`, `.stories.tsx`, `README.md`,
`index.ts`.

### 3.2 Props and markup (L1, MRIL.mvc.js:121-147)

| Prop           | Meaning                                                      |
| -------------- | ------------------------------------------------------------ |
| `id`           | the block instance id (`OSBlock` id, for example `${prefix}-$b1`) |
| `loading`      | placeholder Loading (ReactNode)                              |
| `imagesToLoad` | placeholder ImagesToLoad (ReactNode)                         |

```html
<div class="OSBlockWidget" data-block="Widgets.MultiResolutionImageLoader" id="<id>">
  <div id="<p>-Root" class="multi-resolution-image-loader multi-resolution-image-loader-loading|loaded" data-container="">
    <div id="<p>-Loading">{loading}</div>
    <div id="<p>-ImagesToLoad">{imagesToLoad}</div>
  </div>
</div>
```

`<p>` = the id without `$` (`PhotoLazyLoaded.tsx:40, :57-66` already renders these ids and classes).

### 3.3 Rules of InitializeJS (MRIL.mvc.js:251-278) and the port

| #   | Rule                                                                                           | Port                                                                 |
| --- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| R1  | A capture-phase `load` listener on the last child (ImagesToLoad) (:253, :271).                 | `useEffect`: `imagesRef.current.addEventListener('load', onLoad, { capture: true })` |
| R2  | A load of an image without a `src` attribute is ignored (:254-257).                             | the same check on `target.getAttribute('src')`                       |
| R3  | Root loses `-loading` and gets `-loaded` (:258-259).                                           | state `loaded = true`; the root class is rendered                    |
| R4  | Every `img` of ImagesToLoad loses `multi-resolution-image-loader-loaded`; the last `complete` one gets it (:260-268). | the effect sets the class on the DOM images (section 5, choice C) |
| R5  | At start, every `img` of ImagesToLoad that is `complete` runs the same handler (:272-277).      | the same scan in the effect, once after mount                        |
| R6  | No listener on the Loading slot; the Loading image never changes the state.                    | the listener is on the ImagesToLoad div only                         |
| R7  | A root that is loaded stays loaded (nothing removes `-loaded`).                                | state only moves to true                                             |

The CSS makes the state visible only under `.backwards-compatibility`
(`Connect2_LegacyShared.ConnectMobileCommonTheme.css:4070-4083`). While loading, the ImagesToLoad div has height 0 and
its images have opacity 0. When loaded, the CSS hides the Loading div and the ImagesToLoad images without the loaded
class. `OrbitLayout.tsx:72` has that class, so HostSurvey and MilestoneDetail show the effect.

### 3.4 Users

- `PhotoLazyLoaded.tsx:30-80`: keep the block, replace :57-78 with
  `<MultiResolutionImageLoader id={`${prefix}-$b1`} loading={<img className={imgClass} src=… alt="" />} imagesToLoad={<img className={imgClass} src={url || undefined} alt="" onClick={onImageClicked} />} />`.
  The state `loaded` and the `onLoad` prop go away. Same DOM as today (G3, no visible change).
- `Card_MemberInformation_Survey.tsx:66-78`: wrap the two images (L3, CMS view :195-231): Loading = the static User
  image, ImagesToLoad = the `LoadedPhotoURL` image with `data-error-placeholder-src`. The bare `div#<scope>-$b1`
  becomes the loader block.
- `MemberInformationCard.tsx:88-97` stays as it is: Card_MemberInformation has no loader on TST (L2).

### 3.5 The error path (`data-error-placeholder-src`)

1. The photo URL fails: no `load` event, the root stays `-loading`, the User image stays visible (R1, CSS :4070-4077).
2. `ImageLoadErrorHandler` (`CommonUiLayout.tsx:78`, under `div.main.screen`, `BaseLayout.tsx:73`) catches the
   capture-phase `error`, sets `img.src` to `data-error-placeholder-src` or the default User_rectangle image, and logs
   the application event (`ImageLoadErrorHandler.tsx:27-45`).
3. The placeholder loads: `load` fires on the same image, the src is set, so the root turns `-loaded` and the image
   gets the loaded class (R2-R4). The Loading image hides; the placeholder shows in its place.
4. The loader needs no error code of its own. The two listeners are independent, as on TST (L1, HandleImageLoadError).

The CMS image has the User image as placeholder (L3); the PhotoLazyLoaded image has none
(`PhotoLazyLoaded.mvc.js:206-237`, no `data-error-placeholder-src`), so it gets the default User_rectangle image.

## 4. Behaviour mapping

| #   | Difference                                    | TST                                                                                               | After                                                                     | Same or changes                                                                                                                                |
| --- | --------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| G1a | Tooltip markup                                | balloon, arrow, `osui-balloon`, `name`, `data-uniqueid`, aria attributes always in the DOM (T3, 2.3) | the same markup                                                        | changes: the closed balloon is in the DOM (hidden by `.osui-balloon` CSS); the icon gets `role=button tabindex=0`, so it is focusable       |
| G1b | Open look                                     | dark balloon (`--osui-tooltip-background-color`), max-width 250 px, arrow, padding `--space-m` (OutSystemsUI.css 6.2.15, OrbitTheme.css §4.23.18) | the same classes, so the same CSS | changes: today the text renders as a bare div with no balloon style                                                                     |
| G1c | Second click on the icon                      | nothing: a click only opens (B1)                                                                  | nothing                                                                   | changes: today it closes (AccItem.tsx:354-356)                                                                                                 |
| G1d | Click elsewhere, Esc, Tab, blur               | closes (B3, B4, B8)                                                                               | closes                                                                    | changes: today nothing closes except typing in the room name                                                                                   |
| G1e | Focus on the icon                             | opens (B2)                                                                                        | opens                                                                     | changes: today the icon is not focusable                                                                                                       |
| G1f | Save with a duplicate name                    | 500 ms later the balloon opens above the icon with the arrow (T2, B12)                            | the same                                                                  | same timing; the look changes (G1b)                                                                                                            |
| G1g | Typing in the room name                       | TooltipClose at once (AccItem.mvc.js:1335)                                                        | `close()` at once                                                         | same                                                                                                                                           |
| G1h | Balloon position                              | fixed, `--osui-floating-position-x/y` from Floating UI, `top` class, flip to `bottom` (B12)       | the same variables and classes from `computeBalloonPosition`              | changes: today no position; **Unclear:** pixel equality with Floating UI (O1)                                                                  |
| G2  | Card_MemberInformation_Survey images          | the User image until the photo loads, then the photo only (L1, L3, CSS :4070-4083)                | the same                                                                  | changes: today both images render inside `display:block` (OrbitTheme.css:2737), so the row shows two images                                    |
| G2e | Photo URL fails                               | User image stays, then the placeholder replaces the photo slot (3.5)                              | the same                                                                  | same visible result as today (one User image), different DOM                                                                                   |
| G3  | PhotoLazyLoaded                               | the loader block with the same classes (L1)                                                       | the shared component, same DOM as today                                   | same                                                                                                                                           |

## 5. Options considered

### A. Where the Tooltip lives

| Option | Description                                                       | Pros                                                               | Cons                                                        |
| ------ | ----------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| a      | `components/ui/Tooltip/` (block port, `@origin`)                  | same place as Card, Animate, InputWithIcon; rule 5 holds           | none                                                        |
| b      | `components/ui/os/OSTooltip/` (as a platform widget)              | near OSDropdownCustom                                              | `os/` is for platform widgets, not OSUI blocks (os-widgets.md) |
| c      | keep it inside `pages/HostSurvey/components/`                     | smallest diff                                                      | a page-local copy of a library block; a second user later copies it |

Recommendation: **a**. Plain words: the tooltip is a library block of OutSystems UI; the app keeps every library block
in one folder.

### B. How the owner opens and closes the Tooltip

| Option | Description                                                                 | Pros                                                                        | Cons                                                                                         |
| ------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| a      | a ref handle `open()` / `close()`; the component owns `isOpen`              | one owner of the state, as the provider (W646900); the two verbs of T2; body click and Esc stay inside | an imperative API in a declarative tree; first `useImperativeHandle` in the app |
| b      | controlled: `isOpen` + `onOpenChange(isOpen)`; the owner owns the state     | idiomatic controlled component                                              | the owner must store every close cause (body click, Esc, blur); two places know the rules    |
| c      | hybrid: `defaultOpen` + `open` prop as a one-shot command                   | no ref                                                                      | a prop that means "do once" is a known React smell; harder to test                           |

Recommendation: **a**. Plain words: the screen only says "open now" and "close now", as it does on TST; the tooltip
decides the rest itself.

### C. How the loader marks the loaded image

| Option | Description                                                                   | Pros                                                              | Cons                                                                                 |
| ------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| a      | the effect sets the image class on the DOM (R4) and the root class from state | slots stay plain `img` elements; same rule as TST for any number of images | one class lives outside React's render; documented in the README                |
| b      | render props: `imagesToLoad(loadedIndex)` and the caller adds the class       | everything rendered by React                                      | the API differs from the block; the caller repeats the rule; `complete` still needs the DOM |
| c      | no shared component: copy the inline code into the card                       | smallest diff                                                     | a third copy (G3); the B2 note asked for a shared port                               |

Recommendation: **a**. Plain words: the loader behaves as the original script; both users have one image in the slot
(L3, `PhotoLazyLoaded.mvc.js:206-237`), so the rule touches one element.

### D. Who computes the balloon position

| Option | Description                                                                                              | Pros                                                     | Cons                                                                                  |
| ------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| a      | `balloonPosition.ts`: a pure function for `top` with a flip to `bottom`, offset B13, arrow at the bottom edge | no library; unit-tested with numbers; fits one position | the pixel result is a re-implementation of three Floating UI middlewares; **Unclear:** equal to the pixel |
| b      | fetch `OutSystemsUI_2_23.FloatingUICore.js` and `FloatingUIDom.js` from TST into `src/vendor/` and call `computePosition` with the same middlewares (W1276300-1281200) | the same library as TST, same pixels; `vendor/` is for copied scripts (`app/README.md`) | two more scripts (about 30 kB); a static GET on TST (standing approval covers manifest files; these are listed in `Tooltip.mvc.js:134`) |
| c      | no position: CSS only                                                                                    | nothing to build                                         | the balloon sits at `fixed` 0,0 (`.osui-balloon` CSS); not TST                        |

Recommendation: **a**, with **b** as the fallback if the user wants pixel equality. Plain words: one tooltip with one
position does not need the whole library; a small function is enough and tested.

## 6. Open points for the user

| #   | Point                                                                                                                                              | Options                                                                                                              | Recommendation |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------- |
| O1  | Position provider (5.D)                                                                                                                            | a) pure function; b) vendor Floating UI from TST; c) none                                                            | a              |
| O2  | The `name` and `data-uniqueid` value. TST uses `Math.random().toString(36)` (W155665); the provider only uses it to find the element (W156121). The parity check compares `role`, `data-block`, `type`, `tabindex`, `aria-*` and `id`, not `name` (`parity_check.cjs:304`). | a) React `useId()` (stable, no random); b) a random string as TST; c) the block id | a |
| O3  | The inner ids (`<id>-TooltipWrapper`, `-Content`, `-TooltipBallonWrapper`, `-Tooltip`, `-ArrowElement`). No capture shows the block. **Unclear:** the TST ids. | a) render them by the PhotoLazyLoaded pattern; b) render no inner ids; c) probe TST when a test event exists | a |
| O4  | `aria-describedby` points at the balloon content id (W658624). It needs O3 = a.                                                                     | follows O3                                                                                                           | a              |
| O5  | Other `osui-balloon` users in the app (the "another balloon opens" rule). **Unclear:** I did not search the other OSUI patterns.                   | a) out of scope now (T5); b) a shared `BalloonOnToggle` event bus                                                     | a              |
| O6  | The HostSurvey tooltip is `width: 100%` (OrbitTheme.css §4.23.18), so the icon anchor is the content div, not the icon glyph. The balloon centres on that div. | a) port as is (TST does the same); b) nothing else                                                       | a              |
| O7  | Open-state check: no capture (section 7). Accept stories and Vitest as the proof, or ask for a TST probe when the test account has an Orbit event. | a) tests and stories; b) wait for a probe                                                                            | a              |
| O8  | The loader test needs `img.complete` true. jsdom reports `complete` false for an image with a src that never loads (`jsdom/.../HTMLImageElement-impl.js:56-62`). | a) stub `complete` in the tests with `Object.defineProperty`; b) a `complete` fallback in the port (not TST) | a |

## 7. Change list and test plan

### 7.1 Changes (after approval)

| Step | Change                                                                                                          | Files                                                                                                   |
| ---- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1    | Tooltip tests first (red), then the component, the position function, the stories, the README                  | `app/src/components/ui/Tooltip/*`                                                                       |
| 2    | AccommodationItem uses the Tooltip through the handle; the state and the markup of the stand-in go              | `app/src/pages/HostSurvey/components/HostSurvey_AccommodationItem.tsx` (:114, :126, :143-147, :166-177, :352-365) |
| 3    | Loader tests first, then the component, the stories, the README                                                 | `app/src/components/ui/MultiResolutionImageLoader/*`                                                    |
| 4    | PhotoLazyLoaded and Card_MemberInformation_Survey use the loader                                                | `pages/MilestoneDetail/components/PhotoLazyLoaded.tsx:57-78`, `pages/HostSurvey/components/Card_MemberInformation_Survey.tsx:66-78` |
| 5    | Docs: `components/ui/README.md` (counts), `docs/reference/shared-blocks.md` via `docs_gen.py`, the B2 note decisions 2 and 3 | docs only                                                                                     |
| 6    | `npm run ci`, `route.py parity` for HostSurvey and MilestoneDetail, a context note                              |                                                                                                         |

### 7.2 Tests (Vitest, written first)

Tooltip (`Tooltip.test.tsx`):

1. Closed markup: root classes, `name` = `data-uniqueid`, the balloon and the arrow in the DOM, `role=button`,
   `tabindex=0`, `aria-describedby`, `role=tooltip`, `aria-hidden=true`, no is-open classes (2.3).
2. A click on the content opens: the three classes, `aria-hidden=false`, `onToggle(true)` once (B1, B5, B6).
3. A second click on the content keeps it open (B1).
4. `fireEvent.click(document.body)` closes with `onToggle(false)`; a click on the balloon content does not (B8, B9).
5. Esc on the content closes; Tab closes; Esc while closed does nothing (B4).
6. Focus opens; blur closes after a tick (fake timers); blur with the focus inside the balloon does not (B2, B3).
7. The handle: `open()` opens once, `close()` closes once, calls on the same state do nothing (B10).
8. `startsOpen` opens at mount with `onToggle(true)` (B11).
9. Unmount while open removes the body listener (B14): a later body click raises no `onToggle`.
10. After close, the position variables reset to 0 after 50 ms (B7).

`balloonPosition.test.ts` (numbers only, as `dropdownListPosition.test.ts`): `top` that fits → x centred, y = anchor
top − balloon height − offset; `top` that does not fit → placement `bottom`; the arrow left and the static side (B12,
B13).

HostSurvey_AccommodationItem (`HostSurvey_AccommodationItem.test.tsx:82-104`, adapt), with fake timers: a duplicate
name opens the tooltip after 500 ms (the `osui-tooltip--is-open` class). A change of the room name closes it.

Loader (`MultiResolutionImageLoader.test.tsx`):

1. Markup and ids; root `-loading` at mount (3.2).
2. `load` on an image without src: still `-loading` (R2).
3. `load` on an image with src and `complete` true (stubbed, O8): root `-loaded`, the image has the loaded class (R3,
   R4).
4. Two images, both complete: only the last gets the class (R4).
5. An image with src and `complete` true at mount: loaded without an event (R5).
6. With `ImageLoadErrorHandler` under `.screen`: `error` → the src becomes the placeholder → `load` → loaded (3.5).
7. Unmount removes the listener.

PhotoLazyLoaded and Card_MemberInformation_Survey get one render test each: the loading classes at mount, then loaded
after the image load. The existing `HostSurveyView.test.tsx` and `AccommodationHostView.test.tsx` keep their
expectations. A grep finds no test of the two blocks today.

### 7.3 Parity

Both blocks have zero captured instances (`migration/blocks/OutSystemsUI_2_23.Content.Tooltip.md`,
`…MultiResolutionImageLoader.md`: "0 distinct, 0 instances"). The HostSurvey and MilestoneDetail captures have no steps
(`migration/capture-plan.json:564-596`), so the sweep checks the default states only. It sees neither an open tooltip,
nor the room form, nor a loading photo. The sweep after the change must stay OK for both routes; the behaviour proof is
the test list above and the stories.

## 8. Risks

| #   | Risk                                                                                              | Mitigation                                                                                    |
| --- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| R1  | The hand-written position differs from Floating UI by some pixels (O1).                           | unit tests with numbers; option 5.D.b if the user wants the same library                     |
| R2  | The ids and the `name` value are not captured (O2, O3).                                           | the parity check ignores `name`; ids follow the existing block pattern; a TST probe later    |
| R3  | A DOM class set outside React (R4) is lost if a parent re-renders the `img` with a new `className`. | both users keep a constant class; the README states the rule; test 3 covers a re-render     |
| R4  | The body click listener runs for every click while open; a React `onClick` with `stopPropagation` elsewhere hides a click. | the listener is on `document.body` as TST (W64972); same behaviour                  |
| R5  | `useImperativeHandle` is new in the app; a reviewer may expect a controlled prop.                   | section 5.B states the reason; the README documents the handle                               |
| R6  | The helper card changes its look (G2): a reviewer may read it as a regression.                     | section 4 names it as the TST behaviour (L1, L3, CSS :4070-4083)                             |
| R7  | The loader in jsdom: `complete` is false for a pending image (O8).                                 | tests stub `complete`; the port keeps the TST rule unchanged                                 |

## 9. Decisions (user, 2026-10-28)

- Design as recommended: A (a) both blocks in `components/ui/`; B (a) a ref handle `open()` and `close()`; C (a) the
  loaded-image class set in the DOM, as the original script.
- O1 (a): a pure function computes the balloon position (Floating UI stays out).
- O2 and O3 (a): `useId()` for `name` and `data-uniqueid`; the inner ids by the PhotoLazyLoaded pattern.
- O4 to O8: as recommended.
