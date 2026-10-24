import { OSBlock } from '@/components/ui/os/OSBlock';
import { PersonContactOptions } from '@/components/contact/PersonContactOptions';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { ResultItemMedia } from '@/components/ui/ResultItemMedia';
import type { AssembleEventContact } from '@/pages/AssembleDetail/hooks/assembleEventContacts';
import {
  useAssembleEventContact,
  type AssembleEventContactEvents,
} from '@/pages/AssembleDetail/hooks/useAssembleEventContact';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';

export interface AssembleEventDetail_ContactProps extends AssembleEventContactEvents {
  /** OutSystems instance id of the block. */
  id: string;
  /** The contact record. */
  contact: AssembleEventContact;
  /** IsDataFetched of the list: the row shows its loading state until then. */
  isDataFetched: boolean;
}

/** Div_EventContacts__Content__HostContact (`padding-y-s`) > Block_HostContact NC_Result_Item__Image (round, loading
    until the list is fetched; the name, the location, and Person_Contact_Options with the phone and the e-mail), then
    FreeSubscriptionAlert, ContactPopup_ByPhone (CallPopup) and ContactByMessage_Wrapper (the e-mail, the mobile phone
    and ContactPopupData). The flows are in useAssembleEventContact.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact */
export function AssembleEventDetail_Contact({
  id,
  contact: c,
  isDataFetched,
  onEmailContact,
  onNavigateToHousehold,
}: AssembleEventDetail_ContactProps) {
  const scope = id.replace(/\$/g, '');
  const flows = useAssembleEventContact(c, { onEmailContact, onNavigateToHousehold });
  const avatar = c.ContactDetails.AvatarURL;
  return (
    <OSBlock name="Assemble.AssembleEventDetail_Contact" id={id}>
      <div className="padding-y-s" data-container="" id={`${scope}-Div_EventContacts__Content__HostContact`}>
        <ResultItemMedia
          id={`${scope}-Block_HostContact`}
          inSignedURL={avatar.SignedURL}
          inIsRoundImage
          isLoading={!isDataFetched}
          inType={avatar.Type}
          inPath={avatar.Path}
          inBucket={avatar.Bucket}
          onOnClickItem={flows.onClickHostContact}
          titlePlaceholder={<span data-expression="">{c.ContactDetails.Name}</span>}
          descriptionPlaceholder={<span data-expression="">{c.ContactDetails.Location}</span>}
          actionPlaceholder={
            <PersonContactOptions
              id={`${scope}-$b2`}
              phone={flows.phone}
              emailAddress={flows.email}
              onCallClicked={flows.onCallClicked}
              onEmailClicked={flows.onEmailClicked}
            />
          }
        />
      </div>
      <DialogAccessRestrictedActionLegacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b3`} />
      <ContactPopupByPhone
        id={`${scope}-$b4`}
        inCallPopupData={flows.callPopup}
        onEventCall={flows.onCloseCallPopup}
        onEventCancel={flows.onCloseCallPopup}
      />
      <ContactByMessage
        id={`${scope}-$b5`}
        inContactPopupData={{ Email: c.Email, Phone: c.MobilePhoneNumber, ContactPopupData: flows.contactPopupData }}
        onEventCancel={flows.onCancelContactByMessage}
        onEventEmail={flows.onContactByEmail}
      />
    </OSBlock>
  );
}
