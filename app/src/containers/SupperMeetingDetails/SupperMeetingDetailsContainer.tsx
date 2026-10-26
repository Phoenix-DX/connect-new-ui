import type { ReactNode } from 'react';
import { SupperMeetingDetails } from '@/components/directory/SupperMeetingDetails';
import { EntityDetailsActionsContainer } from '@/containers/EntityDetailsActions/EntityDetailsActionsContainer';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { useSupperMeetingDetails, type SupperMeetingDetailsFlags } from './hooks/useSupperMeetingDetails';

export interface SupperMeetingDetailsContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_SubdivsionId (Long Integer as text; the OutSystems name keeps its typo). Read once. */
  subdivisionId?: string;
  /** The flag of the supper meeting details (the caller reads it with useSupperMeetingDetailsFlags). */
  flags: SupperMeetingDetailsFlags;
  /** Placeholder Placeholder_CarouselTag (inside the image tag of the card). */
  carouselTag?: ReactNode;
}

/** The supper meeting details with their data (a container by decision W26: two pages render it, and it holds two
    data actions and the entity actions container, which a component cannot import). It runs the flows of
    useSupperMeetingDetails and renders the view SupperMeetingDetails with Directory_EntityDetailsActions as the
    `entityActions` slot. SupperMeeting_Details renders it as its content; SupperMeeting_Carousel renders it in each
    supper meeting slide (the `renderSupperMeetingDetails` slot of EntitiesCarousel).
    @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock */
export function SupperMeetingDetailsContainer({
  id,
  subdivisionId = '0',
  flags,
  carouselTag,
}: SupperMeetingDetailsContainerProps) {
  const details = useSupperMeetingDetails(subdivisionId, flags);
  const { state } = details;
  const content = state.subdivision.Subdivision_Card?.Subdivision_Card_Content ?? {};

  return (
    <SupperMeetingDetails
      id={id}
      isDataFetched={state.isDataFetched}
      subdivision={state.subdivision}
      households={state.households}
      placeholderCarouselTag={carouselTag}
      entityActions={
        <EntityDetailsActionsContainer
          entityType={Connect_Entity.SupperMeetings_aka_Subdivisions}
          contactPopUpOverrideOptions={{ Name: content.Name ?? '' }}
          entityId={details.subdivisionId}
          enableOptions={{ EnableNotes: true }}
        />
      }
      onHouseholdClick={details.onClickNavigateToHousehold}
    />
  );
}
