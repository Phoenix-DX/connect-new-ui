import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea_WithCounter } from './TextArea_WithCounter';

const meta = { title: 'Shared/UBTConnectLibrary/TextArea_WithCounter', component: TextArea_WithCounter } satisfies Meta<
  typeof TextArea_WithCounter
>;
export default meta;
type Story = StoryObj<typeof meta>;

const CONTACT_US_PROMPT =
  'To help us assist you better, please provide your query/ issue regarding Set up a UBT One account.';

/** ContactByEmailMember/default: the Message text area (caller markup as captured) */
export const V1: Story = {
  args: {
    inInitialLength: 0,
    children: (
      <>
        <label className="OSFillParent" data-label="">
          <span data-expression="">Message</span>
        </label>
        <span>
          <textarea
            className="form-control OSFillParent"
            data-textarea=""
            id="TextArea_Message_V1"
            maxLength={1000}
            placeholder="Add a message"
          />
        </span>
      </>
    ),
  },
};
/** ContactUsDetails/default: mandatory Message text area (pack) */
export const V2: Story = {
  args: {
    inInitialLength: 0,
    children: (
      <>
        <label className="mandatory OSFillParent" data-label="">
          Message
        </label>
        <span>
          <textarea
            className="form-control OSFillParent"
            data-textarea=""
            id="TextArea_Message_V2"
            maxLength={1000}
            placeholder={CONTACT_US_PROMPT}
          />
        </span>
      </>
    ),
  },
};
/** ContactUsDetails/default: V2 whole, with the InputCounter content */
export const V3: Story = { args: { ...V2.args, children: V2.args?.children } };
