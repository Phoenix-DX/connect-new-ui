import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { Columns2 } from './Columns2';

const meta = { title: 'Shared/osui/Columns2', component: Columns2 } satisfies Meta<typeof Columns2>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Every captured Columns2 sits in BasePatterns.Columns_Two: the placeholders hold its Left / Right containers. */
const left = (content?: React.ReactNode) => <div className="ubt-columns--left ubt-columns--column">{content}</div>;
const right = (content?: React.ReactNode) => <div className="ubt-columns--right ubt-columns--column">{content}</div>;
const statisticsList = (
  <div className="OSInline" data-container="">
    <div
      className="list list-group ubt-statistics-item__list OSFillParent"
      data-list=""
      data-virtualization-disabled=""
    >
      {[0, 1, 2, 3, 4].map((row) => (
        <div data-container="" key={row}>
          <CustomText
            inText="Localities"
            inTextOptions={{ Color: 'neutral-8', FontWeight: 'regular', FontSize: 'xxs' }}
          />
          <CustomText inText="12" inTextOptions={{ FontWeight: 'semi-bold', FontSize: 'base' }} />
        </div>
      ))}
    </div>
  </div>
);

/** BrowseCountries/default */
export const V1: Story = {
  args: {
    gutterSize: '',
    extendedClass: 'ubt-columns ubt-columns--two-columns ubt-columns-reduce-last',
    column1: left(
      <>
        <CustomContainer />
        {statisticsList}
      </>,
    ),
    column2: right(<PendingBlock name="ConnectPatterns.AvatarImage" />),
  },
};
/** BrowseDirectory/default */
export const V2: Story = {
  args: {
    gutterSize: '',
    extendedClass: 'ubt-columns margin-left-base ubt-columns--two-columns ubt-columns-reduce-last',
    column1: left(<PendingBlock name="ConnectPatterns.IconText" />),
    column2: right(<Icon inIconId="connect-icon-chevron_right" />),
  },
};
/** BrowseDirectory/default */
export const V3: Story = {
  args: {
    extendedClass: 'ubt-columns ubt-columns--two-columns ubt-columns-reduce-first align-items-center',
    column1: left(
      <div>
        <Icon inIconId="connect-icon-book_closed" />
      </div>,
    ),
    column2: right(<CustomText inText="Select another country to view" />),
  },
};
/** BrowseDirectory/default */
export const V4: Story = {
  args: {
    gutterSize: '',
    extendedClass: 'ubt-columns ubt-columns--two-columns ubt-columns-reduce-last',
    column1: left(
      <>
        <CustomContainer />
        {statisticsList}
      </>,
    ),
    column2: right(),
  },
};
