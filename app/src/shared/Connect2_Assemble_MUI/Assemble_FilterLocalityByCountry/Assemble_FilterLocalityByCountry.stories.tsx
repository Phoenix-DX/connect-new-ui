import type { Meta, StoryObj } from '@storybook/react-vite';
import { LOCALITY } from '../../../mocks/fictional/directory';
import { mockApiSession } from '../../test/mockApiSession';
import { Assemble_FilterLocalityByCountry } from './Assemble_FilterLocalityByCountry';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/Assemble_FilterLocalityByCountry',
  component: Assemble_FilterLocalityByCountry,
  loaders: [mockApiSession],
} satisfies Meta<typeof Assemble_FilterLocalityByCountry>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (AssembleEvents and Assemble_BrowseByCountry were recorded on the country list only): the localities
    of the fictional country (Connect2_LegacyShared/lib/mocks.ts); a click opens a locality's supper meetings. */
export const Country: Story = {
  args: { id: 'b6-$b1', countryCode: LOCALITY.countryCode, countryName: LOCALITY.country },
};
/** A country without localities: "No results found". */
export const NoLocalities: Story = { args: { id: 'b6-$b1', countryCode: 'ZZ', countryName: 'Nowhere' } };
