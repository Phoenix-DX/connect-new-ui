import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShareSheetSectionTitle } from '@/components/share/ShareSheetSectionTitle';
import { ShareSheetSection } from './ShareSheetSection';

const meta = { title: 'Shared/UBTConnect_Utils/ShareSheet_Section', component: ShareSheetSection } satisfies Meta<
  typeof ShareSheetSection
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture (the share sheet was never opened): the "Shared To" section as ShareSheet passes it, markup from the
    compiled view; the content placeholder holds neutral caller markup. */
export const CompiledView: Story = {
  args: {
    inHideBorder: true,
    placeholderTitle: <ShareSheetSectionTitle inLabel="Shared To" />,
    placeholderContent: <div data-container="">Content</div>,
  },
};
