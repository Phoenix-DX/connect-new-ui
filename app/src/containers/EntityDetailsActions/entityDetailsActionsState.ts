/** @origin UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions */
import { UserException } from '@/legacy/os/os-exceptions';
import type { ActionsMenuOptions } from '@/lib/ubtConnectLibrary/structures';
import type { ContactPopupData } from '@/lib/ubtConnectUtils/structures';
import { get_NoteCategoryId_ByEntityTypeId, getShareType_FromEntity } from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import type { fetchContactDetails } from './api';

/* The pure start-up state of the block: the contact defaults and the OnReady set-up of each entity type. The flows:
   useEntityDetailsActions.ts. */

export type ContactDetails = Awaited<ReturnType<typeof fetchContactDetails>>;

/** ContactPopupDataRec field defaults (UBTConnect_Utils.model.js): a record built field by field keeps them. */
export const CONTACT_POPUP_DATA_DEFAULT: ContactPopupData = {
  IsAvatarImage: true,
  ShowTimezone: true,
  ShowImage: true,
};

/** OnReady "Type" switch (controller): menu options and labels of each entity type; Locality and other types raise
    InvalidAction. */
function menuOptionsOf(entityType: string, useViewDetails: boolean): { options: ActionsMenuOptions; labels: boolean } {
  const all = (call: boolean, email: boolean, gift: boolean, share: boolean): ActionsMenuOptions => ({
    HasBookmark: true,
    HasUnbookmark: true,
    HasNotes: true,
    HasGift: gift,
    HasShare: share,
    HasCall: call,
    HasEmail: email,
  });
  switch (entityType) {
    case Connect_Entity.Member:
      return {
        options: {
          HasBookmark: false,
          HasUnbookmark: false,
          HasNotes: false,
          HasGift: false,
          HasShare: false,
          HasCall: true,
          HasEmail: true,
        },
        labels: false,
      };
    case Connect_Entity.Household:
      return { options: { ...all(false, false, true, true), HasViewDetails: useViewDetails }, labels: true };
    case Connect_Entity.Interchange:
      return { options: all(false, false, false, false), labels: true };
    case Connect_Entity.SupperMeetings_aka_Subdivisions:
      return { options: { ...all(false, false, false, true), HasViewDetails: useViewDetails }, labels: true };
    case Connect_Entity.OneSchoolGlobal:
      return { options: { ...all(true, true, false, true), HasViewDetails: useViewDetails }, labels: true };
    default:
      throw new UserException(
        entityType === Connect_Entity.Locality ? 'Invalid option' : 'Bookmarks not available',
        'UBTConnect.InvalidAction',
      );
  }
}

/** UBTConnect Notes_InterchangeId_ComposeId(LocalityId, InterchangeLocalityId) (UBTConnect.controller.js, copy in
    migration/screens/MilestoneDetail/analysis/sources/raw/): "<LocalityId>:<InterchangeLocalityId>" when LocalityId is
    not empty, else InterchangeLocalityId. */
export function notes_InterchangeId_ComposeId(localityId: string, interchangeLocalityId: string): string {
  return localityId !== '' ? `${localityId}:${interchangeLocalityId}` : interchangeLocalityId;
}

interface OnReadyInit {
  options: ActionsMenuOptions;
  labels: boolean;
  noteCategoryId: string;
  shareType: string;
  isFetchContacts: boolean;
  error?: unknown;
}

/** OnReady (controller) up to the contact fetch: NoteCategoryId, the menu of the entity type, isFetchContacts (call,
    email or share) and the share type. CheckRestored (a view restored from the cache ends OnReady) is in
    useEntityDetailsActions. */
export function onReadyInit(entityType: string, useViewDetails: boolean): OnReadyInit {
  const result: OnReadyInit = { options: {}, labels: true, noteCategoryId: '', shareType: '', isFetchContacts: false };
  try {
    result.noteCategoryId = get_NoteCategoryId_ByEntityTypeId(entityType);
    const menu = menuOptionsOf(entityType, useViewDetails);
    result.options = menu.options;
    result.labels = menu.labels;
    result.isFetchContacts =
      (menu.options.HasCall ?? false) || (menu.options.HasEmail ?? false) || (menu.options.HasShare ?? false);
    if (menu.options.HasShare === true) result.shareType = getShareType_FromEntity(entityType, false);
  } catch (error) {
    result.error = error;
  }
  return result;
}
