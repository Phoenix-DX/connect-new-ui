import type { ReactNode } from 'react';
import type { AssembleLocalityDetails } from '@/api/event';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import type {
  AttendeeSubdivisionEvents,
  AttendeeSubdivisionFlags,
} from '@/pages/AssembleDetail/hooks/useAttendeeSubdivision';
import { AssembleEventDetail_LocalitySubdivisionList } from './AssembleEventDetail_LocalitySubdivisionList';

export interface AssembleEventDetail_LocalitiesListProps extends AttendeeSubdivisionEvents {
  /** OutSystems instance id of the block. */
  id: string;
  /** AssembleAttendeeSubdivisionList: the invited localities. */
  assembleAttendeeSubdivisionList: AssembleLocalityDetails[];
  /** The Header placeholder. */
  header?: ReactNode;
  /** The flags of the halls, read by the page. */
  flags: AttendeeSubdivisionFlags;
}

/** DIV_InvitedLocalities__Header (`margin-bottom-base text-neutral-7 font-semi-bold`, the Header placeholder), then,
    when the list is not empty, DIV_InvitedLocalitiesList (`margin-top-s`) > DIV_Localities__List > ListLocalities
    (`list list-group list-sticky-records margin-bottom-s`, no virtualization) with one DIV_Locality >
    AssembleEventDetail_LocalitySubdivisionList per locality (IsSelected False).
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList */
export function AssembleEventDetail_LocalitiesList({
  id,
  assembleAttendeeSubdivisionList,
  header,
  ...attendee
}: AssembleEventDetail_LocalitiesListProps) {
  const scope = id.replace(/\$/g, '');
  return (
    <OSBlock name="Assemble.AssembleEventDetail_LocalitiesList" id={id}>
      <div
        className="margin-bottom-base text-neutral-7 font-semi-bold"
        data-container=""
        id={`${scope}-DIV_InvitedLocalities__Header`}
      >
        <div id={`${scope}-Header`}>{header}</div>
      </div>
      {assembleAttendeeSubdivisionList.length > 0 && (
        <div className="margin-top-s" data-container="" id={`${scope}-DIV_InvitedLocalitiesList`}>
          <div data-container="" id={`${scope}-DIV_Localities__List`}>
            <OSList
              id={`${scope}-ListLocalities`}
              className="list list-group list-sticky-records margin-bottom-s"
              animateItems
              disableVirtualization
              source={assembleAttendeeSubdivisionList}
              keyOf={(l) => l.LocalityId}
            >
              {(l, i) => (
                <div data-container="">
                  <div data-container="" id={`${scope}-DIV_Locality`}>
                    <AssembleEventDetail_LocalitySubdivisionList
                      id={`${scope}-$b1-${String(i)}`}
                      locality={l}
                      {...attendee}
                    />
                  </div>
                </div>
              )}
            </OSList>
          </div>
        </div>
      )}
    </OSBlock>
  );
}
