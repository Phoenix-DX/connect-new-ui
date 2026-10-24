import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionSeparator } from './SectionSeparator';

const meta = { title: 'Shared/UBTConnect/SectionSeparator', component: SectionSeparator } satisfies Meta<
  typeof SectionSeparator
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default: the separator (pack: wrapper only) */
export const V1: Story = {};
/** ContactUsDetails/default: whole, with its CustomContainer */
export const V2: Story = {};
