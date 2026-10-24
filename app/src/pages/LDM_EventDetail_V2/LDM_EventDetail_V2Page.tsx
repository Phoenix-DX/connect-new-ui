import { useSearchParams } from 'react-router';
import { useFlagOn } from '@/platform/flags/flags';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { getNameAndSurname_ByFullName } from '@/lib/ubtConnect/actions';
import { pageRedirect } from '@/platform/feedback/pageRedirect';
import { generateScreenURL, setPreloadObject, useOsNavigate } from '@/platform/navigation';
import { LdmEventDetailView } from './components/LdmEventDetailView';
import { useLdmEventDetail, type LdmEventDetailEvents } from './hooks/useLdmEventDetail';
import { readLdmEventDetailInputs, type LdmEventDetailInputs } from './inputs';

/** @origin UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2
    Inputs EventHostId, EventId (Long Integer). ScreenBlock_EventDetail_V2 (its flows in useLdmEventDetail, its view in
    LdmEventDetailView) with BottomBarMenu in its BottomBar, then CommonUI_InsideLayout. A change of the inputs mounts
    a new block (OnParametersChanged refreshes both data actions). Its events navigate to the original paths with the
    original parameter names (ContactByEmailLDMCoordinator is not built yet and goes to its route all the same):
    - Handler_NavigateTo_HouseholdCarousel → GetHasCarouselEnabled (flag C2EnableCarousel, default-only on):
      SetPreloadObject (CarouselHouseholdItem of every guest) and HouseholdCarousel(In_StartingHouseholdId), else
      HouseholdDetails(HouseholdId);
    - Handler_EventDetailNavigateTo_HouseholdDetail → HouseholdDetails(HouseholdId);
    - Handler_NavigateTo_WebMaps → https://www.google.com/maps/dir/?api=1 (api, query);
    - Handler_NavigateTo_ContactByEmail: the coordinator → ContactByEmailLDMCoordinator(In_EmailTo, In_ContactName,
      In_EventDate, In_AvatarURL, In_Subject, In_EventLocality); a household →
      GetNameAndSurname_ByFullName(Event_ContactName) and ContactByEmailMember(…, In_IsHousehold True, …).
    NavigateTo_AndroidMaps (geo:0,0) is the Android branch (out of scope, rule 14). */
export default function LDM_EventDetail_V2() {
  const [params] = useSearchParams();
  const inputs = readLdmEventDetailInputs(params);
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');

  const events: LdmEventDetailEvents = {
    onNavigateToHouseholdCarousel: (householdId, householdIdList) => {
      if (hasCarouselEnabled) {
        setPreloadObject({ CarouselHouseholdItem: householdIdList.map((id) => ({ Household: id })) });
        navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: householdId });
      } else {
        navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
      }
    },
    onNavigateToHouseholdDetail: (householdId) => {
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
    },
    onNavigateToWebMaps: (api, query) => {
      pageRedirect(generateScreenURL('https://www.google.com/maps/dir/?api=1', { api: String(api), query }));
    },
    onNavigateToContactByEmail: (a) => {
      if (a.isCoordinator) {
        navigate('/UBTConnect/ContactByEmailLDMCoordinator', {
          In_EmailTo: a.emailTo,
          In_ContactName: a.contactName,
          In_EventDate: a.date,
          In_AvatarURL: a.avatarURL,
          In_Subject: a.subject,
          In_EventLocality: a.locality,
        });
        return;
      }
      const split = getNameAndSurname_ByFullName(a.contactName);
      navigate('/UBTConnect/ContactByEmailMember', {
        In_AvatarURL: a.avatarURL,
        In_EmailTo: a.emailTo,
        In_LDMEventLocality: a.locality,
        In_ContactName: split.Out_Name,
        In_IsHousehold: true,
        In_ContactCountry: a.contactCountry,
        In_ContactLocality: a.contactLocality,
        In_ContactSurname: split.Out_Surname,
        In_LDMEventDate: a.date,
        In_HouseholdHeaderName: split.Out_Surname,
      });
    },
  };

  return (
    <>
      <LdmEventDetail key={`${inputs.EventHostId}-${inputs.EventId}`} inputs={inputs} events={events} />
      <CommonUiLayout id="$b3" />
    </>
  );
}

/** One instance of ScreenBlock_EventDetail_V2 (`$b1`), with BottomBarMenu (`$b2`) in its BottomBar. */
function LdmEventDetail({ inputs, events }: { inputs: LdmEventDetailInputs; events: LdmEventDetailEvents }) {
  const flows = useLdmEventDetail(inputs, events);
  return <LdmEventDetailView id="$b1" {...flows} bottomBar={<BottomBar id="$b2" />} />;
}
