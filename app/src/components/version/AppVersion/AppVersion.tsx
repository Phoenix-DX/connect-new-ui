/** @origin UBTConnect.App_Common.Version */
// @os-block UBTConnect.App_Common.Version
import { useEffect, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { get_ConnectVersionDetails } from '@/shared/UBTConnect_Utils/lib/actions';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { UBT_Color } from '@/shared/UBTConnect/lib/staticEntities';

export interface AppVersionProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** "App version [ENV] [native version] (runtime version)" (survey:UBTConnect.App_Common.Version.mvc.js view, OnReady
    :195-232): Get_ConnectVersionDetails, then each part only when set. */
/* One request per real mount, as the original OnReady: the StrictMode double mount of the dev server (where parity runs)
   shares the request in flight (CR-Login-3). */
let inflight: ReturnType<typeof get_ConnectVersionDetails> | null = null;
const loadVersionDetails = () =>
  (inflight ??= get_ConnectVersionDetails().finally(() => {
    inflight = null;
  }));

export function AppVersion({ id }: AppVersionProps) {
  const [version, setVersion] = useState('');
  useEffect(() => {
    let alive = true;
    void loadVersionDetails().then((details) => {
      let text = 'App version';
      if (details.Out_Environment !== '') text = `${text} ${details.Out_Environment.toUpperCase()}`;
      if (details.Out_NativeVersion !== '') text = `${text} ${details.Out_NativeVersion}`;
      if (details.Out_RuntimeVersion !== 0) text = `${text} (${String(details.Out_RuntimeVersion)})`;
      if (alive) setVersion(text);
    });
    return () => {
      alive = false;
    };
  }, []);
  return (
    <OSBlock name="App_Common.Version" id={id}>
      <CustomText inText={version} inTextOptions={{ Color: UBT_Color.Inherit }} />
    </OSBlock>
  );
}
