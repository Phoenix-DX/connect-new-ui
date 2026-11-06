import { OSBlock } from '@/components/ui/os/OSBlock';

export interface NC_Result_Item__Image__SkeletonProps {
  /** OutSystems instance id of the block. */
  id: string;
  inIsRoundImage?: boolean;
  /** In_ImageHeight (default 40). */
  inImageHeight?: number;
  /** In_ResultItemVisualWidth (default 40). */
  inResultItemVisualWidth?: number;
  customClass?: string;
  /** In_BorderRadius (default 0). */
  inBorderRadius?: number;
  inIsReverseImageAndContent?: boolean;
}

/** Result_Item `display-flex align-items-center gap-base` (+ `flex-direction-row-reverse `, CustomClass) > an OSInline
    column `min-width: <width>px` with the `skeleton-item` image (round: `border-radius-circle`, square sides; else the
    radius) and a `skeleton-item … flex1 border-radius-soft` bar of the image height.
    @origin Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton */
export function NC_Result_Item__Image__Skeleton({
  id,
  inIsRoundImage = false,
  inImageHeight = 40,
  inResultItemVisualWidth = 40,
  customClass = '',
  inBorderRadius = 0,
  inIsReverseImageAndContent = false,
}: NC_Result_Item__Image__SkeletonProps) {
  const scope = id.replace(/\$/g, '');
  const h = `${String(inImageHeight)}px`;
  return (
    <OSBlock name="NewConnect_Skeleton.NC_Result_Item__Image__Skeleton" id={id}>
      <div
        className={
          'display-flex align-items-center gap-base ' +
          (inIsReverseImageAndContent ? 'flex-direction-row-reverse ' : '') +
          customClass
        }
        data-container=""
        id={`${scope}-Result_Item`}
      >
        <div className="OSInline" data-container="" style={{ minWidth: `${String(inResultItemVisualWidth)}px` }}>
          <div
            className={'skeleton-item ' + (inIsRoundImage ? 'border-radius-circle' : '')}
            data-container=""
            style={
              inIsRoundImage ? { height: h, width: h } : { height: h, borderRadius: `${String(inBorderRadius)}px` }
            }
          />
        </div>
        <div
          className="skeleton-item display-flex align-items-center justify-content-space-between flex1 border-radius-soft"
          data-container=""
          style={{ height: h }}
        />
      </div>
    </OSBlock>
  );
}
