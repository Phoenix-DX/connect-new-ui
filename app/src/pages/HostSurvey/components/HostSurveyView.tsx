import type { ReactNode } from 'react';
import type { HostSurveyMeal, HostSurveyRoom } from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { SurveyStatus, type HostSurveyState } from '@/pages/HostSurvey/hooks/hostSurveyState';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { HostSurveyStep, type LocalLabelledRecord } from '@/platform/storage/localEntities';
import { getFormattedDateTime } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { Accordion } from '@/shared/osui/Accordion';
import { AccordionItem } from '@/shared/osui/AccordionItem';
import { HostSurvey_AccommodationPills } from './HostSurvey_AccommodationPills';
import { HostSurvey_Item } from './HostSurvey_Item';
import { HostSurvey_MealPills } from './HostSurvey_MealPills';
import { HostSurvey_TopMessage } from './HostSurvey_TopMessage';
import { Orbit_ConfirmationPopUp_New } from './Orbit_ConfirmationPopUp_New';

/** Connect2_OrbitMobile_MUI.menuAction.auto (HS view :430-445). */
const MENU_ACTION_AUTO = 'Auto';

export interface HostSurveyViewProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** The block inputs that the header shows (In_EventName, In_EventStartDate, In_EventEndDate). */
  inputs: HostSurveyInputs;
  /** The block variables (useHostSurvey). */
  state: HostSurveyState;
  /** GetLocalHouseFloors.List: the floor labels of the room pills. */
  houseFloors: readonly LocalLabelledRecord[];
  /** GetLocalGenderPreferences.List: the gender preference labels of the room pills. */
  genderPreferences: readonly LocalLabelledRecord[];
  /** The Edit link of a summary section: NavigateTo_SpecificStep(HostSurveyStepId). */
  onEditStep: (hostSurveyStepId: number) => void;
  /** The BackNavigationHandler of the block (instance `$b43`), after the layout. */
  backNavigationHandler?: ReactNode;
}

/** The header subtitle: GetFormattedDateTime(date, no time, weekday, full letters, abbreviated) (HS view :486-510). */
const formattedDay = (d: string) => getFormattedDateTime(d, false, true, false, true, false, false);

/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey
    The view of the host survey block (HS = Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.
    ScreenBlock_HostSurvey.mvc.js, view :382-3516), props only: Layout_Orbit with the menu icon, the event name and
    dates, the header banner, the content (the loading skeleton, "no longer available" (Unable to Host), the summary
    of a survey (captured: confirmed, read-only), or "no setup"), the five closed popups, then the
    BackNavigationHandler. Not captured (HostSurvey Q2, NotCaptured): the data steps of a survey still to answer
    (navigation, accommodation, meal, helper and vehicle steps with their items, notes, add-helper and the footer with
    Next / Submit, the popups they open) and the helper and vehicle sections of the summary (HelperPills,
    VehiclePills). */
export function HostSurveyView({
  id,
  inputs,
  state: s,
  houseFloors,
  genderPreferences,
  onEditStep,
  backNavigationHandler,
}: HostSurveyViewProps) {
  const prefix = id.replace(/^\$/, '');
  const { In_EventName, In_EventStartDate, In_EventEndDate } = inputs;
  const info = s.hostSurvey.SurveyInfo;
  const stepId = s.currentStep.step.Id;

  const title =
    In_EventStartDate !== '' && In_EventEndDate !== ''
      ? `${formattedDay(In_EventStartDate)} - ${formattedDay(In_EventEndDate)}`
      : info.EventStartDateTime !== '' && info.EventEndDateTime !== ''
        ? `${formattedDay(info.EventStartDateTime)} - ${formattedDay(info.EventEndDateTime)}`
        : '';

  /** The Edit link of a summary section (HS view :2048-2101): Container Visible = not IsConfirmedSurvey. */
  const editLink = (step: number) =>
    s.isConfirmedSurvey ? null : (
      <div className="text-align-right color-orbit-primary-7 font-size-s" data-container="">
        <div
          className="bold display-flex flex-direction-row align-items-center justify-content-flex-end"
          data-container=""
          onClick={() => {
            onEditStep(step);
          }}
        >
          <i className="icon orbit-icon-edit" data-icon="" />
          <span className="margin-left-s">Edit</span>
        </div>
      </div>
    );

  const rooms = s.hostSurvey.Rooms.HostSurvey_RoomItem;
  const meals = s.hostSurvey.Meals.MealItemInfo;

  /** Summary step (HS view :1937-2861). */
  const summary = (
    <div className="orbit-host-survey-summary" data-container="">
      <HostSurvey_TopMessage
        id={`${prefix}-$b19`}
        inMessage={
          !s.isConfirmedSurvey
            ? 'Please ensure all details are correct before submission.'
            : 'If you require further updates to your Host Survey, please contact the Orbit Helpdesk.'
        }
        inTitle={s.isConfirmedSurvey ? '' : 'Summary Review'}
      />
      {info.HostSurveyNote !== '' && (
        <HostSurvey_TopMessage id={`${prefix}-$b20`} inTitle="Notes for Event Team" inMessage={info.HostSurveyNote} />
      )}
      {/* MultipleItems True (HS view :2000-2004): both items start expanded and stay open (CR-HostSurvey-2). */}
      <Accordion id={`${prefix}-$b21`} multipleItems extendedClass="orbit-host-survey-accordion">
        {info.AccommodationSurvey && info.AccommodationSurveyUpdate && (
          <AccordionItem
            id={`${prefix}-$b22`}
            startsExpanded
            title="Accommodation"
            content={
              <>
                {editLink(HostSurveyStep.accommodation)}
                {rooms.length > 0 ? (
                  <OSList
                    className="list list-group"
                    animateItems
                    disableVirtualization
                    source={rooms}
                    keyOf={(_r: HostSurveyRoom, i) => i}
                  >
                    {(room, i) => (
                      <div className="orbit-host-survey-list-item" data-container="">
                        <HostSurvey_Item
                          id={`${prefix}-l5-142863_${String(i)}-$b23`}
                          inTitle={`Room ${String(i + 1)}`}
                          inHasPlaceholder={false}
                          placeholderContent={
                            <HostSurvey_AccommodationPills
                              id={`${prefix}-l5-142863_${String(i)}-$b24`}
                              inIsDisabled={s.isConfirmedSurvey}
                              inHostSurvey_Room={room}
                              inHouseFloors={houseFloors}
                              inGenderPreferences={genderPreferences}
                            />
                          }
                        />
                      </div>
                    )}
                  </OSList>
                ) : (
                  <div className="font-size-s" data-container="">
                    No room data added.
                  </div>
                )}
              </>
            }
          />
        )}
        {info.MealSurvey && info.MealSurveyUpdate && (
          <AccordionItem
            id={`${prefix}-$b25`}
            startsExpanded
            title="Meal Options"
            content={
              <>
                {editLink(HostSurveyStep.meal)}
                {meals.length > 0 ? (
                  <OSList
                    className="list list-group"
                    animateItems
                    disableVirtualization
                    source={meals}
                    keyOf={(meal: HostSurveyMeal) => meal.Id}
                  >
                    {(meal, i) => (
                      <div className="orbit-host-survey-list-item" data-container="">
                        <HostSurvey_Item
                          id={`${prefix}-l6-142871_${String(i)}-$b26`}
                          inTitle={meal.MilestoneDescription}
                          inHasPlaceholder={false}
                          placeholderContent={
                            <HostSurvey_MealPills
                              id={`${prefix}-l6-142871_${String(i)}-$b27`}
                              inHostSurvey_Meal={meal}
                              inIsDisabled={s.isConfirmedSurvey}
                            />
                          }
                        />
                      </div>
                    )}
                  </OSList>
                ) : (
                  <div className="font-size-s" data-container="">
                    No meal data added.
                  </div>
                )}
              </>
            }
          />
        )}
        {info.HelperSurvey && <NotCaptured name="HostSurvey summary: Helpers section (HS view :2407-2652, Q2)" />}
        {info.VehicleSurvey && <NotCaptured name="HostSurvey summary: Vehicles section (HS view :2653-2854, Q2)" />}
      </Accordion>
    </div>
  );

  /** Content (HS view :571-2926): skeleton while fetching; Unable to Host → NoInformation; with data steps or a
      confirmed survey → the current step; otherwise "There is no setup for this household yet.". */
  const content: ReactNode = s.isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b36`} inSkeletonLoadingId={OrbitSkeletonLoading.HostSurvey} />
  ) : s.currentStatus.Id === SurveyStatus.unableToHost ? (
    <OrbitNoInformation
      id={`${prefix}-$b35`}
      message="This Survey is no longer available for you. Please check again later or contact the Orbit Helpdesk if you have any questions."
    />
  ) : s.hasDataSteps || s.isConfirmedSurvey ? (
    stepId === HostSurveyStep.summary ? (
      summary
    ) : stepId !== 0 ? (
      <NotCaptured name={`HostSurvey data step ${String(stepId)} (HS view :574-1936, Q2)`} />
    ) : null
  ) : (
    <div className="padding-m background-neutral-0" data-container="">
      <span data-expression="">There is no setup for this household yet.</span>
    </div>
  );

  /** HeaderContent (HS view :516-566): StepHeader on a data step (not captured, Q2); the summary banner. */
  const headerContent: ReactNode = s.currentStep.step.IsDataStep ? (
    <NotCaptured name="HostSurvey_StepHeader (HS view :516-540, Q2)" />
  ) : stepId === HostSurveyStep.summary ? (
    <div
      className="orbit-host-survey-header-summary full-width background-neutral-0 bold color-orbit-primary-8 font-size-base"
      data-container=""
    >
      <span data-expression="">{s.isConfirmedSurvey ? 'Summary Review' : 'Ready to Submit'}</span>
    </div>
  ) : null;

  /** BottomBar (HS view :3320-3465): Orbit_FooterWithActions while a survey is answered (not captured, Q2). */
  const bottomBar: ReactNode =
    !s.isConfirmedSurvey && s.hasDataSteps && s.currentStatus.Id !== SurveyStatus.unableToHost ? (
      <NotCaptured name="HostSurvey footer Orbit_FooterWithActions (HS view :3320-3465, Q2)" />
    ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass={`orbit-detail orbit-host-survey${!s.hasDataSteps ? ' orbit-host-survey-no-steps' : ''}`}
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <>
            <div className="orbit-host-survey-header-title" data-container="">
              <span data-expression="">{In_EventName !== '' ? In_EventName : info.EventName}</span>
            </div>
            <div className="font-size-s" data-container="">
              <span data-expression="">{title}</span>
            </div>
          </>
        }
        headerContent={headerContent}
        content={
          <>
            {content}
            <Orbit_ConfirmationPopUp_New id={`${prefix}-PopUp_Cancel`} inShowPopUp={false} />
            <Orbit_ConfirmationPopUp_New id={`${prefix}-PopUp_Delete`} inShowPopUp={false} />
            <Orbit_ConfirmationPopUp_New id={`${prefix}-PopUp_NoInfo`} inShowPopUp={false} />
            <Orbit_ConfirmationPopUp_New id={`${prefix}-PopUp_ReturnNavigation`} inShowPopUp={false} />
            <Orbit_ConfirmationPopUp_New id={`${prefix}-PopUp_ReturnBack`} inShowPopUp={false} />
          </>
        }
        bottomBar={bottomBar}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
      {backNavigationHandler}
    </OSBlock>
  );
}
