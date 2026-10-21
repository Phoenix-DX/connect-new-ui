# ContactPopup

OutSystems: `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup` · pack
`migration/blocks/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.md` · compiled source
`migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js`

| Input                  | Type                    | Prop                    | Default                      |
| ---------------------- | ----------------------- | ----------------------- | ---------------------------- |
| In_ContactPopupData    | ContactPopupData        | `inContactPopupData`    | `{}`                         |
| In_ContactPopupButtons | ContactPopupButton list | `inContactPopupButtons` | `[]`                         |
| In_ImageSizeId         | Text (UBT_ImageSize)    | `inImageSizeId`         | `'xl'` (ExtraLarge_100, :32) |

The pack lists two inputs; In_ContactPopupData is in the compiled model (mvc.js:20). Events: `Event_Clicked`
(Event_Id, Event_RowNumber) → `onEventClicked(id, row)`, `Event_Cancel` → `onEventCancel`. Placeholders: none.

- OutSystems Popup widget (ShowPopup = In_ContactPopupData.ShowPopup, style `popup-dialog ubt-contact-by-phone-popup
connect-legacy-compatibily-containter`): rendered in `<body>` with the Popup markup captured on HouseholdDetails/default
  (dom:1392-1398: `div.portal-class` (inline style `display: inline`) > div > `popup-backdrop` > `popup-dialog`
  (`role="dialog"`, `aria-modal`) > `popup-content`). Closed, the root is empty (capture v1).
- Content (:178-890) has these parts:
  - Title `ActionName [+ " "] + Name + TitleTerminator` (Heading6 semi-bold neutral-10, padding top s, bottom base
    unless ShowTimezone).
  - Timezone: skeleton "Fetching the user Timezone", else the target time label.
  - Image (ShowImage): skeleton while IsLoading and no ImageURL. When IsAvatarImage, UBT_LazyImage circle in
    `ubt-object-fit-avatar-img`. Otherwise LazyImage with the image-gallery fallback.
  - DisplayContactNumber.
  - Then, in a skeleton while IsLoading:
    - The button list (`list list-group list--gap-s OSFillParent`): row 0 primary, others secondary. A row shows
      icon + label through IconText when UBT_IconId is set, else the label.
    - The tertiary "Cancel" button.
- OnInitialize (:1003-1020): two "Loading" call_fill buttons, the list source while IsLoading (:644).
- PreventBackNavigation while ShowPopup (:876-890): a prevented back raises Event_Cancel.

## Captured variants (1; 1 tested)

| Capture | Source                   | What it shows            |
| ------- | ------------------------ | ------------------------ |
| v1      | ContactUsDetails/default | closed (ShowPopup False) |

Story `Open (not captured)` shows the open dialog from the compiled view; it has no capture and is not DOM-compared.

## Not captured / not settled

- No capture shows the whole open state. Its markup follows the compiled view and the Popup widget capture above.
  `ContactPopup.test.tsx` tests the open, text, buttons, loading, timezone and image branches with `it`.
- **Target time label**: `TargetTimeLabel = UBTConnectLibrary GetTargetTimeLabel(TimezoneName, TimezoneOffset, CountryName
or Locality)` (:930-945); that action is in no available source: `<NotCaptured>`.
- List items: whether the OutSystems List (animateItems) adds an inline `position: relative` here is not captured for
  this block; the React component renders none.
- While IsLoading, the original block reads the row number and Id of In_ContactPopupButtons when it loops over the
  skeleton list (:669, :689). Here the skeleton rows use their own index (row 0 primary). A click sends the Id of the same
  row of In_ContactPopupButtons ("" when missing).
- UBT_ButtonType record "Scondary" (sic, :669) is the `secondary` value of UBTConnectLibrary UBT_ButtonType.
- Icons CallFill and Share come from the original CSS (`UBTConnect_Utils/lib/staticEntities.ts`).
