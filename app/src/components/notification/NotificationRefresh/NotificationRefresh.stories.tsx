import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationRefresh } from './NotificationRefresh';

const meta = { title: 'Shared/UBTConnect/App_NotificationRefresh', component: NotificationRefresh } satisfies Meta<
  typeof NotificationRefresh
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryList/default (no markup) */
export const V1: Story = { args: { datetime: '2026-10-14T08:00:00' } };
