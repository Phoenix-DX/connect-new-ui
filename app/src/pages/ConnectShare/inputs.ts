/** The route input of ConnectShare, from the query string by its original name. OnInitializeSharingScreen sends it
    with Get_ShareDetails (`fetchShareDetails` of the domain api/share).
    @origin UBTConnect.Legacy_Share.ConnectShare */
export interface ConnectShareInputs {
  /** ShareId (Text): the share of the share link. */
  ShareId: string;
}

/** ShareId (Text) from the query string, "" when it is absent. */
export function readConnectShareInputs(params: URLSearchParams): ConnectShareInputs {
  return { ShareId: params.get('ShareId') ?? '' };
}
