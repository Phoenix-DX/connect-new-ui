import type { Meta, StoryObj } from '@storybook/react-vite';
import { EntitiesCarousel_HeaderGenerator } from './EntitiesCarousel_HeaderGenerator';

const meta = {
  title: 'Shared/UBTConnect/EntitiesCarousel_HeaderGenerator',
  component: EntitiesCarousel_HeaderGenerator,
} satisfies Meta<typeof EntitiesCarousel_HeaderGenerator>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack variant 1): EntitiesCarousel's header generator, active element 0, one header known. */
export const V1: Story = {
  args: {
    id: 'b3-$b3',
    inCurrentIndex: 0,
    inHouseholdCarouselHeaderList: [{ Label: 'Springfield, Fictland', Index: 0 }],
  },
};
