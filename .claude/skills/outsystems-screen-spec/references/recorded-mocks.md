# Recorded mocks: mock data that matches the real app

Use this when the stack item `mocking` is "MSW 2 in the browser, anonymized fixtures recorded from the real app". The React app still runs on MSW only (no backend, works on a laptop), but each recorded action answers with what the real app returned for the same inputs, anonymized. Lists, details and the ids that link them match the original, so parity and the user's test compare like with like.

## Contents
1. When to choose it
2. The flow
3. What the converter keeps and replaces
4. Using fixtures in a route
5. Gates and privacy
6. Limits

## 1. When to choose it

Choose recorded fixtures when the screens' look depends on real data (text lengths, list sizes, which statuses appear, empty vs filled fields) and the person can log in to a **test** environment with a **test** account. Choose fictional data when there is no such environment, or when the data owner does not allow test data as a source. The choice is the user's, made in the stack session (phase 4) and recorded as an ADR (`stack.py adr new`), because it changes the default privacy rule "fictional values only".

## 2. The flow

```bash
# 1. the person logs in (once); agents never open the HAR
node scripts/batch_capture.cjs login --base https://<host>/<App>/ --storage .auth/state.json
node scripts/record_har.cjs --base https://<host>/<App>/ --storage .auth/state.json --out migration/.raw/session-<date>.har \
     --plan migration/capture-plan.json --crawl          # automatic (section 2a); omit both for manual browsing

# 2. convert (deterministic: same HAR + same salt -> same fixtures)
python3 scripts/har_to_fixtures.py convert --har migration/.raw/session-<date>.har \
        --out app/src/mocks/fixtures --rules migration/mock-rules.json

# 3. the USER reads app/src/mocks/fixtures/REVIEW.md; adjust rules and convert again if needed, then
python3 scripts/har_to_fixtures.py review --out app/src/mocks/fixtures --by user

# 4. delete the raw HAR
```

### 2a. Automatic recording

`--plan` replays the capture plan of `batch_capture.cjs` (routes with test parameters, `waitFor`, steps with click / fill / back); routes whose parameters are still `<placeholders>` are skipped. `--crawl` starts from `--base` and the plan's routes and follows in-app `<a href>` links breadth-first (`--depth 3`, `--max-pages 150`). Pages are grouped by pattern (path + parameter names) and at most `--per-pattern 3` pages are recorded per pattern, so a list and a few of its details are recorded **with the ids the list returned**: that solves route parameters for detail screens without anyone typing an id. Crawl never clicks buttons; states behind buttons (tabs, filters, dialogs) go into plan steps.

Safety, because the session is a real account:
- **Read-only guard** (on with `--plan`/`--crawl`): a screenservice call goes through only when the action is a data action / aggregate (`DataAction*`, `ScreenDataSet*`, `Aggregate*`) or `ActionGet|List|Load|Fetch|Search|Find|Read|Count` followed by a word boundary, with **no write verb anywhere in the name** (Save, Create, Update, Delete, Set, Mark, Submit, CheckIn, Start, Sync…), or is in `--allow-actions "A,B"`. `Check*`, `Validate*`, `Is*`, `Has*` are blocked by default (`ActionCheckIn`, `ActionValidateAndSave`); `ActionGetOrCreate*` too. Everything blocked is aborted and listed. Add a name to `--allow-actions` only when the user confirms it writes nothing. `--allow-writes` disables the guard; do not use it on shared environments.
- Links matching `logout|logoff|signout|login|delete|remove|cancel` (path or text) are never followed; extend with `--exclude "<regex>"`.
- A redirect to a login page stops the run (the session expired): log in again and rerun.
- Blocked and failed calls produce no fixture.

`migration/recording-coverage.md` (names only, safe to read) lists the pages visited, the actions recorded per page pattern, the actions blocked, and the build screens never reached. Read it before converting: unreached screens need a plan entry with test parameters or a plan step; blocked reads need `--allow-actions`.

### 2b. What to cover

`python3 scripts/har_to_fixtures.py coverage --out app/src/mocks/fixtures` writes `migration/fixture-coverage.md`: per route, every call of the capture (all phases and flag variants, from `analysis/calls.json`) with or without a recording. Separately, `route.py ready` refuses a route with a captured call that has no mock handler at all.

Whether automatic or manual, cover what the routes need: each list with data and (if possible) empty, each detail opened from a list, searches and filters with typical inputs, each status that changes the UI. `migration/catalog/actions.md` is the checklist of actions per screen. Recording more later: convert with `--append` (same salt file, so ids stay consistent) and review again.

`record_har.cjs` records only `/screenservices/` calls. The raw folder (`migration/.raw/`) gets a `.gitignore` containing `*`, so the HAR and the salt never reach git. Keep the salt for the whole campaign: a new salt remaps every id and text.

## 3. What the converter keeps and replaces

| Kept as recorded | Replaced |
|---|---|
| structure, field names, list sizes, order | text in personal fields (name, email, phone, address, note, comment, username…) → fake words of the **same lengths** |
| OutSystems "no value" (`""`, `"0"`, `1900-01-01`) | identifiers (`…Id`, GUIDs) → remapped with **one table** for all fixtures and inputs |
| booleans, numbers (amounts, counts), status codes | emails, phone-like values, digit runs of 5+ |
| dates (they drive logic) | sensitive dates (birth…) → year shifted, format kept |
| | image URLs and base64 images → `""` (the UI's no-image state) |

Rules file (`assets/mock-rules.example.json`): `keep` (field names never touched, e.g. status labels that the name rule caught), `anonymize` (field names always replaced), `ids` (extra identifier fields). Personal-field detection is a heuristic on names and values: that is why the user reviews `REVIEW.md`, which lists every field kept and every field replaced.

## 4. Using fixtures in a route

```ts
// src/screens/<S>/mocks.ts
import { recordedHandler } from '../../mocks/fixtures';
export const handlers = [recordedHandler('<Module>', '<Action>')];
```

- The action name is the last segment of the screenservice URL (as in `calls.md`); the module is the segment after `screenservices/`.
- The adapter (`api.ts`) calls `callAction('<Module>', '<Action>', inputs)` with the **OutSystems input names** (data actions: screen variables; server actions: input parameters). The handler returns the recording whose inputs match; with no match it returns the first recording and logs `[mock] no recorded call for inputs …` (record that case, or ask the user how to mock it).
- Scenarios: `real` (recorded), `empty` (every list emptied), `error` (HTTP 500), plus hand-written handlers for captured states the recording does not have.
- An action or branch never recorded gets fictional data with captured counts and shapes (P-MOCKS), and is listed under "Decisions to confirm".
- Never edit a fixture by hand: change the rules and convert again.

## 5. Gates and privacy

- `har_to_fixtures.py review` accepts only `--by user` and stores a hash of every fixture. Any conversion removes the review; any changed or added fixture makes `check` fail.
- `consistency_check.py` (part of `route.py finish`) fails a route whose mocks use `recordedHandler` while the fixtures are missing, unreviewed or changed since review.
- Agents read fixtures only after the user's review, and never the HAR, the salt or `.auth/`.
- Screens with sensitive categories (health, religion, ethnicity, location of people, household members, government identifiers): ask the data owner before recording them at all; if allowed, add their fields to `anonymize` explicitly.

## 6. Limits

- Mutations (create, update, delete) answer with the recorded response but keep no state by themselves. Pattern P-MUTATION closes this: seed a `collection` of `src/mocks/store.ts` from the recording (`fixtureData(module, action)`), serve the list and detail with `statefulHandler` from that collection, and change it in the mutation handlers, so a created item appears in the list as in the original. The data lives as long as the page; `?mock-reset=1` starts again from the seed.
- Calls recorded while the app was republished (`hasApiVersionChanged`) are skipped.
- Fixtures reflect the test account's data on the recording day. Re-record when the original app changes, and re-run parity.
