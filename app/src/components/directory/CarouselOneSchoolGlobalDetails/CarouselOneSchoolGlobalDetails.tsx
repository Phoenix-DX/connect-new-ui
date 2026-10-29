/** @origin UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** What a OneSchool Global slide gives OneSchoolGlobalDetails_Block. The page renders the school details container
    with these inputs, because a component does not import a container (rule 4). */
export interface CarouselOneSchoolGlobalDetailsSlot {
  /** OutSystems instance id of OneSchoolGlobalDetails_Block (`<prefix>-$b1`). */
  id?: string;
  /** In_OneSchoolGlobalId = In_EntityId. */
  oneSchoolGlobalId: string;
  /** IsRestoredFromCache: always False in this block. */
  isRestoredFromCache: false;
}

interface CarouselOneSchoolGlobalDetailsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_EntityId (Long Integer as text). */
  inEntityId?: string;
  /** OneSchoolGlobalDetails_Block: the caller renders the school details with the slot inputs. Without it, the block
      renders its wrapper only. */
  renderOneSchoolGlobalDetails?: (slot: CarouselOneSchoolGlobalDetailsSlot) => ReactNode;
}

/** A OneSchool Global slide of EntitiesCarousel (EntitiesCarousel_OneSchoolGlobal.mvc.js view): only
    OneSchoolGlobalDetails_Block with In_OneSchoolGlobalId = In_EntityId and IsRestoredFromCache False. No carousel tag
    and no header: the block binds no event of OneSchoolGlobalDetails_Block, and its In_IsSkeletonOnly and
    Handler_HouseholdDetails_DataFetched are not used (EntitiesCarousel_Element gives only In_EntityId). */
export function CarouselOneSchoolGlobalDetails({
  id,
  inEntityId = '0',
  renderOneSchoolGlobalDetails,
}: CarouselOneSchoolGlobalDetailsProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal" id={id}>
      {renderOneSchoolGlobalDetails?.({
        id: prefix === undefined ? undefined : `${prefix}-$b1`,
        oneSchoolGlobalId: inEntityId,
        isRestoredFromCache: false,
      })}
    </OSBlock>
  );
}
