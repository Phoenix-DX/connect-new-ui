"""Mark "stale" the checklist rows that rest on a TST file that a later TST publish changed or removed.

Usage (from the project root):
  python3 migration/clarify/tools/mark_stale.py [--drift migration/clarify/review/survey-drift] [--since 2026-10-27] [--dry-run]
Changed files (data of the survey drift check): survey-diff.json "removed", logic-changes.json (logic changed after
masking the OutSystemsDebugger ids), runtime-sources-result.json "changed" and the removed module scripts of
"not_in_manifest", shell-sources-result.json "changed".
Each row gets the reasons found (a row can have more than one):
  removed     a text field cites a file that TST removed;
  lines       it cites changed lines of a changed file (old lines from the survey of 2026-10-13 or from git at --base,
              compared after masking the debugger ids);
  file        it cites a changed file without line numbers, or with lines that cannot be mapped;
  lines-same  it cites a changed file, but none of the cited lines changed;
  screen      its screen names a changed screen or block that no text field cites.
A row is stale when one of its reasons is in --mark (default: all, user decision 2026-10-28). It gets
"stale": {"since", "level", "by", "files"}; level "strong" = removed, lines or file; "weak" = only lines-same or screen.
Read the strong rows first when a route is judged again. The verdict does not change. Running it again replaces the
field. Writes <drift>/impact.txt: the count per reason and per flow (strong/weak), and the row ids.
"""
import argparse, collections, difflib, glob, json, os, re, subprocess

C = "migration/clarify"
SURVEYS = ["capture/survey-UBTConnect-2026-10-13.json", "capture/survey-UBTConnect.json"]
RUNTIME = ["migration/runtime-sources", "migration/shell/sources"]
FIELDS = ["element", "os", "tst", "evidence", "react", "note", "finding"]
CITE = re.compile(r"\b([A-Za-z]\w*(?:\.\w+)*\.js)\b(?::(\d+(?:-\d+)?(?:\s*,\s*\d+(?:-\d+)?)*))?")
DEBUG_ID = re.compile(r'"[A-Za-z0-9+/_=.:-]{16,}"')
REASONS = ["removed", "lines", "file", "lines-same", "screen"]
STRONG = {"removed", "lines", "file"}
KINDS = ("mvc.js", "controller.js", "model.js", "entities.js", "aggregates.IDB.js", "clientVariables.js")


def changed_files(drift):
    load = lambda n: json.load(open(os.path.join(drift, n), encoding="utf-8"))
    out = {f: "logic changed" for f in load("logic-changes.json")}
    out.update({f: "removed" for f in load("survey-diff.json")["removed"]})
    rs = load("runtime-sources-result.json")
    out.update({f: "logic changed" for f in rs["changed"]})
    # a module script missing from the live manifest belongs to a removed module; other files (favicon, PWA files)
    # are not manifest entries at all
    out.update({f: "removed" for f in rs["not_in_manifest"] if f.endswith(KINDS)})
    out.update({f: "logic changed" for f, st in load("shell-sources-result.json").items() if st == "changed"})
    return out


def lines_of(text):
    """The lines of a compiled file, with the OutSystemsDebugger ids masked (new ids at each publish)."""
    out = []
    for l in text.lstrip("\ufeff").replace("\r\n", "\n").split("\n"):
        out.append(DEBUG_ID.sub('"#"', l) if "OutSystemsDebugger." in l else l)
    return out


class Sources:
    """Old and live text of the changed files; old = the survey of 2026-10-13 and git at the base commit."""

    def __init__(self, base):
        self.old_survey = json.load(open(SURVEYS[0], encoding="utf-8"))["sources"]
        self.live_survey = json.load(open(SURVEYS[1], encoding="utf-8"))["sources"]
        self.base, self.cache = base, {}

    def git_old(self, name):
        for d in RUNTIME:
            r = subprocess.run(["git", "show", f"{self.base}:{d}/{name}"], capture_output=True, text=True)
            if r.returncode == 0:
                return r.stdout
        return None

    def changed_lines(self, name):
        """1-based old line numbers that changed, or None when the old text is missing or ambiguous."""
        if name in self.cache:
            return self.cache[name]
        olds = [t for t in (self.old_survey.get(name), self.git_old(name)) if t is not None]
        live = self.live_survey.get(name)
        if live is None:
            for d in RUNTIME:
                p = os.path.join(d, name)
                if os.path.isfile(p):
                    live = open(p, encoding="utf-8", errors="replace").read()
        res = None
        if olds and live is not None and all(lines_of(t) == lines_of(olds[0]) for t in olds):
            a, b = lines_of(olds[0]), lines_of(live)
            res = (set(), len(a))
            for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
                if tag in ("replace", "delete"):
                    res[0].update(range(i1 + 1, i2 + 1))
                elif tag == "insert":
                    res[0].update((i1, i1 + 1))
        self.cache[name] = res
        return res


def cited_lines(spec):
    out = set()
    for part in spec.split(","):
        x, _, y = part.strip().partition("-")
        out.update(range(int(x), int(y or x) + 1))
    return out


def known_names():
    names = set()
    for p in SURVEYS:
        if os.path.isfile(p):
            names.update(json.load(open(p, encoding="utf-8"))["sources"])
    for d in RUNTIME:
        names.update(os.path.basename(p) for p in glob.glob(os.path.join(d, "*.js")))
    return names


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--drift", default=os.path.join(C, "review", "survey-drift"))
    ap.add_argument("--since", default="2026-10-27", help="date of the TST publish")
    ap.add_argument("--base", default="f9f68bfc", help="git commit with the runtime and shell sources before the switch")
    ap.add_argument("--mark", default=",".join(REASONS), help="the reasons that make a row stale")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    mark = set(a.mark.split(","))
    changed = changed_files(a.drift)
    src = Sources(a.base)
    names = known_names() | set(changed)
    by_short = collections.defaultdict(set)
    for n in names:
        parts = n.split(".")
        for i in range(1, len(parts) - 1):
            by_short[".".join(parts[i:])].add(n)
    screens = collections.defaultdict(set)
    for f in changed:
        if f.endswith(".mvc.js"):
            screens[f[: -len(".mvc.js")].split(".")[-1]].add(f)

    def resolve(token):
        if token in names:
            return {token}
        if token in KINDS:
            return set()
        return by_short.get(token, set())

    per_flow = collections.OrderedDict()
    rows_by = collections.Counter()
    for cp in sorted(glob.glob(os.path.join(C, "flows", "*", "checklist.json"))):
        raw = open(cp, encoding="utf-8").read()
        d = json.loads(raw)
        flow = d.get("flow") or os.path.basename(os.path.dirname(cp))
        ids = []
        for r in d["rows"]:
            found = collections.defaultdict(set)  # file -> reasons
            for k in FIELDS:
                v = r.get(k)
                if not isinstance(v, str):
                    continue
                for t, spec in CITE.findall(v):
                    for f in resolve(t):
                        if f not in changed:
                            continue
                        if changed[f] == "removed":
                            found[f].add("removed")
                            continue
                        cl = src.changed_lines(f) if spec else None
                        want = cited_lines(spec) if spec else set()
                        if cl is None or not want or max(want) > cl[1]:
                            found[f].add("file")
                        else:
                            found[f].add("lines" if want & cl[0] else "lines-same")
            for t in re.split(r"[^\w]+", r.get("screen") or ""):
                for f in screens.get(t, ()):
                    if f not in found:
                        found[f].add("screen")
            # a file with changed lines in one citation is not "lines-same" for the row
            for f, v in found.items():
                if "lines" in v or "file" in v:
                    v.discard("lines-same")
            by = {x for v in found.values() for x in v}
            rows_by.update(by)
            if by & mark:
                r["stale"] = {"since": a.since, "level": "strong" if by & STRONG else "weak", "by": [x for x in REASONS if x in by],
                              "files": sorted(f"{f} ({'/'.join(x for x in REASONS if x in v)})" for f, v in found.items())}
                ids.append((r["id"], r["stale"]["level"]))
            else:
                r.pop("stale", None)
        per_flow[flow] = (len(d["rows"]), ids)
        # keep the indent of the file; write only a changed file
        indent = len(re.match(r"\{\n( *)", raw).group(1)) if raw.startswith("{\n") else 1
        new = json.dumps(d, indent=indent, ensure_ascii=False) + ("\n" if raw.endswith("\n") else "")
        if not a.dry_run and new != raw:
            open(cp, "w", encoding="utf-8").write(new)
    n = sum(len(i) for _, i in per_flow.values())
    rows = sum(c for c, _ in per_flow.values())
    out = [f"Stale checklist rows after the TST publish of {a.since} (tools/mark_stale.py, {len(changed)} changed or removed files)",
           f"Stale rows: {n} of {rows}, strong {sum(l == 'strong' for _, i in per_flow.values() for _, l in i)}"
           f" (reasons that mark: {', '.join(x for x in REASONS if x in mark)})",
           "Rows with each reason (a row can have more than one): " + ", ".join(f"{x} {rows_by[x]}" for x in REASONS), "",
           "Flow\tStale\tStrong\tRows"]
    out += [f"{fl}\t{len(i)}\t{sum(l == 'strong' for _, l in i)}\t{c}"
            for fl, (c, i) in sorted(per_flow.items(), key=lambda x: -len(x[1][1])) if i]
    out += ["", "Row ids per flow (* = strong)"]
    out += [f"{fl}: {', '.join(r + ('*' if l == 'strong' else '') for r, l in i)}" for fl, (c, i) in per_flow.items() if i]
    if not a.dry_run:
        open(os.path.join(a.drift, "impact.txt"), "w", encoding="utf-8").write("\n".join(out) + "\n")
    print("\n".join(out[:3] + out[4:4 + 14]))


if __name__ == "__main__":
    main()
