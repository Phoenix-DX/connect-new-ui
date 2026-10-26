import { OSBlock } from '@/components/ui/os/OSBlock';
import { useLocalityInterchange } from '@/pages/Locality_Details/hooks/useLocalityInterchange';
import { Directory_Interchange_StatisticsList } from './Directory_Interchange_StatisticsList';

export interface Locality_InterchangeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_InterchangeLocalityId (Long Integer as text). */
  inInterchangeLocalityId?: string;
}

/** The Interchange tag: Directory_Interchange_StatisticsList (subtitle shown, loading = fetch error or not fetched) of
    GetInterchangesByLocalityId. The flows are in useLocalityInterchange.
    @origin UBTConnect.Directory_Locality.Locality_Interchange */
export function Locality_Interchange({ id, inInterchangeLocalityId = '0' }: Locality_InterchangeProps) {
  const { interchangeList, isLoading, onNavigateToLocality } = useLocalityInterchange(inInterchangeLocalityId);
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Locality.Locality_Interchange" id={id}>
      <Directory_Interchange_StatisticsList
        id={`${b}-$b1`}
        inShowSubtitle
        inIsLoading={isLoading}
        inInterchangeList={interchangeList}
        onEventNavigateToLocality={onNavigateToLocality}
      />
    </OSBlock>
  );
}
