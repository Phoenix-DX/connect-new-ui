import type { ReactNode } from 'react';
import type { HostSurveyHelper, HostSurveyMeal, HostSurveyRoom, HostSurveyVehicle } from '@/api/event';
import { FooterWithActions } from '@/components/orbit/FooterWithActions';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { SurveyStatus } from '@/pages/HostSurvey/hooks/hostSurveyState';
import type { HostSurveyFlows } from '@/pages/HostSurvey/hooks/useHostSurvey';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import { HostSurveyStep } from '@/platform/storage/localEntities';
import { getFormattedDateTime } from '@/lib/orbit/actions';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { Accordion } from '@/components/ui/Accordion';
import { AccordionItem } from '@/components/ui/AccordionItem';
import { getHelperStatusByJSON_Name } from './actions';
import { HostSurvey_AccommodationItem } from './HostSurvey_AccommodationItem';
import { HostSurvey_AccommodationPills } from './HostSurvey_AccommodationPills';
import { HostSurvey_AddHelper } from './HostSurvey_AddHelper';
import { HostSurvey_AdminNotes } from './HostSurvey_AdminNotes';
import { HostSurvey_HelperItem } from './HostSurvey_HelperItem';
import { HostSurvey_HelperPills } from './HostSurvey_HelperPills';
import { HostSurvey_Item } from './HostSurvey_Item';
import { HostSurvey_MealItem } from './HostSurvey_MealItem';
import { HostSurvey_MealPills } from './HostSurvey_MealPills';
import { HostSurvey_NavigationItem } from './HostSurvey_NavigationItem';
import { HostSurvey_StepHeader } from './HostSurvey_StepHeader';
import { HostSurvey_TopMessage } from './HostSurvey_TopMessage';
import { HostSurvey_VehicleItem } from './HostSurvey_VehicleItem';
import { HostSurvey_VehiclePills } from './HostSurvey_VehiclePills';
import { InputWithMaxChar } from './InputWithMaxChar';
import { Orbit_ConfirmationPopUp_New } from './Orbit_ConfirmationPopUp_New';

/** Connect2_OrbitMobile_MUI.menuAction.auto (HS view :430-445). */
const MENU_ACTION_AUTO = 'Auto';

export type HostSurveyViewProps = Omit<HostSurveyFlows, 'onBackNavigation'> & {
  /** OutSystems instance id of the block. */
  id: string;
  /** The block inputs that the header shows (In_EventName, In_EventStartDate, In_EventEndDate) and In_EventId. */
  inputs: HostSurveyInputs;
  /** The BackNavigationHandler of the block (instance `$b43`), after the layout. */
  backNavigationHandler?: ReactNode;
};

/** The helper status pill of the summary (HS view :899-910): Approved green with a check, else orange; the icon of
    Pending is a circle warning, of the other statuses a warning. */
const helperStatusPill = (statusId: number) => ({
  style:
    statusId === HelperStatus.approved
      ? 'background-color: var(--orbit-green-2); color: var(--orbit-green-6);\n'
      : 'background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);\n',
  icon:
    statusId === HelperStatus.approved
      ? 'orbit-icon-circle-check'
      : statusId === HelperStatus.pending
        ? 'orbit-icon-circle-warning'
        : 'orbit-icon-warning',
});

/** Static entity HelperStatus of Connect2_OrbitMobile_MUI (static-entities-tst.json). */
const HelperStatus = { approved: 3, pending: 4 } as const;

/** A note input of a data step: Input widget, MaxLength 250, Enabled = not IsConfirmedSurvey, Mandatory False
    (span.input-text > input.form-control). */
function NoteInput({
  id,
  enabled,
  prompt,
  value,
  onChange,
}: {
  id: string;
  enabled: boolean;
  prompt: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <span className="input-text">
      <input
        className="form-control OSFillParent"
        data-input=""
        disabled={!enabled}
        id={id}
        maxLength={250}
        placeholder={prompt}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
    </span>
  );
}

/** The header subtitle: GetFormattedDateTime(date, no time, weekday, full letters, abbreviated) (HS view :486-510). */
const formattedDay = (d: string) => getFormattedDateTime(d, false, true, false, true, false, false);

/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey
    The view of the host survey block (HS = Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.
    ScreenBlock_HostSurvey.mvc.js, view :382-3516), props only: Layout_Orbit with the menu icon, the event name and
    dates, the header (StepHeader on a data step, the summary banner), the content (the loading skeleton, "no longer
    available" (Unable to Host), the current step: navigation, accommodation, meal, helper, vehicle or summary, or "no
    setup"), the five popups, the footer with the two buttons while a survey is answered, then the
    BackNavigationHandler. Built from the TST code (decision Legacy_OrbitEventsFlow Q1 (a)); only the confirmed summary
    is captured. */
export function HostSurveyView({
  id,
  inputs,
  state: s,
  houseFloors,
  genderPreferences,
  bedSizes,
  mealTypes,
  helperStatus,
  helperRoles,
  vehicleOwners,
  vehicleTypes,
  onEditStep,
  onPrimaryButton,
  onSecondaryButton,
  onPopUpPrimary,
  onPopUpSecondary,
  onPopUpClose,
  onEditItem,
  onDeleteItem,
  onDeleteSearchHelper,
  onSaveItem,
  onSaveFailed,
  onMealDataReset,
  onAddHelpers,
  onAddItem,
  onNoteChange,
  onHasVehiclesChange,
  backNavigationHandler,
}: HostSurveyViewProps) {
  const prefix = id.replace(/^\$/, '');
  const { In_EventName, In_EventStartDate, In_EventEndDate } = inputs;
  const info = s.hostSurvey.SurveyInfo;
  const step = s.currentStep.step;
  const stepId = step.Id;
  const p = s.stepProperties;

  const title =
    In_EventStartDate !== '' && In_EventEndDate !== ''
      ? `${formattedDay(In_EventStartDate)} - ${formattedDay(In_EventEndDate)}`
      : info.EventStartDateTime !== '' && info.EventEndDateTime !== ''
        ? `${formattedDay(info.EventStartDateTime)} - ${formattedDay(info.EventEndDateTime)}`
        : '';

  /** The Edit link of a summary section (HS view :2048-2101): Container Visible = not IsConfirmedSurvey. */
  const editLink = (target: number) =>
    s.isConfirmedSurvey ? null : (
      <div className="text-align-right color-orbit-primary-7 font-size-s" data-container="">
        <div
          className="bold display-flex flex-direction-row align-items-center justify-content-flex-end"
          data-container=""
          onClick={() => {
            onEditStep(target);
          }}
        >
          <i className="icon orbit-icon-edit" data-icon="" />
          <span className="margin-left-s">Edit</span>
        </div>
      </div>
    );

  /** "+ Add <AddLabel>" (HS view :604-617 and the other steps): Container Visible = not IsConfirmedSurvey; grey while
      the step is in edit with data (helpers: or adding). */
  const addItem = (disabled: boolean) =>
    s.isConfirmedSurvey ? null : (
      <div className="text-align-right font-size-s bold background-neutral-0 padding-m margin-y-s" data-container="">
        <span className={disabled ? 'text-neutral-7' : 'color-orbit-primary-7'} data-expression="" onClick={onAddItem}>
          {`+ Add ${step.AddLabel}`}
        </span>
      </div>
    );

  /** InputWithMaxChar (In_MaxChar 250) with its label and note input. */
  const noteField = (instance: string, widget: string, label: ReactNode, labelClass: string, input: ReactNode) => (
    <InputWithMaxChar
      id={`${prefix}-${instance}`}
      inMaxChar={250}
      placeholderLabel={
        <label className={`${labelClass}OSFillParent`} data-label="" htmlFor={`${prefix}-${widget}`}>
          {label}
        </label>
      }
      placeholderInput={input}
    />
  );

  const rooms = s.hostSurvey.Rooms.HostSurvey_RoomItem;
  const meals = s.hostSurvey.Meals.MealItemInfo;
  const helpers = s.hostSurvey.Helpers.HelperItemInfo;
  const vehicles = s.hostSurvey.Vehicles.VehicleItemInfo;

  /** Navigation step (HS view :574-640): the Continue message (status Pending or Sent), the note for the event team,
      the data steps (HostSurvey_NavigationItem). */
  const navigation = (
    <div className="orbit-host-survey-navigation" data-container="">
      {(s.currentStatus.Id === SurveyStatus.pending || s.currentStatus.Id === SurveyStatus.sent) && (
        <HostSurvey_TopMessage
          id={`${prefix}-$b4`}
          inMessage="Please ensure all details are correct before submission."
          inTitle="Continue Host Survey"
        />
      )}
      <div className="padding-m background-neutral-0" data-container="">
        {noteField(
          '$b5',
          'Input_HostSurveyNote',
          <span className="bold" data-expression="">
            Notes for Event Team
          </span>,
          'bold ',
          <NoteInput
            id={`${prefix}-Input_HostSurveyNote`}
            enabled={!s.isConfirmedSurvey}
            prompt="Any additional details"
            value={info.HostSurveyNote}
            onChange={(value) => {
              onNoteChange('HostSurveyNote', value);
            }}
          />,
        )}
      </div>
      <HostSurvey_NavigationItem
        id={`${prefix}-$b6`}
        inHostSurveySteps={s.steps.map((row) => ({
          AdminNote:
            row.Id === HostSurveyStep.accommodation
              ? info.AccommodationSurveyNote
              : row.Id === HostSurveyStep.meal
                ? info.MealSurveyNote
                : row.Id === HostSurveyStep.helper
                  ? info.HelperSurveyNote
                  : row.Id === HostSurveyStep.vehicle
                    ? info.VehicleSurveyNote
                    : '',
          LocalHostSurveyStep: row,
        }))}
        inStepProperties={p}
        onNavigateToStep={onEditStep}
      />
    </div>
  );

  /** Accommodation step (HS view :641-760). */
  const accommodation = (
    <div className="orbit-host-survey-accommodation" data-container="">
      {info.AccommodationSurveyNote !== '' && (
        <HostSurvey_AdminNotes id={`${prefix}-$b7`} inAdminNotes={info.AccommodationSurveyNote} />
      )}
      <div className="padding-m background-neutral-0 margin-top-s" data-container="">
        {noteField(
          '$b8',
          'Input_AccommodationNote',
          <span className="bold">Accommodation Notes</span>,
          '',
          <NoteInput
            id={`${prefix}-Input_AccommodationNote`}
            enabled={!s.isConfirmedSurvey}
            prompt="Notes for Event Team"
            value={s.hostSurvey.Rooms.AccommodationNote}
            onChange={(value) => {
              onNoteChange('AccommodationNote', value);
            }}
          />,
        )}
      </div>
      <OSList
        className="list list-group orbit-host-survey-list"
        animateItems
        disableVirtualization
        source={rooms}
        keyOf={(_r: HostSurveyRoom, i) => `${String(rooms.length)}-${String(i)}`}
      >
        {(room, i) => (
          <div className="orbit-host-survey-list-item" data-container="">
            <HostSurvey_AccommodationItem
              id={`${prefix}-l1_${String(i)}-$b9`}
              inCurrentRowNumber={i}
              inGenderPreferences={genderPreferences}
              inIsSurveyConfirmed={s.isConfirmedSurvey}
              inRoomNames={s.roomNames}
              inHostSurvey_Room={room}
              inHouseFloors={houseFloors}
              inBedSize={bedSizes}
              inStepProperties={p.Accommodation}
              onSaveFailed={(disableMessage) => {
                onSaveFailed(0, disableMessage);
              }}
              onClickEdit={() => {
                onEditItem(i);
              }}
              onSaveSuccessful={(roomInfoItem) => {
                onSaveItem(i, { room: roomInfoItem });
              }}
              onClickDelete={() => {
                onDeleteItem(i);
              }}
            />
          </div>
        )}
      </OSList>
      {addItem(p.Accommodation.IsEdit && p.Accommodation.HasData)}
    </div>
  );

  /** Meal step (HS view :761-900). */
  const meal = (
    <div className="orbit-host-survey-meal" data-container="">
      {info.MealSurveyNote !== '' && <HostSurvey_AdminNotes id={`${prefix}-$b10`} inAdminNotes={info.MealSurveyNote} />}
      <div className="full-width padding-m margin-top-s background-neutral-0" data-container="">
        <div className="bold" data-container="">
          Enter preferred meals
        </div>
        <div className="font-size-s margin-top-m" data-container="">
          Please make sure you tick which meal is your preference.
        </div>
        <div className="margin-top-l" data-container="">
          {noteField(
            '$b11',
            'TextArea_MealNote',
            <span className="bold">Meal Notes</span>,
            '',
            <span>
              <textarea
                className="form-control OSFillParent"
                data-textarea=""
                disabled={s.isConfirmedSurvey}
                id={`${prefix}-TextArea_MealNote`}
                maxLength={250}
                placeholder="Notes for Event Team"
                rows={3}
                value={s.hostSurvey.Meals.MealNote}
                onChange={(e) => {
                  onNoteChange('MealNote', e.currentTarget.value);
                }}
              />
            </span>,
          )}
        </div>
      </div>
      <OSList
        className="list list-group orbit-host-survey-list"
        animateItems
        disableVirtualization
        source={meals}
        keyOf={(m: HostSurveyMeal) => m.Id}
      >
        {(item, i) => (
          <div className="orbit-host-survey-list-item" data-container="">
            <HostSurvey_MealItem
              id={`${prefix}-l2_${String(i)}-$b12`}
              inMealTypes={mealTypes}
              inStepProperties={p.Meals}
              inHostSurvey_Meal={item}
              inIsSurveyConfirmed={s.isConfirmedSurvey}
              onClickEdit={() => {
                onEditItem(i);
              }}
              onMealDataReset={() => {
                onMealDataReset(i);
              }}
              onSaveFailed={() => {
                onSaveFailed(i, false);
              }}
              onSaveSuccessful={(mealInfoItem) => {
                onSaveItem(i, { meal: mealInfoItem });
              }}
            />
          </div>
        )}
      </OSList>
    </div>
  );

  /** Helper step (HS view :901-1060). */
  const helper = (
    <div className="orbit-host-survey-helper" data-container="">
      {info.HelperSurveyNote !== '' && (
        <HostSurvey_AdminNotes id={`${prefix}-$b13`} inAdminNotes={info.HelperSurveyNote} />
      )}
      <div className="padding-m background-neutral-0 margin-top-s" data-container="">
        {noteField(
          '$b14',
          'Input_HelperNote',
          <span className="bold">Helper Notes</span>,
          '',
          <NoteInput
            id={`${prefix}-Input_HelperNote`}
            enabled={!s.isConfirmedSurvey}
            prompt="Notes for Event Team"
            value={s.hostSurvey.Helpers.HelperNote}
            onChange={(value) => {
              onNoteChange('HelperNote', value);
            }}
          />,
        )}
      </div>
      <OSList
        className="list list-group orbit-host-survey-list"
        animateItems
        disableVirtualization
        source={helpers}
        keyOf={(_h: HostSurveyHelper, i) => `${String(helpers.length)}-${String(i)}`}
      >
        {(item, i) => (
          <div className="orbit-host-survey-list-item" data-container="">
            <HostSurvey_HelperItem
              id={`${prefix}-l3_${String(i)}-$b15`}
              inIsSurveyConfirmed={s.isConfirmedSurvey}
              inFilteredHelperRoles={s.filteredHelperRoles}
              inCurrentRowNumber={i}
              inHelperRoles={helperRoles}
              inHostSurvey_Helper={item}
              inStepProperties={p.Helpers}
              onSaveFailed={() => {
                onSaveFailed(0, false);
              }}
              onClickEdit={() => {
                onEditItem(i);
              }}
              onClickDelete={() => {
                onDeleteItem(i);
              }}
              onSaveSuccessful={(helperInfoItem) => {
                onSaveItem(i, { helper: helperInfoItem });
              }}
            />
          </div>
        )}
      </OSList>
      {s.isAddingHelper && (
        <div className="margin-top-s" data-container="">
          <HostSurvey_AddHelper
            id={`${prefix}-$b16`}
            inHelperRoles={s.filteredHelperRoles}
            inEventId={inputs.In_EventId}
            inTrySave={p.Helpers.TrySave}
            inHelperStatus={helperStatus}
            inAlreadyAddedHelpers={helpers.map((h) => h.MemberId)}
            onSaveFailed={() => {
              onSaveFailed(0, false);
            }}
            onSaveSuccessful={onAddHelpers}
            onClickDelete={onDeleteSearchHelper}
          />
        </div>
      )}
      {addItem((p.Helpers.IsEdit && p.Helpers.HasData) || s.isAddingHelper)}
    </div>
  );

  /** Vehicle step (HS view :1061-1180): the HasVehicles question and switch, then the vehicles while it is on. */
  const vehicle = (
    <div className="orbit-host-survey-vehicle" data-container="">
      {info.VehicleSurveyNote !== '' && (
        <HostSurvey_AdminNotes id={`${prefix}-$b17`} inAdminNotes={info.VehicleSurveyNote} />
      )}
      <div className="font-size-s padding-y-m margin-y-s background-neutral-0" data-container="">
        <div
          className="margin-bottom-m padding-x-m display-flex flex-direction-row align-items-center justify-content-space-between"
          data-container=""
        >
          <div data-container="">
            Do you, or your guests &amp; helpers, have vehicles to help transport guests within the locality?
          </div>
          <div className="orbit-switch-cont" data-container="">
            <span>
              <input
                checked={s.hostSurvey.Vehicles.HasVehicles}
                className="switch orbit-switch"
                data-switch=""
                id={`${prefix}-Switch_HasVehicles`}
                type="checkbox"
                onChange={(e) => {
                  onHasVehiclesChange(e.target.checked);
                }}
              />
            </span>
          </div>
        </div>
        <div className="padding-x-m" data-container="">
          Let your guest know the type of vehicles you have to collect them when they arrive.
        </div>
      </div>
      {s.hostSurvey.Vehicles.HasVehicles && (
        <>
          <OSList
            className="list list-group orbit-host-survey-list"
            animateItems
            disableVirtualization
            source={vehicles}
            keyOf={(_v: HostSurveyVehicle, i) => `${String(vehicles.length)}-${String(i)}`}
          >
            {(item, i) => (
              <div className="orbit-host-survey-list-item" data-container="">
                <HostSurvey_VehicleItem
                  id={`${prefix}-l4_${String(i)}-$b18`}
                  inStepProperties={p.Vehicles}
                  inCurrentRowNumber={i}
                  inIsSurveyConfirmed={s.isConfirmedSurvey}
                  inVehicleType={vehicleTypes}
                  inHostSurvey_Vehicle={item}
                  inOwnerType={vehicleOwners}
                  onSaveFailed={() => {
                    onSaveFailed(0, false);
                  }}
                  onSaveSuccessful={(vehicleItem) => {
                    onSaveItem(i, { vehicle: vehicleItem });
                  }}
                  onClickDelete={() => {
                    onDeleteItem(i);
                  }}
                  onClickEdit={() => {
                    onEditItem(i);
                  }}
                />
              </div>
            )}
          </OSList>
          {addItem(p.Vehicles.IsEdit && p.Vehicles.HasData)}
        </>
      )}
    </div>
  );

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
        {info.HelperSurvey && (
          <AccordionItem
            id={`${prefix}-$b28`}
            startsExpanded
            title="Helpers"
            content={
              <>
                {editLink(HostSurveyStep.helper)}
                {helpers.length > 0 ? (
                  <OSList
                    className="list list-group"
                    animateItems
                    disableVirtualization
                    source={helpers}
                    keyOf={(_h: HostSurveyHelper, i) => i}
                  >
                    {(item, i) => {
                      const status = getHelperStatusByJSON_Name(item.HelperStatus, helperStatus);
                      const pill = helperStatusPill(status.Id);
                      return (
                        <div className="orbit-host-survey-list-item" data-container="">
                          <HostSurvey_Item
                            id={`${prefix}-l7_${String(i)}-$b29`}
                            inTitle={`Helper ${String(i + 1)}`}
                            inHasPlaceholder
                            placeholderStatus={
                              <HostSurveyPill
                                id={`${prefix}-l7_${String(i)}-$b30`}
                                inExtendedStyle={pill.style}
                                inIconClass={pill.icon}
                                inIsSmallIcon
                                inPillText={status.Label}
                              />
                            }
                            placeholderContent={
                              <HostSurvey_HelperPills
                                id={`${prefix}-l7_${String(i)}-$b31`}
                                inIsDisabled={s.isConfirmedSurvey}
                                inHelperRoles={helperRoles}
                                inHostSurvey_Helper={item}
                              />
                            }
                          />
                        </div>
                      );
                    }}
                  </OSList>
                ) : (
                  <div className="font-size-s" data-container="">
                    No helper data added.
                  </div>
                )}
              </>
            }
          />
        )}
        {info.VehicleSurvey && (
          <AccordionItem
            id={`${prefix}-Vehicles`}
            startsExpanded
            title="Vehicles"
            content={
              <>
                {editLink(HostSurveyStep.vehicle)}
                {vehicles.length > 0 && s.hostSurvey.Vehicles.HasVehicles ? (
                  <OSList
                    className="list list-group"
                    animateItems
                    disableVirtualization
                    source={vehicles}
                    keyOf={(_v: HostSurveyVehicle, i) => i}
                  >
                    {(item, i) => (
                      <div className="orbit-host-survey-list-item" data-container="">
                        <HostSurvey_Item
                          id={`${prefix}-l8_${String(i)}-$b33`}
                          inTitle={`Vehicle ${String(i + 1)}`}
                          inHasPlaceholder={false}
                          placeholderContent={
                            <HostSurvey_VehiclePills
                              id={`${prefix}-l8_${String(i)}-$b34`}
                              inIsDisabled={s.isConfirmedSurvey}
                              inVehicleOwners={vehicleOwners}
                              inHostSurvey_Vehicle={item}
                              inVehicleTypes={vehicleTypes}
                            />
                          }
                        />
                      </div>
                    )}
                  </OSList>
                ) : (
                  <div className="font-size-s" data-container="">
                    No vehicle data added.
                  </div>
                )}
              </>
            }
          />
        )}
      </Accordion>
    </div>
  );

  /** The current step (HS view :572-2860). */
  const currentStepView: ReactNode =
    stepId === HostSurveyStep.navigation
      ? navigation
      : stepId === HostSurveyStep.accommodation
        ? accommodation
        : stepId === HostSurveyStep.meal
          ? meal
          : stepId === HostSurveyStep.helper
            ? helper
            : stepId === HostSurveyStep.vehicle
              ? vehicle
              : stepId === HostSurveyStep.summary
                ? summary
                : null;

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
    currentStepView
  ) : (
    <div className="padding-m background-neutral-0" data-container="">
      <span data-expression="">There is no setup for this household yet.</span>
    </div>
  );

  /** HeaderContent (HS view :516-566): StepHeader on a data step (step length = the steps - 2, row number - 1), the
      summary banner on the summary. */
  const headerContent: ReactNode = step.IsDataStep ? (
    <HostSurvey_StepHeader
      id={`${prefix}-$b3`}
      inStepProperties={p}
      inLocalHostStepSurvey={step}
      inStepLength={s.steps.length - 2}
      inCurrentRowNumber={s.currentStep.rowNumber - 1}
    />
  ) : stepId === HostSurveyStep.summary ? (
    <div
      className="orbit-host-survey-header-summary full-width background-neutral-0 bold color-orbit-primary-8 font-size-base"
      data-container=""
    >
      <span data-expression="">{s.isConfirmedSurvey ? 'Summary Review' : 'Ready to Submit'}</span>
    </div>
  ) : null;

  const anyEdit =
    (info.AccommodationSurvey && info.AccommodationSurveyUpdate && p.Accommodation.IsEdit) ||
    (info.MealSurvey && info.MealSurveyUpdate && p.Meals.IsEdit) ||
    (info.HelperSurvey && p.Helpers.IsEdit) ||
    (info.VehicleSurvey && p.Vehicles.IsEdit);
  const cancelLabel =
    (stepId === HostSurveyStep.accommodation && p.Accommodation.IsEdit && rooms.length > 0) ||
    (stepId === HostSurveyStep.meal && p.Meals.IsEdit && meals.length > 0) ||
    (stepId === HostSurveyStep.helper && p.Helpers.IsEdit && s.isAddingHelper) ||
    (stepId === HostSurveyStep.vehicle && p.Vehicles.IsEdit && vehicles.length > 0);
  const saveLabel =
    (stepId === HostSurveyStep.accommodation && p.Accommodation.IsEdit && p.Accommodation.HasData) ||
    (stepId === HostSurveyStep.meal && p.Meals.IsEdit && p.Meals.HasData) ||
    (stepId === HostSurveyStep.helper && p.Helpers.IsEdit && (p.Helpers.HasData || s.isAddingHelper)) ||
    (stepId === HostSurveyStep.vehicle && p.Vehicles.IsEdit && p.Vehicles.HasData);

  /** BottomBar (HS view :3320-3465): Orbit_FooterWithActions while a survey is answered. Secondary: "Close" on the
      navigation, "Back" on the summary, "Cancel" on a data step in edit with items (helpers: adding), else "Back".
      Primary: "Save" on a data step in edit with data, "Next" on another data step, else "Submit" (greyed while a
      section is in edit). */
  const bottomBar: ReactNode =
    !s.isConfirmedSurvey && s.hasDataSteps && s.currentStatus.Id !== SurveyStatus.unableToHost ? (
      <FooterWithActions
        id={`${prefix}-$b42`}
        inIsSmallButtons={false}
        inHasSecondaryButton
        inHasTopShadow
        inExtendedClassPrimary={step.IsDataStep ? '' : anyEdit ? ' orbit-host-survey-footer-btn-disabled' : ''}
        placeholderSecondary={
          <span data-expression="">
            {!step.IsDataStep
              ? stepId === HostSurveyStep.navigation
                ? 'Close'
                : 'Back'
              : cancelLabel
                ? 'Cancel'
                : 'Back'}
          </span>
        }
        placeholderPrimary={<span data-expression="">{saveLabel ? 'Save' : step.IsDataStep ? 'Next' : 'Submit'}</span>}
        onClickPrimaryButton={onPrimaryButton}
        onClickSecondaryButton={onSecondaryButton}
      />
    ) : null;

  const popUp = (name: string, show: boolean, secondary: string) => (
    <Orbit_ConfirmationPopUp_New
      id={`${prefix}-${name}`}
      inShowPopUp={show}
      inTitle={s.popUpInfo.Title}
      inMessage={s.popUpInfo.Message}
      placeholderSecondary={<span data-expression="">{secondary}</span>}
      placeholderPrimary="Yes"
      onClose={onPopUpClose}
      onSecondaryAction={onPopUpSecondary}
      onPrimaryAction={onPopUpPrimary}
    />
  );

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
            {popUp('PopUp_Cancel', s.popUpInfo.IsShowPopup_Cancel, 'Back')}
            {popUp('PopUp_Delete', s.popUpInfo.IsShowPopup_Delete, 'Cancel')}
            {popUp('PopUp_NoInfo', s.popUpInfo.IsShowPopup_NoInfo, 'Cancel')}
            {popUp('PopUp_ReturnNavigation', s.popUpInfo.IsShowPopup_ReturnNavigation, 'Cancel')}
            {popUp('PopUp_ReturnBack', s.popUpInfo.IsShowPopup_ReturnBack, 'Discard Survey')}
          </>
        }
        bottomBar={bottomBar}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
      {backNavigationHandler}
    </OSBlock>
  );
}
