/* Domain types of the entertaining calendar embed (UBTConnect_EmbedMyEntertaining): the configuration of the
   Connect2Entertaining SDK and the ID token that refreshes it. The wire types stay in src/api/schema.d.ts. */

/** The screen variables that Embedded_MyEntertaining sends with DataActionGetEntertainingConfig: its four input
    parameters. A type literal, not an interface: the inputs of callAction need an index signature. */
export type EntertainingConfigInputs = {
  View: string;
  Theme: string;
  Sources: string;
  B2CTenant: string;
};

/** The outputs of DataActionGetEntertainingConfig that InitializeCalendar reads. `baseURL` is the one switch point of
    the calendar embed (mock: the app's own origin). */
export interface EntertainingConfig {
  token: string;
  baseURL: string;
  b2CClientId: string;
  b2CPolicy: string;
}
