import type { Meta, StoryObj } from '@storybook/react-vite';
import { MOCK_SIGNED_PHOTO_URL } from '@/shared/Connect2_LegacyShared/Result_Item_Image/mocks';
import { NC_Result_Item__Image } from './NC_Result_Item__Image';

/* Never captured (the pack has no DOM variant): stories from the compiled view. */
const meta = {
  title: 'Shared/Connect2_LegacyShared/NC_Result_Item__Image',
  component: NC_Result_Item__Image,
} satisfies Meta<typeof NC_Result_Item__Image>;
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
