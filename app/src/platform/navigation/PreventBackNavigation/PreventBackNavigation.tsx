/** @origin NavigationHandler.NavigationHandler.PreventBackNavigation */
// @os-block NavigationHandler.NavigationHandler.PreventBackNavigation
import { OSBlock } from '@/components/ui/os/OSBlock';
import { BACK_PRIORITY, usePreventBackNavigation } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import type { BackNavigationEvent } from './types';

export interface PreventBackNavigationProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event BackNavigationPrevented. */
  onBackNavigationPrevented?: (event: BackNavigationEvent) => void;
}

/** Prevents every back navigation while mounted, at the lock-screen priority
    (p:NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js:133-135; PreventNavigation then
    BackNavigationPrevented, :212-216). The shell hook `usePreventBackNavigation` is that handler; the nested
    BackNavigationHandler is rendered for its wrapper with the same priority and no handler of its own. */
export function PreventBackNavigation({ id, onBackNavigationPrevented }: PreventBackNavigationProps) {
  usePreventBackNavigation(true, onBackNavigationPrevented);
  return (
    <OSBlock name="NavigationHandler.PreventBackNavigation" id={id}>
      <BackNavigationHandler priority={BACK_PRIORITY.lockScreen} />
    </OSBlock>
  );
}
