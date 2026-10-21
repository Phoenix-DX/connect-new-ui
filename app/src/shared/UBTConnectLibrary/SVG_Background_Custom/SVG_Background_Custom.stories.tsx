import type { Meta, StoryObj } from '@storybook/react-vite';
import { SVG_Background_Custom } from './SVG_Background_Custom';

const meta = {
  title: 'Shared/UBTConnectLibrary/SVG_Background_Custom',
  component: SVG_Background_Custom,
} satisfies Meta<typeof SVG_Background_Custom>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: inside SVG_Background_LoginWrapper (90 %, curvature 105) of the lock container */
export const V1: Story = { args: { id: 'b3-b2-b1-b2-$b1', inHeightPercentage: 90, inCurvaturePercentage: 105 } };
/** PINUnlock/default: same inputs, the InlineSVG content compared too (path M0,0 H100 V160 Q50,181 0,160 Z) */
export const V2: Story = { args: { id: 'b1-b1-b2-$b1', inHeightPercentage: 90, inCurvaturePercentage: 105 } };
