import type { Meta, StoryObj } from '@storybook/react-vite';
import { NC_Result_Item_Badge } from '../../Connect2_LegacyShared/NC_Result_Item_Badge';
import { PendingBlock } from '../../test/PendingBlock';
import { AssembleSummaryDetailHeader_Skeleton } from './AssembleSummaryDetailHeader_Skeleton';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleSummaryDetailHeader_Skeleton',
  component: AssembleSummaryDetailHeader_Skeleton,
} satisfies Meta<typeof AssembleSummaryDetailHeader_Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/loading: a loading event card (caller markup as in the NC_Result_Item__Card capture taken from this
    instance): two subtitle skeleton rows, a title row, an empty bottom subtitle, the 73px badge and the location
    block (own block of AssembleEvents, not built: pending). */
export const V1: Story = {
  args: {
    id: 'b2-b4-b7-l1-75_0-$b1',
    placeholderSubtitleTop: (
      <>
        <div className="font-size-h6 margin-bottom-s ThemeGrid_Width8" data-container="" />
        <div className="font-size-xs ThemeGrid_Width5" data-container="" />
      </>
    ),
    placeholderTitle: <div className="ThemeGrid_Width7" data-container="" />,
    placeholderSubtitleBottom: <span data-expression="" />,
    placeholderRight: <NC_Result_Item_Badge id="b2-b4-b7-l1-75_0-$b5" size="73px" />,
    placeholderLocation: <PendingBlock name="NewConnect_Utilities.NC_Result_Item__Card__Location" />,
  },
};
