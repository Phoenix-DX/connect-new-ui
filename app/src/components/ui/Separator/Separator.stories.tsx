import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './Separator';

const meta = { title: 'Shared/osui/Separator', component: Separator } satisfies Meta<typeof Separator>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (survey only): horizontal separator with the defaults, from the compiled view. */
export const Default: Story = {};
/** Not captured: vertical separator, from the compiled view. */
export const Vertical: Story = { args: { isVertical: true } };
