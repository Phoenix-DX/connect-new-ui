# context-029 · UBTConnect Build KB: knowledge base for building the React PWA (2026-10-17)

## Result
- **The user's need** (2026-10-17): "1 knowledge base để từ đó có thể build thành PWA React.js" (English: "a knowledge base to build the React.js PWA from").
  - Assessment given: the Atlas (context-028) is a migration report and does not fit that need.
  - A new artifact was built: https://claude.ai/artifact/9CRnXPfmmLvtQqrkat3Tfn (private). The local copy is
    `migration/kb/site/index.html`.
- **Generator:** `migration/kb/build_kb.py` (README in the same folder).
  - It reuses the Atlas readers and the Atlas Vietnamese route texts, and rewrites only changed files.
  - The site has 133 files, 6.4 MB.
- **Contents:**
  - 10 guides in Vietnamese: start, build roadmap with DoD, conventions, shell, data, CSS, PWA, testing, glossary
    OutSystems → React, update.
  - API contract browser: 165 operations and 365 structures with typed fields (`RecordList<…>`, `LongInteger`…).
  - Component catalog: 238 blocks, each with its README, React file and the screens that use it; OSUI patterns.
  - Original CSS per route; navigation map (826 edges, per-screen graph); stack, ADRs, patterns, `app/docs`.
  - 64 screen build specs:
    - files, blocks, CSS;
    - states with TST and React screenshots;
    - API operations, actions, navigation;
    - the full route spec;
    - a "copy spec as Markdown" button for AI agents, which includes the operation inputs and outputs.

## Decisions (who, date)
- The user asked for a new artifact for sharing. The language follows the earlier choice: Vietnamese interface and
  guides, technical content in English as in the sources.

## Facts learned (evidence)
- `openapi.yaml` carries `x-os-kind` / `x-os-owner` / `x-os-screens` / `x-mock-source` per operation, and 365
  structure schemas. OutSystems lists are `{ List, EmptyListItem }` (`x-os-list`).
- `migration/catalog/blocks.json` has `liveUsers` and `builtAt` per block. 236 block READMEs exist under
  `app/src/shared`.
- **Pre-publish review:**
  - automatic scan clean;
  - 2 Sonnet reviewers read all 238 READMEs: clean;
  - the orchestrator read the contract strings and the shell/OSUI docs;
  - the screen data and images had been reviewed for the Atlas (context-028).

## Files changed
- `migration/kb/**` (new), `migration/metrics/ledger.csv` (2 reviewers).

## Open issues
- Two blocks have an empty README: `Dialog_ExitConfirmation` and `ExitConfirmationDialog`. Both point to
  `src/shell/navigation/DialogExitConfirmation.tsx`.

## Next
- English version on request. Rebuild and republish changed files after project changes.
