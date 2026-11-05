"""Route file (layout v2, 2026-11-05): the conclusions first, the evidence after.

Rules of the layout (user, 2026-11-05):
- Own code only in the main sections. OutSystems: the screen and the blocks of its UI flow (`<Module>.<Flow>.*`).
  React: `app/src/pages/<Route>/`. The shared blocks and components of the route go to the last section, by name.
- A user action diagram only when the handler has two or more effects, or branches. Diagrams fold in `<details>`.
- No flowchart of the calls (the table of section 5 has the same facts), no screenshot table (a link), no method
  (the README has it).
- Section 3 lists every difference that the tool can read from both sides without a mapping by hand: server
  calls, navigation targets, navigation parameters, client variables.
"""
import collections
import re

import extras_md as X

EFFECTS = ("call", "navigate", "message", "confirm", "external")


def own_os(screen_file_raw):
    return ".".join(screen_file_raw.split(".")[:2]) + "."


def _details(summary, lines):
    return [f"<details><summary>{summary}</summary>", "", *lines, "", "</details>", ""]


def _actions(h, diagrams, name, sec, head, with_diagram):
    """Index table; the diagrams of the entries that `with_diagram` keeps, folded. Returns (lines, mmd names)."""
    if not diagrams:
        return ["None.", ""], []
    keep = [d for d in diagrams if with_diagram(d)]
    L = ["| # | " + " | ".join(head) + " |", "|---" * (len(head) + 1) + "|"]
    names, dl = [], []
    for i, d in enumerate(diagrams, 1):
        t = f"{sec}.{i} {d['title']}"
        has = d in keep
        L.append(f"| {f'[{i}](#{h.slug(t)})' if has else i} | " + " | ".join(d["row"]) + " |")
        if has:
            n = f"{name}-{i}"
            names.append(n)
            open(h.os.path.join(h.DATA, f"{n}.mmd"), "w").write(d["mmd"])
            dl += [f"#### {t}", "", "```mermaid", d["mmd"], "```", ""]
    if dl:
        L += ["", *_details(f"{len(keep)} diagrams (handlers with two or more effects)", dl)]
    return L + [""], names


def _has_two_effects(d):
    """Two or more effect lines in the diagram: messages from the block or handler, and notes."""
    n = sum(1 for ln in d["mmd"].splitlines()[1:] if re.match(r"\s+(B|H)->>|\s+Note over", ln) and ": via " not in ln)
    return n >= 2


def differences(r, h, eps, own_blocks, nav_missing, own_nav, ox, rx):
    """Section 3: every difference the tool reads from both sides. Each line has its places."""
    L = h.missing_lines(eps, own_blocks, nav_missing, own_nav)
    if L == ["None."]:
        L = []
    raw = r["osRaw"]

    def op(f, line):
        return re.sub(r"^\[`[^`]*/([^`/]+)`\]", r"[`\1`]", h.link(f"{raw}/{f}", line))

    # navigation parameters: TST gives parameters to a screen; React goes there with other parameters or none
    react_np = collections.defaultdict(list)
    for x in rx.get("navParams") or []:
        for t in x["to"]:
            react_np[t].append(x)
    for x in ox.get("navParams") or []:
        t = x["to"]
        if t in nav_missing:
            continue  # the target itself is missing (above)
        keys = [k for k, _ in x["params"]]
        rk = sorted({k for y in react_np.get(t, []) for k in y["keys"]})
        if not react_np.get(t):
            where = ", ".join(h.link(*p.rsplit(":", 1)) if ":" in p else h.link(p) for p in sorted(set(r["reactNav"].get(t, []))))
            L.append(f"- Navigation to `{t}` with the parameters {', '.join(f'`{k}`' for k in keys)} ({op(x['file'], x['line'])}). "
                     f"No React navigation to `{t}` gives parameters. React names `{t}` in: {where or 'no file'}.")
        elif set(keys) != set(rk):
            L.append(f"- Navigation to `{t}`: TST gives {', '.join(f'`{k}`' for k in keys)} ({op(x['file'], x['line'])}); "
                     f"React gives {', '.join(f'`{k}`' for k in rk)} (" +
                     ", ".join(h.link(y["file"], y["line"]) for y in react_np[t]) + ").")
    # client variables
    react_cv = {x["name"] for x in rx.get("clientState") or []}
    seen = set()
    for x in ox.get("clientState") or []:
        if x["name"] in seen or x["op"] == "local entity":
            continue
        seen.add(x["name"])
        if x["name"] not in react_cv:
            L.append(f"- Client variable `{x['name']}`: TST {x['op']}s it ({op(x['file'], x['line'])}). "
                     "No React file of the route names it (`getClientVar`, `setClientVar`, `useClientVar`).")
    return L or ["None."]


def render(r, h):
    """Writes routes/<Route>.md in layout v2. `h` is the check_route module (helpers, paths)."""
    h.LINK_BASE[0] = h.OUT
    route = r["route"]
    blocks = r["blocks"]
    own_pre = own_os(r["screenFileRaw"])
    react_pre = f"app/src/pages/{route}/"
    eps = [x for x in (h.part_of(e, blocks, "screen") for e in r["endpoints"]) if x]
    shell_eps = [x for x in (h.part_of(e, blocks, "shell") for e in r["endpoints"]) if x]
    cnt = collections.Counter(e["status"] for e in eps)
    screen_blocks = [b for b in blocks if b["group"] == "screen"]
    own_blocks = [b for b in screen_blocks if b["file"].startswith(own_pre)]
    shared_blocks = [b for b in screen_blocks if not b["file"].startswith(own_pre)]
    blocks_ported = sum(1 for b in own_blocks if b["evidence"] in ("tag", "name"))
    own_nav = {t: v for t, v in r["osNav"].items() if "screen" in r.get("navGroups", {}).get(t, ["screen"])}
    nav_missing = [t for t in own_nav if t not in r["reactNav"]]
    questions = [c for c in r["reactOnly"] if "page" in c["where"]]
    ox, rx = r["osExtras"], r["reactExtras"]
    is_own_os = lambda f: f.startswith(own_pre)
    is_own_re = lambda f: f.startswith(react_pre)
    ox_own = {k: ([x for x in v if is_own_os(x["file"])] if isinstance(v, list) else v) for k, v in ox.items()}
    rx_own = {k: [x for x in v if is_own_re(x["file"])] for k, v in rx.items()}

    # user actions
    os_all = [a for a in r.get("userActions") or [] if a.get("group") != "shell"]
    by_short = {h.short(b["file"]): b["file"] for b in blocks}
    os_own_acts = [a for a in os_all if is_own_os(by_short.get(a["block"], ""))]
    os_shared_acts = [a for a in os_all if not is_own_os(by_short.get(a["block"], ""))]
    re_all = [a for a in r.get("reactActions") or [] if a.get("group") != "shell"]
    re_own_acts = [a for a in re_all if is_own_re(a["file"])]
    re_shared_acts = [a for a in re_all if not is_own_re(a["file"])]
    view = {**r, "endpoints": eps, "allEndpoints": r["endpoints"], "userActions": os_own_acts}
    os_d = h.action_diagrams(view)
    re_d = h.react_action_diagrams(re_own_acts, r["endpoints"])
    h.clean_outputs(route)
    ua_os, n1 = _actions(h, os_d, f"{route}-os", "6.1", h.OS_HEAD, _has_two_effects)
    ua_re, n2 = _actions(h, re_d, f"{route}-react", "6.2", h.REACT_HEAD, _has_two_effects)
    names = n1 + n2
    xnames = []

    def emit(name, mmd):
        open(h.os.path.join(h.DATA, f"{name}.mmd"), "w").write(mmd)
        xnames.append(name)

    diffs = differences(r, h, eps, own_blocks, nav_missing, own_nav, ox_own, rx)
    n_diff = sum(1 for x in diffs if x.startswith("- "))
    parity = h.os.path.join(h.cfg("tst", "screens"), route, "parity")
    parity_link = h.link(h.os.path.relpath(parity, h.ROOT)) if h.os.path.isdir(parity) else "no parity run"

    L = [f"# {route}: OutSystems (TST) and React", "",
         f"The route `/UBTConnect/{route}`, read from the TST compiled code and from the React code by "
         f"`route-actions/tools/check_route.py` on {h.date.today().isoformat()}. Facts only, each with its place. "
         "The method is in [README.md](../README.md).", "",
         "Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of "
         f"`app/src/pages/{route}/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks "
         "and components that the route uses are in the last section.", "",
         "## 1. Route", "",
         "| Item | Value | Source |", "|---|---|---|",
         f"| Route | `/UBTConnect/{route}` | `app/src/app/routes.generated.ts` |",
         f"| OutSystems screen | `{h.file_key(r['screenFile'])}` | TST compiled code |",
         f"| UI flow | `{r['flow']}` | MCP `getScreenNames` (DEV) |",
         f"| React screen | {h.link(r['react']['pageEntry'])} | `app/src/pages/` |",
         f"| React route rules | access `{r['meta']['access']}`, lock `{r['meta']['lock']}`, flag redirect {r['meta']['flagRedirect']} | `app/src/app/routes.ts` |",
         f"| Screenshots | {parity_link} | `route.py parity` |",
         f"| Code read | OutSystems: {len(own_blocks)} files of the UI flow, {len(shared_blocks)} shared blocks, {len(blocks) - len(screen_blocks)} app shell files. React: {r['react']['pageFiles']} files in the closure of the page | TST `facts.json`, `react_calls.mjs` |",
         "", "## 2. Result", "",
         "| Check | Result |", "|---|---|",
         f"| Server calls of the route on TST | {len(eps)}: React makes {cnt['implemented']}, **{cnt['missing']} missing** |",
         f"| Differences found | **{n_diff}** (see [section 3](#3-differences-found)) |",
         f"| Questions | {len(questions)} (see [section 4](#4-questions)) |",
         f"| User actions of the route (own code) | OutSystems: {len(os_own_acts)}. React: {len(re_own_acts)} |",
         f"| Screen and blocks of the UI flow with a React port | {blocks_ported} of {len(own_blocks)} |",
         f"| Navigation targets found in React | {len(own_nav) - len(nav_missing)} of {len(own_nav)} |",
         f"| Shared blocks and components on the route | OutSystems {len(shared_blocks)}, React {len({a['file'] for a in re_shared_acts})} with user actions: see the last section |",
         f"| App shell on this route | {len(shell_eps)} calls: see [APP_SHELL.md](../APP_SHELL.md) |",
         "", "## 3. Differences found", "",
         "Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or "
         "not. The tool does not judge the behaviour.", "",
         *diffs,
         "", "## 4. Questions", ""]
    qs = [f"React calls `{c['apiPath']}` from `{c['fn']}()` {h.link(c['file'], c['line'])} ({c['where']}). TST {route} "
          "has no chain to this call. Does the call belong to this route?" for c in questions]
    L += [f"{i}. {q}" for i, q in enumerate(qs, 1)] or ["None."]
    L += ["", "## 5. Server calls", "", *(h.calls_table(h.call_rows(eps, blocks), blocks) if eps else ["None."])]
    if r.get("otherScreenCalls"):
        L += ["", "The TST capture also has calls of another screen (scope `other`, no chain in the code of the route). "
              "React does not make them on this route. The tool does not count them:", "",
              *[f"- `{u}`: a call of the screen in the capture of " + (", ".join(f"[{x}]({x}.md)" for x in h.own_routes(u)) or "no other route")
                + "." for u in r["otherScreenCalls"]]]
    L += ["", "## 6. User actions", "",
          "Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React "
          "files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.", "",
          "### 6.1 OutSystems (TST)", "", *ua_os, "### 6.2 React", "", *ua_re]
    # sections 7–12: the extras, own code only, diagrams folded
    r_own = {**r, "osExtras": ox_own, "reactExtras": rx_own}
    xl, nx = X.sections(r_own, 7, h.link, h.short, emit, v2=True)
    L += xl
    names += xnames
    # last section: shared
    L += [f"## {nx}. Shared blocks and components on this route", "",
          "Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the "
          "route renders. Their facts belong to them, not to the route. This section gives their user actions once, "
          "without diagrams.", "", "### OutSystems (TST)", ""]
    if shared_blocks:
        cnt_sh = collections.Counter(a["block"] for a in os_shared_acts)
        L += ["| Block | Module | React port | User actions |", "|---|---|---|---|"]
        L += [f"| `{h.short(b['file'])}` | `{b['module']}` | " + (", ".join(h.link(x) for x in b["react"]) or "none found") +
              f" | {cnt_sh.get(h.short(b['file']), 0)} |" for b in shared_blocks]
        sh_view = {**r, "endpoints": eps, "allEndpoints": r["endpoints"], "userActions": os_shared_acts}
        sh_d = h.action_diagrams(sh_view)
        if sh_d:
            L += ["", *_details(f"User actions of the shared blocks ({len(sh_d)})",
                                ["| # | " + " | ".join(h.OS_HEAD) + " |", "|---" * (len(h.OS_HEAD) + 1) + "|",
                                 *[f"| {i} | " + " | ".join(d["row"]) + " |" for i, d in enumerate(sh_d, 1)]])]
    else:
        L += ["None."]
    L += ["", "### React", ""]
    if re_shared_acts:
        sh_r = h.react_action_diagrams(re_shared_acts, r["endpoints"])
        files = collections.Counter(a["file"] for a in re_shared_acts)
        L += ["| File | User actions |", "|---|---|"]
        L += [f"| {h.link(f)} | {c} |" for f, c in sorted(files.items())]
        L += ["", *_details(f"User actions of the shared components ({len(sh_r)})",
                            ["| # | " + " | ".join(h.REACT_HEAD) + " |", "|---" * (len(h.REACT_HEAD) + 1) + "|",
                             *[f"| {i} | " + " | ".join(d["row"]) + " |" for i, d in enumerate(sh_r, 1)]])]
    else:
        L += ["None."]
    p = h.os.path.join(h.OUT, f"{route}.md")
    open(p, "w", encoding="utf-8").write("\n".join(L) + "\n")
    h.render_svgs(names)
    print("wrote", h.rel(p))
    return p
