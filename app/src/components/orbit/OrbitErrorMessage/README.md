# OrbitErrorMessage

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage` · source `capture/survey-UBTConnect.json`
sources `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage.mvc.js` (view :149-254, controller :279-311)

| Input          | Type    | Prop             | Default |
| -------------- | ------- | ---------------- | ------- |
| IsShowMessage  | Boolean | `isShowMessage`  | –       |
| DisplayMessage | Text    | `displayMessage` | –       |

| Event     | Prop          |
| --------- | ------------- |
| ClickedOk | `onClickedOk` |

Root container `subscription-message` with the Popup `UnknownErrorPopup` ("popup-dialog onTop padding-x-l
padding-y-l", through `OrbitPopup`): the heading "Oops! Something went wrong", DisplayMessage and the Ok link.

Used by ScreenBlock_AdminMilestoneDetail. OrbitAdminEventDetail still has its own copy in
`pages/OrbitAdminEventDetail/components/`; it moves to this component when that page can change.

## Not captured

The admin routes have no capture (user decisions 2026-10-16 and I10-3): built from the compiled view only.
