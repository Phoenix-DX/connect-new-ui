import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { HostSurveyMeal } from '@/api/event';
import {
  DESCRIBED_BY_SUFFIX,
  ValidationMessage,
  hasValidationMessage,
  useScreenValidationService,
  useWidgetValidationRecord,
  withNotValidClass,
  type WidgetValidationRecord,
} from '@/components/ui/os/OSValidation';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { StepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import type { LocalMealType } from '@/platform/storage/localEntities';
import { getFormattedDate_Survey, getMealTypeByJSON_Name } from './actions';
import { HostSurvey_Item } from './HostSurvey_Item';
import { HostSurvey_MealPills } from './HostSurvey_MealPills';
import {
  MEAL_WIDGETS,
  getMealFormInputValues,
  mealFormValidationWrites,
  mealOnChangeWrite,
  mealParametersChanged,
  normalizeMealCapacities,
  scrollInputIntoView,
  validateNumericInput,
  type WidgetValidityWrite,
} from './hostSurveyMealItem';

export interface HostSurvey_MealItemProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** In_MealTypes: the label of the meal type ("<label> (Preferred Meal)"). */
  inMealTypes: readonly LocalMealType[];
  /** In_StepProperties: StepProperties.Meals of the parent (TrySave starts the validation). */
  inStepProperties: StepProperties;
  /** In_HostSurvey_Meal: the meal of the parent's list. */
  inHostSurvey_Meal: HostSurveyMeal;
  /** In_IsSurveyConfirmed: a confirmed survey is read-only. */
  inIsSurveyConfirmed: boolean;
  /** Event Click_Edit. */
  onClickEdit: () => void;
  /** Event MealDataReset: the parent's record asked a reset (ResetMealData). */
  onMealDataReset: () => void;
  /** Event Save_Failed. */
  onSaveFailed: () => void;
  /** Event Save_Successful(MealInfoItem). */
  onSaveSuccessful: (mealInfoItem: HostSurveyMeal) => void;
}

/** A capacity input (OSWidgets.Input, Text, Mandatory, prompt "0"; extended properties min 0, max 9999, numeric
    inputmode, pattern [0-9]*, maxLength 4): span.input-text > input.form-control OSFillParent, then the validation
    message. */
function CapacityInput({
  id,
  value,
  enabled,
  record,
  onChange,
  onKeyUp,
  onFocus,
}: {
  id: string;
  value: string;
  enabled: boolean;
  record: WidgetValidationRecord;
  onChange: (value: string) => void;
  onKeyUp: () => void;
  onFocus: () => void;
}) {
  return (
    <span className="input-text">
      <input
        aria-describedby={hasValidationMessage(record) ? id + DESCRIBED_BY_SUFFIX : undefined}
        aria-required="true"
        className={withNotValidClass('form-control OSFillParent', record)}
        data-input=""
        disabled={!enabled}
        id={id}
        inputMode="numeric"
        max="9999"
        maxLength={4}
        min="0"
        pattern="[0-9]*"
        placeholder="0"
        required
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
      />
      <ValidationMessage widgetId={id} record={record} />
    </span>
  );
}

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem
    A meal of the meal step (MI = HostSurvey_MealItem.mvc.js; view :172-553, controller :554-1107).
    - View: "orbit-host-survey-meal-item" > HostSurvey_Item (title In_HostSurvey_Meal.MilestoneDescription, no Delete,
      Edit while the step is not in edit and the survey is not confirmed). Its content (If_IsEdit on the local copy
      Edit_HostSurvey_Meal): in edit, the day (GetFormattedDate_Survey), the Checkbox_HostPreference with
      "<meal type label> (Preferred Meal)" and the two mandatory capacity inputs; otherwise HostSurvey_MealPills of the
      local copy.
    - OnInitialize (MI :795-819): Edit_HostSurvey_Meal = In_HostSurvey_Meal. OnParametersChanged (MI :572-663): see
      `mealParametersChanged`; it runs after a render in which the inputs changed (their JSON), never on the first one.
    - OnChange_Inputs, OnKeyup_CapacityInputs, OnFocus_Inputs, MealForm_Validate: see hostSurveyMealItem.ts.
    The widget records (Valid, ValidationMessage) are the block's own (`model.widgets` of the block): a validation
    service of the block keeps them; nothing calls its validate(). */
export function HostSurvey_MealItem({
  id,
  inMealTypes,
  inStepProperties,
  inHostSurvey_Meal,
  inIsSurveyConfirmed,
  onClickEdit,
  onMealDataReset,
  onSaveFailed,
  onSaveSuccessful,
}: HostSurvey_MealItemProps) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const widgetId = useCallback((name: string) => `${scope}-${name}`, [scope]);
  const validation = useScreenValidationService();
  const comfortableRecord = useWidgetValidationRecord(widgetId(MEAL_WIDGETS.comfortable), validation);
  const stretchRecord = useWidgetValidationRecord(widgetId(MEAL_WIDGETS.stretch), validation);

  // Edit_HostSurvey_Meal (OnInitialize: the parent's record); the flows read and write it at once.
  const [edit, setEditState] = useState(inHostSurvey_Meal);
  const editRef = useRef(edit);
  const setEdit = useCallback((next: HostSurveyMeal) => {
    editRef.current = next;
    setEditState(next);
  }, []);

  // The newest inputs and events, read by the flows.
  const props = useRef({
    inStepProperties,
    inHostSurvey_Meal,
    inIsSurveyConfirmed,
    onMealDataReset,
    onSaveFailed,
    onSaveSuccessful,
  });
  useLayoutEffect(() => {
    props.current = {
      inStepProperties,
      inHostSurvey_Meal,
      inIsSurveyConfirmed,
      onMealDataReset,
      onSaveFailed,
      onSaveSuccessful,
    };
  });

  const write = useCallback(
    (w: WidgetValidityWrite | null) => {
      if (w) validation.setWidgetValidity(widgetId(w.widget), w.valid, w.message);
    },
    [validation, widgetId],
  );

  /** MealForm_Validate (MI :820-964). */
  const mealFormValidate = useCallback(() => {
    const values = getMealFormInputValues(widgetId(MEAL_WIDGETS.comfortable), widgetId(MEAL_WIDGETS.stretch));
    for (const w of mealFormValidationWrites(values)) write(w);
    if (
      !validation.isValid(widgetId(MEAL_WIDGETS.stretch)) ||
      !validation.isValid(widgetId(MEAL_WIDGETS.comfortable))
    ) {
      props.current.onSaveFailed();
      return;
    }
    const saved = normalizeMealCapacities(editRef.current);
    setEdit(saved);
    props.current.onSaveSuccessful(saved);
  }, [setEdit, validation, widgetId, write]);

  // OnParametersChanged: after a render in which the inputs changed.
  const parametersKey = JSON.stringify([inHostSurvey_Meal, inStepProperties, inIsSurveyConfirmed, inMealTypes]);
  const lastParametersKey = useRef(parametersKey);
  useEffect(() => {
    if (lastParametersKey.current === parametersKey) return;
    lastParametersKey.current = parametersKey;
    const p = props.current;
    const step = mealParametersChanged({
      isSurveyConfirmed: p.inIsSurveyConfirmed,
      trySave: p.inStepProperties.TrySave,
      inMeal: p.inHostSurvey_Meal,
      edit: editRef.current,
    });
    if (step.kind === 'validate') mealFormValidate();
    else if (step.kind === 'copy') {
      setEdit(p.inHostSurvey_Meal);
      if (step.mealDataReset) p.onMealDataReset();
    }
  }, [parametersKey, mealFormValidate, setEdit]);

  /** OnKeyup_CapacityInputs(InputId) (MI :664-733): a corrected value replaces the variable of that input. */
  const onKeyupCapacity = (name: string) => {
    const corrected = validateNumericInput(widgetId(name));
    if (corrected === '') return;
    setEdit(
      name === MEAL_WIDGETS.stretch
        ? { ...editRef.current, StretchCapacity: corrected }
        : { ...editRef.current, ComfortableCapacity: corrected },
    );
  };

  /** The Input's variable, then its OnChange event (OnChange_Inputs). */
  const onCapacityChange = (name: string, value: string) => {
    setEdit(
      name === MEAL_WIDGETS.stretch
        ? { ...editRef.current, StretchCapacity: value }
        : { ...editRef.current, ComfortableCapacity: value },
    );
    write(mealOnChangeWrite(name, editRef.current));
  };

  const enabled = !inIsSurveyConfirmed;
  const comfortableId = widgetId(MEAL_WIDGETS.comfortable);
  const stretchId = widgetId(MEAL_WIDGETS.stretch);

  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_MealItem" id={id}>
      <div className="orbit-host-survey-meal-item" data-container="">
        <HostSurvey_Item
          id={`${scope}-$b1`}
          inTitle={inHostSurvey_Meal.MilestoneDescription}
          inHasEdit={!inStepProperties.IsEdit && !inIsSurveyConfirmed}
          inHasDelete={false}
          inHasPlaceholder={false}
          onClickEdit={onClickEdit}
          placeholderContent={
            edit.IsEdit ? (
              <>
                <div
                  className="full-width font-size-s display-flex flex-direction-row align-items-baseline justify-content-flex-start"
                  data-container=""
                >
                  <i className="icon orbit-icon-meeting" data-icon="" />
                  <span className="margin-left-s" data-expression="">
                    {getFormattedDate_Survey(edit.EventDate)}
                  </span>
                </div>
                <div data-container="">
                  <div
                    className="full-width display-flex flex-direction-row align-items-center justify-content-flex-start margin-bottom-base"
                    data-container=""
                  >
                    <span>
                      <input
                        checked={edit.IsPreferred}
                        className="checkbox"
                        data-checkbox=""
                        disabled={!enabled}
                        id={widgetId(MEAL_WIDGETS.preference)}
                        type="checkbox"
                        onChange={(e) => {
                          setEdit({ ...editRef.current, IsPreferred: e.currentTarget.checked });
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    </span>
                    <span className="font-size-s margin-left-s ThemeGrid_MarginGutter" data-expression="">
                      {`${getMealTypeByJSON_Name(edit.Name, inMealTypes).Label} (Preferred Meal)`}
                    </span>
                  </div>
                  <div className="grid-split-input-cont" data-container="">
                    <div className="grid-split-input-1" data-container="">
                      <label className="mandatory OSFillParent" data-label="" htmlFor={comfortableId}>
                        Comfortable Capacity
                      </label>
                      <CapacityInput
                        id={comfortableId}
                        value={edit.ComfortableCapacity}
                        enabled={enabled}
                        record={comfortableRecord}
                        onChange={(value) => {
                          onCapacityChange(MEAL_WIDGETS.comfortable, value);
                        }}
                        onKeyUp={() => {
                          onKeyupCapacity(MEAL_WIDGETS.comfortable);
                        }}
                        onFocus={() => {
                          scrollInputIntoView(comfortableId);
                        }}
                      />
                    </div>
                    <div className="grid-split-input-2" data-container="">
                      <label className="mandatory OSFillParent" data-label="" htmlFor={stretchId}>
                        Stretch Capacity
                      </label>
                      <CapacityInput
                        id={stretchId}
                        value={edit.StretchCapacity}
                        enabled={enabled}
                        record={stretchRecord}
                        onChange={(value) => {
                          onCapacityChange(MEAL_WIDGETS.stretch, value);
                        }}
                        onKeyUp={() => {
                          onKeyupCapacity(MEAL_WIDGETS.stretch);
                        }}
                        onFocus={() => {
                          scrollInputIntoView(stretchId);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <HostSurvey_MealPills id={`${scope}-$b2`} inHostSurvey_Meal={edit} inIsDisabled={false} />
            )
          }
        />
      </div>
    </OSBlock>
  );
}
