/** @origin UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk */
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { osImage } from '@/legacy/os/os-assets';
import { ContactByEmailForm } from '@/shared/UBTConnect/ContactByEmailForm';
import { UBT_FontWeight } from '@/shared/UBTConnect/lib/staticEntities';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { UBT_Color, UBT_FontSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useNavigateBack } from '@/platform/navigation';
import { readInputs, sendContactEmail } from './api';
import { onApplicationEvent_ContactHelpdesk, scheduleFeedbackMessageAfterTransition } from './components/actions';

/** Images.Orbit_Logo of Connect2_OrbitMobile_MUI (S :330-337; dom/default.html:48). */
const ORBIT_LOGO = 'img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg';

/** UBTConnect ContactFlow.ContactByEmailOrbitHelpdesk (S = migration/screens/ContactByEmailOrbitHelpdesk/analysis/
    sources/pretty/UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc.js: model :1-156, view :213-434, controller
    :435-670). Layout_DetailPage (primary colour, title left) titled "Email", with the shared ContactByEmailForm ("Add a
    subject" / "Add a message", In_Subject, IsLoading, dynamic subject text area) whose Placeholder_ContactCard holds the
    helpdesk header (S :270-405): a centred CustomContainer `contact-by-email__header` (Neutral2 background, padding y
    XS, margin bottom Base) with the Orbit logo and "Orbit Helpdesk" (Neutral10 / Base / Bold). No data action, no
    OnReady; Placeholder_CommonUI_Inside_Layout is empty (S :424): `useNoCommonUi()`. */
export default function ContactByEmailOrbitHelpdesk() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);
  // ScreenEvent_OnInitialize (S :483-515): FirstName, ContactMember, EmailTo = "", Subject = In_Subject. The form
  // record is only read by Handler_SubmitForm, which overwrites Subject and Message first.

  /* Handler_SubmitForm (S :517-600), on the form's Event_SubmitForm: IsLoading = True; Subject and Message into the
     form; AppManager_GetCachedUserInfo; SendContactEmail(True, In_EventId, In_MilestoneId, In_TargetMemberId, Subject,
     "", Message, {EventName, SenderFullName = FirstName + " " + LastName, HostName, HostEmail, MilestoneName =
     In_MilestoneTitle, FormattedDateTime}); OnApplicationEvent_ContactHelpdesk; "Your message has been sent." after
     500 ms; the previous screen. An exception goes to the ContactFlow handler; IsLoading stays True. */
  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    try {
      const user = appManager_GetCachedUserInfo();
      await sendContactEmail({
        isContactHelpdesk: true,
        eventId: inputs.In_EventId,
        milestoneId: inputs.In_MilestoneId,
        targetMemberId: inputs.In_TargetMemberId,
        subject: eventSubject,
        userSubject: '',
        message: eventMessage,
        emailInfo: {
          EventName: inputs.In_EventName,
          SenderFullName: `${user.FirstName} ${user.LastName}`,
          HostName: inputs.In_HostName,
          HostEmail: inputs.In_HostEmail,
          MilestoneName: inputs.In_MilestoneTitle,
          FormattedDateTime: inputs.In_FormattedDateTime,
        },
      });
      onApplicationEvent_ContactHelpdesk(inputs.In_EventId);
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
          inUseDynamicTextAreaSubject
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
                <img className="contact-by-email__header__img" data-image="" src={osImage(ORBIT_LOGO)} />
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
                <span data-expression="">Orbit Helpdesk</span>
              </CustomContainer>
            </CustomContainer>
          </div>
        </ContactByEmailForm>
      }
    />
  );
}
