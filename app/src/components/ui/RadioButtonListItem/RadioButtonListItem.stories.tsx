import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioButtonListItem } from './RadioButtonListItem';

const meta = {
  title: 'Shared/Connect2_LegacyShared/RadioButtonListItem',
  component: RadioButtonListItem,
} satisfies Meta<typeof RadioButtonListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (Assemble_FilterSubdivisionByLocality lists the supper meetings of a locality with it): the selected
    meeting, title coloured as a main hall. */
export const Selected: Story = {
  args: {
    selectedValue: '4101',
    radioButtonValue: '4101',
    children: (
      <span className="font-regular" data-expression="" style={{ color: 'var(--color-primary)' }}>
        Bahia Blanca Main Hall
      </span>
    ),
  },
};

/** Not captured: another meeting of the list, not selected. */
export const NotSelected: Story = {
  args: {
    selectedValue: '4102',
    radioButtonValue: '4101',
    children: (
      <span className="font-regular" data-expression="" style={{ color: 'var(--color-neutral-10)' }}>
        Villa Mitre
      </span>
    ),
  },
};
