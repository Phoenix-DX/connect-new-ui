// @os-block OutSystemsUI_2_23.Private.NetworkStatusChanged
import { useEffect, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface NetworkStatusChangedProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event NetworkStatusChanged(IsOnline): raised when the browser goes online or offline. */
  onNetworkStatusChanged?: (isOnline: boolean) => void;
}

/** OSUI NetworkStatusChanged (p:OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js): IsOnline starts True (:13-14);
    OnReady reads the network status and runs Online or Offline (:425-440); window `online` / `offline` listeners run
    them later (Init.SetEventListenersJS, :670-671). Online / Offline raise the event only when IsOnline changes
    (:205-230, :280-296). The Cordova `deviceready` path (document listeners) does not apply on the web.
    Not the shell's useNetworkStatusEvents: that is UBTConnect's NetworkDetection (client variable only), which has no
    event for this block to raise. */
export function NetworkStatusChanged({ id, onNetworkStatusChanged }: NetworkStatusChangedProps) {
  const latest = useRef(onNetworkStatusChanged);
  useLayoutEffect(() => {
    latest.current = onNetworkStatusChanged;
  });
  useEffect(() => {
    let isOnline = true;
    const online = () => {
      if (isOnline) return;
      isOnline = true;
      latest.current?.(isOnline);
    };
    const offline = () => {
      if (!isOnline) return;
      isOnline = false;
      latest.current?.(isOnline);
    };
    if (window.navigator.onLine) online();
    else offline();
    window.addEventListener('offline', offline);
    window.addEventListener('online', online);
    return () => {
      window.removeEventListener('offline', offline);
      window.removeEventListener('online', online);
    };
  }, []);
  return (
    <OSBlock name="Private.NetworkStatusChanged" id={id}>
      <div data-container="" />
    </OSBlock>
  );
}
