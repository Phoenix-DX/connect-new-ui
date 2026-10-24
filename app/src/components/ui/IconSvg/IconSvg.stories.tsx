import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Icons } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { IconSvg } from './IconSvg';

const meta = { title: 'Shared/UBTConnectLibrary/IconSVG', component: IconSvg } satisfies Meta<typeof IconSvg>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Services/default */
export const V1: Story = { args: { inIconId: UBT_Icons.SVG_HR100 } };
