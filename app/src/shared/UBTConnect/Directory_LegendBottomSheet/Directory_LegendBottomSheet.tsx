// @os-block UBTConnect.Directory_Locality.Directory_LegendBottomSheet
import { useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PreventBackNavigation } from '../../NavigationHandler/PreventBackNavigation';
import { bottomSheetClose } from '../../osui/lib/actions';
import { BottomSheet } from '../../UBTConnectLibrary/BottomSheet';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../UBTConnectLibrary/CustomText';
import { Icon } from '../../UBTConnectLibrary/Icon';
import { IconText } from '../../UBTConnectLibrary/IconText';
import { UBT_Color, UBT_FontSize, UBT_Icons2, UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';
import type { TextOptions } from '../../UBTConnectLibrary/lib/structures';
import { getEntityType_Icon } from '../../UBTConnect_Utils/lib/actions';
import { Connect_Entity, UBT_IconsSize } from '../lib/staticEntities';

export interface Directory_LegendBottomSheetProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** ShowLocalities (default True, p:Directory_LegendBottomSheet.mvc.js:19-21): the third legend line is Localities
      instead of Supper Meetings. */
  showLocalities?: boolean;
  /** Event SheetInitialized(Id): the BottomSheet id (the screen opens it with BottomSheetOpen). */
  onSheetInitialized?: (id: string) => void;
}

/** TextOptions of every legend line (Neutral7, Small). */
const TEXT: TextOptions = { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.Small };

/** LegendItem_*: a CustomContainer (margin y Small) around one line. */
const item = (line: ReactNode) => (
  <CustomContainer options={{ MarginSize: { VerticalSizeId: UBT_Size.Small } }}>{line}</CustomContainer>
);

/** One justified IconText line with its 16 px icon. */
function legend(text: string, iconId: string, colorId: string) {
  return (
    <IconText inJustifyText textOptions={TEXT} spacingSize={UBT_Size.ExtraSmall} text={text}>
      <Icon inColorId={colorId} inSizeId={UBT_IconsSize.NonStandard_16} inIconId={iconId} />
    </IconText>
  );
}

/** "About the numbers" sheet explaining the statistics icons
    (p:UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc.js:150-790): ConnectPatterns BottomSheet (header,
    no back button, Neutral0 content, padding x Base and bottom DoubleExtraLarge, `directory-legend-explanation`) with
    the legend lines Brethren, Households, Localities or Supper Meetings (ShowLocalities), Brothers, Sisters, with the
    icons and colours of Statistics_Icons. While open (IsOpened, set by OnToggle) PreventBackNavigation closes it:
    BottomSheetOnClose = BottomSheetOnToggle(False) + OutSystems UI BottomSheetClose(BottomSheetId). */
export function Directory_LegendBottomSheet({
  id,
  showLocalities = true,
  onSheetInitialized,
}: Directory_LegendBottomSheetProps) {
  const [isOpened, setIsOpened] = useState(false);
  const bottomSheetId = useRef('');
  const bottomSheetOnClose = () => {
    setIsOpened(false);
    bottomSheetClose(bottomSheetId.current);
  };
  return (
    <OSBlock name="Directory_Locality.Directory_LegendBottomSheet" id={id}>
      <BottomSheet
        showBackButton={false}
        title="About the numbers"
        extendedClasses="directory-legend-explanation"
        showHeader
        contentBackgroundColorId={UBT_Color.Neutral0}
        contentPadding={{ HorizontalSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.DoubleExtraLarge }}
        onOnToggle={setIsOpened}
        onOnClose={bottomSheetOnClose}
        onInitialized={(sheetId) => {
          bottomSheetId.current = sheetId;
          onSheetInitialized?.(sheetId);
        }}
        content={
          <>
            {item(legend('Brethren', getEntityType_Icon(Connect_Entity.Member), UBT_Color.Purple))}
            {item(legend('Households', getEntityType_Icon(Connect_Entity.Household), UBT_Color.Primary))}
            {item(
              showLocalities ? (
                legend('Localities', getEntityType_Icon(Connect_Entity.Locality), UBT_Color.Error)
              ) : (
                <CustomText
                  inlineIcon={{
                    IconId: getEntityType_Icon(Connect_Entity.SupperMeetings_aka_Subdivisions),
                    IconSizeId: UBT_IconsSize.NonStandard_16,
                    SpacingSize: UBT_Size.ExtraSmall,
                    IconColorId: UBT_Color.Orange,
                  }}
                  inTextOptions={TEXT}
                  inText="Supper Meetings"
                  inJustifyText
                />
              ),
            )}
            {item(legend('Brothers', UBT_Icons2.Boy, UBT_Color.BlueNonStandarDarker))}
            {item(legend('Sisters', UBT_Icons2.Girl, UBT_Color.PinkNonStandardDarker))}
          </>
        }
      />
      {isOpened && <PreventBackNavigation onBackNavigationPrevented={bottomSheetOnClose} />}
    </OSBlock>
  );
}
