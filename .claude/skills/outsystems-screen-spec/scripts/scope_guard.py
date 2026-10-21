#!/usr/bin/env python3
"""
scope_guard.py: fail if a screen task changed files outside its own folders. Run it before a screen
branch is merged (or as a pre-commit hook in the screen's worktree).

  python3 scope_guard.py --screen <Screen> [--base main] [--allow 'app/src/mocks/*']

Allowed by default:
  app/src/screens/<Screen>/**        the screen
  migration/screens/<Screen>/**      its spec, notes, pack, analysis, verification output
  migration/change-requests/**       requests for shell/shared changes (never the change itself)
  migration/board.md                 status updates (made with board.py)
  migration/metrics/**               ledger
Everything else (src/shell, src/shared, src/lib, public/<App>/css, other screens) belongs to the foundation
owner. If the screen really needs it, write a change request and stop that part with <NotCaptured>.
"""
import argparse, fnmatch, subprocess, sys


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--screen", required=True)
    ap.add_argument("--base", default="main")
    ap.add_argument("--allow", action="append", default=[])
    ap.add_argument("--app-dir", default="app")
    ap.add_argument("--migration-dir", default="migration")
    a = ap.parse_args()
    s, app, mig = a.screen, a.app_dir.rstrip("/"), a.migration_dir.rstrip("/")
    allowed = [f"{app}/src/screens/{s}/*", f"{mig}/screens/{s}/*", f"{mig}/change-requests/*",
               f"{mig}/board.md", f"{mig}/metrics/*"] + a.allow
    try:
        committed = subprocess.run(["git", "diff", "--name-only", f"{a.base}...HEAD"], capture_output=True, text=True, check=True).stdout.split()
        work = subprocess.run(["git", "status", "--porcelain", "--untracked-files=all"], capture_output=True, text=True, check=True).stdout.splitlines()
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        sys.exit(f"git failed: {e}")
    changed = sorted(set(committed) | {l[3:].split(" -> ")[-1] for l in work if l.strip()})
    bad = [f for f in changed if not any(fnmatch.fnmatch(f, p) for p in allowed)]
    if bad:
        print(f"scope_guard: {s} changed {len(bad)} file(s) outside its scope:")
        for f in bad:
            print("  " + f)
        print("Revert them and file a change request (assets/change-request-template.md).")
        sys.exit(1)
    print(f"scope_guard: {len(changed)} changed file(s), all inside {s}'s scope")


if __name__ == "__main__":
    main()
