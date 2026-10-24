import type { Meta, StoryObj } from '@storybook/react-vite';
import { preventNavigation } from '@/lib/navigationEvent';
import { NavigationDialog } from './NavigationDialog';

const meta = {
  title: 'Shared/UBTConnect/Dialog_Navigation',
  component: NavigationDialog,
} satisfies Meta<typeof NavigationDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

const simulateNavigation = () => {
  window.dispatchEvent(
    new CustomEvent('dx-before-navigation', { cancelable: true, detail: { replace: false, resume: () => undefined } }),
  );
};

const withNavigationButton: Story['render'] = (args) => (
  <>
    <button type="button" onClick={simulateNavigation}>
      Simulate navigation
    </button>
    <NavigationDialog {...args} />
  </>
);

/** Not captured: Dialog_Navigation (variant connect) with the texts of ContactUsDetails. The caller prevents every
    navigation; the button dispatches `dx-before-navigation`. */
export const CompiledView: Story = {
  args: {
    id: '$b23',
    variant: 'connect',
    onNavigation: preventNavigation,
    header: 'Delete message?',
    body: 'Are you sure you want to delete this message?',
  },
  render: withNavigationButton,
};

/** Not captured: Dialog_Navigation (variant connect), closed. */
export const Closed: Story = { args: { id: '$b23', variant: 'connect' } };

/** Not captured: NavigationConfirmationDialog alone (variant plain), the compiled view. The caller prevents every
    navigation, so the button that dispatches `dx-before-navigation` opens the dialog. */
export const PlainCompiledView: Story = {
  args: {
    onNavigation: preventNavigation,
    header: <span>Discard your changes?</span>,
    body: <span>Your note has not been saved yet.</span>,
    confirmLabel: 'Yes',
    dismissLabel: 'No',
  },
  render: withNavigationButton,
};

/** Not captured: NavigationConfirmationDialog alone, closed (Root with the NavigationHandler only). */
export const PlainClosed: Story = { args: { id: '$b1' } };
