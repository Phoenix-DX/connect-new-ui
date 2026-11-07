import { useMemo, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import type { MessageDetail } from '@/api/message';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainPagesUpgradeLayout } from '@/components/layout/MainPagesUpgradeLayout';
import { CircleButton } from '@/components/ui/CircleButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { SanitizedHtml } from '@/components/ui/SanitizedHtml';
import {
  AdaptiveCardsConfig,
  AdaptiveCardViewer,
  getHostConfigByConfigId,
} from '@/components/widgets/AdaptiveCardViewer';
import { MessageInfoType, MessageSenderTarget } from '@/containers/MessageInstance/staticEntities';
import { formatDateTime } from '@/lib/osDateTime';
import { OS_NULL_DATE } from '@/lib/osDateTime';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { useNavigateBack } from '@/platform/navigation';
import { useNotificationDetail } from './hooks/useNotificationDetail';
import { readNotificationDetailsInputs } from './inputs';

/** UBTConnect.uBT_Icons2 orbitText, assemble and calendarBusy (migration/knowledge/static-entities-tst.json): not in
    the shared constants, written as the shared Icon block writes its class. */
const UBT_Icons2 = {
  OrbitText: 'connect-icon-orbit_text',
  Assemble: 'connect-icon-assemble',
  CalendarBusy: 'connect-icon-calendar_busy',
} as const;

/** UBTConnect.messageSenderTarget rRT "12" and communityHub "17" (migration/knowledge/static-entities-tst.json): not
    in the shared MessageSenderTarget constants. */
const SENDER_TARGET_RRT = 12;
const SENDER_TARGET_COMMUNITY_HUB = 17;

/** UBTConnect.uBT_FontWeight light (migration/knowledge/static-entities-tst.json): not in the shared constants. */
const UBT_FONT_WEIGHT_LIGHT = 'light';

/** Options of the three CustomContainers: Neutral0 background, Small padding (Notification_Title_Block ND7:285-301,
    Notification_Content ND7:460-476, Notification_Date ND7:601-617). */
const SECTION_OPTIONS = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Small },
};

/** The null date of the message (the view reads it before the first answer). */
const NULL_DATE_TIME = `${OS_NULL_DATE}T00:00:00`;

/** The header title (Notifications.In_Text, ND7:239-241): Orbit, Rapid Relief Team, Assemble or Community by the
    sender target; else, when the template is sent as a sender, "Meal Allocation" for LordsDayMeal or the sender
    target name; else the user name. Before the first answer the default record gives the user name "". */
function headerTitle(message: MessageDetail | null): string {
  if (message === null) return '';
  switch (message.senderTargetId) {
    case MessageSenderTarget.Orbit:
      return 'Orbit';
    case SENDER_TARGET_RRT:
      return 'Rapid Relief Team';
    case MessageSenderTarget.Assemble:
      return 'Assemble';
    case SENDER_TARGET_COMMUNITY_HUB:
      return 'Community';
    default:
      if (message.sentAs === null) return message.userName;
      return message.senderTargetId === MessageSenderTarget.LordsDayMeal ? 'Meal Allocation' : message.senderTargetName;
  }
}

/** The icon of the title CircleButton (ND7:347-385): orbitText for Orbit, assemble for Assemble, else calendarBusy;
    all in Primary. */
function titleIcon(senderTargetId: number | undefined): ReactNode {
  if (senderTargetId === MessageSenderTarget.Orbit) {
    return <Icon id="$b6" inIconId={UBT_Icons2.OrbitText} inColorId={UBT_Color.Primary} />;
  }
  if (senderTargetId === MessageSenderTarget.Assemble) {
    return <Icon id="$b7" inIconId={UBT_Icons2.Assemble} inColorId={UBT_Color.Primary} />;
  }
  return <Icon id="$b8" inIconId={UBT_Icons2.CalendarBusy} inColorId={UBT_Color.Primary} />;
}

/** @origin UBTConnect.App_Notifications.NotificationDetails
    One notification (live TST, re-capture 2026-11-07, UBTConnect.App_Notifications.NotificationDetails.mvc.js =
    ND7, migration/sources/pretty/UBTConnect.App_Notifications.NotificationDetails.mvc@6445b6d0.js:200-760):
    Layout_MainPages_Upgrade (gray background) with the sender as header title (a CustomText "Notifications" in
    SemiBold, see headerTitle); the Notification_Title container (padding-left-m padding-right-m) with the
    CustomContainer Notification_Title_Block (border-bottom-neutral) holding the IconText (title in SemiBold, summary
    as subtext in Light) with a CircleButton (margin-right-s, no handler) and the sender icon; Notification_Content
    with the ContentDetail container (nothing for a Sharing message, the AdaptiveCardViewer with the Events host
    config for an adaptive card, else the sanitized HTML); Notification_Date; ActionButtonGroup when
    ShowAssembleAction; BottomBarMenu; CommonUI_InsideLayout. The view reads GetMessageInstance directly: no Spinner.
    The flows are in useNotificationDetail.
    The AdaptiveCardViewer OnExecuteAction runs AdaptiveCardViewerOnExecuteAction of the hook (ND7:1990-2100).
    NOTE: ActionButtonGroup (UBTConnect.App_Notifications.ActionButtonGroup, ND7:651-717) is not captured; its markup
    and its events (Handler_ViewOrbitEvent, Handler_NavigateTo_AssembleDetail) wait for a capture of the block (user
    answer for the sync wave of 2026-11-07, option b): the branch renders NotCaptured. */
export default function NotificationDetails() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readNotificationDetailsInputs(params), [params]);
  const navigateBack = useNavigateBack();
  const { message, showAssembleAction, adaptiveCardViewerOnExecuteAction } = useNotificationDetail(inputs);
  const hostConfig = useMemo(() => getHostConfigByConfigId(AdaptiveCardsConfig.Events), []);

  // The body (ND7:494-584): nothing for a Sharing message; the card for an adaptive card; else the sanitized HTML.
  let body: ReactNode;
  if (message?.messageInfoTypeId === MessageInfoType.Sharing) {
    body = null;
  } else if (message?.isAdaptiveCard === true) {
    body = (
      <div data-container="">
        <AdaptiveCardViewer
          id="$b10"
          prefix="b10"
          inAdaptiveCardJson={message.adaptiveCardContent}
          inHostConfig={hostConfig}
          onExecuteAction={adaptiveCardViewerOnExecuteAction}
        />
      </div>
    );
  } else {
    body = (
      <div
        className="notification-detail-content"
        data-container=""
        style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
      >
        <SanitizedHtml
          id="$b11"
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
      placeholderHeaderTitle={
        <CustomText
          id="Notifications"
          inText={headerTitle(message)}
          inTextOptions={{ FontWeight: UBT_FontWeight.SemiBold }}
        />
      }
      content={
        <>
          <div className="padding-left-m padding-right-m" data-container="" id="Notification_Title">
            <CustomContainer
              id="Notification_Title_Block"
              extendedClasses="border-bottom-neutral"
              options={SECTION_OPTIONS}
            >
              <IconText
                id="$b4"
                text={message?.title ?? ''}
                textOptions={{ FontWeight: UBT_FontWeight.SemiBold }}
                inSubtext={message?.summary ?? ''}
                subtextOptions={{ FontWeight: UBT_FONT_WEIGHT_LIGHT }}
              >
                <CircleButton
                  id="$b5"
                  extendedClasses="margin-right-s"
                  borderColorId={UBT_Color.Neutral6}
                  icon={titleIcon(message?.senderTargetId)}
                />
              </IconText>
            </CustomContainer>
          </div>
          <CustomContainer id="Notification_Content" options={SECTION_OPTIONS}>
            <div data-container="" id="ContentDetail">
              {body}
            </div>
          </CustomContainer>
          <CustomContainer id="Notification_Date" options={SECTION_OPTIONS}>
            <CustomText
              id="$b13"
              inText={formatDateTime(message?.dateTimeCreated ?? NULL_DATE_TIME, 'ddd dd/MM/yyyy HH:mm tt')}
              inTextOptions={{ Color: UBT_Color.Neutral5, FontSize: UBT_FontSize.Small }}
            />
          </CustomContainer>
          {showAssembleAction ? <NotCaptured name="ActionButtonGroup (ShowAssembleAction)" /> : null}
        </>
      }
      bottom={<BottomBar id="$b15" activeItem="" />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b16" />}
    />
  );
}
