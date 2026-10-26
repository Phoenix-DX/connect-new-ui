import { OSBlock } from '@/components/ui/os/OSBlock';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { navigationStorage } from './actions';

export interface FocusScrollAnchorOnBackProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** ListIndex. */
  listIndex: number;
  /** ScrollAnchorId. */
  scrollAnchorId: string;
}

/** An always-empty `$if(False)` and a BackNavigationHandler (Priority -1). Its BackNavigation stores
    { id: ScrollAnchorId, index: ListIndex } as "dx-entering-scroll-anchor" in the navigation storage, then raises the
    block's BackNavigation event, which ScreenBlock_AssembleDetail does not handle.
    @origin NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack */
export function FocusScrollAnchorOnBack({ id, listIndex, scrollAnchorId }: FocusScrollAnchorOnBackProps) {
  const scope = id.replace(/\$/g, '');
  return (
    <OSBlock name="ScrollAnchors.FocusScrollAnchorOnBack" id={id}>
      <BackNavigationHandler
        id={`${scope}-$b1`}
        priority={-1}
        onBackNavigation={() => {
          navigationStorage.set('dx-entering-scroll-anchor', { id: scrollAnchorId, index: listIndex });
        }}
      />
    </OSBlock>
  );
}
