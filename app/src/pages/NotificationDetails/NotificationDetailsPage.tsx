import { useMemo, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainPagesUpgradeLayout } from '@/components/layout/MainPagesUpgradeLayout';
import { CircleButton } from '@/components/ui/CircleButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { SanitizedHtml } from '@/components/ui/SanitizedHtml';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import {
  AdaptiveCardsConfig,
  AdaptiveCardViewer,
  getHostConfigByConfigId,
} from '@/components/widgets/AdaptiveCardViewer';
import { messageTitle } from '@/containers/MessageInstance/messageDetailState';
import { MessageInfoType } from '@/containers/MessageInstance/staticEntities';
import { formatDateTime } from '@/lib/osDateTime';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { useNavigateBack } from '@/platform/navigation';
import { useNotificationDetail } from './hooks/useNotificationDetail';
import { readNotificationDetailsInputs } from './inputs';

/** UBTConnect.uBT_Icons2 calendarBusy (migration/knowledge/static-entities-tst.json): not in the shared constants,
    written as the shared Icon block writes its class. */
const UBT_Icons2_CalendarBusy = 'connect-icon-calendar_busy';

/** Options of the three CustomContainers: Neutral0 background, Small padding (Notification_Title ND:271-386,
    Notification_Content ND:404-575, Notification_Date ND:577-640). */
const SECTION_OPTIONS = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Small },
};

/** The default values of GetMessageInstance.Message that the view reads before the first answer. */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** The inline style of the content container (ND:466-473), as its extended property writes it. */
const CONTENT_BORDER_STYLE = {
  borderColor: '#c6c6c6',
  borderStyle: 'solid',
  borderWidth: '2px 0px 0px 0px',
  marginRight: 10,
  marginTop: 10,
  padding: '15px 0px 10px 0px',
} as const;

/** AdaptiveCardViewerOnExecuteAction (ND:1663-1735): its flow is empty; only its Handle Error CommunicationException
    ("Please check your internet connection!") is set, and an empty flow raises nothing. */
const adaptiveCardViewerOnExecuteAction = (): void => undefined;

/** @origin UBTConnect.App_Notifications.NotificationDetails
    One notification (live TST 2026-11-05, UBTConnect.App_Notifications.NotificationDetails.mvc.js = ND:249-700):
    Layout_MainPages_Upgrade (gray background) with the sender as header title (an Expression: the sender target name,
    "Meal Allocation" for LordsDayMeal, or the user name when the message is sent as a user); the title row (IconText
    with a calendar CircleButton that has no handler); a SectionSeparator; Notification_Content with the summary and a
    container with a top border holding the body (nothing for a Sharing message, the AdaptiveCardViewer with the Events
    host config for an adaptive card, else the sanitized HTML); Notification_Date; BottomBarMenu;
    CommonUI_InsideLayout. The view reads GetMessageInstance directly: no Spinner, and IsLoading has no reader. The
    flows are in useNotificationDetail.
    NOTE: ND declares ten more handlers (Handler_NavigateTo_OrbitHostSurvey, _OrbitMilestone, _OrbitEventDetails,
    _AssembleDetail, _ShareObjectDetail, Handler_SetFeedItemId, Handler_SubscriptionDenied,
    Handler_AddAuditAndNavigateTo_EventEmail, _EventDetail, Handler_BackNavigationHandlerBackNavigation; ND:895-1915)
    that no widget of the view calls: there is no BackNavigationHandler block and no button. They are not ported. The
    only event of the view is the AdaptiveCardViewer OnExecuteAction (ND:1663-1700). */
export default function NotificationDetails() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readNotificationDetailsInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const { message } = useNotificationDetail(inputs);
  const hostConfig = useMemo(() => getHostConfigByConfigId(AdaptiveCardsConfig.Events), []);

  // The body (ND:479-553): nothing for a Sharing message; the card for an adaptive card; else the sanitized HTML.
  let body: ReactNode;
  if (message?.messageInfoTypeId === MessageInfoType.Sharing) {
    body = null;
  } else if (message?.isAdaptiveCard === true) {
    body = (
      <div data-container="">
        <AdaptiveCardViewer
          id="$b9"
          prefix="b9"
          inAdaptiveCardJson={message.adaptiveCardContent}
          inHostConfig={hostConfig}
          onExecuteAction={adaptiveCardViewerOnExecuteAction}
        />
      </div>
    );
  } else {
    body = (
      <div
        className="whitespace-normal notification-detail-content"
        data-container=""
        style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
      >
        <SanitizedHtml
          id="$b10"
          value={message?.messageContent ?? ''}
          allowedCssStyles="text-decoration,font-style,margin-left,padding-left"
          allowedTags="img,s,i,em,ul,li,ol,u,blockquote,sup,sub"
          allowedAttributes="src,style"
          resetWhitelist
        />
      </div>
    );
  }

  return (
    <MainPagesUpgradeLayout
      isGrayBackground
      onBack={navigateBack}
      placeholderHeaderTitle={<span data-expression="">{messageTitle(message)}</span>}
      content={
        <>
          <CustomContainer id="Notification_Title" options={SECTION_OPTIONS}>
            <IconText id="$b3" text={message?.title ?? ''} textOptions={{ FontWeight: UBT_FontWeight.SemiBold }}>
              <CircleButton
                id="$b4"
                borderColorId={UBT_Color.Neutral6}
                icon={<Icon id="$b5" inIconId={UBT_Icons2_CalendarBusy} inColorId={UBT_Color.Primary} />}
              />
            </IconText>
          </CustomContainer>
          <SectionSeparator id="$b6" />
          <CustomContainer id="Notification_Content" options={SECTION_OPTIONS}>
            <CustomText id="$b8" inText={message?.summary ?? ''} inTextOptions={{ Color: UBT_Color.Neutral10 }} />
            <div className="margin-top-base" data-container="" style={CONTENT_BORDER_STYLE}>
              {body}
            </div>
          </CustomContainer>
          <CustomContainer id="Notification_Date" options={SECTION_OPTIONS}>
            <CustomText
              id="$b12"
              inText={formatDateTime(message?.dateTimeCreated ?? NULL_DATE_TIME, 'ddd dd/MM/yyyy HH:mm tt')}
              inTextOptions={{ Color: UBT_Color.Neutral5, FontSize: UBT_FontSize.Small }}
            />
          </CustomContainer>
        </>
      }
      bottom={<BottomBar id="$b13" activeItem="" />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b14" />}
    />
  );
}
