import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { InputWithIcon } from './InputWithIcon';

const meta = { title: 'Shared/osui/InputWithIcon', component: InputWithIcon } satisfies Meta<typeof InputWithIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Caller markup in the Input placeholder as captured (OutSystems Input widgets). */
const searchCountry = (
  <span className="input-search">
    <input
      aria-required="false"
      className="form-control border-radius-rounded OSFillParent"
      data-input=""
      placeholder="Search country"
      type="search"
    />
  </span>
);

/** BrowseCountries/default: the search icon, with a second InputWithIcon (V2) in the Input placeholder */
export const V1: Story = {
  args: {
    icon: <Icon inIconId="connect-icon-search" />,
    input: <InputWithIcon alignIconRight input={searchCountry} />,
  },
};
/** BrowseCountries/default: the inner InputWithIcon (icon on the right, empty icon placeholder) */
export const V2: Story = { args: { alignIconRight: true, input: searchCountry } };
/** LegacyShareObject/default */
export const V3: Story = {
  args: {
    extendedClass: 'border-radius-soft border-neutral-4',
    icon: <i className="icon fa fa-search fa-1x" data-icon="" />,
    input: (
      <div className="form-control" data-container="">
        <span className="input-search">
          <input
            aria-required="false"
            className="form-control OSFillParent"
            data-input=""
            placeholder="Share with..."
            type="search"
          />
        </span>
      </div>
    ),
  },
};
/** Profile/default */
export const V4: Story = {
  args: {
    alignIconRight: true,
    icon: <Icon inIconId="connect-icon-content_copy" />,
    input: (
      <span className="input-text">
        <input aria-required="false" className="form-control OSFillParent" data-input="" disabled type="text" />
      </span>
    ),
  },
};
