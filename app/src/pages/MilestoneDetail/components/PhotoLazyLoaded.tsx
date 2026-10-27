import { useEffect, useState } from 'react';
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

/** A photo that loads its signed URL, props only, with Connect2_LegacyShared Widgets.MultiResolutionImageLoader
    inside: the root "multi-resolution-image-loader" is "-loading" with the Loading placeholder (the static
    User_rectangle image) until an image of ImagesToLoad with a src loads; then the root is "-loaded" and the loaded
    image gets "multi-resolution-image-loader-loaded" (InitializeJS of the loader).
    OnReady: with LoadedPhotoURL "", GetCacheableSignedImageURL(Id, Type, Size) → LoadedPhotoURL.
    @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.PhotoLazyLoaded */
export function PhotoLazyLoaded({ id, inId, inType, inSize, getSignedImageURL, onImageClicked }: PhotoLazyLoadedProps) {
  const prefix = id.replace('$', '');
  const imgClass = photoImgClass(inType);
  const [loadedPhotoURL, setLoadedPhotoURL] = useState('');
  const [loaded, setLoaded] = useState(false);

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
      <OSBlock name="Widgets.MultiResolutionImageLoader" id={`${prefix}-$b1`}>
        <div
          className={`multi-resolution-image-loader multi-resolution-image-loader-${loaded ? 'loaded' : 'loading'}`}
          data-container=""
          id={`${prefix}-b1-Root`}
        >
          <div id={`${prefix}-b1-Loading`}>
            <img className={imgClass} src={osImage(LOADING_IMAGE)} alt="" />
          </div>
          <div id={`${prefix}-b1-ImagesToLoad`}>
            <img
              className={`${imgClass}${loaded ? ' multi-resolution-image-loader-loaded' : ''}`}
              src={loadedPhotoURL !== '' ? loadedPhotoURL : undefined}
              alt=""
              onLoad={(e) => {
                if (e.currentTarget.getAttribute('src')) setLoaded(true);
              }}
              onClick={onImageClicked}
            />
          </div>
        </div>
      </OSBlock>
    </OSBlock>
  );
}
