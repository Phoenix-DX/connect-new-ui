import type { components } from '../api/schema';
import { getClientVar, setClientVar } from './session';

export type DeviceContext = components['schemas']['UBT_AppManager_CS__AppManager_DeviceContext'];

/** AppManager_InitializeWebComponents: a web device without a UUID gets `WEB_<guid>` (spec 9 "Web components init"). */
export function ensureDeviceUuid(): string {
  const existing = getClientVar('UBT_AppManager.DeviceInfo_UUID');
  if (existing !== '') return existing;
  const uuid = `WEB_${crypto.randomUUID()}`;
  setClientVar('UBT_AppManager.DeviceInfo_UUID', uuid);
  return uuid;
}

const runningAsPwa = (): boolean => {
  try {
    return window.matchMedia('(display-mode: standalone)').matches;
  } catch {
    return false;
  }
};

/** AppManager_GetDeviceContext on the web. Browser and platform names come from runtime code that was not captured,
    so they stay empty; the mock server ignores the device context. No push token on the web (decision U12). */
export function deviceContext(packageName: string): DeviceContext {
  return {
    Browser: '',
    DevicePlatform: '',
    FCMToken: '',
    MobileBuild: '',
    MobileVersion: '',
    PackageName: packageName,
    Streamline_IsInstalled: false,
    Streamline_SerialNumber: '',
    UUID: ensureDeviceUuid(),
    UserAgent: navigator.userAgent,
    iaRunningAsPWA: runningAsPwa(),
    isNativeDevice: false,
  };
}

/** AppManager_GetIsNative (UBT_AppManager.controller.js:1001-1012): isNative = client variable DeviceInfo_IsNative,
    false in the browser (clientVars.ts). */
export const appManager_GetIsNative = (): boolean => getClientVar('UBT_AppManager.DeviceInfo_IsNative');
