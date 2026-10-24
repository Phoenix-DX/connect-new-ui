import type { LazyImageItem } from '@/api/household';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { formatClasses, getClasses_AvatarSize } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_ImageSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';

export interface UBT_LazyImage_ListProps {
  id?: string;
  items?: LazyImageItem[];
  /** ImageSize.Height (a UBT_ImageSize identifier). */
  imageSizeHeight?: string;
  invertOrder?: boolean;
  /** MaxLimit (default 5). */
  maxLimit?: number;
}

/** LazyImageInteger: one item, or the "+N" counter (ExtraNumber > 0). */
interface LocalItem {
  lazyImage: LazyImageItem;
  extraNumber: number;
}

const MAIN_CONTAINER_CLASS = 'ubt-avatar-image-list';

/** RefreshList (controller): with MaxLimit > 0 and more Items than MaxLimit, the first MaxLimit items and a counter
    record (ExtraNumber = Items.Length - MaxLimit, HitLimit = True); otherwise LocalItems = Items. Run by OnInitialize
    (not restored from cache) and OnParametersChanged, so it is derived from the inputs here. */
function refreshList(items: LazyImageItem[], maxLimit: number): { localItems: LocalItem[]; hitLimit: boolean } {
  if (maxLimit > 0 && items.length > maxLimit) {
    const localItems = items.slice(0, maxLimit).map((lazyImage) => ({ lazyImage, extraNumber: 0 }));
    localItems.push({
      lazyImage: { imageURL: '', entityId: '', entityType: '' },
      extraNumber: items.length - maxLimit,
    });
    return { localItems, hitLimit: true };
  }
  return { localItems: items.map((lazyImage) => ({ lazyImage, extraNumber: 0 })), hitLimit: false };
}

/** A list of lazy images: a List ("list list-group " + FormatClasses(MainContainerClass,
    GetClasses_AvatarSize(ImageSize.Height)), virtualization disabled) of OSInline containers (width auto;
    "z-index: Length - Row" when InvertOrder; the last one gets "<MainContainerClass>__counter" when HitLimit) holding a
    UBT_LazyImage (Height of ImageSize, width Square), or the AvatarImage "+N" counter when ExtraNumber > 0 (not
    captured).
    @origin UBTConnect_Utils.CW_Image.UBT_LazyImage_List */
export function UBT_LazyImage_List({
  id,
  items = [],
  imageSizeHeight = '',
  invertOrder = false,
  maxLimit = 5,
}: UBT_LazyImage_ListProps) {
  const { localItems, hitLimit } = refreshList(items, maxLimit);
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="CW_Image.UBT_LazyImage_List" id={id}>
      <OSList
        className={`list list-group ${formatClasses(MAIN_CONTAINER_CLASS, getClasses_AvatarSize(imageSizeHeight))}`}
        animateItems
        disableVirtualization
        source={localItems}
        keyOf={(item, i) => `${item.lazyImage.entityId}_${String(i)}`}
      >
        {(item, i) => (
          <div
            className={`position-relative${hitLimit && i === localItems.length - 1 ? ` ${MAIN_CONTAINER_CLASS}__counter` : ''} OSInline`}
            data-container=""
            style={invertOrder ? { width: 'auto', zIndex: localItems.length - i } : { width: 'auto' }}
          >
            {item.extraNumber > 0 ? (
              <NotCaptured name="UBT_LazyImage_List counter (AvatarImage)">{`+${String(item.extraNumber)}`}</NotCaptured>
            ) : (
              <EntityLazyImage
                id={`${b}-l1-345_${String(i)}-$b2`}
                imageURL={item.lazyImage.imageURL}
                entityType={item.lazyImage.entityType}
                imageSize={{ Height: imageSizeHeight, Width: UBT_ImageSize.Square }}
                entityId={item.lazyImage.entityId}
              />
            )}
          </div>
        )}
      </OSList>
    </OSBlock>
  );
}
