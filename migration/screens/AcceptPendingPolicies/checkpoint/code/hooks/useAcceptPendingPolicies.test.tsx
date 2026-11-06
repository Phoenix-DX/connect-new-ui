import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CommunicationException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { clientVar } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { freshPage } from '@/test/testSupport';
import { useAcceptPendingPolicies } from './useAcceptPendingPolicies';

/* AcceptPendingPoliciesAcceptedAll runs through safeExecuteClientAction (AcceptPendingPolicies.mvc.js:798-799): an
   exception goes to the flow handler (App_Policies F3). The flow handler and the user-info read are spies. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));
vi.mock('@/platform/session/userInfo', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/userInfo')>()),
  getUserInformation: vi.fn(),
}));

function wrapper({ children }: { children: ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

describe('useAcceptPendingPolicies: acceptedAll', () => {
  beforeEach(() => {
    freshPage();
    vi.mocked(raiseToFlowHandler).mockClear();
  });

  it('a failed Cache_UserInfo_Get goes to the flow handler; the flags stay and the screen stays', async () => {
    const error = new CommunicationException('offline');
    vi.mocked(getUserInformation).mockRejectedValueOnce(error);
    clientVar.hasPolicyToAccept.set(true);
    const { result } = renderHook(() => useAcceptPendingPolicies(), { wrapper });
    await act(async () => {
      await result.current.acceptedAll();
    });
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(raiseToFlowHandler).toHaveBeenCalledWith(error);
    expect(clientVar.hasPolicyToAccept.get()).toBe(true);
  });
});
