import { Component, type ErrorInfo, type ReactNode } from 'react';
import { showErrorPage } from '@/platform/feedback/errorPage';
import { log } from '@/platform/log/log';

/* The boundary around RouterProvider (main.tsx): it covers RouterProvider itself, outside the screen boundaries
   (platform/feedback/RenderErrorBoundary.tsx) and the errorElement of the root route (RouteError.tsx). It is the TST
   root boundary of the Router (T5): runtime.handleError → ErrorHandling.handleError without a context, so the error
   page (E3, E4; P4). It logs, opens the error page and renders nothing; no marker in any build
   (migration/clarify/review/item9-solution.md §3.3, user 2026-10-29 point 2 (a)). */
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  override state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  override componentDidCatch(error: unknown, info: ErrorInfo) {
    log.error('render error', {
      message: error instanceof Error ? error.message : String(error),
      stack: info.componentStack,
    });
    showErrorPage(error);
  }

  override render() {
    return this.state.hasError ? null : this.props.children;
  }
}
