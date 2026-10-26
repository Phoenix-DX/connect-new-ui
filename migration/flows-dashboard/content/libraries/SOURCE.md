# Source of the library data

These files are copies of the output of the dependency analysis in `~/Projects/my-research/ubtconnect-module-relationship`
(outside this repository). That analysis reads the Model API of the UBTConnect module on **DEV** through the Service Studio
MCP, and parses the dumps of all screens, blocks, client actions and server actions. It is design-time data: references
of the UBTConnect module itself. It does not show what other modules render at run time.

| File | Source in my-research | Content |
|---|---|---|
| `screen_map.json` | `data/screen_map.json` (`tools/build_screen_map.py`) | 86 screens × 12 jobs; the elements of UBTConnect_Utils and Connect2_LegacyShared each screen uses, with the path (own, via a block, inherited from the layout) and the evidence (`raw/<kind>/<name>.cs:<line>`). |
| `flow_detail.json` | `data/flow_detail.json` (`tools/build_report.py`) | Per UI flow: each cross-module usage row (consumer, scope, usage kind, direct or via, evidence). |
| `summary.json` | `data/summary.json` (`tools/build_report.py`), reduced | Counts, contract against use, unused references, the producer-to-producer contract, the theme of each flow, the theme chain (names only). |
| `sequences.json` | `DIAGRAMS` in `tools/build_dashboard.py` | The four Mermaid sequence diagrams and their captions, with the UI flows they belong to. |

Snapshot: 2026-10-26 (DEV). TST is the source of truth of this repository: scope, screenshots and the TST facts on the page
come from the repository, not from these files. Differences between DEV and TST are noted on the page (Method).

To refresh: run the regenerate command in `my-research/.../STATUS.md`, copy the four files again, and build the page with
`python3 migration/flows-dashboard/build_dashboard.py --with-libraries`.
