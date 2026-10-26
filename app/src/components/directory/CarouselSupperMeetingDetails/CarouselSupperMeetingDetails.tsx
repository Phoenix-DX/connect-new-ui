/** @origin UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** What a supper meeting slide gives SupperMeeting_DetailsBlock. The page renders the supper meeting details container
    with these inputs, because a component does not import a container (rule 4). */
export interface CarouselSupperMeetingDetailsSlot {
  /** OutSystems instance id of SupperMeeting_DetailsBlock (`<prefix>-$b1`). */
  id?: string;
  /** In_SubdivsionId (sic): In_SubdivisionId of this block. */
  subdivisionId: string;
  /** The CarouselTag placeholder of SupperMeeting_DetailsBlock: the Placeholder_CarouselTag widget of this block. */
  carouselTag: ReactNode;
}

export interface CarouselSupperMeetingDetailsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_SubdivisionId (Long Integer as text). */
  inSubdivisionId?: string;
  /** Placeholder Placeholder_CarouselTag. */
  children?: ReactNode;
  /** SupperMeeting_DetailsBlock: the caller renders the supper meeting details with the slot inputs. Without it, the
      block renders its wrapper only. */
  renderSupperMeetingDetails?: (slot: CarouselSupperMeetingDetailsSlot) => ReactNode;
}

/** A supper meeting slide of EntitiesCarousel: SupperMeeting_DetailsBlock with In_SubdivsionId (sic) and this block's
    Placeholder_CarouselTag (a Placeholder widget: `<div id="…-Placeholder_CarouselTag">`) as its CarouselTag
    placeholder. */
export function CarouselSupperMeetingDetails({
  id,
  inSubdivisionId = '0',
  children,
  renderSupperMeetingDetails,
}: CarouselSupperMeetingDetailsProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails" id={id}>
      {renderSupperMeetingDetails?.({
        id: prefix === undefined ? undefined : `${prefix}-$b1`,
        subdivisionId: inSubdivisionId,
        carouselTag: <div id={prefix === undefined ? undefined : `${prefix}-Placeholder_CarouselTag`}>{children}</div>,
      })}
    </OSBlock>
  );
}
