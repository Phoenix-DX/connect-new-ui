import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiResolutionImageLoader } from './MultiResolutionImageLoader';

/* Never captured (the pack has no DOM variant): story from the compiled view. */
const meta = {
  title: 'Shared/Connect2_LegacyShared/MultiResolutionImageLoader',
  component: MultiResolutionImageLoader,
} satisfies Meta<typeof MultiResolutionImageLoader>;
export default meta;
type Story = StoryObj<typeof meta>;

const IMAGE = `${import.meta.env.BASE_URL}mock-images/placeholder-landscape.svg`;

/** A milestone image in two resolutions with a skeleton while loading. */
export const TwoResolutions: Story = {
  args: {
    loading: <div className="skeleton-item" style={{ height: '200px' }} />,
    imagesToLoad: (
      <>
        <img alt="" src={`${IMAGE}?w=320`} />
        <img alt="" src={`${IMAGE}?w=1280`} />
      </>
    ),
  },
};
