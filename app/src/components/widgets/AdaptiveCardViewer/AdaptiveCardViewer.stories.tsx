import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdaptiveCardViewer } from './AdaptiveCardViewer';
import { getHostConfigByConfigId } from './hostConfig';

const meta = {
  title: 'Shared/Connect2_LegacyShared/Widgets.AdaptiveCardViewer',
  component: AdaptiveCardViewer,
} satisfies Meta<typeof AdaptiveCardViewer>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: the container stays empty until the renderer library is installed (runtime.ts). */
export const V1: Story = {
  args: {
    prefix: 'b1-b4-b2',
    inAdaptiveCardJson: JSON.stringify({
      type: 'AdaptiveCard',
      version: '1.3',
      body: [{ type: 'TextBlock', text: 'Harvest Supper at Millbrook Hall', wrap: true }],
    }),
    inHostConfig: getHostConfigByConfigId(1),
  },
};
