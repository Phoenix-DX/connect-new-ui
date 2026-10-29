#!/usr/bin/env python3
"""
consistency_check.py: check that one route's code follows the confirmed stack and conventions (stack.json).
Run by route.py finish; run it yourself while building.

  python3 consistency_check.py --screen <S> [--app-dir app] [--migration-dir migration]

The route's code is app/src/pages/<S>/ (page template, app/docs/guides/page-template.md). Folder imports (pages,
api, components, containers, platform, legacy) are checked by `npm run arch` (dependency-cruiser), which route.py ready
runs; requiredIfCalls and allowedImportRoots were dropped (user, 2026-10-29, I10-5 a).

Checks
  files      required files exist in app/src/pages/<S>/ (stack.json rules.requiredFiles; "{screen}" is replaced by the
             route name, so "{screen}Page.tsx" means app/src/pages/<S>/<S>Page.tsx)
  imports    packages only from the allow-list (relative and "@/" imports are left to npm run arch)
  forbidden  rules.forbidden patterns (raw fetch, browser storage, route CSS, inline visual styles, raw HTML, wire shapes in
             components, debug output), each with its id and reason. NO-INLINE-COLOR allows an inline style whose every
             declaration appears in an inline style attribute of the captured DOM (analysis/dom/*.raw.html): OutSystems
             widgets often carry inline styles from the Styles Editor, and reproducing them is parity, not a workaround; for a
             no-capture route the inline styles of the compiled .mvc.js files its route-spec cites count instead
  package    app/package.json matches the pinned allow-list (a route must never add packages)
  patterns   every pattern id listed under "Patterns used" in route-spec.md exists and is accepted
  fixtures   a route whose mocks use recorded fixtures (recordedHandler) needs fixtures the user reviewed
             (har_to_fixtures.py review --by user) and that have not changed since
Exit code 0 when clean, 1 otherwise.
"""
import argparse, fnmatch, glob, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

IMPORT_RE = re.compile(r"""(?:import\s[^'"]*?from\s*|import\s*\(\s*|import\s+|export\s[^'"]*?from\s*|require\s*\(\s*)['"]([^'"]+)['"]""")


def pkg_name(spec):
    parts = spec.split("/")
    return "/".join(parts[:2]) if spec.startswith("@") else parts[0]


def file_matches(rule_files, name):
    if rule_files in ("*", "", None):
        return True
    if rule_files.startswith("!"):
        return not any(fnmatch.fnmatch(name, p.strip()) for p in rule_files[1:].split(","))
    return any(fnmatch.fnmatch(name, p.strip()) for p in rule_files.split(","))


def strip_comments(src):
    src = re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group(0).count("\n"), src, flags=re.S)
    return re.sub(r"(^|[^:])//[^\n]*", r"\1", src)


STYLE_OBJ = re.compile(r"style=\{\{(.*?)\}\}", re.S)
PAIR = re.compile(r"(['\"]?)([A-Za-z-]+)\1\s*:\s*(?:(['\"`])(.*?)\3|(-?[\d.]+))")
UNITLESS = {"opacity", "z-index", "flex", "flex-grow", "flex-shrink", "order", "font-weight", "line-height", "zoom"}


def norm_decl(prop, value):
    v = re.sub(r"\s+", " ", str(value).strip().lower()).replace(", ", ",")
    v = re.sub(r"^(-?0)(px|%|em|rem)?$", "0", v)
    return f"{prop.strip().lower()}:{v}"


def captured_inline_styles(mig_dir, screen):
    """Every declaration of every inline style attribute in the captured DOM of the route."""
    found = set()
    d = os.path.join(mig_dir, "screens", screen, "analysis", "dom")
    files = glob.glob(os.path.join(d, "*.raw.html")) or glob.glob(os.path.join(d, "*.html"))
    for p in files:
        for st in re.findall(r'style="([^"]*)"', open(p, encoding="utf-8", errors="ignore").read()):
            for decl in st.replace("&quot;", '"').split(";"):
                if ":" in decl:
                    k, v = decl.split(":", 1)
                    found.add(norm_decl(k, v))
    # A route the user decided not to capture (no-capture.json) has no DOM: its evidence is the compiled view. Inline
    # styles written in the compiled .mvc.js files that its route-spec cites (style: "...") count as captured.
    sdir = os.path.join(mig_dir, "screens", screen)
    spec = os.path.join(sdir, "route-spec.md")
    if os.path.exists(os.path.join(sdir, "no-capture.json")) and os.path.exists(spec):
        root = os.path.dirname(os.path.abspath(mig_dir))
        for rel in sorted(set(re.findall(r"(migration/[\w./-]+\.mvc\.js)", open(spec, encoding="utf-8").read()))):
            f = os.path.join(root, rel)
            if not os.path.exists(f):
                continue
            for st in re.findall(r'\bstyle:\s*"([^"]*)"', open(f, encoding="utf-8", errors="ignore").read()):
                for decl in st.split(";"):
                    if ":" in decl:
                        k, v = decl.split(":", 1)
                        found.add(norm_decl(k, v))
    return found


def inline_style_problems(src, rel, captured):
    """NO-INLINE-COLOR: a visual inline style passes only when every declaration is one the capture shows."""
    probs = []
    for m in STYLE_OBJ.finditer(src):
        line = src[:m.start()].count("\n") + 1
        body = m.group(1)
        decls = []
        for _, k, _, sv, nv in PAIR.findall(body):
            if k.startswith("--"):
                continue   # CSS variables from the capture are always fine
            prop = re.sub(r"[A-Z]", lambda x: "-" + x.group(0).lower(), k)
            val = sv if nv == "" else (nv if prop in UNITLESS or nv in ("0", "-0") else nv + "px")
            decls.append(norm_decl(prop, val))
        visual = [x for x in decls if re.match(r"(color|background|font|margin|padding)", x)]
        if not visual and not re.search(r"(color|background|font|margin|padding)\w*\s*:", body, re.I):
            continue
        if not decls or re.search(r"\$\{", body) or re.search(r"[^\s,]", PAIR.sub("", body)):
            probs.append(f"[NO-INLINE-COLOR] {rel}:{line}: computed inline visual style; fix visual differences in markup")
            continue
        miss = [x for x in decls if x not in captured]
        if miss:
            probs.append(f"[NO-INLINE-COLOR] {rel}:{line}: inline style not in the captured DOM ({', '.join(miss[:3])}); "
                         "copy the captured style attribute exactly, or fix it in markup")
    return probs


def page_root(app_dir, screen):
    """The route's own code in the page-template layout: app/src/pages/<S>/."""
    return os.path.join(app_dir, "src", "pages", screen)


def required_files(rules, screen):
    """rules.requiredFiles with the "{screen}" placeholder replaced by the route name."""
    return [f.replace("{screen}", screen) for f in rules.get("requiredFiles", [])]


def check(screen, app_dir, mig_dir):
    from stack import cmd_check, all_patterns  # noqa: E402
    st_path = os.path.join(mig_dir, "stack.json")
    if not os.path.exists(st_path):
        return ["stack.json missing: run stack.py init and confirm the stack with the user"]
    st = json.load(open(st_path, encoding="utf-8"))
    rules = st["rules"]
    allowed_pkgs = set(st["dependencies"]) | set(st["devDependencies"])
    root = page_root(app_dir, screen)
    probs = []
    if not os.path.isdir(root):
        return [f"{root} does not exist"]
    files = [p for p in glob.glob(os.path.join(root, "**", "*"), recursive=True) if os.path.isfile(p)]
    code = [p for p in files if p.endswith((".ts", ".tsx", ".js", ".jsx"))]
    names = {os.path.relpath(p, root) for p in files}
    for f in required_files(rules, screen):
        if f not in names:
            probs.append(f"[files] {f} missing")
    captured = None
    for p in code:
        rel = os.path.relpath(p, root)
        src = strip_comments(open(p, encoding="utf-8", errors="ignore").read())
        for spec in IMPORT_RE.findall(src):
            if spec.startswith((".", "@/", "src/")):
                continue   # folder imports: npm run arch (dependency-cruiser) checks them
            if pkg_name(spec) not in allowed_pkgs and not spec.startswith(("react/", "react-dom/", "msw/")):
                probs.append(f"[imports] {rel}: package '{pkg_name(spec)}' is not in the allow-list")
        lines = src.split("\n")
        # tests and stories are not route code: the forbidden rules skip them (user, 2026-10-29, I10-9 a)
        is_test = re.search(r"\.(test|spec|stories)\.[jt]sx?$", p) is not None
        for f in rules["forbidden"]:
            if is_test or not file_matches(f.get("files", "*"), os.path.basename(p)):
                continue
            if f["id"] == "NO-INLINE-COLOR":
                if captured is None:
                    captured = captured_inline_styles(mig_dir, screen)
                probs += inline_style_problems(src, rel, captured)
                continue
            rx = re.compile(f["regex"])
            for n, line in enumerate(lines, 1):
                if rx.search(line):
                    probs.append(f"[{f['id']}] {rel}:{n}: {f['why']}")
                    break
    probs += [f"[package] {x}" for x in cmd_check(type("A", (), {"migration_dir": mig_dir, "app_dir": app_dir})(), quiet=True)
              if x.startswith("package.json")]
    if any("recordedHandler" in open(p, encoding="utf-8", errors="ignore").read() for p in code):
        from har_to_fixtures import check_reviewed  # noqa: E402
        fx = os.path.join(app_dir, "src", "mocks", "fixtures")
        if not os.path.exists(os.path.join(fx, "index.json")):
            probs.append(f"[fixtures] the route uses recordedHandler but {fx} has no fixtures")
        probs += [f"[fixtures] {x}" for x in check_reviewed(fx)]
    spec = os.path.join(mig_dir, "screens", screen, "route-spec.md")
    if os.path.exists(spec):
        t = open(spec, encoding="utf-8").read()
        m = re.search(r"^##\s+(?:\d+[a-z]?\.\s*)?Patterns used\s*$(.*?)(?=^## |\Z)", t, re.M | re.S | re.I)
        if m:
            class A: pass
            a = A(); a.migration_dir = mig_dir
            known = {p["id"]: p["status"] for p in all_patterns(a)}
            for pid in re.findall(r"\b(P-[A-Z0-9-]+)\b", m.group(1)):
                if pid not in known:
                    probs.append(f"[patterns] {pid} listed in route-spec.md does not exist")
                elif known[pid] != "accepted":
                    probs.append(f"[patterns] {pid} is not accepted by the user yet")
    return probs


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--screen", required=True)
    ap.add_argument("--app-dir", default="app")
    ap.add_argument("--migration-dir", default="migration")
    a = ap.parse_args()
    probs = check(a.screen, a.app_dir, a.migration_dir)
    if probs:
        print(f"consistency: {len(probs)} problem(s) in {a.screen}")
        for p in probs:
            print("  " + p)
        sys.exit(1)
    print(f"consistency: {a.screen} OK")


if __name__ == "__main__":
    main()
