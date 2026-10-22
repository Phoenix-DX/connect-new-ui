import { useFlagOn } from '@/platform/flags/flags';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { getNameAndSurname_ByFullName } from '@/shared/UBTConnect/lib/actions';
import { setPreloadObject, useOsNavigate } from '@/platform/navigation';
import { ScreenBlock_MyEvents_V2 } from './components/ScreenBlock_MyEvents_V2';

/** UBTConnect.type_MyCalendarEventSource.lDM (static-entities-tst.json). */
const Type_MyCalendarEventSource_LDM = 'event-ldm';

/** UBTConnect Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2 (analysis/sources/pretty/UBTConnect.Legacy_LDMEventsFlow_V2
    .LDM_MyEvents_V2.mvc.js: view :115-243, controller :264-560). No inputs. ScreenBlock_MyEvents_V2 with BottomBarMenu
    in its BottomBar and empty Menu / CommonUI_Elements, then CommonUI_InsideLayout. Its events navigate to the
    original paths with the original parameter names (LDM_EventDetail_V2 and ContactByEmailMember not built yet go to
    their routes all the same):
    - NavigateTo_EventDetail → LDM_EventDetail_V2(EventId, EventHostId) (:340-365);
    - NavigateTo_HouseholdCarousel → GetHasCarouselEnabled (flag C2EnableCarousel, default-only on): SetPreloadObject
      (CarouselHouseholdItem of every guest) and HouseholdCarousel(In_StartingHouseholdId), else
      HouseholdDetails(HouseholdId) (:405-470);
    - NavigateToMyCalendar → MyEntertaining(MyCalendarEventSourceId = LDM) (:380-400);
    - NavigateTo_ContactByEmail → GetNameAndSurname_ByFullName(In_ContactName), ContactByEmailMember (:267-300). */
export default function LDM_MyEvents_V2() {
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');

  return (
    <>
      <ScreenBlock_MyEvents_V2
        id="$b1"
        bottomBar={<BottomBarMenu id="$b2" />}
        onNavigateToEventDetail={(eventHostId, eventId) => {
          navigate('/UBTConnect/LDM_EventDetail_V2', { EventId: eventId, EventHostId: eventHostId });
        }}
        onNavigateToHouseholdCarousel={(householdId, householdIdList) => {
          if (hasCarouselEnabled) {
            setPreloadObject({ CarouselHouseholdItem: householdIdList.map((id) => ({ Household: id })) });
            navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: householdId });
          } else {
            navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
          }
        }}
        onNavigateToMyCalendar={() => {
          navigate('/UBTConnect/MyEntertaining', { MyCalendarEventSourceId: Type_MyCalendarEventSource_LDM });
        }}
        onNavigateToContactByEmail={(avatarURL, contactName, contactLocality, contactCountry, emailTo) => {
          const split = getNameAndSurname_ByFullName(contactName);
          navigate('/UBTConnect/ContactByEmailMember', {
            In_AvatarURL: avatarURL,
            In_ContactCountry: contactCountry,
            In_IsHousehold: true,
            In_HouseholdHeaderName: split.Out_Surname,
            In_ContactName: split.Out_Name,
            In_ContactLocality: contactLocality,
            In_ContactSurname: split.Out_Surname,
            In_EmailTo: emailTo,
          });
        }}
      />
      <CommonUI_InsideLayout id="$b3" />
    </>
  );
}
