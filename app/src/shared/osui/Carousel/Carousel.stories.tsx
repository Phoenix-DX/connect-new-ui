import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Gallery } from '@/shared/osui/Gallery';
import { CarouselNavigation } from '@/shared/osui/lib/staticEntities';
import { Carousel } from './Carousel';

const meta = {
  title: 'Shared/osui/Carousel',
  component: Carousel,
} satisfies Meta<typeof Carousel>;
export default meta;
type Story = StoryObj<typeof meta>;

/** A List widget of the caller, as captured. */
const list = (className: string, items: React.ReactNode) => (
  <div className={className} data-animation-disabled="" data-list="" data-virtualization-disabled="">
    {items}
  </div>
);
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/** HomeFeed/default: FeedBlock_Services (Dots, padding var(--space-s), no loop / autoplay), one Gallery slide of six
    service skeletons. */
export const V1: Story = {
  args: {
    id: 'b5-Carousel_Services',
    extendedClass: 'ubt-services-carousel',
    navigation: CarouselNavigation.Dots,
    itemsPerSlide: { Desktop: 1, Tablet: 1, Phone: 1 },
    optionalConfigs: { AutoPlay: false, Loop: false, Padding: 'var(--space-s)', StartingPosition: 0 },
    children: list(
      'list list-group ubt-services-carousel__list OSFillParent',
      <Gallery
        id="b5-l2-53_1-$b8"
        rowItemsDesktop={3}
        rowItemsTablet={3}
        rowItemsPhone={3}
        extendedClass="ubt-services-carousel__gallery"
      >
        {list(
          'list list-group ubt-services-carousel__list-items OSFillParent',
          range(6).map((i) => <SkeletonSection key={i} inIsLoading={false} />),
        )}
      </Gallery>,
    ),
  },
};

const entities = (n: number) =>
  list(
    'list list-group OSFillParent',
    range(n).map((i) => (
      <div key={i} data-container="">
        <PendingBlock name="Directory_Caroussel.EntitiesCarousel_Element" />
      </div>
    )),
  );
const entitiesArgs = {
  id: 'b3-EntitiesCarousel',
  extendedClass: 'ubt-entities-carousel',
  navigation: CarouselNavigation.None,
  height: 'var(--carousel-slide-custom-height)',
  optionalConfigs: { AutoPlay: false, Loop: false },
};

/** HouseholdCarousel/default: 23 entity slides (containers), no navigation, custom slide height. */
export const V2: Story = { args: { ...entitiesArgs, children: entities(23) } };

/** Photobook/default: 23 photo items (blocks as slides), no navigation. */
export const V3: Story = {
  args: {
    id: 'b4-Carousel_Photobook',
    extendedClass: 'photobook-carousel--carousel',
    navigation: CarouselNavigation.None,
    optionalConfigs: { AutoPlay: false, Loop: false },
    children: list(
      'list list-group photobook-carousel--list OSFillParent',
      range(23).map((i) => <PendingBlock key={i} name="Directory_Photobook.Photobook_Item" />),
    ),
  },
};

/** SupperMeeting_Carousel/default: 3 entity slides, no navigation, custom slide height. */
export const V4: Story = { args: { ...entitiesArgs, children: entities(3) } };
