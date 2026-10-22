import type { CountryStatistics } from '@/screens/BrowseCountries/types';

/** GetSkeleton_UI_CountryStatistics (UBTConnect.controller.js, after :12630): Title "Australia", AvatarURL "-" and five
    statistics; CountryCode keeps its default "". */
export const getSkeleton_UI_CountryStatistics = (): CountryStatistics => ({
  countryCode: '',
  statistics: {
    Title: 'Australia',
    Subtitle: '',
    AvatarURL: '-',
    Statistics: [
      { Name: 'Locality', Value: '83', IconColorId: '', IconId: '' },
      { Name: 'Bretheren', Value: '15868', IconColorId: '', IconId: '' },
      { Name: 'Households', Value: '4652', IconColorId: '', IconId: '' },
      { Name: 'Brothers', Value: '7934', IconColorId: '', IconId: '' },
      { Name: 'Sisters', Value: '7934', IconColorId: '', IconId: '' },
    ],
  },
});

/** GetSkeletonList_UI_CountryStatistics(ListLength) (UBTConnect.controller.js:12574-12628): ListLength rows of
    GetSkeleton_UI_CountryStatistics. */
export const getSkeletonList_UI_CountryStatistics = (listLength: number): CountryStatistics[] =>
  Array.from({ length: Math.max(listLength, 0) }, getSkeleton_UI_CountryStatistics);
