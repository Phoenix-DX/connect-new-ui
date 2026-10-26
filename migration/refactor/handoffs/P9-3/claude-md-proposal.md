# Proposed change to CLAUDE.md (P9-3)

Status: proposal only. `CLAUDE.md` was not edited: it holds the user's own instructions. The user applies the diff, or
rejects it. Plan v2 P9-3 asks for "paths and the skill as reference only".

What changes:

1. The intro says that the migration is done and that the skill is reference material, not the way to work now.
2. The `app/` path line says what `app/` is today and where the architecture is described.

What does not change: "Hard rules", "How to work with me", "Context notes", "Refactor" and "Environment". No secret rule is touched.

Apply it by hand (2 edits), or save the block as a `.diff` file and run `git apply` from the project root.

```diff
--- a/CLAUDE.md
+++ b/CLAUDE.md
@@ -1,14 +1,16 @@
 # connect-new: UBTConnect (OutSystems 11) → React

 Migrate the OutSystems app **UBTConnect TST** (`https://ubtm-tst.ubtconnectglobal.com/UBTConnect/`) to a React app
-(`app/`) with mock data, screen by screen, matching the original 1:1. Everything follows the project skill
-**outsystems-screen-spec** (`.claude/skills/outsystems-screen-spec/`). Use it for any migration work.
+(`app/`) with mock data, screen by screen, matching the original 1:1. All 64 routes are migrated. The project skill
+**outsystems-screen-spec** (`.claude/skills/outsystems-screen-spec/`) is a reference for how the routes were captured,
+specified and checked. Use it to re-capture or re-check a route. Architecture work follows the Refactor section below.

 ## Paths

 - `SK=.claude/skills/outsystems-screen-spec/scripts`: every command below is `python3 $SK/<x>.py` or `node $SK/<x>.cjs`,
   always run from the project root (scripts default to `migration/`, `app/`, `.auth/`, `capture/` relative to it).
 - `capture/survey-UBTConnect.json`: static survey (compiled code only).
 - `migration/`: board, survey, catalog, stack, patterns, flags, per-route captures/specs/questions/parity.
-- `app/`: the React app (created by the scaffold in the foundation phase).
+- `app/`: the React app. Folders of `app/src/`: `app`, `pages`, `containers`, `components`, `api`, `platform`, `lib`,
+  `legacy/os`, `mocks`, `styles`, `vendor`. Read `app/README.md` and `app/docs/architecture/overview.md` first.
 - `.auth/`: credentials and session. **SECRET.**
```

Notes for the user:

- The diff has context lines from the current `CLAUDE.md` (lines 1 to 14).
- The sentence "Dev server for parity: ... before `route.py parity`" (Environment) stays: `route.py parity` still works on the
  frozen route reports, and the refactor gate is `migration/tools/refactor_parity.py` (already named in the Refactor section).
- Not proposed: any change to the hard rules, the Vietnamese reply rule, the secret rules or the commit rules.
