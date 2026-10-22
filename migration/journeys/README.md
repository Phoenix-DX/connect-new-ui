# User journeys

The main user journeys of the UBTConnect app on TST. They are the source for future end-to-end (e2e) tests and for the
Journeys view of the UI Flows dashboard (`migration/flows-dashboard/`). Decisions: user, 2026-10-21
([context-033](../contexts/context-033-ui-flows-dashboard.md)).

## Files

| Path | Content |
|---|---|
| `journeys.json` | The journeys: groups, steps, actions, preconditions, flags, notes. The source of truth. |
| `screens.en.json` | For each in-scope screen: what the user sees, what the user can do, where back goes. From the route specifications. |
| `runs/<J>/run.json` | The last run of the journey on TST: status, and for each step the path, the element used, the service calls. |
| `runs/<J>/<nn>-<Screen>.png` | Screenshot of each step, rendered from the masked DOM (user text shows as dots). |
| `runs/summary.json` | Status of all journeys after the last run. |

## Journey format (`journeys.json`)

```json
{
 "id": "J11", "group": "Directory", "title": "Find a household in the directory",
 "purpose": "One sentence: what the user wants to do.",
 "preconditions": ["What the account or the data must have"],
 "requires": {"flag": "C2EnableC1DirectoryView", "value": "off", "tst": "on"},
 "start": {"journey": "J11", "step": 3},
 "auth": "locked",
 "knownBlock": "Why the journey cannot pass on TST in read-only mode",
 "notes": ["Flag values of TST that decide a branch"],
 "steps": [
  {"screen": "HomeFeed",
   "action": {"label": "Directory in the bottom bar.", "kind": "click",
              "selectors": [".bottom-bar .list > a >> nth=1"], "pre": [], "fill": null},
   "evidence": "Where the link is described"},
  {"screen": "CountryList"}
 ]
}
```

- `steps`: the screens in order. Each step except the last has an `action`: the thing the user does on that screen to
  open the next screen. The last step has no action.
- `action.kind`: `click` (default), `auto` (the app opens the next screen by itself), `pin` (enter the PIN),
  `signin` (sign in with UBT One).
- `action.selectors`: Playwright selectors, tried in order. The runner also tries a link to the next screen
  (`a[href*="/<Next>"]`). `pre` are clicks before the action (for example a tab). `fill` types text before the action.
- `at`: the path of a step when it is not `/UBTConnect/<Screen>`. Example: the start URL `/UBTConnect/` shows the home
  feed.
- `start`: where the journey starts. Default: the route of the first screen. `{"route": "<path>"}` opens that path.
  `{"journey", "step"}` runs the first steps of another journey first (setup steps, not recorded). `{"plan": "<Screen>"}`
  uses the entry route of the capture plan, because that route has test parameters that must stay out of this file.
- `auth`: `locked` is a new tab of a signed-in browser, so the app asks for the PIN. `register` is a new browser that
  signs in and sets a PIN.
- `requires`: the journey needs a flag value that TST does not have. With one account, the runner does not run it.
  With several accounts, it tries them, because flag values can differ per user.

Rules:

1. Each arrow must be a link in the compiled TST code (`migration/survey/screens.json`, `navOut`). The dashboard builder
   stops when a link is missing.
2. A journey stops before an action that writes data (send, share, accept, save). The read-only guard blocks such
   calls on TST.
3. No test-account ids, names or other personal data in this folder.

## Run on TST

```bash
node migration/tools/journey_capture.cjs run                 # all journeys
node migration/tools/journey_capture.cjs run --only J5,J11   # some journeys
```

The runner signs in by itself (skill module `site_auth.cjs`), keeps the read-only guard on, and allows only the
actions that the user confirmed (`migration/capture-plan.json`, `defaults.allowActions`). It writes `runs/`. With
`--keep-dom` it also keeps the masked DOM of each step in `runs/<J>/dom/` (local only, `.gitignore`).

Privacy of the screenshots: the runner renders the DOM that `capture.js` masked, then masks it again. Each text of the
page becomes dots unless the same text is in the reviewed screen captures (`migration/screens/<S>/analysis/dom`) or
is only numbers. The render loads only the static images of the app, never user photos. Check the contact sheets
(`build_dashboard.py --sheets`) before a publish.

### Several accounts

The owner keeps the test accounts in one file, `.auth/accounts.json` (not in git). Only the runner process reads it,
and it gives the values to `site_auth.cjs`. No value goes to a log, an output file or a chat.

```json
{
 "password": "<the same password for all accounts>",
 "pin": "<the PIN to register>",
 "accounts": { "global": "<user>", "regional": "<user>", "local": "<user>", "householder": "<user>" },
 "order": ["global", "regional", "local"]
}
```

With this file, the runner works as follows (user, 2026-10-21):

1. A journey that is verified with its screenshots is not run again. Use `--all` to run all journeys.
2. Each other journey runs with the accounts in `order`. The first account that verifies it stops the attempts.
3. The runner signs in each account once per run, when the account is first needed.
4. An account with a pending policy is left out, because accepting writes data. Journeys through
   AcceptPendingPolicies still use it.
5. Each stopped attempt saves the masked page at that moment in `runs/<J>.debug/<account>-<Screen>.{png,html}`
   (local only).
6. `run.json` records the account that verified the journey (`account`) and every attempt (`attempts`). When no
   account verifies the journey, `runs/<J>` keeps the attempt that went furthest.
7. A journey that stops with all accounts goes to the debug check. When the debug check finds no fix, the agent asks
   the owner.

Without the file (or with `--single-account`), the runner uses the one account of `.auth/credentials.json`.

Status of a journey after a run:

- `verified`: each step opened the expected screen on TST.
- `blocked`: the run stopped at a step. `blockedAt` gives the step, the screen and the error. `knownBlock` gives the
  known reason (for example, no data for the test account in read-only mode).
- `not-run`: the journey needs a flag value that TST does not have.

## From a journey to an e2e test

For each journey, start at `start` and check the preconditions. For each step, do `action` with the element of the
last run (`runs/<J>/run.json`, `steps[].action.element`). Then check that the path ends with the next screen. The
service calls of each step (`steps[].calls`) show which data the next screen loads. Use an account with the role of
`account` in `run.json`.
