import type { Meta, StoryObj } from '@storybook/react-vite';
import { SVG_Background_LoginWrapper } from './SVG_Background_LoginWrapper';

const meta = {
  title: 'Shared/UBTConnectLibrary/SVG_Background_LoginWrapper',
  component: SVG_Background_LoginWrapper,
} satisfies Meta<typeof SVG_Background_LoginWrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: background of the lock container (Layout_LoginFlow) */
export const V1: Story = { args: { id: 'b3-b2-b1-$b2' } };
