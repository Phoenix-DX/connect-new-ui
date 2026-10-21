import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomContainer } from '../CustomContainer';
import { FixedFooter } from './FixedFooter';

const meta = { title: 'Shared/UBTConnectLibrary/FixedFooter', component: FixedFooter } satisfies Meta<
  typeof FixedFooter
>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailMember/default: footer without bottom bar (the CustomContainer content is the caller's, not in the
    pack variant) */
export const V1: Story = {
  args: {
    expectedFooterHeight: 'calc(2 * var(--space-base) + var(--ubt-button-height-m))',
    contentContainerId: 'b2-Div_Content',
    children: <CustomContainer />,
  },
};
