// @os-block UBT_AppManager.Layouts.AppManager_Events
import { OSBlock } from '../../../components/OSBlock';

/** Layouts.AppManager_Events: renders nothing of its own (captured empty widget, dom/default.html:137). The original
    registers the identity-provider callback handlers (OnReady GetHandlersJS) and raises OnCallback to Login's
    AppManager_Callback; with the mock sign-in (D3(a)/U4) the shell runs the sign-in at once, so no callback is
    registered here (Q3). */
export function AppManager_Events({ id }: { id?: string }) {
  return <OSBlock name="Layouts.AppManager_Events" id={id} />;
}
