// @os-block UBTConnect.Directory_CommonBlocks.Directory_EmptyState
import { OSBlock } from '@/components/ui/os/OSBlock';
import { EmptyList } from '@/shared/UBTConnectLibrary/EmptyList';
import { getEntityType_Icon } from '@/shared/UBTConnect_Utils/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';

export interface Directory_EmptyStateProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Connect_Entity identifier (its Id is shown in the texts). */
  entityTypeId?: string;
  location?: string;
}

/** Empty directory list (migration/blocks/sources/UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc.js:154-225,
    no capture): EmptyList with the entity type's icon (GetEntityType_Icon), the title "No <entities> <location>" and
    the text "There doesn't seem to be any <entity> in" + "this locality.". Interchange is pluralized in lower case. */
export function Directory_EmptyState({ id, entityTypeId = '', location = 'found nearby' }: Directory_EmptyStateProps) {
  const isInterchange = entityTypeId === Connect_Entity.Interchange;
  return (
    <OSBlock name="Directory_CommonBlocks.Directory_EmptyState" id={id}>
      <EmptyList
        iconId={getEntityType_Icon(entityTypeId)}
        titlePlaceholder={
          <span data-expression="">{`No ${isInterchange ? `${entityTypeId.toLowerCase()}s` : entityTypeId} ${location}`}</span>
        }
        textPlaceholder={
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
