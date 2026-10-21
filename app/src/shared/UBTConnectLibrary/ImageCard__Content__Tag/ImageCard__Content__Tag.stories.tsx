import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageCard__Content__Tag } from './ImageCard__Content__Tag';

const meta = {
  title: 'Shared/UBTConnectLibrary/ImageCard__Content__Tag',
  component: ImageCard__Content__Tag,
} satisfies Meta<typeof ImageCard__Content__Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only): gender split of a supper meeting. */
export const V1: Story = { args: { content: '24 Brothers & 15 Sisters' } };
/** SupperMeeting_Carousel/default: same tag, full markup. */
export const V2: Story = { args: V1.args };
