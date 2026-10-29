import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { HostSurveyVehicle } from '@/api/event';
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
import { OSDropdownCustom } from '@/components/ui/os/OSDropdownCustom';
import type { StepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import type { LocalVehicleOwner, LocalVehicleType } from '@/platform/storage/localEntities';
import { HostSurvey_Item } from './HostSurvey_Item';
import { HostSurvey_VehiclePills } from './HostSurvey_VehiclePills';
import { scrollInputIntoView, validateNumericInput, type WidgetValidityWrite } from './hostSurveyMealItem';
import {
  VEHICLE_WIDGETS,
  setCorrectBoundaries,
  textToLongInteger,
  vehicleFormValidationWrites,
  vehicleInputMaxChars,
  vehicleOnChangeWrite,
  vehicleParametersChanged,
} from './hostSurveyVehicleItem';

export interface HostSurvey_VehicleItemProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** In_StepProperties: StepProperties.Vehicles of the parent (TrySave starts the validation). */
  inStepProperties: StepProperties;
  /** In_CurrentRowNumber: the title "Vehicle <row + 1>". */
  inCurrentRowNumber: number;
  /** In_IsSurveyConfirmed: a confirmed survey is read-only. */
  inIsSurveyConfirmed: boolean;
  /** In_VehicleType: the options of Dropdown_VehicleType (value JSON_Name, label Label). */
  inVehicleType: readonly LocalVehicleType[];
  /** In_HostSurvey_Vehicle: the vehicle of the parent's list. */
  inHostSurvey_Vehicle: HostSurveyVehicle;
  /** In_OwnerType: the options of Dropdown_OwnerType (value JSON_Name, label Label). */
  inOwnerType: readonly LocalVehicleOwner[];
  /** Event Save_Failed. */
  onSaveFailed: () => void;
  /** Event Save_Successful(VehicleItem). */
  onSaveSuccessful: (vehicleItem: HostSurveyVehicle) => void;
  /** Event Click_Delete. */
  onClickDelete: () => void;
  /** Event Click_Edit. */
  onClickEdit: () => void;
}

/** A text input of the form (OSWidgets.Input): span.input-text > input.form-control OSFillParent, then the
    validation message. */
function FormInput({
  id,
  value,
  enabled,
  mandatory,
  record,
  inputProps,
  onChange,
  onKeyUp,
  onFocus,
}: {
  id: string;
  value: string;
  enabled: boolean;
  mandatory: boolean;
  record: WidgetValidationRecord;
  inputProps: {
    maxLength: number;
    placeholder: string;
    inputMode?: 'numeric';
    min?: string;
    max?: string;
    pattern?: string;
  };
  onChange: (value: string) => void;
  onKeyUp: () => void;
  onFocus: () => void;
}) {
  return (
    <span className="input-text">
      <input
        aria-describedby={hasValidationMessage(record) ? id + DESCRIBED_BY_SUFFIX : undefined}
        aria-required={mandatory ? 'true' : 'false'}
        className={withNotValidClass('form-control OSFillParent', record)}
        data-input=""
        disabled={!enabled}
        id={id}
        required={mandatory}
        type="text"
        value={value}
        {...inputProps}
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

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem
    A vehicle of the vehicle step (VI = HostSurvey_VehicleItem.mvc.js; view :202-729, controller :730-1302).
    - View: "orbit-host-survey-vehicle-item" > HostSurvey_Item (title "Vehicle <In_CurrentRowNumber + 1>", Delete while
      the survey is not confirmed, Edit while the step is not in edit and the survey is not confirmed). Its content
      (If_IsEdit on the local copy Edit_HostSurvey_Vehicle): in edit, five fields: Owner Type and Vehicle Type
      (mandatory Custom dropdowns, empty values "Select type" / "Select vehicle"), "Provide Model (Optional)" (max 150,
      prompt "Model name"), "Vehicle Number" (max 10, prompt "E.g. KDJ 976") and "Total Seats" (mandatory Long Integer,
      prompt "0", extended type text, min 1, max 99, maxLength 2, numeric inputmode); otherwise HostSurvey_VehiclePills
      of the local copy.
    - OnInitialize (VI :862-886): Edit_HostSurvey_Vehicle = In_HostSurvey_Vehicle. OnParametersChanged (VI :748-823):
      see `vehicleParametersChanged`; it runs after a render in which the inputs changed (their JSON).
    - OnChange_Inputs, VehicleForm_Validate, OnKeyup_NumericInput, OnKeyup_Inputs, OnFocus_Inputs: see
      hostSurveyVehicleItem.ts. The widget records are the block's own (a validation service of the block). */
export function HostSurvey_VehicleItem({
  id,
  inStepProperties,
  inCurrentRowNumber,
  inIsSurveyConfirmed,
  inVehicleType,
  inHostSurvey_Vehicle,
  inOwnerType,
  onSaveFailed,
  onSaveSuccessful,
  onClickDelete,
  onClickEdit,
}: HostSurvey_VehicleItemProps) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const widgetId = useCallback((name: string) => `${scope}-${name}`, [scope]);
  const validation = useScreenValidationService();
  const ownerRecord = useWidgetValidationRecord(widgetId(VEHICLE_WIDGETS.ownerType), validation);
  const typeRecord = useWidgetValidationRecord(widgetId(VEHICLE_WIDGETS.vehicleType), validation);
  const modelRecord = useWidgetValidationRecord(widgetId(VEHICLE_WIDGETS.makeModel), validation);
  const numberRecord = useWidgetValidationRecord(widgetId(VEHICLE_WIDGETS.vehicleNumber), validation);
  const seatsRecord = useWidgetValidationRecord(widgetId(VEHICLE_WIDGETS.totalSeats), validation);

  // Edit_HostSurvey_Vehicle (OnInitialize: the parent's record); the flows read and write it at once.
  const [edit, setEditState] = useState(inHostSurvey_Vehicle);
  const editRef = useRef(edit);
  const setEdit = useCallback((next: HostSurveyVehicle) => {
    editRef.current = next;
    setEditState(next);
  }, []);

  // The newest inputs and events, read by the flows.
  const props = useRef({ inStepProperties, inHostSurvey_Vehicle, inIsSurveyConfirmed, onSaveFailed, onSaveSuccessful });
  useLayoutEffect(() => {
    props.current = { inStepProperties, inHostSurvey_Vehicle, inIsSurveyConfirmed, onSaveFailed, onSaveSuccessful };
  });

  const write = useCallback(
    (w: WidgetValidityWrite | null) => {
      if (w) validation.setWidgetValidity(widgetId(w.widget), w.valid, w.message);
    },
    [validation, widgetId],
  );

  /** VehicleForm_Validate (VI :962-1060). */
  const vehicleFormValidate = useCallback(() => {
    const writes = vehicleFormValidationWrites(editRef.current);
    for (const w of writes) write(w);
    if (writes.length > 0) props.current.onSaveFailed();
    else props.current.onSaveSuccessful(editRef.current);
  }, [write]);

  // OnParametersChanged: after a render in which the inputs changed.
  const parametersKey = JSON.stringify([
    inHostSurvey_Vehicle,
    inStepProperties,
    inIsSurveyConfirmed,
    inCurrentRowNumber,
    inOwnerType,
    inVehicleType,
  ]);
  const lastParametersKey = useRef(parametersKey);
  useEffect(() => {
    if (lastParametersKey.current === parametersKey) return;
    lastParametersKey.current = parametersKey;
    const p = props.current;
    const step = vehicleParametersChanged({
      isSurveyConfirmed: p.inIsSurveyConfirmed,
      trySave: p.inStepProperties.TrySave,
      inVehicle: p.inHostSurvey_Vehicle,
      edit: editRef.current,
    });
    if (step.kind === 'validate') vehicleFormValidate();
    else if (step.kind === 'copy') setEdit(p.inHostSurvey_Vehicle);
  }, [parametersKey, vehicleFormValidate, setEdit]);

  /** A variable written by its widget, then the widget's OnChange (OnChange_Inputs). */
  const change = (name: string, next: HostSurveyVehicle) => {
    setEdit(next);
    write(vehicleOnChangeWrite(name, next));
  };

  /** OnKeyup_Inputs(InputId) (VI :1122-1172). */
  const onKeyupInputs = (name: string) => {
    const maxChars = vehicleInputMaxChars(name);
    if (maxChars !== null) setCorrectBoundaries(widgetId(name), maxChars);
  };

  const enabled = !inIsSurveyConfirmed;
  const ownerId = widgetId(VEHICLE_WIDGETS.ownerType);
  const typeId = widgetId(VEHICLE_WIDGETS.vehicleType);
  const modelId = widgetId(VEHICLE_WIDGETS.makeModel);
  const numberId = widgetId(VEHICLE_WIDGETS.vehicleNumber);
  const seatsId = widgetId(VEHICLE_WIDGETS.totalSeats);

  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_VehicleItem" id={id}>
      <div className="orbit-host-survey-vehicle-item" data-container="">
        <HostSurvey_Item
          id={`${scope}-$b1`}
          inTitle={`Vehicle ${String(inCurrentRowNumber + 1)}`}
          inHasEdit={!inStepProperties.IsEdit && !inIsSurveyConfirmed}
          inHasDelete={!inIsSurveyConfirmed}
          inHasPlaceholder={false}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
          placeholderContent={
            edit.IsEdit ? (
              <>
                <div data-container="">
                  <label className="mandatory OSFillParent" data-label="" htmlFor={ownerId}>
                    Owner Type
                  </label>
                  <OSDropdownCustom
                    id={ownerId}
                    style="dropdown"
                    emptyValue="Select type"
                    mandatory
                    enabled={enabled}
                    list={inOwnerType}
                    getValue={(o) => o.JSON_Name}
                    renderRow={(o) => <span data-expression="">{o.Label}</span>}
                    value={edit.OwnerType}
                    record={ownerRecord}
                    onValueChange={(value) => {
                      setEdit({ ...editRef.current, OwnerType: value });
                    }}
                    onChange={() => {
                      write(vehicleOnChangeWrite(VEHICLE_WIDGETS.ownerType, editRef.current));
                    }}
                    onFocus={() => {
                      scrollInputIntoView(ownerId);
                    }}
                  />
                </div>
                <div data-container="">
                  <label className="mandatory OSFillParent" data-label="" htmlFor={typeId}>
                    Vehicle Type
                  </label>
                  <OSDropdownCustom
                    id={typeId}
                    style="dropdown"
                    emptyValue="Select vehicle"
                    mandatory
                    enabled={enabled}
                    list={inVehicleType}
                    getValue={(t) => t.JSON_Name}
                    renderRow={(t) => <span data-expression="">{t.Label}</span>}
                    value={edit.VehicleType}
                    record={typeRecord}
                    onValueChange={(value) => {
                      setEdit({ ...editRef.current, VehicleType: value });
                    }}
                    onChange={() => {
                      write(vehicleOnChangeWrite(VEHICLE_WIDGETS.vehicleType, editRef.current));
                    }}
                    onFocus={() => {
                      scrollInputIntoView(typeId);
                    }}
                  />
                </div>
                <div data-container="">
                  <label className="OSFillParent" data-label="" htmlFor={modelId}>
                    Provide Model (Optional)
                  </label>
                  <FormInput
                    id={modelId}
                    value={edit.VehicleMakeAndModel}
                    enabled={enabled}
                    mandatory={false}
                    record={modelRecord}
                    inputProps={{ maxLength: 150, placeholder: 'Model name' }}
                    onChange={(value) => {
                      setEdit({ ...editRef.current, VehicleMakeAndModel: value });
                    }}
                    onKeyUp={() => {
                      onKeyupInputs(VEHICLE_WIDGETS.makeModel);
                    }}
                    onFocus={() => {
                      scrollInputIntoView(modelId);
                    }}
                  />
                </div>
                <div data-container="">
                  <label className="OSFillParent" data-label="" htmlFor={numberId}>
                    Vehicle Number
                  </label>
                  <FormInput
                    id={numberId}
                    value={edit.RegistrationNumber}
                    enabled={enabled}
                    mandatory={false}
                    record={numberRecord}
                    inputProps={{ maxLength: 10, placeholder: 'E.g. KDJ 976' }}
                    onChange={(value) => {
                      setEdit({ ...editRef.current, RegistrationNumber: value });
                    }}
                    onKeyUp={() => {
                      onKeyupInputs(VEHICLE_WIDGETS.vehicleNumber);
                    }}
                    onFocus={() => {
                      scrollInputIntoView(numberId);
                    }}
                  />
                </div>
                <div data-container="">
                  <label className="mandatory OSFillParent" data-label="" htmlFor={seatsId}>
                    Total Seats
                  </label>
                  <FormInput
                    id={seatsId}
                    value={edit.TotalSeats === '0' ? '' : edit.TotalSeats}
                    enabled={enabled}
                    mandatory
                    record={seatsRecord}
                    inputProps={{
                      maxLength: 2,
                      placeholder: '0',
                      inputMode: 'numeric',
                      min: '1',
                      max: '99',
                      pattern: '[0-9]*',
                    }}
                    onChange={(value) => {
                      // A Long Integer variable: only digits convert; other text leaves the variable as it is.
                      if (/^\d*$/.test(value)) {
                        change(VEHICLE_WIDGETS.totalSeats, {
                          ...editRef.current,
                          TotalSeats: textToLongInteger(value),
                        });
                      }
                    }}
                    onKeyUp={() => {
                      // OnKeyup_NumericInput (VI :1061-1121): a corrected value replaces the variable.
                      const corrected = validateNumericInput(seatsId);
                      if (corrected !== '') setEdit({ ...editRef.current, TotalSeats: textToLongInteger(corrected) });
                    }}
                    onFocus={() => {
                      scrollInputIntoView(seatsId);
                    }}
                  />
                </div>
              </>
            ) : (
              <HostSurvey_VehiclePills
                id={`${scope}-$b2`}
                inVehicleOwners={inOwnerType}
                inHostSurvey_Vehicle={edit}
                inVehicleTypes={inVehicleType}
              />
            )
          }
        />
      </div>
    </OSBlock>
  );
}
