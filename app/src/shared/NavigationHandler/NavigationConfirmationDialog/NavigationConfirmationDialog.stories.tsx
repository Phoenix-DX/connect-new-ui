import type { Meta, StoryObj } from '@storybook/react-vite';
import { preventNavigation } from '../lib/actions';
import { NavigationConfirmationDialog } from './NavigationConfirmationDialog';

const meta = {
  title: 'Shared/NavigationHandler/NavigationConfirmationDialog',
  component: NavigationConfirmationDialog,
} satisfies Meta<typeof NavigationConfirmationDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

const simulateNavigation = () => {
  window.dispatchEvent(
    new CustomEvent('dx-before-navigation', { cancelable: true, detail: { replace: false, resume: () => undefined } }),
  );
};

/** Not captured (no capture opens it): the compiled view. The caller prevents every navigation, so the button that
    dispatches `dx-before-navigation` opens the dialog. */
export const CompiledView: Story = {
  args: {
    onNavigation: preventNavigation,
    dialogHeader: <span>Discard your changes?</span>,
    dialogBody: <span>Your note has not been saved yet.</span>,
    buttonLabelConfirm: 'Yes',
    buttonLabelDismiss: 'No',
  },
  render: (args) => (
    <>
      <button type="button" onClick={simulateNavigation}>
        Simulate navigation
      </button>
      <NavigationConfirmationDialog {...args} />
    </>
  ),
};

/** Not captured: closed (Root with the NavigationHandler only). */
export const Closed: Story = { args: { id: '$b1' } };
