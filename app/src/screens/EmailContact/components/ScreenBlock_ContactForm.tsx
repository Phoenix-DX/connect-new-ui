// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm
import { useEffect, useReducer, useRef, type ReactNode, type RefObject } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  OSForm,
  useInputWithVariableValidation,
  useScreenValidationService,
  ValidationServiceProvider,
} from '@/components/ui/os/OSValidation';
import { InputCounter } from '../../../shared/Connect2_LegacyShared/InputCounter';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { NavigationConfirmationDialog } from '../../../shared/NavigationHandler/NavigationConfirmationDialog';
import { preventNavigation } from '../../../shared/NavigationHandler/lib/actions';
import { DEPRECATED_ButtonLoading } from '../../../shared/osui/DEPRECATED_ButtonLoading';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { sendContactEmail } from '../api';
import type { EmailContactInputs } from '../types';
import {
  getTextAreaLineHeight,
  onApplicationEvent_ContactHelpdesk,
  onApplicationEvent_EmailHost,
  scheduleFeedbackMessageAfterTransition,
} from './actions';

/* ScreenBlock_ContactForm (CF = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc.js,
   the TST copy of migration/runtime-sources: model :1-221, view :222-849, controller :850-1593). No capture: markup from
   the compiled view and the platform widgets as the other e-mail forms port them (EmailTarget, LDM_Email_V2): Input =
   `span.input-text > input`, TextArea = `span > textarea`, Label = `label[data-label]` ("mandatory" when the target is
   mandatory), Form = OSForm. */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (CF :321). */
const MENU_ACTION_AUTO = 'Auto';
const REQUIRED = 'Required field!';
/** MessageMaxLength default (CF model: IntegerToLongInteger(1000)). */
const MESSAGE_MAX_LENGTH = 1000;

/** Block variables (CF model :25-115) the view and the actions read. */
interface Model {
  /** In_Subject: an input the helpdesk text area is bound to (cleared after a send). */
  subject: string;
  userSubject: string;
  message: string;
  userFullName: string;
  isSubmitting: boolean;
  previousMessage: string;
  lineCount: number;
}

export interface ScreenBlock_ContactFormProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  inputs: EmailContactInputs;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event Submitted. */
  onSubmitted: () => void;
}

/** Input_Subject (CF :462-530): span.input-text > input, Mandatory, max 100, prompt "Subject". */
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

/** The Orbit contact form (CF view :277-849): Layout_Orbit (default inputs) with the Auto MenuIcon and the title
    "Contact Orbit Helpdesk" / "Contact Host"; Content: Form "form card orbit-contact-form": the helpdesk shows the
    read-only Subject (In_Subject, lines from GetTextAreaLineHeight), the host "To: <host>" and a mandatory Subject with
    its counter; then the message ("Your inquiry" / "Message", max 1000, 3 lines) with its counter and the
    ButtonLoading "Submit" / "Send Email"; BottomBar and CommonUI_Elements placeholders. After the layout, in
    `orbit-confirm-popup backwards-compatibility`, the NavigationConfirmationDialog "Confirm Discard Changes". */
export function ScreenBlock_ContactForm({
  id,
  inputs,
  menu,
  bottomBar,
  commonUIElements,
  onSubmitted,
}: ScreenBlock_ContactFormProps) {
  const prefix = id.replace('$', '');
  const ids = {
    form: `${prefix}-Form`,
    inSubject: `${prefix}-TextArea_In_Subject`,
    subject: `${prefix}-Input_Subject`,
    message: `${prefix}-TextArea_Message`,
  };
  const helpdesk = inputs.In_IsContactHelpdesk;
  const validation = useScreenValidationService();
  const inSubjectRef = useRef<HTMLTextAreaElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  /* OnInitialize (CF :1112-1156): LineCount = GetTextAreaLineHeight(In_Subject, 10). */
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    (): Model => ({
      subject: inputs.In_Subject,
      userSubject: '',
      message: '',
      userFullName: '',
      isSubmitting: false,
      previousMessage: '',
      lineCount: getTextAreaLineHeight(inputs.In_Subject, 10),
    }),
  );
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    dispatch(patch);
  };

  /* OnReady (CF :1157-1186): UserFullName = FirstName + " " + LastName of AppManager_GetCachedUserInfo. */
  useEffect(() => {
    const user = appManager_GetCachedUserInfo();
    set({ userFullName: `${user.FirstName} ${user.LastName}` });
    // OnReady runs once per block instance.
  }, []);

  /** TextArea_Message valid when Trim(Message) <> "", else "Required field!" (OnChange_TextAreaMessage CF :963-1003,
      OnBlur_TextAreaMessage :1187-1227, ValidateEmptyFields :897-962). */
  const validateMessage = () => {
    if (m().message.trim() !== '') validation.setWidgetValidity(ids.message, true, '');
    else validation.setWidgetValidity(ids.message, false, REQUIRED);
  };
  /** Input_Subject likewise with UserSubject (OnChange_InputSubject CF :1373-1413, OnBlur_InputSubject :1414-1455). */
  const validateSubject = () => {
    if (m().userSubject.trim() !== '') validation.setWidgetValidity(ids.subject, true, '');
    else validation.setWidgetValidity(ids.subject, false, REQUIRED);
  };

  /** OnClick_Submit (CF :1228-1372), after the button's validateWidget(Form) (CF :724). Not while submitting:
      ValidateEmptyFields (the message; the subject for the host); a valid Form → IsSubmitting True, SendContactEmail
      (IsContactHelpdesk, EventId, MilestoneId, TargetMemberId, In_Subject, UserSubject, Message, {EventName,
      SenderFullName = UserFullName, HostName, HostEmail, MilestoneName, FormattedDateTime}), IsSubmitting False; a
      success clears Message, In_Subject and UserSubject, schedules "Your email has been sent.", raises Submitted, then
      the ContactHelpdesk / EmailHost audit event; IsSuccess False → "There is currently no helpdesk email…" (Info).
      An invalid Form → IsSubmitting False. An exception goes to the flow handler (IsSubmitting stays True). */
  const onClickSubmit = async () => {
    if (m().isSubmitting) return;
    validateMessage();
    if (!helpdesk) validateSubject();
    if (!validation.isValid(ids.form)) {
      set({ isSubmitting: false });
      return;
    }
    set({ isSubmitting: true });
    appManager_GetCachedUserInfo();
    const s = m();
    const isSuccess = await sendContactEmail({
      isContactHelpdesk: helpdesk,
      eventId: inputs.In_EventId,
      milestoneId: inputs.In_MilestoneId,
      targetMemberId: inputs.In_TargetMemberId,
      subject: s.subject,
      userSubject: s.userSubject,
      message: s.message,
      emailInfo: {
        EventName: inputs.In_EventName,
        SenderFullName: s.userFullName,
        HostName: inputs.In_HostName,
        HostEmail: inputs.In_HostEmail,
        MilestoneName: inputs.In_MilestoneTitle,
        FormattedDateTime: inputs.In_FormattedDateTime,
      },
    });
    set({ isSubmitting: false });
    if (!isSuccess) {
      showFeedbackMessage(
        'There is currently no helpdesk email associated with this event, please try to contact us later. If your inquiry is urgent please contact your local Orbit Coordinator.',
        PLATFORM_MESSAGE_TYPE.info,
      );
      return;
    }
    set({ message: '', subject: '', userSubject: '' });
    scheduleFeedbackMessageAfterTransition('Your email has been sent.');
    onSubmitted();
    if (helpdesk) onApplicationEvent_ContactHelpdesk(inputs.In_EventId);
    else onApplicationEvent_EmailHost(inputs.In_MilestoneId, inputs.In_EventId);
  };

  const s = state;
  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_ContactForm" id={id}>
      <ValidationServiceProvider service={validation}>
        <Layout_Orbit
          id={`${prefix}-$b1`}
          menu={<div id={`${prefix}-Menu`}>{menu}</div>}
          headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
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
                    rows={s.lineCount}
                    value={s.subject}
                    textAreaRef={inSubjectRef}
                  />
                </div>
              ) : (
                <>
                  <div className="flex-center-vertical full-width font-size-1-1em" data-container="">
                    <i className="icon orbit-icon-mail color-orbit-primary-7 fa fa-flag fa-1x" data-icon="" />
                    <span className="margin-left-base">To:</span>
                    <span className="margin-left-xs bold" data-expression="">
                      {inputs.In_HostName}
                    </span>
                  </div>
                  <div data-container="">
                    <label className="mandatory OSFillParent" data-label="" htmlFor={ids.subject}>
                      Subject
                    </label>
                    <Input_Subject
                      id={ids.subject}
                      value={s.userSubject}
                      inputRef={subjectRef}
                      onChange={(userSubject) => {
                        set({ userSubject });
                        validateSubject();
                      }}
                      onBlur={validateSubject}
                    />
                    <InputCounter id={`${prefix}-$b3`} inputId={ids.subject} />
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
                  maxLength={1000}
                  rows={3}
                  placeholder={helpdesk ? 'Tell us how we can help you' : 'Type message here...'}
                  autoComplete="off"
                  value={s.message}
                  textAreaRef={messageRef}
                  onChange={(message) => {
                    set({ message });
                    validateMessage();
                  }}
                  onBlur={validateMessage}
                  onKeyDown={() => {
                    // OnKeyDown_TextAreaMessage (CF :1034-1058): PreviousMessage = Message
                    set({ previousMessage: m().message });
                  }}
                  onKeyUp={() => {
                    // OnKeyUp_TextAreaMessage (CF :1004-1033): at MessageMaxLength, Message = PreviousMessage
                    if (m().message.length >= MESSAGE_MAX_LENGTH) set({ message: m().previousMessage });
                  }}
                />
                <InputCounter id={`${prefix}-$b4`} inputId={ids.message} />
              </div>
              <div data-container="">
                <DEPRECATED_ButtonLoading id={`${prefix}-$b5`} isLoading={s.isSubmitting} extendedClass="full-width">
                  <button
                    className="btn btn-primary full-width"
                    data-button=""
                    type="submit"
                    onClick={() => {
                      validation.validate(ids.form);
                      onClickSubmit().catch(raiseToFlowHandler);
                    }}
                  >
                    <span data-expression="">{helpdesk ? 'Submit' : 'Send Email'}</span>
                  </button>
                </DEPRECATED_ButtonLoading>
              </div>
            </OSForm>
          }
          bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
          commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
        />
        <div className="orbit-confirm-popup backwards-compatibility" data-container="">
          <NavigationConfirmationDialog
            id={`${prefix}-$b6`}
            onNavigation={(navigationEvent) => {
              // NavigationHandlerNavigation (CF :1059-1111): a message (helpdesk) or a subject / message (host)
              // prevents the navigation, so the dialog asks.
              const f = m();
              const hasData = helpdesk ? f.message !== '' : f.userSubject !== '' || f.message !== '';
              if (hasData) preventNavigation(navigationEvent);
            }}
            dialogHeader="Confirm Discard Changes"
            dialogBody="Are you sure you want to discard this message?"
            buttonLabelConfirm="Yes"
            buttonLabelDismiss="Cancel"
          />
        </div>
      </ValidationServiceProvider>
    </OSBlock>
  );
}
