import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Color, UBT_FontSize, UBT_FontWeight } from '../lib/staticEntities';
import { ComingSoon } from './ComingSoon';

const meta = { title: 'Shared/UBTConnectLibrary/ComingSoon', component: ComingSoon } satisfies Meta<typeof ComingSoon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** OneSchoolGlobalDetails/default (pack: wrapper only); text options as captured (neutral-7 semi-bold base). */
export const V1: Story = {
  args: {
    inTextOptions: { Color: UBT_Color.Neutral7, FontWeight: UBT_FontWeight.SemiBold, FontSize: UBT_FontSize.Base },
  },
};
/** OneSchoolGlobalDetails/default: full markup. */
export const V2: Story = { args: V1.args };
