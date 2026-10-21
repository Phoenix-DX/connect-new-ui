import type { Meta, StoryObj } from '@storybook/react-vite';
import { CarouselTag } from '../../UBTConnect/CarouselTag';
import { UBT_LazyImage } from '../../UBTConnect_Utils/UBT_LazyImage';
import { ImageCard__Content } from '../ImageCard__Content';
import { UBT_ImageCardType } from '../lib/staticEntities';
import { ImageCard_LazyLoading } from './ImageCard_LazyLoading';

const meta = {
  title: 'Shared/UBTConnectLibrary/ImageCard_LazyLoading',
  component: ImageCard_LazyLoading,
} satisfies Meta<typeof ImageCard_LazyLoading>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Household and locality images are person data: UBT_LazyImage's neutral placeholder; names are mock values. */
const detail = {
  inCardTypeId: UBT_ImageCardType.Detail,
  inIsBookmarked: true,
  lazyImagePlaceholder: <UBT_LazyImage />,
  placeholderImageTag: <CarouselTag inIndexCurrentItem={0} inTotalItems={23} />,
  placeholderContent: <ImageCard__Content inTitle="Household Example" />,
};
/** HouseholdCarousel/default (pack: wrapper only): bookmarked detail card. */
export const V1: Story = { args: detail };
/** HouseholdCarousel/default: full markup (placeholders nested). */
export const V2: Story = { args: detail };
/** Locality_Details/default: list card with avatar list and rounded bookmark. */
export const V3: Story = {
  args: {
    ...detail,
    inCardTypeId: UBT_ImageCardType.List,
    inShowAvatarList: true,
    inExtendedClass: 'padding-bottom-s',
    inBookmarkModifier: 'bookmark--rounded',
    placeholderImageTag: undefined,
    avatarList: <span>Avatars</span>,
  },
};
