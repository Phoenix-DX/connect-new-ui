import { describe, expect, it } from 'vitest';
import { mockDirectoryUser } from '@/platform/session/mockUser';
import { initialMenuState, menu_GetList, menuReducer, toMenuOptionList } from './menuState';

const toggles = { policies: false, expired: false, householder: false };
const member = mockDirectoryUser(toggles);
const householder = mockDirectoryUser({ ...toggles, householder: true });
const spouseOfHouseholder = {
  ...member,
  Directory_UserCurrent_Member: { ...member.Directory_UserCurrent_Member, SpouseIsHouseholder: true },
};

describe('Menu client actions', () => {
  it('Menu_GetList gives the six rows in their order', () => {
    expect(menu_GetList().map((item) => [item.menuItemId, item.order, item.ubtIcon])).toEqual([
      ['PIN & Biometrics', 2, 'connect-icon-password'],
      ['Contact Us', 4, 'connect-icon-help'],
      ['Subscription and Payments', 5, 'connect-icon-shopping_basket'],
      ['Request Photo Update', 6, 'connect-icon-image_gallery'],
      ['Terms & Policies', 6, 'connect-icon-book_open'],
      ['Log out', 7, 'connect-icon-logout'],
    ]);
  });

  it('OnInitialize: the subscription row loads with "Dummy" and the photo row loads', () => {
    const state = initialMenuState();
    expect(state.user).toBeNull();
    expect(state.isFetched).toBe(false);
    expect(state.menuOptionList).toEqual(toMenuOptionList(menu_GetList()));
    const byId = new Map(state.menuOptionList.map((option) => [option.Id, option]));
    expect(byId.get('Subscription and Payments')).toMatchObject({
      Label: 'Subscription and Payments',
      IconId: 'connect-icon-shopping_basket',
      IconRightText: 'Dummy',
      IconRightLoading: true,
      IsLoading: false,
    });
    expect(byId.get('Request Photo Update')).toMatchObject({
      IconRightText: '',
      IconRightLoading: false,
      IsLoading: true,
    });
    expect(byId.get('Log out')).toMatchObject({ IconRightText: '', IconRightLoading: false, IsLoading: false });
  });

  it('OnInitialize of a restored view: the cached user record stays, MenuOptionList is built again', () => {
    const state = initialMenuState({ user: householder, isFetched: true });
    expect(state.user).toBe(householder);
    expect(state.isFetched).toBe(true);
    expect(state.menuOptionList).toEqual(toMenuOptionList(menu_GetList()));
  });
});

describe('Menu reducer', () => {
  it('the user information fills the subscription row and keeps the photo row of a householder', () => {
    const state = menuReducer(initialMenuState(), { type: 'userInformationFetched', user: householder });
    expect(state.user).toBe(householder);
    expect(state.isFetched).toBe(true);
    expect(state.menuOptionList.map((option) => option.Id)).toEqual([
      'PIN & Biometrics',
      'Contact Us',
      'Subscription and Payments',
      'Request Photo Update',
      'Terms & Policies',
      'Log out',
    ]);
    expect(state.menuOptionList[2]).toMatchObject({
      IconRight: 'connect-icon-open_new',
      IconRightText: 'Global',
      IconRightLoading: false,
    });
    expect(state.menuOptionList[3]).toMatchObject({ IsLoading: false });
  });

  it('removes the photo row when the user is not a householder and not the spouse of one', () => {
    const state = menuReducer(initialMenuState(), { type: 'userInformationFetched', user: member });
    expect(state.menuOptionList.map((option) => option.Id)).not.toContain('Request Photo Update');
    expect(state.menuOptionList).toHaveLength(5);
  });

  it('keeps the photo row for the spouse of a householder', () => {
    const state = menuReducer(initialMenuState(), { type: 'userInformationFetched', user: spouseOfHouseholder });
    expect(state.menuOptionList.map((option) => option.Id)).toContain('Request Photo Update');
  });

  it('a second result changes the rows of the first one again (no photo row to remove twice)', () => {
    const first = menuReducer(initialMenuState(), { type: 'userInformationFetched', user: member });
    const second = menuReducer(first, { type: 'userInformationFetched', user: householder });
    expect(second.menuOptionList).toEqual(first.menuOptionList);
    expect(second.user).toBe(householder);
  });
});
