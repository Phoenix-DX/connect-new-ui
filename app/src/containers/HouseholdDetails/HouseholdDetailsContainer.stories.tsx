import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { synchBookmarks } from '@/platform/storage/localEntities/localBookmarks';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { currentUserId, isSignedIn, setClientVar, setSignedInUser } from '@/platform/session/session';
import { getBookmarkType_FromEntity } from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { HouseholdDetailsContainer, type HouseholdDetailsContainerProps } from './HouseholdDetailsContainer';
import { useHouseholdDetailsFlags } from './hooks/useHouseholdDetails';
import { HOUSEHOLD_DETAILS_ID, PROFILE_HOUSEHOLD_ID } from './mockData';

/** The container with the flags of the session, read as the page reads them. */
function HouseholdDetails(props: Omit<HouseholdDetailsContainerProps, 'flags'>) {
  return <HouseholdDetailsContainer {...props} flags={useHouseholdDetailsFlags()} />;
}

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** Inside the signed-in app (OnReady reads the user information); Directory_EntityDetailsActions needs the query client
    and a router; bookmarks and notes are synched (as captured). */
const providers: Decorator = (Story) => {
  if (!isSignedIn()) setSignedInUser(MOCK_USER_ID);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  setClientVar('UBTConnect.Notes_IsSynched', true);
  return (
    <QueryClientProvider client={client}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

/** The HouseholdDetails household is bookmarked in the capture (`ubt-image-card__bookmarked`): a local bookmark of the
    signed-in user (legacy bookmarks, C2NewBookmarks off on TST). */
async function seedHouseholdBookmark() {
  const { BookmarkType, BookmarkGroup } = getBookmarkType_FromEntity(Connect_Entity.Household);
  await synchBookmarks([
    {
      Id: '1',
      UserId: Number(currentUserId() ?? 0),
      BookmarkId: '1',
      ObjectType: BookmarkType,
      ObjectId: HOUSEHOLD_DETAILS_ID,
      Group: BookmarkGroup,
      DateCreatedUtc: '1900-01-01T00:00:00Z',
      Note: '',
    },
  ]);
}

const meta = {
  title: 'Containers/HouseholdDetails',
  component: HouseholdDetails,
  decorators: [providers],
} satisfies Meta<typeof HouseholdDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack: wrapper only): a carousel household. */
export const V1: Story = { args: { source: { kind: 'server', householdId: HOUSEHOLD_DETAILS_ID } } };
/** Profile/default (pack: wrapper and share sheet): Profile_HouseholdPreview passes isEnabled False and the kebab menu. */
export const V2: Story = {
  args: { source: { kind: 'server', householdId: PROFILE_HOUSEHOLD_ID }, isEnabled: false, showKebabMenu: true },
};
/** HouseholdDetails/default: once GetHousehold answered, About tab, household bookmarked (photo, address popup, actions
    and members collapsed: own tests). */
export const V3: Story = {
  args: { source: { kind: 'server', householdId: HOUSEHOLD_DETAILS_ID } },
  loaders: [seedHouseholdBookmark],
};
/** HouseholdDetails/loading: before OnReady ends (no tags yet: "Household gallery", Photobook link, private line). */
export const V4: Story = { args: { source: { kind: 'server', householdId: HOUSEHOLD_DETAILS_ID } } };
/** Profile/default: once GetHousehold answered, disabled, kebab menu and share sheet. */
export const V5: Story = { args: V2.args };
