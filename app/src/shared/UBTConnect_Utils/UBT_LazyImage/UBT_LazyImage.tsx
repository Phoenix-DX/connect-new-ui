// @os-block UBTConnect_Utils.CW_Image.UBT_LazyImage
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LazyImage } from '../../UBTConnectLibrary/LazyImage';
import { SkeletonSection } from '../../UBTConnectLibrary/SkeletonSection';
import { cache_SignedImageURL_Get } from '../lib/actions';
import { Connect_Entity } from '../lib/staticEntities';
import { onInitialize } from './onInitialize';
import type { LazyImageSize } from './types';

export interface UBT_LazyImageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  imageURL?: string;
  entityId?: string;
  /** Connect_Entity identifier. */
  entityType?: string;
  imageSize?: LazyImageSize;
  extendedClass?: string;
  /** UBT_Shape identifier. */
  inBorderRadius?: string;
  inHighRes?: boolean;
  hasErrorMessage?: boolean;
}

export function UBT_LazyImage({
  id,
  imageURL = '',
  entityId = '',
  entityType = '',
  imageSize = {},
  extendedClass = '',
  inBorderRadius = '',
  inHighRes = false,
  hasErrorMessage = false,
}: UBT_LazyImageProps) {
  /* OnInitialize (once, and again from OnParametersChanged when EntityId changes), then OnReady (:719-785):
     SetLocalEntityId; LocalImageURL = ImageURL; without a URL, a valid entity (EntityId not "" / "0", a type) and an
     image type get their signed URL (isFetched = False, Cache_SignedImageURL_Get: memory cache + GetSignedImagesInBulk)
     while the skeleton shows; then isFetched = True. Its synchronous part is applied before the first paint. */
  const parametersKey = JSON.stringify([
    imageURL,
    entityId,
    entityType,
    imageSize,
    extendedClass,
    inBorderRadius,
    inHighRes,
    hasErrorMessage,
  ]);
  const readyStart = (locals: ReturnType<typeof onInitialize>) => {
    const needsSignedUrl =
      imageURL === '' && entityId !== '' && entityId !== '0' && entityType !== '' && locals.imageType !== '';
    return { localImageURL: imageURL, isFetched: !needsSignedUrl };
  };
  const [view, setView] = useState(() => {
    const locals = onInitialize(entityType, imageSize, hasErrorMessage, inHighRes, inBorderRadius);
    return { parametersKey, localEntityId: entityId, locals, ...readyStart(locals) };
  });
  /* OnParametersChanged (:812-845), on any input change: when EntityId <> LocalEntityId, LocalImageURL = "",
     isFetched = False and OnInitialize; then always OnReady with the new inputs. */
  let current = view;
  if (view.parametersKey !== parametersKey) {
    const locals =
      view.localEntityId !== entityId
        ? onInitialize(entityType, imageSize, hasErrorMessage, inHighRes, inBorderRadius)
        : view.locals;
    current = { parametersKey, localEntityId: entityId, locals, ...readyStart(locals) };
    setView(current);
  }
  const { locals, localImageURL, isFetched } = current;
  /* OnReady's server part. A failed call leaves isFetched False (the original's OnReady stops at the exception); an
     answer for inputs that changed since is dropped (the newer OnReady owns LocalImageURL). */
  const fetchesSignedUrl = !isFetched;
  useEffect(() => {
    if (!fetchesSignedUrl) return undefined;
    let alive = true;
    cache_SignedImageURL_Get(entityId, locals.imageType, locals.imageSizeId)
      .then((url) => {
        if (!alive) return;
        setView((v) => (v.parametersKey === parametersKey ? { ...v, localImageURL: url, isFetched: true } : v));
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
    // One run per OnReady: the inputs it reads are part of parametersKey.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parametersKey]);
  const isMember = entityType === Connect_Entity.Member;
  return (
    <OSBlock name="CW_Image.UBT_LazyImage" id={id}>
      <SkeletonSection inIsLoading={!isFetched}>
        <LazyImage
          imageURL={localImageURL}
          fallbackPadding={locals.fallbackPadding}
          inImageSize={{ Height: imageSize.Height ?? '', Width: imageSize.Width ?? '' }}
          hasErrorMessage={hasErrorMessage}
          inBorderOptions={{
            BorderRadius: locals.borderRadius,
            BorderColorId: locals.borderColorId,
            BorderSizeId: locals.borderSizeId,
          }}
          fallbackOptions={locals.fallbackOptions}
          extendedClass={
            isMember ? `inline-block ubt-avatar-image${extendedClass !== '' ? ` ${extendedClass}` : ''}` : extendedClass
          }
        />
      </SkeletonSection>
    </OSBlock>
  );
}
