"""Markdown of the route extras (pilot, `check_route.py <Route> --extras`): screen inputs and navigation parameters,
lifecycle, client state, access, errors. Two independent lists per section (OutSystems, React), no mapping.
Every row has its place in the code."""
import re

UI_SHARED = re.compile(r"^app/src/components/")
# OutSystems modules of shared patterns and plugins (not UBTConnect app code): OutSystems UI, the UBTConnect pattern
# library, plugins. The analog of app/src/components/ in React.
OS_SHARED = re.compile(r"^(OutSystemsUI\w*|UBTConnectLibrary|\w*Plugin|NavigationHandler)\.")


def _split_os(rows):
    own = [x for x in rows if not OS_SHARED.match(x["file"])]
    return own, [x for x in rows if OS_SHARED.match(x["file"])]


def os_dir(raw, f):
    """The folder of a TST compiled file: one folder for a captured route, one per file for a static check."""
    if isinstance(raw, dict):
        return raw.get(f) or next(iter(raw.values()), "")
    return raw


def _line(lk):
    """A link with the line number only (`L123`): the file is in another column."""
    return re.sub(r"^\[`[^`]*:(\d+)`\]", r"[`L\1`]", lk)


def _cell(s):
    return str(s).replace("|", "\\|")


def _steps(steps, link, path):
    if not steps:
        return "none"
    # the step links show only the line number: the file is in the Event or Error column
    def lk(ln):
        return re.sub(r"^\[`[^`]*:(\d+)`\]", r"[`L\1`]", link(path, ln))
    return "<br>".join(f"{i}. {_cell(t)} ({lk(ln)})" for i, (ln, t, *_) in enumerate(steps, 1))


def _effects(effs, link):
    if not effs:
        return "none"
    out = []
    for e in effs:
        lab = f"[{e['branch']}] " if e.get("branch") else ""
        out.append(f"{lab}{e['kind']}" + (f" `{_cell(e['detail'])}`" if e.get("detail") else ""))
    return "<br>".join(dict.fromkeys(out))


def sections(r, start, link, short, emit=lambda name, mmd: None, v2=False):
    """[markdown lines], number of the next section. `emit(name, mermaid)` gets each diagram (syntax check).
    v2: the diagrams fold in <details>, the lifecycle diagrams are only those of the screen file, the data flow
    keeps only the files with a server, state, client variable or navigation edge."""
    dcount = [0]

    def diagram(title, mmd):
        dcount[0] += 1
        emit(f"{r['route']}-x{dcount[0]}", mmd)
        return ["", f"#### {title}", "", "```mermaid", mmd, "```"]

    def fold(summary, lines):
        if not lines:
            return []
        if not v2:
            return lines
        return ["", f"<details><summary>{summary}</summary>", *lines, "", "</details>"]
    ox, rx = r["osExtras"], r["reactExtras"]
    raw = r["osRaw"]  # folder of the TST compiled files, or {file: folder} for a static check

    def op(f, line=None):
        # the TST compiled file by its name only (the folder is in the section intro)
        lk = link(f if "/" in f else f"{os_dir(raw, f)}/{f}", line)
        return re.sub(r"^\[`[^`]*/([^`/]+)`\]", r"[`\1`]", lk)

    def blk(f):
        return f"`{short(f)}`"

    n = start
    L = []
    # --- inputs and navigation parameters ----------------------------------------------------------------------
    L += [f"## {n}. Screen inputs and navigation parameters", "",
          "The input parameters of the screen, the parameters that the route reads, and the parameters that the route "
          "gives when it opens another screen. A navigation without parameters is only in section 2.",
          (f"The OutSystems files are in `{raw}/`." if not isinstance(raw, dict) else
           ("The OutSystems files are in `migration/sources/raw/` (the route's `analysis/manifest.json` names them); "
            "the files that TST changed after the capture are in `migration/runtime-sources/live/`." if r.get("live") else
            "The OutSystems files are in `migration/runtime-sources/` and in `migration/sources/raw/` (the shared store "
            "of the captured routes; static check).")), "",
          f"### {n}.1 OutSystems (TST)", ""]
    if ox["inputs"]:
        L += ["| Input | Type | Mandatory | Place |", "|---|---|---|---|"]
        L += [f"| `{x['name']}` | {x['type']} | {'yes' if x['mandatory'] else 'no'} | {op(x['file'], x['line'])} |" for x in ox["inputs"]]
    else:
        L += [f"Screen inputs: none. `setInputs` of {blk(r['screenFileRaw'])} reads no input."]
    L += [""]
    if ox["navParams"]:
        L += ["| Block | Target | Parameters | Place |", "|---|---|---|---|"]
        L += [f"| {blk(x['file'])} | `{x['to']}` | " + "<br>".join(f"`{k}` = `{_cell(v)}`" for k, v in x["params"]) +
              f" | {op(x['file'], x['line'])} |" for x in ox["navParams"]]
    else:
        L += ["Navigations with parameters: none."]
    L += ["", f"### {n}.2 React", "",
          f"Declared inputs of the route: {', '.join(f'`{i}`' for i in r['reactInputsDeclared']) or 'none'} "
          f"(`app/src/app/routes.generated.ts`).", ""]
    if rx["inputs"]:
        L += ["| Hook | Keys read | Place |", "|---|---|---|"]
        L += [f"| `{x['hook']}` | " + (", ".join(f"`{k['key']}` ({link(x['file'], k['line'])})" for k in x["keys"]) or "none") +
              f" | {link(x['file'], x['line'])} |" for x in rx["inputs"]]
    else:
        L += ["Parameters read (`useSearchParams`, `useParams`): none."]
    L += [""]
    if rx["navParams"]:
        L += ["| File | Target | Parameters | Place |", "|---|---|---|---|"]
        L += [f"| `{x['file'].rsplit('/', 1)[-1]}` | " + (", ".join(f"`{t}`" for t in x["to"]) or "?") + " | " +
              "<br>".join(f"`{k}` = `{_cell(v)}`" for k, v in zip(x["keys"], x["values"])) + f" | {link(x['file'], x['line'])} |"
              for x in rx["navParams"]]
    else:
        L += ["Navigations with parameters: none."]
    L += [""]
    n += 1

    # --- lifecycle -----------------------------------------------------------------------------------------------
    L += [f"## {n}. Lifecycle", "",
          "What runs when the screen and its blocks open and close, without a user action.", "",
          f"### {n}.1 OutSystems (TST)", "",
          "Event handlers. The steps are the node comments and the conditions of the compiled action.", ""]
    lc_own, lc_shared = _split_os(ox["lifecycle"])
    if lc_own:
        L += ["| Block | Event | Action | Steps |", "|---|---|---|---|"]
        L += [f"| {blk(x['file'])} | {x['event']} ({op(x['file'], x['line'])}) | `{x['action']}` | {_steps(x['steps'], op, x['file'])} |"
              for x in lc_own]
    else:
        L += ["None."]
    if lc_shared:
        L += ["", f"The shared pattern and plugin blocks (OutSystems UI, `UBTConnectLibrary`, plugins) of the route have "
              f"{len(lc_shared)} more event handlers: " + ", ".join(sorted({f"`{short(x['file'])}`" for x in lc_shared})) + "."]
    lc_diag = [x for x in lc_own if not v2 or x["file"] == r.get("screenFileRaw")]
    if lc_diag:
        dl = []
        for i, x in enumerate(lc_diag, 1):
            dl += diagram(f"{n}.1.{i} {short(x['file'])}: {x['event']}", os_lifecycle_mmd(x, short(x["file"])))
        L += fold(f"Sequence diagrams of the screen event handlers ({len(lc_diag)})",
                  ["", "The diagram keeps the order of the steps in the compiled action. The code does not give the "
                   "order of the handlers of different blocks.", *dl])
    L += ["", "Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the "
          "block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block "
          "inputs, conditions, text widgets and actions that read the result.", ""]
    if ox["fetch"]:
        L += ["| Block | Data action | Fetch | Read by | Place |", "|---|---|---|---|---|"]
        L += [f"| {blk(x['file'])} | `{x['name']}` | {x['mode']} (`{x['value']}`) | " +
              (", ".join(f"`{_cell(w)}` ({op(x['file'], ln)})" for w, ln in x.get("readBy") or []) or "**no widget or action reads it**") +
              f" | {op(x['file'], x['line'])} |" for x in ox["fetch"]]
    else:
        L += ["None."]
    own_eff = [x for x in rx["lifecycle"] if not UI_SHARED.match(x["file"]) or x["effects"]]
    shared_quiet = [x for x in rx["lifecycle"] if x not in own_eff]
    L += ["", f"### {n}.2 React", "",
          "Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make "
          "a call, a navigation or a message.", ""]
    if own_eff:
        L += ["| File | Hook (function) | Dependencies | Cleanup | Effects | Place |", "|---|---|---|---|---|---|"]
        L += [f"| `{x['file'].rsplit('/', 1)[-1]}` | `{x['hook']}` (`{x['in']}`) | `{_cell(x['deps'])}` | {'yes' if x['cleanup'] else 'no'} | "
              f"{_effects(x['effects'], link)} | {link(x['file'], x['line'])} |" for x in own_eff]
    else:
        L += ["None."]
    if shared_quiet:
        L += ["", f"The shared components (`app/src/components/`) of the route have {len(shared_quiet)} more effects "
              "without a call, a navigation or a message: " +
              ", ".join(sorted({f"`{x['in']}`" for x in shared_quiet})) + "."]
    with_eff = [x for x in own_eff if x["effects"]]
    if with_eff:
        dl = []
        for i, x in enumerate(with_eff, 1):
            dl += diagram(f"{n}.2.{i} {x['in']}: {x['hook']}", react_lifecycle_mmd(x))
        L += fold(f"Sequence diagrams of the effects with a call, a navigation, a message or a refresh ({len(with_eff)})", dl)
    L += ["", "Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what "
          "reads the result in the same file.", ""]
    if rx["queries"]:
        L += ["| File | Hook (function) | Calls | Read by | Place |", "|---|---|---|---|---|"]
        L += [f"| `{x['file'].rsplit('/', 1)[-1]}` | `{x['hook']}` (`{x['in']}`) | " +
              ("<br>".join(dict.fromkeys(f"`{c['detail']}`" for c in x["calls"])) or "none found") + " | " +
              (", ".join(f"`{_cell(r['what'])}` ({_line(link(x['file'], r['line']))})" for r in x.get("readBy") or []) or "**nothing reads it**") +
              f" | {link(x['file'], x['line'])} |" for x in rx["queries"]]
    else:
        L += ["None."]
    L += [""]
    n += 1

    # --- client state ----------------------------------------------------------------------------------------------
    L += [f"## {n}. Client state", "",
          "Client variables and browser storage that the route reads or writes. Other screens can read this state.", "",
          f"### {n}.1 OutSystems (TST)", ""]
    if ox["clientState"]:
        grp = {}
        for x in ox["clientState"]:
            grp.setdefault((x["file"], x["op"], x["name"]), []).append(x["line"])
        L += ["| Block | Operation | Variable | Places |", "|---|---|---|---|"]
        L += [f"| {blk(f)} | {o} | `{nm}` | " + ", ".join(op(f, ln) for ln in lns) + " |" for (f, o, nm), lns in grp.items()]
    else:
        L += ["None."]
    L += ["", f"### {n}.2 React", ""]
    if rx["clientState"]:
        L += ["| File | Operation | Variable or key | Place |", "|---|---|---|---|"]
        L += [f"| `{x['file'].rsplit('/', 1)[-1]}` | `{x['op']}` | `{_cell(x['name'])}` | {link(x['file'], x['line'])} |" for x in rx["clientState"]]
    else:
        L += ["None."]
    L += [""]
    n += 1

    # --- access ----------------------------------------------------------------------------------------------------
    a = ox["access"] or {}
    chk = a.get("check", "?")
    os_rule = {"checkRegistered()": "registered users (`checkRegistered()`)", "none": "anonymous (no check)"}.get(chk, f"`{chk}`")
    m = r["meta"]
    refs = ox.get("roleRefs") or []
    L += [f"## {n}. Access", "",
          "Who can open the route, and the role checks in the screen and block code.", "",
          "| Side | Rule | Place |", "|---|---|---|",
          f"| OutSystems (TST) | {os_rule} | {op(a['file'], a['line']) if a.get('line') else '?'} |",
          f"| React | access `{m['access']}`, lock `{m['lock']}`, flag redirect {m['flagRedirect']} | `app/src/app/routes.ts` |", "",
          ("Role checks in the TST screen and block actions: " + ", ".join(f"`{x['text']}` ({op(x['file'], x['line'])})" for x in refs) + "."
           if refs else "Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none."), ""]
    n += 1

    # --- errors ----------------------------------------------------------------------------------------------------
    L += [f"## {n}. Errors", "",
          "What the route does when an action or a call fails.", "", f"### {n}.1 OutSystems (TST)", ""]
    er_own, er_shared = _split_os(ox["errors"])
    if er_own:
        L += ["| Block | Action | Error | Steps of the handler |", "|---|---|---|---|"]
        L += [f"| {blk(x['file'])} | `{x['action']}` | `{x['error']}` ({op(x['file'], x['line'])}) | {_steps(x['steps'], op, x['file'])} |"
              for x in er_own]
    else:
        L += ["The actions of the screen and its blocks have no `Handle Error` node."]
    if er_shared:
        L += ["", f"The shared pattern and plugin blocks have {len(er_shared)} more `Handle Error` nodes: " +
              ", ".join(sorted({f"`{short(x['file'])}`" for x in er_shared})) + "."]
    if ox["flowHandler"]:
        L += ["", "An error without a handler goes to the `OnException` of the UI flow (`handleError`):", ""]
        for i, fh in enumerate(ox["flowHandler"], 1):
            where = op(fh["file"], fh.get("line")) if fh.get("file") else "not in `migration/shell/sources/`"
            hd = ", ".join(f"`{e}` ({op(fh['file'], ln)})" for ln, e in fh["handled"]) if fh["handled"] else \
                ("none, it goes to the next flow" if i < len(ox["flowHandler"]) else "none")
            L += [f"{i}. UI flow `{fh['flow']}` {where}. Handled errors: {hd}."]
    L += ["", f"### {n}.2 React", ""]
    if rx["errors"]:
        L += ["| File | Kind | Function | Effects | Place |", "|---|---|---|---|---|"]
        L += [f"| `{x['file'].rsplit('/', 1)[-1]}` | {x['kind']} | `{x['in']}` | {_effects(x['effects'], link)} | {link(x['file'], x['line'])} |"
              for x in rx["errors"]]
    else:
        L += ["None."]
    L += ["", "`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen "
          "(`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do "
          "not give the error to it.", ""]
    n += 1
    return L, n


# ---- diagrams -----------------------------------------------------------------------------------------------------
def _txt(t, n=80):
    """One line of Mermaid text: no `;` or `#` (Mermaid reads them as syntax), at most n characters."""
    t = re.sub(r"\s+", " ", re.sub(r"[;#]", "", str(t))).strip()
    return t[:n] + ("…" if len(t) > n else "")


def os_lifecycle_mmd(x, block):
    """One sequence diagram: the steps of one OutSystems event handler, with its If/Else branches."""
    server = set(x.get("server") or [])
    steps = x["steps"]
    kinds = set()
    body = []
    stack = []  # [depth of the If, has a message in the current section]

    def msg(line):
        body.append("  " * (len(stack) + 1) + line)
        if stack:
            stack[-1][1] = True

    def close_to(depth, is_else):
        while stack and (depth < stack[-1][0] or (depth == stack[-1][0] and not is_else)):
            if not stack[-1][1]:
                body.append("  " * (len(stack) + 1) + "Note over B: no step")
            stack.pop()
            body.append("  " * (len(stack) + 1) + "end")

    for ln, t, d in steps:
        close_to(d, t == "Else")
        if t.startswith("If "):
            body.append("  " * (len(stack) + 1) + f"alt {_txt(t[3:])}")
            stack.append([d, False])
        elif t == "Else":
            if stack and stack[-1][0] == d:
                if not stack[-1][1]:
                    body.append("  " * (len(stack) + 1) + "Note over B: no step")
                body.append("  " * len(stack) + "else other")
                stack[-1][1] = False
        else:
            m = re.match(r"(Refresh Query|Execute Action|Destination|Trigger Event|JavaScript): (\w+)", t)
            if m and (m.group(1) == "Refresh Query" or (m.group(1) == "Execute Action" and m.group(2) in server)):
                kinds.add("S")
                msg(f"B->>S: {m.group(2)}")
                msg(f"S-->>B: {m.group(2)}")
            elif m and m.group(1) == "Destination":
                kinds.add("N")
                msg(f"B->>N: go to {m.group(2)}")
            elif m and m.group(1) == "Trigger Event":
                kinds.add("P")
                msg(f"B->>P: event {m.group(2)}")
            elif m:
                msg(f"B->>B: {m.group(1).replace('Execute Action', 'action')} {m.group(2)}")
            else:
                msg(f"Note over B: {_txt(t)}")
    close_to(-1, False)
    L = ["sequenceDiagram", "  autonumber", "  participant R as OutSystems runtime", f"  participant B as {block}"]
    L += (["  participant S as Server (TST calls)"] if "S" in kinds else []) + \
         (["  participant P as Parent block"] if "P" in kinds else []) + \
         (["  participant N as Navigation"] if "N" in kinds else [])
    L.append(f"  R->>B: {x['event']} → {x['action']}")
    return "\n".join(L + body)


def react_lifecycle_mmd(x):
    """One sequence diagram: one React effect with a call, a navigation, a message or a refresh."""
    who = f"{x['in']} · {x['file'].rsplit('/', 1)[-1]}"
    kinds = {e["kind"] for e in x["effects"]}
    L = ["sequenceDiagram", "  autonumber", "  participant R as React", f"  participant H as {who}"]
    L += (["  participant A as Server (React api)"] if "call" in kinds else []) + \
         (["  participant N as Navigation"] if "navigate" in kinds else [])
    deps = x["deps"]
    when = "after each render" if deps.startswith("none") else ("after the mount" if deps == "[]" else f"after the mount and when {_txt(deps, 60)} changes")
    L.append(f"  R->>H: {x['hook']} ({when})")
    cur = None
    for e in x["effects"]:
        br = e.get("branch")
        if br != cur:
            if cur is not None:
                L.append("  end")
            if br is not None:
                L.append(f"  alt {_txt(br)}")
            cur = br
        ind = "    " if cur is not None else "  "
        k, d = e["kind"], e["detail"]
        if k == "call":
            L += [f"{ind}H->>A: {d.rsplit('/', 1)[-1]}", f"{ind}A-->>H: {d.rsplit('/', 1)[-1]}"]
        elif k == "navigate":
            L.append(f"{ind}H->>N: go to {_txt(d)}")
        elif k == "refresh":
            L.append(f"{ind}Note over H: {_txt(d)}: a query fetches again")
        else:
            L.append(f"{ind}Note over H: {k} {_txt(d)}")
    if cur is not None:
        L.append("  end")
    if x["cleanup"]:
        L.append("  R->>H: cleanup (unmount or before the next run)")
    return "\n".join(L)
