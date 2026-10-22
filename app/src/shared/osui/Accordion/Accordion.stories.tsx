import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccordionItem } from '@/shared/osui/AccordionItem';
import * as itemStories from '@/shared/osui/AccordionItem/AccordionItem.stories';
import { Accordion } from './Accordion';

const meta = { title: 'Shared/osui/Accordion', component: Accordion } satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HostSurvey/default: the host survey sections, both expanded (the caller passes MultipleItems True). */
export const V1: Story = {
  args: {
    id: 'b2-$b21',
    multipleItems: true,
    extendedClass: 'orbit-host-survey-accordion',
    children: (
      <>
        <AccordionItem {...itemStories.V1.args} />
        <AccordionItem {...itemStories.V2.args} />
      </>
    ),
  },
};
