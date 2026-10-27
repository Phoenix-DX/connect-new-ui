"""Index the UBT sharing KB (os-kb extraction of Connect, DEV 2026-10-05) for one UI flow: the KB pages and rules
that name the flow's screens, blocks and actions, in UBTConnect and in the referenced modules.

Usage (from the project root):
  python3 migration/clarify/tools/kb_index.py [--kb ../ubt_sharing_kb/connect/outsystems/apps] [--flows migration/clarify/flows] [FLOW ...]
Reads <flows>/<Flow>/pack/meta.json, writes <flows>/<Flow>/pack/kb.md. Never reads `.extract/` (raw reads: private).
"""
import argparse, json, os, re, subprocess

MODULE = "ubtconnect/modules/UBTConnect"


def grep(root, name, max_hits):
    p = subprocess.run(["grep", "-rnw", "--include=*.md", "--exclude-dir=.extract", "--exclude-dir=_build", name, root], capture_output=True, text=True)
    hits = p.stdout.splitlines()
    return hits[:max_hits], len(hits)


def rule_ids(text):
    return sorted(set(re.findall(r"BR-UBTCON-\d+", text)))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kb", default="../ubt_sharing_kb/connect/outsystems/apps")
    ap.add_argument("--flows", default="migration/clarify/flows")
    ap.add_argument("flows_", nargs="*")
    a = ap.parse_args()
    kb = a.kb
    mod = os.path.join(kb, MODULE)
    targets = a.flows_ or sorted(d for d in os.listdir(a.flows) if os.path.isfile(os.path.join(a.flows, d, "pack", "meta.json")))
    for fl in targets:
        pd = os.path.join(a.flows, fl, "pack")
        meta = json.load(open(os.path.join(pd, "meta.json")))
        out = [f"# KB index of UI flow {fl}", "",
               f"KB root: `{kb}` (os-kb extraction of Connect, DEV, 2026-10-05). Paths are relative to the project root (the KB is a sibling folder of the project). Rules quote the model and say `confirmed` or `inferred`.",
               "Referenced modules have their own rule prefixes (UBT_AppManager: `BR-UAM-*`, UBTConnect_Utils: `BR-C2UTL-*`, …): grep the block name under the KB root to find them.",
               "Read the UI pages fully; open a rule file only for the rules the report cites.", ""]
        # UI pages that name the flow
        out.append("## UI pages of UBTConnect that name the flow or its screens")
        out.append("")
        ui_dir = os.path.join(mod, "ui")
        pages = {}
        keys = [fl] + meta.get("screens", []) + meta.get("ownBlocks", [])
        for f in sorted(os.listdir(ui_dir)):
            if not f.endswith(".md"):
                continue
            txt = open(os.path.join(ui_dir, f), encoding="utf-8", errors="ignore").read()
            n = sum(1 for k in keys if re.search(r"\b" + re.escape(k) + r"\b", txt))
            if n:
                pages[f] = (n, len(rule_ids(txt)), txt.splitlines()[0:12])
        for f, (n, nr, head) in sorted(pages.items(), key=lambda x: -x[1][0]):
            title = next((h.lstrip("# ").strip() for h in head if h.startswith("# ")), f)
            out.append(f"- `{os.path.relpath(os.path.join(ui_dir, f))}` — {title} ({n} names of this flow, {nr} rules)")
        out.append("")
        # logic pages
        out.append("## Logic pages and cross-cut pages that name the flow's actions")
        out.append("")
        names = meta.get("clientActions", []) + meta.get("serverActions", [])
        logic = {}
        for sub in ("logic", "xcut", "data"):
            d = os.path.join(mod, sub)
            if not os.path.isdir(d):
                continue
            for f in sorted(os.listdir(d)):
                if not f.endswith(".md"):
                    continue
                txt = open(os.path.join(d, f), encoding="utf-8", errors="ignore").read()
                hit = [k for k in names + meta.get("screens", []) if re.search(r"\b" + re.escape(k) + r"\b", txt)]
                if hit:
                    logic[os.path.join(d, f)] = hit
        for f, hit in sorted(logic.items(), key=lambda x: -len(x[1])):
            out.append(f"- `{os.path.relpath(f)}`: {', '.join(hit[:12])}" + (f" … +{len(hit) - 12}" if len(hit) > 12 else ""))
        out.append("")
        # rules per element
        out.append("## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow")
        out.append("")
        rules_dir = os.path.join(mod, "rules")
        elems = set(meta.get("screens", [])) | set(meta.get("ownBlocks", [])) | set(meta.get("usedBlocks", [])) | set(names)
        rows = []
        for f in sorted(os.listdir(rules_dir)):
            txt = open(os.path.join(rules_dir, f), encoding="utf-8", errors="ignore").read(1200)
            m = re.search(r"element:\s*(\S+)", txt)
            if not m:
                continue
            el = m.group(1).split("/")[-1]
            if el in elems:
                title = re.search(r"^## (.+)$", txt, re.M)
                conf = re.search(r"confidence:\s*(\w+)", txt)
                rows.append((el, f[:-3], conf.group(1) if conf else "?", title.group(1).strip() if title else ""))
        rows.sort()
        out.append("| Element | Rule | Confidence | Title |")
        out.append("|---|---|---|---|")
        for el, rid, conf, title in rows:
            out.append(f"| {el} | `{rid}` | {conf} | {title} |")
        out.append("")
        # referenced modules
        refs = meta.get("referencedBlocks", []) + meta.get("serverActions", [])
        if refs:
            out.append("## Referenced modules: pages that name the referenced blocks and the server/service actions")
            out.append("")
            out.append("| Name | Hits | Where (first 5) |")
            out.append("|---|---|---|")
            for n in sorted(set(refs)):
                hits, c = grep(kb, n, 5)
                hits = [h for h in hits if "/ubtconnect/" not in h]
                where = "<br>".join(f"`{os.path.relpath(h.split(':')[0])}:{h.split(':')[1]}`" for h in hits) if hits else "-"
                out.append(f"| {n} | {c} | {where} |")
            out.append("")
        open(os.path.join(pd, "kb.md"), "w").write("\n".join(out))
        print(f"{fl:40s} uiPages={len(pages)} logicPages={len(logic)} rules={len(rows)}")


if __name__ == "__main__":
    main()
