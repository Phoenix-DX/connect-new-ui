import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactPopup } from './ContactPopup';

const meta = {
  title: 'Shared/UBTConnect_Utils/ContactPopup',
  component: ContactPopup,
} satisfies Meta<typeof ContactPopup>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default: the popup is closed (ShowPopup False), the root is empty */
export const V1: Story = { args: { inContactPopupData: { ShowPopup: false } } };

/** Not captured (no capture opened the popup): call popup with a number, as the compiled view renders it.
    Fictional values of the directory cast (src/mocks/fictional/directory.ts): Julián Vitale's mobile, a 555 number. */
export const OpenCall: Story = {
  name: 'Open (not captured)',
  args: {
    inContactPopupData: {
      ShowPopup: true,
      ActionName: 'Call',
      Name: 'Julián Vitale',
      TitleTerminator: '?',
      DisplayContactNumber: '+54 291 555 0102',
    },
    inContactPopupButtons: [
      { Id: '1', UBT_IconId: 'connect-icon-call_fill', Label: 'Mobile' },
      { Id: '2', UBT_IconId: '', Label: 'Home' },
    ],
  },
};
