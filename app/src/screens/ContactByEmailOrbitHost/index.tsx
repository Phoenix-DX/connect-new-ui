import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { ContactByEmailForm } from '@/shared/UBTConnect/ContactByEmailForm';
import { Connect_Entity, UBT_FontWeight, UBT_Icons2 } from '@/shared/UBTConnect/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { UBT_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_IconsSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { showFeedbackMessage } from '@/platform/feedback';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useNavigateBack } from '@/platform/navigation';
import { readInputs, sendContactEmail } from './api';

/** ScheduleFeedbackMessageAfterTransition JS node (S :772-779): after 500 ms,
    `$public.FeedbackMessage.showFeedbackMessage(Message, 1)` (success). */
function scheduleFeedbackMessageAfterTransition(message: string): void {
  window.setTimeout(() => {
    showFeedbackMessage(message, 1);
  }, 500);
}

/** UBTConnect ContactFlow.ContactByEmailOrbitHost (S = migration/screens/ContactByEmailOrbitHost/analysis/sources/
    UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc.js, extracted from capture/survey-UBTConnect.json: model :1-183,
    view :239-560, controller :563-780). Not captured (no-capture, user 2026-10-16): built from the compiled code, with
    the markup of the same blocks as ContactByEmailMember. Layout_DetailPage (not primary, title left) titled "Contact
    the <In_Surname> household"; the shared ContactByEmailForm ("Add a subject" / "Add a message", dynamic subject text
    area, IsLoading; no In_Subject: the subject starts empty) whose Placeholder_ContactCard holds the host card
    (S :322-550): CustomContainer (padding x XS) › Columns_Three (expand middle): left the avatar (UBT_LazyImage of
    In_EntityType, Member when "", In_EntityId, In_AvatarURL, Base_52 / Square, in a container
    "ubt-object-fit-avatar-img" with padding right Base), middle In_HostName (Base / SemiBold) and the locality line
    (IconText home_pin, Neutral7 / XS, spacing XS: In_ContactLocality [+ ", " when both] + In_ContactCountry), right
    empty. No data action, no OnReady; Placeholder_CommonUI_Inside_Layout is empty (S :553): `useNoCommonUi()`. */
export default function ContactByEmailOrbitHost() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const [isLoading, setIsLoading] = useState(false);
  // ScreenEvent_OnInitialize (S :691-705): ContactByEmailForm.EmailTo = In_HostEmail; the form record is not sent
  // (Handler_SubmitForm passes its own values), so nothing else reads it.

  /* Handler_SubmitForm (S :610-690), on the form's Event_SubmitForm: IsLoading = True; Subject and Message into the
     form; SendContactEmail(False, 0, "", 0, In_Subject, Event_Subject, Event_Message, EmailInfo); "Your message has
     been sent." after 500 ms; the previous screen. No audit event. An exception goes to the ContactFlow handler;
     IsLoading stays True. */
  const handlerSubmitForm = async (eventSubject: string, eventMessage: string) => {
    setIsLoading(true);
    try {
      await sendContactEmail(inputs, eventSubject, eventMessage);
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
      placeholderHeaderTitle={<span data-expression="">{`Contact the ${inputs.In_Surname} household`}</span>}
      content={
        <ContactByEmailForm
          id="$b2"
          inSubjectPlaceholder="Add a subject"
          inUseDynamicTextAreaSubject
          inMessagePlaceholder="Add a message"
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
                    inText={inputs.In_HostName}
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
