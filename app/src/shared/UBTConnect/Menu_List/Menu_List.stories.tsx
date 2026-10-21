import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu_List } from './Menu_List';

const meta = {
  title: 'Shared/UBTConnect/Menu_List',
  component: Menu_List,
} satisfies Meta<typeof Menu_List>;
export default meta;
type Story = StoryObj<typeof meta>;

const userAccount = {
  SectionTitle: 'User Account Management',
  MenuOptions: [
    { Id: 'setup', IconId: 'connect-icon-ubt', Label: 'Set up a UBT One account' },
    { Id: 'login', IconId: 'connect-icon-person_add', Label: 'Log in with UBT One' },
    { Id: 'subscriptions', IconId: 'connect-icon-shopping_basket', Label: 'Subscriptions and Payments' },
    { Id: 'household', IconId: 'connect-icon-account_circle', Label: 'Household Details & Profile' },
  ],
};
const pin = { HasSeparator: false, MenuOptions: [{ Id: 'pin', IconId: 'connect-icon-password', Label: 'Change PIN' }] };

/** ContactUsMenu/default: a titled section after a separator (pack variant 1, nested content not compared). */
export const V1: Story = { args: { id: 'l1-37_0-$b3', inMenuSection: userAccount } };

/** PINBiometricsMenu/default: one row, no separator (pack variant 2). */
export const V2: Story = { args: { id: '$b2', inMenuSection: pin } };

/** ContactUsMenu/default, full DOM of the first section: separator, title and four rows with the chevron. */
export const V3: Story = { args: { id: 'l1-37_0-$b3', inMenuSection: userAccount } };

/** PINBiometricsMenu/default, full DOM: the Change PIN row. */
export const V4: Story = { args: { id: '$b2', inMenuSection: pin } };

/** Not captured: right text with icon, a switch, a description and a loading row (compiled view only). */
export const NotCaptured_RowStates: Story = {
  args: {
    inMenuSection: {
      SectionTitle: 'Settings',
      MenuOptions: [
        { Id: 'a', IconId: 'connect-icon-password', Label: 'Biometrics', useSwitch: true, SwitchValue: true },
        { Id: 'b', IconId: 'connect-icon-ubt', Label: 'Language', IconRightText: 'English' },
        { Id: 'c', IconId: 'connect-icon-help', Label: 'Help', LabelDescription: 'Questions and answers' },
        { Id: 'd', IconId: 'connect-icon-home', Label: 'Loading', IsLoading: true },
      ],
    },
  },
};
