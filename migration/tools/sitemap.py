"""Sitemap of UBTConnect as Mermaid diagrams, from the TST survey (compiled code).

Usage (project root): python3 migration/tools/sitemap.py [--out migration/sitemap.md]
Inputs: capture/survey-UBTConnect.json, migration/survey/screens.json, migration/scope-review.md (scope colours).
Edges carried by blocks embedded in 30+ screens (shell: PIN lock overlay, policy checker, logo, bottom bar) are drawn
once in the "shell" diagram instead of on every screen.
"""
import argparse, collections, json, re

AREAS = [  # (title, flows)
    ("Start and sign-in", ["App_Common", "App_PIN", "App_Policies"]),
    ("Home and messages", ["Home", "App_Services", "Notes", "App_Notifications", "Legacy_MyNotificationsFlow", "Calendar"]),
    ("Directory: countries, localities, search", ["Directory_Locality", "Directory_Search", "Directory_Updates", "Map"]),
    ("Directory: households", ["Directory_Household", "Directory_Photobook"]),
    ("Directory: supper meeting, OSG, community business", ["Directory_SupperMeetings", "Directory_OneSchoolGlobal",
                                                            "zDEV_Directory_CommunityBusinessBlocks"]),
    ("Bookmarks", ["Bookmarks", "Legacy_MyBookmarks"]),
    ("Orbit", ["Legacy_OrbitEventsFlow", "Legacy_OrbitAdminFlow", "Legacy_OrbitQRCodeFlow"]),
    ("LDM", ["Legacy_LDMEventsFlow", "Legacy_LDMEventsFlow_V2"]),
    ("Assemble", ["Legacy_AssembleFlow"]),
    ("Menu, profile and contact", ["App_Menu", "App_Menu_ContactUs", "App_Profile", "ContactFlow"]),
    ("Share", ["Legacy_Share", "zTemp_Flow"]),
    ("Deprecated", ["Deprecated_Calendar_PersonalEvent"]),
]
CLASSDEF = """  classDef build fill:#9fdcb8,stroke:#1f6f43,color:#012,stroke-width:2px
  classDef skip fill:#cfcfcf,stroke:#555555,color:#333,stroke-width:2px
  classDef pbuild fill:#e3f5ea,stroke:#2e8b57,color:#123,stroke-dasharray:4 3
  classDef decide fill:#fff1c9,stroke:#c99700,color:#321,stroke-dasharray:4 3
  classDef pskip fill:#f2f2f2,stroke:#999999,color:#666,stroke-dasharray:4 3
  classDef ext fill:#ffffff,stroke:#7a8ca3,color:#345,stroke-dasharray:2 2
  classDef hub fill:#e8eefc,stroke:#5b74b8,color:#223"""


def strip(f):
    return f[:-7] if f.endswith(".mvc.js") else f


def load(survey, screens_json, scope_md, board_md="migration/board.md"):
    src = json.load(open(survey))["sources"]
    sv = {s["screen"]: s for s in json.load(open(screens_json))["screens"].values()}
    names = set(sv)
    nav = re.compile(r'generateScreenURL\("/UBTConnect/([A-Za-z0-9_]+)"')
    own = {strip(f): set(m.group(1) for m in nav.finditer(t)) & names for f, t in src.items()}
    users = collections.defaultdict(set)
    for n, s in sv.items():
        for b in s.get("closure", []):
            users[strip(b)].add(n)
    shell = {b for b, u in users.items() if len(u) >= 30 and own.get(b)}
    local, full = {}, {}
    for n, s in sv.items():
        e = set(own.get(strip(s["file"]), set()))
        allp = set(e)
        for b in s.get("closure", []):
            allp |= own.get(strip(b), set())
            if strip(b) not in shell:
                e |= own.get(strip(b), set())
        local[n], full[n] = e - {n}, allp - {n}
    scope = {}
    row = re.compile(r'^\| \d+ \| ([A-Za-z0-9_]+) \|[^|]*\|[^|]*\|[^|]*\| (D\d+) \| ([^|]*) \| ([^|]*) \|$')
    for line in open(scope_md, encoding="utf-8"):
        m = row.match(line.strip())
        if m:
            name, grp, prop, note = m.group(1), m.group(2), m.group(3).strip(), m.group(4).strip()
            if grp in ("D4", "D5", "D6") or prop == "skip":
                scope[name] = "skip"
            elif grp == "D7" and not note.startswith("D9"):
                scope[name] = "build"
            else:
                scope[name] = "decide"
    # decisions recorded on the board win over the proposals of scope-review.md
    prop = {"build": "pbuild", "decide": "decide", "skip": "pskip"}
    scope = {n: prop.get(v, v) for n, v in scope.items()}
    try:
        for line in open(board_md, encoding="utf-8"):
            c = [x.strip() for x in line.split("|")]
            if len(c) > 9 and c[1] in sv and c[6] in ("build", "skip"):
                scope[c[1]] = c[6]
    except FileNotFoundError:
        pass
    shell_edges = {strip(b): sorted(own[b]) for b in shell}
    # blocks shared by 3+ screens (not shell) are drawn once as hub nodes in the area diagrams
    hubs = {b: sorted(own[b]) for b, u in users.items() if 3 <= len(u) < 30 and own.get(b) and b not in shell}
    direct, uses = {}, {}
    for n, s in sv.items():
        e = set(own.get(strip(s["file"]), set())); h = set()
        for b in map(strip, s.get("closure", [])):
            if b in shell:
                continue
            if b in hubs:
                h.add(b)
            else:
                e |= own.get(b, set())
        direct[n], uses[n] = e - {n}, sorted(h)
    hub = {"targets": hubs, "direct": direct, "uses": uses, "users": {b: len(users[b]) for b in hubs}}
    return sv, local, full, scope, shell_edges, {strip(b): len(users[b]) for b in shell}, hub


def area_of(sv):
    m = {}
    for title, flows in AREAS:
        for n, s in sv.items():
            if s["flow"] in flows:
                m[n] = title
    for n in sv:
        m.setdefault(n, "Other")
    return m


def node(n, cls, label=None):
    return f'  {n}["{label or n}"]:::{cls}'


def render(sv, local, full, scope, shell_edges, shell_users, hub):
    area = area_of(sv)
    titles = [t for t, _ in AREAS if any(area[n] == t for n in sv)] + (["Other"] if "Other" in area.values() else [])
    aid = {t: f"A{i}" for i, t in enumerate(titles)}
    out = ["# Sitemap: UBTConnect (TST)", "",
           "Generated by `python3 migration/tools/sitemap.py` from the TST survey (compiled code). Do not edit by hand.",
           f"{len(sv)} screens · {sum(len(v) for v in full.values())} screen → screen links. "
           f"{sum(len(v) for v in local.values())} links belong to one screen; the 5 shared frame blocks give the other links (diagram 2).", "",
           "**Colors:** solid border = decided on the board (dark green build, dark grey skip); dashed border = only a proposal in",
           "`scope-review.md` (light green: build proposed, yellow: decision needed, light grey: skip proposed); white box = screen of another area.", "",
           "In an area diagram: hexagon = block that 3 or more screens use (drawn once); dotted arrow = screen that contains this block.", "",
           "To view: open `migration/sitemap.html` in a browser, or use VS Code with the extension *Markdown Preview Mermaid Support*.", ""]
    # 1. overview by area
    cnt, inside = collections.Counter(), collections.Counter()
    for s, ts in local.items():
        for t in ts:
            if area[s] == area[t]:
                inside[area[s]] += 1
            else:
                cnt[(area[s], area[t])] += 1
    out += ["## 1. Overview by area", "",
            "Arrow = number of own links between two areas (links of the shared frame are not counted).", "", "```mermaid", "flowchart LR"]
    for t in titles:
        ms = [n for n in sv if area[n] == t]
        c = collections.Counter(scope.get(n, "pbuild") for n in ms)
        done = c["build"] + c["skip"]
        out.append(f'  {aid[t]}["{t}<br/>{len(ms)} screens · decided {done} (build {c["build"]}, skip {c["skip"]})'
                   f'<br/>not decided: build proposed {c["pbuild"]} · decision needed {c["decide"]} · skip proposed {c["pskip"]}"]')
    for (a, b), k in sorted(cnt.items(), key=lambda x: -x[1]):
        out.append(f"  {aid[a]} -->|{k}| {aid[b]}")
    out += ["```", ""]
    # 2. shell
    out += ["## 2. Shared frame and start flow", "",
            "Most screens have these blocks in their layout. So every screen can go to the targets of these blocks.", "",
            "```mermaid", "flowchart LR", CLASSDEF]
    used = set()
    def add(n):
        if n not in used:
            used.add(n); out.append(node(n, scope.get(n, "pbuild")))
    labels = {"UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper": "PIN lock layer (frame)",
              "UBTConnect.App_PIN.Block_PINUnlock": "PIN lock layer",
              "UBTConnect.App_Policies.Policy_Checker": "Policy check",
              "UBTConnect.App_Common.CommonUI_InsideLayout": "Logo / go to Home",
              "UBTConnect.App_Common.BottomBarMenu": "Bottom bar"}
    out.append('  ANY(["Every screen of the app"])')
    for i, (b, ts) in enumerate(sorted(shell_edges.items())):
        out.append(f'  B{i}{{{{"{labels.get(b, b.split(".")[-1])}<br/>{shell_users[b]} screens"}}}}')
        out.append(f"  ANY --> B{i}")
        for t in ts:
            add(t); out.append(f"  B{i} --> {t}")
    for s in ["Splash", "Login", "PINRegister", "PINUnlock", "AcceptPendingPolicies"]:
        add(s)
        for t in sorted(local[s]):
            add(t); out.append(f"  {s} --> {t}")
    out += ['  START(["Open the app"]) --> Splash', "```", ""]
    # 3. per area
    for i, t in enumerate(titles, 3):
        ms = sorted(n for n in sv if area[n] == t)
        hubs_here = sorted({b for n in ms for b in hub["uses"][n]})
        ext = sorted({x for n in ms for x in hub["direct"][n] if area[x] != t} |
                     {x for b in hubs_here for x in hub["targets"][b] if area[x] != t})
        incoming = collections.Counter(area[s] for s, ts in local.items() for x in ts if x in ms and area[s] != t)
        out += [f"## {i}. {t}", ""]
        if incoming:
            out.append("Opened from other areas: " + ", ".join(f"{a} ({k})" for a, k in incoming.most_common()) + ".")
            out.append("")
        out += ["```mermaid", "flowchart LR", CLASSDEF, f'  subgraph AREA["{t}"]']
        out += ["  " + node(n, scope.get(n, "pbuild")) for n in ms]
        out.append("  end")
        out += [node(x, "ext", f"{x}<br/><i>{area[x]}</i>") for x in ext]
        hid = {b: f"H{j}" for j, b in enumerate(hubs_here)}
        for b in hubs_here:
            out.append(f'  {hid[b]}{{{{"block {b.split(".")[-1]}<br/>{hub["users"][b]} screens"}}}}:::hub')
        for n in ms:
            for x in sorted(hub["direct"][n]):
                out.append(f"  {n} --> {x}")
            for b in hub["uses"][n]:
                out.append(f"  {n} -.-> {hid[b]}")
        for b in hubs_here:
            for x in hub["targets"][b]:
                out.append(f"  {hid[b]} --> {x}")
        out += ["```", ""]
    # table
    inc = collections.defaultdict(set)
    for s, ts in local.items():
        for x in ts:
            inc[x].add(s)
    out += [f"## {len(titles) + 3}. Table: where each screen goes to and comes from (shared frame not counted)", "",
            "| Screen | Area | Scope | From | To |", "|---|---|---|---|---|"]
    for n in sorted(sv, key=lambda n: (titles.index(area[n]), n)):
        out.append(f"| {n} | {area[n]} | {scope.get(n, 'pbuild')} | {', '.join(sorted(inc[n])) or '—'} | {', '.join(sorted(local[n])) or '—'} |")
    return "\n".join(out) + "\n"


def to_html(md):
    """Same content as a standalone page: Mermaid blocks rendered by mermaid.js, the rest as plain text."""
    import html
    parts = re.split(r"```mermaid\n(.*?)```", md, flags=re.S)
    body = []
    for i, p in enumerate(parts):
        if i % 2:
            body.append(f'<pre class="mermaid">{html.escape(p)}</pre>')
        else:
            for line in p.strip().splitlines():
                if line.startswith("## "):
                    body.append(f"<h2>{html.escape(line[3:])}</h2>")
                elif line.startswith("# "):
                    body.append(f"<h1>{html.escape(line[2:])}</h1>")
                elif line.startswith("|"):
                    cells = [c.strip() for c in line.strip("|").split("|")]
                    if not set("".join(cells)) <= set("-"):
                        body.append("<tr>" + "".join(f"<td>{html.escape(c)}</td>" for c in cells) + "</tr>")
                elif line.strip():
                    body.append(f"<p>{html.escape(line)}</p>")
    page = "\n".join(body)
    page = re.sub(r"((?:<tr>.*?</tr>\n?)+)", r"<table>\1</table>", page)
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Sitemap UBTConnect</title>
<style>body{{font:14px/1.5 system-ui,sans-serif;margin:24px;max-width:1400px}}pre.mermaid{{background:#fafafa;border:1px solid #eee;padding:12px;overflow:auto}}
table{{border-collapse:collapse}}td{{border:1px solid #ddd;padding:3px 6px;vertical-align:top}}</style></head><body>
{page}
<script type="module">import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.esm.min.mjs";
mermaid.initialize({{startOnLoad:true,securityLevel:"loose",flowchart:{{useMaxWidth:false}}}});</script></body></html>
"""


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--survey", default="capture/survey-UBTConnect.json")
    ap.add_argument("--screens", default="migration/survey/screens.json")
    ap.add_argument("--scope", default="migration/scope-review.md")
    ap.add_argument("--out", default="migration/sitemap.md")
    ap.add_argument("--html", default="migration/sitemap.html")
    a = ap.parse_args()
    data = load(a.survey, a.screens, a.scope)
    md = render(*data)
    open(a.out, "w", encoding="utf-8").write(md)
    open(a.html, "w", encoding="utf-8").write(to_html(md))
    print(f"sitemap → {a.out}, {a.html}")
