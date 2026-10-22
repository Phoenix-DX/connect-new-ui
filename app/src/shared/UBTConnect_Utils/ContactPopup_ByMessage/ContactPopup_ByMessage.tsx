// @os-block UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage
import { useMemo } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ContactPopup } from '../ContactPopup';
import { Type_MessageChannel, UBT_ImageSize, UBT_Icons } from '../lib/staticEntities';
import type { ContactByMessagePopupData, ContactPopupButton } from './types';

export interface ContactPopup_ByMessageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ContactByMessageData: the ContactPopup data and which channels show. */
  inContactByMessageData?: ContactByMessagePopupData;
  /** In_ImageSizeId: UBT_ImageSize identifier (default ExtraLarge_100). */
  inImageSizeId?: string;
  /** Event Event_SelectedMessageChannel(Event_MessageChannelId): Type_MessageChannel identifier. */
  onEventSelectedMessageChannel?: (messageChannelId: string) => void;
  /** Event Event_Cancel. */
  onEventCancel?: () => void;
}

/** Action_SetContactPopupButtons (controller :252-348): Email (mail_fill), WhatsApp, Signal, Call (call_fill) for each
    Show* flag, Id = the Type_MessageChannel identifier, label "Email" or the channel identifier. */
function setContactPopupButtons(data: ContactByMessagePopupData): ContactPopupButton[] {
  const buttons: ContactPopupButton[] = [];
  if (data.ShowEmail === true)
    buttons.push({ Id: Type_MessageChannel.Email, UBT_IconId: UBT_Icons.MailFill, Label: 'Email' });
  if (data.ShowWhatsapp === true)
    buttons.push({
      Id: Type_MessageChannel.WhatsApp,
      UBT_IconId: UBT_Icons.Whatsapp,
      Label: Type_MessageChannel.WhatsApp,
    });
  if (data.ShowSignal === true)
    buttons.push({ Id: Type_MessageChannel.Signal, UBT_IconId: UBT_Icons.Signal, Label: Type_MessageChannel.Signal });
  if (data.ShowCall === true)
    buttons.push({ Id: Type_MessageChannel.Call, UBT_IconId: UBT_Icons.CallFill, Label: Type_MessageChannel.Call });
  return buttons;
}

/** Message popup (UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc.js, HouseholdCarousel copy): ContactPopup
    with In_ContactByMessageData.ContactPopupData (ActionName "Message" when empty, :265-268) and the channel buttons
    (rebuilt on initialize and on a change while ShowPopup, :349-378). OnClick_MessageButton (:404-) raises
    Event_SelectedMessageChannel with the button Id. */
export function ContactPopup_ByMessage({
  id,
  inContactByMessageData = {},
  inImageSizeId = UBT_ImageSize.ExtraLarge_100,
  onEventSelectedMessageChannel,
  onEventCancel,
}: ContactPopup_ByMessageProps) {
  const buttons = useMemo(() => setContactPopupButtons(inContactByMessageData), [inContactByMessageData]);
  const popupData = inContactByMessageData.ContactPopupData ?? {};
  const data = (popupData.ActionName ?? '') === '' ? { ...popupData, ActionName: 'Message' } : popupData;
  return (
    <OSBlock name="CW_CTA_PopUps.ContactPopup_ByMessage" id={id}>
      <ContactPopup
        inContactPopupData={data}
        inImageSizeId={inImageSizeId}
        inContactPopupButtons={buttons}
        onEventClicked={(_eventId, row) => onEventSelectedMessageChannel?.(buttons[row]?.Id ?? '')}
        onEventCancel={onEventCancel}
      />
    </OSBlock>
  );
}
