// @os-block Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface NC_ErrorScreenProps {
  id: string;
  inErrorMessage?: string;
  /** Placeholder Placeholder_Icon. */
  placeholderIcon?: ReactNode;
}

/** NewConnect_Utilities.NC_ErrorScreen (p:…/Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc.js view;
    dom/default.html:208-218): `nc-error-screen-info` > `text-align-center` > Placeholder_Icon and In_ErrorMessage.
    In_MatchMainContentHeight is False here, so the height style and the OnReady SetHeight JS do nothing. */
export function NC_ErrorScreen({
  id,
  inErrorMessage = 'No information available.',
  placeholderIcon,
}: NC_ErrorScreenProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="NewConnect_Utilities.NC_ErrorScreen" id={id}>
      <div className="nc-error-screen-info" data-container="">
        <div className="text-align-center" data-container="">
          <div className="margin-bottom-m text-neutral-4 font-size-h5" id={`${scope}-Placeholder_Icon`}>
            {placeholderIcon}
          </div>
          <span data-expression="">{inErrorMessage}</span>
        </div>
      </div>
    </OSBlock>
  );
}
