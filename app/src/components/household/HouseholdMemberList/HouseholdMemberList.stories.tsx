import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { UI_HouseholdMember } from '@/shared/UBTConnect/lib/structures';
import { HouseholdMemberList } from './HouseholdMemberList';
import { VITALE } from '@/mocks/fictional/directory';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** The member photos (UBT_LazyImage) need the query client; a router for the links. */
const providers: Decorator = (Story) => (
  <QueryClientProvider client={client}>
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  </QueryClientProvider>
);

const meta = {
  title: 'Components/Household/HouseholdMemberList',
  component: HouseholdMemberList,
  decorators: [providers],
} satisfies Meta<typeof HouseholdMemberList>;
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

/** The call-to-actions slot: the household details give Directory_EntityDetailsActions (a container to be, tested
    with the household details); the captures collapse it, so the story shows its wrapper only. */
const memberActions = () => <OSBlock name="Directory_CommonBlocks.Directory_EntityDetailsActions" />;

/** HouseholdCarousel/default (pack: wrapper only). */
export const V1: Story = {
  args: { members, nonMembers: [], isLoading: false, renderMemberActions: memberActions },
};
/** HouseholdDetails/default: five members (actions and navigation on the parents), no married children (avatars, actions and
    chevrons collapsed: own tests). */
export const V2: Story = { args: V1.args };
