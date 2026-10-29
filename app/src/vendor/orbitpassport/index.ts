/* Typed loader of the vendored Orbit Passport host embed loader (SOURCE.md, PassportScan Q1 (a)). The file is an ES5
   IIFE that sets `window.OrbitPassport`, so it is loaded the way the original loads it: as the JS dependency of
   ScreenBlock_PassportScan (ScreenBlock_PassportScan.mvc.js:148), one classic <script> on first use.
   `?url` makes Vite emit the file unchanged as a hashed asset (assets/), which the production precache covers.
   Option (b) of Q1 (a TypeScript port) would replace only `requireOrbitPassportEmbed`. */
import scriptUrl from './OrbitPassportScanC2.PassportScan.js?url';

/** The options of `configure` that the block sets (InitializePassportScanJS, ScreenBlock_PassportScan.mvc.js:719-752).
    The loader keeps only the keys of its own config (`merge`). */
export interface OrbitPassportConfigureOptions {
  loginMemberId: number;
  baseUrl: string;
  containerId: string;
  tokenType: string;
  idToken: string;
  b2cTenants: string;
  b2cClientIds: string;
  b2cPolicy: string;
  onReady: () => void;
  onSaved: (passportId: string) => void;
  onClose: () => void;
  onAuthExpired: () => void;
  onError: (message: string) => void;
  /** The capture: raw base64, a data: URL or an object that carries one (`findImage`); a falsy value is a cancel. */
  onRequestCamera: () => unknown;
}

/** `window.OrbitPassport.embed` (OrbitPassportScanC2.PassportScan.js `embed`). */
export interface OrbitPassportEmbed {
  /** Builds the hidden iframe of `<baseUrl>/passport` in the container; resolves on `webview:ready`. */
  configure: (options: OrbitPassportConfigureOptions) => Promise<void>;
  /** Shows the iframe; `memberId` is the target member (null: the signed-in member). */
  open: (options?: { memberId: number | null }) => void;
  close: () => void;
  /** close() and the message listener removed. */
  destroy: () => void;
  /** Sends `navigation:back` to a ready portal; false when no portal is ready. */
  back: () => boolean;
  isConfigured: () => boolean;
  isReady: () => boolean;
  setIdToken: (token: string) => void;
  sendCameraImage: (base64Image: string, mimeType?: string) => void;
  sendOcrError: (error?: string) => void;
}

const ORBIT_PASSPORT_EMBED_URL: string = scriptUrl;

type WithOrbitPassport = Window & { OrbitPassport?: { embed?: OrbitPassportEmbed } };

let loading: Promise<OrbitPassportEmbed> | null = null;

/** The embed once the script has run, else undefined (`window.OrbitPassport.embed` of the JS nodes). */
export function loadedOrbitPassportEmbed(): OrbitPassportEmbed | undefined {
  return (window as WithOrbitPassport).OrbitPassport?.embed;
}

/** Adds the script once and resolves with the embed it defines; a failed load can be retried. */
export function requireOrbitPassportEmbed(): Promise<OrbitPassportEmbed> {
  loading ??= new Promise<OrbitPassportEmbed>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = ORBIT_PASSPORT_EMBED_URL;
    script.onload = () => {
      const embed = loadedOrbitPassportEmbed();
      if (embed && typeof embed.configure === 'function') resolve(embed);
      else reject(new Error('The vendored Orbit Passport script did not define OrbitPassport.embed'));
    };
    script.onerror = () => {
      loading = null;
      script.remove();
      reject(new Error(`Failed to load ${ORBIT_PASSPORT_EMBED_URL}`));
    };
    document.head.appendChild(script);
  });
  return loading;
}
