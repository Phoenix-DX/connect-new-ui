"""Parity gate of the architecture refactor (plan v2 §4.2, decision D4). It does not replace `route.py parity`: the frozen
route reports in migration/screens/<R>/parity/ stay as they are, and this tool never writes there.

Run from the project root, with the dev server up (npm --prefix app run dev):
    python3 migration/tools/refactor_parity.py --level strict|visual
        [--all | --routes R1 R2 ... | --changed [--since <commit>]]
        [--ref outsystems|self|both]      default both
        [--record-self]                   record the self-parity reference from the running app, then stop
        [--report app/docs/refactor/reports/<name>.md]   default migration/refactor-parity/last/report.md
        [--app http://localhost:5173] [--jobs 4]

Levels (skill checks of parity_check.cjs):
    strict  every check of `route.py parity`: structure, class, attr, text, style, pseudo, layout, position, pixel, call
    visual  skips structure, class and attr (--skip-kinds); style and pseudo only on elements visible on both sides
            (--visible-only); text, layout, position, pixel and call stay on

References:
    outsystems  the capture (analysis/dom/<state>.raw.html), exemptions migration/parity-exemptions.json
    self        migration/refactor-reference/<Route>/<state>/ (tree.json, screenshot.png, calls), recorded by
                --record-self; exemptions migration/refactor-exemptions.json (a list, see migration/tools/README.md)

Outputs: reports and screenshots in migration/refactor-parity/last/<ref>/<Route>/ (replaced at each run, not committed);
the Markdown report has one line per route and state and a total per reference. Exit code 1 when a route has a
difference or a state could not run, 0 otherwise. A run that differs is repeated once; when the second try is clean it
counts as clean and the report names it (timing flake). Self runs fix the page clock and finish or pause animations.
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
                "app/src/shell/", "app/src/shared/", "app/src/lib/", "app/src/components/", "app/src/mocks/",
                "app/public/", "app/index.html", "migration/parity-exemptions.json", EXEMPT_SELF)

sys.path.insert(0, SK)
import route as skill  # noqa: E402  (the skill's route.py: state loading, URL and plan helpers; main() is guarded)


def git(*a):
    return subprocess.run(["git", *a], capture_output=True, text=True).stdout


def finished_routes():
    return [d for d in sorted(os.listdir("migration/screens")) if os.path.exists(f"migration/screens/{d}/finished.json")]


def changed_routes(since, all_routes):
    """Routes touched by `git diff --name-only <since>` (commits and working tree). Uses app/docs/refactor/graph.json
    (step P0-3) when it exists: {"routes": {"<Route>": ["app/src/...", ...]}} (the import closure of each route)."""
    files = [f for f in git("diff", "--name-only", since).splitlines() if f]
    files += [f for f in git("ls-files", "--others", "--exclude-standard").splitlines() if f]
    files = [f for f in files if f.startswith(("app/", "migration/parity-exemptions", EXEMPT_SELF)) and not f.startswith("app/docs/")]
    if any(f.startswith(GLOBAL_PATHS) for f in files):
        return all_routes, "a change in a shared path selects all routes"
    sel = set()
    for f in files:
        m = re.match(r"app/src/screens/([^/]+)/", f)
        if m:
            sel.add(m.group(1))
    graph = {}
    try:
        graph = json.load(open("app/docs/refactor/graph.json", encoding="utf-8")).get("routes", {})
    except (OSError, ValueError):
        pass
    if not graph and any(not re.match(r"app/src/screens/", f) for f in files):
        return all_routes, "app/docs/refactor/graph.json is missing: all routes selected"
    for r, closure in graph.items():
        if r in all_routes and any(f in closure for f in files):
            sel.add(r)
    return [r for r in all_routes if r in sel], f"{len(files)} changed file(s)"


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
           "--expect", raw, "--state", state]
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
        return cmd + ["--record-self", refdir, "--freeze-animations", "--fixed-time", FIXED_TIME]
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
        cmd += ["--self-ref", refdir, "--freeze-animations", "--fixed-time", FIXED_TIME]
        rules = self_rules(route)
        if rules:
            ex = os.path.join(RUNS, ref, route, f"{state}.exemptions.json")
            os.makedirs(os.path.dirname(ex), exist_ok=True)
            json.dump({"rules": rules}, open(ex, "w"), indent=1)
            cmd += ["--exemptions", ex]
    return cmd


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
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--level", choices=["strict", "visual"], default="strict")
    g = ap.add_mutually_exclusive_group()
    g.add_argument("--all", action="store_true")
    g.add_argument("--routes", nargs="+")
    g.add_argument("--changed", action="store_true")
    ap.add_argument("--since", default="HEAD~1", help="with --changed: the commit to diff from (default HEAD~1)")
    ap.add_argument("--ref", choices=["outsystems", "self", "both"], default="both")
    ap.add_argument("--record-self", action="store_true")
    ap.add_argument("--report", default=os.path.join(RUNS, "report.md"))
    ap.add_argument("--app", default="http://localhost:5173")
    ap.add_argument("--jobs", type=int, default=4)
    ap.add_argument("--node", default=os.path.join(NODE_BIN, "node"))
    args = ap.parse_args()
    if not (args.all or args.routes or args.changed):
        ap.error("choose --all, --routes or --changed")

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
        routes, note = changed_routes(args.since, every)
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
        size = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(REFERENCE) for f in fs)
        manifest = {"commit": git("rev-parse", "HEAD").strip(), "at": datetime.datetime.now().isoformat(timespec="seconds"),
                    "app": args.app, "routes": len(routes), "states": len(jobs), "errors": len(bad), "bytes": size}
        json.dump(manifest, open(os.path.join(REFERENCE, "manifest.json"), "w"), indent=1)
        print(f"recorded {len(jobs) - len(bad)}/{len(jobs)} state(s), {size / 1e6:.1f} MB, {elapsed:.0f}s; errors: {bad}")
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
