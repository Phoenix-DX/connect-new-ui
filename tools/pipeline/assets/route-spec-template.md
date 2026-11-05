<!--
Route spec (lite tier). Written for EVERY route before code: what the route is, how it is built, and what is unclear.
Full-tier routes use spec-template.md instead, which has the same three required headings
(Summary, Patterns used, Unclear points, Decisions to confirm). route.py finish refuses a route whose spec lacks them,
still contains TODO or <...>, or has open questions.
Every statement cites its evidence in brackets: [dom/default.html], [Block.mvc.js: expression], [calls.md #2],
[OutSystems MCP: Module/Element], [Q3 answered by user]. Nothing without evidence goes in the body: it goes to Unclear points.
-->
# Route spec: <Screen>

## Summary
| Item | Value |
|---|---|
| Route | `<path>` with inputs `<params or none>` |
| Tier | lite |
| Captured | <date>, viewport <w×h>, states: <list> |
| Shared/shell components used | <list with paths> |
| Screen-specific components | <list> |

## Specification
### Structure
<block plan from pack.md: which parts are shell, shared, built here>

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|

## Patterns used
The accepted patterns this route follows (migration/patterns/, listed in architecture.md), one line each with where it applies.
A route that needs a way of doing things no pattern covers asks the user (decision question); an accepted new pattern is
added with stack.py pattern new, never invented inside the route.
- P-<ID>: <where in this route>

## Feature flags
Required when `flags.py route <Screen>` lists flags. One line per flag: what the OutSystems MCP said (values per environment),
the user's decision, and how the route implements it (branches built, mock toggle and default). Write "- none" otherwise.
- `<flag>`: MCP <answer>; decision <user decision>; implemented as <branches / toggle>

## Unclear points
Everything not proven by the capture, the compiled code, the knowledge cache or an answer. Each line links its question id
in questions.json (route.py ask). An unclear point without a question id is not allowed.
- <what is unclear> → Q<n> (<fact answered by MCP | decision answered by user | open>)

## Decisions to confirm
Every choice this build made that the user has not explicitly confirmed yet: answers applied, divergences from the original,
mock semantics for branches not observed, gaps rendered as NotCaptured, change requests raised. route.py ready turns this list
into the post-build confirmation. Write "- none" only if there is truly nothing.
- <decision> (<evidence or Q id>)

## Change requests
- CR-<Screen>-<n>: <block> <one line> (status)

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|

## Server-side notes
- <server actions that must enforce authorization themselves, data that must be scoped to the session user>
