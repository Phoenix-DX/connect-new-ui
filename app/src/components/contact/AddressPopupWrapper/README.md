# AddressPopup_Wrapper

OutSystems: `UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper` · pack
`migration/blocks/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.md` · compiled source
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js`

| Input          | Type                                         | Prop            | Default |
| -------------- | -------------------------------------------- | --------------- | ------- |
| In_Address     | Text                                         | `inAddress`     | `''`    |
| IsEnabled      | Boolean                                      | `isEnabled`     | `true`  |
| IconVisible    | Boolean                                      | `iconVisible`   | `true`  |
| In_Coordinates | APIDomain_Directory_IS Directory_Coordinates | `inCoordinates` | `{}`    |

(The pack found no inputs; they are in the compiled model :28-50.) No events, no placeholders.

## Captured variants (1; 1 tested)

| Capture | Source                    | What it shows              |
| ------- | ------------------------- | -------------------------- |
| v1      | HouseholdCarousel/default | address link, popup closed |

## Not captured / not settled

- Open dialog and maps links: from the compiled code. Tests with `it` cover them. Maps URL
  `https://maps.google.com/maps?q=` + (lat,lon or EncodeUrl(CleanAddressForMaps(address))). Empty address → "Map is not
  available" (Info) and the dialog closes.
- **Copy Address**: Handler_CopyAddress = JSUtils_CopyToClipboard(In_Address) (`navigator.clipboard.writeText`,
  `src/shared/UBTJavaScriptUtils/lib/actions.ts`), then ToggleLocationPopup; a rejected copy goes to the flow handler.
- **Native branch**: AppManager_GetIsNative reads the shell client variable `UBT_AppManager.DeviceInfo_IsNative`
  (`appManager_GetIsNative`, `src/platform/device/deviceContext.ts`), false in the browser: the `geo:` link and LaunchWithData stay
  unreachable. EncodeUrl → `encodeURIComponent`.
