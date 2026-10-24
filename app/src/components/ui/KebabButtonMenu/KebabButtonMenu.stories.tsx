import type { Meta, StoryObj } from '@storybook/react-vite';
import { KebabButtonMenu } from './KebabButtonMenu';

const meta = {
  title: 'Shared/UBTConnectLibrary/KebabButtonMenu',
  component: KebabButtonMenu,
} satisfies Meta<typeof KebabButtonMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Profile/default (pack: wrapper only): the captured button is the disabled one (neutral-3 circle, neutral-7 icon). */
export const V1: Story = { args: { isEnable: false } };
/** Profile/default: full markup, menu closed. */
export const V2: Story = { args: V1.args };
