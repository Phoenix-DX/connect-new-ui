import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { SeeMoreSection } from '@/components/ui/SeeMoreSection';
import { ImageCardContent } from './ImageCardContent';

const meta = {
  title: 'Shared/UBTConnectLibrary/ImageCard__Content',
  component: ImageCardContent,
} satisfies Meta<typeof ImageCardContent>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Caller markup as captured (HouseholdCarousel: tags in the top section, address and "See more" below). Household
   names are masked: neutral mock values. */
const bottom = (
  <>
    <div className="householdAddress" data-container="">
      <CustomContainer>
        <span>Example Locality</span>
      </CustomContainer>
    </div>
    <div className="full-width padding-top-s" data-container="">
      <SeeMoreSection startExpanded={false}>
        <span>Details</span>
      </SeeMoreSection>
    </div>
  </>
);
const tags = (n: number) => (
  <>
    {Array.from({ length: n }, (_, i) => (
      <CustomContainer key={i}>
        <span>Tag</span>
      </CustomContainer>
    ))}
  </>
);

/** HouseholdCarousel/default: household card with subtitle. */
export const V1: Story = {
  args: {
    inTitle: 'Household Example',
    inSubtitle: 'Example',
    inShowSubtitle: true,
    placeholderTopSectionContent: tags(1),
    placeholderBottomSectionContent: bottom,
  },
};
/** HouseholdCarousel/default: no subtitle. */
export const V2: Story = { args: { ...V1.args, inShowSubtitle: false } };
/** HouseholdCarousel/loading: skeleton title "Example & Example", two top tags. */
export const V3: Story = {
  args: { ...V1.args, inTitle: 'Example & Example', placeholderTopSectionContent: tags(2) },
};
/** HouseholdDetails/loading: gallery title, two top tags, empty bottom section. */
export const V4: Story = {
  args: {
    inTitle: 'Household gallery',
    inShowSubtitle: false,
    placeholderTopSectionContent: tags(2),
  },
};
