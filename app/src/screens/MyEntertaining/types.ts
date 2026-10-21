/** Route inputs of UBTConnect.Calendar.MyEntertaining (MyEntertaining.mvc.js:13, query string). */
export interface MyEntertainingInputs {
  MyCalendarEventSourceId: string;
}

/** Inputs of DataActionGetEntertainingConfig: the block's inputs, sent as screen variables (contract x-os-inputs). */
export interface EntertainingConfigInputs {
  View: string;
  Theme: string;
  Sources: string;
  B2CTenant: string;
}

/** Output of DataActionGetEntertainingConfig (Embedded_MyEntertaining.mvc.js:12-22). */
export interface EntertainingConfig {
  token: string;
  baseURL: string;
  b2CClientId: string;
  b2CPolicy: string;
}
