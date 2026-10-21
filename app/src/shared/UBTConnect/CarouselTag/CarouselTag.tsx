// @os-block UBTConnect.Directory_Caroussel.CarouselTag
import { OSBlock } from '../../../components/OSBlock';
import { TagContent } from '../../UBTConnectLibrary/TagContent';
import { UBT_Color } from '../lib/staticEntities';

export interface CarouselTagProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Zero-based index of the current carousel item. */
  inIndexCurrentItem?: number;
  inTotalItems?: number;
}

/** "n / total" tag of the directory carousels (p:UBTConnect.Directory_Caroussel.CarouselTag.mvc.js:158-161): a
    TagContent on a neutral-0 background. */
export function CarouselTag({ id, inIndexCurrentItem = 0, inTotalItems = 0 }: CarouselTagProps) {
  return (
    <OSBlock name="Directory_Caroussel.CarouselTag" id={id}>
      <TagContent
        backgroundColorId={UBT_Color.Neutral0}
        text={`${String(inIndexCurrentItem + 1)} / ${String(inTotalItems)}`}
      />
    </OSBlock>
  );
}
