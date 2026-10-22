// @os-block UBTConnect.App_Common_Blocks.ItemCardActions
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_Size } from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { child, scopeOf } from './ids';
import { ItemCard_ActionBar, type ActionBarOptions } from './ItemCard_ActionBar';

export interface ItemCardActionsProps {
  id?: string;
  objectId?: string;
  actionBarOptions: ActionBarOptions;
  onEventAddNote?: () => void;
}

/** Item card actions (survey UBTConnect.App_Common_Blocks.ItemCardActions.mvc.js): a container with a top border and the
    action bar. Handler_OnClickAddNote triggers Event_AddNote. Share and Unmark are not reachable on this route. */
export function ItemCardActions({ id, actionBarOptions, onEventAddNote }: ItemCardActionsProps) {
  const p = scopeOf(id);
  return (
    <OSBlock name="App_Common_Blocks.ItemCardActions" id={id}>
      <CustomContainer
        id={child(p, 1)}
        options={{
          PaddingSize: { VerticalSizeId: UBT_Size.Small },
          BorderOptions: { Color: UBT_Color.Neutral2, Size: { TopSizeId: UBT_Size.Small } },
        }}
      >
        <ItemCard_ActionBar id={child(p, 2)} actionBarOptions={actionBarOptions} onEventAddNote={onEventAddNote} />
      </CustomContainer>
    </OSBlock>
  );
}
