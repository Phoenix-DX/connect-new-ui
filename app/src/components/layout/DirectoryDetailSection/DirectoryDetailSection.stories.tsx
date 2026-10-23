import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { DirectoryDetailSection } from './DirectoryDetailSection';

const meta = {
  title: 'Shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section',
  component: DirectoryDetailSection,
} satisfies Meta<typeof DirectoryDetailSection>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default: no title, default paddings, the contact form section (caller markup, abridged). */
export const V1: Story = {
  args: {
    id: '$b7',
    children: (
      <CustomContainer extendedClasses="font-semi-bold font-size-s margin-bottom-s">
        <span data-expression="">How can we help you?</span>
      </CustomContainer>
    ),
  },
};
