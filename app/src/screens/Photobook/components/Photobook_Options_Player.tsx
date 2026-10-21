// @os-block Directory_Photobook.Photobook_Options_Player
import { useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
import { UBT_Color } from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_Icons2, UBT_IconsSize, UBT_Visibility } from './staticEntities';

export interface Photobook_Options_PlayerProps {
  id: string;
  inMainContainerClass: string;
  inIsShow: boolean;
  inIsFinalItem: boolean;
  /** Event Clicked(Event_IsPlay). */
  onClicked?: (isPlay: boolean) => void;
  /** Event Replay. */
  onReplay?: () => void;
}

/** Directory_Photobook.Photobook_Options_Player (Photobook_Options_Player.mvc.js view :88-250, controller :251-420):
    the centre button, hidden unless In_IsShow: Replay on the final item, else Pause while IsPlay, else Play (64 px
    neutral 0 icons). Handler_TogglePlay sets IsPlay and raises Clicked(IsPlay); Handler_ClickReplay sets IsPlay True and
    raises Replay. OnParametersChanged: reaching the final item while playing sets IsPlay False. */
export function Photobook_Options_Player({
  id,
  inMainContainerClass,
  inIsShow,
  inIsFinalItem,
  onClicked,
  onReplay,
}: Photobook_Options_PlayerProps) {
  const prefix = id.replace('$', '');
  const [isPlay, setIsPlay] = useState(false);
  const [previousFinal, setPreviousFinal] = useState(inIsFinalItem);
  /* OnParametersChanged (:262-285), adjusted during render when the input changes. */
  if (previousFinal !== inIsFinalItem) {
    setPreviousFinal(inIsFinalItem);
    if (inIsFinalItem && isPlay) setIsPlay(false);
  }
  const togglePlay = (isPlayState: boolean) => {
    setIsPlay(isPlayState);
    onClicked?.(isPlayState);
  };
  const clickReplay = () => {
    setIsPlay(true);
    onReplay?.();
  };
  const icon = (name: string, iconId: string, onClick: () => void) => (
    <Icon
      id={`${prefix}-${name}`}
      inIconId={iconId}
      inColorId={UBT_Color.Neutral0}
      inSizeId={UBT_IconsSize.NonStandard_64}
      onClick={onClick}
    />
  );
  return (
    <OSBlock name="Directory_Photobook.Photobook_Options_Player" id={id}>
      <CustomContainer
        id={`${prefix}-Photobook_Options_Player`}
        extendedClasses={`${inMainContainerClass}--player`}
        options={{ Visibility: inIsShow ? UBT_Visibility.Visible : UBT_Visibility.Hidden }}
      >
        {inIsFinalItem
          ? icon('Photobook_Options_Replay', UBT_Icons2.Replay, clickReplay)
          : isPlay
            ? icon('Photobook_Options_Pause', UBT_Icons2.Pause, () => {
                togglePlay(false);
              })
            : icon('Photobook_Options_Play', UBT_Icons2.PlayArrow, () => {
                togglePlay(true);
              })}
      </CustomContainer>
    </OSBlock>
  );
}
