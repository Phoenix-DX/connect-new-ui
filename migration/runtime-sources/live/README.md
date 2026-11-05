# Live compiled code that differs from the captured copies (2026-11-05)

The files of `migration/knowledge/tst-drift-2026-11-05.md`: the TST compiled code of the manifest of 2026-11-05
(static survey, read-only). They are the screens and blocks whose captured copy
(`migration/screens/<Route>/analysis/sources/raw/`) differs. `route-actions/tools/check_route.py` reads these copies in place of the captured ones (TST wins; the live code
is the newest truth). Evidence only; never shipped.

Second batch, 2026-11-05 (logged in `migration/knowledge/runtime-sources.md`): the live `moduleinfo.json` and nine
model and controller files. They came by static GET with the URL versions of the live moduleinfo. Six blocks come
from the survey file. They serve the decisions on the drift gaps: Bookmarks, Notes, the HouseholdDetails gallery,
Notifications, Search.
