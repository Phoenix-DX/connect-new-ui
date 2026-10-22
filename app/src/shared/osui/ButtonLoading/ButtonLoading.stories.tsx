import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { ButtonLoading } from './ButtonLoading';

const meta = { title: 'Shared/osui/ButtonLoading', component: ButtonLoading } satisfies Meta<typeof ButtonLoading>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Caller markup of Login (UBTConnect.App_Common.Login.mvc.js): an OutSystems button with the spinner container. */
const loginButton = (className: string, label: string) => (
  <button className={className} data-button="" type="button">
    <div className="osui-btn-loading__spinner-animation" data-container="" />
    {label}
  </button>
);

/** ContactByEmailMember/default: CW_Common.Button "Send", label hidden while loading (pack variant) */
export const V1: Story = { args: { children: <Button buttonText="Send" isDisabled /> } };
/** Login/default: "Login with UBT One" */
export const V2: Story = {
  args: {
    extendedClass: 'full-width',
    showLabelOnLoading: true,
    children: loginButton('btn btn-primary OSFillParent', 'Login with UBT One'),
  },
};
/** Login/default: "Forgot Password?" */
export const V3: Story = {
  args: {
    extendedClass: 'full-width',
    showLabelOnLoading: true,
    children: loginButton('btn OSFillParent', 'Forgot Password?'),
  },
};
/** ContactByEmailMember/default: as V1, the whole button (spinner aria-hidden) */
export const V4: Story = { args: { children: <Button buttonText="Send" isDisabled /> } };
