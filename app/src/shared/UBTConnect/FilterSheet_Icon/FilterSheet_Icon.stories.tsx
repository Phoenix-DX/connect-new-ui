import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterSheet_Icon } from './FilterSheet_Icon';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet_Icon',
  component: FilterSheet_Icon,
} satisfies Meta<typeof FilterSheet_Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Search/default: loaded, no filter applied. */
export const V1: Story = { args: { isLoaded: true, bottomSheetId: 'b1-b39-b1' } };
