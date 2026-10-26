import type { Meta, StoryObj } from '@storybook/react-vite';
import { MOCK_SIGNED_PHOTO_URL } from '@/components/ui/ResultItemImage/mocks';
import { CardItemVisual } from './CardItemVisual';

/* Never captured (the pack has no DOM variant): stories from the compiled view. */
const meta = {
  title: 'Shared/Connect2_LegacyShared/NC_Card_Item_Visual',
  component: CardItemVisual,
} satisfies Meta<typeof CardItemVisual>;
export default meta;
type Story = StoryObj<typeof meta>;

const pill = <span className="tag border-radius-rounded background-primary">Upcoming</span>;

/** Signed event photo with a floating pill at the top left. */
export const SignedPhoto: Story = {
  args: {
    inSignedURL: MOCK_SIGNED_PHOTO_URL,
    inFloatingPillPosition: 'top-left',
    inImageCoverPositionX: 'center',
    inImageCoverPositionY: 'top',
    floatingPill: pill,
  },
};

/** No photo: the division default image. */
export const DefaultImage: Story = { args: { inImageHeight: 160 } };
