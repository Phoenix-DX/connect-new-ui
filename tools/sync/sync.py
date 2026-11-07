#!/usr/bin/env python3
"""State tool of the TST sync wave (skill `tst-sync`): one item per route whose fresh TST capture differs from React.

Files (project root relative): migration/sync/items.json (catalog, from `import`), state.json, log.md,
handoffs/<Route>/{brief,dev,test,docs}.md. Stages of one item:
    brief > dev > test > docs > spec > review > restamp > commit
`fail` sends test back to dev (at most 2 loops). `review` waits for the user's words; `confirm --by user` records them;
`restamp` needs that confirm; `done` closes the item with its commit. Several items can be active at the same time
when they share no path: an item with granted shared paths runs alone (the parity fingerprint covers the shared folders).

  python3 tools/sync/sync.py status | verify | next [--n 10] | report
  python3 tools/sync/sync.py import --triage migration/sync/triage-<date>.md [--capture-base <rev>] [--drift <json>]
  python3 tools/sync/sync.py begin --by user --text "..."
  python3 tools/sync/sync.py start <Route> [--shared app/src/components/X/**,...]
  python3 tools/sync/sync.py brief <Route> [--app http://localhost:5173]
  python3 tools/sync/sync.py stage <Route> dev|test|docs|spec|review|restamp|commit
  python3 tools/sync/sync.py fail <Route> | block <Route> --reason "..." [--stash name] | unblock <Route> --by user --text "..."
  python3 tools/sync/sync.py scope <Route> [--base <rev>] [--dry-run]
  python3 tools/sync/sync.py users <File.mvc.js>
  python3 tools/sync/sync.py ask <Route> --text "..." | answer <Qn> --by user --text "..."
  python3 tools/sync/sync.py confirm <Route> --by user --text "confirm ..."
  python3 tools/sync/sync.py done <Route> --commit <sha> --gate "..."
  python3 tools/sync/sync.py tokens <Route> --agent dev|test|docs --n <N> [--model m]
  python3 tools/sync/sync.py note <Route> --text "..."
"""
from __future__ import annotations

import argparse
import datetime as dt
import glob
import json
import os
import re
import subprocess
import sys
from pathlib import Path

STAGES = ["brief", "dev", "test", "docs", "spec", "review", "restamp", "commit"]
MAX_LOOPS = 2
CLASSES = {"A": "TST changed its code: fix React", "B": "mock data drift: fix the fictional data or mocks",
           "C": "capture artefact: exemption candidate, the user decides", "D": "React gap that existed before: the user decides"}
DIR = Path("migration/sync")
ALWAYS_DIRTY_OK = ("migration/sync/state.json", "migration/sync/log.md", "migration/metrics/ledger.csv", "migration/board.md")
# folders every stage may touch besides the item's own paths (docs, pipeline outputs); the scope guard gets them as --allow
COMMON_ALLOW = ("migration/sync/**", "app/docs/**", "migration/route-check/**", "migration/knowledge/**",
                "migration/metrics/**", "migration/board.md", "migration/capture-plan.json",
                # pipeline outputs of the master's captures and parity runs of other routes (not code)
                "migration/screens/*/analysis/**", "migration/screens/*/parity/**", "migration/screens/*/capture/**",
                "migration/screens/_capture-summary.json", "migration/survey/**", "migration/sources/**",
                # the master's own files: the tools, the agents, the contract regenerated from the fresh captures
                "tools/**", ".claude/**", "app/src/api/openapi.yaml", "app/src/api/schema.d.ts")
HANDOFF_TEMPLATE = Path(".claude/skills/tst-sync/references/handoff.md")
AGENTS_MD = Path("migration/AGENTS.md")
BRIEF_RULES = (3, 5, 9, 10, 11, 12, 13, 17, 21, 22, 23)
LEDGER = Path("tools/pipeline/ledger.py")
SCOPE_GUARD = Path("tools/pipeline/scope_guard.py")
DEFAULT_APP = "http://localhost:5173"
TRIAGE_COLUMNS = ["Route", "Class", "States with diffs", "Kinds", "Changed TST files", "Shared paths", "Dev model", "Owner", "Note"]


class SyncError(Exception):
    pass


# ---------------------------------------------------------------- files


def root() -> Path:
    here = Path.cwd()
    for p in [here, *here.parents]:
        if (p / DIR).is_dir():
            return p
    raise SyncError(f"run from the project root ({DIR}/ not found)")


def now() -> str:
    return dt.datetime.now().replace(microsecond=0).isoformat()


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")


def new_state(branch: str) -> dict:
    return {"branch": branch, "begun": None, "active": {}, "items": {}, "questions": [], "confirms": {}}


class Ctx:
    def __init__(self, base: Path):
        self.base = base
        self.dir = base / DIR
        self.catalog = load_json(self.dir / "items.json", {"branch": "sync/tst-2026-11", "captureBase": None, "items": []})
        self.items: list[dict] = self.catalog["items"]
        self.by_id = {i["id"]: i for i in self.items}
        self.state = load_json(self.dir / "state.json", None) or new_state(self.catalog["branch"])

    def save(self) -> None:
        save_json(self.dir / "state.json", self.state)
        save_json(self.dir / "items.json", self.catalog)

    def log(self, text: str) -> None:
        path = self.dir / "log.md"
        if not path.exists():
            path.write_text("# TST sync log\n\nOne line per event. Written by sync.py.\n\n", encoding="utf-8")
        with path.open("a", encoding="utf-8") as f:
            f.write(f"- {now()} {text}\n")

    def item(self, rid: str) -> dict:
        if rid not in self.by_id:
            raise SyncError(f"unknown item {rid} (sync.py import first)")
        return self.by_id[rid]

    def st(self, rid: str) -> dict:
        return self.state["items"].setdefault(rid, {"status": "pending"})

    def status_of(self, rid: str) -> str:
        return self.state["items"].get(rid, {}).get("status", "pending")

    def active(self, rid: str) -> dict:
        a = self.state["active"].get(rid)
        if not a:
            raise SyncError(f"{rid} is not active" + (f" (active: {', '.join(self.state['active'])})" if self.state["active"] else ""))
        return a

    def handoff(self, rid: str) -> Path:
        return self.dir / "handoffs" / rid


def git(c: Ctx, *args: str, check: bool = True) -> str:
    r = subprocess.run(["git", *args], cwd=c.base, capture_output=True, text=True)
    if check and r.returncode != 0:
        raise SyncError(f"git {' '.join(args)}: {r.stderr.strip()}")
    return r.stdout


def dirty_paths(c: Ctx) -> list[str]:
    out = []
    for line in git(c, "status", "--porcelain", "--untracked-files=all").splitlines():
        path = line[3:]
        if " -> " in path:
            path = path.split(" -> ", 1)[1]
        out.append(path.strip('"'))
    return out


def require_user(by: str) -> None:
    if by != "user":
        raise SyncError("--by must be 'user': record only what the user said in the conversation")


# ---------------------------------------------------------------- paths and overlap


def glob_re(pattern: str) -> re.Pattern:
    out = ""
    i = 0
    while i < len(pattern):
        ch = pattern[i]
        if pattern.startswith("**/", i):
            out, i = out + "(?:.*/)?", i + 3
            continue
        if pattern.startswith("**", i):
            out, i = out + ".*", i + 2
            continue
        out += "[^/]*" if ch == "*" else "[^/]" if ch == "?" else re.escape(ch)
        i += 1
    return re.compile("^" + out + "$")


def matches(path: str, patterns) -> bool:
    return any(glob_re(p).match(path) for p in patterns)


def own_paths(rid: str) -> list[str]:
    return [f"app/src/pages/{rid}/**", f"migration/screens/{rid}/**"]


def allowed_paths(c: Ctx, rid: str) -> list[str]:
    a = c.state["active"].get(rid, {})
    return own_paths(rid) + list(a.get("shared", [])) + list(COMMON_ALLOW)


def _prefix(p: str) -> str:
    return p.split("*", 1)[0].rstrip("/")


def shared_overlap(c: Ctx, rid: str, shared: list[str]) -> list[str]:
    """Active items whose paths (own or granted) overlap a path of `shared`: the same folder, a parent or a child.
    Two page-only items never overlap; two items with different shared folders may run together (2026-11-07: the
    parity fingerprint goes stale for everybody anyway when a shared file changes, and the restamp re-runs parity)."""
    hits = []
    mine = [_prefix(p) for p in shared]
    for other, a in c.state["active"].items():
        if other == rid:
            continue
        theirs = [_prefix(p) for p in list(a.get("shared", [])) + own_paths(other)]
        for m in mine:
            for t in theirs:
                if m == t or m.startswith(t + "/") or t.startswith(m + "/"):
                    hits.append(f"{other} ({t})")
    return sorted(set(hits))


# ---------------------------------------------------------------- commands: catalog


def parse_triage(text: str) -> list[dict]:
    """Rows of the triage table (one per route). The header must have the TRIAGE_COLUMNS in order."""
    rows, header_seen = [], False
    for line in text.splitlines():
        if not line.startswith("|"):
            if header_seen and line.strip() == "":
                break  # the items table ends at the first blank line; later tables are not items
            continue
        cells = [x.strip() for x in line.strip().strip("|").split("|")]
        if not header_seen:
            if [x.strip() for x in cells] == TRIAGE_COLUMNS:
                header_seen = True
            continue
        if set("".join(cells)) <= set("-: "):
            continue
        if len(cells) != len(TRIAGE_COLUMNS):
            raise SyncError(f"triage row with {len(cells)} cells, expected {len(TRIAGE_COLUMNS)}: {line[:80]}")
        r = dict(zip(TRIAGE_COLUMNS, cells))
        rid = r["Route"].strip("`")
        if not rid:
            continue
        cls = r["Class"].strip("`").upper()
        if cls not in CLASSES:
            raise SyncError(f"{rid}: class '{r['Class']}' is not one of {', '.join(CLASSES)}")
        states = {}
        for part in re.split(r"[;,]\s*", r["States with diffs"]):
            m = re.match(r"^`?([\w@+=.-]+)`?\s*:\s*(\d+)$", part.strip())
            if m:
                states[m.group(1)] = int(m.group(2))
        shared = [x.strip().strip("`") for x in r["Shared paths"].split(",") if x.strip() and x.strip() != "-"]
        files = [x.strip().strip("`") for x in r["Changed TST files"].split(",") if x.strip() and x.strip() != "-"]
        kinds = [x.strip().strip("`") for x in r["Kinds"].split(",") if x.strip() and x.strip() != "-"]
        model = r["Dev model"].strip("`").lower() or "opus"
        rows.append({"id": rid, "class": cls, "states": states, "kinds": kinds, "files": files, "shared": shared,
                     "devModel": model, "owner": r["Owner"].strip("`") if r["Owner"] != "-" else "", "note": r["Note"]})
    if not header_seen:
        raise SyncError("triage table header not found: | " + " | ".join(TRIAGE_COLUMNS) + " |")
    return rows


def cmd_import(c: Ctx, a) -> int:
    text = (c.base / a.triage).read_text(encoding="utf-8")
    rows = parse_triage(text)
    for r in rows:
        if not (c.base / "migration" / "screens" / r["id"] / "finished.json").exists():
            raise SyncError(f"{r['id']}: no finished.json (only finished routes are sync items)")
        if c.status_of(r["id"]) == "done":
            raise SyncError(f"{r['id']} is done: a second import must not reopen it")
    c.catalog["triage"] = a.triage
    if a.capture_base:
        c.catalog["captureBase"] = git(c, "rev-parse", a.capture_base).strip()
    if a.drift:
        c.catalog["drift"] = a.drift
    c.catalog["items"] = rows
    c.items, c.by_id = rows, {r["id"]: r for r in rows}
    c.save()
    c.log(f"imported {len(rows)} items from {a.triage}")
    by = {}
    for r in rows:
        by[r["class"]] = by.get(r["class"], 0) + 1
    print(f"imported {len(rows)} items: " + ", ".join(f"{k} {v}" for k, v in sorted(by.items())))
    return 0


def runnable(c: Ctx, item: dict) -> str | None:
    """None when the item can start now, else the reason it cannot."""
    rid = item["id"]
    if c.status_of(rid) in ("done", "blocked", "waiting_user"):
        return c.status_of(rid)
    if rid in c.state["active"]:
        return "active"
    if item["class"] in ("C", "D") and not any(q["status"] == "answered" and q["item"] == rid for q in c.state["questions"]):
        return f"class {item['class']}: needs the user's decision first (sync.py ask/answer)"
    hits = shared_overlap(c, rid, item.get("shared", []))
    if hits:
        return "waits for " + "; ".join(hits)
    return None


def cmd_next(c: Ctx, a) -> int:
    out = []
    for item in c.items:
        if a.cls and item["class"] != a.cls:
            continue
        why = runnable(c, item)
        if why is None:
            out.append(item["id"])
        if len(out) >= a.n:
            break
    print("\n".join(out) if out else "-")
    return 0 if out else 1


def cmd_status(c: Ctx, a) -> int:
    st = c.state
    head = git(c, "rev-parse", "--short", "HEAD", check=False).strip()
    branch = git(c, "branch", "--show-current", check=False).strip()
    begun = st.get("begun")
    print(f"begun: {'yes, ' + begun['at'] + ' (user: ' + begun['text'] + ')' if begun else 'NO: no item can start (sync.py begin --by user)'}")
    print(f"branch: {branch} at {head} (expected {st['branch']}); captureBase {c.catalog.get('captureBase')}")
    counts = {}
    for item in c.items:
        counts.setdefault(item["class"], {}).setdefault(c.status_of(item["id"]), 0)
        counts[item["class"]][c.status_of(item["id"])] += 1
    for cls in sorted(counts):
        print(f"class {cls}: " + ", ".join(f"{k} {v}" for k, v in sorted(counts[cls].items())))
    done = [i for i in c.items if c.status_of(i["id"]) == "done"]
    print(f"progress: {len(done)}/{len(c.items)} items done")
    for rid, act in st["active"].items():
        s = c.st(rid)
        print(f"active: {rid} status {s['status']}, stage {act['stage']}, loop {act['loop']}, since {act['since']}"
              + (f", shared {', '.join(act['shared'])}" if act.get("shared") else ""))
        if s.get("reason"):
            print(f"  reason: {s['reason']}" + (f"; stash: {s['stash']}" if s.get("stash") else ""))
    for q in st["questions"]:
        if q["status"] == "open":
            print(f"question {q['id']} ({q['item']}): {q['text']}")
    nxt = [i["id"] for i in c.items if runnable(c, i) is None][:5]
    print("next: " + (", ".join(nxt) if nxt else "nothing can start"))
    return 0


def cmd_verify(c: Ctx, a) -> int:
    problems, notes = [], []
    branch = git(c, "branch", "--show-current").strip()
    if branch != c.state["branch"]:
        problems.append(f"branch is {branch}, expected {c.state['branch']}")
    for rid, s in c.state["items"].items():
        if s.get("status") == "done":
            sha = s.get("commit", "")
            r = subprocess.run(["git", "merge-base", "--is-ancestor", sha, "HEAD"], cwd=c.base, capture_output=True)
            if not sha or r.returncode != 0:
                problems.append(f"{rid}: commit {sha or '(none)'} is not in the history of HEAD")
    dirty = [p for p in dirty_paths(c) if p not in ALWAYS_DIRTY_OK]
    if dirty:
        allowed = [p for rid in c.state["active"] for p in allowed_paths(c, rid)]
        outside = [p for p in dirty if not matches(p, allowed)]
        if not c.state["active"]:
            problems.append("changes with no active item: " + ", ".join(dirty[:20]) + (" ..." if len(dirty) > 20 else ""))
        elif outside:
            problems.append("changes outside the active items' paths: " + ", ".join(outside[:20]))
        else:
            notes.append(f"{len(dirty)} changed files inside the active items' paths")
    for n in notes:
        print(f"note: {n}")
    for p in problems:
        print(f"PROBLEM: {p}")
    print("verify: " + ("FAIL" if problems else "ok"))
    return 1 if problems else 0


# ---------------------------------------------------------------- commands: one item


def cmd_begin(c: Ctx, a) -> int:
    require_user(a.by)
    if c.state.get("begun"):
        raise SyncError(f"already begun at {c.state['begun']['at']}")
    c.state["begun"] = {"by": "user", "text": a.text, "at": now()}
    c.save()
    c.log(f"begun by the user: \"{a.text}\"")
    print("begun")
    return 0


def cmd_start(c: Ctx, a) -> int:
    item = c.item(a.item)
    if not c.state.get("begun"):
        raise SyncError("the sync has not begun: the user must say start (sync.py begin --by user --text ...)")
    if a.item in c.state["active"]:
        print(f"{a.item} is already active at stage {c.state['active'][a.item]['stage']}: resume it")
        return 0
    if c.status_of(a.item) == "done":
        raise SyncError(f"{a.item} is done")
    shared = [x for x in (a.shared.split(",") if a.shared else item.get("shared", [])) if x]
    why = runnable(c, {**item, "shared": shared})
    if why and why != "blocked":
        raise SyncError(f"{a.item} cannot start: {why}")
    if c.status_of(a.item) == "blocked":
        raise SyncError(f"{a.item} is blocked: sync.py unblock --by user first")
    c.state["active"][a.item] = {"stage": "brief", "loop": 0, "since": now(), "shared": shared,
                                 "baseCommit": git(c, "rev-parse", "HEAD").strip()}
    s = c.st(a.item)
    s.update({"status": "active", "started": now()})
    s.setdefault("tokens", {})
    c.save()
    c.log(f"{a.item} started" + (f" with shared {', '.join(shared)}" if shared else ""))
    print(f"{a.item} active, stage brief" + (f"; shared paths granted: {', '.join(shared)} (runs alone)" if shared else ""))
    return 0


def cmd_grant(c: Ctx, a) -> int:
    """Grant shared paths to an active item (the user's rule of 2026-11-07: a grant replaces the change request)."""
    act = c.active(a.item)
    shared = [x for x in a.shared.split(",") if x]
    hits = shared_overlap(c, a.item, shared)
    if hits:
        raise SyncError(f"{a.item}: the grant overlaps active items: " + "; ".join(hits))
    act["shared"] = sorted(set(act.get("shared", [])) | set(shared))
    c.save()
    c.log(f"{a.item} granted shared paths: {', '.join(shared)}" + (f' ("{a.text}")' if a.text else ""))
    print(f"{a.item} shared paths: {', '.join(act['shared'])}")
    return 0


def read_status(path: Path) -> str:
    if not path.exists():
        return "MISSING"
    m = re.search(r"^status:\s*(\w+)", path.read_text(encoding="utf-8"), re.M)
    return m.group(1).upper() if m else "UNKNOWN"


def cmd_stage(c: Ctx, a) -> int:
    act = c.active(a.item)
    if c.status_of(a.item) != "active":
        raise SyncError(f"{a.item} is {c.status_of(a.item)}")
    i, j = STAGES.index(act["stage"]), STAGES.index(a.stage)
    if j != i + 1:
        raise SyncError(f"stage {act['stage']} cannot move to {a.stage} (order: {' > '.join(STAGES)}; use fail for test > dev)")
    h = c.handoff(a.item)
    if a.stage == "dev" and not (h / "brief.md").exists():
        raise SyncError("write the brief first: sync.py brief " + a.item)
    if a.stage == "test" and read_status(h / "dev.md") != "PASS":
        raise SyncError("dev.md does not say status: pass")
    if a.stage == "docs" and read_status(h / "test.md") != "PASS":
        raise SyncError("test.md does not say status: pass")
    if a.stage == "spec" and read_status(h / "docs.md") != "PASS":
        raise SyncError("docs.md does not say status: pass")
    if a.stage == "restamp" and a.item not in c.state["confirms"]:
        raise SyncError(f"{a.item}: no confirm of the user recorded (sync.py confirm {a.item} --by user --text \"confirm ...\")")
    act.update({"stage": a.stage, "since": now()})
    if a.stage == "review":
        c.st(a.item)["status"] = "waiting_user"
    c.save()
    c.log(f"{a.item} stage {a.stage}")
    print(f"{a.item} stage {a.stage}")
    return 0


def cmd_fail(c: Ctx, a) -> int:
    act = c.active(a.item)
    if act["stage"] != "test":
        raise SyncError(f"fail is for the test stage; {a.item} is at {act['stage']}")
    if act["loop"] >= MAX_LOOPS:
        raise SyncError(f"{a.item} failed after {MAX_LOOPS} fix loops: stash the work and run sync.py block")
    act.update({"stage": "dev", "loop": act["loop"] + 1, "since": now()})
    c.save()
    c.log(f"{a.item} test failed, fix loop {act['loop']}")
    print(f"{a.item} back to dev, loop {act['loop']}/{MAX_LOOPS}")
    return 0


def cmd_confirm(c: Ctx, a) -> int:
    require_user(a.by)
    act = c.active(a.item)
    if act["stage"] != "review":
        raise SyncError(f"{a.item} is at stage {act['stage']}, not review")
    if not a.text.lower().startswith("confirm"):
        raise SyncError("the user's words must start with 'confirm' (route.py counts only those answers)")
    c.state["confirms"][a.item] = {"by": "user", "text": a.text, "at": now()}
    c.st(a.item)["status"] = "active"
    c.save()
    c.log(f"{a.item} confirmed by the user: \"{a.text}\"")
    app = a.app or DEFAULT_APP
    print(f"{a.item} confirmed. Next: sync.py stage {a.item} restamp, then\n"
          f"  python3 tools/parity/restamp.py --app {app} --base {act['baseCommit']} --confirm \"{a.text}\" {a.item}\n"
          f"  (use --no-scope-guard instead of --base while other items are dirty in the tree)")
    return 0


def cmd_done(c: Ctx, a) -> int:
    act = c.active(a.item)
    if act["stage"] != "commit":
        raise SyncError(f"{a.item} is at stage {act['stage']}, not commit")
    if subprocess.run(["git", "cat-file", "-e", f"{a.commit}^{{commit}}"], cwd=c.base, capture_output=True).returncode:
        raise SyncError(f"commit {a.commit} not found")
    sha = git(c, "rev-parse", "--short", a.commit).strip()
    s = c.st(a.item)
    s.update({"status": "done", "commit": sha, "gate": a.gate, "loops": act["loop"], "finished": now()})
    del c.state["active"][a.item]
    c.save()
    c.log(f"{a.item} done {sha}: {a.gate}")
    print(f"{a.item} done ({sha})")
    return 0


def cmd_block(c: Ctx, a) -> int:
    c.active(a.item)
    s = c.st(a.item)
    s.update({"status": "blocked", "reason": a.reason, "stash": a.stash})
    c.save()
    c.log(f"{a.item} blocked: {a.reason}" + (f" (stash {a.stash})" if a.stash else ""))
    print(f"{a.item} blocked")
    return 0


def cmd_unblock(c: Ctx, a) -> int:
    require_user(a.by)
    act = c.active(a.item)
    if c.status_of(a.item) != "blocked":
        raise SyncError(f"{a.item} is not blocked")
    s = c.st(a.item)
    s.update({"status": "active", "unblocked": {"by": "user", "text": a.text, "at": now()}})
    act.update({"stage": "brief", "loop": 0, "since": now()})
    c.save()
    c.log(f"{a.item} unblocked by the user: \"{a.text}\"")
    print(f"{a.item} active again at stage brief (loop 0); the stash stays as it is")
    return 0


def cmd_ask(c: Ctx, a) -> int:
    c.item(a.item)
    qid = f"Q{len(c.state['questions']) + 1}"
    c.state["questions"].append({"id": qid, "item": a.item, "text": a.text, "status": "open", "at": now()})
    c.save()
    c.log(f"{qid} ({a.item}) asked: {a.text}")
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
    raise SyncError(f"unknown question {a.qid}")


def cmd_tokens(c: Ctx, a) -> int:
    c.item(a.item)
    s = c.st(a.item)
    tok = s.setdefault("tokens", {})
    tok[a.agent] = tok.get(a.agent, 0) + a.n
    c.save()
    loop = c.state["active"].get(a.item, {}).get("loop", 0)
    phase = {"dev": "fix", "test": "verify", "docs": "other"}[a.agent]
    note = f"sync {a.item}" + (f" loop {loop}" if loop else "")
    cmd = [sys.executable, str(c.base / LEDGER), "add", "--screen", a.item, "--phase", phase, "--tokens", str(a.n),
           "--agent", f"sync-{a.agent}", "--note", note] + (["--tier", a.model] if a.model else [])
    r = subprocess.run(cmd, cwd=c.base, capture_output=True, text=True)
    if r.returncode:
        print(f"ledger: {r.stderr.strip()}", file=sys.stderr)
    print(f"{a.item} {a.agent} +{a.n} tokens")
    return 0


def cmd_note(c: Ctx, a) -> int:
    c.item(a.item)
    p = c.base / "migration" / "screens" / a.item / "notes.md"
    with p.open("a", encoding="utf-8") as f:
        f.write(f"- {now()} sync: {a.text}\n")
    print(f"noted in {p.relative_to(c.base)}")
    return 0


# ---------------------------------------------------------------- scope, users, brief


def scope_command(c: Ctx, rid: str, base: str | None) -> list[str]:
    act = c.state["active"].get(rid, {})
    allow = list(COMMON_ALLOW) + list(act.get("shared", []))
    for other in c.state["active"]:
        if other != rid:
            allow += own_paths(other)
    cmd = [sys.executable, str(SCOPE_GUARD), "--screen", rid, "--base", base or act.get("baseCommit") or "main"]
    for p in allow:
        cmd += ["--allow", p]
    return cmd


def cmd_scope(c: Ctx, a) -> int:
    cmd = scope_command(c, a.item, a.base)
    print(" ".join(cmd))
    if a.dry_run:
        return 0
    r = subprocess.run(cmd, cwd=c.base, capture_output=True, text=True)
    print((r.stdout + r.stderr).strip())
    return r.returncode


def users_of(c: Ctx, name: str) -> list[str]:
    out = []
    for p in sorted(glob.glob(str(c.base / "migration/screens/*/analysis/manifest.json"))):
        m = load_json(Path(p), {})
        if name in m.get("raw", {}):
            out.append(Path(p).parts[-3])
    return out


def cmd_users(c: Ctx, a) -> int:
    us = users_of(c, a.name)
    print("\n".join(us) if us else "-")
    return 0 if us else 1


def parity_summary(c: Ctx, rid: str, max_diffs: int = 20) -> list[str]:
    L = []
    for p in sorted(glob.glob(str(c.base / "migration" / "screens" / rid / "parity" / "*.json"))):
        d = load_json(Path(p), {})
        counts = d.get("counts") or {}
        pix, calls = d.get("pixel") or {}, d.get("calls") or {}
        n = sum(counts.values()) if isinstance(counts, dict) else 0
        L.append(f"- `{Path(p).name}` ({d.get('at', '?')}): "
                 + (", ".join(f"{k} {v}" for k, v in counts.items()) if counts else "no counts")
                 + f"; pixels {round(100 * (pix.get('ratio') or 0), 2)}%, worst tile {round(100 * (pix.get('maxCell') or 0), 1)}%"
                 + (f"; calls expected {calls.get('expected')} actual {calls.get('actual')}" if calls else "")
                 + f"; exemptions used {len(d.get('exemptionsUsed') or [])}")
        for x in (d.get("diffs") or [])[:max_diffs]:
            if isinstance(x, dict):
                L.append("  - " + "; ".join(f"{k}={str(v)[:120]}" for k, v in x.items() if k in ("kind", "path", "prop", "expected", "actual", "detail", "selector")) or str(x)[:200])
            else:
                L.append("  - " + str(x)[:200])
        if n > max_diffs:
            L.append(f"  - ... {n - max_diffs} more in the file")
    return L or ["- no parity report yet: run route.py parity first"]


def dom_diff(c: Ctx, rid: str, base: str | None, max_lines: int = 60) -> list[str]:
    if not base:
        return ["- (no captureBase recorded: sync.py import --capture-base <rev>)"]
    paths = [f"migration/screens/{rid}/analysis/dom", f"migration/screens/{rid}/analysis/calls.json",
             f"migration/screens/{rid}/analysis/states.json"]
    stat = git(c, "diff", "--stat", base, "--", *paths, check=False).strip()
    L = ["```", stat or "(no change in the captured DOM, calls or states since the previous capture)", "```"]
    if stat:
        body = git(c, "diff", "-U1", base, "--", f"migration/screens/{rid}/analysis/dom", check=False).splitlines()
        body = [ln for ln in body if ln.startswith(("+", "-")) and not ln.startswith(("+++", "---"))]
        L += ["```diff", *[ln[:200] for ln in body[:max_lines]], (f"... {len(body) - max_lines} more lines: git diff {base[:8]} -- {paths[0]}" if len(body) > max_lines else ""), "```"]
    return L


def agents_rules(c: Ctx) -> list[str]:
    text = (c.base / AGENTS_MD).read_text(encoding="utf-8") if (c.base / AGENTS_MD).exists() else ""
    out = []
    for m in re.finditer(r"^(\d+)\. (.*?)(?=^\d+\. |^## |\Z)", text, re.M | re.S):
        if int(m.group(1)) in BRIEF_RULES:
            out.append(f"{m.group(1)}. " + " ".join(m.group(2).split()))
    return out or [f"(rules {', '.join(map(str, BRIEF_RULES))} of {AGENTS_MD}: open the file)"]


def cmd_brief(c: Ctx, a) -> int:
    item = c.item(a.item)
    act = c.active(a.item)
    app = a.app or DEFAULT_APP
    rid, h = a.item, c.handoff(a.item)
    h.mkdir(parents=True, exist_ok=True)
    base = c.catalog.get("captureBase")
    decisions = [f"- {q['id']}: {q['text']} → **{q['answer']}** (user, {q['answeredAt']})"
                 for q in c.state["questions"] if q["item"] == rid and q["status"] == "answered"]
    if act.get("shared"):
        decisions.append(f"- Shared paths granted by the user for this item (replaces the change request of AGENTS.md rule 7): "
                         + ", ".join(f"`{p}`" for p in act["shared"]) + ". No other item runs while this one is active.")
    users = sorted({u for f in item.get("files", []) for u in users_of(c, f)} - {rid})
    L = [f"# Brief: {rid} (class {item['class']}: {CLASSES[item['class']]}; loop {act['loop']}/{MAX_LOOPS})", "",
         "| Field | Value |", "|---|---|",
         f"| Route | `{rid}` (`{app}/UBTConnect/{rid}`) |",
         f"| Dev model | {item.get('devModel', 'opus')} |",
         f"| baseCommit | `{act['baseCommit']}` |",
         f"| Capture base (before the re-capture) | `{base or '-'}` |",
         f"| States with diffs | {', '.join(f'{k}:{v}' for k, v in item.get('states', {}).items()) or '-'} |",
         f"| Kinds | {', '.join(item.get('kinds', [])) or '-'} |",
         f"| Changed TST files | {', '.join(f'`{f}`' for f in item.get('files', [])) or '-'} |",
         f"| Other routes that use those files | {', '.join(users) or '-'} |",
         f"| Handoff folder | `{h.relative_to(c.base)}` |",
         f"| Note | {item.get('note', '')} |", "",
         "## What changed in TST (parity reports of the fresh capture)", "", *parity_summary(c, rid), "",
         "## DOM diff per state (old capture → new capture)", "", *dom_diff(c, rid, base), "",
         "## Decisions for this item", "", *(decisions or ["- none"]), "",
         "## Allowed write paths", "",
         *[f"- `{p}`" for p in own_paths(rid) + list(act.get("shared", []))],
         "- Everything else is out of scope: no `app/src/platform|legacy|lib|styles|vendor`, no `public/UBTConnect/css`, "
         "no `migration/parity-exemptions.json`, no `app/src/mocks/fixtures`, no `openapi.yaml`, no `package.json`. "
         "A needed change there is a `question` in your report.", "",
         "## Rules (migration/AGENTS.md)", "", *[f"- {r}" for r in agents_rules(c)],
         "- Page layout: `app/docs/guides/page-template.md`; patterns: `migration/patterns/P-*.md`; the route spec: "
         f"`migration/screens/{rid}/route-spec.md`; the pack: `migration/screens/{rid}/pack.md`.", "",
         "## Quick checks (developer, before the report)", "", "```",
         "export PATH=$HOME/.nvm/versions/node/v24.21.0/bin:$PATH",
         "npm --prefix app run typecheck",
         "cd app && npx vitest run <the test files of the changed code> && cd ..",
         "cd app && npx eslint <the changed files> && cd ..",
         "npm --prefix app run arch",
         f"python3 tools/pipeline/route.py parity {rid} --app {app}      # every state: 0 unexempted differences",
         "```", "",
         "## Gate (tester)", "", "```",
         f"curl -s -o /dev/null -w '%{{http_code}}' {app}/UBTConnect/HomeFeed   # 200, and lsof -p <pid> -a -d cwd = <root>/app",
         f"python3 tools/sync/sync.py scope {rid}      # computes --base and the --allow list of the items active NOW",
         f"python3 tools/pipeline/route.py parity {rid} --app {app}",
         f"python3 tools/pipeline/consistency_check.py --screen {rid}",
         "npm --prefix app run typecheck && npm --prefix app run arch && (cd app && npx eslint <changed files> && npx vitest run <changed tests>)",
         *( [f"python3 tools/parity/parity_sweep.py --app {app} {' '.join(users)}   # the routes that share the changed blocks"] if act.get("shared") and users else []),
         "```",
         "Diff review: no edit of `migration/parity-exemptions.json`, `app/src/mocks/fixtures/**`, `app/src/api/openapi.yaml`, "
         "`app/public/UBTConnect/css/**`, `app/package.json`; no deleted test; nothing outside the allowed paths; `@origin` kept; no secrets.", ""]
    if act["loop"] > 0 and (h / "test.md").exists():
        t = (h / "test.md").read_text(encoding="utf-8")
        m = re.search(r"## Result.*?(?=^## |\Z)", t, re.S | re.M)
        L += [f"## Fix loop {act['loop']}: the last test result", "", (m.group(0).strip() if m else t[:2000]), ""]
    tpl = c.base / HANDOFF_TEMPLATE
    L += ["## Report", "", tpl.read_text(encoding="utf-8").strip() if tpl.exists() else f"(template missing: {HANDOFF_TEMPLATE})", ""]
    (h / "brief.md").write_text("\n".join(L), encoding="utf-8")
    c.log(f"{rid} brief written (loop {act['loop']})")
    print(f"{h.relative_to(c.base) / 'brief.md'}")
    return 0


def cmd_report(c: Ctx, a) -> int:
    done = [i for i in c.items if c.status_of(i["id"]) == "done"]
    print(f"items {len(c.items)}, done {len(done)}, active {len(c.state['active'])}, "
          f"blocked {sum(1 for i in c.items if c.status_of(i['id']) == 'blocked')}, "
          f"open questions {sum(1 for q in c.state['questions'] if q['status'] == 'open')}")
    tot = {"dev": 0, "test": 0, "docs": 0}
    for i in c.items:
        for k, v in c.st(i["id"]).get("tokens", {}).items():
            tot[k] = tot.get(k, 0) + v
    print("tokens: " + ", ".join(f"{k} {v:,}" for k, v in tot.items()) + f", total {sum(tot.values()):,}")
    for i in done:
        s = c.st(i["id"])
        print(f"- {i['id']} ({i['class']}): {s.get('commit')} loops {s.get('loops')} tokens {sum(s.get('tokens', {}).values()):,}: {s.get('gate', '')}")
    return 0


# ---------------------------------------------------------------- main


def build_parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    sp = ap.add_subparsers(dest="cmd", required=True)
    sp.add_parser("status").set_defaults(f=cmd_status)
    sp.add_parser("verify").set_defaults(f=cmd_verify)
    sp.add_parser("report").set_defaults(f=cmd_report)
    p = sp.add_parser("next"); p.add_argument("--class", dest="cls"); p.add_argument("--n", type=int, default=10); p.set_defaults(f=cmd_next)
    p = sp.add_parser("import"); p.add_argument("--triage", required=True); p.add_argument("--capture-base"); p.add_argument("--drift"); p.set_defaults(f=cmd_import)
    p = sp.add_parser("begin"); p.add_argument("--by", required=True); p.add_argument("--text", required=True); p.set_defaults(f=cmd_begin)
    p = sp.add_parser("start"); p.add_argument("item"); p.add_argument("--shared"); p.set_defaults(f=cmd_start)
    p = sp.add_parser("brief"); p.add_argument("item"); p.add_argument("--app"); p.set_defaults(f=cmd_brief)
    p = sp.add_parser("grant"); p.add_argument("item"); p.add_argument("--shared", required=True); p.add_argument("--text"); p.set_defaults(f=cmd_grant)
    p = sp.add_parser("stage"); p.add_argument("item"); p.add_argument("stage", choices=STAGES[1:]); p.set_defaults(f=cmd_stage)
    p = sp.add_parser("fail"); p.add_argument("item"); p.set_defaults(f=cmd_fail)
    p = sp.add_parser("block"); p.add_argument("item"); p.add_argument("--reason", required=True); p.add_argument("--stash"); p.set_defaults(f=cmd_block)
    p = sp.add_parser("unblock"); p.add_argument("item"); p.add_argument("--by", required=True); p.add_argument("--text", required=True); p.set_defaults(f=cmd_unblock)
    p = sp.add_parser("scope"); p.add_argument("item"); p.add_argument("--base"); p.add_argument("--dry-run", action="store_true"); p.set_defaults(f=cmd_scope)
    p = sp.add_parser("users"); p.add_argument("name"); p.set_defaults(f=cmd_users)
    p = sp.add_parser("ask"); p.add_argument("item"); p.add_argument("--text", required=True); p.set_defaults(f=cmd_ask)
    p = sp.add_parser("answer"); p.add_argument("qid"); p.add_argument("--by", required=True); p.add_argument("--text", required=True); p.set_defaults(f=cmd_answer)
    p = sp.add_parser("confirm"); p.add_argument("item"); p.add_argument("--by", required=True); p.add_argument("--text", required=True); p.add_argument("--app"); p.set_defaults(f=cmd_confirm)
    p = sp.add_parser("done"); p.add_argument("item"); p.add_argument("--commit", required=True); p.add_argument("--gate", required=True); p.set_defaults(f=cmd_done)
    p = sp.add_parser("tokens"); p.add_argument("item"); p.add_argument("--agent", required=True, choices=["dev", "test", "docs"]); p.add_argument("--n", type=int, required=True); p.add_argument("--model"); p.set_defaults(f=cmd_tokens)
    p = sp.add_parser("note"); p.add_argument("item"); p.add_argument("--text", required=True); p.set_defaults(f=cmd_note)
    return ap


def main(argv=None) -> int:
    a = build_parser().parse_args(argv)
    try:
        c = Ctx(root())
        return a.f(c, a)
    except SyncError as e:
        print(f"sync.py: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
