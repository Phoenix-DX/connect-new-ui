import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/legacy/os/os-assets';
import { PoliciesHeader } from './PoliciesHeader';

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
  title: 'Pages/AcceptPendingPolicies/PoliciesHeader',
  component: PoliciesHeader,
  decorators: [screenContent],
} satisfies Meta<typeof PoliciesHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

/** The only state: the header shows the same texts on each visit (the route was not captured, Q7 c). */
export const Default: Story = { args: { logoSrc: osImage('img/UBTConnect.ConnectLogoWhite.svg') } };
