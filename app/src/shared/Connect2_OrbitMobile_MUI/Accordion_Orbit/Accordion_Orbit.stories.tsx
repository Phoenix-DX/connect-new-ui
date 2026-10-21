import type { Meta, StoryObj } from '@storybook/react-vite';
import { DEPRECATED_AccordionItem } from '../../osui/DEPRECATED_AccordionItem';
import { insideNativeLayout } from '../../test/nativeLayout';
import { PendingBlock } from '../../test/PendingBlock';
import { Accordion_Orbit } from './Accordion_Orbit';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Accordion_Orbit',
  component: Accordion_Orbit,
  decorators: [insideNativeLayout],
} satisfies Meta<typeof Accordion_Orbit>;
export default meta;
type Story = StoryObj<typeof meta>;

const text = (value: string) => <span data-expression="">{value}</span>;

/** EventDetail/default: colored accordion with the event's "Host Allocation" item. */
export const V1: Story = {
  args: {
    id: 'b1-$b4',
    inColoredContent: true,
    children: (
      <DEPRECATED_AccordionItem
        id="b1-$b5"
        usePadding={false}
        extendedClass="orbit-accordion-item"
        title={text('Host Allocation')}
        content={<PendingBlock name="Orbit_Blocks.HostAllocation_List" />}
      />
    ),
  },
};

const ROOMS = [
  'Room: 1-Master Guest',
  'Room: Garden View Suite',
  'Room: Blue Room',
  'Room: Study',
  'Room: Guest 2',
  'Room: Guest 3',
];

/** MilestoneDetail/default (wrapper as v1): the rooms of a milestone, several open at once, no margin. */
export const MilestoneRooms: Story = {
  args: {
    id: 'b1-b5-$b7',
    inMultipleItems: true,
    inExtendedClass: 'orbit-accordion-no-margin',
    children: (
      <div className="list list-group OSFillParent" data-list="" data-virtualization-disabled="">
        {ROOMS.map((room, i) => (
          <DEPRECATED_AccordionItem
            key={room}
            usePadding={false}
            extendedClass={i === 0 ? 'orbit-accordion-item' : 'orbit-accordion-item margin-top-s'}
            title={text(room)}
            content={text('Ground Floor')}
          />
        ))}
      </div>
    ),
  },
};
