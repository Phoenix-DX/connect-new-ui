import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { SubLayout_Browse_Section } from './SubLayout_Browse_Section';

const meta = {
  title: 'Shared/UBTConnect/SubLayout_Browse_Section',
  component: SubLayout_Browse_Section,
} satisfies Meta<typeof SubLayout_Browse_Section>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BrowseDirectory/default: search row on top; the map and the list below. */
export const V1: Story = {
  args: {
    id: '$b2',
    placeholderTopSection: <CustomContainer>Search</CustomContainer>,
    placeholderBottomSection: (
      <>
        <PendingBlock name="Leaflet.LeafletMap" />
        <CustomContainer>List</CustomContainer>
      </>
    ),
  },
};

/** BrowseDirectory/loading: the map is still a skeleton section. */
export const V2: Story = {
  args: {
    id: '$b2',
    placeholderTopSection: <CustomContainer>Search</CustomContainer>,
    placeholderBottomSection: (
      <>
        <SkeletonSection inIsLoading />
        <CustomContainer>List</CustomContainer>
      </>
    ),
  },
};
