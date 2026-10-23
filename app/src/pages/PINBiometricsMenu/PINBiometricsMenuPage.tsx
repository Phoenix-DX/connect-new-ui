import { DetailLayout } from '@/components/layout';
import { MenuList } from '@/components/menu/MenuList';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { useNavigateBack } from '@/platform/navigation';
import { usePINBiometricsMenu } from './hooks/usePINBiometricsMenu';

/** @origin UBTConnect.App_Menu.PINBiometricsMenu
    The PIN & Biometrics route: the detail layout (primary header, title centred) titled "PIN & Biometrics", with the
    Menu_List of the rows as content. The header right, the header content, the bottom and the CommonUI placeholders are
    empty: the screen has no CommonUI (useNoCommonUi). The flows are in usePINBiometricsMenu. */
export default function PINBiometricsMenu() {
  useNoCommonUi();
  const navigateBack = useNavigateBack();
  const { menuSection, onMenuOption } = usePINBiometricsMenu();

  return (
    <DetailLayout
      id="$b1"
      onBack={navigateBack}
      headerTitle="PIN & Biometrics"
      content={<MenuList id="$b2" inMenuSection={menuSection} onOnClickMenuOption={onMenuOption} />}
    />
  );
}
