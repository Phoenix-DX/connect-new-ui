import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { isCommunicationException } from '@/legacy/os/exceptions';
import { freshPage, recordBodies } from '@/test/testSupport';
import type { CurrentServiceWire } from './mapper';
import { changeServicesOrder, fetchUserServices } from './repository';

/* The MSW mocks of the test setup: Services/mocks.ts answers the recorded TST services (six favourites, three
   suggestions) from two in-memory collections; ChangeOrder_Bulk replaces the favourites with the list sent. The
   collections live as long as this test file, so the tests run in order: read, then save. */

beforeEach(() => {
  freshPage();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('service repository', () => {
  it('fetchUserServices calls DataActionGetServices of the screen with its screen variables', async () => {
    const bodies = recordBodies('UBTConnect/Services/DataActionGetServices');
    const services = await fetchUserServices();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Services',
        action: 'DataActionGetServices',
        inputNames: ['HasChanges', 'ReferenceServices', 'isLoading'],
      }),
    ]);
    expect(bodies).toEqual([{ isLoading: false, ReferenceServices: { List: [] }, HasChanges: false }]);
    expect(services.currentServices.map((c) => [c.service.id, c.serviceUser.order, c.service.isMandatory])).toEqual([
      ['Orbit', 1, true],
      ['LDM', 2, true],
      ['Assemble', 3, true],
      ['Trove', 4, false],
      ['MyCalendar', 5, false],
      ['MyNotes', 6, false],
    ]);
    expect(services.availableServices.map((s) => s.id)).toEqual(['HR100', 'ElGusto', 'CommunityTradelink']);
  });

  it('a failed fetch raises the CommunicationException of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const error: unknown = await fetchUserServices().catch((e: unknown) => e);
    expect(isCommunicationException(error)).toBe(true);
  });

  it('changeServicesOrder calls ChangeOrder_Bulk with the whole list; the next fetch has the saved favourites', async () => {
    const before = await fetchUserServices();
    window.__osCalls = [];
    const bodies = recordBodies('UBTConnect/ServiceAPIService_ConnectServices_ChangeOrder_Bulk');
    const kept = before.currentServices.slice(0, 4);
    await expect(changeServicesOrder(kept)).resolves.toBeUndefined();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIService_ConnectServices_ChangeOrder_Bulk',
        inputNames: ['CurrentServices'],
      }),
    ]);
    expect(bodies).toHaveLength(1);
    const sent = (bodies[0] as { CurrentServices: { List: CurrentServiceWire[] } }).CurrentServices.List;
    expect(sent.map((r) => [r.Connect_Services.Id, r.Connect_Service_User.Id, r.Connect_Service_User.Order])).toEqual(
      kept.map((c) => [c.service.id, c.serviceUser.id, c.serviceUser.order]),
    );
    const after = await fetchUserServices();
    expect(after.currentServices.map((c) => c.service.id)).toEqual(['Orbit', 'LDM', 'Assemble', 'Trove']);
    expect(after.availableServices.map((s) => s.id)).toEqual([
      'MyCalendar',
      'MyNotes',
      'HR100',
      'ElGusto',
      'CommunityTradelink',
    ]);
  });
});
