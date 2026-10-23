"""Parity gate of the architecture refactor (plan v2 §4.2, decision D4). It does not replace `route.py parity`: the frozen
route reports in migration/screens/<R>/parity/ stay as they are, and this tool never writes there.

Run from the project root, with the dev server up (npm --prefix app run dev):
    python3 migration/tools/refactor_parity.py --level strict|visual
        [--all | --routes R1 R2 ... | --changed [--since <commit>]]
        [--ref outsystems|self|both]      default both
        [--record-self [--source-commit <rev>]]   record the self-parity reference from the running app, then stop
        [--report app/docs/refactor/reports/<name>.md]   default <out>/report.md
        [--out migration/refactor-parity/<name>]   output folder, default migration/refactor-parity/last
        [--app http://localhost:5173] [--jobs 4]

Levels (skill checks of parity_check.cjs):
    strict  every check of `route.py parity`: structure, class, attr, text, style, pseudo, layout, position, pixel, call
    visual  skips structure, class and attr (--skip-kinds); style and pseudo only on elements visible on both sides
            (--visible-only); text, layout, position, pixel and call stay on

References:
    outsystems  the capture (analysis/dom/<state>.raw.html), exemptions migration/parity-exemptions.json
    self        migration/refactor-reference/<Route>/<state>/ (tree.json, screenshot.png, calls), recorded by
                --record-self; exemptions migration/refactor-exemptions.json (a list, see migration/tools/README.md)

Outputs: reports and screenshots in <out>/<ref>/<Route>/ (<out> is replaced at each run, not committed; --out lets runs
with other --app URLs go at the same time, each with its own folder, which must be under migration/refactor-parity/);
the Markdown report has one line per route and state and a total per reference. Exit code 1 when a route has a
difference or a state could not run, 0 otherwise. A run that differs is repeated once; when the second try is clean it
counts as clean and the report names it (timing flake). Self runs fix the page clock and finish or pause animations.
Every run (record and both references) passes --preload-fonts: all web fonts start to load at once, so no font arrives
after the first paint of the content (a late icon font moved the "View Guests" button text of EventDetail, P4-F6).
Self runs and the record also pass --hold-third-party: under the fixed clock, Leaflet keeps any tile of an earlier zoom
level that loaded before a zoom change, so third-party requests (map tiles) wait for the page's startup (CountryDetails,
P5-F9).

Reference manifest (migration/refactor-reference/manifest.json): a record of every finished route writes the full-record
data (source commit, date, app, counts, size). A record of some routes keeps that data and adds or replaces one entry per
route in `rerecorded` (route, states, errors, source commit, date, app). The source commit is the commit of the code that
the app at --app serves: --source-commit <rev> when the app runs from another worktree, else HEAD of this tree.
"""
import argparse
import concurrent.futures
import datetime
import json
import os
import re
import shutil
import subprocess
import sys
import time
from types import SimpleNamespace

SK = ".claude/skills/outsystems-screen-spec/scripts"
NODE_BIN = os.path.expanduser("~/.nvm/versions/node/v24.21.0/bin")
RUNS = "migration/refactor-parity/last"
REFERENCE = "migration/refactor-reference"
FIXED_TIME = "2026-03-12T10:30:00+00:00"   # page clock of the self reference runs (screens that show the time)
EXEMPT_SELF = "migration/refactor-exemptions.json"
KINDS = ["structure", "class", "attr", "text", "style", "pseudo", "layout", "position", "pixel", "call"]
VISUAL_SKIP = "structure,class,attr"
# a change under one of these paths can touch every route (current layout and the target layout of plan v2 §2.4)
GLOBAL_PATHS = ("app/src/app/", "app/src/platform/", "app/src/api/client", "app/src/legacy/os", "app/src/styles/",
                "app/src/shell/", "app/src/mocks/", "app/public/", "app/index.html", "app/package.json",
                "app/package-lock.json", "app/vite.config.ts", "app/tsconfig", "migration/parity-exemptions.json", EXEMPT_SELF)

sys.path.insert(0, SK)
import route as skill  # noqa: E402  (the skill's route.py: state loading, URL and plan helpers; main() is guarded)


def resolve_out(path):
    """--out must be a folder under migration/refactor-parity/ (it is deleted at the start of a run); exits otherwise."""
    root = os.path.realpath("migration/refactor-parity")
    full = os.path.realpath(path)
    if not full.startswith(root + os.sep):
        sys.exit(f"--out {path}: must be a folder under migration/refactor-parity/")
    return os.path.relpath(full)


def git(*a):
    return subprocess.run(["git", *a], capture_output=True, text=True).stdout


def finished_routes():
    return [d for d in sorted(os.listdir("migration/screens")) if os.path.exists(f"migration/screens/{d}/finished.json")]


GRAPH = "app/docs/refactor/graph.json"


def load_graph():
    """Forward import graph of dependency-cruiser: {source: [resolved, ...]}, paths relative to app/. It runs
    `npm --prefix app run graph` first when graph.json is missing or older than the newest commit."""
    stale = True
    if os.path.exists(GRAPH):
        newest = (git("log", "-1", "--format=%ct").strip() or "0")
        stale = os.path.getmtime(GRAPH) < int(newest)
    if stale:
        env = dict(os.environ, PATH=NODE_BIN + ":" + os.environ["PATH"])
        r = subprocess.run(["npm", "--prefix", "app", "run", "graph"], capture_output=True, text=True, env=env)
        if r.returncode != 0 and not os.path.exists(GRAPH):
            sys.exit("npm --prefix app run graph failed:\n" + (r.stdout + r.stderr)[-2000:])
    data = json.load(open(GRAPH, encoding="utf-8"))
    return {m["source"]: [d["resolved"] for d in m.get("dependencies", [])] for m in data.get("modules", [])}


def closure(graph, entry):
    """All files reachable from `entry` (the entry included)."""
    seen, todo = set(), [entry]
    while todo:
        f = todo.pop()
        if f in seen:
            continue
        seen.add(f)
        todo.extend(graph.get(f, []))
    return seen


def route_entry(graph, route):
    """src/screens/<R>/index.tsx now, src/pages/<R>/<R>Page.tsx after the moves of plan v2."""
    for e in (f"src/screens/{route}/index.tsx", f"src/pages/{route}/{route}Page.tsx"):
        if e in graph:
            return e
    return None


def changed_routes(since, all_routes, files=None, explain=None):
    """Routes whose import closure holds a changed file. `files` replaces the git diff (--files). Changes in
    GLOBAL_PATHS select all routes. `explain` (a dict) receives {route: [changed files that selected it]}."""
    if files is None:
        files = [f for f in git("diff", "--name-only", since).splitlines() if f]
        files += [f for f in git("ls-files", "--others", "--exclude-standard").splitlines() if f]
    files = [f for f in files if f.startswith(("app/", "migration/parity-exemptions", EXEMPT_SELF)) and not f.startswith("app/docs/")]
    why = {}
    for f in files:
        if f.startswith(GLOBAL_PATHS):
            for r in all_routes:
                why.setdefault(r, []).append(f"{f} (global path)")
    if not why or len(why) < len(all_routes):
        graph = load_graph()
        for r in all_routes:
            entry = route_entry(graph, r)
            cl = closure(graph, entry) if entry else set()
            for f in files:
                if f.startswith("app/") and not f.startswith(GLOBAL_PATHS) and f[4:] in cl:
                    why.setdefault(r, []).append(f)
    if explain is not None:
        explain.update(why)
    return [r for r in all_routes if r in why], f"{len(files)} changed file(s)"


def self_rules(route):
    """migration/refactor-exemptions.json (list) → the `rules` of a parity_check exemptions file, for one route."""
    try:
        entries = json.load(open(EXEMPT_SELF, encoding="utf-8"))
    except (OSError, ValueError):
        return []
    keep = ("id", "pathRegex", "kinds", "detailRegex", "states", "props")
    return [{k: e[k] for k in keep if k in e} for e in entries if not e.get("routes") or route in e["routes"]]


def build_cmd(c, args, route, state, meta, ref, plan):
    """The parity_check.cjs command of one state against one reference (the options of route.py cmd_parity)."""
    an = os.path.join(c.rdir(route), "analysis")
    raw = os.path.join(an, "dom", f"{state}.raw.html")
    cmd = [args.node, os.path.join(SK, "parity_check.cjs"), "--app", args.app, "--route", skill.route_url(c, route, meta),
           "--expect", raw, "--state", state, "--preload-fonts"]
    if os.path.exists(os.path.join(an, "states.json")):
        cmd += ["--states", os.path.join(an, "states.json")]
    if plan["scenario"]:
        cmd += ["--mock", plan["scenario"]]
    if plan["latency"] is not None:
        cmd += ["--latency", str(plan["latency"])]
    if plan["settle"] is not None:
        cmd += ["--settle", str(plan["settle"])]
    refdir = os.path.join(REFERENCE, route, state)
    if args.record_self:
        return cmd + ["--record-self", refdir, "--freeze-animations", "--fixed-time", FIXED_TIME, "--hold-third-party"]
    out = os.path.join(RUNS, ref, route, f"{state}.json")
    cmd += ["--out", out]
    if args.level == "visual":
        cmd += ["--skip-kinds", VISUAL_SKIP, "--visible-only"]
    if ref == "outsystems":
        # exemptions of migration/parity-exemptions.json match the diff path in a pixel detail: name the frozen route.py one
        cmd += ["--diff-ref", f"migration/screens/{route}/parity/{state}.diff.png", "--freeze-animations"]
        if os.path.exists(os.path.join(an, "calls.json")):
            cmd += ["--calls", os.path.join(an, "calls.json")]
        if os.path.exists("migration/parity-exemptions.json"):
            cmd += ["--exemptions", "migration/parity-exemptions.json"]
    else:
        cmd += ["--self-ref", refdir, "--freeze-animations", "--fixed-time", FIXED_TIME, "--hold-third-party"]
        rules = self_rules(route)
        if rules:
            ex = os.path.join(RUNS, ref, route, f"{state}.exemptions.json")
            os.makedirs(os.path.dirname(ex), exist_ok=True)
            json.dump({"rules": rules}, open(ex, "w"), indent=1)
            cmd += ["--exemptions", ex]
    return cmd


def source_commit(rev):
    """Full hash of `rev` (--source-commit, default HEAD); exits when it is not a commit of this repository."""
    sha = git("rev-parse", "--verify", "--quiet", f"{rev}^{{commit}}").strip()
    if not sha:
        sys.exit(f"--source-commit {rev}: not a commit of this repository")
    return sha


def write_manifest(routes, every, results, app, commit, at):
    """migration/refactor-reference/manifest.json after a record (see the module doc). A record of every finished route
    writes the full-record data; a record of some routes keeps the file's data and adds or replaces one `rerecorded`
    entry per route. `results`: {(route, state, ref): (rc, out, secs)}. Returns the manifest."""
    path = os.path.join(REFERENCE, "manifest.json")
    size = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(REFERENCE) for f in fs)
    states = {r: [k for k in results if k[0] == r] for r in routes}
    bad = {r: [k for k in states[r] if results[k][0] != 0] for r in routes}
    if set(routes) >= set(every):
        manifest = {"commit": commit, "at": at, "app": app, "routes": len(routes),
                    "states": sum(len(v) for v in states.values()), "errors": sum(len(v) for v in bad.values()),
                    "bytes": size, "rerecorded": []}
    else:
        try:
            manifest = json.load(open(path, encoding="utf-8"))
        except (OSError, ValueError):
            manifest = {}
        kept = [e for e in manifest.get("rerecorded", []) if e.get("route") not in routes]
        new = [{"route": r, "states": len(states[r]), "errors": len(bad[r]), "commit": commit, "at": at, "app": app}
               for r in routes]
        manifest["rerecorded"] = sorted(kept + new, key=lambda e: e["route"])
        manifest["bytes"] = size
    json.dump(manifest, open(path, "w", encoding="utf-8"), indent=1)
    return manifest


FLAKY = []   # runs that differed once and passed on the second try


def run_one(job):
    cmd, env, key = job
    t = time.time()
    r = subprocess.run(cmd, capture_output=True, text=True, env=env)
    if r.returncode == 1:   # timing flake (a transition caught mid-way): a real difference fails again
        r2 = subprocess.run(cmd, capture_output=True, text=True, env=env)
        if r2.returncode == 0:
            FLAKY.append(key)
        r = r2
    out = (r.stdout + r.stderr).strip()
    return key, r.returncode, out, time.time() - t


def summarize(out):
    """First output line `state: structure 0, class 1, ...` → the kinds with a count above 0."""
    first = next((l for l in out.splitlines() if re.match(r"^[\w@+=-]+: structure ", l)), "")
    dirty = [f"{k} {n}" for k, n in re.findall(r"(\w+) ([1-9]\d*)", first.split(";")[0].split(": ", 1)[-1]) if k in KINDS]
    return ", ".join(dirty), first


def main():
    global RUNS
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--level", choices=["strict", "visual"], default="strict")
    g = ap.add_mutually_exclusive_group()
    g.add_argument("--all", action="store_true")
    g.add_argument("--routes", nargs="+")
    g.add_argument("--changed", action="store_true")
    ap.add_argument("--files", nargs="+", help="with --changed: use this list of paths (from the project root) instead of git")
    ap.add_argument("--explain", action="store_true", help="with --changed: print the selected routes and why, then exit")
    ap.add_argument("--since", default="HEAD~1", help="with --changed: the commit to diff from (default HEAD~1)")
    ap.add_argument("--ref", choices=["outsystems", "self", "both"], default="both")
    ap.add_argument("--record-self", action="store_true")
    ap.add_argument("--source-commit", help="with --record-self: the commit of the code that the app at --app serves "
                    "(when it runs from another worktree); default HEAD of this tree")
    ap.add_argument("--report", help="Markdown report file; default <out>/report.md")
    ap.add_argument("--out", default=RUNS, help="output folder under migration/refactor-parity/ (default %(default)s); "
                    "only this folder is deleted at the start of a run")
    ap.add_argument("--app", default="http://localhost:5173")
    ap.add_argument("--jobs", type=int, default=4)
    ap.add_argument("--node", default=os.path.join(NODE_BIN, "node"))
    args = ap.parse_args()
    if not (args.all or args.routes or args.changed):
        ap.error("choose --all, --routes or --changed")
    if args.source_commit and not args.record_self:
        ap.error("--source-commit goes with --record-self")
    commit = source_commit(args.source_commit or "HEAD") if args.record_self else None
    RUNS = resolve_out(args.out)
    args.report = args.report or os.path.join(RUNS, "report.md")

    started = time.time()
    c = skill.Ctx(SimpleNamespace(migration_dir="migration", app_dir="app"))
    every = finished_routes()
    note = ""
    if args.routes:
        unknown = [r for r in args.routes if r not in every]
        if unknown:
            sys.exit(f"unknown or unfinished routes: {unknown}")
        routes = args.routes
    elif args.changed:
        why = {}
        routes, note = changed_routes(args.since, every, args.files, why)
        if args.explain:
            print(f"{len(routes)} of {len(every)} routes selected ({note})")
            for r in routes:
                print(f"{r}: " + ", ".join(sorted(set(why[r]))[:6]) + (" ..." if len(set(why[r])) > 6 else ""))
            return
    else:
        routes = every
    ex = json.load(open("migration/parity-exemptions.json", encoding="utf-8")) if os.path.exists("migration/parity-exemptions.json") else {}
    ignore = ex.get("ignoreStates", {})
    env = dict(os.environ, PATH=NODE_BIN + ":" + os.environ["PATH"])
    refs = ["self"] if args.record_self else (["outsystems", "self"] if args.ref == "both" else [args.ref])

    jobs, exempt = [], {}
    for r in routes:
        for st, meta in sorted(skill.load_states(c, r).items()):
            if st in ignore:
                exempt[(r, st)] = ignore[st]
                continue
            plan = {"scenario": skill.plan_scenarios(c, r).get(st), "latency": skill.plan_scenarios(c, r, "latencies").get(st),
                    "settle": skill.plan_scenarios(c, r, "settles").get(st)}
            for ref in refs:
                key = (r, st, ref)
                raw = os.path.join(c.rdir(r), "analysis", "dom", f"{st}.raw.html")
                if ref == "outsystems" and not os.path.exists(raw):
                    jobs.append((None, env, key))
                elif ref == "self" and not args.record_self and not os.path.exists(os.path.join(REFERENCE, r, st, "tree.json")):
                    jobs.append((None, env, key))
                else:
                    jobs.append((build_cmd(c, args, r, st, meta, ref, plan), env, key))

    if not args.record_self:
        shutil.rmtree(RUNS, ignore_errors=True)
    os.makedirs(RUNS, exist_ok=True)
    print(f"{len(routes)} route(s), {len(jobs)} run(s), level {args.level}, refs {','.join(refs)}"
          + (", record-self" if args.record_self else "") + (f" ({note})" if note else ""), flush=True)

    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, args.jobs)) as pool:
        todo = [j for j in jobs if j[0]]
        for j in jobs:
            if not j[0]:
                missing = "no raw DOM (re-run analyze_capture.py)" if j[2][2] == "outsystems" else "no self reference (run --record-self)"
                results[j[2]] = (2, missing, 0.0)
                print(f"{j[2][0]}/{j[2][1]} [{j[2][2]}]: ERROR {missing}", flush=True)
        for key, rc, out, secs in pool.map(run_one, todo):
            results[key] = (rc, out, secs)
            if rc == 0:
                tag = "OK"
            elif rc == 1:
                tag = "DIFF " + summarize(out)[0]
            else:
                tag = "ERROR " + (out.splitlines()[-1][:120] if out else "")
            print(f"{key[0]}/{key[1]} [{key[2]}]: {tag} ({secs:.0f}s)", flush=True)

    elapsed = time.time() - started
    if args.record_self:
        bad = [k for k, v in results.items() if v[0] != 0]
        manifest = write_manifest(routes, every, results, args.app, commit, datetime.datetime.now().isoformat(timespec="seconds"))
        print(f"recorded {len(jobs) - len(bad)}/{len(jobs)} state(s) from commit {commit[:7]}, reference "
              f"{manifest['bytes'] / 1e6:.1f} MB, {elapsed:.0f}s; errors: {bad}")
        sys.exit(1 if bad else 0)

    # report
    lines = [f"# Refactor parity report", "",
             f"- Level: `{args.level}`" + ("  (skips structure, class, attr; style and pseudo on visible elements only)" if args.level == "visual" else ""),
             f"- References: {', '.join(refs)}", f"- App: {args.app}", f"- Commit: `{git('rev-parse', '--short', 'HEAD').strip()}`"
             + (" (+ uncommitted changes)" if git("status", "--porcelain", "app", "migration/tools", ".claude").strip() else ""),
             f"- Date: {datetime.datetime.now().isoformat(timespec='seconds')}, run time {elapsed / 60:.1f} min ({args.jobs} jobs)",
             f"- Scope: {'all' if args.all else 'changed' if args.changed else 'routes'}; {len(routes)} route(s)" + (f" ({note})" if note else ""), "",
             "| Route | State | " + " | ".join(refs) + " |", "|---|---|" + "---|" * len(refs)]
    per_ref = {ref: {} for ref in refs}   # ref → route → [state results]
    for r in routes:
        for st in sorted(skill.load_states(c, r)):
            cells = []
            for ref in refs:
                if (r, st) in exempt:
                    cells.append("exempt")
                    continue
                rc, out, _ = results[(r, st, ref)]
                cell = "OK" if rc == 0 else (f"DIFF: {summarize(out)[0]}" if rc == 1 else f"ERROR: {out.splitlines()[-1][:100]}" if out else "ERROR")
                per_ref[ref].setdefault(r, []).append(rc)
                cells.append(cell.replace("|", "/"))
            lines.append(f"| {r} | {st} | " + " | ".join(cells) + " |")
    lines += ["", "## Totals", "", "| Reference | Routes | Clean | With differences or errors |", "|---|---|---|---|"]
    bad_total = 0
    for ref in refs:
        clean = len(routes) - sum(1 for rcs in per_ref[ref].values() if any(x != 0 for x in rcs))   # all-exempt routes count as clean
        n = len(routes)
        lines.append(f"| {ref} | {n} | {clean} | {n - clean} |")
        bad_total += n - clean
        if n - clean:
            lines.append(f"|  | | | {', '.join(r for r, rcs in per_ref[ref].items() if any(x != 0 for x in rcs))} |")
    if FLAKY:
        lines += ["", "Passed on the second try (timing flake of the first try): " + ", ".join(f"{r}/{s} [{f}]" for r, s, f in FLAKY)]
    lines += ["", f"Exempt states (the user checks them): {len(exempt)}" if exempt else "", f"Result: {'FAIL' if bad_total else 'PASS'}"]
    os.makedirs(os.path.dirname(args.report) or ".", exist_ok=True)
    open(args.report, "w", encoding="utf-8").write("\n".join(lines) + "\n")
    print("\n".join(l for l in lines if l.startswith(("|", "Result")) and ("Reference" in l or l.startswith("| outsystems") or l.startswith("| self") or l.startswith("Result"))))
    print(f"report: {args.report}; {elapsed / 60:.1f} min")
    sys.exit(1 if bad_total else 0)


if __name__ == "__main__":
    main()
