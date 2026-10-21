// @os-block NavigationHandler.NavigationHandler.NavigationHandler
import { useEffect, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface NavigationHandlerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event Navigation (NavigationEvent): the `dx-before-navigation` CustomEvent (cancelable; detail location, replace,
      resume). */
  onNavigation?: (navigationEvent: Event) => void;
}

/** Empty block (p:NavigationHandler.NavigationHandler.NavigationHandler.mvc.js view). OnInitialize adds a window
    listener for `dx-before-navigation` that raises Navigation; OnDestroy removes it (controller, AddEventListenerJS).
    The event is dispatched before each navigation by the shell's navigation gate (src/shell/navigation/navigationGate.ts),
    the port of the NavigationHandler module's NavigationEventsJS (NavigationHandler.controller.js:858-944). */
export function NavigationHandler({ id, onNavigation }: NavigationHandlerProps) {
  const latest = useRef(onNavigation);
  useLayoutEffect(() => {
    latest.current = onNavigation;
  });
  useEffect(() => {
    const triggerNavigation = (event: Event) => {
      latest.current?.(event);
    };
    window.addEventListener('dx-before-navigation', triggerNavigation);
    return () => {
      window.removeEventListener('dx-before-navigation', triggerNavigation);
    };
  }, []);
  return <OSBlock name="NavigationHandler.NavigationHandler" id={id} />;
}
