import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from 'react';
import {
  DEFAULT_WIDGET_RECORD,
  DESCRIBED_BY_SUFFIX,
  hasValidationMessage,
  validateInputWithVariable,
  ValidationResult,
  ValidationService,
  withNotValidClass,
  type InputDataType,
  type WidgetValidationRecord,
} from './validationService';

/* React bindings of the platform validation (validationService.ts): the screen's service, the Form widget, the
   per-widget record and the validation message markup. `RV` = migration/runtime-sources/OutSystemsReactView.js,
   `W` = migration/runtime-sources/OutSystemsReactWidgets.js (character offsets in the minified files).
   A widget outside a ValidationServiceProvider registers nowhere and always shows as valid (as before this port). */

const ServiceContext = createContext<ValidationService | null>(null);
/** _validationProps.validationParentId handed to the widgets inside a Form (the Form's id); null at the root. */
const ParentContext = createContext<string | null>(null);

const noSubscribe = () => () => undefined;

/** The screen controller's `validationServiceInstance` (OS BaseViewController ≈527501: one per screen, built with the
    module's messages provider, UBTConnect.languageResources). Keep it for the screen's life. */
export function useScreenValidationService(): ValidationService {
  const [service] = useState(() => new ValidationService());
  return service;
}

/** Makes `service` the one the widgets below register in (the `_validationProps.validationService` of the view). */
export function ValidationServiceProvider({ service, children }: { service: ValidationService; children?: ReactNode }) {
  return (
    <ServiceContext.Provider value={service}>
      <ParentContext.Provider value={null}>{children}</ParentContext.Provider>
    </ServiceContext.Provider>
  );
}

/** The widget's record (`Valid`, `ValidationMessage`), re-rendered on every model flush of the service. */
export function useWidgetValidationRecord(id: string, service?: ValidationService | null): WidgetValidationRecord {
  const fromContext = useContext(ServiceContext);
  const s = service ?? fromContext;
  return useSyncExternalStore(s ? s.subscribe : noSubscribe, () => (s ? s.getWidgetRecord(id) : DEFAULT_WIDGET_RECORD));
}

/** ValidationWidget.createValidationElement (RV ≈209993): `<span id="<widget id>_DescribedBy"
    class="validation-message">message</span>` while the widget is not valid and has a message, else nothing. */
export function ValidationMessage({ widgetId, record }: { widgetId: string; record: WidgetValidationRecord }) {
  if (!hasValidationMessage(record)) return null;
  return (
    <span id={widgetId + DESCRIBED_BY_SUFFIX} className="validation-message">
      {record.validationMessageAttr}
    </span>
  );
}

export interface InputWithVariableValidation {
  record: WidgetValidationRecord;
  /** The element's class with " not-valid" while a message shows (RV fillWithBuiltinProperties ≈210359). */
  className: (className: string | undefined) => string | undefined;
  /** Input only: aria-describedby="<id>_DescribedBy" while a message shows (W ≈63689); TextArea has none (W ≈81231). */
  ariaDescribedBy: string | undefined;
  /** createValidationElement: rendered right after the element, inside the widget's wrapper span (W ≈64696, ≈81662). */
  validationElement: ReactNode;
}

/** An InputWithVariableWidget (OSWidgets.Input, OSWidgets.TextArea): registers in the service on mount, under the
    enclosing Form, and is validated from the element's current value and `validity` (Input W ≈61150-61380, TextArea
    W ≈80236: `inputedValue` = htmlElement.value, `inputedValueValidity` = htmlElement.validity). Typing does not clear a shown
    message: only the next validation does (Input / TextArea onChange only set the variable, W ≈61383, ≈79860). */
export function useInputWithVariableValidation({
  id,
  mandatory,
  dataType,
  elementRef,
}: {
  id: string;
  mandatory: boolean;
  dataType: InputDataType;
  elementRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}): InputWithVariableValidation {
  const service = useContext(ServiceContext);
  const parentId = useContext(ParentContext);
  const latest = useRef({ mandatory, dataType });
  useLayoutEffect(() => {
    latest.current = { mandatory, dataType };
  });
  useLayoutEffect(() => {
    if (!service) return;
    service.register({
      id,
      validationParentId: parentId,
      validate: () => {
        const element = elementRef.current;
        return validateInputWithVariable(
          {
            inputedValue: element?.value ?? '',
            inputedValueValidity: element?.validity,
            isMandatory: latest.current.mandatory,
            dataType: latest.current.dataType,
          },
          service,
        );
      },
    });
    return () => {
      service.unregister(id);
    };
  }, [service, id, parentId, elementRef]);
  const record = useWidgetValidationRecord(id, service);
  const shows = hasValidationMessage(record);
  return {
    record,
    className: (className) => withNotValidClass(className, record),
    ariaDescribedBy: shows ? id + DESCRIBED_BY_SUFFIX : undefined,
    validationElement: <ValidationMessage widgetId={id} record={record} />,
  };
}

/** A validation widget of the original view whose markup is not built here (e.g. a `<NotCaptured>` input): it registers
    in the service on mount, under the enclosing Form, and leaves on unmount (RV internalComponentWillMount /
    WillUnmount ≈209258), so `<Form>.Valid` aggregates the Valid an action assigns to it (recalculateAggregatorsState,
    OS ≈513161) as it would with the widget rendered. `validate` defaults to RV ValidationWidget.validate (≈209195: a
    valid result). Renders nothing. */
export function UnbuiltValidationWidget({ id, validate }: { id: string; validate?: () => ValidationResult }) {
  const service = useContext(ServiceContext);
  const parentId = useContext(ParentContext);
  const latest = useRef(validate);
  useLayoutEffect(() => {
    latest.current = validate;
  });
  useLayoutEffect(() => {
    if (!service) return;
    service.register({
      id,
      validationParentId: parentId,
      validate: () => (latest.current ? latest.current() : new ValidationResult()),
    });
    return () => {
      service.unregister(id);
    };
  }, [service, id, parentId]);
  return null;
}

export interface OSFormProps {
  /** Widget name: the element id and the key of `<Form>.Valid`. */
  id: string;
  /** Style Classes. */
  style?: string;
  children?: ReactNode;
}

/** OSWidgets.Form (W ≈53787-54900): a validation aggregator (Valid = all its rendered validation widgets are valid;
    its message stays "" so it never shows " not-valid" unless an action sets one). Markup (render W ≈54208):
    `<form data-form class="<style>" id novalidate>`, submit prevented. The runtime also passes `action` = the
    extended property or "" (React 19 drops an empty action, so it is left out; no captured form has one). */
export function OSForm({ id, style, children }: OSFormProps) {
  const service = useContext(ServiceContext);
  const parentId = useContext(ParentContext);
  useLayoutEffect(() => {
    if (!service) return;
    service.register({ id, validationParentId: parentId, isValidationAggregator: true });
    return () => {
      service.unregister(id);
    };
  }, [service, id, parentId]);
  const record = useWidgetValidationRecord(id, service);
  return (
    <form
      className={withNotValidClass(style, record)}
      data-form=""
      id={id}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <ParentContext.Provider value={id}>{children}</ParentContext.Provider>
    </form>
  );
}
