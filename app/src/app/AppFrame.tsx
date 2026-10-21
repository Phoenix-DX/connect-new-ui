import { FlagPanel } from '../components/FlagPanel';
import { AppStart } from '../shell/AppStart';
import { CommonUiHost } from '../shell/dialogs';
import { AppLockHost } from '../shell/AppLockHost';
import { NavigationHost, ScreenTransitionGroup } from '../shell/navigation';
import { StylesheetHost } from '../shell/StylesheetHost';
import { prepareScreen, showsScreen } from './screens';

/* OutSystems runtime containers. Screen-level layout (header, content, bottom bar) is rendered by each
   screen through the shell components, exactly like OutSystems screens include their layout block.
   Global app-shell logic (feedback messages, dialogs, session, back handling) mounts here: see app-shell.spec.md.
   StylesheetHost keeps the current screen's original stylesheets in <head> and holds the first render until they load.
   ScreenTransitionGroup renders the runtime's screen containers (`.active-screen.screen-container`, one per history
   entry while a screen transition runs: shell/navigation/ScreenTransitionGroup.tsx). */
export function AppFrame() {
  return (
    <StylesheetHost>
      <div id="transitionContainer">
        <AppStart />
        <NavigationHost />
        <ScreenTransitionGroup prepare={prepareScreen} isScreen={showsScreen} />
        <AppLockHost />
        <CommonUiHost />
        <FlagPanel />
      </div>
    </StylesheetHost>
  );
}
