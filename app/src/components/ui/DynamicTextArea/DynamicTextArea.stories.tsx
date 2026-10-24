import type { Meta, StoryObj } from '@storybook/react-vite';
import { DynamicTextArea } from './DynamicTextArea';

const meta = {
  title: 'Shared/UBTConnectLibrary/DynamicTextArea',
  component: DynamicTextArea,
} satisfies Meta<typeof DynamicTextArea>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailOneSchoolGlobal/default: the bounded subject text area of ContactByEmailForm, empty. */
export const V1: Story = {
  args: {
    id: 'b2-$b4',
    inIsBounded: true,
    inText: '',
    children: (
      <span>
        <textarea className="form-control OSFillParent" data-textarea="" maxLength={100} rows={1} />
      </span>
    ),
  },
};
