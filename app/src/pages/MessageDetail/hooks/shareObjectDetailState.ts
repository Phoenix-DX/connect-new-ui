import type { SharedObjectDetail } from '@/api/share';
import type { UI_ShareableObject_Generic } from '@/lib/ubtConnectUtils/structures';
import { Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import { getConnectEntity_ByShareType } from '@/pages/MessageDetail/actions';

/** The state of Share_UI.ShareObjectDetail_ExtendedShare and its reducer, and the pure parts of its flows and view.
    @origin Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare */

/** Connect_Updates_CS UI_UpdateItem: the fields that Update_ListItem gets from the block. */
export interface ShareableUpdateItem {
  updateItemTypeId: string;
  name: string;
  date: string | null;
  genderId: string;
  locationString: string;
  parentsNames: string;
  birthType: string;
}

export interface ShareObjectDetailState {
  /** Local ShareableObject_Generic. */
  shareableObject: UI_ShareableObject_Generic;
  /** Local ShareableUpdateItem. */
  shareableUpdateItem: ShareableUpdateItem;
  /** GetShare outputs; null until the first answer (isDataFetched False). */
  share: SharedObjectDetail | null;
}

type ShareObjectDetailAction =
  /** GetShare answered; GetShareOnAfterFetch prepared the two locals. */
  {
    type: 'shareFetched';
    share: SharedObjectDetail;
    shareableObject: UI_ShareableObject_Generic;
    shareableUpdateItem: ShareableUpdateItem;
  };

const emptyUpdateItem = (): ShareableUpdateItem => ({
  updateItemTypeId: '',
  name: '',
  date: null,
  genderId: '',
  locationString: '',
  parentsNames: '',
  birthType: '',
});

/** OnInitialize of a new view (not restored from the view cache): ShareableObject_Generic is the Household
    "Loading Shared Object" card (ConnectEntityTypeId, Title, Subtitle, Location). */
export function initialShareObjectDetailState(): ShareObjectDetailState {
  const loading = 'Loading Shared Object';
  return {
    shareableObject: {
      ConnectEntityTypeId: Connect_Entity.Household,
      Title: loading,
      Subtitle: loading,
      Location: loading,
    },
    shareableUpdateItem: emptyUpdateItem(),
    share: null,
  };
}

export function shareObjectDetailReducer(
  _state: ShareObjectDetailState,
  action: ShareObjectDetailAction,
): ShareObjectDetailState {
  // The one action: shareFetched.
  return {
    share: action.share,
    shareableObject: action.shareableObject,
    shareableUpdateItem: action.shareableUpdateItem,
  };
}

/** GetShareOnAfterFetch after the audit: for an Update, ShareableUpdateItem from the share item with Date = UpdateDate;
    else, for a OneSchool Global, Label = LocalityName + ", " + CountryName, then ShareableObject_Generic gets the entity
    type of the share type, ObjectId, Title, Subtitle, Photo.SignedPath and Label. */
export function prepareSharedObject(
  share: SharedObjectDetail,
  state: ShareObjectDetailState,
): Pick<ShareObjectDetailState, 'shareableObject' | 'shareableUpdateItem'> {
  const item = share.shareItem;
  if (share.shareObjectTypeId === Type_ShareObject.Update) {
    return {
      shareableObject: state.shareableObject,
      shareableUpdateItem: {
        updateItemTypeId: item.type,
        name: item.title,
        date: share.updateDate,
        genderId: item.genderId,
        locationString: item.label,
        parentsNames: item.parentsName,
        birthType: item.birthType,
      },
    };
  }
  const label =
    share.shareObjectTypeId === Type_ShareObject.OneSchoolGlobal
      ? `${item.localityName}, ${item.countryName}`
      : item.label;
  return {
    shareableObject: {
      ...state.shareableObject,
      ConnectEntityTypeId: getConnectEntity_ByShareType(share.shareObjectTypeId),
      Id: share.objectId,
      Title: item.title,
      Subtitle: item.subtitle,
      SignedURL: item.photoSignedPath,
      Location: label,
    },
    shareableUpdateItem: state.shareableUpdateItem,
  };
}

/** The If of the view: the share is fetched and its object is missing (a Feed without ObjectId, another type without
    ShareItem.Id) or not visible: EmptyShareDetailCard_ExtendedFlow. */
export function isUnavailableShare(share: SharedObjectDetail | null): boolean {
  if (share === null) return false;
  const isFeed = share.shareObjectTypeId === Type_ShareObject.Feed;
  return (isFeed && share.objectId === '') || (!isFeed && share.shareItem.id === '') || !share.shareItem.isVisible;
}

/** What OnClickShareDetail does:
    - `none`: GetShare not fetched, or its fetch failed;
    - `unavailable`: the "no longer available" message (Info): no share, or a deceased item without the access;
    - `notAvailableProfile`: "This profile is not available!" (Error): no ShareItem.Id;
    - `subscriptionDenied`: the event SubscriptionDenied: no CanAccess;
    - `open`: the event GoToObjectDetail(ObjectId, ShareObjectTypeId); for an Update the id is the HouseholderId. */
type ShareClick =
  | { kind: 'none' | 'unavailable' | 'notAvailableProfile' | 'subscriptionDenied' }
  | { kind: 'open'; objectId: string; shareObjectTypeId: string };

export function shareClick(share: SharedObjectDetail | null): ShareClick {
  if (share === null) return { kind: 'none' };
  if (!share.isShareAvailable) return { kind: 'unavailable' };
  const item = share.shareItem;
  if (item.id === '') return { kind: 'notAvailableProfile' };
  if (!item.canAccess) return { kind: 'subscriptionDenied' };
  // "Is Deceased?" (IsDeceased and GetHasDeceasedProfileAccess) leads to "Has Access to Deceased Profile?", which tests
  // the same flag negated: its "no longer available" branch can not run (ShareObjectDetail_ExtendedShare.mvc.js:528-541).
  const objectId = share.shareObjectTypeId === Type_ShareObject.Update ? item.householderId : item.id;
  return { kind: 'open', objectId, shareObjectTypeId: share.shareObjectTypeId };
}

/** The messages of OnClickShareDetail. */
export const SHARE_NO_LONGER_AVAILABLE = 'This shared item is no longer available.';
export const SHARE_PROFILE_NOT_AVAILABLE = 'This profile is not available!';
