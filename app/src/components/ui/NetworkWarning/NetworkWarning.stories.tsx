import type { Meta, StoryObj } from '@storybook/react-vite';
import { NetworkWarning } from './NetworkWarning';

const meta = { title: 'Shared/Connect2_LegacyShared/NetworkWarning', component: NetworkWarning } satisfies Meta<
  typeof NetworkWarning
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** LDM_MyEvents_V2/offline: the card shown when the timeline fetch failed (no inputs). Same DOM in MyBookmarks/offline. */
export const V1: Story = { args: { id: 'b1-b9-$b5' } };
