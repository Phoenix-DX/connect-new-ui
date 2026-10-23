/** @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useSearchParams } from 'react-router';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import {
  OSForm,
  UnbuiltValidationWidget,
  useScreenValidationService,
  ValidationServiceProvider,
} from '@/components/ui/os/OSValidation';
import { osImage } from '@/legacy/os/os-assets';
import { preventNavigation, type NavigationEvent } from '@/shared/NavigationHandler/lib/actions';
import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { CacheControl_UserInfo_Wrapper } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { Dialog_Navigation } from '@/shared/UBTConnect/Dialog_Navigation';
import { SectionSeparator } from '@/shared/UBTConnect/SectionSeparator';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { CircleButton_WithLabel } from '@/shared/UBTConnectLibrary/CircleButton_WithLabel';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import {
  UBT_AvatarSize,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconsSize,
  UBT_ImageSize,
  UBT_Shadow,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { TextArea_WithCounter } from '@/shared/UBTConnectLibrary/TextArea_WithCounter';
import { confirmAction } from '@/platform/feedback/dialogs';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { useNavigateBack } from '@/platform/navigation';
import { pinCheck } from '@/platform/session/pin';
import { currentUserId } from '@/platform/session/session';
import { dataAction_GetCountriesNames, dataAction_GetLocalityTimezone, sendContactUsMessage } from './api';
import {
  emptyCallPopupData,
  emptyContactUsForm,
  get_ContactUsFormDescription,
  isEmailValid,
  isPhoneNumberValid,
  jSUtils_String_CheckNumbers,
  onChange_FormInput,
  trimContactUsForm,
} from './components/actions';
import { Dialog_Information } from './components/Dialog_Information';
import { TextArea_Message } from './components/TextArea_Message';
import { Type_ContactSubject, UBT_Color_Local, UBT_Icons2_Local } from './components/staticEntities';
import type { ContactUsDetailsInputs, CountryName, LocalityTimezone, UI_ContactUsForm } from './types';

/** FixedFooter ExpectedFooterHeight (P:1198). */
const FOOTER_HEIGHT = 'calc(2 * var(--space-base) + var(--ubt-button-height-m))';

/** UBTConnect App_Menu_ContactUs.ContactUsDetails ("P" = analysis/sources/pretty/UBTConnect.App_Menu_ContactUs.
    ContactUsDetails.mvc.js: model :1-183, view :185-1643, controller :1645-2590). Contact form of one Contact Us
    subject: Layout_DetailPage with the subject, its description and the Support Team call link, a Message text area
    with counter in a skeleton section and a fixed Send button; the thank-you dialog after sending, the leave
    confirmation while the message is filled and the call popup. Signed-in users' details come from
    CacheControl_UserInfo_Wrapper. */
export default function ContactUsDetails() {
  const [params] = useSearchParams();
  const [inputs] = useState<ContactUsDetailsInputs>(() => ({
    In_ContactSubjectId: params.get('In_ContactSubjectId') ?? '',
    In_ContactSubjectTitle: params.get('In_ContactSubjectTitle') ?? '',
    In_ListMenuOptionLabel: params.get('In_ListMenuOptionLabel') ?? '',
  }));
  const navigateBack = useNavigateBack();
  // The screen's validationServiceInstance: Form_ContactUs and its widgets (P:127-170 WidgetsRecord).
  const validation = useScreenValidationService();

  /* ScreenEvent_OnInitialize (P:2370-2420), before the first render: PIN_Check; IgnorePolices = GetUserId =
     NullIdentifier or PIN_Check.NeedRegister; Get_ContactUsFormDescription → Description, MessagePrompt; isLogged =
     GetUserId <> NullIdentifier; Rate_ShowRate = feedback subject and isLogged; isLoadingMainData = isLogged. */
  const [init] = useState(() => {
    const isLogged = currentUserId() !== null;
    const description = get_ContactUsFormDescription(inputs.In_ContactSubjectId);
    return {
      ignorePolices: !isLogged || pinCheck().needRegister,
      description: description.out_FormDescription,
      messagePrompt: description.out_MessagePrompt,
      isLogged,
      rate_ShowRate: inputs.In_ContactSubjectId === Type_ContactSubject.GeneralSuggestionsFeedbackRating && isLogged,
    };
  });
  const { isLogged } = init;
  const [isLoadingMainData, setIsLoadingMainData] = useState(isLogged);
  const [contactUsForm, setContactUsForm] = useState<UI_ContactUsForm>(emptyContactUsForm);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isAnyFilled, setIsAnyFilled] = useState(false);
  const [countryPhone, setCountryPhone] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [rate_SelectedRate] = useState(0); // set by ContactUs_Rate RateSelected (P:2089-2127; NotCaptured, Q2 → A)
  const [rate_UserWantToBeContacted, setRate_UserWantToBeContacted] = useState(false);
  const [callPopupData, setCallPopupData] = useState(emptyCallPopupData);
  const [timezone, setTimezone] = useState<LocalityTimezone>({ timezoneName: '', timezoneOffset: 0 });
  const [, setCountries] = useState<CountryName[]>([]); // Dropdown_Country list (signed out, NotCaptured, Q1 → A)

  // The screen variables as the action flows read them (OutSystems reads the model, not a render snapshot).
  const latest = useRef({ contactUsForm, rate_SelectedRate, rate_UserWantToBeContacted, timezone, countryPhone });
  useLayoutEffect(() => {
    latest.current = { contactUsForm, rate_SelectedRate, rate_UserWantToBeContacted, timezone, countryPhone };
  });

  /* ScreenEvent_OnReady (P:2051-2087): not isLogged → Refresh DataAction_GetCountriesNames. */
  const onReadyDone = useRef(false);
  useEffect(() => {
    if (onReadyDone.current) return;
    onReadyDone.current = true;
    if (isLogged) return;
    dataAction_GetCountriesNames({
      isLogged,
      isLoadingMainData: false,
      IgnorePolices: init.ignorePolices,
      In_ContactSubjectId: inputs.In_ContactSubjectId,
      In_ContactSubjectTitle: inputs.In_ContactSubjectTitle,
      In_ListMenuOptionLabel: inputs.In_ListMenuOptionLabel,
    })
      .then(setCountries)
      .catch(raiseToFlowHandler);
  }, [isLogged, init.ignorePolices, inputs]);

  /* OnChange_FormInput (P:1747-1784) with the form after the change. */
  const formInputChanged = (form: UI_ContactUsForm) => {
    const filled = onChange_FormInput(isLogged, form, inputs.In_ContactSubjectId, latest.current.rate_SelectedRate);
    setIsFormFilled(filled.isFormFilled);
    setIsAnyFilled(filled.isAnyFilled);
  };

  /* CacheControl_UserInfo_WrapperResult(UserInformation) (P:2129-2198): isLoadingMainData False; the form gets the
     user's name, email, country, locality and home number; CountryPhone; then Refresh DataAction_GetLocalityTimezone
     and its OnAfterFetch (P:1786-1812) copies the timezone into CallPopupData. */
  const cacheControl_UserInfo_WrapperResult = async (userInformation: Directory_UserCurrent) => {
    try {
      const geography = userInformation.Directory_UserCurrent_Geography;
      const form: UI_ContactUsForm = {
        ...latest.current.contactUsForm,
        FullName: userInformation.FullName,
        Email: userInformation.Email,
        Country: geography.Country_Name,
        Locality: geography.Locality_Name,
        PhoneNumber: userInformation.HomeNumber,
      };
      setIsLoadingMainData(false);
      setContactUsForm(form);
      setCountryPhone(geography.Country_Phone);
      const callPopup = emptyCallPopupData();
      const out = await dataAction_GetLocalityTimezone({
        IsFormFilled: false,
        IsAnyFilled: false,
        isLogged,
        CountryPhone: geography.Country_Phone,
        isSubmiting: false,
        Rate_SelectedRate: latest.current.rate_SelectedRate,
        Rate_ShowRate: init.rate_ShowRate,
        Rate_UserWantToBeContacted: latest.current.rate_UserWantToBeContacted,
        CallPopupData: callPopup,
        isLoadingMainData: false,
        IgnorePolices: init.ignorePolices,
        In_ContactSubjectId: inputs.In_ContactSubjectId,
        In_ContactSubjectTitle: inputs.In_ContactSubjectTitle,
        In_ListMenuOptionLabel: inputs.In_ListMenuOptionLabel,
      });
      setTimezone(out);
      setCallPopupData((data) => ({
        ...data,
        ContactPopupData: {
          ...data.ContactPopupData,
          TimezoneName: out.timezoneName,
          TimezoneOffset: out.timezoneOffset,
        },
      }));
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  /* OnClick_SupportTeam (P:2231-2287): the call popup data of the Support Team, then ShowPopup True. */
  const onClick_SupportTeam = () => {
    const { contactUsForm: form, timezone: tz, countryPhone: phone } = latest.current;
    setCallPopupData((data) => ({
      ...data,
      ContactPopupData: {
        ...data.ContactPopupData,
        ImageURL: osImage('img/UBTConnect.UbtLogo.png'),
        Name: 'Support Team',
        TimezoneName: tz.timezoneName,
        Locality: form.Locality,
        TimezoneOffset: tz.timezoneOffset,
        DisplayContactNumber: phone,
        IsAvatarImage: false,
        CountryName: form.Country,
        TitleTerminator: '?',
        ShowPopup: true,
      },
      Phone: phone,
    }));
  };

  /* Handler_CallPopup_Cancel (P:2289-2312): ShowPopup False (Event_Cancel and Event_Call). */
  const handler_CallPopup_Cancel = () => {
    setCallPopupData((data) => ({ ...data, ContactPopupData: { ...data.ContactPopupData, ShowPopup: false } }));
  };

  /* OnClick_SubmitForm (P:1857-2049). The action assigns Input_FullName / Input_Email / Input_PhoneNumber Valid and
     ValidationMessage (P:1907-1956), then reads Form_ContactUs.Valid (P:1958): each assignment recalculates the Form
     from the widgets registered in it, i.e. the rendered ones (OutSystems.js ≈512195, recalculateAggregatorsState
     ≈513161). Signed in only TextArea_Message is rendered and nothing sets it invalid, so the Form stays valid; signed
     out the three inputs count. */
  const onClick_SubmitForm = async () => {
    try {
      const form = trimContactUsForm(latest.current.contactUsForm);
      setContactUsForm(form);
      setIsSubmiting(true);
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
      setIsFormFilled(false);
      if (!validation.isValid('Form_ContactUs')) {
        setIsSubmiting(false);
        return;
      }
      const sent = await sendContactUsMessage(
        form,
        inputs.In_ContactSubjectId,
        latest.current.rate_SelectedRate,
        latest.current.rate_UserWantToBeContacted,
      );
      setIsSubmiting(false);
      if (sent.out_ErrorMessage === '') {
        const confirmed = await confirmAction('SubmittedConfirmation');
        if (confirmed) {
          // Action_ResetForm (P:1814-1855) before (PreviousScreen): IsAnyFilled False removes Dialog_Navigation first.
          flushSync(() => {
            setContactUsForm(emptyContactUsForm());
            setIsFormFilled(false);
            setIsAnyFilled(false);
          });
          navigateBack();
        }
      } else {
        feedbackMessageAutoClose({ title: '', message: sent.out_ErrorMessage, messageType: 'error' });
      }
    } catch (error) {
      // AllExceptions: a system exception goes on to the flow's handler.
      if (isSystemException(error)) {
        raiseToFlowHandler(error);
        return;
      }
      setIsSubmiting(false);
      feedbackMessageAutoClose({ title: '', message: exceptionMessage(error), messageType: 'error' });
    }
  };

  /* OnBackNavigation_ConfirmDiscard(Event_NavigationEvent) (P:2422-2450): PreventNavigation, so Dialog_Navigation asks. */
  const onBackNavigation_ConfirmDiscard = (navigationEvent: NavigationEvent) => {
    try {
      preventNavigation(navigationEvent);
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  const content = (
    <>
      {/* Container Content (P:285-294): FixedFooter adds its class and footer height (ContentContainerId). */}
      <div data-container="" id="Content">
        <CustomContainer
          id="$b2"
          options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
        >
          <CustomContainer
            id="$b3"
            options={{
              TextOptions: {
                Color: UBT_Color.Neutral10,
                FontSize: UBT_FontSize.Small,
                FontWeight: UBT_FontWeight.SemiBold,
              },
            }}
          >
            <span data-expression="">{inputs.In_ListMenuOptionLabel}</span>
          </CustomContainer>
          <CustomContainer
            id="$b4"
            options={{ MarginSize: { TopSizeId: UBT_Size.Small }, TextOptions: { FontSize: UBT_FontSize.Small } }}
          >
            <span data-expression="">{init.description}</span>
          </CustomContainer>
          {isLogged && countryPhone !== '' && (
            <CustomContainer
              id="$b5"
              options={{ MarginSize: { TopSizeId: UBT_Size.Base }, TextOptions: { FontSize: UBT_FontSize.Small } }}
            >
              <span data-expression="">{'Prefer to speak with someone? \r\nGive our '}</span>
              <a
                className="text-underline"
                data-link=""
                href="#"
                style={{ marginLeft: 0 }}
                onClick={(event) => {
                  event.preventDefault();
                  try {
                    onClick_SupportTeam();
                  } catch (error) {
                    raiseToFlowHandler(error);
                  }
                }}
              >
                Support Team
              </a>
              <span data-expression="" style={{ marginLeft: 0 }}>
                {' a call.'}
              </span>
            </CustomContainer>
          )}
        </CustomContainer>
        <SectionSeparator id="$b6" />
        <DirectoryDetailSection id="$b7" inTitle="">
          {init.rate_ShowRate && (
            <NotCaptured name="App_Menu_ContactUs.ContactUs_Rate (SelectedRate, isEnabled = not isSubmiting; Q2 → A)" />
          )}
          {isLogged ? (
            <CustomContainer
              id="$b9"
              options={{
                MarginSize: { BottomSizeId: UBT_Size.Small },
                TextOptions: { FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold },
              }}
            >
              <span data-expression="">
                {inputs.In_ContactSubjectId === Type_ContactSubject.GeneralSuggestionsFeedbackRating
                  ? 'Please provide your suggestions and feedback'
                  : 'How can we help you?'}
              </span>
            </CustomContainer>
          ) : (
            <CustomContainer
              id="$b10"
              options={{
                MarginSize: { BottomSizeId: UBT_Size.Small },
                TextOptions: { FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold, IsItalic: true },
              }}
            >
              <span data-expression="">All fields are required.</span>
            </CustomContainer>
          )}
          <SkeletonSection id="$b11" inIsLoading={isLoadingMainData}>
            <OSForm id="Form_ContactUs" style="form OSFillParent">
              {!isLogged && (
                <>
                  <NotCaptured name="ContactUsDetails signed-out fields: Full Name, Email, Phone Number, Country (Select Your Country), Locality (Q1 → A)" />
                  {/* Their widgets register in Form_ContactUs as the original's do (P:739-1023), so the Valid that
                      OnClick_SubmitForm assigns counts in Form_ContactUs.Valid. No validation runs on this screen (its
                      sources have no validateWidget call), so their own validate is never used. */}
                  <UnbuiltValidationWidget id="Input_FullName" />
                  <UnbuiltValidationWidget id="Input_Email" />
                  <UnbuiltValidationWidget id="Input_PhoneNumber" />
                  <UnbuiltValidationWidget id="Dropdown_Country" />
                  <UnbuiltValidationWidget id="Input_Locality" />
                </>
              )}
              <div data-container="">
                <TextArea_WithCounter id="$b12" inInitialLength={0}>
                  <label className="mandatory OSFillParent" data-label="" htmlFor="TextArea_Message">
                    Message
                  </label>
                  <TextArea_Message
                    disabled={isSubmiting}
                    placeholder={init.messagePrompt}
                    value={contactUsForm.Message}
                    onChange={(message) => {
                      const form = { ...latest.current.contactUsForm, Message: message };
                      latest.current.contactUsForm = form;
                      setContactUsForm(form);
                      try {
                        formInputChanged(form);
                      } catch (error) {
                        raiseToFlowHandler(error);
                      }
                    }}
                  />
                </TextArea_WithCounter>
              </div>
              {init.rate_ShowRate && (
                <IconText
                  id="$b13"
                  text="I would like to be contacted about my feedback. "
                  onClicked={() => {
                    // OnClick_UserWantToBeContacted (P:2314-2337)
                    setRate_UserWantToBeContacted((want) => !want);
                  }}
                >
                  <Icon
                    id="$b14"
                    inIconId={
                      rate_UserWantToBeContacted ? UBT_Icons2_Local.Checkbox : UBT_Icons2_Local.CheckboxOutlineBlank
                    }
                    inColorId={rate_UserWantToBeContacted ? '' : UBT_Color.Neutral5}
                  />
                </IconText>
              )}
            </OSForm>
          </SkeletonSection>
        </DirectoryDetailSection>
      </div>
      <FixedFooter id="$b15" expectedFooterHeight={FOOTER_HEIGHT} contentContainerId="Content" useBottomBar={false}>
        <CustomContainer
          id="$b16"
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { GeneralSizeId: UBT_Size.Base },
            ShadowId: UBT_Shadow.ExtraSmallTop,
          }}
        >
          <ButtonLoading id="$b17" isLoading={isSubmiting}>
            <Button
              id="$b18"
              buttonText="Send"
              isDisabled={!isFormFilled || isLoadingMainData}
              onButtonOnClick={() => {
                void Promise.resolve().then(onClick_SubmitForm);
              }}
            />
          </ButtonLoading>
        </CustomContainer>
      </FixedFooter>
      <div data-container="" id="PopUps">
        <Dialog_Information
          id="SubmittedConfirmation"
          scope="b19"
          placeholderHeader={<span data-expression="">Thank you</span>}
          placeholderBody={
            <>
              <div className="text-align-center" data-container="">
                <CircleButton_WithLabel
                  id="$b20"
                  sizeId={UBT_AvatarSize.Base_52}
                  backgroundColorId={UBT_Color_Local.GreenLightest}
                  icon={
                    <Icon
                      id="$b21"
                      inSizeId={UBT_IconsSize.Display_36}
                      inColorId={UBT_Color_Local.GreenDarker}
                      inIconId={UBT_Icons2_Local.Mail}
                    />
                  }
                />
              </div>
              <CustomContainer
                id="$b22"
                options={{ MarginSize: { TopSizeId: UBT_Size.Base }, TextOptions: { FontSize: UBT_FontSize.Small } }}
              >
                <span data-expression="">
                  Your message has been sent. A member from our Customer Care Team will be in touch soon.
                </span>
              </CustomContainer>
            </>
          }
          placeholderButtonLabel="Close"
        />
        {isAnyFilled && (
          <Dialog_Navigation
            id="$b23"
            onEventOnBackNavigation={onBackNavigation_ConfirmDiscard}
            placeholderHeader={<span data-expression="">Delete message?</span>}
            placeholderBody={<span data-expression="">Are you sure you want to delete this message?</span>}
          />
        )}
        <ContactPopupByPhone
          id="$b24"
          inCallPopupData={callPopupData}
          inImageSizeId={UBT_ImageSize.Auto}
          onEventCancel={handler_CallPopup_Cancel}
          onEventCall={handler_CallPopup_Cancel}
        />
      </div>
    </>
  );

  return (
    <ValidationServiceProvider service={validation}>
      <Layout_DetailPage
        id="$b1"
        inExtendedClass="bottom-padding-base-button"
        inAlignTitleLeft
        placeholderHeaderTitle={<span data-expression="">{inputs.In_ContactSubjectTitle}</span>}
        content={content}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b25" inIgnorePolicy={init.ignorePolices} />}
      />
      {isLogged && (
        <CacheControl_UserInfo_Wrapper
          id="$b26"
          onResult={(userInformation) => {
            void cacheControl_UserInfo_WrapperResult(userInformation);
          }}
        />
      )}
    </ValidationServiceProvider>
  );
}
