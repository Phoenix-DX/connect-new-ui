/** @origin Connect2_LegacyShared.MyNotifications.MessageImage */
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { osImage } from '@/lib/os-assets';
import { formatClasses, getClasses_AvatarSize } from '@/lib/ubtConnectLibrary/actions';
import { UBT_AvatarSize, UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { cache_SignedImageURL_Get } from '@/lib/ubtConnectUtils/actions';
import { Connect_Entity, ImageSize } from '@/lib/ubtConnectUtils/staticEntities';

/** MainContainerClass of MessageImage and of MyNotifications.AvatarImage (local variable default, both blocks). */
const MAIN_CONTAINER_CLASS = 'ubt-avatar-image';

/** The container options of both blocks: border small neutral-5, radius In_BorderRadius, skeleton element. */
const avatarOptions = (inBorderRadius: string) => ({
  BorderOptions: {
    Color: UBT_Color.Neutral5,
    Size: { GeneralSizeId: UBT_Size.Small },
    Radius: { GeneralSizeId: inBorderRadius },
  },
  IsSkeletonElement: true,
});

/** FormatClasses(FormatClasses(MainContainerClass, "inline-block"), GetClasses_AvatarSize(In_SizeId)). */
const avatarClasses = (inSizeId: string) =>
  formatClasses(formatClasses(MAIN_CONTAINER_CLASS, 'inline-block'), getClasses_AvatarSize(inSizeId));

interface MyNotificationsAvatarImageProps {
  id: string;
  url: string;
  inSizeId: string;
  inBorderRadius?: string;
}

/** Connect2_LegacyShared.MyNotifications.AvatarImage (live TST 2026-11-07, MyNotifications.AvatarImage.mvc.js view):
    URL <> "": CustomContainer (the avatar classes and options) > the external Image of URL. MessageImage, its only
    caller here, renders it only when UserPhotoURL <> "", so the fallback branch (URL = "": initials, SVG or icon) is not
    reached and is not ported. */
function MyNotificationsAvatarImage({
  id,
  url,
  inSizeId,
  inBorderRadius = UBT_Shape.Circle,
}: MyNotificationsAvatarImageProps) {
  const p = id.replace('$', '');
  return (
    <OSBlock name="MyNotifications.AvatarImage" id={id}>
      <CustomContainer
        id={`${p}-$b1`}
        extendedClasses={avatarClasses(inSizeId)}
        options={avatarOptions(inBorderRadius)}
      >
        <img data-image="" src={url} />
      </CustomContainer>
    </OSBlock>
  );
}

interface MessageImageProps {
  /** OutSystems instance id of the block (`…-$b6`). */
  id: string;
  /** IconURL: the notification's ProfileIconURL. */
  iconURL: string;
  /** UserId: the notification's CreatedByUserId (0 = the null identifier). */
  userId: number;
  /** MemberId: the notification's CreatedByMemberId. */
  memberId: string;
  /** In_SizeId (UBT_AvatarSize). */
  inSizeId: string;
  /** In_BorderRadius (UBT_Shape); default Circle. */
  inBorderRadius?: string;
}

/** Connect2_LegacyShared.MyNotifications.MessageImage (live TST 2026-11-07, MyNotifications.MessageImage.mvc.js view
    :209-330, OnReady :351-400). OnReady: when IconURL is "", UserId is not null and there is no photo yet,
    IsFetchingUserPhoto True, then Cache_SignedImageURL_Get(TextToInteger(MemberId), Member, Small) → UserPhotoURL and
    IsFetchingUserPhoto False. View: fetching → the static image User_rectangle "Message_List_Item_Image_Fetching";
    no photo → the avatar container with User_rectangle "Message_List_Item_Image"; a photo →
    MyNotifications.AvatarImage of UserPhotoURL (size Base_52). */
export function MessageImage({
  id,
  iconURL,
  userId,
  memberId,
  inSizeId,
  inBorderRadius = UBT_Shape.Circle,
}: MessageImageProps) {
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

  const p = id.replace('$', '');
  return (
    <OSBlock name="MyNotifications.MessageImage" id={id}>
      {isFetchingUserPhoto ? (
        <img
          className="notification-list-icon-badge"
          data-image=""
          id={`${p}-Message_List_Item_Image_Fetching`}
          src={osImage('img/Connect2_LegacyShared.User_rectangle.png')}
        />
      ) : userPhotoURL === '' ? (
        <CustomContainer
          id={`${p}-$b1`}
          extendedClasses={avatarClasses(inSizeId)}
          options={avatarOptions(inBorderRadius)}
        >
          <img
            className="notification-list-icon-badge"
            data-image=""
            id={`${p}-Message_List_Item_Image`}
            src={osImage('img/Connect2_LegacyShared.User_rectangle.png')}
          />
        </CustomContainer>
      ) : (
        // MessageImage passes In_SizeId Base_52 to MyNotifications.AvatarImage whatever its own In_SizeId (view :308).
        <MyNotificationsAvatarImage id={`${p}-$b2`} url={userPhotoURL} inSizeId={UBT_AvatarSize.Base_52} />
      )}
    </OSBlock>
  );
}
