#!/usr/bin/env python3
"""
route.py: lifecycle of one route through the migration, so a run can be stopped and restarted safely.

  plan                       what a run will do: finished routes skipped, interrupted ones reset, open questions first
  start  <S> [--owner X] [--recapture] [--force]
                             begin a route. A finished route is refused (skip it). An interrupted or failed route is
                             reset first: its partial code and generated files are deleted, then it starts from scratch.
  step   <S> capture|spec|build|parity|review     checkpoint (status shown on the board)
  spec-done <S>              the route spec is complete: check it, then record it with the hashes of its inputs
                             (spec.complete.json). A later reset KEEPS a spec recorded this way while its inputs are
                             unchanged, so an interruption during build or parity does not cost a new spec.
  fail   <S> --reason "..."  mark as failed (network, crash, gate failure); the next run resets and rebuilds it
  reset  <S> [--recapture]   delete partial work of a route (see RESET below)
  ask    <S> --kind fact|decision --topic T --question Q --evidence E [--mcp "what the OutSystems MCP said"]
             [--options "A|B|C"] [--recommend A] [--blocking]
                             record something unclear. Facts may be answered by the OutSystems MCP; decisions only by the user.
  no-capture <S> --by user --reason "..."   the user decided this route is not captured (gates skip capture/parity)
  answer <S> <Qid> --by user|mcp|code --answer "..."   (code = the TST compiled code or capture settles it)
  questions [<S>] [--open]   list questions (all routes or one)
  ready  <S>                 build is done: run the build gates, save a checkpoint of the route, set status `review`
                             (waiting for the USER to test) and create the review question: decisions to confirm, feedback
                             fixed since the last review, feature flags, how to test. Alias: review.
  feedback <S> --kind bug|todo|question --text "..." --by user
                             something the user found while testing; status becomes `fixing`
  fixed  <S> <Fn> --note "what changed / the answer"   mark a feedback item done (it is re-checked at the next ready)
  restore <S>                put the route back to its last review checkpoint (used when fixing was interrupted)
  finish <S> [--no-scope-guard] [--base main]
                             only after the user tested and answered the latest review "confirm": gates again, then status
                             built (= finished), feedback closed, files fingerprinted
  parity <S> --app http://localhost:5173 [--state X] [--node node]
                             run parity_check.cjs on every captured state (analysis/states.json: viewport, html/body
                             classes, flag variant, steps, mock scenario) with call parity, and stamp each report with a
                             fingerprint of what it checked. The gates accept only full reports whose fingerprint is current.
  status <S>                 run state, questions, gates

Lifecycle: todo → capture → spec → building → review (user tests) ⇄ fixing → built.
A route in `review` is never reset by a new run: it waits for the user. A route interrupted while `fixing` is restored to
its last review checkpoint (feedback items it was working on go back to open); use `start --from-scratch` to discard it.

Starting and finishing require the architecture and stack confirmed by the user (stack.py), and finishing requires
consistency_check.py to pass for the route.

RESET deletes:  app/src/screens/<S>/, migration/screens/<S>/{parity/, run.json, finished.json, checkpoint/},
                open change requests raised by this route (migration/change-requests/CR-<S>-*.md)
       and, with --recapture or when the capture is incomplete: capture/ and analysis/.
       pack.md, route-spec.md and spec.complete.json are KEPT when the spec was recorded with `spec-done` and its inputs
       are unchanged (same capture analysis, same canonical context pack, same feature-flag decisions, spec not edited
       since); otherwise they are deleted too. --from-scratch always deletes them.
       It KEEPS questions.json (answers already given by the user or the MCP are not asked again), notes.md
       (a reset line is appended), migration/knowledge/ and everything outside the route.

Files per route (migration/screens/<S>/): run.json (current run), questions.json + questions.md, feedback.json + feedback.md,
checkpoint/ (code, spec and parity at the last ready), route-spec.md, spec.complete.json (spec-done record),
notes.md, finished.json (fingerprint written by finish), capture/.complete (written by batch_capture.cjs).
"""
import argparse, datetime, glob, hashlib, json, os, re, shutil, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from board import read_board, write_board, append_note, FINISHED, INTERRUPTED  # noqa: E402

TEMPLATE_TOKENS = ["<Screen>", "<path>", "<decision>", "<date>", "<list>", "<what is unclear>", "<w×h>", "<params or none>",
                   "<one line>", "<Module.Flow.Screen.mvc.js>", "<Module › Flow › Block>", "<dev/tst>"]
SPEC_SECTIONS = ["Summary", "Patterns used", "Unclear points", "Decisions to confirm"]   # headings, optionally numbered ("## 14. Unclear points")


def now():
    return datetime.datetime.now().isoformat(timespec="seconds")


class Ctx:
    def __init__(self, a):
        self.mig = a.migration_dir
        self.app = a.app_dir
        self.board_path = os.path.join(self.mig, "board.md")
        self.meta = json.load(open(os.path.join(self.mig, "board.meta.json"), encoding="utf-8"))
        self.rows = read_board(self.board_path)

    def save(self):
        write_board(self.board_path, self.rows, self.meta.get("app", "App"))

    def rdir(self, s):
        return os.path.join(self.mig, "screens", s)

    def row(self, s):
        if s not in self.rows:
            sys.exit(f"unknown route/screen {s}")
        return self.rows[s]

    def set_status(self, s, st):
        self.rows[s]["Status"] = st
        self.save()


# ------------------------------------------------------------------ questions
def qpath(c, s):
    return os.path.join(c.rdir(s), "questions.json")


def load_q(c, s):
    try:
        return json.load(open(qpath(c, s), encoding="utf-8"))
    except (OSError, ValueError):
        return []


def save_q(c, s, qs):
    os.makedirs(c.rdir(s), exist_ok=True)
    json.dump(qs, open(qpath(c, s), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    md = [f"# Questions: {s}", "", "Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.", ""]
    for q in qs:
        md.append(f"## {q['id']} [{q['kind']}] {q['topic']} ({q['status']}{', blocking' if q.get('blocking') else ''})")
        md.append(f"- Question: {q['question']}")
        if q.get("evidence"):
            md.append(f"- Evidence: {q['evidence']}")
        if q.get("mcp"):
            md.append(f"- OutSystems MCP: {q['mcp']}")
        if q.get("options"):
            md.append("- Options: " + " | ".join(q["options"]) + (f" (recommended: {q['recommend']})" if q.get("recommend") else ""))
        if q["status"] == "answered":
            md.append(f"- Answer ({q['answeredBy']}, {q['answeredAt']}): {q['answer']}")
        md.append("")
    open(os.path.join(c.rdir(s), "questions.md"), "w", encoding="utf-8").write("\n".join(md))


def open_questions(c, s):
    return [q for q in load_q(c, s) if q["status"] == "open"]


# ------------------------------------------------------------------ feedback from the user's tests
def load_f(c, s):
    try:
        return json.load(open(os.path.join(c.rdir(s), "feedback.json"), encoding="utf-8"))
    except (OSError, ValueError):
        return []


def save_f(c, s, fs):
    os.makedirs(c.rdir(s), exist_ok=True)
    json.dump(fs, open(os.path.join(c.rdir(s), "feedback.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    md = [f"# Feedback: {s}", "", "Found by the user while testing. open → fixed → in-review → closed (at finish).", ""]
    for f in fs:
        md += [f"## {f['id']} [{f['kind']}] {f['status']}", f"- Reported {f['at']}: {f['text']}"]
        if f.get("note"):
            md.append(f"- Done {f.get('fixedAt', '')}: {f['note']}")
        md.append("")
    open(os.path.join(c.rdir(s), "feedback.md"), "w", encoding="utf-8").write("\n".join(md))


# ------------------------------------------------------------------ checkpoint at each review
def cp_dir(c, s):
    return os.path.join(c.rdir(s), "checkpoint")


def make_checkpoint(c, s, round_no):
    d = cp_dir(c, s)
    if os.path.isdir(d):
        shutil.rmtree(d)
    os.makedirs(d)
    code = os.path.join(c.app, "src", "screens", s)
    if os.path.isdir(code):
        shutil.copytree(code, os.path.join(d, "code"))
    for x in ("route-spec.md", SPEC_DONE, "parity"):
        src = os.path.join(c.rdir(s), x)
        if os.path.isdir(src):
            shutil.copytree(src, os.path.join(d, x))
        elif os.path.exists(src):
            shutil.copy2(src, os.path.join(d, x))
    json.dump({"round": round_no, "at": now()}, open(os.path.join(d, "checkpoint.json"), "w"))


def restore_checkpoint(c, s):
    d = cp_dir(c, s)
    if not os.path.isdir(d):
        return False
    code = os.path.join(c.app, "src", "screens", s)
    if os.path.isdir(code):
        shutil.rmtree(code)
    if os.path.isdir(os.path.join(d, "code")):
        shutil.copytree(os.path.join(d, "code"), code)
    for x in ("route-spec.md", SPEC_DONE, "parity"):
        tgt, src = os.path.join(c.rdir(s), x), os.path.join(d, x)
        if os.path.isdir(tgt):
            shutil.rmtree(tgt)
        elif os.path.exists(tgt):
            os.remove(tgt)
        if os.path.isdir(src):
            shutil.copytree(src, tgt)
        elif os.path.exists(src):
            shutil.copy2(src, tgt)
    fs = load_f(c, s)
    for f in fs:
        if f["status"] == "fixed":
            f.update({"status": "open", "note": f.get("note", "") + " (undone: fixing was interrupted)"})
    save_f(c, s, fs)
    return True


# ------------------------------------------------------------------ run state
def run_path(c, s):
    return os.path.join(c.rdir(s), "run.json")


def no_capture(c, s):
    """The user decided this route is not captured (e.g. an uncapturable state); built from the compiled code only.
    Recorded with `route.py no-capture <S> --by user --reason ...`. The gates then skip capture and parity."""
    f = os.path.join(c.rdir(s), "no-capture.json")
    try:
        rec = json.load(open(f, encoding="utf-8"))
    except (OSError, ValueError):
        return None
    return rec if rec.get("by") == "user" else None


def cmd_no_capture(c, a):
    if a.by != "user":
        sys.exit("only the user decides that a route is not captured (--by user)")
    os.makedirs(c.rdir(a.screen), exist_ok=True)
    rec = {"by": "user", "reason": a.reason, "at": now()}
    json.dump(rec, open(os.path.join(c.rdir(a.screen), "no-capture.json"), "w", encoding="utf-8"), indent=1)
    print(f"{a.screen}: not captured (user decision). Gates skip capture and parity; the user reviews by hand.")


def capture_ok(c, s):
    """Complete = batch_capture wrote capture/.complete, or (captures made before route.py existed) the default UI snapshot,
    a runtime capture and the analysis are all present. A route the user decided not to capture counts as complete."""
    if no_capture(c, s):
        return True
    d = c.rdir(s)
    if not os.path.exists(os.path.join(d, "analysis", "facts.json")):
        return False
    if os.path.exists(os.path.join(d, "capture", ".complete")):
        return True
    cap = os.path.join(d, "capture")
    return bool(glob.glob(os.path.join(cap, "capture-*-default.json"))) and bool(glob.glob(os.path.join(cap, "runtime-*.json")))


def fingerprint(c, s):
    files = {}
    root = os.path.join(c.app, "src", "screens", s)
    for p in sorted(glob.glob(os.path.join(root, "**", "*"), recursive=True)):
        if os.path.isfile(p):
            files[os.path.relpath(p, c.app)] = hashlib.sha256(open(p, "rb").read()).hexdigest()[:16]
    return files


def finished_state(c, s):
    """'finished', 'modified' (finished but files changed since), or None."""
    if c.rows[s]["Status"] not in FINISHED:
        return None
    try:
        f = json.load(open(os.path.join(c.rdir(s), "finished.json"), encoding="utf-8"))
    except (OSError, ValueError):
        return "finished"  # finished before route.py was used (imported status)
    return "finished" if f.get("files") == fingerprint(c, s) else "modified"


# ------------------------------------------------------------------ commands
# ------------------------------------------------------------------ spec reuse across resets
SPEC_DONE = "spec.complete.json"


def sha_text(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]


def sha_file(p):
    try:
        return hashlib.sha256(open(p, "rb").read()).hexdigest()[:16]
    except OSError:
        return None


def sha_tree(d):
    if not os.path.isdir(d):
        return None
    h = hashlib.sha256()
    for p in sorted(glob.glob(os.path.join(d, "**", "*"), recursive=True)):
        if os.path.isfile(p):
            h.update(os.path.relpath(p, d).encode("utf-8"))
            h.update(open(p, "rb").read())
    return h.hexdigest()[:16]


def canonical_pack_digest(c, s):
    """Digest of the context pack generated with default settings, minus the volatile status field.
    It changes when anything the route spec depends on changes: analysis, catalog (block built or not),
    stack and patterns digest, cached MCP answers, route flags. None when the pack cannot be generated."""
    import tempfile
    an = os.path.join(c.rdir(s), "analysis")
    if not os.path.exists(os.path.join(an, "facts.json")):
        return None
    fd, out = tempfile.mkstemp(suffix=".md")
    os.close(fd)
    try:
        r = subprocess.run([sys.executable, os.path.join(os.path.dirname(os.path.abspath(__file__)), "context_pack.py"),
                            "--screen", s, "--analysis", an, "--catalog", os.path.join(c.mig, "catalog"),
                            "--board-dir", c.mig, "--out", out], capture_output=True, text=True)
        if r.returncode:
            return None
        text = open(out, encoding="utf-8").read()
        return sha_text(re.sub(r"; status: [^\n]*", "", text))
    finally:
        os.remove(out)


def flags_digest(c, s):
    try:
        from flags import route_flags
        return sha_text(json.dumps(route_flags(c.mig, s) or {}, sort_keys=True))
    except ImportError:
        return None


def spec_inputs(c, s):
    inp = {"analysis": sha_tree(os.path.join(c.rdir(s), "analysis")), "flags": flags_digest(c, s),
           "pack": canonical_pack_digest(c, s)}
    if inp["pack"] is None:  # pack cannot be generated here: fall back to coarser inputs (more invalidations, never fewer)
        inp["catalog"] = sha_tree(os.path.join(c.mig, "catalog"))
        inp["stack"] = sha_file(os.path.join(c.mig, "stack.json"))
    return inp


def load_spec_done(c, s):
    try:
        return json.load(open(os.path.join(c.rdir(s), SPEC_DONE), encoding="utf-8"))
    except (OSError, ValueError):
        return None


def spec_reuse_problems(c, s, deep=True):
    """Why the recorded spec cannot be kept ([] = it can). deep=False skips regenerating the pack (for plan)."""
    rec = load_spec_done(c, s)
    if not rec:
        return ["no spec-done record"]
    p = os.path.join(c.rdir(s), "route-spec.md")
    if sha_file(p) != rec.get("spec"):
        return ["route-spec.md missing or edited after spec-done"]
    if not capture_ok(c, s):
        return ["capture incomplete"]
    now_in = spec_inputs(c, s) if deep else {"analysis": sha_tree(os.path.join(c.rdir(s), "analysis"))}
    return [f"{k} changed since spec-done" for k, v in now_in.items() if rec.get("inputs", {}).get(k) != v]


def answered_since_spec(c, s):
    rec = load_spec_done(c, s) or {}
    seen = set(rec.get("answered", []))
    return [q["id"] for q in load_q(c, s) if q["status"] == "answered" and q["kind"] != "review" and q["id"] not in seen]


def do_reset(c, s, recapture=False, why="reset", keep_spec=True):
    d = c.rdir(s)
    removed = []
    kept_spec = keep_spec and not recapture and not spec_reuse_problems(c, s)
    gen = ("parity", "run.json", "finished.json", "checkpoint") + (() if kept_spec else ("pack.md", "route-spec.md", SPEC_DONE))
    targets = [os.path.join(c.app, "src", "screens", s)] + [os.path.join(d, x) for x in gen]
    targets += glob.glob(os.path.join(c.mig, "change-requests", f"CR-{s}-*.md"))
    if recapture or not capture_ok(c, s):
        targets += [os.path.join(d, "capture"), os.path.join(d, "analysis")]
    for t in targets:
        if t.endswith(".md") and "change-requests" in t:
            if re.search(r"^- Status:\s*(applied|closed)", open(t, encoding="utf-8").read(), re.M):
                continue  # already applied by the foundation owner: keep the record
        if os.path.isdir(t):
            shutil.rmtree(t); removed.append(os.path.relpath(t))
        elif os.path.exists(t):
            os.remove(t); removed.append(os.path.relpath(t))
    kept = "questions.json, feedback.json, notes" + (", route-spec.md and pack.md (spec-done, inputs unchanged)" if kept_spec else "")
    append_note(os.path.join(c.mig, "screens"), s, f"- {now()} {why}: removed {', '.join(removed) or 'nothing'}; kept {kept}")
    c.set_status(s, "todo")
    return removed


def cmd_plan(c, a):
    groups = {"skip (finished)": [], "finished but modified since (check)": [],
              "WAITING FOR YOUR TEST (review: test, then confirm or give feedback)": [], "fixing your feedback (resume from checkpoint)": [],
              "answer open questions first": [],
              "reset then rebuild (interrupted/failed)": [], "to build": [], "waiting for foundation (tier wait)": [],
              "needs a scope decision": []}
    for s, r in c.rows.items():
        if r["Decision"] == "skip":
            continue
        if r["Decision"] != "build":
            groups["needs a scope decision"].append(s); continue
        fs = finished_state(c, s)
        if fs == "finished":
            groups["skip (finished)"].append(s); continue
        if fs == "modified":
            groups["finished but modified since (check)"].append(s); continue
        if r["Status"] == "review":
            groups["WAITING FOR YOUR TEST (review: test, then confirm or give feedback)"].append(s); continue
        if r["Status"] == "fixing" or (r["Status"] == "failed" and os.path.isdir(cp_dir(c, s))):
            nf = len([f for f in load_f(c, s) if f["status"] in ("open", "fixed")])
            groups["fixing your feedback (resume from checkpoint)"].append(f"{s} ({nf} item(s))"); continue
        oq = open_questions(c, s)
        if oq:
            groups["answer open questions first"].append(f"{s} ({len(oq)}: " + ", ".join(q['id'] for q in oq) + ")")
        if r["Status"] in INTERRUPTED or r["Status"] == "waiting":
            keep = "" if spec_reuse_problems(c, s, deep=False) else ", spec likely kept"
            groups["reset then rebuild (interrupted/failed)"].append(f"{s} [{r['Status']}{keep}]")
        elif r["Tier"] == "wait":
            groups["waiting for foundation (tier wait)"].append(s)
        else:
            groups["to build"].append(s)
    for g, items in groups.items():
        if items:
            print(f"{g}: {len(items)}")
            for x in items:
                print(f"  - {x}")
    try:
        from flags import route_flags
        warn = []
        for s, r in c.rows.items():
            if r["Decision"] == "build" and r["Status"] not in FINISHED:
                fl = route_flags(c.mig, s) or {}
                op = [n for n, f in fl.items() if f["mcp"]["status"] == "open" or f["decision"]["status"] == "open"]
                if fl:
                    warn.append(f"⚠ {s}: {len(fl)} feature flag(s)" + (f", {len(op)} still need an MCP answer or your decision" if op else ""))
        if warn:
            print("feature flags (details: migration/flags.md):")
            for w in warn:
                print("  " + w)
    except ImportError:
        pass


def stack_problems(c):
    p = os.path.join(c.mig, "stack.json")
    if not os.path.exists(p):
        return ["architecture and stack not set up: stack.py init, then confirm every item with the user"]
    st = json.load(open(p, encoding="utf-8"))
    un = [i["key"] for i in st["items"] if i["status"] != "confirmed"]
    return [f"stack items not confirmed by the user: {', '.join(un)}"] if un else []


def cmd_start(c, a):
    s, r = a.screen, c.row(a.screen)
    sp = stack_problems(c)
    if sp and not a.force:
        sys.exit(f"{s}: {sp[0]}. Routes are built only on a confirmed stack.")
    if r["Decision"] != "build":
        sys.exit(f"{s}: decision is '{r['Decision'] or 'undecided'}', not build")
    fs = finished_state(c, s)
    if fs and not a.force:
        sys.exit(f"{s}: already {r['Status']} ({fs}); skipping. Use --force to rebuild it.")
    if r["Status"] == "review" and not a.from_scratch:
        sys.exit(f"{s}: waiting for the user's test. Record what they found with `route.py feedback`, or finish after they confirm.")
    if (r["Status"] == "fixing" or (r["Status"] == "failed" and os.path.isdir(cp_dir(c, s)))) and not a.from_scratch:
        if restore_checkpoint(c, s):
            c.set_status(s, "fixing")
            open_fb = [f["id"] for f in load_f(c, s) if f["status"] == "open"]
            append_note(os.path.join(c.mig, "screens"), s, f"- {now()} fixing interrupted: restored the last review checkpoint")
            print(f"{s}: restored to the last review checkpoint; feedback to fix: {', '.join(open_fb) or 'none'}")
            return
    oq = [q for q in open_questions(c, s) if q.get("blocking") and q["kind"] != "review"]
    if oq and not a.force:
        sys.exit(f"{s}: blocking questions still open ({', '.join(q['id'] for q in oq)}); ask the user first")
    if fs or a.from_scratch or r["Status"] in INTERRUPTED or r["Status"] in ("waiting", "review", "fixing") or os.path.exists(run_path(c, s)) \
            or os.path.isdir(os.path.join(c.app, "src", "screens", s)):
        removed = do_reset(c, s, a.recapture, why=f"reset before start (was {r['Status']})", keep_spec=not a.from_scratch)
        print(f"{s}: reset ({len(removed)} item(s) removed)")
    spec_kept = os.path.exists(os.path.join(c.rdir(s), SPEC_DONE)) and not a.from_scratch and not spec_reuse_problems(c, s)
    run = {"runId": now(), "owner": a.owner or "", "startedAt": now(), "step": "build" if spec_kept else "start",
           "captureReused": capture_ok(c, s), "specReused": spec_kept}
    os.makedirs(c.rdir(s), exist_ok=True)
    json.dump(run, open(run_path(c, s), "w"), indent=1)
    c.rows[s]["Owner"] = a.owner or ""
    c.set_status(s, "building" if spec_kept else ("spec" if run["captureReused"] else "capture"))
    answered = [q for q in load_q(c, s) if q["status"] == "answered"]
    print(f"{s}: started; capture {'reused' if run['captureReused'] else 'needed'}; {len(answered)} earlier answer(s) kept in questions.json")
    if spec_kept:
        new = answered_since_spec(c, s)
        print(f"{s}: route-spec.md and pack.md KEPT (spec-done, inputs unchanged): go straight to the build step; do not rewrite the spec.")
        if new:
            print(f"  answers recorded after spec-done: {', '.join(new)}. Update only the spec parts they touch, then run spec-done again.")


def cmd_step(c, a):
    st = {"capture": "capture", "spec": "spec", "build": "building", "parity": "building", "fix": "fixing"}[a.step]
    try:
        run = json.load(open(run_path(c, a.screen)))
    except OSError:
        sys.exit(f"{a.screen}: not started (route.py start)")
    run["step"], run["stepAt"] = a.step, now()
    json.dump(run, open(run_path(c, a.screen), "w"), indent=1)
    c.set_status(a.screen, st)
    print(f"{a.screen}: {a.step}")


def cmd_fail(c, a):
    p = run_path(c, a.screen)
    run = json.load(open(p)) if os.path.exists(p) else {}
    run.update({"failedAt": now(), "reason": a.reason})
    os.makedirs(c.rdir(a.screen), exist_ok=True)
    json.dump(run, open(p, "w"), indent=1)
    append_note(os.path.join(c.mig, "screens"), a.screen, f"- {now()} FAILED at {run.get('step', '?')}: {a.reason}")
    c.set_status(a.screen, "failed")
    keep = "" if spec_reuse_problems(c, a.screen, deep=False) else "; its recorded spec is kept if its inputs are unchanged"
    print(f"{a.screen}: failed (will be reset and rebuilt on the next run{keep})")


def cmd_reset(c, a):
    print("\n".join(do_reset(c, a.screen, a.recapture, keep_spec=not a.from_scratch)) or "nothing to remove")


def cmd_ask(c, a):
    qs = load_q(c, a.screen)
    q = {"id": f"Q{len(qs) + 1}", "kind": a.kind, "topic": a.topic, "question": a.question, "evidence": a.evidence or "",
         "mcp": a.mcp or "", "options": a.options.split("|") if a.options else [], "recommend": a.recommend or "",
         "blocking": a.blocking, "status": "open", "askedAt": now()}
    if a.kind == "fact" and not a.mcp:
        print("note: a fact question should first go to the OutSystems MCP; record what it said with --mcp")
    qs.append(q)
    save_q(c, a.screen, qs)
    print(f"{a.screen} {q['id']} recorded ({a.kind}{', blocking' if a.blocking else ''})")


def cmd_answer(c, a):
    qs = load_q(c, a.screen)
    q = next((x for x in qs if x["id"] == a.qid), None)
    if not q:
        sys.exit(f"{a.screen}: no question {a.qid}")
    if q["kind"] in ("decision", "review") and a.by != "user":
        sys.exit(f"{a.qid} is a {q['kind']}: only the user can answer it")
    q.update({"status": "answered", "answer": a.answer, "answeredBy": a.by, "answeredAt": now()})
    save_q(c, a.screen, qs)
    if q["kind"] == "review" and not re.match(r"\s*confirm", a.answer, re.I):
        c.set_status(a.screen, "fixing")
        print("not a confirmation: record each thing the user wants with `route.py feedback`, fix it, then `route.py ready` again")
    print(f"{a.screen} {a.qid} answered by {a.by}")


def cmd_questions(c, a):
    for s in ([a.screen] if a.screen else c.rows):
        for q in load_q(c, s):
            if a.open and q["status"] != "open":
                continue
            print(f"{s} {q['id']} [{q['kind']}{'/blocking' if q.get('blocking') else ''}] {q['status']}: {q['topic']}: {q['question']}"
                  + (f"  options: {' | '.join(q['options'])}" if q.get("options") else "")
                  + (f"  → {q['answer']} ({q['answeredBy']})" if q["status"] == "answered" else ""))


def spec_section(text, title):
    title = title.lstrip("# ").strip()
    m = re.search(r"^##\s+(?:\d+[a-z]?\.\s*)?" + re.escape(title) + r"\s*$(.*?)(?=^## |\Z)", text, re.M | re.S | re.I)
    return m.group(1) if m else None


def cmd_ready(c, a):
    s = a.screen
    a.no_scope_guard = getattr(a, "no_scope_guard", False)
    a.base = getattr(a, "base", "main")
    fb = load_f(c, s)
    pending = [f["id"] for f in fb if f["status"] == "open"]
    if pending:
        sys.exit(f"{s}: feedback not fixed yet: {', '.join(pending)} (route.py fixed <S> <Fn> --note ...)")
    problems = build_gates(c, s, a)
    if problems:
        print(f"{s}: not ready for the user's test")
        for p in problems:
            print("  - " + p)
        sys.exit(1)
    sec = spec_section(open(os.path.join(c.rdir(s), "route-spec.md"), encoding="utf-8").read(), "Decisions to confirm") or ""
    items = [l.strip()[2:].strip() for l in sec.splitlines() if l.strip().startswith("- ") and l.strip() != "- none"]
    fixed = [f for f in fb if f["status"] == "fixed"]
    qs = load_q(c, s)
    for q in qs:
        if q["kind"] == "review" and q["status"] == "open":
            q.update({"status": "answered", "answer": "superseded by a newer review", "answeredBy": "user", "answeredAt": now()})
    round_no = 1 + sum(1 for q in qs if q["kind"] == "review" and q.get("answer") != "superseded by a newer review")
    flags_txt = ""
    try:
        from flags import route_flags
        fl = route_flags(c.mig, s) or {}
        flags_txt = "; ".join(f"{n} → {f['decision']['value']}" for n, f in fl.items())
    except ImportError:
        pass
    parts = ["Please test this route and confirm, or tell me what to change."]
    if items:
        parts.append("Decisions to confirm: " + "; ".join(items))
    if fixed:
        parts.append("Fixed since the last review: " + "; ".join(f"{f['id']} {f['text']} → {f['note']}" for f in fixed))
    if flags_txt:
        parts.append("Feature flags: " + flags_txt)
    q = {"id": f"Q{len(qs) + 1}", "kind": "review", "topic": f"review round {round_no}", "question": " ".join(parts),
         "evidence": "route-spec.md, parity reports, feedback.md", "mcp": "", "options": ["confirm", "change (say what)"], "recommend": "",
         "blocking": True, "status": "open", "askedAt": now(), "items": items, "fixed": [f["id"] for f in fixed]}
    qs.append(q)
    save_q(c, s, qs)
    for f in fixed:
        f["status"] = "in-review"
    save_f(c, s, fb)
    make_checkpoint(c, s, round_no)
    c.set_status(s, "review")
    route = c.row(s)["Route"]
    print(f"{s}: ready for your test (review round {round_no}, {q['id']}). Status: review. Checkpoint saved.")
    print(f"  open {route} in the React app; scenarios: ?mock=real | ?mock=empty | ?mock=error (and the ones in mocks.ts)")
    for i in items:
        print(f"  - confirm: {i}")
    for f in fixed:
        print(f"  - re-check {f['id']}: {f['text']} → {f['note']}")
    if flags_txt:
        print(f"  - feature flags: {flags_txt}")


def cmd_feedback(c, a):
    if a.by != "user":
        sys.exit("feedback comes from the user's tests (--by user)")
    fs = load_f(c, a.screen)
    f = {"id": f"F{len(fs) + 1}", "kind": a.kind, "text": a.text, "status": "open", "at": now()}
    fs.append(f)
    save_f(c, a.screen, fs)
    qs = load_q(c, a.screen)
    for q in qs:
        if q["kind"] == "review" and q["status"] == "open":
            q.update({"status": "answered", "answer": f"change: {f['id']} {a.text}", "answeredBy": "user", "answeredAt": now()})
    save_q(c, a.screen, qs)
    c.set_status(a.screen, "fixing")
    print(f"{a.screen} {f['id']} [{a.kind}] recorded; status fixing")


def cmd_fixed(c, a):
    fs = load_f(c, a.screen)
    f = next((x for x in fs if x["id"] == a.fid), None)
    if not f:
        sys.exit(f"{a.screen}: no feedback {a.fid}")
    f.update({"status": "fixed", "note": a.note, "fixedAt": now()})
    save_f(c, a.screen, fs)
    left = [x["id"] for x in fs if x["status"] == "open"]
    print(f"{a.screen} {a.fid} fixed" + (f"; still open: {', '.join(left)}" if left else "; all fixed: run route.py ready for the next review"))


def cmd_restore(c, a):
    if restore_checkpoint(c, a.screen):
        c.set_status(a.screen, "fixing")
        print(f"{a.screen}: restored to the last review checkpoint")
    else:
        print(f"{a.screen}: no checkpoint")


def spec_problems(c, s):
    """Checks on route-spec.md itself (used by spec-done and by the build gates)."""
    p = os.path.join(c.rdir(s), "route-spec.md")
    if not os.path.exists(p):
        return ["route-spec.md missing"]
    problems = []
    t = open(p, encoding="utf-8").read()
    miss = [h for h in SPEC_SECTIONS if not re.search(r"^##\s+(?:\d+[a-z]?\.\s*)?" + re.escape(h) + r"\s*$", t, re.M | re.I)]
    if miss:
        problems.append("route-spec.md lacks sections: " + ", ".join(miss))
    mermaid = "\n".join(re.findall(r"```mermaid\n(.*?)```", t, re.S))
    if re.search(r"\bTODO\b", mermaid):
        problems.append("route-spec.md: a diagram still has TODO")
    left = [x for x in TEMPLATE_TOKENS if x in t]
    if left:
        problems.append("route-spec.md still has template placeholders: " + ", ".join(left))
    return problems


def cmd_spec_done(c, a):
    s = a.screen
    problems = spec_problems(c, s)
    blocking = [q["id"] for q in open_questions(c, s) if q.get("blocking") and q["kind"] != "review"]
    if blocking:
        problems.append("blocking questions still open: " + ", ".join(blocking))
    if not capture_ok(c, s):
        problems.append("capture incomplete")
    if problems:
        print(f"{s}: spec not recorded")
        for x in problems:
            print("  - " + x)
        sys.exit(1)
    inputs = spec_inputs(c, s)
    rec = {"at": now(), "spec": sha_file(os.path.join(c.rdir(s), "route-spec.md")), "inputs": inputs,
           "answered": [q["id"] for q in load_q(c, s) if q["status"] == "answered" and q["kind"] != "review"]}
    json.dump(rec, open(os.path.join(c.rdir(s), SPEC_DONE), "w"), indent=1)
    append_note(os.path.join(c.mig, "screens"), s, f"- {now()} spec-done ({len(rec['answered'])} answer(s) covered)")
    print(f"{s}: spec recorded" + ("" if inputs.get("pack") else " (pack could not be generated here: coarser inputs used)")
          + "; a reset keeps it while its inputs are unchanged")


# ------------------------------------------------------------------ parity runs and their fingerprint
PARITY_SHARED = ("src/shell", "src/shared", "src/lib", "src/components", "src/mocks", "src/app", "public/UBTConnect", "index.html")


def load_states(c, s):
    """analysis/states.json (batch_capture + analyze_capture v3.7); falls back to dom/*.raw.html, then dom/*.html (old captures)."""
    an = os.path.join(c.rdir(s), "analysis")
    try:
        st = json.load(open(os.path.join(an, "states.json"), encoding="utf-8"))
    except (OSError, ValueError):
        st = {}
    for p in glob.glob(os.path.join(an, "dom", "*.html")):
        name = os.path.basename(p)
        label = name[:-9] if name.endswith(".raw.html") else name[:-5]
        st.setdefault(label, {})
    return st


def parity_fingerprint(c, s, state):
    """Hash of everything a parity report depends on: route code, shell/shared/lib/mocks, legacy CSS, exemptions,
    the captured reference of the state, its metadata and the call reference. Any change makes the report stale."""
    h = hashlib.sha256()
    parts = [os.path.join(c.app, "src", "screens", s)] + [os.path.join(c.app, x) for x in PARITY_SHARED]
    an = os.path.join(c.rdir(s), "analysis")
    parts += [os.path.join(c.mig, "parity-exemptions.json"), os.path.join(an, "dom", f"{state}.raw.html"), os.path.join(an, "calls.json")]
    for p in parts:
        h.update(p.encode("utf-8"))
        if os.path.isdir(p):
            h.update((sha_tree(p) or "").encode("utf-8"))
        else:
            h.update((sha_file(p) or "-").encode("utf-8"))
    h.update(json.dumps(load_states(c, s).get(state, {}), sort_keys=True).encode("utf-8"))
    return h.hexdigest()[:20]


def route_url(c, s, meta):
    """The clone URL of a state: the captured route, plus the plan's `cloneQuery` (screen, else defaults) so the clone
    starts in the same app state as the capture (e.g. a mock session switch)."""
    route, extra = meta.get("route"), ""
    plan = os.path.join(c.mig, "capture-plan.json")
    try:
        p = json.load(open(plan, encoding="utf-8"))
        extra = (p.get("defaults") or {}).get("cloneQuery", "")
        for sc in p.get("screens", []):
            if sc.get("screen") == s:
                route = route or sc["route"]
                extra = sc.get("cloneQuery", extra)
    except (OSError, ValueError):
        pass
    route = route or c.rows[s].get("Route", "").strip("`") or f"/{s}"
    return route + (("&" if "?" in route else "?") + extra if extra else "")


def plan_scenarios(c, s, key="scenarios"):
    """capture-plan.json screen entry `scenarios` ({state: mock scenario}): the clone's mock scenario for a state when the
    captured account's data differs from the default mock (e.g. Notes: the test user had no notes → `empty`)."""
    try:
        for sc in json.load(open(os.path.join(c.mig, "capture-plan.json"), encoding="utf-8")).get("screens", []):
            if sc.get("screen") == s:
                return sc.get(key) or {}
    except (OSError, ValueError):
        pass
    return {}


def cmd_parity(c, a):
    s = a.screen
    states = load_states(c, s)
    if not states:
        sys.exit(f"{s}: no captured states (analysis/dom). Capture first.")
    an = os.path.join(c.rdir(s), "analysis")
    ex = {}
    exf = os.path.join(c.mig, "parity-exemptions.json")
    if os.path.exists(exf):
        ex = json.load(open(exf, encoding="utf-8"))
    script = os.path.join(os.path.dirname(os.path.abspath(__file__)), "parity_check.cjs")
    bad = 0
    for st, meta in sorted(states.items()):
        if a.state and st != a.state:
            continue
        if st in ex.get("ignoreStates", {}):
            print(f"{st}: exempt ({ex['ignoreStates'][st]}): the user checks it")
            continue
        raw = os.path.join(an, "dom", f"{st}.raw.html")
        if not os.path.exists(raw):
            print(f"{st}: no raw DOM (dom/{st}.raw.html). Re-run analyze_capture.py (v3.7) on the capture: the pretty DOM is not a valid reference")
            bad += 1
            continue
        cmd = [a.node, script, "--app", a.app, "--route", route_url(c, s, meta), "--expect", raw, "--state", st,
               "--out", os.path.join(c.rdir(s), "parity", f"{st}.json"), "--fingerprint", parity_fingerprint(c, s, st)]
        if os.path.exists(os.path.join(an, "states.json")):
            cmd += ["--states", os.path.join(an, "states.json")]
        scenario = plan_scenarios(c, s).get(st)   # capture-plan `scenarios`: a state's mock scenario chosen by the user
        if scenario:
            cmd += ["--mock", scenario]
        latency = plan_scenarios(c, s, "latencies").get(st)   # capture-plan `latencies`: mock answer delay (ms) of a state
        if latency is not None:
            cmd += ["--latency", str(latency)]
        settle = plan_scenarios(c, s, "settles").get(st)   # capture-plan `settles`: wait (ms) before the snapshot of a state
        if settle is not None:
            cmd += ["--settle", str(settle)]
        if os.path.exists(os.path.join(an, "calls.json")):
            cmd += ["--calls", os.path.join(an, "calls.json")]
        if os.path.exists(exf):
            cmd += ["--exemptions", exf]
        if a.wait_for:
            cmd += ["--waitFor", a.wait_for]
        r = subprocess.run(cmd, capture_output=True, text=True)
        print((r.stdout or r.stderr).rstrip())
        bad += r.returncode != 0
    print(f"{s}: parity {'clean' if not bad else f'{bad} state(s) with differences or errors'}; reports in migration/screens/{s}/parity/")
    sys.exit(1 if bad else 0)


def parity_problems(c, s):
    problems = []
    ex = {}
    exf = os.path.join(c.mig, "parity-exemptions.json")
    if os.path.exists(exf):
        ex = json.load(open(exf, encoding="utf-8")).get("ignoreStates", {})
    states = load_states(c, s)
    has_calls = os.path.exists(os.path.join(c.rdir(s), "analysis", "calls.json"))
    for st, meta in sorted(states.items()):
        if st in ex:
            continue
        rp = os.path.join(c.rdir(s), "parity", f"{st}.json")
        if not os.path.exists(rp):
            problems.append(f"parity report missing for state {st} (route.py parity {s} --app <url>)")
            continue
        rep = json.load(open(rp, encoding="utf-8"))
        if rep.get("fingerprint") != parity_fingerprint(c, s, st):
            problems.append(f"parity {st}: report is stale or not made by route.py parity (code, CSS, mocks, exemptions or reference changed since)")
            continue
        if not (rep.get("options") or {}).get("full"):
            problems.append(f"parity {st}: relaxed run (--no-text/--no-style/--no-pixel) is not accepted")
        if has_calls and not meta.get("auto") and not rep.get("calls"):
            problems.append(f"parity {st}: call parity did not run")
        n = sum((rep.get("counts") or {}).values())
        if n:
            problems.append(f"parity {st}: {n} unexempted difference(s)")
    if not states and not no_capture(c, s):
        problems.append("no captured states (analysis/dom) to check against")
    return problems


def mock_coverage_problems(c, s):
    """Every service call the route makes in the capture (any phase, any flag variant) has a mock handler."""
    try:
        ref = json.load(open(os.path.join(c.rdir(s), "analysis", "calls.json"), encoding="utf-8"))
    except (OSError, ValueError):
        return []
    texts = []
    for root in (os.path.join(c.app, "src", "screens", s), os.path.join(c.app, "src", "shell"), os.path.join(c.app, "src", "shared")):
        for p in glob.glob(os.path.join(root, "**", "mocks.ts"), recursive=True):
            texts.append(open(p, encoding="utf-8", errors="ignore").read())
    text = "\n".join(texts)
    fx = os.path.join(c.app, "src", "mocks", "fixtures")
    missing = {}
    for c0 in ref.get("calls", []) + [x for v in (ref.get("variants") or {}).values() for x in v]:
        if c0.get("scope") != "this screen":
            continue
        act, mod = c0["action"], c0["module"]
        # 'Action' or, for a data action / aggregate, 'Owner/Action' (owner in the API path)
        if re.search(rf"['\"`/]{re.escape(act)}['\"`]", text):
            continue
        if f"recordedHandlers('{mod}')" in text.replace('"', "'") and os.path.isdir(os.path.join(fx, mod, act)):
            continue
        missing.setdefault(f"{mod}/{act}", c0.get("phase", "load"))
    return [f"no mock handler for {k} (called in phase {v}): add it to mocks.ts (recordedHandler, statefulHandler or fictional data)"
            for k, v in sorted(missing.items())]


def build_gates(c, s, a):
    """Everything that must hold before the user is asked to test the route."""
    problems = list(stack_problems(c))
    if c.rows[s]["Decision"] != "build":
        problems.append("decision is not build")
    if not os.path.exists(os.path.join(c.app, "src", "screens", s, "index.tsx")):
        problems.append(f"{c.app}/src/screens/{s}/index.tsx missing")
    p = os.path.join(c.rdir(s), "route-spec.md")
    problems += spec_problems(c, s)
    if os.path.exists(p):
        rec = load_spec_done(c, s)
        if not rec:
            problems.append("spec not recorded: route.py spec-done (lets a later reset keep it)")
        elif sha_file(p) != rec.get("spec") or answered_since_spec(c, s):
            problems.append("route-spec.md changed or new answers since spec-done: route.py spec-done again")
    qs = load_q(c, s)
    op = [q["id"] for q in qs if q["status"] == "open" and q["kind"] != "review"]
    if op:
        problems.append("open questions: " + ", ".join(op))
    try:
        from flags import route_flags
        fl = route_flags(c.mig, s)
        if fl is None:
            problems.append("feature flags not scanned (flags.py scan)")
        elif fl:
            for n, f in fl.items():
                if f["mcp"]["status"] == "open":
                    problems.append(f"flag {n}: no OutSystems MCP answer recorded (flags.py mcp)")
                if f["decision"]["status"] == "open":
                    problems.append(f"flag {n}: no decision by the user (flags.py decide)")
            if os.path.exists(p) and not re.search(r"^##\s+(?:\d+[a-z]?\.\s*)?Feature flags\s*$", open(p, encoding="utf-8").read(), re.M | re.I):
                problems.append("route-spec.md lacks a 'Feature flags' section (the route has flags)")
    except ImportError:
        pass
    problems += parity_problems(c, s)
    problems += mock_coverage_problems(c, s)
    try:
        from flags import variant_problems
        problems += variant_problems(c.mig, s, load_states(c, s))
    except ImportError:
        pass
    if os.path.isdir(os.path.join(c.app, "src", "screens", s)) and os.path.exists(os.path.join(c.mig, "stack.json")):
        from consistency_check import check as consistency
        problems += ["consistency " + x for x in consistency(s, c.app, c.mig)]
    if not a.no_scope_guard and os.path.isdir(".git"):
        r = subprocess.run([sys.executable, os.path.join(os.path.dirname(os.path.abspath(__file__)), "scope_guard.py"), "--screen", s,
                            "--base", a.base, "--app-dir", c.app, "--migration-dir", c.mig], capture_output=True, text=True)
        if r.returncode:
            problems.append("scope_guard: " + r.stdout.strip().splitlines()[0])
    return problems


def finish_gates(c, s, a):
    problems = []
    if c.rows[s]["Status"] != "review":
        problems.append(f"status is {c.rows[s]['Status']}: the route must be in review (route.py ready) and tested by the user")
    problems += build_gates(c, s, a)
    qs = load_q(c, s)
    reviews = [q for q in qs if q["kind"] == "review" and q.get("answer") != "superseded by a newer review"]
    if not reviews:
        problems.append("no review yet (route.py ready)")
    elif reviews[-1]["status"] != "answered":
        problems.append(f"the user has not answered review {reviews[-1]['id']} yet: test, then confirm or give feedback")
    elif not re.match(r"\s*confirm", reviews[-1]["answer"], re.I):
        problems.append(f"last review {reviews[-1]['id']} was not a confirmation: {reviews[-1]['answer'][:80]}")
    else:
        last_other = max([q.get("answeredAt", "") for q in qs if q["kind"] != "review" and q["status"] == "answered"] or [""])
        if reviews[-1]["answeredAt"] < last_other:
            problems.append("questions were answered after the last review: run route.py ready again")
    fb = [f["id"] for f in load_f(c, s) if f["status"] in ("open", "fixed")]
    if fb:
        problems.append("feedback not yet reviewed by the user: " + ", ".join(fb))
    return problems


def cmd_finish(c, a):
    s = a.screen
    problems = finish_gates(c, s, a)
    if problems:
        print(f"{s}: NOT finished")
        for p in problems:
            print("  - " + p)
        sys.exit(1)
    json.dump({"finishedAt": now(), "files": fingerprint(c, s)}, open(os.path.join(c.rdir(s), "finished.json"), "w"), indent=1)
    if os.path.exists(run_path(c, s)):
        os.remove(run_path(c, s))
    fb = load_f(c, s)
    for f in fb:
        if f["status"] == "in-review":
            f["status"] = "closed"
    save_f(c, s, fb)
    append_note(os.path.join(c.mig, "screens"), s, f"- {now()} finished: user confirmed, all gates passed")
    c.set_status(s, "built")
    print(f"{s}: built. A re-run will skip it.")


def cmd_status(c, a):
    s, r = a.screen, c.row(a.screen)
    print(f"{s}: decision {r['Decision']}, tier {r['Tier'] or '?'}, status {r['Status']}, finished: {finished_state(c, s) or 'no'}, capture complete: {capture_ok(c, s)}")
    if os.path.exists(run_path(c, s)):
        print("run: " + json.dumps(json.load(open(run_path(c, s)))))
    a.open = False
    cmd_questions(c, a)
    if r["Status"] not in FINISHED:
        a.no_scope_guard, a.base = True, "main"
        pr = build_gates(c, s, a) if r["Status"] != "review" else finish_gates(c, s, a)
        print("gates: " + ("all pass" if not pr else "; ".join(pr)))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--migration-dir", default="migration")
    ap.add_argument("--app-dir", default="app")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("plan")
    p = sub.add_parser("start"); p.add_argument("screen"); p.add_argument("--owner"); p.add_argument("--recapture", action="store_true"); p.add_argument("--force", action="store_true"); p.add_argument("--from-scratch", action="store_true")
    p = sub.add_parser("step"); p.add_argument("screen"); p.add_argument("step", choices=["capture", "spec", "build", "parity", "fix"])
    p = sub.add_parser("spec-done"); p.add_argument("screen")
    p = sub.add_parser("fail"); p.add_argument("screen"); p.add_argument("--reason", required=True)
    p = sub.add_parser("reset"); p.add_argument("screen"); p.add_argument("--recapture", action="store_true"); p.add_argument("--from-scratch", action="store_true")
    p = sub.add_parser("ask"); p.add_argument("screen"); p.add_argument("--kind", choices=["fact", "decision"], required=True)
    p.add_argument("--topic", required=True); p.add_argument("--question", required=True); p.add_argument("--evidence")
    p.add_argument("--mcp"); p.add_argument("--options"); p.add_argument("--recommend"); p.add_argument("--blocking", action="store_true")
    p = sub.add_parser("no-capture", help="record the user's decision that this route is not captured")
    p.add_argument("screen"); p.add_argument("--by", required=True); p.add_argument("--reason", required=True)
    p = sub.add_parser("answer"); p.add_argument("screen"); p.add_argument("qid"); p.add_argument("--by", choices=["user", "mcp", "code"], required=True); p.add_argument("--answer", required=True)
    p = sub.add_parser("questions"); p.add_argument("screen", nargs="?"); p.add_argument("--open", action="store_true")
    for name in ("ready", "review"):
        p = sub.add_parser(name); p.add_argument("screen"); p.add_argument("--no-scope-guard", action="store_true"); p.add_argument("--base", default="main")
    p = sub.add_parser("feedback"); p.add_argument("screen"); p.add_argument("--kind", choices=["bug", "todo", "question"], required=True); p.add_argument("--text", required=True); p.add_argument("--by", required=True)
    p = sub.add_parser("fixed"); p.add_argument("screen"); p.add_argument("fid"); p.add_argument("--note", required=True)
    p = sub.add_parser("restore"); p.add_argument("screen")
    p = sub.add_parser("finish"); p.add_argument("screen"); p.add_argument("--no-scope-guard", action="store_true"); p.add_argument("--base", default="main")
    p = sub.add_parser("status"); p.add_argument("screen")
    p = sub.add_parser("parity"); p.add_argument("screen"); p.add_argument("--app", required=True); p.add_argument("--state")
    p.add_argument("--node", default="node"); p.add_argument("--wait-for")
    a = ap.parse_args()
    c = Ctx(a)
    {"plan": cmd_plan, "start": cmd_start, "step": cmd_step, "spec-done": cmd_spec_done, "fail": cmd_fail, "reset": cmd_reset, "ask": cmd_ask,
     "answer": cmd_answer, "no-capture": cmd_no_capture, "questions": cmd_questions, "ready": cmd_ready, "review": cmd_ready, "feedback": cmd_feedback,
     "fixed": cmd_fixed, "restore": cmd_restore, "finish": cmd_finish, "status": cmd_status, "parity": cmd_parity}[a.cmd](c, a)


if __name__ == "__main__":
    main()
