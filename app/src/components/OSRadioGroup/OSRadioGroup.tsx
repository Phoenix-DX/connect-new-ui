import { Children, createContext, isValidElement, useContext, useEffect, useRef, type ReactNode } from 'react';

/* Platform widgets OSWidgets.RadioGroup / OSWidgets.RadioButton (not OutSystems blocks: no OSBlockWidget root), ported
   from OutSystemsReactWidgets.js (`W:<n>` = line of migration/screens/MessageList/analysis/sources/pretty/
   OutSystemsReactWidgets.js) and the widget base of migration/runtime-sources/OutSystemsReactView.js (`RV`). */

type RadioValue = string | number;

interface RadioGroupContextValue {
  groupName: string;
  value: RadioValue;
  enabled: boolean;
  updateValue: (value: RadioValue) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

/** gridProperties.classes "OSFillParent" (RV fillWithBuiltinProperties: appended to the className). */
const withGridClass = (className: string | undefined, fillParent: boolean) =>
  fillParent ? (className ? `${className} OSFillParent` : 'OSFillParent') : className;

/** RV executeAfterPaint (function T): requestAnimationFrame, then setTimeout 1 ms. */
function executeAfterPaint(callback: () => void): void {
  requestAnimationFrame(() => {
    window.setTimeout(callback, 1);
  });
}

export interface RadioGroupProps<T extends RadioValue> {
  /** Widget name (the element id; also the `name` of every radio input, getAdditionalPropsToChild W:359-361). */
  id: string;
  /** Style Classes. */
  style: string;
  enabled?: boolean;
  /** gridProperties.classes "OSFillParent" (default true, as Service Studio sets it). */
  fillParent?: boolean;
  /** Variable (value). */
  value: T;
  /** Variable assignment: the new value of a RadioButton that is not the current one (updateValue W:106-115). */
  onValueChange: (value: T) => void;
  /** OnChange event: raised after paint, once the variable holds the new value (W:111-114). */
  onChange?: () => void;
  /** A failed validation's message (RV createValidationElement / ValidationWidget fillWithBuiltinProperties). */
  validationMessage?: string;
  /** The RadioButtons (direct children, like the runtime's Children.map). */
  children?: ReactNode;
}

/** OSWidgets.RadioGroup (W:347-370, AbstractButtonGroup W:78-188, render W:144-185): `<div data-radio-group
    class="<style> OSFillParent" role="radiogroup" aria-activedescendant="<id of the selected RadioButton>">` > `<div>`
    > the RadioButtons, then the validation message span when the validation failed. A RadioButton is selected when
    its value equals the variable (W:156); it is enabled when it and the group are (W:157). Not ported: the runtime
    keeps a stale aria-activedescendant when no RadioButton matches any more (here the attribute is left out). */
export function RadioGroup<T extends RadioValue>({
  id,
  style,
  enabled = true,
  fillParent = true,
  value,
  onValueChange,
  onChange,
  validationMessage,
  children,
}: RadioGroupProps<T>) {
  const isDisposed = useRef(false);
  useEffect(() => {
    isDisposed.current = false;
    return () => {
      isDisposed.current = true;
    };
  }, []);
  let selectedId: string | undefined;
  Children.forEach(children, (child) => {
    if (isValidElement<RadioButtonProps>(child) && child.props.value === value) selectedId = child.props.id;
  });
  const updateValue = (next: RadioValue) => {
    if (next === value) return;
    onValueChange(next as T);
    if (onChange)
      executeAfterPaint(() => {
        if (!isDisposed.current) onChange();
      });
  };
  const notValid = validationMessage !== undefined && validationMessage !== '';
  return (
    <RadioGroupContext.Provider value={{ groupName: id, value, enabled, updateValue }}>
      <div
        data-radio-group=""
        className={[withGridClass(style, fillParent), notValid ? 'not-valid' : undefined].filter(Boolean).join(' ')}
        role="radiogroup"
        aria-activedescendant={selectedId}
        id={id}
      >
        <div>{children}</div>
        {notValid && (
          <span id={`${id}_DescribedBy`} className="validation-message">
            {validationMessage}
          </span>
        )}
      </div>
    </RadioGroupContext.Provider>
  );
}

export interface RadioButtonProps {
  /** Widget name (the wrapper id; the input is `<id>-input`). */
  id: string;
  /** Style Classes: on the input (W:404). */
  style: string;
  value: RadioValue;
  enabled?: boolean;
  visible?: boolean;
  /** gridProperties.classes "OSFillParent" on the wrapper (default true). */
  fillParent?: boolean;
  /** extendedEvents onClick: on the wrapper (fillWithBuiltinProperties of the wrapper props, W:397-420). */
  onClick?: () => void;
  /** The label content. */
  children?: ReactNode;
}

/** OSWidgets.RadioButton (W:371-430): `<div data-radio-button class="OSFillParent">` > `<input type="radio"
    id="<id>-input" class="<style>" name="<group id>" value="<value as text>" [hidden] [disabled] checked>` +
    `<label for="<id>-input">children</label>`. A change sets the group's variable to this value
    (handleClick W:391-396, inside executeWithActiveClassOn: class "active" on the wrapper while it runs). */
export function RadioButton({
  id,
  style,
  value,
  enabled = true,
  visible = true,
  fillParent = true,
  onClick,
  children,
}: RadioButtonProps) {
  const group = useContext(RadioGroupContext);
  const ref = useRef<HTMLDivElement>(null);
  const inputId = `${id}-input`;
  const handleClick = () => {
    const node = ref.current;
    node?.classList.add('active');
    try {
      group?.updateValue(value);
    } finally {
      node?.classList.remove('active');
    }
  };
  return (
    <div data-radio-button="" className={withGridClass(undefined, fillParent)} id={id} ref={ref} onClick={onClick}>
      <input
        type="radio"
        id={inputId}
        className={style}
        name={group?.groupName}
        value={String(value)}
        hidden={!visible}
        disabled={!(enabled && (group?.enabled ?? true))}
        checked={group !== null && group.value === value}
        onChange={handleClick}
      />
      <label htmlFor={inputId}>{children}</label>
    </div>
  );
}
