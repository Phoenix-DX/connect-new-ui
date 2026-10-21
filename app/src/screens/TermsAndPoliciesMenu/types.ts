import type { CacheControl_PoliciesRec } from '../../shared/UBTConnect_Utils/CacheControl_Policies';

/* TermsAndPoliciesMenu has no route input (p:UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js model
   `setInputs = function(inputs) {}`) and no call of its own: the policies come from the shared CacheControl_Policies
   block (domain structure CacheControl_PoliciesRec). */

/** One policy document of the CacheControl_Policies result (UBTConnect_Utils PolicyInformationRec: Policy_Url,
    Policy_FileName, Policy_ContentType). */
export type PolicyInformation = CacheControl_PoliciesRec['PolicyInformation_TermsAndConditions'];

/** Screen variable LocalCacheControl_Policies (UBTConnect CacheControl_PoliciesBooleanRecord, SCR model): the
    CacheControl_Policies Result and whether it arrived. `CacheControl_Policies` is null while the record default
    holds (every Policy_Url ""). */
export interface LocalCacheControl_Policies {
  CacheControl_Policies: CacheControl_PoliciesRec | null;
  isFetched: boolean;
}
