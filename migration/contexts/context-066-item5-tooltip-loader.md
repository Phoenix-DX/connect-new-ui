# context-066: item 5, the shared Tooltip and MultiResolutionImageLoader (2026-10-28)

## Result
- Item 5 of the user's list. Evidence: the MCP first, then the live TST code
  (`migration/clarify/review/item5-tooltip-loader.md`, T1-T5, L1-L3). The Fable design was approved by the user
  (`item5-solution.md` §9). An Opus agent built it with tests first (`migration/clarify/builds/item5-tooltip-loader.md`).
- `app/src/components/ui/Tooltip/`: the OnClick path of the OSUI 2.23 Tooltip, the Balloon feature and the position
  (a pure function, no Floating UI). Tooltip_UniqueName of AccommodationItem opens and closes through a ref handle.
- `app/src/components/ui/MultiResolutionImageLoader/`: one port of the Connect2_LegacyShared loader. PhotoLazyLoaded
  uses it with no DOM change. Card_MemberInformation_Survey shows the User image until the photo loads.
- Gates: `npm run ci` green (686 files, 4437 tests, no "Errors" line); parity sweep 64 of 64 routes, 0 diffs.

## Decisions (user, 2026-10-28)
- Design A (a), B (a), C (a); O1 (a) pure position function; O2 and O3 (a) `useId` and inner ids; O4 to O8 as
  recommended.

## Facts learned (evidence)
- The blur closes the tooltip only when the focus goes into another `.osui-tooltip` (`_onBlur`, W648757 of
  `OutSystemsUI_2_23.OutSystemsUI.js`). The placement class stays after a close (`unsetFloatingPosition`).
- The body click skips a balloon opened by the API, but the flag resets one tick after the open (W116913, W656411).
- The live survey has two users of the loader only: PhotoLazyLoaded and Card_MemberInformation_Survey.

## Files changed
- `app/src/components/ui/Tooltip/`, `app/src/components/ui/MultiResolutionImageLoader/` (new); AccommodationItem,
  Card_MemberInformation_Survey, PhotoLazyLoaded and their tests; `components/ui/README.md` (93 folders),
  `docs/guides/shared-code.md`.
- `migration/clarify/review/item5-*.md`, `builds/item5-tooltip-loader.md`, `builds/README.md`, `RESUME.md`; row
  Legacy_OrbitEventsFlow-J014 (rechecked).

## Open issues
- Not checked on TST: the test account has no Orbit event, so no probe reaches an open tooltip or a loading photo.

## Next
- Item 6 of the user's list: the inputs of DataActionGetShare.
