# Mock data: what is recorded, what is fictional

Decisions (user, 2026-10-14): TST holds **test data** (not real people). Fixtures come from TST **only for data that
does not belong to a person**. Everything else is fictional, with the captured structure and counts.
Scope file: [mock-scope.json](../mock-scope.json) (24 actions); anonymisation rules: [mock-rules.json](../mock-rules.json).

| Group | Actions | Mock source |
|---|---|---|
| Reference (18) | countries and statistics, country info, country names, locality statistics and timezone, date ranges, counters (FetchCount, unread messages, update items unread), services, static entities (birthday search options, share object types, message template parameters), note pill labels, cache info, runtime version, AfterInitialize, pending policies | recorded (`recordedHandler`) |
| Places and organisations (6) | locality details (main hall), subdivision and list, OneSchool Global details and list, interchanges by locality | recorded; emails, phones, street addresses replaced |
| Person data | households, members, relations, notes, bookmarks, messages, notifications, updates, search, user and sync info, household cache, map entities, share data, signed image links | fictional (P-MOCKS), captured shapes and counts |
| Config with keys | `ActionAppManager_SynchAppContext` (Firebase key, App Insights connection string, B2C ids), feed config, entertaining config, `AppManager_Get_UserIdToken` | fictional, never real keys |
| Writes | add/update/delete/mark/send/share/accept… | never recorded (guard); `src/mocks/store.ts` (P-MUTATION) |

## How it is enforced
- `record_har.cjs --record-actions migration/mock-scope.json` writes only these actions to the HAR. Other calls run
  (the app needs them), but the script does not save them.
  `har_to_fixtures.py convert --only-actions migration/mock-scope.json` filters again.
- Kept as real values (app labels, capture decision Q3 a): place, organisation, service and static-entity names,
  country address formats.
- Replaced: emails, phones, street addresses, person names.

## Rules applied at conversion (`mock-rules.json`)
- `dropInputs`: OutSystems sends the whole screen state with data actions (the cached profile of the test user, account
  and contact forms, typed text, device data). `dropInputs` removes this state. `recordedHandler` matches only the inputs
  that a route sends.
- `dropOutputs: Directory_UserCurrent` (user, 2026-10-14): it removes the profile of the test user inside `GetCacheInfo`.
  The `GetCacheInfo` mock must fill `CacheControl_Response.Directory_UserCurrent` from the fictional mock user of the
  shell (same structure as `analysis/types.ts`).
- `keep`: place/organisation/service/static-entity names, country address formats, and place coordinates (countries,
  localities, main halls: `Latitude`, `Longitude`, `MaiinHallLatitude`, `MainHallLongitude`) so map pins match.
- Recorded 2026-10-14: 25 fixtures for 18 of the 24 actions.
  - Page load does not call these actions (they need a step or an unreachable screen): GetCountriesNames,
    GetInterchangesByLocalityId, GetPendingPolicies, Get_OneSchoolGlobal_List, Get_Subdivision_List,
    GetMessageTemplateParameters…
  - Record them with plan steps (`convert --append`), or make them fictional.

## Known converter gaps (only matter if person data is ever recorded)
- The converter keeps numeric fields listed in `anonymize` (no numeric branch). If person data is recorded, the
  coordinates (`Latitude`, `Longitude`) stay.
- The converter shifts only birth-like dates. It does not shift `DeceasedDate`.

## Person images in mocks (user, 2026-10-14, Q-W2C-1)
Rules for member, household and locality images:
- Where the TST capture showed a photo (`data-masked-src="user-image"`), the mock returns a neutral, non-person
  placeholder image. The app ships this image.
- Where TST showed the fallback icon, the mock returns an empty URL.
- Never use real or invented person photos.

## Fictional text must be meaningful (user, 2026-10-16)
Do not use placeholder text. Examples: "Sample Member 1", "Sample household text…", "Lorem", "mock message", or letter
salads chosen only for glyph width.
- Fictional data reads like real app content:
  - plausible household and member names for the country of the record
  - real place names (locality, country)
  - sensible message / note / notification / update texts, dates and counts
- Fictional data stays fictional: never real people, never real contact data. Use reserved forms such as
  `@example.com` and 555 numbers.
- Keep the captured counts. Where parity depends on it, also keep the captured word lengths and line wrapping (choose
  real words of those lengths).
- Skeleton placeholders of the ORIGINAL app ("Subdivision Name Example", "Example & Example"…) are not mock data. Keep
  them 1:1.
