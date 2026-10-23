import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterSheetIcon } from './FilterSheetIcon';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet_Icon',
  component: FilterSheetIcon,
} satisfies Meta<typeof FilterSheetIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Search/default: loaded, no filter applied. */
export const V1: Story = { args: { isLoaded: true, bottomSheetId: 'b1-b39-b1' } };
