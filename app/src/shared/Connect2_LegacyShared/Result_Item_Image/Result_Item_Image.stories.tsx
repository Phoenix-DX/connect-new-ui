import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/legacy/os/os-assets';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { ResultListType } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { Result_Item_Image } from './Result_Item_Image';

const meta = {
  title: 'Shared/Connect2_LegacyShared/Result_Item_Image',
  component: Result_Item_Image,
} satisfies Meta<typeof Result_Item_Image>;
export default meta;
type Story = StoryObj<typeof meta>;

const PHOTO = osImage('img/Connect2_LegacyShared.User_rectangle.png');
const TAG_STYLE = { color: 'rgb(0, 0, 0)', fontSize: '0.8em' };
const TAG_CLASS =
  'font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6';

const title = (
  <span className="font-size-0-9em bold" data-expression="">
    Household name
  </span>
);
const description = (
  <span className="country-household-count household-locality-no-paddingleft" data-expression="">
    Locality name
  </span>
);
const tag = (
  <span className={TAG_CLASS} data-expression="" style={TAG_STYLE}>
    Locality tag
  </span>
);

/** BookmarksByGroup/default: household bookmark with a signed photo, description, tag and the options menu. */
export const V1: Story = {
  args: {
    id: 'b1-l1-57_0-Household_List_Item',
    inShowDescription: true,
    inShowTag: true,
    inHasAction: true,
    inHasBorder: false,
    inResultType: ResultListType.Household,
    inSignedURL: PHOTO,
    itemHeight: '66px',
    titlePlaceholder: title,
    descriptionPlaceholder: description,
    tagPlaceholder: tag,
    resultItemPlaceholder: <PendingBlock name="Utility.ItemOptionsMenu" />,
  },
};

/** BookmarksByGroup/default: no photo (default user image), no description. */
export const V2: Story = {
  args: { ...V1.args, inShowDescription: false, inSignedURL: '' },
};

/** BookmarksByGroup/default: signed photo, no description. */
export const V3: Story = {
  args: { ...V1.args, inShowDescription: false },
};

/** LegacyShareObject/default: the shared household, image from the ImagePlaceholder (UBT_LazyImage), no action. */
export const V4: Story = {
  args: {
    id: 'b1-Household_List_Item',
    showPlaceholderForImage: true,
    inShowDescription: true,
    inShowTag: true,
    inHasBorder: false,
    imagePlaceholder: <UBT_LazyImage id="b1-$b4" imageURL={PHOTO} />,
    titlePlaceholder: title,
    descriptionPlaceholder: description,
    tagPlaceholder: tag,
  },
};

/** LegacyShareObject/default: a profile row, round default image, highlighted title, share icon as the action. */
export const V5: Story = {
  args: {
    id: 'b1-b8-l1-39_0-Household_List_Item',
    inShowTag: true,
    inHasAction: true,
    inHasBorder: false,
    inIsRoundImage: true,
    titlePlaceholder: (
      <div className="font-size-0-9em bold" data-container="">
        <PendingBlock name="Directory.HighlightSearch" />
      </div>
    ),
    tagPlaceholder: tag,
    resultItemPlaceholder: (
      <i className="icon fa fa-share-square-o fa-2x" data-icon="" style={{ color: 'rgb(0, 100, 192)' }} />
    ),
  },
};

/** LegacyShareObject/loading: navigation loading (no background, `loading-item`), empty title. */
export const V6: Story = {
  args: {
    id: 'b1-Household_List_Item',
    showPlaceholderForImage: true,
    inHasBorder: false,
    inIsNavigationLoading: true,
    imagePlaceholder: <UBT_LazyImage id="b1-$b4" imageURL={PHOTO} />,
    titlePlaceholder: <span className="font-size-0-9em bold" data-expression="" />,
  },
};
