/** @origin UBTConnect.Directory_Photobook.Photobook_Options_Right */
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { RadioButton, RadioGroup } from '@/components/ui/os/OSRadioGroup';
import { bottomSheetClose, bottomSheetOpen } from '@/components/ui/lib/actions';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { Photobook_Speed } from '@/lib/ubtConnect/staticEntities';
import { UBT_Color, UBT_Display, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { ROUND_BUTTON } from './Photobook_Options_Left';
import {
  UBT_AlignItems,
  UBT_FlexDirection,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_JustifyContent,
  UBT_Visibility,
} from './staticEntities';

export interface Photobook_Options_RightProps {
  id: string;
  /** Photobook_Speed identifier (milliseconds). */
  inCurrentSpeed: number;
  inMainContainerClass: string;
  inIsShow: boolean;
  onClosed?: () => void;
  onClosePhotobook?: () => void;
  onSetSpeed?: (selectedSpeed: number) => void;
  onSheetIsOpen?: () => void;
}

/** Directory_Photobook.Photobook_Options_Right (Photobook_Options_Right.mvc.js view :95-520, controller :521-760): the
    top-right row (speed button → ToggleSpeedSheet(True); close button → ClosePhotobook), hidden unless In_IsShow, and,
    while In_IsShow, the "Speed setting" BottomSheet (CloseOnClickOutsite False, ShowHandlerPreview False) with a
    RadioGroup of 5s / 8s / 15s bound to SelectedSpeed. OnInitialize / OnParametersChanged: SelectedSpeed =
    In_CurrentSpeed (:747-790). OnToggle: open → SheetIsOpen; closed → SetSpeed(SelectedSpeed) when it changed, else
    Closed. RadioGroup_SpeedOptions (view :478-570; mandatory, no OnChange): RadioButtons Five / Eight / Fifteen
    (Photobook_Speed), labels "5s" / "8s" / "15s" (CR-Photobook-2). */
export function Photobook_Options_Right({
  id,
  inCurrentSpeed,
  inMainContainerClass,
  inIsShow,
  onClosed,
  onClosePhotobook,
  onSetSpeed,
  onSheetIsOpen,
}: Photobook_Options_RightProps) {
  const prefix = id.replace('$', '');
  const [speedSheetId, setSpeedSheetId] = useState('');
  /* OnInitialize (:762) and OnParametersChanged (:787, on any changed input): SelectedSpeed = In_CurrentSpeed. */
  const inputsKey = `${String(inCurrentSpeed)}|${inMainContainerClass}|${String(inIsShow)}`;
  const [selected, setSelected] = useState({ inputsKey, speed: inCurrentSpeed });
  if (selected.inputsKey !== inputsKey) setSelected({ inputsKey, speed: inCurrentSpeed });
  const selectedSpeed = selected.inputsKey === inputsKey ? selected.speed : inCurrentSpeed;
  const speedOption = (name: string, value: number, label: string) => (
    <RadioButton id={`${prefix}-${name}`} style={`radio-button ${inMainContainerClass}--radio-button`} value={value}>
      <span data-expression="">{label}</span>
    </RadioButton>
  );
  const toggleSpeedSheet = (isOpen: boolean) => {
    if (isOpen) bottomSheetOpen(speedSheetId);
    else bottomSheetClose(speedSheetId);
  };
  const handlerToggleSpeedSheet = (isOpen: boolean) => {
    if (isOpen) onSheetIsOpen?.();
    else if (selectedSpeed !== inCurrentSpeed) onSetSpeed?.(selectedSpeed);
    else onClosed?.();
  };
  return (
    <OSBlock name="Directory_Photobook.Photobook_Options_Right" id={id}>
      <CustomContainer
        id={`${prefix}-Photobook_Options_Top_Right`}
        extendedClasses={`${inMainContainerClass}--top-right`}
        options={{
          DisplayOptions: {
            Display: UBT_Display.Flex,
            AlignItems: UBT_AlignItems.Center,
            JustifyContent: UBT_JustifyContent.FlexEnd,
            FlexDirection: UBT_FlexDirection.Row,
          },
          Visibility: inIsShow ? UBT_Visibility.Visible : UBT_Visibility.Hidden,
        }}
      >
        <CustomContainer
          id={`${prefix}-Photobook_Options_Top_Speed`}
          options={ROUND_BUTTON}
          onClicked={() => {
            toggleSpeedSheet(true);
          }}
        >
          <Icon
            id={`${prefix}-Photobook_Options_Top_Speed_Icon`}
            inIconId={UBT_Icons2.Clock}
            inColorId={UBT_Color.Neutral0}
            inSizeId={UBT_IconsSize.Base_24}
          />
        </CustomContainer>
        <CustomContainer
          id={`${prefix}-Photobook_Options_Top_Close`}
          options={{ ...ROUND_BUTTON, MarginSize: { LeftSizeId: UBT_Size.Base } }}
          onClicked={onClosePhotobook}
        >
          <Icon
            id={`${prefix}-Photobook_Options_Top_Close_Icon`}
            inIconId={UBT_Icons2.Close}
            inColorId={UBT_Color.Neutral0}
            inSizeId={UBT_IconsSize.Base_24}
          />
        </CustomContainer>
      </CustomContainer>
      {inIsShow && (
        <ConnectBottomSheet
          id={`${prefix}-BottomSheet_Speed`}
          extendedClasses={`${inMainContainerClass}-bottom-sheet ${inMainContainerClass}-bottom-sheet--speed`}
          title="Speed setting"
          closeOnClickOutsite={false}
          showHandlerPreview={false}
          onOnToggle={handlerToggleSpeedSheet}
          onInitialized={setSpeedSheetId}
          onOnClose={() => {
            toggleSpeedSheet(false);
          }}
          content={
            <RadioGroup
              id={`${prefix}-RadioGroup_SpeedOptions`}
              style={`radio-group ${inMainContainerClass}--radio-group`}
              value={selectedSpeed}
              onValueChange={(speed) => {
                setSelected({ inputsKey, speed });
              }}
            >
              {speedOption('Five', Photobook_Speed.FiveSeconds, '5s')}
              {speedOption('Eight', Photobook_Speed.EightSeconds, '8s')}
              {speedOption('Fifteen', Photobook_Speed.FifteenSeconds, '15s')}
            </RadioGroup>
          }
        />
      )}
    </OSBlock>
  );
}
