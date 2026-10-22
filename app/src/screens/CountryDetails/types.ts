import type { UI_StatisticsTexts } from '@/shared/Connect_Geography_CS/lib/structures';

/** One item of Out_LocalitiesStatistics (Connect_Geography_CS UI_LocalityStatistics, as used by the screen). */
export interface LocalityStatistics {
  /** LocalityId (Long Integer, kept as text). */
  localityId: string;
  name: string;
  latitude: number;
  longitude: number;
  /** Statistics.Title: the marker's ExtraData (popup link text). */
  statisticsTitle: string;
  /** UI_TypedStatisticsTexts: counts shown by Statistics_Icons. */
  typedStatisticsTexts: UI_StatisticsTexts;
  /** MainHallSubdivisionId (Long Integer, kept as text): image of the card. */
  mainHallSubdivisionId: string;
}

/** Outputs of DataActionGetLocalityStatistics. */
export interface LocalityStatisticsData {
  localities: LocalityStatistics[];
  countryName: string;
}

/** Screen variables the data action sends with the call (OutSystems screenData.variables, scalar ones). */
export interface LocalityStatisticsInputs {
  countryCode: string;
  originalCountryCode: string;
  searchString: string;
  hasFiltersApplied: boolean;
}
