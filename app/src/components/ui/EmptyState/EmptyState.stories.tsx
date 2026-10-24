import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomText } from '@/components/ui/CustomText';
import { EmptyState } from './EmptyState';

const meta = { title: 'Shared/UBTConnectLibrary/EmptyList', component: EmptyState } satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

const notes = {
  iconId: 'connect-icon-bookmark',
  title: (
    <CustomText
      inText="No Notes found"
      inTextOptions={{ Color: 'neutral-9', FontWeight: 'semi-bold', FontSize: 'base' }}
    />
  ),
  text: (
    <>
      <CustomText inText="We were unable to find any Notes to" inTextOptions={{ Color: 'neutral-10', FontSize: 's' }} />
      <CustomText inText="display." inTextOptions={{ Color: 'neutral-10', FontSize: 's' }} />
    </>
  ),
};

/** Notes/default: no notes (the caller's title and text as captured) */
export const V1: Story = { args: notes };
/** Notes/default: V1 with its whole content */
export const V2: Story = { args: notes };
