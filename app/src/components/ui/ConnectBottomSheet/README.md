# BottomSheet

OutSystems: `UBTConnectLibrary.ConnectPatterns.BottomSheet` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.BottomSheet.md`

| Input                     | Type           | Prop                       | Default |
| ------------------------- | -------------- | -------------------------- | ------- |
| Title                     | Text           | `title`                    | `''`    |
| ShowHandlerPreview        | Boolean        | `showHandlerPreview`       | `false` |
| HandlerPreviewOffset      | Text           | `handlerPreviewOffset`     | `''`    |
| ShowHeader                | Boolean        | `showHeader`               | `true`  |
| Content_BackgroundColorId | UBT_Color Id   | `contentBackgroundColorId` | `''`    |
| Content_Padding           | SpacingOptions | `contentPadding`           | `{}`    |
| FooterHeight              | Text           | `footerHeight`             | `'0px'` |
| ExtendedClasses           | Text           | `extendedClasses`          | `''`    |
| isTransparentOverlay      | Boolean        | `isTransparentOverlay`     | `false` |
| CloseOnClickOutsite       | Boolean        | `closeOnClickOutsite`      | `false` |
| ShowBackButton            | Boolean        | `showBackButton`           | `false` |
| IsNotInertWhenClosed      | Boolean        | `isNotInertWhenClosed`     | `false` |
| IsHideContentWhenClosed   | Boolean        | `isHideContentWhenClosed`  | `false` |

The pack lists 7 inputs; the 13 above are from the compiled model (`…ConnectPatterns.BottomSheet.mvc.js` :13-97).
Events: `OnToggle(IsOpen)` → `onOnToggle`, `Initialized(BottomSheetId)` → `onInitialized` (the id callers give to
`bottomSheetOpen` / `bottomSheetClose` from `components/ui/lib/actions.ts`), `OnClose` → `onOnClose`, `OnBack` → `onOnBack`.
Placeholders: `Content` → `content` (`div.ubt-bottom-sheet--content` + padding classes), `Footer` → `footer`
(`div.ubt-bottom-sheet--footer`).

- View (:311-650):
  - OSUI BottomSheet with Shape Rounded and the ExtendedClass chain (handler preview, background,
    `custom-padding` when a padding is set, ExtendedClasses, transparent overlay).
  - Top bar (ShowHeader) = Columns_Three expand-middle:
    - back link (ShowBackButton) or a transparent close icon
    - the title (CustomText neutral-10 / s / semi-bold)
    - the close link while open (else a transparent close icon)
  - HideContentWhenClosed removes both placeholders.
- Controller and JS nodes (`jsNodes.ts`, :1084-1227): OnReady sets `--bottom-sheet--footer-height` and
  `--ubt-bottomsheet-handler-preview--offset` on the OSUI block, binds the overlay click (CloseOnClickOutsite) and the
  transition listener (IsNotInertWhenClosed); Initialized binds drag-to-open on the header when ShowHeader; OnToggle
  keeps Local_isOpen, raises OnToggle, sets HideContentWhenClosed and removes `inert`; the close link hides the
  content after the transition (IsHideContentWhenClosed), closes, raises OnClose.

## Captured variants (1 distinct in the pack; 4 tested)

| Capture | Source                 | What it shows                                                   |
| ------- | ---------------------- | --------------------------------------------------------------- |
| v1      | CountryDetails/default | pack: wrapper only                                              |
| v2      | CountryDetails/default | filter sheet: neutral-2, padding-s, footer 72px, higher z-index |
| v3      | CountryDetails/default | legend sheet: neutral-0, x-base / bottom-xxl padding, no footer |
| v4      | Profile/default        | household preview: no background, padding-none, caller markup   |

v2–v4 are the full sheets from the screen captures, with the placeholder blocks collapsed to nested markers.

## Not captured / not settled

- No capture shows an open sheet, the back button, the handler preview or the transparent overlay: tested from the
  compiled code (`BottomSheet.test.tsx`). The drag-to-open gesture is ported (`bindDragToOpen`) but not unit-tested
  (jsdom has no pointer capture).
- OnReady reads its inputs once, as the original: later FooterHeight / HandlerPreviewOffset / CloseOnClickOutsite /
  IsNotInertWhenClosed changes are not applied.
