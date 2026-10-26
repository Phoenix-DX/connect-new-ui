import type { Meta, StoryObj } from '@storybook/react-vite';
import { LazyImage } from './LazyImage';

const meta = { title: 'Shared/UBTConnectLibrary/LazyImage', component: LazyImage } satisfies Meta<typeof LazyImage>;
export default meta;
type Story = StoryObj<typeof meta>;

const avatar = {
  inImageSize: { Height: 'base', Width: 'square' },
  extendedClass: 'inline-block ubt-avatar-image',
  inBorderOptions: { BorderColorId: 'neutral-3', BorderSizeId: 's' },
  fallbackOptions: {
    BackgroundColor: 'cyan-lightest',
    BorderColor: 'neutral-3',
    BorderSize: 's',
    FontColor: 'cyan-darker',
    IconId: 'connect-icon-person-fill',
    IconSizeId: 'icon-non-standard-32',
  },
  fallbackPadding: { GeneralSizeId: 'base' },
};

/** ContactByEmailMember/default: avatar without photo (pack variant) */
export const V1: Story = { args: avatar };
/** ContactByEmailMember/default: the same avatar, whole fallback (icon) */
export const V2: Story = { args: avatar };
/** SupperMeeting_Carousel/default: no photo, with the error message */
export const V3: Story = {
  args: {
    inImageSize: { Width: 'max-width' },
    inBorderOptions: { BorderRadius: 'none' },
    fallbackOptions: {
      BackgroundColor: 'cyan-lightest',
      BorderSize: 'none',
      FontColor: 'cyan-darker',
      FontSize: 'display',
      IconId: 'connect-icon-house_fill',
      Message: 'Sorry, no photo available',
    },
    fallbackPadding: { GeneralSizeId: 'base' },
    hasErrorMessage: true,
  },
};
