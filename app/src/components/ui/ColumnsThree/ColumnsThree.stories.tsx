import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { IconText } from '@/components/ui/IconText';
import { UBT_ColumnBehaviour } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ColumnsThree } from './ColumnsThree';

const meta = { title: 'Shared/UBTConnectLibrary/Columns_Three', component: ColumnsThree } satisfies Meta<
  typeof ColumnsThree
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
