#!/usr/bin/env python3
"""TST source drift: the live survey against the stored compiled files, and against the previous survey.

Usage (from the project root, after `batch_capture.cjs survey`):
  python3 tools/tst/survey_diff.py [--survey migration/survey/survey-UBTConnect.json] [--previous <survey.json | git:<rev>>]
         [--out migration/knowledge/tst-drift-<date>.md] [--json migration/sync/drift-<date>.json]
         [--update-live-files] [--offline] [--date YYYY-MM-DD]

What it compares (facts only; it does not read what changed inside a file):
  * every compiled file of a captured route (`migration/screens/<S>/analysis/manifest.json` → `raw`) with the live text
    of the survey: changed = differs after the OutSystemsDebugger ids and the whitespace are masked (the
    normalisation of tools/clarify/mark_stale.py);
  * the store copies `migration/sources/survey/` (files of routes without a capture) and the `*.mvc.js` copies of
    `migration/sources/runtime/`, the same way;
  * the previous survey (default: the git HEAD version of --survey): files added, removed and changed on TST.
It writes one Markdown page (per file → routes, per route → files, added/removed, other store copies) and, with
--json, the same data for tools. --update-live-files adds the changed names to migration/sources/runtime/live-files.txt
(the route check then reads them live). --offline skips the static GET of the live moduleinfo (versionSequence).
"""
from __future__ import annotations

import argparse
import collections
import datetime as dt
import json
import os
import re
import subprocess
import sys
import urllib.request

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(ROOT, "tools", "common"))
import sources_store as store  # noqa: E402

SURVEY = "migration/survey/survey-UBTConnect.json"
MODULEINFO_STORED = "migration/sources/runtime/moduleinfo.json"
MODULEINFO_URL = "https://ubtm-tst.ubtconnectglobal.com/UBTConnect/moduleservices/moduleinfo"
DEBUG_ID = re.compile(r'"[A-Za-z0-9+/_=.:-]{16,}"')
WS = re.compile(r"\s+")


def normalise(text: str) -> str:
    """The compiled text without the OutSystemsDebugger ids (new at each publish) and without the whitespace."""
    out = []
    for line in text.lstrip("﻿").replace("\r\n", "\n").split("\n"):
        out.append(DEBUG_ID.sub('"#"', line) if "OutSystemsDebugger." in line else line)
    return WS.sub("", "\n".join(out))


def short(name: str) -> str:
    """`UBTConnect.Flow.Block.mvc.js` → `Block`."""
    stem = name[: -len(".mvc.js")] if name.endswith(".mvc.js") else name[:-3] if name.endswith(".js") else name
    return stem.rsplit(".", 1)[-1]


def diff_surveys(live: dict, previous: dict) -> dict:
    """Files added, removed and changed (normalised) between two surveys' `sources`."""
    live_n = {k: normalise(v) for k, v in live.items() if isinstance(v, str)}
    prev_n = {k: normalise(v) for k, v in previous.items() if isinstance(v, str)}
    return {
        "added": sorted(set(live_n) - set(prev_n)),
        "removed": sorted(set(prev_n) - set(live_n)),
        "changed": sorted(k for k in live_n if k in prev_n and live_n[k] != prev_n[k]),
        "same": sum(1 for k in live_n if k in prev_n and live_n[k] == prev_n[k]),
    }


def compare_routes(live: dict, manifests: dict, reader) -> dict:
    """{file: {"routes": [...], "captured": size, "live": size}} for every route file that differs from the live text,
    plus {"missing": {file: [routes]}} for route files the live survey no longer has."""
    changed: dict = {}
    missing: dict = {}
    cache: dict = {}
    modules = {k.split(".", 1)[0] for k in live}
    for screen, m in sorted(manifests.items()):
        for name, path in sorted(m.get("raw", {}).items()):
            if not name.endswith(".js"):
                continue
            live_text = live.get(name)
            if not isinstance(live_text, str):
                # the survey holds the screen and block views of the app modules only: a controller, a model or a
                # plugin view is not "missing"; a view of a module the survey has is
                if name.endswith(".mvc.js") and name.split(".", 1)[0] in modules:
                    missing.setdefault(name, []).append(screen)
                continue
            if path not in cache:
                cache[path] = normalise(reader(path))
            live_n = normalise(live_text)
            if cache[path] != live_n:
                row = changed.setdefault(name, {"routes": [], "captured": len(cache[path]), "live": len(live_n)})
                if screen not in row["routes"]:
                    row["routes"].append(screen)
    return {"changed": changed, "missing": missing}


def compare_folder(live: dict, folder: str) -> dict:
    """{file: (stored size, live size)} of the `*.js` copies in a store folder that differ from the live text."""
    out = {}
    if not os.path.isdir(folder):
        return out
    for name in sorted(os.listdir(folder)):
        if not name.endswith(".js") or "@" in name or name not in live:
            continue
        stored = normalise(open(os.path.join(folder, name), encoding="utf-8", errors="replace").read())
        live_n = normalise(live[name])
        if stored != live_n:
            out[name] = (len(stored), len(live_n))
    return out


def previous_survey(spec: str | None, survey_path: str) -> tuple[dict, str]:
    """The previous survey's sources and a label. Default: the git HEAD version of the survey file."""
    if spec and not spec.startswith("git:"):
        return json.load(open(spec, encoding="utf-8")), os.path.basename(spec)
    rev = spec[4:] if spec else "HEAD"
    r = subprocess.run(["git", "show", f"{rev}:{survey_path}"], capture_output=True, text=True, cwd=ROOT)
    if r.returncode != 0:
        return {}, f"(no previous survey at git {rev})"
    return json.loads(r.stdout), f"git {rev}:{survey_path}"


def moduleinfo_sequences(offline: bool) -> tuple[str, str]:
    stored = "?"
    try:
        stored = str(json.load(open(os.path.join(ROOT, MODULEINFO_STORED), encoding="utf-8"))["manifest"]["versionSequence"])
    except (OSError, ValueError, KeyError):
        pass
    if offline:
        return stored, "(offline)"
    try:
        req = urllib.request.Request(MODULEINFO_URL, headers={"User-Agent": "connect-new survey_diff (read-only)"})
        with urllib.request.urlopen(req, timeout=20) as r:  # static GET, read-only, no session
            live = json.load(r)
        return stored, str(live.get("manifest", live).get("versionSequence", "?"))
    except Exception as e:  # noqa: BLE001
        return stored, f"(GET failed: {type(e).__name__})"


def render(date: str, label_prev: str, seq: tuple[str, str], collected: str, routes: dict, surveys: dict,
           folders: dict) -> str:
    changed, missing = routes["changed"], routes["missing"]
    by_route: dict = collections.defaultdict(list)
    for name, row in changed.items():
        for s in row["routes"]:
            by_route[s].append(name)
    n_routes = len(store.all_manifests())
    L = [f"# TST drift since the captures ({date})", ""]
    L += [f"The live compiled code of TST (static survey `{SURVEY}`, collected {collected}; moduleinfo `versionSequence`"
          f" stored {seq[0]} → live {seq[1]}) against the copy of each captured route (`migration/sources/raw/`), the",
          "store copies of the routes without a capture (`migration/sources/survey/`), the runtime copies (`migration/sources/runtime/`)",
          f"and the previous survey ({label_prev}). A file counts as changed when its code differs without the debugger",
          "keys and the whitespace. Facts only; this report does not read what changed inside a file.", ""]
    L += [f"- Routes with at least one changed file: {len(by_route)} of {n_routes} captured routes.",
          f"- Distinct changed route files: {len(changed)}.",
          f"- Previous survey: {len(surveys['added'])} files added, {len(surveys['removed'])} removed, "
          f"{len(surveys['changed'])} changed, {surveys['same']} same.", ""]
    L += ["## Changed route files", "", "| File | Routes | Size (normalised) captured → live |", "|---|---|---|"]
    for name, row in sorted(changed.items(), key=lambda kv: (-len(kv[1]["routes"]), kv[0])):
        L.append(f"| `{name}` | {len(row['routes'])}: {', '.join(row['routes'])} | {row['captured']} → {row['live']} |")
    if not changed:
        L.append("| (none) | | |")
    L += ["", "## Per route", "", "| Route | Changed files |", "|---|---|"]
    for s in sorted(by_route):
        L.append(f"| `{s}` | " + ", ".join(f"`{short(n)}`" for n in sorted(by_route[s])) + " |")
    if not by_route:
        L.append("| (none) | |")
    if missing:
        L += ["", "## Route files the live survey no longer has", "", "| File | Routes |", "|---|---|"]
        for name, ss in sorted(missing.items()):
            L.append(f"| `{name}` | {', '.join(ss)} |")
    L += ["", "## Previous survey", ""]
    for key in ("added", "removed", "changed"):
        items = surveys[key]
        L.append(f"- {key.capitalize()} ({len(items)}): " + (", ".join(f"`{n}`" for n in items) if items else "none"))
    for title, rows in folders.items():
        L += ["", f"## Other store copies that changed: `{title}`", ""]
        if rows:
            L += ["| File | Size (normalised) stored → live |", "|---|---|"]
            L += [f"| `{n}` | {a} → {b} |" for n, (a, b) in sorted(rows.items())]
        else:
            L.append("None.")
    L += ["", f"Source: `tools/tst/survey_diff.py` ({date}). The route check reads the files of"
          " `migration/sources/runtime/live-files.txt` live; the sync wave re-captures the routes.", ""]
    return "\n".join(L)


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--survey", default=SURVEY)
    ap.add_argument("--previous", default=None, help="a survey file, or git:<rev> (default git:HEAD)")
    ap.add_argument("--date", default=dt.date.today().isoformat())
    ap.add_argument("--out", default=None)
    ap.add_argument("--json", default=None)
    ap.add_argument("--update-live-files", action="store_true")
    ap.add_argument("--offline", action="store_true")
    a = ap.parse_args(argv)
    out = a.out or f"migration/knowledge/tst-drift-{a.date}.md"
    survey = json.load(open(os.path.join(ROOT, a.survey), encoding="utf-8"))
    live = survey.get("sources", {})
    prev, label_prev = previous_survey(a.previous, a.survey)
    surveys = diff_surveys(live, prev.get("sources", {}))
    routes = compare_routes(live, store.all_manifests(), store.read)
    folders = {
        "migration/sources/survey/": compare_folder(live, os.path.join(ROOT, "migration/sources/survey")),
        "migration/sources/runtime/": compare_folder(live, os.path.join(ROOT, "migration/sources/runtime")),
    }
    seq = moduleinfo_sequences(a.offline)
    text = render(a.date, label_prev, seq, survey.get("collectedAt", "?"), routes, surveys, folders)
    with open(os.path.join(ROOT, out), "w", encoding="utf-8") as f:
        f.write(text)
    if a.json:
        data = {"date": a.date, "collectedAt": survey.get("collectedAt"), "versionSequence": {"stored": seq[0], "live": seq[1]},
                "routes": routes, "surveys": surveys, "folders": {k: {n: list(v) for n, v in rows.items()} for k, rows in folders.items()}}
        os.makedirs(os.path.dirname(os.path.join(ROOT, a.json)) or ".", exist_ok=True)
        with open(os.path.join(ROOT, a.json), "w", encoding="utf-8") as f:
            json.dump(data, f, indent=1, ensure_ascii=False)
    if a.update_live_files:
        names = set(store.live_files()) | set(routes["changed"]) | set(surveys["changed"]) | set(folders["migration/sources/survey/"])
        with open(os.path.join(ROOT, store.LIVE_LIST), "w", encoding="utf-8") as f:
            f.write("\n".join(sorted(names)) + "\n")
    by_route = {s for row in routes["changed"].values() for s in row["routes"]}
    print(f"versionSequence stored {seq[0]} → live {seq[1]}; route files changed {len(routes['changed'])} in "
          f"{len(by_route)} routes; previous survey: +{len(surveys['added'])} -{len(surveys['removed'])} "
          f"~{len(surveys['changed'])}; written {out}" + (f", {a.json}" if a.json else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
