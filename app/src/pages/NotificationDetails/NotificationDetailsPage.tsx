import { useSearchParams } from 'react-router';
import { EMPTY_NOTIFICATION_DETAIL, useNotificationDetailQuery } from '@/api/notification';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { MainPagesUpgradeLayout } from '@/components/layout/MainPagesUpgradeLayout';
import { CircleButton } from '@/components/ui/CircleButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import { formatDateTime } from '@/lib/osDateTime';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { useNavigateBack } from '@/platform/navigation';
import { readNotificationDetailsInputs } from './inputs';

/** UBTConnect.uBT_Icons2 calendarBusy (migration/knowledge/static-entities-tst.json): not in the shared constants,
    written as the shared Icon block writes its class. */
const UBT_Icons2_CalendarBusy = 'connect-icon-calendar_busy';

/** Options of the three CustomContainers: Neutral0 background, Small padding (NotificationDetails.mvc.js:192-207). */
const SECTION_OPTIONS = {
  Background: { BackgroundColor: UBT_Color.Neutral0 },
  PaddingSize: { GeneralSizeId: UBT_Size.Small },
};

/** @origin UBTConnect.App_Notifications.NotificationDetails
    One notification: Layout_MainPages_Upgrade (gray background, title "Notifications") with the title row (IconText
    with a calendar CircleButton), a SectionSeparator, the summary and the creation date, then BottomBarMenu and
    CommonUI_InsideLayout (NotificationDetails.mvc.js:164-508). The data action FetchMessageInstance runs at the start
    (:538-554); until it answers, the view shows its empty output, as TST (dom/loading.html). */
export default function NotificationDetails() {
  const [params] = useSearchParams();
  const { MessageInstanceId } = readNotificationDetailsInputs(params);
  const navigateBack = useNavigateBack();
  const detail = useNotificationDetailQuery(MessageInstanceId).data ?? EMPTY_NOTIFICATION_DETAIL;

  return (
    <MainPagesUpgradeLayout
      isGrayBackground
      onBack={navigateBack}
      placeholderHeaderTitle="Notifications"
      content={
        <>
          <CustomContainer id="Notification_Title" options={SECTION_OPTIONS}>
            <IconText id="$b3" text={detail.title} textOptions={{ FontWeight: UBT_FontWeight.SemiBold }}>
              <CircleButton
                id="$b4"
                borderColorId={UBT_Color.Neutral6}
                icon={<Icon id="$b5" inIconId={UBT_Icons2_CalendarBusy} inColorId={UBT_Color.Primary} />}
              />
            </IconText>
          </CustomContainer>
          <SectionSeparator id="$b6" />
          <CustomContainer id="Notification_Content" options={SECTION_OPTIONS}>
            <CustomText id="$b8" inText={detail.summary} inTextOptions={{ Color: UBT_Color.Neutral10 }} />
          </CustomContainer>
          <CustomContainer id="Notification_Date" options={SECTION_OPTIONS}>
            <CustomText
              id="$b10"
              inText={formatDateTime(detail.dateTimeCreated, 'ddd dd/MM/yyyy HH:mm tt')}
              inTextOptions={{ Color: UBT_Color.Neutral5, FontSize: UBT_FontSize.Small }}
            />
          </CustomContainer>
        </>
      }
      bottom={<BottomBar id="$b11" activeItem="" />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b12" />}
    />
  );
}
