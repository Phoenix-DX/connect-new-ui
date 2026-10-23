/** @origin UBTConnect.App_Common.UnsupportedVersion_Wrapper */
// @os-block UBTConnect.App_Common.UnsupportedVersion_Wrapper
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { get_IsUnsupportedVersion, type IsUnsupportedVersion } from '@/shared/UBTConnect/lib/actions';
import { UnsupportedVersionBrowser } from '@/components/version/UnsupportedVersionBrowser';
import { UnsupportedVersionNative } from '@/components/version/UnsupportedVersionNative';
import { UnsupportedVersionWebView } from '@/components/version/UnsupportedVersionWebView';

export interface UnsupportedVersionWrapperProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

function Variant({ status }: { status: IsUnsupportedVersion }) {
  if (status.Out_IsUnsupportedAppVersion) return <UnsupportedVersionNative />;
  if (status.Out_IsUnsupportedWebViewVersion) return <UnsupportedVersionWebView />;
  return <UnsupportedVersionBrowser />;
}

/** OnInitialize reads Get_IsUnsupportedVersion once (survey:UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc.js:274-300).
    With an unsupported app or browser version: a CustomContainer (padding vertical ExtraLarge) holding the Native,
    WebView or Browser card, and PreventBackNavigation (view, :122-252). Otherwise the wrapper is empty. */
export function UnsupportedVersionWrapper({ id }: UnsupportedVersionWrapperProps) {
  const [status] = useState(get_IsUnsupportedVersion);
  return (
    <OSBlock name="App_Common.UnsupportedVersion_Wrapper" id={id}>
      {(status.Out_IsUnsupportedAppVersion || status.Out_IsUnsupportedBrowserVersion) && (
        <>
          <CustomContainer options={{ PaddingSize: { VerticalSizeId: UBT_Size.ExtraLarge } }}>
            <Variant status={status} />
          </CustomContainer>
          <PreventBackNavigation />
        </>
      )}
    </OSBlock>
  );
}
