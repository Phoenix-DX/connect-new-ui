import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_Icons } from '../lib/staticEntities';
import { IconSVG } from './IconSVG';

const meta = { title: 'Shared/UBTConnectLibrary/IconSVG', component: IconSVG } satisfies Meta<typeof IconSVG>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Services/default */
export const V1: Story = { args: { inIconId: UBT_Icons.SVG_HR100 } };
