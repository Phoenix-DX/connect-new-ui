import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router/dom';
import { router } from './app/router';
import './styles/review.css'; // original OutSystems CSS: per screen, by shell/StylesheetHost (public/UBTConnect/css)
import { applyDeviceClasses } from './lib/device';
import { initFlags } from './lib/flags';
import { config, MOCKS_BUILT } from './lib/config';
import { ErrorBoundary } from './app/ErrorBoundary';
import { bootPlan } from './pwa/bootPlan';
import { clearStaleServiceWorkers, registerAppServiceWorker } from './pwa/register';

// OutSystems UI sets device classes (phone/tablet/desktop, portrait/landscape) from JavaScript; so does the clone.
applyDeviceClasses();
window.addEventListener('resize', applyDeviceClasses);
initFlags();

// OutSystems keeps --viewport-height on <body> in sync with the window.
const syncViewport = () => {
  document.body.style.setProperty('--viewport-height', `${window.innerHeight}px`);
};
syncViewport();
window.addEventListener('resize', syncViewport);

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } });

// which mocks and which service worker this build starts (src/pwa/bootPlan.ts, app/docs/guides/pwa.md)
const plan = bootPlan(config);

/** Resolves false when the page reloads to drop a stale service worker of the other build mode. */
async function enableMocks(): Promise<boolean> {
  if (await clearStaleServiceWorkers(plan)) return false;
  if (MOCKS_BUILT && plan.mocks === 'worker') {
    const { worker } = await import('./mocks/browser');
    await worker.start({ onUnhandledRequest: 'bypass', quiet: true });
  } else if (MOCKS_BUILT && plan.mocks === 'in-process') {
    const { installInProcessMocks } = await import('./mocks/inProcess');
    installInProcessMocks();
  }
  return true;
}

void enableMocks().then((start) => {
  if (!start) return;
  const container = document.getElementById('reactContainer');
  if (!container) throw new Error('#reactContainer is missing in index.html');
  createRoot(container).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </QueryClientProvider>
    </StrictMode>,
  );
  void registerAppServiceWorker(plan);
});
