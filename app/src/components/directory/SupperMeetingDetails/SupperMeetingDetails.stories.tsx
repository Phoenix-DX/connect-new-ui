import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { subdivisionHousehold } from '@/components/household/HouseholdGalleryCardList/mockData';
import { householdsOfSupperMeeting, SUPPER_MEETINGS } from '@/mocks/fictional/directory';
import {
  getSkeletonList_UI_SubdivisionHousehold,
  getSkeleton_UI_SubdivisionDetails,
} from '@/shared/UBTConnect/lib/actions';
import type { UI_Screen_SubdivisionDetails } from '@/shared/UBTConnect/lib/structures';
import { SupperMeetingDetails, type SupperMeetingDetailsProps } from './SupperMeetingDetails';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** The photos (UBT_LazyImage) need the query client. */
const providers: Decorator = (Story) => (
  <QueryClientProvider client={client}>
    <Story />
  </QueryClientProvider>
);

/* The first supper meeting of the directory cast with its eleven households (src/mocks/fictional/directory.ts), as
   the container mocks answer it. */
const [ZAPIOLA] = SUPPER_MEETINGS;
const households = householdsOfSupperMeeting(ZAPIOLA.id).map(subdivisionHousehold);
const fetched: UI_Screen_SubdivisionDetails = {
  Subdivision_Card: {
    SubdivisionId: ZAPIOLA.id,
    Subdivision_Card_Content: {
      Name: ZAPIOLA.name,
      BretherenCount: 39,
      HouseholdCount: households.length,
      BrothersCount: 24,
      SistersCount: 15,
      Address: 'Zapiola 1450, Bahia Blanca',
    },
  },
};

/* The slot is a container (Directory_EntityDetailsActions): the stories show its wrapper, as the captures collapse
   it. */
const entityActions = <OSBlock name="Directory_CommonBlocks.Directory_EntityDetailsActions" />;

const loading: SupperMeetingDetailsProps = {
  isDataFetched: false,
  subdivision: getSkeleton_UI_SubdivisionDetails(),
  households: { isDataFetched: false, isError: false, list: getSkeletonList_UI_SubdivisionHousehold(4) },
  entityActions,
};
const loaded: SupperMeetingDetailsProps = {
  ...loading,
  isDataFetched: true,
  subdivision: fetched,
  households: { isDataFetched: true, isError: false, list: households },
};

const meta = {
  title: 'Shared/UBTConnect/SupperMeeting_DetailsBlock',
  component: SupperMeetingDetails,
  decorators: [providers],
} satisfies Meta<typeof SupperMeetingDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only): the supper meeting before the data actions answer. */
export const V1: Story = { args: loading };
/** SupperMeeting_Details/default: the supper meeting and its households (nested content blocks collapsed). */
export const V2: Story = { args: loaded };
/** SupperMeeting_Details/loading: the skeleton details while the data actions have not answered. */
export const V3: Story = { args: loading };
