#!/usr/bin/env python3
"""
flags.py: find every feature flag the app's routes depend on, warn per route, and track what the OutSystems MCP
says about each flag and what the user decided. Output is the reference for flags: migration/flags.md.

  scan  [--survey capture/survey-<App>.json] [--screens migration/survey/screens.json] [--screens-dir migration/screens]
        detect flags in compiled code (survey sources and each route's analysis/sources). Keeps earlier answers.
  questions [--route S]       flags still missing an MCP answer or a user decision, with the MCP questions to ask
  mcp    <flag> --answer "..." [--values "dev=on, test=off, prod=?"] [--source "Module/Element"]
                              record what the OutSystems MCP said (read-only tools). Use --unavailable if it cannot tell.
  decide <flag> --by user --decision "..." [--key NewHome] [--default on] [--values on,off] [--branches both|default-only|none]
              [--reference capture|none]
                              how routes handle the flag. --branches both: the route builds every value, switched by the
                              clone's flag store (useFlag); --reference capture (default for both): every non-default value
                              needs a captured flag variant (capture plan flagVariants), or route.py ready refuses the route;
                              --reference none: the user accepts that the other branch has no captured reference.
  export --app app            write app/src/lib/flags.generated.json (key, default, values, branches, routes) for the clone
  variants                    flagVariants skeleton for the capture plan, one per value to capture
  route  <S>                  flags of one route (used by context_pack.py and route.py gates)
  warn                        one line per route with flags, unanswered ones first

Detected signals (each flag lists where it was seen; "candidate" = name-based guess, confirm with the MCP):
  static entity records whose entity or record name looks like a flag (Feature/Flag/Toggle/Darkly/FF)
  client variables with flag-like names (…Enabled, …Flag, Feature…, Has…Access)
  calls of client/server actions with flag-like names (GetHas…Enabled, IsFeatureEnabled, …Flag…, LaunchDarkly wrappers),
  plus string keys passed to them (likely remote flag keys)
Screens in the same variant group (New_/Legacy_/V2) are noted: a flag often selects between them.
"""
import argparse, datetime, glob, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

ENTITY_RE = re.compile(r"(feature|flag|toggle|darkly|(^|_)ff(_|$))", re.I)
VAR_RE = re.compile(r"(flag|feature|toggle|darkly|enabled$|^has\w*access$|^is\w*enabled$)", re.I)
# "toggle" alone is UI (onToggle, toggleSideMenu, bottomSheetOnToggle): only with feature/flag. getHas… helpers wrap
# permission / feature-flag checks (UBTConnect: GetHasNewNotifications → OutSystems_FF.C2NewNotifications).
ACTION_RE = re.compile(r"(flag|feature|darkly|^gethas\w+$|^is\w*enabled$|^has\w*enabled$|^check\w*enabled$)", re.I)
STATIC_RE = re.compile(r"staticEntities\.(\w+)\.(\w+)")
CLIENTVAR_RE = re.compile(r"ClientVariables\.(?:get|set)(\w+)\(")
ACTIONCALL_RE = re.compile(r"\.(\w+?)\$Action\(([^;]{0,240})")
KEY_RE = re.compile(r"""["']([A-Za-z][A-Za-z0-9_.-]{2,60})["']""")


def now():
    return datetime.datetime.now().isoformat(timespec="seconds")


def path(a):
    return os.path.join(a.migration_dir, "flags.json")


def load(a):
    try:
        return json.load(open(path(a), encoding="utf-8"))
    except (OSError, ValueError):
        return {"flags": {}, "scannedAt": None}


def save(a, d):
    os.makedirs(a.migration_dir, exist_ok=True)
    json.dump(d, open(path(a), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    render(a, d)


def scan_source(fname, src, found):
    def add(name, kind, cand=True):
        f = found.setdefault(name, {"kinds": set(), "files": set(), "candidate": True})
        f["kinds"].add(kind); f["files"].add(fname)
        f["candidate"] = f["candidate"] and cand
    for ent, rec in STATIC_RE.findall(src):
        if ENTITY_RE.search(ent) or ENTITY_RE.search(rec):
            add(f"{ent}.{rec}", "static entity record", cand=not ENTITY_RE.search(ent))
    for v in CLIENTVAR_RE.findall(src):
        if VAR_RE.search(v):
            add(f"clientVar:{v}", "client variable")
    for act, args in ACTIONCALL_RE.findall(src):
        a = act.lstrip("_")
        if ACTION_RE.search(a):
            add(f"action:{a}", "flag check action")
            if re.search(r"darkly|flag|feature", a, re.I):
                for k in KEY_RE.findall(args):
                    if not re.match(r"^(OS|callContext|true|false|null)$", k):
                        add(f"key:{k}", f"key passed to {a}")


def cmd_scan(a):
    d = load(a)
    found = {}
    sources = {}
    if a.survey and os.path.exists(a.survey):
        sources.update(json.load(open(a.survey, encoding="utf-8")).get("sources", {}))
    for p in glob.glob(os.path.join(a.screens_dir, "*", "analysis", "sources", "raw", "*")):
        sources.setdefault(os.path.basename(p), open(p, encoding="utf-8", errors="ignore").read())
    for f, src in sources.items():
        if f.endswith(".js"):
            scan_source(f, src, found)
    file_users, variants = {}, {}
    if a.screens and os.path.exists(a.screens):
        data = json.load(open(a.screens, encoding="utf-8"))
        for fn, i in data["screens"].items():
            for b in [fn] + i.get("closure", []):
                file_users.setdefault(b, set()).add(i["screen"])
            if i.get("variantGroup"):
                variants.setdefault(i["variantGroup"], []).append(i["screen"])
    for s in (os.path.basename(x) for x in glob.glob(os.path.join(a.screens_dir, "*"))):
        for p in glob.glob(os.path.join(a.screens_dir, s, "analysis", "sources", "raw", "*.mvc.js")):
            file_users.setdefault(os.path.basename(p), set()).add(s)
    old = d["flags"]
    new = {}
    for name, f in sorted(found.items()):
        screens = sorted({u for fl in f["files"] for u in file_users.get(fl, set())})
        controllers = sorted(fl for fl in f["files"] if fl.endswith(".controller.js"))
        prev = old.get(name, {})
        vg = sorted({g for g, ss in variants.items() if set(ss) & set(screens)})
        new[name] = {"kinds": sorted(f["kinds"]), "files": sorted(f["files"])[:30], "screens": screens,
                     "inControllers": controllers, "candidate": f["candidate"], "variantGroups": vg,
                     "mcp": prev.get("mcp", {"status": "open", "answer": "", "values": "", "source": "", "at": None}),
                     "decision": prev.get("decision", {"status": "open", "value": "", "by": None, "at": None})}
    gone = sorted(set(old) - set(new))
    for g in gone:  # keep answers of flags no longer detected, marked
        new[g] = dict(old[g], screens=old[g].get("screens", []), gone=True)
    d.update({"flags": new, "scannedAt": now()})
    save(a, d)
    n_routes = len({s for f in new.values() for s in f["screens"]})
    print(f"{len(new)} flag(s) on {n_routes} route(s) → {path(a)}, flags.md" + (f"; {len(gone)} no longer detected (answers kept)" if gone else ""))


def open_items(f):
    return [x for x, st in (("MCP answer", f["mcp"]["status"]), ("user decision", f["decision"]["status"])) if st == "open"]


def mcp_questions(name, f):
    base = name.split(":", 1)[-1]
    q = [f"Where is `{base}` defined (static entity record, site property, client variable, remote flag key) and what is its default?",
         f"What does `{base}` switch on and off? Which screens/actions read it (check {', '.join(f['inControllers'][:2]) or 'the module controllers'})?",
         f"What is its value in each environment (dev / test / production), and who changes it?",
         "Does the server enforce what the flag hides, or is it client-side only?"]
    if f["variantGroups"]:
        q.append(f"Does it select between the variants {', '.join(f['variantGroups'])}?")
    return q


def cmd_questions(a):
    d = load(a)
    for name, f in d["flags"].items():
        if a.route and a.route not in f["screens"]:
            continue
        oi = open_items(f)
        if not oi or f.get("gone"):
            continue
        print(f"[{name}] {'candidate, ' if f['candidate'] else ''}{', '.join(f['kinds'])}; routes: {', '.join(f['screens'][:6]) or '?'}; missing: {', '.join(oi)}")
        if f["mcp"]["status"] == "open":
            for q in mcp_questions(name, f):
                print(f"    MCP: {q}")
        if f["decision"]["status"] == "open":
            print("    USER: build which branch(es)? e.g. 'value on only' | 'both branches, mock toggle, default <x>' | 'not a flag (false positive)'")


def get(d, name):
    if name not in d["flags"]:
        sys.exit(f"unknown flag {name}; see flags.md")
    return d["flags"][name]


def cmd_mcp(a):
    d = load(a)
    f = get(d, a.flag)
    f["mcp"] = {"status": "unavailable" if a.unavailable else "answered", "answer": a.answer or "", "values": a.values or "",
                "source": a.source or "", "at": now()}
    save(a, d)
    print(f"{a.flag}: MCP {f['mcp']['status']}")


def cmd_decide(a):
    if a.by != "user":
        sys.exit("only the user decides how a flag is handled (--by user)")
    d = load(a)
    f = get(d, a.flag)
    branches = a.branches or ("both" if re.search(r"\bboth\b", a.decision, re.I) else
                              "none" if re.search(r"not a flag|false positive", a.decision, re.I) else "default-only")
    key = a.key or re.split(r"[:.]", a.flag)[-1]
    values = [v.strip() for v in (a.values or "on,off").split(",") if v.strip()]
    default = a.default or (values[0] if values else "on")
    reference = a.reference or ("capture" if branches == "both" else "none")
    f["decision"] = {"status": "decided", "value": a.decision, "by": "user", "at": now(), "key": key, "default": default,
                     "values": values, "branches": branches, "reference": reference}
    save(a, d)
    print(f"{a.flag}: {a.decision} (key {key}, default {default}, branches {branches}, reference {reference})")


def decided(d):
    return {n: f for n, f in d["flags"].items() if f["decision"]["status"] == "decided" and not f.get("gone")
            and f["decision"].get("branches", "default-only") != "none"}


def cmd_export(a):
    d = load(a)
    out = {"_note": "Written by flags.py export from the user's decisions. Do not edit.", "flags": {}}
    for n, f in sorted(decided(d).items()):
        dc = f["decision"]
        out["flags"][dc.get("key") or n] = {"source": n, "default": dc.get("default", "on"), "values": dc.get("values", ["on", "off"]),
                                             "branches": dc.get("branches", "default-only"), "routes": f.get("screens", []),
                                             "decision": dc.get("value", "")}
    p = os.path.join(a.app, "src", "platform", "flags", "flags.generated.json")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    json.dump(out, open(p, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(f"{len(out['flags'])} flag(s) → {p}")


def cmd_variants(a):
    d = load(a)
    vs = []
    for n, f in sorted(decided(d).items()):
        dc = f["decision"]
        if dc.get("branches") != "both" or dc.get("reference") != "capture":
            continue
        for v in dc.get("values", []):
            if v == dc.get("default"):
                continue
            vs.append({"id": f"{dc.get('key')}={v}", "flags": {dc.get("key"): v},
                       "_how": f"set {n} to {v} for the capture: from the MCP answer ({f['mcp'].get('source') or 'see flags.md'}): "
                               "localStorage (client variable), storage (another test account), base (another environment) or overrides "
                               "(flag service answer). Delete this field.",
                       "_routes": f.get("screens", [])})
    print(json.dumps({"flagVariants": vs}, indent=1))
    print("Add each id to the routes' \"flagVariants\" in capture-plan.json, then capture again (route.py step <S> capture).", file=sys.stderr)


def variant_problems(migration_dir, screen, states):
    """Flags of the route built with both branches and reference=capture need a captured state for every non-default value."""
    fl = route_flags(migration_dir, screen) or {}
    probs = []
    for n, f in fl.items():
        dc = f.get("decision", {})
        if dc.get("status") != "decided" or dc.get("branches") != "both" or dc.get("reference") != "capture":
            continue
        key = dc.get("key") or n
        for v in dc.get("values", []):
            if v == dc.get("default"):
                continue
            if not any(str((m.get("flags") or {}).get(key)) == v for m in states.values()):
                probs.append(f"flag {key}={v}: no captured state (add flag variant {key}={v} to the capture plan, or the user decides --reference none)")
    return probs


def route_flags(migration_dir, screen):
    try:
        d = json.load(open(os.path.join(migration_dir, "flags.json"), encoding="utf-8"))
    except (OSError, ValueError):
        return None
    return {n: f for n, f in d["flags"].items() if screen in f.get("screens", []) and not f.get("gone")}


def route_text(migration_dir, screen):
    fl = route_flags(migration_dir, screen)
    if fl is None:
        return "- flags not scanned yet (flags.py scan)"
    if not fl:
        return "- no feature flag detected for this route"
    L = [f"WARNING: {len(fl)} feature flag(s) affect this route. Build only what the user decided; ask if undecided."]
    for n, f in fl.items():
        L.append(f"- `{n}` ({', '.join(f['kinds'])}{', candidate' if f['candidate'] else ''})"
                 f"; MCP: {f['mcp']['status']}{': ' + f['mcp']['answer'][:200] if f['mcp']['answer'] else ''}"
                 f"{' values ' + f['mcp']['values'] if f['mcp']['values'] else ''}"
                 f"; decision: {f['decision']['value'] or 'OPEN'}"
                 f"{' [key ' + f['decision']['key'] + ', default ' + str(f['decision'].get('default')) + ', branches ' + f['decision'].get('branches', '?') + '] read it with useFlag(' + repr(f['decision']['key']) + ')' if f['decision'].get('key') else ''}"
                 f"{'; variants ' + ', '.join(f['variantGroups']) if f['variantGroups'] else ''}")
    return "\n".join(L)


def cmd_route(a):
    print(route_text(a.migration_dir, a.screen))


def cmd_warn(a):
    d = load(a)
    per = {}
    for n, f in d["flags"].items():
        if f.get("gone"):
            continue
        for s in f["screens"]:
            per.setdefault(s, []).append((n, bool(open_items(f))))
    for s, fl in sorted(per.items(), key=lambda kv: (-sum(o for _, o in kv[1]), kv[0])):
        op = [n for n, o in fl if o]
        print(f"⚠ {s}: {len(fl)} flag(s)" + (f", {len(op)} without MCP answer or decision: {', '.join(op[:4])}" if op else ", all answered"))


def render(a, d):
    L = ["# Feature flags", "",
         "Generated by `flags.py`; do not edit by hand. Every flag that affects a route needs what the OutSystems MCP says about it "
         "and a decision by the user on how routes handle it. Candidates are name-based guesses: confirm them with the MCP or mark them "
         "as false positives.", "",
         f"Scanned: {d.get('scannedAt')}", "",
         "| Flag | Kind | Routes | Variants | MCP | Values | Decision |", "|---|---|---|---|---|---|---|"]
    for n, f in sorted(d["flags"].items(), key=lambda kv: (not open_items(kv[1]), kv[0])):
        L.append(f"| `{n}`{' (gone)' if f.get('gone') else ''}{' (candidate)' if f.get('candidate') else ''} | {', '.join(f.get('kinds', []))} | "
                 f"{', '.join(f.get('screens', [])[:8])}{' …' if len(f.get('screens', [])) > 8 else ''} | {', '.join(f.get('variantGroups', [])) or '-'} | "
                 f"{f['mcp']['status']}{': ' + f['mcp']['answer'][:120].replace('|', '/') if f['mcp']['answer'] else ''} | {f['mcp']['values'] or '-'} | "
                 f"{f['decision']['value'].replace('|', '/') if f['decision']['value'] else '**open**'} |")
    L += ["", "## Where each flag is read", ""]
    for n, f in sorted(d["flags"].items()):
        L.append(f"- `{n}`: " + ", ".join(f"`{x}`" for x in f.get("files", [])[:10]))
    open(os.path.join(a.migration_dir, "flags.md"), "w", encoding="utf-8").write("\n".join(L) + "\n")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--migration-dir", default="migration")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("scan"); p.add_argument("--survey"); p.add_argument("--screens"); p.add_argument("--screens-dir", default="migration/screens")
    p = sub.add_parser("questions"); p.add_argument("--route")
    p = sub.add_parser("mcp"); p.add_argument("flag"); p.add_argument("--answer"); p.add_argument("--values"); p.add_argument("--source"); p.add_argument("--unavailable", action="store_true")
    p = sub.add_parser("decide"); p.add_argument("flag"); p.add_argument("--by", required=True); p.add_argument("--decision", required=True)
    p.add_argument("--key"); p.add_argument("--default"); p.add_argument("--values"); p.add_argument("--branches", choices=["both", "default-only", "none"])
    p.add_argument("--reference", choices=["capture", "none"])
    p = sub.add_parser("export"); p.add_argument("--app", default="app")
    sub.add_parser("variants")
    p = sub.add_parser("route"); p.add_argument("screen")
    sub.add_parser("warn")
    a = ap.parse_args()
    {"scan": cmd_scan, "questions": cmd_questions, "mcp": cmd_mcp, "decide": cmd_decide, "route": cmd_route, "warn": cmd_warn,
     "export": cmd_export, "variants": cmd_variants}[a.cmd](a)


if __name__ == "__main__":
    main()
