import type { UI_ListMenuOption } from '@/shared/UBTConnect/Menu_List/types';
import { UBT_Icons2 } from '@/shared/UBTConnect/lib/staticEntities';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import { Connect_Menu_Items, UBT_Icons_Menu } from './staticEntities';
import type { Menu_Item } from '@/screens/Menu/types';

/** UBTConnect_Utils Menu_GetList (p:UBTConnect_Utils.controller.js:4129-4205, Services copy): six rows appended in this
    order with their Order values (2, 4, 5, 6, 6, 7). */
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

/** ScreenEvent_OnInitialize (Menu.mvc.js:881-919): MenuOptionList = Menu_GetList.MenuItemsList mapped to
    UI_ListMenuOption: Id, IconId, Label; Subscription and Payments gets IconRightText "Dummy" and IconRightLoading;
    Request Photo Update gets IsLoading. */
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

/** CacheControl_UserInfo_WrapperResult (Menu.mvc.js:795-880), the MenuOptionList part: the Subscription and Payments
    row (when present) gets IconRight OpenNew, IconRightText = SubscriptionType and IconRightLoading False; the Request
    Photo Update row (when present) gets IsLoading False and is removed when the user is not a householder and not the
    spouse of one. */
export function applyUserInformation(list: UI_ListMenuOption[], user: Directory_UserCurrent): UI_ListMenuOption[] {
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
