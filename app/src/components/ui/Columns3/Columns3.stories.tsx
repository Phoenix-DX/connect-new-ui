import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { Columns3 } from './Columns3';

const meta = { title: 'Shared/osui/Columns3', component: Columns3 } satisfies Meta<typeof Columns3>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Every captured Columns3 sits in BasePatterns.Columns_Three: the placeholders hold its Left / Middle / Right. */
const column = (side: 'left' | 'middle' | 'right', content?: React.ReactNode) => (
  <div className={`ubt-columns--${side} ubt-columns--column`}>{content}</div>
);

/** ContactByEmailMember/default */
export const V1: Story = {
  args: {
    gutterSize: '',
    extendedClass: 'ubt-columns ubt-columns--three-columns ubt-columns-expand-middle',
    column1: column('left', <CustomContainer />),
    column2: column(
      'middle',
      <>
        <CustomText inText="Name" />
        <IconText text="Locality" />
      </>,
    ),
    column3: column('right'),
  },
};
/** ContactUsMenu/default */
export const V2: Story = {
  args: {
    gutterSize: 'gutter-s',
    extendedClass: 'ubt-columns ubt-columns--three-columns ubt-columns-expand-middle align-items-center',
    column1: column('left', <Icon inIconId="connect-icon-mail" />),
    column2: column('middle', <CustomText inText="Contact us" />),
    column3: column('right', <SkeletonSection />),
  },
};
/** CountryDetails/default */
export const V3: Story = {
  args: {
    extendedClass: 'ubt-columns ubt-columns--three-columns ubt-columns-expand-middle align-items-center',
    column1: column('left', <EntityLazyImage />),
    column2: column(
      'middle',
      <>
        <CustomText inText="Country" />
        <PendingBlock name="Directory_Locality.Statistics_Icons" />
      </>,
    ),
    column3: column('right', <Icon inIconId="connect-icon-chevron_right" />),
  },
};
/** CountryDetails/default */
export const V4: Story = {
  args: {
    gutterSize: '',
    extendedClass: 'ubt-columns ubt-columns--three-columns ubt-columns-same-size',
    column1: column('left', <IconText text="Members" />),
    column2: column('middle', <IconText text="Houses" />),
    column3: column('right', <CustomText inText="Localities" />),
  },
};
