import type { Meta, StoryObj } from '@storybook/react-vite';
import { SeeMoreSection } from './SeeMoreSection';

const meta = {
  title: 'Shared/UBTConnectLibrary/SeeMoreSection',
  component: SeeMoreSection,
} satisfies Meta<typeof SeeMoreSection>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack): closed section ("See more"), content nested. */
export const V1: Story = { args: { startExpanded: false, children: <span>Locality details</span> } };
/** HouseholdCarousel/default: same, full markup (content placeholder nested). */
export const V2: Story = { args: V1.args };
