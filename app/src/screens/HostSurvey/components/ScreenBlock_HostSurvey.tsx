import { useEffect, useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { NoInformation_Orbit } from '@/shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '@/shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import { getFormattedDateTime } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler/BackNavigationHandler';
import { Accordion } from '@/shared/osui/Accordion';
import { AccordionItem } from '@/shared/osui/AccordionItem';
import {
  HostSurveyStep,
  getLocalGenderPreferences,
  getLocalHostSurveySteps,
  getLocalHouseFloors,
  getLocalSurveyStatusByJSONName,
  localHostSurveyStepsRead,
  useOrbitStaticEntitiesVersion,
  type LocalHostSurveyStep,
  type LocalSurveyStatus,
} from '@/platform/storage/localEntities';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getHostSurvey } from '@/screens/HostSurvey/api';
import type { HostSurvey, HostSurveyMeal, HostSurveyRoom, HostSurveyVariablesWire } from '@/screens/HostSurvey/types';
import {
  HostSurvey_AccommodationPills,
  HostSurvey_Item,
  HostSurvey_MealPills,
  HostSurvey_TopMessage,
  Orbit_ConfirmationPopUp_New,
} from './HostSurvey_Blocks';

/* ScreenBlock_HostSurvey (HS = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.
   ScreenBlock_HostSurvey.mvc.js: model :1-331, view :382-3516, controller :3518-7680).
   Built: the load flow, the header, the summary of a survey (captured: confirmed, read-only), the loading skeleton,
   "no longer available" (Unable to Host) and "no setup" branches, the back navigation of a confirmed survey.
   Not captured (HostSurvey Q2, NotCaptured): the data steps of a survey still to answer (navigation, accommodation,
   meal, helper and vehicle steps with their items, notes, add-helper and the footer with Next / Submit, the popups
   they open, PostHostSurvey) and the helper and vehicle sections of the summary (HelperPills, VehiclePills). */

/** Connect2_OrbitMobile_MUI.menuAction.auto (HS view :430-445). */
const MENU_ACTION_AUTO = 'Auto';
/** Static entity SurveyStatus of Connect2_OrbitMobile_MUI (static-entities-tst.json). */
const SurveyStatus = { unableToHost: 1, confirmed: 2 } as const;

const EMPTY_STEP: LocalHostSurveyStep = { Id: 0, HeaderLabel: '', AddLabel: '', Order: 0, IsDataStep: false };
const EMPTY_STATUS: LocalSurveyStatus = { Id: 0, Label: '', JSON_Name: '' };

const EMPTY_SURVEY: HostSurvey = {
  SurveyInfo: {
    Id: '0',
    EventId: '0',
    EventName: '',
    EventStartDateTime: '',
    EventEndDateTime: '',
    MemberId: '0',
    LocalityName: '',
    CountryName: '',
    HostProfileSurveyStatus: '',
    AccommodationSurvey: false,
    AccommodationSurveyUpdate: false,
    AccommodationSurveyNote: '',
    MealSurvey: false,
    MealSurveyUpdate: false,
    MealSurveyNote: '',
    HelperSurvey: false,
    HelperSurveyNote: '',
    VehicleSurvey: false,
    VehicleSurveyNote: '',
    HostSurveyNote: '',
  },
  Rooms: { AccommodationNote: '', HostSurvey_RoomItem: [] },
  Meals: { MealNote: '', MealItemInfo: [] },
  Helpers: { HelperNote: '', HelperItemInfo: [] },
  Vehicles: { HasVehicles: false, VehicleItemInfo: [] },
};

/** Block variables (HS model :25-200) and the aggregate results the view reads. */
interface Model {
  isFetchingData: boolean;
  hostSurvey: HostSurvey;
  currentStep: { step: LocalHostSurveyStep; rowNumber: number };
  isConfirmedSurvey: boolean;
  hasDataSteps: boolean;
  /** GetCurrentLocalSurveyStatus.List.Current (LocalSurveyStatus where JSON_Name = HostProfileSurveyStatus, max 1). */
  currentStatus: LocalSurveyStatus;
  /** GetLocalHostSurveySteps.List. */
  steps: LocalHostSurveyStep[];
}

const INITIAL_MODEL: Model = {
  isFetchingData: false,
  hostSurvey: EMPTY_SURVEY,
  currentStep: { step: EMPTY_STEP, rowNumber: 0 },
  isConfirmedSurvey: false,
  hasDataSteps: false,
  currentStatus: EMPTY_STATUS,
  steps: [],
};

export interface ScreenBlock_HostSurveyProps {
  id: string;
  In_EventId: string;
  In_MemberId: string;
  In_EventName: string;
  /** OutSystems DateTimes as text ("" = null). */
  In_EventStartDate: string;
  In_EventEndDate: string;
  /** Event NavigateTo_Back. */
  onNavigateToBack: () => void;
  menu?: ReactNode;
  commonUIElements?: ReactNode;
}

/** The header subtitle: GetFormattedDateTime(date, no time, weekday, full letters, abbreviated) (HS view :486-510). */
const formattedDay = (d: string) => getFormattedDateTime(d, false, true, false, true, false, false);

export function ScreenBlock_HostSurvey(props: ScreenBlock_HostSurveyProps) {
  const { id, In_EventId, In_MemberId, In_EventName, In_EventStartDate, In_EventEndDate } = props;
  const prefix = id.replace(/^\$/, '');
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables the data action sends (screenData.variables, see HostSurveyVariablesWire). */
  const variables = (): HostSurveyVariablesWire => {
    const s = m();
    return {
      IsFetchingData: s.isFetchingData,
      IsAddingHelper: false,
      PositionToDelete: 0,
      SurveyDiscarded: false,
      SurveySubmitted: false,
      IsConfirmedSurvey: s.isConfirmedSurvey,
      HasDataSteps: s.hasDataSteps,
      IsPostingSurvey: false,
      In_EventId,
      In_MemberId,
      In_EventName,
      In_EventStartDate,
      In_EventEndDate,
    };
  };

  /** A flow waiting for the store's first read (refreshLocalSurveyStatus). */
  const waitingForStore = useRef(false);

  /** OnAfterFetch_GetHostSurveySteps (HS :5825-5881): CurrentStep = the first row (CurrentRowNumber 0); HasDataSteps =
      some row is a data step; RefreshStaticEntities (the floors and gender preferences the summary reads, HS
      :5604-5776: read from the shell's local entities at render, CR-HostSurvey-1), SetStepData and ValidateStepEdit
      (data steps only, Q2); IsFetchingData = False. */
  const refreshLocalSurveySteps = () => {
    const info = m().hostSurvey.SurveyInfo;
    const steps = getLocalHostSurveySteps({
      isConfirmedSurvey: m().isConfirmedSurvey,
      accommodationSurvey: info.AccommodationSurvey,
      accommodationSurveyUpdate: info.AccommodationSurveyUpdate,
      mealSurvey: info.MealSurvey,
      mealSurveyUpdate: info.MealSurveyUpdate,
      helperSurvey: info.HelperSurvey,
      vehicleSurvey: info.VehicleSurvey,
    });
    set({
      steps,
      currentStep: { step: steps[0] ?? EMPTY_STEP, rowNumber: 0 },
      hasDataSteps: steps.some((s) => s.IsDataStep),
      isFetchingData: false,
    });
  };

  /** RefreshLocalSurveyStatus (HS :6078-6120) → GetCurrentLocalSurveyStatus (HS :3758-3800) → OnAfterFetch_GetSurveyStatus
      (HS :7116-7147): IsConfirmedSurvey = status Id = Confirmed, then RefreshLocalSurveySteps (HS :6770-6822). */
  const refreshLocalSurveyStatus = () => {
    /* The original's aggregates wait for the device database; here the store's mirror may not be loaded yet on a page
       opened by URL (shell/localEntities/orbitStaticEntities.ts): the flow goes on when it is (effect below). */
    if (!localHostSurveyStepsRead()) {
      waitingForStore.current = true;
      return;
    }
    waitingForStore.current = false;
    const status = getLocalSurveyStatusByJSONName(m().hostSurvey.SurveyInfo.HostProfileSurveyStatus)[0] ?? EMPTY_STATUS;
    set({ currentStatus: status, isConfirmedSurvey: status.Id === SurveyStatus.confirmed });
    refreshLocalSurveySteps();
  };

  /* OnReady (HS :4723-4798). Run before paint, as OnReady runs when the block mounts. A view restored from the cache
     does nothing (P-BACK). Else the step properties are reset (data steps, Q2), IsFetchingData = True and RefreshData
     (HS :5490-5520): GetHostSurvey, then OnAfterFetch_GetHostSurvey (HS :5043-5084): HasError → IsFetchingData =
     False; else HostSurvey = Response and RefreshLocalSurveyStatus. */
  const storeVersion = useOrbitStaticEntitiesVersion();
  useEffect(() => {
    if (waitingForStore.current) refreshLocalSurveyStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs again only when the store changes
  }, [storeVersion]);

  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    set({ isFetchingData: true });
    void getHostSurvey(variables()).then((result) => {
      if (result.HasError) {
        set({ isFetchingData: false });
        return;
      }
      set({ hostSurvey: result.Response });
      refreshLocalSurveyStatus();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- OnReady runs once per block instance
  }, []);

  const s = state;
  const info = s.hostSurvey.SurveyInfo;
  const stepId = s.currentStep.step.Id;

  /** NavigateTo_SpecificStep (HS :6392-6476), the Edit link of a summary not yet confirmed: the step becomes the
      current step (its data-step view is not captured, Q2). */
  const navigateToSpecificStep = (hostSurveyStepId: number) => {
    if (m().isConfirmedSurvey) return;
    const index = m().steps.findIndex((step) => step.Id === hostSurveyStepId);
    const found = m().steps[index];
    if (found) set({ currentStep: { step: found, rowNumber: index } });
  };

  /* OnHandle_BackNavigation (HS :6958-7115): Unable to Host → NavigateTo_Back; a confirmed survey lets the navigation
     go on; the data steps (popups ReturnNavigation / ReturnBack) are not captured (Q2). */
  const onBackNavigation = () => {
    if (m().currentStatus.Id === SurveyStatus.unableToHost) props.onNavigateToBack();
  };

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
            navigateToSpecificStep(step);
          }}
        >
          <i className="icon orbit-icon-edit" data-icon="" />
          <span className="margin-left-s">Edit</span>
        </div>
      </div>
    );

  const floors = getLocalHouseFloors();
  const genderPreferences = getLocalGenderPreferences();
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
                              inHouseFloors={floors}
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
    <Skeleton_Loading id={`${prefix}-$b36`} inSkeletonLoadingId={OrbitSkeletonLoading.HostSurvey} />
  ) : s.currentStatus.Id === SurveyStatus.unableToHost ? (
    <NoInformation_Orbit
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
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
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
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <BackNavigationHandler id={`${prefix}-$b43`} onBackNavigation={onBackNavigation} />
    </OSBlock>
  );
}
