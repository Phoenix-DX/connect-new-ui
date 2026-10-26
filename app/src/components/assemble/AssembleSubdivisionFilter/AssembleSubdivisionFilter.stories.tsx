import type { Meta, StoryObj } from '@storybook/react-vite';
import { LOCALITY } from '@/mocks/fictional/directory';
import { MOCK_LOCALITY_SUBDIVISIONS } from '@/mocks/modules/Connect2_LegacyShared/mocks';
import { mockApiSession } from '@/test/mockApiSession';
import { AssembleSubdivisionFilter } from './AssembleSubdivisionFilter';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/Assemble_FilterSubdivisionByLocality',
  component: AssembleSubdivisionFilter,
  loaders: [mockApiSession],
} satisfies Meta<typeof AssembleSubdivisionFilter>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (AssembleEvents and Assemble_BrowseByCountry were recorded on the country list only): the fictional
    locality's three supper meetings (Connect2_LegacyShared/lib/mocks.ts), none selected. */
export const Locality: Story = { args: { id: 'b6-$b1', localityId: LOCALITY.id } };
/** The same locality with its second supper meeting selected. */
export const Selected: Story = {
  args: {
    id: 'b6-$b1',
    localityId: LOCALITY.id,
    selectedSubdivisionId: MOCK_LOCALITY_SUBDIVISIONS[LOCALITY.id]?.[1]?.Id,
  },
};
