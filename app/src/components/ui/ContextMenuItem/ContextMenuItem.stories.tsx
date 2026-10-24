import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Icons } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ContextMenuItem } from './ContextMenuItem';

const meta = { title: 'Shared/UBTConnectLibrary/ContextMenu_Item', component: ContextMenuItem } satisfies Meta<
  typeof ContextMenuItem
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture (menus never opened): the Share option as ContextMenu passes it, markup from the compiled view. */
export const CompiledView: Story = { args: { inLabel: 'Share', inUBTIconsId: UBT_Icons.Share } };
