import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import type { HostSurveyRoom } from '@/api/event';
import { Gallery } from '@/components/ui/Gallery';
import { LegacyInputCounter } from '@/components/ui/LegacyInputCounter';
import { BreakColumns, GutterSize } from '@/components/ui/lib/staticEntities';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSDropdownCustom } from '@/components/ui/os/OSDropdownCustom';
import { OSList } from '@/components/ui/os/OSList';
import {
  DEFAULT_WIDGET_RECORD,
  DESCRIBED_BY_SUFFIX,
  hasValidationMessage,
  ValidationMessage,
  withNotValidClass,
  type WidgetValidationRecord,
} from '@/components/ui/os/OSValidation';
import type { StepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import type { LocalBedSize, LocalGenderPreference, LocalHouseFloor } from '@/platform/storage/localEntities';
import { createValidationMessage } from './actions';
import { HostSurvey_AccommodationPills } from './HostSurvey_AccommodationPills';
import { HostSurvey_Item } from './HostSurvey_Item';
import {
  filterBedSizes,
  initialAccommodationEdit,
  initializeVars,
  invalidBeds,
  onParametersChangedStep,
  populateNoOfBeds,
  resizeBeds,
  sameRoomNameIndex,
  type AccommodationEdit,
} from './hostSurveyAccommodationItem';

export interface HostSurvey_AccommodationItemProps {
  /** OutSystems instance id of the block. */
  id: string;
  inCurrentRowNumber: number;
  inGenderPreferences: readonly LocalGenderPreference[];
  inIsSurveyConfirmed: boolean;
  /** In_RoomNames: the names of the rooms (RoomNames of ScreenBlock_HostSurvey). */
  inRoomNames: readonly string[];
  inHostSurvey_Room: HostSurveyRoom;
  inHouseFloors: readonly LocalHouseFloor[];
  inBedSize: readonly LocalBedSize[];
  inStepProperties: StepProperties;
  /** Event Save_Failed(DisableMessage). */
  onSaveFailed: (disableMessage: boolean) => void;
  /** Event Click_Edit. */
  onClickEdit: () => void;
  /** Event Save_Successful(RoomInfoItem). */
  onSaveSuccessful: (roomInfoItem: HostSurveyRoom) => void;
  /** Event Click_Delete. */
  onClickDelete: () => void;
}

type Records = Readonly<Record<string, WidgetValidationRecord>>;

/** OnFocus_Inputs → ScrollIntoView JS: the element scrolls smoothly to the centre. */
const scrollIntoView = (inputId: string) => {
  document.getElementById(inputId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

/** OutSystemsUI Columns4 (Adaptive), built as Columns3 of components/ui (the OSUI columns pattern). */
function Columns4({
  id,
  column1,
  column2,
  column3,
  column4,
}: { id: string } & Record<`column${1 | 2 | 3 | 4}`, ReactNode>) {
  return (
    <OSBlock name="Adaptive.Columns4" id={id}>
      <div
        className={`columns columns4 ${GutterSize.Base} tablet-${BreakColumns.None} phone-${BreakColumns.None} `}
        data-container=""
      >
        <div className="columns-item">{column1}</div>
        <div className="columns-item">{column2}</div>
        <div className="columns-item">{column3}</div>
        <div className="columns-item">{column4}</div>
      </div>
    </OSBlock>
  );
}

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem
    A room of the accommodation step (AI = HostSurvey_AccommodationItem.mvc.js, TST). HostSurvey_Item "Room <n>" (Edit
    when the step is not in edit, Delete, both hidden on a confirmed survey); in edit, the form: Room Name (unique,
    tooltip, counter), Sleeping Arrangements (button group of the first four gender preferences), Number of Beds, a
    Bed Type per bed (gallery of two columns), Floor, Room Amenities (four checkboxes), Room Notes; out of edit, the
    room's pills. The block edits a copy (Edit_HostSurvey_Room); TrySave of the step makes a room in edit validate
    (AccommodationForm_Validate) and raise Save_Successful or Save_Failed. */
export function HostSurvey_AccommodationItem(props: HostSurvey_AccommodationItemProps) {
  const {
    id,
    inCurrentRowNumber,
    inGenderPreferences,
    inIsSurveyConfirmed,
    inRoomNames,
    inHostSurvey_Room,
    inHouseFloors,
    inBedSize,
    inStepProperties,
  } = props;
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const ids = {
    roomName: `${scope}-Input_RoomName`,
    arrangements: `${scope}-ButtonGroup_Arrangements`,
    bedsNumber: `${scope}-Dropdown_BedsNumber`,
    bedSize: (i: number) => `${scope}-l3_${String(i)}-Dropdown_BedSize`,
    floor: `${scope}-Dropdown_Floor`,
    amenities: `${scope}-Columns_Amenities`,
    notes: `${scope}-Input_Notes`,
    tooltip: `${scope}-Tooltip_UniqueName`,
  };

  // OnInitialize: Edit_HostSurvey_Room = In_HostSurvey_Room, then InitializeVars.
  const [edit, setEditState] = useState<AccommodationEdit>(() =>
    initializeVars(initialAccommodationEdit(inHostSurvey_Room), inBedSize, inGenderPreferences),
  );
  const [records, setRecords] = useState<Records>({});
  /** The bed dropdown messages that ValidateBedSizeInputs / ValidateBedSizeInput_Single add ("" = valid). */
  const [bedMessages, setBedMessages] = useState<readonly string[]>([]);
  /** InvalidateField JS: the room name input gets " not-valid" without a message (same room name). */
  const [roomNameForced, setRoomNameForced] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const timeoutObject = useRef<number | undefined>(undefined);
  const latest = useRef({ edit, props });
  useLayoutEffect(() => {
    latest.current = { edit: latest.current.edit, props };
  });
  const setEdit = (next: AccommodationEdit) => {
    latest.current = { ...latest.current, edit: next };
    setEditState(next);
  };
  const setRecord = (widgetId: string, valid: boolean, message: string) => {
    setRecords((r) => ({ ...r, [widgetId]: { validAttr: valid, validationMessageAttr: message } }));
  };
  const record = (widgetId: string) => records[widgetId] ?? DEFAULT_WIDGET_RECORD;
  const room = edit.room;

  /** OnChange_Inputs: the widget's Valid and ValidationMessage from its value; the room name also closes the tooltip. */
  const onChangeInputs = (inputId: string, r: HostSurveyRoom) => {
    if (inputId === ids.roomName) {
      setRecord(ids.roomName, r.Name !== '', r.Name === '' ? createValidationMessage('Room name', false) : '');
      setRoomNameForced(false);
      setTooltipOpen(false);
    } else if (inputId === ids.arrangements) {
      const valid = r.GenderPreference !== '';
      setRecord(ids.arrangements, valid, valid ? '' : createValidationMessage('Sleeping Arrangements', true));
    } else if (inputId === ids.bedsNumber) {
      const valid = Number(r.NumberOfBeds || '0') !== 0;
      setRecord(ids.bedsNumber, valid, valid ? '' : createValidationMessage('Number of beds', false));
    } else if (inputId === ids.floor) {
      setRecord(ids.floor, r.Floor !== '', r.Floor !== '' ? '' : createValidationMessage('Floor', false));
    }
  };

  /** ValidateBedSizeInputs (no Either check): a message on every bed that shows the empty value; returns the first. */
  const validateBedSizeInputs = (s: AccommodationEdit): number => {
    const bad = invalidBeds(s);
    setBedMessages(bad.map((b) => (b ? createValidationMessage('Bed type', false) : '')));
    return bad.indexOf(true);
  };

  /** DelayTootlip(IsOpen): the tooltip opens (or closes) 500 ms later. */
  const delayTooltip = (isOpen: boolean) => {
    timeoutObject.current = window.setTimeout(() => {
      setTooltipOpen(isOpen);
    }, 500);
  };
  // OnDestroy: clearTimeout(TimeoutObject).
  useEffect(
    () => () => {
      window.clearTimeout(timeoutObject.current);
    },
    [],
  );

  /** AccommodationForm_Validate. */
  const accommodationFormValidate = () => {
    const s = latest.current.edit;
    const p = latest.current.props;
    const r = s.room;
    const invalidInputs: string[] = [];
    let sameRoomName = false;
    if (r.Name === '') {
      setRecord(ids.roomName, false, createValidationMessage('Room name', false));
      invalidInputs.push(ids.roomName);
    }
    const sameName = sameRoomNameIndex(p.inRoomNames, r.Name);
    if (sameName !== -1 && sameName !== p.inCurrentRowNumber) {
      setRecords((rec) => ({
        ...rec,
        [ids.roomName]: { ...(rec[ids.roomName] ?? DEFAULT_WIDGET_RECORD), validAttr: false },
      }));
      setRoomNameForced(true);
      invalidInputs.push(ids.roomName);
      sameRoomName = true;
    }
    if (r.GenderPreference === '') {
      setRecord(ids.arrangements, false, createValidationMessage('Sleeping Arrangements', true));
      invalidInputs.push(ids.arrangements);
    }
    if (Number(r.NumberOfBeds || '0') !== 0) {
      const firstInvalid = validateBedSizeInputs(s);
      if (firstInvalid !== -1) invalidInputs.push(ids.bedSize(firstInvalid));
    } else {
      setRecord(ids.bedsNumber, false, createValidationMessage('Number of beds', false));
      invalidInputs.push(ids.bedsNumber);
    }
    if (r.Floor === '') {
      setRecord(ids.floor, false, createValidationMessage('Floor', false));
      invalidInputs.push(ids.floor);
    }
    const first = invalidInputs[0];
    if (first !== undefined) {
      p.onSaveFailed(invalidInputs.length === 1 && first === ids.roomName && sameRoomName);
      scrollIntoView(first);
      if (sameRoomName) delayTooltip(true);
    } else {
      p.onSaveSuccessful(r);
    }
  };

  // OnParametersChanged: runs when an input changes, never after the first render.
  const parametersKey = JSON.stringify([
    inCurrentRowNumber,
    inGenderPreferences,
    inIsSurveyConfirmed,
    inRoomNames,
    inHostSurvey_Room,
    inHouseFloors,
    inBedSize,
    inStepProperties,
  ]);
  const previousKey = useRef(parametersKey);
  useEffect(() => {
    if (previousKey.current === parametersKey) return;
    previousKey.current = parametersKey;
    const p = latest.current.props;
    const step = onParametersChangedStep(
      p.inIsSurveyConfirmed,
      p.inStepProperties.TrySave,
      p.inHostSurvey_Room.IsEdit,
      latest.current.edit.room.IsEdit,
    );
    if (step === 'validate') accommodationFormValidate();
    else if (step === 'startEdit')
      setEdit(
        initializeVars({ ...latest.current.edit, room: p.inHostSurvey_Room }, p.inBedSize, p.inGenderPreferences),
      );
    else if (step === 'reset') setEdit({ ...latest.current.edit, room: p.inHostSurvey_Room });
    // The flow reads the newest inputs through `latest`; it runs on a change of the inputs only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parametersKey]);

  const enabled = !inIsSurveyConfirmed;
  const onFocusInputs = (inputId: string) => () => {
    scrollIntoView(inputId);
  };
  const setRoom = (patch: Partial<HostSurveyRoom>) => {
    const next = { ...latest.current.edit, room: { ...latest.current.edit.room, ...patch } };
    setEdit(next);
    return next;
  };

  /** OnChange_SleepingArrengements. */
  const onChangeSleepingArrangements = (genderPreference: string) => {
    const s = setRoom({ GenderPreference: genderPreference });
    onChangeInputs(ids.arrangements, s.room);
    const next = populateNoOfBeds(filterBedSizes(s, inBedSize, inGenderPreferences), inGenderPreferences);
    setEdit(next);
    if (Number(next.room.NumberOfBeds || '0') !== 0) {
      // DelayValidation JS: ValidateBedSizeInputs 100 ms later.
      window.setTimeout(() => {
        validateBedSizeInputs(latest.current.edit);
      }, 100);
    }
  };

  /** OnChange_NoOfBeds (the dropdown has set NumberOfBeds). */
  const onChangeNoOfBeds = () => {
    const s = latest.current.edit;
    onChangeInputs(ids.bedsNumber, s.room);
    setEdit(resizeBeds(filterBedSizes(s, inBedSize, inGenderPreferences)));
  };

  /** The variable of a bed dropdown: Beds[position]. */
  const setBedSize = (position: number, value: string) => {
    const beds = [...latest.current.edit.room.Beds];
    beds[position] = value;
    setRoom({ Beds: beds });
  };

  /** OnChange_BedSize(InputId, Position) → ValidateBedSizeInput_Single (no Either check): ValidValue = In_BedSize has
      the chosen value. */
  const onChangeBedSize = (position: number) => {
    const value = latest.current.edit.room.Beds[position] ?? '';
    const validValue = inBedSize.some((b) => b.JSON_Name === value);
    setBedMessages((m) => {
      const next = [...m];
      const wasInvalid = (m[position] ?? '') !== '';
      next[position] = wasInvalid
        ? validValue
          ? ''
          : createValidationMessage('Bed type', false)
        : validValue
          ? ''
          : createValidationMessage('Bed type', false);
      return next;
    });
  };

  const genderItem = (n: number, name: string) => {
    const pref = inGenderPreferences[n];
    return { id: `${scope}-${name}`, value: pref?.JSON_Name ?? '', label: pref?.Label ?? '' };
  };
  const arrangements = [
    genderItem(0, 'ButtonGroupItem_Males'),
    genderItem(1, 'ButtonGroupItem_Females'),
    genderItem(2, 'ButtonGroupItem_Couples'),
    genderItem(3, 'ButtonGroupItem_Either'),
  ];
  const arrangementsRecord = record(ids.arrangements);
  const roomNameRecord = record(ids.roomName);
  const bedsPerRow = room.Beds.length !== 1 ? 2 : 1;

  const checkbox = (name: string, key: 'HasEnsuite' | 'HasToilet' | 'HasShower' | 'HasBasin', label: string) => (
    <div className="display-flex flex-direction-row align-items-center justify-content-center" data-container="">
      <span>
        <input
          checked={room[key]}
          className="checkbox"
          data-checkbox=""
          disabled={!enabled}
          id={`${scope}-${name}`}
          type="checkbox"
          onChange={(e) => {
            setRoom({ [key]: e.currentTarget.checked });
          }}
          onFocus={onFocusInputs(ids.amenities)}
        />
      </span>
      <span className="margin-left-base line-height-1 font-size-s white-space-nowrap" data-expression="">
        {label}
      </span>
    </div>
  );

  const form = (
    <div data-container="">
      <div data-container="">
        <div className="orbit-host-survey-label-with-icon" data-container="">
          <label className="mandatory" data-label="" htmlFor={ids.roomName}>
            Room Name
          </label>
          <OSBlock name="Content.Tooltip" id={ids.tooltip}>
            <div
              className="osui-tooltip"
              onClick={() => {
                setTooltipOpen((o) => !o);
              }}
            >
              <div className="osui-tooltip__content">
                <i className="icon orbit-icon-circle-warning" data-icon="" />
              </div>
              {tooltipOpen && <div className="osui-tooltip__balloon-wrapper">Room name must be unique.</div>}
            </div>
          </OSBlock>
        </div>
        <span className="input-text">
          <input
            aria-describedby={hasValidationMessage(roomNameRecord) ? ids.roomName + DESCRIBED_BY_SUFFIX : undefined}
            aria-required="true"
            className={
              roomNameForced && !hasValidationMessage(roomNameRecord)
                ? 'form-control OSFillParent not-valid'
                : withNotValidClass('form-control OSFillParent', roomNameRecord)
            }
            data-input=""
            disabled={!enabled}
            id={ids.roomName}
            maxLength={250}
            placeholder="Provide a room name"
            required
            type="text"
            value={room.Name}
            onChange={(e) => {
              const s = setRoom({ Name: e.currentTarget.value });
              onChangeInputs(ids.roomName, s.room);
            }}
            onFocus={onFocusInputs(ids.roomName)}
          />
          <ValidationMessage widgetId={ids.roomName} record={roomNameRecord} />
        </span>
        <LegacyInputCounter id={`${scope}-$b3`} inputId={ids.roomName} />
      </div>
      <div data-container="">
        <label className="mandatory OSFillParent" data-label="" htmlFor={ids.arrangements}>
          Sleeping Arrangements
        </label>
        <div
          data-button-group=""
          className={withNotValidClass('button-group', arrangementsRecord)}
          role="radiogroup"
          aria-activedescendant={arrangements.find((a) => a.value === room.GenderPreference)?.id}
          id={ids.arrangements}
          onFocus={onFocusInputs(ids.arrangements)}
        >
          <div>
            {arrangements.map((a) => {
              const isSelected = a.value === room.GenderPreference;
              return (
                <button
                  key={a.id}
                  data-button-group-item=""
                  className={`button-group-item${isSelected ? ' button-group-selected-item' : ''}`}
                  disabled={!enabled}
                  aria-checked={isSelected ? 'true' : 'false'}
                  role="radio"
                  id={a.id}
                  type="button"
                  onClick={() => {
                    if (a.value !== room.GenderPreference) onChangeSleepingArrangements(a.value);
                  }}
                >
                  <span data-expression="">{a.label}</span>
                </button>
              );
            })}
          </div>
          <ValidationMessage widgetId={ids.arrangements} record={arrangementsRecord} />
        </div>
      </div>
      <div data-container="">
        <label className="mandatory OSFillParent" data-label="" htmlFor={ids.bedsNumber}>
          Number of Beds in Room
        </label>
        <OSDropdownCustom
          id={ids.bedsNumber}
          style="dropdown"
          emptyValue="Select number of beds"
          mandatory
          enabled={enabled}
          list={edit.numberOfBeds}
          getValue={(n) => n}
          renderRow={(n) => <span data-expression="">{n}</span>}
          value={room.NumberOfBeds}
          nullValue="0"
          record={record(ids.bedsNumber)}
          onValueChange={(value) => {
            setRoom({ NumberOfBeds: value });
          }}
          onChange={onChangeNoOfBeds}
          onFocus={onFocusInputs(ids.bedsNumber)}
        />
      </div>
      {room.Beds.length > 0 && (
        <div className="orbit-host-survey-beds" data-container="">
          <Gallery
            id={`${scope}-$b4`}
            rowItemsDesktop={bedsPerRow}
            rowItemsTablet={bedsPerRow}
            rowItemsPhone={bedsPerRow}
          >
            <OSList
              className="list list-group OSFillParent"
              animateItems={false}
              disableVirtualization
              source={room.Beds}
              keyOf={(_bed: string, i) => i}
            >
              {(bed, i) => (
                <div data-container="">
                  <label className="mandatory OSFillParent" data-label="" htmlFor={ids.bedSize(i)}>
                    <span data-expression="">Bed Type</span>
                  </label>
                  <OSDropdownCustom
                    id={ids.bedSize(i)}
                    style="dropdown"
                    emptyValue="Select bed type"
                    mandatory
                    enabled={enabled}
                    list={edit.editBedSizes}
                    getValue={(b) => b.JSON_Name}
                    renderRow={(b) => <span data-expression="">{b.Label}</span>}
                    value={bed}
                    record={{ validAttr: (bedMessages[i] ?? '') === '', validationMessageAttr: bedMessages[i] ?? '' }}
                    onValueChange={(value) => {
                      setBedSize(i, value);
                    }}
                    onChange={() => {
                      onChangeBedSize(i);
                    }}
                    onFocus={onFocusInputs(ids.bedSize(i))}
                  />
                </div>
              )}
            </OSList>
          </Gallery>
        </div>
      )}
      <div data-container="">
        <label className="mandatory OSFillParent" data-label="" htmlFor={ids.floor}>
          Floor
        </label>
        <OSDropdownCustom
          id={ids.floor}
          style="dropdown"
          emptyValue="Select floor"
          mandatory
          enabled={enabled}
          list={inHouseFloors}
          getValue={(f) => f.JSON_Name}
          renderRow={(f) => <span data-expression="">{f.Label}</span>}
          value={room.Floor}
          record={record(ids.floor)}
          onValueChange={(value) => {
            setRoom({ Floor: value });
          }}
          onChange={() => {
            onChangeInputs(ids.floor, latest.current.edit.room);
          }}
          onFocus={onFocusInputs(ids.floor)}
        />
      </div>
      <div data-container="">
        <label className="OSFillParent" data-label="">
          Room Amenities
        </label>
        <Columns4
          id={ids.amenities}
          column1={checkbox('Checkbox_Ensuite', 'HasEnsuite', 'Ensuite')}
          column2={checkbox('Checkbox_Toilet', 'HasToilet', 'Toilet')}
          column3={checkbox('Checkbox_Shower', 'HasShower', 'Shower')}
          column4={checkbox('Checkbox_Basin', 'HasBasin', 'Basin')}
        />
      </div>
      <div data-container="">
        <label className="OSFillParent" data-label="" htmlFor={ids.notes}>
          Room Notes (Optional)
        </label>
        <span className="input-text">
          <input
            className="form-control OSFillParent"
            data-input=""
            disabled={!enabled}
            id={ids.notes}
            maxLength={500}
            placeholder="Any addtional details"
            type="text"
            value={room.RoomNote}
            onChange={(e) => {
              setRoom({ RoomNote: e.currentTarget.value });
            }}
            onFocus={onFocusInputs(ids.notes)}
          />
        </span>
      </div>
    </div>
  );

  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_AccommodationItem" id={id}>
      <div className="orbit-host-survey-accommodation-item" data-container="">
        <HostSurvey_Item
          id={`${scope}-$b1`}
          inTitle={`Room ${String(inCurrentRowNumber + 1)}`}
          inHasDelete={!inIsSurveyConfirmed}
          inHasEdit={!inStepProperties.IsEdit && !inIsSurveyConfirmed}
          inHasPlaceholder={false}
          onClickEdit={props.onClickEdit}
          onClickDelete={props.onClickDelete}
          placeholderContent={
            room.IsEdit ? (
              form
            ) : (
              <HostSurvey_AccommodationPills
                id={`${scope}-$b6`}
                inIsDisabled={false}
                inHostSurvey_Room={room}
                inHouseFloors={inHouseFloors}
                inGenderPreferences={inGenderPreferences}
              />
            )
          }
        />
      </div>
    </OSBlock>
  );
}
