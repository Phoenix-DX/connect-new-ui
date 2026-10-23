/* DataActionGetCountryInfo of the screen is a query of the domain api/country, with the options that the screen had.
   This module keeps the name that the screen uses. */
export { useCountryInfoQuery as useGetCountryInfo } from '@/api/country';

/* Member_EditDetails_Service (UI_AccountForm and isRequireRequestCreation; no outputs; a write, mocked in mocks.ts) is
   in the domain api/member. This module keeps the name that the screen uses, until it imports the domain name. */
export { editMemberDetails as member_EditDetails_Service } from '@/api/member';
