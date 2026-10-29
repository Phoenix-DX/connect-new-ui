# OrbitPopup

OutSystems: the `Popup` widget (OSWidgets.Popup) of the Orbit admin blocks, with the classes that
`CopyClassesAcrossPortal` (Connect2_LegacyShared) copies onto the portal. Used by `Popup_QRCode` of
ScreenBlock_AdminMilestoneDetail and by `OrbitErrorMessage`. OrbitAdminEventDetail has the same widget as its own
`AdminPopup`; it moves to this component when that page can change (OrbitAdminMilestoneDetail build note).

| Prop                  | Meaning                                                     |
| --------------------- | ----------------------------------------------------------- |
| `id`                  | widget name with its block prefix (`b1-Popup_QRCode`)       |
| `showPopup`           | ShowPopup                                                   |
| `style`               | Style Classes (after `popup-dialog`)                        |
| `rootClassName`       | classes of the Root container (copied onto the portal root) |
| `rootParentClassName` | class of Root's grandparent (appended to `portal-class`)    |

A closed popup renders nothing. Not captured (the admin routes have no capture); the markup follows the captured Orbit
popups (OrbitLanding `dom/popup-*.raw.html`).
