import type { Meta, StoryObj } from '@storybook/react-vite';
import { App_NotificationRefresh } from './App_NotificationRefresh';

const meta = { title: 'Shared/UBTConnect/App_NotificationRefresh', component: App_NotificationRefresh } satisfies Meta<
  typeof App_NotificationRefresh
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CountryList/default (no markup) */
export const V1: Story = { args: { datetime: '2026-10-14T08:00:00' } };
