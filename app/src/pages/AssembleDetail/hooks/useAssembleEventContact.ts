import { useState } from 'react';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { hasAccessToRegion } from '@/shared/Connect2_Assemble_MUI/lib/actions';
import { getCacheableSignedPhotoURL, getSignedPhotosInBulk } from '@/shared/Connect2_LegacyShared/lib/actions';
import type { ContactPopupData } from '@/shared/UBTConnect_Utils/lib/structures';
import {
  contactEmail,
  contactPhone,
  contactPopupData,
  UNAVAILABLE,
  type AssembleEventContact,
} from './assembleEventContacts';
import { useIsAlive } from './blockLifecycle';

/** The flows of the block AssembleEventDetail_Contact: the item click, the call and e-mail options and the two popups.
    The component AssembleEventDetail_Contact calls this hook.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact */

/** The arguments of NavigateTo_EmailContact. */
export interface EmailContactArgs {
  avatarURL: string;
  contactName: string;
  contactSurname: string;
  contactLocality: string;
  contactCountry: string;
  emailTo: string;
  memberId: string;
}

/** The events of the block. */
export interface AssembleEventContactEvents {
  /** NavigateTo_EmailContact. */
  onEmailContact: (args: EmailContactArgs) => void;
  /** NavigateTo_Household(HouseholdId). */
  onNavigateToHousehold: (householdId: string) => void;
}

/** What the component renders and the handlers of its widgets. */
export interface AssembleEventContactFlows {
  /** The phone of Person_Contact_Options ("Unavailable" when the contact has none). */
  phone: string;
  /** The e-mail of Person_Contact_Options ("Unavailable" when the contact has none). */
  email: string;
  /** ContactPopupData of ContactByMessage_Wrapper. */
  contactPopupData: ContactPopupData;
  /** CallPopup of ContactPopup_ByPhone. */
  callPopup: ContactByPhonePopupData;
  /** OnClickItem of Block_HostContact: Handler_OnClickHostContact. */
  onClickHostContact: () => void;
  /** CallClicked of Person_Contact_Options: Handler_OptionsCall. */
  onCallClicked: (phoneNumberToCall: string) => void;
  /** EmailClicked of Person_Contact_Options: Handler_ContactByMessage. */
  onEmailClicked: () => void;
  /** Event_Call and Event_Cancel of ContactPopup_ByPhone: the popup closes. */
  onCloseCallPopup: () => void;
  /** Event_Cancel of ContactByMessage_Wrapper: the popup closes. */
  onCancelContactByMessage: () => void;
  /** Event_Email of ContactByMessage_Wrapper: Handler_ContactByEmail. */
  onContactByEmail: () => void;
}

/** The state (not kept by the view cache) and the flows of one contact. A failure goes to the flow handler.
    - Handler_OnClickHostContact: HasAccessToRegion(CountryCode, LocalityId); without access
      App_Subscription_ShowUpgradePopUp, else NavigateTo_Household(HouseholdId).
    - Handler_OptionsCall: "Unavailable" → Info "Unfortunately, Phone Number is not available"; else the call popup
      with the phones and the popup data, loading until the avatar is signed (GetCacheableSignedPhotoURL when the
      avatar has no signed URL), then shown.
    - Handler_ContactByMessage: the popup data the same way, then shown.
    - Handler_ContactByEmail: the popup closes; the record's Email "Unavailable" → Info "Unfortunately, Email is not
      available" (it compares the record's Email, as compiled); else GetCacheableSignedPhotoURL and
      NavigateTo_EmailContact(URL, name, "", locality, country, e-mail, member id).
    - Decision W23: after the unmount, a started flow skips its state writes only. */
export function useAssembleEventContact(
  contact: AssembleEventContact,
  { onEmailContact, onNavigateToHousehold }: AssembleEventContactEvents,
): AssembleEventContactFlows {
  const isAlive = useIsAlive();
  const [popupData, setPopupData] = useState<ContactPopupData>({});
  const [callPopup, setCallPopup] = useState<ContactByPhonePopupData>({});
  const c = contact;
  const avatar = c.ContactDetails.AvatarURL;
  const signAvatar = () => getCacheableSignedPhotoURL(avatar.Bucket, avatar.Path, avatar.Type, getSignedPhotosInBulk);
  const signedAvatar = async () => (avatar.SignedURL === '' ? signAvatar() : avatar.SignedURL);

  const onClickHostContact = async () => {
    if (await hasAccessToRegion(c.CountryCode, c.LocalityId)) onNavigateToHousehold(c.HouseholdId);
    else await showUpgradePopUp();
  };
  const onContactByMessage = async () => {
    setPopupData({ ...contactPopupData(c), IsLoading: true });
    const url = await signedAvatar();
    if (isAlive()) setPopupData({ ...contactPopupData(c), ShowPopup: true, ImageURL: url, IsLoading: false });
  };
  const onContactByEmail = async () => {
    setPopupData((d) => ({ ...d, ShowPopup: false }));
    if (c.Email === UNAVAILABLE) {
      showFeedbackMessage('Unfortunately, Email is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    const url = await signAvatar();
    onEmailContact({
      avatarURL: url,
      contactName: c.ContactDetails.Name,
      contactSurname: '',
      contactLocality: c.LocalityName,
      contactCountry: c.CountryName,
      emailTo: c.Email,
      memberId: c.ContactDetails.Id,
    });
  };
  const onOptionsCall = async (phoneNumberToCall: string) => {
    if (phoneNumberToCall === UNAVAILABLE) {
      showFeedbackMessage('Unfortunately, Phone Number is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    const phones = { MobilePhone: c.MobilePhoneNumber, HomePhone: c.HomePhoneNumber, WorkPhone: c.WorkPhoneNumber };
    setCallPopup({ ...phones, ContactPopupData: { ...contactPopupData(c), IsLoading: true } });
    const url = await signedAvatar();
    if (isAlive())
      setCallPopup({
        ...phones,
        ContactPopupData: { ...contactPopupData(c), ImageURL: url, ShowPopup: true, IsLoading: false },
      });
  };

  return {
    phone: contactPhone(c),
    email: contactEmail(c),
    contactPopupData: popupData,
    callPopup,
    onClickHostContact: () => void onClickHostContact().catch(raiseToFlowHandler),
    onCallClicked: (n) => void onOptionsCall(n).catch(raiseToFlowHandler),
    onEmailClicked: () => void onContactByMessage().catch(raiseToFlowHandler),
    onCloseCallPopup: () => {
      setCallPopup((p) => ({ ...p, ContactPopupData: { ...p.ContactPopupData, ShowPopup: false } }));
    },
    onCancelContactByMessage: () => {
      setPopupData((d) => ({ ...d, ShowPopup: false }));
    },
    onContactByEmail: () => void onContactByEmail().catch(raiseToFlowHandler),
  };
}
