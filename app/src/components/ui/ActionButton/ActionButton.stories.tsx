import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_ButtonSize, UBT_ButtonType, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ActionButton } from './ActionButton';

const meta = { title: 'Shared/UBTConnect_Utils/Button', component: ActionButton } satisfies Meta<typeof ActionButton>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailMember/default: "Send", disabled (pack variant; inside ButtonLoading there) */
export const V1: Story = { args: { buttonText: 'Send', isDisabled: true } };
/** Household_Relations/default: small secondary button with an icon */
export const V2: Story = {
  args: {
    buttonText: 'Notes',
    iconId: 'connect-icon-tooltip',
    iconTextSpacingSize: UBT_Size.Small,
    buttonOptions: { UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Secondary },
  },
};
/** Household_Relations/default: small primary button, disabled */
export const V3: Story = {
  args: {
    buttonText: 'Bookmark',
    iconId: 'connect-icon-bookmark',
    iconTextSpacingSize: UBT_Size.Small,
    isDisabled: true,
    buttonOptions: { UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Primary },
  },
};
