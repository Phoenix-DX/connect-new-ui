#!/usr/bin/env python3
"""Per-route stylesheet sets for the clone: writes app/src/app/routes.css.generated.ts.

The original OutSystems runtime keeps in <head> exactly the stylesheets of the current screen, in a stable order
(css_observe.cjs on TST). This script gives every route of routes.generated.ts that ordered list:

- captured screens: the `/* ==== /UBTConnect/css/<file>.css ==== */` markers of
  migration/screens/<S>/analysis/styles/bundle.css (document order of a fresh load);
- other screens: the compiled `View.getCssDependencies()` of the screen and of its block closure (`View.getBlocks()`,
  children first, keep-first de-duplication; `_Basic.css` first), sorted by the canonical order merged from all
  captured orders. Pairs not ordered by any capture keep the compiled order.

Conflicts: a pair of stylesheets captured in both orders. A conflict is accepted only when the compiled closure order
reproduces every captured order of that pair (the block tree explains it); the pair then keeps the compiled order.
Any other conflict, a cycle in the merged order, a route screen without compiled source, or a stylesheet missing
from the survey manifest stops the script (exit 1). Output is deterministic.

Also writes app/.storybook/preview-head.html: the default screen's (HomeFeed) set as static imports into the legacy
cascade layer (app/src/styles/layers.css), as StylesheetHost loads them in the app, since stories render without the
router.

Usage (from the project root): python3 migration/tools/css_sets.py [--check]
  --check  exit 1 when a generated file is not up to date (writes nothing).
"""
import glob
import json
import os
import re
import sys
from itertools import combinations

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
SURVEY = os.path.join(ROOT, "capture", "survey-UBTConnect.json")
ROUTES_TS = os.path.join(ROOT, "app", "src", "app", "routes.generated.ts")
OUT = os.path.join(ROOT, "app", "src", "app", "routes.css.generated.ts")
STORYBOOK_HEAD = os.path.join(ROOT, "app", ".storybook", "preview-head.html")
SCREENS = os.path.join(ROOT, "migration", "screens")
EXTRA_SOURCES = [os.path.join(SCREENS, "*", "analysis", "sources", "raw", "*.mvc.js"),
                 os.path.join(ROOT, "migration", "shell", "sources", "*.mvc.js")]
BASIC = "_Basic.css"
DEFAULT_SCREEN = "HomeFeed"

MARKER = re.compile(r"/\* ==== /UBTConnect/css/([^ ]+\.css) ==== \*/")
CSS_FN = re.compile(r"View\.getCssDependencies\s*=\s*function\s*\(\)\s*\{\s*return\s*\[([^\]]*)\]")
BLOCKS_FN = re.compile(r"View\.getBlocks\s*=\s*function\s*\(\)\s*\{\s*return\s*\[([^\]]*)\]")
VIEW_DEFINE = re.compile(r'define\("([^"]+)\.mvc\$view",\s*\[([^\]]*)\]')


def fail(msg):
    print("css_sets: " + msg, file=sys.stderr)
    sys.exit(1)


def load_sources():
    """Compiled .mvc.js files: the survey first, then the per-route and shell source dumps for anything missing."""
    survey = json.load(open(SURVEY, encoding="utf-8"))
    sources = dict(survey["sources"])
    for pattern in EXTRA_SOURCES:
        for p in sorted(glob.glob(pattern)):
            name = os.path.basename(p)
            if name not in sources:
                sources[name] = open(p, encoding="utf-8").read()
    manifest = {x[len("/UBTConnect/css/"):] for x in survey["manifest"] if x.startswith("/UBTConnect/css/")}
    return sources, manifest


def parse_views(sources):
    """view module name -> (css files, child view module names)."""
    views = {}
    for name in sorted(sources):
        if not name.endswith(".mvc.js"):
            continue
        text = sources[name]
        module = name[: -len(".mvc.js")]
        css_m, blocks_m = CSS_FN.search(text), BLOCKS_FN.search(text)
        if not css_m:
            continue
        css = [c[len("css/"):] for c in re.findall(r'"([^"]+)"', css_m.group(1))]
        var_to_module = {}
        define = VIEW_DEFINE.search(text)
        if define:
            for dep in re.findall(r'"([^"]+)"', define.group(2)):
                if dep.endswith(".mvc$view"):
                    var_to_module[re.sub(r"[.$]", "_", dep)] = dep[: -len(".mvc$view")]
        children = []
        if blocks_m:
            for var in [v.strip() for v in blocks_m.group(1).split(",") if v.strip()]:
                if var not in var_to_module:
                    fail(f"{name}: getBlocks() names {var}, which is not a view dependency")
                children.append(var_to_module[var])
        views[module] = (css, children)
    return views


def route_screens():
    text = open(ROUTES_TS, encoding="utf-8").read()
    return sorted(set(re.findall(r'"screen":\s*"([^"]+)"', text)) | {DEFAULT_SCREEN})


def screen_module(views, app, screen):
    hits = sorted(m for m in views if m.startswith(app + ".") and m.split(".")[-1] == screen and len(m.split(".")) == 3)
    if len(hits) != 1:
        fail(f"screen {screen}: expected one compiled view {app}.<Flow>.{screen}.mvc.js, found {hits or 'none'}")
    return hits[0]


def compiled_set(views, module):
    """Runtime order: children (getBlocks order, depth first) before the view's own list; first occurrence wins."""
    out, seen, missing = [BASIC], set(), []

    def visit(m):
        if m in seen:
            return
        seen.add(m)
        if m not in views:
            missing.append(m)
            return
        css, children = views[m]
        for child in children:
            visit(child)
        for c in css:
            if c not in out:
                out.append(c)

    visit(module)
    return out, sorted(set(missing))


def captured_sets():
    sets = {}
    for p in sorted(glob.glob(os.path.join(SCREENS, "*", "analysis", "styles", "bundle.css"))):
        screen = p.split(os.sep)[-4]
        files = MARKER.findall(open(p, encoding="utf-8").read())
        if files:
            sets[screen] = files
    return sets


def before_pairs(order):
    return {(a, b) for a, b in combinations(order, 2)}


def main():
    check = "--check" in sys.argv[1:]
    sources, manifest = load_sources()
    views = parse_views(sources)
    screens = route_screens()
    captured = captured_sets()
    app = "UBTConnect"

    compiled, notes = {}, []
    for s in sorted(set(screens) | set(captured)):
        order, missing = compiled_set(views, screen_module(views, app, s))
        compiled[s] = order
        if missing:
            notes.append(f"{s}: blocks without compiled source (CSS unknown): {', '.join(missing)}")

    # canonical order: every "a before b" seen in a capture
    seen_pairs = {}
    for s, order in captured.items():
        for pair in before_pairs(order):
            seen_pairs.setdefault(pair, []).append(s)
    conflicts = sorted({tuple(sorted(p)) for p in seen_pairs if (p[1], p[0]) in seen_pairs})
    accepted = []
    for a, b in conflicts:
        bad = []
        for s, order in captured.items():
            if a in order and b in order:
                c = compiled[s]
                if a not in c or b not in c or (order.index(a) < order.index(b)) != (c.index(a) < c.index(b)):
                    bad.append(s)
        ab, ba = sorted(seen_pairs[(a, b)]), sorted(seen_pairs[(b, a)])
        line = f"{a} / {b}: before in {', '.join(ab)}; after in {', '.join(ba)}"
        if bad:
            fail("canonical-order conflict not explained by the compiled block order (" + ", ".join(bad) + "): " + line)
        accepted.append(line)
    constraints = {p for p in seen_pairs if (p[1], p[0]) not in seen_pairs}

    # compiled closure vs capture, for the record (a mismatch means the closure rule misses something)
    for s in sorted(captured):
        if captured[s] != compiled[s]:
            extra = [c for c in compiled[s] if c not in captured[s]]
            lost = [c for c in captured[s] if c not in compiled[s]]
            notes.append(f"{s}: compiled closure differs from the capture (capture used)"
                         + (f"; only compiled: {', '.join(extra)}" if extra else "")
                         + (f"; only captured: {', '.join(lost)}" if lost else "")
                         + ("" if extra or lost else "; order only"))

    def canonical_sort(screen, files):
        pos = {f: i for i, f in enumerate(files)}
        pending, out = list(files), []
        while pending:
            ready = [f for f in pending if not any((g, f) in constraints for g in pending if g != f)]
            if not ready:
                fail(f"{screen}: cycle in the merged captured order among {', '.join(pending)}")
            nxt = min(ready, key=lambda f: pos[f])
            out.append(nxt)
            pending.remove(nxt)
        return out

    result, origin = {}, {}
    for s in screens:
        if s in captured:
            result[s], origin[s] = captured[s], "capture"
        else:
            result[s], origin[s] = canonical_sort(s, compiled[s]), "compiled"
    unknown = sorted({f for files in result.values() for f in files} - manifest)
    if unknown:
        fail("stylesheets not in the survey manifest: " + ", ".join(unknown))

    lines = [
        "// GENERATED by migration/tools/css_sets.py. Do not edit by hand; re-run the script.",
        "// Route screen -> the original stylesheets in document order (public/UBTConnect/css/<file>).",
        "// capture = markers of migration/screens/<S>/analysis/styles/bundle.css; compiled = getCssDependencies of the",
        "// screen and its block closure, sorted by the order merged from all captures.",
    ]
    for line in accepted:
        lines.append("// conflict kept in compiled order: " + line)
    lines += [
        "export type CssSetOrigin = 'capture' | 'compiled';",
        f"export const DEFAULT_CSS_SCREEN = '{DEFAULT_SCREEN}';",
        "export const ROUTE_CSS: Readonly<Record<string, readonly string[]>> = {",
    ]
    for s in screens:
        lines.append(f"  {s}: [")
        lines += [f"    '{f}'," for f in result[s]]
        lines.append("  ],")
    lines += ["};", "export const ROUTE_CSS_ORIGIN: Readonly<Record<string, CssSetOrigin>> = {"]
    lines += [f"  {s}: '{origin[s]}'," for s in screens]
    lines += ["};", ""]
    text = "\n".join(lines)

    head = ("<!-- GENERATED by migration/tools/css_sets.py: the original stylesheets of the default screen ("
            + DEFAULT_SCREEN + "), in document order,\n     imported into the legacy cascade layer "
            "(src/styles/layers.css). The app syncs them per route (src/legacy/os/StylesheetHost.tsx);\n     "
            "stories render without the router. -->\n<style>\n"
            + "".join(f"  @import url('/UBTConnect/css/{f}') layer(legacy);\n" for f in result[DEFAULT_SCREEN])
            + "</style>\n")
    outputs = [(OUT, text), (STORYBOOK_HEAD, head)]
    stale = [p for p, content in outputs
             if (open(p, encoding="utf-8").read() if os.path.exists(p) else None) != content]
    n_cap = sum(1 for s in screens if origin[s] == "capture")
    summary = (f"{len(screens)} route screens: {n_cap} from captures, {len(screens) - n_cap} from compiled code; "
               f"{len(accepted)} accepted conflict(s)")
    for n in notes:
        print("note: " + n)
    if check:
        if stale:
            fail("out of date: " + ", ".join(os.path.relpath(p, ROOT) for p in stale)
                 + "; run python3 migration/tools/css_sets.py")
        print("css_sets: up to date; " + summary)
        return
    for p, content in outputs:
        if p in stale:
            with open(p, "w", encoding="utf-8") as f:
                f.write(content)
    print(f"css_sets: wrote {', '.join(os.path.relpath(p, ROOT) for p in stale) or 'nothing (up to date)'}; " + summary)

if __name__ == "__main__":
    main()
