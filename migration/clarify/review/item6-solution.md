# Item 6 solution: the inputs of DataActionGetShare in React (proposal, 2026-10-28)

Status: **proposal, not approved**. No code changed. Facts S1–S5 and differences G1–G2 come from
`item6-getshare-inputs.md` (settled). File paths are under `app/src/` unless they start with `migration/`.
The OutSystems MCP did not answer in this session (timeout). Facts that need it are open points (section 5).

## 1. Summary

- Recommendation: **option (a)**. React sends the four block variables, as TST does (S3): the two inputs and the two
  record locals ShareableObject_Generic and ShareableUpdateItem. The `_<x>InDataFetchStatus` integers stay out.
- The mapping "block state → wire record" lives in `api/share/mapper.ts`, as `toSharedObjectDetailVariablesWire`.
  This is the project pattern for screen-variable calls (`api/note/mapper.ts:119-137`,
  `api/notification/mapper.ts:60-80`, `api/service/mapper.ts:11`).
- The block state keeps the full UI_UpdateItem record (13 attributes) in one domain type, `ShareableUpdateItem`, in
  `api/share/types.ts`. The view still reads 7 fields (`components/ShareObjectDetail_ExtendedShare.tsx:67-78`).
  This closes G2 with 6 extra fields in one record and no second store.
- The values at the first fetch and on OnParametersChanged come from the state ref `latest.current`
  (`hooks/useShareObjectDetail.ts:46, 67`). The hook passes them with the inputs. No new state and no new effect.
- Nothing visible changes: the server reads only the two inputs (S2), and the mock answers by ShareId
  (`pages/MessageDetail/mocks.ts:362`). Only the request body changes.
- The proof is a request-body assertion with MSW (`recordBodies`, `test/testSupport.ts:60`) and the updated spy
  assertion in the block test (`ShareObjectDetail_ExtendedShare.test.tsx:92`).

## 2. Design

### 2.1 Why send the locals (plain terms)

1. The contract is the truth of what TST sends. The Input schema lists the four variables
   (`api/schema.d.ts:4303-4308`, `api/openapi.yaml:8803-8812`). A production server is written against this contract.
   When React sends two of four, the server team sees a body that TST never sends.
2. Every other screen-variable call in `api/` sends all its variables, also record locals (Notes_Filter and Notes_List
   in `api/note/mapper.ts:124, 133`; Filter_Updates in `api/notification/mapper.ts:65-75`). GetShare is the exception.
   One rule for all calls is easier to keep than one rule with an exception.
3. The cost is small: one mapper function, one type move, four lines in the hook, three tests.
4. The behaviour is the same before and after (S2). So the change is safe.

### 2.2 Types (`api/share/types.ts`)

Replace `SharedObjectDetailCallInputs` (`api/share/types.ts:142-145`) with the variables of the block, in the domain
shape (camelCase, as `NotesVariables` in `api/note/types.ts:81`):

```ts
/** Connect_Updates_CS UI_UpdateItem: the local ShareableUpdateItem of the block. The view reads 7 fields; the call
    sends all 13. */
export interface ShareableUpdateItem {
  updateItemId: string;      // Long Integer identifier; NullIdentifier on the wire (open point O2)
  updateItemTypeId: string;
  name: string;
  date: string | null;       // null = NullDate
  genderId: string;
  locationString: string;
  parentsNames: string;
  birthType: string;
  isRead: boolean;
  hasShare: boolean;
  hasAccess: boolean;
  householdId: string;       // Long Integer
  memberId: string;
}

/** Connect2_Sharing_CS UI_ShareableObject_Generic: the local ShareableObject_Generic. Missing fields are the record
    defaults (""). */
export type ShareableObject = Partial<Schemas['Connect2_Sharing_CS__UI_ShareableObject_Generic']>;

/** The block variables that DataActionGetShare sends (screenData.variables, S3). */
export interface SharedObjectDetailVariables {
  shareId: string;
  hasAccessToDeceasedHousehold: boolean;
  shareableObject: ShareableObject;
  shareableUpdateItem: ShareableUpdateItem;
}
```

`ShareableUpdateItem` moves from `hooks/shareObjectDetailState.ts:11-19` to `api/share/types.ts`. The page imports it
from `@/api/share` (allowed: pages → api, `docs/architecture/overview.md:98`). The reverse is not allowed: `api/share`
must not import a page type (rule 7, `overview.md:115`). That is why the type moves.

`ShareableObject` is typed from `@/api/schema`, not from `lib/ubtConnectUtils/structures.ts:43`. Reason:
`structures.ts:52` imports `@/api/locality`; an import api → lib → api adds a cycle risk. The page keeps its import of
`UI_ShareableObject_Generic` from `lib` for now (same shape, `Partial` of the same schema).

### 2.3 Mapper (`api/share/mapper.ts`)

```ts
/** The variables of ShareObjectDetail_ExtendedShare as OutSystems sends them with DataActionGetShare. */
export type SharedObjectDetailVariablesWire = ActionInputs<
  PathOf<'Connect2_LegacyShared', 'ShareObjectDetail_ExtendedShare/DataActionGetShare'>
>;

export const toSharedObjectDetailVariablesWire = (v: SharedObjectDetailVariables): SharedObjectDetailVariablesWire => ({
  ShareId: v.shareId,
  HasAccessToDeceasedHousehold: v.hasAccessToDeceasedHousehold,
  ShareableObject_Generic: {
    ConnectEntityTypeId: v.shareableObject.ConnectEntityTypeId ?? '',
    Id: v.shareableObject.Id ?? '',
    Location: v.shareableObject.Location ?? '',
    SignedURL: v.shareableObject.SignedURL ?? '',
    Subtitle: v.shareableObject.Subtitle ?? '',
    Title: v.shareableObject.Title ?? '',
  },
  ShareableUpdateItem: {
    UpdateItemId: v.shareableUpdateItem.updateItemId,
    UpdateItemTypeId: v.shareableUpdateItem.updateItemTypeId,
    Name: v.shareableUpdateItem.name,
    Date: v.shareableUpdateItem.date ?? NULL_DATE,
    GenderId: v.shareableUpdateItem.genderId,
    LocationString: v.shareableUpdateItem.locationString,
    ParentsNames: v.shareableUpdateItem.parentsNames,
    BirthType: v.shareableUpdateItem.birthType,
    IsRead: v.shareableUpdateItem.isRead,
    HasShare: v.shareableUpdateItem.hasShare,
    HasAccess: v.shareableUpdateItem.hasAccess,
    HouseholdId: v.shareableUpdateItem.householdId,
    MemberId: v.shareableUpdateItem.memberId,
  },
});
```

Rules of the mapper:

- Every attribute of a record is sent (`migration/tools/contract_gen.py:71`: "Records: every attribute is serialized").
  So the mapper writes all 6 fields of UI_ShareableObject_Generic and all 13 of UI_UpdateItem.
- `NULL_DATE` (`'1900-01-01'`) is already in `api/share/mapper.ts:47`. `Date` is a Date on the wire
  (`api/openapi.yaml:14053`, `format: 'date'`). `null` in the state means NullDate (`api/share/mapper.ts:119`, `osDate`).
- No key `_ShareIdInDataFetchStatus` or `_HasAccessToDeceasedHouseholdInDataFetchStatus` (section 2.6).

`fetchSharedObjectDetail` (`api/share/repository.ts:58-62`) takes `SharedObjectDetailVariables` and calls
`toSharedObjectDetailVariablesWire(variables)`, as `fetchNoteCards` does (`api/note/repository.ts:30-31`).

### 2.4 State (`hooks/shareObjectDetailState.ts`)

- `emptyUpdateItem()` (`:39-47`) becomes `emptyShareableUpdateItem()` in `api/share/types.ts` (or next to the mapper)
  and returns the 13 defaults: Text `''`, Boolean `false`, `date: null`, `updateItemId` and `householdId` the
  Long Integer default (open point O2). The page state calls it at OnInitialize (`:60`).
- `prepareSharedObject` (`:85-97`) sets the 13 fields for an Update, as the TST Assign does (S5):
  `updateItemId: <NullIdentifier>`, `isRead: false`, `hasShare: false`, `hasAccess: <from the share>`,
  `householdId: <from the share>`, `memberId: ''`, and the 7 fields it sets today. The source attributes of
  `hasAccess` and `householdId` are open point O1.
- The non-Update branch keeps `state.shareableUpdateItem` unchanged (`:113`), as today. This matters for the
  sequence Update → Household → any: TST sends the Update's record at the third fetch, because the Household fetch
  did not touch the local (S4, S5). The state keeps that history for free. A mapper that computes the hidden fields
  from `state.share` at send time does not (section 4, option d).

### 2.5 Hook (`hooks/useShareObjectDetail.ts:61-63`)

```ts
const refreshGetShare = async (isAlive: IsAlive) => {
  const { ShareId, HasAccessToDeceasedHousehold } = parameters.current;
  const { shareableObject, shareableUpdateItem } = latest.current;
  const share = await fetchSharedObjectDetail({
    shareId: ShareId,
    hasAccessToDeceasedHousehold: HasAccessToDeceasedHousehold,
    shareableObject,
    shareableUpdateItem,
  });
  ...
```

`latest.current` is the newest state (`useShareObjectDetail.ts:46`, used at `:67` and `:71`). This gives the S4
values without new code:

| Fetch                                    | TST (S4)                                                 | React                                                  |
| ---------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| at start, after OnInitialize (`onReady`) | the Household "Loading Shared Object" card; empty record | `initialShareObjectDetailState()` (`state.ts:51-63`)   |
| on OnParametersChanged                   | what the last GetShareOnAfterFetch set                   | the state after the last `shareFetched` (`state.ts:70-74`) |

The hook sends the state as it is when the fetch starts. It does not wait for a render.

### 2.6 The `_<input>InDataFetchStatus` integers stay out

- The contract generator leaves them out on purpose (`migration/tools/contract_gen.py:73`: "runtime bookkeeping
  (_<x>DataFetchStatus) is left out"; the skip at `:876`). The Input schema has no such key (`api/schema.d.ts:4303-4308`).
- No screen-variable mapper in `api/` sends them (`api/note/mapper.ts:121-137`, `api/notification/mapper.ts:60-80`).
- They are OutSystems runtime bookkeeping of the input binding, not application state. The server logic does not read
  them (S2). A React app has no such counters, and a production server has no use for them.
- The schema allows extra keys (`additionalProperties: true`, `api/openapi.yaml:8804`), so sending them is possible.
  There is no reason to. Keep the project rule.

## 3. Behaviour mapping

| # | TST (evidence)                                                                   | React after the change                                                   |
| - | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1 | DataActionGetShare sends ShareId, HasAccessToDeceasedHousehold, ShareableObject_Generic, ShareableUpdateItem (S3) | `toSharedObjectDetailVariablesWire`: the four keys, all attributes of both records |
| 2 | First fetch: Loading card + empty record (S4)                                    | `latest.current` = the initial state (section 2.5)                       |
| 3 | OnParametersChanged: the values of the last GetShareOnAfterFetch (S4)            | `latest.current` = the state after the last `shareFetched`               |
| 4 | GetShareOnAfterFetch sets 12 of 13 attributes for an Update (S5); MemberId stays | `prepareSharedObject` sets 12 fields; `memberId` stays `''`              |
| 5 | A non-Update leaves ShareableUpdateItem as it is (S5 is Update-only)             | the non-Update branch returns `state.shareableUpdateItem` (`state.ts:113`) |
| 6 | The server result depends on the two inputs only (S2)                            | unchanged; the mock reads ShareId only (`mocks.ts:362`)                  |
| 7 | The view reads 7 fields of the record                                            | unchanged (`ShareObjectDetail_ExtendedShare.tsx:67-78`)                  |

## 4. Options considered

| Option | What                                                                                     | Verdict |
| ------ | ---------------------------------------------------------------------------------------- | ------- |
| (a)    | Send all four variables from the block state through a wire mapper in `api/share`        | **Recommended.** Same body as TST (S3); same pattern as the other calls; small change. |
| (b)    | Keep the two inputs; record the gap in the contract (`x-review` note) and in the board   | Rejected. The contract then says one thing and the client does another. A server team reads the contract. The gap stays forever for a saving of ~40 lines. |
| (c)    | Remove the two locals from the Input schema, because the server ignores them (S2)        | Rejected. The contract is generated from the compiled TST code (`contract_gen.py:71-73`). A hand edit breaks `npm run gen:api` and hides what TST sends. The production spec decides what matters, not the client. |
| (d)    | (a), but keep the 7-field view type and compute the 6 hidden attributes at send time from `state.share` | Rejected. Wrong in the sequence Update → Household → any (section 2.4): TST sends the Update's record, `state.share` is the Household. Also it hides the record shape in the mapper. |
| (e)    | (a), but keep the 7 view fields plus only `hasAccess` and `householdId` in the state; the mapper adds the 4 constants | Possible. Smaller state (9 fields). The reader must know that 4 attributes are constants; that knowledge sits in the mapper, not in the state. Option (a) with the full record is plainer. |

## 5. Open points for the user

| #  | Question                                                                                       | Options                                                                                                   | Recommendation |
| -- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| O1 | S5 says the Assign sets HasAccess and HouseholdId from `GetShare.GetShareByIdResponse`. **Unclear:** which attributes. The React answer has one boolean and one household id in the share item: `canAccess` and `householderId` (`api/share/mapper.ts:100, 102`). The MCP did not answer in this session. | (a) confirm with `getWebBlock ShareObjectDetail_ExtendedShare` (MCP) or the compiled Assign (`_getShareOnAfterFetch$Action` :597) before the build; (b) build with `canAccess` and `householderId` and check in the review | (a) |
| O2 | The wire value of a Long Integer identifier that is NullIdentifier or default (UpdateItemId, HouseholdId at the first fetch). The project reads both `"0"` and `""` for a null HouseholderId (`api/share/mapper.ts:8, 17`) and writes `'0'` as the default of a Note Id (`api/note/mapper.ts:102`). | (a) `'0'`, as `api/note/mapper.ts:102`; (b) `''`; (c) check one TST request body (read-only capture of a Sharing message) | (a), with (c) when a capture is at hand |
| O3 | Scope: the other block Share_UI.ShareObjectDetail (flag off, PD9) has the same gap in a smaller form (two inputs only in its Input schema, `api/schema.d.ts:4318-4323`). | (a) out of scope, as the findings say; (b) include | (a) |

## 6. Change list and test plan

Files (no code changed yet):

| File                                                         | Change                                                                                       |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `api/share/types.ts`                                         | `ShareableUpdateItem` (13 fields), `ShareableObject`, `SharedObjectDetailVariables`; remove `SharedObjectDetailCallInputs` |
| `api/share/mapper.ts`                                        | `SharedObjectDetailVariablesWire`, `toSharedObjectDetailVariablesWire`, `emptyShareableUpdateItem` |
| `api/share/repository.ts:58-62`                              | `fetchSharedObjectDetail(variables)` maps with the new function                              |
| `api/share/index.ts`                                         | export the new types and the empty-record factory                                            |
| `pages/MessageDetail/hooks/shareObjectDetailState.ts`        | import the type; `prepareSharedObject` sets 13 fields; OnInitialize uses the factory         |
| `pages/MessageDetail/hooks/useShareObjectDetail.ts:61-63`    | pass the two locals from `latest.current`                                                    |
| `api/openapi.yaml`, `api/schema.d.ts`                        | unchanged                                                                                    |

Tests:

1. `api/share/mapper.test.ts` (exists): `toSharedObjectDetailVariablesWire` sends the four keys with their OutSystems
   names and every attribute of both records. The empty record gives the defaults. A `Partial` object gives `''`
   for the missing fields, `date: null` gives `'1900-01-01'`, and no key ends with `DataFetchStatus`. Pattern:
   `api/note/mapper.test.ts:101`.
2. `pages/MessageDetail/components/ShareObjectDetail_ExtendedShare.test.tsx:92`: the spy assertion becomes the full
   variables at the first fetch (the Loading card and the empty record: S4). Add one test: after an Update answer,
   rerender with a new `ShareId`. The second call carries the Update record (S4, second row) and the unchanged
   Loading card.
3. `pages/MessageDetail/MessageDetail.test.tsx:206-212` (the Sharing message, MSW): add
   `recordBodies('Connect2_LegacyShared/ShareObjectDetail_ExtendedShare/DataActionGetShare')` and assert the body
   has exactly the keys `ShareId`, `HasAccessToDeceasedHousehold`, `ShareableObject_Generic`, `ShareableUpdateItem`,
   with 6 and 13 attributes. This is the proof of G1 on the wire.
4. `pages/MessageDetail/hooks/messageDetailState.test.ts` and `actions.test.ts`: unchanged, must stay green.

Gate: `npm --prefix app run ci` (4,437 tests at commit 5b5c41f6), then the 64-route parity sweep
(`migration/tools/parity_sweep.py`). No captured GetShare call exists under `migration/screens/MessageDetail`. The
parity gate compares input names only for a captured call (`parity_check.cjs:599-601`), so parity does not change.
Record the ledger row.

## 7. Risks

- O2 wrong (`'0'` against `''`): the server ignores the field (S2), so no visible effect; the body differs from TST
  in one value. A capture settles it.
- O1 wrong: same, no visible effect; the Update record differs in two hidden values. The MCP settles it.
- The Input type has an index signature (`api/schema.d.ts:4308`), so TypeScript does not reject a misspelt key.
  The mapper test with exact keys covers this.
- `window.__osCalls[].inputNames` grows to four names (`api/client/callAction.ts:105`). A later capture of a
  Sharing message then compares four names against four (section 6, gate). Today it compares nothing.
- `lib/ubtConnectUtils/structures.ts:43` and `api/share/types.ts` then hold the same `Partial` shape under two names.
  A follow-up can point the page at `@/api/share` and drop the `lib` alias; not in this item.

## 8. Orchestrator checks (2026-10-28)

The MCP answered in the orchestrator session. These facts close O1 and O2:

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| O1 | HasAccess = `Details.ShareItem.CanAccess`, HouseholdId = `Details.ShareItem.HouseholderId`, UpdateItemId = NullIdentifier, IsRead and HasShare False. MemberId is not set. Date is `ShareItem.DateTime`, then the next Assign sets it to `GetShare.UpdateDate` | getWebBlock ShareObjectDetail_ExtendedShare: GetShareOnAfterFetch, `mapTo { … }` and `ShareableUpdateItem.Date = GetShare.UpdateDate` | ExtendedShare dump :625-634 (`integerToLongInteger(nullIdentifier())`, `canAccessAttr`, `householderIdAttr`) |
| O2 | A Long Integer goes on the wire as text: `longIntegerToText`, so NullIdentifier and the default are `"0"`. A Date goes as `toISODate()`, so NullDate is `"1900-01-01"` | - | `migration/runtime-sources/OutSystems.js` W262541 (basic type converter of `ServerDataConverter.to`) |
| - | UpdateItemId and HouseholdId are Long Integer; MemberId is Text (default `""`) | - | `app/src/api/openapi.yaml:14057-14063` (`x-os-type`) |

So O1 is option (b) with the TST names (`canAccess`, `householderId`), and O2 is option (a) `'0'`. O3 stays a scope
question for the user.

One correction to section 2.2. Rule 7 (`app/docs/architecture/overview.md:115`) lets `api/<domain>/` import only
`api/client/`, `lib/` and `legacy/os/`. No `api/<domain>/` module imports `@/api/schema` today. So `ShareableObject`
comes from the contract through `api/client/callAction` (`ActionInputs` of the DataActionGetShare path), as the other
domains do.

## 9. Decisions (user, 2026-10-28)

- Design (a): send the four block variables; the state keeps the full UI_UpdateItem record (13 fields).
- O1 and O2: closed by the facts of section 8 (`canAccess`, `householderId`; `'0'` for a null Long Integer).
- O3 (a): Share_UI.ShareObjectDetail stays out of scope (PD9).
