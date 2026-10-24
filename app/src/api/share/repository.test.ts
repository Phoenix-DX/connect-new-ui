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

/* ---- LegacyShareObject: ScreenBlock_ShareObject and ProfileList ---- */

import { writeItem } from '@/platform/storage/storage';
import { fetchAvailableUsers, fetchShareObjectTypeLabel, shareObject } from './repository';

/* The MSW mocks of the test setup: pages/LegacyShareObject/mocks.ts. The type label of a household is the recorded one,
   any other type answers its own identifier; the users are one fictional user, filtered by the search words; a share
   is stored in memory and is not allowed for the expired mock user. */
describe('share repository (LegacyShareObject)', () => {
  it('fetchShareObjectTypeLabel sends the block variables to ScreenDataSetGetShareObjectTypeById', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById');
    const inputs = { ShareObjectTypeId: 'Household', ObjectId: '42438', In_CustomTitle: '', User_AgeVisibility: true };
    expect(await fetchShareObjectTypeLabel(inputs)).toBe('Household');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        owner: 'ScreenBlock_ShareObject',
        action: 'ScreenDataSetGetShareObjectTypeById',
        inputNames: ['In_CustomTitle', 'ObjectId', 'ShareObjectTypeId', 'User_AgeVisibility'],
      }),
    ]);
    expect(bodies).toEqual([inputs]);
    expect(await fetchShareObjectTypeLabel({ ...inputs, ShareObjectTypeId: '' })).toBe('');
  });

  it('fetchAvailableUsers sends the ProfileList variables and gives the Label and the users', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ProfileList/DataActionGetAvailableUsers');
    const inputs = {
      SearchFilter: 'alice',
      ShareObjectId: '42438',
      ShareObjectTypeId: 'Household',
      MaxRecords: 50,
      HasSearched: false,
    };
    const users = await fetchAvailableUsers(inputs);
    expect(bodies).toEqual([inputs]);
    expect(users).toEqual({
      label: 'Contacts list',
      items: [
        {
          id: '990101',
          fullName: 'Alice Thornton',
          localityName: 'Las Cruces',
          countryName: 'United States',
          photo: { bucket: '', path: '', type: '', signedPath: '' },
        },
      ],
    });
    expect((await fetchAvailableUsers({ ...inputs, SearchFilter: 'nobody' })).items).toEqual([]);
  });

  it('shareObject sends ActionShareObject with In_UpdateType "" and the null date', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ActionShareObject');
    const result = await shareObject({
      shareObjectTypeId: 'Household',
      sharedObjectId: '42438',
      sharingProfileName: 'Kai Andersen',
      targetCBUserId: '990101',
    });
    expect(bodies).toEqual([
      {
        In_ShareObjectTypeId: 'Household',
        In_SharedObjectId: '42438',
        In_SharingProfileName: 'Kai Andersen',
        In_TargetCBUserId: '990101',
        In_UpdateType: '',
        In_UpdateDate: '1900-01-01',
      },
    ]);
    expect(result).toMatchObject({ isAllowed: true, isSuccess: true, message: '' });
    expect(result.shareId).not.toBe('0');
  });

  it('shareObject is not allowed for the expired mock user', async () => {
    writeItem('session', 'param:mockuser', 'expired'); // as `?mockuser=expired` (platform/session/mockUser.ts)
    const result = await shareObject({
      shareObjectTypeId: 'Feed',
      sharedObjectId: '42',
      sharingProfileName: 'Kai Andersen',
      targetCBUserId: '990101',
    });
    expect(result).toEqual({ isAllowed: false, isSuccess: false, message: '', shareId: '0' });
  });
});
