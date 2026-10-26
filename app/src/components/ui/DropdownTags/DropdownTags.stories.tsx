import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownTags } from './DropdownTags';

/* Never captured (the pack has no DOM variant): story from the compiled view. */
const meta = { title: 'Shared/osui/DropdownTags', component: DropdownTags } satisfies Meta<typeof DropdownTags>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Event booklet sections to include, two chosen. */
export const Sections: Story = {
  args: {
    prompt: 'Select sections',
    optionsList: [
      { Value: 'schedule', Label: 'Schedule' },
      { Value: 'speakers', Label: 'Speakers' },
      { Value: 'venues', Label: 'Venues' },
      { Value: 'transport', Label: 'Transport' },
    ],
    startingSelection: [
      { Value: 'schedule', Label: 'Schedule' },
      { Value: 'venues', Label: 'Venues' },
    ],
  },
};
