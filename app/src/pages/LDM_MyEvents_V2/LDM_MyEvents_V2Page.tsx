import { useFlagOn } from '@/platform/flags/flags';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { getNameAndSurname_ByFullName } from '@/shared/UBTConnect/lib/actions';
import { setPreloadObject, useOsNavigate } from '@/platform/navigation';
import { LdmMyEventsView } from './components/LdmMyEventsView';
import { useLdmMyEvents } from './hooks/useLdmMyEvents';

/** UBTConnect.type_MyCalendarEventSource.lDM (static-entities-tst.json). */
const Type_MyCalendarEventSource_LDM = 'event-ldm';

/** The LDM "My Timeline" route. No inputs. The block ScreenBlock_MyEvents_V2 (view LdmMyEventsView, flows
    useLdmMyEvents) with the BottomBarMenu in its BottomBar and an empty Menu and CommonUI_Elements, then
    CommonUI_InsideLayout. The screen handles the events of the block with the original paths and parameter names:
    - NavigateTo_EventDetail: LDM_EventDetail_V2(EventId, EventHostId).
    - NavigateTo_HouseholdCarousel: with the carousel (flag C2EnableCarousel), SetPreloadObject (CarouselHouseholdItem
      of every guest) and HouseholdCarousel(In_StartingHouseholdId); else HouseholdDetails(HouseholdId).
    - NavigateToMyCalendar: MyEntertaining(MyCalendarEventSourceId = LDM).
    - NavigateTo_ContactByEmail: GetNameAndSurname_ByFullName(In_ContactName), then ContactByEmailMember.
    @origin UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2 */
export default function LDM_MyEvents_V2() {
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');
  const flows = useLdmMyEvents({
    onNavigateToEventDetail: (eventHostId, eventId) => {
      navigate('/UBTConnect/LDM_EventDetail_V2', { EventId: eventId, EventHostId: eventHostId });
    },
    onNavigateToHouseholdCarousel: (householdId, householdIdList) => {
      if (hasCarouselEnabled) {
        setPreloadObject({ CarouselHouseholdItem: householdIdList.map((id) => ({ Household: id })) });
        navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: householdId });
      } else {
        navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
      }
    },
    onNavigateToContactByEmail: (avatarURL, contactName, contactLocality, contactCountry, emailTo) => {
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
    },
  });

  return (
    <>
      <LdmMyEventsView
        id="$b1"
        {...flows}
        bottomBar={<BottomBar id="$b2" />}
        onMyCalendarClick={() => {
          navigate('/UBTConnect/MyEntertaining', { MyCalendarEventSourceId: Type_MyCalendarEventSource_LDM });
        }}
      />
      <CommonUiLayout id="$b3" />
    </>
  );
}
