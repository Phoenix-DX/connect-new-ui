# SharePopup

OutSystems: `UBTConnect_Utils.CW_CTA_PopUps.SharePopup` · pack `migration/blocks/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.md`
· compiled source `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js`

| Input               | Type                 | Prop                 | Default                      |
| ------------------- | -------------------- | -------------------- | ---------------------------- |
| In_ContactPopupData | ContactPopupData     | `inContactPopupData` | `{}`                         |
| In_ImageSizeId      | Text (UBT_ImageSize) | `inImageSizeId`      | `'xl'` (ExtraLarge_100, :23) |

Events: `Event_ShareToConnect` → `onEventShareToConnect`, `Event_ShareToOthers` → `onEventShareToOthers`,
`Event_Cancel` → `onEventCancel`. Placeholders: none. Child: ContactPopup (built), with In_ContactPopupButtons = the
ContactPopupButton of each SharePopupButtons record.

- OnInitialize → Action_SetSharePopupButtons (:245-312, :418-440): "Share to Connect" (Id "1", share icon), plus "Share
  to other apps" (Id "2") when AppManager_GetIsNative. The React app runs in the browser: not native (shell deviceContext).
- ContactPopup Event_Clicked → OnClick_CallButton (:314-356): row 0 → Event_ShareToConnect, else Event_ShareToOthers.
  The block passes Event_Cancel through.
- OnParametersChanged (:366-416) does not run on the first render. It acts when both conditions are true:
  - GetHasExtendedShare (flag C2ExtendedShare) is off.
  - The dialog is open for an entity other than Member, OneSchoolGlobal, Household and FeedItem.

  Then it runs ShowComingSoonMessage (info "This feature will be available soon") and Event_Cancel. TST has the flag on:
  nothing happens.

## Captured variants (1; 1 tested)

| Capture | Source           | What it shows                                |
| ------- | ---------------- | -------------------------------------------- |
| v1      | HomeFeed/default | closed: SharePopup > empty ContactPopup root |

Story `Open (not captured)` shows the open dialog. The story has no capture. Parity does not compare its DOM.

## Not captured / not settled

- No capture shows the open dialog (see the ContactPopup README). Tests with `it` cover the buttons, events and the
  coming-soon branch.
- The React component does not port AppManager_GetIsNative (UBT_AppManager source not in this batch). It uses a constant
  False, as in the browser. "Share to other apps" never shows.
- The React component detects OnParametersChanged by comparing the values of the inputs between renders.
