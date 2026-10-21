# Feature flags

Flags decide which variant of a screen, block or behaviour the user sees. A route built for the wrong flag value looks right in review and is wrong in production, so every flag that affects a route is detected, explained by the OutSystems MCP, decided by the user, and visible in one place.

## Contents
1. Detect
2. Ask the OutSystems MCP
3. Decide with the user
4. Build and test
5. Where to look

## 1. Detect

```bash
python3 scripts/flags.py scan --survey capture/survey-<App>.json --screens migration/survey/screens.json
python3 scripts/flags.py warn
```
`scan` reads the compiled code of the survey and of every captured route and records, per flag, its kind, the files that read it and the routes whose code includes those files. Signals: static entity records with flag-like names, client variables with flag-like names, calls of flag-check actions (names such as GetHas…Enabled, Is…Enabled, …Flag…, remote-flag wrappers) and the string keys passed to them. Name-based hits are marked *candidate*. Routes in a variant group (New_/Legacy_/V2) are noted, since a flag usually chooses between them. Re-run `scan` after each capture campaign; answers already recorded are kept.

`route.py plan` prints a warning line per route with flags, and every context pack starts with the route's flags.

## 2. Ask the OutSystems MCP

`flags.py questions [--route <S>]` lists, for each flag without an answer, what to ask (read-only tools, in the module that owns the flag or the check action):
- where it is defined and its default (static entity record, site property, client variable, remote flag key),
- what it switches and which screens and actions read it,
- its value in each environment and who changes it,
- whether the server enforces what the flag hides,
- whether it selects between screen variants.
Record the answer: `flags.py mcp <flag> --answer "<what the MCP said>" --values "dev=…, test=…, prod=…" --source "<Module/Element>"`, or `--unavailable` when the MCP cannot tell. A candidate the MCP shows is not a flag is still recorded, and the user decides "not a flag".

## 3. Decide with the user

For each flag, present the MCP answer and ask how routes handle it, for example: build only the branch for the production value; build both branches with a mock toggle and a default; not a flag. Record it with its structure:
```bash
python3 scripts/flags.py decide <flag> --by user --decision "<the user's words>" --key <Key> --default <value> --values on,off \
        --branches both|default-only|none [--reference capture|none]
python3 scripts/flags.py export --app app        # app/src/lib/flags.generated.json: what the clone's flag store knows
python3 scripts/flags.py variants                # capture-plan flagVariants for every value that needs a captured reference
```
`--branches both` defaults to `--reference capture`: every non-default value needs a captured state (a flag variant in the capture plan, set the way the MCP answer says: a client variable in localStorage, another test account, another environment, or the flag service's answer). `--reference none` is the user accepting that a branch is built without a reference. Only the user decides. Variant choices on the board (scope gate) and flag decisions must agree; if they do not, ask.

## 4. Build and test

- `route.py ready` refuses a route that has a flag without an MCP answer (or `--unavailable`) and a user decision, whose `route-spec.md` lacks the "Feature flags" section, or that has a value decided "both" with `--reference capture` and no captured state for it.
- Routes read flags only through `useFlag('<Key>')` / `useFlagOn('<Key>')` from `src/lib/flags` (pattern P-FLAGS). Defaults come from `flags.generated.json`; `?ff=Key:value` overrides them for the session, and the flag panel (`?ffpanel=1`) lets the user switch branches while testing.
- Parity runs each flag-variant state (`<state>+<Key>=<value>`) with `?ff=` set, against that variant's capture and its own runtime calls.
- The review message lists every flag of the route with its decision, so the user tests each branch.

## 5. Where to look

- `migration/flags.md`: every flag, its routes, MCP answer, values per environment, decision, and the files that read it (generated, do not edit).
- `flags.py route <S>`: the flags of one route.
- `flags.py warn`: routes with flags, unanswered first.
