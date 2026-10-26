/** @origin NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top */
// @os-block NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface LayoutRuntimeTopProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Empty block in every layout. Its logic (the window.dx.Navigation.BeforeBackNavigation queue and
    AddDefaultBackNavigationHandlers) is the shell's back queue: `src/shell/navigation` (NavigationHost, backQueue). */
export function LayoutRuntimeTop({ id }: LayoutRuntimeTopProps) {
  return <OSBlock name="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id={id} />;
}
