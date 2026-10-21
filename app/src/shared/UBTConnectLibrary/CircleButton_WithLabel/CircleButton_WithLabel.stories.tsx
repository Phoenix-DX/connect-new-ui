import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomText } from '../CustomText';
import { Icon } from '../Icon';
import { CircleButton_WithLabel } from './CircleButton_WithLabel';

const meta = {
  title: 'Shared/UBTConnectLibrary/CircleButton_WithLabel',
  component: CircleButton_WithLabel,
} satisfies Meta<typeof CircleButton_WithLabel>;
export default meta;
type Story = StoryObj<typeof meta>;

const orbit = {
  sizeId: 'l',
  backgroundColorId: 'neutral-0',
  borderColorId: 'neutral-3',
  icon: <Icon inIconId="connect-icon-orbit_text" inColorId="neutral-9" inSizeId="icon-display" />,
  text: <span data-expression="">Orbit</span>,
};

/** HomeFeed/default: services row (FeedBlock_Services) */
export const V1: Story = { args: orbit };
/** HouseholdCarousel/default: as rendered by CircleButton_IconPrimary */
export const V2: Story = {
  args: {
    sizeId: 's',
    backgroundColorId: 'cyan-lightest',
    icon: <Icon inIconId="connect-icon-bookmark" inColorId="cyan-darker" />,
    text: (
      <CustomText inText="Bookmark" inTextOptions={{ Color: 'neutral-10', FontSize: 'xxs', FontWeight: 'semi-bold' }} />
    ),
  },
};
/** HomeFeed/default: V1 with its whole content */
export const V3: Story = { args: orbit };
