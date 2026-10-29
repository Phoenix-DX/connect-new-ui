# Item 6: the inputs of DataActionGetShare (2026-10-28)

Item 6 of the user's work list (`../RESUME.md`), from the B9 build note (`../builds/B9-messagedetail.md:169`).
Evidence order: the MCP (DEV) first, then the compiled TST code (live), then the React code. DEV = TST on every fact.

## 1. What the original sends

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| S1 | Block Share_UI.ShareObjectDetail_ExtendedShare has two inputs, ShareId (Text) and HasAccessToDeceasedHousehold (Boolean). It has two local variables: ShareableObject_Generic (Connect2_Sharing_CS UI_ShareableObject_Generic) and ShareableUpdateItem (Connect_Updates_CS UI_UpdateItem) | getWebBlock ShareObjectDetail_ExtendedShare | `Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare.mvc.js` VariablesRecord (dump lines 35-60) |
| S2 | The server logic of GetShare reads only the two inputs: GetShareDetails(ShareId, IncludeDeceased = HasAccessToDeceasedHousehold), then the aggregate of Type_ShareObject by ObjectName. It does not read the locals | Data action GetShare of the block (nodes GetShareDetails, GetShareObjectTypesByType, Set Output) | Server side, not in the compiled client code |
| S3 | A data action sends all block variables in `screenData.variables`, except the attributes with `ignoreForServer` (the data action record GetShare). So TST sends ShareId, HasAccessToDeceasedHousehold, ShareableObject_Generic, ShareableUpdateItem and the two `_<input>InDataFetchStatus` integers | - | `migration/runtime-sources/OutSystems.js`: `callServerDataSource` W533101 (`screenData={variables:ServerDataConverter.to(this.model.variables,…)}`); `ServerDataConverter.to` W258000 (skips `ignoreForServer`); `attr(…, ignoreForServer, …)` W194988 |
| S4 | The values at the fetch. At start, after OnInitialize: ShareableObject_Generic is the Household card "Loading Shared Object" (Title, Subtitle, Location), and ShareableUpdateItem is empty. On OnParametersChanged: the values that the last GetShareOnAfterFetch set | OnInitialize, OnParametersChanged (RefreshData GetShare), GetShareOnAfterFetch | Controller of the block (OnInitialize, `getShare$DataActRefresh` :446-470) |
| S5 | GetShareOnAfterFetch sets all 12 attributes of ShareableUpdateItem for an Update: UpdateItemId NullIdentifier, IsRead False, HasShare False, HasAccess, HouseholdId, and the 7 that the view reads | Assign `GetShare.GetShareByIdResponse mapTo { … }` | `_getShareOnAfterFetch$Action` :597 |

The contract `app/src/api/openapi.yaml` (operation DataActionGetShare, `x-os-inputs: screen-variables`) lists the four
variables, all optional. The generator leaves out the `_<x>DataFetchStatus` bookkeeping
(`migration/tools/contract_gen.py:73, 876`).

## 2. What React sends

- `app/src/pages/MessageDetail/hooks/useShareObjectDetail.ts:62-63` sends `{ ShareId, HasAccessToDeceasedHousehold }`;
  `app/src/api/share/repository.ts:57-62` passes them as they are.
- The block state keeps both locals (`hooks/shareObjectDetailState.ts:22-25`). ShareableUpdateItem keeps only the 7
  fields that the view reads (:11-19). It does not keep UpdateItemId, IsRead, HasAccess, HasShare, HouseholdId and
  MemberId.
- The mock answers by ShareId only (`pages/MessageDetail/mocks.ts:362`). No test checks the inputs.
- Other screen-variable calls send all their variables, also the record locals (for example `api/note/mapper.ts:119`
  Notes_Filter and Notes_List).

## 3. Difference

| # | Difference | TST | React |
|---|---|---|---|
| G1 | DataActionGetShare does not send the two record locals | S3, S4 | useShareObjectDetail.ts:62-63 |
| G2 | ShareableUpdateItem has 7 of the 13 attributes of UI_UpdateItem | S5 | shareObjectDetailState.ts:11-19 |

No visible effect: the server result does not depend on the locals (S2). The difference is in the request body only.
It matters when a production server reads the contract. The `_<input>InDataFetchStatus` integers stay out, as for every
other call (project rule of the contract).

Not in this item: the other GetShare data action, of Share_UI.ShareObjectDetail (flag C2ExtendedShare False, out of
scope by PD9). It has UpdateDate as Text, where the extended block has Date. DEV = TST for both blocks.

## 4. Result (2026-10-28)

The user approved design (a) of `item6-solution.md` (§9). An Opus agent built it with tests first
(`../builds/item6-getshare-inputs.md`).

| # | Status |
|---|---|
| G1 | Built: DataActionGetShare sends ShareId, HasAccessToDeceasedHousehold, ShareableObject_Generic and ShareableUpdateItem. The `_<input>InDataFetchStatus` integers stay out |
| G2 | Built: the block state keeps all 13 attributes of UI_UpdateItem; GetShareOnAfterFetch sets them as TST does |

A null Long Integer goes as `"0"` and a null Date as `"1900-01-01"`, as the TST runtime sends them. The UI does not
change. A test checks the request body with MSW.
