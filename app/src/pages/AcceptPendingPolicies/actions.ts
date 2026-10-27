import { deviceUniqueId } from '@/platform/device/deviceUniqueId';

/* The JavaScript nodes of the page: GetSVGMetric (a client action of UBTConnect, used by the screen) and GetDeviceInfo
   (a node of ContinueOnClick in Policy_Custom_AcceptPendingPolicies). They read the page and the browser only. */

/** GetSVGMetric (UBTConnect client action, JavaScript1 node; TST copy of UBTConnect.controller.js in
    migration/screens/MessageList/analysis/sources/raw/): height of `.ubt-header-svg svg path` and the largest V and Q
    values of its `d`; HeightWithoutCurve = HeightPx * MaxV / MaxQ. Without the path (or its `d`) the node returns
    early and every output keeps its default 0. */
export function getSVGMetric(): { HeightPx: number; HeightWithoutCurve: number } {
  let heightPx = 0;
  let maxV = 0;
  let maxQ = 0;
  const path = document.querySelector('.ubt-header-svg svg path');
  const d = path?.getAttribute('d');
  if (path && d) {
    const tokens = d
      .replace(/,/g, ' ')
      .replace(/([a-zA-Z])/g, ' $1 ')
      .trim()
      .split(/\s+/);
    let v: number | null = null;
    let q: number | null = null;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === 'V') {
        const y = parseFloat(tokens[i + 1] ?? '');
        if (!isNaN(y)) v = v === null ? y : Math.max(v, y);
      }
      if (tokens[i] === 'Q') {
        for (let j = 1; j <= 4; j++) {
          const n = parseFloat(tokens[i + j] ?? '');
          if (!isNaN(n)) q = q === null ? n : Math.max(q, n);
        }
      }
    }
    heightPx = path.getBoundingClientRect().height;
    maxV = v ?? 0;
    maxQ = q ?? 0;
  }
  return { HeightPx: heightPx, HeightWithoutCurve: (heightPx * maxV) / maxQ };
}

/** Outputs of the GetDeviceInfo JS node of ContinueOnClick (web branch). */
export interface DeviceInfo {
  UserAgent: string;
  UniqueId: string;
  Manufacturer: string;
  Model: string;
  Platform: string;
}

/** GetDeviceInfo JS node of ContinueOnClick (Policy_Custom_AcceptPendingPolicies, controller ContinueOnClick,
    GetDeviceInfoJS), web branch only (rule 14: the Cordova `window.device` branch is native). */
export function getDeviceInfo(): DeviceInfo {
  const info: DeviceInfo = {
    UserAgent: window.navigator.userAgent,
    UniqueId: '',
    Manufacturer: '',
    Model: '',
    Platform: '',
  };
  info.Platform = window.matchMedia('(display-mode: standalone)').matches ? 'PWA' : 'Web';
  // UniqueId: localStorage["UUID"], or a new crypto.randomUUID() stored there (one id per browser, App_Policies Q2).
  info.UniqueId = deviceUniqueId();
  return info;
}
