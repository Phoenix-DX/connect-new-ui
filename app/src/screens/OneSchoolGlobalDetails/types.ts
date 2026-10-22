import type { LookupSections } from '@/shared/UBTConnect/lib/structures';
import type { Directory_Coordinates } from '@/shared/UBTConnect_Utils/lib/structures';

/** Screen inputs (OneSchoolGlobalDetails.mvc.js model :47-49, setInputs :95-100). Long Integer as text. */
export interface OneSchoolGlobalDetailsInputs {
  In_OneSchoolGlobalId: string;
}

/** BusinessLinkItemRec (UBTConnect.model.js): one link of the school (External_Link In_Link). */
export interface BusinessLinkItem {
  text: string;
  link: string;
  id: string;
}

/** The fields of Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard the view reads (mvc.js view :283-475, :591-592). */
export interface OneSchoolGlobalDetailCard {
  communityBusinessId: string;
  signedURL: string;
  name: string;
  address: string;
  areasServed: string;
  businessLinks: BusinessLinkItem[];
}

/** DataActionGetOneSchoolGlobalDetails outputs the view reads (mvc.js model :4-25). */
export interface OneSchoolGlobalDetails {
  card: OneSchoolGlobalDetailCard;
  householdCoordinates: Directory_Coordinates;
}

/** Screen variables OutSystems sends with the data action (screenData.variables, mvc.js model :35-55). */
export interface OneSchoolGlobalDetailsVariables {
  lookupSections: Required<LookupSections>;
  selected_OneschoolGlobal_SubsectionId: string;
  localIsBookmarked: boolean;
  in_OneSchoolGlobalId: string;
}
