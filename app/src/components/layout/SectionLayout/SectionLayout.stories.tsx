import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionLayout } from './SectionLayout';

const meta = {
  title: 'Shared/UBTConnectLibrary/SubLayout_Section',
  component: SectionLayout,
} satisfies Meta<typeof SectionLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default: inside SubLayout_DirectoryDetailScreen_Section (no input given, empty title). */
export const V1: Story = {
  args: { id: 'b7-$b2', content: <div>Section content</div> },
};
