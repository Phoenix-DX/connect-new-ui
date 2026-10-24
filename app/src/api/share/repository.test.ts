import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { isCommunicationException, isUserException } from '@/legacy/os/exceptions';
import { freshPage, recordBodies } from '@/test/testSupport';
import { fetchShareDetails } from './repository';

/* The MSW mocks of the test setup: pages/ConnectShare/mocks.ts answers fictional shares by ShareId and raises a server
   exception for any other ShareId. */
const shareId = (n: number): string => `00000000-0000-0000-0000-${String(n).padStart(12, '0')}`;

beforeEach(() => {
  freshPage();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('share repository', () => {
  it('fetchShareDetails calls ActionGet_ShareDetails with the ShareId and IncludeDeceased False', async () => {
    const bodies = recordBodies('UBTConnect/ActionGet_ShareDetails');
    const share = await fetchShareDetails(shareId(4));
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ActionGet_ShareDetails',
        inputNames: ['IncludeDeceased', 'ShareId'],
      }),
    ]);
    expect(bodies).toEqual([{ ShareId: shareId(4), IncludeDeceased: false }]);
    expect(share).toEqual({
      isShareAvailable: true,
      shareObjectTypeId: 'Household',
      objectId: '42438',
      shareItemId: '42438',
      canAccess: true,
      householderId: '0',
    });
  });

  it('fetchShareDetails gives the householder of an Update', async () => {
    const share = await fetchShareDetails(shareId(5));
    expect(share).toMatchObject({ shareObjectTypeId: 'Update', objectId: '5001', householderId: '42438' });
  });

  it('the server exception of an unknown ShareId goes up to the caller', async () => {
    const error: unknown = await fetchShareDetails('unknown').catch((e: unknown) => e);
    expect(error).toBeInstanceOf(Error);
    expect(isCommunicationException(error)).toBe(false);
    expect(isUserException(error)).toBe(false);
    expect((error as Error).message).toBe('Share not found (mock message)');
  });

  it('a failed call raises the CommunicationException of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const error: unknown = await fetchShareDetails(shareId(4)).catch((e: unknown) => e);
    expect(isCommunicationException(error)).toBe(true);
  });
});
