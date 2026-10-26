#!/usr/bin/env python3
"""Delete the unused rules of the original stylesheets (refactor step P8-2; runs again in P9-3).

    # 1. record the rule usage of every captured state (writes raw files, one per parity_check.cjs run)
    CSS_COVERAGE_DIR=<raw> python3 migration/tools/refactor_parity.py --level visual --all --ref both \
        --app http://localhost:5174 --out migration/refactor-parity/p8-2-cov \
        --node $PWD/migration/tools/refactor/css-coverage-node.sh
    # 2. plan or apply (one stylesheet, a list, or --all)
    python3 migration/tools/refactor/css-prune.py --raw <raw> --out <handoff>/ plan   [files...]
    python3 migration/tools/refactor/css-prune.py --raw <raw> --out <handoff>/ apply  [files...]

A rule is a style rule (selector block) at any depth of @media. It is deleted when
  - no captured state used it (Chromium CSS rule usage, union of the app page and the replayed capture), and
  - no guard keeps it: state or interaction selector, custom property, :root, vendor pseudo, device class, a rule inside
    an @media / @supports / @container block that the captured viewports do not evaluate, at-rules other than media.
@font-face, @keyframes, @import and other at-rules are never touched. A stylesheet that any screen without captured
parity states loads (ROUTE_CSS of app/src/app/routes.css.generated.ts) is skipped. Every container left empty goes too.
Outputs in --out: coverage-summary.json, deleted-selectors/<file>.txt (apply), and sizes in the summary.
"""
import argparse
import glob
import gzip
import json
import os
import re
import sys

CSS_DIR = "app/public/UBTConnect/css"
ROUTES_TS = "app/src/app/routes.css.generated.ts"
VIEWPORTS = [(390, 844)]   # every captured state (states.json) is 390x844

STATE_RE = re.compile(
    r":(hover|focus|focus-within|focus-visible|active|checked|disabled|enabled|visited|target|read-only|invalid|valid|"
    r"indeterminate|required|optional|placeholder-shown)|\[aria-|\[data-"
    r"|\.(active|open|opened|selected|error|invalid|disabled|visible|show|hidden|hide|expanded|collapsed|loading|current|"
    r"landscape|portrait|tablet|desktop|phone|android|ios|pwa|dark|rtl)(?![\w-])|\.is-|--is-|-active|-open|-selected|-disabled|"
    r"-error|-visible|-expanded|-hidden|-loading|\.ph(?![\w-])|\.tablet|\.desktop")
VENDOR_PSEUDO_RE = re.compile(r"::?(-webkit-|-moz-|-ms-|selection|placeholder|backdrop|file-selector|marker|cue)")
CUSTOM_PROP_RE = re.compile(r"(^|[;{\s])--[\w-]+\s*:")
KEEP_AT = {"media"}   # at-rules with rule children that get a verdict per child; others are kept whole
CONTAINER_AT = {"media", "supports", "container", "document", "layer", "-moz-document"}


def skip_string(s, i):
    q = s[i]
    i += 1
    while i < len(s) and s[i] != q:
        i += 2 if s[i] == "\\" else 1
    return i + 1


def skip_comment(s, i):
    j = s.find("*/", i + 2)
    return len(s) if j < 0 else j + 2


def find_block_end(s, i):
    """i is at '{'; returns the index after the matching '}'."""
    depth = 0
    n = len(s)
    while i < n:
        c = s[i]
        if c in "\"'":
            i = skip_string(s, i)
            continue
        if c == "/" and s.startswith("/*", i):
            i = skip_comment(s, i)
            continue
        if c == "(" and s[i - 3:i] == "url" and i + 1 < n and s[i + 1] not in "\"' ":
            i = s.find(")", i) + 1   # unquoted url(data:...;base64,...) holds no braces
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    return n


def parse(s, i, end):
    """Nodes of s[i:end]: dicts {kind: rule|at|stmt, start, end, prelude, children?}."""
    nodes = []
    while i < end:
        c = s[i]
        if c.isspace() or c == "﻿":
            i += 1
            continue
        if s.startswith("/*", i):
            i = skip_comment(s, i)
            continue
        start = i
        j = i
        while j < end:
            d = s[j]
            if d in "\"'":
                j = skip_string(s, j)
                continue
            if d == "/" and s.startswith("/*", j):
                j = skip_comment(s, j)
                continue
            if d == "(" and s[j - 3:j] == "url" and j + 1 < end and s[j + 1] not in "\"' ":
                j = s.find(")", j) + 1
                continue
            if d in "{;":
                break
            j += 1
        prelude = s[start:j].strip()
        if j >= end or s[j] == ";":
            nodes.append({"kind": "stmt", "start": start, "end": min(j + 1, end), "prelude": prelude})
            i = j + 1
            continue
        close = find_block_end(s, j)
        if prelude.startswith("@"):
            name = re.match(r"@([\w-]+)", prelude).group(1).lower()
            node = {"kind": "at", "name": name, "start": start, "end": close, "prelude": prelude}
            if name in CONTAINER_AT:
                node["children"] = parse(s, j + 1, close - 1)
                node["bodyStart"], node["bodyEnd"] = j + 1, close - 1
            nodes.append(node)
        else:
            nodes.append({"kind": "rule", "start": start, "end": close, "prelude": prelude, "body": s[j + 1:close - 1]})
        i = close
    return nodes


def media_true(query):
    """True/False when the query list is fully evaluable against VIEWPORTS (some alternative true), None when it is not."""
    q = query.strip().lower()
    if not q:
        return None
    verdict = False
    for alt in q.split(","):
        alt = alt.strip()
        if alt.startswith("not "):
            return None
        alt = re.sub(r"^only\s+", "", alt)
        parts = re.split(r"\s+and\s+", alt)
        conds = []
        for p in parts:
            p = p.strip()
            if p in ("screen", "all"):
                continue
            m = re.fullmatch(r"\(\s*(min|max)-(width|height)\s*:\s*([\d.]+)(px|em|rem)\s*\)", p)
            if not m:
                return None
            v = float(m.group(3)) * (16 if m.group(4) != "px" else 1)
            conds.append((m.group(1), m.group(2), v))
        for (w, h) in VIEWPORTS:
            ok = True
            for lim, dim, v in conds:
                x = w if dim == "width" else h
                ok = ok and (x >= v if lim == "min" else x <= v)
            if ok:
                verdict = True
    return verdict


def rule_used(rule, used):
    return any(rule["start"] <= a < rule["end"] for a in used)


def guard_of(rule):
    sel = re.sub(r"/\*.*?\*/", "", rule["prelude"], flags=re.S)
    if ":root" in sel:
        return "root"
    if CUSTOM_PROP_RE.search(rule["body"]):
        return "custom-property"
    if VENDOR_PSEUDO_RE.search(sel):
        return "vendor-pseudo"
    if STATE_RE.search(sel):
        return "state-selector"
    return None


THIRD_PARTY = ("Leaflet.", "FullCalendarReactive.", "SortableJS.")


def source_tokens():
    """Every word of app/src outside tests and stories (class names in strings, templates and CSS): the relaxed guard."""
    out = set()
    for d, _, fs in os.walk("app/src"):
        for f in fs:
            if f.endswith((".ts", ".tsx", ".css", ".html", ".json")) and ".test." not in f and ".stories." not in f:
                out.update(re.findall(r"[A-Za-z_][\w-]*", open(os.path.join(d, f), encoding="utf-8", errors="ignore").read()))
    return out


def prune(text, used, stats, deleted, tokens=None):
    """Returns the list of [start, end) spans to delete."""
    spans = []

    def walk(nodes, keep_all, ctx):
        removed_here = []
        for n in nodes:
            if n["kind"] == "stmt":
                stats["kept:import/statement"] += 1
                continue
            if n["kind"] == "at":
                if "children" not in n:
                    stats["kept:at-rule " + n["name"]] += 1
                    continue
                name = n["name"]
                inner_keep = keep_all
                if name == "media":
                    if not media_true(re.sub(r"^@media", "", n["prelude"])):   # None (not evaluable) or False
                        inner_keep = "media-not-covered"
                elif name != "layer":
                    inner_keep = "at-" + name
                before = len(spans)
                walk(n["children"], inner_keep, ctx + [n["prelude"]])
                kids = n["children"]
                if kids and all(any(sp[0] == k["start"] for sp in spans[before:]) for k in kids):
                    # every child goes: the container goes whole (replace the child spans)
                    del spans[before:]
                    spans.append((n["start"], n["end"]))
                    deleted.append(("  " * 0) + n["prelude"] + "  { all rules }")
                continue
            # style rule
            if rule_used(n, used):
                stats["kept:used"] += 1
                continue
            g = keep_all or guard_of(n)
            if not g and tokens is not None and any(c in tokens for c in re.findall(r"\.(-?[A-Za-z_][\w-]*)", re.sub(r"/\*.*?\*/", "", n["prelude"], flags=re.S))):
                g = "class-in-app-source"
            if g:
                stats["kept:" + g] += 1
                continue
            stats["deleted"] += 1
            spans.append((n["start"], n["end"]))
            deleted.append((" ".join(c[:60] for c in ctx) + " :: " if ctx else "") + re.sub(r"\s+", " ", n["prelude"]))
        return removed_here

    nodes = parse(text, 0, len(text))
    walk(nodes, None, [])
    return spans


def apply_spans(text, spans):
    out, last = [], 0
    for a, b in sorted(spans):
        if a < last:
            continue
        out.append(text[last:a])
        # swallow the whitespace that follows the removed rule (up to and including one line break run)
        while b < len(text) and text[b] in " \t\r\n":
            b += 1
        last = b
    out.append(text[last:])
    return "".join(out)


def aggregate(raw):
    used = {}
    routes = set()
    for f in glob.glob(os.path.join(raw, "*.json")):
        j = json.load(open(f, encoding="utf-8"))
        routes.update(j.get("routesSeen", []))   # merged file
        m = re.match(r"/UBTConnect/(\w+)", j.get("route") or "")
        if m:
            routes.add(m.group(1))
        for name, ranges in j["sheets"].items():
            used.setdefault(name, set()).update(a for a, _ in ranges)
    return used, routes


def route_sets():
    s = open(ROUTES_TS, encoding="utf-8").read()
    body = s[s.index("ROUTE_CSS: Readonly"):s.index("ROUTE_CSS_ORIGIN")]
    routes, cur = {}, None
    for line in body.splitlines():
        m = re.match(r"  (\w+): \[", line)
        if m:
            cur = m.group(1)
            routes[cur] = []
        m = re.match(r"\s+'([^']+)',", line)
        if m and cur:
            routes[cur].append(m.group(1))
    return routes


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("mode", choices=["plan", "apply"])
    ap.add_argument("files", nargs="*", help="stylesheet names (default: all)")
    ap.add_argument("--raw", required=True, help="folder of the coverage files of css-coverage-preload.cjs")
    ap.add_argument("--out", required=True, help="handoff folder (deleted-selectors/ and the summary go here)")
    ap.add_argument("--relax", action="store_true", help="ESTIMATE ONLY (plan): also prune files that a zero-state screen loads, "
                    "and keep a rule when one of its classes appears in app/src")
    args = ap.parse_args()
    if args.relax and args.mode == "apply":
        sys.exit("--relax is an estimate: use it with plan only")
    used, seen = aggregate(args.raw)
    routes = route_sets()
    zero = {r for r in routes if r not in seen}
    loaded_by_zero = {f for r in zero for f in routes[r]}
    loaded_by_seen = {f for r in routes if r not in zero for f in routes[r]}
    tokens = source_tokens() if args.relax else None
    files = args.files or sorted(f for f in os.listdir(CSS_DIR) if f.endswith(".css"))
    os.makedirs(os.path.join(args.out, "deleted-selectors"), exist_ok=True)
    summary_path = os.path.join(args.out, "coverage-summary.json")
    summary = json.load(open(summary_path)) if os.path.exists(summary_path) else {}
    for f in files:
        path = os.path.join(CSS_DIR, f)
        raw = open(path, "rb").read()
        bom = raw.startswith(b"\xef\xbb\xbf")
        text = raw.decode("utf-8-sig")   # Chromium offsets exclude the BOM and keep CRLF; no astral character (checked below)
        if any(ord(c) > 0xFFFF for c in text):
            sys.exit(f"{f}: astral character, UTF-16 offsets would drift")
        if f in loaded_by_zero and not args.relax:
            summary[f] = {"status": "skipped: loaded by a screen without captured parity states", "bytes": len(raw)}
            print(f"{f}: skipped (zero-state route)")
            continue
        if f.startswith(THIRD_PARTY):
            summary[f] = {"status": "skipped: third-party widget CSS (its classes are toggled by script on interaction)", "bytes": len(raw)}
            print(f"{f}: skipped (third-party widget CSS)")
            continue
        if f not in loaded_by_seen:
            summary[f] = {"status": "skipped: no captured state loads it", "bytes": len(raw)}
            print(f"{f}: skipped (no captured state loads it)")
            continue
        from collections import Counter
        stats, deleted = Counter(), []
        spans = prune(text, used.get(f, set()), stats, deleted, tokens)
        new = apply_spans(text, spans)
        nb = (b"\xef\xbb\xbf" if bom else b"") + new.encode("utf-8")
        entry = {"status": "pruned" if spans else "nothing to delete", "bytes": len(raw), "bytesAfter": len(nb),
                 "gzip": len(gzip.compress(raw, 9)), "gzipAfter": len(gzip.compress(nb, 9)), "rules": dict(stats)}
        summary[f] = entry
        print(f"{f}: {len(raw)} -> {len(nb)} bytes, deleted {stats['deleted']}, " + ", ".join(f"{k} {v}" for k, v in sorted(stats.items()) if k != "deleted"))
        if args.mode == "apply" and spans:
            open(path, "wb").write(nb)
            open(os.path.join(args.out, "deleted-selectors", f[:-4] + ".txt"), "w", encoding="utf-8").write("\n".join(deleted) + "\n")
    json.dump(summary, open(summary_path, "w"), indent=1)


if __name__ == "__main__":
    main()
