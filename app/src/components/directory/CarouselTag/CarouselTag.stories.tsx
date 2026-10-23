import type { Meta, StoryObj } from '@storybook/react-vite';
import { CarouselTag } from './CarouselTag';

const meta = { title: 'Shared/UBTConnect/CarouselTag', component: CarouselTag } satisfies Meta<typeof CarouselTag>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack: wrapper only): first of 23 households. */
export const V1: Story = { args: { inIndexCurrentItem: 0, inTotalItems: 23 } };
/** HouseholdCarousel/default: same tag, full markup ("1 / 23"). */
export const V2: Story = { args: V1.args };
