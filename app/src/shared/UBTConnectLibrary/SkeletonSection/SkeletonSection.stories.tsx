import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '../../test/PendingBlock';
import { SkeletonSection } from './SkeletonSection';

const meta = {
  title: 'Shared/UBTConnectLibrary/SkeletonSection',
  component: SkeletonSection,
} satisfies Meta<typeof SkeletonSection>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Caller content of the captures: a list of Statistics_ListItem rows. */
const statisticsRows = (count: number) => (
  <div className="list list-group list--gap-s OSFillParent" data-list="" style={{ position: 'relative' }}>
    {Array.from({ length: count }, (_, row) => (
      <div data-container="" key={row}>
        <PendingBlock name="ConnectCorePatterns.Statistics_ListItem" />
      </div>
    ))}
  </div>
);

/** BookmarksByGroup/default */
export const V1: Story = {
  args: {
    children: (
      <a data-link="" data-original-href="#">
        <PendingBlock name="OutSystemsUIOverrides.IconBadge" />
      </a>
    ),
  },
};
/** BrowseCountries/default */
export const V2: Story = { args: { children: statisticsRows(17) } };
/** BrowseCountries/loading */
export const V3: Story = { args: { inIsLoading: true, children: statisticsRows(10) } };
/** BrowseDirectory/default */
export const V4: Story = { args: { children: statisticsRows(3) } };
