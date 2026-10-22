import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { CircleButton } from './CircleButton';

const meta = { title: 'Shared/UBTConnectLibrary/CircleButton', component: CircleButton } satisfies Meta<
  typeof CircleButton
>;
export default meta;
type Story = StoryObj<typeof meta>;

const settings = {
  sizeId: 'xs',
  backgroundColorId: 'neutral-0',
  borderColorId: 'neutral-3',
  icon: <Icon inIconId="connect-icon-settings" inColorId="neutral-7" inSizeId="icon-base" />,
};

/** HomeFeed/default: settings button (FeedBlock_Services) */
export const V1: Story = { args: settings };
/** HomeFeed/default: inside CircleButton_WithLabel (its Icon / Badge placeholders as captured) */
export const V2: Story = {
  args: {
    sizeId: 'l',
    backgroundColorId: 'neutral-0',
    borderColorId: 'neutral-3',
    icon: (
      <div>
        <Icon inIconId="connect-icon-orbit_text" inColorId="neutral-9" inSizeId="icon-display" />
      </div>
    ),
    badge: <div className="ubt-icon-button__badge" />,
  },
};
/** HouseholdCarousel/default: inside CircleButton_IconPrimary */
export const V3: Story = {
  args: {
    sizeId: 's',
    backgroundColorId: 'cyan-lightest',
    icon: (
      <div>
        <Icon inIconId="connect-icon-check" inColorId="cyan-darker" />
      </div>
    ),
    badge: <div className="ubt-icon-button__badge" />,
  },
};
/** HomeFeed/default: V1 with its whole content */
export const V4: Story = { args: settings };
/** Notes/default: the circle of EmptyList (border) */
export const V5: Story = {
  args: {
    sizeId: 's',
    borderColorId: 'primary',
    backgroundColorId: 'primary',
    icon: <Icon inIconId="connect-icon-bookmark" inColorId="neutral-0" inSizeId="icon-base" />,
  },
};
