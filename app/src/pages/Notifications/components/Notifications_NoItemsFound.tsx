/** @origin UBTConnect.App_Notifications.Notifications_NoItemsFound */
// @os-block UBTConnect.App_Notifications.Notifications_NoItemsFound
import { NoItemsFound } from '@/components/ui/NoItemsFound';
import { UBT_Icons2_Notifications } from './staticEntities';

interface Notifications_NoItemsFoundProps {
  /** OutSystems instance id of the block ($b13 on the screen). */
  id: string;
}

/** UBTConnect.App_Notifications.Notifications_NoItemsFound: the empty state of the list (BR-UBTCON-983).
    TST: Notifications_NoItemsFound.mvc.js view :126, texts :278, :315. The view is the shared NoItemsFound (the same
    compiled tree as the other block) with this block's name, icon set and texts. The block has no inputs and no events. */
export function Notifications_NoItemsFound({ id }: Notifications_NoItemsFoundProps) {
  return (
    <NoItemsFound
      blockName="App_Notifications.Notifications_NoItemsFound"
      id={id}
      iconId={UBT_Icons2_Notifications.CalendarBusyFill}
      title="No Notifications Found"
      message="We were unable to find any Notifications to display."
    />
  );
}
