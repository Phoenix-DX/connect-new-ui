import { useLocation } from 'react-router';
import type { RouteInfo } from './routes.generated';
import { NotCaptured } from '@/platform/feedback/NotCaptured';

export function NotMigrated({ route }: { route: RouteInfo | null }) {
  const loc = useLocation();
  return (
    <NotCaptured name={route ? `screen ${route.screen} (not migrated yet)` : 'unknown route'}>
      <code className="rv-code">{loc.pathname + loc.search}</code>
      {route && route.inputs.length > 0 && <span>Inputs: {route.inputs.join(', ')}</span>}
    </NotCaptured>
  );
}
