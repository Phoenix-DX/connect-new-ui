import type { Meta, StoryObj } from '@storybook/react-vite';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';
import { FilterOptionList } from './FilterOptionList';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet_OptionList_Item',
  component: FilterOptionList,
} satisfies Meta<typeof FilterOptionList>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryDetails/default: the Localities list without header. */
export const V1: Story = {
  args: {
    filterCommonControlList: {
      Title: 'Localities',
      SheetTitle: 'Locality',
      In_Options: [
        { Id: '1', DisplayText: 'Locality A', CountryCode: 'ch' },
        { Id: '2', DisplayText: 'Locality B', CountryCode: 'de' },
      ],
      SelectedIds: [Choice.None],
    },
  },
};
