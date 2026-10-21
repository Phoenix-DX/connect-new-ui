import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '../../test/PendingBlock';
import { NC_Result_Item_Badge } from '../NC_Result_Item_Badge';
import { NC_Result_Item__Card } from './NC_Result_Item__Card';

const meta = {
  title: 'Shared/Connect2_LegacyShared/NC_Result_Item__Card',
  component: NC_Result_Item__Card,
} satisfies Meta<typeof NC_Result_Item__Card>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/loading: a loading event card. The caller (the Assemble list item) passes its own placeholders:
    empty image, two subtitle skeleton rows, a title skeleton row, an empty bottom subtitle, the 73px date badge and
    the location block. */
export const V1: Story = {
  args: {
    id: 'b2-b4-b7-l1-75_0-b1-$b1',
    cardVisual: <div />,
    placeholder1: (
      <div>
        <div className="font-size-h6 margin-bottom-s ThemeGrid_Width8" data-container="" />
        <div className="font-size-xs ThemeGrid_Width5" data-container="" />
      </div>
    ),
    placeholder2: (
      <div>
        <div className="ThemeGrid_Width7" data-container="" />
      </div>
    ),
    placeholder3: (
      <div>
        <span data-expression="" />
      </div>
    ),
    placeholderRight: (
      <div>
        <NC_Result_Item_Badge id="b2-b4-b7-l1-75_0-$b5" size="73px" />
      </div>
    ),
    placeholderLocation: (
      <div>
        <PendingBlock name="NewConnect_Utilities.NC_Result_Item__Card__Location" />
      </div>
    ),
  },
};
