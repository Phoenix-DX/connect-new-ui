// @os-block UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { HouseholdDetailsContainer } from '@/containers';
import { useHouseholdDetailsFlags } from '@/pages/HouseholdDetails/hooks/useHouseholdDetails';

export interface EntitiesCarousel_HouseholdDetailsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_HouseholdId (Long Integer as text). */
  inHouseholdId?: string;
  /** In_IsSkeletonOnly: passed to HouseholdDetails_Block (members hidden until it turns False). */
  inIsSkeletonOnly?: boolean;
  /** Placeholder Placeholder_CarouselTag. */
  children?: ReactNode;
  /** Event Event_SetHeader(Event_Header). */
  onEventSetHeader?: (eventHeader: string) => void;
}

/** A household slide of EntitiesCarousel (p:UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc.js
    view :167-230): HouseholdDetails_Block with HouseholdId and In_IsSkeletonOnly, this block's Placeholder_CarouselTag
    (a Placeholder widget: `<div id="…-Placeholder_CarouselTag">`) as its CarouselTag placeholder.
    Handler_HouseholdDetails_DataFetched (controller :241-318): keeps LocalityName, CountryName and
    DeceasedOrAncestry_View (block variables no widget reads) and raises Event_SetHeader(LocalityName + ", " +
    CountryName). */
export function EntitiesCarousel_HouseholdDetails({
  id,
  inHouseholdId = '0',
  inIsSkeletonOnly = false,
  children,
  onEventSetHeader,
}: EntitiesCarousel_HouseholdDetailsProps) {
  const prefix = id?.replace('$', '');
  const flags = useHouseholdDetailsFlags();
  return (
    <OSBlock name="Directory_Caroussel.EntitiesCarousel_HouseholdDetails" id={id}>
      <HouseholdDetailsContainer
        id={prefix === undefined ? undefined : `${prefix}-$b1`}
        source={{ kind: 'server', householdId: inHouseholdId }}
        flags={flags}
        isSkeletonOnly={inIsSkeletonOnly}
        onHouseholdDataFetched={(localityName, countryName) => {
          onEventSetHeader?.(`${localityName}, ${countryName}`);
        }}
        carouselTag={<div id={prefix === undefined ? undefined : `${prefix}-Placeholder_CarouselTag`}>{children}</div>}
      />
    </OSBlock>
  );
}
