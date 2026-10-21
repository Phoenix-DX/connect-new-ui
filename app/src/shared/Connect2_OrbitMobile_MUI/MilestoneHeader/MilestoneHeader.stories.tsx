import type { Meta, StoryObj } from '@storybook/react-vite';
import { syncOrbitMilestoneTypes } from '../lib/actions';
import type { OrbitMilestoneTypeRecord } from '../lib/structures';
import { MilestoneHeader } from './MilestoneHeader';

/** Mock OrbitMilestoneTypes of the sync (fictional data; icon and Type as in the HelpersDetail / MilestoneDetail
    captures: `orbit-icon-person-wave` / `orbit-icon-accommodation`, " (Host)"). */
const ORBIT_MILESTONE_TYPES: OrbitMilestoneTypeRecord[] = [
  { Id: 'helper-host', Type: 'Host', Name: 'Helper', MainIcon: 'orbit-icon-person-wave' },
  { Id: 'accommodation-host', Type: 'Host', Name: 'Accommodation', MainIcon: 'orbit-icon-accommodation' },
];

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/MilestoneHeader',
  component: MilestoneHeader,
  decorators: [
    (Story) => {
      void syncOrbitMilestoneTypes(ORBIT_MILESTONE_TYPES); // the store's mirror takes the rows at once (write-through)
      return <Story />;
    },
  ],
} satisfies Meta<typeof MilestoneHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HelpersDetail/default: helper milestone of the host ("Helper (Host)"). */
export const V1: Story = {
  args: {
    id: 'b1-$b3',
    inEventName: 'Regional Gathering, Bahia Blanca',
    inMilestoneName: 'Helper',
    inOrbitMilestoneTypeId: 'helper-host',
  },
};

/** MilestoneDetail/default: accommodation milestone of the host ("Accommodation (Host)"). */
export const V2: Story = {
  args: {
    id: 'b1-b5-$b3',
    inEventName: 'Regional Gathering, Bahia Blanca',
    inMilestoneName: 'Accommodation',
    inOrbitMilestoneTypeId: 'accommodation-host',
  },
};
