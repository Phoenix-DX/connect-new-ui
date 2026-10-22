import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Icons } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ContextMenu_Item } from './ContextMenu_Item';

const meta = { title: 'Shared/UBTConnectLibrary/ContextMenu_Item', component: ContextMenu_Item } satisfies Meta<
  typeof ContextMenu_Item
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture (menus never opened): the Share option as ContextMenu passes it, markup from the compiled view. */
export const CompiledView: Story = { args: { inLabel: 'Share', inUBTIconsId: UBT_Icons.Share } };
