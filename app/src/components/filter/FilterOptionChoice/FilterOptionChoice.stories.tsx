import type { Meta, StoryObj } from '@storybook/react-vite';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { FilterOptionChoice } from './FilterOptionChoice';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet_OptionChoice_Item',
  component: FilterOptionChoice,
} satisfies Meta<typeof FilterOptionChoice>;
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
