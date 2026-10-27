"""Write one pack per UI flow from the DEV model dump of the module UBTConnect (espace.json).

Usage (from the project root):
  python3 migration/clarify/tools/flow_pack.py [--dump migration/clarify/.dump/espace.json] [--out migration/clarify/flows] [FLOW ...]

Input: the JSON that migration/tools/mcp/unwrap.py makes from the MCP tool result of `getSerializedObject`.
Output per flow, in <out>/<Flow>/pack/:
  screens.md     every screen of the flow: roles, inputs, variables, lifecycle, data actions, aggregates, widget tree,
                 screen actions (node flow as indented pseudo-code; disabled and unreachable nodes marked)
  blocks.md      the blocks of the flow (same detail) and the blocks of other flows that the screens use (pointer)
  actions.md     the module client actions the flow calls (transitive); shared actions point to _shared/pack/actions.md
  data.md        server and service actions, entity actions, static entities, client variables, site properties
  references.md  signatures of the referenced blocks, actions and static entity records that the flow uses
  strings.md     user-visible string literals of the flow
  meta.json      names (screens, blocks, actions, server actions) for app_index.py and kb_index.py
The pack `_shared` holds the block-only flows and the client actions that 4 or more flows use.
The model is DEV (reference only); TST is the source of truth (CLAUDE.md).
"""
import argparse, collections, json, os, re, sys

CHILD_KEYS = ("content", "Widgets", "TrueBranch", "FalseBranch", "PlaceholdersContent", "leftActions", "rightActions")
SHARED_MIN_FLOWS = 4
STR_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')


def s(v, n=160):
    """One-line text of a value, cut at n characters."""
    if v is None:
        return ""
    t = str(v).replace("\n", "\\n")
    return t if len(t) <= n else t[: n - 1] + "…"


def args_text(args):
    out = []
    for a in args or []:
        if isinstance(a, dict) and a.get("Value") not in (None, ""):
            out.append(f"{a.get('Parameter')}={s(a.get('Value'), 200)}")
    return ", ".join(out)


def params_text(ps):
    out = []
    for p in ps or []:
        t = f"{p.get('Name')}: {p.get('DataType')}"
        if p.get("IsMandatory") == "True":
            t += " (mandatory)"
        if p.get("DefaultValue") not in (None, ""):
            t += f" = {s(p.get('DefaultValue'), 80)}"
        out.append(t)
    return "; ".join(out)


class Model:
    def __init__(self, es):
        self.es = es
        self.flows = {f["Name"]: f for f in es["UIFlows"]}
        self.screens = {}  # name -> (flow, obj)
        self.blocks = {}
        self.external_sites = {}
        for f in es["UIFlows"]:
            for n in f.get("Nodes", []):
                if not isinstance(n, dict):
                    continue
                if n.get("Object") == "IMobileScreen":
                    self.screens[n["Name"]] = (f["Name"], n)
                elif n.get("Object") == "IMobileBlock":
                    self.blocks[n["Name"]] = (f["Name"], n)
                elif n.get("Object") == "IExternalSite":
                    self.external_sites[n["Name"]] = (f["Name"], n)
        self.client_actions = {a["Name"]: a for a in es["ClientActions"]}
        self.server_actions = {a["Name"]: a for a in es["ServerActions"]}
        self.client_vars = {v["Name"]: v for v in es["ClientVariables"]}
        self.settings = {v["Name"]: v for v in es.get("Settings", [])}
        self.entities = {e["Name"]: e for e in es["Entities"]}
        self.entity_actions = {}
        for e in es["Entities"]:
            for ea in e.get("EntityActions", []):
                self.entity_actions[ea["Name"]] = (e["Name"], ea)
        self.structures = {x["Name"]: x for x in es["Structures"]}
        # references
        self.ref_blocks = collections.defaultdict(list)  # block name -> [(module, flow, sig)]
        self.ref_client = collections.defaultdict(list)  # action name -> [(module, sig)]
        self.ref_server = collections.defaultdict(list)
        self.ref_service = collections.defaultdict(list)
        self.ref_entities = collections.defaultdict(list)
        self.ref_structures = collections.defaultdict(list)
        for r in es["References"]:
            m = r["Name"]
            for fl in r.get("UIFlows", []):
                for b in fl.get("Nodes", []):
                    if isinstance(b, dict) and b.get("Object") == "IMobileBlockSignature":
                        self.ref_blocks[b["Name"]].append((m, fl["Name"], b))
            for a in r.get("ClientActions", []):
                self.ref_client[a["Name"]].append((m, a))
            for a in r.get("ServerActions", []):
                self.ref_server[a["Name"]].append((m, a))
            for a in r.get("ServiceActions", []):
                self.ref_service[a["Name"]].append((m, a))
            for e in r.get("Entities", []):
                self.ref_entities[e["Name"]].append((m, e))
                for ea in e.get("EntityActions", []) or []:
                    self.ref_entities.setdefault("action:" + ea["Name"], []).append((m, e))
            for st in r.get("Structures", []):
                self.ref_structures[st["Name"]].append((m, st))
        # block-only flows
        self.block_only_flows = [f["Name"] for f in es["UIFlows"]
                                 if not any(isinstance(n, dict) and n.get("Object") == "IMobileScreen" for n in f.get("Nodes", []))]

    # ---- resolution
    def resolve_block(self, name):
        if name in self.blocks:
            return ("UBTConnect", self.blocks[name][0], self.blocks[name][1])
        if name in self.ref_blocks:
            m, fl, sig = self.ref_blocks[name][0]
            tag = m if len(self.ref_blocks[name]) == 1 else "+".join(x[0] for x in self.ref_blocks[name])
            return (tag, fl, sig)
        return ("?", "?", None)

    def resolve_action(self, name, server=False):
        """Return (kind, module) for an action name: kind in own-client, own-server, ref-client, ref-server,
        ref-service, entity, ref-entity, unknown."""
        if not server and name in self.client_actions:
            return ("own-client", "UBTConnect")
        if name in self.server_actions:
            return ("own-server", "UBTConnect")
        if name in self.entity_actions:
            return ("entity", self.entity_actions[name][0])
        if "action:" + name in self.ref_entities:
            return ("ref-entity", self.ref_entities["action:" + name][0][0])
        if name in self.ref_service:
            return ("ref-service", self.ref_service[name][0][0])
        if name in self.ref_server:
            return ("ref-server", self.ref_server[name][0][0])
        if name in self.ref_client:
            return ("ref-client", self.ref_client[name][0][0])
        return ("unknown", "?")


# ---------- node flow rendering
def render_flow(nodes, indent="  "):
    """Indented pseudo-code of an action flow. Disabled nodes get [DISABLED]; unreachable nodes are listed."""
    by = {}
    for n in nodes:
        if not isinstance(n, dict):
            continue
        if n.get("Name"):
            by[n["Name"]] = n
        by[f"{n.get('X')},{n.get('Y')}"] = n
    labels = {}

    def label(n):
        if id(n) not in labels:
            labels[id(n)] = n.get("Name") or n.get("Label") or f"node@{n.get('X')},{n.get('Y')}"
        return labels[id(n)]

    def target(ref):
        return by.get(ref) if ref else None

    out = []
    emitted = set()

    def emit(n, d):
        p = indent * d
        while n is not None:
            if id(n) in emitted:
                out.append(f"{p}→ continues at <{label(n)}>")
                return
            emitted.add(id(n))
            ob = n.get("Object")
            dis = "[DISABLED] " if n.get("IsDisabled") == "True" else ""
            lab = f" ({n['Label']})" if n.get("Label") else ""
            if ob == "IStartNode":
                n = target(n.get("Target"))
                continue
            if ob == "IEndNode":
                emitted.discard(id(n))  # an End node prints at every path that reaches it
                out.append(f"{p}{dis}end")
                return
            if ob == "IAssignNode":
                asg = "; ".join(f"{a.get('Variable')} = {s(a.get('Value'), 300)}" for a in n.get("Assignments", []) if isinstance(a, dict))
                out.append(f"{p}{dis}assign{lab}: {asg}")
            elif ob == "IExecuteClientActionNode":
                out.append(f"{p}{dis}call {n.get('Action')}({args_text(n.get('Arguments'))})" + (f" as {n['Name']}" if n.get("Name") and n.get("Name") != n.get("Action") else ""))
            elif ob == "IExecuteServerActionNode":
                out.append(f"{p}{dis}call-server {n.get('Action')}({args_text(n.get('Arguments'))})" + (f" as {n['Name']}" if n.get("Name") and n.get("Name") != n.get("Action") else ""))
            elif ob == "IIfNode":
                out.append(f"{p}{dis}if{lab} {s(n.get('Condition'), 400)}")
                emit(target(n.get("TrueTarget")), d + 1)
                out.append(f"{p}else")
                emit(target(n.get("FalseTarget")), d + 1)
                return
            elif ob == "ISwitchNode":
                out.append(f"{p}{dis}switch{lab}")
                for c in n.get("Conditions", []) or []:
                    out.append(f"{p}{indent}case {s(c.get('Value'), 300)}" + (f" ({c['Label']})" if c.get("Label") else ""))
                    emit(target(c.get("Target")), d + 2)
                out.append(f"{p}{indent}otherwise")
                emit(target(n.get("OtherwiseTarget")), d + 2)
                return
            elif ob == "IForEachNode":
                extra = "".join(f" {k}={n[k]}" for k in ("StartIndex", "MaximumIterations") if n.get(k))
                out.append(f"{p}{dis}for each {n.get('RecordList')}{lab}{extra}")
                emit(target(n.get("CycleTarget")), d + 1)
                out.append(f"{p}end for")
            elif ob == "IDestinationNode":
                out.append(f"{p}{dis}navigate → {n.get('Destination')}({args_text(n.get('Arguments'))}) transition={n.get('Transition')}")
                return
            elif ob == "IMessageNode":
                out.append(f"{p}{dis}message {n.get('Type')}{lab}: {s(n.get('Message'), 300)}")
            elif ob == "IJavaScriptNode":
                ins = params_text(n.get("InputParameters"))
                outs = params_text(n.get("OutputParameters"))
                out.append(f"{p}{dis}javascript {n.get('Name')}({args_text(n.get('Arguments'))})" + (f" → {outs}" if outs else ""))
                for line in (n.get("JavaScript") or "").splitlines():
                    out.append(f"{p}{indent}| {line}")
            elif ob == "IRefreshDataNode":
                out.append(f"{p}{dis}refresh data {n.get('DataSource')}" + (f" max={n['MaxRecords']}" if n.get("MaxRecords") else ""))
            elif ob == "IAggregateNode":
                out.append(f"{p}{dis}aggregate {n.get('Name')} max={n.get('MaxRecords')}: {agg_text(n.get('Operations'))}")
            elif ob == "IRaiseExceptionNode":
                out.append(f"{p}{dis}raise {n.get('Exception')}: {s(n.get('ExceptionMessage'), 200)}")
                return
            elif ob == "ITriggerNode":
                out.append(f"{p}{dis}trigger event {n.get('Event')}({args_text(n.get('Arguments'))})")
            elif ob == "IJSONSerializeNode":
                out.append(f"{p}{dis}json-serialize {n.get('Name')} = {n.get('Data')} (dates {n.get('DateFormat')})")
            elif ob == "IJSONDeserializeNode":
                out.append(f"{p}{dis}json-deserialize {n.get('Name')}: {s(n.get('JSONString'), 200)} as {n.get('DataType')}")
            elif ob == "ICommentNode":
                out.append(f"{p}// {s(n.get('Text'), 300)}")
                return
            elif ob == "IExceptionHandlerNode":
                out.append(f"{p}on exception {n.get('Exception')} (log={n.get('LogError')})")
            else:
                out.append(f"{p}{dis}{ob} {n.get('Name', '')}")
            n = target(n.get("Target"))

    starts = [n for n in nodes if isinstance(n, dict) and n.get("Object") == "IStartNode"]
    for st in starts:
        emit(st, 0)
    for h in [n for n in nodes if isinstance(n, dict) and n.get("Object") == "IExceptionHandlerNode"]:
        emit(h, 0)
    unreached = [n for n in nodes if isinstance(n, dict) and id(n) not in emitted and n.get("Object") not in ("ICommentNode", "IStartNode")]
    if unreached:
        out.append("unreachable nodes (not connected to start or to an exception handler):")
        for n in unreached:
            emitted.discard(id(n))
        for n in unreached:
            if id(n) in emitted:
                continue
            emit(n, 1)
    return "\n".join(out)


def agg_text(ops):
    parts = []
    for op in ops or []:
        src = ", ".join(x.get("Name", "?") + (f"={x['SourceOperation']}" if x.get("SourceOperation") and x.get("SourceOperation") != x.get("Name") else "") for x in op.get("Sources", []) or [])
        flt = " and ".join(s(f.get("Condition"), 300) for f in op.get("Filters", []) or [])
        srt = ", ".join(f"{x.get('Attribute')} {x.get('SortDirection')}" for x in op.get("Sorts", []) or [])
        t = f"sources[{src}]"
        if flt:
            t += f" filter[{flt}]"
        if srt:
            t += f" sort[{srt}]"
        parts.append(t)
    return "; ".join(parts)


# ---------- widget rendering
def event_text(ev):
    if isinstance(ev, list):
        return "; ".join(event_text(e) for e in ev)
    if not isinstance(ev, dict):
        return ""
    t = f"→ {ev.get('Destination') or ev.get('Handler')}"
    if ev.get("Arguments"):
        t += f"({args_text(ev['Arguments'])})"
    if ev.get("BuiltInValidations") and ev.get("BuiltInValidations") != "None":
        t += f" validations={ev['BuiltInValidations']}"
    if ev.get("Transition") and ev.get("Transition") != "Inherited":
        t += f" transition={ev['Transition']}"
    return t


def render_widgets(m, widgets, d, out, used_blocks):
    p = "  " * d
    for w in widgets or []:
        if not isinstance(w, dict):
            continue
        ob = w.get("Object")
        name = f" #{w['Name']}" if w.get("Name") else ""
        props = []
        for k in ("Style", "Visible", "Enabled", "Width"):
            v = w.get(k)
            if v not in (None, "", "True") and not (k == "Width" and v in ("(fill parent)", "")):
                props.append(f"{k.lower()}={s(v, 120)}")
        for ep in w.get("ExtendedProperties", []) or []:
            props.append(f"{ep.get('Property')}={s(ep.get('Value'), 80)}")
        for ev in w.get("Events", []) or []:
            props.append(f"on {ev.get('Event')} {event_text(ev)}")
        pt = f"  [{'; '.join(props)}]" if props else ""
        if ob == "IMobileBlockInstanceWidget":
            mod, fl, sig = m.resolve_block(w.get("SourceBlock"))
            if w.get("SourceBlock"):
                used_blocks.add(w["SourceBlock"])
            out.append(f"{p}block {w.get('SourceBlock')} ({mod}.{fl}){name}{pt}")
            at = args_text(w.get("Arguments"))
            if at:
                out.append(f"{p}  args: {at}")
            for eh in w.get("EventHandlers", []) or []:
                if eh.get("Handler"):
                    out.append(f"{p}  on {eh.get('Event')} {event_text(eh)}")
            for pc in w.get("PlaceholdersContent", []) or []:
                if pc.get("Widgets"):
                    out.append(f"{p}  placeholder {pc.get('Placeholder')}:")
                    render_widgets(m, pc["Widgets"], d + 2, out, used_blocks)
            continue
        if ob == "IIfWidget":
            cond = (w.get("Condition") or "").strip()
            dead = "  [DEAD BRANCH: condition is a constant]" if cond in ("True", "False") else ""
            out.append(f"{p}if {s(cond, 300)}{name}{dead}")
            for br in w.get("TrueBranch", []) or []:
                render_widgets(m, br.get("Widgets"), d + 1, out, used_blocks)
            if any(br.get("Widgets") for br in w.get("FalseBranch", []) or []):
                out.append(f"{p}else")
                for br in w.get("FalseBranch", []) or []:
                    render_widgets(m, br.get("Widgets"), d + 1, out, used_blocks)
            continue
        if ob == "IList":
            extra = f" on scroll-ending {event_text(w['OnScrollEnding'])}" if w.get("OnScrollEnding") else ""
            out.append(f"{p}list source={w.get('Source')} mode={w.get('Mode')}{name}{extra}{pt}")
        elif ob == "IListItem":
            out.append(f"{p}list-item{name} swipeLeft={w.get('TriggerActionOnFullSwipeLeft')} swipeRight={w.get('TriggerActionOnFullSwipeRight')}{pt}")
            for side in ("leftActions", "rightActions"):
                if w.get(side):
                    out.append(f"{p}  {side}:")
                    render_widgets(m, w[side], d + 2, out, used_blocks)
        elif ob in ("ILink", "IButton", "IListItemAction"):
            out.append(f"{p}{ob[1:].lower()}{name} onclick {event_text(w.get('OnClick'))}{pt}")
        elif ob in ("IInput", "ITextArea", "IDropdown", "ISwitchWidget", "IRadioGroup", "IButtonGroup", "ICheckbox"):
            bits = [f"var={w.get('Variable')}"]
            for k in ("InputType", "Mandatory", "MaxLength", "TextLines", "Prompt", "List", "Values", "EmptyValue", "DropdownMode"):
                if w.get(k) not in (None, "", "False"):
                    bits.append(f"{k}={s(w[k], 100)}")
            if w.get("OnChange"):
                bits.append(f"onchange {event_text(w['OnChange'])}")
            out.append(f"{p}{ob[1:].lower()}{name} {' '.join(bits)}{pt}")
        elif ob == "IExpression":
            out.append(f"{p}expr{name}: {s(w.get('Value'), 300)}" + (f"  (example: {s(w.get('Example'), 60)})" if w.get("Example") else "") + pt)
        elif ob == "ITextWidget":
            out.append(f"{p}text: {s(w.get('Text'), 300)}" + (f"  [classes={w['StyleClasses']}]" if w.get("StyleClasses") else ""))
        elif ob == "IImageWidget":
            out.append(f"{p}image{name} {w.get('Image') or w.get('Url')} type={w.get('Type')}{pt}")
        elif ob == "IIcon":
            out.append(f"{p}icon{name} {w.get('Icon')} size={w.get('IconSize')}{pt}")
        elif ob == "IPopup":
            out.append(f"{p}popup{name} show={s(w.get('ShowPopup'), 120)}{pt}")
        elif ob == "IPlaceholderWidget":
            out.append(f"{p}placeholder-def {w.get('Name')}{pt}")
        elif ob == "IRadioButton" or ob == "IButtonGroupItem":
            out.append(f"{p}{ob[1:].lower()}{name} value={s(w.get('Value'), 80)}{pt}")
        elif ob == "ILabel":
            out.append(f"{p}label{name} for={w.get('TargetWidget')}{pt}")
        elif ob == "IAdvancedHtml":
            out.append(f"{p}html <{w.get('Tag')}>{name}{pt}")
        elif ob in ("IContainer", "IForm", "IIfBranchWidget", "IPlaceholderContentWidget"):
            out.append(f"{p}{ob[1:].lower()}{name}{pt}")
        else:
            out.append(f"{p}{ob}{name}{pt}")
        for k in ("content", "Widgets"):
            if w.get(k):
                render_widgets(m, w[k], d + 1, out, used_blocks)


# ---------- collection helpers
def iter_dicts(o):
    if isinstance(o, dict):
        yield o
        for v in o.values():
            yield from iter_dicts(v)
    elif isinstance(o, list):
        for v in o:
            yield from iter_dicts(v)


def called_actions(obj):
    """Client and server action names, and event handler / lifecycle destinations, called in an object."""
    client, server = set(), set()
    for d in iter_dicts(obj):
        ob = d.get("Object")
        if ob == "IExecuteClientActionNode" and d.get("Action"):
            client.add(d["Action"])
        elif ob == "IExecuteServerActionNode" and d.get("Action"):
            server.add(d["Action"])
    return client, server


def used_block_names(obj):
    return {d["SourceBlock"] for d in iter_dicts(obj) if d.get("Object") == "IMobileBlockInstanceWidget" and d.get("SourceBlock")}


def text_of(obj):
    return json.dumps(obj, ensure_ascii=False)


# ---------- sections
def lifecycle_text(o):
    bits = []
    for k in ("OnInitialize", "OnReady", "OnRender", "OnParametersChanged", "OnDestroy"):
        for ev in o.get(k, []) or []:
            if isinstance(ev, dict) and ev.get("Destination"):
                bits.append(f"{k} → {ev['Destination']}" + (f"({args_text(ev.get('Arguments'))})" if ev.get("Arguments") else ""))
    return "; ".join(bits) or "none"


def render_data_sources(m, o, out):
    das = o.get("DataActions", []) or []
    ags = o.get("ScreenAggregates", []) or []
    if not das and not ags:
        return
    out.append("")
    out.append("#### Data sources")
    for da in das:
        outs = params_text(da.get("OutputParameters"))
        after = f"; OnAfterFetch → {da['OnAfterFetch'][0].get('Destination')}" if da.get("OnAfterFetch") and isinstance(da["OnAfterFetch"], list) and da["OnAfterFetch"] and da["OnAfterFetch"][0].get("Destination") else ""
        out.append(f"- data action **{da['Name']}** fetch={da.get('Fetch')}; outputs: {outs or '-'}{after}")
        if da.get("LocalVariables"):
            out.append(f"  locals: {params_text(da['LocalVariables'])}")
        out.append("  ```")
        out.append("  " + render_flow(da.get("Nodes", [])).replace("\n", "\n  "))
        out.append("  ```")
    for ag in ags:
        after = f"; OnAfterFetch → {ag['OnAfterFetch'][0].get('Destination')}" if ag.get("OnAfterFetch") and isinstance(ag["OnAfterFetch"], list) and ag["OnAfterFetch"] and ag["OnAfterFetch"][0].get("Destination") else ""
        out.append(f"- aggregate **{ag['Name']}** fetch={ag.get('Fetch')} max={ag.get('MaxRecords')}: {agg_text(ag.get('Operations'))}{after}")


def render_actions_of(o, out, title="Screen actions"):
    sas = o.get("ScreenActions", []) or []
    if not sas:
        return
    out.append("")
    out.append(f"#### {title}")
    for sa in sas:
        hdr = f"- **{sa['Name']}**"
        if sa.get("InputParameters"):
            hdr += f" inputs: {params_text(sa['InputParameters'])}"
        if sa.get("LocalVariables"):
            hdr += f"; locals: {params_text(sa['LocalVariables'])}"
        out.append(hdr)
        out.append("  ```")
        out.append("  " + render_flow(sa.get("Nodes", [])).replace("\n", "\n  "))
        out.append("  ```")


def render_screen(m, flow, scr, out, used_blocks):
    out.append(f"## Screen {scr['Name']} (flow {flow})")
    out.append(f"- roles: {', '.join(scr.get('Roles', []) or []) or 'none (anonymous)'}; URL structure: {scr.get('URLStructure')}" + (f"; stylesheet: yes" if scr.get("StyleSheet") else ""))
    out.append(f"- input parameters: {params_text(scr.get('InputParameters')) or '-'}")
    out.append(f"- local variables: {params_text(scr.get('LocalVariables')) or '-'}")
    out.append(f"- lifecycle: {lifecycle_text(scr)}")
    render_data_sources(m, scr, out)
    out.append("")
    out.append("#### Widget tree")
    out.append("```")
    tree = []
    render_widgets(m, scr.get("Widgets"), 0, tree, used_blocks)
    out.extend(tree)
    out.append("```")
    render_actions_of(scr, out)
    out.append("")


def render_block(m, flow, blk, out, used_blocks, users):
    out.append(f"## Block {blk['Name']} (flow {flow})")
    out.append(f"- public: {blk.get('Public', 'False')}" + (f"; stylesheet: yes" if blk.get("StyleSheet") else ""))
    out.append(f"- input parameters: {params_text(blk.get('InputParameters')) or '-'}")
    evs = []
    for e in blk.get("Events", []) or []:
        evs.append(f"{e['Name']}({params_text(e.get('InputParameters'))})" + (" mandatory" if e.get("IsMandatory") == "True" else ""))
    out.append(f"- events: {'; '.join(evs) or '-'}")
    out.append(f"- local variables: {params_text(blk.get('LocalVariables')) or '-'}")
    out.append(f"- lifecycle: {lifecycle_text(blk)}")
    out.append(f"- used by (UBTConnect): {', '.join(sorted(users.get(blk['Name'], []))) or 'nothing in this module'}")
    render_data_sources(m, blk, out)
    out.append("")
    out.append("#### Widget tree")
    out.append("```")
    tree = []
    render_widgets(m, blk.get("Widgets"), 0, tree, used_blocks)
    out.extend(tree)
    out.append("```")
    render_actions_of(blk, out, "Block actions")
    out.append("")


def render_client_action(m, a, out):
    kind = "function" if a.get("Function") == "True" else "action"
    out.append(f"## {a['Name']} ({kind}, folder {a.get('Folder', '-')})")
    out.append(f"- inputs: {params_text(a.get('InputParameters')) or '-'}")
    out.append(f"- outputs: {params_text(a.get('OutputParameters')) or '-'}")
    if a.get("LocalVariables"):
        out.append(f"- locals: {params_text(a['LocalVariables'])}")
    out.append("```")
    out.append(render_flow(a.get("Nodes", [])))
    out.append("```")
    out.append("")


def closure_actions(m, roots):
    """Own client actions reachable from the root objects (screens, blocks), transitively."""
    todo = set()
    server = set()
    for r in roots:
        c, sv = called_actions(r)
        todo |= c
        server |= sv
    seen = set()
    while todo:
        n = todo.pop()
        if n in seen or n not in m.client_actions:
            continue
        seen.add(n)
        c, sv = called_actions(m.client_actions[n])
        todo |= c - seen
        server |= sv
    return seen, server


def block_closure(m, roots):
    """Own blocks used by the roots, transitively (blocks inside blocks)."""
    todo = set()
    for r in roots:
        todo |= used_block_names(r)
    seen = set()
    while todo:
        n = todo.pop()
        if n in seen or n not in m.blocks:
            continue
        seen.add(n)
        todo |= used_block_names(m.blocks[n][1]) - seen
    return seen


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dump", default="migration/clarify/.dump/espace.json")
    ap.add_argument("--out", default="migration/clarify/flows")
    ap.add_argument("flows", nargs="*")
    args = ap.parse_args()
    m = Model(json.load(open(args.dump)))

    # block users (own module)
    users = collections.defaultdict(set)
    for name, (fl, o) in list(m.screens.items()) + list(m.blocks.items()):
        for b in used_block_names(o):
            users[b].add(name)

    # per screen flow: roots and closures
    screen_flows = [f for f in m.flows if f not in m.block_only_flows]
    flow_roots = {}
    flow_actions = {}
    flow_server = {}
    flow_blocks = {}
    for fl in screen_flows:
        f = m.flows[fl]
        scrs = [n for n in f["Nodes"] if isinstance(n, dict) and n.get("Object") == "IMobileScreen"]
        own_blocks = [n for n in f["Nodes"] if isinstance(n, dict) and n.get("Object") == "IMobileBlock"]
        bl = block_closure(m, scrs + own_blocks)
        roots = scrs + own_blocks + [m.blocks[b][1] for b in bl if b not in {x["Name"] for x in own_blocks}]
        acts, srv = closure_actions(m, roots)
        flow_roots[fl] = roots
        flow_actions[fl] = acts
        flow_server[fl] = srv
        flow_blocks[fl] = bl
    use_count = collections.Counter()
    for fl, acts in flow_actions.items():
        for a in acts:
            use_count[a] += 1
    shared_actions = {a for a, c in use_count.items() if c >= SHARED_MIN_FLOWS}

    targets = args.flows or screen_flows + ["_shared"]
    for fl in targets:
        if fl == "_shared":
            write_shared(m, args.out, shared_actions, users, use_count)
            continue
        if fl not in m.flows or fl in m.block_only_flows:
            print("skip (not a screen flow):", fl)
            continue
        write_flow(m, args.out, fl, flow_roots[fl], flow_actions[fl], flow_server[fl], flow_blocks[fl], shared_actions, users, use_count)


def write_flow(m, outdir, fl, roots, acts, srv, bl, shared_actions, users, use_count):
    d = os.path.join(outdir, fl, "pack")
    os.makedirs(d, exist_ok=True)
    f = m.flows[fl]
    scrs = [n for n in f["Nodes"] if isinstance(n, dict) and n.get("Object") == "IMobileScreen"]
    own_blocks = [n for n in f["Nodes"] if isinstance(n, dict) and n.get("Object") == "IMobileBlock"]
    ext_sites = [n for n in f["Nodes"] if isinstance(n, dict) and n.get("Object") == "IExternalSite"]
    used_blocks = set()
    head = [f"# Pack of UI flow {fl} (DEV model, MCP dump of {os.path.basename(outdir)} 2026-10-27)", "",
            "Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.",
            "Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, 'unreachable nodes' list.", ""]
    # screens.md
    out = head + [f"Screens: {', '.join(x['Name'] for x in scrs)}", ""]
    for scr in scrs:
        render_screen(m, fl, scr, out, used_blocks)
    for es_ in ext_sites:
        out.append(f"## External site {es_['Name']} (flow {fl})")
        out.append(f"- URL: {s(es_.get('URL'), 300)}; inputs: {params_text(es_.get('InputParameters')) or '-'}")
        out.append("")
    open(os.path.join(d, "screens.md"), "w").write("\n".join(out))
    # blocks.md
    out = head[:]
    own_names = {b["Name"] for b in own_blocks}
    out.append(f"Own blocks of the flow: {', '.join(sorted(own_names)) or '-'}")
    other = sorted(b for b in bl if b not in own_names)
    out.append(f"Blocks of other UBTConnect flows that the flow uses (transitive): {len(other)}")
    out.append("")
    for b in own_blocks:
        render_block(m, fl, b, out, used_blocks, users)
    if other:
        out.append("## Blocks of other flows (signature only; full text in the pack of their flow)")
        out.append("")
        out.append("| Block | Flow | Pack | Inputs | Events |")
        out.append("|---|---|---|---|---|")
        for b in other:
            bfl, bo = m.blocks[b]
            pack = "_shared" if bfl in m.block_only_flows else bfl
            evs = "; ".join(e["Name"] for e in bo.get("Events", []) or [])
            out.append(f"| {b} | {bfl} | `../../{pack}/pack/blocks.md` | {params_text(bo.get('InputParameters')) or '-'} | {evs or '-'} |")
        out.append("")
    open(os.path.join(d, "blocks.md"), "w").write("\n".join(out))
    # actions.md
    out = head[:]
    own_acts = sorted(a for a in acts if a not in shared_actions)
    sh = sorted(a for a in acts if a in shared_actions)
    out.append(f"Module client actions the flow calls (transitive): {len(acts)}; of them shared (in `../../_shared/pack/actions.md`): {len(sh)}")
    out.append("")
    if sh:
        out.append("## Shared actions (signature only)")
        out.append("")
        out.append("| Action | Folder | Inputs | Outputs | Used by flows |")
        out.append("|---|---|---|---|---|")
        for a in sh:
            ao = m.client_actions[a]
            out.append(f"| {a} | {ao.get('Folder', '-')} | {params_text(ao.get('InputParameters')) or '-'} | {params_text(ao.get('OutputParameters')) or '-'} | {use_count[a]} |")
        out.append("")
    out.append("## Actions of this flow (full)")
    out.append("")
    for a in own_acts:
        render_client_action(m, m.client_actions[a], out)
    open(os.path.join(d, "actions.md"), "w").write("\n".join(out))
    # data.md + references.md + strings.md + meta.json
    all_objs = roots + [m.client_actions[a] for a in acts]
    txt = "\n".join(text_of(o) for o in all_objs)
    write_data(m, d, head, fl, srv, all_objs, txt)
    write_references(m, d, head, used_blocks | {b for o in all_objs for b in used_block_names(o)}, acts, srv, txt)
    write_strings(d, head, all_objs)
    meta = {
        "flow": fl,
        "screens": [x["Name"] for x in scrs],
        "ownBlocks": sorted(own_names),
        "usedBlocks": sorted(bl),
        "referencedBlocks": sorted(b for b in used_blocks if b not in m.blocks),
        "clientActions": sorted(acts),
        "serverActions": sorted(srv),
        "externalSites": [x["Name"] for x in ext_sites],
    }
    json.dump(meta, open(os.path.join(d, "meta.json"), "w"), indent=1)
    sizes = {k: os.path.getsize(os.path.join(d, k)) for k in os.listdir(d)}
    print(f"{fl:40s} screens={len(scrs)} ownBlocks={len(own_blocks)} usedBlocks={len(bl)} actions={len(acts)} server={len(srv)} bytes={sum(sizes.values())}")


def write_data(m, d, head, fl, srv, all_objs, txt):
    out = head[:]
    out.append("## Server and service actions called")
    out.append("")
    out.append("| Action | Kind | Module | Inputs | Outputs |")
    out.append("|---|---|---|---|---|")
    for a in sorted(srv):
        kind, mod = m.resolve_action(a, server=True)
        sig = None
        if kind == "own-server":
            sig = m.server_actions[a]
        elif kind == "ref-service":
            sig = m.ref_service[a][0][1]
        elif kind == "ref-server":
            sig = m.ref_server[a][0][1]
        ins = params_text(sig.get("InputParameters")) if sig else "-"
        outs = params_text(sig.get("OutputParameters")) if sig else "-"
        out.append(f"| {a} | {kind} | {mod} | {ins or '-'} | {outs or '-'} |")
    out.append("")
    # own server actions: full flow
    own = [a for a in srv if a in m.server_actions]
    if own:
        out.append("## Server actions of UBTConnect (full)")
        for a in sorted(own):
            render_client_action(m, m.server_actions[a], out)
    # entity actions
    ents = sorted({x for x in re.findall(r'"Action": "(\w+)"', txt) if x in m.entity_actions or ("action:" + x) in m.ref_entities})
    out.append("## Entity actions called (local entities)")
    out.append("")
    for a in ents:
        if a in m.entity_actions:
            out.append(f"- {a} → local entity {m.entity_actions[a][0]} (UBTConnect)")
        else:
            out.append(f"- {a} → entity {m.ref_entities['action:' + a][0][1]['Name']} ({m.ref_entities['action:' + a][0][0]})")
    out.append("")
    # local entities of the module, used
    out.append("## Local entities of UBTConnect that the flow names")
    out.append("")
    for name, e in m.entities.items():
        if re.search(r"\b" + re.escape(name) + r"\b", txt):
            attrs = "; ".join(f"{a['Name']}: {a.get('DataType')}" for a in e.get("Attributes", []) or [])
            out.append(f"- **{name}** ({e.get('Object')}): {attrs}")
    out.append("")
    # client variables
    reads = set(re.findall(r"Client\.(\w+)", txt))
    writes = set()
    for o in all_objs:
        for dd in iter_dicts(o):
            if dd.get("Object") == "IAssignment" and str(dd.get("Variable", "")).startswith("Client."):
                writes.add(dd["Variable"][7:])
    out.append("## Client variables")
    out.append("")
    out.append("| Variable | Type | Default | Folder | Read | Written |")
    out.append("|---|---|---|---|---|---|")
    for v in sorted(reads | writes):
        cv = m.client_vars.get(v, {})
        out.append(f"| Client.{v} | {cv.get('DataType', '?')} | {s(cv.get('DefaultValue'), 60) or '-'} | {cv.get('Folder', '-')} | {'yes' if v in reads else ''} | {'yes' if v in writes else ''} |")
    out.append("")
    sites = sorted(set(re.findall(r"Site\.(\w+)", txt)))
    if sites:
        out.append("## Site properties")
        out.append("")
        for v in sites:
            sp = m.settings.get(v, {})
            out.append(f"- Site.{v}: {sp.get('DataType', '?')} default={s(sp.get('DefaultValue'), 80) or '-'}")
        out.append("")
    # structures
    sts = sorted(n for n in m.structures if re.search(r"\b" + re.escape(n) + r"\b", txt))
    if sts:
        out.append("## Structures of UBTConnect that the flow names")
        out.append("")
        for n in sts:
            attrs = "; ".join(f"{a['Name']}: {a.get('DataType')}" for a in m.structures[n].get("Attributes", []) or [])
            out.append(f"- **{n}**: {attrs}")
        out.append("")
    open(os.path.join(d, "data.md"), "w").write("\n".join(out))


def write_references(m, d, head, used_blocks, acts, srv, txt):
    out = head[:]
    out.append("## Referenced blocks (other modules) used by the flow")
    out.append("")
    out.append("| Block | Module | Flow | Inputs | Events |")
    out.append("|---|---|---|---|---|")
    for b in sorted(x for x in used_blocks if x):
        if b in m.blocks:
            continue
        for mod, fl, sig in m.ref_blocks.get(b, []) or [("?", "?", None)]:
            evs = "; ".join(f"{e['Name']}({params_text(e.get('InputParameters'))})" for e in (sig or {}).get("Events", []) or [])
            out.append(f"| {b} | {mod} | {fl} | {params_text((sig or {}).get('InputParameters')) or '-'} | {evs or '-'} |")
    out.append("")
    # referenced client actions called by the flow's own objects and actions
    called = set(re.findall(r'"Object": "IExecuteClientActionNode"[^}]*?"Action": "(\w+)"', txt))
    called |= set(re.findall(r'"Action": "(\w+)"', txt))
    refc = sorted(a for a in called if a not in m.client_actions and a in m.ref_client)
    out.append("## Referenced client actions called")
    out.append("")
    out.append("| Action | Module | Folder | Inputs | Outputs |")
    out.append("|---|---|---|---|---|")
    for a in refc:
        for mod, sig in m.ref_client[a]:
            out.append(f"| {a} | {mod} | {sig.get('Folder', '-')} | {params_text(sig.get('InputParameters')) or '-'} | {params_text(sig.get('OutputParameters')) or '-'} |")
    out.append("")
    unknown = sorted(a for a in called if a not in m.client_actions and a not in m.ref_client and a not in m.server_actions
                     and a not in m.ref_server and a not in m.ref_service and a not in m.entity_actions and ("action:" + a) not in m.ref_entities)
    if unknown:
        out.append("## Action names not resolved (system actions or missing reference)")
        out.append("")
        out.append(", ".join(unknown))
        out.append("")
    # static entity records used
    out.append("## Static entity records named by the flow (Entities.<Entity>.<Record>)")
    out.append("")
    pairs = sorted(set(re.findall(r"Entities\.(\w+)\.(\w+)", txt)))
    by_ent = collections.defaultdict(list)
    for e, r in pairs:
        by_ent[e].append(r)
    own_static = {e["Name"]: e for e in m.es["Entities"] if e.get("Object") == "IStaticEntity"}
    for e, recs in sorted(by_ent.items()):
        sig = own_static.get(e) or (m.ref_entities[e][0][1] if e in m.ref_entities else None)
        mod = "UBTConnect" if e in own_static else (m.ref_entities[e][0][0] if e in m.ref_entities else "?")
        out.append(f"- **{e}** ({mod}): records used: {', '.join(recs)}")
        if sig and sig.get("Records"):
            attrs = [a["Name"] for a in sig.get("Attributes", []) or []]
            for rec in sig["Records"]:
                if rec.get("Identifier") in recs:
                    vals = {av.get("Attribute"): av.get("Value") for av in rec.get("AttributeValues", []) or []}
                    out.append(f"  - {rec.get('Identifier')}: " + ", ".join(f"{k}={s(v, 80)}" for k, v in vals.items() if v not in (None, "")))
    out.append("")
    open(os.path.join(d, "references.md"), "w").write("\n".join(out))


def write_strings(d, head, all_objs):
    out = head[:]
    out.append("## String literals (user-visible candidates; JavaScript and Style values excluded)")
    out.append("")
    seen = collections.OrderedDict()

    def walk(o, owner):
        if isinstance(o, dict):
            nm = o.get("Name") or owner
            for k, v in o.items():
                if k in ("JavaScript", "Style", "StyleClasses", "CustomStyle", "Example", "X", "Y"):
                    continue
                if isinstance(v, str) and '"' in v:
                    for lit in STR_RE.findall(v):
                        lit = lit.strip()
                        if len(lit) >= 2 and re.search(r"[A-Za-z]{2}", lit) and " " in lit or (len(lit) >= 12 and re.search(r"[a-z] [a-z]", lit)):
                            seen.setdefault(lit, set()).add(f"{nm}.{k}")
                else:
                    walk(v, nm)
        elif isinstance(o, list):
            for v in o:
                walk(v, owner)

    for o in all_objs:
        walk(o, o.get("Name", "?"))
    for lit, where in seen.items():
        out.append(f"- \"{s(lit, 200)}\"  ← {', '.join(sorted(where)[:4])}")
    open(os.path.join(d, "strings.md"), "w").write("\n".join(out))


def write_shared(m, outdir, shared_actions, users, use_count):
    d = os.path.join(outdir, "_shared", "pack")
    os.makedirs(d, exist_ok=True)
    head = ["# Shared pack: block-only flows and shared client actions (DEV model, MCP dump 2026-10-27)", "",
            "Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.", ""]
    out = head[:]
    out.append(f"Block-only flows: {', '.join(m.block_only_flows)}")
    out.append("")
    used = set()
    for fl in m.block_only_flows:
        for b in m.flows[fl]["Nodes"]:
            if isinstance(b, dict) and b.get("Object") == "IMobileBlock":
                render_block(m, fl, b, out, used, users)
    open(os.path.join(d, "blocks.md"), "w").write("\n".join(out))
    out = head[:]
    out.append(f"Client actions that {SHARED_MIN_FLOWS} or more flows use: {len(shared_actions)}")
    out.append("")
    out.append("| Action | Used by flows |")
    out.append("|---|---|")
    for a in sorted(shared_actions):
        out.append(f"| {a} | {use_count[a]} |")
    out.append("")
    for a in sorted(shared_actions):
        render_client_action(m, m.client_actions[a], out)
    # actions that no flow uses
    all_used = {a for a in use_count}
    unused = sorted(a for a in m.client_actions if a not in all_used)
    out.append("## Client actions that no screen flow reaches (app-start, events, system, or unused)")
    out.append("")
    for a in unused:
        render_client_action(m, m.client_actions[a], out)
    open(os.path.join(d, "actions.md"), "w").write("\n".join(out))
    roots = [b for fl in m.block_only_flows for b in m.flows[fl]["Nodes"] if isinstance(b, dict) and b.get("Object") == "IMobileBlock"]
    acts = set(shared_actions) | set(unused)
    all_objs = roots + [m.client_actions[a] for a in acts]
    txt = "\n".join(text_of(o) for o in all_objs)
    srv = set()
    for o in all_objs:
        srv |= called_actions(o)[1]
    write_data(m, d, head, "_shared", srv, all_objs, txt)
    write_references(m, d, head, used, acts, srv, txt)
    write_strings(d, head, all_objs)
    json.dump({"flow": "_shared", "blockOnlyFlows": m.block_only_flows, "ownBlocks": sorted(b["Name"] for b in roots),
               "clientActions": sorted(acts), "serverActions": sorted(srv), "screens": []}, open(os.path.join(d, "meta.json"), "w"), indent=1)
    print(f"{'_shared':40s} blocks={len(roots)} sharedActions={len(shared_actions)} unusedActions={len(unused)}")


if __name__ == "__main__":
    main()
