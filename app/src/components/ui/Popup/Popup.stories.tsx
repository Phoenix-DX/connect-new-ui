import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popup } from './Popup';

const meta = { title: 'Shared/UBTConnectLibrary/Popup', component: Popup } satisfies Meta<typeof Popup>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (no capture opens a notes popup): the compiled view, open, with a top header. */
export const CompiledView: Story = {
  args: {
    isOpen: true,
    title: 'Photo update requested',
    inHasTopHeader: true,
    topHeader: <span>Top header</span>,
    content: <span>We will let you know when your new photo is ready.</span>,
    footer: <span>Thank you</span>,
  },
};
/** Not captured: closed (the root is empty). */
export const Closed: Story = { args: { isOpen: false, title: 'Photo update requested' } };
