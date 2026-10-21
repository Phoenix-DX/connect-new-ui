import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_FontSize } from '../lib/staticEntities';
import { ShareSheet_SectionTitle } from './ShareSheet_SectionTitle';

const meta = {
  title: 'Shared/UBTConnect_Utils/ShareSheet_SectionTitle',
  component: ShareSheet_SectionTitle,
} satisfies Meta<typeof ShareSheet_SectionTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture: "Shared To" (ShareSheet external share section, default font size Small). */
export const CompiledView: Story = { args: { inLabel: 'Shared To' } };
/** No capture: "Recently Shared" (ShareSheet first step, DoubleExtraSmall: bottom padding XS). */
export const DoubleExtraSmall: Story = {
  args: { inLabel: 'Recently Shared', inFontSize: UBT_FontSize.DoubleExtraSmall },
};
