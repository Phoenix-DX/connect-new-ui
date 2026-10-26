#!/usr/bin/env python3
"""P7-6 commit 1: the move-map rows for every file left in app/src/shared/ (W20). Docs only; moves nothing.

  python3 migration/tools/refactor/p7-6-move-map-rows.py            # write the rows into app/docs/refactor/move-map.csv
  python3 migration/tools/refactor/p7-6-move-map-rows.py --check    # coverage of src/shared/ by the P7-6 rows; writes nothing
  python3 migration/tools/refactor/p7-6-move-map-rows.py --files    # print old,new per file (input for move.ts --map)

Run from the project root. Line-based: rows that this script does not touch keep their exact text. Re-running is safe:
an UPDATE row replaces the row with the same source (the first one), an ADD row replaces the P7-6 row with the same
source or is appended at the end (after the older row with the same source, so the rename map of rf.py takes it).
Edit ROWS below when the review changes a row, then run the script again.
"""

from __future__ import annotations

import csv
import io
import posixpath
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
MAP = ROOT / "app/docs/refactor/move-map.csv"
COLUMNS = ["source", "origin", "shape", "target", "phase", "routes", "status", "notes"]
PHASE = "P7-6"
# Owners of the debt that the rows create (decision W32; rows.md "Debt created").
OWNER_T1 = ('owner: follow-up FU-split-module-actions ("split module client actions by data owner", change steps, '
            "before P9-1)")
OWNER_OSLINK = ("baseline row owner: follow-up FU-OSLink-navigation (OSLink gets its navigation by a prop or an "
                "app-level context)")
OWNER_CACHE = "owner: the later change step CacheControl -> api hooks (P0-5 targets)"

# kind UPDATE: an existing row (source, phase before) gets new values; kind ADD: a new row with phase P7-6.
# Keys left out of an UPDATE keep their old value.
ROWS: list[dict[str, str]] = [
    # ---------------------------------------------------------------- rows that P7-0 left and P7-2 settled
    {
        "kind": "UPDATE", "source": "src/shared/NavigationHandler/NavigationConfirmationDialog", "status": "moved",
        "notes": "P7-2: merged into components/ui/Dialog/NavigationDialog.tsx (variant plain); the navigation listener "
        "stays in NavigationDialog.tsx and only the back-navigation queue comes from platform (W21: no "
        "platform/navigation/useNavigationConfirmation.ts); duplicates.md group 2",
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy", "shape": "component",
        "target": "src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx", "status": "moved",
        "notes": "P7-2: not merged as a prop; moved next to the platform dialog as DialogAccessRestrictedActionLegacy "
        "(markup through ConfirmDialogView, its OSBlock element kept in the DOM), so the app start does not load it (W21); "
        "duplicates.md group 2",
    },
    # ---------------------------------------------------------------- block folders (existing rows, new phase P7-6)
    {
        "kind": "UPDATE", "source": "src/shared/Connect2_LegacyShared/MultiResolutionImageLoader", "phase": PHASE,
        "notes": "P7-6: no importer outside its own test and story (evidence: the dependency-cruiser import graph and a "
        "grep of src, build and .storybook, 2026-10-24; knip cannot show it, because its stories are knip entries and "
        "keep it alive); the folder (component, test, story, README, index) is deleted in its own commit, not in the "
        "pure move; P0-5 shape delete; rows.md T12",
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnectLibrary/Member_ListItem", "phase": PHASE,
        "notes": "P7-6 (P7-4 leftover): pure move; one importer components/household/HouseholdMemberList; partly same as "
        "NonMemberListItem (jscpd: 27 lines, P7-4 kept both)",
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect/HouseholdDetails_TimelinePhoto", "phase": PHASE,
        "notes": "P7-6: pure move; one importer HouseholdDetails_TimelinePhoto_List (moves to components/household too)",
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect/HouseholdDetails_TimelinePhoto_List", "phase": PHASE,
        "notes": "P7-6: pure move; one importer components/household/HouseholdTimelinePhotos (the Photos section of "
        "HouseholdDetailsView, P2-4)",
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect_Utils/CacheControl", "phase": PHASE,
        "target": "src/legacy/os/cache/CacheControl/CacheControl.tsx",
        "notes": "P7-6 pure move (W20): the P0-5 target src/api/client/cacheControl.ts is a merge (hook into api, "
        "OSBlock placeholder kept), a change for a later step; legacy/os holds the OutSystems compatibility blocks; "
        "importers: the 4 CacheControl_* blocks only; rows.md T2; " + OWNER_CACHE,
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect_Utils/CacheControl_AllCountries", "phase": PHASE,
        "target": "src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx",
        "notes": "P7-6 pure move (W20): P0-5 target src/api/country/hooks.ts (useAllCountriesQuery) is a merge, later; "
        "importers containers/FilterSheet and components/filter/FilterSheet (type only): 2 rule-9 warnings; mocks.ts "
        "goes by its own row (MSW glob); rows.md T2; " + OWNER_CACHE,
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect_Utils/CacheControl_AllLocalities", "phase": PHASE,
        "target": "src/legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx",
        "notes": "P7-6 pure move (W20): P0-5 target src/api/locality/hooks.ts (useAllLocalitiesQuery) is a merge, later; "
        "importer containers/FilterSheet: 1 rule-9 warning; mocks.ts goes by its own row (MSW glob); rows.md T2; " + OWNER_CACHE,
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect_Utils/CacheControl_Policies", "phase": PHASE,
        "target": "src/legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx",
        "notes": "P7-6 pure move (W20): P0-5 target src/api/app/hooks.ts (usePoliciesQuery) is a merge, later; importers "
        "pages/TermsAndPoliciesMenu, components/auth/PinUnlockContent (type only), platform/feedback/dialogs/"
        "PinUnlockContentContainer, platform/session/usePinUnlockContent: 2 rule-9 warnings; mocks.ts and mocks.test.ts "
        "go by their own row (MSW glob); rows.md T2; " + OWNER_CACHE,
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect_Utils/CacheControl_UserInfo", "phase": PHASE,
        "target": "src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx",
        "notes": "P7-6 pure move (W20): P0-5 target src/api/member/hooks.ts (useUserInfoQuery) is a merge, later; "
        "importer CacheControl_UserInfo_Wrapper only (platform/session/UserInfoCache, allowed by rule 9); rows.md T2; " + OWNER_CACHE,
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect/CacheControl_UserInfo_Wrapper", "phase": PHASE,
        "shape": "hook+component", "target": "src/platform/session/UserInfoCache/UserInfoCache.tsx",
        "notes": "P7-6 pure move (W20) to the P0-5 target: it assigns the session user info "
        "(getUserInformation_Wrapper_Assign); importers containers/FilterSheet and 4 pages (types.ts: 7 page files); "
        "its OSBlock import (components/ui/os) is 1 rule-8 warning; rows.md T3; " + OWNER_CACHE,
    },
    {
        "kind": "UPDATE", "source": "src/shared/UBTConnect/Directory_Updates", "phase": PHASE,
        "target": "src/mocks/modules/UBTConnect/Directory_Updates/mocks.ts",
        "notes": "P7-6 (W20): only mocks.ts (MSW handler of UpdateItem_MarkAsRead and the update-items collection; "
        "importer pages/HomeFeed/mocks.ts); src/mocks/modules/ mirrors src/mocks/fixtures/<Module>/; the MSW glob "
        "../shared/**/mocks.ts in src/mocks/handlers.ts becomes ./modules/**/mocks.ts at the same place (same order); "
        "the P0-5 target src/mocks/handlers/update.ts needs a glob of its own; rows.md T7",
    },
    # ---------------------------------------------------------------- the Layout_DetailPage adapter (new row)
    {
        "kind": "ADD", "source": "src/shared/UBTConnectLibrary/Layout_DetailPage",
        "origin": "UBTConnectLibrary.Layouts.Layout_DetailPage", "shape": "container+component",
        "target": "src/containers/DetailLayout/DetailLayoutContainer.tsx", "routes": "11",
        "notes": "P7-6: the thin adapter of P2-3 (useNavigateBack + components/layout DetailLayout), with its test, "
        "story, README and 6 captures; 11 pages import it; no rule warning; the row above keeps the P2 view move; "
        "later (a change): each page passes onBack and the container goes; rows.md T4",
    },
    # ---------------------------------------------------------------- shared/lib, shared/test, README
    {"kind": "ADD", "source": "src/shared/lib/cssText.ts", "target": "src/lib/cssText.ts",
     "notes": "P7-6: pure function, imports nothing; 25 importers (9 components/ui); with cssText.test.ts"},
    {"kind": "ADD", "source": "src/shared/lib/osDateTime.ts", "target": "src/lib/osDateTime.ts",
     "notes": "P7-6: pure functions (OutSystems date text), imports nothing; 14 importers (platform/navigation too)"},
    {"kind": "ADD", "source": "src/shared/lib/OSLink.tsx", "origin": "OutSystems Link widget", "shape": "ui",
     "target": "src/components/ui/os/OSLink.tsx",
     "notes": "P7-6: next to OSBlock and OSList; imports @/platform/navigation (useOsNavigate): 1 W15 baseline row "
     "(rule 4), rule-4 and rule-5 +1 each in dependency-cruiser; 19 importers (14 components, 5 pages); rows.md T5; "
     + OWNER_OSLINK},
    {"kind": "ADD", "source": "src/shared/test", "target": "src/test",
     "notes": "P7-6: test and story helpers (PendingBlock, capturedVariants, loadedImages, mockApiSession, "
     "nativeLayout) next to the test setup; only tests and stories import them (218 files); the folder exists, no "
     "file collision (names kept)"},
    {"kind": "ADD", "source": "src/shared/README.md", "shape": "delete",
     "notes": "P7-6: describes src/shared/ only; deleted with the empty folder"},
    # ---------------------------------------------------------------- <package>/lib: pure static entities and structures
    {"kind": "ADD", "source": "src/shared/UBTConnectLibrary/lib/staticEntities.ts",
     "origin": "UBTConnectLibrary (static entities)", "target": "src/lib/ubtConnectLibrary/staticEntities.ts",
     "notes": "P7-6: constants, imports nothing; 194 importers (50 components/ui)"},
    {"kind": "ADD", "source": "src/shared/UBTConnectLibrary/lib/structures.ts",
     "origin": "UBTConnectLibrary (structures)", "target": "src/lib/ubtConnectLibrary/structures.ts",
     "notes": "P7-6: types, imports nothing; 77 importers (26 components/ui)"},
    {"kind": "ADD", "source": "src/shared/UBTConnect/lib/staticEntities.ts",
     "origin": "UBTConnect (static entities)", "target": "src/lib/ubtConnect/staticEntities.ts",
     "notes": "P7-6: constants, imports nothing; 97 importers"},
    {"kind": "ADD", "source": "src/shared/UBTConnect/lib/structures.ts",
     "origin": "UBTConnect (structures)", "target": "src/lib/ubtConnect/structures.ts",
     "notes": "P7-6: types; imports lib/ubtConnectLibrary and lib/geography structures only; 52 importers"},
    {"kind": "ADD", "source": "src/shared/UBTConnect_Utils/lib/staticEntities.ts",
     "origin": "UBTConnect_Utils (static entities)", "target": "src/lib/ubtConnectUtils/staticEntities.ts",
     "notes": "P7-6: constants, imports nothing; 65 importers"},
    {"kind": "ADD", "source": "src/shared/UBTConnect_Utils/lib/structures.ts",
     "origin": "UBTConnect_Utils (structures)", "target": "src/lib/ubtConnectUtils/structures.ts",
     "notes": "P7-6: types (schema.d.ts aliases); re-exports a type of @/api/locality: 1 rule-6 warning; 35 importers "
     "(12 components); rows.md T6; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/Connect2_LegacyShared/lib/staticEntities.ts",
     "origin": "Connect2_LegacyShared (static entities)", "target": "src/lib/legacyShared/staticEntities.ts",
     "notes": "P7-6: constants, imports nothing; 31 importers (legacy/os/bodyTheme too)"},
    {"kind": "ADD", "source": "src/shared/Connect2_LegacyShared/lib/structures.ts",
     "origin": "Connect2_LegacyShared (structures)", "target": "src/lib/legacyShared/structures.ts",
     "notes": "P7-6: types; re-exports types of @/api/country, @/api/locality, @/api/message: 3 rule-6 warnings; "
     "8 importers (3 components/assemble); rows.md T6; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/Connect2_OrbitMobile_MUI/lib/staticEntities.ts",
     "origin": "Connect2_OrbitMobile_MUI (static entities)", "target": "src/lib/orbit/staticEntities.ts",
     "notes": "P7-6: constants, imports nothing; 46 importers"},
    {"kind": "ADD", "source": "src/shared/Connect2_OrbitMobile_MUI/lib/structures.ts",
     "origin": "Connect2_OrbitMobile_MUI (structures)", "target": "src/lib/orbit/structures.ts",
     "notes": "P7-6: types; re-exports types of @/api/event: 1 rule-6 warning; 12 importers (6 components/orbit, "
     "platform/storage); rows.md T6; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/Connect2_Assemble_MUI/lib/staticEntities.ts",
     "origin": "Connect2_Assemble_MUI (static entities)", "target": "src/lib/assemble/staticEntities.ts",
     "notes": "P7-6: constants, imports nothing; 4 importers"},
    {"kind": "ADD", "source": "src/shared/Connect2_Assemble_MUI/lib/structures.ts",
     "origin": "Connect2_Assemble_MUI (structures)", "target": "src/lib/assemble/structures.ts",
     "notes": "P7-6: types; re-exports types of @/api/event: 1 rule-6 warning; 2 importers (components/assemble, "
     "lib/assemble/actions); rows.md T6; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/Connect_Geography_CS/lib/structures.ts",
     "origin": "Connect_Geography_CS (structures)", "target": "src/lib/geography/structures.ts",
     "notes": "P7-6: types; imports lib/ubtConnectLibrary structures only; 7 importers"},
    # ---------------------------------------------------------------- <package>/lib: module client actions
    {"kind": "ADD", "source": "src/shared/UBTConnectLibrary/lib/actions.ts",
     "origin": "UBTConnectLibrary (client actions)", "target": "src/lib/ubtConnectLibrary/actions.ts",
     "notes": "P7-6: style-class helpers, dates, bottom-bar and SVG scroll DOM code; imports components/ui/lib "
     "(GutterSize) and legacy/os/os-assets: 2 rule-6 warnings; 62 importers (26 components/ui, platform/bootstrap); "
     "with actions.test.ts; rows.md T1; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/UBTConnect/lib/actions.ts",
     "origin": "UBTConnect (client actions)", "target": "src/lib/ubtConnect/actions.ts",
     "notes": "P7-6: directory descriptors, skeletons, bookmark toggle, client variables; imports api, platform, "
     "legacy/os and components/ui/lib: 9 rule-6 warnings; 49 importers (16 components); with actions.test.ts; "
     "rows.md T1; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/UBTConnect/lib/unsupportedVersion.ts",
     "origin": "UBTConnect (client actions)", "target": "src/lib/ubtConnect/unsupportedVersion.ts",
     "notes": "P7-6: browser and system support check; imports platform/config (MOCKS_BUILT) and @/mocks/scenarioParams "
     "(a mock scenario read in app code): 2 rule-6 warnings, both in the T1 follow-up; 4 importers (components/version, "
     "pages/Login, platform/feedback/dialogs); with unsupportedVersion.test.ts; rows.md T1; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/UBTConnect_Utils/lib/actions.ts",
     "origin": "UBTConnect_Utils (client actions)", "target": "src/lib/ubtConnectUtils/actions.ts",
     "notes": "P7-6: flags, feedback messages, open link/app/file, signed image cache, policies; imports api, "
     "platform, legacy/os and components/ui/lib: 10 rule-6 warnings; 50 importers (13 components, 3 platform); with "
     "actions.test.ts; rows.md T1; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/UBTConnect_Utils/lib/openPolicy.test.ts",
     "target": "src/lib/ubtConnectUtils/openPolicy.test.ts",
     "notes": "P7-6: test of actions.ts openPolicy; moves with it"},
    {"kind": "ADD", "source": "src/shared/Connect2_LegacyShared/lib/actions.ts",
     "origin": "Connect2_LegacyShared (client actions)", "target": "src/lib/legacyShared/actions.ts",
     "notes": "P7-6: cacheable data reads (country, locality, member, message, image, bookmark caches), iOS meta tags, "
     "input counter, browser check; imports api, platform and legacy/os: 13 rule-6 warnings; 33 importers "
     "(9 components); with actions.test.ts; rows.md T1; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/Connect2_OrbitMobile_MUI/lib/actions.ts",
     "origin": "Connect2_OrbitMobile_MUI (client actions)", "target": "src/lib/orbit/actions.ts",
     "notes": "P7-6: Orbit date formats, skeleton counts, member card data, directory access, booklet rows; imports "
     "api and platform: 5 rule-6 warnings; 46 importers (9 components/orbit); with actions.test.ts; rows.md T1; "
     + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/Connect2_Assemble_MUI/lib/actions.ts",
     "origin": "Connect2_Assemble_MUI (client actions)", "target": "src/lib/assemble/actions.ts",
     "notes": "P7-6: Assemble date labels, locality reads, region access, bookmark toggle; imports api, platform and "
     "legacy/os: 6 rule-6 warnings; 11 importers (3 components/assemble); with actions.test.ts; rows.md T1; "
     + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/Connect2_Assemble_MUI/lib/toggleBookmarkItem.test.ts",
     "target": "src/lib/assemble/toggleBookmarkItem.test.ts",
     "notes": "P7-6: test of actions.ts toggleBookmarkItem; moves with it"},
    {"kind": "ADD", "source": "src/shared/UBTJavaScriptUtils/lib/actions.ts",
     "origin": "UBTJavaScriptUtils (client actions)", "target": "src/lib/jsUtils.ts",
     "notes": "P7-6: DOM and string helpers; the hook useScreenController_NavigateToPage imports @/platform/navigation: "
     "1 rule-6 warning; 21 importers (10 components, platform/session); with actions.test.ts -> jsUtils.test.ts; "
     "rows.md T1; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/NavigationHandler/lib/actions.ts",
     "origin": "NavigationHandler (client actions)", "target": "src/lib/navigationEvent.ts",
     "notes": "P7-6: prevent, check and resume a navigation event; imports nothing; 16 importers (components/ui/Dialog, "
     "components/contact, pages, tests); platform/navigation would give components rule-4 warnings; with "
     "actions.test.ts -> navigationEvent.test.ts"},
    {"kind": "ADD", "source": "src/shared/ReactiveHtmlSanitizer/lib/actions.ts",
     "origin": "ReactiveHtmlSanitizer (client actions)", "target": "src/lib/sanitizeHtml.ts",
     "notes": "P7-6: DOMPurify wrapper (plan v2 2.2 names sanitize in lib/); imports dompurify only; 1 importer "
     "components/ui/SanitizedHtml; with actions.test.ts -> sanitizeHtml.test.ts; rows.md T9"},
    {"kind": "ADD", "source": "src/shared/Leaflet/lib", "origin": "Leaflet (forge module: client actions, structures)",
     "target": "src/lib/leaflet",
     "notes": "P7-6: the 5 files keep their names (actions, json, leaflet, leafletGlobal, structures); actions.ts "
     "imports UserException from legacy/os: 1 rule-6 warning; 10 importers (components/directory/DirectoryMap, "
     "2 pages, lib/ubtConnect/actions); rows.md T1; " + OWNER_T1},
    {"kind": "ADD", "source": "src/shared/UBTConnect_EmbedFeed/lib/actions.ts",
     "origin": "UBTConnect_EmbedFeed (client actions)", "target": "src/components/feed/FeedCms/embedFeed.ts",
     "notes": "P7-6: two DOM queries of the feed iframe; imports nothing; 1 importer components/feed/FeedCms; rows.md T10"},
    {"kind": "ADD", "source": "src/shared/UBT_AppManager/lib/actions.ts",
     "origin": "UBT_AppManager (client actions)", "target": "src/platform/session/pinRules.ts",
     "notes": "P7-6: PIN_ValidateRules (pure); 1 importer platform/session/usePinCodeRegister; with actions.test.ts -> "
     "pinRules.test.ts; rows.md T11"},
    {"kind": "ADD", "source": "src/shared/FileTransferPlugin/lib/handleDownload.ts",
     "origin": "FileTransferPlugin (client actions)", "target": "src/platform/device/handleDownload.ts",
     "notes": "P7-6: file download plugin hook (plan v2 2.2: platform/device holds the file plugins); imports "
     "platform/log; 3 importers (pages MilestoneDetail, ViewDocuments)"},
    # ---------------------------------------------------------------- MSW mock modules (src/mocks/modules/<Module>/)
    {"kind": "ADD", "source": "src/shared/Connect2_MyBookmarks_MUI/mocks.ts", "shape": "mock",
     "origin": "Connect2_MyBookmarks_MUI (mock handlers)", "target": "src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts",
     "notes": "P7-6: the mock user's legacy bookmarks and 4 handlers; 8 importers (pages mocks, platform/bootstrap/mocks, "
     "tests); with mocks.test.ts; rows.md T7"},
    {"kind": "ADD", "source": "src/shared/Connect2_Assemble_MUI/lib/mocks.ts", "shape": "mock",
     "origin": "Connect2_Assemble_MUI (mock handlers)", "target": "src/mocks/modules/Connect2_Assemble_MUI/mocks.ts",
     "notes": "P7-6: 2 handlers (AddBookmark, DeleteBookmarkByBookmarkId); no importer (MSW glob); rows.md T7"},
    {"kind": "ADD", "source": "src/shared/Connect2_LegacyShared/lib/mocks.ts", "shape": "mock",
     "origin": "Connect2_LegacyShared (mock handlers)", "target": "src/mocks/modules/Connect2_LegacyShared/mocks.ts",
     "notes": "P7-6: 6 handlers of the Assemble filters world; 2 importers (api/locality test, a story); rows.md T7"},
    {"kind": "ADD", "source": "src/shared/Connect2_LegacyShared/lib/mockDefaults.ts", "shape": "mock",
     "origin": "Connect2_LegacyShared (mock defaults)",
     "target": "src/mocks/modules/Connect2_LegacyShared/mockDefaults.ts",
     "notes": "P7-6: wire defaults for mocks.ts and 4 tests; schema.d.ts types only"},
    {"kind": "ADD", "source": "src/shared/Connect2_OrbitMobile_MUI/lib/mocks.ts", "shape": "mock",
     "origin": "Connect2_OrbitMobile_MUI (mock handlers)", "target": "src/mocks/modules/Connect2_OrbitMobile_MUI/mocks.ts",
     "notes": "P7-6: 3 handlers (directory access, booklet rows); 3 test importers; rows.md T7"},
    {"kind": "ADD", "source": "src/shared/UBTConnect_Utils/CacheControl_AllCountries/mocks.ts", "shape": "mock",
     "origin": "UBTConnect_Utils.CacheControl.CacheControl_AllCountries (mock handler)",
     "target": "src/mocks/modules/UBTConnect_Utils/CacheControl_AllCountries/mocks.ts",
     "notes": "P7-6: recorded GetCacheInfo handler; out of the block folder because legacy/os is not in the MSW glob; "
     "rows.md T7"},
    {"kind": "ADD", "source": "src/shared/UBTConnect_Utils/CacheControl_AllLocalities/mocks.ts", "shape": "mock",
     "origin": "UBTConnect_Utils.CacheControl.CacheControl_AllLocalities (mock handler)",
     "target": "src/mocks/modules/UBTConnect_Utils/CacheControl_AllLocalities/mocks.ts",
     "notes": "P7-6: recorded GetCacheInfo handler; out of the block folder because legacy/os is not in the MSW glob; "
     "rows.md T7"},
    {"kind": "ADD", "source": "src/shared/UBTConnect_Utils/CacheControl_Policies/mocks.ts", "shape": "mock",
     "origin": "UBTConnect_Utils.CacheControl.CacheControl_Policies (mock handler)",
     "target": "src/mocks/modules/UBTConnect_Utils/CacheControl_Policies/mocks.ts",
     "notes": "P7-6: recorded GetCacheInfo handler, with mocks.test.ts; out of the block folder because legacy/os is not "
     "in the MSW glob; rows.md T7"},
]

MOCK_GLOBS = ("src/mocks/modules/", "src/components/", "src/platform/")


def read_lines() -> list[str]:
    return MAP.read_text().splitlines()


def parse(line: str) -> dict[str, str]:
    return dict(zip(COLUMNS, next(csv.reader([line]))))


def render(row: dict[str, str]) -> str:
    out = io.StringIO()
    csv.writer(out, lineterminator="", quoting=csv.QUOTE_MINIMAL).writerow([row.get(c, "") for c in COLUMNS])
    return out.getvalue()


def apply() -> int:
    lines = read_lines()
    if lines[0] != ",".join(COLUMNS):
        print("unexpected header", file=sys.stderr)
        return 1
    for spec in ROWS:
        values = {k: v for k, v in spec.items() if k != "kind"}
        if spec["kind"] == "UPDATE":
            idx = next((i for i, ln in enumerate(lines[1:], 1) if parse(ln)["source"] == spec["source"]), None)
            if idx is None:
                print(f"UPDATE: no row {spec['source']}", file=sys.stderr)
                return 1
            row = parse(lines[idx])
            row.update(values)
            lines[idx] = render(row)
        else:
            row = {c: "" for c in COLUMNS}
            row.update(values)
            row["phase"] = PHASE
            idx = next(
                (i for i, ln in enumerate(lines[1:], 1)
                 if parse(ln)["source"] == spec["source"] and parse(ln)["phase"] == PHASE),
                None,
            )
            if idx is None:
                lines.append(render(row))
            else:
                lines[idx] = render(row)
    MAP.write_text("\n".join(lines) + "\n")
    print(f"move-map.csv: {len(ROWS)} rows applied")
    return 0


def shared_files() -> list[str]:
    out = subprocess.run(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard", "app/src/shared"],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout
    return sorted({p[len("app/"):] for p in out.splitlines() if (ROOT / p).is_file()})


def p76_rows() -> list[dict[str, str]]:
    return [parse(ln) for ln in read_lines()[1:] if parse(ln)["phase"] == PHASE]


def target_of(path: str, rows: list[dict[str, str]]) -> tuple[str | None, dict[str, str] | None]:
    """New path of one file: an exact file row (or a companion test/story of it) wins over the deepest folder row."""
    for r in rows:
        src, tgt = r["source"], r["target"]
        if path == src:
            return (None if r["shape"] == "delete" else tgt), r
        stem, ext = posixpath.splitext(src)
        if ext and posixpath.dirname(path) == posixpath.dirname(src):
            base = posixpath.basename(path)
            sb = posixpath.basename(stem)
            for kind in (".test", ".stories"):
                if base.startswith(sb + kind + "."):
                    tstem = posixpath.splitext(tgt)[0]
                    return tstem + base[len(sb):], r
    best = None
    for r in rows:
        src = r["source"]
        if path.startswith(src + "/") and (best is None or len(src) > len(best["source"])):
            best = r
    if best is None:
        return None, None
    if best["shape"] == "delete":
        return None, best
    rel = path[len(best["source"]) + 1:]
    tgt = best["target"]
    if posixpath.splitext(tgt)[1]:  # block row: target names the main file; rename the block stem
        tdir, tstem = posixpath.dirname(tgt), posixpath.splitext(posixpath.basename(tgt))[0]
        old = posixpath.basename(best["source"])
        name = posixpath.basename(rel)
        if "/" not in rel and name.startswith(old + "."):
            rel = tstem + name[len(old):]
        return posixpath.join(tdir, rel), best
    return posixpath.join(tgt, rel), best


def check(print_files: bool) -> int:
    rows = p76_rows()
    bad = 0
    seen: dict[str, str] = {}
    for f in shared_files():
        new, row = target_of(f, rows)
        if row is None:
            print(f"UNCOVERED {f}")
            bad += 1
            continue
        if new is None:
            if print_files:
                continue
            seen[f] = "delete"
            continue
        if new in seen.values():
            print(f"COLLISION {f} -> {new}")
            bad += 1
        if (ROOT / "app" / new).exists():
            print(f"EXISTS {new}")
            bad += 1
        if posixpath.basename(new) == "mocks.ts" and not new.startswith(MOCK_GLOBS):
            print(f"MOCK OUT OF THE MSW GLOB {new}")
            bad += 1
        seen[f] = new
        if print_files:
            print(f"{f},{new}")
    if not print_files:
        deletes = sum(1 for v in seen.values() if v == "delete")
        print(f"files: {len(seen)} covered ({len(seen) - deletes} moved, {deletes} deleted), problems: {bad}")
    return 1 if bad else 0


if __name__ == "__main__":
    if "--check" in sys.argv:
        sys.exit(check(False))
    if "--files" in sys.argv:
        sys.exit(check(True))
    sys.exit(apply())
