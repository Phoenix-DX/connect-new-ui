import { useEffect, useState } from 'react';
import { MultiResolutionImageLoader } from '@/components/ui/MultiResolutionImageLoader';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DirectoryAPIFilter } from '@/lib/orbit/staticEntities';
import { osImage } from '@/lib/os-assets';

/** The static image of the Loading placeholder (Connect2_LegacyShared User_rectangle). */
const LOADING_IMAGE = 'img/Connect2_LegacyShared.User_rectangle.png';

interface PhotoLazyLoadedProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** Id (Long Integer as text): the entity of the photo. */
  inId: string;
  /** Type: DirectoryAPIFilter of the entity. */
  inType: string;
  /** Size: ImageSigningSize. */
  inSize: string;
  /** GetCacheableSignedImageURL (Connect2_LegacyShared). */
  getSignedImageURL: (entityId: string, type: string, size: string) => Promise<string>;
  /** Event ImageClicked. */
  onImageClicked?: () => void;
}

/** ImgClass of OnInitialize: "member-info-img" for a member, "host-information-image" for a household, else "". */
const photoImgClass = (type: string): string =>
  type === DirectoryAPIFilter.Member
    ? 'member-info-img'
    : type === DirectoryAPIFilter.Household
      ? 'host-information-image'
      : '';

/** A photo that loads its signed URL, props only, with the shared Connect2_LegacyShared
    Widgets.MultiResolutionImageLoader inside (L2): Loading = the static User_rectangle image, ImagesToLoad = the
    LoadedPhotoURL image (PhotoLazyLoaded.mvc.js:206-237, no error placeholder, so HandleImageLoadError gives it the
    default User_rectangle image).
    OnReady: with LoadedPhotoURL "", GetCacheableSignedImageURL(Id, Type, Size) → LoadedPhotoURL.
    @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.PhotoLazyLoaded */
export function PhotoLazyLoaded({ id, inId, inType, inSize, getSignedImageURL, onImageClicked }: PhotoLazyLoadedProps) {
  const prefix = id.replace('$', '');
  const imgClass = photoImgClass(inType);
  const [loadedPhotoURL, setLoadedPhotoURL] = useState('');

  useEffect(() => {
    let alive = true;
    void getSignedImageURL(inId, inType, inSize).then((url) => {
      if (alive) setLoadedPhotoURL(url);
    });
    return () => {
      alive = false;
    };
  }, [getSignedImageURL, inId, inType, inSize]);

  return (
    <OSBlock name="Orbit_Generic_Blocks.PhotoLazyLoaded" id={id}>
      <MultiResolutionImageLoader
        id={`${prefix}-$b1`}
        loading={<img className={imgClass} src={osImage(LOADING_IMAGE)} alt="" />}
        imagesToLoad={
          <img
            className={imgClass}
            src={loadedPhotoURL !== '' ? loadedPhotoURL : undefined}
            alt=""
            onClick={onImageClicked}
          />
        }
      />
    </OSBlock>
  );
}
