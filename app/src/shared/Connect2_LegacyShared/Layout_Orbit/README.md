# Layout_Orbit

OutSystems: `Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit` · pack
`migration/blocks/Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.md` · source
`migration/screens/EventDetail/analysis/sources/pretty/Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc.js`

| Input            | Type    | Prop               | Default |
| ---------------- | ------- | ------------------ | ------- |
| UsePullToRefresh | Boolean | `usePullToRefresh` | `false` |
| ExtendedClasses  | Text    | `extendedClasses`  | `''`    |
| CustomClass      | Text    | `customClass`      | `''`    |

Event `OnPullToRefresh` → `onOnPullToRefresh`. Placeholders `Menu`, `HeaderLeft`, `Title`, `HeaderRight`,
`HeaderContent`, `Content`, `BottomBar`, `CommonUI_Elements` → `menu`, `headerLeft`, `title`, `headerRight`,
`headerContent`, `content`, `bottomBar`, `commonUIElements`.

Same shape as `Layout` with the Orbit theme: wrapper `orbit-theme backwards-compatibility`, BaseLayout ExtendedClass
`"orbit-theme " + ExtendedClasses`, HeaderRight without a class, HeaderSearch empty, IsHeaderTransparent not passed.

## Lifecycle

- OnInitialize (:384-408): `SetThemeClassToBody(ThemeClass.Orbit)` (`shell/bodyTheme.ts`): the body gets
  `orbit-theme`, the Connect / MediaHub classes go.
- OnReady (:353-383): `IOSMetaTags`, `IOSPreventSwipe` (`../lib/actions.ts`, tested with Layout); OutSystems UI
  `DEPRECATED_LayoutReadyMobile(False)` is not ported (as Layout's LayoutReady).

## Stylesheets

The Orbit theme lives in `Connect2_LegacyShared.OrbitTheme.css` (and `AssembleTheme.css`). Both are already in the route CSS
sets of every Orbit screen (`src/app/routes.css.generated.ts`, from the screens' captures and compiled
getCssDependencies; StylesheetHost loads them per route). The block itself adds no stylesheet (its
getCssDependencies is only `OutSystemsReactWidgets.css`).

## Captured variants (1 tested)

| Capture | Source              | What it shows                                                   |
| ------- | ------------------- | --------------------------------------------------------------- |
| v1      | EventDetail/default | wrapper (14 instances, all Orbit screens); BaseLayout collapsed |

## Not captured / not settled

- UsePullToRefresh = True on an Orbit screen (BaseLayout handles it; no Orbit capture shows it).
