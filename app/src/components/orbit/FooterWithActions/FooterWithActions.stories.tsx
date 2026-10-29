import type { Meta, StoryObj } from '@storybook/react-vite';
import { FooterWithActions } from './FooterWithActions';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Orbit_FooterWithActions',
  component: FooterWithActions,
} satisfies Meta<typeof FooterWithActions>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (EventBooklet, HostSurvey): one primary button, top shadow (the defaults). */
export const PrimaryOnly: Story = {
  args: { placeholderPrimary: <span data-expression="">Submit survey</span> },
};

/** Not captured: secondary and primary buttons, small. */
export const TwoButtons: Story = {
  args: {
    inHasSecondaryButton: true,
    inIsSmallButtons: true,
    placeholderSecondary: <span data-expression="">Back</span>,
    placeholderPrimary: <span data-expression="">Next</span>,
  },
};
