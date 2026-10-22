import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import {
  childrenText,
  householdName,
  supperMeetingName,
  VITALE,
  WARD,
  WARD_SUPPER_MEETING,
  type CastHousehold,
} from '@/mocks/fictional/directory';
import { getSkeleton_UI_HouseholdDetails } from '@/shared/UBTConnect/lib/actions';
import type { UI_HouseholdMember, UI_Screen_HouseholdDetails } from '@/shared/UBTConnect/lib/structures';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';
import { HouseholdDetailsView, type HouseholdDetailsViewProps } from './HouseholdDetailsView';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** The photos (UBT_LazyImage) and the address popup need the query client; a router for the links. */
const providers: Decorator = (Story) => (
  <QueryClientProvider client={client}>
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  </QueryClientProvider>
);

/* Fictional households of the directory cast (P-MOCKS): Vitale (HouseholdDetails, 5 members) and Ward (Profile,
   3 members), as the route mocks answer them. */
const record = (h: CastHousehold, supperMeeting: string): UI_Screen_HouseholdDetails => ({
  HouseholdCard: {
    Id: h.id,
    Household_Card_Content: {
      Name: householdName(h),
      FamilyNames: childrenText(h.children),
      Address: h.address,
      LocalityId: h.localityId,
      LocalityName: h.localityName,
      CountryName: h.countryName,
      SupperMeetingId: h.supperMeetingId,
      SupperMeetingName: supperMeeting,
      DisplayOptions: { IsAncestry: false, IsDeceased: false, IsHidden: false },
    },
  },
});
const membersOf = (h: CastHousehold, firstId: number): UI_HouseholdMember[] =>
  h.members.map((m, i) => ({
    Id: String(firstId + i),
    HouseholdId: h.id,
    Title: m.first,
    LifeCycleText: m.born,
    MemberRole: i < 2 ? 'Householder' : 'Child',
    HasCTAs: i < 2,
    HasNavigation: i < 2,
  }));

/** The tags once OnReady ended and GetHousehold answered: About selected, Photos enabled. */
const tags: Tag[] = [
  { Text: 'About', Identifier: 'About', IsSelected: true },
  { Text: 'Photos', Identifier: 'Photos', IsSelected: false, Enabled: true },
];
const skeleton = {
  Household: getSkeleton_UI_HouseholdDetails(),
  Out_HouseholdMembers: [],
  Out_NonHouseholdMembers: [],
  isVisible: false,
};

/* The slots are containers to be (Directory_EntityDetailsActions, ShareSheet): the stories show their wrappers, as
   the captures collapse them. */
const entityActions = <OSBlock name="Directory_CommonBlocks.Directory_EntityDetailsActions" />;
const renderMemberActions = () => <OSBlock name="Directory_CommonBlocks.Directory_EntityDetailsActions" />;
const shareSheet = <OSBlock name="CW_Share.ShareSheet" />;
const noop = () => undefined;

const base: HouseholdDetailsViewProps = {
  householdId: VITALE.id,
  isEnabled: true,
  showKebabMenu: false,
  hideActions: false,
  household: {
    Household: record(VITALE, supperMeetingName(VITALE.supperMeetingId)),
    Out_HouseholdMembers: membersOf(VITALE, 7001),
    Out_NonHouseholdMembers: [],
    isVisible: true,
  },
  dataFetchStatus: DataFetchStatus.Fetched,
  coordinates: { Latitude: '-33.8688', Longitude: '151.2093', UseCoordinates: true },
  tags,
  selectedTag: 'About',
  isBookmarked: true,
  isSkeletonOnly: false,
  hidePhotobookActions: false,
  timelineImages: [],
  entityActions,
  renderMemberActions,
  shareSheet,
  onTagsChanged: noop,
  onEdit: noop,
  onShare: noop,
  onLocalityClick: noop,
  onSupperMeetingClick: noop,
  onPhotobookClick: noop,
  onMemberClick: noop,
  onNonMemberClick: noop,
  onTimelineDateSelected: noop,
};

const meta = {
  title: 'Components/Household/HouseholdDetailsView',
  component: HouseholdDetailsView,
  decorators: [providers],
  args: base,
} satisfies Meta<typeof HouseholdDetailsView>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdDetails/default: GetHousehold answered, About tag, household bookmarked, five members. */
export const Default: Story = {};
/** HouseholdDetails/loading: before OnReady ends: skeleton household, no tags yet (so "Household gallery" and the
    Photobook link), the private-profile line, not bookmarked. */
export const Loading: Story = {
  args: {
    household: skeleton,
    dataFetchStatus: DataFetchStatus.Fetching,
    tags: [],
    selectedTag: '',
    isBookmarked: false,
  },
};
/** HouseholdDetails/offline: GetHousehold failed: the skeleton stays, with the tags of OnReady. */
export const Offline: Story = {
  args: {
    household: skeleton,
    dataFetchStatus: DataFetchStatus.Error,
    tags: [
      { Text: 'About', Identifier: 'About', IsSelected: true },
      { Text: 'Photos', Identifier: 'Photos', IsSelected: false },
    ],
    isBookmarked: false,
  },
};
/** Profile/default: the household preview of the profile: disabled, kebab menu and share sheet, three members. */
export const Preview: Story = {
  args: {
    householdId: WARD.id,
    isEnabled: false,
    showKebabMenu: true,
    household: {
      Household: record(WARD, WARD_SUPPER_MEETING),
      Out_HouseholdMembers: membersOf(WARD, 7201),
      Out_NonHouseholdMembers: [],
      isVisible: true,
    },
    isBookmarked: false,
  },
};
