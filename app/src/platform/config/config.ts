/* Application configuration: the only place that reads import.meta.env. Values are fixed at build time (Vite), one
   build per environment. Moving to a runtime config file later only changes this module. */
export interface AppConfig {
  /** label of the environment, for logs */
  env: string;
  /** MSW answers the API (mock phase) */
  useMocks: boolean;
  /** demo build: mocks run in the page and the app service worker is registered (src/pwa/bootPlan.ts) */
  demo: boolean;
  /** origin of the API; same origin when empty */
  apiBaseUrl: string;
  /** external apps opened from UBTConnect; an empty URL means "not configured" */
  externalApps: { orbit: string; assemble: string; ldm: string };
}

const env = import.meta.env;

/** Build-time constant of `useMocks`, outside the frozen object so the bundler can drop the mock code (handlers,
    fixtures, MSW, the mock session) from production builds and the service worker never precaches it. Every mock import
    sits behind it (`if (MOCKS_BUILT) await import(...)`), never behind `config.useMocks`, which Rollup cannot fold.
    build/mockFree.ts fails a production build that still bundles mock code (docs/guides/pwa.md "Build modes"). */
export const MOCKS_BUILT: boolean = import.meta.env.VITE_USE_MOCKS !== 'false';

/** Build-time constant of the flag overrides (`?ff=` and the flag panel `?ffpanel=1`, platform/flags overrides.ts): true
    on the dev server and in the mock and demo builds, false in a production build (VITE_USE_MOCKS=false), which drops
    their code (plan v2 §3.1). Callers keep them behind it, as the mock imports are behind MOCKS_BUILT. */
export const FLAG_OVERRIDES_BUILT: boolean = import.meta.env.DEV || MOCKS_BUILT;

export const config: AppConfig = Object.freeze({
  env: env.VITE_APP_ENV ?? 'local',
  useMocks: MOCKS_BUILT,
  demo: env.VITE_DEMO === 'true',
  apiBaseUrl: env.VITE_API_BASE_URL ?? '',
  externalApps: Object.freeze({
    orbit: env.VITE_ORBIT_URL ?? '',
    assemble: env.VITE_ASSEMBLE_URL ?? '',
    ldm: env.VITE_LDM_URL ?? '',
  }),
});
