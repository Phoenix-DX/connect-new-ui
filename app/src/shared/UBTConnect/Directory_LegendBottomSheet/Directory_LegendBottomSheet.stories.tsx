import type { Meta, StoryObj } from '@storybook/react-vite';
import { Directory_LegendBottomSheet } from './Directory_LegendBottomSheet';

const meta = {
  title: 'Shared/UBTConnect/Directory_LegendBottomSheet',
  component: Directory_LegendBottomSheet,
} satisfies Meta<typeof Directory_LegendBottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryDetails/default (pack: wrapper only): closed sheet (the screen passes ShowLocalities False). */
export const V1: Story = { args: { showLocalities: false } };
/** CountryDetails/default: closed sheet, Supper Meetings line (ShowLocalities False). */
export const V2: Story = { args: { showLocalities: false } };
/** CountryList/default: closed sheet, Localities line (no input: ShowLocalities default True). */
export const V3: Story = { args: {} };
