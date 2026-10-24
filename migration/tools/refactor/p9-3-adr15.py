#!/usr/bin/env python3
"""P9-3: update the text of ADR-15 in migration/stack.json after the plan changed in P7-6 to P9-2.

Edits the raw JSON text with exact, unique replacements. The status, by and at fields stay as they are.
Run from the project root, then run `stack.py render`.
"""
import sys
from pathlib import Path

PATH = Path("migration/stack.json")
text = PATH.read_text(encoding="utf-8")

OLD_F35 = "That count is a ceiling: it may only go down (follow-up F35, before P9-1, when rule 6 becomes an error)."
NEW_F35 = "That count was a ceiling (follow-up F35). Since P9-1 the rows are frozen in a baseline (see P9-1 below)."

OLD_END = "  - P4-1: `platform/settings`"
NEW_BLOCK = (
    "  - F43 (decisions W38 and W39, 2026-10-24): `os-wire.ts`, `os-assets.ts` and `os-assets.manifest.json` are in `lib/`, as plan §2.2 says, not in `legacy/os/`. A codemod moved them; only import paths changed.\\n"
    "  - P9-1 (decisions W38, W39 and W41, 2026-10-24): every folder rule of §2.4 (rules 3 to 9 and `pages-imported-by-own-route-only`) and `no-circular` is an error in `app/.dependency-cruiser.cjs`. The violations that existed are frozen in three baselines that only shrink: `app/.dependency-cruiser-known-violations.json` (142 rows), `app/docs/refactor/arch-baseline.csv` (72 ESLint rows) and `app/.knip-known-unused.json` (1,130 rows). A new violation or a stale row fails `npm run ci`. `jscpd` has a threshold of 0.57 percent and knip runs in `ci`. Rule 9 does not check mock handlers and test helpers. The owners are F35 to F37 and F46 to F50 in `migration/refactor/followups.md`.\\n"
    "  - P9-2 (decisions W42 and W43): `app/build/check-flags.mjs` (`npm run flags`, in `ci`) fails on a registry key with no reader, an unknown key, a past `removeBy`, a new flag reader outside pages, hooks and containers, and a stale list entry. The metric \\\"readers outside pages, hooks and containers\\\" is 4: 1 by design and 3 owned (F35, F51, F52).\\n"
    "  - Restored views (F22 to F26, F39, F40): a flow hook of `useFlowState` runs OnInitialize on the saved state of a back navigation (`restore`), and `onParametersChanged` runs only when the parameters change. When the user left before the answer came, the port calls again; OutSystems keeps the skeleton (F40, an intended difference). F39 (the OnParametersChanged of the AssembleDetail hall block) waits for the user. The recipe is `app/docs/guides/page-template.md`.\\n"
)

for old, new in ((OLD_F35, NEW_F35), (OLD_END, NEW_BLOCK + OLD_END)):
    if text.count(old) != 1:
        sys.exit(f"expected exactly one match, found {text.count(old)}: {old[:60]}")
    text = text.replace(old, new)

PATH.write_text(text, encoding="utf-8")
print("ADR-15 updated")
