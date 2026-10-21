import type { Meta, StoryObj } from '@storybook/react-vite';
import { Orbit_FooterWithActions } from './Orbit_FooterWithActions';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Orbit_FooterWithActions',
  component: Orbit_FooterWithActions,
} satisfies Meta<typeof Orbit_FooterWithActions>;
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
