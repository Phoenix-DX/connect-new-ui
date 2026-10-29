import type { Meta, StoryObj } from '@storybook/react-vite';
import { RangeSlider } from './RangeSlider';

const meta = { title: 'Shared/osui/RangeSlider', component: RangeSlider } satisfies Meta<typeof RangeSlider>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured: the rating slider of ContactUs_Rate (1 to 10, start 0, tick marks every 1), from the compiled view. */
export const Rating: Story = {
  args: {
    optionalConfigs: { ShowTickMarks: true, TickMarksInterval: 1 },
    minValue: 1,
    maxValue: 10,
    startingValue: 0,
    extendedClass: 'ubt-rating-slider--no-rate ubt-rating-slider',
  },
};
