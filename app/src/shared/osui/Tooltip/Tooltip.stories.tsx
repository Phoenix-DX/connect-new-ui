import type { Meta, StoryObj } from '@storybook/react-vite';
import { Trigger } from '../lib/staticEntities';
import { Tooltip } from './Tooltip';

/* Never captured (the pack has no DOM variant): stories from the compiled view. */
const meta = { title: 'Shared/osui/Tooltip', component: Tooltip } satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;

const info = <i className="icon fa fa-info-circle fa-1x" data-icon="" />;

/** Host survey help icon, opens on click. */
export const OnClick: Story = {
  args: {
    trigger: Trigger.OnClick,
    content: info,
    tooltip: <span>Beds available for visiting guests on the meeting weekend.</span>,
  },
};

/** Starts open (hover trigger). */
export const StartsOpen: Story = {
  args: { startsOpen: true, content: info, tooltip: <span>Answer by Friday 23 October.</span> },
};
