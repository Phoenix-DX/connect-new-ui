/** The route inputs of TransportDetail, from the query string by their original names. The screen gives the first four
    to ScreenBlock_TransportDetail (In_MilestoneName as In_PreloadMilestoneName); OnHandle_ContactHelpdesk sends
    In_TargetMemberId and In_MilestoneId to ContactByEmailOrbitHelpdesk. The server call of the block is in the domain
    api/event (DataActionGet_TransportDetail).
    @origin UBTConnect.Legacy_OrbitEventsFlow.TransportDetail */
export interface TransportDetailInputs {
  /** In_MilestoneId (Text, "" when absent). */
  In_MilestoneId: string;
  /** In_OrbitMilestoneTypeId (Text, "" when absent). */
  In_OrbitMilestoneTypeId: string;
  /** In_MilestoneName (Text, "" when absent). */
  In_MilestoneName: string;
  /** In_HeaderClass (Text, "" when absent). */
  In_HeaderClass: string;
  /** In_TargetMemberId (Long Integer as text, "0" when absent). */
  In_TargetMemberId: string;
}

/** The inputs from the query string. An absent Text is "" and an absent In_TargetMemberId is "0". */
export function readTransportDetailInputs(params: URLSearchParams): TransportDetailInputs {
  return {
    In_MilestoneId: params.get('In_MilestoneId') ?? '',
    In_OrbitMilestoneTypeId: params.get('In_OrbitMilestoneTypeId') ?? '',
    In_MilestoneName: params.get('In_MilestoneName') ?? '',
    In_HeaderClass: params.get('In_HeaderClass') ?? '',
    In_TargetMemberId: params.get('In_TargetMemberId') ?? '0',
  };
}
