import type {
  OneSchoolGlobalDetailCard,
  OneSchoolGlobalDetails,
  OneSchoolGlobalDetailsCallInputs,
} from '@/api/locality';
import { Type_OneschoolGlobal_Subsection } from '@/containers/OneSchoolGlobalDetails/staticEntities';
import { get_LookupSection } from '@/lib/ubtConnect/actions';
import type { LookupSections } from '@/lib/ubtConnect/structures';

/** The input of OneSchoolGlobalDetails_Block that the data action sends. The screen OneSchoolGlobalDetails gives its
    route input; the slot EntitiesCarousel_OneSchoolGlobal gives In_EntityId (EntitiesCarousel_OneSchoolGlobal.mvc.js
    view: In_OneSchoolGlobalId = In_EntityId). */
export interface OneSchoolGlobalDetailsInputs {
  /** In_OneSchoolGlobalId (Long Integer, as text): the school. */
  In_OneSchoolGlobalId: string;
}

/** The state of the OneSchoolGlobalDetails screen and its reducer, and the pure parts of its flows: the skeleton card
    of OnReady, the class of the business link list and the screen variables that the data action sends.
    @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails */

/** The screen variables and the outputs of DataActionGetOneSchoolGlobalDetails. The view cache keeps the record, so a
    back navigation shows the school at once, without a call. */
export interface OneSchoolGlobalDetailsState {
  /** LookupSections: the labels of the student numbers section. */
  LookupSections: Required<LookupSections>;
  /** Selected_OneschoolGlobal_SubsectionId: the selected button of the button group. */
  Selected_OneschoolGlobal_SubsectionId: string;
  /** LocalIsBookmarked: set by the OnChange_Bookmark event of Directory_EntityDetailsActions. */
  LocalIsBookmarked: boolean;
  /** The outputs of GetOneSchoolGlobalDetails; null until it answers. */
  GetOneSchoolGlobalDetails: OneSchoolGlobalDetails | null;
}

/** The changes of the state. */
type OneSchoolGlobalDetailsAction =
  /** The button group sets Selected_OneschoolGlobal_SubsectionId. */
  | { type: 'subsectionSelected'; subsectionId: string }
  /** OnChange_Bookmark of Directory_EntityDetailsActions: LocalIsBookmarked. */
  | { type: 'bookmarkChanged'; isBookmarked: boolean }
  /** The answer of DataActionGetOneSchoolGlobalDetails. */
  | { type: 'detailsFetched'; details: OneSchoolGlobalDetails };

/** OnInitialize, then OnReady: Selected_OneschoolGlobal_SubsectionId = UpcomingEvents (OnInitialize, unless the view
    cache restores the view) and LookupSections = Get_LookupSection(False) (OnReady). The model defaults (an empty
    lookup) only last until OnReady, so the state starts from the OnReady values. */
export const INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE: OneSchoolGlobalDetailsState = {
  LookupSections: get_LookupSection(false),
  Selected_OneschoolGlobal_SubsectionId: Type_OneschoolGlobal_Subsection.UpcomingEvents,
  LocalIsBookmarked: false,
  GetOneSchoolGlobalDetails: null,
};

/** GetSkeleton_UI_OneSchoolGlobal_DetailCard: the card that OnReady sets before the data action answers, with the
    name "OneSchool Global" and the address "9 Park Ave, Aberfoyle  Park SA 5159" (two spaces, as compiled). */
export const SKELETON_DETAIL_CARD: OneSchoolGlobalDetailCard = {
  communityBusinessId: '0',
  signedURL: '',
  name: 'OneSchool Global',
  address: '9 Park Ave, Aberfoyle  Park SA 5159',
  areasServed: '',
  businessLinks: [],
};

/** The source_dataFetchStatus class of the business link list (the List widget): none when the data action
    answered, `list-error` when it failed, `list-loading` while it runs. */
export const listStatusClassOf = (isDataFetched: boolean, hasFetchError: boolean): string => {
  if (isDataFetched) return '';
  return hasFetchError ? ' list-error' : ' list-loading';
};

/** The screen variables that OutSystems sends with DataActionGetOneSchoolGlobalDetails, read when the call starts. */
export const oneSchoolGlobalDetailsCallInputs = (
  state: OneSchoolGlobalDetailsState,
  inputs: OneSchoolGlobalDetailsInputs,
): OneSchoolGlobalDetailsCallInputs => ({
  lookupSections: state.LookupSections,
  selected_OneschoolGlobal_SubsectionId: state.Selected_OneschoolGlobal_SubsectionId,
  type_OneschoolGlobal_SubsectionId: Type_OneschoolGlobal_Subsection,
  localIsBookmarked: state.LocalIsBookmarked,
  in_OneSchoolGlobalId: inputs.In_OneSchoolGlobalId,
});

export function oneSchoolGlobalDetailsReducer(
  state: OneSchoolGlobalDetailsState,
  action: OneSchoolGlobalDetailsAction,
): OneSchoolGlobalDetailsState {
  switch (action.type) {
    case 'subsectionSelected':
      return { ...state, Selected_OneschoolGlobal_SubsectionId: action.subsectionId };
    case 'bookmarkChanged':
      return { ...state, LocalIsBookmarked: action.isBookmarked };
    case 'detailsFetched':
      return { ...state, GetOneSchoolGlobalDetails: action.details };
  }
}
