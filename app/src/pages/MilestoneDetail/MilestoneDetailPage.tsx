import { useMemo, type ComponentType } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useFlagOn } from '@/platform/flags/flags';
import { showFeedbackMessage } from '@/platform/feedback';
import { getNameAndSurname_ByFullName } from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { useOsNavigate } from '@/platform/navigation';
import { AccommodationHostView } from './components/AccommodationHostView';
import { AccommodationGuestView, AccommodationHelperView } from './components/AccommodationBlockViews';
import { MealGuestView, MealHelperView, MealHostView } from './components/MealBlockViews';
import type { MilestoneBlockViewProps } from './components/milestoneBlockParts';
import {
  MilestoneWrapperView,
  type AccommodationHostSlot,
  type MilestoneBlockSlot,
} from './components/MilestoneWrapperView';
import { useAccommodationHost } from './hooks/useAccommodationHost';
import { useMilestoneBlock, type MilestoneBlockEvents } from './hooks/useMilestoneBlock';
import { useMilestoneWrapper } from './hooks/useMilestoneWrapper';
import { readMilestoneDetailInputs, type MilestoneDetailInputs } from './inputs';

const NO_ORBIT_ACCESS = "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.";

/** Connect2_LegacyShared FeedbackMessageAfterTransition: its JS node shows the message 500 ms later, after the
    navigation that follows. */
function feedbackMessageAfterTransition(message: string, messageType: number): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, messageType);
  }, 500);
}

/* The two blocks of the screen with flows. Each one is a small component that calls the hook of the block and gives
   the result to the view of the block, so the flows live as long as the block, and a change of the block state
   renders only the block, as in OutSystems:
   - ScreenBlock_MilestoneWrapper `$b1`, with the inputs of the screen.
   - ScreenBlock_AccommodationHost `b1-$b5`. The wrapper mounts it only for an accommodation host milestone (from a
     notification, after GetGmpMilestoneHost answers).
   - ScreenBlock_MealGuest `b1-$b1`, _MealHost `b1-$b2`, _MealHelper `b1-$b3`, _AccommodationGuest `b1-$b4` and
     _AccommodationHelper `b1-$b6`: the wrapper mounts one of them for its milestone type. */

function AccommodationHost({ events, ...slot }: AccommodationHostSlot & { events: MilestoneBlockEvents }) {
  return <AccommodationHostView {...slot} {...useAccommodationHost(slot.inputs, events)} />;
}

/** The view of each of the five other milestone blocks. */
const BLOCK_VIEWS: Record<MilestoneBlockSlot['block'], ComponentType<MilestoneBlockViewProps>> = {
  mealGuest: MealGuestView,
  mealHost: MealHostView,
  mealHelper: MealHelperView,
  accommodationGuest: AccommodationGuestView,
  accommodationHelper: AccommodationHelperView,
};

function MilestoneBlock({ events, block, ...slot }: MilestoneBlockSlot & { events: MilestoneBlockEvents }) {
  const View = BLOCK_VIEWS[block];
  return <View {...slot} {...useMilestoneBlock(block, slot.inputs, events)} />;
}

function MilestoneWrapper({ inputs, events }: { inputs: MilestoneDetailInputs; events: MilestoneBlockEvents }) {
  const { body } = useMilestoneWrapper(inputs);
  return (
    <MilestoneWrapperView
      id="$b1"
      body={body}
      eventName={inputs.In_EventName}
      commonUIElements={{
        mealGuest: <CommonUiLayout id="$b2" />,
        mealHost: <CommonUiLayout id="$b3" />,
        accommodationGuest: <CommonUiLayout id="$b4" />,
      }}
      commonUIElementsAccomodationHost={<CommonUiLayout id="$b5" />}
      renderAccommodationHost={(slot) => <AccommodationHost {...slot} events={events} />}
      renderMilestoneBlock={(slot) => <MilestoneBlock key={slot.block} {...slot} events={events} />}
    />
  );
}

/** @origin UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail
    ScreenBlock_MilestoneWrapper with an empty Menu placeholder and CommonUI_InsideLayout in the CommonUI placeholder of
    each type, then CommonUI_InsideLayout. The flows of the wrapper are in useMilestoneWrapper, those of the
    accommodation host in useAccommodationHost.
    - NavigateTo_GuestArrangements and NavigateTo_ContactHelpdesk first check GetHasOrbitAccess (flag
      mobileOrbitAccess, default-only on) and otherwise show the no-access message after the transition and go to
      HomeFeed; NavigateTo_HouseholdDetail goes straight there.
    - NavigateTo_ContactHostByEmail (OnHandle_NavigateToContactByEmail, no access check): the surname from
      GetNameAndSurname_ByFullName(In_ContactName), then ContactByEmailOrbitHost with the contact, In_EntityType Member,
      In_EntityId In_HostId and In_EventName of the screen (MilestoneDetail.mvc.js:408-451). */
export default function MilestoneDetail() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readMilestoneDetailInputs(params), [params]);
  const navigate = useOsNavigate();
  const hasOrbitAccess = useFlagOn('mobileOrbitAccess');

  /** The no-access branch shared by the handlers (e.g. OnHandle_NavigateTo_GuestArrangements). */
  const withOrbitAccess = (go: () => void) => {
    if (!hasOrbitAccess) {
      feedbackMessageAfterTransition(NO_ORBIT_ACCESS, 3);
      navigate('/UBTConnect/HomeFeed', {});
      return;
    }
    go();
  };

  const events: MilestoneBlockEvents = {
    onNavigateToGuestArrangements: (memberId, milestoneTypeId, milestoneTitle, hostId) => {
      // OnHandle_NavigateTo_GuestArrangements
      withOrbitAccess(() => {
        navigate('/UBTConnect/GuestArrangements', {
          In_EventId: inputs.In_EventId,
          In_EventName: inputs.In_EventName,
          In_MilestoneTitle: milestoneTitle,
          In_HostId: hostId,
          In_MemberId: memberId,
          In_MilestoneId: inputs.In_MilestoneId,
          In_OrbitMilestoneTypeId: milestoneTypeId,
        });
      });
    },
    onNavigateToHouseholdDetail: (householdId) => {
      // OnHandle_NavigateToHouseholdDetail
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
    },
    onNavigateToContactByEmail: (
      avatarURL,
      contactName,
      _contactSurname,
      contactLocality,
      contactCountry,
      emailTo,
      subject,
      milestoneTitle,
      formattedDateTime,
    ) => {
      // OnHandle_NavigateToContactByEmail: the event's In_ContactSurname is not passed on (as compiled).
      const surname = getNameAndSurname_ByFullName(contactName).Out_Surname;
      navigate('/UBTConnect/ContactByEmailOrbitHost', {
        In_HostName: contactName,
        In_EntityType: Connect_Entity.Member,
        In_Subject: subject,
        In_ContactCountry: contactCountry,
        In_FormattedDateTime: formattedDateTime,
        In_ContactLocality: contactLocality,
        In_HostEmail: emailTo,
        In_Surname: surname,
        In_AvatarURL: avatarURL,
        In_EntityId: inputs.In_HostId,
        In_MilestoneTitle: milestoneTitle,
        In_EventName: inputs.In_EventName,
      });
    },
    onNavigateToContactHelpdesk: (subject, eventName) => {
      // OnHandle_ContactHelpdesk: In_MilestoneId "" as compiled
      withOrbitAccess(() => {
        navigate('/UBTConnect/ContactByEmailOrbitHelpdesk', {
          In_Subject: subject,
          In_MilestoneId: '',
          In_EventName: eventName,
          In_EventId: inputs.In_EventId,
        });
      });
    },
  };

  return (
    <>
      <MilestoneWrapper inputs={inputs} events={events} />
      <CommonUiLayout id="$b6" />
    </>
  );
}
