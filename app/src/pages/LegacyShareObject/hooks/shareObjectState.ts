import type { HouseholdShareCard } from '@/api/household';
import type { CommunityBusinessShareCard } from '@/api/locality';

/** The variables of the block ScreenBlock_ShareObject, the reducer and the assignments of its OnReady. Pure; the
    flows are in useShareObject.
    @origin Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject */

/** The texts of the household card. The block also has Bucket, Path, Type and SignedURL for it: they stay "". */
export interface ShareObjectHousehold {
  /** HouseholdName. */
  name: string;
  /** HouseholdDescription: the family names. */
  description: string;
  /** HouseholdTag: "Locality, Country". */
  tag: string;
}

/** The variables of the block. */
export interface ShareObjectState {
  /** IsLoading: True from OnInitialize until OnReady has the card of the shared object. */
  isLoading: boolean;
  household: ShareObjectHousehold;
  /** CommunityBusiness: the card of a Campus&Co or OneSchool Global business. */
  communityBusiness: CommunityBusinessShareCard;
}

/** An assignment of one or more variables. */
export type ShareObjectPatch = Partial<ShareObjectState>;

/** The default record of CommunityBusiness. */
export const EMPTY_COMMUNITY_BUSINESS: CommunityBusinessShareCard = {
  name: '',
  areasServed: '',
  countryName: '',
  photoBucket: '',
  photoPath: '',
  photoType: '',
  photoSignedPath: '',
};

/** The variables after OnInitialize (IsLoading = True). */
export const INITIAL_SHARE_OBJECT_STATE: ShareObjectState = {
  isLoading: true,
  household: { name: '', description: '', tag: '' },
  communityBusiness: EMPTY_COMMUNITY_BUSINESS,
};

/** The variables after an assignment. */
export const shareObjectReducer = (state: ShareObjectState, patch: ShareObjectPatch): ShareObjectState => ({
  ...state,
  ...patch,
});

/** OnReady for a household: the name, the family names as the description and "Locality, Country" as the tag. */
export const householdCardLoaded = (card: HouseholdShareCard): ShareObjectPatch => ({
  household: {
    name: card.name,
    description: card.familyNames,
    tag: card.localityName + ', ' + card.countryName,
  },
});

/** OnReady for Campus&Co or OneSchool Global: the card, with ", " + CountryName after AreasServed when the country
    is not empty. */
export const communityBusinessCardLoaded = (card: CommunityBusinessShareCard): ShareObjectPatch => ({
  communityBusiness: {
    ...card,
    areasServed: card.areasServed + (card.countryName !== '' ? ', ' + card.countryName : ''),
  },
});

/** The end of OnReady: IsLoading = False. */
export const CARD_LOADED: ShareObjectPatch = { isLoading: false };

/** IntegerToLongInteger(TextToInteger(text)): the integer value of the text, as a Long Integer in text; "0" when the
    text is not an integer. */
export function textToLongInteger(text: string): string {
  const n = Number.parseInt(text.trim(), 10);
  return Number.isFinite(n) && /^[+-]?\d+$/.test(text.trim()) ? String(n) : '0';
}
