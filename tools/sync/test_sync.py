"""Unit tests of sync.py in a temporary git repository."""
import contextlib
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, os.path.dirname(__file__))
import sync  # noqa: E402

TRIAGE = """# triage
sweep: x
| Route | Class | States with diffs | Kinds | Changed TST files | Shared paths | Dev model | Owner | Note |
|---|---|---|---|---|---|---|---|---|
| `R1` | A | default:3; offline:1 | text, style | `M.F.A.mvc.js` | - | opus | - | page only |
| `R2` | A | default:2 | structure | `M.F.A.mvc.js`, `M.F.S.mvc.js` | `app/src/components/S/**` | opus | - | shared block |
| `R3` | C | default:1 | pixel | - | - | sonnet | - | artefact |
"""


def run(*argv) -> tuple[int, str]:
    out = io.StringIO()
    with contextlib.redirect_stdout(out), contextlib.redirect_stderr(out):
        code = sync.main(list(argv))
    return code, out.getvalue()


class Repo(unittest.TestCase):
    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp())
        self.old = os.getcwd()
        os.chdir(self.tmp)
        subprocess.run(["git", "init", "-q", "-b", "sync/tst-2026-11"], check=True)
        subprocess.run(["git", "config", "user.email", "t@t"], check=True)
        subprocess.run(["git", "config", "user.name", "t"], check=True)
        (self.tmp / "migration/sync").mkdir(parents=True)
        for r in ("R1", "R2", "R3"):
            d = self.tmp / "migration/screens" / r
            (d / "analysis").mkdir(parents=True)
            (d / "finished.json").write_text("{}")
            (d / "analysis/manifest.json").write_text(json.dumps({"raw": {"M.F.A.mvc.js": "x", **({"M.F.S.mvc.js": "y"} if r != "R3" else {})}}))
        (self.tmp / "migration/sync/triage.md").write_text(TRIAGE)
        (self.tmp / "migration/AGENTS.md").write_text("## Rules\n\n1. **one.**\n3. **Never guess.** text\n5. **Markup.** as captured\n\n## Next\n")
        (self.tmp / ".claude/skills/tst-sync/references").mkdir(parents=True)
        (self.tmp / ".claude/skills/tst-sync/references/handoff.md").write_text("## Result\nstatus: pass\n")
        (self.tmp / "tools/pipeline").mkdir(parents=True)
        (self.tmp / "tools/pipeline/ledger.py").write_text("import sys; sys.exit(0)\n")
        subprocess.run(["git", "add", "-A"], check=True)
        subprocess.run(["git", "commit", "-qm", "init"], check=True)
        self.assertEqual(run("import", "--triage", "migration/sync/triage.md", "--capture-base", "HEAD")[0], 0)

    def tearDown(self):
        os.chdir(self.old)
        shutil.rmtree(self.tmp)

    def test_import_and_users(self):
        items = json.loads((self.tmp / "migration/sync/items.json").read_text())["items"]
        self.assertEqual([i["id"] for i in items], ["R1", "R2", "R3"])
        self.assertEqual(items[0]["states"], {"default": 3, "offline": 1})
        self.assertEqual(items[1]["shared"], ["app/src/components/S/**"])
        code, out = run("users", "M.F.S.mvc.js")
        self.assertEqual(out.split(), ["R1", "R2"])

    def test_begin_required_and_class_c_needs_answer(self):
        self.assertEqual(run("start", "R1")[0], 1)
        self.assertEqual(run("begin", "--by", "me", "--text", "x")[0], 1)
        self.assertEqual(run("begin", "--by", "user", "--text", "start")[0], 0)
        code, out = run("next")
        self.assertEqual(out.split(), ["R1", "R2"])  # R3 (class C) waits for an answer
        run("ask", "R3", "--text", "exempt?")
        self.assertEqual(run("answer", "Q1", "--by", "user", "--text", "yes")[0], 0)
        self.assertIn("R3", run("next")[1].split())

    def test_shared_item_runs_alone(self):
        run("begin", "--by", "user", "--text", "start")
        self.assertEqual(run("start", "R1")[0], 0)
        code, out = run("start", "R2")
        self.assertEqual(code, 1)
        self.assertIn("shared", out)
        code, out = run("scope", "R1", "--dry-run")
        self.assertIn("--allow migration/sync/**", out)

    def test_stage_order_and_confirm(self):
        run("begin", "--by", "user", "--text", "start")
        run("start", "R1")
        self.assertEqual(run("stage", "R1", "dev")[0], 1)  # brief first
        code, out = run("brief", "R1")
        self.assertEqual(code, 0, out)
        brief = (self.tmp / "migration/sync/handoffs/R1/brief.md").read_text()
        self.assertIn("3. **Never guess.**", brief)
        self.assertNotIn("1. **one.**", brief)
        self.assertIn("app/src/pages/R1/**", brief)
        self.assertEqual(run("stage", "R1", "dev")[0], 0)
        self.assertEqual(run("stage", "R1", "test")[0], 1)  # dev.md missing
        h = self.tmp / "migration/sync/handoffs/R1"
        (h / "dev.md").write_text("## Result\nstatus: pass\n")
        self.assertEqual(run("stage", "R1", "test")[0], 0)
        self.assertEqual(run("fail", "R1")[0], 0)
        self.assertEqual(run("stage", "R1", "test")[0], 0)
        (h / "test.md").write_text("## Result\nstatus: pass\n")
        (h / "docs.md").write_text("## Result\nstatus: pass\n")
        for st in ("docs", "spec", "review"):
            self.assertEqual(run("stage", "R1", st)[0], 0, st)
        self.assertEqual(run("stage", "R1", "restamp")[0], 1)  # no confirm yet
        self.assertEqual(run("confirm", "R1", "--by", "user", "--text", "ok")[0], 1)
        self.assertEqual(run("confirm", "R1", "--by", "user", "--text", "confirm, looks right")[0], 0)
        self.assertEqual(run("stage", "R1", "restamp")[0], 0)
        self.assertEqual(run("stage", "R1", "commit")[0], 0)
        sha = subprocess.run(["git", "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
        self.assertEqual(run("done", "R1", "--commit", sha, "--gate", "parity 3/0")[0], 0)
        st = json.loads((self.tmp / "migration/sync/state.json").read_text())
        self.assertEqual(st["items"]["R1"]["status"], "done")
        self.assertEqual(st["items"]["R1"]["loops"], 1)
        self.assertNotIn("R1", st["active"])

    def test_verify_flags_outside_changes(self):
        run("begin", "--by", "user", "--text", "start")
        run("start", "R1")
        (self.tmp / "app/src/pages/R1").mkdir(parents=True)
        (self.tmp / "app/src/pages/R1/x.ts").write_text("1")
        self.assertEqual(run("verify")[0], 0)
        (self.tmp / "app/src/pages/R2").mkdir(parents=True)
        (self.tmp / "app/src/pages/R2/x.ts").write_text("1")
        code, out = run("verify")
        self.assertEqual(code, 1)
        self.assertIn("app/src/pages/R2/x.ts", out)


if __name__ == "__main__":
    unittest.main()
