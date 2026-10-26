import type { Meta, StoryObj } from '@storybook/react-vite';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import { ShareableObject } from './ShareableObject';

const meta = {
  title: 'Shared/UBTConnect_Utils/ShareableObject_Generic',
  component: ShareableObject,
} satisfies Meta<typeof ShareableObject>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture (the share sheet was never opened): neutral mock values; Id "0" sends no signed-image request. */
export const CompiledView: Story = {
  args: {
    inShareableObject: {
      Id: '0',
      ConnectEntityTypeId: Connect_Entity.Household,
      SignedURL: '',
      Title: 'Hargreaves Household',
      Subtitle: 'Thomas & Sophie Hargreaves',
      Location: 'Geelong, Australia',
    },
  },
};
/** No capture: title only (no subtitle, no location). */
export const TitleOnly: Story = {
  args: {
    inShareableObject: { Id: '0', ConnectEntityTypeId: Connect_Entity.Household, Title: 'Hargreaves Household' },
  },
};
