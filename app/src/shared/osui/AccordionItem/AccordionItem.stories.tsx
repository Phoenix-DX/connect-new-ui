import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { AccordionContext, createAccordionParent } from '@/shared/osui/Accordion/accordionContext';
import { AccordionItem } from './AccordionItem';

/** Inside an Accordion (role listitem), without its DOM: the capture is the item's own root. */
const inAccordion = (Story: React.ComponentType) => (
  <AccordionContext.Provider value={createAccordionParent(true)}>
    <Story />
  </AccordionContext.Provider>
);

const meta = {
  title: 'Shared/osui/AccordionItem',
  component: AccordionItem,
  decorators: [inAccordion],
} satisfies Meta<typeof AccordionItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Survey answers of a section: the caller's list of HostSurvey_Item blocks. `role="list"` on the first list is written
    by the parent Accordion (Accordion setA11YProperties). */
const surveyList = (prefix: string, count: number, firstOfAccordion: boolean) => (
  <div
    className="list list-group OSFillParent"
    data-list=""
    data-virtualization-disabled=""
    role={firstOfAccordion ? 'list' : undefined}
  >
    {Array.from({ length: count }, (_, i) => (
      <div key={`${prefix}-${String(i)}`} className="orbit-host-survey-list-item" data-container="">
        <PendingBlock name="Orbit_Blocks.HostSurvey_Item" />
      </div>
    ))}
  </div>
);

/** HostSurvey/default: the "Accommodation" section, expanded, seven questions. */
export const V1: Story = {
  args: { id: 'b2-$b22', startsExpanded: true, title: 'Accommodation', content: surveyList('acc', 7, true) },
};

/** HostSurvey/default: the "Meal Options" section, expanded, two questions. */
export const V2: Story = {
  args: { id: 'b2-$b25', startsExpanded: true, title: 'Meal Options', content: surveyList('meal', 2, false) },
};
