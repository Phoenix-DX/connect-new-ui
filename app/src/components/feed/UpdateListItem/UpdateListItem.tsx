/** @origin UBTConnectLibrary.ConnectCorePatterns.Update_ListItem */
// @os-block UBTConnectLibrary.ConnectCorePatterns.Update_ListItem
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AvatarDouble } from '@/components/ui/AvatarDouble';
import { AvatarImage } from '@/components/ui/AvatarImage';
import { ColumnsThree } from '@/components/ui/ColumnsThree';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { ContextMenu } from '@/components/ui/ContextMenu';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import {
  formatConnectDate_WithYear,
  getBackgroundColor_IsRead,
  get_BackgroundColor_Avatar_UpdateItem,
  get_BackgroundColor_Tag_UpdateItem,
  get_FontColor_Avatar_UpdateItem,
  get_FontColor_Tag_UpdateItem,
} from '@/lib/ubtConnectLibrary/actions';
import {
  Connect_UpdateTypeId,
  UBT_AvatarSize,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_IconSize,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/lib/ubtConnectLibrary/staticEntities';
import type {
  AvatarImage as AvatarImageRecord,
  ContextMenuOptions,
  SpacingOptions,
  TextGenderIdentifier,
} from '@/lib/ubtConnectLibrary/structures';
import { TagContent } from '@/components/ui/TagContent';

export interface UpdateListItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Connect_UpdateTypeId identifier. */
  inTypeUpdateFeedItem?: string;
  inAvatarImageURL?: string;
  showImage?: boolean;
  inInitialsList?: TextGenderIdentifier[];
  inName?: string;
  /** Date ("yyyy-MM-dd"). */
  inDate?: string;
  inLocation?: string;
  inIsRead?: boolean;
  isEnabled?: boolean;
  hasBorderBottom?: boolean;
  inParentsNames?: string;
  inBirthType?: string;
  paddingSizeId?: SpacingOptions;
  ignoreReadBackground?: boolean;
  inHasShare?: boolean;
  /** Event OnClick. */
  onOnClick?: () => void;
  onEventSendGift?: () => void;
  onEventMarkAsRead?: () => void;
  onEventShare?: () => void;
  onEventMarkAsUnread?: () => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-update-item';

/** Update (birth, marriage…) row of the Updates lists (p:UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js
    view): a CustomContainer (unread class and background, bottom border) holding, with ShowImage, the avatar column
    (Columns_Three) or, without, two columns: name, location (- parents), type tag and date; the context menu when
    enabled. No server action. */
export function UpdateListItem({
  id,
  inTypeUpdateFeedItem = '',
  inAvatarImageURL = '',
  showImage = true,
  inInitialsList = [],
  inName = '',
  inDate = '1900-01-01',
  inLocation = '',
  inIsRead = false,
  isEnabled = true,
  hasBorderBottom = true,
  inParentsNames = '',
  inBirthType = '',
  paddingSizeId = {},
  ignoreReadBackground = false,
  inHasShare = false,
  onOnClick,
  onEventSendGift,
  onEventMarkAsRead,
  onEventShare,
  onEventMarkAsUnread,
}: UpdateListItemProps) {
  const isTaken = inTypeUpdateFeedItem === Connect_UpdateTypeId.Taken;
  const avatar = (item: TextGenderIdentifier | undefined): AvatarImageRecord => ({
    FallbackOptions: {
      Initials: item?.Initials ?? '',
      BackgroundColor: get_BackgroundColor_Avatar_UpdateItem(inTypeUpdateFeedItem, item?.Gender ?? ''),
      FontColor: get_FontColor_Avatar_UpdateItem(inTypeUpdateFeedItem, item?.Gender ?? ''),
    },
  });
  const name = (
    <div data-container="">
      <CustomText inText={inName} inTextOptions={{ FontWeight: UBT_FontWeight.SemiBold, IsItalic: isTaken }} />
    </div>
  );
  const location = (
    <div data-container="">
      <IconText
        text={inLocation + (inParentsNames !== '' ? ` - ${inParentsNames}` : '')}
        textOptions={{
          Color: UBT_Color.Neutral7,
          FontSize: UBT_FontSize.DoubleExtraSmall,
          FontWeight: UBT_FontWeight.SemiBold,
        }}
        extendedClasses="text-neutral-7 font-size-xxs"
      >
        <Icon inColorId={UBT_Color.Neutral8} inSizeId={UBT_IconSize.Small_12} inIconId={UBT_Icons.LocationOnFill} />
      </IconText>
    </div>
  );
  const typeAndDate = (
    <div data-container="">
      <ColumnsTwo
        columnOptions={{
          ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst,
          SpacingSize: UBT_Size.ExtraSmall,
          VerticalAlign: UBT_VerticalAlign.Center,
        }}
        left={
          <TagContent
            text={
              inTypeUpdateFeedItem === Connect_UpdateTypeId.Birth && inBirthType !== ''
                ? inBirthType
                : inTypeUpdateFeedItem
            }
            textColorId={get_FontColor_Tag_UpdateItem(inTypeUpdateFeedItem, inInitialsList)}
            backgroundColorId={get_BackgroundColor_Tag_UpdateItem(inTypeUpdateFeedItem, inInitialsList)}
          />
        }
        right={
          <CustomText
            inTextOptions={{
              Color: UBT_Color.Neutral8,
              FontSize: UBT_FontSize.ExtraSmall,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            inText={formatConnectDate_WithYear(inDate).LongLabel}
          />
        }
      />
    </div>
  );
  const contextMenu = (options: ContextMenuOptions): ReactNode =>
    isEnabled ? (
      <ContextMenu
        inContextMenuOptions={options}
        onEventMarkAsUnread={onEventMarkAsUnread}
        onEventMarkAsRead={onEventMarkAsRead}
        onEventSendGift={onEventSendGift}
        onEventShare={onEventShare}
      />
    ) : null;
  const first = inInitialsList[0];
  const second = inInitialsList[1];

  return (
    <OSBlock name="ConnectCorePatterns.Update_ListItem" id={id}>
      <CustomContainer
        extendedClasses={MAIN_CONTAINER_CLASS + (inIsRead ? '' : ` ${MAIN_CONTAINER_CLASS}--unread`)}
        options={{
          Background: { BackgroundColor: getBackgroundColor_IsRead(inIsRead || ignoreReadBackground) },
          PaddingSize: paddingSizeId,
          BorderOptions: {
            Color: UBT_Color.Neutral3,
            Size: { BottomSizeId: hasBorderBottom ? UBT_Size.Small : '' },
          },
        }}
        onClicked={onOnClick}
      >
        {showImage ? (
          <ColumnsThree
            columnOptions={{
              ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
              SpacingSize: UBT_Size.Small,
              VerticalAlign: UBT_VerticalAlign.Center,
            }}
            left={
              <div data-container="">
                {inTypeUpdateFeedItem === Connect_UpdateTypeId.Birth && inInitialsList.length > 1 ? (
                  <AvatarDouble
                    inSizeId={UBT_AvatarSize.Large_65}
                    inFirstAvatarImage={avatar(first)}
                    inSecondAvatarImage={avatar(second)}
                  />
                ) : inAvatarImageURL !== '' ? (
                  <AvatarImage inSizeId={UBT_AvatarSize.Large_65} inAvatarImage={{ URL: inAvatarImageURL }} />
                ) : (
                  <AvatarImage inAvatarImage={avatar(first)} inSizeId={UBT_AvatarSize.Large_65} />
                )}
              </div>
            }
            middle={
              <>
                {name}
                {location}
                {typeAndDate}
              </>
            }
            right={contextMenu({
              HasSendGift: false,
              HasMarkAsRead: !inIsRead,
              HasMarkAsUnread: inIsRead,
              HasShare: inHasShare,
              Edit: { HasEdit: false },
            })}
          />
        ) : (
          <ColumnsTwo
            columnOptions={{
              ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
              SpacingSize: UBT_Size.Small,
              VerticalAlign: UBT_VerticalAlign.Center,
            }}
            left={
              <>
                {name}
                {location}
                {typeAndDate}
              </>
            }
            right={contextMenu({ HasMarkAsRead: !inIsRead, HasMarkAsUnread: inIsRead, HasShare: inHasShare })}
          />
        )}
      </CustomContainer>
    </OSBlock>
  );
}
