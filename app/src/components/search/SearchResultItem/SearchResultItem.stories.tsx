import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/components/ui/Icon';
import {
  Connect_Entity,
  UBT_Color,
  UBT_FontSize,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Size,
} from '@/lib/ubtConnectUtils/staticEntities';
import { SearchResultItem } from './SearchResultItem';

const meta = { title: 'Shared/UBTConnect_Utils/SearchResult_Item', component: SearchResultItem } satisfies Meta<
  typeof SearchResultItem
>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Fictional values of the directory cast (src/mocks/fictional/directory.ts); Id "0" sends no signed-image request (UBT_LazyImage shows the entity's fallback icon). */
const member = {
  Id: '0',
  Type: Connect_Entity.Member,
  Name: 'Matías Vitale',
  AdditionalInformation: '',
  Location: 'Bahia Blanca, Argentina',
};

/** No capture (the share sheet was never opened): a member row as ShareSheet passes it (title Small, square image
    Base_52 wide, no location padding), with an unchecked box in Placeholder_Actions. */
export const CompiledView: Story = {
  args: {
    inSearchResult: member,
    inSearchTerm: 'Vitale',
    inLocationTopPadding: UBT_Size.None,
    inImageHeightId: UBT_ImageSize.Square,
    inTitleFontSize: UBT_FontSize.Small,
    inImageWidthId: UBT_ImageSize.Base_52,
    children: <Icon inColorId={UBT_Color.Neutral7} inIconId={UBT_Icons.CheckboxOutlineBlank} />,
  },
};
/** No capture: a locality with additional information and the block defaults (auto / ListThumbnail_104 image). */
export const Locality: Story = {
  args: {
    inSearchResult: {
      ...member,
      Type: Connect_Entity.Locality,
      Name: 'Bahia Blanca',
      AdditionalInformation: '23 households',
    },
  },
};
/** No capture: In_ShowSubscriptionWarning replaces the additional information and the location. */
export const SubscriptionWarning: Story = { args: { inSearchResult: member, inShowSubscriptionWarning: true } };
