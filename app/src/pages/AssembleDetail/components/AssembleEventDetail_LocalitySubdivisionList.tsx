import type { AssembleLocalityDetails } from '@/api/event';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { ResultItemBadge } from '@/components/ui/ResultItemBadge';
import { ResultItemMedia } from '@/components/ui/ResultItemMedia';
import type {
  AttendeeSubdivisionEvents,
  AttendeeSubdivisionFlags,
} from '@/pages/AssembleDetail/hooks/useAttendeeSubdivision';
import { useLocalitySubdivisionList } from '@/pages/AssembleDetail/hooks/useLocalitySubdivisionList';
import { AssembleEventDetail_AttendeeSubdivision } from './AssembleEventDetail_AttendeeSubdivision';

export interface AssembleEventDetail_LocalitySubdivisionListProps extends AttendeeSubdivisionEvents {
  /** OutSystems instance id of the block. */
  id: string;
  /** LocalityDetails: the locality and its halls. */
  locality: AssembleLocalityDetails;
  /** The flags of the halls, read by the page. */
  flags: AttendeeSubdivisionFlags;
}

/** DIV_Locality_Header (`list-sticky-records__sticky-record`, `--active` when selected; a click toggles IsSelected)
    with NC_Result_Item__Image (round; the map-marker badge as image, the locality name as title, the angle up or down
    as action), and when it is selected DIV_LocalitySubdivisions_List > a List (`list list-group list-sticky-records
    margin-bottom-s`) of AssembleEventDetail_AttendeeSubdivision. OnReady: the local copy is the input, collapsed; the
    view cache keeps IsSelected (useLocalitySubdivisionList).
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList */
export function AssembleEventDetail_LocalitySubdivisionList({
  id,
  locality,
  ...attendee
}: AssembleEventDetail_LocalitySubdivisionListProps) {
  const scope = id.replace(/\$/g, '');
  const { isSelected, onToggleSelected } = useLocalitySubdivisionList(id, locality);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_LocalitySubdivisionList" id={id}>
      <div
        className={
          'list-sticky-records__sticky-record ' + (isSelected ? 'list-sticky-records__sticky-record--active' : '')
        }
        data-container=""
        id={`${scope}-DIV_Locality_Header`}
        onClick={onToggleSelected}
      >
        <ResultItemMedia
          id={`${scope}-$b1`}
          showPlaceholderForImage
          inIsRoundImage
          imagePlaceholder={
            <ResultItemBadge id={`${scope}-$b2`}>
              <i className="icon fa-map-marker font-size-h4 text-neutral-6 fa fa-map-marker fa-1x" data-icon="" />
            </ResultItemBadge>
          }
          titlePlaceholder={
            <span className="font-size-s" data-expression="">
              {locality.LocalityName}
            </span>
          }
          actionPlaceholder={
            <div
              className="list-sticky-records__sticky-record__action"
              data-container=""
              id={`${scope}-DIV_ToggleSubsdivisionList`}
            >
              {isSelected ? (
                <i className="icon fa fa-angle-up fa-2x" data-icon="" />
              ) : (
                <i className="icon fa fa-angle-down fa-2x" data-icon="" />
              )}
            </div>
          }
        />
      </div>
      {isSelected && (
        <div data-container="" id={`${scope}-DIV_LocalitySubdivisions_List`}>
          <OSList
            className="list list-group list-sticky-records margin-bottom-s"
            animateItems
            disableVirtualization
            source={locality.AssembleAttendeeSubdivisionList}
            keyOf={(s) => s.Id}
          >
            {(s, i) => (
              <div data-container="" id={`${scope}-DIV_ListSubdivisions`}>
                <AssembleEventDetail_AttendeeSubdivision
                  id={`${scope}-$b3-${String(i)}`}
                  subdivision={s}
                  {...attendee}
                />
              </div>
            )}
          </OSList>
        </div>
      )}
    </OSBlock>
  );
}
