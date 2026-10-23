import type { Meta, StoryObj } from '@storybook/react-vite';
import { DirectoryLegendSheet } from './DirectoryLegendSheet';

const meta = {
  title: 'Shared/UBTConnect/Directory_LegendBottomSheet',
  component: DirectoryLegendSheet,
} satisfies Meta<typeof DirectoryLegendSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryDetails/default (pack: wrapper only): closed sheet (the screen passes ShowLocalities False). */
export const V1: Story = { args: { showLocalities: false } };
/** CountryDetails/default: closed sheet, Supper Meetings line (ShowLocalities False). */
export const V2: Story = { args: { showLocalities: false } };
/** CountryList/default: closed sheet, Localities line (no input: ShowLocalities default True). */
export const V3: Story = { args: {} };
