import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotCaptured } from './NotCaptured';

const meta = { title: 'Review/NotCaptured', component: NotCaptured } satisfies Meta<typeof NotCaptured>;
export default meta;

export const Default: StoryObj<typeof meta> = { args: { name: 'example block (state not captured)' } };
