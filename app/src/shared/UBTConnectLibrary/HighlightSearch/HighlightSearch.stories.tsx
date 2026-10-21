import type { Meta, StoryObj } from '@storybook/react-vite';
import { HighlightSearch } from './HighlightSearch';

const meta = {
  title: 'Shared/UBTConnectLibrary/HighlightSearch',
  component: HighlightSearch,
} satisfies Meta<typeof HighlightSearch>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: inputs as CustomText passes them (stop words "and in"); names are mock data. */
export const V1: Story = {
  args: {
    text: 'Married to Alexa Morgan see household members for more',
    searchTerms: 'Alexa Morgan',
    stopWords: 'and in',
    highlightClasses: 'text-cyan-darkest font-semi-bold font-size-xs',
  },
};
