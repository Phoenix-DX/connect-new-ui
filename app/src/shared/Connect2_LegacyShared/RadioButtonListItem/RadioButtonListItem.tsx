// @os-block Connect2_LegacyShared.Reusable.RadioButtonListItem
import { useId, useState, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { RadioButton, RadioGroup } from '../../../components/OSRadioGroup';

export interface RadioButtonListItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** SelectedValue (default ""): the value of the block's one RadioButton. */
  selectedValue?: string;
  /** RadioButtonValue (default ""): the RadioGroup variable (a click sets it inside the block). */
  radioButtonValue?: string;
  /** ExtendedClass (default ""): appended to `radio-group radio-group--list-item `. */
  extendedClass?: string;
  /** Event Selected (a click on the RadioButton). */
  onSelected?: () => void;
  /** Placeholder Title (the RadioButton label). */
  children?: ReactNode;
}

/** Radio list item (p:migration/blocks/sources/Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc.js; view
    :147-215): a RadioGroup `radio-group radio-group--list-item <ExtendedClass>` bound to RadioButtonValue with one
    RadioButton `radio-button` whose value is SelectedValue, label = placeholder Title. The RadioButton's onClick raises
    Selected (:189-197; the controller's selected$Action :252-254 is the event's empty default). Inputs (model :12-29)
    are re-read when the caller changes them (setInputs :67-93), so a new RadioButtonValue replaces the local one. The
    widget ids (RadioGroup / RadioButton) are generated: React `useId` stands in, the radio inputs need a group name. */
export function RadioButtonListItem({
  id,
  selectedValue = '',
  radioButtonValue = '',
  extendedClass = '',
  onSelected,
  children,
}: RadioButtonListItemProps) {
  const scope = useId().replace(/:/g, '');
  const [value, setValue] = useState(radioButtonValue);
  // setInputs (:67-93): a new RadioButtonValue from the caller replaces the local one
  const [inputValue, setInputValue] = useState(radioButtonValue);
  if (inputValue !== radioButtonValue) {
    setInputValue(radioButtonValue);
    setValue(radioButtonValue);
  }
  return (
    <OSBlock name="Reusable.RadioButtonListItem" id={id}>
      <RadioGroup
        id={`${scope}-RadioGroup`}
        style={'radio-group radio-group--list-item ' + extendedClass}
        value={value}
        onValueChange={setValue}
      >
        <RadioButton id={`${scope}-RadioButton`} style="radio-button" value={selectedValue} onClick={onSelected}>
          <div>{children}</div>
        </RadioButton>
      </RadioGroup>
    </OSBlock>
  );
}
