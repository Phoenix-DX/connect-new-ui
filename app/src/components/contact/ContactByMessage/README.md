# ContactByMessage_Wrapper

OutSystems: `UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper` · pack
`migration/blocks/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.md` · compiled source
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js`

| Input               | Type                               | Prop                 | Default |
| ------------------- | ---------------------------------- | -------------------- | ------- |
| In_ContactPopupData | UI_ContactByMessage_WrapperDataRec | `inContactPopupData` | `{}`    |

Events `Event_Email`, `Event_Call`, `Event_MessageChannel(MessageChannelId)`, `Event_Cancel` → `onEventEmail`,
`onEventCall`, `onEventMessageChannel`, `onEventCancel`.

## Captured variants (1; 1 tested)

| Capture | Source                    | What it shows |
| ------- | ------------------------- | ------------- |
| v1      | HouseholdCarousel/default | closed        |

## Not captured / not settled

- WhatsApp / Signal: shown only when Connect2_AppLauncherPlugin CheckAppLauncherPlugin and CanLaunchWithData succeed
  (Cordova). The React app has no Cordova (`checkAppLauncherPlugin` False), so they never show.
  Action_OpenMessagingApp is not ported (LaunchWithData, `whatsapp://send?phone=` / `sgnl://signal.me/#p/` + Phone
  without spaces).
- Open state tested with `it` (Email, combo Call).
