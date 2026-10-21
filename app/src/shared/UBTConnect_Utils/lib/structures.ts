import type { components } from '../../../api/schema';

type Schemas = components['schemas'];

/** CacheControl_Policies structure (UBTConnect_Utils): the Result of the CacheControl_Policies block, as the
    GetCacheInfo data action returns it (PolicyInformation_PrivacyPolicy, PolicyInformation_TermsAndConditions). */
export type CacheControl_Policies = Schemas['UBTConnect_Utils__CacheControl_Policies'];

/** BottomBar_Item structure (UBTConnect_Utils.model BottomBar_ItemRec). */
export interface BottomBar_Item {
  /** Connect_BottomBar_Items identifier. */
  Id?: string;
  Order?: number;
  Label?: string;
  /** UBT_Icons identifier. */
  UBTIcon?: string;
  UBTIconActive?: string;
}

/* ---- Wave 2C (CW_CTA_PopUps) ---- */

/** ContactPopupData structure (UBTConnect_Utils.model ContactPopupDataRec), In_ContactPopupData of ContactPopup and
    SharePopup. EntityId is a Long Integer (text). */
export type ContactPopupData = Partial<Schemas['UBTConnect_Utils__ContactPopupData']>;

/** ContactPopupButton structure (UBTConnect_Utils.model ContactPopupButtonRec): fields read by ContactPopup
    (ContactPopup.mvc.js:669-720) and set by SharePopup (SharePopup.mvc.js:261-300). */
export interface ContactPopupButton {
  Id?: string;
  /** UBT_Icons identifier ("" = label only). */
  UBT_IconId?: string;
  Label?: string;
}

/* ---- Wave 2C (CW_Search, CW_Share) ---- */

/** SearchResult structure (Connect_Search_CS.SearchResultRec), In_SearchResult of SearchResult_Item. Id and
    HouseholderId are text; Type is a Connect_Entity identifier. */
export type SearchResult = Partial<Schemas['Connect_Search_CS__SearchResult']>;

/** UI_ShareableObject_Generic structure (Connect2_Sharing_CS.UI_ShareableObject_GenericRec), In_ShareableObject of
    ShareableObject_Generic. ConnectEntityTypeId is a Connect_Entity identifier. */
export type UI_ShareableObject_Generic = Partial<Schemas['Connect2_Sharing_CS__UI_ShareableObject_Generic']>;

/* ---- Wave 3C (CacheControl_UserInfo, CacheControl_AllCountries, CacheControl_AllLocalities) ---- */
/** CacheControl_UserInformation structure: Result of CacheControl_UserInfo (Directory_UserCurrent, HasPoliciesToAccept). */
export type CacheControl_UserInformation = Schemas['UBTConnect_Utils__CacheControl_UserInformation'];
/** CacheControl_AllCountries structure: Result of CacheControl_AllCountries (CountryList of UI_CountryDetails). */
export type CacheControl_AllCountries = Schemas['UBTConnect_Utils__CacheControl_AllCountries'];
/** CacheControl_AllLocalities structure: Result of CacheControl_AllLocalities (LocalityList of UI_LocalityDetails). */
export type CacheControl_AllLocalities = Schemas['UBTConnect_Utils__CacheControl_AllLocalities'];
/** Directory_UserCurrent structure (APIDomain_Directory_IS): the Result of CacheControl_UserInfo_Wrapper. */
export type Directory_UserCurrent = Schemas['APIDomain_Directory_IS__Directory_UserCurrent'];

/** ContactByPhonePopupData (UBTConnect_Utils.model ContactByPhonePopupDataRec). */
export interface ContactByPhonePopupData {
  ContactPopupData?: ContactPopupData;
  Phone?: string;
  MobilePhone?: string;
  HomePhone?: string;
  WorkPhone?: string;
}

/** ContactByMessagePopupData (UBTConnect_Utils.model ContactByMessagePopupDataRec). */
export interface ContactByMessagePopupData {
  ContactPopupData?: ContactPopupData;
  ShowEmail?: boolean;
  ShowWhatsapp?: boolean;
  ShowSignal?: boolean;
  ShowCall?: boolean;
}

/** UI_ContactByMessage_WrapperData (UBTConnect_Utils.model UI_ContactByMessage_WrapperDataRec). */
export interface UI_ContactByMessage_WrapperData {
  Email?: string;
  Phone?: string;
  IsComboEmailAndPhone?: boolean;
  ContactPopupData?: ContactPopupData;
}

/** ContactPopUp_OverrideOptions (contract schema UBTConnect_Utils__ContactPopUp_OverrideOptions). */
export type ContactPopUp_OverrideOptions = Partial<Schemas['UBTConnect_Utils__ContactPopUp_OverrideOptions']>;

/** Directory_Coordinates (APIDomain_Directory_IS; contract schema APIDomain_Directory_IS__Directory_Coordinates). */
export type Directory_Coordinates = Partial<Schemas['APIDomain_Directory_IS__Directory_Coordinates']>;
