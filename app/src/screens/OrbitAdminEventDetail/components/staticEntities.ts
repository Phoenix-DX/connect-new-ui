/* Static entities this route reads that are not in the shared Orbit lib. Values from
   migration/knowledge/static-entities-tst.json (TST moduleinfo). */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB view :285). */
export const MenuAction_Auto = 'Auto';

/** Connect2_OrbitMobile_MUI.applicationEvents_Orbit: the audit events the scan flow raises. */
export const ApplicationEvents_Orbit = {
  LaunchQRCodeScanner: '3a650232-58fb-4a49-a9b2-77e0e7b87782',
  QRCodeScanned: '28ffe0db-ddc1-45dd-9bdc-d6ecac5518a7',
} as const;

/** Connect2_OrbitMobile_MUI.cameraDirection / scanOrientation: the ScanBarcode inputs the block passes (SB ctrl :1241). */
export const CameraDirection = { BackCamera: 1, FrontCamera: 2 } as const;
export const ScanOrientation = { Portrait: 1, Landscape: 2, Adaptive: 3 } as const;
