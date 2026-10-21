import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorScreen } from './ErrorScreen';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/ErrorScreen',
  component: ErrorScreen,
} satisfies Meta<typeof ErrorScreen>;
export default meta;
type Story = StoryObj<typeof meta>;

/** LDM_EventDetail_V2/offline: the event could not be loaded; the box matches the height of the screen's
    `.main-content` (rendered after the block, as the layout's content area). */
export const V1: Story = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <div className="main-content" />
      </>
    ),
  ],
  args: { id: 'b1-$b16', inErrorMessage: 'No event information.', inMatchMainContentHeight: true },
};

/** Not captured: the defaults (40em high, default message). */
export const Defaults: Story = { args: {} };
