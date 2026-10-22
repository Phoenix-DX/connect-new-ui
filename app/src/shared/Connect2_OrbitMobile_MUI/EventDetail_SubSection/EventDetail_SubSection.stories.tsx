import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { EventDetail_SubSection } from './EventDetail_SubSection';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/EventDetail_SubSection',
  component: EventDetail_SubSection,
} satisfies Meta<typeof EventDetail_SubSection>;
export default meta;
type Story = StoryObj<typeof meta>;

const months = ['November 2026', 'October 2026', 'September 2026', 'September 2026', 'August 2026'];

/** LDM_MyEvents_V2/default: "Past Events" sub-section; the placeholder holds the list of past events grouped by
    month, each group with an EventCard_V2 (not built). */
export const V1: Story = {
  args: {
    id: 'b1-b9-SubSection_MyTimeline',
    inTitle: 'Past Events',
    children: (
      <div className="list list-group past-event-list OSFillParent" data-list="" data-virtualization-disabled="">
        {months.map((month, index) => (
          <div className="past-event-cont" data-container="" key={index}>
            <div className="past-event-date" data-container="">
              <span data-expression="">{month}</span>
            </div>
            <div className="list list-group OSFillParent" data-list="" data-virtualization-disabled="">
              <PendingBlock name="LDM_Blocks_V2.EventCard_V2" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
};
