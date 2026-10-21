# Scope gate

Decide, for every screen, whether it will be built, before any capture, spec or build work starts on it. This is the cheapest phase and the one that saves the most: in one real 83-screen migration, roughly a tenth of all spec and build work went to screens that were dropped afterwards, because the product decision came after the work.

## Contents
1. Decisions and statuses
2. What triage looks at
3. Running the scope session
4. Typical questions
5. Changing a decision later

## 1. Decisions and statuses

| Decision | Meaning | Who sets it |
|---|---|---|
| `build` | in scope; agents may start | person |
| `skip` | out of scope; reason required | person |
| `ask` | needs an answer from a person | triage |
| `?build` / `?skip` | triage suggestion with evidence, not a decision | triage |

`board.py set` refuses to move a screen past `todo` unless its decision is `build`, and forces status `-` on `skip`.

## 2. What triage looks at

| Signal | Suggestion | Why it is only a suggestion |
|---|---|---|
| Reached from the app shell (bottom bar, menu) | `?build` | the shell link itself may be behind a flag |
| Reached from a screen decided `build` | `?build` | the link may be in a dead branch of that screen |
| All entry points are skipped screens (iterated to a fixed point, so whole clusters follow their root) | `?skip` | an external deep link may still open it |
| No inbound navigation, route not mentioned anywhere in compiled code (`--survey`) | `?skip` | push notifications, emails or other apps may link to it |
| No inbound navigation, but mentioned in some file | `ask`, files listed | dynamic navigation (route built in a variable, handler in a controller) |
| Same variant group as a screen decided `build` | `?skip` | production may use a different flag value than test |
| Name looks like a test/debug page | `?skip` | rare, but some "Test" screens are live |
| System/auth screen (Login, PIN, Splash, InvalidPermissions) | `ask` | often part of the shell rather than a screen |
| Same input names as a screen decided `build` | evidence: possible replacement | coincidences happen |
| Content blocks in `Deprecated`/`Legacy`/`Old` modules | evidence only | names lie in OutSystems |

Without `--survey`, triage works from routes.md columns only; the "reached from" list there is truncated, so some rows stay `ask`. Prefer `--screens` at init plus `--survey` at triage.

## 3. Running the scope session

1. `board.py show --decision "ask,?build,?skip" --cols Screen,Cx,Decision,Reason`.
2. Group rows by question, not by screen: one product area ("Is the personal calendar still used?") often settles a cluster of screens at once. Clusters follow from "decision follows X" reasons.
3. Before asking, settle what code can settle: for each `ask` with "mentioned in" files, grep those files for the route; check the flag values in the target environment (flag static entities, LaunchDarkly) for variant groups.
4. Ask the person in one sitting. Record every answer with `board.py set <S> decision=… reason="… (who, date)"`.
5. Re-run `board.py triage`: suggestions that depended on the answered rows update.

## 4. Typical questions

- Which variant of each group is live in production (flag values per environment)?
- Are system screens (login, PIN, splash, permissions) part of the shell work or separate screens?
- Which product areas are out of scope for this migration (whole modules)?
- Which screens are external deep-link targets (share links, push, email)?
- Are screens with no inbound link still used? (Server logs or analytics answer this better than code.)

## 5. Changing a decision later

Allowed, but make it explicit: `board.py set <S> decision=skip reason=…`. The ledger report then shows the tokens already spent on it as waste, which is the signal to bring similar decisions forward next time. If a skipped screen had changed shared code, review those changes as change requests.
