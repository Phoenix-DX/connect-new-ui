/** @origin UBTConnect.ContactFlow.ContactByEmailLDMCoordinator */
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { ContactByEmailForm } from '@/shared/UBTConnect/ContactByEmailForm';
import { UBT_FontWeight } from '@/shared/UBTConnect/lib/staticEntities';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { UBT_Color, UBT_FontSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useNavigateBack } from '@/platform/navigation';
import { readInputs, sendContactLDMCoordinatorEmail } from './api';
import {
  addAuditEventDetailEvent,
  LDMApplicationEvent_MyTimelineCoordinatorEmailed,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from './components/actions';
import type { ContactByEmailForm as ContactByEmailFormRec } from './types';

/** UBTConnect ContactFlow.ContactByEmailLDMCoordinator (runtime-sources/UBTConnect.ContactFlow
    .ContactByEmailLDMCoordinator.mvc.js = S: model :1-126, view :127-454, controller :455-674). Not captured
    (no-capture, user 2026-10-16): built from the compiled code. Layout_DetailPage (primary colour, title left) titled
    "Email", with the shared ContactByEmailForm ("Add a subject" / "Add a message", In_Subject, IsLoading) whose
    Placeholder_ContactCard holds the coordinator header (S :233-418): a centred CustomContainer
    `contact-by-email__header` (Neutral2 background, padding y XS, margin bottom Base) with the avatar image (the
    If(False) false branch, always shown), the name (Neutral10 / Base / Bold) and "LDM Event Coordinator" (Neutral7 /
    XS). No data action, no OnReady; Placeholder_CommonUI_Inside_Layout is empty (S :447): `useNoCommonUi()`. */
export default function ContactByEmailLDMCoordinator() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);
  // ScreenEvent_OnInitialize (S :480-497): FirstName = ContactMember = In_ContactName, EmailTo = In_EmailTo,
  // Subject = In_Subject.
  const [form] = useState<ContactByEmailFormRec>(() => ({
    firstName: inputs.In_ContactName,
    contactMember: inputs.In_ContactName,
    emailTo: inputs.In_EmailTo,
    subject: inputs.In_Subject,
    message: '',
  }));

  /* Handler_SubmitForm (S :499-560), on the form's Event_SubmitForm (the form already ran AllowUpcomingNavigation):
     IsLoading = True; Subject, Message into ContactByEmailForm; SendContactLDMCoordinatorEmail;
     AppManager_GetCachedUserInfo; EmailEvent = {EmailTo, NameOfSender = LastName + ", " + FirstName};
     AddAuditEventDetailEvent(MyTimelineCoordinatorEmailed, 0, "", In_EventDate, In_EventLocality);
     zOnApplicationEvent_Wrapper(MyTimelineCoordinatorEmailed, JSON); "Your message has been sent." after 500 ms; the
     previous screen. An exception goes to the ContactFlow handler (S :650-652); IsLoading stays True. */
  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    const sent: ContactByEmailFormRec = { ...form, subject: eventSubject, message: eventMessage };
    try {
      await sendContactLDMCoordinatorEmail(sent);
      const user = appManager_GetCachedUserInfo();
      const emailEvent = { EmailTo: sent.emailTo, NameOfSender: `${user.LastName}, ${user.FirstName}` };
      addAuditEventDetailEvent(
        LDMApplicationEvent_MyTimelineCoordinatorEmailed,
        inputs.In_EventDate,
        inputs.In_EventLocality,
      );
      zOnApplicationEvent_Wrapper(LDMApplicationEvent_MyTimelineCoordinatorEmailed, JSON.stringify(emailEvent));
      scheduleFeedbackMessageAfterTransition('Your message has been sent.');
      navigateBack();
    } catch (error) {
      raiseToFlowHandler(error);
    }
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
          inSubjectPlaceholder="Add a subject"
          inSubject={inputs.In_Subject}
          isLoading={isLoading}
          onEventSubmitForm={(subject, message) => {
            void handlerSubmitForm(subject, message);
          }}
        >
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
                <img className="contact-by-email__header__img" data-image="" src={inputs.In_AvatarURL || undefined} />
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
                <span data-expression="">LDM Event Coordinator</span>
              </CustomContainer>
            </CustomContainer>
          </div>
        </ContactByEmailForm>
      }
    />
  );
}
