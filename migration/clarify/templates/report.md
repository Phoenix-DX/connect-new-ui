# Flow report: <Flow>

| | |
|---|---|
| Status | draft / reviewed (live MCP check done) |
| Date | YYYY-MM-DD |
| Screens on DEV | N (built: n; not built: names, with the board decision) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages (`pack/kb.md`), TST compiled code where named |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match N · partial N · missing N · differs N · mock-only N · n/a N · unclear N (same as `checklist.json`).
- The 3 to 5 most important findings, one line each, with their id (F1…).
- Status of the flow in one sentence: what a user can do in React today, and what they cannot.

## 2. Screens

### 2.1 <Screen>

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles | Registered, UBTOne_User | route meta `member` | match | `app/src/app/routes.ts:46` |
| inputs | … | … | … | … |
| lifecycle | OnInitialize → … | hook … | … | … |

**Data** (data actions, aggregates → server/service actions → React repository/hook → mock)

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|

**UI tree** (blocks with their arguments, If conditions, lists, inputs; one row per element that carries behaviour)

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|

**Screen actions** (one row per action; branches and messages that differ get their own row)

| Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|

**Validations** (built-in widget validations, custom nodes, feedback messages)

| Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|

**Business logic** (client actions called, rules `BR-UBTCON-*`, client variables, local storage)

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|

**Strings** (only the strings that differ or are missing; "all N strings match" otherwise)

### 2.2 <Screen> …

### 2.n <Screen not built>

One paragraph: the board decision (`skip` and its reason, who and when), what the DEV screen does (3 to 6 lines), and
what a build needs (blocks, actions, server actions). Verdict `n/a` for every item, cited as one row in `checklist.json`.

## 3. Blocks of the flow

One sub-section per own block that a built screen uses: inputs, events, actions and validations as in §2 (tables).
Blocks of other flows: one line each with the pack that holds them and the verdict of their use here.

## 4. Shared blocks and actions

The shared client actions and block-only-flow blocks the flow uses (from `pack/actions.md`, `pack/blocks.md`), each with
the React location and a verdict, when the agent checked them. Otherwise: "checked in the report of flow X" or "not
checked here (shared)".

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | blocker / major / minor / info | … | … | … | … |

Severity: **blocker** = the user cannot complete the flow; **major** = a visible behaviour, a rule or data differs;
**minor** = a text, a style class or an edge case; **info** = no user impact (dead code, naming).

## 6. DEV vs TST differences

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | | | | | | | | |
| data | | | | | | | | |
| ui | | | | | | | | |
| actions | | | | | | | | |
| validations | | | | | | | | |
| logic | | | | | | | | |
| strings | | | | | | | | |
| **total** | | | | | | | | |
