// @os-block UBTConnectLibrary.ConnectPatterns.Note_Item_List
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Button } from '@/shared/UBTConnectLibrary/Button';
import { CircleButton } from '@/shared/UBTConnectLibrary/CircleButton';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { Note_Item } from '@/shared/UBTConnectLibrary/Note_Item';
import { Popup } from '@/shared/UBTConnectLibrary/Popup';
import {
  UBT_AlignItems,
  UBT_AvatarSize,
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_JustifyContent,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { Note_Item as NoteItemRecord, Notes } from '@/shared/UBTConnectLibrary/lib/structures';

export interface Note_Item_ListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Notes: the notes and their total. */
  notes?: Notes;
  /** In_EditingNoteId (Long Integer): the note being edited, "0" = none. */
  inEditingNoteId?: string;
  /** In_ShowPreviewOnly: the first two notes and "Show all notes (N)". */
  inShowPreviewOnly?: boolean;
  /** In_SearchString. */
  inSearchString?: string;
  /** Event OnShowAllNotes. */
  onOnShowAllNotes?: () => void;
  /** Event OnDeleteRequested(NoteId): after the confirmation popup. */
  onOnDeleteRequested?: (noteId: string) => void;
  /** Event OnEditRequested(NoteId). */
  onOnEditRequested?: (noteId: string) => void;
  /** Event OnCancelEditRequested. */
  onOnCancelEditRequested?: () => void;
  /** Event OnSaveEditRequested(NoteId, Out_Note). */
  onOnSaveEditRequested?: (noteId: string, outNote: string) => void;
}

interface ShortList {
  showNotesTotal: boolean;
  shortList: NoteItemRecord[];
}

/** ShowNotesTotal (:1050-1080): ShowNotesTotal = Total > 2 or Length > 2; ShortList = the first two notes then. */
function showNotesTotal(notes: Notes): ShortList {
  const list = notes.Note_Item_List ?? [];
  const show = (notes.Total ?? 0) > 2 || list.length > 2;
  return { showNotesTotal: show, shortList: show ? list.slice(0, 2) : [] };
}

/** The notes of an item, with a delete confirmation (migration/blocks/sources/
    UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js: view :181-848, controller :850-1206). */
export function Note_Item_List({
  id,
  notes = {},
  inEditingNoteId = '0',
  inShowPreviewOnly = false,
  inSearchString = '',
  onOnShowAllNotes,
  onOnDeleteRequested,
  onOnEditRequested,
  onOnCancelEditRequested,
  onOnSaveEditRequested,
}: Note_Item_ListProps) {
  // OnInitialize (:992-1010): ShowNotesTotal.
  const [short, setShort] = useState(() => showNotesTotal(notes));
  const [isConfirmationDeleteOpen, setIsConfirmationDeleteOpen] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState('0');
  const list = notes.Note_Item_List ?? [];
  const noEditing = inEditingNoteId === '0';

  // OnParametersChanged (:931-958): ShowNotesTotal only while no note is edited (state adjusted while rendering the
  // new parameters, as the OutSystems handler runs before the re-render).
  const parameters = JSON.stringify([notes, inEditingNoteId, inShowPreviewOnly, inSearchString]);
  const [previousParameters, setPreviousParameters] = useState(parameters);
  if (previousParameters !== parameters) {
    setPreviousParameters(parameters);
    if (noEditing) setShort(showNotesTotal(notes));
  }

  // Handler_OnDeleteRequested (:880-905): open the confirmation, Delete_NoteId = NoteId.
  const deleteRequested = (noteId: string) => {
    setIsConfirmationDeleteOpen((open) => !open);
    setDeleteNoteId(noteId);
  };
  const item = (note: NoteItemRecord, isEditing: boolean) => (
    <Note_Item
      key={note.Id}
      inNote={note.Note ?? ''}
      isEditing={isEditing}
      inNoteId={note.Id ?? '0'}
      dateCreatedUtc={note.DateCreatedUtc ?? '1900-01-01T00:00:00'}
      dateEditedUtc={note.DateEditedUtc ?? '1900-01-01T00:00:00'}
      isDimmed={!noEditing && note.Id !== inEditingNoteId}
      inSearchString={inSearchString}
      onOnSaveEditRequested={onOnSaveEditRequested}
      onOnCancelEditRequested={onOnCancelEditRequested}
      onOnDeleteRequested={deleteRequested}
      onOnEditRequested={onOnEditRequested}
    />
  );

  return (
    <OSBlock name="ConnectPatterns.Note_Item_List" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: inShowPreviewOnly ? UBT_Color.Neutral2 : UBT_Color.Neutral0 },
          PaddingSize: { GeneralSizeId: UBT_Size.Small },
          MarginSize: { BottomSizeId: UBT_Size.ExtraSmall },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Soft } },
          HeightOptions: { Min: '88px' },
        }}
      >
        {short.showNotesTotal && inShowPreviewOnly ? (
          <>
            <div className="list list-group OSFillParent" data-list="">
              {short.shortList.map((note) => item(note, note.Id === inEditingNoteId))}
            </div>
            {noEditing && (
              <CustomText
                inText={list.length === 0 ? '' : `Show all notes (${String(notes.Total ?? 0)})`}
                inHighlightOptions={{}}
                inTextOptions={{
                  Color: UBT_Color.CyanDark,
                  FontSize: UBT_FontSize.DoubleExtraSmall,
                  FontWeight: UBT_FontWeight.SemiBold,
                }}
                inPaddingOptions={{ TopSizeId: UBT_Size.Small }}
                onClicked={onOnShowAllNotes}
              />
            )}
          </>
        ) : list.length !== 0 ? (
          <div className="list list-group OSFillParent" data-list="">
            {list.map((note) => item(note, !noEditing && note.Id === inEditingNoteId))}
          </div>
        ) : (
          <CustomContainer
            options={{
              DisplayOptions: {
                Display: UBT_Display.Flex,
                AlignItems: UBT_AlignItems.Center,
                JustifyContent: UBT_JustifyContent.FlexEnd,
                FlexDirection: UBT_FlexDirection.Column,
              },
              HeightOptions: { Min: '80px' },
            }}
          >
            <CustomText
              inText="Your notes will appear here."
              inTextOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.DoubleExtraSmall }}
            />
          </CustomContainer>
        )}
      </CustomContainer>
      <Popup
        isOpen={isConfirmationDeleteOpen}
        title="Delete note?"
        inHasTopHeader
        topHeader={
          <div className="margin-bottom-m" data-container="">
            <CircleButton
              backgroundColorId={UBT_Color.CyanLightest}
              sizeId={UBT_AvatarSize.Small_40}
              icon={<Icon inColorId={UBT_Color.Primary} inIconId={UBT_Icons.Delete} />}
            />
          </div>
        }
        content={
          <>
            <div className="text-align-center" data-container="">
              Are you sure you want to delete this
            </div>
            <div className="text-align-center" data-container="">
              note? This action can&apos;t be undone.
            </div>
          </>
        }
        footer={
          <Columns_Two
            columnOptions={{ SpacingSize: UBT_Size.Small }}
            left={
              <Button
                inButtonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Secondary }}
                onEventOnClick={() => {
                  // CancleButton_OnClick (:1011-1030): close, Delete_NoteId = 0.
                  setIsConfirmationDeleteOpen((open) => !open);
                  setDeleteNoteId('0');
                }}
              >
                cancel
              </Button>
            }
            right={
              <Button
                inButtonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Primary }}
                onEventOnClick={() => {
                  // DeleteButton_OnClick (:960-991): close, then OnDeleteRequested(Delete_NoteId).
                  setIsConfirmationDeleteOpen((open) => !open);
                  onOnDeleteRequested?.(deleteNoteId);
                }}
              >
                Delete
              </Button>
            }
          />
        }
      />
    </OSBlock>
  );
}
