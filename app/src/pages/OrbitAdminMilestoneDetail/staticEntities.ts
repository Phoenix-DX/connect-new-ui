/* Static entities this route reads that are not in the shared Orbit lib. Values: the live TST moduleinfo
   (migration/runtime-sources/moduleinfo.json, module 8d01aae0… = Connect2_OrbitMobile_MUI). */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB view :299). */
export const MenuAction_Auto = 'Auto';

/* The ScanBarcode inputs (cameraDirection, scanOrientation) are in containers/AdminQRCodeScan, shared with
   OrbitAdminEventDetail. */

/** Connect2_OrbitMobile_MUI.scanClient (entity ee3fed75…): the ScanClientId of GetScanMilestoneQRCode (SB :1276). */
export const ScanClient = { ConnectMobile: 'ConnectMobile', WebScanner: 'WebScanner' } as const;

/** Connect2_OrbitMobile_BL check-in statuses (entity a87e8dcc…): the QRCodeErrorTypeId of GetScanMilestoneQRCode.
    The block does not read it; the mocks answer with it. */
export const QRCodeErrorType = {
  CheckedIn: 'CheckedIn',
  AlreadyCheckedInForMilestone: 'AlreadyCheckedInForMilestone',
  CheckedInForOtherMilestone: 'CheckedInForOtherMilestone',
  NotAllocated: 'NotAllocated',
  NotInvited: 'NotInvited',
  Moved: 'Moved',
  GenericError: 'GenericError',
} as const;
