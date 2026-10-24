import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { Skeleton } from '@/components/ui/Skeleton';
import { Carousel } from '@/components/ui/Carousel';
import * as carousel from '@/components/ui/Carousel/Carousel.stories';
import { Gallery } from './Gallery';

const meta = {
  title: 'Shared/osui/Gallery',
  component: Gallery,
} satisfies Meta<typeof Gallery>;
export default meta;
type Story = StoryObj<typeof meta>;

const list = (className: string, items: React.ReactNode) => (
  <div className={className} data-animation-disabled="" data-list="" data-virtualization-disabled="">
    {items}
  </div>
);
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/** The services gallery of FeedBlock_Services with n service skeletons, as the slide of its carousel. */
const servicesGallery = (id: string, n: number) => (
  <Carousel
    {...carousel.V1.args}
    children={list(
      'list list-group ubt-services-carousel__list OSFillParent',
      <Gallery
        id={id}
        rowItemsDesktop={3}
        rowItemsTablet={3}
        rowItemsPhone={3}
        extendedClass="ubt-services-carousel__gallery"
      >
        {list(
          'list list-group ubt-services-carousel__list-items OSFillParent',
          range(n).map((i) => <Skeleton key={i} isLoading={false} />),
        )}
      </Gallery>,
    )}
  />
);

/** HomeFeed/default: six service skeletons, the slide of FeedBlock_Services' Carousel (rendered inside it). */
export const V1: Story = { render: () => servicesGallery('b5-l2-53_1-$b8', 6) };

/** HomeFeed/loading: five service skeletons, inside the same Carousel. */
export const V2: Story = { render: () => servicesGallery('b5-l2-52_0-$b8', 5) };

const households = (n: number) =>
  list(
    'list list-group OSFillParent',
    range(n).map((i) => <PendingBlock key={i} name="Directory_Household_Blocks.Household_GalleryCard" />),
  );

/** SupperMeeting_Carousel/default: two columns of household cards (11). */
export const V3: Story = {
  args: { rowItemsDesktop: 2, rowItemsTablet: 2, rowItemsPhone: 2, children: households(11) },
};

/** SupperMeeting_Carousel/default: two columns of household cards (7). */
export const V4: Story = {
  args: { rowItemsDesktop: 2, rowItemsTablet: 2, rowItemsPhone: 2, children: households(7) },
};
