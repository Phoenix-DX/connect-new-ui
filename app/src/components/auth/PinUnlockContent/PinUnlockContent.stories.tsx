import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PinUnlockContent } from './PinUnlockContent';

/** The InactivityTimer block as the caller gives it: the block renders an empty wrapper (platform/session). */
const renderInactivityTimer = (id: string | undefined) => <OSBlock name="PIN.InactivityTimer" id={id} />;

/** CacheControl_Policies as the caller gives it, after its Result: the block and its CacheControl render empty
    wrappers (the block has its own tests). */
const renderCacheControlPolicies = (id: string | undefined) => (
  <OSBlock name="CacheControl.CacheControl_Policies" id={id}>
    <OSBlock name="CacheControl.CacheControl" id={id === undefined ? undefined : `${id.replace('$', '')}-$b1`} />
  </OSBlock>
);

/** The PreventBackNavigation block of the keypad as the caller gives it (platform/navigation): its wrapper and its
    nested BackNavigationHandler. */
const renderPreventBackNavigation = (id: string | undefined) => (
  <OSBlock name="NavigationHandler.PreventBackNavigation" id={id}>
    <OSBlock name="NavigationHandler.BackNavigationHandler" />
  </OSBlock>
);

/** Fictional policy documents with neutral URLs. */
const policy = (name: string) => ({
  Policy_ContentType: 'application/pdf',
  Policy_FileName: `${name}.pdf`,
  Policy_Url: `https://example.com/${name}.pdf`,
});

const meta = {
  title: 'Shared/UBTConnect/Block_PINUnlock_ContentWrapper',
  component: PinUnlockContent,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: { renderInactivityTimer, renderCacheControlPolicies, renderPreventBackNavigation },
} satisfies Meta<typeof PinUnlockContent>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: in the lock container (Block_PINUnlock: Forgot PIN, policies), not locked */
export const V1: Story = { args: { id: 'b3-b2-$b4', showForgotPIN: true, showPolicy: true } };

/** PINUnlock/default: keypad shown, Forgot PIN and the policy links (the policies are fetched) */
export const V2: Story = {
  args: {
    id: 'b1-$b4',
    isKeypadVisible: true,
    showForgotPIN: true,
    showPolicy: true,
    isPoliciesFetched: true,
    policies: {
      PolicyInformation_TermsAndConditions: policy('terms'),
      PolicyInformation_PrivacyPolicy: policy('privacy'),
    },
  },
};

/** PINChange/default: current PIN from the menu (back allowed, no Forgot PIN, no policies) */
export const V3: Story = {
  args: { id: '$b5', isKeypadVisible: true, isFromMenu: true, unlockText: 'Enter your current PIN' },
};
