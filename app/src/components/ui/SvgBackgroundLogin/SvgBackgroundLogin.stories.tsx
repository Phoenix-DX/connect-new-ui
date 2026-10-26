import type { Meta, StoryObj } from '@storybook/react-vite';
import { SvgBackgroundLogin } from './SvgBackgroundLogin';

const meta = {
  title: 'Shared/UBTConnectLibrary/SVG_Background_LoginWrapper',
  component: SvgBackgroundLogin,
} satisfies Meta<typeof SvgBackgroundLogin>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: background of the lock container (Layout_LoginFlow) */
export const V1: Story = { args: { id: 'b3-b2-b1-$b2' } };
