// @os-block UBTConnect.Directory_Caroussel.EntitiesCarousel_Element
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CarouselTag } from '@/shared/UBTConnect/CarouselTag';
import { EntitiesCarouse_lSupperMeetingDetails } from '@/shared/UBTConnect/EntitiesCarouse_lSupperMeetingDetails';
import { EntitiesCarousel_HouseholdDetails } from '@/shared/UBTConnect/EntitiesCarousel_HouseholdDetails';
import { get_IsInsideRenderBuffer } from '@/shared/UBTConnect/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';

/** Block variable IsSinglePassRender (mvc.js model, default True, never assigned): an element rendered once stays. */
const BLOCK_VARIABLES = { IsSinglePassRender: true as boolean };

export interface EntitiesCarousel_ElementProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ConnectEntityTypeId (Connect_Entity): Supper Meetings or Household. */
  inConnectEntityTypeId?: string;
  /** In_EntityId (Long Integer as text). */
  inEntityId?: string;
  /** In_CarouselLength: number of carousel items (CarouselTag total). */
  inCarouselLength?: number;
  inIndexActiveElement?: number;
  inIndexNextActiveElement?: number;
  /** In_Index_CurrentElement: this element's index. */
  inIndexCurrentElement?: number;
  /** In_RenderBuffer: elements this far from the active (or next active) one are rendered. */
  inRenderBuffer?: number;
  /** Event Event_SetHeader(Event_Header). */
  onEventSetHeader?: (eventHeader: string) => void;
}

/** One slide of EntitiesCarousel (p:UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js): rendered only
    once inside the render buffer (view :240-390; OnReady :397-421 runs OnParametersChanged :422-470), then a
    container with the supper meeting or the household details and a CarouselTag in their placeholder. */
export function EntitiesCarousel_Element({
  id,
  inConnectEntityTypeId = '',
  inEntityId = '0',
  inCarouselLength = 0,
  inIndexActiveElement = 0,
  inIndexNextActiveElement = 0,
  inIndexCurrentElement = 0,
  inRenderBuffer = 0,
  onEventSetHeader,
}: EntitiesCarousel_ElementProps) {
  const prefix = id?.replace('$', '');
  const childId = (name: string) => (prefix === undefined ? undefined : `${prefix}-${name}`);

  /* OnParametersChanged (:422-470), derived from the inputs. */
  const isInsideActive = get_IsInsideRenderBuffer(inRenderBuffer, inIndexCurrentElement, inIndexActiveElement);
  const isInsideNext = get_IsInsideRenderBuffer(inRenderBuffer, inIndexCurrentElement, inIndexNextActiveElement);
  const isInsideRenderBuffer = isInsideActive || isInsideNext;
  const isSkeletonOnly = !isInsideActive;
  const [isRenderCurrentElement, setIsRenderCurrentElement] = useState(false);
  const nextIsRender = BLOCK_VARIABLES.IsSinglePassRender
    ? isRenderCurrentElement || isInsideRenderBuffer
    : isInsideRenderBuffer;
  if (nextIsRender !== isRenderCurrentElement) setIsRenderCurrentElement(nextIsRender);

  const carouselTag = (name: string) => (
    <CarouselTag id={childId(name)} inTotalItems={inCarouselLength} inIndexCurrentItem={inIndexCurrentElement} />
  );
  return (
    <OSBlock name="Directory_Caroussel.EntitiesCarousel_Element" id={id}>
      {nextIsRender && (
        <div className="" data-container="">
          {inConnectEntityTypeId === Connect_Entity.SupperMeetings_aka_Subdivisions && (
            <EntitiesCarouse_lSupperMeetingDetails id={childId('$b1')} inSubdivisionId={inEntityId}>
              {carouselTag('$b2')}
            </EntitiesCarouse_lSupperMeetingDetails>
          )}
          {inConnectEntityTypeId === Connect_Entity.Household && (
            <EntitiesCarousel_HouseholdDetails
              id={childId('$b3')}
              inHouseholdId={inEntityId}
              inIsSkeletonOnly={isSkeletonOnly}
              onEventSetHeader={(eventHeader) => onEventSetHeader?.(eventHeader)}
            >
              {carouselTag('$b4')}
            </EntitiesCarousel_HouseholdDetails>
          )}
        </div>
      )}
    </OSBlock>
  );
}
