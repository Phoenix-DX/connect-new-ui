/* BrowseDirectory (UBTConnect Directory_Locality.BrowseDirectory). Wire shapes stay in api.ts / mocks.ts; components see
   the domain types. */
import type { StatisticsOptions } from '../../shared/UBTConnectLibrary/lib/structures';

/** TextTextUBT_ColorIdentifierUBT_Icons2Identifier record of Statistics.Statistics (wire). */
export interface StatisticItemWire {
  Name: string;
  Value: string;
  IconColorId: string;
  IconId: string;
}

/** Connect_Geography_CS.UI_LocalityStatistics (wire; Long Integer and Decimal travel as strings). */
export interface LocalityStatisticsWire {
  LocalityId: string;
  Name: string;
  Latitude: string;
  Longitude: string;
  Statistics: {
    Title: string;
    Subtitle: string;
    AvatarURL: string;
    Statistics: { List: StatisticItemWire[] };
  };
  MainHallSubdivisionId: string;
}

/** A locality row of GetLocalityStatistics.Out_LocalitiesStatistics (UI_LocalityStatistics). */
export interface LocalityStatistics {
  /** LocalityId (Long Integer as text; "0" = the record default). */
  localityId: string;
  name: string;
  latitude: number;
  longitude: number;
  statistics: StatisticsOptions;
}

/** DataActionGetLocalityStatistics outputs. */
export interface LocalityStatisticsData {
  localities: LocalityStatistics[];
  countryName: string;
}
