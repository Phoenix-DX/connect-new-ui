/** @origin UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper */
// @os-block UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { changeWindowLocation } from '@/lib/jsUtils';
import { ContactPopupByMessage } from '@/components/contact/ContactPopupByMessage';
import { Type_MessageChannel } from '@/lib/ubtConnectUtils/staticEntities';
import type { UI_ContactByMessage_WrapperData } from './types';

export interface ContactByMessageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ContactPopupData: email, phone, combo flag and the ContactPopup data. */
  inContactPopupData?: UI_ContactByMessage_WrapperData;
  /** Event Event_Email (the Email channel). */
  onEventEmail?: () => void;
  /** Event Event_Call (the Call channel, before the `tel:` navigation). */
  onEventCall?: () => void;
  /** Event Event_MessageChannel(MessageChannelId): after any channel. */
  onEventMessageChannel?: (messageChannelId: string) => void;
  /** Event Event_Cancel. */
  onEventCancel?: () => void;
}

/** Message popup wrapper (UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js, HouseholdCarousel copy):
    ContactPopup_ByMessage with ShowEmail = Email <> "", ShowWhatsapp / ShowSignal = Phone <> "" and the app available
    and not IsComboEmailAndPhone, ShowCall = IsComboEmailAndPhone and Phone <> "". ScreenEvent_OnReady sets
    IsWhatsAppAvailable / IsSignalAvailable from CanLaunchWithData only when CheckAppLauncherPlugin is True: never in
    the clone (no Cordova, `checkAppLauncherPlugin`), so both stay False. Handler_SelectedMessageChannel: Email →
    Event_Email; WhatsApp / Signal → Action_OpenMessagingApp (LaunchWithData, unreachable: their buttons never show);
    Call → Event_Call then `tel:` + Phone; then Event_MessageChannel(Id) in every case. */
export function ContactByMessage({
  id,
  inContactPopupData = {},
  onEventEmail,
  onEventCall,
  onEventMessageChannel,
  onEventCancel,
}: ContactByMessageProps) {
  const [isWhatsAppAvailable] = useState(false);
  const [isSignalAvailable] = useState(false);
  const email = inContactPopupData.Email ?? '';
  const phone = inContactPopupData.Phone ?? '';
  const isCombo = inContactPopupData.IsComboEmailAndPhone ?? false;
  const handlerSelectedMessageChannel = (channelId: string) => {
    if (channelId === Type_MessageChannel.Email) {
      onEventEmail?.();
    } else if (channelId === Type_MessageChannel.Call) {
      onEventCall?.();
      changeWindowLocation(`tel:${phone}`);
    }
    onEventMessageChannel?.(channelId);
  };
  return (
    <OSBlock name="CW_CTA_PopUps.ContactByMessage_Wrapper" id={id}>
      <ContactPopupByMessage
        inContactByMessageData={{
          ContactPopupData: inContactPopupData.ContactPopupData ?? {},
          ShowEmail: email !== '',
          ShowWhatsapp: phone !== '' && isWhatsAppAvailable && !isCombo,
          ShowSignal: phone !== '' && isSignalAvailable && !isCombo,
          ShowCall: isCombo && phone !== '',
        }}
        onEventSelectedMessageChannel={handlerSelectedMessageChannel}
        onEventCancel={onEventCancel}
      />
    </OSBlock>
  );
}
