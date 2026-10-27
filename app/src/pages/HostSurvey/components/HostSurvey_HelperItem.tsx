import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { HostSurveyHelper } from '@/api/event';
import { HostSurveyPill } from '@/components/orbit/HostSurveyPill';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DEFAULT_WIDGET_RECORD, type WidgetValidationRecord } from '@/components/ui/os/OSValidation';
import type { StepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import { getLocalHelperStatus, type LocalHelperRole } from '@/platform/storage/localEntities';
import { helperStatusPill, scrollInputIntoView } from './hostSurveyHelpers';
import { Card_MemberInformation_Survey } from './Card_MemberInformation_Survey';
import { HostSurvey_HelperPills } from './HostSurvey_HelperPills';
import { HostSurvey_Item } from './HostSurvey_Item';
import { OSDropdownCustom } from './OSDropdownCustom';
import { createValidationMessage } from './actions';

export interface HostSurvey_HelperItemProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** In_IsSurveyConfirmed. */
  inIsSurveyConfirmed: boolean;
  /** In_FilteredHelperRoles: the roles of the dropdown (not read-only). */
  inFilteredHelperRoles: readonly LocalHelperRole[];
  /** In_CurrentRowNumber: the title "Helper <n + 1>". */
  inCurrentRowNumber: number;
  /** In_HelperRoles: every role (the role label of the pills). */
  inHelperRoles: readonly LocalHelperRole[];
  /** In_HostSurvey_Helper. */
  inHostSurvey_Helper: HostSurveyHelper;
  /** In_StepProperties (StepProperties.Helpers). */
  inStepProperties: StepProperties;
  /** Event Save_Failed. */
  onSaveFailed: () => void;
  /** Event Click_Edit. */
  onClickEdit: () => void;
  /** Event Click_Delete. */
  onClickDelete: () => void;
  /** Event Save_Successful(HelperInfoItem). */
  onSaveSuccessful: (helperInfoItem: HostSurveyHelper) => void;
}

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem
    A helper of the helper step (HI = HostSurvey_HelperItem.mvc.js).
    - Variable Edit_HostSurvey_Helper: OnInitialize copies In_HostSurvey_Helper.
    - View: `orbit-host-survey-helper-item` with HostSurvey_Item ($b1): title "Helper <n + 1>", Edit while the step is
      not in edit and the survey is not confirmed, Delete while the survey is not confirmed, Placeholder_Status (the
      status pill $b2, GetLocalHelperStatusByJSONName) when the helper is not in edit and has a status. Content in
      edit: the member card ($b3, `orbit-host-survey-helper-member`), the mandatory "Role" label and
      Dropdown_HelperRoles (Custom, Empty Value "Select role", In_FilteredHelperRoles, Enabled = not confirmed);
      otherwise HostSurvey_HelperPills ($b4).
    - OnParametersChanged: a confirmed survey does nothing. With TrySave, a helper in edit runs HelperForm_Validate
      (a role → Save_Successful(Edit_HostSurvey_Helper); none → the dropdown is not valid, "Helper role is required.",
      Save_Failed). Without TrySave, Edit_HostSurvey_Helper = In_HostSurvey_Helper when their IsEdit differ.
    - OnChange_HelperRoles: Valid = a role is selected, with the message when not. OnFocus_Inputs: ScrollIntoViewJS. */
export function HostSurvey_HelperItem({
  id,
  inIsSurveyConfirmed,
  inFilteredHelperRoles,
  inCurrentRowNumber,
  inHelperRoles,
  inHostSurvey_Helper,
  inStepProperties,
  onSaveFailed,
  onClickEdit,
  onClickDelete,
  onSaveSuccessful,
}: HostSurvey_HelperItemProps) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const dropdownId = `${scope}-Dropdown_HelperRoles`;
  // OnInitialize: Edit_HostSurvey_Helper = In_HostSurvey_Helper.
  const [edit, setEdit] = useState<HostSurveyHelper>(inHostSurvey_Helper);
  const [dropdown, setDropdown] = useState<WidgetValidationRecord>(DEFAULT_WIDGET_RECORD);

  // The newest values, which OnParametersChanged reads (OutSystems reads the model, not a render).
  const latest = useRef({ edit, inIsSurveyConfirmed, inHostSurvey_Helper, inStepProperties });
  useLayoutEffect(() => {
    latest.current = { edit, inIsSurveyConfirmed, inHostSurvey_Helper, inStepProperties };
  });
  const events = useRef({ onSaveFailed, onSaveSuccessful });
  useLayoutEffect(() => {
    events.current = { onSaveFailed, onSaveSuccessful };
  });

  /** HelperForm_Validate. */
  const helperFormValidate = () => {
    const current = latest.current.edit;
    if (current.HelperRole !== '') {
      events.current.onSaveSuccessful(current);
      return;
    }
    setDropdown({ validAttr: false, validationMessageAttr: createValidationMessage('Helper role', false) });
    events.current.onSaveFailed();
  };

  // OnParametersChanged: after a render whose inputs changed, never after the first render.
  const parametersKey = JSON.stringify([
    inIsSurveyConfirmed,
    inFilteredHelperRoles,
    inCurrentRowNumber,
    inHelperRoles,
    inHostSurvey_Helper,
    inStepProperties,
  ]);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const l = latest.current;
    if (l.inIsSurveyConfirmed) return;
    if (l.inStepProperties.TrySave) {
      if (l.edit.IsEdit) helperFormValidate();
      return;
    }
    if (l.inHostSurvey_Helper.IsEdit === l.edit.IsEdit) return;
    setEdit(l.inHostSurvey_Helper);
    latest.current = { ...l, edit: l.inHostSurvey_Helper };
  }, [parametersKey]);

  /** OnChange_HelperRoles. */
  const onChangeHelperRoles = (role: string) => {
    setDropdown(
      role !== ''
        ? { validAttr: true, validationMessageAttr: '' }
        : { validAttr: false, validationMessageAttr: createValidationMessage('Helper role', false) },
    );
  };

  // Aggregate GetLocalHelperStatusByJSONName (HI model; Max. Records 1): the status of Edit_HostSurvey_Helper.
  const status = getLocalHelperStatus(0).find((s) => s.JSON_Name === edit.HelperStatus);
  const pill = helperStatusPill(status?.Id ?? 0);

  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_HelperItem" id={id}>
      <div className="orbit-host-survey-helper-item" data-container="">
        <HostSurvey_Item
          id={`${scope}-$b1`}
          inTitle={`Helper ${String(inCurrentRowNumber + 1)}`}
          inHasEdit={!inStepProperties.IsEdit && !inIsSurveyConfirmed}
          inHasDelete={!inIsSurveyConfirmed}
          inHasPlaceholder={!edit.IsEdit && edit.HelperStatus !== ''}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
          placeholderStatus={
            <HostSurveyPill
              id={`${scope}-$b2`}
              inExtendedStyle={pill.extendedStyle}
              inIsSmallIcon
              inIconClass={pill.iconClass}
              inPillText={status?.Label ?? ''}
            />
          }
          placeholderContent={
            edit.IsEdit ? (
              <>
                <div className="orbit-host-survey-helper-member" data-container="">
                  <Card_MemberInformation_Survey
                    id={`${scope}-$b3`}
                    inMemberInformation={{
                      MemberId: edit.MemberId,
                      Locality: edit.LocalityName,
                      CountryCode: edit.CountryName,
                      FirstName: edit.FirstName,
                      LastName: edit.LastName,
                    }}
                  />
                </div>
                <div data-container="">
                  <label className="mandatory" data-label="" htmlFor={dropdownId}>
                    Role
                  </label>
                </div>
                <div data-container="">
                  <OSDropdownCustom
                    id={dropdownId}
                    style="dropdown"
                    emptyValue="Select role"
                    enabled={!inIsSurveyConfirmed}
                    list={inFilteredHelperRoles}
                    valueOf={(role) => role.JSON_Name}
                    renderItem={(role) => <span data-expression="">{role.Label}</span>}
                    value={edit.HelperRole}
                    nullValue=""
                    onChange={(role) => {
                      const next = { ...latest.current.edit, HelperRole: role };
                      latest.current = { ...latest.current, edit: next };
                      setEdit(next);
                      onChangeHelperRoles(role);
                    }}
                    onFocus={() => {
                      scrollInputIntoView(dropdownId);
                    }}
                    record={dropdown}
                  />
                </div>
              </>
            ) : (
              <HostSurvey_HelperPills
                id={`${scope}-$b4`}
                inIsDisabled={false}
                inHelperRoles={inHelperRoles}
                inHostSurvey_Helper={edit}
              />
            )
          }
        />
      </div>
    </OSBlock>
  );
}
