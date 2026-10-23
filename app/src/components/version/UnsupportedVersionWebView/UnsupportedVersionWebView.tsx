/** @origin UBTConnect.App_Common.UnsupportedVersion_WebView */
// @os-block UBTConnect.App_Common.UnsupportedVersion_WebView
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface UnsupportedVersionWebViewProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Shown only in the store app (decision U16: not built for the web); nothing captured. */
export function UnsupportedVersionWebView({ id }: UnsupportedVersionWebViewProps) {
  return (
    <OSBlock name="App_Common.UnsupportedVersion_WebView" id={id}>
      <NotCaptured name="App_Common.UnsupportedVersion_WebView (store app only, decision U16)" />
    </OSBlock>
  );
}
