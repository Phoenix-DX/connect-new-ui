import type { Meta, StoryObj } from '@storybook/react-vite';
import { Choice } from '../lib/staticEntities';
import { FilterSheet_OptionList_Item } from './FilterSheet_OptionList_Item';

const meta = {
  title: 'Shared/UBTConnect/FilterSheet_OptionList_Item',
  component: FilterSheet_OptionList_Item,
} satisfies Meta<typeof FilterSheet_OptionList_Item>;
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
