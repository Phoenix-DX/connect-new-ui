import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { MemoryRouter } from 'react-router';
import type { CarouselHouseholdDetailsSlot } from '@/components/directory/CarouselHouseholdDetails';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { VITALE } from '@/mocks/fictional/directory';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { EntitiesCarouselElement } from './EntitiesCarouselElement';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** The supper meeting details block (V3) runs with the query client and a router. */
const providers: Decorator = (Story) => (
  <QueryClientProvider client={client}>
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  </QueryClientProvider>
);

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
  title: 'Shared/UBTConnect/EntitiesCarousel_Element',
  component: EntitiesCarouselElement,
  decorators: [providers],
} satisfies Meta<typeof EntitiesCarouselElement>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EntitiesCarousel's inputs right after OnInitialize: active element = StartingPosition 0, next active still -1,
    RenderBuffer 3. */
const household = {
  inConnectEntityTypeId: Connect_Entity.Household,
  inEntityId: VITALE.id,
  inCarouselLength: 23,
  inIndexActiveElement: 0,
  inIndexNextActiveElement: -1,
  inRenderBuffer: 3,
  renderHouseholdDetails: (slot: CarouselHouseholdDetailsSlot) => <HouseholdDetailsStandIn {...slot} />,
};

/** HouseholdCarousel/default (pack variant 1): element 0 of 23, inside the render buffer: the household details. */
export const V1: Story = { args: { ...household, id: 'b3-l1-1152_0-$b2', inIndexCurrentElement: 0 } };
/** HouseholdCarousel/default (pack variant 2): element 4 of 23, outside the render buffer: nothing rendered. */
export const V2: Story = { args: { ...household, id: 'b3-l1-1152_4-$b2', inIndexCurrentElement: 4 } };
/** SupperMeeting_Carousel/default (pack variant 3): element 0 of 3, the supper meeting details (the supper meeting of
    SupperMeeting_DetailsBlock's own stories). */
export const V3: Story = {
  args: {
    id: 'b3-l1-1164_0-$b2',
    inConnectEntityTypeId: Connect_Entity.SupperMeetings_aka_Subdivisions,
    inEntityId: '2820',
    inCarouselLength: 3,
    inIndexActiveElement: 0,
    inIndexNextActiveElement: -1,
    inIndexCurrentElement: 0,
    inRenderBuffer: 3,
  },
};
