#!/usr/bin/env python3
"""P9-3: fix stale source paths in app/docs (exact, unique-or-counted replacements). Run from the project root."""
import sys
from pathlib import Path

D = Path("app/docs")
EDITS = {
    "known-original-bugs.md": [
        ("`src/shell/feedback/feedbackMessageAutoClose.ts`", "`src/platform/feedback/feedbackMessageAutoClose.ts`", 2),
        ("`src/shell/localEntities/entities.ts`", "`src/platform/storage/localEntities/entities.ts`", 1),
        ("`syncOrbitMilestoneTypes` in `app/src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts`", "`syncOrbitMilestoneTypes` in `app/src/platform/storage/localEntities/orbitStaticEntities.ts`", 1),
        ("`app/src/shared/Connect2_OrbitMobile_MUI/lib`", "`addExtensionToFile` in `app/src/lib/orbit/actions.ts`", 1),
        ("`removeBookmarkFromCache` in `app/src/shared/Connect2_LegacyShared/lib/actions.ts`", "`removeBookmarkFromCache` in `app/src/lib/legacyShared/actions.ts`", 1),
    ],
    "README.md": [
        ("behind `src/lib/device`", "behind `src/platform/device`", 1),
    ],
    "guides/api-and-mocks.md": [
        ("The `api.ts` of each screen does the mapping.", "The `mapper.ts` of each domain in `src/api/<domain>/` does the mapping.", 1),
    ],
}
for name, edits in EDITS.items():
    p = D / name
    t = p.read_text(encoding="utf-8")
    for old, new, n in edits:
        if t.count(old) != n:
            sys.exit(f"{name}: expected {n} of {old[:50]}, found {t.count(old)}")
        t = t.replace(old, new)
    p.write_text(t, encoding="utf-8")
print("done")
