#!/usr/bin/env python3
"""
scope_guard.py: fail if a route task changed files outside its scope. route.py ready and finish run it.

  python3 scope_guard.py --screen <Screen> [--base main] [--allow 'app/src/foo/**']

Changed files = committed since the route's start commit, plus the working tree (staged, unstaged, untracked).
The start commit is `startCommit` in migration/screens/<Screen>/run.json (route.py start writes it). A run without it
(started before 2026-10-29, or outside git) falls back to `<base>...HEAD`.

Patterns: `**` crosses folders, `*` and `?` stay inside one folder name.

Allowed (page template layout, app/docs/guides/page-template.md; user, 2026-10-29, I10-5 a):
  app/src/pages/<Screen>/**          the route's page, inputs, hooks, mocks
  migration/screens/<Screen>/**      its spec, notes, pack, analysis, parity output
  app/src/api/**                     the calls of a domain (repository, mapper, keys, hooks)
  app/src/components/**              props-only components
  app/src/containers/**              containers (by the container criterion)
  app/src/mocks/**                   shared fictional data, store, handlers
  app/src/app/routes*.ts             the route table
  migration/change-requests/**       requests for platform/legacy changes (never the change itself)
  migration/board.md                 status updates (made with board.py / route.py)
  migration/metrics/**               ledger
  migration/clarify/**               clarify work that shares the branch
  migration/knowledge/**, migration/runtime-sources/**, migration/survey/**, migration/screens/_capture-summary.json
                                     pipeline outputs (captures, probes, survey refresh; user, 2026-10-29)
  app/src/pages/<X>/**, migration/screens/<X>/**   every other route whose board status is in progress (not built,
                                     verified, todo or skipped): several routes are built at the same time in one tree
Everything else (app/src/platform, app/src/legacy, app/src/lib, app/src/styles, app/src/vendor, public/<App>/css,
finished pages, skill scripts) belongs to the foundation owner. If the route really needs it, write a change request
and stop that part with <NotCaptured>.
"""
import argparse, json, os, re, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from board import read_board, FINISHED  # noqa: E402

NOT_ACTIVE = set(FINISHED) | {"todo", "-", "", "skip", "done"}


def glob_re(pattern):
    """`**` = any characters (also '/'); `*` = any characters but '/'; `?` = one character but '/'."""
    out, i = [], 0
    while i < len(pattern):
        if pattern.startswith("**", i):
            out.append(".*"); i += 2
        elif pattern[i] == "*":
            out.append("[^/]*"); i += 1
        elif pattern[i] == "?":
            out.append("[^/]"); i += 1
        else:
            out.append(re.escape(pattern[i])); i += 1
    return re.compile("".join(out) + r"\Z")


def matches(path, patterns):
    return any(glob_re(p).match(path) for p in patterns)


def active_routes(mig):
    """Routes whose board status is in progress (decision build, status not finished/todo/skipped)."""
    try:
        rows = read_board(os.path.join(mig, "board.md"))
    except SystemExit:
        return []
    return [s for s, r in rows.items()
            if (r.get("Decision") or "").strip() == "build" and (r.get("Status") or "").strip() not in NOT_ACTIVE]


def allowed_patterns(screen, app, mig, active=(), extra=()):
    pats = [f"{app}/src/pages/{screen}/**", f"{mig}/screens/{screen}/**",
            f"{app}/src/api/**", f"{app}/src/components/**", f"{app}/src/containers/**", f"{app}/src/mocks/**",
            f"{app}/src/app/routes*.ts",
            f"{mig}/change-requests/**", f"{mig}/board.md", f"{mig}/metrics/**", f"{mig}/clarify/**",
            # pipeline outputs that the capture, the probes and the survey refresh write (user, 2026-10-29, I10-10 a)
            f"{mig}/knowledge/**", f"{mig}/runtime-sources/**", f"{mig}/survey/**", f"{mig}/screens/_capture-summary.json"]
    for x in active:
        if x != screen:
            pats += [f"{app}/src/pages/{x}/**", f"{mig}/screens/{x}/**"]
    return pats + list(extra)


def start_commit(mig, screen):
    try:
        return (json.load(open(os.path.join(mig, "screens", screen, "run.json"), encoding="utf-8")).get("startCommit") or "").strip()
    except (OSError, ValueError):
        return ""


def changed_files(start, base):
    """(files, label): committed since `start` (else `base...HEAD`) plus the working tree."""
    def git(*args):
        return subprocess.run(["git", *args], capture_output=True, text=True, check=True).stdout
    label = f"startCommit {start[:8]}" if start else f"{base}...HEAD"
    try:
        try:
            committed = git("diff", "--name-only", start, "HEAD").split("\n") if start else None
        except subprocess.CalledProcessError:
            committed, label = None, f"{base}...HEAD (startCommit {start[:8]} unknown to git)"
        if committed is None:
            committed = git("diff", "--name-only", f"{base}...HEAD").split("\n")
        work = git("status", "--porcelain", "--untracked-files=all").splitlines()
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        sys.exit(f"git failed: {e}")
    files = {f.strip() for f in committed if f.strip()} | {l[3:].split(" -> ")[-1].strip('"') for l in work if l.strip()}
    return sorted(files), label


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--screen", required=True)
    ap.add_argument("--base", default="main")
    ap.add_argument("--allow", action="append", default=[])
    ap.add_argument("--app-dir", default="app")
    ap.add_argument("--migration-dir", default="migration")
    a = ap.parse_args()
    s, app, mig = a.screen, a.app_dir.rstrip("/"), a.migration_dir.rstrip("/")
    active = active_routes(mig)
    allowed = allowed_patterns(s, app, mig, active, a.allow)
    changed, label = changed_files(start_commit(mig, s), a.base)
    bad = [f for f in changed if not matches(f, allowed)]
    if bad:
        print(f"scope_guard: {s} changed {len(bad)} file(s) outside its scope (diff from {label}):")
        for f in bad:
            print("  " + f)
        print("Revert them and file a change request (assets/change-request-template.md).")
        sys.exit(1)
    others = [x for x in active if x != s]
    print(f"scope_guard: {len(changed)} changed file(s) since {label}, all inside {s}'s scope"
          + (f" (routes in progress also allowed: {', '.join(others)})" if others else ""))


if __name__ == "__main__":
    main()
