import type { Meta, StoryObj } from '@storybook/react-vite';
import { CarouselTag } from '@/components/directory/CarouselTag';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CarouselSupperMeetingDetails, type CarouselSupperMeetingDetailsSlot } from './CarouselSupperMeetingDetails';

/** A stand-in for the supper meeting details container that the page renders in the slot: the
    SupperMeeting_DetailsBlock wrapper with the supper meeting id and the carousel tag placeholder. */
function SupperMeetingDetailsStandIn({ id, subdivisionId, carouselTag }: CarouselSupperMeetingDetailsSlot) {
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_DetailsBlock" id={id}>
      <span>subdivision {subdivisionId}</span>
      {carouselTag}
    </OSBlock>
  );
}

const meta = {
  title: 'Shared/UBTConnect/EntitiesCarouse_lSupperMeetingDetails',
  component: CarouselSupperMeetingDetails,
} satisfies Meta<typeof CarouselSupperMeetingDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack variant 1): the first of 3 slides, EntitiesCarousel_Element's CarouselTag in
    the placeholder. */
export const V1: Story = {
  args: {
    id: 'b3-l1-1164_0-b2-$b1',
    inSubdivisionId: '2820',
    children: <CarouselTag id="b3-l1-1164_0-b2-$b2" inIndexCurrentItem={0} inTotalItems={3} />,
    renderSupperMeetingDetails: (slot) => <SupperMeetingDetailsStandIn {...slot} />,
  },
};
