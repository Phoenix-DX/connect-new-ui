import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputCounter } from './InputCounter';

const meta = { title: 'Shared/UBTConnectLibrary/InputCounter', component: InputCounter } satisfies Meta<
  typeof InputCounter
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailMember/default: the counter of the Subject input (pack: wrapper only) */
export const V1: Story = { args: { inInputId: 'Input_Subject', inInitialLength: 0 } };
/** ContactByEmailMember/default: the counter of the Message text area, whole (the count is masked) */
export const V2: Story = { args: { inInputId: 'TextArea_Message', inInitialLength: 0 } };
