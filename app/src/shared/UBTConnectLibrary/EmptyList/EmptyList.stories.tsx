import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { EmptyList } from './EmptyList';

const meta = { title: 'Shared/UBTConnectLibrary/EmptyList', component: EmptyList } satisfies Meta<typeof EmptyList>;
export default meta;
type Story = StoryObj<typeof meta>;

const notes = {
  iconId: 'connect-icon-bookmark',
  titlePlaceholder: (
    <CustomText
      inText="No Notes found"
      inTextOptions={{ Color: 'neutral-9', FontWeight: 'semi-bold', FontSize: 'base' }}
    />
  ),
  textPlaceholder: (
    <>
      <CustomText inText="We were unable to find any Notes to" inTextOptions={{ Color: 'neutral-10', FontSize: 's' }} />
      <CustomText inText="display." inTextOptions={{ Color: 'neutral-10', FontSize: 's' }} />
    </>
  ),
};

/** Notes/default: no notes (caller placeholders as captured) */
export const V1: Story = { args: notes };
/** Notes/default: V1 with its whole content */
export const V2: Story = { args: notes };
