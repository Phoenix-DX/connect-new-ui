// @os-block Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton
import { OSBlock } from '../../../components/OSBlock';

export interface NC_Card_Item_Text__SkeletonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** ExtendedClass (default ""): appended after `skeleton-item--text`. */
  extendedClass?: string;
}

/** Text skeleton line of a card (p:migration/blocks/sources/Connect2_LegacyShared.NewConnect_Skeleton.
    NC_Card_Item_Text__Skeleton.mvc.js view :160-172): one container `"skeleton-item--text " + ExtendedClass`. */
export function NC_Card_Item_Text__Skeleton({ id, extendedClass = '' }: NC_Card_Item_Text__SkeletonProps) {
  return (
    <OSBlock name="NewConnect_Skeleton.NC_Card_Item_Text__Skeleton" id={id}>
      <div className={`skeleton-item--text ${extendedClass}`} data-container="" />
    </OSBlock>
  );
}
