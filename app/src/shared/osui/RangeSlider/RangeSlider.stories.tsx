import type { Meta, StoryObj } from '@storybook/react-vite';
import { RangeSlider } from './RangeSlider';

const meta = {
  title: 'Shared/osui/RangeSlider',
  component: RangeSlider,
} satisfies Meta<typeof RangeSlider>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: built from the compiled view (ContactUsDetails lists the pattern; no capture renders it). */
export const CompiledView: Story = {
  args: {
    minValue: 0,
    maxValue: 10,
    startingValue: 3,
    optionalConfigs: { TickMarksInterval: 1, ShowFloatingLabel: true },
  },
};
