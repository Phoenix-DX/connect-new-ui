#!/usr/bin/env python3
"""
survey_app.py: app-level static survey from survey-<App>.json (produced by survey.js).

Usage:
  python3 survey_app.py --survey survey-<App>.json --out migration/survey \
      [--shell-ui capture-<HomeScreen>-default.json] [--agents-out migration/AGENTS.md]

Outputs (in --out):
  routes.md          every screen: route, inputs, content blocks, data calls, navigation in/out,
                     variant group, complexity, suggested wave, status column to maintain
  navigation.mmd     Mermaid flowchart of screen-to-screen navigation
  shell.md           blocks used directly by most screens (app shell candidates) and what they do
  shared-blocks.md   blocks reused by several screens (build once as shared components)
  variants.md        screens that look like versions of each other, with the flags found nearby
  osui.md            OutSystems UI: version, provider libraries in the manifest, every pattern block and the screens
                     that use it (built once in the foundation, pattern P-OSUI)
  screens.json       machine-readable data (used by scaffold_react_app.py)
--agents-out writes AGENTS.md from assets/AGENTS-template.md with the app name filled in.
--shell-ui is optional: a UI snapshot of the home screen; its styles are analysed by
analyze_capture.py separately (see SKILL.md, survey mode).
"""
import argparse, json, os, re, sys
from collections import defaultdict, deque

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from analyze_capture import js_facts, block_key  # noqa: E402

TITLE_RE = re.compile(r'"title",\s*\{\s*get:\s*function\s*\(\)\s*\{\s*return\s*"([^"]*)"')
SYSTEM_HINT = re.compile(r"(Login|Logout|PIN|Pincode|Fingerprint|Onboard|Splash|Unsupported|InvalidPermissions|Error|Offline|Maintenance|Debug|Test)", re.I)
VARIANT_PREFIX = re.compile(r"^(New_|Old_|Legacy_|V\d+_)")
VARIANT_SUFFIX = re.compile(r"(_New|_Old|_Legacy|_?V\d+|_\d+)$")


def norm_variant(name):
    n = VARIANT_PREFIX.sub("", name)
    n = VARIANT_SUFFIX.sub("", n)
    return n.lower()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--survey", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--agents-out")
    ap.add_argument("--shared-min", type=int, default=3, help="screens needed for a block to count as shared")
    a = ap.parse_args()

    data = json.load(open(a.survey, encoding="utf-8"))
    app = data.get("app", "App")
    sources = data["sources"]
    os.makedirs(a.out, exist_ok=True)

    files = {}
    for name, src in sources.items():
        if not name.endswith(".mvc.js"):
            continue
        f = js_facts(name, src)
        module, key = block_key(name)
        f["module"], f["key"] = module, key
        f["isScreen"] = "OSView.BaseView.BaseWebScreen" in src
        t = TITLE_RE.search(src)
        f["title"] = t.group(1) if t else ""
        f["inputs"] = [v for v in f["variables"] if v["kind"] == "input" and not v["name"].startswith("_")]
        f["deps"] = [d + ".mvc.js" for d in f["referencedBlocks"]]
        files[name] = f

    screens = {n: f for n, f in files.items() if f["isScreen"]}
    route_of = {n: f"/{f['module']}/{f['key'].split('.')[-1]}" for n, f in screens.items()}
    screen_by_route = {r: n for n, r in route_of.items()}

    def closure(name):
        seen, stack = [], list(files[name]["deps"])
        while stack:
            d = stack.pop()
            if d in seen or d not in files:
                continue
            seen.append(d)
            stack.extend(files[d]["deps"])
        return seen

    info = {}
    direct_use = defaultdict(int)
    closure_use = defaultdict(set)
    for n in screens:
        cl = closure(n)
        for d in files[n]["deps"]:
            direct_use[d] += 1
        for d in cl:
            closure_use[d].add(n)
        parts = [files[n]] + [files[d] for d in cl]
        nav = sorted({x["to"] for p in parts for x in p["navigation"]})
        info[n] = {
            "route": route_of[n], "file": n, "module": files[n]["module"], "flow": files[n]["key"].split(".")[0],
            "screen": files[n]["key"].split(".")[-1], "title": files[n]["title"],
            "inputs": [f"{v['name']}: {v['type']}" for v in files[n]["inputs"]],
            "directBlocks": files[n]["deps"], "closure": cl,
            "dataActions": sorted({x["name"] for p in parts for x in p["dataActions"]}),
            "aggregates": sorted({x["name"] for p in parts for x in p["aggregates"]}),
            "serverActions": sorted({x["name"] for p in parts for x in p["serverActions"]}),
            "navOut": nav,
            "navigateBack": any(p["navigateBack"] for p in parts),
            "flags": sorted({s for p in parts for s in p["staticEntities"] if re.search(r"(launchdarkly|feature|flag|toggle)", s, re.I)}),
            "images": sorted({i for p in parts for i in p["images"]}),
            "missingSources": [d for d in files[n]["deps"] if d not in files],
        }

    # OutSystems UI patterns (survey.js keeps the OutSystemsUI module): one shared implementation each, never per screen
    OSUI = re.compile(r"^OutSystemsUI(_\w+)?\.")
    def osui_pattern(b):
        parts = b.replace(".mvc.js", "").split(".")
        return bool(OSUI.match(b)) and len(parts) >= 3 and parts[1] not in ("Private",)
    osui_use = defaultdict(set)
    for n, i in info.items():
        i["osuiPatterns"] = sorted(d.replace(".mvc.js", "") for d in i["closure"] if osui_pattern(d))
        for d in i["osuiPatterns"]:
            osui_use[d].add(i["screen"])
    manifest = data.get("manifest", [])
    PROVIDER = re.compile(r"(flatpickr|virtual-?select|splide|nouislider|popper|swiper|choices|tippy|sortable|leaflet|chart|highcharts|moment|dayjs)", re.I)
    osui_files = sorted(m for m in manifest if "OutSystemsUI" in m and not m.endswith(".mvc.js"))
    providers = sorted(m for m in manifest if PROVIDER.search(m.split("/")[-1]))
    version = sorted({x for m in manifest for x in re.findall(r"OutSystemsUI(?:_\d+(?:_\d+)*)?", m)})
    om = ["# OutSystems UI", "",
          "Pattern blocks of OutSystems UI used by the app. Each is built ONCE as a shared component (`src/shared/osui/<Pattern>`, tag "
          "`@os-block OutSystemsUI.<Flow>.<Block>`) that renders the same DOM and classes (`osui-*`) and reproduces the behaviour of the "
          "pattern; patterns with a provider library get a stack item (`osui:<Pattern>`) for the user to choose the web equivalent.", "",
          f"- Module names found: {', '.join('`' + v + '`' for v in version) or '(none: is OutSystems UI excluded from the survey?)'}",
          f"- OutSystems UI scripts/styles in the manifest: {len(osui_files)}" + "".join(f"\n  - `{m}`" for m in osui_files[:20]),
          f"- Provider libraries in the manifest: {', '.join('`' + m.split('/')[-1] + '`' for m in providers) or 'none found'}", "",
          "| Pattern block | Screens | Users |", "|---|---|---|"]
    for b, users in sorted(osui_use.items(), key=lambda kv: -len(kv[1])):
        om.append(f"| `{b}` | {len(users)} | {', '.join(sorted(users)[:8])}{' …' if len(users) > 8 else ''} |")
    if not osui_use:
        om.append("| - | none found | |")
    os.makedirs(a.out, exist_ok=True)
    open(os.path.join(a.out, "osui.md"), "w", encoding="utf-8").write("\n".join(om) + "\n")

    # shell = blocks used directly by at least half of the screens
    n_screens = max(1, len(screens))
    shell = sorted([d for d, c in direct_use.items() if c >= max(2, n_screens // 2)], key=lambda d: -direct_use[d])
    shell_closure = set(shell)
    for s in shell:
        if s in files:
            shell_closure.update(closure(s))
    layout_level = sorted([d for d, users in closure_use.items() if len(users) >= max(3, n_screens // 2) and d not in shell_closure],
                          key=lambda d: -len(closure_use[d]))
    shared = sorted([d for d, users in closure_use.items() if len(users) >= a.shared_min and d not in shell_closure and d not in layout_level],
                    key=lambda d: -len(closure_use[d]))

    # inbound navigation
    inbound = defaultdict(set)
    for n, i in info.items():
        for t in i["navOut"]:
            if t in screen_by_route:
                inbound[screen_by_route[t]].add(n)
    shell_nav = set()
    for s in shell_closure:
        if s in files:
            for x in files[s]["navigation"]:
                if x["to"] in screen_by_route:
                    shell_nav.add(screen_by_route[x["to"]])
                    inbound[screen_by_route[x["to"]]].add("(app shell)")

    # waves: BFS from screens reachable from the shell
    wave = {}
    q = deque()
    for s in shell_nav:
        wave[s] = 1; q.append(s)
    while q:
        cur = q.popleft()
        for t in info[cur]["navOut"]:
            nxt = screen_by_route.get(t)
            if nxt and nxt not in wave:
                wave[nxt] = wave[cur] + 1; q.append(nxt)

    # variants
    groups = defaultdict(list)
    for n, i in info.items():
        groups[norm_variant(i["screen"])].append(n)
    variants = {k: v for k, v in groups.items() if len(v) > 1}
    variant_of = {n: k for k, v in variants.items() for n in v}

    for n, i in info.items():
        i["wave"] = wave.get(n)
        i["reachedFrom"] = sorted(info[x]["route"] if x in info else x for x in inbound[n])
        i["variantGroup"] = variant_of.get(n)
        i["complexity"] = len(i["closure"]) + 2 * (len(i["dataActions"]) + len(i["aggregates"])) + len(i["serverActions"]) + len(i["navOut"])
        notes = []
        if SYSTEM_HINT.search(i["screen"]) or SYSTEM_HINT.search(i["flow"]):
            notes.append("system/auth screen: check scope")
        if not i["reachedFrom"]:
            notes.append("no inbound link found: deep link, start screen, or unused")
        if i["missingSources"]:
            notes.append(f"{len(i['missingSources'])} block source(s) not in survey")
        i["notes"] = notes

    # ---------- write outputs
    json.dump({"app": app, "screens": info, "shell": shell, "layoutLevel": layout_level, "shared": shared, "variants": variants},
              open(os.path.join(a.out, "screens.json"), "w", encoding="utf-8"), indent=1)

    order = sorted(info.values(), key=lambda i: (i["wave"] or 99, i["flow"], i["complexity"]))
    md = [f"# Routes of {app}\n",
          f"{len(info)} screens found in {len(files)} compiled screen/block files. Static analysis of the compiled code; no user data.\n",
          "**Wave**: 1 = reached directly from the app shell (bottom bar, menu), 2 = one step further, blank = not reachable from the shell (start/deep-link/auth/unused).",
          "**Status** (maintained by people and agents): `todo` → `spec` → `built` → `verified`; `skip` with a reason when out of scope.\n",
          "| Wave | Route | Title | Inputs | Content blocks | Data (data actions / aggregates / server) | Navigates to | Reached from | Variant group | Complexity | Notes | Status |",
          "|---|---|---|---|---|---|---|---|---|---|---|---|"]
    for i in order:
        content = [d.replace(".mvc.js", "") for d in i["directBlocks"] if d not in shell_closure][:3]
        data_cell = f"{len(i['dataActions'])} / {len(i['aggregates'])} / {len(i['serverActions'])}"
        md.append(f"| {i['wave'] or ''} | `{i['route']}` | {i['title']} | {', '.join(i['inputs']) or '-'} | {', '.join(content) or '-'} | {data_cell} | "
                  f"{len(i['navOut'])} | {', '.join(i['reachedFrom'][:4]) + (' …' if len(i['reachedFrom']) > 4 else '') or '-'} | {i['variantGroup'] or ''} | {i['complexity']} | {'; '.join(i['notes'])} | todo |")
    open(os.path.join(a.out, "routes.md"), "w", encoding="utf-8").write("\n".join(md) + "\n")

    mm = ["flowchart LR"]
    ids = {n: f"s{k}" for k, n in enumerate(info)}
    for n, i in info.items():
        mm.append(f'  {ids[n]}["{i["screen"]}"]')
    mm.append('  shell(("app shell"))')
    for n, i in info.items():
        for t in i["navOut"]:
            if t in screen_by_route:
                mm.append(f"  {ids[n]} --> {ids[screen_by_route[t]]}")
    for s in sorted(shell_nav):
        mm.append(f"  shell --> {ids[s]}")
    open(os.path.join(a.out, "navigation.mmd"), "w", encoding="utf-8").write("\n".join(mm) + "\n")

    sh = [f"# App shell candidates for {app}\n",
          "Blocks rendered directly by at least half of the screens. Build these once (app-shell.spec.md) before any screen.\n",
          "| Block | Used directly by | Data | Navigation targets | Flags |", "|---|---|---|---|---|"]
    for s in shell:
        f = files.get(s)
        if not f:
            sh.append(f"| `{s}` | {direct_use[s]} | (source not in survey) | | |"); continue
        cl = [f] + [files[d] for d in closure(s) if d in files]
        sh.append(f"| `{s}` | {direct_use[s]} screens | {', '.join(sorted({x['name'] for p in cl for x in p['dataActions'] + p['serverActions']})) or '-'} | "
                  f"{', '.join(sorted({x['to'] for p in cl for x in p['navigation']})) or '-'} | {', '.join(sorted({e for p in cl for e in p['staticEntities'] if re.search('(launchdarkly|feature|flag)', e, re.I)})) or '-'} |")
    sh += ["", "Blocks inside the shell (build as part of it):", ""] + [f"- `{d}`" for d in sorted(shell_closure - set(shell))]
    sh += ["", "Layout-level blocks: not rendered by screens directly, but inside the content of at least half of them (layouts, headers, common dialogs). Build them with the shell:", ""]
    sh += [f"- `{d}` ({len(closure_use[d])} screens)" for d in layout_level] or ["- none"]
    open(os.path.join(a.out, "shell.md"), "w", encoding="utf-8").write("\n".join(sh) + "\n")

    sb = [f"# Shared blocks of {app}\n", f"Blocks used by at least {a.shared_min} screens (outside the shell). Build once in `src/shared/`, spec them the first time a screen needs them.\n",
          "| Block | Screens | Example screens |", "|---|---|---|"]
    for d in shared:
        users = sorted(info[u]["screen"] for u in closure_use[d])
        sb.append(f"| `{d}` | {len(users)} | {', '.join(users[:5])}{' …' if len(users) > 5 else ''} |")
    open(os.path.join(a.out, "shared-blocks.md"), "w", encoding="utf-8").write("\n".join(sb) + "\n")

    vv = [f"# Screen variants of {app}\n", "Screens whose names differ only by New_/Legacy_/V2-style markers. Decide with the product team which one is live on production (check the flags found in the shell's navigation handlers) and mark the others `skip` in routes.md.\n"]
    for k, ns in sorted(variants.items()):
        vv.append(f"## {k}")
        for n in ns:
            vv.append(f"- `{info[n]['route']}` (from {', '.join(info[n]['reachedFrom'][:3]) or 'nowhere found'}) flags nearby: {', '.join(info[n]['flags']) or '-'}")
    open(os.path.join(a.out, "variants.md"), "w", encoding="utf-8").write("\n".join(vv) + "\n")

    if a.agents_out:
        tpl = open(os.path.join(HERE, "..", "assets", "AGENTS-template.md"), encoding="utf-8").read()
        open(a.agents_out, "w", encoding="utf-8").write(tpl.replace("{{APP}}", app))

    print(f"{len(info)} screens, {len(shell)} shell blocks, {len(shared)} shared blocks, {len(variants)} variant groups → {a.out}")


if __name__ == "__main__":
    main()
