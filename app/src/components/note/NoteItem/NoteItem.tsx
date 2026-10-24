/** @origin UBTConnectLibrary.ConnectPatterns.Note_Item */
// @os-block UBTConnectLibrary.ConnectPatterns.Note_Item
import { useId, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Button } from '@/components/ui/Button';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { BookmarkNotesKebab } from '@/components/note/BookmarkNotesKebab';
import { TextAreaWithCounter } from '@/components/ui/TextAreaWithCounter';
import { TextEllipsis } from '@/components/ui/TextEllipsis';
import { getRelativeTimeTag } from '@/lib/ubtConnectLibrary/actions';
import {
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';

export interface NoteItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_NoteId (Long Integer). */
  inNoteId?: string;
  /** In_Note: the note text. */
  inNote?: string;
  /** DateCreatedUtc ("yyyy-MM-ddTHH:mm:ss"). */
  dateCreatedUtc?: string;
  /** DateEditedUtc ("yyyy-MM-ddTHH:mm:ss"; the null date when never edited). */
  dateEditedUtc?: string;
  /** IsEditing: shows the edit form. */
  isEditing?: boolean;
  /** IsDimmed: another note is being edited. */
  isDimmed?: boolean;
  /** In_SearchString: highlighted in the note. */
  inSearchString?: string;
  /** Event OnEditRequested(NoteId). */
  onOnEditRequested?: (noteId: string) => void;
  /** Event OnSaveEditRequested(NoteId, Out_Note). */
  onOnSaveEditRequested?: (noteId: string, outNote: string) => void;
  /** Event OnDeleteRequested(NoteId). */
  onOnDeleteRequested?: (noteId: string) => void;
  /** Event OnCancelEditRequested. */
  onOnCancelEditRequested?: () => void;
}

const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** One note: icon, text (highlighted by the search), relative time and kebab menu; or the edit form
    (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Note_Item.mvc.js: view :211-790, controller :795-925). */
export function NoteItem({
  id,
  inNoteId = '0',
  inNote = '',
  dateCreatedUtc = NULL_DATE_TIME,
  dateEditedUtc = NULL_DATE_TIME,
  isEditing = false,
  isDimmed = false,
  inSearchString = '',
  onOnEditRequested,
  onOnSaveEditRequested,
  onOnDeleteRequested,
  onOnCancelEditRequested,
}: NoteItemProps) {
  const textAreaId = `${useId()}TextArea_EdittingNote`;
  const [edittingNote, setEdittingNote] = useState('');
  const dimmedClasses = isDimmed ? 'note-item-dimmed text-align-left' : 'text-align-left';

  // Handler_EditRequested: EdittingNote = In_Note, then OnEditRequested(In_NoteId).
  const editRequested = () => {
    setEdittingNote(inNote);
    onOnEditRequested?.(inNoteId);
  };

  return (
    <OSBlock name="ConnectPatterns.Note_Item" id={id}>
      {!isEditing ? (
        <ColumnsTwo
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, SpacingSize: UBT_Size.ExtraSmall }}
          left={
            <ColumnsTwo
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst }}
              extendedClasses="padding-top-xs"
              left={
                <Icon
                  inColorId={UBT_Color.CyanDark}
                  inIconId={UBT_Icons.ListAltFill}
                  inExtendedClasses={isDimmed ? 'note-item-dimmed' : ''}
                />
              }
              right={
                <CustomContainer
                  options={{
                    PaddingSize: { LeftSizeId: UBT_Size.ExtraSmall },
                    DisplayOptions: { Display: UBT_Display.Flex, FlexDirection: UBT_FlexDirection.Column },
                    WidthOptions: { Min: '0', Max: '100%' },
                  }}
                >
                  {inSearchString === '' ? (
                    <TextEllipsis text={inNote} extendedClasses={dimmedClasses} />
                  ) : (
                    <CustomText
                      extendedClasses="text-align-left"
                      inHighlightOptions={{ Color: UBT_Color.Primary, FontWeight: UBT_FontWeight.SemiBold }}
                      inTextOptions={{}}
                      inHighlightWords={inSearchString !== '' ? inSearchString : ''}
                      inText={inNote}
                    />
                  )}
                  <CustomText
                    inText={getRelativeTimeTag(dateCreatedUtc, dateEditedUtc)}
                    inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.DoubleExtraSmall }}
                    extendedClasses={dimmedClasses}
                  />
                </CustomContainer>
              }
            />
          }
          right={
            <BookmarkNotesKebab
              isEnable={!isDimmed}
              onDelete={() => onOnDeleteRequested?.(inNoteId)}
              onEdit={editRequested}
            />
          }
        />
      ) : (
        <>
          <ColumnsTwo
            columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, SpacingSize: UBT_Size.ExtraSmall }}
            extendedClasses="padding-top-xs"
            left={<Icon inIconId={UBT_Icons.ListAltFill} inColorId={UBT_Color.CyanDark} />}
            right={
              <TextAreaWithCounter inInitialLength={edittingNote.length}>
                <span>
                  <textarea
                    className="form-control OSFillParent"
                    data-textarea=""
                    id={textAreaId}
                    maxLength={100}
                    value={edittingNote}
                    onChange={(event) => {
                      setEdittingNote(event.currentTarget.value);
                    }}
                  />
                </span>
              </TextAreaWithCounter>
            }
          />
          <CustomContainer options={{}}>
            <ColumnsTwo
              columnOptions={{ SpacingSize: UBT_Size.ExtraSmall }}
              left={
                <Button
                  inButtonOptions={{
                    UBT_ButtonSizeId: UBT_ButtonSize.Small,
                    UBT_ButtonTypeId: UBT_ButtonType.Secondary,
                  }}
                  onEventOnClick={onOnCancelEditRequested}
                >
                  Cancel
                </Button>
              }
              right={
                <Button
                  inIsDisabled={edittingNote === inNote}
                  inButtonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Primary }}
                  onEventOnClick={() => onOnSaveEditRequested?.(inNoteId, edittingNote)}
                >
                  Save
                </Button>
              }
            />
          </CustomContainer>
        </>
      )}
    </OSBlock>
  );
}
