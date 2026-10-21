// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.EventBooklet_MembersItem
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { getFormattedDate_Weekday } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import type { EventBookletMember } from '../types';

/* EventBooklet_MembersItem (MI = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Blocks.EventBooklet_MembersItem.mvc.js,
   view :122-286). No capture: markup from the compiled view. */

export interface EventBooklet_MembersItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** MemberItem (EventBookletMembersRec). */
  memberItem: EventBookletMember;
  /** Event Click_Member (click on the name). */
  onClickMember?: () => void;
  /** Event Click_Host (click on the host). */
  onClickHost?: () => void;
}

/** The member name: Title + " " (when a name follows), then "First Last", the first or the last name (MI :140-160). */
function memberName(m: EventBookletMember): string {
  const title = m.Title !== '' ? (m.FirstName !== '' || m.LastName !== '' ? `${m.Title} ` : '') : '';
  const name = m.FirstName !== '' ? (m.LastName !== '' ? `${m.FirstName} ${m.LastName}` : m.FirstName) : m.LastName;
  return `${title}${name}`;
}

/** A booklet row (MI :122-284): `orbit-booklet-list-members-item` with the name (click → Click_Member), the days (a
    List of the weekday first letters, Sunday as "L" of "Lord's Day Meal", separated by "|"; "-" without days) and the
    host ("-" without one; click → Click_Host). */
export function EventBooklet_MembersItem({
  id,
  memberItem: m,
  onClickMember,
  onClickHost,
}: EventBooklet_MembersItemProps) {
  const last = m.Days.length - 1;
  return (
    <OSBlock name="Orbit_Blocks.EventBooklet_MembersItem" id={id}>
      <div className="orbit-booklet-list-members-item" data-container="">
        <div className="orbit-booklet-list-members-title" data-container="" onClick={onClickMember}>
          <span data-expression="">{memberName(m)}</span>
        </div>
        <div className="orbit-booklet-list-members-days" data-container="">
          {m.Days.length > 0 ? (
            <OSList
              className="list list-group"
              animateItems
              disableVirtualization
              source={m.Days}
              keyOf={(d: string) => d}
            >
              {(d, i) => (
                <span data-expression="">{`${getFormattedDate_Weekday(d, true, true)}${i === last ? '' : '|'}`}</span>
              )}
            </OSList>
          ) : (
            '-'
          )}
        </div>
        <div className="orbit-booklet-list-members-host" data-container="" onClick={onClickHost}>
          <span data-expression="">{m.Host !== '' ? m.Host : '-'}</span>
        </div>
      </div>
    </OSBlock>
  );
}
