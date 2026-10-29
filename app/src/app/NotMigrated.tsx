import { useLocation } from 'react-router';
import type { RouteInfo } from './routes.generated';
import { NotCaptured } from '@/platform/feedback/NotCaptured';

/* A route whose page module does not exist yet. A path that no route has renders UnknownPath (item 9 D3). */
export function NotMigrated({ route }: { route: RouteInfo }) {
  const loc = useLocation();
  return (
    <NotCaptured name={`screen ${route.screen} (not migrated yet)`}>
      <code className="rv-code">{loc.pathname + loc.search}</code>
      {route.inputs.length > 0 && <span>Inputs: {route.inputs.join(', ')}</span>}
    </NotCaptured>
  );
}
