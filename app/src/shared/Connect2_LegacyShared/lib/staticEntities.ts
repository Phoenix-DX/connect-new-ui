/* Static entities of Connect2_LegacyShared used by the shared blocks. Values from
   migration/knowledge/static-entities-tst.json where present, otherwise from captured classes (evidence per entry). */

/* ---- Wave 3A (layouts, MenuIcon, Result_Item_Image) ---- */

/** MenuAction (MenuIcon__UpdatedOSUI): only compared with the MenuAction input, never rendered; not in the TST
    static-entity file nor the compiled code, so the values are opaque constants. BookmarksByGroup and MyBookmarks
    pass Back (captured `app-menu-icon back`), MessageList passes Menu (captured `app-menu-icon`). Screens must use
    these. */
export const MenuAction = { Back: 'MenuAction.Back', Menu: 'MenuAction.Menu', Hidden: 'MenuAction.Hidden' } as const;

/** SideMenuBehavior: written as a class on the layout wrapper. Overlay = `aside-overlay` (default of
    BaseLayout_UpdatedOSUI.MenuBehavior; captured on every BaseLayout instance, e.g. BookmarksByGroup dom). The other
    values are not captured. */
export const SideMenuBehavior = { Overlay: 'aside-overlay' } as const;

/** ResultListType (Integer identifier; static-entities-tst.json `Connect2_LegacyShared.resultListType`). */
export const ResultListType = { Notification: 1, Household: 2, Subdivision: 3 } as const;

/** ThemeClass (static-entities-tst.json `Connect2_LegacyShared.themeClass`): the body theme class. */
export const ThemeClass = {
  Connect: 'connect-theme',
  MediaHub: 'media-hub-theme',
  Orbit: 'orbit-theme',
  SubscriptionsAndPayments: 'subpay-theme',
} as const;

/* ---- Task Y (GetCacheableSignedPhotoURL) ---- */

/** DirectoryCacheType (static-entities-tst.json `Connect2_LegacyShared.directoryCacheType`): the MemoryClientCache
    type of a cached object. Photos keys the signed photo URLs (Connect2_LegacyShared.controller.js:3979); Countries,
    Localities and User key GetCacheableCountryInfo (:3142), GetCacheableLocality (:3278) and GetCacheableUserInfo (:4391);
    MemberContact and Timezone key GetCacheableMemberContactList (:3414) and GetCacheableTimezoneInfo (:4251). */
export const DirectoryCacheType = {
  Photos: 'Photos',
  Countries: 'Countries',
  Localities: 'Localities',
  User: 'User',
  MemberContact: 'MemberContact',
  Timezone: 'Timezone',
  /** GetCacheableRegionSubscribedCountries (controller.js:3584). */
  RegionSubscribedCountries: 'RegionSubscribedCountries',
  /** GetCacheableSubdivision_V2 (controller.js:4149, CR-AssembleDetail-1). */
  AssembleSubdivision: 'AssembleSubdivision',
  /** GetCachedMyBookmarks / PutCachedMyBookmarks (controller.js:4529, :6407; CR-AssembleDetail-2). */
  MyBookmarks: 'MyBookmarks',
} as const;

/* ---- Wave 8 O-B1 (NavigateToMaps) ---- */

/** MapNavigationRedirect (Integer identifier; static-entities-tst.json `Connect2_LegacyShared.mapNavigationRedirect`,
    same values as `Connect2_Assemble_MUI.mapNavigationRedirect`, whose records are this entity's): NavigateToMaps'
    output, only compared. */
export const MapNavigationRedirect = { IPhoneBrowser: 1, AndroidNative: 2, AndroidBrowser: 3 } as const;
