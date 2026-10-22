/* Connect_Geography_CS structures used by the shared blocks (Connect_Geography_CS.model.js, copy in
   migration/contract/sources/raw/). Fields named as in OutSystems, all optional = OutSystems default. */
import type { StatisticsOptions } from '@/shared/UBTConnectLibrary/lib/structures';

/** UI_StatisticsTexts (model :86-121): the formatted counts of a country or locality, all Text. */
export interface UI_StatisticsTexts {
  Members?: string;
  Households?: string;
  Localities?: string;
  Brothers?: string;
  Sisters?: string;
  SupperMeetings?: string;
  Distance?: string;
}

/** UI_LocalityStatistics (model :126-159, UI_LocalityStatisticsRec): a locality row of the directory map screens. */
export interface UI_LocalityStatistics {
  /** Long Integer, as text ("0" = default). */
  LocalityId?: string;
  Name?: string;
  Latitude?: number;
  Longitude?: number;
  /** UBTConnectLibrary StatisticsOptions. */
  Statistics?: StatisticsOptions;
  UI_TypedStatisticsTexts?: UI_StatisticsTexts;
  /** Long Integer, as text ("0" = default). */
  MainHallSubdivisionId?: string;
}
