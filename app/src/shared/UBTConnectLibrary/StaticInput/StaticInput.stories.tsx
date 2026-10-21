import type { Meta, StoryObj } from '@storybook/react-vite';
import { StaticInput } from './StaticInput';

const meta = { title: 'Shared/UBTConnectLibrary/StaticInput', component: StaticInput } satisfies Meta<
  typeof StaticInput
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** CommunityBusinessDetails_CoomingSoon/default: default prompt */
export const V1: Story = { args: {} };
/** CommunityBusinessDetails_CoomingSoon/default: V1 with its whole content */
export const V2: Story = { args: {} };
/** CountryList/default: own prompt */
export const V3: Story = { args: { inPrompt: 'Search any member or location' } };
