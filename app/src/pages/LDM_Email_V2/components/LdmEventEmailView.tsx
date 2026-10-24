import { useRef, type ReactNode, type RefObject } from 'react';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { OrbitErrorScreen } from '@/components/orbit/OrbitErrorScreen';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  OSForm,
  useInputWithVariableValidation,
  ValidationServiceProvider,
  type ValidationService,
} from '@/components/ui/os/OSValidation';
import { InputCounter } from '@/shared/Connect2_LegacyShared/InputCounter';
import { NetworkWarning } from '@/shared/Connect2_LegacyShared/NetworkWarning';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import type { NavigationEvent } from '@/shared/NavigationHandler/lib/actions';
import { NavigationConfirmationDialog } from '@/shared/NavigationHandler/NavigationConfirmationDialog';
import type { ContactByPhonePopupData } from '@/shared/UBTConnect_Utils/lib/structures';
import { ldmEventEmailIds } from '@/pages/LDM_Email_V2/hooks/ldmEventEmailState';

export interface LdmEventEmailViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The block's validation service (useLdmEventEmail). */
  validation: ValidationService;
  /** The From field: the user's e-mail. */
  senderEmail: string;
  /** The To field: the coordinator's name. */
  coordinatorName: string;
  /** The read-only subject: the event name and date. */
  subject: string;
  message: string;
  /** GetCoordinatorDetails failed: the network warning replaces the form. */
  hasFetchError: boolean;
  /** GetCoordinatorDetails runs: the list-updating loader replaces the form. */
  isFetching: boolean;
  /** False: "No Event Organiser information." replaces the form. */
  hasContent: boolean;
  /** The data of the call popup (ShowPopup opens it and hides the navigation confirmation). */
  callPopupData: ContactByPhonePopupData;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  onMessageChange: (message: string) => void;
  /** The Submit button. */
  onSubmitClick: () => void;
  /** The "or Call us Directly" button. */
  onCallClick: () => void;
  /** TryAgain of the network warning. */
  onTryAgain: () => void;
  /** Cancel and Call of the call popup. */
  onCallPopupClose: () => void;
  /** The Navigation event of the confirmation dialog: the handler prevents it to ask. */
  onNavigation: (navigationEvent: NavigationEvent) => void;
}

/** OSWidgets.Input: `span.input-<type>` > input with the platform validation; Mandatory adds `required` and
    aria-required; the grid class OSFillParent follows the style. */
function FormInput({
  id,
  type,
  maxLength,
  placeholder,
  value,
}: {
  id: string;
  type: 'email' | 'text';
  maxLength: number;
  placeholder: string;
  value: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const validation = useInputWithVariableValidation({
    id,
    mandatory: true,
    dataType: type === 'email' ? 'Email' : 'Text',
    elementRef: inputRef,
  });
  return (
    <span className={`input-${type}`}>
      <input
        ref={inputRef}
        aria-describedby={validation.ariaDescribedBy}
        aria-required="true"
        className={validation.className('form-control contact-organiser-form-cont-input OSFillParent')}
        data-input=""
        disabled
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
      {validation.validationElement}
    </span>
  );
}

/** OSWidgets.TextArea: span > textarea (rows = Text Lines, maxlength, required when mandatory). */
function FormTextArea({
  id,
  style,
  rows,
  maxLength,
  placeholder,
  value,
  enabled,
  textAreaRef,
  onChange,
}: {
  id: string;
  style: string;
  rows: number;
  maxLength: number;
  placeholder: string;
  value: string;
  enabled: boolean;
  textAreaRef?: RefObject<HTMLTextAreaElement | null>;
  onChange?: (value: string) => void;
}) {
  const ownRef = useRef<HTMLTextAreaElement>(null);
  const ref = textAreaRef ?? ownRef;
  const validation = useInputWithVariableValidation({ id, mandatory: true, dataType: 'Text', elementRef: ref });
  return (
    <span>
      <textarea
        ref={ref}
        className={validation.className(`${style} OSFillParent`)}
        data-textarea=""
        disabled={!enabled}
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        required
        rows={rows}
        value={value}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
      {validation.validationElement}
    </span>
  );
}

/** One labelled row of ContactOrganiser_Form. */
function FormRow({
  scope,
  name,
  htmlFor,
  label,
  marginTop,
  children,
}: {
  scope: string;
  name: string;
  htmlFor: string;
  label: string;
  marginTop: string;
  children: ReactNode;
}) {
  return (
    <div className="contact-organiser-form-cont" data-container="" id={`${scope}-Cont_${name}`} style={{ marginTop }}>
      <label
        className="contact-organiser-form-cont-label mandatory OSFillParent"
        data-label=""
        htmlFor={htmlFor}
        id={`${scope}-Label_${name}`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/** @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2
    Contact the LDM event coordinator by e-mail. Layout with the back MenuIcon (MenuAction Auto of the Orbit module,
    rendered as the back icon, Q2 → A) and the title "Contact Event Coordinator". Content: a fetch error → the network
    warning; fetching → the list-updating loader; no content → the error screen "No Event Organiser information.";
    else ContactOrganiser_Form (From = the user's e-mail, To = the coordinator, the read-only Subject, Message, the
    input counter, Submit and "or Call us Directly"). Then, unless the call popup shows, the navigation confirmation
    dialog, and the call popup. Props only: useLdmEventEmail runs the flows. */
export function LdmEventEmailView({
  id,
  validation,
  senderEmail,
  coordinatorName,
  subject,
  message,
  hasFetchError,
  isFetching,
  hasContent,
  callPopupData,
  menu,
  bottomBar,
  commonUIElements,
  onMessageChange,
  onSubmitClick,
  onCallClick,
  onTryAgain,
  onCallPopupClose,
  onNavigation,
}: LdmEventEmailViewProps) {
  const ids = ldmEventEmailIds(id);
  const { scope } = ids;
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const content = (() => {
    if (hasFetchError) return <NetworkWarning id={`${scope}-$b5`} onTryAgain={onTryAgain} />;
    if (isFetching)
      return (
        <div className="list-updating-cont" data-container="" id={`${scope}-MarkReadLoading`}>
          <div className="list-updating" data-container="" />
        </div>
      );
    if (!hasContent)
      return (
        <OrbitErrorScreen
          id={`${scope}-$b4`}
          inErrorMessage="No Event Organiser information."
          inMatchMainContentHeight
        />
      );
    return (
      <OSForm id={ids.form} style="form card contact-organiser-form OSFillParent">
        <FormRow scope={scope} name="From" htmlFor={ids.inputFrom} label="From:" marginTop="0px">
          <FormInput id={ids.inputFrom} type="email" maxLength={100} placeholder="Sender" value={senderEmail} />
        </FormRow>
        <FormRow scope={scope} name="To" htmlFor={ids.inputTo} label="To:" marginTop="10px">
          <FormInput id={ids.inputTo} type="text" maxLength={100} placeholder="Destination" value={coordinatorName} />
        </FormRow>
        <FormRow scope={scope} name="Subject" htmlFor={ids.subject} label="Subject:" marginTop="10px">
          <FormTextArea
            id={ids.subject}
            style="form-control contact-organiser-form-cont-input"
            rows={2}
            maxLength={500}
            placeholder="Email's subject"
            value={subject}
            enabled={false}
          />
        </FormRow>
        <FormRow scope={scope} name="Message" htmlFor={ids.message} label="Message:" marginTop="10px">
          <FormTextArea
            id={ids.message}
            style="form-control contact-organiser-form-cont-input textarea-message"
            rows={5}
            maxLength={1000}
            placeholder="Your message here..."
            value={message}
            enabled
            textAreaRef={messageRef}
            onChange={onMessageChange}
          />
        </FormRow>
        <InputCounter id={`${scope}-$b3`} inputId={ids.message} />
        <div className="text-align-center margin-top-m" data-container="">
          <button
            className="btn btn-secondary blue-gradient-button"
            data-button=""
            id={`${scope}-Button_Submit`}
            type="submit"
            onClick={onSubmitClick}
          >
            Submit
          </button>
        </div>
        <div className="text-align-center margin-top-xl" data-container="">
          <button
            className="btn btn-secondary blue-gradient-button"
            data-button=""
            style={{ height: '40px' }}
            type="submit"
            onClick={onCallClick}
          >
            <i className="icon font-size-1-25em fa fa-phone fa-1x" data-icon="" />
            <span className="margin margin-left5">or Call us Directly</span>
          </button>
        </div>
      </OSForm>
    );
  })();

  return (
    <OSBlock name="LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2" id={id}>
      <ValidationServiceProvider service={validation}>
        <LegacyLayout
          id={`${scope}-$b1`}
          menu={<div id={`${scope}-Menu`}>{menu}</div>}
          headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
          title={
            <div className="text-align-center" data-container="">
              <span data-expression="" style={{ textTransform: 'capitalize' }}>
                Contact Event Coordinator
              </span>
            </div>
          }
          content={
            <>
              {content}
              {!callPopupData.ContactPopupData?.ShowPopup && (
                <div className="backwards-compatibility" data-container="">
                  <NavigationConfirmationDialog
                    id={`${scope}-$b6`}
                    onNavigation={onNavigation}
                    dialogHeader="Confirm"
                    dialogBody="Are you sure you want to discard the changes?"
                    buttonLabelConfirm="Confirm"
                    buttonLabelDismiss="Cancel"
                  />
                </div>
              )}
              <ContactPopupByPhone
                id={`${scope}-$b7`}
                inCallPopupData={callPopupData}
                onEventCall={onCallPopupClose}
                onEventCancel={onCallPopupClose}
              />
            </>
          }
          bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
          commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
        />
        <div className="backwards-compatibility" data-container="" />
      </ValidationServiceProvider>
    </OSBlock>
  );
}
