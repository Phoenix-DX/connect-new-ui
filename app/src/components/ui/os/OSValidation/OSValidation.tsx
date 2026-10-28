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

interface ValidationWidgetBinding {
  record: WidgetValidationRecord;
  /** The element's class with " not-valid" while a message shows (RV fillWithBuiltinProperties ≈210359). */
  className: (className: string | undefined) => string | undefined;
  /** createValidationElement (RV ≈209993): the message span, rendered where the widget puts it. */
  validationElement: ReactNode;
}

/** A built validation widget (RV ValidationWidget): it registers in the service on mount, under the enclosing Form,
    and leaves on unmount (RV internalComponentWillMount / WillUnmount ≈209258), so `<Form>.Valid` aggregates its Valid
    (recalculateAggregatorsState, OS ≈513161). `validate` is the widget's own; it defaults to RV
    ValidationWidget.validate (≈209195: a valid result). The record re-renders the widget, also when an action assigns
    it (`setWidgetValidity`). With no provider it registers nowhere and the record stays the default. */
export function useValidationWidget({
  id,
  validate,
}: {
  id: string;
  validate?: (service: ValidationService) => ValidationResult;
}): ValidationWidgetBinding {
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
      validate: () => (latest.current ? latest.current(service) : new ValidationResult()),
    });
    return () => {
      service.unregister(id);
    };
  }, [service, id, parentId]);
  const record = useWidgetValidationRecord(id, service);
  return {
    record,
    className: (className) => withNotValidClass(className, record),
    validationElement: <ValidationMessage widgetId={id} record={record} />,
  };
}

export interface InputWithVariableValidation extends ValidationWidgetBinding {
  /** Input only: aria-describedby="<id>_DescribedBy" while a message shows (W ≈63689); TextArea has none (W ≈81231).
      The validation element goes right after the element, inside the widget's wrapper span (W ≈64696, ≈81662). */
  ariaDescribedBy: string | undefined;
}

/** An InputWithVariableWidget (OSWidgets.Input, OSWidgets.TextArea): a validation widget (useValidationWidget)
    validated from the element's current value and `validity` (Input W ≈61150-61380, TextArea W ≈80236:
    `inputedValue` = htmlElement.value, `inputedValueValidity` = htmlElement.validity). Typing does not clear a shown
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
  const binding = useValidationWidget({
    id,
    validate: (service) => {
      const element = elementRef.current;
      return validateInputWithVariable(
        {
          inputedValue: element?.value ?? '',
          inputedValueValidity: element?.validity,
          isMandatory: mandatory,
          dataType,
        },
        service,
      );
    },
  });
  return {
    ...binding,
    ariaDescribedBy: hasValidationMessage(binding.record) ? id + DESCRIBED_BY_SUFFIX : undefined,
  };
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
