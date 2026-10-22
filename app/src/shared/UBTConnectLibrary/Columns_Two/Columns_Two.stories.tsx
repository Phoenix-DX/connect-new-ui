import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Columns_Two } from './Columns_Two';

const meta = { title: 'Shared/UBTConnectLibrary/Columns_Two', component: Columns_Two } satisfies Meta<
  typeof Columns_Two
>;
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
