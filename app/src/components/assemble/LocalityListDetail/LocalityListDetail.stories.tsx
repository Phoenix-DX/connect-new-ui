import type { Meta, StoryObj } from '@storybook/react-vite';
import { LocalityListDetail } from './LocalityListDetail';
import { COUNTRIES } from './mocks';

const meta = {
  title: 'Shared/Connect2_LegacyShared/LocalityListDetail',
  component: LocalityListDetail,
} satisfies Meta<typeof LocalityListDetail>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/default: the 17 countries of the Assemble country list, header hidden. */
export const V1: Story = { args: { id: 'b5-$b2', countryDetailList: COUNTRIES, hideHeader: true } };
