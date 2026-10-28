import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, beforeEach } from 'vitest';
import { handlers } from '@/mocks/handlers';
import { setReviewMarkers } from '@/legacy/os/reviewMarkers';

/* Tests use the same MSW handlers as the browser, so they see the mocked API exactly as the app does. */
export const server = setupServer(...handlers);

beforeAll(async () => {
  server.listen({ onUnhandledRequest: 'error' });
  /* The dialogs of components/ui/Dialog with their platform triggers, as main.tsx does (app/dialogs.ts). Loaded here,
     after the test file, so that its vi.mock calls also apply to the modules that app/dialogs.ts imports. */
  const { connectDialogs } = await import('@/app/dialogs');
  connectDialogs();
});
/* Tests check the reviewer's view of the dev server: review markers on, as with `?review=1`. */
beforeEach(() => {
  setReviewMarkers(true);
});
afterEach(async () => {
  cleanup();
  server.resetHandlers();
  /* The query clients of the test lose their flow-handler subscription (testRouter.tsx testQueryClient), so a late
     answer of this test does not raise a message in the next one. Loaded here for the same reason as app/dialogs.ts. */
  const { disposeTestQueryClients } = await import('@/platform/navigation/testRouter');
  disposeTestQueryClients();
});
afterAll(() => {
  server.close();
});
