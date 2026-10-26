#!/usr/bin/env python3
"""Unit tests of rf.py and gen_steps.py. Run from the project root:

  python3 -m unittest discover -s .claude/skills/refactor-master/scripts -p 'test_*.py' -v

Each test runs in a temporary git repository with a copy of the real plan and a fresh step catalog.
"""
from __future__ import annotations

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

HERE = Path(__file__).resolve().parent
PROJECT = HERE.parents[3]
sys.path.insert(0, str(HERE))
import gen_steps  # noqa: E402
import rf  # noqa: E402

GIT_ENV = {**os.environ, "GIT_AUTHOR_NAME": "t", "GIT_AUTHOR_EMAIL": "t@t", "GIT_COMMITTER_NAME": "t",
           "GIT_COMMITTER_EMAIL": "t@t"}


def sh(cwd: Path, *args: str) -> str:
    return subprocess.run(args, cwd=cwd, env=GIT_ENV, check=True, capture_output=True, text=True).stdout


class Repo(unittest.TestCase):
    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp())
        self.old = Path.cwd()
        plan = self.tmp / "app/docs/architecture/refactor-plan-v2.md"
        plan.parent.mkdir(parents=True)
        shutil.copy(PROJECT / gen_steps.PLAN, plan)
        tpl = self.tmp / rf.HANDOFF_TEMPLATE
        tpl.parent.mkdir(parents=True)
        shutil.copy(PROJECT / rf.HANDOFF_TEMPLATE, tpl)
        (self.tmp / "app/src").mkdir(parents=True)
        (self.tmp / "app/src/a.ts").write_text("import { b } from './b';\nexport const a = b + 1;\n")
        (self.tmp / "app/src/b.ts").write_text("export const b = 1;\n")
        os.chdir(self.tmp)
        with contextlib.redirect_stdout(io.StringIO()):
            gen_steps.main(["--out", "migration/refactor/steps.json"])
        sh(self.tmp, "git", "init", "-q", "-b", "refactor/architecture")
        sh(self.tmp, "git", "add", "-A")
        sh(self.tmp, "git", "commit", "-q", "-m", "init")

    def tearDown(self):
        os.chdir(self.old)
        shutil.rmtree(self.tmp)

    def rf(self, *args: str) -> tuple[int, str]:
        out, err = io.StringIO(), io.StringIO()
        with contextlib.redirect_stdout(out), contextlib.redirect_stderr(err):
            code = rf.main(list(args))
        return code, out.getvalue() + err.getvalue()

    def ok(self, *args: str) -> str:
        code, out = self.rf(*args)
        self.assertEqual(code, 0, out)
        return out

    def fails(self, *args: str) -> str:
        code, out = self.rf(*args)
        self.assertNotEqual(code, 0, out)
        return out

    def state(self) -> dict:
        return json.loads((self.tmp / "migration/refactor/state.json").read_text())

    def commit(self, msg: str) -> str:
        sh(self.tmp, "git", "add", "-A")
        sh(self.tmp, "git", "commit", "-q", "-m", msg)
        return sh(self.tmp, "git", "rev-parse", "--short", "HEAD").strip()

    def write(self, rel: str, text: str) -> None:
        p = self.tmp / rel
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(text)

    def run_to_commit(self, step: str) -> None:
        """Take the active step from brief to commit with a passing test."""
        self.ok("brief", step)
        self.ok("stage", step, "dev")
        self.ok("stage", step, "test")
        self.write(f"migration/refactor/handoffs/{step}/test.md", "## Result\nstatus: pass\n")
        self.ok("stage", step, "docs")
        self.ok("stage", step, "commit")

    def finish(self, step: str) -> str:
        self.ok("start", step)
        self.run_to_commit(step)
        sha = self.commit(f"refactor({step}): x")
        self.ok("done", step, "--commit", sha, "--gate", "ci: pass")
        return sha


class TestBegin(Repo):
    def test_no_start_before_begin(self):
        self.assertIn("NO (D5 open)", self.ok("status"))
        self.assertIn("has not begun", self.fails("start", "P0-1"))

    def test_begin_needs_the_user(self):
        self.assertIn("--by must be 'user'", self.fails("begin", "--by", "claude", "--text", "go"))
        self.ok("begin", "--by", "user", "--text", "bắt đầu")
        self.assertEqual(self.state()["begun"]["text"], "bắt đầu")
        self.fails("begin", "--by", "user", "--text", "again")


class TestStages(Repo):
    def setUp(self):
        super().setUp()
        self.ok("begin", "--by", "user", "--text", "start")

    def test_one_active_step(self):
        self.ok("start", "P0-1")
        self.assertIn("is active", self.fails("start", "P0-2"))
        self.assertIn("already active", self.ok("start", "P0-1"))

    def test_dependency(self):
        self.assertIn("waits for P0-1", self.fails("start", "P0-2"))

    def test_stage_order_and_brief(self):
        self.ok("start", "P0-1")
        self.fails("stage", "P0-1", "test")
        self.assertIn("write the brief first", self.fails("stage", "P0-1", "dev"))
        self.ok("brief", "P0-1")
        brief = (self.tmp / "migration/refactor/handoffs/P0-1/brief.md").read_text()
        self.assertIn("**P0-1 Baseline run**", brief)
        self.assertIn("Do not change behavior", brief)
        self.assertIn("parity_sweep.py", brief)
        self.assertIn("## Result", brief)
        self.ok("stage", "P0-1", "dev")
        self.ok("stage", "P0-1", "test")
        self.assertIn("does not say status: pass", self.fails("stage", "P0-1", "docs"))

    def test_brief_lists_the_decisions(self):
        self.ok("start", "P0-1")
        self.ok("ask", "P0-1", "--text", "Add coverage?")
        self.ok("answer", "Q1", "--by", "user", "--text", "yes, coverage-v8")
        self.ok("brief", "P0-1")
        brief = (self.tmp / "migration/refactor/handoffs/P0-1/brief.md").read_text()
        self.assertIn("## Decisions for this step", brief)
        self.assertIn("yes, coverage-v8", brief)

    def test_fix_loops(self):
        self.ok("start", "P0-1")
        self.ok("brief", "P0-1")
        self.ok("stage", "P0-1", "dev")
        for _ in range(rf.MAX_LOOPS):
            self.ok("stage", "P0-1", "test")
            self.write("migration/refactor/handoffs/P0-1/test.md", "## Result\nstatus: fail\nsummary: ci red\n")
            self.ok("fail", "P0-1")
        self.assertEqual(self.state()["current"]["loop"], rf.MAX_LOOPS)
        self.ok("brief", "P0-1")
        self.assertIn("ci red", (self.tmp / "migration/refactor/handoffs/P0-1/brief.md").read_text())
        self.ok("stage", "P0-1", "test")
        self.assertIn("rf.py block", self.fails("fail", "P0-1"))
        self.ok("block", "P0-1", "--reason", "ci red", "--stash", "rf/P0-1/failed")
        code, _ = self.rf("next")
        self.assertEqual(code, 2)
        self.ok("unblock", "P0-1", "--by", "user", "--text", "try again")
        self.assertEqual(self.state()["current"], {**self.state()["current"], "stage": "brief", "loop": 0})

    def test_done_and_next(self):
        sha = self.finish("P0-1")
        st = self.state()
        self.assertIsNone(st["current"])
        self.assertEqual(st["steps"]["P0-1"]["commit"], sha)
        self.assertEqual(self.ok("next").splitlines()[0], "P0-2")
        self.assertIn("ok", self.ok("verify"))

    def test_done_needs_a_real_commit(self):
        self.ok("start", "P0-1")
        self.run_to_commit("P0-1")
        self.assertIn("not found", self.fails("done", "P0-1", "--commit", "deadbeef", "--gate", "x"))


class TestGates(Repo):
    def setUp(self):
        super().setUp()
        self.ok("begin", "--by", "user", "--text", "start")
        self.finish("P0-1")
        self.finish("P0-2")

    def test_before_gate(self):
        self.assertIn("before-gate open", self.fails("start", "P0-3"))
        self.assertIn("before-gate of P0-3", self.ok("status"))
        self.fails("confirm", "P0-3", "--by", "claude", "--text", "ok")
        self.ok("confirm", "P0-3", "--by", "user", "--text", "ok deps")
        self.finish("P0-3")

    def test_after_gate(self):
        self.ok("confirm", "P0-3", "--by", "user", "--text", "ok deps")
        self.finish("P0-3")
        self.finish("P0-4")
        self.ok("start", "P0-5")
        self.run_to_commit("P0-5")
        sha = self.commit("refactor(P0-5): x")
        self.assertIn("after-gate open", self.fails("done", "P0-5", "--commit", sha, "--gate", "x"))
        self.ok("wait", "P0-5")
        code, _ = self.rf("next")
        self.assertEqual(code, 2)
        self.ok("confirm", "P0-5", "--by", "user", "--text", "duyệt")
        self.ok("done", "P0-5", "--commit", sha, "--gate", "user confirmed")


class TestVerify(Repo):
    def test_unexpected_change(self):
        self.ok("begin", "--by", "user", "--text", "start")
        self.write("app/src/c.ts", "export const c = 3;\n")
        self.assertIn("changes with no active step", self.fails("verify"))

    def test_state_file_is_allowed(self):
        self.ok("begin", "--by", "user", "--text", "start")
        self.assertIn("verify: ok", self.ok("verify"))

    def test_ledger_file_is_allowed(self):
        self.ok("begin", "--by", "user", "--text", "start")
        self.write("migration/metrics/ledger.csv", "screen,phase,tokens\n")
        self.assertIn("verify: ok", self.ok("verify"))

    def test_wrong_branch(self):
        sh(self.tmp, "git", "checkout", "-q", "-b", "other")
        self.assertIn("branch is other", self.fails("verify"))


class TestDiffcheck(Repo):
    def test_move_with_import_change(self):
        sh(self.tmp, "git", "mv", "app/src/b.ts", "app/src/lib-b.ts")
        self.write("app/src/a.ts", "import { b } from '@/lib-b';\nexport const a = b + 1;\n")
        self.assertIn("diffcheck --move: ok", self.ok("diffcheck", "--move"))

    def test_logic_change_is_not_a_move(self):
        sh(self.tmp, "git", "mv", "app/src/b.ts", "app/src/lib-b.ts")
        self.write("app/src/a.ts", "import { b } from '@/lib-b';\nexport const a = b + 2;\n")
        self.assertIn("NOT A MOVE", self.fails("diffcheck", "--move"))

    def test_new_code_file_is_not_a_move(self):
        self.write("app/src/new.ts", "export const n = 1;\n")
        self.assertIn("untracked app/src/new.ts", self.fails("diffcheck", "--move"))


class TestCatalog(unittest.TestCase):
    def test_catalog_matches_the_plan(self):
        old = Path.cwd()
        os.chdir(PROJECT)
        try:
            with contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(gen_steps.main(["--check"]), 0)
        finally:
            os.chdir(old)

    def test_every_plan_step_is_in_the_catalog(self):
        plan = (PROJECT / gen_steps.PLAN).read_text()
        import re
        ids = set(re.findall(r"^\*\*(P\d-\d) ", plan, re.M))
        catalog = {s["anchor"][2:].strip() for s in gen_steps.build(plan)["steps"] if s["anchor"].startswith("**")}
        self.assertEqual(ids, catalog)

    def test_stretch_stops_next(self):
        data = gen_steps.build((PROJECT / gen_steps.PLAN).read_text())
        first_stretch = next(s for s in data["steps"] if s["stretch"])
        self.assertEqual(first_stretch["id"], "P8-1")


if __name__ == "__main__":
    unittest.main()
