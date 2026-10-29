import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/lib/os-assets';
import { MultiResolutionImageLoader } from './MultiResolutionImageLoader';

const meta = {
  title: 'Shared/Connect2_LegacyShared/MultiResolutionImageLoader',
  component: MultiResolutionImageLoader,
} satisfies Meta<typeof MultiResolutionImageLoader>;
export default meta;
type Story = StoryObj<typeof meta>;

/* No capture shows the block (migration/blocks/Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.md: 0
   instances). The CSS shows the loading state only under `.backwards-compatibility` (ConnectMobileCommonTheme.css
   :4070-4083), as in OrbitLayout. */
const USER_IMAGE = osImage('img/Connect2_LegacyShared.User.png');

/** Not captured: Card_MemberInformation_Survey while its photo has no URL yet (L3): the User image shows, the root
    stays `-loading`. */
export const Loading: Story = {
  args: {
    id: 'b1-b3-$b1',
    loading: <img className="member-info-img" data-image="" src={USER_IMAGE} />,
    imagesToLoad: <img className="member-info-img" data-error-placeholder-src={USER_IMAGE} data-image="" />,
  },
  render: (args) => (
    <div className="backwards-compatibility">
      <div className="member-info-img-cont orbit-host-survey-member-info-img-cont" data-container="">
        <MultiResolutionImageLoader {...args} />
      </div>
    </div>
  ),
};

/** Not captured: the same card when the photo loads (here the User_rectangle image as the photo): the root turns
    `-loaded`, the photo gets `multi-resolution-image-loader-loaded` and the Loading slot hides. */
export const Loaded: Story = {
  args: {
    ...Loading.args,
    id: 'b1-b4-$b1',
    imagesToLoad: (
      <img
        className="member-info-img"
        data-error-placeholder-src={USER_IMAGE}
        data-image=""
        src={osImage('img/Connect2_LegacyShared.User_rectangle.png')}
      />
    ),
  },
  render: Loading.render,
};
