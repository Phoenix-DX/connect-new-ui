import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/test/PendingBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Skeleton } from '@/components/ui/Skeleton';
import { DirectoryDetailLayout } from './DirectoryDetailLayout';

const meta = {
  title: 'Shared/UBTConnect/SubLayout_DirectoryDetailScreen',
  component: DirectoryDetailLayout,
} satisfies Meta<typeof DirectoryDetailLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: card and actions in skeleton sections, the members block in the visible About tab. */
export const V1: Story = {
  args: {
    id: 'b2-DirectoryDetailScreenContent',
    placeholderDetailCard: <Skeleton>Detail card</Skeleton>,
    placeholderCallToAction: <Skeleton>Actions</Skeleton>,
    placeholderContent: (
      <div className="" data-container="">
        <PendingBlock name="Directory_Household_Blocks.HouseholdDetails_Members_Block" />
      </div>
    ),
  },
};

/** HouseholdDetails/loading: as V1, the About tab hidden. */
export const V2: Story = {
  args: {
    ...V1.args,
    placeholderContent: (
      <div className="hidden" data-container="">
        <PendingBlock name="Directory_Household_Blocks.HouseholdDetails_Members_Block" />
      </div>
    ),
  },
};

/** OneSchoolGlobalDetails/default: actions in a CustomContainer, content in a skeleton section. */
export const V3: Story = {
  args: {
    id: '$b3',
    placeholderDetailCard: <Skeleton>Detail card</Skeleton>,
    placeholderCallToAction: <CustomContainer>Actions</CustomContainer>,
    placeholderContent: <Skeleton>Content</Skeleton>,
  },
};

/** SupperMeeting_Carousel/default: the household list as content. */
export const V4: Story = {
  args: {
    ...V1.args,
    placeholderContent: <PendingBlock name="Directory_SupperMeetings.SupperMeeting_HouseholdList" />,
  },
};
