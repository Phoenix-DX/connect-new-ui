import type { Meta, StoryObj } from '@storybook/react-vite';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { FilterSheet_OptionChoice_Item } from './FilterSheet_OptionChoice_Item';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet_OptionChoice_Item',
  component: FilterSheet_OptionChoice_Item,
} satisfies Meta<typeof FilterSheet_OptionChoice_Item>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Notes/default: the "Sort by" choice. */
export const V1: Story = {
  args: {
    filterCommonControlChoice: {
      Title: 'Sort by',
      YesLabel: 'Newest',
      NoLabel: 'Oldest',
      SelectedChoiceId: Choice.Yes,
    },
  },
};
