# NoResults

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoResults` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoResults.md` · source
`migration/blocks/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoResults.mvc.js`

No inputs, no events. Placeholders `Placeholder_Title`, `Placeholder_Message` → `placeholderTitle`,
`placeholderMessage`.

View (:107-170): `no-results-cont` > `no-results-icon-cont` > Icon `search` (`icon no-results-icon`), then the two
placeholders with classes `no-results-title` and `no-results-message`.

## Captured variants (0)

Never rendered in a capture (EventBooklet, HostSurvey): built from the compiled view; `NoResults.test.tsx` checks
the structure. Icon markup follows the captured Icon widgets of the app (`<i class="<style> fa fa-<icon> fa-1x"
data-icon>`).

## Not captured / not settled

- The whole block (no capture). Placeholder wrappers are plain `div`s as OSWidgets.Placeholder renders them elsewhere.
