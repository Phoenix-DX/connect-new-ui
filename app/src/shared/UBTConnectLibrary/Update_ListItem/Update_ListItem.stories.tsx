import type { Meta, StoryObj } from '@storybook/react-vite';
import { Connect_UpdateTypeId, Gender, UBT_Size } from '../lib/staticEntities';
import { Update_ListItem } from './Update_ListItem';

const meta = {
  title: 'Shared/UBTConnectLibrary/Update_ListItem',
  component: Update_ListItem,
} satisfies Meta<typeof Update_ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Masked names, locations and dates: neutral mock values. */
const birth = {
  inTypeUpdateFeedItem: Connect_UpdateTypeId.Birth,
  inInitialsList: [{ Gender: Gender.MALE }],
  inName: 'Baby Example',
  inLocation: 'Example Locality',
  inParentsNames: 'Parent One',
  inDate: '2025-10-09',
  showImage: false,
  isEnabled: true,
};

/** HomeFeed/default (pack: wrapper only): FeedBlock_Updates row, unread birth, no read background, no border. */
export const V1: Story = {
  args: { ...birth, id: 'b9-l1-89_0-$b3', inIsRead: false, ignoreReadBackground: true, hasBorderBottom: false },
};
/** HomeFeed/default: same row, full markup. */
export const V2: Story = { args: V1.args };
/** Updates_SingleList/default: unread birth, cyan background, bottom border, padding base. */
export const V3: Story = {
  args: { ...birth, inIsRead: false, hasBorderBottom: true, paddingSizeId: { GeneralSizeId: UBT_Size.Base } },
};
/** Updates_SingleList/default: a read birth (no unread class, no background). */
export const V4: Story = { args: { ...V3.args, inIsRead: true } };
