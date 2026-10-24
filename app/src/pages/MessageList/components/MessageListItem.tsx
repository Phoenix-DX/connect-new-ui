import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { Connect_Entity, ImageSize } from '@/pages/MessageList/staticEntities';
import { formatDateTime } from '@/lib/osDateTime';
import { cache_SignedImageURL_Get } from '@/lib/ubtConnectUtils/actions';

export interface MessageListItemProps {
  /** OutSystems instance id of the block (`…-Messages_List_Item_Private`). */
  id: string;
  /** Prefix of the widget ids inside the block (`…-b1-`). */
  prefix: string;
  title: string;
  sentFromName: string;
  /** OutSystems DateTime text. */
  messageDateTime: string;
  isUrgent: boolean;
  iconURL: string;
  userId: number;
  memberId: string;
}

/** Info line (Message_List_Item_Info): SentFromName + " · " when set, FormatDateTime(ddd dd/MM/yyyy), " ",
    ToLower(FormatDateTime(h:mm tt)). */
const infoText = (sentFromName: string, dateTime: string): string =>
  `${sentFromName !== '' ? `${sentFromName} · ` : ''}${formatDateTime(dateTime, 'ddd dd/MM/yyyy')} ${formatDateTime(
    dateTime,
    'h:mm tt',
  ).toLowerCase()}`;

/** One message row. OnReady: when IconURL is "" and UserId is set and no photo yet, IsFetchingUserPhoto, then
    Cache_SignedImageURL_Get(MemberId, Member, Small) → UserPhotoURL. Image: IconURL (external) / fetching placeholder /
    User_rectangle when no photo / the photo with the ubtlogo error placeholder. Urgent rows show the red "!" icon.
    @origin Connect2_LegacyShared.MyNotifications.MessageListItem */
export function MessageListItem({
  id,
  prefix,
  title,
  sentFromName,
  messageDateTime,
  isUrgent,
  iconURL,
  userId,
  memberId,
}: MessageListItemProps) {
  const [userPhotoURL, setUserPhotoURL] = useState('');
  // OnReady sets IsFetchingUserPhoto True before Cache_SignedImageURL_Get: the same condition, from the first render.
  const [isFetchingUserPhoto, setIsFetchingUserPhoto] = useState(() => iconURL === '' && userId !== 0);

  useEffect(() => {
    if (!(iconURL === '' && userId !== 0 && userPhotoURL === '')) return;
    let alive = true;
    void cache_SignedImageURL_Get(memberId, Connect_Entity.Member, ImageSize.Small).then((url) => {
      if (!alive) return;
      setUserPhotoURL(url);
      setIsFetchingUserPhoto(false);
    });
    return () => {
      alive = false;
    };
    // OnReady only (the block has no OnParametersChanged).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const image =
    iconURL !== '' ? (
      <img className="notification-list-icon-badge" data-image="" src={iconURL} />
    ) : isFetchingUserPhoto ? (
      <img
        className="notification-list-icon-badge"
        data-image=""
        id={`${prefix}Message_List_Item_Image_Fetching`}
        src={osImage('img/Connect2_LegacyShared.User_rectangle.png')}
      />
    ) : userPhotoURL === '' ? (
      <img
        className="notification-list-icon-badge"
        data-image=""
        id={`${prefix}Message_List_Item_Image`}
        src={osImage('img/Connect2_LegacyShared.User_rectangle.png')}
      />
    ) : (
      <img
        className="notification-list-icon-badge"
        data-error-placeholder-src={osImage('img/Connect2_LegacyShared.ubtlogo.png')}
        data-image=""
        id={`${prefix}Sending_User_Photo`}
        src={userPhotoURL}
      />
    );

  return (
    <OSBlock name="MyNotifications.MessageListItem" id={id}>
      <div
        className="display-flex full-width align-items-center"
        data-container=""
        id={`${prefix}Message_List_Item_Cont`}
      >
        <div
          className="width15 display-flex justify-content-center margin-right5"
          data-container=""
          id={`${prefix}Message_List_Item_Image_Cont`}
        >
          {image}
        </div>
        <div className="width75" data-container="" id={`${prefix}Message_List_Item_Text_Cont`}>
          <div className="bold text-ellipsis" data-container="" id={`${prefix}Message_List_Item_Title_Cont`}>
            <span data-expression="" id={`${prefix}Message_List_Item_Title`}>
              {title}
            </span>
          </div>
          <div
            className="font-size-0-75em text-neutral-6"
            data-container=""
            id={`${prefix}Message_List_Item_Info_Cont`}
          >
            <span data-expression="" id={`${prefix}Message_List_Item_Info`}>
              {infoText(sentFromName, messageDateTime)}
            </span>
          </div>
        </div>
        <div data-container="" id={`${prefix}Message_List_Item_Icon_Cont`} style={{ marginLeft: 0 }}>
          {isUrgent && (
            <div data-container="" style={{ textAlign: 'center', marginBottom: 5 }}>
              <i
                className="icon alert-text fa-33 fa fa-exclamation fa-1x"
                data-icon=""
                id={`${prefix}Message_List_Item_Icon`}
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: 50,
                  borderStyle: 'solid',
                  borderWidth: 2,
                  color: 'rgb(252, 0, 0)',
                  fontSize: 12,
                  height: 20,
                  padding: '3px 0px 0px',
                  width: 20,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </OSBlock>
  );
}
