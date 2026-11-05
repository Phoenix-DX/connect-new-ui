"""Call graph of OutSystems compiled code (TST): UI events, block events, lifecycle handlers, client actions, data
actions and server actions, with their edges and the server URLs.

Copied from .claude/skills/outsystems-screen-spec/scripts/analyze_capture.py (lines 428-554, git 7cb5b411) so that
route-actions does not depend on the skill (user, 2026-11-04). Keep the copy as it is; compare it with the skill
when the skill changes.
"""
import re

UI_EVENT_RE = re.compile(r'\b(on(?:Click|DoubleClick|Change|Blur|Focus|KeyUp|KeyDown|KeyPress|Submit|Scroll|Swipe\w*|Tap|Toggle))\s*:\s*function')


def _file_key(fname):
    return fname[: -len(".mvc.js")] if fname.endswith(".mvc.js") else fname[: -len(".controller.js")]


def _short(fname):
    return _file_key(fname).split(".")[-1]


def call_graph(sources):
    """Build caller → callee edges between UI events, block events, lifecycle handlers, client actions,
    data actions and server actions, from compiled OutSystems code. Returns (nodes, edges, endpoints)."""
    nodes, edges, endpoints = {}, set(), {}
    var_to_file = {f[: -len(".mvc.js")].replace(".", "_") + "_mvc_view": f for f in sources if f.endswith(".mvc.js")}

    def node(nid, label, kind):
        nodes.setdefault(nid, {"label": label, "kind": kind})
        return nid

    for fname, src in sources.items():
        is_mvc = fname.endswith(".mvc.js")
        if not (is_mvc or fname.endswith(".controller.js")):
            continue
        defs = []  # (pos, node_id)
        privates = set(re.findall(r'Controller\.prototype\._(\w+?)\$Action\s*=\s*function', src)) if is_mvc else set()
        for m in re.finditer(r'(\w+)Controller\.default\.(\w+?)\$Action\s*=\s*function', src):
            defs.append((m.start(), node(f"mod:{m.group(1)}:{m.group(2)}", f"{m.group(1)}.{m.group(2)}", "client action")))
        for m in re.finditer(r'(\w+)Controller\.default\.(\w+?)\$ServerAction\s*=\s*function', src):
            defs.append((m.start(), node(f"srv:{m.group(1)}:{m.group(2)}", f"server {m.group(2)}", "server action")))
        if is_mvc:
            for m in re.finditer(r'Controller\.prototype\.(_?)(\w+?)\$(Action|ServerAction)\s*=\s*function', src):
                priv, name, kind = m.groups()
                if kind == "ServerAction":
                    defs.append((m.start(), node(f"srv:{fname}:{name}", f"server {name}", "server action")))
                elif priv:
                    defs.append((m.start(), node(f"act:{fname}:{name}", f"{_short(fname)}.{name}", "client action")))
                elif name not in privates:
                    defs.append((m.start(), node(f"evt:{fname}:{name}", f"event {name} of {_short(fname)}", "block event")))
            for m in re.finditer(r'Controller\.prototype\.on(Initialize|Ready|Render|Destroy|ParametersChanged)EventHandler\s*=\s*function', src):
                defs.append((m.start(), node(f"life:{fname}:{m.group(1)}", f"{_short(fname)}.On{m.group(1)}", "lifecycle")))
            # the refresh of a data action or aggregate (`<x>$DataActRefresh = function`, e.g. NotificationDetails.mvc.js:800):
            # its body holds the call and the `.then` to the OnAfterFetch handler, so it owns them (2026-11-05)
            for m in re.finditer(r'Controller\.prototype\.(\w+?)\$(DataActRefresh|AggrRefresh)\s*=\s*function', src):
                defs.append((m.start(), node(f"da:{fname}:{m.group(1)}", f"{_short(fname)}.{m.group(1)}", "data action")))
        for m in re.finditer(r'define\("', src):
            defs.append((m.start(), None))
        defs.sort()

        def owner(pos):
            cur = None
            for p, nid in defs:
                if p > pos:
                    break
                cur = nid
            return cur

        def resolve_local(name):
            name = name.lstrip("_")
            if is_mvc:
                if name in privates:
                    return f"act:{fname}:{name}"
                return f"evt:{fname}:{name}" if f"evt:{fname}:{name}" in nodes else None
            mod = fname.split(".")[0]
            return f"mod:{mod}:{name}"

        # endpoints
        for m in re.finditer(r'callServerAction\("(\w+)",\s*"([^"]+)"', src):
            o = owner(m.start())
            if o:
                endpoints.setdefault(m.group(2), set()).add(o)
                if o in nodes and nodes[o]["kind"] == "server action":
                    nodes[o]["label"] = f"server {m.group(1)}"
        for m in re.finditer(r'call(?:DataAction|Aggregate\w*)\("(\w+)",\s*"([^"]+)"', src):
            o = owner(m.start())
            if o and o.startswith("da:"):
                nid = o  # the refresh function of the data action owns the call (its label shows the call name)
                nodes[nid]["label"] = f"{_short(fname)}.{m.group(1)}"
            else:
                nid = node(f"da:{fname}:{m.group(1)}", f"{_short(fname)}.{m.group(1)}", "data action")
            endpoints.setdefault(m.group(2), set()).add(nid)
            start = node(f"start:{fname}", f"{_short(fname)} fetch at start", "lifecycle")
            edges.add((start, nid))
            if nid != o:
                # no refresh definition around the call: a synthetic OnAfterFetch node keeps the shape
                base = re.sub(r"^(DataAction|Aggregate|ScreenDataSet)", "", m.group(1))
                after = f"act:{fname}:onAfterFetch_{base}"
                node(after, f"{_short(fname)}.onAfterFetch_{base}", "client action")
                edges.add((nid, after))

        # calls inside definitions
        for m in re.finditer(r'(?<![\w.])controller\.(\w+?)\$(Action|ServerAction|DataActRefresh|AggrRefresh)\(', src):
            o = owner(m.start())
            if not o:
                continue
            name, kind = m.groups()
            if kind == "Action":
                tgt = resolve_local(name)
            elif kind == "ServerAction":
                tgt = f"srv:{fname if is_mvc else fname.split('.')[0]}:{name}"
            else:
                tgt = next((n for n in nodes if n.startswith(f"da:{fname}:") and n.split(":")[-1].lower().endswith(name.lower())), None)
            if tgt and tgt != o:
                edges.add((o, tgt))
        for m in re.finditer(r'(\w+)Controller\.default\.(\w+?)\$Action\(', src):
            o = owner(m.start())
            if o:
                edges.add((o, f"mod:{m.group(1)}:{m.group(2)}"))

        if not is_mvc:
            continue
        # UI events in the view
        for m in UI_EVENT_RE.finditer(src):
            win = src[m.end(): m.end() + 900]
            c = re.search(r'controller\.(\w+?)\$Action\(', win)
            if c:
                tgt = resolve_local(c.group(1))
                if tgt:
                    ui = node(f"ui:{fname}:{m.group(1)}:{c.group(1)}", f"{m.group(1)} in {_short(fname)}", "ui event")
                    edges.add((ui, tgt))
        # block events handled by this view: events: { name$Action: function(...) { controller.handler$Action(...) } }
        for m in re.finditer(r'(?<![\w_])(\w+?)\$Action:\s*function\s*\([^)]*\)\s*\{', src):
            ev = m.group(1)
            if ev.startswith("_"):
                continue
            created = re.findall(r'React\.createElement\((\w+_mvc_view)', src[: m.start()])
            child = var_to_file.get(created[-1]) if created else None
            win = src[m.end(): m.end() + 1200]
            c = re.search(r'controller\.(\w+?)\$Action\(', win)
            if child and c:
                tgt = resolve_local(c.group(1))
                if tgt:
                    src_evt = node(f"evt:{child}:{ev}", f"event {ev} of {_short(child)}", "block event")
                    edges.add((src_evt, tgt))
    return nodes, edges, endpoints
