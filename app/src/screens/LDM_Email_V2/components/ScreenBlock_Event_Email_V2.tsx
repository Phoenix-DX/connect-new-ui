// @os-block Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2
import { useEffect, useReducer, useRef, type ReactNode, type RefObject } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  OSForm,
  useInputWithVariableValidation,
  useScreenValidationService,
  ValidationServiceProvider,
} from '@/components/ui/os/OSValidation';
import { osImage } from '@/legacy/os/os-assets';
import { InputCounter } from '../../../shared/Connect2_LegacyShared/InputCounter';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { NetworkWarning } from '../../../shared/Connect2_LegacyShared/NetworkWarning';
import { MenuAction } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { ErrorScreen } from '../../../shared/Connect2_OrbitMobile_MUI/ErrorScreen';
import { NavigationConfirmationDialog } from '../../../shared/NavigationHandler/NavigationConfirmationDialog';
import { preventNavigation } from '../../../shared/NavigationHandler/lib/actions';
import { ContactPopup_ByPhone } from '../../../shared/UBTConnect_Utils/ContactPopup_ByPhone';
import type { ContactByPhonePopupData } from '../../../shared/UBTConnect_Utils/lib/structures';
import { appManager_GetCachedUserInfo, type AppManager_CachedUserInfoRec } from '@/platform/session/cachedUserInfo';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { allowUpcomingNavigation, useNavigateBack } from '@/platform/navigation';
import { emptyCoordinatorDetailsData, eventContact, getCoordinatorDetails } from '../api';
import type { CoordinatorDetailsData, EventEmailInputs } from '../types';
import {
  addAuditEventDetailEvent,
  ApplicationEvents_Directory_EmailHousehold,
  ApplicationEvents_LDM,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from './actions';

/** Block variables the view and the actions read (B = runtime-sources/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2
    .ScreenBlock_Event_Email_V2.mvc.js, model :24-57) and the GetCoordinatorDetails data action (:94-100).
    IsSending, CancelPopupBox and DefaultEventName are set by the actions but never read by the view. */
interface Model {
  message: string;
  subject: string;
  userInfo: AppManager_CachedUserInfoRec | null;
  isFetching: boolean;
  callPopupData: ContactByPhonePopupData;
  /** GetCoordinatorDetails outputs: null until fetched (record defaults: Out_HasContent True, B model :14-16). */
  coordinator: CoordinatorDetailsData | null;
  /** GetCoordinatorDetails.HasFetchError. */
  hasFetchError: boolean;
}

const INITIAL_MODEL: Model = {
  message: '',
  subject: '',
  userInfo: null,
  isFetching: false,
  callPopupData: {},
  coordinator: null,
  hasFetchError: false,
};

export interface ScreenBlock_Event_Email_V2Props {
  id: string;
  inputs: EventEmailInputs;
  menu?: ReactNode;
  bottomBar?: ReactNode;
  commonUIElements?: ReactNode;
}

/** OSWidgets.Input (runtime OutSystemsReactWidgets.js ≈63369): `span.input-<type>` > input with the platform
    validation; Mandatory adds `required` and aria-required; the grid class OSFillParent follows the style. */
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

/** OSWidgets.TextArea (runtime ≈80236): span > textarea (rows = Text Lines, maxlength, required when mandatory). */
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

/** Contact the LDM event coordinator by e-mail (B: view :249-895, controller :896-1628). Layout with the back MenuIcon
    (MenuAction Auto, Q2 → A) and the title "Contact Event Coordinator"; Content: GetCoordinatorDetails fetch error →
    NetworkWarning; fetching → the list-updating loader; no content → ErrorScreen "No Event Organiser information.";
    else ContactOrganiser_Form (From = the user's e-mail, To = the coordinator, Subject = event name + date, Message,
    InputCounter, Submit and "or Call us Directly"). Then, unless the call popup shows, the NavigationConfirmationDialog
    (a typed message asks before leaving), and ContactPopup_ByPhone. GetCoordinatorDetails is fetched only on demand
    (OnReady, TryAgain). */
export function ScreenBlock_Event_Email_V2({
  id,
  inputs,
  menu,
  bottomBar,
  commonUIElements,
}: ScreenBlock_Event_Email_V2Props) {
  const scope = id.replace('$', '');
  const ids = {
    form: `${scope}-ContactOrganiser_Form`,
    inputFrom: `${scope}-Input_From`,
    inputTo: `${scope}-Input_To`,
    subject: `${scope}-TextArea_Subject`,
    message: `${scope}-TextArea_Message`,
  };
  const validation = useScreenValidationService();
  const navigateBack = useNavigateBack();
  const messageRef = useRef<HTMLTextAreaElement>(null);
  // OnInitialize (B :1327-1374): a view restored from the cache gets Message = "". The block is not kept in the view
  // cache here, so it always starts with Message "" (Decisions to confirm).
  const [state, dispatch] = useReducer((s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }), INITIAL_MODEL);
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    dispatch(patch);
  };

  /** RefreshGetCoordinatorDetails (B :994-1027): IsFetching True, refresh; OnAfterFetch_GetCoordinatorDetails
      (:1184-1211): DefaultEventName = EventName, Subject = DefaultEventName + " - " + DateToText(DateTimeToDate(EventDate)).
      A failed fetch sets HasFetchError and raises. */
  const refreshGetCoordinatorDetails = async () => {
    set({ isFetching: true });
    try {
      const coordinator = await getCoordinatorDetails(inputs);
      set({
        coordinator,
        hasFetchError: false,
        subject: `${coordinator.eventName} - ${coordinator.eventDateText}`,
      });
    } catch (e) {
      set({ hasFetchError: true });
      throw e;
    }
  };

  /* OnReady (B :1423-1476): "Has null eventId?" (LongIntegerToText of both inputs = "", never true for a Long Integer)
     → Out_HasContent False; else RefreshGetCoordinatorDetails, UserInfo = AppManager_GetCachedUserInfo, IsFetching False. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (inputs.In_EventId === '' && inputs.In_EventHostId === '') {
      set({ coordinator: { ...(m().coordinator ?? emptyCoordinatorDetailsData()), hasContent: false } });
      return;
    }
    void (async () => {
      try {
        await refreshGetCoordinatorDetails();
        set({ userInfo: appManager_GetCachedUserInfo(), isFetching: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once per block instance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnChange_Message (B :956-993): TextArea_Message valid when Trim(Message) <> "", else "Required Field!". */
  const onChangeMessage = () => {
    if (m().message.trim() !== '') validation.setWidgetValidity(ids.message, true, '');
    else validation.setWidgetValidity(ids.message, false, 'Required Field!');
  };

  /** OnSubmit_Email (B :1212-1326). */
  const onSubmitEmail = async () => {
    // GetNetworkStatus (OutSystemsUI): navigator.onLine, as LDM_EventDetail_V2.
    if (!navigator.onLine) {
      showFeedbackMessage('You cannot send emails without a network connection.', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    onChangeMessage();
    if (!validation.isValid(ids.form)) {
      if (m().message.trim() === '') set({ message: '' });
      return;
    }
    const s = m();
    const cd = s.coordinator?.coordinatorDetails;
    const user = s.userInfo;
    // IsSending = True (not read by the view); EventContact (B :1239-1252).
    await eventContact({
      EmailTo: cd?.CoordinatorEmail ?? '',
      ContactMember: cd?.CoordinatorName ?? '',
      FirstNameSender: user?.FirstName ?? '',
      LastNameSender: user?.LastName ?? '',
      Subject: s.subject,
      Message: s.message,
      FirstName: cd?.CoordinatorName ?? '',
      EmailFrom: user?.Email ?? '',
      SenderPhone: user?.Phone ?? '',
      SenderLocality: user?.Locality ?? '',
      SenderCountry: '',
    });
    addAuditEventDetailEvent(
      ApplicationEvents_LDM.MyTimelineCoordinatorEmailed,
      inputs.EventDate,
      inputs.EventLocality,
    );
    // EmailEvent {EmailTo, NameOfSender = LastName + ", " + FirstName}, JSON Serialize (B :1262-1268).
    const emailEvent = {
      EmailTo: cd?.CoordinatorEmail ?? '',
      NameOfSender: `${user?.LastName ?? ''}, ${user?.FirstName ?? ''}`,
    };
    zOnApplicationEvent_Wrapper(
      inputs.In_IsMessageGuest
        ? ApplicationEvents_LDM.HostMessageGuest
        : inputs.In_IsContactOrganiser
          ? ApplicationEvents_LDM.ContactEventOrganiser
          : ApplicationEvents_Directory_EmailHousehold,
      JSON.stringify(emailEvent),
    );
    scheduleFeedbackMessageAfterTransition('Your message has been sent.');
    // IsSending = False; Message = ""; AllowUpcomingNavigation; Destination (PreviousScreen).
    set({ message: '' });
    allowUpcomingNavigation();
    navigateBack();
  };

  /** OnClick_Call (B :1125-1183). */
  const onClickCall = () => {
    const cd = m().coordinator?.coordinatorDetails;
    const phone = cd?.CoordinatorPhoneNumber ?? '';
    if (phone === '') {
      showFeedbackMessage('Phone number is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    set({
      callPopupData: {
        ...m().callPopupData,
        Phone: phone,
        ContactPopupData: {
          ...m().callPopupData.ContactPopupData,
          ImageURL: osImage('img/Connect2_OrbitMobile_MUI.LDM_Logo.svg'),
          IsAvatarImage: false,
          Name: (cd?.CoordinatorName ?? '').trim(),
          Locality: cd?.LocalityName ?? '',
          TimezoneName: cd?.Timezone.TimezoneLabel ?? '',
          TimezoneOffset: Number(cd?.Timezone.OffsetSeconds ?? '0'),
          ShowPopup: true,
          DisplayContactNumber: phone,
          CountryName: cd?.CountryName ?? '',
        },
      },
    });
  };

  /** OnHandle_ContactByPhonePopupEvent_Cancel (B :1375-1398); _Call (:1399-1422) runs it too. */
  const closeCallPopup = () => {
    const d = m().callPopupData;
    set({ callPopupData: { ...d, ContactPopupData: { ...d.ContactPopupData, ShowPopup: false } } });
  };

  const cd = state.coordinator?.coordinatorDetails;
  const hasContent = state.coordinator?.hasContent ?? true;

  const content = (() => {
    if (state.hasFetchError)
      return (
        <NetworkWarning
          id={`${scope}-$b5`}
          onTryAgain={() => {
            // OnHandle_NetworkWarningTryAgain (B :1052-1083): RefreshGetCoordinatorDetails, IsFetching False.
            refreshGetCoordinatorDetails()
              .then(() => {
                set({ isFetching: false });
              })
              .catch(raiseToFlowHandler);
          }}
        />
      );
    if (state.isFetching)
      return (
        <div className="list-updating-cont" data-container="" id={`${scope}-MarkReadLoading`}>
          <div className="list-updating" data-container="" />
        </div>
      );
    if (!hasContent)
      return (
        <ErrorScreen id={`${scope}-$b4`} inErrorMessage="No Event Organiser information." inMatchMainContentHeight />
      );
    return (
      <OSForm id={ids.form} style="form card contact-organiser-form OSFillParent">
        <div
          className="contact-organiser-form-cont"
          data-container=""
          id={`${scope}-Cont_From`}
          style={{ marginTop: '0px' }}
        >
          <label
            className="contact-organiser-form-cont-label mandatory OSFillParent"
            data-label=""
            htmlFor={ids.inputFrom}
            id={`${scope}-Label_From`}
          >
            From:
          </label>
          <FormInput
            id={ids.inputFrom}
            type="email"
            maxLength={100}
            placeholder="Sender"
            value={state.userInfo?.Email ?? ''}
          />
        </div>
        <div
          className="contact-organiser-form-cont"
          data-container=""
          id={`${scope}-Cont_To`}
          style={{ marginTop: '10px' }}
        >
          <label
            className="contact-organiser-form-cont-label mandatory OSFillParent"
            data-label=""
            htmlFor={ids.inputTo}
            id={`${scope}-Label_To`}
          >
            To:
          </label>
          <FormInput
            id={ids.inputTo}
            type="text"
            maxLength={100}
            placeholder="Destination"
            value={cd?.CoordinatorName ?? ''}
          />
        </div>
        <div
          className="contact-organiser-form-cont"
          data-container=""
          id={`${scope}-Cont_Subject`}
          style={{ marginTop: '10px' }}
        >
          <label
            className="contact-organiser-form-cont-label mandatory OSFillParent"
            data-label=""
            htmlFor={ids.subject}
            id={`${scope}-Label_Subject`}
          >
            Subject:
          </label>
          <FormTextArea
            id={ids.subject}
            style="form-control contact-organiser-form-cont-input"
            rows={2}
            maxLength={500}
            placeholder="Email's subject"
            value={state.subject}
            enabled={false}
          />
        </div>
        <div
          className="contact-organiser-form-cont"
          data-container=""
          id={`${scope}-Cont_Message`}
          style={{ marginTop: '10px' }}
        >
          <label
            className="contact-organiser-form-cont-label mandatory OSFillParent"
            data-label=""
            htmlFor={ids.message}
            id={`${scope}-Label_Message`}
          >
            Message:
          </label>
          <FormTextArea
            id={ids.message}
            style="form-control contact-organiser-form-cont-input textarea-message"
            rows={5}
            maxLength={1000}
            placeholder="Your message here..."
            value={state.message}
            enabled
            textAreaRef={messageRef}
            onChange={(message) => {
              set({ message });
              onChangeMessage();
            }}
          />
        </div>
        <InputCounter id={`${scope}-$b3`} inputId={ids.message} />
        <div className="text-align-center margin-top-m" data-container="">
          <button
            className="btn btn-secondary blue-gradient-button"
            data-button=""
            id={`${scope}-Button_Submit`}
            type="submit"
            onClick={() => {
              onSubmitEmail().catch(raiseToFlowHandler);
            }}
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
            onClick={onClickCall}
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
        <Layout
          id={`${scope}-$b1`}
          menu={<div id={`${scope}-Menu`}>{menu}</div>}
          headerLeft={
            // MenuAction Auto of the Orbit module rendered as the back icon (Q2 → A, as LDM_MyEvents_V2's capture).
            <MenuIcon__UpdatedOSUI id={`${scope}-$b2`} menuAction={MenuAction.Back} />
          }
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
              {!state.callPopupData.ContactPopupData?.ShowPopup && (
                <div className="backwards-compatibility" data-container="">
                  <NavigationConfirmationDialog
                    id={`${scope}-$b6`}
                    onNavigation={(navigationEvent) => {
                      // NavigationConfirmationDialogNavigation (B :1084-1124): a typed message prevents it.
                      if (m().message.trim() !== '') preventNavigation(navigationEvent);
                    }}
                    dialogHeader="Confirm"
                    dialogBody="Are you sure you want to discard the changes?"
                    buttonLabelConfirm="Confirm"
                    buttonLabelDismiss="Cancel"
                  />
                </div>
              )}
              <ContactPopup_ByPhone
                id={`${scope}-$b7`}
                inCallPopupData={state.callPopupData}
                onEventCall={closeCallPopup}
                onEventCancel={closeCallPopup}
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
