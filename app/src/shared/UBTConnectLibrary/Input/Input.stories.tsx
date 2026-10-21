import type { Meta, StoryObj } from '@storybook/react-vite';
import { Shape } from '../lib/staticEntities';
import { Input } from './Input';

const meta = { title: 'Shared/UBTConnectLibrary/Input', component: Input } satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

const searchCountry = { SearchPrompt: 'Search country', BorderRadius: Shape.Rounded, Debounce_DelayMS: 300 };

/** BrowseCountries/default: the country search (pack: wrapper only) */
export const V1: Story = { args: { inOptions: searchCountry } };
/** BrowseCountries/default: the country search, empty (search icon, no clear icon) */
export const V2: Story = { args: { inOptions: searchCountry } };
/** Notes/default: the notes search, disabled while the notes load */
export const V3: Story = {
  args: { inOptions: { SearchPrompt: 'Search', BorderRadius: Shape.Rounded, Debounce_DelayMS: 300, IsEnabled: false } },
};
