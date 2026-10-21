#!/usr/bin/env python3
"""UBTConnect UI Flows dashboard: the original OutSystems app by UI flow, the migration scope and the specification
status. The dashboard says nothing about the new app (user, 2026-10-21).

Run from the project root:
  python3 migration/flows-dashboard/build_dashboard.py            # writes migration/flows-dashboard/site/
  python3 migration/flows-dashboard/build_dashboard.py --sheets   # also writes contact sheets of the screenshots
                                                                  # (for the privacy review) to site-review/

Sources (read at build time, nothing copied by hand):
- migration/survey/dev-inventory.json: screens, blocks and UI flows of the module on DEV (OutSystems MCP snapshot);
- migration/survey/screens.json: the TST screens from the compiled code (route, title, inputs, blocks, calls,
  navigation, flags, OutSystems UI patterns);
- migration/board.md: the scope decision of each screen;
- migration/screens/<Screen>/route-spec.md: a specification exists;
- migration/screens/<Screen>/parity/<state>.expected.png: the TST screenshots (captured, data masked);
- migration/tools/sitemap.py AREAS: UI flow → area;
- content/content.en.json: the written text (areas, flows, scope reasons, decisions).
Nothing is read from .auth/ or migration/.raw/.
"""
import argparse
import ast
import datetime
import json
import os
import re
import shutil
import subprocess

from PIL import Image, features

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", ".."))
MIG = os.path.join(ROOT, "migration")
SITE = os.path.join(HERE, "site")
REVIEW = os.path.join(HERE, "site-review")
BLOCK_ONLY_AREA = "Shared building blocks"
TEST_FLOW = re.compile(r"^(zTemp|zDEV|Deprecated)")
# shared blocks whose links every screen that renders them has (survey/shell.md, survey/shared-blocks.md)
SHELL_BLOCK = "UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js"
SHELL_LABEL = "App layout (sign-in, PIN, policies)"
BAR_BLOCK = "UBTConnect.App_Common.BottomBarMenu.mvc.js"
BAR_LABEL = "Bottom bar"
EXTERNAL_LABEL = "External map link"
APP_START_LABEL = "App start"  # survey reachedFrom "(app shell)": the app opens the screen itself
STATE_LABELS = {"default": "Default", "loading": "Loading", "offline": "Offline", "search": "Search", "filter": "Filter",
                "popup-sort": "Sort dialog", "popup-filters": "Filter dialog"}


def read_json(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def areas_from_sitemap():
    src = open(os.path.join(MIG, "tools", "sitemap.py"), encoding="utf-8").read()
    return ast.literal_eval(re.search(r"AREAS = (\[.*?\n\])", src, re.S).group(1))


def board_decisions():
    out = {}
    for line in open(os.path.join(MIG, "board.md"), encoding="utf-8"):
        cells = [c.strip() for c in line.split("|")]
        if len(cells) > 8 and cells[1] and cells[1] not in ("Screen", "---") and not cells[1].startswith("-"):
            out[cells[1]] = cells[6]
    return out


def state_label(state):
    if state in STATE_LABELS:
        return STATE_LABELS[state]
    if state.startswith("tag-"):
        return "Tab: " + state[4:].replace("oneschoolglobal", "OneSchool Global").replace("suppermeetings",
                                                                                           "Supper Meetings").title()
    return state.replace("-", " ").capitalize()


def screen_of(route):
    return route.rsplit("/", 1)[-1] if route.startswith("/") else route


def commit_hash():
    try:
        return subprocess.run(["git", "-C", ROOT, "rev-parse", "--short", "HEAD"], capture_output=True, text=True,
                              check=True).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        return "unknown"


def screenshots(screen, ext):
    """Convert the TST screenshots of a screen to small images in site/img/. Returns [{state, label, img}]."""
    shots = []
    for path in sorted(os.listdir(os.path.join(MIG, "screens", screen, "parity"))
                       if os.path.isdir(os.path.join(MIG, "screens", screen, "parity")) else []):
        if not path.endswith(".expected.png"):
            continue
        state = path[: -len(".expected.png")]
        name = f"{screen}__{state}.{ext}"
        with Image.open(os.path.join(MIG, "screens", screen, "parity", path)) as im:
            im = im.convert("RGB")
            if im.width > 390:
                im = im.resize((390, round(im.height * 390 / im.width)))
            im.save(os.path.join(SITE, "img", name), quality=74, method=6) if ext == "webp" else \
                im.save(os.path.join(SITE, "img", name), quality=78, optimize=True)
        shots.append({"state": state, "label": state_label(state), "img": f"img/{name}"})
    order = {"default": 0, "loading": 1, "offline": 2}
    return sorted(shots, key=lambda s: (order.get(s["state"], 3), s["state"]))


def build():
    dev = read_json(os.path.join(MIG, "survey", "dev-inventory.json"))
    tst = {v["screen"]: v for v in read_json(os.path.join(MIG, "survey", "screens.json"))["screens"].values()}
    content = read_json(os.path.join(HERE, "content", "content.en.json"))
    board = board_decisions()
    areas = areas_from_sitemap()
    flow_area = {f: a for a, fs in areas for f in fs}

    if os.path.isdir(SITE):
        shutil.rmtree(SITE)
    os.makedirs(os.path.join(SITE, "img"))
    ext = "webp" if features.check("webp") else "jpg"

    # block usage on TST: the closure of each screen (transitive blocks, from the compiled code)
    in_scope = {s for s, d in board.items() if d == "build"}
    used_by = {}
    for s, v in tst.items():
        for b in set(v.get("closure", [])) | set(v.get("directBlocks", [])):
            used_by.setdefault(b[: -len(".mvc.js")], set()).add(s)

    # navigation that a shared block adds to every screen that renders it: the targets common to all those screens
    def nav_set(v):
        return {screen_of(r) for r in v.get("navOut", [])}

    def common_targets(block):
        sets = [nav_set(v) for v in tst.values() if block in v.get("closure", []) + v.get("directBlocks", [])]
        return set.intersection(*sets) if sets else set()

    shared_nav = {}  # label -> (block, targets)
    shell_targets = common_targets(SHELL_BLOCK)
    shared_nav[SHELL_LABEL] = (SHELL_BLOCK, shell_targets)
    shared_nav[BAR_LABEL] = (BAR_BLOCK, common_targets(BAR_BLOCK) - shell_targets)

    def split_nav(v, name):
        """Own navigation targets of a screen, plus the labels of the shared blocks that add the others."""
        own, shared = set(), []
        blocks = set(v.get("closure", [])) | set(v.get("directBlocks", []))
        hidden = set()
        for label, (block, targets) in shared_nav.items():
            if block in blocks and targets:
                shared.append(label)
                hidden |= targets
        for target in nav_set(v) - hidden - {name}:
            own.add(EXTERNAL_LABEL if ":" in target else target)
        return sorted(own), shared

    def split_reached(v, name):
        """Screens that open this screen through their own links; shared blocks count once, as a label."""
        own, shared = set(), set()
        for r in v.get("reachedFrom", []):
            src = screen_of(r)
            if src == name:
                continue
            if src == "(app shell)":
                shared.add(APP_START_LABEL)
                continue
            via = [label for label, (block, targets) in shared_nav.items()
                   if name in targets and block in tst.get(src, {}).get("closure", []) + tst.get(src, {}).get("directBlocks", [])]
            if via:
                shared.update(via)
            else:
                own.add(src)
        return sorted(own), sorted(shared)

    screens = {}
    for s in dev["screens"]:
        name, flow = s["name"], s["flow"]
        t = tst.get(name)
        decision = board.get(name, "DEV only")
        rec = {"name": name, "flow": flow, "onTST": t is not None}
        if decision == "build":
            c = content["inScope"].get(name, {})
            rec.update(scope="in", reason=c.get("reason", ""), date=c.get("date", ""))
        elif decision == "skip":
            c = content["outOfScope"].get(name, {})
            rec.update(scope="out", reason=c.get("reason", ""), category=c.get("category", ""),
                       reopen=c.get("reopen", ""), date=c.get("date", ""))
        else:
            rec.update(scope="dev", reason=content["devOnly"].get(name, "This screen exists on DEV only."))
        rec["specified"] = decision == "build" and os.path.exists(os.path.join(MIG, "screens", name, "route-spec.md"))
        if t:
            own_blocks = sorted({b[: -len(".mvc.js")].split(".", 2)[2] for b in t.get("closure", [])
                                 if b.startswith("UBTConnect.")})
            nav_out, nav_shared = split_nav(t, name)
            reached, reached_shared = split_reached(t, name)
            rec.update(
                title=t.get("title", ""), route=t.get("route", ""), inputs=t.get("inputs", []),
                navOut=nav_out, navShared=nav_shared, reachedFrom=reached, reachedShared=reached_shared,
                dataActions=t.get("dataActions", []), serverActions=t.get("serverActions", []),
                flags=sorted({f.split(".")[-1] for f in t.get("flags", []) if "launchDarkly" in f or f.startswith("C2")}),
                osui=sorted({p.split(".")[-1] for p in t.get("osuiPatterns", [])}),
                blocks=len(t.get("closure", [])), ownBlocks=own_blocks,
                shots=screenshots(name, ext),
                noCapture=os.path.exists(os.path.join(MIG, "screens", name, "no-capture.json")))
        screens[name] = rec

    flows = {}
    for f in dev["flows"]:
        names = [s["name"] for s in dev["screens"] if s["flow"] == f]
        blocks = []
        for b in (b for b in dev["blocks"] if b["flow"] == f):
            users = sorted(used_by.get(f"UBTConnect.{f}.{b['name']}", set()))
            usage = "in" if set(users) & in_scope else "out" if users else "unused"
            blocks.append({"name": b["name"], "usage": usage, "usedBy": users})
        other = sorted({b[: -len(".mvc.js")] for n in names if n in tst for b in tst[n].get("closure", [])
                        if not b.startswith("UBTConnect.")})
        c = content["flows"].get(f, {})
        flows[f] = {
            "name": f, "area": flow_area.get(f, BLOCK_ONLY_AREA if not names else "Other"),
            "label": c.get("label", f), "purpose": c.get("purpose", ""), "screens": names, "blocks": blocks,
            "otherModuleBlocks": other,
            "counts": {k: sum(1 for n in names if screens[n]["scope"] == k) for k in ("in", "out", "dev")},
            "testOrDev": bool(TEST_FLOW.match(f)),
        }

    area_list = [{"name": a, "text": content["areas"].get(a, ""), "flows": [f for f in fs if f in flows]}
                 for a, fs in areas]
    area_list.append({"name": BLOCK_ONLY_AREA, "text": content["areas"].get(BLOCK_ONLY_AREA, ""),
                      "flows": [f for f, v in flows.items() if v["area"] == BLOCK_ONLY_AREA]})

    all_blocks = [b for v in flows.values() for b in v["blocks"]]
    counts = {
        "flows": len(flows), "screenFlows": sum(1 for v in flows.values() if v["screens"]),
        "blockFlows": sum(1 for v in flows.values() if not v["screens"]),
        "devScreens": len(screens), "tstScreens": sum(1 for s in screens.values() if s["onTST"]),
        "inScope": sum(1 for s in screens.values() if s["scope"] == "in"),
        "outOfScope": sum(1 for s in screens.values() if s["scope"] == "out"),
        "devOnly": sum(1 for s in screens.values() if s["scope"] == "dev"),
        "specified": sum(1 for s in screens.values() if s["specified"]),
        "blocks": len(all_blocks), "blocksIn": sum(1 for b in all_blocks if b["usage"] == "in"),
        "blocksOut": sum(1 for b in all_blocks if b["usage"] == "out"),
        "blocksUnused": sum(1 for b in all_blocks if b["usage"] == "unused"),
        "screenshots": sum(len(s.get("shots", [])) for s in screens.values()),
    }
    health = {
        "unusedBlocks": [{"flow": f, "name": b["name"]} for f, v in flows.items() for b in v["blocks"]
                         if b["usage"] == "unused"],
        "notReachable": [n for n, s in screens.items() if s.get("category") == "Not reachable on TST"],
        "testOrDevFlows": [f for f, v in flows.items() if v["testOrDev"]],
        "devOnly": [n for n, s in screens.items() if s["scope"] == "dev"],
        "flagScope": [{"screen": n, "reopen": s.get("reopen", ""), "reason": s.get("reason", "")}
                      for n, s in screens.items() if s.get("category") == "Behind a flag that is off on TST"],
        "outOnlyFlows": [f for f, v in flows.items() if v["screens"] and not v["counts"]["in"]],
    }
    data = {
        "meta": {"builtAt": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "commit": commit_hash(),
                 "devTakenAt": dev.get("takenAt", "")},
        "counts": counts, "areas": area_list, "flows": flows, "screens": screens, "health": health,
        "decisions": content.get("decisions", []),
        "sharedNav": {label: sorted(targets) for label, (_, targets) in shared_nav.items()},
    }
    page = open(os.path.join(HERE, "src", "page.html"), encoding="utf-8").read()
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    page = page.replace("/*__DATA__*/null", payload)
    with open(os.path.join(SITE, "index.html"), "w", encoding="utf-8") as fh:
        fh.write(page)
    return data


def contact_sheets(data, per_sheet=12, cols=6, width=260):
    """Contact sheets of all screenshots, for the privacy review before sharing (not published)."""
    if os.path.isdir(REVIEW):
        shutil.rmtree(REVIEW)
    os.makedirs(REVIEW)
    shots = [(n, s["label"], s["img"]) for n, rec in sorted(data["screens"].items()) for s in rec.get("shots", [])]
    for i in range(0, len(shots), per_sheet):
        part = shots[i: i + per_sheet]
        ims = []
        for _, _, img in part:
            with Image.open(os.path.join(SITE, img)) as im:
                ims.append(im.convert("RGB").resize((width, round(im.height * width / im.width))))
        rows = (len(ims) + cols - 1) // cols
        h = max(im.height for im in ims)
        sheet = Image.new("RGB", (cols * (width + 8), rows * (h + 8)), "white")
        for j, im in enumerate(ims):
            sheet.paste(im, ((j % cols) * (width + 8), (j // cols) * (h + 8)))
        sheet.save(os.path.join(REVIEW, f"sheet-{i // per_sheet + 1:02d}.jpg"), quality=80)
        with open(os.path.join(REVIEW, f"sheet-{i // per_sheet + 1:02d}.txt"), "w") as fh:
            fh.write("\n".join(f"{n} · {label}" for n, label, _ in part))
    return (len(shots) + per_sheet - 1) // per_sheet


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--sheets", action="store_true")
    a = ap.parse_args()
    data = build()
    c = data["counts"]
    size = sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(SITE) for f in fs)
    print(f"site: {c['flows']} flows, {c['devScreens']} screens, {c['screenshots']} screenshots, "
          f"{size / 1024 / 1024:.1f} MB → {os.path.relpath(SITE, ROOT)}")
    if a.sheets:
        print(f"contact sheets: {contact_sheets(data)} → {os.path.relpath(REVIEW, ROOT)}")


if __name__ == "__main__":
    main()
