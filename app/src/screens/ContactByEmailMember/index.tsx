import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { ContactByEmailForm } from '../../shared/UBTConnect/ContactByEmailForm';
import { Connect_Entity, UBT_FontWeight, UBT_Icons2 } from '../../shared/UBTConnect/lib/staticEntities';
import { UBT_LazyImage } from '../../shared/UBTConnect_Utils/UBT_LazyImage';
import { UBT_ImageSize } from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { Columns_Three } from '../../shared/UBTConnectLibrary/Columns_Three';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../shared/UBTConnectLibrary/CustomText';
import { Icon } from '../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../shared/UBTConnectLibrary/IconText';
import { Layout_DetailPage } from '../../shared/UBTConnectLibrary/Layout_DetailPage';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_IconsSize,
  UBT_Size,
} from '../../shared/UBTConnectLibrary/lib/staticEntities';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useNavigateBack } from '@/platform/navigation';
import { readContactByEmailMemberInputs, sendContactMemberEmail } from './api';
import {
  addAuditEventDetailEvent,
  onApplicationEvent_EmailHost,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from './components/actions';
import {
  ApplicationEvents_Directory_EmailHousehold,
  OrbitApplicationEvent_EmailHost,
} from './components/staticEntities';
import type { ContactByEmailForm as ContactByEmailFormRec } from './types';

/** UBTConnect ContactFlow.ContactByEmailMember (p:UBTConnect.ContactFlow.ContactByEmailMember.mvc.js: model :1-228,
    view :230-612, controller :614-860). Layout_DetailPage (title left, not primary) whose title is
    If(In_IsHousehold, "Contact the " + In_HouseholdHeaderName + " household", "Contact Member") (:319-321), with the
    shared ContactByEmailForm ("Add a subject" / "Add a message", IsLoading) whose Placeholder_ContactCard holds the
    contact card (:381-596): CustomContainer (padding x XS) > Columns_Three (expand middle): left the member avatar
    (UBT_LazyImage Base_52 / Square in a container "ubt-object-fit-avatar-img", padding right Base), middle the name
    (CustomText Base / SemiBold) and the locality line (IconText home_pin, Neutral7 / XS, spacing XS), right empty.
    No data action (:640), no OnReady / OnDestroy / OnParametersChanged (:839-842); Placeholder_CommonUI_Inside_Layout
    is empty (:604): no CommonUI, so `useNoCommonUi()` (shell guide). */
export default function ContactByEmailMember() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readContactByEmailMemberInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);
  // ScreenEvent_OnInitialize (:774-809): FirstName = In_ContactName, ContactMember = In_ContactName, EmailTo = In_EmailTo.
  const [form] = useState<ContactByEmailFormRec>(() => ({
    firstName: inputs.In_ContactName,
    contactMember: inputs.In_ContactName,
    emailTo: inputs.In_EmailTo,
    subject: '',
    message: '',
  }));

  /* Handler_SubmitForm (:641-747), on the form's Event_SubmitForm (the form already ran AllowUpcomingNavigation):
     IsLoading = True; Subject, Message into ContactByEmailForm; SendContactMemberEmail; AppManager_GetCachedUserInfo;
     EmailEvent = {EmailTo, NameOfSender = LastName + ", " + FirstName}.
     - In_AuditEventId = OrbitApplicationEvent.EmailHost: OnApplicationEvent_EmailHost(MilestoneId, EventId, EventTitle,
       HostName = In_ContactName, Subject, Message), then the flow ends (:684-704: no message, no navigation).
     - Otherwise: when In_LDMEventDate <> NullDate or In_LDMEventLocality <> "", AddAuditEventDetailEvent(EmailHousehold,
       0, "", date, locality) and EventJSON = JSONSerialize(EmailEvent) (:705-720); then
       zOnApplicationEvent_Wrapper(EmailHousehold, EventJSON), "Your message has been sent." after 500 ms and the
       previous screen (:722-731).
     An exception goes to the ContactFlow handleError (:846-848; Q3 open: raiseToFlowHandler); IsLoading stays True. */
  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    const sent: ContactByEmailFormRec = { ...form, subject: eventSubject, message: eventMessage };
    try {
      await sendContactMemberEmail(sent);
      const user = appManager_GetCachedUserInfo();
      const emailEvent = { EmailTo: sent.emailTo, NameOfSender: `${user.LastName}, ${user.FirstName}` };
      if (inputs.In_AuditEventId === OrbitApplicationEvent_EmailHost) {
        onApplicationEvent_EmailHost({ MilestoneId: inputs.In_OrbitMilestoneId, EventId: inputs.In_OrbitEventId });
        return;
      }
      let eventJSON = '';
      if (inputs.In_LDMEventDate !== '' || inputs.In_LDMEventLocality !== '') {
        addAuditEventDetailEvent(
          ApplicationEvents_Directory_EmailHousehold,
          inputs.In_LDMEventDate,
          inputs.In_LDMEventLocality,
        );
        eventJSON = JSON.stringify(emailEvent);
      }
      zOnApplicationEvent_Wrapper(ApplicationEvents_Directory_EmailHousehold, eventJSON);
      scheduleFeedbackMessageAfterTransition('Your message has been sent.');
      navigateBack();
    } catch (error) {
      raiseToFlowHandler(error);
    }
  };

  const locality =
    inputs.In_ContactLocality +
    (inputs.In_ContactLocality !== '' && inputs.In_ContactCountry !== '' ? ', ' : '') +
    inputs.In_ContactCountry;

  return (
    <Layout_DetailPage
      id="$b1"
      inAlignTitleLeft
      inIsPrimaryColor={false}
      placeholderHeaderTitle={
        <span data-expression="">
          {inputs.In_IsHousehold ? `Contact the ${inputs.In_HouseholdHeaderName} household` : 'Contact Member'}
        </span>
      }
      content={
        <ContactByEmailForm
          id="$b2"
          inMessagePlaceholder="Add a message"
          inSubjectPlaceholder="Add a subject"
          isLoading={isLoading}
          onEventSubmitForm={(subject, message) => {
            void handlerSubmitForm(subject, message);
          }}
        >
          <CustomContainer id="$b3" options={{ PaddingSize: { HorizontalSizeId: UBT_Size.ExtraSmall } }}>
            <Columns_Three
              id="$b4"
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle }}
              left={
                <CustomContainer
                  id="$b5"
                  extendedClasses="ubt-object-fit-avatar-img"
                  options={{ PaddingSize: { RightSizeId: UBT_Size.Base } }}
                >
                  <UBT_LazyImage
                    id="$b6"
                    entityType={inputs.In_EntityType === '' ? Connect_Entity.Member : inputs.In_EntityType}
                    entityId={inputs.In_EntityId}
                    imageSize={{ Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square }}
                    imageURL={inputs.In_AvatarURL}
                  />
                </CustomContainer>
              }
              middle={
                <>
                  <CustomText
                    id="$b7"
                    inTextOptions={{ FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
                    inText={`${inputs.In_ContactName} ${inputs.In_ContactSurname}`}
                  />
                  <IconText
                    id="$b8"
                    text={locality}
                    textOptions={{ Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall }}
                    spacingSize={UBT_Size.ExtraSmall}
                  >
                    <Icon
                      id="$b9"
                      inIconId={UBT_Icons2.HomePIn}
                      inColorId={UBT_Color.Neutral7}
                      inSizeId={UBT_IconsSize.NonStandard_14}
                    />
                  </IconText>
                </>
              }
            />
          </CustomContainer>
        </ContactByEmailForm>
      }
    />
  );
}
