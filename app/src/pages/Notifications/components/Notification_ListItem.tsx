/** @origin UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/lib/os-assets';
import { SanitizedHtml } from '@/components/ui/SanitizedHtml';
import { AvatarImage } from '@/components/ui/AvatarImage';
import { ColumnsThree } from '@/components/ui/ColumnsThree';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { getBackgroundColor_IsRead } from '@/lib/ubtConnectLibrary/actions';
import {
  UBT_AvatarSize,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { get_ElapsedTime_Notification } from './actions';

export interface Notification_ListItemProps {
  id: string;
  inIsRead?: boolean;
  /** IsIconURLDefined (live TST 2026-11-07): the AvatarImage of In_AvatarImage_Left when True, else the placeholder
      FetchingImage. */
  isIconURLDefined?: boolean;
  inDescription?: string;
  inNotificationDate?: string;
  inAvatarImageLeftURL?: string;
  /** The placeholder FetchingImage. */
  fetchingImage?: ReactNode;
}

/** UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem (live TST 2026-11-07, Notification_ListItem.mvc.js view
    :218-540): CustomContainer (MainContainerClass "ubt-notification-item", background GetBackgroundColor_IsRead,
    padding base) > Columns_Three (expand middle, small, centred). Left: the empty container Notification_Visual, then
    If IsIconURLDefined: AvatarImage 52 (In_IsDoubleAvatar False here), else the placeholder FetchingImage. Middle: the
    description through SanitizedHtml (ResetWhitelist) and the elapsed time. Right: the unread dot when not read. No
    events. */
export function Notification_ListItem({
  id,
  inIsRead = false,
  isIconURLDefined = false,
  inDescription = '',
  inNotificationDate = '',
  inAvatarImageLeftURL = '',
  fetchingImage,
}: Notification_ListItemProps) {
  const p = id.replace(/-NotificationItem$/, '');
  return (
    <OSBlock name="ConnectCorePatterns.Notification_ListItem" id={id}>
      <CustomContainer
        id={`${p}-b5-$b1`}
        extendedClasses="ubt-notification-item"
        options={{
          Background: { BackgroundColor: getBackgroundColor_IsRead(inIsRead) },
          PaddingSize: { GeneralSizeId: UBT_Size.Base },
          BorderOptions: {},
        }}
      >
        <ColumnsThree
          id={`${p}-b5-$b2`}
          extendedClasses="ubt-notification-item__columns"
          columnOptions={{
            ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
            SpacingSize: UBT_Size.Small,
            VerticalAlign: UBT_VerticalAlign.Center,
          }}
          left={
            <>
              <div data-container="" id={`${p}-b5-Notification_Visual`} />
              {isIconURLDefined ? (
                // In_IsDoubleAvatar is False in the only caller (NotificationsList): the AvatarDouble branch is not used.
                <AvatarImage
                  id={`${p}-b5-$b4`}
                  inAvatarImage={{ URL: inAvatarImageLeftURL }}
                  inSizeId={UBT_AvatarSize.Base_52}
                />
              ) : (
                <div id={`${p}-b5-FetchingImage`}>{fetchingImage}</div>
              )}
            </>
          }
          middle={
            <>
              <div data-container="" id={`${p}-b5-Notification_Description`}>
                <CustomContainer id={`${p}-b5-$b5`} options={{ TextOptions: { FontSize: UBT_FontSize.ExtraSmall } }}>
                  <SanitizedHtml id={`${p}-b5-$b6`} resetWhitelist value={inDescription} />
                </CustomContainer>
              </div>
              <div data-container="" id={`${p}-b5-Notification_Elapsed`}>
                <CustomContainer id={`${p}-b5-$b7`} options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
                  <CustomText
                    id={`${p}-b5-$b8`}
                    inText={get_ElapsedTime_Notification(inNotificationDate)}
                    inTextOptions={{
                      Color: UBT_Color.Neutral7,
                      FontSize: UBT_FontSize.DoubleExtraSmall,
                      FontWeight: UBT_FontWeight.SemiBold,
                    }}
                  />
                </CustomContainer>
              </div>
            </>
          }
          right={
            inIsRead ? null : (
              <div className="notification-unread-dot" data-container="" style={{ textAlign: 'right' }}>
                <img alt="" data-image="" src={osImage('img/UBTConnectLibrary.NotificationDot.svg')} />
              </div>
            )
          }
        />
      </CustomContainer>
    </OSBlock>
  );
}
