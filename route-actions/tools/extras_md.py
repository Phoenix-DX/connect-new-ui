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


def _cell(s):
    return str(s).replace("|", "\\|")


def _steps(steps, link, path):
    if not steps:
        return "none"
    # the step links show only the line number: the file is in the Event or Error column
    def lk(ln):
        return re.sub(r"^\[`[^`]*:(\d+)`\]", r"[`L\1`]", link(path, ln))
    return "<br>".join(f"{i}. {_cell(t)} ({lk(ln)})" for i, (ln, t) in enumerate(steps, 1))


def _effects(effs, link):
    if not effs:
        return "none"
    out = []
    for e in effs:
        lab = f"[{e['branch']}] " if e.get("branch") else ""
        out.append(f"{lab}{e['kind']}" + (f" `{_cell(e['detail'])}`" if e.get("detail") else ""))
    return "<br>".join(dict.fromkeys(out))


def sections(r, start, link, short):
    """[markdown lines], number of the next section."""
    ox, rx = r["osExtras"], r["reactExtras"]
    raw = r["osRaw"]  # folder of the TST compiled files

    def op(f, line=None):
        # the TST compiled file by its name only (the folder is in the section intro)
        lk = link(f if "/" in f else f"{raw}/{f}", line)
        return re.sub(r"^\[`[^`]*/([^`/]+)`\]", r"[`\1`]", lk)

    def blk(f):
        return f"`{short(f)}`"

    n = start
    L = []
    # --- inputs and navigation parameters ----------------------------------------------------------------------
    L += [f"## {n}. Screen inputs and navigation parameters", "",
          "The input parameters of the screen, the parameters that the route reads, and the parameters that the route "
          "gives when it opens another screen. A navigation without parameters is only in section 2.",
          f"The OutSystems files are in `{raw}/`.", "",
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
    L += ["", "Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the "
          "block opens, `-1` is a fetch only on demand (a `Refresh Query` step).", ""]
    if ox["fetch"]:
        L += ["| Block | Data action | Fetch | Place |", "|---|---|---|---|"]
        L += [f"| {blk(x['file'])} | `{x['name']}` | {x['mode']} (`{x['value']}`) | {op(x['file'], x['line'])} |" for x in ox["fetch"]]
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
    L += ["", "Queries. A query fetches when its component mounts and when its key changes.", ""]
    if rx["queries"]:
        L += ["| File | Hook (function) | Calls | Place |", "|---|---|---|---|"]
        L += [f"| `{x['file'].rsplit('/', 1)[-1]}` | `{x['hook']}` (`{x['in']}`) | " +
              ("<br>".join(dict.fromkeys(f"`{c['detail']}`" for c in x["calls"])) or "none found") + f" | {link(x['file'], x['line'])} |"
              for x in rx["queries"]]
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
