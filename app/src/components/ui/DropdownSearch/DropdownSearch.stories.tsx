import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownSearch } from './DropdownSearch';

const meta = {
  title: 'Shared/osui/DropdownSearch',
  component: DropdownSearch,
} satisfies Meta<typeof DropdownSearch>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured. Profile's locality dropdown (compiled view): options grouped by country, prompt "-", one starting
    value. Mock names only. */
export const CompiledView: Story = {
  args: {
    id: '$b5',
    prompt: '-',
    optionsList: [
      { Value: '1', Label: 'Locality A, Country A', GroupName: 'Country A' },
      { Value: '2', Label: 'Locality B, Country A', GroupName: 'Country A' },
      { Value: '3', Label: 'Locality C, Country B', GroupName: 'Country B' },
    ],
    startingSelection: [{ Value: '2', Label: '' }],
  },
};
