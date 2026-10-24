import type { Meta, StoryObj } from '@storybook/react-vite';
import { SanitizedHtml } from './SanitizedHtml';

const meta = {
  title: 'Shared/ReactiveHtmlSanitizer/SanitizedHtml',
  component: SanitizedHtml,
} satisfies Meta<typeof SanitizedHtml>;
export default meta;
type Story = StoryObj<typeof meta>;

/** MessageDetail/default: the message body, HTML with a paragraph. */
export const V1: Story = { args: { id: 'b1-b4-$b3', value: '<p>Test Noti 56</p>' } };

/** Notifications/default: a notification text without markup. */
export const V2: Story = { args: { id: 'b14-l1-115_2-b2-l1-127_0-b2-$b6', value: 'Test Noti 56' } };
