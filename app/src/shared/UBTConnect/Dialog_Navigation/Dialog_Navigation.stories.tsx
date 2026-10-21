import type { Meta, StoryObj } from '@storybook/react-vite';
import { preventNavigation } from '../../NavigationHandler/lib/actions';
import { Dialog_Navigation } from './Dialog_Navigation';

const meta = {
  title: 'Shared/UBTConnect/Dialog_Navigation',
  component: Dialog_Navigation,
} satisfies Meta<typeof Dialog_Navigation>;
export default meta;
type Story = StoryObj<typeof meta>;

const simulateNavigation = () => {
  window.dispatchEvent(
    new CustomEvent('dx-before-navigation', { cancelable: true, detail: { replace: false, resume: () => undefined } }),
  );
};

/** Not captured: the compiled view with the texts of ContactUsDetails (UBTConnect.App_Menu_ContactUs.ContactUsDetails
    .mvc.js:1472-1520). The caller prevents every navigation; the button dispatches `dx-before-navigation`. */
export const CompiledView: Story = {
  args: {
    id: '$b23',
    onEventOnBackNavigation: preventNavigation,
    placeholderHeader: 'Delete message?',
    placeholderBody: 'Are you sure you want to delete this message?',
  },
  render: (args) => (
    <>
      <button type="button" onClick={simulateNavigation}>
        Simulate navigation
      </button>
      <Dialog_Navigation {...args} />
    </>
  ),
};

/** Not captured: closed. */
export const Closed: Story = { args: { id: '$b23' } };
