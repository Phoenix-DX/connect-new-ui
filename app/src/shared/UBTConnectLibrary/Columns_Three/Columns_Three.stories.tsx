import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { UBT_ColumnBehaviour } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Columns_Three } from './Columns_Three';

const meta = { title: 'Shared/UBTConnectLibrary/Columns_Three', component: Columns_Three } satisfies Meta<
  typeof Columns_Three
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailMember/default */
export const V1: Story = {
  args: {
    columnOptions: { ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle },
    left: <CustomContainer />,
    middle: (
      <>
        <CustomText inText="Name" />
        <IconText text="Locality" />
      </>
    ),
  },
};
