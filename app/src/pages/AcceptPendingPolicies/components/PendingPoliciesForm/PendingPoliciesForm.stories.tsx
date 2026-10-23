import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import type { PendingPolicy } from '@/api/policy';
import { PendingPoliciesForm } from './PendingPoliciesForm';

/** The content area of the screen (Layout_LoginFlow with the class ubt-policies), so the white texts show on the
    blue background of the original CSS. */
const screenContent: Decorator = (Story) => (
  <div className="ubt-layout--login ubt-policies" data-container="">
    <div className="ubt-layout--login__content">
      <div className="ubt-policies--content" data-container="" style={{ textAlign: 'center' }}>
        <Story />
      </div>
    </div>
  </div>
);

const meta = {
  title: 'Pages/AcceptPendingPolicies/PendingPoliciesForm',
  component: PendingPoliciesForm,
  decorators: [screenContent],
} satisfies Meta<typeof PendingPoliciesForm>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Two fictional Connect policies, as the mocks of the page answer them (the route was not captured, Q7 c). */
const policy = (id: string, policyTypeName: string, file: string, isSelected = false): PendingPolicy => ({
  id,
  applicationName: 'Connect',
  policyTypeName,
  policyContentFilename: file,
  policyContentType: 'application/pdf',
  url: `https://policies.example.org/connect/${file}`,
  isSelected,
});
const TERMS = policy('7001', 'Terms and Conditions', 'connect-terms-and-conditions.pdf');
const PRIVACY = policy('7002', 'Privacy Policy', 'connect-privacy-policy.pdf');

/** Two pending policies, none selected: "I agree to all" shows and Continue is disabled. */
export const Default: Story = { args: { id: '$b7', rows: [TERMS, PRIVACY], isAllSelected: false } };

/** Every policy selected: both checkboxes and "I agree to all" are checked, Continue is enabled. */
export const AllSelected: Story = {
  args: {
    id: '$b7',
    rows: [
      { ...TERMS, isSelected: true },
      { ...PRIVACY, isSelected: true },
    ],
    isAllSelected: true,
  },
};

/** One pending policy: no "I agree to all". */
export const OnePolicy: Story = { args: { id: '$b7', rows: [PRIVACY], isAllSelected: false } };

/** The first fetch runs: the list-updating container. */
export const Loading: Story = { args: { id: '$b7', rows: undefined } };

/** No policy left: the "accepted all" message (the block raises AcceptedAll 5 s later). */
export const AcceptedAll: Story = { args: { id: '$b7', rows: [] } };
