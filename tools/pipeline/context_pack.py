#!/usr/bin/env python3
"""
context_pack.py: build ONE file that holds everything a screen agent needs, within a token budget.
The agent reads this pack (plus AGENTS.md) instead of opening analysis/ files one by one.

Usage:
  python3 context_pack.py --screen <Screen> --analysis migration/screens/<Screen>/analysis \
      [--catalog migration/catalog] [--board-dir migration] [--budget 14000] \
      [--out migration/screens/<Screen>/pack.md] [--no-collapse]

What goes in, in priority order (lower sections are cut first when over budget, and the pack says what was cut):
  1. header        route, inputs, tier, decision, status (board.md + facts.json)
  2. block plan    rendered block tree, each block marked [shell] / [shared: path] / [BUILD] / [shared: NOT BUILT]
  3. markup        dom/default.html, compacted: shell and built shared blocks collapsed to one marker line
                   (with the line range in dom/default.html), runs of identical list rows folded
  4. calls         calls of this screen: order, trigger chains (call-sites.md), response types (types.ts),
                   cached OutSystems MCP answers (knowledge/actions/<Action>.md)
  5. logic         per rendered screen-specific block: navigation, feedback messages, exceptions, flags,
                   client variables, lifecycle, JavaScript nodes
  6. gaps          blocks referenced but never rendered, images not captured
  7. other states  compacted markup of the other captured states
  8. look-up list  exact files to open only if the pack is not enough (sources/pretty/..., dom/<state>.html)
Token estimate: characters / 3.5.
"""
import argparse, json, os, re, sys
from collections import OrderedDict

try:
    from bs4 import BeautifulSoup, NavigableString, Tag, Comment
except ImportError:
    sys.exit("beautifulsoup4 is required: pip install beautifulsoup4")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

VOID = {"img", "input", "br", "hr", "meta", "link", "source", "area", "col", "embed", "wbr"}


def est(text):
    return int(len(text) / 3.5)


def load_json(p, default):
    try:
        return json.load(open(p, encoding="utf-8"))
    except (OSError, ValueError):
        return default


def read(p, default=""):
    try:
        return open(p, encoding="utf-8").read()
    except OSError:
        return default


# ------------------------------------------------------------------ block classification
class Classifier:
    """Maps a DOM data-block value (Flow.Block, no module) to shell / shared-built / shared-missing / own."""

    def __init__(self, catalog):
        self.infra = [x for x in load_json(os.path.join(catalog, "infra.json"), [])] if catalog else []
        self.blocks = load_json(os.path.join(catalog, "blocks.json"), {}) if catalog else {}

    def _match(self, keys, name):
        return next((k for k in keys if k == name or k.endswith("." + name)), None)

    def kind(self, name):
        if self._match(self.infra, name):
            return "shell", None
        k = self._match(self.blocks, name)
        if k:
            b = self.blocks[k]
            if b.get("builtAt"):
                return "shared", b["builtAt"]
            return ("shared-missing", None) if b.get("kind") in ("shared", "osui") else ("own", None)
        return "own", None


# ------------------------------------------------------------------ DOM compaction
def sig(el):
    if not isinstance(el, Tag):
        return None
    return (el.name, tuple(sorted(el.get("class", []))), el.get("data-block"),
            tuple(sig(c) for c in el.children if isinstance(c, Tag))[:12])


def attrs(el):
    out = []
    for k, v in el.attrs.items():
        if isinstance(v, list):
            v = " ".join(v)
        v = re.sub(r"\s+", " ", str(v))
        if k in ("src", "href") and v.startswith("data:"):
            v = "data:…"
        out.append(f'{k}="{v[:160]}"' if v != "" else k)
    return (" " + " ".join(out)) if out else ""


def compact_dom(html, cls, collapse=True, fold_after=2):
    soup = BeautifulSoup(html, "html.parser")
    body = soup.body or soup
    lines, stats = [], {"collapsed": 0, "folded": 0}

    def text_of(t):
        s = re.sub(r"\s+", " ", str(t)).strip()
        return s[:120] + ("…" if len(s) > 120 else "")

    def walk(el, d):
        pad = " " * d
        if isinstance(el, Comment):
            return
        if isinstance(el, NavigableString):
            t = text_of(el)
            if t:
                lines.append(pad + t)
            return
        if not isinstance(el, Tag) or el.name in ("script", "style", "noscript", "template"):
            return
        blk = el.get("data-block")
        if blk and collapse:
            k, where = cls.kind(blk)
            if k in ("shell", "shared") and not re.search(r"(Layout|BaseLayout)", blk):
                start = getattr(el, "sourceline", None)
                n = len(el.find_all(True))
                rng = f" dom lines {start}+" if start else ""
                lines.append(f'{pad}<OSBlock data-block="{blk}" from="{where or "shell"}" elided="{n} elements;{rng}"/>')
                stats["collapsed"] += 1
                return
        tag = el.name
        kids = [c for c in el.children if not (isinstance(c, NavigableString) and not str(c).strip())]
        if not kids:
            lines.append(f"{pad}<{tag}{attrs(el)}>" + ("" if tag in VOID else f"</{tag}>"))
            return
        if len(kids) == 1 and isinstance(kids[0], NavigableString) and not isinstance(kids[0], Comment):
            lines.append(f"{pad}<{tag}{attrs(el)}>{text_of(kids[0])}</{tag}>")
            return
        lines.append(f"{pad}<{tag}{attrs(el)}>")
        i = 0
        while i < len(kids):
            c = kids[i]
            j = i + 1
            if isinstance(c, Tag):
                s = sig(c)
                while j < len(kids) and isinstance(kids[j], Tag) and sig(kids[j]) == s:
                    j += 1
            run = j - i
            if run > fold_after:
                for c2 in kids[i:i + fold_after]:
                    walk(c2, d + 1)
                lines.append(f"{pad} <!-- +{run - fold_after} more <{c.name}> with identical structure -->")
                stats["folded"] += run - fold_after
            else:
                for c2 in kids[i:j]:
                    walk(c2, d + 1)
            i = j
        lines.append(f"{pad}</{tag}>")

    walk(body, 0)
    return "\n".join(lines), stats


# ------------------------------------------------------------------ sections
def section_calls(analysis, facts, knowledge_dir):
    calls = [c for c in facts.get("calls", []) if c.get("scope") == "this screen"]
    out = ["| # | t ms | action | status |", "|---|---|---|---|"]
    out += [f"| {c.get('order')} | {c.get('t')} | `{c.get('action')}` | {c.get('status')} |" for c in calls] or ["| - | | none observed | |"]
    cs = read(os.path.join(analysis, "call-sites.md"))
    if cs:
        body = cs.split("\n", 2)[-1]
        body = "\n".join(l for l in body.splitlines() if not l.startswith("For every service call"))
        out += ["", "Trigger chains (call-sites.md):", body.strip()]
    types = read(os.path.join(analysis, "types.ts"))
    wanted = {re.sub(r"^(DataAction|Action)", "", c.get("action", "")) for c in calls}
    if types and wanted:
        blocks = re.split(r"\n(?=(?:export )?(?:interface|type) )", types)
        keep = [b.strip() for b in blocks if any(re.search(r"\b" + re.escape(w), b.split("\n", 1)[0]) for w in wanted if w)]
        nested = set(re.findall(r":\s*([A-Z]\w+)", "\n".join(keep)))
        keep += [b.strip() for b in blocks if b.strip() not in keep and any(re.match(r"(?:export )?(?:interface|type) " + n + r"\b", b.strip()) for n in nested)]
        if keep:
            out += ["", "Response types (types.ts, wire shape):", "```ts", "\n\n".join(keep), "```"]
    if knowledge_dir and os.path.isdir(knowledge_dir):
        names = {c.get("action") for c in calls} | {re.sub(r"^(DataAction|Action)", "", c.get("action", "")) for c in calls}
        for n in sorted(x for x in names if x):
            k = read(os.path.join(knowledge_dir, f"{n}.md"))
            if k:
                out += ["", f"Server side of `{n}` (cached OutSystems MCP answer):", k.strip()[:1500]]
    return "\n".join(out)


def section_logic(facts, cls):
    js = facts.get("js", {})
    files = [f for f in facts.get("renderedFiles", []) if f in js]
    out = []
    for f in files:
        key = ".".join(f.replace(".mvc.js", "").split(".")[1:])
        k, _ = cls.kind(key)
        if k in ("shell", "shared") and f != facts.get("screenFile"):
            continue
        x = js[f]
        bits = []
        if x.get("lifecycle"):
            bits.append("lifecycle: " + ", ".join(x["lifecycle"]))
        if x.get("navigation"):
            bits.append("navigation: " + "; ".join(f"{n['to']}({', '.join(n['params'])})" for n in x["navigation"]))
        if x.get("navigateBack"):
            bits.append(f"navigateBack ×{x['navigateBack']}")
        if x.get("feedbackMessages"):
            bits.append("feedback: " + " | ".join(x["feedbackMessages"][:6]))
        if x.get("exceptions"):
            bits.append("exceptions: " + ", ".join(x["exceptions"]))
        flags = [e for e in x.get("staticEntities", []) if re.search(r"(flag|feature|launchdarkly|toggle)", e, re.I)]
        if flags:
            bits.append("flags: " + ", ".join(flags[:12]))
        if x.get("clientVariables"):
            bits.append("client vars: " + ", ".join(x["clientVariables"][:12]))
        if x.get("jsNodes"):
            bits.append("JS nodes: " + ", ".join(x["jsNodes"][:10]))
        ins = [v for v in x.get("variables", []) if v.get("kind") == "input"]
        if ins:
            bits.append("inputs: " + ", ".join(f"{v['name']}:{v['type']}" for v in ins))
        if bits:
            out.append(f"- `{f}`\n  - " + "\n  - ".join(bits))
    return "\n".join(out) or "- no screen-specific logic found in rendered files"


def section_gaps(facts):
    out = [f"- not rendered in any captured state: `{b}`" for b in facts.get("blocksReferencedNotRendered", [])]
    out += [f"- image not captured: `{i['ref']}`" for i in facts.get("images", []) if not i.get("captured")]
    return "\n".join(out) or "- none"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--screen", required=True)
    ap.add_argument("--analysis", required=True)
    ap.add_argument("--catalog", default="migration/catalog")
    ap.add_argument("--board-dir", default="migration")
    ap.add_argument("--budget", type=int, default=14000, help="token budget for the pack (default 14000)")
    ap.add_argument("--out")
    ap.add_argument("--no-collapse", action="store_true")
    a = ap.parse_args()

    an = a.analysis
    facts = load_json(os.path.join(an, "facts.json"), {})
    if not facts:
        sys.exit(f"{an}/facts.json not found: run analyze_capture.py first")
    cls = Classifier(a.catalog if os.path.isdir(a.catalog) else None)
    row = {}
    try:
        from board import read_board
        row = read_board(os.path.join(a.board_dir, "board.md")).get(a.screen, {})
    except SystemExit:
        pass
    meta = load_json(os.path.join(a.board_dir, "board.meta.json"), {}).get("screens", {}).get(a.screen, {})

    env = facts.get("env", {})
    header = [f"# Context pack: {a.screen}", "",
              f"- Route: `{row.get('Route') or meta.get('route', '?')}`; inputs: {', '.join(meta.get('inputs', [])) or 'none'}",
              f"- Tier: **{row.get('Tier') or '?'}**; decision: {row.get('Decision') or '?'}; status: {row.get('Status') or '?'}",
              f"- Captured viewport {env.get('viewport')}; body class `{env.get('bodyClass')}`; states: {', '.join(facts.get('states', []))}",
              f"- Screen file: `{facts.get('screenFile')}`",
              "- Rules: AGENTS.md. Do not edit src/shell or src/shared; file a change request instead. "
              "Markup below is the contract: element types, classes, nesting and data-block wrappers exactly as shown."]

    tree = read(os.path.join(an, "blocks-tree.txt")).splitlines()
    plan = []
    for l in tree:
        name = l.strip()
        if not name:
            continue
        k, where = cls.kind(name)
        tag = {"shell": "[shell]", "shared": f"[shared: {where}]", "shared-missing": "[shared: NOT BUILT → change request]",
               "own": "[BUILD here]"}[k]
        plan.append(f"{l.rstrip()}  {tag}")

    dom_default = read(os.path.join(an, "dom", "default.html"))
    markup, st = compact_dom(dom_default, cls, collapse=not a.no_collapse) if dom_default else ("(no dom/default.html)", {})

    other = []
    ddir = os.path.join(an, "dom")
    for fn in sorted(os.listdir(ddir)) if os.path.isdir(ddir) else []:
        if fn == "default.html" or not fn.endswith(".html") or fn.endswith(".raw.html"):
            continue
        if "@" in fn:   # other viewports: same markup, different device classes; parity checks them, the pack only names them
            other.append(f"- state `{fn[:-5]}`: other viewport of `{fn[:-5].split('@')[0]}` (markup in dom/{fn}; read it only if parity reports a structure difference there)")
            continue
        m, _ = compact_dom(read(os.path.join(ddir, fn)), cls, collapse=not a.no_collapse)
        other.append(f"### state `{fn[:-5]}`\n```html\n{m}\n```")

    lookup = [f"- `{an}/dom/<state>.html` full markup (line numbers in collapsed markers refer to dom/default.html)"]
    for f in facts.get("renderedFiles", []):
        key = ".".join(f.replace(".mvc.js", "").split(".")[1:])
        if cls.kind(key)[0] in ("own", "shared-missing") or f == facts.get("screenFile"):
            lookup.append(f"- `{an}/sources/pretty/{f}`: grep the expression you need (e.g. `grep -n 'getCachedValue' …`), do not read whole")
    lookup.append(f"- `{an}/css-relevant.md` only when a visual diff cannot be explained by markup")

    try:
        from stack import digest as stack_digest
        conventions = stack_digest(a.board_dir) or "- no stack.json: the stack is not confirmed; do not build"
    except Exception as e:  # noqa: BLE001
        conventions = f"- could not read stack.json ({e})"
    try:
        from flags import route_text
        flags_text = route_text(a.board_dir, a.screen)
    except Exception as e:  # noqa: BLE001
        flags_text = f"- could not read flags.json ({e})"
    sections = OrderedDict([
        ("header", "\n".join(header)),
        ("Stack, conventions and patterns (same for every route)", conventions),
        ("Feature flags of this route", flags_text),
        ("Block plan", "```\n" + "\n".join(plan) + "\n```"),
        ("Markup (dom/default.html, compacted)", f"Collapsed blocks: {st.get('collapsed', 0)}; folded identical rows: {st.get('folded', 0)}.\n```html\n{markup}\n```"),
        ("Calls", section_calls(an, facts, os.path.join(a.board_dir, "knowledge", "actions"))),
        ("Logic in screen-specific blocks", section_logic(facts, cls)),
        ("Gaps (render as NotCaptured)", section_gaps(facts)),
        ("Other captured states", "\n\n".join(other) or "- none"),
        ("Look up on demand", "\n".join(lookup)),
    ])
    cut_order = ["Other captured states", "Logic in screen-specific blocks", "Calls"]
    dropped = []

    def render():
        parts = []
        for k, v in sections.items():
            parts.append(v if k == "header" else f"## {k}\n\n{v}")
        if dropped:
            parts.append("## Cut to fit the budget\n\n" + "\n".join(f"- {d}" for d in dropped))
        return "\n\n".join(parts) + "\n"

    text = render()
    for k in cut_order:
        if est(text) <= a.budget:
            break
        full = sections[k]
        if len(full) <= 800:
            continue
        sections[k] = full[: max(400, int(len(full) * 0.3))] + "\n… (truncated)"
        dropped.append(f"{k}: truncated from ~{est(full)} tokens; open the source files listed under 'Look up on demand'")
        text = render()
    if est(text) > a.budget:
        dropped.append(f"pack is still ~{est(text)} tokens (budget {a.budget}): the markup itself is large; consider splitting the screen task by block")
        text = render()

    out = a.out or os.path.join(os.path.dirname(os.path.abspath(an)), "pack.md")
    open(out, "w", encoding="utf-8").write(text)
    print(f"{out}: ~{est(text)} tokens (budget {a.budget}); dom ~{est(dom_default)} → ~{est(markup)} tokens after compaction")


if __name__ == "__main__":
    main()
