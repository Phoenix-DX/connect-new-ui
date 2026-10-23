export interface FormSwitchProps {
  /** The widget name (the input id). */
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/** OutSystems Switch widget as captured: a span with the checkbox input of class "switch".
    @origin UBTConnect.App_Profile.Profile */
export function FormSwitch({ id, checked, onChange }: FormSwitchProps) {
  return (
    <span>
      <input
        checked={checked}
        className="switch"
        data-switch=""
        id={id}
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
    </span>
  );
}
