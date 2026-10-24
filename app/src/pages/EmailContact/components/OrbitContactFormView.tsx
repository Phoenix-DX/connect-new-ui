import { useRef, type ReactNode, type RefObject } from 'react';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  OSForm,
  useInputWithVariableValidation,
  ValidationServiceProvider,
  type ValidationService,
} from '@/components/ui/os/OSValidation';
import { LegacyInputCounter } from '@/components/ui/LegacyInputCounter';
import type { NavigationEvent } from '@/shared/NavigationHandler/lib/actions';
import { LegacyButtonLoading } from '@/components/ui/legacy/LegacyButtonLoading';
import { MESSAGE_MAX_LENGTH, orbitContactFormIds } from '@/pages/EmailContact/hooks/orbitContactFormState';
import { NavigationDialog } from '@/components/ui/Dialog';

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction that the block gives MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

export interface OrbitContactFormViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The block's validation service (useOrbitContactForm). */
  validation: ValidationService;
  /** In_IsContactHelpdesk: the helpdesk form; false: the host form. */
  isContactHelpdesk: boolean;
  /** In_HostName: the "To:" line of the host form. */
  hostName: string;
  /** In_Subject as the block holds it: the read-only subject of the helpdesk form. */
  subject: string;
  /** The rows of the helpdesk subject (LineCount). */
  lineCount: number;
  /** UserSubject: the subject of the host form. */
  userSubject: string;
  /** Message. */
  message: string;
  /** IsSubmitting: the button shows its loading state. */
  isSubmitting: boolean;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  onUserSubjectChange: (userSubject: string) => void;
  onUserSubjectBlur: () => void;
  onMessageChange: (message: string) => void;
  onMessageBlur: () => void;
  onMessageKeyDown: () => void;
  onMessageKeyUp: () => void;
  /** The Submit button. */
  onSubmitClick: () => void;
  /** The Navigation event of the confirmation dialog: the handler prevents it to ask. */
  onNavigation: (navigationEvent: NavigationEvent) => void;
}

/** Input_Subject: span.input-text > input, Mandatory, max 100, prompt "Subject". */
function Input_Subject({
  id,
  value,
  inputRef,
  onChange,
  onBlur,
}: {
  id: string;
  value: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onChange: (value: string) => void;
  onBlur: () => void;
}) {
  const validation = useInputWithVariableValidation({ id, mandatory: true, dataType: 'Text', elementRef: inputRef });
  return (
    <span className="input-text">
      <input
        ref={inputRef}
        aria-describedby={validation.ariaDescribedBy}
        aria-required="true"
        className={validation.className('form-control OSFillParent')}
        data-input=""
        id={id}
        maxLength={100}
        placeholder="Subject"
        required
        type="text"
        value={value}
        onBlur={onBlur}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
      {validation.validationElement}
    </span>
  );
}

/** A TextArea widget: span > textarea with the platform validation. */
function FormTextArea({
  id,
  mandatory,
  enabled,
  maxLength,
  rows,
  placeholder,
  autoComplete,
  value,
  textAreaRef,
  onChange,
  onBlur,
  onKeyDown,
  onKeyUp,
}: {
  id: string;
  mandatory: boolean;
  enabled: boolean;
  maxLength: number;
  rows: number;
  placeholder?: string;
  autoComplete?: string;
  value: string;
  textAreaRef: RefObject<HTMLTextAreaElement | null>;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onKeyDown?: () => void;
  onKeyUp?: () => void;
}) {
  const validation = useInputWithVariableValidation({ id, mandatory, dataType: 'Text', elementRef: textAreaRef });
  return (
    <span>
      <textarea
        ref={textAreaRef}
        aria-describedby={validation.ariaDescribedBy}
        autoComplete={autoComplete}
        className={validation.className('form-control OSFillParent')}
        data-textarea=""
        disabled={!enabled}
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        required={mandatory}
        rows={rows}
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange?.(e.currentTarget.value)}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
      {validation.validationElement}
    </span>
  );
}

/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm
    The Orbit contact form, props only. Not captured: the markup follows the compiled view and the platform widgets as
    the other e-mail forms port them (EmailTarget, LDM_Email_V2): Input = `span.input-text > input`, TextArea =
    `span > textarea`, Label = `label[data-label]` ("mandatory" when the target is mandatory), Form = OSForm.
    - Layout_Orbit (default inputs) with the Auto MenuIcon and the title "Contact Orbit Helpdesk" / "Contact Host".
    - Content: the Form "form card orbit-contact-form". The helpdesk form shows the read-only Subject (In_Subject, in
      LineCount rows); the host form shows "To: <host>" and a mandatory Subject with its counter. Then the message
      ("Your inquiry" / "Message", max 1000, 3 rows) with its counter, and the ButtonLoading "Submit" / "Send Email".
    - The BottomBar and CommonUI_Elements placeholders.
    - After the layout, in `orbit-confirm-popup backwards-compatibility`: the NavigationConfirmationDialog "Confirm
      Discard Changes". */
export function OrbitContactFormView({
  id,
  validation,
  isContactHelpdesk: helpdesk,
  hostName,
  subject,
  lineCount,
  userSubject,
  message,
  isSubmitting,
  menu,
  bottomBar,
  commonUIElements,
  onUserSubjectChange,
  onUserSubjectBlur,
  onMessageChange,
  onMessageBlur,
  onMessageKeyDown,
  onMessageKeyUp,
  onSubmitClick,
  onNavigation,
}: OrbitContactFormViewProps) {
  const ids = orbitContactFormIds(id);
  const { prefix } = ids;
  const inSubjectRef = useRef<HTMLTextAreaElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_ContactForm" id={id}>
      <ValidationServiceProvider service={validation}>
        <OrbitLayout
          id={`${prefix}-$b1`}
          menu={<div id={`${prefix}-Menu`}>{menu}</div>}
          headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
          title={<span data-expression="">{`Contact ${helpdesk ? 'Orbit Helpdesk' : 'Host'}`}</span>}
          content={
            <OSForm id={ids.form} style="form card orbit-contact-form OSFillParent">
              {helpdesk ? (
                <div data-container="">
                  <label className="OSFillParent" data-label="" htmlFor={ids.inSubject}>
                    Subject
                  </label>
                  <FormTextArea
                    id={ids.inSubject}
                    mandatory={false}
                    enabled={false}
                    maxLength={200}
                    rows={lineCount}
                    value={subject}
                    textAreaRef={inSubjectRef}
                  />
                </div>
              ) : (
                <>
                  <div className="flex-center-vertical full-width font-size-1-1em" data-container="">
                    <i className="icon orbit-icon-mail color-orbit-primary-7 fa fa-flag fa-1x" data-icon="" />
                    <span className="margin-left-base">To:</span>
                    <span className="margin-left-xs bold" data-expression="">
                      {hostName}
                    </span>
                  </div>
                  <div data-container="">
                    <label className="mandatory OSFillParent" data-label="" htmlFor={ids.subject}>
                      Subject
                    </label>
                    <Input_Subject
                      id={ids.subject}
                      value={userSubject}
                      inputRef={subjectRef}
                      onChange={onUserSubjectChange}
                      onBlur={onUserSubjectBlur}
                    />
                    <LegacyInputCounter id={`${prefix}-$b3`} inputId={ids.subject} />
                  </div>
                </>
              )}
              <div data-container="">
                <label className="mandatory OSFillParent" data-label="" htmlFor={ids.message}>
                  <span data-expression="">{helpdesk ? 'Your inquiry' : 'Message'}</span>
                </label>
                <FormTextArea
                  id={ids.message}
                  mandatory
                  enabled
                  maxLength={MESSAGE_MAX_LENGTH}
                  rows={3}
                  placeholder={helpdesk ? 'Tell us how we can help you' : 'Type message here...'}
                  autoComplete="off"
                  value={message}
                  textAreaRef={messageRef}
                  onChange={onMessageChange}
                  onBlur={onMessageBlur}
                  onKeyDown={onMessageKeyDown}
                  onKeyUp={onMessageKeyUp}
                />
                <LegacyInputCounter id={`${prefix}-$b4`} inputId={ids.message} />
              </div>
              <div data-container="">
                <LegacyButtonLoading id={`${prefix}-$b5`} isLoading={isSubmitting} extendedClass="full-width">
                  <button className="btn btn-primary full-width" data-button="" type="submit" onClick={onSubmitClick}>
                    <span data-expression="">{helpdesk ? 'Submit' : 'Send Email'}</span>
                  </button>
                </LegacyButtonLoading>
              </div>
            </OSForm>
          }
          bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
          commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
        />
        <div className="orbit-confirm-popup backwards-compatibility" data-container="">
          <NavigationDialog
            id={`${prefix}-$b6`}
            onNavigation={onNavigation}
            header="Confirm Discard Changes"
            body="Are you sure you want to discard this message?"
            confirmLabel="Yes"
            dismissLabel="Cancel"
          />
        </div>
      </ValidationServiceProvider>
    </OSBlock>
  );
}
