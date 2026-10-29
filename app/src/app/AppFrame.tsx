import { FLAG_OVERRIDES_BUILT } from '@/platform/config/config';
import { FlagPanel } from '@/platform/flags';
import { AppStart } from '@/platform/bootstrap/AppStart';
import { CommonUiHost } from '@/platform/feedback/dialogs';
import { AppLockHost } from '@/platform/navigation/AppLockHost';
import { NavigationHost, ScreenTransitionGroup } from '@/platform/navigation';
import { StylesheetHost } from '@/legacy/os/StylesheetHost';
import { RouteGuard } from './RouteGuard';
import { flagRedirectTarget, ignoresLockScreen } from './routes';
import { prepareScreen, showsScreen } from './screens';

/* OutSystems runtime containers. Screen-level layout (header, content, bottom bar) is rendered by each
   screen through the shell components, exactly like OutSystems screens include their layout block.
   Global app-shell logic (feedback messages, dialogs, session, back handling) mounts here: see app-shell.spec.md.
   StylesheetHost keeps the current screen's original stylesheets in <head> and holds the first render until they load.
   ScreenTransitionGroup renders the runtime's screen containers (`.active-screen.screen-container`, one per history
   entry while a screen transition runs: shell/navigation/ScreenTransitionGroup.tsx). RouteGuard applies the redirects
   that follow the app start (route meta, routes.ts); NavigationHost gives the flag redirects of the route meta and the screen
   paths to useOsNavigate (a path that shows no screen is a full page load, item 9 D3). The flag panel is a review tool of dev and demo builds (FLAG_OVERRIDES_BUILT). */
export function AppFrame() {
  return (
    <StylesheetHost>
      <div id="transitionContainer">
        <AppStart />
        <RouteGuard />
        <NavigationHost redirect={flagRedirectTarget} isScreen={showsScreen} />
        <ScreenTransitionGroup prepare={prepareScreen} isScreen={showsScreen} />
        <AppLockHost ignoresLockScreen={ignoresLockScreen} />
        <CommonUiHost />
        {FLAG_OVERRIDES_BUILT && <FlagPanel />}
      </div>
    </StylesheetHost>
  );
}
