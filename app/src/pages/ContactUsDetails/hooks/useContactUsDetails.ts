import { useCallback, useEffect, useReducer, useRef } from 'react';
import { flushSync } from 'react-dom';
import { fetchCountryNames, fetchLocalityTimezone, sendContactUsMessage } from '@/api/message';
import { useScreenValidationService, type ValidationService } from '@/components/ui/os/OSValidation';
import { exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import { osImage } from '@/lib/os-assets';
import type { ContactUsDetailsInputs } from '@/pages/ContactUsDetails/inputs';
import { Type_ContactSubject } from '@/pages/ContactUsDetails/staticEntities';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { confirmAction } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useNavigateBack } from '@/platform/navigation';
import { pinCheck } from '@/platform/session/pin';
import { currentUserId } from '@/platform/session/session';
import { preventNavigation, type NavigationEvent } from '@/lib/navigationEvent';
import type { Directory_UserCurrent } from '@/platform/session/UserInfoCache/types';
import {
  contactUsDetailsReducer,
  countriesCallInputs,
  initialContactUsDetailsState,
  isEmailValid,
  isPhoneNumberValid,
  jSUtils_String_CheckNumbers,
  localityTimezoneCallInputs,
  type ContactUsDetailsAction,
  type ContactUsInputField,
  type ContactUsDetailsState,
} from './contactUsDetailsState';

/** The flows of the ContactUsDetails screen: OnInitialize, OnReady (the countries, signed out), the result of
    CacheControl_UserInfo_Wrapper (then the locality time zone), the message change, the Support Team call popup, the
    "contacted about my feedback" check box, OnClick_SubmitForm and the leave confirmation of Dialog_Navigation.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */

interface ContactUsDetailsFlows {
  /** The screen's validationServiceInstance: Form_ContactUs and its widgets. */
  validation: ValidationService;
  /** The screen variables. */
  state: ContactUsDetailsState;
  /** The subject is "General Suggestions, Feedback & Rating". */
  isFeedbackSubject: boolean;
  /** CacheControl_UserInfo_WrapperResult. */
  onUserInformation: (userInformation: Directory_UserCurrent) => void;
  /** The OnChange of TextArea_Message, with the new message. */
  onMessageChange: (message: string) => void;
  /** A signed-out input changed: the variable, then OnChange_FormInput (Full Name, Locality), OnChange_Email or
      OnChange_PhoneNumber. */
  onFieldChange: (field: ContactUsInputField, value: string) => void;
  /** The variable setter of Dropdown_Country. */
  onCountryVariableChange: (code: string) => void;
  /** The OnChange of Dropdown_Country: OnChange_FormInput. */
  onCountryChange: () => void;
  /** ContactUs_RateRateSelected(Rate). */
  onRateSelected: (rate: number) => void;
  /** OnClick_UserWantToBeContacted. */
  onWantToBeContactedToggle: () => void;
  /** OnClick_SupportTeam. */
  onSupportTeam: () => void;
  /** Handler_CallPopup_Cancel: the events Cancel and Call of ContactPopupByPhone. */
  onCallPopupClose: () => void;
  /** The Send button: OnClick_SubmitForm. */
  onSend: () => void;
  /** OnBackNavigation_ConfirmDiscard: the OnBackNavigation event of Dialog_Navigation. */
  onBackNavigation: (navigationEvent: NavigationEvent) => void;
}

/** The UBT logo of the Support Team call popup. */
const SUPPORT_TEAM_IMAGE = 'img/UBTConnect.UbtLogo.png';

export function useContactUsDetails(inputs: ContactUsDetailsInputs): ContactUsDetailsFlows {
  const navigateBack = useNavigateBack();
  const validation = useScreenValidationService();

  /* ScreenEvent_OnInitialize, before the first render: PIN_Check; IgnorePolices = GetUserId = NullIdentifier or
     PIN_Check.NeedRegister; isLogged = GetUserId <> NullIdentifier. */
  const [state, dispatchToView] = useReducer(contactUsDetailsReducer, inputs, (screenInputs) => {
    const isLogged = currentUserId() !== null;
    return initialContactUsDetailsState(screenInputs, isLogged, !isLogged || pinCheck().needRegister);
  });
  // The screen variables as the flows read them: OutSystems assigns a variable at once, before the next render.
  const latest = useRef(state);
  const dispatch = useCallback((action: ContactUsDetailsAction) => {
    latest.current = contactUsDetailsReducer(latest.current, action);
    dispatchToView(action);
  }, []);

  // ScreenEvent_OnReady: signed out, refresh DataAction_GetCountriesNames.
  const onReadyDone = useRef(false);
  useEffect(() => {
    if (onReadyDone.current) return;
    onReadyDone.current = true;
    if (latest.current.isLogged) return;
    fetchCountryNames(countriesCallInputs(latest.current, inputs))
      .then((countries) => {
        dispatch({ type: 'countriesFetched', countries });
      })
      .catch(raiseToFlowHandler);
  }, [dispatch, inputs]);

  // CacheControl_UserInfo_WrapperResult(UserInformation), then the refresh of DataAction_GetLocalityTimezone.
  const userInformationResult = async (userInformation: Directory_UserCurrent) => {
    dispatch({ type: 'userInformationFetched', user: userInformation });
    const timezone = await fetchLocalityTimezone(localityTimezoneCallInputs(latest.current, inputs));
    dispatch({ type: 'timezoneFetched', timezone });
  };

  const onUserInformation = (userInformation: Directory_UserCurrent) => {
    userInformationResult(userInformation).catch(raiseToFlowHandler);
  };

  const onMessageChange = (message: string) => {
    try {
      dispatch({ type: 'messageChanged', message, contactSubjectId: inputs.In_ContactSubjectId });
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  /* OnChange_Email / OnChange_PhoneNumber: the widget Valid True and ValidationMessage "", then OnChange_FormInput.
     Input_FullName and Input_Locality run OnChange_FormInput only. */
  const onFieldChange = (field: ContactUsInputField, value: string) => {
    try {
      dispatch({ type: 'formFieldSet', field, value });
      if (field === 'Email') validation.setWidgetValidity('Input_Email', true, '');
      if (field === 'PhoneNumber') validation.setWidgetValidity('Input_PhoneNumber', true, '');
      dispatch({ type: 'formInputChanged', contactSubjectId: inputs.In_ContactSubjectId });
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  const onCountryVariableChange = (code: string) => {
    dispatch({ type: 'formFieldSet', field: 'Country', value: code });
  };

  const onCountryChange = () => {
    try {
      dispatch({ type: 'formInputChanged', contactSubjectId: inputs.In_ContactSubjectId });
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  // ContactUs_RateRateSelected(Rate): Rate_SelectedRate = Rate, then OnChange_FormInput.
  const onRateSelected = (rate: number) => {
    try {
      dispatch({ type: 'rateSelected', rate, contactSubjectId: inputs.In_ContactSubjectId });
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  const onWantToBeContactedToggle = () => {
    dispatch({ type: 'wantToBeContactedToggled' });
  };

  const onSupportTeam = () => {
    try {
      dispatch({ type: 'supportTeamClicked', imageUrl: osImage(SUPPORT_TEAM_IMAGE) });
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  const onCallPopupClose = () => {
    dispatch({ type: 'callPopupClosed' });
  };

  /* OnClick_SubmitForm. The action assigns Valid and ValidationMessage of Input_FullName, Input_Email and
     Input_PhoneNumber, then reads Form_ContactUs.Valid. Each assignment recalculates the Form from the widgets that
     are registered in it, which are the rendered ones. Signed in, only TextArea_Message is rendered and nothing sets
     it invalid, so the Form stays valid; signed out, the three inputs count. */
  const submitForm = async () => {
    try {
      dispatch({ type: 'submitStarted' });
      const form = latest.current.contactUsForm;
      if (jSUtils_String_CheckNumbers(form.FullName)) {
        validation.setWidgetValidity('Input_FullName', false, 'This field cannot contain numeric values!');
      } else {
        validation.setWidgetValidity('Input_FullName', true, '');
      }
      if (isEmailValid(form.Email)) {
        validation.setWidgetValidity('Input_Email', true, '');
      } else {
        validation.setWidgetValidity('Input_Email', false, 'Invalid email!');
      }
      if (isPhoneNumberValid(form.PhoneNumber)) {
        validation.setWidgetValidity('Input_PhoneNumber', true, '');
      } else {
        validation.setWidgetValidity('Input_PhoneNumber', false, 'Invalid Phone');
      }
      dispatch({ type: 'formFilledCleared' });
      if (!validation.isValid('Form_ContactUs')) {
        dispatch({ type: 'submitEnded' });
        return;
      }
      const sent = await sendContactUsMessage(
        form,
        inputs.In_ContactSubjectId,
        latest.current.selectedRate,
        latest.current.userWantToBeContacted,
      );
      dispatch({ type: 'submitEnded' });
      if (sent.out_ErrorMessage === '') {
        const confirmed = await confirmAction('SubmittedConfirmation');
        if (confirmed) {
          // Action_ResetForm before the previous screen: IsAnyFilled False removes Dialog_Navigation first.
          flushSync(() => {
            dispatch({ type: 'formReset' });
          });
          navigateBack();
        }
      } else {
        feedbackMessageAutoClose({ title: '', message: sent.out_ErrorMessage, messageType: 'error' });
      }
    } catch (error) {
      // AllExceptions: a system exception goes on to the flow handler.
      if (isSystemException(error)) {
        raiseToFlowHandler(error);
        return;
      }
      dispatch({ type: 'submitEnded' });
      feedbackMessageAutoClose({ title: '', message: exceptionMessage(error), messageType: 'error' });
    }
  };

  const onSend = () => {
    void Promise.resolve().then(submitForm);
  };

  // OnBackNavigation_ConfirmDiscard(Event_NavigationEvent): PreventNavigation, so Dialog_Navigation asks.
  const onBackNavigation = (navigationEvent: NavigationEvent) => {
    try {
      preventNavigation(navigationEvent);
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  return {
    validation,
    state,
    isFeedbackSubject: inputs.In_ContactSubjectId === Type_ContactSubject.GeneralSuggestionsFeedbackRating,
    onUserInformation,
    onMessageChange,
    onFieldChange,
    onCountryVariableChange,
    onCountryChange,
    onRateSelected,
    onWantToBeContactedToggle,
    onSupportTeam,
    onCallPopupClose,
    onSend,
    onBackNavigation,
  };
}
