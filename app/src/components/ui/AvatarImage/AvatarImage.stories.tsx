import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/legacy/os/os-assets';
import { AvatarImage } from './AvatarImage';

const meta = { title: 'Shared/UBTConnectLibrary/AvatarImage', component: AvatarImage } satisfies Meta<
  typeof AvatarImage
>;
export default meta;
type Story = StoryObj<typeof meta>;

const flag = { inAvatarImage: { URL: osImage('img/UBT_CW.au.png') }, inSizeId: 'l' };

/** BrowseCountries/default: country flag (Statistics_ListItem) */
export const V1: Story = { args: flag };
/** BrowseCountries/default: V1 with its whole content */
export const V2: Story = { args: flag };
/** Notes/loading: no photo, icon fallback */
export const V3: Story = {
  args: {
    inAvatarImage: {
      FallbackOptions: { BackgroundColor: 'neutral-0', BorderColor: 'neutral-0', FontColor: 'neutral-10' },
    },
    inSizeId: 'xxs',
  },
};
/** Notifications/default: no photo and an empty fallback record */
export const V4: Story = { args: { inAvatarImage: {}, inSizeId: 'base' } };
