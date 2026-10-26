import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/test/PendingBlock';
import { UBT_ButtonSize, UBT_ButtonType } from '@/lib/ubtConnectLibrary/staticEntities';
import { Button } from './Button';

const meta = { title: 'Shared/UBTConnectLibrary/Button', component: Button } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailMember/default: disabled, caller content with the OutSystems UI button-loading spinner */
export const V1: Story = {
  args: {
    inIsDisabled: true,
    children: (
      <>
        <div aria-hidden="true" className="osui-btn-loading__spinner-animation" data-container="" />
        <PendingBlock name="ConnectPatterns.IconText" />
      </>
    ),
  },
};
/** CountryDetails/default */
export const V2: Story = {
  args: {
    inButtonOptions: { UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Secondary },
    children: 'Clear filters',
  },
};
/** CountryDetails/default */
export const V3: Story = {
  args: { inButtonOptions: { UBT_ButtonSizeId: UBT_ButtonSize.Small }, inIsDisabled: true, children: 'Apply filters' },
};
/** CountryDetails/loading */
export const V4: Story = {
  args: {
    inButtonOptions: { UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Secondary },
    inIsDisabled: true,
    children: 'Clear filters',
  },
};
/** Notifications/default: tertiary */
export const V5: Story = {
  args: { inButtonOptions: { UBT_ButtonTypeId: UBT_ButtonType.Tertiary }, children: 'Cancel' },
};
