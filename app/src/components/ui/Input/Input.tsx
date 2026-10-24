/** @origin UBTConnectLibrary.ConnectPatterns.Input */
// @os-block UBTConnectLibrary.ConnectPatterns.Input
import { useEffect, useId, useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  DESCRIBED_BY_SUFFIX,
  hasValidationMessage,
  ValidationMessage,
  withNotValidClass,
  type WidgetValidationRecord,
} from '@/components/ui/os/OSValidation';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { Icon } from '@/components/ui/Icon';
import { Shape, UBT_Color, UBT_Icons, UBT_IconSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { SearchInput } from '@/shared/UBTConnectLibrary/lib/structures';

export interface InputProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_Options. */
  inOptions?: SearchInput;
  inExtendedClasses?: string;
  /** Event Event_OnChange(SearchString). */
  onEventOnChange?: (searchString: string) => void;
  /** Event Event_ClearString. */
  onEventClearString?: () => void;
  /** Event Event_Submit(SearchString): Enter in the input. */
  onEventSubmit?: (searchString: string) => void;
  /** Event Event_OnReady(InputWidgetId): the id of the input element. */
  onEventOnReady?: (inputWidgetId: string) => void;
  /** Event Event_OnFocus. */
  onEventOnFocus?: () => void;
}

/** The input element, with the ClearString function OnReady attaches to it (JSUtils_Element_Operations_SetAttribute
    "clearStringAction"; callers' JS clears the search through it). */
export interface SearchInputElement extends HTMLInputElement {
  clearStringAction?: (focus?: boolean) => void;
}

/** SearchInput defaults: the structure's attribute defaults, UBTConnectLibrary.model.js:1477-1516 (SearchInputRec,
    BrowseDirectory copy in migration/screens/BrowseDirectory/analysis/sources/raw/). A caller's record literal leaves
    the fields it does not set at these values. */
function withDefaults(o: SearchInput): Required<SearchInput> {
  return {
    IsEnabled: o.IsEnabled ?? true,
    MaxLength: o.MaxLength ?? 50,
    EnableAutocompleteHTML: o.EnableAutocompleteHTML ?? false,
    IsMandatory: o.IsMandatory ?? false,
    SearchPrompt: o.SearchPrompt ?? 'Search',
    BorderRadius: o.BorderRadius ?? Shape.SoftRounded,
    ValidationMessage: o.ValidationMessage ?? 'Required',
    Debounce_DelayMS: o.Debounce_DelayMS ?? -1,
    InitalString: o.InitalString ?? '',
    FocusOnReady: o.FocusOnReady ?? false,
    IsSyncValueWithInput: o.IsSyncValueWithInput ?? false,
    IsForceInvalid: o.IsForceInvalid ?? false,
  };
}

/** UBTConnectLibrary.ConnectPatterns.Input.mvc.js (BrowseCountries copy): view :157-372, controller :376-875. */
export function Input({
  id,
  inOptions = {},
  inExtendedClasses = '',
  onEventOnChange,
  onEventClearString,
  onEventSubmit,
  onEventOnReady,
  onEventOnFocus,
}: InputProps) {
  const options = withDefaults(inOptions);
  const inputId = `${useId()}Input_Search`;
  const inputRef = useRef<SearchInputElement>(null);
  // OnReady: SearchString = In_Options.InitalString (computed before the first paint).
  const [searchString, setSearchStringState] = useState(options.InitalString);
  const [validity, setValidity] = useState({ valid: true, validationMessage: '' });
  const searchStringRef = useRef(searchString);
  const setSearchString = (value: string) => {
    searchStringRef.current = value;
    setSearchStringState(value);
  };
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const latest = useRef({ options, inExtendedClasses, onEventOnChange, onEventClearString, onEventOnReady });
  useEffect(() => {
    latest.current = { options, inExtendedClasses, onEventOnChange, onEventClearString, onEventOnReady };
  });

  // OnClick_ClearString(Focus) (:520-545).
  const clearString = (focus = false) => {
    setSearchString('');
    if (focus) inputRef.current?.focus();
    latest.current.onEventClearString?.();
  };
  const clearStringRef = useRef(clearString);
  useEffect(() => {
    clearStringRef.current = clearString;
  });

  // OnReady (:550-600) and OnDestroy (:605-615: JSUtils_DebounceTimer with -1 cancels the pending change).
  useEffect(() => {
    const input = inputRef.current;
    if (input)
      input.clearStringAction = (focus?: boolean) => {
        clearStringRef.current(focus);
      };
    if (latest.current.options.FocusOnReady) input?.focus();
    latest.current.onEventOnReady?.(inputId);
    return () => {
      clearTimeout(timer.current);
    };
  }, [inputId]);

  // OnParametersChanged (:620-650): a new InitalString (or IsSyncValueWithInput) replaces the text; validity again.
  const parameters = JSON.stringify([options, inExtendedClasses]);
  const previousParameters = useRef(parameters);
  useEffect(() => {
    if (previousParameters.current === parameters) return;
    previousParameters.current = parameters;
    const o = latest.current.options;
    let value = searchStringRef.current;
    if ((o.InitalString !== '' && o.InitalString !== value) || o.IsSyncValueWithInput) {
      value = o.InitalString;
      setSearchString(value);
    }
    setValidity({
      valid: o.IsForceInvalid ? false : o.IsMandatory ? value !== '' : true,
      validationMessage: o.IsForceInvalid
        ? o.ValidationMessage
        : o.IsMandatory && value === ''
          ? o.ValidationMessage
          : '',
    });
  }, [parameters]);

  // OnChange (:440-515): mandatory validity, then Event_OnChange at once (-1) or debounced (JSUtils_DebounceTimer).
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchString(value);
    if (options.IsMandatory)
      setValidity({ valid: value !== '', validationMessage: value !== '' ? '' : options.ValidationMessage });
    const raise = () => {
      latest.current.onEventOnChange?.(searchStringRef.current);
    };
    clearTimeout(timer.current);
    if (options.Debounce_DelayMS !== -1) timer.current = setTimeout(raise, options.Debounce_DelayMS);
    else raise();
  };
  // OnKeyup (:655-690): Enter blurs the input and raises Event_Submit.
  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    inputRef.current?.blur();
    onEventSubmit?.(searchStringRef.current);
  };

  // Input_Search.Valid / .ValidationMessage, rendered by the platform Input widget (span.input-search > input + the
  // validation message; " not-valid" class and aria-describedby while a message shows): components/OSValidation.
  const record: WidgetValidationRecord = {
    validAttr: validity.valid,
    validationMessageAttr: validity.validationMessage,
  };

  return (
    <OSBlock name="ConnectPatterns.Input" id={id}>
      <div className="ubt-search-input" data-container="">
        <InputWithIcon
          alignIconRight={false}
          icon={
            searchString === '' && (
              <Icon inColorId={UBT_Color.Inherit} inIconId={UBT_Icons.Search} inSizeId={UBT_IconSize.Medium_20} />
            )
          }
          input={
            <InputWithIcon
              alignIconRight
              icon={
                searchString !== '' && (
                  <Icon
                    inIconId={UBT_Icons.CancelFill}
                    inColorId={UBT_Color.Inherit}
                    inSizeId={UBT_IconSize.Medium_20}
                    onClick={() => {
                      clearString(true);
                    }}
                  />
                )
              }
              input={
                <span className="input-search">
                  <input
                    ref={inputRef}
                    aria-describedby={hasValidationMessage(record) ? inputId + DESCRIBED_BY_SUFFIX : undefined}
                    aria-required={options.IsMandatory ? 'true' : 'false'}
                    autoComplete={options.EnableAutocompleteHTML ? 'on' : 'off'}
                    className={withNotValidClass(
                      `form-control ${inExtendedClasses}` +
                        (options.BorderRadius !== '' ? ` border-radius-${options.BorderRadius}` : '') +
                        ' OSFillParent',
                      record,
                    )}
                    data-input=""
                    disabled={!options.IsEnabled}
                    id={inputId}
                    maxLength={options.MaxLength}
                    placeholder={options.SearchPrompt}
                    type="search"
                    value={searchString}
                    onChange={onChange}
                    onFocus={onEventOnFocus}
                    onKeyUp={onKeyUp}
                  />
                  <ValidationMessage widgetId={inputId} record={record} />
                </span>
              }
            />
          }
        />
      </div>
    </OSBlock>
  );
}
