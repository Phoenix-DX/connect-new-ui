import type { Meta, StoryObj } from '@storybook/react-vite';
import { insideNativeLayout } from '@/shared/test/nativeLayout';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { SectionExpandable } from './SectionExpandable';

const meta = {
  title: 'Shared/osui/DEPRECATED_AccordionItem',
  component: SectionExpandable,
  /* Inside the screen's native layout: the title has no text-ellipsis (captured). */
  decorators: [insideNativeLayout],
} satisfies Meta<typeof SectionExpandable>;
export default meta;
type Story = StoryObj<typeof meta>;

const text = (value: string) => <span data-expression="">{value}</span>;

/** Caller markup of a MilestoneDetail room (ScreenBlock, as captured): floor, hosts, beds, then the guest households
    with one `orbit-member-list-item` per guest (their content is collapsed in the capture). */
const roomContent = (floor: string, hosts: string, beds: string, guests: number) => (
  <>
    <div className="room-info-cont" data-container="">
      <div className="flex-center-vertical justify-content-flex-start flex-direction-row" data-container="">
        <i className="icon orbit-icon-home font-size-1-1em fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-s" data-expression="">
          {floor}
        </span>
      </div>
      <div className="flex-center-vertical justify-content-center flex-direction-row" data-container="">
        <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-s" data-expression="">
          {hosts}
        </span>
      </div>
      <div className="flex-center-vertical justify-content-flex-end flex-direction-row" data-container="">
        <i className="icon orbit-icon-accommodation font-size-1-1em fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-s" data-expression="">
          {beds}
        </span>
      </div>
    </div>
    <div className="padding-x-m padding-top-base font-size-1-1em text-neutral-6" data-container="">
      <span data-expression="">Guest/s</span>
    </div>
    <div className="list list-group orbit-household-list OSFillParent" data-list="" data-virtualization-disabled="">
      <div className="orbit-household-list-item" data-container="">
        <div className="list list-group orbit-member-list OSFillParent" data-list="" data-virtualization-disabled="">
          {Array.from({ length: guests }, (_, i) => (
            <div key={i} className="orbit-member-list-item" data-container="" />
          ))}
        </div>
      </div>
    </div>
  </>
);

/** EventDetail/default: "Host Allocation" item of the event, closed, no padding; content = HostAllocation_List. */
export const V1: Story = {
  args: {
    id: 'b1-$b5',
    usePadding: false,
    extendedClass: 'orbit-accordion-item',
    title: text('Host Allocation'),
    content: <PendingBlock name="Orbit_Blocks.HostAllocation_List" />,
  },
};

/** MilestoneDetail/default: first room of the milestone (two guests), closed. */
export const V2: Story = {
  args: {
    id: 'b1-b5-l5-142864_0-$b8',
    usePadding: false,
    extendedClass: 'orbit-accordion-item',
    title: text('Room: 1-Master Guest'),
    content: roomContent('Ground Floor', 'Ortega', '2', 2),
  },
};

/** MilestoneDetail/default: a following room (margin-top-s), two guests. */
export const V3: Story = {
  args: {
    id: 'b1-b5-l5-142864_1-$b8',
    usePadding: false,
    extendedClass: 'orbit-accordion-item margin-top-s',
    title: text('Room: Garden View Suite'),
    content: roomContent('Second Floor', 'Ortega', '1', 2),
  },
};

/** MilestoneDetail/default: a following room with one guest. */
export const V4: Story = {
  args: {
    id: 'b1-b5-l5-142864_4-$b8',
    usePadding: false,
    extendedClass: 'orbit-accordion-item margin-top-s',
    title: text('Room: Guest 2'),
    content: roomContent('Basement', 'Ortega', '1', 1),
  },
};

/** Not captured: open, with padding. */
export const Expanded: Story = {
  args: {
    isExpanded: true,
    title: text('Arrival details'),
    content: text('Guests arrive on Friday evening by train from Bahia Blanca.'),
  },
};

/** Not captured: disabled. */
export const Disabled: Story = {
  args: { isDisabled: true, title: text('Transport'), content: text('No transport is arranged for this event.') },
};
