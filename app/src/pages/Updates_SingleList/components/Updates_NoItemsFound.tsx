/** @origin UBTConnect.Directory_Updates.Updates_NoItemsFound */
// @os-block UBTConnect.Directory_Updates.Updates_NoItemsFound
import { NoItemsFound } from '@/components/ui/NoItemsFound';
import { UBT_Icons2_Updates } from './staticEntities';

interface Updates_NoItemsFoundProps {
  /** OutSystems instance id of the block ($b13 on the screen). */
  id: string;
}

/** UBTConnect.Directory_Updates.Updates_NoItemsFound: the empty state of the list (BR-UBTCON-872).
    TST: Updates_NoItemsFound.mvc.js view :125, texts :286, :305. The view is the shared NoItemsFound (the same
    compiled tree as the other block) with this block's name, icon set and texts. The block has no inputs and no events. */
export function Updates_NoItemsFound({ id }: Updates_NoItemsFoundProps) {
  return (
    <NoItemsFound
      blockName="Directory_Updates.Updates_NoItemsFound"
      id={id}
      iconId={UBT_Icons2_Updates.CalendarBusyFill}
      title="No Updates Found"
      message="We were unable to find any Updates to display."
    />
  );
}
