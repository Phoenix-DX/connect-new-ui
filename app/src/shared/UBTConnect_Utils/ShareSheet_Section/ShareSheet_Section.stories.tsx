import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShareSheet_SectionTitle } from '@/shared/UBTConnect_Utils/ShareSheet_SectionTitle';
import { ShareSheet_Section } from './ShareSheet_Section';

const meta = { title: 'Shared/UBTConnect_Utils/ShareSheet_Section', component: ShareSheet_Section } satisfies Meta<
  typeof ShareSheet_Section
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture (the share sheet was never opened): the "Shared To" section as ShareSheet passes it, markup from the
    compiled view; the content placeholder holds neutral caller markup. */
export const CompiledView: Story = {
  args: {
    inHideBorder: true,
    placeholderTitle: <ShareSheet_SectionTitle inLabel="Shared To" />,
    placeholderContent: <div data-container="">Content</div>,
  },
};
