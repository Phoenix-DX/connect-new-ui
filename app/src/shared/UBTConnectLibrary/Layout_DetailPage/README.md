# Layout_DetailPage

OutSystems: `UBTConnectLibrary.Layouts.Layout_DetailPage` · pack
`migration/blocks/UBTConnectLibrary.Layouts.Layout_DetailPage.md`

| Input                          | Type    | Prop                            | Default |
| ------------------------------ | ------- | ------------------------------- | ------- |
| In_AlignTitleLeft              | Boolean | `inAlignTitleLeft`              | `false` |
| In_IsPrimaryColor              | Boolean | `inIsPrimaryColor`              | `true`  |
| In_ExtendedClass               | Text    | `inExtendedClass`               | `''`    |
| In_EnableAccessibilityFeatures | Boolean | `inEnableAccessibilityFeatures` | `false` |
| In_InitializeNavigationHandler | Boolean | `inInitializeNavigationHandler` | `true`  |

Events: `OnReadyEvent(LayoutWrapperId)` → `onOnReadyEvent`. Placeholders: `Placeholder_Header_Title`,
`Placeholder_Header_Right`, `HeaderContent`, `Content`, `Bottom`, `Placeholder_CommonUI_Inside_Layout` →
`placeholderHeaderTitle`, `placeholderHeaderRight`, `headerContent`, `content`, `bottom`,
`placeholderCommonUIInsideLayout`. The back arrow (Icon ArrowLeftAlt) navigates to the previous screen.

**CommonUI / bottom bar:** passed by the screen (Layout_HomePage approach); here the CommonUI placeholder is outside
the layout wrapper, as captured.

## Captured variants (6 tested of 18 distinct, 20 screens)

All 20 screens render the same layout markup except: primary or not, title left or centred, extended class. The
subset covers each combination that occurs; the other states differ in placeholder content only.

| Capture | Source                                | What it shows                                                    |
| ------- | ------------------------------------- | ---------------------------------------------------------------- |
| v1      | BrowseCountries/default               | primary, centred text title, bottom bar, CommonUI                |
| v2      | BrowseDirectory/default               | primary, centred expression title                                |
| v3      | ContactByEmailMember/default          | not primary, title left, no bottom bar / CommonUI                |
| v4      | ContactByEmailOneSchoolGlobal/default | primary, title left                                              |
| v5      | ContactUsDetails/default              | extended class `bottom-padding-base-button`, FixedFooter content |
| v6      | HouseholdCarousel/default             | not primary, centred skeleton title                              |

## Not captured / not ported

- Accessibility class, no LayoutRuntime_Top (In_InitializeNavigationHandler false), OnReadyEvent, back click:
  compiled code only, tested. No capture has header-right or header content.
- **SetScrollEvents (OnReady, controller :511-540) / OnDestroy (:549)**: SetScrollShadow / RemoveScrollEvents /
  ClearTimeout (`../lib/actions.ts`), ports of the global `ScrollEvent` of
  `migration/runtime-sources/UBTConnectLibrary.ScrollAnimations.js` (shadowScroll :151-205, removeEvents :426-435,
  clearTimeout :436-440). The actions set `--footer-shadow-scroll` (hidden at the bottom) and `--header-shadow-scroll`
  (visible once scrolled) on the `.active-screen.screen-container` that holds the layout. They set them 200 ms after
  OnReady and on each scroll. The tests scroll the container (no capture is scrolled).
- OutSystems UI LayoutReady / SetLang / LayoutDestroy / SkipToContent: not ported (as Layout_HomePage). AddFavicon's
  result (the `shortcut icon` link) is static in `index.html`.
- SectionSeparator (batch B, in progress) and the screen blocks are PendingBlock in the stories.
