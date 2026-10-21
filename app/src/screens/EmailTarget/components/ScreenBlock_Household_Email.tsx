// @os-block Connect2_LegacyShared.Email.ScreenBlock_Household_Email
import { useRef, useState, type ReactNode, type RefObject } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import {
  OSForm,
  useInputWithVariableValidation,
  useScreenValidationService,
  ValidationServiceProvider,
} from '../../../components/OSValidation';
import { InputCounter } from '../../../shared/Connect2_LegacyShared/InputCounter';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { MenuAction } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { NavigationConfirmationDialog } from '../../../shared/NavigationHandler/NavigationConfirmationDialog';
import { preventNavigation } from '../../../shared/NavigationHandler/lib/actions';
import { DEPRECATED_ButtonLoading } from '../../../shared/osui/DEPRECATED_ButtonLoading';
import { appManager_GetCachedUserInfo } from '../../../shell/cachedUserInfo';
import { raiseToFlowHandler } from '../../../shell/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '../../../shell/feedback';
import { useNavigateBack } from '../../../shell/navigation';
import { userContactUser } from '../api';
import {
  ApplicationEvents_Directory_EmailHousehold,
  CommunityBusinessType,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from './actions';

/** H = capture/survey-UBTConnect.json sources["Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc.js"]. */

export interface ScreenBlock_Household_EmailProps {
  id: string;
  inHouseholdFirstName: string;
  inHouseholdFullName: string;
  emailTo: string;
  contactBusinessType: string;
  initialEmailSubject: string;
  menu?: ReactNode;
  bottomBar?: ReactNode;
  commonUIElements?: ReactNode;
  /** Event EmailSubmitted (H :818-820), awaited by the action. */
  onEmailSubmitted?: () => void;
}

/** OnInitialize HeaderText (H :1061-1110): "School" for OneSchool Global, "Store" for Campus&Co, else the default
    "Member" (H model :27-29). */
function headerText(contactBusinessType: string): string {
  if (contactBusinessType === CommunityBusinessType.OneSchoolGlobal) return 'School';
  if (contactBusinessType === CommunityBusinessType.CampusCo) return 'Store';
  return 'Member';
}

/** OSWidgets.Input Email_Subject (H :347-390; runtime OutSystemsReactWidgets.js ≈63369): `span.input-text` > input,
    Mandatory (required, aria-required), max 100, autocomplete off, style "form-control" + " field-error-border" while
    not Valid, grid class OSFillParent, " not-valid" and the message while a validation message shows. */
function Input_Subject({
  id,
  value,
  inputRef,
  onChange,
}: {
  id: string;
  value: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onChange: (value: string) => void;
}) {
  const validation = useInputWithVariableValidation({ id, mandatory: true, dataType: 'Text', elementRef: inputRef });
  const style = `form-control${validation.record.validAttr ? '' : ' field-error-border'}`;
  return (
    <span className="input-text">
      <input
        ref={inputRef}
        aria-describedby={validation.ariaDescribedBy}
        aria-required="true"
        autoComplete="off"
        className={validation.className(`${style} OSFillParent`)}
        data-input=""
        id={id}
        maxLength={100}
        placeholder="Subject"
        required
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
      {validation.validationElement}
    </span>
  );
}

/** OSWidgets.TextArea TextArea_Message (H :405-450; runtime ≈80236): span > textarea, Mandatory, max 1000, 6 lines,
    autocomplete off, style "form-control textarea-message" + " field-error-border" while not Valid. */
function TextArea_Message({
  id,
  value,
  textAreaRef,
  onChange,
}: {
  id: string;
  value: string;
  textAreaRef: RefObject<HTMLTextAreaElement | null>;
  onChange: (value: string) => void;
}) {
  const validation = useInputWithVariableValidation({ id, mandatory: true, dataType: 'Text', elementRef: textAreaRef });
  const style = `form-control textarea-message${validation.record.validAttr ? '' : ' field-error-border'}`;
  return (
    <span>
      <textarea
        ref={textAreaRef}
        autoComplete="off"
        className={validation.className(`${style} OSFillParent`)}
        data-textarea=""
        id={id}
        maxLength={1000}
        placeholder="Type message here..."
        required
        rows={6}
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
      {validation.validationElement}
    </span>
  );
}

/** E-mail to a household (H: view :206-681, controller :682-1220). Layout with the back MenuIcon and the title
    "Contact " + HeaderText; the recipient line (envelope icon, "To: " + In_HouseholdFullName) and Email_Form (Subject
    with its InputCounter, Message with its InputCounter, the DEPRECATED_ButtonLoading "send email" button); then the
    NavigationConfirmationDialog (asks while IsChange). No data action. */
export function ScreenBlock_Household_Email({
  id,
  inHouseholdFirstName,
  inHouseholdFullName,
  emailTo,
  contactBusinessType,
  initialEmailSubject,
  menu,
  bottomBar,
  commonUIElements,
  onEmailSubmitted,
}: ScreenBlock_Household_EmailProps) {
  const scope = id.replace('$', '');
  const ids = {
    form: `${scope}-Email_Form`,
    subject: `${scope}-Email_Subject`,
    message: `${scope}-TextArea_Message`,
  };
  const validation = useScreenValidationService();
  const navigateBack = useNavigateBack();
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  // OnInitialize (H :1061-1110): IsSending False, Subject = InitialEmailSubject, Message = "", HeaderText. OnReady's
  // restored-view reset (H :966-1022) is not needed: the block is not kept in the view cache (Decisions to confirm).
  const [subject, setSubject] = useState(initialEmailSubject);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const latest = useRef({ subject, message, isChange: false });
  const [title] = useState(() => headerText(contactBusinessType));

  /** OnChange_InputSubject (H :928-965): Trim(Subject) <> "" → Valid True, message "", IsChange True; else IsChange False. */
  const onChangeInputSubject = () => {
    if (latest.current.subject.trim() !== '') {
      validation.setWidgetValidity(ids.subject, true, '');
      latest.current.isChange = true;
    } else latest.current.isChange = false;
  };
  /** OnChange_InputMessage (H :1023-1060): the same for the message. */
  const onChangeInputMessage = () => {
    if (latest.current.message.trim() !== '') {
      validation.setWidgetValidity(ids.message, true, '');
      latest.current.isChange = true;
    } else latest.current.isChange = false;
  };
  const updateSubject = (value: string) => {
    latest.current.subject = value;
    setSubject(value);
  };
  const updateMessage = (value: string) => {
    latest.current.message = value;
    setMessage(value);
  };

  /** OnSubmit_Email (H :710-886), after the built-in validation of Email_Form (H :532). */
  const onSubmitEmail = async () => {
    const s = latest.current;
    if (s.subject.trim() !== '') {
      validation.setWidgetValidity(ids.subject, true, '');
      s.isChange = true;
    } else validation.setWidgetValidity(ids.subject, false, 'Required Field!');
    if (s.message.trim() !== '') {
      validation.setWidgetValidity(ids.message, true, '');
      s.isChange = true;
    } else validation.setWidgetValidity(ids.message, false, 'Required Field!');
    // Both fields valid?
    if (s.message.trim() === '' || s.subject.trim() === '') return;
    setIsSending(true);
    // IsOnline (GetNetworkStatus): navigator.onLine, as the other LDM routes.
    if (!navigator.onLine) {
      showFeedbackMessage('You cannot send emails without a network connection.', PLATFORM_MESSAGE_TYPE.error);
      setIsSending(false);
      return;
    }
    onChangeInputSubject();
    onChangeInputMessage();
    if (!validation.isValid(ids.form)) {
      if (s.subject.trim() === '') updateSubject('');
      if (s.message.trim() === '') updateMessage('');
      setIsSending(false);
      return;
    }
    s.isChange = false;
    const user = appManager_GetCachedUserInfo();
    await userContactUser({
      EmailTo: emailTo,
      ContactMember: inHouseholdFirstName,
      FirstNameSender: user.FirstName,
      LastNameSender: user.LastName,
      Subject: s.subject,
      Message: s.message,
      FirstName: inHouseholdFirstName,
      EmailFrom: user.Email,
      SenderPhone: '',
      SenderLocality: user.Locality,
      SenderCountry: user.Country,
    });
    onEmailSubmitted?.();
    // EmailHouseholdEvent {EmailTo, NameOfSender = LastName + ", " + FirstName} (H :821-825).
    const emailHouseholdEvent = { EmailTo: emailTo, NameOfSender: `${user.LastName}, ${user.FirstName}` };
    zOnApplicationEvent_Wrapper(ApplicationEvents_Directory_EmailHousehold, JSON.stringify(emailHouseholdEvent));
    scheduleFeedbackMessageAfterTransition('Your message has been sent.');
    // IsSending = False; IsEmailSubmitted = True (not read by the view); Destination (PreviousScreen).
    setIsSending(false);
    navigateBack();
  };

  return (
    <OSBlock name="Email.ScreenBlock_Household_Email" id={id}>
      <ValidationServiceProvider service={validation}>
        <Layout
          id={`${scope}-$b1`}
          menu={<div id={`${scope}-Menu`}>{menu}</div>}
          headerLeft={<MenuIcon__UpdatedOSUI id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
          title={
            <div className="text-align-center" data-container="">
              <span data-expression="">{`Contact ${title}`}</span>
            </div>
          }
          content={
            <>
              <div className="background-neutral-0 padding-x-base padding-top-xxl" data-container="">
                <div className="inline-flex-center-vertical full-width padding-x-l padding-y-base" data-container="">
                  <i className="icon text-primary fa fa-envelope fa-2x" data-icon="" />
                  <span className="margin-left-base" data-expression="">{`To: ${inHouseholdFullName}`}</span>
                </div>
                <OSForm id={ids.form} style="form card OSFillParent">
                  <label className="mandatory OSFillParent" data-label="" htmlFor={ids.subject}>
                    Subject
                  </label>
                  <Input_Subject
                    id={ids.subject}
                    value={subject}
                    inputRef={subjectRef}
                    onChange={(value) => {
                      updateSubject(value);
                      onChangeInputSubject();
                    }}
                  />
                  <InputCounter id={`${scope}-$b3`} inputId={ids.subject} />
                  <label className="mandatory OSFillParent" data-label="" htmlFor={ids.message}>
                    Message
                  </label>
                  <TextArea_Message
                    id={ids.message}
                    value={message}
                    textAreaRef={messageRef}
                    onChange={(value) => {
                      updateMessage(value);
                      onChangeInputMessage();
                    }}
                  />
                  <InputCounter id={`${scope}-$b4`} inputId={ids.message} />
                  <div data-container="" style={{ textAlign: 'center' }}>
                    <DEPRECATED_ButtonLoading id={`${scope}-$b5`} isLoading={isSending}>
                      <button
                        className="btn btn-primary OSFillParent"
                        data-button=""
                        type="submit"
                        onClick={() => {
                          validation.validate(ids.form);
                          onSubmitEmail().catch(raiseToFlowHandler);
                        }}
                      >
                        <div className="btn-loading margin-right-s OSInline" data-container="">
                          <div className="loading-spinner" data-container="" />
                        </div>
                        <div className="btn-label OSInline" data-container="">
                          send email
                        </div>
                      </button>
                    </DEPRECATED_ButtonLoading>
                  </div>
                </OSForm>
              </div>
              <div className="backwards-compatibility" data-container="">
                <NavigationConfirmationDialog
                  id={`${scope}-$b6`}
                  onNavigation={(navigationEvent) => {
                    // NavigationHandlerNavigation (H :887-927): IsChange → PreventNavigation.
                    if (latest.current.isChange) preventNavigation(navigationEvent);
                  }}
                  dialogHeader="Confirm"
                  dialogBody="Are you sure you want to discard the changes?"
                  buttonLabelConfirm="Confirm"
                  buttonLabelDismiss="Cancel"
                />
              </div>
            </>
          }
          bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
          commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
        />
      </ValidationServiceProvider>
    </OSBlock>
  );
}
