# MultiResolutionImageLoader

OutSystems: `Connect2_LegacyShared.Widgets.MultiResolutionImageLoader` · pack
`migration/blocks/Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.md`

The source is `Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc.js` (MRIL): the view (:121-147) and the
OnReady script InitializeJS (:251-278). Facts: L1-L3 of `migration/clarify/review/item5-tooltip-loader.md`. Rules R1-R7:
section 3.3 of `migration/clarify/review/item5-solution.md`.

Inputs: none. Events: none.

| Block part               | Prop           | Note                                                      |
| ------------------------ | -------------- | --------------------------------------------------------- |
| block instance           | `id`           | the `OSBlock` id, for example `<prefix>-$b1`              |
| placeholder Loading      | `loading`      | the image that shows while the root is `-loading`         |
| placeholder ImagesToLoad | `imagesToLoad` | plain `img` elements with a constant `className` (see R4) |

## Markup

`div#<p>-Root.multi-resolution-image-loader.multi-resolution-image-loader-loading[data-container]` >
`div#<p>-Loading` (Loading) and `div#<p>-ImagesToLoad` (ImagesToLoad). `<p>` is the id without `$`.

## Behaviour (InitializeJS)

1. After mount, a capture-phase `load` listener starts on the ImagesToLoad div, the last child of Root (R1).
2. A load of an image without a `src` attribute does nothing (R2).
3. Any other load turns the root to `multi-resolution-image-loader-loaded` (R3). The root never goes back (R7).
4. Every `img` of ImagesToLoad loses `multi-resolution-image-loader-loaded`. The last `complete` one gets it (R4).
5. At mount, each image of ImagesToLoad that is `complete` runs the same rules (R5). The Loading slot has no listener
   (R6).

The root class is React state. The image class of R4 is set in the DOM, as the script does (decision C a). React
keeps a class that it did not render while the `className` prop does not change, so the callers keep it constant.

TST reads the last complete image without a check (:268). A browser raises `load` only on a complete image, so that
image always exists. jsdom keeps `complete` false for an image with a `src`: the tests stub `complete` with
`Object.defineProperty` (decision O8 a). The port skips the class when no image is complete, so a test `load` on such
an image raises no error.

The CSS shows the states only under `.backwards-compatibility` (`Connect2_LegacyShared.ConnectMobileCommonTheme.css`
:4070-4083). While the root is `-loading`, the ImagesToLoad div has height 0 and its images have opacity 0. When the
root is `-loaded`, the Loading div and the images without the loaded class are hidden.

## Error path

When the photo fails, the root stays `-loading` and the Loading image stays visible. `ImageLoadErrorHandler` (under
`.screen`) sets the `src` to `data-error-placeholder-src`, or to the default User_rectangle image. The load of that
image then turns the root to `-loaded`. The loader has no error code of its own (section 3.5 of the design).

## Users (L2)

| Block                                        | Loading                  | ImagesToLoad                                                            |
| -------------------------------------------- | ------------------------ | ----------------------------------------------------------------------- |
| `PhotoLazyLoaded` (MilestoneDetail)          | the User_rectangle image | the LoadedPhotoURL image, with the ImageClicked event                   |
| `Card_MemberInformation_Survey` (HostSurvey) | the User image           | the LoadedPhotoURL image, `data-error-placeholder-src` = the User image |

## Captured variants

None: the pack has 0 instances. Stories (`MultiResolutionImageLoader.stories.tsx`): `Loading` and `Loaded`, not
captured. Tests: `MultiResolutionImageLoader.test.tsx`.
