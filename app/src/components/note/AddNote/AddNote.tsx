/** @origin UBTConnectLibrary.ConnectPatterns.AddNote */
// @os-block UBTConnectLibrary.ConnectPatterns.AddNote
import { useId, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButtonIconPrimary } from '@/components/ui/CircleButtonIconPrimary';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { InputCounter } from '@/components/ui/InputCounter';
import { UBT_Color, UBT_ColumnBehaviour, UBT_Icons, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface AddNoteProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event OnSubmitRequested(Note): awaited before the input is cleared. */
  onOnSubmitRequested?: (note: string) => Promise<void> | void;
}

/** The "Add a Note" input with a counter and a send button (migration/blocks/sources/
    UBTConnectLibrary.ConnectPatterns.AddNote.mvc.js: view :100-295, Handler_OnSubmitNote :317-348). */
export function AddNote({ id, onOnSubmitRequested }: AddNoteProps) {
  const inputId = `${useId()}Input_Note`;
  const [note, setNote] = useState('');

  // Handler_OnSubmitNote: OnSubmitRequested(Note), then Note = "".
  const submit = async () => {
    await onOnSubmitRequested?.(note);
    setNote('');
  };

  return (
    <OSBlock name="ConnectPatterns.AddNote" id={id}>
      <CustomContainer
        options={{
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small },
          BorderOptions: { Color: UBT_Color.Neutral3, Size: { TopSizeId: UBT_Size.Small } },
        }}
      >
        <ColumnsTwo
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, SpacingSize: UBT_Size.ExtraSmall }}
          left={
            <>
              <span className="input-text">
                <input
                  aria-required="false"
                  className="form-control OSFillParent"
                  data-input=""
                  id={inputId}
                  maxLength={150}
                  placeholder="Add a Note"
                  type="text"
                  value={note}
                  onChange={(event) => {
                    setNote(event.currentTarget.value);
                  }}
                />
              </span>
              <InputCounter inInputId={inputId} inInitialLength={0} />
            </>
          }
          right={
            <CircleButtonIconPrimary
              iconBackgroundColorId={UBT_Color.Primary}
              iconId={UBT_Icons.Send}
              iconColorId={UBT_Color.Neutral0}
              isEnabled={note.trim() !== ''}
              onOnClick={() => void submit()}
            />
          }
        />
      </CustomContainer>
    </OSBlock>
  );
}
