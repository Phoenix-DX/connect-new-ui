import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from '@/components/ui/lib/staticEntities';
import { GridGallery } from './GridGallery';

const meta = {
  title: 'Shared/osui/DEPRECATED_GalleryV2',
  component: GridGallery,
} satisfies Meta<typeof GridGallery>;
export default meta;
type Story = StoryObj<typeof meta>;

const PLACEHOLDER = '/UBTConnect/img/Connect2_LegacyShared.User_rectangle.png';
const NO_DIVISION = '/UBTConnect/img/Connect2_LegacyShared.no_division_rectangle.png';

/** The caller's list of bookmark cards (MyBookmarks_Album), as captured. */
const cards = (imageClass: string, src: string, titles: string[]) => (
  <div className="list list-group OSFillParent" data-list="" data-virtualization-disabled="">
    {titles.map((title) => (
      <div key={title} className="position-relative" data-container="" style={{ cursor: 'pointer' }}>
        <img className={imageClass} data-image="" src={src} alt="" />
        <div className="bookmark-card-image-title OSInline" data-container="">
          <span data-expression="">{title}</span>
        </div>
      </div>
    ))}
  </div>
);

/** MyBookmarks_Album inputs for 4 bookmarks: (count <= 3 and > 0 ? count : 2) columns, gutter Small. */
const album = { itemInPhone: '2', itemsInTablet: 2, itemsInDesktop: 2, gutterSize: Space.Small };

/** MyBookmarks/default: household bookmarks album (4 cards). */
export const V1: Story = {
  args: {
    id: 'b1-b4-DEPRECATED_GalleryV2_BookmarkedImages',
    ...album,
    children: cards('bookmark-card-image bookmark-card-image-household', PLACEHOLDER, [
      'Household A',
      'Household B',
      'Household C',
      'Household D',
    ]),
  },
};

/** MyBookmarks/default: division bookmarks album (4 cards). */
export const V2: Story = {
  args: {
    id: 'b1-b6-DEPRECATED_GalleryV2_BookmarkedImages',
    ...album,
    children: cards('bookmark-card-image', NO_DIVISION, ['Division A', 'Division B', 'Division C', 'Division D']),
  },
};
