#!/usr/bin/env python3
"""
board.py: the migration status board. One lean table that every agent can read cheaply, plus
per-screen notes files for everything long. Replaces editing survey/routes.md by hand.

  migration/board.md               | Screen | Route | Wave | Cx | Tier | Decision | Reason | Status | Owner |
  migration/board.meta.json        static facts per screen (inputs, reached-from, variant group, blocks)
  migration/screens/<S>/notes.md   long notes (build log, gaps, verification results)

Commands
  init    --screens survey/screens.json | --routes survey/routes.md   [--import-routes old routes.md]
  triage  [--survey capture/survey-<App>.json]   suggest decisions with evidence (never final)
  set     <Screen> key=value ...                  e.g. status=building owner=agent-2 decision=skip reason="..."
  note    <Screen> "text"                         append a dated line to the screen's notes.md
  show    [--status s,..] [--decision d,..] [--tier t,..] [--cols c,..]
  tier    --tiers catalog/tiers.json              write the Tier column (from catalog.py)
  summary                                         counts by decision/status/tier, complexity left

Decisions: build | skip | ask (a person must answer) | ?build / ?skip (suggested by triage, not final).
Only `build` lets an agent start. Statuses: todo → capture → spec → building → review (user tests) ⇄ fixing → built → verified; waiting / failed / blocked.
Route lifecycle (start, reset, questions, finish) is handled by route.py; use it rather than setting statuses by hand.
"""
import argparse, datetime, json, os, re, sys
from collections import OrderedDict

COLS = ["Screen", "Route", "Wave", "Cx", "Tier", "Decision", "Reason", "Status", "Owner"]
DECISIONS = {"build", "skip", "ask", "?build", "?skip", ""}
STATUSES = ["todo", "capture", "spec", "building", "waiting", "review", "fixing", "failed", "built", "verified", "blocked", "-"]
FINISHED = {"built", "verified"}
INTERRUPTED = {"capture", "spec", "building", "failed", "blocked"}
TEST_RE = re.compile(r"(^|_)(Test|Debug|Demo|Sample|Playground)", re.I)
SYSTEM_RE = re.compile(r"(Login|Logout|PIN|Pincode|Fingerprint|Onboard|Splash|Unsupported|InvalidPermissions|Maintenance)", re.I)
OLD_RE = re.compile(r"(Deprecated|Legacy|Old_|_Old|Obsolete)", re.I)


# ------------------------------------------------------------------ io
def paths(a):
    d = a.dir
    return os.path.join(d, "board.md"), os.path.join(d, "board.meta.json"), os.path.join(d, "screens")


def read_board(path):
    if not os.path.exists(path):
        sys.exit(f"{path} not found; run `board.py init` first")
    rows = OrderedDict()
    for line in open(path, encoding="utf-8"):
        if not line.startswith("| ") or line.startswith("| Screen ") or line.startswith("|---"):
            continue
        cells = [c.strip() for c in line.strip()[1:-1].split(" | ")]
        if len(cells) != len(COLS):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < len(COLS):
            continue
        r = dict(zip(COLS, cells[:len(COLS)]))
        r["Route"] = r["Route"].strip("`")
        rows[r["Screen"]] = r
    return rows


def write_board(path, rows, app):
    cx_left = sum(int(r["Cx"] or 0) for r in rows.values() if r["Decision"] == "build" and r["Status"] not in ("built", "verified"))
    out = [f"# Migration board: {app}", "",
           "Lean status table. Long notes live in `screens/<Screen>/notes.md`. Change rows with `scripts/board.py set`, not by hand, "
           "so parallel agents do not overwrite each other. Agents start only on `Decision = build`.", "",
           f"Complexity left on build rows not yet built: {cx_left}", "",
           "| " + " | ".join(COLS) + " |", "|" + "---|" * len(COLS)]
    order = sorted(rows.values(), key=lambda r: (int(r["Wave"]) if r["Wave"].isdigit() else 99, r["Screen"]))
    for r in order:
        cells = [r[c].replace("|", "/") for c in COLS]
        cells[1] = f"`{cells[1]}`"
        out.append("| " + " | ".join(cells) + " |")
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write("\n".join(out) + "\n")
    os.replace(tmp, path)


def append_note(notes_dir, screen, text):
    p = os.path.join(notes_dir, screen, "notes.md")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    new = not os.path.exists(p)
    with open(p, "a", encoding="utf-8") as f:
        if new:
            f.write(f"# Notes: {screen}\n\n")
        f.write(text.rstrip() + "\n")


def today():
    return datetime.date.today().isoformat()


# ------------------------------------------------------------------ routes.md parsing (survey output, possibly edited)
def parse_routes(path):
    rows = []
    header = None
    for line in open(path, encoding="utf-8"):
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if cells and cells[0] == "Wave":
            header = cells
            continue
        if header is None or line.startswith("|---") or len(cells) < len(header):
            continue
        r = dict(zip(header, cells))
        route = r.get("Route", "").strip("`")
        if not route.startswith("/"):
            continue
        rf = [x.strip().rstrip(" …") for x in r.get("Reached from", "").split(",") if x.strip() and x.strip() != "-"]
        rows.append({
            "screen": route.rstrip("/").split("/")[-1], "route": route, "wave": r.get("Wave", ""),
            "complexity": r.get("Complexity", "0"),
            "inputs": [] if r.get("Inputs") in ("-", "") else [x.strip() for x in r["Inputs"].split(",")],
            "blocks": [] if r.get("Content blocks") in ("-", "") else [x.strip() for x in r["Content blocks"].split(",")],
            "reachedFrom": [x for x in rf if x.startswith("/") or x == "(app shell)"],
            "reachedFromTruncated": "…" in r.get("Reached from", ""),
            "variantGroup": r.get("Variant group", ""),
            "notes": r.get("Notes", ""), "status": r.get("Status", "todo"),
        })
    return rows


def meta_from_screens(path):
    data = json.load(open(path, encoding="utf-8"))
    out = {}
    for f, i in data["screens"].items():
        out[i["screen"]] = {
            "route": i["route"], "wave": str(i.get("wave") or ""), "complexity": str(i.get("complexity", 0)),
            "inputs": i.get("inputs", []), "blocks": [b.replace(".mvc.js", "") for b in i.get("directBlocks", [])],
            "closure": i.get("closure", []), "reachedFrom": i.get("reachedFrom", []), "reachedFromTruncated": False,
            "variantGroup": i.get("variantGroup") or "", "navOut": i.get("navOut", []), "file": f,
            "serverActions": i.get("serverActions", []), "surveyNotes": i.get("notes", []),
        }
    return data.get("app", "App"), out


# ------------------------------------------------------------------ commands
def cmd_init(a):
    board, meta_path, notes_dir = paths(a)
    if os.path.exists(board) and not a.force:
        sys.exit(f"{board} exists; use --force to rebuild (statuses are re-imported only with --import-routes)")
    if a.screens:
        app, meta = meta_from_screens(a.screens)
    elif a.routes:
        rr = parse_routes(a.routes)
        app = os.path.basename(os.path.dirname(rr[0]["route"])) if rr else "App"
        app = rr[0]["route"].split("/")[1] if rr else "App"
        meta = {r["screen"]: {k: r[k] for k in ("route", "wave", "complexity", "inputs", "blocks", "reachedFrom",
                                                  "reachedFromTruncated", "variantGroup")} for r in rr}
    else:
        sys.exit("init needs --screens or --routes")
    rows = OrderedDict()
    for s, m in meta.items():
        rows[s] = {"Screen": s, "Route": m["route"], "Wave": m["wave"], "Cx": m["complexity"], "Tier": "",
                   "Decision": "", "Reason": "", "Status": "todo", "Owner": ""}
    imported = 0
    if a.import_routes:
        for r in parse_routes(a.import_routes):
            s = r["screen"]
            if s not in rows:
                continue
            st, notes = r["status"], r["notes"]
            row = rows[s]
            if st == "skip":
                row["Decision"], row["Status"] = "skip", "-"
                m = re.search(r"(skip reason:|user decision[^:]*:)\s*(.*)", notes)
                row["Reason"] = (m.group(2) if m else notes)[:110]
            elif st in ("spec", "built", "verified", "building"):
                row["Decision"], row["Status"] = "build", st
                row["Reason"] = "imported"
            if notes:
                append_note(notes_dir, s, f"## Imported from routes.md ({today()})\n\n{notes}\n")
                imported += 1
    os.makedirs(a.dir, exist_ok=True)
    json.dump({"app": app, "screens": meta}, open(meta_path, "w", encoding="utf-8"), indent=1)
    write_board(board, rows, app)
    print(f"{len(rows)} screens → {board}; notes imported for {imported} screen(s) into {notes_dir}/")


def survey_mentions(survey_path, meta):
    """For each screen: compiled files (other than its own) whose code mentions its route or name in a string."""
    data = json.load(open(survey_path, encoding="utf-8"))
    sources = data.get("sources", {})
    hits = {}
    for s, m in meta.items():
        own = m.get("file", "")
        pat = re.compile(r"""["'/]%s["'?/]""" % re.escape(s))
        hits[s] = sorted(f for f, src in sources.items() if f != own and (m["route"] in src or pat.search(src)))
    return hits


def cmd_triage(a):
    board, meta_path, notes_dir = paths(a)
    rows = read_board(board)
    meta = json.load(open(meta_path, encoding="utf-8"))["screens"]
    route_to_screen = {m["route"]: s for s, m in meta.items()}
    mentions = survey_mentions(a.survey, meta) if a.survey else None
    # inputs signature → screens (replacement detection)
    sig = {}
    for s, m in meta.items():
        names = frozenset(re.sub(r"^In_", "", x.split(":")[0].strip()) for x in m.get("inputs", []))
        if names:
            sig.setdefault(names, []).append(s)

    def decided(s, values):
        return rows[s]["Decision"] in values

    changed = True
    suggestion = {}
    passes = 0
    while changed and passes < 20:
        changed, passes = False, passes + 1
        for s, r in rows.items():
            if r["Decision"] in ("build", "skip", "ask"):
                continue
            m = meta[s]
            ev, sug = [], None
            srcs = [x for x in m.get("reachedFrom", []) if x != "(app shell)"]
            src_screens = [route_to_screen.get(x) for x in srcs if route_to_screen.get(x)]
            dead = lambda x: rows[x]["Decision"] in ("skip", "?skip") or suggestion.get(x, ("",))[0] == "?skip"
            if TEST_RE.search(s):
                sug, ev = "?skip", ["test/debug screen name"]
            elif "(app shell)" in m.get("reachedFrom", []):
                sug, ev = "?build", ["reached from the app shell"]
            elif src_screens and all(dead(x) for x in src_screens) and not m.get("reachedFromTruncated"):
                sug, ev = "?skip", ["only reached from skipped screens: " + ", ".join(src_screens)]
            elif src_screens and any(rows[x]["Decision"] == "build" or suggestion.get(x, ("",))[0] == "?build" for x in src_screens):
                live = [x for x in src_screens if not dead(x)]
                sug, ev = "?build", ["reached from " + ", ".join(live[:3])]
            elif not m.get("reachedFrom"):
                sug, ev = "ask", ["no inbound link in compiled navigation"]
                if mentions is not None:
                    hits = mentions.get(s, [])
                    if hits:
                        ev.append("route/name mentioned in: " + ", ".join(h.replace(".mvc.js", "") for h in hits[:4]))
                    else:
                        sug = "?skip"
                        ev.append("no mention anywhere in surveyed code (external deep link is still possible)")
            elif src_screens and m.get("reachedFromTruncated"):
                sug, ev = "ask", ["reached-from list truncated in routes.md; re-run with --screens to decide"]
            elif src_screens:
                sug, ev = "ask", ["decision follows " + ", ".join(src_screens[:4]) + " (only entry points, undecided)"]
            if SYSTEM_RE.search(s):
                ev.append("system/auth screen: part of the shell or a screen?")
                if sug == "?build" and not any(rows[x]["Decision"] == "build" for x in src_screens):
                    sug = "ask"
            vg = m.get("variantGroup")
            if vg:
                sib = [x for x, mm in meta.items() if mm.get("variantGroup") == vg and x != s]
                built_sib = [x for x in sib if rows[x]["Decision"] == "build"]
                if built_sib:
                    sug = "?skip"
                    ev.append(f"variant of {', '.join(built_sib)} (decided build)")
            old = [b for b in m.get("blocks", []) if OLD_RE.search(b)]
            if old:
                ev.append("content from " + ", ".join(sorted({b.split('.')[1] if '.' in b else b for b in old})) + " (names can mislead: confirm)")
            names = frozenset(re.sub(r"^In_", "", x.split(":")[0].strip()) for x in m.get("inputs", []))
            twins = [x for x in sig.get(names, []) if x != s and rows[x]["Decision"] == "build" and not (vg and meta[x].get("variantGroup") == vg)] if names else []
            if twins:
                ev.append("same inputs as " + ", ".join(twins) + " (possible replacement)")
            new = (sug or "ask", "; ".join(ev) or "no evidence")
            if suggestion.get(s) != new:
                suggestion[s] = new
                changed = True
    for s, (d, reason) in suggestion.items():
        rows[s]["Decision"], rows[s]["Reason"] = d, reason[:160]
    app = json.load(open(meta_path, encoding="utf-8"))["app"]
    write_board(board, rows, app)
    by = {}
    for s, (d, _) in suggestion.items():
        by.setdefault(d, []).append(s)
    for d in sorted(by):
        print(f"{d:7} {len(by[d]):3}  {', '.join(sorted(by[d]))}")
    print("Suggestions only. A person confirms each with: board.py set <Screen> decision=build|skip reason=\"...\"")


def cmd_set(a):
    board, meta_path, notes_dir = paths(a)
    rows = read_board(board)
    s = a.screen if a.screen in rows else next((k for k, r in rows.items() if r["Route"] == a.screen), None)
    if not s:
        sys.exit(f"unknown screen {a.screen}")
    r = rows[s]
    keymap = {c.lower(): c for c in COLS}
    for kv in a.pairs:
        if "=" not in kv:
            sys.exit(f"expected key=value, got {kv}")
        k, v = kv.split("=", 1)
        col = keymap.get(k.lower())
        if not col or col in ("Screen", "Route"):
            sys.exit(f"cannot set {k}")
        if col == "Decision" and v not in DECISIONS:
            sys.exit(f"decision must be one of {sorted(DECISIONS)}")
        if col == "Status":
            if v not in STATUSES:
                sys.exit(f"status must be one of {STATUSES}")
            if v not in ("todo", "-") and r["Decision"] != "build" and "decision=build" not in a.pairs:
                sys.exit(f"{s}: decision is '{r['Decision'] or 'undecided'}'; only decision=build screens can move to {v}")
        r[col] = v.replace("\n", " ")[:160]
    if r["Decision"] == "skip":
        r["Status"] = "-"
    app = json.load(open(meta_path, encoding="utf-8"))["app"]
    write_board(board, rows, app)
    append_note(notes_dir, s, f"- {today()} set " + ", ".join(a.pairs))
    print(" | ".join(r[c] for c in COLS))


def cmd_note(a):
    board, meta_path, notes_dir = paths(a)
    rows = read_board(board)
    if a.screen not in rows:
        sys.exit(f"unknown screen {a.screen}")
    append_note(notes_dir, a.screen, f"- {today()} {a.text}")
    print("ok")


def cmd_show(a):
    board, _, _ = paths(a)
    rows = read_board(board)
    split = lambda x: set(x.split(",")) if x else None
    st, de, ti = split(a.status), split(a.decision), split(a.tier)
    cols = a.cols.split(",") if a.cols else ["Screen", "Route", "Cx", "Tier", "Decision", "Status", "Owner", "Reason"]
    print(" | ".join(cols))
    for r in rows.values():
        if st and r["Status"] not in st or de and r["Decision"] not in de or ti and r["Tier"] not in ti:
            continue
        print(" | ".join(r.get(c, "") for c in cols))


def cmd_tier(a):
    board, meta_path, _ = paths(a)
    rows = read_board(board)
    tiers = json.load(open(a.tiers, encoding="utf-8"))
    n = 0
    for s, t in tiers.items():
        if s in rows:
            rows[s]["Tier"] = t["tier"] if isinstance(t, dict) else t
            n += 1
    write_board(board, rows, json.load(open(meta_path, encoding="utf-8"))["app"])
    print(f"tier set on {n} row(s)")


def cmd_summary(a):
    board, _, _ = paths(a)
    rows = read_board(board)
    from collections import Counter
    for col in ("Decision", "Status", "Tier"):
        c = Counter(r[col] or "(empty)" for r in rows.values())
        print(f"{col:9} " + ", ".join(f"{k}: {v}" for k, v in sorted(c.items())))
    left = [r for r in rows.values() if r["Decision"] == "build" and r["Status"] not in ("built", "verified")]
    und = [r for r in rows.values() if r["Decision"] not in ("build", "skip")]
    print(f"build, not built: {len(left)} screens, complexity {sum(int(r['Cx'] or 0) for r in left)}")
    print(f"undecided (ask/?build/?skip/empty): {len(und)} screens, complexity {sum(int(r['Cx'] or 0) for r in und)}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dir", default="migration", help="folder holding board.md (default: migration)")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("init"); p.add_argument("--screens"); p.add_argument("--routes"); p.add_argument("--import-routes"); p.add_argument("--force", action="store_true")
    p = sub.add_parser("triage"); p.add_argument("--survey")
    p = sub.add_parser("set"); p.add_argument("screen"); p.add_argument("pairs", nargs="+")
    p = sub.add_parser("note"); p.add_argument("screen"); p.add_argument("text")
    p = sub.add_parser("show"); p.add_argument("--status"); p.add_argument("--decision"); p.add_argument("--tier"); p.add_argument("--cols")
    p = sub.add_parser("tier"); p.add_argument("--tiers", required=True)
    sub.add_parser("summary")
    a = ap.parse_args()
    {"init": cmd_init, "triage": cmd_triage, "set": cmd_set, "note": cmd_note, "show": cmd_show,
     "tier": cmd_tier, "summary": cmd_summary}[a.cmd](a)


if __name__ == "__main__":
    main()
