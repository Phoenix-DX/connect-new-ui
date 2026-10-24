import type { Meta, StoryObj } from '@storybook/react-vite';
import { CarouselTag } from '@/components/directory/CarouselTag';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { ImageCardContent } from '@/components/ui/ImageCardContent';
import { UBT_ImageCardType } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ImageCard } from './ImageCard';

const meta = {
  title: 'Shared/UBTConnectLibrary/ImageCard_LazyLoading',
  component: ImageCard,
} satisfies Meta<typeof ImageCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Household and locality images are person data: UBT_LazyImage's neutral placeholder; names are mock values. */
const detail = {
  inCardTypeId: UBT_ImageCardType.Detail,
  inIsBookmarked: true,
  lazyImagePlaceholder: <EntityLazyImage />,
  placeholderImageTag: <CarouselTag inIndexCurrentItem={0} inTotalItems={23} />,
  placeholderContent: <ImageCardContent inTitle="Household Example" />,
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
