import type { Meta, StoryObj } from '@storybook/react-vite';
import { SharePopup } from './SharePopup';

const meta = { title: 'Shared/UBTConnect_Utils/SharePopup', component: SharePopup } satisfies Meta<typeof SharePopup>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: closed share popup (ContactPopup with ShowPopup False, empty) */
export const V1: Story = { args: { inContactPopupData: { ShowPopup: false } } };

/** Not captured (no capture opened it): the open share popup in the browser ("Share to Connect" only). Neutral values. */
export const Open: Story = {
  name: 'Open (not captured)',
  args: { inContactPopupData: { ShowPopup: true, Name: 'Eleanor Whitfield', EntityTypeId: 'Member' } },
};
