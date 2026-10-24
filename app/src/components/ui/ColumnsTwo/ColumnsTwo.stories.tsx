import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/test/PendingBlock';
import { CustomText } from '@/components/ui/CustomText';
import { ColumnsTwo } from './ColumnsTwo';

const meta = { title: 'Shared/UBTConnectLibrary/Columns_Two', component: ColumnsTwo } satisfies Meta<typeof ColumnsTwo>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BrowseCountries/default */
export const V1: Story = {
  args: {
    columnOptions: { ColumnBehaviour: 'reduce-last' },
    left: <CustomText inText="Argentina" inTextOptions={{ FontWeight: 'semi-bold', FontSize: 'h6' }} />,
    right: <PendingBlock name="ConnectPatterns.AvatarImage" />,
  },
};
