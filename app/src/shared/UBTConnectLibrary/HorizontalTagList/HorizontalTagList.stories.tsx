import type { Meta, StoryObj } from '@storybook/react-vite';
import { HorizontalTagList } from './HorizontalTagList';
import type { Tag } from './types';

const meta = {
  title: 'Shared/UBTConnectLibrary/HorizontalTagList',
  component: HorizontalTagList,
} satisfies Meta<typeof HorizontalTagList>;
export default meta;
type Story = StoryObj<typeof meta>;

const tags = (n: number): Tag[] =>
  Array.from({ length: n }, (_, i) => ({
    Text: `Tag ${String(i + 1)}`,
    Identifier: `t${String(i)}`,
    IsSelected: i === 0,
  }));

/** HouseholdCarousel/default: two tags. */
export const V1: Story = { args: { inTagToggleList: tags(2) } };
/** HouseholdDetails/loading: empty list. */
export const V2: Story = { args: { inTagToggleList: [] } };
/** Locality_Details/default: four tags, `household-tag`, horizontal padding base. */
export const V3: Story = {
  args: { inTagToggleList: tags(4), extendedClasses: 'household-tag', inHorizontalPadding: 'base' },
};
/** Locality_Details/loading: five tags. */
export const V4: Story = {
  args: { inTagToggleList: tags(5), extendedClasses: 'household-tag', inHorizontalPadding: 'base' },
};
