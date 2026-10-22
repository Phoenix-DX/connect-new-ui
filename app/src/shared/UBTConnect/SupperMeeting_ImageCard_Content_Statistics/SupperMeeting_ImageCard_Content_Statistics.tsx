// @os-block UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { ImageCard__Content__Tag } from '@/shared/UBTConnectLibrary/ImageCard__Content__Tag';
import { getLookupConcepts } from '@/shared/UBTConnectLibrary/lib/actions';
import {
  getDescriptor_BretherenCount,
  getDescriptor_Subdivision_HouseholdCount,
} from '@/shared/UBTConnect/lib/actions';
import { UBT_ColumnBehaviour, UBT_FontSize, UBT_Size } from '@/shared/UBTConnect/lib/staticEntities';
import { SupperMeeting_ImageCard_Content_IconText } from '@/shared/UBTConnect/SupperMeeting_ImageCard_Content_IconText';

export interface SupperMeeting_ImageCard_Content_StatisticsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inBretherenCount?: number;
  inHouseholdCount?: number;
  inGenderSplit?: string;
}

/** Statistics of a supper meeting card
    (p:UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc.js:175-350): brethren count
    (GetDescriptor_BretherenCount, Brethren lookup icon) with the gender split tag, then the household count. Local
    FontSize = ExtraSmall. */
export function SupperMeeting_ImageCard_Content_Statistics({
  id,
  inBretherenCount = 0,
  inHouseholdCount = 0,
  inGenderSplit = '',
}: SupperMeeting_ImageCard_Content_StatisticsProps) {
  const fontSize = UBT_FontSize.ExtraSmall;
  const lookup = getLookupConcepts(false);
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics" id={id}>
      <CustomContainer options={{ MarginSize: {}, TextOptions: { FontSize: UBT_FontSize.ExtraSmall } }}>
        <div className="display-flex gap-s flex-wrap flex-direction-column" data-container="">
          <div data-container="">
            <Columns_Two
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, SpacingSize: UBT_Size.Small }}
              left={
                <SupperMeeting_ImageCard_Content_IconText
                  inText={getDescriptor_BretherenCount(inBretherenCount)}
                  inUBTIconId={lookup.Brethren.Icon}
                  inUBTColorId={lookup.Brethren.Icon_Color}
                  inFontSize={fontSize}
                />
              }
              right={<ImageCard__Content__Tag content={inGenderSplit} />}
            />
          </div>
          <div data-container="">
            <SupperMeeting_ImageCard_Content_IconText
              inText={getDescriptor_Subdivision_HouseholdCount(inHouseholdCount)}
              inFontSize={fontSize}
              inUBTIconId={lookup.Household.Icon}
              inUBTColorId={lookup.Household.Icon_Color}
            />
          </div>
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
