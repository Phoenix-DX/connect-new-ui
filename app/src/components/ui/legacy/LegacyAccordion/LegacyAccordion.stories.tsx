import type { Meta, StoryObj } from '@storybook/react-vite';
import { insideNativeLayout } from '@/test/nativeLayout';
import { PendingBlock } from '@/test/PendingBlock';
import { SectionExpandable } from '@/components/ui/legacy/SectionExpandable';
import { LegacyAccordion } from './LegacyAccordion';

const meta = {
  title: 'Shared/osui/DEPRECATED_Accordion',
  component: LegacyAccordion,
  decorators: [insideNativeLayout],
} satisfies Meta<typeof LegacyAccordion>;
export default meta;
type Story = StoryObj<typeof meta>;

const text = (value: string) => <span data-expression="">{value}</span>;

/** EventDetail/default: Accordion_Orbit's accordion (colored content, one item at a time) holding the "Host
    Allocation" item in Accordion_Orbit's Content container. */
export const V1: Story = {
  args: {
    id: 'b1-b4-$b1',
    extendedClass: 'orbit-accordion orbit-accordion-colored-content',
    children: (
      <div>
        <SectionExpandable
          id="b1-$b5"
          usePadding={false}
          extendedClass="orbit-accordion-item"
          title={text('Host Allocation')}
          content={<PendingBlock name="Orbit_Blocks.HostAllocation_List" />}
        />
      </div>
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

/** MilestoneDetail/default: the milestone's rooms (MultipleItems), one accordion item per room in the screen's List. */
export const V2: Story = {
  args: {
    id: 'b1-b5-b7-$b1',
    multipleItems: true,
    extendedClass: 'orbit-accordion orbit-accordion-no-margin',
    children: (
      <div>
        <div className="list list-group OSFillParent" data-list="" data-virtualization-disabled="">
          {ROOMS.map((room, i) => (
            <SectionExpandable
              key={room}
              usePadding={false}
              extendedClass={i === 0 ? 'orbit-accordion-item' : 'orbit-accordion-item margin-top-s'}
              title={text(room)}
              content={text('Ground Floor')}
            />
          ))}
        </div>
      </div>
    ),
  },
};
