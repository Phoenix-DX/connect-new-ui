import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { HouseholdTimelinePhotoList } from './HouseholdTimelinePhotoList';

const meta = {
  title: 'Shared/UBTConnect/HouseholdDetails_TimelinePhoto_List',
  component: HouseholdTimelinePhotoList,
} satisfies Meta<typeof HouseholdTimelinePhotoList>;
export default meta;
type Story = StoryObj<typeof meta>;

const image = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
/** Not captured: compiled view with three neutral timeline photos, the last one current. */
export const CompiledView: Story = {
  args: {
    inHouseholdTimelineImages: [
      { Date: '2022-01-01 00:00:00', Label: '2022', SignedURL: image, IsCurrent: false },
      { Date: '2023-01-01 00:00:00', Label: '2023', SignedURL: image, IsCurrent: false },
      { Date: '2024-01-01 00:00:00', Label: '2024', SignedURL: image, IsCurrent: true },
    ],
  },
};
/** Not captured: live compiled view of 2026-11-05 (TL:215-251): no images, the Unavailable_Image box. */
export const Empty: Story = { args: { inHouseholdTimelineImages: [] } };
/** Not captured: rows while the caller's data action is still Fetching (` list-loading`). */
export const Fetching: Story = {
  args: { ...CompiledView.args, inHouseholdTimelineImagesDataFetchStatus: DataFetchStatus.Fetching },
};
