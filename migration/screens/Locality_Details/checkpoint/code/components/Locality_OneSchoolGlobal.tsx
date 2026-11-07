import type { LocalityTimezone } from '@/api/locality';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DirectoryEmptyState } from '@/components/directory/DirectoryEmptyState';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import { useLocalityOneSchoolGlobal } from '@/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal';
import { OneSchoolGlobal_List } from './OneSchoolGlobal_List';

export interface Locality_OneSchoolGlobalProps {
  /** OutSystems instance id of the block (the widget name "Block_OneSchoolGlobal_List" in Locality_Details). */
  id?: string;
  /** Prefix of the ids inside the block (its alias, "b21"). */
  idPrefix?: string;
  /** In_LocalityId (Long Integer as text). */
  inLocalityId?: string;
  /** In_LocalityTimezoneData (UI_LocalityTimezone). */
  inLocalityTimezoneData?: LocalityTimezone;
  /** Event Event_OnClick(Event_OneSchoolGlobalId). */
  onEventOnClick?: (oneSchoolGlobalId: string) => void;
}

const NO_TIMEZONE: LocalityTimezone = { TimezoneName: '', TimezoneOffset: '0' };

/** The OneSchool Global tag: CustomContainer "Block_OneSchoolGlobalListWrapper" (Neutral0, padding y Small x Base)
    with Directory_EmptyState (OneSchool Global) when Out_OneSchoolGlobal_List2 is empty, otherwise OneSchoolGlobal_List
    (In_IsLoading = Get_OneSchoolGlobal_List_IsLoading). Event_OnClick goes up to the screen. The flows are in
    useLocalityOneSchoolGlobal.
    @origin UBTConnect.Directory_Locality.Locality_OneSchoolGlobal */
export function Locality_OneSchoolGlobal({
  id,
  idPrefix = '',
  inLocalityId = '0',
  inLocalityTimezoneData = NO_TIMEZONE,
  onEventOnClick,
}: Locality_OneSchoolGlobalProps) {
  const { schools, isLoading, onScrollEnding } = useLocalityOneSchoolGlobal({
    localityId: inLocalityId,
    localityTimezoneData: inLocalityTimezoneData,
  });
  const b = idPrefix;
  return (
    <OSBlock name="Directory_Locality.Locality_OneSchoolGlobal" id={id}>
      <CustomContainer
        id={`${b}-Block_OneSchoolGlobalListWrapper`}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
        }}
      >
        {schools.length === 0 ? (
          <DirectoryEmptyState id={`${b}-$b2`} entityTypeId={Connect_Entity.OneSchoolGlobal} />
        ) : (
          <OneSchoolGlobal_List
            id={`${b}-$b3`}
            inIsLoading={isLoading}
            oneSchoolList={schools}
            onEventOnClick={onEventOnClick}
            onEventScrollEnding={onScrollEnding}
          />
        )}
      </CustomContainer>
    </OSBlock>
  );
}
