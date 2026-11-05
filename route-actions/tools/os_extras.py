"""OutSystems (TST) side of the route extras: screen inputs, navigation parameters, lifecycle, client state, access
and errors. It reads the compiled code of the route (`sources/raw/*.mvc.js`) and the UI flow controllers of the app
shell capture (`migration/shell/sources/`). Each fact has its file and line.

The compiled code writes one comment per node of an action flow (`// Execute Action: X`, `// Handle Error: X`,
`// Refresh Query: X`, `// Destination: X`, `// Var = Value`). The tool lists these comments and the `if(...)`
conditions as the steps of an action. It does not run the code.
"""
import os
import re

LIFECYCLE = ("Initialize", "Ready", "Render", "Destroy", "ParametersChanged")
STEP_SKIP = re.compile(r"^// (Server Actions|Aggregates and Data Actions|Client Actions|Event Handler Actions)\s*$")


def clean_expr(e):
    """`model.variables.isScreenInitializedVar` -> `IsScreenInitialized`; drops the compiler wrappers."""
    e = re.sub(r"(?:varBag\.)?(\w+?)JSResult\.value\.(\w+?)Out\b", lambda m: f"{m.group(1)}.{m.group(2)}", e)
    e = re.sub(r"\b(model\.variables|vars\.value|varBag|callContext)\.", "", e)
    e = re.sub(r"\b(\w+?)(Var|InLocal|In|Attr|Out|DataAct)\b", r"\1", e)
    e = re.sub(r"\.value\b", "", e)
    e = e.replace("OS.BuiltinFunctions.", "").replace("OS.Exceptions.Exceptions.", "")
    e = re.sub(r"\s+", " ", e).strip()
    return e[:90] + ("…" if len(e) > 90 else "")


def action_bodies(lines):
    """{action name: (first line number, [lines])} for `Controller.prototype._name$Action = function`."""
    out = {}
    cur, start, buf = None, 0, []
    for i, ln in enumerate(lines, 1):
        m = re.match(r"Controller\.prototype\._(\w+)\$Action = function", ln)
        if m or (cur and re.match(r"(Controller\.prototype\.|Controller\.registerVariableGroupType|return Controller;)", ln)):
            if cur:
                out[cur] = (start, buf)
            cur, start, buf = (m.group(1), i, []) if m else (None, 0, [])
            continue
        if cur:
            buf.append((i, ln))
    if cur:
        out[cur] = (start, buf)
    return out


def steps_of(body):
    """The node comments and the conditions of an action body, in order: [(line, text, depth)]. The depth is the
    brace depth of the line in the body: the steps of an `if` branch have a depth higher than the `If` step."""
    out = []
    depth = 0
    for i, ln in body:
        s = ln.strip()
        d = depth - (1 if s.startswith("}") else 0)
        depth += ln.count("{") - ln.count("}")
        if s.startswith("// ") and not STEP_SKIP.match(s):
            out.append((i, s[3:], d))
        elif s.startswith("if(") and "ensureControllerAlive" not in s:
            cond = re.sub(r"OutSystemsDebugger\.handleBreakpoint\([^)]*\) && ", "", s[3:].rsplit(")", 1)[0])
            cond = re.sub(r"^\((.*)\)$", r"\1", cond)
            if "OutSystemsDebugger" in cond:
                continue
            if "isInstanceOf" in cond:
                continue  # the `// Handle Error` comment above names it
            out.append((i, f"If {clean_expr(cond)}", d))
        elif s.startswith("} else {"):
            out.append((i, "Else", d))
        elif "safeExecuteJSNode(" in s:
            m = re.search(r'safeExecuteJSNode\(\w+, "(\w+)"', s)
            if m:
                out.append((i, f"JavaScript: {m.group(1)}", d))
    return out


def screen_inputs(lines):
    """The input parameters of a screen: `setInputs` reads them. [(name, type, line)]."""
    names = []
    for i, ln in enumerate(lines, 1):
        m = re.match(r'if\("(\w+)" in inputs\) \{', ln.strip())
        if m:
            names.append((m.group(1), i))
    out = []
    for n, i in names:
        t = next((re.search(r"DataTypes\.DataTypes\.(\w+)", ln) for ln in lines if f'this.attr("{n}", ' in ln), None)
        mand = next((ln.split(",")[3].strip() for ln in lines if f'this.attr("{n}", ' in ln), "")
        out.append({"name": n, "type": t.group(1) if t else "?", "mandatory": mand == "true", "line": i})
    return out


def nav_params(lines):
    """`generateScreenURL("/App/Screen", {Key: expr, ...})`: [(target, [(key, value)], line)]."""
    out = []
    for i, ln in enumerate(lines, 1):
        m = re.search(r'generateScreenURL\("/\w+/(\w+)", \{(.*)$', ln)
        if not m:
            continue
        pairs, j = [], i
        tail = m.group(2)
        if tail.startswith("}"):
            continue
        while j < len(lines) and len(pairs) < 12:
            nxt = lines[j].strip()  # the next line (lines is 0-based, j is the 1-based number of the current line)
            pm = re.match(r"(\w+): (.+?),?$", nxt)
            if pm and "generateScreenURL" not in nxt:
                pairs.append((pm.group(1), clean_expr(re.sub(r"OS\.DataConversion\.\w+\.(?:to|asString)\((.+), OS\.DataTypes\.DataTypes\.\w+\)", r"\1", pm.group(2)))))
                j += 1
                continue
            break
        out.append({"to": m.group(1), "params": pairs, "line": i})
    return out


def client_state(lines):
    """Client variables (`<Module>ClientVariables.getX()` / `setX(…)`) and local storage entities."""
    out = []
    for i, ln in enumerate(lines, 1):
        for m in re.finditer(r"(\w+?)ClientVariables\.(get|set)(\w+)\(", ln):
            out.append({"op": m.group(2), "name": f"{m.group(1)}.{m.group(3)}", "line": i})
        for m in re.finditer(r"\b(\w+Model)\.(Local\w+)Rec\b", ln):
            out.append({"op": "local entity", "name": m.group(2), "line": i})
    seen, uniq = set(), []
    for x in out:
        k = (x["op"], x["name"], x["line"])
        if k not in seen:
            seen.add(k)
            uniq.append(x)
    return uniq


def server_actions(lines):
    """Names of the server actions and data actions that the file calls (`callServerAction("X"`, `callDataAction`)."""
    out = set()
    for ln in lines:
        for m in re.finditer(r'call(?:ServerAction|DataAction)\("(?:DataAction)?(\w+)"', ln):
            out.add(m.group(1))
    return sorted(out)


def lifecycle(lines, acts):
    """[(event, action, line, steps)] for each screen or block event handler that is not null."""
    out = []
    for ev in LIFECYCLE:
        lc = ev[0].lower() + ev[1:]
        for i, ln in enumerate(lines, 1):
            if ln.startswith(f"Controller.prototype.on{ev}EventHandler = function"):
                called = None
                for ln2 in lines[i:i + 20]:
                    m = re.search(r"controller\.(\w+)\$Action\(", ln2)
                    if m:
                        called = m.group(1)
                        break
                name = called[0].lower() + called[1:] if called else None
                body = acts.get(name) or acts.get(called or "")
                out.append({"event": f"On{ev}", "action": called, "line": i, "server": server_actions(lines),
                            "actionLine": body[0] if body else None, "steps": steps_of(body[1]) if body else []})
                break
    return out


def fetch_modes(lines):
    """`dataFetchDependenciesOriginal`: 0 = fetch at start, -1 = only on demand (OutSystems client runtime)."""
    out = []
    for i, ln in enumerate(lines, 1):
        if "this.dataFetchDependenciesOriginal = {" in ln:
            j = i
            while j < len(lines) and not lines[j].startswith("}"):
                m = re.match(r"(\w+)\$(DataActRefresh|AggrRefresh): (-?\d+)", lines[j].strip())
                if m:
                    out.append({"name": m.group(1)[0].upper() + m.group(1)[1:], "mode": "at start" if m.group(3) == "0" else "on demand",
                                "value": int(m.group(3)), "line": j + 1,
                                "kind": "aggregate" if m.group(2) == "AggrRefresh" else "data action"})
                j += 1
            break
    return out


def read_by(lines, name, files):
    """Who reads the variable of a data action: child block inputs, `$if` conditions and text widgets of the view,
    and the client actions (not the refresh). [(what, line)]."""
    var = name[0].lower() + name[1:] + "DataAct"
    view_start = next((i for i, ln in enumerate(lines) if re.match(r'define\("[\w.]+\.mvc\$view"', ln)), None)
    view_end = next((i for i, ln in enumerate(lines) if re.match(r'define\("[\w.]+\.mvc\$controller"', ln)), len(lines))
    ctrl_end = next((i for i, ln in enumerate(lines) if re.match(r'define\("[\w.]+\.mvc\$debugger"', ln)), len(lines))
    out = []
    child = None
    for i, ln in enumerate(lines):
        if view_start is not None and view_start <= i < view_end:
            m = re.search(r"React\.createElement\((\w+)_mvc_view, \{", ln)
            if m:
                key = m.group(1)
                child = next((f[:-7].split(".")[-1] for f in files if f.endswith(".mvc.js") and f[:-7].replace(".", "_") == key), key.split("_")[-1])
            if f"model.variables.{var}" not in ln:
                continue
            s = ln.strip()
            k = re.match(r"(\w+): ", s)
            if "$if(" in s:
                out.append(("shown if" + (f" ({child})" if child else ""), i + 1))
            elif k and child and not k.group(1).startswith("_") and "dataFetchStatus" not in k.group(1):
                out.append((f"{child}.{k.group(1)}", i + 1))
            elif "$text(" in s or "asPrimitiveValue" in s:
                out.append(("text", i + 1))
            else:
                out.append(("view", i + 1))
        elif view_end <= i < ctrl_end and f"model.variables.{var}" in ln and "DataActRefresh" not in ln and "replaceWith" not in ln and "dataFetchStatusAttr" not in ln:
            act = None
            for j in range(i, -1, -1):
                mm = re.match(r"Controller\.prototype\._(\w+)\$Action = function", lines[j])
                if mm:
                    act = mm.group(1)
                    break
                if re.match(r"Controller\.prototype\.(\w+)\$DataActRefresh", lines[j]):
                    break
            if act:
                out.append((f"action {act}", i + 1))
    seen, uniq = set(), []
    for w, ln in out:
        if w not in seen:
            seen.add(w)
            uniq.append((w, ln))
    return uniq


def errors(acts):
    """`// Handle Error: X` in the actions: [(action, error, line, steps of the handler)]."""
    out = []
    for name, (start, body) in acts.items():
        for k, (i, ln) in enumerate(body):
            m = re.match(r"// Handle Error: (\w+)", ln.strip())
            if not m:
                continue
            steps, depth = [], 0
            for i2, ln2 in body[k + 1:]:
                depth += ln2.count("{") - ln2.count("}")
                if depth < 0 or (depth <= 0 and ln2.strip().startswith("// Handle Error:")):
                    break
                s = ln2.strip()
                if s.startswith("// "):
                    steps.append((i2, s[3:], 0))
            out.append({"action": name, "error": m.group(1), "line": i, "steps": steps})
    return out


def access(lines):
    """`Controller.checkPermissions`: `checkRegistered()` = registered users; an empty body = anonymous."""
    for i, ln in enumerate(lines, 1):
        if ln.startswith("Controller.checkPermissions = function"):
            body = lines[i] if i < len(lines) else ""
            m = re.search(r"OS\.RolesInfo\.(\w+)\(([^)]*)\)", body)
            return {"check": f"{m.group(1)}({m.group(2)})" if m else "none", "line": i}
    return None


def flow_handler(src, shell_dir):
    """The UI flow of the screen and its `handleError` chain through the UI flow controllers."""
    m = re.search(r"\b_flow_(\w+?)Controller\.default\.handleError", src)
    if not m:
        return []
    chain, flow = [], m.group(1)
    for _ in range(5):
        mod, _, fl = flow.partition("_")
        f = os.path.join(shell_dir, f"{mod}.{fl}.controller.js")
        if not os.path.exists(f):
            chain.append({"flow": fl, "file": None, "handled": []})
            break
        lines = open(f, encoding="utf-8", errors="replace").read().splitlines()
        handled = [(i, re.match(r"// Handle Error: (\w+)", ln.strip()).group(1)) for i, ln in enumerate(lines, 1)
                   if re.match(r"// Handle Error: (\w+)", ln.strip())]
        nxt = None
        for i, ln in enumerate(lines, 1):
            mm = re.search(r"_flow_(\w+?)Controller\.default\.handleError", ln)
            if mm and "Controller.prototype.handleError" not in ln:
                nxt = mm.group(1)
                break
        hl = next((i for i, ln in enumerate(lines, 1) if "Controller.prototype.handleError = function" in ln), None)
        chain.append({"flow": fl, "file": f, "line": hl, "handled": handled})
        if not nxt or nxt == flow:
            break
        flow = nxt
    return chain


def extras(sources, files, screen_file, shell_dir):
    """The facts for the screen and block files of the route (not the app shell)."""
    out = {"inputs": [], "navParams": [], "lifecycle": [], "fetch": [], "clientState": [], "errors": [],
           "access": None, "flowHandler": [], "roleRefs": []}
    for f in files:
        src = sources.get(f)
        if src is None:
            continue
        lines = src.splitlines()
        acts = action_bodies(lines)
        if f == screen_file:
            out["inputs"] = [{**x, "file": f} for x in screen_inputs(lines)]
            out["access"] = {**(access(lines) or {"check": "?", "line": None}), "file": f}
            out["flowHandler"] = flow_handler(src, shell_dir)
        out["navParams"] += [{**x, "file": f} for x in nav_params(lines)]
        out["lifecycle"] += [{**x, "file": f} for x in lifecycle(lines, acts)]
        out["fetch"] += [{**x, "file": f, "readBy": read_by(lines, x["name"], list(sources))} for x in fetch_modes(lines)]
        out["clientState"] += [{**x, "file": f} for x in client_state(lines)]
        out["errors"] += [{**x, "file": f} for x in errors(acts)]
        for i, ln in enumerate(lines, 1):
            if ln.startswith("Controller.checkPermissions") or ln.strip() == "OS.RolesInfo.checkRegistered();":
                continue
            for m in re.finditer(r"OS\.RolesInfo\.\w+\([^)]{0,60}\)|\$roles\.\w+|\bCheck\w+Role\b", ln):
                out["roleRefs"].append({"text": m.group(0), "file": f, "line": i})
    return out


