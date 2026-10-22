import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import { log } from '@/platform/log/log';
import { osImage } from '@/legacy/os/os-assets';
import { ContactByEmailForm } from '../../shared/UBTConnect/ContactByEmailForm';
import { UBT_FontWeight } from '../../shared/UBTConnect/lib/staticEntities';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { Layout_DetailPage } from '../../shared/UBTConnectLibrary/Layout_DetailPage';
import { UBT_Color, UBT_FontSize, UBT_Size } from '../../shared/UBTConnectLibrary/lib/staticEntities';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { showFeedbackMessage } from '@/platform/feedback';
import { useNavigateBack } from '@/platform/navigation';
import { readContactByEmailOneSchoolGlobalInputs, sendContactMemberEmail } from './api';
import { ApplicationEvents_Directory_EmailHousehold } from './components/staticEntities';
import type { ContactByEmailFormRecord } from './types';

/** ScheduleFeedbackMessageAfterTransition JS node of Handler_SubmitForm (p:…mvc.js :599-604): the platform
    FeedbackMessageShow(Message, 1) after 500 ms, so it shows on the previous screen. The timer is not tied to this
    screen (window.setTimeout in the original). */
function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

/** zOnApplicationEvent_Wrapper (Connect2_LegacyShared.controller.js:7565-7590): GetAppEventName then an Azure Insights
    custom event. Telemetry is not wired in the mock phase (app-shell.spec U17), so it goes to the log. */
function zOnApplicationEvent_Wrapper(eventId: string, attachmentJSON: string): void {
  log.info('ApplicationEvent EmailHousehold', { EventId: eventId, AttachmentJSON: attachmentJSON });
}

/** UBTConnect ContactFlow.ContactByEmailOneSchoolGlobal (p:UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc.js:
    model :1-82, view :143-406, controller :412-597). Layout_DetailPage (primary, title "Email" on the left, no CommonUI)
    with ContactByEmailForm (subject as a DynamicTextArea, placeholders "Add a subject" / "Add a message") whose
    Placeholder_ContactCard holds the OneSchool Global logo, In_ContactName and an empty line. Send runs
    Handler_SubmitForm: SendContactMemberEmail, the EmailHousehold application event, the success message and back. */
export default function ContactByEmailOneSchoolGlobal() {
  // Placeholder_CommonUI_Inside_Layout is empty (view :397): no CommonUI on this screen (shell guide).
  useNoCommonUi();
  const navigateBack = useNavigateBack();
  const [params] = useSearchParams();
  const inputs = readContactByEmailOneSchoolGlobalInputs(params);
  const [isLoading, setIsLoading] = useState(false);
  /* ScreenEvent_OnInitialize (controller :440-469): ContactByEmailForm.ContactMember = In_ContactName,
     .EmailTo = In_EmailTo, .FirstName = In_ContactName. The record is never rendered, so it is kept in a ref. */
  const contactByEmailForm = useRef<ContactByEmailFormRecord | null>(null);
  contactByEmailForm.current ??= {
    contactMember: inputs.In_ContactName,
    emailTo: inputs.In_EmailTo,
    firstName: inputs.In_ContactName,
    subject: '',
    message: '',
  };

  /* Handler_SubmitForm(Event_Subject, Event_Message) (controller :471-529), on ContactByEmailForm Event_SubmitForm (the
     block already ran AllowUpcomingNavigation): IsLoading = True; .Subject / .Message = the event values;
     SendContactMemberEmail; zOnApplicationEvent_Wrapper(EmailHousehold, ""); the delayed message "Your message has been
     sent."; back to the previous screen. No exception handler: on an error IsLoading stays True and the error goes to
     the flow handler (:518-528, 586-588; Q2 → A). */
  const handler_SubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    const form: ContactByEmailFormRecord = {
      ...(contactByEmailForm.current as ContactByEmailFormRecord),
      subject: eventSubject,
      message: eventMessage,
    };
    contactByEmailForm.current = form;
    try {
      await sendContactMemberEmail(form);
    } catch (error) {
      raiseToFlowHandler(error);
      return;
    }
    zOnApplicationEvent_Wrapper(ApplicationEvents_Directory_EmailHousehold, '');
    scheduleFeedbackMessageAfterTransition('Your message has been sent.');
    navigateBack();
  };

  return (
    <Layout_DetailPage
      id="$b1"
      inIsPrimaryColor
      inAlignTitleLeft
      placeholderHeaderTitle={<span data-expression="">Email</span>}
      content={
        <ContactByEmailForm
          id="$b2"
          inMessagePlaceholder="Add a message"
          inSubject=""
          inSubjectPlaceholder="Add a subject"
          isLoading={isLoading}
          inUseDynamicTextAreaSubject
          onEventSubmitForm={(subject, message) => {
            void handler_SubmitForm(subject, message);
          }}
        >
          {/* Placeholder_ContactCard (view :226-392). */}
          <div className="text-align-center" data-container="">
            <CustomContainer
              id="$b3"
              extendedClasses="contact-by-email__header"
              options={{
                Background: { BackgroundColor: UBT_Color.Neutral2 },
                PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall },
                MarginSize: { BottomSizeId: UBT_Size.Base },
              }}
            >
              <div data-container="">
                <img
                  className="contact-by-email__header__img"
                  data-image=""
                  src={osImage('img/UBTConnectLibrary.OneSchoolGlobal.svg')}
                />
              </div>
              <CustomContainer
                id="$b4"
                options={{
                  PaddingSize: { TopSizeId: UBT_Size.ExtraSmall },
                  TextOptions: {
                    Color: UBT_Color.Neutral10,
                    FontSize: UBT_FontSize.Base,
                    FontWeight: UBT_FontWeight.Bold,
                  },
                }}
              >
                <span data-expression="">{inputs.In_ContactName}</span>
              </CustomContainer>
              <CustomContainer
                id="$b5"
                options={{
                  PaddingSize: { TopSizeId: UBT_Size.ExtraSmall },
                  TextOptions: { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall },
                }}
              >
                <span data-expression=""> </span>
              </CustomContainer>
            </CustomContainer>
          </div>
        </ContactByEmailForm>
      }
    />
  );
}
