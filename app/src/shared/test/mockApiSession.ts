import { applyTestSession } from '../../shell/testSession';

let started: Promise<void> | null = null;

/** Stories only (loader): the app's mock API, started as src/main.tsx does (MSW worker, unhandled requests bypassed),
    then the signed-in test session (`applyTestSession`), for blocks that load their own data. Runs once per page. */
export function mockApiSession(): Promise<void> {
  started ??= (async () => {
    const { worker } = await import('../../mocks/browser');
    await worker.start({ onUnhandledRequest: 'bypass', quiet: true });
    await applyTestSession();
  })();
  return started;
}
