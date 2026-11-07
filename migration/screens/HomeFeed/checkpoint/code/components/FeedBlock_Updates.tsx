import type { UpdateItem } from '@/api/update';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { UBT_FontSize, UBT_FontWeight, UBT_Icons2, UBT_IconsSize } from '@/lib/ubtConnect/staticEntities';
import { UBT_Color_BlueDark } from '@/pages/HomeFeed/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { UpdateListItem } from '@/components/feed/UpdateListItem';

export interface FeedBlock_UpdatesProps {
  /** Block instance id (HomeFeed: `$b9`). */
  id: string;
  /** The update items: the loading rows until FetchUpdates answers. */
  items: UpdateItem[];
  /** FetchUpdates has data: the list keys of the fetched rows. */
  hasData: boolean;
  /** The skeleton. */
  isLoading: boolean;
  /** The list shows `list-error`. */
  hasFetchError: boolean;
  /** Event_ListItemOnClick. */
  onItemClick: (item: UpdateItem) => void;
  /** The share action of the context menu. */
  onShare: (item: UpdateItem) => void;
  /** The send gift action of the context menu. */
  onSendGift: () => void;
  /** The mark as read action of the context menu. */
  onMarkAsRead: (item: UpdateItem) => void;
  /** The mark as unread action of the context menu. */
  onMarkAsUnread: (item: UpdateItem) => void;
  /** The subscription upgrade banner of an item without access. */
  onClickUpgrade: () => void;
}

/** The latest update items of the home feed in a skeleton: each item in a card (cyan when unread) with Update_ListItem
    and its context menu. The flows are in useFeedUpdates. Captured dom/default.html (data) and dom/offline.html (the
    fetch failed: `list-error` and the loading rows).
    @origin UBTConnect.Home.FeedBlock_Updates */
export function FeedBlock_Updates({
  id,
  items,
  hasData,
  isLoading,
  hasFetchError,
  onItemClick,
  onShare,
  onSendGift,
  onMarkAsRead,
  onMarkAsUnread,
  onClickUpgrade,
}: FeedBlock_UpdatesProps) {
  const scope = id.replace('$', '');
  const listKey = hasData ? '89' : '58'; // the runtime list keys of the capture (data / loading rows)
  return (
    <OSBlock name="Home.FeedBlock_Updates" id={id}>
      <Skeleton id={`${scope}-$b1`} isLoading={isLoading}>
        <div
          className={`list list-group home-page--update-list${hasFetchError ? ' list-error' : ''} OSFillParent`}
          data-list=""
          style={{ position: 'relative' }}
        >
          {items.map((item, i) => {
            const itemScope = `${scope}-l1-${listKey}_${i}`;
            return (
              <CustomContainer
                key={itemScope}
                id={`${itemScope}-$b2`}
                extendedClasses="overflow-hidden"
                options={{
                  Background: { BackgroundColor: item.isRead ? undefined : UBT_Color.CyanLightest },
                  PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
                  MarginSize: { VerticalSizeId: UBT_Size.Small },
                  BorderOptions: {
                    Color: UBT_Color.Neutral3,
                    Size: { GeneralSizeId: UBT_Size.Small },
                    Radius: { GeneralSizeId: UBT_Shape.Large },
                  },
                }}
              >
                <UpdateListItem
                  id={`${itemScope}-$b3`}
                  inDate={item.date}
                  isEnabled={item.hasAccess}
                  showImage={false}
                  inBirthType={item.birthType}
                  inInitialsList={[{ Gender: item.genderId }]}
                  inIsRead={item.isRead}
                  inParentsNames={item.parentsNames}
                  hasBorderBottom={!item.hasAccess}
                  paddingSizeId={{ BottomSizeId: item.hasAccess ? undefined : UBT_Size.Small }}
                  inHasShare={item.hasShare}
                  ignoreReadBackground
                  inName={item.name}
                  inTypeUpdateFeedItem={item.updateItemTypeId}
                  inLocation={item.locationString}
                  onOnClick={() => {
                    onItemClick(item);
                  }}
                  onEventShare={() => {
                    onShare(item);
                  }}
                  onEventSendGift={onSendGift}
                  onEventMarkAsRead={() => {
                    onMarkAsRead(item);
                  }}
                  onEventMarkAsUnread={() => {
                    onMarkAsUnread(item);
                  }}
                />
                {/* #DoesntHaveAccess (compiled view FeedBlock_Updates.mvc.js:388-537; not captured, Home Q2 (a)). */}
                {!item.hasAccess && (
                  <CustomContainer
                    options={{
                      Background: { BackgroundColor: UBT_Color.Neutral2 },
                      PaddingSize: { HorizontalSizeId: UBT_Size.Small },
                      MarginSize: { VerticalSizeId: UBT_Size.Small },
                      BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Large } },
                    }}
                    onClicked={onClickUpgrade}
                  >
                    <div data-container="" style={{ textAlign: 'center' }}>
                      <div className="display-inline-block" data-container="" style={{ textAlign: 'center' }}>
                        <IconText
                          textOptions={{
                            Color: UBT_Color_BlueDark,
                            FontSize: UBT_FontSize.ExtraSmall,
                            FontWeight: UBT_FontWeight.SemiBold,
                          }}
                          text="Subscription upgrade required"
                        >
                          <Icon
                            inColorId={UBT_Color_BlueDark}
                            inSizeId={UBT_IconsSize.NonStandard_16}
                            inIconId={UBT_Icons2.Lock}
                          />
                        </IconText>
                      </div>
                    </div>
                  </CustomContainer>
                )}
                <div data-container="" />
              </CustomContainer>
            );
          })}
        </div>
      </Skeleton>
    </OSBlock>
  );
}
