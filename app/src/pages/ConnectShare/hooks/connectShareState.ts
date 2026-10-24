import type { NavigationTarget } from '@/platform/navigation';
import { Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';
import type { OnInitializeSharingScreenResult } from './connectShareActions';

/** The state of the ConnectShare screen and its reducer, with the target part of Action_Redirect as a pure function.
    @origin UBTConnect.Legacy_Share.ConnectShare */

/** The screen variables. The OutSystems name of each variable is in brackets. The view cache keeps them all (P-BACK). */
export interface ConnectShareState {
  /** [StatusMessage] The title of the blank slate. */
  statusMessage: string;
  /** [ShowFreeSubscriptionAlert] The upgrade popup was opened. */
  showFreeSubscriptionAlert: boolean;
  /** [IsRedirect] OnReady goes to the shared object; the screen renders nothing meanwhile. */
  isRedirect: boolean;
  /** [Redirect_ShareObjectTypeId] and [Redirect_Share_Attributes.Id]: the type and the id of the shared object. */
  redirect: { shareObjectTypeId: string; attributesId: string };
}

/** The variables after OnInitialize, before OnInitializeSharingScreen answers. */
export const INITIAL_CONNECT_SHARE_STATE: ConnectShareState = {
  statusMessage: '',
  showFreeSubscriptionAlert: false,
  isRedirect: false,
  redirect: { shareObjectTypeId: '', attributesId: '' },
};

/** The changes of the state:
    - `sharingScreenInitialized`: the result of OnInitializeSharingScreen in OnInitialize;
    - `freeSubscriptionAlertShown`: Action_SetShowFreeSubscriptionAlert(True);
    - `redirectCancelled`: Action_Redirect with a type that it does not route. */
export type ConnectShareAction =
  | { type: 'sharingScreenInitialized'; result: OnInitializeSharingScreenResult }
  | { type: 'freeSubscriptionAlertShown' }
  | { type: 'redirectCancelled' };

export function connectShareReducer(state: ConnectShareState, action: ConnectShareAction): ConnectShareState {
  switch (action.type) {
    case 'sharingScreenInitialized': {
      // StatusMessage = its StatusMessage; IsRedirect → IsRedirect = True and the redirect type and id are kept.
      const { result } = action;
      if (!result.isRedirect) return { ...state, statusMessage: result.statusMessage };
      return {
        ...state,
        statusMessage: result.statusMessage,
        isRedirect: true,
        redirect: {
          shareObjectTypeId: result.redirect_ShareObjectTypeId,
          attributesId: result.redirect_Share_AttributesId,
        },
      };
    }
    case 'freeSubscriptionAlertShown':
      return { ...state, showFreeSubscriptionAlert: true };
    case 'redirectCancelled':
      return { ...state, isRedirect: false };
  }
}

/** Action_Redirect(Redirect_ShareObjectTypeId, Redirect_Share_Attributes.Id), the target part: the screen that it
    opens and its input, by type. Household, My Household or Update → HouseholdDetails(HouseholdId); OneSchool Global →
    OneSchoolGlobalDetails(In_OneSchoolGlobalId); Feed → FeedItemDetail(FeedItemId, the text id); Supper Meeting →
    SupperMeeting_Details(In_SubdivsionId). The Long Integer ids are TextToInteger of the id. null for any other
    type. */
export function shareRedirectTarget(shareObjectTypeId: string, attributesId: string): NavigationTarget | null {
  switch (shareObjectTypeId) {
    case Type_ShareObject.Household:
    case Type_ShareObject.MyHousehold:
    case Type_ShareObject.Update:
      return { path: '/UBTConnect/HouseholdDetails', params: { HouseholdId: textToLongInteger(attributesId) } };
    case Type_ShareObject.OneSchoolGlobal:
      return {
        path: '/UBTConnect/OneSchoolGlobalDetails',
        params: { In_OneSchoolGlobalId: textToLongInteger(attributesId) },
      };
    case Type_ShareObject.Feed:
      return { path: '/UBTConnect/FeedItemDetail', params: { FeedItemId: attributesId } };
    case Type_ShareObject.SupperMeeting:
      return {
        path: '/UBTConnect/SupperMeeting_Details',
        params: { In_SubdivsionId: textToLongInteger(attributesId) },
      };
    default:
      return null;
  }
}
