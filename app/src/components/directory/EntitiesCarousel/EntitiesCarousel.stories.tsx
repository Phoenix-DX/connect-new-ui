import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useLayoutEffect, useRef } from 'react';
import type { CarouselHouseholdDetailsSlot } from '@/components/directory/CarouselHouseholdDetails';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { VITALE } from '@/mocks/fictional/directory';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { EntitiesCarousel } from './EntitiesCarousel';

/** A stand-in for the household details container that the page renders in the slot of each household slide: the
    HouseholdDetails_Block wrapper with the carousel tag placeholder. After its first render it raises
    HouseholdDataFetched once, with the locality and the country of the fictional household, as the container does
    when GetHousehold answers. */
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
  title: 'Shared/UBTConnect/EntitiesCarousel',
  component: EntitiesCarousel,
} satisfies Meta<typeof EntitiesCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack variant 1): 23 households (the captured count; every slide shows the same fictional
    household), starting at the first one. */
export const V1: Story = {
  args: {
    id: '$b3',
    inEntitiesCarouselItems: Array.from({ length: 23 }, () => ({ EntityId: VITALE.id })),
    inStartingPosition: 0,
    inConnectEntityTypeId: Connect_Entity.Household,
    renderHouseholdDetails: (slot) => <HouseholdDetailsStandIn {...slot} />,
  },
};
