# API and mock data

## Contract

- `src/api/openapi.yaml` has one call per OutSystems action.
  - The body holds the inputs with their OutSystems names and wire types.
  - The answer is `{ "data": outputs }`.
  - An error answer is `{ "error": message, "exception": name, "specificType"?: string }` with an HTTP error status (see Errors).
  - Server and service actions: `POST /api/<Module>/<Action>`, called as `callAction('Module', 'ActionName', inputs)`.
  - Data actions and aggregates belong to the screen or block that defines them (same-named ones differ):
    `POST /api/<Module>/<Owner>/<Action>`, called as `callAction('Module', 'Owner/DataActionName', inputs)`.
- `npm run gen:api` writes `src/api/schema.d.ts`. `callAction(module, action, inputs)` (`src/api/client/callAction.ts`) takes its types from that file.
- `migration/tools/contract_gen.py` generates the contract from the compiled code of the original app.
  Only the foundation owner changes the contract.

## Errors (OutSystems exceptions)

A server action that raises an exception answers the `Error` of the contract.
In this answer, `exception` is the OutSystems class. The names come from the client runtime (`OutSystems.js:2`):
`AbortActivityChangeException`, `DataBaseException`, `InvalidLoginException`, `NotRegisteredException`,
`SecurityException`, `ServerException`, `UserException`.

`specificType` is the name of the user exception (`<Module>.<Name>`, e.g. `Connect2_LegacyShared.ObjectNotFound`)
when a flow can catch that one by name.
`callAction` raises the same class from `src/legacy/os/os-exceptions.ts`, as the runtime does (`OutSystems.js:3`):

| Answer                                | Raised                                                                             |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| error answer with an `exception`      | that exception (`message` = `error`, `specificType` kept)                          |
| 404 without one                       | `ViewHasChangedException` (a system exception)                                     |
| no answer within the module's timeout | `CommunicationException` `'The connection has timed out'` (request aborted)        |
| any other failed answer, network down | `CommunicationException` (`'Request failed with status <N>'` / `… with an error'`) |

`src/api/client/apiError.ts` wraps these exceptions for code that does not use the OutSystems classes. `ApiError` has a `kind`
(`timeout`, `network`, `server`, `security`, `viewChanged`) and `cause`, the OutSystems exception. `asApiError(e)` wraps an OutSystems exception
(other errors give `null`), and `ApiError.ofKind` goes the other way through `exceptionOfApiErrorKind` in `os-exceptions.ts`.
The kinds:

- `timeout`: `CommunicationException` with the timeout text.
- `network`: any other `CommunicationException`.
- `security`: `SecurityException`, or status 401.
- `viewChanged`: `ViewHasChangedException`.
- `server`: every other exception.

`callAction` is unchanged. The 401 and `SecurityException` triggers do not call `signedOutRemotely()` yet: they wait for the BFF.

Flows test exceptions with `src/legacy/os/exceptions.ts` (`isUserException(e, specificType?)`, `isCommunicationException`,
`isInstanceOf`, `isSystemException`; `raiseToFlowHandler` for the unhandled ones).
In a mock, throw the exception from the answer: `contractHandler(..., () => raiseUserException('Not allowed', 'Module.Name'))`,
or `throw new SecurityException('…')`. The handler sends the error answer with HTTP 500.
`?mock=error` answers HTTP 500 without an exception, that is, a `CommunicationException`.

**Request timeout.** Like the runtime (`getEffectiveTimeoutForServerCall`, `OutSystems.js:17`), every call times out
after a delay. The delay is the Server Request Timeout of the module that makes the call, that is, the `<Module>` in the path of the call.

- `SERVER_REQUEST_TIMEOUT` in `src/api/client/callAction.ts` sets the timeout: **20 s for `UBTConnect`, 10 s for every other module**
  (the compiled controllers' `defaultTimeout`, cited per module there).
- The same rule covers server actions, data actions and aggregates. None sets its own timeout; `applicationDefaultTimeout` is 0 on TST.
- The timer starts at the send. The answer clears it.
- On expiry the request is aborted and the call raises `CommunicationException` with `CONNECTION_TIMED_OUT`
  (`src/legacy/os/os-exceptions.ts`). So the timeout branches of the flows run as on TST: `showExceptionMessage` → "communication" toast,
  `IsTimeoutExceptionMessage`, list-error states.
- A new module in the contract does not compile until it gets its timeout.
- The `loading` scenario (`latency=infinite`) therefore ends like TST: app-start calls fail after 10 s, `UBTConnect` data actions
  after 20 s. Parity takes its screenshot at about 1.5 s, before either.

## Wire format (OutSystems)

- Long Integer travels as a string.
- Lists are `{ "List": [...] }`.
- "No value" is `""`, `"0"` or `1900-01-01`.

The helpers are in `src/legacy/os/os-wire.ts`. The `api.ts` of each screen does the mapping. Components see only domain types.

Domain folders in `src/api/` (`household/`, `member/`, `country/`) hold the mapping and the calls of their domain. The old `api.ts` files of the screens re-export them under the old names. `country/` holds 7 calls: the statistics of BrowseCountries, CountryList and CountryDetails, `GetCountryInfo` (Profile), the two shared actions of Connect2_LegacyShared and the cache info of CacheControl_AllCountries. Two mappers keep only the fields that the UI reads. Read `src/api/README.md`.

## Mock data

| Data                                                                            | Source                                                                                  |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| reference data, places, organisations (24 actions, `migration/mock-scope.json`) | recorded from TST, anonymised, reviewed by the product owner (`src/mocks/fixtures`)     |
| anything about a person, configuration with keys                                | fictional, same structure and counts as recorded                                        |
| writes (save, delete, mark…)                                                    | `src/mocks/store.ts`: in-memory collections, so lists show the change like the original |

Never edit fixtures by hand. Change the rules, convert again, and the owner reviews again.
Otherwise `har_to_fixtures.py check` fails.

## Mock scenarios and test switches

`src/mocks/scenario.ts` and `src/platform` read the switches and remember them for the tab (sessionStorage).
The switches work only while the app runs on mocks (`VITE_USE_MOCKS` is not `false`).

| Switch                                      | Effect                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `?mock=real` (default)                      | recorded and fictional data                                                                                                                                                                                                                                                                                                                  |
| `?mock=empty`                               | every `{ List: [...] }` is emptied (`emptyLists`)                                                                                                                                                                                                                                                                                            |
| `?mock=error`                               | calls answer HTTP 500 without an exception (a `CommunicationException`)                                                                                                                                                                                                                                                                      |
| `?mock=loading` / `?latency=infinite`       | calls never answer; they time out as on TST (see Request timeout)                                                                                                                                                                                                                                                                            |
| `?latency=<ms>`                             | answer delay (default 600)                                                                                                                                                                                                                                                                                                                   |
| `?mock=<route scenario>`                    | a scenario defined by one route's `mocks.ts`, e.g. Menu `householder` (a householder account, shows "Request Photo Update"), Profile `spouse` (a householder's spouse with household of 3 members). Read the header comment of `src/screens/<Screen>/mocks.ts`: it lists the scenarios, what they answer and what falls through to the shell |
| `?mocksession=unlocked\|out\|nopin\|locked` | start state: signed in and unlocked (default on a tab's first load), signed out, signed in without PIN, signed in with PIN but locked (`src/platform/session/testSession.ts`; test PIN `TEST_PIN`)                                                                                                                                           |
| `?mockuser=policies,expired,householder`    | toggles of the mock user (`src/platform/session/mockUser.ts`)                                                                                                                                                                                                                                                                                |
| `?locksecs=<s>`                             | inactivity timeout                                                                                                                                                                                                                                                                                                                           |
| `?mock-reset=1`                             | clears the mock store                                                                                                                                                                                                                                                                                                                        |

A route scenario is a handler that returns `undefined` unless `scenario()` equals its name.
Every other request falls through to the next handler (usually the app-start mocks of `platform/bootstrap`).

`src/mocks/handlers.ts` collects the handlers with one glob per folder, in this order: `pages/*/mocks.ts` and `screens/*/mocks.ts`
(merged and sorted by folder name), `shared/**/mocks.ts`, `platform/**/mocks.ts`. MSW uses the first handler that matches, so the order is a rule:
the app-start mocks must stay last. `src/mocks/handlers.test.ts` fails when the order changes.

## Mock store for writes

`src/mocks/store.ts` keeps in-memory collections so a write shows in later reads, like the original.

- `collection(name, seed, idField = 'Id')` returns a `Collection` (`all`, `get`, `where`, `upsert`, `remove`; ids compare
  as text; new rows get ids from 1000). The first use makes a copy of the seed.
- `statefulHandler(module, action, answer)` builds the MSW handler that reads and changes collections.
- The data lives as long as the page. Navigation inside the app keeps it. A reload or `?mock-reset=1` starts from the seed.
- A write that the store must not keep (e.g. Menu `ActionRequestPhotoUpdate`) answers a fixed success.
- Profile keeps the submitted edit requests in `Profile.editRequests`. It does not change the profile.
