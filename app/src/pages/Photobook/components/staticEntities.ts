/* Static-entity values this route needs that the shared static entities do not list. Every value is the TST value
   (migration/knowledge/static-entities-tst.json, `UBTConnect.*` / `UBTConnectLibrary.*`), cross-checked with the
   captured classes where the default state shows them (analysis/dom/default.html). */

/** UBTConnect.uBT_Icons2: info / clock / close / play_arrow (captured, dom/default.html:1854,1866,1876,1886) and
    family (captured :1913); pause and replay are TST values (not rendered in a captured state). */
export const UBT_Icons2 = {
  Info: 'connect-icon-info',
  Clock: 'connect-icon-clock',
  Close: 'connect-icon-close',
  PlayArrow: 'connect-icon-play_arrow',
  Pause: 'connect-icon-pause',
  Replay: 'connect-icon-replay',
  Family: 'connect-icon-family',
} as const;

/** UBTConnect.uBT_IconsSize: captured `icon-base` and `icon-non-standard-64` (dom/default.html:1854,1886). */
export const UBT_IconsSize = { Base_24: 'icon-base', NonStandard_64: 'icon-non-standard-64' } as const;

/** UBTConnectLibrary.uBT_ImageSize: MaxWidth_100vw `max-width`, MaxHeight_100vh `max-height`, Small_40 `s` (captured
    `ubt-lazy-image--width-max-width`, `ubt-lazy-image-max-height`, `ubt-lazy-image-s`, dom/default.html:106,128,1944). */
export const UBT_ImageSize = { MaxWidth_100vw: 'max-width', MaxHeight_100vh: 'max-height', Small_40: 's' } as const;

/** UBTConnectLibrary.uBT_Visibility: captured `visibility-visible` / `visibility-hidden` (dom/default.html:140,1851). */
export const UBT_Visibility = { Visible: 'visible', Hidden: 'hidden' } as const;

/** UBTConnectLibrary.uBT_FontWeight.bold: captured `font-bold` (counter text, dom/default.html:1923). */
export const UBT_FontWeight = { SemiBold: 'semi-bold', Bold: 'bold' } as const;

/** UBTConnectLibrary.uBT_FlexDirection.row: captured `flex-direction-row` (top-right options, dom/default.html:1861). */
export const UBT_FlexDirection = { Column: 'flex-direction-column', Row: 'flex-direction-row' } as const;

/** UBTConnectLibrary.uBT_AlignItems / uBT_JustifyContent: FlexStart (info sheet content, not captured) and FlexEnd
    (captured `justify-content-flex-end`, dom/default.html:1861). */
export const UBT_AlignItems = { Center: 'align-items-center', FlexStart: 'align-items-flex-start' } as const;
export const UBT_JustifyContent = { Center: 'justify-content-center', FlexEnd: 'justify-content-flex-end' } as const;
