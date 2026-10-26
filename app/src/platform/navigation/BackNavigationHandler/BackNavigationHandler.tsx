/** @origin NavigationHandler.NavigationHandler.BackNavigationHandler */
// @os-block NavigationHandler.NavigationHandler.BackNavigationHandler
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useBackHandler } from '@/platform/navigation';
import type { BackNavigationEvent } from './types';

export interface BackNavigationHandlerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Priority in the back-navigation queue (higher runs first); BACK_PRIORITY has the app's values. */
  priority?: number;
  /** Event BackNavigation: call `event.preventDefault()` to stop the back navigation. */
  onBackNavigation?: (event: BackNavigationEvent) => void;
}

/** Joins the shell's back-navigation queue while mounted (added on ready, removed on destroy:
    p:NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js:387-392). Without an event handler the entry
    would do nothing, so none is added (same outcome: the queue goes on to the next handler). */
export function BackNavigationHandler({ id, priority = 0, onBackNavigation }: BackNavigationHandlerProps) {
  useBackHandler(
    priority,
    (event) => {
      onBackNavigation?.(event);
    },
    onBackNavigation !== undefined,
  );
  return <OSBlock name="NavigationHandler.BackNavigationHandler" id={id} />;
}
