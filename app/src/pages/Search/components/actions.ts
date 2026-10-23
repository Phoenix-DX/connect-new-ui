import type { Tag } from '@/shared/UBTConnectLibrary/HorizontalTagList';
import { Connect_SearchCategories } from './staticEntities';

/** SearchCategory_ItemRec (UBTConnect_Utils). */
export interface SearchCategory_Item {
  SearchCategoryId: string;
  Order: number;
  Label: string;
  UBTIcon: string;
}

/** UBTConnect_Utils SearchCategory_GetList (UBTConnect_Utils.controller.js :5037-5083): All, Households, Members
    (People), Places, in this order; UBTIcon keeps its default "". */
export function searchCategory_GetList(): SearchCategory_Item[] {
  return [
    { SearchCategoryId: Connect_SearchCategories.All, Order: 1, Label: Connect_SearchCategories.All, UBTIcon: '' },
    {
      SearchCategoryId: Connect_SearchCategories.Households,
      Order: 2,
      Label: Connect_SearchCategories.Households,
      UBTIcon: '',
    },
    { SearchCategoryId: Connect_SearchCategories.People, Order: 3, Label: 'Members', UBTIcon: '' },
    {
      SearchCategoryId: Connect_SearchCategories.Places,
      Order: 4,
      Label: Connect_SearchCategories.Places,
      UBTIcon: '',
    },
  ];
}

/** OnInitialize (block controller :3299-3310): TagList = SearchCategory_GetList mapped to Tag, IsSelected when the
    category is the SelectedCategory (Enabled keeps its default True). */
export function initialTagList(selectedCategory: string): Tag[] {
  return searchCategory_GetList().map((c) => ({
    Text: c.Label,
    Identifier: c.SearchCategoryId,
    IconId: c.UBTIcon,
    IsSelected: c.SearchCategoryId === selectedCategory,
    Enabled: true,
  }));
}

/** OS Index(text, "birthday", 0, False, True) <> -1: case-insensitive search (isBirthdayKeyWord, :3831). */
export const isBirthdayKeyWord = (text: string): boolean => text.toLowerCase().includes('birthday');

/** OnAfterFetch_FetchSearchResults (:3882-3888): a section shows when its list is not empty and SelectedCategory is
    null, All or the section's own category. */
export const showsCategory = (selectedCategory: string, own: string): boolean =>
  selectedCategory === '' || selectedCategory === Connect_SearchCategories.All || selectedCategory === own;

/** UBTConnect ValidateSearchPhoneNumber (UBTConnect.controller.js:17954-17990 in any migration/screens/<S>/analysis/sources/raw/,
    MinNumberSize 4 at :18010-18017) with its ValidatePhoneNumberJS (:18052-18070): "+digits" needs at least 4 digits,
    other number-like text (digits, + - space ( ) .) is invalid, anything else (names) is valid. */
export function validateSearchPhoneNumber(search: string): { isValid: boolean; errorMessage: string } {
  const digitsOnly = search.replace(/[^0-9]/g, '');
  const strictPattern = /^\+?[0-9]+$/;
  const looksLikeNumber = /^[0-9+\-\s().]+$/.test(search);
  const isValid = strictPattern.test(search) ? digitsOnly.length >= 4 : !looksLikeNumber;
  return isValid
    ? { isValid: true, errorMessage: '' }
    : { isValid: false, errorMessage: 'Please enter a valid phone number' };
}
