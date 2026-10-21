#!/usr/bin/env python3
"""Check that a rewritten document keeps every protected element of the original (style-rules.md §1).

Run from the project root:
  python3 migration/tools/meaning_guard.py check OLD NEW [--mode ste|translate]
  python3 migration/tools/meaning_guard.py pilot [--mode ste]       # every pilot file: original vs english-docs/pilot/
  python3 migration/tools/meaning_guard.py diff OLD NEW [--out F]   # Markdown "Before / After" of the changed prose

Protected (an item of OLD that is missing in NEW is an error):
- code blocks, including mermaid diagrams: identical, in the same order;
- tables: identical rows (mode ste only; a translation changes the cell text);
- headings: identical (mode ste); the four headings of route-spec.md in both modes;
- inline code, evidence references [..], link targets, URLs, file paths, IDs, numbers, identifiers.
New items in NEW are listed as information: the reviewer checks that each one comes from evidence.
"""
import argparse
import difflib
import json
import os
import re
import sys

ROOT = os.getcwd()
REQUIRED = ["Summary", "Patterns used", "Unclear points", "Decisions to confirm"]
ID = re.compile(r"\b(?:CR-[\w-]+-\d+|ADR-\d+|P-[A-Z]+|D\d+[a-z]?|F\d+[a-z]?|Q\d+|U\d+|B\d+|E-[\w-]+|V\d+[a-e]?|"
                r"R-\d+|PWA-\d+|C2\w+|LD\w*)\b")
IDENT = re.compile(r"\b(?:[A-Za-z]+_[A-Za-z0-9_]+|[a-z]+[A-Z]\w*|[A-Z][a-z0-9]+[A-Z]\w*|[A-Z]{2,}[A-Za-z0-9_]*)\b")
NUM = re.compile(r"(?<![\w.])\d+(?:[.,:]\d+)*(?:%|px|ms|s|kB|KB|MB)?(?![\w])")
PATH = re.compile(r"(?:[\w.-]+/)+[\w.$-]+|\b[\w.-]+\.(?:md|json|ts|tsx|js|cjs|mjs|py|css|html|yaml|yml|png|svg|txt)\b")


def split(text):
    """(code blocks, table rows, headings, prose text)."""
    code, tables, heads, prose, cur, in_code = [], [], [], [], [], False
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("```") or s.startswith("~~~"):
            if in_code:
                cur.append(line)
                code.append("\n".join(cur))
                cur = []
            else:
                cur = [line]
            in_code = not in_code
            continue
        if in_code:
            cur.append(line)
        elif s.startswith("|"):
            tables.append(s)
        elif s.startswith("#"):
            heads.append(s)
        else:
            prose.append(line)
    return code, tables, heads, "\n".join(prose)


def tokens(text):
    """Protected tokens of the prose and the table cells."""
    inline = re.findall(r"`[^`\n]+`", text)
    bare = re.sub(r"`[^`\n]+`", " ", text)
    refs = re.findall(r"\[[^\]\n]+\](?!\()", bare)
    links = re.findall(r"\]\(([^)\s]+)\)", bare)
    urls = re.findall(r"https?://[^\s)>\]]+", bare)
    bare2 = re.sub(r"\[[^\]\n]+\]", " ", re.sub(r"https?://\S+", " ", bare))
    return {
        "inline code": set(inline), "evidence ref": set(refs), "link": set(links), "url": set(urls),
        "path": set(PATH.findall(bare2)), "id": set(ID.findall(bare2)), "number": set(NUM.findall(bare2)),
        "identifier": set(IDENT.findall(bare2)),
    }


def check(old_text, new_text, mode, path=""):
    errors, info = [], []
    oc, ot, oh, op = split(old_text)
    nc, nt, nh, np_ = split(new_text)
    if oc != nc:
        miss = [c.splitlines()[0] + f" … ({len(c.splitlines())} lines)" for c in oc if c not in nc]
        errors.append(("code block", miss or ["order or count changed"]))
    if mode == "ste":
        miss = [r for r in ot if r not in nt]
        if miss:
            errors.append(("table row", miss))
        miss = [h for h in oh if h not in nh]
        if miss:
            errors.append(("heading", miss))
    if path.endswith("route-spec.md"):
        miss = [h for h in REQUIRED if not re.search(r"^##\s+(?:\d+[a-z]?\.\s*)?" + re.escape(h) + r"\s*$", new_text, re.M | re.I)]
        if miss:
            errors.append(("required heading", miss))
    old_t = tokens(op + "\n" + "\n".join(ot))
    new_t = tokens(np_ + "\n" + "\n".join(nt))
    for k in old_t:
        miss = sorted(old_t[k] - new_t[k])
        add = sorted(new_t[k] - old_t[k])
        if miss:
            errors.append((k, miss))
        if add:
            info.append((k, add))
    return errors, info


def report(path, errors, info):
    status = "OK " if not errors else "ERR"
    print(f"{status} {path}")
    for k, items in errors:
        print(f"      missing {k} ({len(items)}): {items[:8]}{' …' if len(items) > 8 else ''}")
    for k, items in info:
        print(f"      new {k} ({len(items)}): {items[:8]}{' …' if len(items) > 8 else ''}")


def pilot_pairs():
    inv = json.load(open(os.path.join(ROOT, "migration", "english-docs", "inventory.json")))["groups"]
    for x in inv["pilot"]:
        yield x["path"], os.path.join("migration", "english-docs", "pilot", x["path"])


def paras(text):
    blocks, cur, in_code = [], [], False
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
        if not s and not in_code:
            if cur:
                blocks.append("\n".join(cur))
            cur = []
        else:
            cur.append(line)
    if cur:
        blocks.append("\n".join(cur))
    return blocks


def diff_md(old_text, new_text, title):
    a, b = paras(old_text), paras(new_text)
    out = [f"### {title}", ""]
    sm = difflib.SequenceMatcher(a=a, b=b, autojunk=False)
    n = 0
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == "equal":
            continue
        n += 1
        before = "\n\n".join(a[i1:i2]) or "(nothing)"
        after = "\n\n".join(b[j1:j2]) or "(removed)"
        out += [f"**Change {n}**", "", "Before:", "", "\n".join("> " + l for l in before.splitlines()), "",
                "After:", "", "\n".join("> " + l for l in after.splitlines()), ""]
    if n == 0:
        out.append("No change.")
    return "\n".join(out) + "\n"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("check")
    c.add_argument("old")
    c.add_argument("new")
    c.add_argument("--mode", default="ste", choices=["ste", "translate"])
    p = sub.add_parser("pilot")
    p.add_argument("--mode", default="ste", choices=["ste", "translate"])
    d = sub.add_parser("diff")
    d.add_argument("old")
    d.add_argument("new")
    d.add_argument("--out")
    a = ap.parse_args()
    if a.cmd == "diff":
        md = diff_md(open(a.old, encoding="utf-8").read(), open(a.new, encoding="utf-8").read(), a.old)
        (open(a.out, "w", encoding="utf-8").write(md) if a.out else sys.stdout.write(md))
        return
    pairs = [(a.old, a.new)] if a.cmd == "check" else list(pilot_pairs())
    bad = 0
    for old, new in pairs:
        if not os.path.exists(new):
            print(f"--- {new} (not written yet)")
            continue
        errors, info = check(open(old, encoding="utf-8").read(), open(new, encoding="utf-8").read(), a.mode, old)
        bad += bool(errors)
        report(old, errors, info)
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
