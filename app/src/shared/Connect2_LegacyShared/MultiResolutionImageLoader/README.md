# MultiResolutionImageLoader

OutSystems: `Connect2_LegacyShared.Widgets.MultiResolutionImageLoader` · pack
`migration/blocks/Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.md` · compiled source
`migration/blocks/sources/Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc.js`

No inputs, no events. Placeholders `Loading` → `loading`, `ImagesToLoad` → `imagesToLoad`.

OnReady InitializeJS (:271-305) ported as a layout effect: capture-phase `load` listener on the ImagesToLoad
container plus a pass over the images already complete. The root class is React state (`-loading` → `-loaded`); the
`multi-resolution-image-loader-loaded` class is moved on the caller's `<img>` elements directly, as the original does.
The visibility rules are the original CSS (`Connect2_LegacyShared.ConnectMobileCommonTheme.css`).

## Captured variants

None: never rendered in a capture (HostSurvey, MilestoneDetail). Built from the compiled view.

## Not settled

- The original throws when a load fires and no image is `complete`; the port skips the class in that case.
- The listener is removed on unmount (the original never removes it).
