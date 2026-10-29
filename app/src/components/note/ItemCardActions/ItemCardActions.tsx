/** @origin UBTConnect.App_Common_Blocks.ItemCardActions */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { child, scopeOf } from '@/components/ui/os/blockIds';
import { ItemCard_ActionBar, type ActionBarOptions } from './ItemCard_ActionBar';

interface ItemCardActionsProps {
  id?: string;
  objectId?: string;
  /** Input BookmarkType (a BookmarkCategory identifier; default ""). */
  bookmarkType?: string;
  actionBarOptions: ActionBarOptions;
  /** UBTConnect ToggleBookmarkItem_C2(ObjectId, BookmarkType, True), given by the caller (lib/ubtConnect/actions with
      the bookmark server actions): a component makes no server call itself. */
  toggleBookmarkItem_C2?: (objectId: string, bookmarkType: string) => Promise<unknown>;
  /** Event Event_ItemUnbookmarked: raised after ToggleBookmarkItem_C2 ends. */
  onEventItemUnbookmarked?: () => void;
  onEventAddNote?: () => void;
}

/** Item card actions (survey UBTConnect.App_Common_Blocks.ItemCardActions.mvc.js): a container with a top border and
    the action bar. Handler_OnClickAddNote triggers Event_AddNote. Handler_OnClickUnmark (ItemCardActions.mvc.js:326-358)
    runs ToggleBookmarkItem_C2(ObjectId, BookmarkType, True), then triggers Event_ItemUnbookmarked. Share is not
    reachable (no caller sets ShowShare). */
export function ItemCardActions({
  id,
  objectId = '',
  bookmarkType = '',
  actionBarOptions,
  toggleBookmarkItem_C2,
  onEventItemUnbookmarked,
  onEventAddNote,
}: ItemCardActionsProps) {
  const p = scopeOf(id);
  const handler_OnClickUnmark = async () => {
    await toggleBookmarkItem_C2?.(objectId, bookmarkType);
    onEventItemUnbookmarked?.();
  };
  return (
    <OSBlock name="App_Common_Blocks.ItemCardActions" id={id}>
      <CustomContainer
        id={child(p, 1)}
        options={{
          PaddingSize: { VerticalSizeId: UBT_Size.Small },
          BorderOptions: { Color: UBT_Color.Neutral2, Size: { TopSizeId: UBT_Size.Small } },
        }}
      >
        <ItemCard_ActionBar
          id={child(p, 2)}
          actionBarOptions={actionBarOptions}
          onClickUnbookmark={() => void handler_OnClickUnmark()}
          onEventAddNote={onEventAddNote}
        />
      </CustomContainer>
    </OSBlock>
  );
}
