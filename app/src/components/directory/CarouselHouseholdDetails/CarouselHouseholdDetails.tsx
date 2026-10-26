/** @origin UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** What a household slide gives HouseholdDetails_Block. The page renders the household details container with these
    inputs, because a component does not import a container (rule 4). */
export interface CarouselHouseholdDetailsSlot {
  /** OutSystems instance id of HouseholdDetails_Block (`<prefix>-$b1`). */
  id?: string;
  /** HouseholdId: In_HouseholdId of this block. */
  householdId: string;
  /** In_IsSkeletonOnly: hides the members until it turns False. */
  isSkeletonOnly: boolean;
  /** The CarouselTag placeholder of HouseholdDetails_Block: the Placeholder_CarouselTag widget of this block. */
  carouselTag: ReactNode;
  /** Handler_HouseholdDetails_DataFetched, on the HouseholdDataFetched event. */
  onHouseholdDataFetched: (localityName: string, countryName: string) => void;
}

export interface CarouselHouseholdDetailsProps {
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
  /** HouseholdDetails_Block: the caller renders the household details with the slot inputs. Without it, the block
      renders its wrapper only. */
  renderHouseholdDetails?: (slot: CarouselHouseholdDetailsSlot) => ReactNode;
}

/** A household slide of EntitiesCarousel: HouseholdDetails_Block with HouseholdId and In_IsSkeletonOnly, and this
    block's Placeholder_CarouselTag (a Placeholder widget: `<div id="…-Placeholder_CarouselTag">`) as its CarouselTag
    placeholder. Handler_HouseholdDetails_DataFetched raises Event_SetHeader(LocalityName + ", " + CountryName). The
    block variables LocalityName, CountryName and DeceasedOrAncestry_View that it also assigns are read by no widget. */
export function CarouselHouseholdDetails({
  id,
  inHouseholdId = '0',
  inIsSkeletonOnly = false,
  children,
  onEventSetHeader,
  renderHouseholdDetails,
}: CarouselHouseholdDetailsProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Directory_Caroussel.EntitiesCarousel_HouseholdDetails" id={id}>
      {renderHouseholdDetails?.({
        id: prefix === undefined ? undefined : `${prefix}-$b1`,
        householdId: inHouseholdId,
        isSkeletonOnly: inIsSkeletonOnly,
        carouselTag: <div id={prefix === undefined ? undefined : `${prefix}-Placeholder_CarouselTag`}>{children}</div>,
        onHouseholdDataFetched: (localityName, countryName) => {
          onEventSetHeader?.(`${localityName}, ${countryName}`);
        },
      })}
    </OSBlock>
  );
}
