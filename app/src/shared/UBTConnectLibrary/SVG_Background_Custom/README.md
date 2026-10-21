# SVG_Background_Custom

OutSystems: `UBTConnectLibrary.Layouts.SVG_Background_Custom` · pack
`migration/blocks/UBTConnectLibrary.Layouts.SVG_Background_Custom.md`

| Input                  | Type    | Prop                    | Default |
| ---------------------- | ------- | ----------------------- | ------- |
| In_Path                | Text    | `inPath`                | `''`    |
| In_HeightPercentage    | Decimal | `inHeightPercentage`    | `100`   |
| In_CurvaturePercentage | Decimal | `inCurvaturePercentage` | `100`   |
| In_ExtendedClass       | Text    | `inExtendedClass`       | `''`    |

Events: `OnPathCalculated` → `onOnPathCalculated` (after the path is set; the original raises it from the InlineSVG
Initialized event). Placeholders: none. The path is In_Path or `sVGHeader_GetPath` (UBTConnectLibrary `lib/actions.ts`).

## Captured variants (2 tested)

| Capture | Source                                   | What it shows                               |
| ------- | ---------------------------------------- | ------------------------------------------- |
| v1      | pack variant 1, BookmarksByGroup/default | wrapper and container (InlineSVG collapsed) |
| v2      | `PINUnlock/analysis/dom/default.html`    | with the InlineSVG content and path         |

## Not captured / not settled

- Pack variant 2 (Splash/default) has `ubt-fall-expand` on the container. The LoadingDots script adds it at runtime
  (p:UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc.js:636, removed at :686/:711), not this block. LoadingDots
  must add it when it is built. Not used as a capture here.
- In_Path and the defaults: from the compiled code only, tested in `SVG_Background_Custom.test.tsx`.
