import type { Meta, StoryObj } from '@storybook/react-vite';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { TagToggle } from '@/shared/UBTConnectLibrary/TagToggle';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { OSList } from './OSList';
import { OSListItem, OSListItemAction } from './OSListItem';

const meta = { title: 'Components/OSList' } satisfies Meta;
export default meta;
type Story = StoryObj;

/** Neutral records: the List only needs an id per row. */
const rows = (count: number) => Array.from({ length: count }, (_, i) => ({ id: `row-${String(i + 1)}` }));

/** HomeFeed default: FeedBlock_Services list of service items (FeedBlock_Services.mvc.js:491, animateItems false,
    disable-virtualization "True"), six SkeletonSection rows. */
export const V1: Story = {
  render: () => (
    <OSList
      source={rows(6)}
      keyOf={(r) => r.id}
      className="list list-group ubt-services-carousel__list-items"
      animateItems={false}
      disableVirtualization
    >
      {() => <SkeletonSection />}
    </OSList>
  ),
};

/** HomeFeed default: FeedBlock_Updates list (FeedBlock_Updates.mvc.js:172, animateItems true, virtualized, the
    viewer's `position: relative`), three CustomContainer rows. */
export const V2: Story = {
  render: () => (
    <OSList
      source={rows(3)}
      keyOf={(r) => r.id}
      className="list list-group home-page--update-list"
      animateItems
      positionRelative
    >
      {() => <CustomContainer />}
    </OSList>
  ),
};

/** Search default: HorizontalTagList (HorizontalTagList.mvc.js:219, animateItems true, disable-virtualization "True"),
    four TagToggle rows. */
export const V3: Story = {
  render: () => (
    <OSList
      source={rows(4)}
      keyOf={(r) => r.id}
      className="list list-group list-horizontal--gap-xs ubt-tag-list padding-x-base"
      animateItems
      disableVirtualization
    >
      {() => <TagToggle />}
    </OSList>
  ),
};

/** Services default: FavouriteList (Services.mvc.js:309, named "FavouriteList", virtualized; `data-deny-from` written
    by the SortableList script), six CustomContainer rows. */
export const V4: Story = {
  render: () => (
    <OSList
      source={rows(6)}
      keyOf={(r) => r.id}
      className="list list-group"
      animateItems
      positionRelative
      id="FavouriteList"
      attributes={{ 'data-deny-from': '' }}
    >
      {() => <CustomContainer />}
    </OSList>
  ),
};

/** MessageList default: Messages_List of MessageListBlock (MessageListBlock.mvc.js:217-384, animateItems false,
    virtualization thresholds 1000), 19 ListItem rows inside their visibility Container, 16 unread then 3 read. */
export const V5: Story = {
  render: () => (
    <OSList
      source={rows(19).map((r, i) => ({ ...r, isRead: i >= 16 }))}
      keyOf={(r) => r.id}
      className="list list-group"
      animateItems={false}
      positionRelative
      id="b1-b7-Messages_List"
    >
      {(r, i) => (
        <div data-container="">
          <OSListItem
            id={`b1-b7-l1-36_${String(i)}-Messages_List_Item`}
            className={`list-item${r.isRead ? '' : ' background-blue-lightest'}`}
            triggerActionOnFullSwipeLeft
            triggerActionOnFullSwipeRight
            leftActions={
              <OSListItemAction className="list-item-action" onClick={() => undefined}>
                Clear
              </OSListItemAction>
            }
            rightActions={
              <OSListItemAction className="list-item-action" visible={!r.isRead} onClick={() => undefined}>
                Mark as Read
              </OSListItemAction>
            }
          >
            <PendingBlock name="MyNotifications.MessageListItem" />
          </OSListItem>
        </div>
      )}
    </OSList>
  ),
};
