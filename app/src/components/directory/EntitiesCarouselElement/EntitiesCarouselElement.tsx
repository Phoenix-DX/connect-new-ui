/** @origin UBTConnect.Directory_Caroussel.EntitiesCarousel_Element */
import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CarouselTag } from '@/components/directory/CarouselTag';
import {
  CarouselSupperMeetingDetails,
  type CarouselSupperMeetingDetailsSlot,
} from '@/components/directory/CarouselSupperMeetingDetails';
import {
  CarouselHouseholdDetails,
  type CarouselHouseholdDetailsSlot,
} from '@/components/directory/CarouselHouseholdDetails';
import {
  CarouselOneSchoolGlobalDetails,
  type CarouselOneSchoolGlobalDetailsSlot,
} from '@/components/directory/CarouselOneSchoolGlobalDetails';
import { get_IsInsideRenderBuffer } from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';

/** Block variable IsSinglePassRender (mvc.js model, default True, never assigned): an element rendered once stays. */
const BLOCK_VARIABLES = { IsSinglePassRender: true as boolean };

export interface EntitiesCarouselElementProps {
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
  /** HouseholdDetails_Block of a household slide (EntitiesCarousel_HouseholdDetails): the page renders the household
      details container with the slot inputs. */
  renderHouseholdDetails?: (slot: CarouselHouseholdDetailsSlot) => ReactNode;
  /** SupperMeeting_DetailsBlock of a supper meeting slide (EntitiesCarouse_lSupperMeetingDetails): the page renders
      the supper meeting details container with the slot inputs. */
  renderSupperMeetingDetails?: (slot: CarouselSupperMeetingDetailsSlot) => ReactNode;
  /** OneSchoolGlobalDetails_Block of a OneSchool Global slide (EntitiesCarousel_OneSchoolGlobal): the page renders the
      school details container with the slot inputs. */
  renderOneSchoolGlobalDetails?: (slot: CarouselOneSchoolGlobalDetailsSlot) => ReactNode;
}

/** One slide of EntitiesCarousel (p:UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js): rendered only
    once inside the render buffer (view :240-390; OnReady :397-421 runs OnParametersChanged :422-470), then a
    container with the supper meeting or the household details and a CarouselTag in their placeholder. */
export function EntitiesCarouselElement({
  id,
  inConnectEntityTypeId = '',
  inEntityId = '0',
  inCarouselLength = 0,
  inIndexActiveElement = 0,
  inIndexNextActiveElement = 0,
  inIndexCurrentElement = 0,
  inRenderBuffer = 0,
  onEventSetHeader,
  renderHouseholdDetails,
  renderSupperMeetingDetails,
  renderOneSchoolGlobalDetails,
}: EntitiesCarouselElementProps) {
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
          {/* TST (2026-10-27) adds the OneSchool Global branch first, alias 1: the TST aliases of the two branches below
              move to 2-5. The elements get no instance id here (EntitiesCarousel README), so no rendered id changes. */}
          {inConnectEntityTypeId === Connect_Entity.OneSchoolGlobal && (
            <CarouselOneSchoolGlobalDetails
              id={childId('$b1')}
              inEntityId={inEntityId}
              renderOneSchoolGlobalDetails={renderOneSchoolGlobalDetails}
            />
          )}
          {inConnectEntityTypeId === Connect_Entity.SupperMeetings_aka_Subdivisions && (
            <CarouselSupperMeetingDetails
              id={childId('$b1')}
              inSubdivisionId={inEntityId}
              renderSupperMeetingDetails={renderSupperMeetingDetails}
            >
              {carouselTag('$b2')}
            </CarouselSupperMeetingDetails>
          )}
          {inConnectEntityTypeId === Connect_Entity.Household && (
            <CarouselHouseholdDetails
              id={childId('$b3')}
              inHouseholdId={inEntityId}
              inIsSkeletonOnly={isSkeletonOnly}
              onEventSetHeader={(eventHeader) => onEventSetHeader?.(eventHeader)}
              renderHouseholdDetails={renderHouseholdDetails}
            >
              {carouselTag('$b4')}
            </CarouselHouseholdDetails>
          )}
        </div>
      )}
    </OSBlock>
  );
}
