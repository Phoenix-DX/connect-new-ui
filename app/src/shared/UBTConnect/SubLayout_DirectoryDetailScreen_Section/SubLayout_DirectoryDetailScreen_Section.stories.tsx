import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { SubLayout_DirectoryDetailScreen_Section } from './SubLayout_DirectoryDetailScreen_Section';

const meta = {
  title: 'Shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section',
  component: SubLayout_DirectoryDetailScreen_Section,
} satisfies Meta<typeof SubLayout_DirectoryDetailScreen_Section>;
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
