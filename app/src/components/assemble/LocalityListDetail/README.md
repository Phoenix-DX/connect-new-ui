# LocalityListDetail

OutSystems: `Connect2_LegacyShared.Directory.LocalityListDetail` · pack
`migration/blocks/Connect2_LegacyShared.Directory.LocalityListDetail.md` · compiled source
`migration/screens/AssembleEvents/analysis/sources/pretty/Connect2_LegacyShared.Directory.LocalityListDetail.mvc.js`

| Input             | Type                              | Prop                | Default |
| ----------------- | --------------------------------- | ------------------- | ------- |
| CountryDetailList | CountryWithMapPosition RecordList | `countryDetailList` | `[]`    |
| HideHeader        | Boolean                           | `hideHeader`        | `false` |

Event `OnClick_GoToBrowseCountry(Code, InitialLatitude, InitialLongitude, InitialZoom)` →
`onOnClickGoToBrowseCountry`. Counts: `FormatCurrency(LongIntegerToDecimal(n), "", 0, "", ",")` → `formatCount`.

## Captured variants (1; 1 tested)

| Capture | Source                 | What it shows                          |
| ------- | ---------------------- | -------------------------------------- |
| v1      | AssembleEvents/default | 17 countries, header hidden (full DOM) |

v1 uses `migration/screens/AssembleEvents/analysis/dom/default.html` (full depth) instead of the pack
variant. The pack variant stops at depth 7 and drops the counts. Assemble_BrowseByCountry shows the same list.

## Not captured

- The header (`HideHeader` False): every capture hides it. Its container is `animate: true` in the compiled view; the
  OutSystems show/hide animation wrapper is not reproduced.
