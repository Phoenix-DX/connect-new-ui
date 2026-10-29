import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta = { title: 'Shared/osui/Tooltip', component: Tooltip } satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;

/* No capture shows the block (migration/blocks/OutSystemsUI_2_23.Content.Tooltip.md: 0 instances). The args are the
   one instance of the app: Tooltip_UniqueName of HostSurvey_AccommodationItem (T1). */
const ROOM_NAME_TOOLTIP = {
  id: 'b2-l1_1-b9-Tooltip_UniqueName',
  trigger: 'OnClick',
  position: 'top',
  content: <i className="icon orbit-icon-circle-warning" data-icon="" />,
  tooltip: 'Room name must be unique.',
} as const;

/** Not captured: the room form, closed (the balloon is in the DOM, hidden by `.osui-balloon`). A click, a focus or
    the 500 ms DelayTootlip after a Save with a same room name opens it. */
export const Closed: Story = {
  args: ROOM_NAME_TOOLTIP,
  render: (args) => (
    <div className="orbit-host-survey-label-with-icon" data-container="">
      <label className="mandatory" data-label="" htmlFor="b2-l1_1-b9-Input_RoomName">
        Room Name
      </label>
      <Tooltip {...args} />
    </div>
  ),
};

/** Not captured (decision O7 a): open at build (StartsOpen), top placement with the arrow. A body click, Esc or Tab
    closes it. */
export const Open: Story = {
  args: { ...ROOM_NAME_TOOLTIP, startsOpen: true },
  render: (args) => (
    <div className="orbit-host-survey-label-with-icon" data-container="" style={{ marginTop: 96 }}>
      <label className="mandatory" data-label="" htmlFor="b2-l1_1-b9-Input_RoomName">
        Room Name
      </label>
      <Tooltip {...args} />
    </div>
  ),
};
