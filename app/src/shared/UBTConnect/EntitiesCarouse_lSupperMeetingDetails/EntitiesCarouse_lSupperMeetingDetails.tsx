// @os-block UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { SupperMeeting_DetailsBlock } from '../SupperMeeting_DetailsBlock';

export interface EntitiesCarouse_lSupperMeetingDetailsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_SubdivisionId (Long Integer as text). */
  inSubdivisionId?: string;
  /** Placeholder Placeholder_CarouselTag. */
  children?: ReactNode;
}

/** A supper meeting slide of EntitiesCarousel (p:UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc.js
    view :131-177): SupperMeeting_DetailsBlock with In_SubdivsionId (sic) and this block's Placeholder_CarouselTag
    (a Placeholder widget: `<div id="…-Placeholder_CarouselTag">`) as its CarouselTag placeholder. */
export function EntitiesCarouse_lSupperMeetingDetails({
  id,
  inSubdivisionId = '0',
  children,
}: EntitiesCarouse_lSupperMeetingDetailsProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails" id={id}>
      <SupperMeeting_DetailsBlock
        id={prefix === undefined ? undefined : `${prefix}-$b1`}
        inSubdivsionId={inSubdivisionId}
        placeholderCarouselTag={
          <div id={prefix === undefined ? undefined : `${prefix}-Placeholder_CarouselTag`}>{children}</div>
        }
      />
    </OSBlock>
  );
}
