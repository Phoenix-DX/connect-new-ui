import { useEffect } from 'react';
import type { ExternalAppPopUpInfo } from '@/api/service';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButton } from '@/components/ui/CircleButton';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_AlignItems,
  UBT_AvatarSize,
  UBT_Color,
  UBT_Display,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_JustifyContent,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { UBT_FlexDirection, UBT_Icons2 as UBT_Icons_Connect } from '@/lib/ubtConnect/staticEntities';
import { UBT_IconSize } from '@/lib/ubtConnectUtils/staticEntities';
import { ConfirmDialog } from '@/components/ui/Dialog';

export interface Dialog_GoExternalAppProps {
  /** Block instance id (FeedBlock_Services: `b5-$b12`). */
  id: string;
  inExtendedClass?: string;
  externalAppPopUpInfo: ExternalAppPopUpInfo;
  /** Event OnPopUpReady(PopUpId). */
  onOnPopUpReady?: (popUpId: string) => void;
  /** GoToExternalApp: the confirm button (goToExternalApp of the page hooks). */
  onGoToExternalApp?: () => void;
}

/** The dialog that asks before HomeFeed opens an external app: "Move to <app>", the icon of the app, the question,
    and the buttons "Continue to <app>" and "Cancel". The closed markup is captured (dom/default.html). The open state is
    not captured: its tree follows the compiled view (Dialog_GoExternalApp.mvc.js:246-560; Home Q2 (a)), with the
    inline `text-align: center` container of the icon and the flex row CustomContainer of the confirm label.
    @origin UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp */
export function Dialog_GoExternalApp({
  id,
  inExtendedClass = '',
  externalAppPopUpInfo: info,
  onOnPopUpReady,
  onGoToExternalApp,
}: Dialog_GoExternalAppProps) {
  const scope = id.replace('$', '');
  const widgetId = `${scope}-PopUp`;

  // OnReady: Trigger OnPopUpReady(PopUp.Id)
  useEffect(() => {
    onOnPopUpReady?.(widgetId);
  }, [widgetId, onOnPopUpReady]);

  const isSvg = info.iconId.includes('SVG_');
  return (
    <OSBlock name="CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp" id={id}>
      <div
        className={`subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted ${inExtendedClass}`.trimEnd()}
        data-container=""
      >
        <ConfirmDialog
          widgetId={widgetId}
          scope={`${scope}-b1`}
          header={
            <div className="text-align-center" data-container="">
              <CustomText
                inText={`Move to ${info.appName}`}
                inTextOptions={{ FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
                inPaddingOptions={{ BottomSizeId: UBT_Size.Small }}
              />
            </div>
          }
          body={
            <>
              <CustomContainer options={{ PaddingSize: { GeneralSizeId: UBT_Size.Base } }}>
                <div data-container="" style={{ textAlign: 'center' }}>
                  {info.iconId !== '' &&
                    (isSvg ? (
                      <Icon inIconId={info.iconId} inSizeId={UBT_IconSize.NonStandard_64} />
                    ) : (
                      <CircleButton
                        backgroundColorId={UBT_Color.Primary}
                        sizeId={UBT_AvatarSize.Base_52}
                        icon={
                          <Icon
                            inIconId={info.iconId}
                            inSizeId={UBT_IconSize.NonStandard_32}
                            inColorId={UBT_Color.Neutral0}
                          />
                        }
                      />
                    ))}
                </div>
              </CustomContainer>
              <CustomContainer
                options={{
                  MarginSize: { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Base },
                  TextOptions: { Color: UBT_Color.Neutral10 },
                }}
              >
                <div data-container="">
                  <span data-expression="">
                    {`You’re about to leave this app and open ${info.appName}. Are you sure you want to continue?`}
                  </span>
                </div>
              </CustomContainer>
            </>
          }
          confirmLabel={
            <CustomContainer
              options={{
                DisplayOptions: {
                  Display: UBT_Display.Flex,
                  AlignItems: UBT_AlignItems.Center,
                  JustifyContent: UBT_JustifyContent.Center,
                  FlexDirection: UBT_FlexDirection.Row,
                },
              }}
            >
              <div data-container="">
                <CustomText
                  noWrap
                  inText={`Continue to ${info.appName}`}
                  inTextOptions={{
                    Color: UBT_Color.Neutral0,
                    FontSize: UBT_FontSize.Small,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                />
              </div>
              <div className="margin-left-s" data-container="">
                <Icon
                  inIconId={UBT_Icons_Connect.OpenNew}
                  inSizeId={UBT_IconSize.NonStandard_16}
                  inColorId={UBT_Color.Neutral0}
                />
              </div>
            </CustomContainer>
          }
          dismissLabel="Cancel"
          onConfirmed={onGoToExternalApp}
        />
      </div>
    </OSBlock>
  );
}
