/** @origin UBTConnect.Directory_CommonBlocks.Directory_EmptyState */
// @os-block UBTConnect.Directory_CommonBlocks.Directory_EmptyState
import { OSBlock } from '@/components/ui/os/OSBlock';
import { EmptyState } from '@/components/ui/EmptyState';
import { getEntityType_Icon } from '@/shared/UBTConnect_Utils/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';

export interface DirectoryEmptyStateProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Connect_Entity identifier (its Id is shown in the texts). */
  entityTypeId?: string;
  location?: string;
}

/** Empty directory list, a preset of `EmptyState` (components/ui; the compiled view is the reference, no capture):
    the entity type's icon (GetEntityType_Icon), the title "No <entities> <location>" and the text
    "There doesn't seem to be any <entity> in" + "this locality.". Interchange is pluralized in lower case. */
export function DirectoryEmptyState({ id, entityTypeId = '', location = 'found nearby' }: DirectoryEmptyStateProps) {
  const isInterchange = entityTypeId === Connect_Entity.Interchange;
  return (
    <OSBlock name="Directory_CommonBlocks.Directory_EmptyState" id={id}>
      <EmptyState
        iconId={getEntityType_Icon(entityTypeId)}
        title={
          <span data-expression="">{`No ${isInterchange ? `${entityTypeId.toLowerCase()}s` : entityTypeId} ${location}`}</span>
        }
        text={
          <>
            <span data-expression="">{`There doesn't seem to be any ${entityTypeId.toLowerCase()}${isInterchange ? 's' : ''} in`}</span>
            <div data-container="">
              <span data-expression="">this locality.</span>
            </div>
          </>
        }
      />
    </OSBlock>
  );
}
