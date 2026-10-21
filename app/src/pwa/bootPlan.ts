import { APP_SCOPE } from './swRoutes';

/* The three build modes and what each one starts (ADR-9, P16; demo amendment, user 2026-10-16). One pure function,
   used by main.tsx at run time and by vite.config.ts at build time (whether to build the service worker), so the two
   can never disagree.

   | mode                         | mocks                          | app service worker            |
   |------------------------------|--------------------------------|-------------------------------|
   | dev / mock build (default)   | MSW worker (mockServiceWorker) | never                         |
   | demo build (VITE_DEMO=true)  | in-process (fetch + getResponse)| yes, scope `/` (see below)   |
   | production (VITE_USE_MOCKS=false) | none                      | yes, scope `/UBTConnect/`     |

   The demo registers at `/` because its mock Feed CMS page is same-origin at `/embed/feeds` (outside `/UBTConnect/`)
   and must open offline inside HomeFeed; in production the CMS is another origin and the scope stays the manifest
   scope. */
export type MockTransport = 'none' | 'worker' | 'in-process';

export interface BootPlan {
  mocks: MockTransport;
  appServiceWorker: boolean;
  /** scope the app service worker registers with (meaningful only when appServiceWorker) */
  swScope: string;
}

export function bootPlan({ useMocks, demo }: { useMocks: boolean; demo: boolean }): BootPlan {
  if (!useMocks) return { mocks: 'none', appServiceWorker: true, swScope: APP_SCOPE };
  if (demo) return { mocks: 'in-process', appServiceWorker: true, swScope: '/' };
  return { mocks: 'worker', appServiceWorker: false, swScope: APP_SCOPE };
}
