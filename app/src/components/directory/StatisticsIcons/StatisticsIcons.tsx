/** @origin UBTConnect.Directory_Locality.Statistics_Icons */
// @os-block UBTConnect.Directory_Locality.Statistics_Icons
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { UI_StatisticsTexts } from '@/shared/Connect_Geography_CS/lib/structures';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_ColumnBehaviour,
  UBT_Color,
  UBT_FontSize,
  UBT_Icons2,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import { getEntityType_Icon } from '@/shared/UBTConnect_Utils/lib/actions';
import { Connect_Entity, UBT_IconsSize } from '@/shared/UBTConnect/lib/staticEntities';

export interface StatisticsIconsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UI_StatisticsTexts: the formatted counts. */
  uIStatisticsTexts?: UI_StatisticsTexts;
}

/** TextOptions of every count (Neutral7, Small). */
const TEXT: TextOptions = { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.Small };

/** One count with its 16 px icon (IconText, SpacingSize ExtraSmall). */
function count(text: string, iconId: string, colorId: string) {
  return (
    <IconText textOptions={TEXT} spacingSize={UBT_Size.ExtraSmall} text={text}>
      <Icon inIconId={iconId} inColorId={colorId} inSizeId={UBT_IconsSize.NonStandard_16} />
    </IconText>
  );
}

/** Counts of a country or locality
    (p:UBTConnect.Directory_Locality.Statistics_Icons.mvc.js:127-487): two Columns_Three (SameSize). Row 1: members
    (GetEntityType_Icon Member, purple), households (Household, primary), then supper meetings when
    UI_StatisticsTexts.SupperMeetings is not "" (CustomText with the inline Supper Meetings icon, orange), otherwise
    localities (Locality, error). Row 2: brothers (Boy, blue-non-standard-darker), sisters (Girl,
    pink-non-standard-darker), right empty. */
export function StatisticsIcons({ id, uIStatisticsTexts = {} }: StatisticsIconsProps) {
  const t = uIStatisticsTexts;
  const supperMeetings = t.SupperMeetings ?? '';
  return (
    <OSBlock name="Directory_Locality.Statistics_Icons" id={id}>
      <Columns_Three
        columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.SameSize }}
        left={count(t.Members ?? '', getEntityType_Icon(Connect_Entity.Member), UBT_Color.Purple)}
        middle={count(t.Households ?? '', getEntityType_Icon(Connect_Entity.Household), UBT_Color.Primary)}
        right={
          supperMeetings === '' ? (
            count(t.Localities ?? '', getEntityType_Icon(Connect_Entity.Locality), UBT_Color.Error)
          ) : (
            <CustomText
              inTextOptions={TEXT}
              inText={supperMeetings}
              inlineIcon={{
                IconId: getEntityType_Icon(Connect_Entity.SupperMeetings_aka_Subdivisions),
                IconSizeId: UBT_IconsSize.NonStandard_16,
                SpacingSize: UBT_Size.ExtraSmall,
                IconColorId: UBT_Color.Orange,
              }}
            />
          )
        }
      />
      <Columns_Three
        columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.SameSize }}
        left={count(t.Brothers ?? '', UBT_Icons2.Boy, UBT_Color.BlueNonStandarDarker)}
        middle={count(t.Sisters ?? '', UBT_Icons2.Girl, UBT_Color.PinkNonStandardDarker)}
      />
    </OSBlock>
  );
}
