import { Component, type ErrorInfo, type ReactNode } from 'react';
import { NotCaptured } from '@/components/NotCaptured';
import { log } from '@/lib/log';

/* Catches render errors below it, logs them, and shows the review marker: the original app's own error screen is not
   captured yet, so nothing is invented here (see app-shell.spec.md). */
interface Props {
  children: ReactNode;
}
interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  override state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    log.error('render error', { message: error.message, stack: info.componentStack });
  }

  override render() {
    if (this.state.error) {
      return (
        <NotCaptured name="error screen of the original app (render error)">{this.state.error.message}</NotCaptured>
      );
    }
    return this.props.children;
  }
}
