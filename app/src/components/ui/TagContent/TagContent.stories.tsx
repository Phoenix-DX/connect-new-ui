import type { Meta, StoryObj } from '@storybook/react-vite';
import { TagContent } from './TagContent';

const meta = { title: 'Shared/UBTConnectLibrary/TagContent', component: TagContent } satisfies Meta<typeof TagContent>;
export default meta;
type Story = StoryObj<typeof meta>;

const birth = { text: 'Birth', backgroundColorId: 'blue-non-standard', textColorId: 'neutral-0' };

/** HomeFeed/default: update type tag */
export const V1: Story = { args: birth };
/** HomeFeed/default: V1 with its whole content */
export const V2: Story = { args: birth };
/** HouseholdCarousel/default: carousel counter, no text colour */
export const V3: Story = { args: { text: '1 / 23', backgroundColorId: 'neutral-0' } };
/** Updates_SingleList/default: status tag */
export const V4: Story = { args: { text: 'Taken', backgroundColorId: 'neutral-3', textColorId: 'neutral-7' } };
