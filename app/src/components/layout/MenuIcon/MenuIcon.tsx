/** @origin Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI */
// @os-block Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useNavigateBack } from '@/platform/navigation';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';

export interface MenuIconProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** MenuAction identifier (`MenuAction` constants); Hidden hides the icon. */
  menuAction?: string;
}

/** Header back button of the legacy layout (p:Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js view):
    class `app-menu-icon` plus ` back` when MenuAction is Back, hidden when it is Hidden. A click runs OnBack, which
    navigates back to the previous screen whatever the MenuAction (controller `_onBack$Action`). */
export function MenuIcon({ id, menuAction = '' }: MenuIconProps) {
  const navigateBack = useNavigateBack();
  return (
    <OSBlock name="Layout.MenuIcon__UpdatedOSUI" id={id}>
      {menuAction !== MenuAction.Hidden && (
        <div
          className={`app-menu-icon${menuAction !== MenuAction.Back ? '' : ' back'}`}
          data-container=""
          style={{ marginTop: 0 }}
        >
          <div
            aria-label="Back to previous screen"
            className="menu-back"
            data-container=""
            role="button"
            style={{ cursor: 'pointer' }}
            tabIndex={0}
            onClick={() => {
              navigateBack();
            }}
          >
            <i className="icon fa fa-arrow-left fa-1x" data-icon="" />
          </div>
        </div>
      )}
    </OSBlock>
  );
}
