/* TermsAndPoliciesMenu calls no action of its own: `dataFetchActionNames = []` and no server action
   (p:UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc.js controller). The policies come from the shared
   CacheControl_Policies block (CacheControl_Policies/DataActionGetCacheInfo through callAction, P-CALLS); the app-start
   calls of the capture (calls.md #1, #3-#8) are the shell's. */
export {};
