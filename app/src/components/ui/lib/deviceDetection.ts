/* OutSystems UI DeviceDetection checks read by the client actions IsWebApp and IsLayoutNative.
   `OSUI:<n>` = line of migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js; `C:<n>` = line of
   migration/runtime-sources/OutSystemsUI_2_23.controller.js. Dom.ClassSelector / TagSelector = querySelector
   (OSUI:2992-3075). */

/** IsLayoutNative (C:14249-14253 → DeviceDetection.CheckIsLayoutNative, OSUI:16586-16594): the first `.layout` in the
    body has `layout-native`. */
export function isLayoutNative(): boolean {
  const layout = document.body.querySelector('.layout');
  return layout ? layout.classList.contains('layout-native') : false;
}

/** IsWebApp (C:15126-15130 → DeviceDetection.IsWebApp, OSUI:16622-16634): a layout exists, the active screen has a
    top / side / blank layout, and it is not a native layout. */
export function isWebApp(): boolean {
  if (!document.body.querySelector('.layout')) return false;
  const isNotOldNativeLayouts =
    document.body.querySelector('.active-screen .layout.layout-top') ??
    document.body.querySelector('.active-screen .layout.layout-side') ??
    document.body.querySelector('.active-screen .layout.blank') ??
    document.body.querySelector('.active-screen .layout.layout-blank');
  return !!isNotOldNativeLayouts && !isLayoutNative();
}
