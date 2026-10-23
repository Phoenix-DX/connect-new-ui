/** @origin UBT_AppManager.PIN.PinCode */
// @os-block UBT_AppManager.PIN.PinCode
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { replaceOnUpcomingNavigation } from '@/platform/navigation';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';

export interface PinCodeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Length: digits of the PIN; 0 = any length, confirmed with an OK key; below 0 → 4 (OnInitialize). */
  length?: number;
  inExtendedClasses?: string;
  /** In_AllowBackNavigation: false → PreventBackNavigation while the keypad shows. */
  inAllowBackNavigation?: boolean;
  /** Placeholder HeaderBar. */
  headerBar?: ReactNode;
  /** Placeholder TitlePlaceholder. */
  titlePlaceholder?: ReactNode;
  /** Placeholder Message. */
  message?: ReactNode;
  /** Placeholder Option (left of the 0 key; shown when Length > 0). */
  option?: ReactNode;
  /** Placeholder ErasePlaceholder (content of the erase key). */
  erasePlaceholder?: ReactNode;
  /** Placeholder Placeholder_BottomKeyboard. */
  placeholderBottomKeyboard?: ReactNode;
  /** Placeholder ContentPlaceholder. */
  contentPlaceholder?: ReactNode;
  /** Event KeyPressed: before a digit is added. */
  onKeyPressed?: () => void | Promise<void>;
  /** Event SetPin(UBTPincode): the PIN is complete (or OK pressed). */
  onSetPin?: (ubtPincode: string) => void | Promise<void>;
  /** Event PincodeChange(InputLength). */
  onPincodeChange?: (inputLength: number) => void | Promise<void>;
}

interface Pin {
  pincode: string;
  pinDisplay: string;
  buttonsEnabled: boolean;
  counter: number;
  digitList: readonly number[];
}

/** OnInitialize (p:UBT_AppManager.PIN.PinCode.mvc.js:1121-1163): DigitList = 0 … Length - 1. */
const initial = (length: number): Pin => ({
  pincode: '',
  pinDisplay: '',
  buttonsEnabled: true,
  counter: length,
  digitList: Array.from({ length: Math.max(length, 0) }, (_, i) => i),
});

const KEY_COLUMNS = [
  [1, 4, 7],
  [2, 5, 8, 0],
  [3, 6, 9],
] as const;

/** The PIN keypad (p:UBT_AppManager.PIN.PinCode.mvc.js view :196-966, controller :1003-1475). The model variables
    (pincode, PinDisplay, ButtonsEnabled, Counter, DigitList) live in a ref the actions read and write, and in state for
    rendering, as the OutSystems model does.
    - DigitClick (:1220-1290): KeyPressed, append the digit, ValidateButtonsEnabled (keys off once Length digits are in),
      PincodeChange; at Length digits ValidateInPromise starts Validate without waiting for it.
    - Validate (:1003-1060): DelayResetVariables (clear after 500 ms unless destroyed), ReplaceOnUpcomingNavigation,
      then SetPin(pincode). EraseClick (:1321-1365) drops the last digit; the erase key is enabled with a digit in.
    - Length 0 grows DigitList per digit and shows an OK key (Validate) instead of the Option placeholder.
    - OnInitialize also calls PIN_SessionInactivity_Destroy: not here, the shell's LockHost owns the timer (README). */
export function PinCode({
  id,
  length = 0,
  inExtendedClasses = '',
  inAllowBackNavigation = false,
  headerBar,
  titlePlaceholder,
  message,
  option,
  erasePlaceholder,
  placeholderBottomKeyboard,
  contentPlaceholder,
  onKeyPressed,
  onSetPin,
  onPincodeChange,
}: PinCodeProps) {
  const len = length < 0 ? 4 : length;
  const [view, setView] = useState(() => initial(len));
  const model = useRef<Pin>(view);
  const destroyCallback = useRef<(() => void) | null>(null);
  const events = useRef({ onKeyPressed, onSetPin, onPincodeChange });
  useLayoutEffect(() => {
    events.current = { onKeyPressed, onSetPin, onPincodeChange };
  });
  useEffect(() => {
    const callback = destroyCallback;
    return () => callback.current?.(); // OnDestroy: ExecuteDestroyCallback (:1295-1319)
  }, []);

  const commit = (next: Pin) => {
    model.current = next;
    setView(next);
  };
  const pincodeChanged = async () => {
    await events.current.onPincodeChange?.(model.current.pincode.length);
  };
  const validateButtonsEnabled = (m: Pin): Pin => ({
    ...m,
    buttonsEnabled: m.pincode.length < len || len === 0,
  });
  const resetVariables = async () => {
    const m = model.current;
    commit({
      ...m,
      pincode: '',
      pinDisplay: '',
      buttonsEnabled: true,
      ...(len === 0 ? { counter: 0, digitList: [] } : {}),
    });
    await pincodeChanged();
  };
  const validate = async () => {
    const finalPincode = model.current.pincode;
    let destroyed = false; // DelayResetVariablesJS (:1477-1496)
    const timeout = window.setTimeout(() => {
      if (!destroyed) void resetVariables();
    }, 500);
    destroyCallback.current = () => {
      destroyed = true;
      window.clearTimeout(timeout);
    };
    replaceOnUpcomingNavigation();
    await events.current.onSetPin?.(finalPincode);
  };
  const digitClick = async (digit: number) => {
    await events.current.onKeyPressed?.();
    let m = model.current;
    m = { ...m, pincode: m.pincode + String(digit), pinDisplay: `${m.pinDisplay}*` };
    if (len === 0) m = { ...m, digitList: [...m.digitList, m.counter] };
    commit(validateButtonsEnabled(m));
    await pincodeChanged();
    if (model.current.pincode.length === len && len !== 0) void validate();
  };
  const eraseClick = async () => {
    let m = model.current;
    m = { ...m, pincode: m.pincode.slice(0, -1), pinDisplay: m.pinDisplay.slice(0, -1) };
    if (len === 0) {
      const position = m.digitList[m.pinDisplay.length === 0 ? 0 : m.pinDisplay.length - 1];
      if (position !== undefined) m = { ...m, digitList: m.digitList.filter((_, i) => i !== position) };
    }
    commit(validateButtonsEnabled(m));
    await pincodeChanged();
  };

  const prefix = id?.replace('$', '');
  const digitKey = (digit: number) => (
    <div data-container="" key={digit}>
      <button
        className="btn ubt-pincode__button OSFillParent"
        data-button=""
        type="button"
        disabled={!view.buttonsEnabled}
        onClick={() => void digitClick(digit)}
      >
        <span className="ubt-pincode-digit">{String(digit)}</span>
      </button>
    </div>
  );
  const column = (children: ReactNode) => (
    <div className="ubt-pincode__keyboard-buttons-column OSInline" data-container="" style={{ width: 'auto' }}>
      {children}
    </div>
  );

  return (
    <OSBlock name="PIN.PinCode" id={id}>
      <div className={`ubt-pincode ${inExtendedClasses}`} data-container="">
        <div className="ubt-pincode__header-bar" data-container="">
          <div>{headerBar}</div>
        </div>
        <div className="ubt-pincode__header" data-container="" style={{ textAlign: 'center' }}>
          <div className="ubt-pincode__header__title">{titlePlaceholder}</div>
          <div
            className="list list-group ubt-pincode__header__pins OSFillParent"
            data-animation-disabled=""
            data-list=""
            data-virtualization-disabled=""
          >
            {view.digitList.map((digit, i) => (
              <div className="ubt-pincode__pin OSInline" data-container="" key={i}>
                {digit < view.pinDisplay.length ? (
                  <i className="icon selected-icon fa fa-circle fa-1x" data-icon="" />
                ) : (
                  <i className="icon empty-icon fa fa-circle-thin fa-1x" data-icon="" />
                )}
              </div>
            ))}
          </div>
          <div className="ubt-pincode__header__message">{message}</div>
        </div>
        <div className="ubt-pincode__keyboard" data-container="" style={{ height: '345.333px' }}>
          <div data-container="" style={{ textAlign: 'center' }}>
            <div className="ubt-pincode__keyboard-buttons" data-container="">
              {column(
                <>
                  {KEY_COLUMNS[0].map(digitKey)}
                  <div data-container="">
                    {len > 0 ? (
                      <div className="text-primary-color ubt-pincode-digit">{option}</div>
                    ) : (
                      <button
                        className="btn ubt-pincode__button-confirm"
                        data-button=""
                        type="button"
                        onClick={() => void validate()}
                      >
                        <span className="text-primary-color ubt-pincode-digit">OK</span>
                      </button>
                    )}
                  </div>
                </>,
              )}
              {column(KEY_COLUMNS[1].map(digitKey))}
              {column(
                <>
                  {KEY_COLUMNS[2].map(digitKey)}
                  <div data-container="">
                    <button
                      className="btn ubt-pincode__button-erase OSFillParent"
                      data-button=""
                      type="button"
                      disabled={view.pincode.length === 0}
                      onClick={() => void eraseClick()}
                    >
                      <div>{erasePlaceholder}</div>
                    </button>
                  </div>
                </>,
              )}
            </div>
            <div>{placeholderBottomKeyboard}</div>
          </div>
          <div className="ubt-pincode__keyboard-content">{contentPlaceholder}</div>
        </div>
        {!inAllowBackNavigation && <PreventBackNavigation id={prefix === undefined ? undefined : `${prefix}-$b1`} />}
      </div>
    </OSBlock>
  );
}
