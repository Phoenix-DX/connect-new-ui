import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CommunicationException, ServerException, ViewHasChangedException } from '@/legacy/os/os-exceptions';
import type { ShareDetails } from '@/screens/ConnectShare/types';
import { onInitializeSharingScreen } from './actions';

/* OnInitializeSharingScreen (UBTConnect.controller.js:15603-15700): every branch, with Get_ShareDetails and the
   audit's GetUserInformation_Wrapper spied. */
const spy = vi.hoisted(() => ({
  share: vi.fn<(shareId: string) => Promise<ShareDetails>>(),
  userInfo: vi.fn<() => Promise<unknown>>(),
}));
vi.mock('@/screens/ConnectShare/api', () => ({ get_ShareDetails: spy.share }));
vi.mock('@/platform/session/userInfo', () => ({ getUserInformation: spy.userInfo }));

const share = (patch: Partial<ShareDetails>): ShareDetails => ({
  isShareAvailable: true,
  shareObjectTypeId: 'Household',
  objectId: '42438',
  shareItemId: '42438',
  canAccess: true,
  householderId: '0',
  ...patch,
});

const UNAVAILABLE = 'This shared item is no longer available';

describe('onInitializeSharingScreen', () => {
  beforeEach(() => {
    spy.share.mockReset();
    spy.userInfo.mockReset();
    spy.userInfo.mockResolvedValue({});
  });

  it('sends the ShareId and redirects to the shared object', async () => {
    spy.share.mockResolvedValue(share({}));
    const out = await onInitializeSharingScreen('abc');
    expect(spy.share).toHaveBeenCalledWith('abc');
    expect(out).toEqual({
      isRedirect: true,
      redirect_ShareObjectTypeId: 'Household',
      showFreeSubscriptionAlert: false,
      statusMessage: '',
      redirect_Share_AttributesId: '42438',
    });
  });

  it('uses the householder id for an Update', async () => {
    spy.share.mockResolvedValue(share({ shareObjectTypeId: 'Update', objectId: '5001', householderId: '77' }));
    expect((await onInitializeSharingScreen('x')).redirect_Share_AttributesId).toBe('77');
  });

  it('shows "no longer available" when the share is not available or has no item', async () => {
    spy.share.mockResolvedValue(share({ isShareAvailable: false }));
    expect((await onInitializeSharingScreen('x')).statusMessage).toBe(UNAVAILABLE);
    spy.share.mockResolvedValue(share({ shareItemId: '' }));
    const out = await onInitializeSharingScreen('x');
    expect(out.statusMessage).toBe(UNAVAILABLE);
    expect(out.isRedirect).toBe(false);
  });

  it('asks for the upgrade when the item cannot be accessed, except a Feed', async () => {
    spy.share.mockResolvedValue(share({ canAccess: false }));
    const out = await onInitializeSharingScreen('x');
    expect(out).toMatchObject({
      isRedirect: false,
      showFreeSubscriptionAlert: true,
      statusMessage: "You don't have access to shared item",
    });
    spy.share.mockResolvedValue(share({ canAccess: false, shareObjectTypeId: 'Feed', objectId: 'f1' }));
    expect(await onInitializeSharingScreen('x')).toMatchObject({ isRedirect: true, redirect_Share_AttributesId: 'f1' });
  });

  it('shows the exception message and runs the audit; an audit failure goes up', async () => {
    spy.share.mockRejectedValue(new ServerException('Share not found'));
    expect((await onInitializeSharingScreen('x')).statusMessage).toBe('Share not found');
    expect(spy.userInfo).toHaveBeenCalledTimes(1);

    spy.share.mockRejectedValue(new CommunicationException('Request failed with an error'));
    spy.userInfo.mockRejectedValue(new CommunicationException('Request failed with an error'));
    await expect(onInitializeSharingScreen('x')).rejects.toBeInstanceOf(CommunicationException);
  });

  it('lets a system exception go up without the audit', async () => {
    spy.share.mockRejectedValue(new ViewHasChangedException());
    await expect(onInitializeSharingScreen('x')).rejects.toBeInstanceOf(ViewHasChangedException);
    expect(spy.userInfo).not.toHaveBeenCalled();
  });
});
