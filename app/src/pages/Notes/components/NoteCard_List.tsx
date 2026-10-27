/** @origin UBTConnect.Notes.NoteCard_List */
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { EmptyState } from '@/components/ui/EmptyState';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import type { NoteCardItem } from '@/api/note';
import { child, scopeOf } from './ids';
import { NoteCard_Item } from './NoteCard_Item';
import { UBT_Icons2_Bookmark } from './staticEntities';

export interface NoteCard_ListProps {
  id?: string;
  inNotes: NoteCardItem[];
  inIsLoading?: boolean;
  inSearchString?: string;
  /** Event OnClick_NoteCardItem(ObjectId, NoteCategoryTypeId). */
  onOnClickNoteCardItem?: (objectId: string, noteCategoryTypeId: string) => void;
  /** Event OnLoadMore. The List raises no new OnScrollEnding until the Promise it returns settles. */
  onOnLoadMore?: () => Promise<void> | void;
}

/** Notes list (Notes.NoteCard_List.mvc.js view :160-330): a SkeletonSection with EmptyList ("No Notes found") when
    In_Notes is empty, else the List of NoteCard_Item ("list list-group list--gap-s"). Handler_UpdateNoteCardsList
    removes the card whose Id, ItemId and NoteCategoryId match. The List's OnScrollEnding (NoteCardList_OnScrollEnding,
    NoteCard_List.mvc.js:343-351, 545-563) raises OnLoadMore and waits for it. */
export function NoteCard_List({
  id,
  inNotes,
  inIsLoading = false,
  inSearchString = '',
  onOnClickNoteCardItem,
  onOnLoadMore,
}: NoteCard_ListProps) {
  const p = scopeOf(id);
  const [input, setInput] = useState(inNotes);
  const [notes, setNotes] = useState(inNotes);
  if (input !== inNotes) {
    setInput(inNotes);
    setNotes(inNotes);
  }
  const handler_UpdateNoteCardsList = (cardId: string, itemId: string, noteCategoryId: string) => {
    setNotes((prev) => {
      const index = prev.findIndex(
        (n) => n.id === cardId && n.itemId === itemId && n.noteCategoryId === noteCategoryId,
      );
      return index === -1 ? prev : prev.filter((_, i) => i !== index);
    });
  };
  const textOptions = { Color: UBT_Color.Neutral10, FontSize: UBT_FontSize.Small };
  return (
    <OSBlock name="Notes.NoteCard_List" id={id}>
      <CustomContainer
        id={child(p, 1)}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Base },
        }}
      >
        <Skeleton id={child(p, 2)} isLoading={inIsLoading}>
          {notes.length === 0 ? (
            <EmptyState
              id={child(p, 3)}
              iconId={UBT_Icons2_Bookmark}
              title={
                <CustomText
                  id={child(p, 4)}
                  inText="No Notes found"
                  inTextOptions={{
                    Color: UBT_Color.Neutral9,
                    FontSize: UBT_FontSize.Base,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                />
              }
              text={
                <>
                  <CustomText
                    id={child(p, 5)}
                    inText="We were unable to find any Notes to"
                    inTextOptions={textOptions}
                  />
                  <CustomText id={child(p, 6)} inText="display." inTextOptions={textOptions} />
                </>
              }
            />
          ) : (
            <OSList
              source={notes}
              keyOf={(note, i) => `${note.id}|${note.itemId}|${String(i)}`}
              className="list list-group list--gap-s"
              animateItems
              positionRelative
              onScrollEnding={() => onOnLoadMore?.()}
            >
              {(note, i) => (
                <NoteCard_Item
                  id={`${p}-l1-61_${String(i)}-$b7`}
                  noteCardItem={note}
                  inSearchString={inSearchString}
                  onOnClickCardItem={() => onOnClickNoteCardItem?.(note.itemId, note.noteCategoryId)}
                  onUpdateNoteCardsList={handler_UpdateNoteCardsList}
                />
              )}
            </OSList>
          )}
        </Skeleton>
      </CustomContainer>
    </OSBlock>
  );
}
