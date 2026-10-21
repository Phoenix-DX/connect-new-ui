import { useSearchParams } from 'react-router';
import { useFlagOn } from '../../lib/flags';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { getNameAndSurname_ByFullName } from '../../shared/UBTConnect/lib/actions';
import { pageRedirect } from '../../shell/feedback/pageRedirect';
import { generateScreenURL, setPreloadObject, useOsNavigate } from '../../shell/navigation';
import { readInputs } from './api';
import { ScreenBlock_EventDetail_V2 } from './components/ScreenBlock_EventDetail_V2';

/** UBTConnect Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2 (analysis/sources/pretty/UBTConnect.Legacy_LDMEventsFlow_V2
    .LDM_EventDetail_V2.mvc.js: view :100-300, controller :300-700). Inputs EventHostId, EventId (Long Integer).
    ScreenBlock_EventDetail_V2 with BottomBarMenu in its BottomBar, then CommonUI_InsideLayout. A change of the inputs
    mounts a new block (OnParametersChanged refreshes both data actions, SB :1665-1701). Its events navigate to the
    original paths with the original parameter names (ContactByEmailLDMCoordinator is not built yet and goes to its
    route all the same):
    - Handler_NavigateTo_HouseholdCarousel → GetHasCarouselEnabled (flag C2EnableCarousel, default-only on):
      SetPreloadObject (CarouselHouseholdItem of every guest) and HouseholdCarousel(In_StartingHouseholdId), else
      HouseholdDetails(HouseholdId) (:307-402);
    - Handler_EventDetailNavigateTo_HouseholdDetail → HouseholdDetails(HouseholdId) (:403-440);
    - Handler_NavigateTo_WebMaps → https://www.google.com/maps/dir/?api=1 (api, query) (:441-488);
    - Handler_NavigateTo_ContactByEmail (:489-636): the coordinator → ContactByEmailLDMCoordinator(In_EmailTo,
      In_ContactName, In_EventDate, In_AvatarURL, In_Subject, In_EventLocality); a household →
      GetNameAndSurname_ByFullName(Event_ContactName) and ContactByEmailMember(…, In_IsHousehold True, …).
    NavigateTo_AndroidMaps (geo:0,0) is the Android branch (out of scope, rule 14). */
export default function LDM_EventDetail_V2() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');

  return (
    <>
      <ScreenBlock_EventDetail_V2
        key={`${inputs.EventHostId}-${inputs.EventId}`}
        id="$b1"
        inputs={inputs}
        bottomBar={<BottomBarMenu id="$b2" />}
        onNavigateToHouseholdCarousel={(householdId, householdIdList) => {
          if (hasCarouselEnabled) {
            setPreloadObject({ CarouselHouseholdItem: householdIdList.map((id) => ({ Household: id })) });
            navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: householdId });
          } else {
            navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
          }
        }}
        onNavigateToHouseholdDetail={(householdId) => {
          navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
        }}
        onNavigateToWebMaps={(api, query) => {
          pageRedirect(generateScreenURL('https://www.google.com/maps/dir/?api=1', { api: String(api), query }));
        }}
        onNavigateToContactByEmail={(a) => {
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
        }}
      />
      <CommonUI_InsideLayout id="$b3" />
    </>
  );
}
