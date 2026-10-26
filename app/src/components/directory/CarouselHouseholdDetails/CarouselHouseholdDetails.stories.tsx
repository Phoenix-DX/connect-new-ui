import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { CarouselTag } from '@/components/directory/CarouselTag';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { VITALE } from '@/mocks/fictional/directory';
import { CarouselHouseholdDetails, type CarouselHouseholdDetailsSlot } from './CarouselHouseholdDetails';

/** A stand-in for the household details container that the page renders in the slot: the HouseholdDetails_Block
    wrapper with the carousel tag placeholder. After its first render it raises HouseholdDataFetched once, with the
    locality and the country of the fictional household, as the container does when GetHousehold answers. */
function HouseholdDetailsStandIn({ id, carouselTag, onHouseholdDataFetched }: CarouselHouseholdDetailsSlot) {
  const raise = useRef(onHouseholdDataFetched);
  useLayoutEffect(() => {
    raise.current = onHouseholdDataFetched;
  });
  useEffect(() => {
    const fetched = setTimeout(() => {
      raise.current(VITALE.localityName, VITALE.countryName);
    });
    return () => {
      clearTimeout(fetched);
    };
  }, []);
  return (
    <OSBlock name="Directory_Household.HouseholdDetails_Block" id={id}>
      {carouselTag}
    </OSBlock>
  );
}

const meta = {
  title: 'Shared/UBTConnect/EntitiesCarousel_HouseholdDetails',
  component: CarouselHouseholdDetails,
} satisfies Meta<typeof CarouselHouseholdDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack variant 1): the first of 23 slides, inside the render buffer of the active element
    (In_IsSkeletonOnly False), EntitiesCarousel_Element's CarouselTag in the placeholder. */
export const V1: Story = {
  args: {
    id: 'b3-l1-1152_0-b2-$b3',
    inHouseholdId: VITALE.id,
    inIsSkeletonOnly: false,
    children: <CarouselTag id="b3-l1-1152_0-b2-$b4" inIndexCurrentItem={0} inTotalItems={23} />,
    renderHouseholdDetails: (slot) => <HouseholdDetailsStandIn {...slot} />,
  },
};
