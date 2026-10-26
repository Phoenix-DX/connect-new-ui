import { OSBlock } from '@/components/ui/os/OSBlock';

/** Renders nothing of its own (captured empty widget). The original registers the identity-provider callback handlers
    (OnReady GetHandlersJS) and raises OnCallback to the AppManager_Callback of Login; with the mock sign-in (D3(a), U4)
    the session signs in at once, so no callback is registered here (Q3).
    @origin UBT_AppManager.Layouts.AppManager_Events */
export function AppManagerEvents({ id }: { id?: string }) {
  return <OSBlock name="Layouts.AppManager_Events" id={id} />;
}
