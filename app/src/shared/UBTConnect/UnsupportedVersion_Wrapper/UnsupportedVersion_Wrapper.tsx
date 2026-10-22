// @os-block UBTConnect.App_Common.UnsupportedVersion_Wrapper
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PreventBackNavigation } from '../../NavigationHandler/PreventBackNavigation';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';
import { get_IsUnsupportedVersion, type IsUnsupportedVersion } from '../lib/actions';
import { UnsupportedVersion_Browser } from '../UnsupportedVersion_Browser';
import { UnsupportedVersion_Native } from '../UnsupportedVersion_Native';
import { UnsupportedVersion_WebView } from '../UnsupportedVersion_WebView';

export interface UnsupportedVersion_WrapperProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

function Variant({ status }: { status: IsUnsupportedVersion }) {
  if (status.Out_IsUnsupportedAppVersion) return <UnsupportedVersion_Native />;
  if (status.Out_IsUnsupportedWebViewVersion) return <UnsupportedVersion_WebView />;
  return <UnsupportedVersion_Browser />;
}

/** OnInitialize reads Get_IsUnsupportedVersion once (survey:UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc.js:274-300).
    With an unsupported app or browser version: a CustomContainer (padding vertical ExtraLarge) holding the Native,
    WebView or Browser card, and PreventBackNavigation (view, :122-252). Otherwise the wrapper is empty. */
export function UnsupportedVersion_Wrapper({ id }: UnsupportedVersion_WrapperProps) {
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
