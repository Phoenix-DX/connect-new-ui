import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { useFlowState } from '@/platform/navigation';
import { hasAccessToRegion } from '@/lib/assemble/actions';
import { getCacheableSignedPhotoURL, getSignedPhotosInBulk } from '@/lib/legacyShared/actions';
import type { ContactPopupData } from '@/lib/ubtConnectUtils/structures';
import {
  assembleEventContactReducer,
  contactEmail,
  contactPhone,
  contactPopupData,
  INITIAL_ASSEMBLE_EVENT_CONTACT_STATE,
  UNAVAILABLE,
  type AssembleEventContact,
} from './assembleEventContacts';

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

/** The state and the flows of one contact. `blockId` is the block instance id. The state comes from useFlowState and
    the view cache keeps it (the block has no OnReady: a restored view shows its saved popups). A failure goes to the
    flow handler.
    - Handler_OnClickHostContact: HasAccessToRegion(CountryCode, LocalityId); without access
      App_Subscription_ShowUpgradePopUp, else NavigateTo_Household(HouseholdId).
    - Handler_OptionsCall: "Unavailable" → Info "Unfortunately, Phone Number is not available"; else the call popup
      with the phones and the popup data, loading until the avatar is signed (GetCacheableSignedPhotoURL when the
      avatar has no signed URL), then shown.
    - Handler_ContactByMessage: the popup data the same way, then shown.
    - Handler_ContactByEmail: the popup closes; the record's Email "Unavailable" → Info "Unfortunately, Email is not
      available" (it compares the record's Email, as compiled); else GetCacheableSignedPhotoURL and
      NavigateTo_EmailContact(URL, name, "", locality, country, e-mail, member id).
    Flow scope (item 8): HasAccessToRegion, App_Subscription_ShowUpgradePopUp and GetCacheableSignedPhotoURL are module
    actions (R2, AssembleEventDetail_Contact.js:632, :640, :567): they run after the unmount, and the upgrade popup
    still shows. The events NavigateTo_Household and NavigateTo_EmailContact go through `flow.events` (R3): on TST
    their screen handlers start with ensureControllerAlive (screen_AssembleDetail.js:1049, :892), so an event from a
    left block does nothing. A state write after the unmount is dropped (`dispatch`). A failure goes to the flow
    handler with the flow scope (`flow.run`, R6). */
export function useAssembleEventContact(
  blockId: string,
  contact: AssembleEventContact,
  events: AssembleEventContactEvents,
): AssembleEventContactFlows {
  const { state, dispatch, flow } = useFlowState({
    viewName: `Assemble.AssembleEventDetail_Contact#${blockId.replace(/\$/g, '')}`,
    reducer: assembleEventContactReducer,
    initial: INITIAL_ASSEMBLE_EVENT_CONTACT_STATE,
    parameters: { contact },
    events,
  });
  const setPopupData = (data: ContactPopupData) => {
    dispatch({ type: 'contactPopupDataSet', contactPopupData: data });
  };
  const setCallPopup = (callPopup: ContactByPhonePopupData) => {
    dispatch({ type: 'callPopupSet', callPopup });
  };
  const c = contact;
  const avatar = c.ContactDetails.AvatarURL;
  const signAvatar = () => getCacheableSignedPhotoURL(avatar.Bucket, avatar.Path, avatar.Type, getSignedPhotosInBulk);
  const signedAvatar = async () => (avatar.SignedURL === '' ? signAvatar() : avatar.SignedURL);

  const onClickHostContact = async () => {
    if (await hasAccessToRegion(c.CountryCode, c.LocalityId))
      flow.events.onNavigateToHousehold(c.HouseholdId); // R3
    else await showUpgradePopUp();
  };
  const onContactByMessage = async () => {
    setPopupData({ ...contactPopupData(c), IsLoading: true });
    const url = await signedAvatar();
    setPopupData({ ...contactPopupData(c), ShowPopup: true, ImageURL: url, IsLoading: false });
  };
  const onContactByEmail = async () => {
    dispatch({ type: 'contactPopupClosed' });
    if (c.Email === UNAVAILABLE) {
      showFeedbackMessage('Unfortunately, Email is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    const url = await signAvatar();
    // R3
    flow.events.onEmailContact({
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
    setCallPopup({
      ...phones,
      ContactPopupData: { ...contactPopupData(c), ImageURL: url, ShowPopup: true, IsLoading: false },
    });
  };

  return {
    phone: contactPhone(c),
    email: contactEmail(c),
    contactPopupData: state.contactPopupData,
    callPopup: state.callPopup,
    onClickHostContact: () => {
      flow.run(onClickHostContact);
    },
    onCallClicked: (n) => {
      flow.run(() => onOptionsCall(n));
    },
    onEmailClicked: () => {
      flow.run(onContactByMessage);
    },
    onCloseCallPopup: () => {
      dispatch({ type: 'callPopupClosed' });
    },
    onCancelContactByMessage: () => {
      dispatch({ type: 'contactPopupClosed' });
    },
    onContactByEmail: () => {
      flow.run(onContactByEmail);
    },
  };
}
