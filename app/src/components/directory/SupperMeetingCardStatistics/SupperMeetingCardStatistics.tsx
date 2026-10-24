/** @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics */
// @os-block UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { ImageCardTag } from '@/components/ui/ImageCardTag';
import { getLookupConcepts } from '@/lib/ubtConnectLibrary/actions';
import { getDescriptor_BretherenCount, getDescriptor_Subdivision_HouseholdCount } from '@/lib/ubtConnect/actions';
import { UBT_ColumnBehaviour, UBT_FontSize, UBT_Size } from '@/lib/ubtConnect/staticEntities';
import { SupperMeetingCardIconText } from '@/components/directory/SupperMeetingCardIconText';

export interface SupperMeetingCardStatisticsProps {
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
export function SupperMeetingCardStatistics({
  id,
  inBretherenCount = 0,
  inHouseholdCount = 0,
  inGenderSplit = '',
}: SupperMeetingCardStatisticsProps) {
  const fontSize = UBT_FontSize.ExtraSmall;
  const lookup = getLookupConcepts(false);
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics" id={id}>
      <CustomContainer options={{ MarginSize: {}, TextOptions: { FontSize: UBT_FontSize.ExtraSmall } }}>
        <div className="display-flex gap-s flex-wrap flex-direction-column" data-container="">
          <div data-container="">
            <ColumnsTwo
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, SpacingSize: UBT_Size.Small }}
              left={
                <SupperMeetingCardIconText
                  inText={getDescriptor_BretherenCount(inBretherenCount)}
                  inUBTIconId={lookup.Brethren.Icon}
                  inUBTColorId={lookup.Brethren.Icon_Color}
                  inFontSize={fontSize}
                />
              }
              right={<ImageCardTag content={inGenderSplit} />}
            />
          </div>
          <div data-container="">
            <SupperMeetingCardIconText
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
