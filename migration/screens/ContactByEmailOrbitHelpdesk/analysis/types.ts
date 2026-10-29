// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface Response {
  Id: string;
  Description: string /* "" in capture */;
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
