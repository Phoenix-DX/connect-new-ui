import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { DetailLayout } from '@/components/layout';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { ValidationServiceProvider } from '@/components/ui/os/OSValidation';
import { useNavigateBack } from '@/platform/navigation';
import { UserInfoCache } from '@/platform/session/UserInfoCache';
import { NavigationDialog } from '@/components/ui/Dialog';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import { UBT_ImageSize } from '@/lib/ubtConnectLibrary/staticEntities';
import { ContactUsDetailsFooter } from './components/ContactUsDetailsFooter';
import { ContactUsDetailsHeader } from './components/ContactUsDetailsHeader';
import { ContactUsMessageForm } from './components/ContactUsMessageForm';
import { SubmittedConfirmationDialog } from './components/SubmittedConfirmationDialog';
import { useContactUsDetails } from './hooks/useContactUsDetails';
import { readContactUsDetailsInputs } from './inputs';

/** The id of the content container, which the fixed footer pads. */
const CONTENT_CONTAINER_ID = 'Content';

/** @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails
    The contact form of one Contact Us subject: the detail layout (title on the left) with the subject, its
    description and the Support Team call link, the message section and the fixed Send button. The popups: the
    thank-you dialog after sending, the leave confirmation while a message is typed, and the call popup. Signed in,
    CacheControl_UserInfo_Wrapper gives the user's details. The flows are in useContactUsDetails. */
export default function ContactUsDetails() {
  const [params] = useSearchParams();
  const [inputs] = useState(() => readContactUsDetailsInputs(params));
  const navigateBack = useNavigateBack();
  const {
    validation,
    state,
    isFeedbackSubject,
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
  } = useContactUsDetails(inputs);

  const content = (
    <>
      {/* The FixedFooter adds its class and the footer height to this container. */}
      <div data-container="" id={CONTENT_CONTAINER_ID}>
        <ContactUsDetailsHeader
          label={inputs.In_ListMenuOptionLabel}
          description={state.description}
          showSupportTeamCall={state.isLogged && state.countryPhone !== ''}
          onSupportTeam={onSupportTeam}
        />
        <SectionSeparator id="$b6" />
        <ContactUsMessageForm
          isLogged={state.isLogged}
          isFeedbackSubject={isFeedbackSubject}
          showRate={state.showRate}
          selectedRate={state.selectedRate}
          isLoading={state.isLoadingMainData}
          isSubmiting={state.isSubmiting}
          form={state.contactUsForm}
          countries={state.countries}
          messagePrompt={state.messagePrompt}
          wantToBeContacted={state.userWantToBeContacted}
          onMessageChange={onMessageChange}
          onFieldChange={onFieldChange}
          onCountryVariableChange={onCountryVariableChange}
          onCountryChange={onCountryChange}
          onRateSelected={onRateSelected}
          onWantToBeContactedToggle={onWantToBeContactedToggle}
        />
      </div>
      <ContactUsDetailsFooter
        contentContainerId={CONTENT_CONTAINER_ID}
        isSubmiting={state.isSubmiting}
        isDisabled={!state.isFormFilled || state.isLoadingMainData}
        onSend={onSend}
      />
      <div data-container="" id="PopUps">
        <SubmittedConfirmationDialog />
        {state.isAnyFilled && (
          <NavigationDialog
            variant="connect"
            id="$b23"
            onNavigation={onBackNavigation}
            header={<span data-expression="">Delete message?</span>}
            body={<span data-expression="">Are you sure you want to delete this message?</span>}
          />
        )}
        <ContactPopupByPhone
          id="$b24"
          inCallPopupData={state.callPopupData}
          inImageSizeId={UBT_ImageSize.Auto}
          onEventCancel={onCallPopupClose}
          onEventCall={onCallPopupClose}
        />
      </div>
    </>
  );

  return (
    <ValidationServiceProvider service={validation}>
      <DetailLayout
        id="$b1"
        extendedClass="bottom-padding-base-button"
        alignTitleLeft
        onBack={navigateBack}
        headerTitle={<span data-expression="">{inputs.In_ContactSubjectTitle}</span>}
        content={content}
        commonUI={<CommonUiLayout id="$b25" inIgnorePolicy={state.ignorePolices} />}
      />
      {state.isLogged && <UserInfoCache id="$b26" onResult={onUserInformation} />}
    </ValidationServiceProvider>
  );
}
