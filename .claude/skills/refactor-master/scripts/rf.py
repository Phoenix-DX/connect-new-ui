#!/usr/bin/env python3
"""rf.py: state of the architecture refactor (refactor-plan-v2.md), for the refactor-master skill.

Run from the project root. Files: migration/refactor/steps.json (catalog, from gen_steps.py), state.json (progress),
log.md (one line per event), handoffs/<step>/ (brief.md, dev.md, test.md, docs.md).

  rf.py status                         where the refactor is, and the next step
  rf.py next [--phase P3] [--stretch]  the step to run now (exit 2 when a step waits for the user or is blocked)
  rf.py verify                         state against git: branch, done commits in HEAD, unexpected changes
  rf.py begin --by user --text T       record the user's start (D5); no step starts before it
  rf.py start STEP                     make STEP active (stage brief)
  rf.py brief STEP                     write handoffs/STEP/brief.md
  rf.py stage STEP dev|test|docs|commit
  rf.py fail STEP                      the test failed: back to dev, loop + 1 (maximum 2)
  rf.py wait STEP                      the step waits for the user's gate
  rf.py confirm STEP --by user --text T [--when before|after]
  rf.py done STEP --commit SHA --gate T
  rf.py block STEP --reason T [--stash NAME]
  rf.py unblock STEP --by user --text T
  rf.py ask STEP --text T  /  rf.py answer QID --by user --text T
  rf.py tokens STEP --agent dev|test|docs --n N [--model M]
  rf.py diffcheck --move               for a move step: renames and import lines only
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import difflib
import json
import re
import subprocess
import sys
from pathlib import Path

STAGES = ["brief", "dev", "test", "docs", "commit"]
MAX_LOOPS = 2
# files that rf.py itself writes after a commit (state, log, and the ledger line of rf.py tokens)
ALWAYS_DIRTY_OK = ("migration/refactor/state.json", "migration/refactor/log.md", "migration/metrics/ledger.csv")
HANDOFF_TEMPLATE = Path(".claude/skills/refactor-master/references/handoff.md")
LEDGER = Path(".claude/skills/outsystems-screen-spec/scripts/ledger.py")


class RfError(Exception):
    pass


# ---------------------------------------------------------------- files


def root() -> Path:
    here = Path.cwd()
    for p in [here, *here.parents]:
        if (p / "migration" / "refactor").is_dir():
            return p
    raise RfError("run from the project root (migration/refactor/ not found)")


def now() -> str:
    return dt.datetime.now().replace(microsecond=0).isoformat()


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")


class Ctx:
    def __init__(self, base: Path):
        self.base = base
        self.dir = base / "migration" / "refactor"
        cat = load_json(self.dir / "steps.json", None)
        if cat is None:
            raise RfError("migration/refactor/steps.json is missing: run gen_steps.py")
        self.plan = base / cat["plan"]
        self.steps: list[dict] = cat["steps"]
        self.by_id = {s["id"]: s for s in self.steps}
        self.state = load_json(self.dir / "state.json", None) or new_state()

    def save(self) -> None:
        save_json(self.dir / "state.json", self.state)

    def log(self, text: str) -> None:
        path = self.dir / "log.md"
        if not path.exists():
            path.write_text("# Refactor log\n\nOne line per event. Written by rf.py.\n\n", encoding="utf-8")
        with path.open("a", encoding="utf-8") as f:
            f.write(f"- {now()} {text}\n")

    def step(self, step_id: str) -> dict:
        if step_id not in self.by_id:
            raise RfError(f"unknown step {step_id}")
        return self.by_id[step_id]

    def st(self, step_id: str) -> dict:
        return self.state["steps"].setdefault(step_id, {"status": "pending"})

    def status_of(self, step_id: str) -> str:
        return self.state["steps"].get(step_id, {}).get("status", "pending")

    def handoff(self, step_id: str) -> Path:
        return self.dir / "handoffs" / step_id


def new_state() -> dict:
    return {
        "plan": "app/docs/architecture/refactor-plan-v2.md",
        "branch": "refactor/architecture",
        "begun": None,
        "current": None,
        "steps": {},
        "gates": {},
        "questions": [],
    }


# ---------------------------------------------------------------- git


def git(c: Ctx, *args: str, check: bool = True) -> str:
    r = subprocess.run(["git", *args], cwd=c.base, capture_output=True, text=True)
    if check and r.returncode != 0:
        raise RfError(f"git {' '.join(args)}: {r.stderr.strip()}")
    return r.stdout


def dirty_paths(c: Ctx) -> list[str]:
    out = []
    for line in git(c, "status", "--porcelain", "--untracked-files=all").splitlines():
        path = line[3:]
        if " -> " in path:
            path = path.split(" -> ", 1)[1]
        out.append(path.strip('"'))
    return out


# ---------------------------------------------------------------- rules


def require_user(by: str) -> None:
    if by != "user":
        raise RfError("--by must be 'user': record only what the user said in the conversation")


def gate_key(step_id: str, when: str) -> str:
    return f"{step_id}:{when}"


def gate_open(c: Ctx, step: dict, when: str) -> bool:
    g = step.get("gate")
    if not g or g["when"] != when:
        return False
    return c.state["gates"].get(gate_key(step["id"], when), {}).get("status") != "confirmed"


def open_questions(c: Ctx, step_id: str | None = None) -> list[dict]:
    return [q for q in c.state["questions"] if q["status"] == "open" and (step_id is None or q["step"] == step_id)]


def next_step(c: Ctx, phase: str | None = None, stretch: bool = False) -> tuple[str | None, str]:
    """(step id, reason). The id is None when nothing can run."""
    cur = c.state.get("current")
    if cur:
        s = c.status_of(cur["step"])
        if s in ("waiting_user", "blocked"):
            return None, f"{cur['step']} is {s}"
        return cur["step"], f"resume {cur['step']} at stage {cur['stage']}"
    for s in c.steps:
        if c.status_of(s["id"]) == "done":
            continue
        if phase and s["phase"] != phase:
            if any(x["phase"] == phase and c.status_of(x["id"]) != "done" for x in c.steps):
                continue
            return None, f"phase {phase} is complete"
        if s["stretch"] and not stretch:
            return None, f"{s['id']} is a stretch step (R1 b): run it only on the user's request"
        undone = [d for d in s["deps"] if c.status_of(d) != "done"]
        if undone:
            return None, f"{s['id']} waits for {', '.join(undone)}"
        return s["id"], f"next step {s['id']}"
    return None, "all steps are done"


# ---------------------------------------------------------------- commands


def cmd_status(c: Ctx, a) -> int:
    st = c.state
    begun = st.get("begun")
    head = git(c, "rev-parse", "--short", "HEAD", check=False).strip()
    branch = git(c, "branch", "--show-current", check=False).strip()
    done = [s for s in c.steps if c.status_of(s["id"]) == "done"]
    in_scope = [s for s in c.steps if not s["stretch"]]
    print(f"begun: {'yes, ' + begun['at'] + ' (user: ' + begun['text'] + ')' if begun else 'NO (D5 open): no step can start'}")
    print(f"branch: {branch} at {head} (expected {st['branch']})")
    print(f"progress: {len([s for s in done if not s['stretch']])}/{len(in_scope)} steps in scope, "
          f"{len(done)}/{len(c.steps)} with stretch")
    phases = []
    for p in dict.fromkeys(s["phase"] for s in c.steps):
        ps = [s for s in c.steps if s["phase"] == p]
        n = sum(1 for s in ps if c.status_of(s["id"]) == "done")
        phases.append(f"{p} {n}/{len(ps)}")
    print("phases: " + ", ".join(phases))
    if done:
        last = done[-1]
        print(f"last done: {last['id']} {last['title']} ({c.st(last['id']).get('commit', '?')})")
    cur = st.get("current")
    if cur:
        s = c.st(cur["step"])
        print(f"active: {cur['step']} status {s['status']}, stage {cur['stage']}, loop {cur['loop']}, since {cur['since']}")
        if s.get("reason"):
            print(f"  reason: {s['reason']}" + (f"; stash: {s['stash']}" if s.get("stash") else ""))
        step = c.step(cur["step"])
        if step.get("gate") and s["status"] == "waiting_user":
            print(f"  gate ({step['gate']['when']}): {step['gate']['text']}")
    for q in open_questions(c):
        print(f"question {q['id']} ({q['step']}): {q['text']}")
    nxt, why = next_step(c)
    print(f"next: {why}")
    if nxt and not cur:
        s = c.step(nxt)
        if gate_open(c, s, "before"):
            print(f"  before-gate of {nxt}: {s['gate']['text']}")
    return 0


def cmd_next(c: Ctx, a) -> int:
    nxt, why = next_step(c, a.phase, a.stretch)
    print(nxt or "-")
    print(why, file=sys.stderr)
    if nxt is None:
        return 2 if "waiting_user" in why or "blocked" in why else 1
    return 0


def cmd_verify(c: Ctx, a) -> int:
    problems, notes = [], []
    branch = git(c, "branch", "--show-current").strip()
    if branch != c.state["branch"]:
        problems.append(f"branch is {branch}, expected {c.state['branch']}")
    for sid, s in c.state["steps"].items():
        if s.get("status") == "done":
            sha = s.get("commit", "")
            r = subprocess.run(["git", "merge-base", "--is-ancestor", sha, "HEAD"], cwd=c.base, capture_output=True)
            if not sha or r.returncode != 0:
                problems.append(f"{sid}: commit {sha or '(none)'} is not in the history of HEAD")
    dirty = [p for p in dirty_paths(c) if p not in ALWAYS_DIRTY_OK]
    cur = c.state.get("current")
    if dirty:
        if not cur:
            problems.append("changes with no active step: " + ", ".join(dirty[:20]) + (" ..." if len(dirty) > 20 else ""))
        elif cur["stage"] == "brief":
            other = [p for p in dirty if not p.startswith(f"migration/refactor/handoffs/{cur['step']}/")]
            if other:
                problems.append(f"changes before the developer started {cur['step']}: " + ", ".join(other[:20]))
        else:
            notes.append(f"{len(dirty)} changed files of the active step {cur['step']}")
    for n in notes:
        print(f"note: {n}")
    for p in problems:
        print(f"PROBLEM: {p}")
    print("verify: " + ("FAIL" if problems else "ok"))
    return 1 if problems else 0


def cmd_begin(c: Ctx, a) -> int:
    require_user(a.by)
    if c.state.get("begun"):
        raise RfError(f"already begun at {c.state['begun']['at']}")
    c.state["begun"] = {"by": "user", "text": a.text, "at": now()}
    c.save()
    c.log(f"begun by the user: \"{a.text}\"")
    print("begun")
    return 0


def cmd_start(c: Ctx, a) -> int:
    step = c.step(a.step)
    if not c.state.get("begun"):
        raise RfError("the refactor has not begun: the user must say start (rf.py begin --by user --text ...)")
    cur = c.state.get("current")
    if cur:
        if cur["step"] == a.step:
            print(f"{a.step} is already active at stage {cur['stage']}: resume it")
            return 0
        raise RfError(f"{cur['step']} is active ({c.status_of(cur['step'])}): finish or block it first")
    if c.status_of(a.step) == "done":
        raise RfError(f"{a.step} is done")
    undone = [d for d in step["deps"] if c.status_of(d) != "done"]
    if undone:
        raise RfError(f"{a.step} waits for {', '.join(undone)}")
    if step["stretch"] and not a.stretch:
        raise RfError(f"{a.step} is a stretch step: pass --stretch only when the user asked for it")
    if gate_open(c, step, "before"):
        raise RfError(f"before-gate open: ask the user: {step['gate']['text']} "
                      f"Then: rf.py confirm {a.step} --when before --by user --text ...")
    if open_questions(c, a.step):
        raise RfError(f"{a.step} has open questions")
    c.state["current"] = {"step": a.step, "stage": "brief", "loop": 0, "since": now()}
    s = c.st(a.step)
    s.update({"status": "active", "started": now()})
    s.setdefault("tokens", {})
    c.save()
    c.log(f"{a.step} started")
    print(f"{a.step} active, stage brief")
    return 0


def require_active(c: Ctx, step_id: str) -> dict:
    cur = c.state.get("current")
    if not cur or cur["step"] != step_id:
        raise RfError(f"{step_id} is not the active step" + (f" ({cur['step']} is)" if cur else ""))
    return cur


def cmd_stage(c: Ctx, a) -> int:
    cur = require_active(c, a.step)
    if c.status_of(a.step) != "active":
        raise RfError(f"{a.step} is {c.status_of(a.step)}")
    i, j = STAGES.index(cur["stage"]), STAGES.index(a.stage)
    if j != i + 1:
        raise RfError(f"stage {cur['stage']} cannot move to {a.stage} (order: {' > '.join(STAGES)}; use fail for test > dev)")
    if a.stage == "dev" and not (c.handoff(a.step) / "brief.md").exists():
        raise RfError("write the brief first: rf.py brief " + a.step)
    if a.stage == "docs" and "PASS" not in read_status(c.handoff(a.step) / "test.md"):
        raise RfError("test.md does not say status: pass")
    cur.update({"stage": a.stage, "since": now()})
    c.save()
    c.log(f"{a.step} stage {a.stage}")
    print(f"{a.step} stage {a.stage}")
    return 0


def read_status(path: Path) -> str:
    if not path.exists():
        return "MISSING"
    m = re.search(r"^status:\s*(\w+)", path.read_text(encoding="utf-8"), re.M)
    return m.group(1).upper() if m else "UNKNOWN"


def cmd_fail(c: Ctx, a) -> int:
    cur = require_active(c, a.step)
    if cur["stage"] != "test":
        raise RfError(f"fail is for the test stage; {a.step} is at {cur['stage']}")
    if cur["loop"] >= MAX_LOOPS:
        raise RfError(f"{a.step} failed after {MAX_LOOPS} fix loops: stash the work and run rf.py block")
    cur.update({"stage": "dev", "loop": cur["loop"] + 1, "since": now()})
    c.save()
    c.log(f"{a.step} test failed, fix loop {cur['loop']}")
    print(f"{a.step} back to dev, loop {cur['loop']}/{MAX_LOOPS}")
    return 0


def cmd_wait(c: Ctx, a) -> int:
    require_active(c, a.step)
    step = c.step(a.step)
    if not step.get("gate"):
        raise RfError(f"{a.step} has no user gate")
    c.st(a.step)["status"] = "waiting_user"
    c.save()
    c.log(f"{a.step} waits for the user: {step['gate']['text']}")
    print(f"{a.step} waiting for the user")
    return 0


def cmd_confirm(c: Ctx, a) -> int:
    require_user(a.by)
    step = c.step(a.step)
    if not step.get("gate"):
        raise RfError(f"{a.step} has no user gate")
    when = a.when or step["gate"]["when"]
    if when != step["gate"]["when"]:
        raise RfError(f"the gate of {a.step} is '{step['gate']['when']}', not '{when}'")
    c.state["gates"][gate_key(a.step, when)] = {"status": "confirmed", "by": "user", "text": a.text, "at": now()}
    if c.status_of(a.step) == "waiting_user":
        c.st(a.step)["status"] = "active"
    c.save()
    c.log(f"{a.step} {when}-gate confirmed by the user: \"{a.text}\"")
    print(f"{a.step} {when}-gate confirmed")
    return 0


def cmd_done(c: Ctx, a) -> int:
    cur = require_active(c, a.step)
    if cur["stage"] != "commit":
        raise RfError(f"{a.step} is at stage {cur['stage']}, not commit")
    step = c.step(a.step)
    if gate_open(c, step, "after"):
        raise RfError(f"after-gate open: {step['gate']['text']} (rf.py wait, then the user's confirm)")
    if subprocess.run(["git", "cat-file", "-e", f"{a.commit}^{{commit}}"], cwd=c.base, capture_output=True).returncode:
        raise RfError(f"commit {a.commit} not found")
    sha = git(c, "rev-parse", "--short", a.commit).strip()
    s = c.st(a.step)
    s.update({"status": "done", "commit": sha, "gate": a.gate, "loops": cur["loop"], "finished": now()})
    c.state["current"] = None
    c.save()
    c.log(f"{a.step} done {sha}: {a.gate}")
    print(f"{a.step} done ({sha})")
    return 0


def cmd_block(c: Ctx, a) -> int:
    require_active(c, a.step)
    s = c.st(a.step)
    s.update({"status": "blocked", "reason": a.reason, "stash": a.stash})
    c.save()
    c.log(f"{a.step} blocked: {a.reason}" + (f" (stash {a.stash})" if a.stash else ""))
    print(f"{a.step} blocked")
    return 0


def cmd_unblock(c: Ctx, a) -> int:
    require_user(a.by)
    cur = require_active(c, a.step)
    if c.status_of(a.step) != "blocked":
        raise RfError(f"{a.step} is not blocked")
    s = c.st(a.step)
    s.update({"status": "active", "unblocked": {"by": "user", "text": a.text, "at": now()}})
    cur.update({"stage": "brief", "loop": 0, "since": now()})
    c.save()
    c.log(f"{a.step} unblocked by the user: \"{a.text}\"")
    print(f"{a.step} active again at stage brief (loop 0); the stash stays as it is")
    return 0


def cmd_ask(c: Ctx, a) -> int:
    c.step(a.step)
    qid = f"Q{len(c.state['questions']) + 1}"
    c.state["questions"].append({"id": qid, "step": a.step, "text": a.text, "status": "open", "at": now()})
    c.save()
    c.log(f"{qid} ({a.step}) asked: {a.text}")
    print(qid)
    return 0


def cmd_answer(c: Ctx, a) -> int:
    require_user(a.by)
    for q in c.state["questions"]:
        if q["id"] == a.qid:
            q.update({"status": "answered", "answer": a.text, "by": "user", "answeredAt": now()})
            c.save()
            c.log(f"{a.qid} answered by the user: \"{a.text}\"")
            print(f"{a.qid} answered")
            return 0
    raise RfError(f"unknown question {a.qid}")


def cmd_tokens(c: Ctx, a) -> int:
    c.step(a.step)
    s = c.st(a.step)
    tok = s.setdefault("tokens", {})
    tok[a.agent] = tok.get(a.agent, 0) + a.n
    c.save()
    loop = (c.state.get("current") or {}).get("loop", 0)
    phase = {"dev": "fix" if loop else "build", "test": "verify", "docs": "other"}[a.agent]
    note = f"{a.step}" + (f" loop {loop}" if loop else "") + (f" {a.model}" if a.model else "")
    r = subprocess.run([sys.executable, str(c.base / LEDGER), "add", "--screen", "refactor", "--phase", phase,
                        "--tokens", str(a.n), "--agent", f"refactor-{a.agent}", "--note", note],
                       cwd=c.base, capture_output=True, text=True)
    if r.returncode:
        print(f"ledger: {r.stderr.strip()}", file=sys.stderr)
    print(f"{a.step} {a.agent} +{a.n} tokens")
    return 0


# ---------------------------------------------------------------- brief


def plan_section(plan: str, anchor: str) -> str:
    """The plan text from the anchor line to the next step or heading."""
    lines = plan.splitlines()
    try:
        i = next(k for k, ln in enumerate(lines) if ln.startswith(anchor))
    except StopIteration:
        raise RfError(f"anchor {anchor!r} not found in the plan")
    heading = anchor.startswith("#")
    level = len(anchor) - len(anchor.lstrip("#")) if heading else 0
    out = [lines[i]]
    for ln in lines[i + 1:]:
        if heading:
            if re.match(r"^#{1,%d} " % level, ln):
                break
        elif re.match(r"^\*\*P\d-\d", ln) or re.match(r"^#{1,4} ", ln):
            break
        out.append(ln)
    return "\n".join(out).rstrip()


def gate_commands(c: Ctx, step: dict) -> list[str]:
    cmds = ["npm --prefix app run ci"]
    pkg = load_json(c.base / "app" / "package.json", {})
    if "lint:arch" in pkg.get("scripts", {}):
        cmds.append("npm --prefix app run lint:arch   # no new warning in the folders of this step")
    if step["level"] != "none":
        if (c.base / "migration/tools/refactor_parity.py").exists():
            scope = "--all" if step["fullParity"] else "--changed"
            cmds.append(f"python3 migration/tools/refactor_parity.py --level {step['level']} {scope} --ref both "
                        f"--report app/docs/refactor/reports/{step['id']}.md")
        else:
            cmds.append("python3 migration/tools/parity_sweep.py   # refactor_parity.py does not exist yet (P0-2)")
    if (c.base / "app/build/bundle-report.mjs").exists():
        cmds.append("npm --prefix app run build && node app/build/bundle-report.mjs   # limits: plan v2 section 7")
    if step["kind"] == "move":
        cmds.append(f"python3 .claude/skills/refactor-master/scripts/rf.py diffcheck --move")
    return cmds


def cmd_brief(c: Ctx, a) -> int:
    step = c.step(a.step)
    plan = c.plan.read_text(encoding="utf-8")
    section = plan_section(plan, step["anchor"])
    rules = plan_section(plan, "### 1.4 Rules for all steps")
    cur = c.state.get("current") or {}
    loop = cur.get("loop", 0) if cur.get("step") == a.step else 0
    hd = c.handoff(a.step)
    parts = [
        f"# Brief: {step['id']} {step['title']}",
        "",
        "Written by rf.py brief. Read this file, then the files that the step names under \"Read\". Do not read the "
        "full plan.",
        "",
        "| Field | Value |",
        "|---|---|",
        f"| Step | {step['id']} |",
        f"| Kind | {step['kind']} |",
        f"| Parity level | {step['level']}{' (full run: --all)' if step['fullParity'] else ''} |",
        f"| Developer model | {step['devModel']} |",
        f"| Depends on | {', '.join(step['deps']) or '-'} |",
        f"| User gate | {step['gate']['when'] + ': ' + step['gate']['text'] if step['gate'] else '-'} |",
        f"| Fix loop | {loop} of {MAX_LOOPS} |",
        f"| Handoff folder | `{hd.relative_to(c.base)}/` |",
        "",
    ]
    if step.get("extra"):
        parts += ["## Scope of this step", "", step["extra"], ""]
    decided = [f"- {q['id']}: {q['text']} **Answer:** {q['answer']}" for q in c.state["questions"]
               if q["step"] == step["id"] and q["status"] == "answered"]
    decided += [f"- {k.split(':')[1]}-gate: {g['text']}" for k, g in c.state["gates"].items()
                if k.split(":")[0] == step["id"] and g.get("status") == "confirmed"]
    if decided:
        parts += ["## Decisions for this step", "", "These answers override the step text where they differ.", "",
                  *decided, ""]
    parts += ["## The step in the plan", "", section, "", "## Rules for all steps (plan v2 §1.4)", "",
              "\n".join(rules.splitlines()[1:]).strip(), ""]
    if step["kind"] == "move":
        parts += ["## Move step", "",
                  "Only renames and import lines change in code files. Use the codemod "
                  "`migration/tools/refactor/move.ts` when it exists (from P0-3). Do not edit logic.", ""]
    parts += ["## Quick checks for the developer", "",
              "```", "npm --prefix app run typecheck",
              "cd app && npx vitest run <the test files of the changed code>",
              "cd app && npx eslint <the changed files>", "```", "",
              "## Gate commands for the tester", "", "```", *gate_commands(c, step), "```", "",
              "The tester also runs the commands under \"Check\" of the step, and the diff review of "
              "`.claude/agents/refactor-tester.md`.", ""]
    test_md = hd / "test.md"
    if loop and test_md.exists():
        res = re.split(r"^## (?!Result)", test_md.read_text(encoding="utf-8"), flags=re.M)[0]
        parts += [f"## Fix loop {loop}: result of the last test", "", res.strip(), "",
                  "Fix only these failures. Read the full `test.md` for the details.", ""]
    template = c.base / HANDOFF_TEMPLATE
    if template.exists():
        parts += ["## Handoff template", "", template.read_text(encoding="utf-8").strip(), ""]
    hd.mkdir(parents=True, exist_ok=True)
    out = hd / "brief.md"
    out.write_text("\n".join(parts), encoding="utf-8")
    print(out.relative_to(c.base))
    return 0


# ---------------------------------------------------------------- diffcheck

PATH_IN_LINE = re.compile(r"""['"](\.{1,2}/|@/)[^'"]*['"]""")
IMPORT_SHAPE = re.compile(r"^\s*((import|export)(\s+type)?\s*(\{|\*)?|\}\s*from)?[\w\s,{}*$]*(\s+as\s+\w+)?[\s,{};]*$")
CODE_EXT = (".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs")


ORIGIN_TAG = re.compile(r"^\s*(/\*\* @origin [A-Za-z0-9_.]+ \*/|\* @origin [A-Za-z0-9_.]+)\s*$")


def changed_lines(c: Ctx, path: str, old: str | None, signed: bool = False) -> list[str]:
    args = ["diff", "HEAD", "-M", "-U0", "--"] + ([old, path] if old else [path])
    out = []
    for ln in git(c, *args).splitlines():
        if ln.startswith(("+++", "---")):
            continue
        if ln.startswith(("+", "-")):
            out.append(ln if signed else ln[1:])
    return out


# Protected text: string literals and comments. A rename never applies inside them.
STRING_LITERAL = re.compile(
    r"""('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`|//[^\n]*|/\*.*?\*/)""", re.S
)
IDENT = re.compile(r"[A-Za-z_$][\w$]*")


def load_rename_map(c: Ctx) -> tuple[dict[str, str], dict[str, str]]:
    """Identifier renames and directory pairs declared by app/docs/refactor/move-map.csv.

    Old identifier = source block name, new = target file base name; derived `<Old>Props` -> `<New>Props`.
    Only rows of src/shared/ blocks whose target .tsx file exists count (a block not yet moved is not renamed). Directory pairs: old dir -> new dir.
    """
    path = c.base / "app/docs/refactor/move-map.csv"
    names: dict[str, str] = {}
    dirs: dict[str, str] = {}
    if not path.exists():
        return names, dirs
    with path.open(newline="") as fh:
        for row in csv.DictReader(fh):
            src, tgt = row.get("source", ""), row.get("target", "")
            if not src.startswith("src/shared/") or not tgt.endswith(".tsx"):
                continue
            if not (c.base / "app" / tgt).exists():
                continue  # not moved yet: its identifiers are still the old ones
            old, new = src.rsplit("/", 1)[-1], tgt.rsplit("/", 1)[-1].split(".")[0]
            dirs["app/" + src] = "app/" + tgt.rsplit("/", 1)[0]
            if old != new:
                names[old] = new
                names[old + "Props"] = new + "Props"
    return names, dirs


def apply_rename(line: str, names: dict[str, str]) -> str:
    """Rename whole identifier tokens outside string literals."""
    if not names:
        return line
    parts = STRING_LITERAL.split(line)
    for i in range(0, len(parts), 2):
        parts[i] = IDENT.sub(lambda m: names.get(m.group(0), m.group(0)), parts[i])
    return "".join(parts)


IMPORT_STATEMENT = re.compile(r"^\s*(import|export)\b(?:[^;'\"]*?\bfrom\s*|\s*)['\"][^'\"]*['\"];?[ \t]*$", re.M | re.S)


def strip_imports(text: str) -> list[str]:
    """Lines of a file without import / re-export statements and @origin tags (those are checked on their own)."""
    text = IMPORT_STATEMENT.sub("", text)
    return [ln for ln in text.splitlines() if not ORIGIN_TAG.match(ln)]


def reflow_key(lines: list[str], names: dict[str, str]) -> str:
    """Token text of changed lines without layout: no whitespace, parentheses or trailing commas (outside strings).

    Prettier re-wraps a line when a rename changes its length; this key lets a re-wrapped hunk match.
    """
    parts = STRING_LITERAL.split(apply_rename("\n".join(lines), names))
    for i in range(0, len(parts), 2):
        parts[i] = re.sub(r"[\s()]", "", re.sub(r",(\s*[)\]}])", r"\1", parts[i]))
    return "\x00".join(parts).rstrip(",")


def classify(path: str, signed: list[str], old: str | None, names: dict[str, str], old_text: str | None = None, new_text: str | None = None) -> tuple[list[str], int]:
    """Return (bad lines, origin tag count) of the signed changed lines of one file."""
    bad, origins = [], 0
    removed = [sl[1:].strip() for sl in signed if sl[0] == "-"]
    added = [sl[1:].strip() for sl in signed if sl[0] == "+"]
    added_set, mapped_removed = set(added), {apply_rename(r, names) for r in removed}
    for sl in signed:
        ln = sl[1:]
        if sl[0] == "+" and old and ORIGIN_TAG.match(ln):
            origins += 1
            continue
        if ln.strip() == "" or PATH_IN_LINE.search(ln) or IMPORT_SHAPE.match(ln):
            continue
        if names:
            if sl[0] == "-" and apply_rename(ln.strip(), names) in added_set:
                continue
            if sl[0] == "+" and ln.strip() in mapped_removed:
                continue
        bad.append(f"{path}: {sl[0]}{ln.strip()[:120]}")
    if bad and names:
        # Fallback: the failed lines are only a re-wrapped form of each other (Prettier layout after a rename).
        if old_text is not None and new_text is not None:
            if reflow_key(strip_imports(old_text), names) == reflow_key(strip_imports(new_text), {}):
                bad = []
    return bad, origins


def cmd_diffcheck(c: Ctx, a) -> int:
    if not a.move:
        raise RfError("only --move is supported")
    names, dirs = load_rename_map(c)
    bad, other, renames, origins = [], [], 0, 0
    entries = [ln.split("\t") for ln in git(c, "diff", "HEAD", "-M", "--name-status").splitlines()]
    # Pair deleted + added files (for example shared/<Block>/index.ts) through the move map.
    added_files = {p[-1] for p in entries if p[0] == "A"}
    pairs: dict[str, str] = {}
    for parts in entries:
        if parts[0] != "D":
            continue
        d, name = parts[1].rsplit("/", 1)
        new_dir = dirs.get(d)
        if new_dir:
            cand = f"{new_dir}/{name}"
            if cand in added_files:
                pairs[parts[1]] = cand
    paired_new = set(pairs.values())
    for parts in entries:
        code, paths = parts[0], parts[1:]
        path = paths[-1]
        if path.startswith("migration/refactor/"):
            continue
        if code == "D" and path in pairs:
            new_path = pairs[path]
            renames += 1
            old_text = git(c, "show", f"HEAD:{path}").splitlines()
            new_text = (c.base / new_path).read_text().splitlines()
            signed = [
                ln for ln in difflib.unified_diff(old_text, new_text, lineterm="", n=0) if ln[:1] in "+-" and ln[:3] not in ("+++", "---")
            ]
            b, o = classify(new_path, signed, path, names, "\n".join(old_text), "\n".join(new_text))
            bad += b
            origins += o
            continue
        if code == "A" and path in paired_new:
            continue
        if code.startswith("R"):
            renames += 1
            old = paths[0]
        elif code == "M":
            old = None
        else:
            (bad if path.endswith(CODE_EXT) and path.startswith("app/") else other).append(f"{code} {path}")
            continue
        if not path.endswith(CODE_EXT):
            if code == "M":
                other.append(f"M {path}")
            continue
        old_text = git(c, "show", f"HEAD:{old or path}") if names else None
        new_text = (c.base / path).read_text() if names else None
        b, o = classify(path, changed_lines(c, path, old, signed=True), old, names, old_text, new_text)
        bad += b
        origins += o
    for p in dirty_paths(c):
        if p.startswith("migration/refactor/"):
            continue
        st = git(c, "status", "--porcelain", "--", p).strip()
        if st.startswith("??"):
            (bad if p.endswith(CODE_EXT) and p.startswith("app/") else other).append(f"untracked {p}")
    print(f"renames: {renames}")
    print(f"origin tags: {origins}")
    for o in other:
        print(f"other file (review it): {o}")
    for b in bad:
        print(f"NOT A MOVE: {b}")
    print("diffcheck --move: " + ("FAIL" if bad else "ok"))
    return 1 if bad else 0


# ---------------------------------------------------------------- main


def parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("status")
    p = sub.add_parser("next")
    p.add_argument("--phase")
    p.add_argument("--stretch", action="store_true")
    sub.add_parser("verify")
    p = sub.add_parser("begin")
    p.add_argument("--by", required=True)
    p.add_argument("--text", required=True)
    p = sub.add_parser("start")
    p.add_argument("step")
    p.add_argument("--stretch", action="store_true")
    p = sub.add_parser("brief")
    p.add_argument("step")
    p = sub.add_parser("stage")
    p.add_argument("step")
    p.add_argument("stage", choices=STAGES[1:])
    for name in ("fail", "wait"):
        sub.add_parser(name).add_argument("step")
    p = sub.add_parser("confirm")
    p.add_argument("step")
    p.add_argument("--by", required=True)
    p.add_argument("--text", required=True)
    p.add_argument("--when", choices=["before", "after"])
    p = sub.add_parser("done")
    p.add_argument("step")
    p.add_argument("--commit", required=True)
    p.add_argument("--gate", required=True)
    p = sub.add_parser("block")
    p.add_argument("step")
    p.add_argument("--reason", required=True)
    p.add_argument("--stash")
    p = sub.add_parser("unblock")
    p.add_argument("step")
    p.add_argument("--by", required=True)
    p.add_argument("--text", required=True)
    p = sub.add_parser("ask")
    p.add_argument("step")
    p.add_argument("--text", required=True)
    p = sub.add_parser("answer")
    p.add_argument("qid")
    p.add_argument("--by", required=True)
    p.add_argument("--text", required=True)
    p = sub.add_parser("tokens")
    p.add_argument("step")
    p.add_argument("--agent", required=True, choices=["dev", "test", "docs"])
    p.add_argument("--n", required=True, type=int)
    p.add_argument("--model")
    p = sub.add_parser("diffcheck")
    p.add_argument("--move", action="store_true")
    return ap


def main(argv: list[str] | None = None) -> int:
    a = parser().parse_args(argv)
    try:
        c = Ctx(root())
        return globals()[f"cmd_{a.cmd}"](c, a)
    except RfError as e:
        print(f"rf.py: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
