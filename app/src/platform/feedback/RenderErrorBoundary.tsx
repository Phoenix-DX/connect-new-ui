import { Component, type ErrorInfo, type ReactNode } from 'react';
import { showErrorPage } from '@/platform/feedback/errorPage';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { useIsCurrentEntry } from '@/platform/navigation/osNavigate';

/* The ErrorBoundary of an OutSystems View (OutSystemsReactView.js), one per screen: app/router.tsx puts one around the
   element of every screen route, and ScreenTransitionGroup renders that element in the container of its history entry,
   so each entry has its own instance, as each TST screen has its own View (T1). Design of
   migration/clarify/review/item9-solution.md §2.3 and §3.3, user 2026-10-29 (point 1 (a): one boundary per screen).
   - getDerivedStateFromError sets the error, render returns null, and nothing resets it (T2, R181669): the screen
     container stays and is empty (P3). A navigation to the screen makes a new entry, so a new instance renders it.
   - componentDidCatch is View.onError (T3, R186300): a render loop goes to the error page without a context
     (createRenderLoopError → ErrorHandling.handleError); every other error goes to the flow handler of the screen
     (controllerInstance.handleError → App_Common, E5): a plain Error is the toast of ShowExceptionMessage (E8; probes
     P1 to P3), a system exception is the error page from the active screen only (R6).
   - Difference kept (point 1 (a)): TST empties only the View whose boundary caught the error (P1, P2), and the own
     render of a screen reaches the root boundary, so the error page (P4). Here the whole screen is empty and the toast
     shows in every case. The component also fits around a sub-tree, to get the P1 result there. */

/** View.isLoopError (OutSystemsReactView.js R191429): `/Maximum update depth exceeded/gi.test(e?.message)`. The text
    is the one of the development build of React; the production build throws "Minified React error #185", which does
    not match, on TST as here, so a render loop of a production build goes to the flow handler. */
export function isRenderLoopError(error: unknown): boolean {
  if (typeof error !== 'object' || error === null || !('message' in error)) return false;
  return /Maximum update depth exceeded/i.test(String(error.message));
}

interface BoundaryProps {
  name: string;
  /** the flow context of the screen (R6): true while its history entry is the one the router shows */
  isCurrent: () => boolean;
  children: ReactNode;
}

interface BoundaryState {
  hasError: boolean;
}

class ScreenErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  override state: BoundaryState = { hasError: false };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: unknown, info: ErrorInfo): void {
    const { name, isCurrent } = this.props;
    // App_Common logs the error (E8 Logger.error; D8 of the findings)
    log.error('render error', {
      screen: name,
      message: error instanceof Error ? error.message : String(error),
      componentStack: info.componentStack,
    });
    if (isRenderLoopError(error)) {
      showErrorPage(error); // T3: handleError without a context, the error page (E3)
      return;
    }
    raiseToFlowHandler(error, { active: isCurrent }); // T3 → T4 → E5 (legacy/os/exceptions.ts:92-121)
  }

  override render(): ReactNode {
    return this.state.hasError ? null : this.props.children;
  }
}

/** The render error boundary of a screen (or of a sub-tree): after a render error below it, it renders nothing for the
    rest of its life and sends the error to the flow handler of the screen. `name` is the screen name, for the log. */
export function RenderErrorBoundary({ name, children }: { name: string; children: ReactNode }): ReactNode {
  const isCurrent = useIsCurrentEntry();
  return (
    <ScreenErrorBoundary name={name} isCurrent={isCurrent}>
      {children}
    </ScreenErrorBoundary>
  );
}
