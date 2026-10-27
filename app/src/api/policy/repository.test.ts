import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { isCommunicationException } from '@/legacy/os/exceptions';
import { freshPage, recordBodies } from '@/test/testSupport';
import { acceptPolicies, fetchPendingPolicies } from './repository';
import type { PendingPoliciesInputs } from './types';

/* The MSW mocks of the test setup: AcceptPendingPolicies/mocks.ts answers two fictional Connect policies (7001 and
   7002) from an in-memory collection; ActionAcceptPolicies removes the accepted ids from it. The collection lives as
   long as this test file, so the tests run in order: read, then accept. */
// The Connect_Applications identifiers are the TST GUID texts (pages/AcceptPendingPolicies/staticEntities.ts).
const inputs: PendingPoliciesInputs = {
  policyApplications: ['65d96f75-9f71-42aa-8447-fd622aa09e7e', 'd8997dfa-7ae3-4eb1-bb48-0a14e151034a'],
  country: 'NZ',
  contentBlockId: 'b1-Main',
};
const device = { UniqueId: 'b2f1c0de-0000-4000-8000-000000000001', Platform: 'Web', Manufacturer: '', Model: '' };

beforeEach(() => {
  freshPage();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('policy repository', () => {
  it('fetchPendingPolicies calls DataActionGetPendingPolicies of the block with its screen variables', async () => {
    const bodies = recordBodies('UBTConnect/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies');
    const policies = await fetchPendingPolicies(inputs, false);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Policy_Custom_AcceptPendingPolicies',
        action: 'DataActionGetPendingPolicies',
        inputNames: ['ContentBlockId', 'Country', 'IsAllSelected', 'PolicyApplications'],
      }),
    ]);
    expect(bodies).toEqual([
      {
        PolicyApplications: { List: ['65d96f75-9f71-42aa-8447-fd622aa09e7e', 'd8997dfa-7ae3-4eb1-bb48-0a14e151034a'] },
        Country: 'NZ',
        ContentBlockId: 'b1-Main',
        IsAllSelected: false,
      },
    ]);
    expect(policies.map((p) => [p.id, p.applicationName, p.policyTypeName, p.isSelected])).toEqual([
      ['7001', 'Connect', 'Terms and Conditions', false],
      ['7002', 'Connect', 'Privacy Policy', false],
    ]);
    expect(policies[0]?.url).not.toBe('');
  });

  it('fetchPendingPolicies sends IsAllSelected as the caller gives it', async () => {
    const bodies = recordBodies('UBTConnect/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies');
    await fetchPendingPolicies(inputs, true);
    expect(bodies).toEqual([expect.objectContaining({ IsAllSelected: true })]);
  });

  it('a failed fetch raises the CommunicationException of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const error: unknown = await fetchPendingPolicies(inputs, false).catch((e: unknown) => e);
    expect(isCommunicationException(error)).toBe(true);
  });

  it('acceptPolicies calls ActionAcceptPolicies with the ids and the device details; the next fetch has the rest', async () => {
    const bodies = recordBodies('UBTConnect/ActionAcceptPolicies');
    await expect(acceptPolicies(['7001'], device)).resolves.toBeUndefined();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ActionAcceptPolicies',
        inputNames: ['DeviceDetails', 'Policies'],
      }),
    ]);
    expect(bodies).toEqual([
      {
        Policies: { List: ['7001'] },
        DeviceDetails: { ClientIP: '', ...device },
      },
    ]);
    const rest = await fetchPendingPolicies(inputs, false);
    expect(rest.map((p) => p.id)).toEqual(['7002']);
  });
});
