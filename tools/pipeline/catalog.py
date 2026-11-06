#!/usr/bin/env python3
"""
catalog.py: cross-screen catalog of blocks and server calls, what is already built, and the tier of
every remaining screen. Deterministic; run it after the survey and again whenever src/shared changes.

Usage:
  python3 catalog.py --screens migration/survey/screens.json --board-dir migration \
      --app app --out migration/catalog [--own-max 3] [--server-max 2]

Reads
  screens.json                 per-screen block closure and calls (survey_app.py)
  <board-dir>/board.md         decisions and statuses (board.py); skipped screens do not count as users
  <app>/src/shared, src/shell  built components. A component declares the block it implements with a tag
                               anywhere in its files:   @os-block Module.Flow.Block
                               (fallback: a folder or file named like the block, case-insensitive)
  <board-dir>/knowledge/actions/<Action>.md   cached OutSystems MCP answers (optional)

Writes (in --out)
  blocks.md / blocks.json      every non-infrastructure block: live users, built where, owner screen
  foundation-queue.md          shared blocks not built yet that remaining screens need, most-needed first.
                               Build these in the foundation phase, not inside a screen task.
  actions.md                   every data/server action: screens that call it, cached MCP answer or not
  tiers.json                   {Screen: {tier, own, sharedMissing, server}}; feed to `board.py tier`
  infra.json                   shell/layout blocks (built with the shell; context_pack.py collapses them)

OutSystems UI pattern blocks (OutSystemsUI.<Flow>.<Block>, flow not Private) are kind "osui": built once in the foundation
(P-OSUI) as soon as one remaining screen needs them, never inside a screen task and never counted as shell infrastructure
(except layouts). Private OutSystems UI blocks are internals of their pattern and are not listed.

Tiers
  lite  all shared blocks it needs are built, at most --own-max blocks of its own, at most --server-max
        server actions: build from the context pack, no full spec, verifier only on unexplained diffs.
  full  anything else: spec (full template), sequence diagrams, independent verification.
  wait  needs shared blocks that are not built yet: build them first (foundation-queue.md).
"""
import argparse, glob, json, os, re, sys
from collections import defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from board import read_board  # noqa: E402

TAG_RE = re.compile(r"@os-block\s+([\w.]+)")
OSUI_RE = re.compile(r"^OutSystemsUI(_\w+)?\.")


def osui_kind(block):
    """'pattern', 'layout', 'private' for OutSystems UI blocks, None otherwise."""
    b = block.replace(".mvc.js", "")
    if not OSUI_RE.match(b):
        return None
    parts = b.split(".")
    flow = parts[1] if len(parts) > 2 else ""
    return "private" if flow == "Private" else "layout" if flow.startswith("Layout") else "pattern"


def short(block):
    return block.replace(".mvc.js", "")


def last(block):
    return short(block).split(".")[-1]


def built_index(app):
    """block (Module.Flow.Block or bare name, lowercase) -> path of the component that implements it."""
    tagged, named = {}, {}
    for sub in ("src/shared", "src/shell"):
        root = os.path.join(app, sub)
        if not os.path.isdir(root):
            continue
        for p in glob.glob(os.path.join(root, "**", "*"), recursive=True):
            rel = os.path.relpath(p, app)
            stem = os.path.splitext(os.path.basename(p))[0]
            named.setdefault(stem.lower(), rel)
            if os.path.isfile(p) and p.endswith((".ts", ".tsx", ".js", ".jsx", ".md")):
                try:
                    for m in TAG_RE.finditer(open(p, encoding="utf-8", errors="ignore").read()):
                        tagged[short(m.group(1)).lower()] = rel
                except OSError:
                    pass
    return tagged, named


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--screens", required=True)
    ap.add_argument("--board-dir", default="migration")
    ap.add_argument("--app", default="app")
    ap.add_argument("--out", default="migration/catalog")
    ap.add_argument("--own-max", type=int, default=3)
    ap.add_argument("--server-max", type=int, default=2)
    a = ap.parse_args()

    data = json.load(open(a.screens, encoding="utf-8"))
    screens = {i["screen"]: i for i in data["screens"].values()}
    board = read_board(os.path.join(a.board_dir, "board.md"))
    live = {s for s in screens if board.get(s, {}).get("Decision") != "skip"}
    remaining = {s for s in live if board.get(s, {}).get("Status") not in ("built", "verified")}
    n = max(1, len(screens))

    use_all, use_live = defaultdict(set), defaultdict(set)
    for s, i in screens.items():
        for b in i.get("closure", []):
            use_all[b].add(s)
            if s in live:
                use_live[b].add(s)
    infra = set(data.get("shell", [])) | set(data.get("layoutLevel", []))
    infra |= {b for b, u in use_all.items() if len(u) >= max(3, n // 2)}
    infra = {b for b in infra if osui_kind(b) in (None, "layout")}

    tagged, named = built_index(a.app)
    ambiguous = defaultdict(set)
    for b in use_all:
        ambiguous[last(b).lower()].add(b)

    def built_at(b):
        if short(b).lower() in tagged:
            return tagged[short(b).lower()]
        nm = last(b).lower()
        if nm in named and len(ambiguous[nm]) == 1:
            return named[nm] + " (name match)"
        if nm in named:
            return None  # same block name in several modules: require an @os-block tag
        return None

    blocks = {}
    for b, users in use_all.items():
        if b in infra or osui_kind(b) == "private":
            continue
        lu = sorted(use_live[b])
        ok = osui_kind(b)
        blocks[short(b)] = {"liveUsers": lu, "allUsers": len(users), "builtAt": built_at(b),
                            "remainingUsers": sorted(set(lu) & remaining),
                            "kind": ("osui" if lu else "dead") if ok == "pattern" else "shared" if len(lu) >= 2 else "own" if lu else "dead"}

    tiers, queue = {}, defaultdict(list)
    for s in sorted(remaining):
        i = screens[s]
        need = [short(b) for b in i.get("closure", []) if b not in infra and short(b) in blocks]
        own = [b for b in need if blocks[b]["kind"] == "own" and not blocks[b]["builtAt"]]
        missing = [b for b in need if blocks[b]["kind"] in ("shared", "osui") and not blocks[b]["builtAt"]]
        server = i.get("serverActions", [])
        for b in missing:
            queue[b].append(s)
        tier = "wait" if missing else "lite" if len(own) <= a.own_max and len(server) <= a.server_max else "full"
        tiers[s] = {"tier": tier, "own": own, "sharedMissing": missing, "server": server}

    os.makedirs(a.out, exist_ok=True)
    json.dump(blocks, open(os.path.join(a.out, "blocks.json"), "w", encoding="utf-8"), indent=1)
    json.dump(tiers, open(os.path.join(a.out, "tiers.json"), "w", encoding="utf-8"), indent=1)
    json.dump(sorted(short(b) for b in infra), open(os.path.join(a.out, "infra.json"), "w", encoding="utf-8"), indent=1)

    md = ["# Block catalog", "",
          f"{len(blocks)} blocks outside the shell/layout infrastructure ({len(infra)} infrastructure blocks are built with the shell). "
          "Live users exclude skipped screens. Built = a component tagged `@os-block <Module.Flow.Block>` (or a unique name match).", "",
          "| Block | Kind | Live users | Remaining users | Built at |", "|---|---|---|---|---|"]
    for b, x in sorted(blocks.items(), key=lambda kv: (-len(kv[1]["liveUsers"]), kv[0])):
        if x["kind"] == "dead":
            continue
        md.append(f"| `{b}` | {x['kind']} | {len(x['liveUsers'])} | {', '.join(x['remainingUsers']) or '-'} | {x['builtAt'] or '**not built**'} |")
    dead = [b for b, x in blocks.items() if x["kind"] == "dead"]
    md += ["", f"Blocks used only by skipped screens (not to build): {len(dead)}"]
    open(os.path.join(a.out, "blocks.md"), "w", encoding="utf-8").write("\n".join(md) + "\n")

    fq = ["# Foundation queue", "",
          "Shared blocks that remaining screens need and that are not built. Build them in the foundation phase, one owner, "
          "with a DOM snapshot test per captured state; then the waiting screens become lite or full.", "",
          "| # | Block | Waiting screens |", "|---|---|---|"]
    for k, (b, ss) in enumerate(sorted(queue.items(), key=lambda kv: -len(kv[1])), 1):
        fq.append(f"| {k} | `{b}` | {', '.join(ss)} |")
    if not queue:
        fq.append("| - | nothing waiting | |")
    open(os.path.join(a.out, "foundation-queue.md"), "w", encoding="utf-8").write("\n".join(fq) + "\n")

    calls = defaultdict(lambda: {"kind": set(), "screens": set()})
    for s, i in screens.items():
        if s not in live:
            continue
        for k in ("dataActions", "aggregates", "serverActions"):
            for x in i.get(k, []):
                calls[x]["kind"].add(k[:-1])
                calls[x]["screens"].add(s)
    kdir = os.path.join(a.board_dir, "knowledge", "actions")
    am = ["# Actions", "",
          "Every data action, aggregate and server action of live screens. Ask the OutSystems MCP once per action and save the answer "
          f"to `{os.path.relpath(kdir, a.board_dir)}/<Action>.md`; screen agents read the cached answer instead of asking again.", "",
          "| Action | Kind | Screens | MCP answer cached |", "|---|---|---|---|"]
    for x, v in sorted(calls.items(), key=lambda kv: (-len(kv[1]["screens"]), kv[0])):
        cached = os.path.exists(os.path.join(kdir, f"{x}.md"))
        am.append(f"| `{x}` | {', '.join(sorted(v['kind']))} | {len(v['screens'])}: {', '.join(sorted(v['screens'])[:6])}{' …' if len(v['screens']) > 6 else ''} | {'yes' if cached else 'no'} |")
    open(os.path.join(a.out, "actions.md"), "w", encoding="utf-8").write("\n".join(am) + "\n")

    c = defaultdict(int)
    for t in tiers.values():
        c[t["tier"]] += 1
    print(f"{len(blocks)} blocks ({sum(1 for x in blocks.values() if x['builtAt'])} built), {len(queue)} in foundation queue; "
          f"remaining screens: " + ", ".join(f"{k} {v}" for k, v in sorted(c.items())) + f" → {a.out}")


if __name__ == "__main__":
    main()
