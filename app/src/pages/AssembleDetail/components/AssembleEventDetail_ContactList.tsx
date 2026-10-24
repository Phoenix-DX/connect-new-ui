import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import type { AssembleEventContactEvents } from '@/pages/AssembleDetail/hooks/useAssembleEventContact';
import { useAssembleEventContactList } from '@/pages/AssembleDetail/hooks/useAssembleEventContactList';
import { AssembleEventDetail_Contact } from './AssembleEventDetail_Contact';

export interface AssembleEventDetail_ContactListProps extends AssembleEventContactEvents {
  /** OutSystems instance id of the block. */
  id: string;
  /** AssembleEventContactIdList: the member ids of the GMS local contacts. */
  assembleEventContactIdList: string[];
}

/** A `list list-group` List of AssembleEventDetail_Contact, one per contact. The flow is in
    useAssembleEventContactList.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList */
export function AssembleEventDetail_ContactList({
  id,
  assembleEventContactIdList,
  ...events
}: AssembleEventDetail_ContactListProps) {
  const scope = id.replace(/\$/g, '');
  const { contacts, isDataFetched } = useAssembleEventContactList(assembleEventContactIdList);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_ContactList" id={id}>
      <OSList
        className="list list-group"
        animateItems
        source={contacts}
        keyOf={(c, i) => `${c.ContactDetails.Id}-${String(i)}`}
      >
        {(c, i) => (
          <AssembleEventDetail_Contact
            id={`${scope}-$b1-${String(i)}`}
            contact={c}
            isDataFetched={isDataFetched}
            {...events}
          />
        )}
      </OSList>
    </OSBlock>
  );
}
