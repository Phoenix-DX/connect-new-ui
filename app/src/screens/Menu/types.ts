import type { UI_ListMenuOption } from '../../shared/UBTConnect/Menu_List/types';
import type { Directory_UserCurrent } from '../../shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';

/** UBTConnect_Utils Menu_ItemRec (MenuItemId, Order, Label, UBTIcon) as Menu_GetList builds it. */
export interface Menu_Item {
  menuItemId: string;
  order: number;
  label: string;
  ubtIcon: string;
}

/** The screen's variables (Menu.mvc.js model :4-22): MenuOptionList and LocalCacheControl_UserInformation
    (Directory_UserCurrent + isFetched). */
export interface MenuModel {
  menuOptionList: UI_ListMenuOption[];
  user: Directory_UserCurrent | null;
  isFetched: boolean;
}
