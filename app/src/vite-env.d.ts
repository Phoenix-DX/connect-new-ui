/// <reference types="vite/client" />

/* Build-time configuration (.env, .env.<mode>). Read only through src/lib/config.ts. */
interface ImportMetaEnv {
  /** 'false' calls the real API instead of the MSW mocks */
  readonly VITE_USE_MOCKS?: 'true' | 'false';
  /** 'true' in the demo build (.env.demo): mocks in the page + the app service worker (src/pwa/bootPlan.ts) */
  readonly VITE_DEMO?: 'true' | 'false';
  /** environment label shown in logs: local, dev, tst, prd */
  readonly VITE_APP_ENV?: string;
  /** base URL of the API (BFF later); empty = same origin */
  readonly VITE_API_BASE_URL?: string;
  /** external apps opened from UBTConnect (skip:external): empty until the user gives the URLs */
  readonly VITE_ORBIT_URL?: string;
  readonly VITE_ASSEMBLE_URL?: string;
  readonly VITE_LDM_URL?: string;
}

/** Hash of src/api/openapi.yaml at build time (vite.config.ts `define`); src/pwa/register.ts compares it with the
    backend's contract version to force an update. */
declare const __API_CONTRACT_VERSION__: string;
