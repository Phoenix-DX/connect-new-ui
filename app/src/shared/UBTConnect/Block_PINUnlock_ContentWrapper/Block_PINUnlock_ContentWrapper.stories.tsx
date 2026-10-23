import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { appCache } from '@/api/app';
import { putCacheableObject } from '@/api/client/cache';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { Block_PINUnlock_ContentWrapper } from './Block_PINUnlock_ContentWrapper';

/** Stories only: signed in and unlocked, as the captures were taken. */
const session: Decorator = (Story) => {
  setSignedInUser(MOCK_USER_ID);
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
  setClientVar('UBT_AppManager.PIN_IsLocked', false);
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

/** Stories only: policies in the memory cache (Storybook has no mock API), neutral mock URLs. */
const seedPolicies = () => {
  const policy = (name: string) => ({
    Policy_ContentType: 'application/pdf',
    Policy_FileName: `${name}.pdf`,
    Policy_Url: `https://example.com/${name}.pdf`,
  });
  putCacheableObject(appCache.policies(getClientVar('UBTConnect_Utils.UniqueCacheKey'), 60), {
    PolicyInformation_TermsAndConditions: policy('terms'),
    PolicyInformation_PrivacyPolicy: policy('privacy'),
  });
};

const meta = {
  title: 'Shared/UBTConnect/Block_PINUnlock_ContentWrapper',
  component: Block_PINUnlock_ContentWrapper,
  decorators: [session],
} satisfies Meta<typeof Block_PINUnlock_ContentWrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: in the lock container (Block_PINUnlock: Forgot PIN, policies), not locked */
export const V1: Story = { args: { id: 'b3-b2-$b4', showForgotPIN: true, showPolicy: true } };
/** Stories only: policies in the cache before the block renders. */
const policies: Decorator = (Story) => {
  seedPolicies();
  return <Story />;
};

/** PINUnlock/default: keypad shown, Forgot PIN and the policy links */
export const V2: Story = {
  decorators: [policies],
  args: { id: 'b1-$b4', inForceVisible: true, showForgotPIN: true, showPolicy: true },
};
/** PINChange/default: current PIN from the menu (back allowed, no Forgot PIN, no policies) */
export const V3: Story = {
  args: { id: '$b5', inForceVisible: true, isFromMenu: true, unlockText: 'Enter your current PIN' },
};
