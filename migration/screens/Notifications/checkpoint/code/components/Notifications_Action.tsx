/** @origin UBTConnect.App_Notifications.Notifications_Action */
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { UBT_Icons2_Notifications } from './staticEntities';

export interface Notifications_ActionProps {
  id?: string;
  haveFiltersApplied?: boolean;
  bottomSheetId?: string;
  isLoaded?: boolean;
  showSubscriptionOnClick?: boolean;
  /** Event OnlyShowUnread(OnlyShowUnread): Switch_IsOnlyShowUnReadOnChange (TST publish of 2026-10-27). */
  onOnlyShowUnread?: (onlyShowUnread: boolean) => void;
}

/** UBTConnect.App_Notifications.Notifications_Action (p:…Notifications_Action.mvc.js view :180-534): Sort row (tune
    icon, "Sort", expand_more) and the "Only show unread" switch (IsOnlyShowUnRead; OnChange raises OnlyShowUnread), each in a
    SkeletonSection loading while not isLoaded, with the red filter dot when HaveFiltersApplied. IconClick
    (controller :554-610): isLoaded → ShowSubscriptionOnClick ? App_Subscription_ShowUpgradePopUp : BottomSheetOpen. */
export function Notifications_Action({
  id,
  haveFiltersApplied = false,
  bottomSheetId = '',
  isLoaded = false,
  showSubscriptionOnClick = false,
  onOnlyShowUnread,
}: Notifications_ActionProps) {
  const [isOnlyShowUnRead, setIsOnlyShowUnRead] = useState(false);
  const iconClick = () => {
    if (!isLoaded) return;
    if (showSubscriptionOnClick) void showUpgradePopUp();
    else bottomSheetOpen(bottomSheetId);
  };
  const filterDot = haveFiltersApplied && (
    <Icon
      inExtendedClasses="header-filter-enabled"
      inIconId={UBT_Icons2.ErrorFill}
      inSizeId={UBT_IconsSize.NonStandard_14}
      inColorId={UBT_Color.Red}
    />
  );
  return (
    <OSBlock name="App_Notifications.Notifications_Action" id={id}>
      <CustomContainer
        id="b11-$b1"
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small },
          MarginSize: { TopSizeId: UBT_Size.Base },
        }}
      >
        <ColumnsTwo
          id="b11-$b2"
          columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
          left={
            <Skeleton id="b11-$b3" isLoading={!isLoaded}>
              {filterDot}
              <div className="display-flex" data-container="">
                <IconText id="b11-$b5" text="Sort" textOptions={{ Color: UBT_Color.Primary }} onClicked={iconClick}>
                  <Icon
                    id="b11-$b6"
                    inIconId={UBT_Icons2.Tune}
                    inSizeId={UBT_IconsSize.Base_24}
                    inColorId={UBT_Color.Primary}
                    onClick={iconClick}
                  />
                </IconText>
                <Icon
                  id="b11-$b7"
                  inSizeId={UBT_IconsSize.Base_24}
                  inIconId={UBT_Icons2_Notifications.ExpandMore}
                  inColorId={UBT_Color.Primary}
                  onClick={iconClick}
                />
              </div>
            </Skeleton>
          }
          right={
            <Skeleton id="b11-$b8" isLoading={!isLoaded}>
              {filterDot}
              <div className="display-flex" data-container="">
                <label className="margin-right-s OSFillParent" data-label="">
                  Only show unread
                </label>
                <span>
                  <input
                    checked={isOnlyShowUnRead}
                    className="switch"
                    data-switch=""
                    id="b11-Switch_IsOnlyShowUnRead"
                    type="checkbox"
                    onChange={(e) => {
                      setIsOnlyShowUnRead(e.target.checked);
                      onOnlyShowUnread?.(e.target.checked);
                    }}
                  />
                </span>
              </div>
            </Skeleton>
          }
        />
      </CustomContainer>
    </OSBlock>
  );
}
