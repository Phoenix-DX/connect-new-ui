/** @origin Connect2_LegacyShared.Layout.MenuIcon_Back */
// @os-block Connect2_LegacyShared.Layout.MenuIcon_Back
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useNavigateBack } from '@/platform/navigation';
import { OSLink } from '@/shared/lib/OSLink';

export interface MenuIconBackProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Legacy back arrow of the header (p:Connect2_LegacyShared.Layout.MenuIcon_Back.mvc.js view): a link whose OnClick
    is `OS.Navigation.navigateBack(null)` (previous screen). */
export function MenuIconBack({ id }: MenuIconBackProps) {
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
