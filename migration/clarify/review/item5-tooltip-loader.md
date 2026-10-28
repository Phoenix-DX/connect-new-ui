# Item 5: the HostSurvey Tooltip and the MultiResolutionImageLoader (2026-10-28)

Item 5 of the user's work list (`../RESUME.md`), from the B2 build note (`../builds/B2-hostsurvey.md:163-170`).
Evidence order: the MCP (DEV) first, then the compiled TST code (live), then the React code. DEV = TST on every fact.
The drift of 2026-10-27 does not touch these files (the four TST files are the same or changed only debugger ids).

## 1. The OutSystems UI Tooltip of the duplicate room name

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| T1 | HostSurvey_AccommodationItem has one Tooltip instance `Tooltip_UniqueName`: Trigger OnClick, Position Top, StartsOpen False; placeholder Content = Icon "flag" with style `icon orbit-icon-circle-warning`; placeholder Tooltip = text "Room name must be unique." | IMobileBlockInstanceWidget Tooltip_UniqueName (SourceBlock Tooltip) | `Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc.js:348-383` |
| T2 | DelayTootlip(IsOpen): JS `setTimeout(toggleTooltip, 500, IsOpen, Tooltip_UniqueName.Id)`, which calls the OSUI client actions TooltipOpen or TooltipClose. AccommodationForm_Validate calls DelayTootlip(True) when the room name is not unique | Screen actions DelayTootlip and AccommodationForm_Validate | AccommodationItem compiled actions |
| T3 | The block markup: `div.osui-tooltip[name=<uniqueId>]` > `div.osui-tooltip__content` (Content) and `div.osui-tooltip__balloon-wrapper.osui-balloon[data-uniqueid]` > `div.osui-tooltip__balloon-wrapper__balloon.OSInline` (Tooltip) + `div.osui-tooltip__balloon-arrow`. The balloon is always in the DOM | OutSystemsUI is a referenced module (not open in the MCP) | `OutSystemsUI_2_23.Content.Tooltip.mvc.js` (view internalRender; controller: onInitialize, onReady, onParametersChanged, onDestroy, initializedHandler, onToggleHandler, registerCallbacks) |
| T4 | The behaviour comes from the OSUI provider: the Tooltip pattern (open and close, trigger, position, the is-open classes) and the Balloon feature | - | `migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js` (Tooltip pattern about W646155-668600, TooltipOpen about W662727, `osui-tooltip--is-open` W644849; Balloon `osui-balloon--is-open` W122026) |
| T5 | This is the only Tooltip of the app | - | One user of `OutSystemsUI_2_23_Content_Tooltip_mvc_view` in the live survey |

React today: `app/src/pages/HostSurvey/components/HostSurvey_AccommodationItem.tsx:352-372` (and `delayTooltip`
:166-170): `div.osui-tooltip` > `div.osui-tooltip__content` with the icon, a click toggles a state, and
`div.osui-tooltip__balloon-wrapper` with the text renders only while open. Missing: the balloon element, the arrow, the
`osui-balloon` class, `name` and `data-uniqueid`, the is-open classes, the position, and the other provider behaviours.

The B2 note says "no source in the survey" for the Tooltip: wrong. `OutSystemsUI_2_23.Content.Tooltip.mvc.js` is in the
survey of 2026-10-13 and in the live one.

## 2. The MultiResolutionImageLoader

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| L1 | The block (Connect2_LegacyShared, flow Widgets, public): container Root with style `multi-resolution-image-loader multi-resolution-image-loader-loading`, placeholders Loading and ImagesToLoad. OnReady JS Initialize: on an image load (capture), if the image has a src, Root loses `-loading` and gets `-loaded`; among the images of the last child (ImagesToLoad), the last complete one gets `multi-resolution-image-loader-loaded`. Images already complete run the same at start | getWebBlock MultiResolutionImageLoader | `Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc.js` (the same JS) |
| L2 | Two blocks use it: Card_MemberInformation_Survey and PhotoLazyLoaded | - | Users of `Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_view` in the live survey |
| L3 | Card_MemberInformation_Survey: Loading = static image `img/Connect2_LegacyShared.User.png` (`member-info-img`); ImagesToLoad = External image `url = LoadedPhotoURL` with `data-error-placeholder-src` = the same User image (`member-info-img`) | - | `Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation_Survey.mvc.js` (the loader instance) |

React today:
- `app/src/pages/MilestoneDetail/components/PhotoLazyLoaded.tsx:30-80` ports the loader inline for one image (a state
  `loaded` set by `onLoad` when the img has a src).
- `app/src/pages/HostSurvey/components/Card_MemberInformation_Survey.tsx:20-45` has no loader: both images render (its
  comment says so).

## 3. Differences

| # | Difference | TST | React |
|---|---|---|---|
| G1 | The Tooltip markup and behaviour are a minimal stand-in | T3, T4 | AccommodationItem :352-372 |
| G2 | Card_MemberInformation_Survey shows both images; TST shows the User image until the photo loads, then the photo | L1, L3 | Card_MemberInformation_Survey |
| G3 | The loader is ported once inline in one page; the second user has no port | L2 | PhotoLazyLoaded, Card_MemberInformation_Survey |

No TST capture shows an open tooltip or a loading photo of the host survey. The test account has no Orbit event now
(item 3, `probe-dropdown-d2.json`), so a probe on TST cannot reach these states.

## 4. Result (2026-10-28)

The user approved the Fable design (`item5-solution.md` §9). An Opus agent built it with tests first
(`../builds/item5-tooltip-loader.md`).

| # | Status |
|---|---|
| G1 | Built: `app/src/components/ui/Tooltip/` (OnClick path of the OSUI Tooltip, the Balloon feature and the position). Tooltip_UniqueName uses it through the handle `open()` and `close()` |
| G2 | Built: Card_MemberInformation_Survey shows the User image until the photo loads, then the photo only |
| G3 | Built: `app/src/components/ui/MultiResolutionImageLoader/` is the one port; PhotoLazyLoaded uses it with no DOM change |

Three rules of the design text differ from the TST code. The build follows TST (the user's rule: TST wins):
- the blur closes the tooltip only when the focus goes into another `.osui-tooltip` (`_onBlur`, W648757);
- after a close, the placement class and the arrow style stay, and only x and y go to 0 (`unsetFloatingPosition`);
- the body-click listener starts one tick after the open (`_setEventListeners`, AsyncInvocation).

The body click also skips a balloon that the API opened (`_isOpenedByApi`, W105151). The provider resets this flag one
tick after the open (W116913, W656411), before the body listener starts. The port has no flag, and the result is the
same.

Not checked on TST: the test account has no Orbit event, so no probe reaches an open tooltip or a loading photo.
