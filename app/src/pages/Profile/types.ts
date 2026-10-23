import type { ActionInputs, PathOf } from '@/api/client/callAction';

/* Wire types from the contract (src/api/openapi.yaml), through the callAction types. */
type EditDetailsInputs = ActionInputs<PathOf<'UBTConnect', 'ServiceAPIMember_EditDetails_Service'>>;

/** UI_AccountForm (Connect_Household_CS) as the screen keeps it (Profile.mvc.js:34-42) and sends it to
    Member_EditDetails_Service; every part is plain data, compared field by field (OnChange_Fields). */
export type AccountForm = EditDetailsInputs['UI_AccountForm'];
/** Custom_Address_Item (APIDomain_Directory_IS). */
export type AddressItem = AccountForm['AccountForm_AddressInformation']['Custom_Address_ItemList']['List'][number];
