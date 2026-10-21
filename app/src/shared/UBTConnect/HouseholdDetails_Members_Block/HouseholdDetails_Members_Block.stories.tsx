import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { setClientVar } from '../../../shell/session';
import type { UI_HouseholdMember } from '../lib/structures';
import { HouseholdDetails_Members_Block } from './HouseholdDetails_Members_Block';
import { VITALE } from '../../../mocks/fictional/directory';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** Directory_EntityDetailsActions needs the query client and a router; bookmarks and notes are synched (as captured). */
const providers: Decorator = (Story) => {
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

const meta = {
  title: 'Shared/UBTConnect/HouseholdDetails_Members_Block',
  component: HouseholdDetails_Members_Block,
  decorators: [providers],
} satisfies Meta<typeof HouseholdDetails_Members_Block>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Fictional members (person data, P-MOCKS): the Vitale household of the directory cast
    (src/mocks/fictional/directory.ts), ids from 7001; as captured, the first two (parents) have call-to-actions and
    navigation, the three children none. */
const members: UI_HouseholdMember[] = VITALE.members.map((member, i) => ({
  Id: String(7001 + i),
  HouseholdId: VITALE.id,
  Title: member.first,
  LifeCycleText: member.born,
  MemberRole: i < 2 ? 'Householder' : 'Child',
  HasCTAs: i < 2,
  HasNavigation: i < 2,
}));

/** HouseholdCarousel/default (pack: wrapper only). */
export const V1: Story = { args: { inHouseholdMembers: members, inNonHouseholdMembers: [], inIsLoading: false } };
/** HouseholdDetails/default: five members (actions and navigation on the parents), no married children (avatars, actions and
    chevrons collapsed: own tests). */
export const V2: Story = { args: V1.args };
