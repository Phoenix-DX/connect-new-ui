import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/legacy/os/os-assets';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomText } from '@/components/ui/CustomText';
import { UBT_Display } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { CustomContainer } from './CustomContainer';

const meta = {
  title: 'Shared/UBTConnectLibrary/CustomContainer',
  component: CustomContainer,
} satisfies Meta<typeof CustomContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

const flexCenterColumn = {
  Display: UBT_Display.Flex,
  AlignItems: 'align-items-center',
  JustifyContent: 'justify-content-center',
  FlexDirection: 'flex-direction-column',
};

/** BrowseCountries/default */
export const V1: Story = {
  args: {
    options: {
      Background: { BackgroundColor: 'neutral-0' },
      PaddingSize: { HorizontalSizeId: 'base', VerticalSizeId: 's' },
    },
    children: (
      <>
        <CustomContainer options={{ MarginSize: { VerticalSizeId: 's' } }}>
          <PendingBlock name="ConnectPatterns.Input" />
        </CustomContainer>
        <Skeleton />
      </>
    ),
  },
};
/** BrowseCountries/default */
export const V2: Story = {
  args: { options: { MarginSize: { VerticalSizeId: 's' } }, children: <PendingBlock name="ConnectPatterns.Input" /> },
};
/** BrowseCountries/default: a clickable container of the caller inside */
export const V3: Story = {
  args: {
    extendedClasses: 'ubt-statistics-item country-flag',
    options: {
      Background: { BackgroundColor: 'neutral-0' },
      BorderOptions: { Size: { GeneralSizeId: 's' }, Color: 'neutral-3', Radius: { GeneralSizeId: 'large' } },
      PaddingSize: { HorizontalSizeId: 'base', VerticalSizeId: 's' },
    },
    children: (
      <div data-container="" style={{ cursor: 'pointer' }}>
        <ColumnsTwo columnOptions={{ ColumnBehaviour: 'reduce-last' }} left={<CustomText inText="Argentina" />} />
      </div>
    ),
  },
};
/** BrowseCountries/default */
export const V4: Story = {
  args: {
    options: { MarginSize: { BottomSizeId: 's' } },
    children: <CustomText inText="Argentina" inTextOptions={{ FontWeight: 'semi-bold', FontSize: 'h6' }} />,
  },
};
/** HomeFeed/default: background opacity and shadow */
export const V5: Story = {
  args: {
    extendedClasses: 'ubt-services-carousel',
    options: {
      Background: { BackgroundColor: 'neutral-0', Opacity: 0.87 },
      ShadowId: 's',
      BorderOptions: { Radius: { GeneralSizeId: 'large' } },
      PaddingSize: { GeneralSizeId: 's' },
    },
    children: (
      <>
        <ColumnsTwo />
        <CustomContainer />
      </>
    ),
  },
};
/** Photobook/default: flex display and background opacity (names are mock data) */
export const V6: Story = {
  args: {
    extendedClasses: 'photobook-carousel-title-background',
    options: {
      DisplayOptions: flexCenterColumn,
      Background: { BackgroundColor: 'neutral-9', Opacity: 0.25 },
      BorderOptions: { Radius: { GeneralSizeId: 'rounded' } },
      PaddingSize: { HorizontalSizeId: 'xxl', VerticalSizeId: 'xs' },
    },
    children: (
      <>
        <CustomText inText="Morgan family" />
        <CustomText inText="Locality" />
      </>
    ),
  },
};
/** Photobook/loading: height / width options, empty content */
export const V7: Story = {
  args: {
    options: {
      DisplayOptions: flexCenterColumn,
      Background: { BackgroundColor: 'cyan-lightest' },
      BorderOptions: { Size: { GeneralSizeId: 'none' } },
      TextOptions: { Color: 'cyan-darker', FontSize: 'display' },
      PaddingSize: { GeneralSizeId: 'base' },
      HeightOptions: { Main: '100vh' },
      WidthOptions: { Main: '100vw' },
    },
  },
};
/** BrowseCountries/default: skeleton element (as AvatarImage uses it) */
export const V8: Story = {
  args: {
    extendedClasses: 'ubt-avatar-image inline-block ubt-avatar-image-l',
    options: {
      IsSkeletonElement: true,
      BorderOptions: { Size: { GeneralSizeId: 's' }, Color: 'neutral-5', Radius: { GeneralSizeId: 'circle' } },
    },
    children: <img data-image="" src={osImage('img/UBTConnectLibrary.ar.png')} />,
  },
};
