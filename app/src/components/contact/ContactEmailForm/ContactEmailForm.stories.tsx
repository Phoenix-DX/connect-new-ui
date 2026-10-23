import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { ContactEmailForm } from './ContactEmailForm';

const meta = {
  title: 'Shared/UBTConnect/ContactByEmailForm',
  component: ContactEmailForm,
} satisfies Meta<typeof ContactEmailForm>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailMember/default: subject input and message, nothing typed; the contact card is the screen's markup
    (a CustomContainer, nested in the capture). */
export const V1: Story = {
  args: {
    id: '$b2',
    inSubjectPlaceholder: 'Add a subject',
    inMessagePlaceholder: 'Add a message',
    children: <PendingBlock name="BasePatterns.CustomContainer" />,
  },
};

/** ContactByEmailOneSchoolGlobal/default: the subject as a bounded DynamicTextArea (compared on its form only). */
export const OneSchoolGlobal: Story = {
  args: {
    inSubjectPlaceholder: 'Add a subject',
    inMessagePlaceholder: 'Add a message',
    inSubject: '',
    inUseDynamicTextAreaSubject: true,
    children: <PendingBlock name="BasePatterns.CustomContainer" />,
  },
};
