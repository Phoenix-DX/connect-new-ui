// @os-block UBTConnect.App_Common_Blocks.App_NotificationRefresh
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface App_NotificationRefreshProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** DateTime (client format `YYYY-MM-DDTHH:mm:ss`). */
  datetime?: string;
  /** Event Updated. */
  onUpdated?: () => void;
}

/** No markup: OnParametersChanged (a new Datetime) triggers Updated. It does not run on the first render. */
export function App_NotificationRefresh({
  id,
  datetime = '1900-01-01T00:00:00',
  onUpdated,
}: App_NotificationRefreshProps) {
  const previous = useRef(datetime);
  useEffect(() => {
    if (previous.current === datetime) return;
    previous.current = datetime;
    onUpdated?.();
  }, [datetime, onUpdated]);
  return <OSBlock name="App_Common_Blocks.App_NotificationRefresh" id={id} />;
}
