#!/usr/bin/env python3
"""
Tests of the route pipeline paths after the page-template refactor (user decisions I10-1 a and I10-5 a, 2026-10-29).
Standard library only; every test works in its own temp dir.

  python3 -m unittest discover -s .claude/skills/outsystems-screen-spec/scripts -p 'test_route_paths.py' -v
"""
import json, os, shutil, subprocess, sys, tempfile, unittest, warnings

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import route  # noqa: E402
import scope_guard  # noqa: E402
from consistency_check import page_root, required_files  # noqa: E402

BOARD = """# Board: Demo

| Screen | Route | Wave | Cx | Tier | Decision | Reason | Status | Owner |
|---|---|---|---|---|---|---|---|---|
| Building | `/Demo/Building` |  |  |  | build | r | building |  |
| Reviewing | `/Demo/Reviewing` |  |  |  | build | r | review |  |
| Fresh | `/Demo/Fresh` |  |  |  | build | r | todo |  |
| Finished | `/Demo/Finished` |  |  |  | build | r | built |  |
| Skipped | `/Demo/Skipped` |  |  |  | skip | r | - |  |
"""


def write(path, text=""):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


class FakeCtx:
    """The parts of route.Ctx the path functions use, without a board."""

    def __init__(self, root, rows=None):
        self.app = os.path.join(root, "app")
        self.mig = os.path.join(root, "migration")
        self.rows = rows or {}

    def rdir(self, s):
        return os.path.join(self.mig, "screens", s)

    def row(self, s):
        return self.rows[s]

    def set_status(self, s, st):
        self.rows.setdefault(s, {})["Status"] = st


class TempCase(unittest.TestCase):
    def setUp(self):
        warnings.simplefilter("ignore", ResourceWarning)   # route.py/board.py open files without `with` (old code)
        self.root = tempfile.mkdtemp(prefix="route-paths-")
        self.c = FakeCtx(self.root, {"Demo": {"Status": "building", "Decision": "build"}})

    def tearDown(self):
        shutil.rmtree(self.root, ignore_errors=True)

    def app(self, rel, text="x"):
        write(os.path.join(self.c.app, rel), text)

    def mig(self, rel, text="x"):
        write(os.path.join(self.c.mig, rel), text)


class ReadyFileGate(TempCase):
    def test_page_file_required(self):
        self.app("src/screens/Demo/index.tsx")   # the old layout does not count
        probs = route.page_problems(self.c, "Demo")
        self.assertEqual(len(probs), 1)
        self.assertIn("src/pages/Demo/DemoPage.tsx missing", probs[0])
        self.app("src/pages/Demo/DemoPage.tsx", "export default function DemoPage() { return null; }")
        self.assertEqual(route.page_problems(self.c, "Demo"), [])


class MockCoverage(TempCase):
    def calls(self, *pairs):
        self.mig("screens/Demo/analysis/calls.json", json.dumps(
            {"calls": [{"module": m, "action": a, "scope": "this screen", "phase": "load"} for m, a in pairs]}))

    def test_handlers_in_pages_containers_mocks_and_platform(self):
        self.calls(("ModA", "ActionOne"), ("ModB", "DataActionTwo"), ("ModC", "ActionThree"), ("ModD", "ActionStart"))
        self.app("src/pages/Demo/mocks.ts", "osAction('ModA', 'ActionOne', () => ({}))")
        self.app("src/containers/Card/mocks.ts", "dataAction('ModB', 'Card/DataActionTwo', () => ({}))")
        self.app("src/mocks/modules/ModC/handlers.ts", 'osAction("ModC", "ActionThree", () => ({}))')
        self.app("src/platform/bootstrap/mocks.ts", "osAction('ModD', 'ActionStart', () => ({}))")
        self.assertEqual(route.mock_coverage_problems(self.c, "Demo"), [])

    def test_missing_handler_and_tests_do_not_count(self):
        self.calls(("ModA", "ActionOne"), ("ModE", "ActionFour"))
        self.app("src/pages/Demo/mocks.ts", "osAction('ModA', 'ActionOne', () => ({}))")
        self.app("src/mocks/handlers.test.ts", "expect(call('ModE', 'ActionFour')).toBeTruthy()")
        self.app("src/pages/Demo/Demo.test.tsx", "server.use(osAction('ModE', 'ActionFour'))")   # not a mocks.ts
        probs = route.mock_coverage_problems(self.c, "Demo")
        self.assertEqual(len(probs), 1)
        self.assertIn("ModE/ActionFour", probs[0])

    def test_sources_list(self):
        self.app("src/pages/Demo/mocks.ts")
        self.app("src/containers/Card/mocks.ts")
        self.app("src/mocks/fictional/people.ts")
        self.app("src/mocks/fixtures/ModA/ActionOne/0.json", "{}")
        self.app("src/mocks/store.test.ts")
        self.app("src/pages/Demo/mockData.ts")
        rel = sorted(os.path.relpath(p, self.c.app) for p in route.mock_sources(self.c))
        self.assertEqual(rel, ["src/containers/Card/mocks.ts", "src/mocks/fictional/people.ts", "src/pages/Demo/mocks.ts"])


class ParityFingerprint(TempCase):
    def setUp(self):
        super().setUp()
        self.app("src/pages/Demo/DemoPage.tsx", "page")
        self.app("src/api/notification/repository.ts", "api v1")
        self.app("src/platform/flags/useFlag.ts", "platform v1")
        self.app("src/pages/Other/OtherPage.tsx", "other v1")
        self.mig("screens/Demo/analysis/dom/default.raw.html", "<div></div>")

    def fp(self):
        return route.parity_fingerprint(self.c, "Demo", "default")

    def test_shared_inputs_change_the_fingerprint(self):
        base = self.fp()
        self.app("src/api/notification/repository.ts", "api v2")
        after_api = self.fp()
        self.assertNotEqual(base, after_api)
        self.app("src/platform/flags/useFlag.ts", "platform v2")
        after_platform = self.fp()
        self.assertNotEqual(after_api, after_platform)
        for rel in ("src/containers/X/X.tsx", "src/legacy/os/x.ts", "src/styles/x.css", "src/vendor/x.js",
                    "src/components/ui/X.tsx", "src/lib/x.ts", "src/mocks/x.ts", "src/app/routes.ts"):
            prev = self.fp()
            self.app(rel, "new")
            self.assertNotEqual(prev, self.fp(), rel)

    def test_own_page_counts_other_page_does_not(self):
        base = self.fp()
        self.app("src/pages/Other/OtherPage.tsx", "other v2")
        self.assertEqual(base, self.fp())
        self.app("src/pages/Demo/DemoPage.tsx", "page v2")
        self.assertNotEqual(base, self.fp())

    def test_cache_gives_the_same_value(self):
        self.assertEqual(self.fp(), route.parity_fingerprint(self.c, "Demo", "default", {}))


class ResetAndCheckpoint(TempCase):
    def setUp(self):
        super().setUp()
        self.app("src/pages/Demo/DemoPage.tsx", "page")
        self.app("src/pages/Demo/hooks/useDemo.ts", "hook")
        self.app("src/pages/Other/OtherPage.tsx", "other")
        self.app("src/api/demo/repository.ts", "api")
        self.app("src/screens/Demo/index.tsx", "old layout")
        self.mig("screens/Demo/run.json", "{}")
        self.mig("screens/Demo/parity/default.json", "{}")
        self.mig("screens/Demo/questions.json", "[]")

    def test_reset_removes_only_the_page(self):
        cwd = os.getcwd()
        os.chdir(self.root)
        try:
            route.do_reset(self.c, "Demo")
        finally:
            os.chdir(cwd)
        self.assertFalse(os.path.exists(os.path.join(self.c.app, "src/pages/Demo")))
        for kept in ("src/pages/Other/OtherPage.tsx", "src/api/demo/repository.ts", "src/screens/Demo/index.tsx"):
            self.assertTrue(os.path.exists(os.path.join(self.c.app, kept)), kept)
        self.assertFalse(os.path.exists(os.path.join(self.c.mig, "screens/Demo/run.json")))
        self.assertFalse(os.path.exists(os.path.join(self.c.mig, "screens/Demo/parity")))
        self.assertTrue(os.path.exists(os.path.join(self.c.mig, "screens/Demo/questions.json")))
        self.assertEqual(self.c.rows["Demo"]["Status"], "todo")

    def test_checkpoint_and_restore_use_the_page(self):
        route.make_checkpoint(self.c, "Demo", 1)
        self.assertTrue(os.path.exists(os.path.join(route.cp_dir(self.c, "Demo"), "code", "hooks", "useDemo.ts")))
        self.app("src/pages/Demo/DemoPage.tsx", "broken edit")
        self.app("src/pages/Demo/extra.ts", "new file")
        self.assertTrue(route.restore_checkpoint(self.c, "Demo"))
        with open(os.path.join(self.c.app, "src/pages/Demo/DemoPage.tsx"), encoding="utf-8") as f:
            self.assertEqual(f.read(), "page")
        self.assertFalse(os.path.exists(os.path.join(self.c.app, "src/pages/Demo/extra.ts")))


class FinishedState(TempCase):
    def setUp(self):
        super().setUp()
        self.c.rows["Demo"]["Status"] = "built"
        self.app("src/pages/Demo/DemoPage.tsx", "page")

    def finished(self, files):
        self.mig("screens/Demo/finished.json", json.dumps({"finishedAt": "t", "files": files}))

    def test_old_layout_record_keeps_finished(self):
        self.finished({"src/screens/Demo/index.tsx": "abc"})
        self.assertEqual(route.finished_state(self.c, "Demo"), "finished")

    def test_new_layout_record_is_compared(self):
        self.finished(route.fingerprint(self.c, "Demo"))
        self.assertEqual(route.finished_state(self.c, "Demo"), "finished")
        self.app("src/pages/Demo/DemoPage.tsx", "changed")
        self.assertEqual(route.finished_state(self.c, "Demo"), "modified")


class ScopeGuardAllowList(TempCase):
    def test_allow_list(self):
        self.mig("board.md", BOARD)
        active = scope_guard.active_routes(self.c.mig)
        self.assertEqual(sorted(active), ["Building", "Reviewing"])
        pats = scope_guard.allowed_patterns("Demo", "app", "migration", active)
        allowed = ["app/src/pages/Demo/DemoPage.tsx", "app/src/pages/Demo/hooks/useDemo.ts", "migration/screens/Demo/run.json",
                   "app/src/api/notification/repository.ts", "app/src/components/ui/X/X.tsx", "app/src/containers/C/mocks.ts",
                   "app/src/mocks/fictional/x.ts", "app/src/app/routes.generated.ts", "app/src/app/routes.ts",
                   "migration/change-requests/CR-Demo-1.md", "migration/board.md", "migration/metrics/ledger.csv",
                   "migration/clarify/builds/x.md", "app/src/pages/Building/BuildingPage.tsx",
                   "migration/screens/Reviewing/route-spec.md", "migration/knowledge/runtime-sources.md",
                   "migration/runtime-sources/X.controller.js", "migration/survey/screens.json",
                   "migration/screens/_capture-summary.json"]
        flagged = ["app/src/pages/Finished/FinishedPage.tsx", "app/src/pages/Fresh/FreshPage.tsx",
                   "migration/screens/Finished/notes.md", "app/src/platform/flags/useFlag.ts", "app/src/legacy/os/x.ts",
                   "app/src/styles/review.css", "app/src/lib/os-wire.ts", "app/src/app/router.tsx",
                   "app/src/app/routes/extra.ts", ".claude/skills/outsystems-screen-spec/scripts/route.py",
                   "app/public/UBTConnect/css/x.css", "migration/stack.json"]
        for p in allowed:
            self.assertTrue(scope_guard.matches(p, pats), p)
        for p in flagged:
            self.assertFalse(scope_guard.matches(p, pats), p)

    def test_glob_semantics(self):
        self.assertTrue(scope_guard.matches("a/b/c/d.ts", ["a/**"]))
        self.assertFalse(scope_guard.matches("a/b/c.ts", ["a/*.ts"]))
        self.assertTrue(scope_guard.matches("a/c.ts", ["a/*.ts"]))
        self.assertFalse(scope_guard.matches("a/pages/DemoX/x.ts", ["a/pages/Demo/**"]))


class ScopeGuardStartCommit(TempCase):
    """scope_guard.py diffs from run.json startCommit; without it, from --base."""

    def git(self, *args):
        return subprocess.run(["git", "-c", "user.name=test", "-c", "user.email=test@example.invalid",
                               "-c", "commit.gpgsign=false", *args], cwd=self.root, capture_output=True, text=True,
                              check=True).stdout.strip()

    def guard(self, *extra):
        return subprocess.run([sys.executable, os.path.join(HERE, "scope_guard.py"), "--screen", "Demo", *extra],
                              cwd=self.root, capture_output=True, text=True)

    def setUp(self):
        super().setUp()
        if not shutil.which("git"):
            self.skipTest("git not installed")
        self.git("init", "-q")
        self.app("README.md", "base")
        self.git("add", "-A")
        self.git("commit", "-q", "-m", "A")
        self.a = self.git("rev-parse", "HEAD")
        self.app("src/platform/x.ts", "outside the scope")
        self.git("add", "-A")
        self.git("commit", "-q", "-m", "B")
        self.b = self.git("rev-parse", "HEAD")
        self.app("src/pages/Demo/DemoPage.tsx", "work in progress (untracked)")

    def run_json(self, start=None):
        self.mig("screens/Demo/run.json", json.dumps({"runId": "t", **({"startCommit": start} if start else {})}))
        self.git("add", "-A")
        self.git("commit", "-q", "-m", "run.json")
        self.app("src/pages/Demo/DemoPage.tsx", "work in progress (untracked)")

    def test_start_commit_after_the_outside_change_passes(self):
        self.run_json(self.b)
        r = self.guard("--base", self.a)   # --base is ignored when startCommit is set
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn("startCommit", r.stdout)

    def test_start_commit_before_the_outside_change_fails(self):
        self.run_json(self.a)
        r = self.guard()
        self.assertEqual(r.returncode, 1, r.stdout)
        self.assertIn("app/src/platform/x.ts", r.stdout)

    def test_fallback_to_base(self):
        self.run_json(None)
        self.assertEqual(self.guard("--base", self.a).returncode, 1)
        self.assertEqual(self.guard("--base", self.b).returncode, 0)


class RequiredFilesPlaceholder(unittest.TestCase):
    def test_screen_placeholder(self):
        self.assertEqual(required_files({"requiredFiles": ["{screen}Page.tsx", "inputs.ts"]}, "Notes"),
                         ["NotesPage.tsx", "inputs.ts"])
        self.assertEqual(required_files({}, "Notes"), [])
        self.assertEqual(page_root("app", "Notes"), os.path.join("app", "src", "pages", "Notes"))

    def test_project_stack_rule(self):
        stack = os.path.join(HERE, "..", "..", "..", "..", "migration", "stack.json")
        if not os.path.exists(stack):
            self.skipTest("no project stack.json")
        with open(stack, encoding="utf-8") as f:
            rules = json.load(f)["rules"]
        self.assertEqual(rules["requiredFiles"], ["{screen}Page.tsx"])
        self.assertNotIn("requiredIfCalls", rules)
        self.assertNotIn("allowedImportRoots", rules)
        self.assertTrue(any(f["id"] == "NO-RAW-FETCH" for f in rules["forbidden"]))


class ForbiddenRules(TempCase):
    """I10-9 (a), user 2026-10-29: tests and stories are skipped; flow.fetch( is not a raw fetch."""

    def test_flow_fetch_and_tests(self):
        import re as _re
        stack = os.path.join(HERE, "..", "..", "..", "..", "migration", "stack.json")
        if not os.path.exists(stack):
            self.skipTest("no project stack.json")
        with open(stack, encoding="utf-8") as f:
            rx = _re.compile(next(r["regex"] for r in json.load(f)["rules"]["forbidden"] if r["id"] == "NO-RAW-FETCH"))
        self.assertIsNone(rx.search("const r = await flow.fetch(() => fetchThing());"))
        self.assertIsNotNone(rx.search("const r = await fetch('/x');"))
        self.assertIsNotNone(rx.search("window.fetch ? 1 : fetch(url)"))
        self.assertIsNone(rx.search("refetch(options)"))

    def test_test_files_skipped(self):
        import consistency_check as cc
        page = os.path.join(self.c.app, "src", "pages", "Demo")
        write(os.path.join(page, "DemoPage.tsx"), "export default function DemoPage() { return null; }\n")
        write(os.path.join(page, "Demo.test.tsx"), "sessionStorage.clear();\nconsole.log('x');\n")
        write(os.path.join(page, "Demo.stories.tsx"), "localStorage.setItem('a', 'b');\n")
        write(os.path.join(page, "hooks", "useDemo.ts"), "localStorage.getItem('a');\n")
        stack = os.path.join(HERE, "..", "..", "..", "..", "migration", "stack.json")
        if not os.path.exists(stack):
            self.skipTest("no project stack.json")
        os.makedirs(self.c.mig, exist_ok=True)
        shutil.copy(stack, os.path.join(self.c.mig, "stack.json"))
        probs = [p for p in cc.check("Demo", self.c.app, self.c.mig) if p.startswith("[NO-")]
        self.assertEqual(len(probs), 1, probs)
        self.assertIn("hooks/useDemo.ts", probs[0])


if __name__ == "__main__":
    unittest.main()
