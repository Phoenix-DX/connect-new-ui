import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { OrbitSkeleton } from './OrbitSkeleton';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Skeleton_Loading',
  component: OrbitSkeleton,
} satisfies Meta<typeof OrbitSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/loading (also offline): EventDetail skeleton, four large rows. */
export const V1: Story = { args: { id: 'b1-$b14', inSkeletonLoadingId: OrbitSkeletonLoading.EventDetail } };

/** HelpersDetail/loading (also offline): MilestoneDetailHost skeleton. */
export const V2: Story = { args: { id: 'b1-$b8', inSkeletonLoadingId: OrbitSkeletonLoading.MilestoneDetailHost } };

/** OrbitAdminLanding/loading (also OrbitLanding/loading, offline): OrbitLanding skeleton, six large rows. */
export const V3: Story = { args: { id: 'b1-$b5', inSkeletonLoadingId: OrbitSkeletonLoading.OrbitLanding } };

/* Not captured: the other skeleton ids, built from the compiled view. */
export const SingleItem: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.SingleItem } };
export const AdminEventDetails: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.AdminEventDetails } };
export const TransportDetail: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.TransportDetail } };
export const ViewDocument: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.ViewDocument } };
export const HostSurveyHelpers: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.HostSurveyHelpers } };
export const MilestoneDetailGuest: Story = {
  args: { inSkeletonLoadingId: OrbitSkeletonLoading.MilestoneDetailGuest },
};
export const MemberQRCode: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.MemberQRCode } };
export const HostSurvey: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.HostSurvey } };
export const MilestoneWrapper: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.MilestoneWrapper } };
export const EventBooklet: Story = { args: { inSkeletonLoadingId: OrbitSkeletonLoading.EventBooklet } };
