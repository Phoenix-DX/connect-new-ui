// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface OrbitMilestoneType {
  Id: string /* "" in capture */;
  Is_Active: boolean;
  Order: number /* 0 in capture */;
  Type: string /* "" in capture */;
  Name: string /* "" in capture */;
  MainColorVar: string /* "" in capture */;
  MainIcon: string /* "" in capture */;
  CanHost: boolean;
  IsTransportMilestone: boolean;
  IconTransportDeparture: string /* "" in capture */;
  IconTransportArrival: string /* "" in capture */;
  TransportHeaderClass: string /* "" in capture */;
  TravelInfoHeader: string /* "" in capture */;
  TravelInfoHeaderIcon: string /* "" in capture */;
}

export interface Response {
  OrbitMilestoneType: OrbitMilestoneType;
  GetAccommodationHostResponse: GetAccommodationHostResponse;
}

export interface GetAccommodationHostResponse {
  Response: Response;
  HasData: boolean;
}

export interface AccommodationHostDocument {
  DocumentURL: string /* "" in capture */;
  DocumentName: string /* "" in capture */;
}

export interface Get_DocumentResponse {
  AccommodationHostDocument: AccommodationHostDocument;
}

export interface ResultsItem {
  Id: string /* Long Integer as string */;
  Type: string;
  Size: string;
  SignedURL: string;
  Error: string /* "" in capture */;
}

export interface GetSignedImagesInBulkResponse {
  Results: ResultsItem[] /* wire: { List: [...] } */;
}

export interface Get_HostSurveyStatusResponse {
  Response: Response;
}

export interface Get_HasDocumentsResponse {
  Response_HasDocuments: boolean;
}

export interface Get_HasQRCodeResponse {
  Response_HasQRCode: boolean;
  Response_HasScanned: boolean;
}
