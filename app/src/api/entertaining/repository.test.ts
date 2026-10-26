import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { fetchEntertainingConfig, fetchUserIdToken } from './repository';

/* The MSW mock of the test setup: pages/MyEntertaining/mocks.ts (fictional: the app's own origin, no token). */
beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('entertaining repository', () => {
  it('fetchEntertainingConfig calls DataActionGetEntertainingConfig of Embedded_MyEntertaining with the four inputs', async () => {
    const config = await fetchEntertainingConfig({
      View: 'timeline',
      Theme: 'light',
      Sources: 'orbit',
      B2CTenant: 'tenant-a',
    });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_EmbedMyEntertaining',
        owner: 'Embedded_MyEntertaining',
        action: 'DataActionGetEntertainingConfig',
        inputNames: ['B2CTenant', 'Sources', 'Theme', 'View'],
      }),
    ]);
    expect(config).toEqual({ token: '', baseURL: window.location.origin, b2CClientId: '', b2CPolicy: '' });
  });

  it('fetchEntertainingConfig sends only the four inputs', async () => {
    const inputs = { View: 'timeline', Theme: 'light', Sources: '', B2CTenant: '', Extra: 'x' };
    await fetchEntertainingConfig(inputs);
    expect(window.__osCalls?.[0]?.inputNames).toEqual(['B2CTenant', 'Sources', 'Theme', 'View']);
  });

  it('fetchUserIdToken calls ActionAppManager_Get_UserIdToken with EspaceName "" and gives IdToken', async () => {
    const idToken = await fetchUserIdToken();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect_EmbedMyEntertaining',
        action: 'ActionAppManager_Get_UserIdToken',
        inputNames: ['EspaceName'],
      }),
    ]);
    expect(idToken).toBe('');
  });

  it('a failed call raises', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchUserIdToken()).rejects.toThrow();
    await expect(
      fetchEntertainingConfig({ View: 'timeline', Theme: 'light', Sources: '', B2CTenant: '' }),
    ).rejects.toThrow();
  });
});
