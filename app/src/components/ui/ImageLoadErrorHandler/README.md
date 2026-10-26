# HandleImageLoadError

OutSystems: `Connect2_LegacyShared.Utility.HandleImageLoadError` · pack
`migration/blocks/Connect2_LegacyShared.Utility.HandleImageLoadError.md`

Inputs: none. Events: none. Placeholders: none.

On mount, a capture-phase `error` listener starts on the nearest `.screen` ancestor. The listener replaces a failed
`<img>` with its `data-error-placeholder-src` or `img/Connect2_LegacyShared.User_rectangle.png`. It does this once, so
there is no loop when the placeholder fails. It also records the application event `ErrorFromPhotoView` (`Element`,
`URL`, `IsOffline`) (p:Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js:416-446, 195-217). Only Connect2
layouts have `.screen` (spec section 9 "Image errors"). On UBTConnect layouts the block does nothing.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |

## Not captured / not settled

- The application event goes to `log.info` (telemetry not wired, decision U17), not to `zOnApplicationEvent_Wrapper`.
- Replacement behaviour: from the compiled JS node, tested in `HandleImageLoadError.test.tsx`.
