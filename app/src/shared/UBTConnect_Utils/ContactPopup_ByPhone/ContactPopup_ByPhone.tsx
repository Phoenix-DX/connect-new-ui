// @os-block UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone
import { useMemo } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { changeWindowLocation } from '../../UBTJavaScriptUtils/lib/actions';
import { ContactPopup } from '../ContactPopup';
import { UBT_ImageSize, UBT_Icons } from '../lib/staticEntities';
import type { ContactByPhonePopupData, ContactPopupButton } from './types';

export interface ContactPopup_ByPhoneProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_CallPopupData: the ContactPopup data and the phone numbers. */
  inCallPopupData?: ContactByPhonePopupData;
  /** In_ImageSizeId: UBT_ImageSize identifier (default ExtraLarge_100). */
  inImageSizeId?: string;
  /** Event Event_Call(Number): the number of the clicked button, before the `tel:` navigation. */
  onEventCall?: (number: string) => void;
  /** Event Event_Cancel. */
  onEventCancel?: () => void;
}

interface ContactPopupButtonText {
  ContactPopupButton: ContactPopupButton;
  Number: string;
}

/** Action_SetContactPopupButtons (controller :277-378): a generic "Call" button when Phone is set, else one button per
    non-empty Mobile (call_fill) / Home (home_fill) / Work (enterprise) number. */
function setContactPopupButtons(data: ContactByPhonePopupData): ContactPopupButtonText[] {
  const phone = data.Phone ?? '';
  if (phone !== '') return [{ ContactPopupButton: { Id: '0', Label: 'Call' }, Number: phone }];
  const buttons: ContactPopupButtonText[] = [];
  const mobile = data.MobilePhone ?? '';
  const home = data.HomePhone ?? '';
  const work = data.WorkPhone ?? '';
  if (mobile !== '')
    buttons.push({ ContactPopupButton: { Id: '1', UBT_IconId: UBT_Icons.CallFill, Label: 'Mobile' }, Number: mobile });
  if (home !== '')
    buttons.push({ ContactPopupButton: { Id: '2', UBT_IconId: UBT_Icons.HomeFill, Label: 'Home' }, Number: home });
  if (work !== '')
    buttons.push({ ContactPopupButton: { Id: '3', UBT_IconId: UBT_Icons.Enterprise, Label: 'Work' }, Number: work });
  return buttons;
}

/** Call popup (UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js, ContactUsDetails copy): ContactPopup with
    In_CallPopupData.ContactPopupData (ActionName "Call" when empty, :290-293) and the phone buttons, rebuilt on
    initialize and whenever the data changes while ShowPopup (:422-438; equivalent to deriving them from the data).
    OnClick_CallButton (:379-420) raises Event_Call(Number) then navigates to `tel:` + Number. */
export function ContactPopup_ByPhone({
  id,
  inCallPopupData = {},
  inImageSizeId = UBT_ImageSize.ExtraLarge_100,
  onEventCall,
  onEventCancel,
}: ContactPopup_ByPhoneProps) {
  const buttons = useMemo(() => setContactPopupButtons(inCallPopupData), [inCallPopupData]);
  const popupData = inCallPopupData.ContactPopupData ?? {};
  const data = (popupData.ActionName ?? '') === '' ? { ...popupData, ActionName: 'Call' } : popupData;
  return (
    <OSBlock name="CW_CTA_PopUps.ContactPopup_ByPhone" id={id}>
      <ContactPopup
        inContactPopupData={data}
        inImageSizeId={inImageSizeId}
        inContactPopupButtons={buttons.map((b) => b.ContactPopupButton)}
        onEventClicked={(_eventId, row) => {
          const number = buttons[row]?.Number ?? '';
          onEventCall?.(number);
          changeWindowLocation(`tel:${number}`);
        }}
        onEventCancel={onEventCancel}
      />
    </OSBlock>
  );
}
