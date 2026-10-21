#!/usr/bin/env python3
"""block_pack.py: one evidence pack per shared block of the foundation queue, so the agent that builds a block reads a
short file instead of compiled code and whole screen DOMs.

Usage (project root): python3 migration/tools/block_pack.py [--out migration/blocks] [--variants 4] [--view-lines 260]

For every block of migration/catalog/blocks.json with kind shared/osui that a build screen uses and no React component
tags yet (`builtAt` empty), writes migration/blocks/<Module.Flow.Block>.md:
  - users (build screens), child blocks (from the compiled view's dependencies), parent blocks in the queue;
  - inputs with OutSystems types (compiled model: attrs that the block reads from `inputs`);
  - the compiled view (render code), OutSystemsDebugger lines removed, truncated to --view-lines;
  - captured DOM variants: every element with data-block="<Flow>.<Block>" in the build screens' analysis/dom/*.html,
    grouped by structure (tags, classes, data-block, ignoring ids and text), up to --variants distinct variants with
    where each was seen and how often.
and migration/blocks/INDEX.md: the queue in build order (children before parents), with sizes to plan batches.
Names and markup only: captured user text is already masked (•) by the capture. Standard library only.
"""
import argparse
import collections
import glob
import html
import html.parser
import json
import os
import re
import subprocess

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}


class Node:
    __slots__ = ("tag", "attrs", "children", "text")

    def __init__(self, tag, attrs):
        self.tag, self.attrs, self.children, self.text = tag, attrs, [], None


class TreeBuilder(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root", {})
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        n = Node(tag, dict(attrs))
        self.stack[-1].children.append(n)
        if tag not in VOID:
            self.stack.append(n)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, dict(attrs)))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        if data.strip():
            t = Node("#text", {})
            t.text = " ".join(data.split())
            self.stack[-1].children.append(t)


def parse(path):
    b = TreeBuilder()
    b.feed(open(path, encoding="utf-8", errors="replace").read())
    return b.root


def walk(n):
    yield n
    for c in n.children:
        yield from walk(c)


MAX_DEPTH = 7


def signature(n, depth=0, top=True):
    """Structure of the block's own markup: nested blocks collapse to their root, deep content is cut."""
    if n.tag == "#text":
        return "t"
    cls = " ".join(sorted(n.attrs.get("class", "").split()))
    head = f"{n.tag}.{cls}[{n.attrs.get('data-block', '')}]"
    if (not top and n.attrs.get("data-block")) or depth >= MAX_DEPTH:
        return head
    return head + "(" + ",".join(signature(c, depth + 1, False) for c in n.children) + ")"


def serialize(n, depth=0, out=None):
    out = [] if out is None else out
    pad = "  " * depth
    if n.tag == "#text":
        out.append(pad + html.escape(n.text, quote=False))
        return out
    attrs = "".join(f' {k}="{html.escape(v or "")}"' for k, v in n.attrs.items())
    if depth > 0 and n.attrs.get("data-block"):          # a nested block: its own pack shows its markup
        out.append(f"{pad}<{n.tag}{attrs}><!-- nested block: {sum(1 for _ in walk(n)) - 1} nodes --></{n.tag}>")
        return out
    if depth >= MAX_DEPTH and n.children:
        out.append(f"{pad}<{n.tag}{attrs}><!-- {sum(1 for _ in walk(n)) - 1} nodes below depth {MAX_DEPTH} --></{n.tag}>")
        return out
    if n.tag in VOID:
        out.append(f"{pad}<{n.tag}{attrs}/>")
        return out
    if not n.children:
        out.append(f"{pad}<{n.tag}{attrs}></{n.tag}>")
        return out
    out.append(f"{pad}<{n.tag}{attrs}>")
    for c in n.children:
        serialize(c, depth + 1, out)
    out.append(f"{pad}</{n.tag}>")
    return out


def build_screens():
    out = subprocess.run(["python3", ".claude/skills/outsystems-screen-spec/scripts/board.py", "show", "--decision", "build"],
                         capture_output=True, text=True).stdout.splitlines()[1:]
    return sorted({line.split("|")[0].strip() for line in out if line.strip()})


_SURVEY = None


def find_source(name):
    """Pretty source from a screen capture; else the survey's copy (blocks no captured screen loaded), saved under
    migration/blocks/sources/ so agents can grep it."""
    global _SURVEY
    for p in sorted(glob.glob(f"migration/screens/*/analysis/sources/pretty/{name}.mvc.js")):
        return p, open(p, encoding="utf-8", errors="replace").read()
    if _SURVEY is None:
        try:
            _SURVEY = json.load(open("capture/survey-UBTConnect.json", encoding="utf-8")).get("sources", {})
        except (OSError, ValueError):
            _SURVEY = {}
    src = _SURVEY.get(f"{name}.mvc.js")
    if not isinstance(src, str) or not src:
        return None, None
    path = f"migration/blocks/sources/{name}.mvc.js"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf-8").write(src)
    return path, src


def define_block(src, suffix):
    m = re.search(r'define\("[^"]*\.mvc\$' + suffix + r'"(.*?)(?=\ndefine\(|\Z)', src, re.S)
    return m.group(0) if m else ""


def inputs_of(model):
    names = set(re.findall(r'if \("([A-Za-z]\w*)" in inputs\)', model))
    out = []
    for m in re.finditer(r'this\.attr\("([A-Za-z]\w*)", "\w+", "\w+", (true|false), (true|false), OS\.DataTypes\.DataTypes\.(\w+)'
                         r'(?:.*?\}, (?:true|false), (\w+(?:\.\w+)*))?', model, re.S):
        if m.group(1) in names and not any(o[0] == m.group(1) for o in out):
            out.append((m.group(1), m.group(4), (m.group(5) or "").split(".")[-1] if m.group(4) in ("Record", "RecordList") else ""))
    return out


def view_text(view, limit):
    lines = [l for l in view.splitlines() if "OutSystemsDebugger" not in l and l.strip()]
    return lines[:limit], max(0, len(lines) - limit)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="migration/blocks")
    ap.add_argument("--variants", type=int, default=4)
    ap.add_argument("--view-lines", type=int, default=260)
    a = ap.parse_args()
    blocks = json.load(open("migration/catalog/blocks.json", encoding="utf-8"))
    build = set(build_screens())
    queue = {n: b for n, b in blocks.items() if b.get("kind") in ("shared", "osui") and not b.get("builtAt")
             and set(b.get("liveUsers", [])) & build}
    # shell and layout-level blocks (survey/shell.md): infrastructure for catalog.py, built in the foundation too
    shell_md = open("migration/survey/shell.md", encoding="utf-8").read()
    for f in re.findall(r"`([\w.]+)\.mvc\.js`", shell_md):
        if f not in queue:
            queue[f] = {"kind": "shell", "liveUsers": sorted(build)}
    # blocks that already have a React component (an @os-block tag anywhere in app/src)
    tagged = set()
    for f in glob.glob("app/src/**/*.ts*", recursive=True):
        tagged |= set(re.findall(r"@os-block ([\w.]+)", open(f, encoding="utf-8", errors="replace").read()))
    queue = {n: q for n, q in queue.items() if n not in tagged}
    # captured instances, by data-block value (Flow.Block)
    want = {".".join(n.split(".")[-2:]): n for n in queue}
    seen = collections.defaultdict(lambda: collections.OrderedDict())
    counts = collections.Counter()
    for screen in sorted(build):
        for path in sorted(glob.glob(f"migration/screens/{screen}/analysis/dom/*.html")):
            if path.endswith(".raw.html"):
                continue
            state = os.path.basename(path)[:-5]
            for node in walk(parse(path)):
                blk = node.attrs.get("data-block") if node.tag != "#text" else None
                if blk in want:
                    name = want[blk]
                    sig = signature(node)
                    counts[(name, sig)] += 1
                    if sig not in seen[name]:
                        seen[name][sig] = (f"{screen}/{state}", node)
    os.makedirs(a.out, exist_ok=True)
    meta = {}
    for name, b in sorted(queue.items()):
        path, src = find_source(name)
        model, view = (define_block(src, "model"), define_block(src, "view")) if src else ("", "")
        deps = sorted({d[:-4] for d in re.findall(r'"([\w.]+\.mvc)\$view"', view)} - {name}) if view else []
        ins = inputs_of(model) if model else []
        vlines, cut = view_text(view, a.view_lines) if view else ([], 0)
        variants = list(seen[name].items())
        meta[name] = {"deps": [d for d in deps if d in queue], "users": sorted(set(b["liveUsers"]) & build),
                      "inputs": len(ins), "view": len(vlines) + cut, "variants": len(variants), "src": path}
        md = [f"# {name}", "", f"- Kind: {b['kind']}; build screens using it: {', '.join(meta[name]['users'])}",
              f"- Compiled source: `{path or 'not captured (survey only)'}`",
              f"- Child blocks: {', '.join(deps) or '-'} (queue: {', '.join(meta[name]['deps']) or '-'})", "",
              "## Inputs", ""]
        md += [f"| {n} | {t}{(' ' + c) if c else ''} |" for n, t, c in ins] if ins else ["(none found)"]
        if ins:
            md.insert(len(md) - len(ins), "| Input | Type |\n|---|---|")
        md += ["", f"## Captured DOM variants ({len(variants)} distinct, {sum(counts[(name, s)] for s in seen[name])} instances)", ""]
        for i, (sig, (where, node)) in enumerate(variants[:a.variants], 1):
            md += [f"### Variant {i}: {where} (×{counts[(name, sig)]})", "", "```html", *serialize(node), "```", ""]
        if len(variants) > a.variants:
            md.append(f"({len(variants) - a.variants} more variants not shown: rerun with --variants)")
        md += ["", "## Compiled view (debugger lines removed)", "", "```js", *vlines, "```"]
        if cut:
            md.append(f"(… {cut} more lines in `{path}`)")
        open(os.path.join(a.out, f"{name}.md"), "w", encoding="utf-8").write("\n".join(md) + "\n")
    # build order: children first
    order, done = [], set()

    def visit(n, trail=()):
        if n in done or n in trail:
            return
        for d in meta[n]["deps"]:
            visit(d, trail + (n,))
        done.add(n)
        order.append(n)
    for n in sorted(meta, key=lambda x: -len(meta[x]["users"])):
        visit(n)
    rows = ["# Foundation block packs", "", "Build order (children before parents). Packs: `migration/blocks/<Block>.md`.", "",
            "| # | Block | Kind | Screens | Inputs | DOM variants | View lines | Children in queue |", "|---|---|---|---|---|---|---|---|"]
    for i, n in enumerate(order, 1):
        m = meta[n]
        rows.append(f"| {i} | `{n}` | {queue[n]['kind']} | {len(m['users'])} | {m['inputs']} | {m['variants']} | {m['view']} | "
                    f"{', '.join(x.split('.')[-1] for x in m['deps']) or '-'} |")
    open(os.path.join(a.out, "INDEX.md"), "w", encoding="utf-8").write("\n".join(rows) + "\n")
    print(f"{len(meta)} block pack(s) -> {a.out}; {sum(1 for m in meta.values() if not m['src'])} without captured source; "
          f"{sum(1 for m in meta.values() if m['variants'] == 0)} never rendered in a capture")


if __name__ == "__main__":
    main()
