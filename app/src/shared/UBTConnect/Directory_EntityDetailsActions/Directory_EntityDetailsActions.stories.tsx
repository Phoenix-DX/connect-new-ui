import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { setClientVar } from '@/platform/session/session';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { Directory_EntityDetailsActions } from './Directory_EntityDetailsActions';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });

/** Stories only: bookmarks and notes synched (app start), inside a router (the block navigates) and a query client
    (ShareSheet). */
const synched: Decorator = (Story) => {
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  setClientVar('UBTConnect.Notes_IsSynched', true);
  return (
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={['/UBTConnect/HouseholdCarousel']}>
        <Story />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

const meta = {
  title: 'Shared/UBTConnect/Directory_EntityDetailsActions',
  component: Directory_EntityDetailsActions,
  decorators: [synched],
} satisfies Meta<typeof Directory_EntityDetailsActions>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: household actions (mock contact details), popups closed. */
export const V1: Story = {
  args: { id: 'b1-$b33', entityType: Connect_Entity.Household, entityId: '101' },
};
