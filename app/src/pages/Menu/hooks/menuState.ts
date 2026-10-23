import { Connect_Menu_Items, UBT_Icons_Menu } from '@/pages/Menu/staticEntities';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import { UBT_Icons2 } from '@/shared/UBTConnect/lib/staticEntities';
import type { UI_ListMenuOption } from '@/shared/UBTConnect/Menu_List/types';

/** The state of the Menu screen and its reducer, with the client actions of the screen as pure functions.
    @origin UBTConnect.App_Menu.Menu */

/** UBTConnect_Utils Menu_ItemRec (MenuItemId, Order, Label, UBTIcon) as Menu_GetList builds it. */
interface Menu_Item {
  menuItemId: string;
  order: number;
  label: string;
  ubtIcon: string;
}

/** The screen variables. The OutSystems name of each variable is in brackets. They are not kept in the view cache. */
export interface MenuState {
  /** [MenuOptionList] The rows of Menu_List. */
  menuOptionList: UI_ListMenuOption[];
  /** [LocalCacheControl_UserInformation] The signed-in user; null (the default record) until the cache answers. */
  user: Directory_UserCurrent | null;
  /** [LocalCacheControl_UserInformation.isFetched] The user record has come. */
  isFetched: boolean;
}

/** The changes of the state: the result of CacheControl_UserInfo_Wrapper. */
type MenuAction = { type: 'userInformationFetched'; user: Directory_UserCurrent };

/** UBTConnect_Utils Menu_GetList (the Services copy): six rows appended in this order with their Order values
    (2, 4, 5, 6, 6, 7). */
export function menu_GetList(): Menu_Item[] {
  return [
    {
      menuItemId: Connect_Menu_Items.PINAndBiometrics,
      order: 2,
      label: Connect_Menu_Items.PINAndBiometrics,
      ubtIcon: UBT_Icons_Menu.Password,
    },
    {
      menuItemId: Connect_Menu_Items.ContactUs,
      order: 4,
      label: Connect_Menu_Items.ContactUs,
      ubtIcon: UBT_Icons_Menu.Help,
    },
    {
      menuItemId: Connect_Menu_Items.SubscriptionAndPayments,
      order: 5,
      label: Connect_Menu_Items.SubscriptionAndPayments,
      ubtIcon: UBT_Icons_Menu.ShoppingBasket,
    },
    {
      menuItemId: Connect_Menu_Items.RequestPhotoUpdate,
      order: 6,
      label: Connect_Menu_Items.RequestPhotoUpdate,
      ubtIcon: UBT_Icons_Menu.ImageGallery,
    },
    {
      menuItemId: Connect_Menu_Items.TermsAndPolicies,
      order: 6,
      label: Connect_Menu_Items.TermsAndPolicies,
      ubtIcon: UBT_Icons_Menu.BookOpen,
    },
    {
      menuItemId: Connect_Menu_Items.LogOut,
      order: 7,
      label: Connect_Menu_Items.LogOut,
      ubtIcon: UBT_Icons_Menu.Logout,
    },
  ];
}

/** ScreenEvent_OnInitialize, the MenuOptionList part: Menu_GetList.MenuItemsList mapped to UI_ListMenuOption (Id,
    IconId, Label). Subscription and Payments gets IconRightText "Dummy" and IconRightLoading; Request Photo Update gets
    IsLoading. */
export function toMenuOptionList(items: Menu_Item[]): UI_ListMenuOption[] {
  return items.map((source) => ({
    Id: source.menuItemId,
    IconId: source.ubtIcon,
    Label: source.label,
    IconRightText: source.menuItemId === Connect_Menu_Items.SubscriptionAndPayments ? 'Dummy' : '',
    IconRightLoading: source.menuItemId === Connect_Menu_Items.SubscriptionAndPayments,
    IsLoading: source.menuItemId === Connect_Menu_Items.RequestPhotoUpdate,
  }));
}

/** CacheControl_UserInfo_WrapperResult, the MenuOptionList part: the Subscription and Payments row (when present) gets
    IconRight OpenNew, IconRightText = SubscriptionType and IconRightLoading False; the Request Photo Update row (when
    present) gets IsLoading False and is removed when the user is not a householder and not the spouse of one. */
function applyUserInformation(list: UI_ListMenuOption[], user: Directory_UserCurrent): UI_ListMenuOption[] {
  const next = list.map((option) =>
    option.Id === Connect_Menu_Items.SubscriptionAndPayments
      ? {
          ...option,
          IconRight: UBT_Icons2.OpenNew,
          IconRightText: user.Directory_UserCurrent_Subscription.SubscriptionType,
          IconRightLoading: false,
        }
      : option,
  );
  const photo = next.findIndex((option) => option.Id === Connect_Menu_Items.RequestPhotoUpdate);
  if (photo === -1) return next;
  next[photo] = { ...next[photo], IsLoading: false };
  const member = user.Directory_UserCurrent_Member;
  if (!(member.isHouseholder || member.SpouseIsHouseholder)) next.splice(photo, 1);
  return next;
}

/** ScreenEvent_OnInitialize: MenuOptionList from Menu_GetList; the user record stays the default until the cache
    answers (isFetched False). */
export function initialMenuState(): MenuState {
  return { menuOptionList: toMenuOptionList(menu_GetList()), user: null, isFetched: false };
}

/** CacheControl_UserInfo_WrapperResult (the only action): the user record, the changed rows and isFetched True. */
export function menuReducer(state: MenuState, action: MenuAction): MenuState {
  return {
    menuOptionList: applyUserInformation(state.menuOptionList, action.user),
    user: action.user,
    isFetched: true,
  };
}
