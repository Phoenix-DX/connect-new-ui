// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList
// @os-block Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { hasAccessToRegion } from '@/shared/Connect2_Assemble_MUI/lib/actions';
import { NC_Result_Item__Image } from '@/shared/Connect2_LegacyShared/NC_Result_Item__Image';
import { PersonContactOptions } from '@/components/contact/PersonContactOptions';
import { getCacheableSignedPhotoURL, getSignedPhotosInBulk } from '@/shared/Connect2_LegacyShared/lib/actions';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import type { ContactPopupData } from '@/shared/UBTConnect_Utils/lib/structures';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { useWasRestoredFromCache } from '@/platform/navigation';
import { getAssembleEventContacts } from '@/pages/AssembleDetail/api';
import type { AssembleEventContact } from '@/pages/AssembleDetail/types';

/* GMS local contacts of AssembleEventDetail. Sources: migration/screens/AssembleDetail/sources/Connect2_Assemble_MUI
   .Assemble.AssembleEventDetail_ContactList.mvc.js (CL) and …_Contact.mvc.js (CT). */

const scopeOf = (id: string) => id.replace(/\$/g, '');

export interface EmailContactArgs {
  avatarURL: string;
  contactName: string;
  contactSurname: string;
  contactLocality: string;
  contactCountry: string;
  emailTo: string;
  memberId: string;
}

interface ContactNavigation {
  onEmailContact: (args: EmailContactArgs) => void;
  onNavigateToHousehold: (householdId: string) => void;
}

const emptyContact = (): AssembleEventContact => ({
  Email: '',
  CountryCode: '',
  LocalityId: '0',
  HouseholdId: '0',
  Timezone: { TimezoneLabel: '', OffsetSeconds: '0' },
  ContactDetails: {
    Id: '0',
    Name: '',
    Location: '',
    IsDisabled: false,
    IsBookmarked: false,
    AvatarURL: { Bucket: '', Path: '', Type: '', SignedURL: '' },
  },
  MobilePhoneNumber: '',
  HomePhoneNumber: '',
  WorkPhoneNumber: '',
  LocalityName: '',
  CountryName: '',
});

/** Assemble.AssembleEventDetail_ContactList (CL view :255-390, OnReady :452-680): a `list list-group` List of
    AssembleEventDetail_Contact. OnReady (not restored from cache): one empty contact per id (loading rows), then
    GetCacheableMemberContactList(AssembleEventContactIdList) → AssembleEventContactList and IsDataFetched True. */
export function AssembleEventDetail_ContactList({
  id,
  assembleEventContactIdList,
  ...nav
}: ContactNavigation & { id: string; assembleEventContactIdList: string[] }) {
  const scope = scopeOf(id);
  const fromCache = useWasRestoredFromCache();
  // OnReady (not restored from cache) first lists one empty contact per id (CL :532-560).
  const [contacts, setContacts] = useState<AssembleEventContact[]>(() =>
    fromCache ? [] : assembleEventContactIdList.map(emptyContact),
  );
  const [isDataFetched, setIsDataFetched] = useState(false);
  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    if (fromCache) return;
    void (async () => {
      setContacts(await getAssembleEventContacts(assembleEventContactIdList));
      setIsDataFetched(true);
    })().catch(raiseToFlowHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_ContactList" id={id}>
      <OSList
        className="list list-group"
        animateItems
        source={contacts}
        keyOf={(c, i) => `${c.ContactDetails.Id}-${String(i)}`}
      >
        {(c, i) => (
          <AssembleEventDetail_Contact
            id={`${scope}-$b1-${String(i)}`}
            contact={c}
            isDataFetched={isDataFetched}
            {...nav}
          />
        )}
      </OSList>
    </OSBlock>
  );
}

/** UnavailableContactValue (CT :50-60). */
const UNAVAILABLE = 'Unavailable';

const popupData = (c: AssembleEventContact): ContactPopupData => ({
  IsAvatarImage: true,
  Name: c.ContactDetails.Name,
  Locality: c.LocalityName,
  TimezoneName: c.Timezone.TimezoneLabel,
  TimezoneOffset: Number(c.Timezone.OffsetSeconds),
  CountryName: c.CountryName,
});

/** Assemble.AssembleEventDetail_Contact (CT view :317-805, controller :858-1680). Div_EventContacts__Content__HostContact
    (`padding-y-s`) > Block_HostContact NC_Result_Item__Image (round, loading until the list is fetched; name, location;
    Person_Contact_Options with the first phone of mobile / home / work and the e-mail, "Unavailable" when empty),
    FreeSubscriptionAlert, ContactPopup_ByPhone (CallPopup) and ContactByMessage_Wrapper (e-mail, mobile, ContactPopupData).
    - item click (Handler_OnClickHostContact, CT :1196-1297): HasAccessToRegion(CountryCode, LocalityId); no access →
      App_Subscription_ShowUpgradePopUp, else NavigateTo_Household(HouseholdId);
    - call (Handler_OptionsCall, CT :1343-1560): "Unavailable" → Info "Unfortunately, Phone Number is not available";
      else CallPopup (popup data, phones; the avatar signed through GetCacheableSignedPhotoURL when empty) shown;
    - e-mail (Handler_ContactByMessage, CT :860-1032): ContactPopupData shown the same way; its Event_Email
      (Handler_ContactByEmail, CT :1033-1150): close it; "Unavailable" → Info "Unfortunately, Email is not available",
      else GetCacheableSignedPhotoURL and NavigateTo_EmailContact(URL, name, "", locality, country, e-mail, member id);
      Event_Cancel closes it (CT :1151-1195); the phone popup's Event_Call / Event_Cancel close it (CT :1298-1342). */
export function AssembleEventDetail_Contact({
  id,
  contact: c,
  isDataFetched,
  onEmailContact,
  onNavigateToHousehold,
}: ContactNavigation & { id: string; contact: AssembleEventContact; isDataFetched: boolean }) {
  const scope = scopeOf(id);
  const [contactPopupData, setContactPopupData] = useState<ContactPopupData>({});
  const [callPopup, setCallPopup] = useState<ContactByPhonePopupData>({});
  const phone =
    c.MobilePhoneNumber !== ''
      ? c.MobilePhoneNumber
      : c.HomePhoneNumber !== ''
        ? c.HomePhoneNumber
        : c.WorkPhoneNumber !== ''
          ? c.WorkPhoneNumber
          : UNAVAILABLE;
  const email = c.Email !== '' ? c.Email : UNAVAILABLE;
  const avatar = c.ContactDetails.AvatarURL;
  const signedAvatar = async () =>
    avatar.SignedURL === ''
      ? getCacheableSignedPhotoURL(avatar.Bucket, avatar.Path, avatar.Type, getSignedPhotosInBulk)
      : avatar.SignedURL;

  const onClickHostContact = async () => {
    if (await hasAccessToRegion(c.CountryCode, c.LocalityId)) onNavigateToHousehold(c.HouseholdId);
    else await showUpgradePopUp();
  };
  const onContactByMessage = async () => {
    setContactPopupData({ ...popupData(c), IsLoading: true });
    const url = await signedAvatar();
    setContactPopupData({ ...popupData(c), ShowPopup: true, ImageURL: url, IsLoading: false });
  };
  const onContactByEmail = async () => {
    setContactPopupData((d) => ({ ...d, ShowPopup: false }));
    // Handler_ContactByEmail compares the record's Email with "Unavailable" (CT :1067-1080), as compiled.
    if (c.Email === UNAVAILABLE) {
      showFeedbackMessage('Unfortunately, Email is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    const url = await getCacheableSignedPhotoURL(avatar.Bucket, avatar.Path, avatar.Type, getSignedPhotosInBulk);
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
    setCallPopup({ ...phones, ContactPopupData: { ...popupData(c), IsLoading: true } });
    const url = await signedAvatar();
    setCallPopup({
      ...phones,
      ContactPopupData: { ...popupData(c), ImageURL: url, ShowPopup: true, IsLoading: false },
    });
  };
  const closeCallPopup = () => {
    setCallPopup((p) => ({ ...p, ContactPopupData: { ...p.ContactPopupData, ShowPopup: false } }));
  };

  return (
    <OSBlock name="Assemble.AssembleEventDetail_Contact" id={id}>
      <div className="padding-y-s" data-container="" id={`${scope}-Div_EventContacts__Content__HostContact`}>
        <NC_Result_Item__Image
          id={`${scope}-Block_HostContact`}
          inSignedURL={avatar.SignedURL}
          inIsRoundImage
          isLoading={!isDataFetched}
          inType={avatar.Type}
          inPath={avatar.Path}
          inBucket={avatar.Bucket}
          onOnClickItem={() => void onClickHostContact().catch(raiseToFlowHandler)}
          titlePlaceholder={<span data-expression="">{c.ContactDetails.Name}</span>}
          descriptionPlaceholder={<span data-expression="">{c.ContactDetails.Location}</span>}
          actionPlaceholder={
            <PersonContactOptions
              id={`${scope}-$b2`}
              phone={phone}
              emailAddress={email}
              onCallClicked={(n) => void onOptionsCall(n).catch(raiseToFlowHandler)}
              onEmailClicked={() => void onContactByMessage().catch(raiseToFlowHandler)}
            />
          }
        />
      </div>
      <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b3`} />
      <ContactPopupByPhone
        id={`${scope}-$b4`}
        inCallPopupData={callPopup}
        onEventCall={closeCallPopup}
        onEventCancel={closeCallPopup}
      />
      <ContactByMessage
        id={`${scope}-$b5`}
        inContactPopupData={{ Email: c.Email, Phone: c.MobilePhoneNumber, ContactPopupData: contactPopupData }}
        onEventCancel={() => {
          setContactPopupData((d) => ({ ...d, ShowPopup: false }));
        }}
        onEventEmail={() => void onContactByEmail().catch(raiseToFlowHandler)}
      />
    </OSBlock>
  );
}
