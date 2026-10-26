/* Built-in validation of the OutSystems platform widgets, ported 1:1 from the client runtime (TST copies in
   migration/runtime-sources/, offsets are character offsets in the minified files):
   - `OS` = OutSystems.js: define("OutSystems/ClientRuntime/Validation") ≈511752-515200 (ValidationService,
     ValidationResult); BaseMessagesProvider ≈539900-542400; ValidationWidgetRecord defaults ≈545565;
     DataTypes ≈178676; JSConversions.isConvertibleTo ≈265432-265900 / 268533.
   - `RV` = OutSystemsReactView.js: ValidationWidget ≈208400-210600, InputWithVariableWidget ≈210600-212300
     (validate ≈211720), web block instance ≈194800-196100 (validate ≈195588).
   - App messages: UBTConnect.languageResources.js (MessagesProvider, the home module's overrides), copy in
     migration/screens/Profile/analysis/sources/pretty/UBTConnect.languageResources.js:1-30; every UBTConnect screen
     controller is built with it (e.g. Profile.mvc.js:4137 `ControllerFactory(Controller, UBTConnectLanguageResources)`).
   No React here: the bindings are in OSValidation.tsx. */

/** OS DataTypes enum names (≈178676) of the variable types an input widget binds to that are ported here. */
export type InputDataType = 'Text' | 'PhoneNumber' | 'Email';

/** The validation part of a widget record (`<Widget>.Valid` / `<Widget>.ValidationMessage`). */
export interface WidgetValidationRecord {
  readonly validAttr: boolean;
  readonly validationMessageAttr: string;
}

/** ValidationWidgetRecord.RecordClass defaults (OS ≈545565): validAttr True, validationMessageAttr "". */
export const DEFAULT_WIDGET_RECORD: WidgetValidationRecord = Object.freeze({
  validAttr: true,
  validationMessageAttr: '',
});

/** ValidationResult (OS ≈515000-515176): `valid` undefined → true, `validationMessage` falsy → "". */
export class ValidationResult {
  readonly valid: boolean;
  readonly validationMessage: string;
  constructor(valid?: boolean, validationMessage?: string) {
    this.valid = valid === undefined || valid;
    this.validationMessage = validationMessage || '';
  }
}

/** A widget registered in a ValidationService (RV ValidationWidget / web block instance). */
export interface ValidationWidget {
  /** The widget id (idService.getId(name)): the key of its record. */
  readonly id: string;
  /** _validationProps.validationParentId: the enclosing Form's id, none at the screen root (RV ≈208528). */
  readonly validationParentId?: string | null;
  /** Form: its Valid is the conjunction of its children (OSWidgets.Form `isValidationAggregator` true). */
  readonly isValidationAggregator?: boolean;
  /** Web block instance: no record, a `valid` flag of its own (RV ≈195300-195700). */
  readonly isWebBlockInstance?: boolean;
  valid?: boolean;
  /** RV ValidationWidget.validate returns a valid result (≈209183); InputWithVariableWidget overrides it. */
  validate?: () => ValidationResult;
}

/** Messages of the UBTConnect home module (UBTConnect.languageResources.js:8-18, `setMessage` overrides). The module
    has no translation resources (`new MessagesProvider()`), so TranslationsService adds nothing to them. */
export const UBTCONNECT_VALIDATION_MESSAGES: Readonly<Record<string, string>> = Object.freeze({
  'Validation.Mandatory': 'This field is required.',
  'Validation.Integer': 'Enter a valid integer.',
  'Validation.LongInteger': 'Enter a valid integer.',
  'Validation.Decimal': 'Enter a valid decimal.',
  'Validation.Currency': 'Enter a valid currency.',
  'Validation.Date': 'Enter a valid date.',
  'Validation.Time': 'Enter a valid time.',
  'Validation.DateTime': 'Enter a valid date and time.',
  'Validation.Text': 'Enter a valid text.',
  'Validation.PhoneNumber': 'Enter a valid phone number.',
  'Validation.Email': 'Enter a valid email.',
});

/** BaseMessagesProvider (OS ≈539928 keys, ≈541297 getters, ≈542148 getMessage): ModuleMessageKeys MandatoryValue "Validation.Mandatory",
    InvalidValuePrefix "Validation."; getMessage(key, default) = the module's own message, else the platform default. */
export class MessagesProvider {
  constructor(private readonly messages: Readonly<Record<string, string>> = UBTCONNECT_VALIDATION_MESSAGES) {}
  getMessage(key: string, defaultMessage: string): string {
    return this.messages[key] ?? defaultMessage;
  }
  getMandatoryValueMessage(): string {
    return this.getMessage('Validation.Mandatory', 'Required Value!');
  }
  getInvalidValueMessage(type: InputDataType): string {
    return this.getMessage(`Validation.${type}`, 'Invalid Value!');
  }
}

/** ValidationService (OS ≈511752-515176): one per screen or block controller (`validationServiceInstance`). */
export class ValidationService {
  private readonly widgets = new Map<string, ValidationWidget>();
  /** widgetChildren: parent id ("" = root) → child ids, in registration order. */
  private readonly widgetChildren = new Map<string, Set<string>>();
  /** The model's widget records (only widgets that are not web block instances have one). */
  private readonly records = new Map<string, WidgetValidationRecord>();
  private readonly listeners = new Set<() => void>();
  private updatingValidations = false;
  private disposed = false;

  constructor(private readonly messagesProvider: MessagesProvider = new MessagesProvider()) {}

  /** The widget's record (`model.widgets.get(id)`): defaults while the widget is not registered. */
  getWidgetRecord(id: string): WidgetValidationRecord {
    return this.records.get(id) ?? DEFAULT_WIDGET_RECORD;
  }

  /** `<Widget>.Valid` read in a screen action (e.g. Profile.mvc.js:3550 `isValid = DetailsForm.Valid`). */
  isValid(id: string): boolean {
    return this.getWidgetRecord(id).validAttr;
  }

  private writeRecord(id: string, patch: Partial<WidgetValidationRecord>): void {
    this.records.set(id, Object.freeze({ ...this.getWidgetRecord(id), ...patch }));
  }

  /** updateWidgetValidationsProperties (OS ≈512459): a message `undefined` keeps the current one. */
  private updateWidgetValidationsProperties(widget: ValidationWidget, valid: boolean, message: string | undefined) {
    const previous = this.updatingValidations;
    this.updatingValidations = true;
    try {
      if (widget.isWebBlockInstance) {
        widget.valid = valid;
      } else {
        const record = this.getWidgetRecord(widget.id);
        if (record.validAttr !== valid) this.writeRecord(widget.id, { validAttr: valid });
        if (message !== undefined && this.getWidgetRecord(widget.id).validationMessageAttr !== message)
          this.writeRecord(widget.id, { validationMessageAttr: message });
      }
    } finally {
      this.updatingValidations = previous;
    }
  }

  /** validateWidget (OS ≈512836): validates every child first (no short-circuit), then the widget itself: a Form
      takes its children's conjunction, any other widget its own validate(). */
  private validateWidget(id: string): boolean {
    let valid = true;
    for (const child of [...(this.widgetChildren.get(id) ?? [])]) if (!this.validateWidget(child)) valid = false;
    const widget = this.widgets.get(id);
    if (widget) {
      let result: ValidationResult | null = null;
      if (widget.isValidationAggregator) result = new ValidationResult(valid);
      else if (widget.validate) result = widget.validate();
      if (result) {
        this.updateWidgetValidationsProperties(widget, result.valid, result.validationMessage);
        if (!result.valid) valid = false;
      }
    }
    return valid;
  }

  /** recalculateAggregatorsState (OS ≈513161): no widget is validated again; a Form's Valid becomes the conjunction of
      its children's current Valid (a block instance: its `valid`), counting only the registered (rendered) ones. */
  private recalculateAggregatorsState(id: string): boolean {
    let valid = true;
    for (const child of [...(this.widgetChildren.get(id) ?? [])])
      if (!this.recalculateAggregatorsState(child)) valid = false;
    const widget = this.widgets.get(id);
    if (widget) {
      if (widget.isWebBlockInstance) return widget.valid === undefined || widget.valid;
      if (!widget.isValidationAggregator) return this.getWidgetRecord(id).validAttr;
      this.updateWidgetValidationsProperties(widget, valid, undefined);
    }
    return valid;
  }

  /** The model's subscribeWrites handler (constructor, OS ≈512195): any change of the widget records made outside a
      validation (a widget added or removed, a Valid assigned by an action) recalculates the Forms. */
  private onWidgetsChanged(): void {
    if (!this.updatingValidations) this.recalculateAggregatorsState('');
    this.flush();
  }

  /** register (OS ≈513490): on mount (RV internalComponentWillMount ≈209258); a new record with the defaults. */
  register(widget: ValidationWidget): void {
    if (!widget.id) return;
    this.widgets.set(widget.id, widget);
    const parentId = widget.validationParentId || '';
    let children = this.widgetChildren.get(parentId);
    if (!children) {
      children = new Set();
      this.widgetChildren.set(parentId, children);
    }
    children.add(widget.id);
    if (!widget.isWebBlockInstance) this.records.set(widget.id, DEFAULT_WIDGET_RECORD);
    this.onWidgetsChanged();
  }

  /** unregister (OS ≈513828): on unmount (RV internalComponentWillUnmount); the record goes with the widget. */
  unregister(id: string): void {
    if (!id || this.disposed) return;
    const widget = this.widgets.get(id);
    const parentId = widget?.validationParentId || '';
    this.widgets.delete(id);
    this.widgetChildren.get(parentId)?.delete(id);
    if (widget) {
      this.records.delete(id);
      this.onWidgetsChanged();
    }
  }

  isRegistered(id: string): boolean {
    return this.widgets.has(id);
  }

  /** validate (OS ≈514150): ScreenController_ValidateWidgets calls it with no id
      (UBTJavaScriptUtils.controller.js ≈230126 `$parameters.Object?.validationServiceInstance?.validate()`): every
      widget of the screen. With an id: that widget's subtree, then the Forms recalculated, and the root's state is
      returned. The model is flushed (the widgets re-render with their new state). */
  validate(id?: string): boolean {
    let valid = this.validateWidget(id || '');
    if (id) valid = this.recalculateAggregatorsState('');
    this.flush();
    return valid;
  }

  /** `<Widget>.Valid = …` / `<Widget>.ValidationMessage = …` assigned by an action (a model write: the Forms are
      recalculated, OS ≈512195). */
  setWidgetValidity(id: string, valid: boolean, validationMessage?: string): void {
    this.writeRecord(
      id,
      validationMessage === undefined
        ? { validAttr: valid }
        : { validAttr: valid, validationMessageAttr: validationMessage },
    );
    this.onWidgetsChanged();
  }

  getMandatoryValueMessage(): string {
    return this.messagesProvider.getMandatoryValueMessage();
  }

  getInvalidValueMessage(type: InputDataType): string {
    return this.messagesProvider.getInvalidValueMessage(type);
  }

  dispose(): void {
    this.disposed = true;
  }

  /** Re-render subscription (the model flush). */
  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private flush(): void {
    for (const listener of [...this.listeners]) listener();
  }
}

/** InputWithVariableWidget.isEmptyValue (RV ≈212175): undefined, null, "" or only white space. */
export function isEmptyValue(value: string | null | undefined): boolean {
  return value === undefined || value === null || value === '' || value.trim() === '';
}

/** Variable.isAcceptable → JSConversions.isConvertibleTo (OS ≈543524, ≈268533): for Text, PhoneNumber and Email a
    text value is always convertible (u/c/l ≈265432-265900: `isText(e)` → true). */
export function isAcceptable(value: string, type: InputDataType): boolean {
  switch (type) {
    case 'Text':
    case 'PhoneNumber':
    case 'Email':
      return typeof value === 'string';
  }
}

/** The part of the HTML ValidityState the runtime reads (RV `inputedValueValidity`). */
export interface InputedValueValidity {
  readonly valid: boolean;
  readonly badInput: boolean;
}

export interface InputWithVariable {
  /** `inputedValue`: the element's current value (Input / TextArea: `htmlElement.value`). */
  readonly inputedValue: string;
  /** `inputedValueValidity`: the element's `validity` (Input / TextArea), RV default {valid true, badInput false} ≈211080. */
  readonly inputedValueValidity?: InputedValueValidity;
  /** `isMandatory`: the widget's Mandatory property. */
  readonly isMandatory: boolean;
  /** `variable.type`. */
  readonly dataType: InputDataType;
}

/** InputWithVariableWidget.validate (RV ≈211720): an empty value (and no bad input) fails only when mandatory, with
    the mandatory message; a non-empty value fails when the browser finds it invalid (e.g. type="email") or the
    variable cannot take it, with the invalid-value message of the variable's data type. */
export function validateInputWithVariable(widget: InputWithVariable, service: ValidationService): ValidationResult {
  const result = new ValidationResult();
  const validity = widget.inputedValueValidity ?? { valid: true, badInput: false };
  const isValueReallyEmpty = isEmptyValue(widget.inputedValue) && !validity.badInput;
  if (isValueReallyEmpty) {
    if (widget.isMandatory) return new ValidationResult(false, service.getMandatoryValueMessage());
  } else if (!validity.valid || !isAcceptable(widget.inputedValue, widget.dataType)) {
    return new ValidationResult(false, service.getInvalidValueMessage(widget.dataType));
  }
  return result;
}

/** ValidationWidget.hasValidationMessage (RV ≈210232): not valid and a message to show. */
export function hasValidationMessage(record: WidgetValidationRecord): boolean {
  return !record.validAttr && record.validationMessageAttr !== '';
}

/** ValidationWidget.DescribedBySuffix (RV ≈210550). */
export const DESCRIBED_BY_SUFFIX = '_DescribedBy';

/** ValidationWidget.fillWithBuiltinProperties (RV ≈210359): " not-valid" appended to the class while a message shows. */
export function withNotValidClass(className: string | undefined, record: WidgetValidationRecord): string | undefined {
  if (!hasValidationMessage(record)) return className;
  return className === undefined ? 'not-valid' : `${className} not-valid`;
}
