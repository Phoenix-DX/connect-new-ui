// @os-block Connect2_LegacyShared.Layout.MenuIcon_Back
import { OSBlock } from '../../../components/OSBlock';
import { useNavigateBack } from '../../../shell/navigation';
import { OSLink } from '../../lib/OSLink';

export interface MenuIcon_BackProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Legacy back arrow of the header (p:Connect2_LegacyShared.Layout.MenuIcon_Back.mvc.js view): a link whose OnClick
    is `OS.Navigation.navigateBack(null)` (previous screen). */
export function MenuIcon_Back({ id }: MenuIcon_BackProps) {
  const navigateBack = useNavigateBack();
  return (
    <OSBlock name="Layout.MenuIcon_Back" id={id}>
      <div className="app-menu-icon back" data-container="" style={{ marginTop: 0 }}>
        <OSLink className="app-menu-back OSFillParent" onClick={navigateBack}>
          <i className="icon fa fa-arrow-left fa-1x" data-icon="" style={{ fontSize: '1.5em' }} />
        </OSLink>
      </div>
    </OSBlock>
  );
}
