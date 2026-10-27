"""Index the React code of the screens of one UI flow: files, imports, route meta, and where the app names the
OutSystems actions of the flow.

Usage (from the project root):
  python3 migration/clarify/tools/app_index.py [--app app/src] [--flows migration/clarify/flows] [FLOW ...]
Reads <flows>/<Flow>/pack/meta.json (from flow_pack.py), writes <flows>/<Flow>/pack/app.md.
"""
import argparse, json, os, re, subprocess, sys

IMPORT_RE = re.compile(r"""(?:from|import)\s+['"](@/[^'"]+|\.{1,2}/[^'"]+)['"]""")


def resolve(src_root, from_file, spec):
    if spec.startswith("@/"):
        base = os.path.join(src_root, spec[2:])
    else:
        base = os.path.normpath(os.path.join(os.path.dirname(from_file), spec))
    for cand in (base, base + ".ts", base + ".tsx", os.path.join(base, "index.ts"), os.path.join(base, "index.tsx")):
        if os.path.isfile(cand):
            return cand
    return None


def lines_of(path):
    try:
        return sum(1 for _ in open(path, encoding="utf-8", errors="ignore"))
    except OSError:
        return 0


def files_under(d):
    out = []
    for root, _, fs in os.walk(d):
        for f in fs:
            out.append(os.path.join(root, f))
    return sorted(out)


def import_closure(src_root, starts, max_depth=4):
    seen = {}
    todo = [(f, 0) for f in starts]
    while todo:
        f, d = todo.pop()
        if f in seen or d > max_depth:
            continue
        seen[f] = d
        try:
            txt = open(f, encoding="utf-8", errors="ignore").read()
        except OSError:
            continue
        for spec in IMPORT_RE.findall(txt):
            r = resolve(src_root, f, spec)
            if r and r not in seen and ("/node_modules/" not in r):
                todo.append((r, d + 1))
    return seen


def grep_names(root, names, max_hits=6):
    """file:line hits of each name (word match) in root, through git grep when available."""
    res = {}
    for n in names:
        try:
            p = subprocess.run(["grep", "-rnw", "--include=*.ts", "--include=*.tsx", "--include=*.yaml", "--include=*.json", n, root],
                               capture_output=True, text=True)
            hits = [h for h in p.stdout.splitlines() if ".test." not in h and "/stories/" not in h and ".stories." not in h]
            res[n] = hits[:max_hits], len(hits)
        except OSError:
            res[n] = ([], 0)
    return res


def route_meta(app_src, screen):
    gen = open(os.path.join(app_src, "app", "routes.generated.ts"), encoding="utf-8").read()
    m = re.search(r'\{"path": "([^"]+)", "screen": "%s", "title": "[^"]*", "inputs": (\[[^\]]*\])' % re.escape(screen), gen)
    meta = open(os.path.join(app_src, "app", "routes.ts"), encoding="utf-8").read()
    mm = re.search(r"^\s*%s:\s*(\{[^}]*\})" % re.escape(screen), meta, re.M)
    fr = re.search(r"%s[^\n]*flagRedirect" % re.escape(screen), meta)
    return (m.group(1) if m else "-", m.group(2) if m else "-", mm.group(1).strip() if mm else "MEMBER_ROUTE (member, enforce)", bool(fr))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--app", default="app/src")
    ap.add_argument("--flows", default="migration/clarify/flows")
    ap.add_argument("flows_", nargs="*")
    a = ap.parse_args()
    src = a.app
    targets = a.flows_ or sorted(d for d in os.listdir(a.flows) if os.path.isfile(os.path.join(a.flows, d, "pack", "meta.json")))
    for fl in targets:
        pd = os.path.join(a.flows, fl, "pack")
        meta = json.load(open(os.path.join(pd, "meta.json")))
        out = [f"# React code index of UI flow {fl}", "", f"Root: `{src}`. Made by app_index.py from pack/meta.json. Line counts are of the file.", ""]
        all_reached = {}
        for scr in meta.get("screens", []):
            pdir = os.path.join(src, "pages", scr)
            out.append(f"## Screen {scr}")
            if not os.path.isdir(pdir):
                out.append(f"- **not built**: no folder `{pdir}` (check the board for the decision)")
                out.append("")
                continue
            path, inputs, rm, fr = route_meta(src, scr)
            out.append(f"- route: `{path}` inputs={inputs}; meta: `{rm}`" + ("; has flagRedirect" if fr else ""))
            page_files = [f for f in files_under(pdir) if not f.endswith((".test.tsx", ".test.ts", ".stories.tsx"))]
            tests = [f for f in files_under(pdir) if f.endswith((".test.tsx", ".test.ts"))]
            out.append("- page files:")
            for f in page_files:
                out.append(f"  - `{os.path.relpath(f)}` ({lines_of(f)} lines)")
            if tests:
                out.append(f"- tests: {', '.join('`' + os.path.relpath(t) + '`' for t in tests)}")
            reached = import_closure(src, page_files)
            by_folder = {}
            for f, d in reached.items():
                if f in page_files:
                    continue
                rel = os.path.relpath(f, src)
                top = "/".join(rel.split("/")[:2]) if rel.startswith(("api/", "components/", "containers/", "platform/", "lib/", "legacy/", "mocks/", "pages/")) else rel.split("/")[0]
                by_folder.setdefault(top, []).append((d, rel, lines_of(f)))
                all_reached[f] = d
            out.append("- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:")
            for top in sorted(by_folder):
                items = sorted(by_folder[top])
                near = [x for x in items if x[0] <= 2]
                deep = len(items) - len(near)
                if not near:
                    out.append(f"  - **{top}**: {deep} files at depth 3-4")
                    continue
                out.append(f"  - **{top}**: " + ", ".join(f"`{rel}` ({ln}, d{d})" for d, rel, ln in near[:20]) + (f" … +{len(near) - 20}" if len(near) > 20 else "") + (f"; +{deep} deeper" if deep else ""))
            out.append("")
        # action names in the app
        names = sorted(set(meta.get("serverActions", [])) | set(meta.get("clientActions", [])))
        if names:
            out.append("## Where the app names the OutSystems actions of the flow (word match, tests excluded)")
            out.append("")
            out.append("| Action | Hits | Where (first 6) |")
            out.append("|---|---|---|")
            hits = grep_names(src, names)
            for n in names:
                h, c = hits[n]
                where = "<br>".join(f"`{x.split(':')[0].replace(src + '/', '')}:{x.split(':')[1]}`" for x in h) if h else "-"
                out.append(f"| {n} | {c} | {where} |")
            out.append("")
        # mocks: MSW handlers of the server actions
        srv = meta.get("serverActions", [])
        if srv:
            out.append("## Mock handlers and fixtures of the server actions")
            out.append("")
            hits = grep_names(os.path.join(src, "mocks"), srv, max_hits=4)
            for n in srv:
                h, c = hits[n]
                out.append(f"- {n}: " + (", ".join(f"`{x.split(':')[0].replace(src + '/', '')}:{x.split(':')[1]}`" for x in h) if h else "**no mock handler found**"))
            out.append("")
        open(os.path.join(pd, "app.md"), "w").write("\n".join(out))
        print(f"{fl:40s} screens={len(meta.get('screens', []))} reachedFiles={len(all_reached)}")


if __name__ == "__main__":
    main()
