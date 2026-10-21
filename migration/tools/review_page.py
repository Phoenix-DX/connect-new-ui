#!/usr/bin/env python3
"""review_page.py: a self-contained review page for one screen, for the user's confirmation at route review.

Usage (project root): python3 migration/tools/review_page.py <Screen> [--app http://localhost:5173] [--out <file.html>]
                      [--clone-query "mocksession=unlocked&mockuser=policies"]

Summary first (state of each captured state, open items), then per state the original (captured DOM rendered with the
original CSS), the React build and the pixel diff side by side, the difference counts and the first differences; then
the route spec's "Decisions to confirm" (what the user confirms) and "Unclear points". Images are embedded (data URIs)
so the page can be published as a private artifact (page contract: no html/head/body tags, theme tokens, phone width).
Screenshots come from `route.py parity`, where user text and user images are masked. A route without a capture
(route.py no-capture) shows the React screenshots saved in screens/<S>/review/*.png instead.
"""
import argparse
import base64
import datetime
import glob
import html
import json
import os
import re

KINDS = ["structure", "class", "attr", "text", "style", "pseudo", "layout", "position", "pixel", "call"]

STYLE = """<style>
/* Layout: a review sheet. Summary strip, then one panel per captured state with the three renders side by side. */
:root{--bg:#f3f5f8;--panel:#ffffff;--ink:#17202e;--muted:#566176;--rule:#d9dee7;--accent:#1f5fbf;--pass:#13734a;
--fail:#b0311f;--chip:#e9edf3;--mark:#fff3c4;--display:"IBM Plex Sans Condensed","Arial Narrow",system-ui,sans-serif;
--body:"IBM Plex Sans",system-ui,-apple-system,"Segoe UI",sans-serif;--mono:"IBM Plex Mono",ui-monospace,Menlo,monospace}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#10141b;--panel:#171d27;--ink:#e6eaf1;
--muted:#97a2b5;--rule:#2a3342;--accent:#7fa8f0;--pass:#5bc493;--fail:#f08a7a;--chip:#222b38;--mark:#4a4220;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#10141b;--panel:#171d27;--ink:#e6eaf1;--muted:#97a2b5;--rule:#2a3342;--accent:#7fa8f0;
--pass:#5bc493;--fail:#f08a7a;--chip:#222b38;--mark:#4a4220;color-scheme:dark}
*{box-sizing:border-box}
body{background:var(--bg);color:var(--ink);font:15px/1.55 var(--body);margin:0}
.wrap{max-width:1180px;margin:0 auto;padding-inline:16px;padding-block:24px 56px;display:grid;gap:20px}
h1{font:600 30px/1.15 var(--display);margin:0;text-wrap:balance}
h2{font:600 19px/1.3 var(--display);margin:8px 0 0;letter-spacing:.01em}
h3{font:600 16px/1.3 var(--body);margin:0}
.eyebrow{font:500 12px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.muted{color:var(--muted)}a{color:var(--accent)}a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.panel{background:var(--panel);border:1px solid var(--rule);border-radius:10px;padding:16px;display:grid;gap:12px;min-width:0}
.row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.chip{background:var(--chip);border-radius:999px;padding:2px 10px;font:500 13px/1.6 var(--mono);font-variant-numeric:tabular-nums}
.pass{color:var(--pass)}.fail{color:var(--fail)}
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}
.stat{border-left:3px solid var(--rule);padding-left:12px;display:grid;gap:2px}
.stat.ok{border-color:var(--pass)}.stat.ko{border-color:var(--fail)}
.shots{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.shots figure{margin:0;display:grid;gap:6px;min-width:0}
.shots img{width:100%;max-width:100%;height:auto;border:1px solid var(--rule);border-radius:6px;background:#fff}
figcaption{font:500 12px/1.4 var(--mono);color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
ul{margin:0;padding-left:20px;display:grid;gap:6px}
code{font:13px/1.4 var(--mono);background:var(--chip);padding:1px 5px;border-radius:4px;word-break:break-word}
.diffs li{font-size:14px}
@media (max-width:720px){.shots{grid-template-columns:1fr}h1{font-size:26px}}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto}}
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Condensed:wght@600&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
"""


def img(path):
    if not path or not os.path.exists(path):
        return '<p class="muted">not available</p>'
    return f'<img alt="" loading="lazy" src="data:image/png;base64,{base64.b64encode(open(path, "rb").read()).decode()}">'


def section(md, title):
    m = re.search(rf"^##+\s*{re.escape(title)}[^\n]*\n(.*?)(?=^##\s|\Z)", md, re.S | re.M)
    return m.group(1) if m else ""


def bullets(text):
    """Markdown bullets with their continuation lines joined."""
    items, cur = [], None
    for line in text.splitlines():
        m = re.match(r"^\s*(?:[-*]|\d+\.)\s+(.*)", line)
        if m and not line.startswith("    "):
            if cur is not None:
                items.append(cur)
            cur = m.group(1).strip()
        elif cur is not None and line.strip() and not line.lstrip().startswith("|"):
            cur += " " + line.strip()
    if cur is not None:
        items.append(cur)
    return items


def md_inline(s):
    s = html.escape(s)
    return re.sub(r"`([^`]+)`", r"<code>\1</code>", s)


def ul(items):
    return "<ul>" + "".join(f"<li>{md_inline(i)}</li>" for i in items) + "</ul>" if items else '<p class="muted">none</p>'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("screen")
    ap.add_argument("--app", default="http://localhost:5173")
    ap.add_argument("--out")
    ap.add_argument("--clone-query", help="query for the localhost links instead of the plan's cloneQuery")
    a = ap.parse_args()
    s, base = a.screen, f"migration/screens/{a.screen}"
    route = ""
    for line in open("migration/board.md", encoding="utf-8"):
        c = [x.strip() for x in line.strip().strip("|").split(" | ")]
        if c and c[0] == s and len(c) > 1:
            route = c[1].strip("`")
    clone_query = ""
    try:
        plan = json.load(open("migration/capture-plan.json", encoding="utf-8"))
        clone_query = (plan.get("defaults") or {}).get("cloneQuery", "")
        for sc in plan.get("screens", []):
            if sc.get("screen") == s:
                route = sc.get("route", route).split("?")[0] if "<" in sc.get("route", "") else sc.get("route", route)
                clone_query = sc.get("cloneQuery", clone_query)
    except (OSError, ValueError):
        pass
    if a.clone_query:
        clone_query = a.clone_query
    sep = "&" if "?" in route else "?"
    url = f"{a.app}{route}{sep}{clone_query}" if clone_query else f"{a.app}{route}"
    jn = "&" if "?" in url else "?"
    reports = sorted(glob.glob(f"{base}/parity/*.json"))
    spec = open(f"{base}/route-spec.md", encoding="utf-8").read() if os.path.exists(f"{base}/route-spec.md") else ""
    states = [json.load(open(p, encoding="utf-8")) | {"_stem": p[:-5]} for p in reports]
    out = [f"<title>{html.escape(s)} parity review</title>", STYLE, '<main class="wrap">',
           f'<header class="panel"><div class="eyebrow">UBTConnect · OutSystems → React · route review</div>'
           f"<h1>{html.escape(s)}</h1><p class=\"muted\">Original route <code>{html.escape(route)}</code>. Original = the "
           f"TST capture rendered with the original CSS; React = the build on the dev server. Generated "
           f"{datetime.date.today().isoformat()}.</p></header>"]
    tiles = []
    for r in states:
        total = sum(r.get("counts", {}).values())
        tiles.append(f'<div class="stat {"ok" if total == 0 else "ko"}"><span class="eyebrow">state</span>'
                     f'<strong>{html.escape(r.get("state", ""))}</strong><span class="{"pass" if total == 0 else "fail"}">'
                     f'{"no unexempted difference" if total == 0 else f"{total} differences"}</span>'
                     f'<span class="muted">pixels {(r.get("pixel") or {}).get("ratio", 0) * 100:.2f}% · '
                     f'{len(r.get("exemptionsUsed", {}))} exemption(s) used</span></div>')
    out.append('<section class="panel"><h2>Summary</h2><div class="summary">' + ("".join(tiles) or
               '<p class="muted">No parity report yet.</p>') + "</div></section>")
    out.append('<section class="panel"><h2>Try it on your machine</h2><p class="muted">With the dev server running '
               '(<code>npm --prefix app run dev</code>):</p><div class="row">'
               f'<a href="{html.escape(url)}">open {html.escape(s)}</a>'
               f'<a href="{html.escape(url + jn)}mock=loading">loading state</a>'
               f'<a href="{html.escape(url + jn)}mock=error">error state</a>'
               f'<a href="{html.escape(url + jn)}ffpanel=1">with the flag panel</a></div></section>')
    out.append('<section class="panel"><h2>Please confirm</h2>' + ul(bullets(section(spec, "Decisions to confirm"))) + "</section>")
    shots = sorted(glob.glob(f"{base}/review/*.png"))
    if not states and shots:   # route without a capture (route.py no-capture): React screenshots only
        out.append('<section class="panel"><h2>React screenshots</h2><p class="muted">No original capture for this route '
                   '(user decision), so there is no side-by-side comparison: please check these against the app.</p>'
                   '<div class="shots">' + "".join(f"<figure>{img(p)}<figcaption>{html.escape(os.path.basename(p)[:-4])}"
                                                   "</figcaption></figure>" for p in shots) + "</div></section>")
    out.append("<h2>States</h2>" if states else "")
    for r in states:
        stem = r["_stem"]
        counts = r.get("counts", {})
        chips = "".join(f'<span class="chip">{k} {counts[k]}</span>' for k in KINDS if counts.get(k))
        ex = "".join(f'<span class="chip">{html.escape(k)} ×{v}</span>' for k, v in r.get("exemptionsUsed", {}).items())
        diffs = r.get("diffs", [])[:10]
        out.append(f'<section class="panel"><div class="row"><h3>{html.escape(r.get("state", ""))}</h3>{chips}</div>'
                   f'<div class="shots"><figure>{img(stem + ".expected.png")}<figcaption>Original (TST)</figcaption></figure>'
                   f'<figure>{img(stem + ".build.png")}<figcaption>React</figcaption></figure>'
                   f'<figure>{img(stem + ".diff.png")}<figcaption>Difference</figcaption></figure></div>'
                   + (f'<div class="row"><span class="eyebrow">exempted</span>{ex}</div>' if ex else "")
                   + ('<ul class="diffs">' + "".join(f"<li><code>{html.escape(d.get('kind', ''))}</code> "
                      f"{html.escape(d.get('path', '')[-140:])}: {html.escape(str(d.get('detail', '')))}</li>" for d in diffs)
                      + "</ul>" if diffs else "") + "</section>")
    out.append('<section class="panel"><h2>Unclear points (answered)</h2>' + ul(bullets(section(spec, "Unclear points"))) + "</section>")
    out.append("</main>")
    path = a.out or f"{base}/review/{s}-review.html"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf-8").write("\n".join(out))
    print(f"review page: {path} ({len(states)} state(s), {os.path.getsize(path) // 1024} KB)")


if __name__ == "__main__":
    main()
