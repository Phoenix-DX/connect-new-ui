import type { Meta, StoryObj } from '@storybook/react-vite';
import { MOCK_SIGNED_PHOTO_URL } from '@/components/ui/ResultItemImage/mocks';
import { ResultItemMedia } from './ResultItemMedia';

/* Never captured (the pack has no DOM variant): stories from the compiled view. */
const meta = {
  title: 'Shared/Connect2_LegacyShared/NC_Result_Item__Image',
  component: ResultItemMedia,
} satisfies Meta<typeof ResultItemMedia>;
export default meta;
type Story = StoryObj<typeof meta>;

/** A round venue photo with title and description. */
export const RoundPhoto: Story = {
  args: {
    inIsRoundImage: true,
    inImageHeight: 48,
    inResultItemVisualWidth: 48,
    inSignedURL: MOCK_SIGNED_PHOTO_URL,
    titlePlaceholder: <span>Bahia Blanca Assembly Hall</span>,
    descriptionPlaceholder: <span>Bahia Blanca, Argentina</span>,
  },
};

/** Loading: skeletons for the image and the text column. */
export const Loading: Story = { args: { isLoading: true, inBorderRadius: 8 } };
