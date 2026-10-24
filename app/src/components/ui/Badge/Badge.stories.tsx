import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Color } from '@/lib/ubtConnectLibrary/staticEntities';
import { Badge } from './Badge';

const meta = { title: 'Shared/UBTConnectLibrary/Badge', component: Badge } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the Updates badge of the bottom bar (App_IconBadge → IconBadge) */
export const V1: Story = { args: { number: '12', maxNumber: 9, color: UBT_Color.Red, isLight: false } };
/** Notifications/default: the screen's own badge (Size `xs`, Color `red-dark`, values written by the screen) */
export const V2: Story = { args: { number: '3', size: 'xs', color: 'red-dark' } };
