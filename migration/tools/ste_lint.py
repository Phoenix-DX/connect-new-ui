#!/usr/bin/env python3
"""Check the prose of Markdown files against the measurable rules of migration/english-docs/style-rules.md.

Run from the project root:
  python3 migration/tools/ste_lint.py FILE…             # one summary line per file
  python3 migration/tools/ste_lint.py --detail FILE…    # also every finding with its line
  python3 migration/tools/ste_lint.py --json FILE…      # machine-readable result

Only prose is checked: headings, code blocks, tables, HTML comments and front matter are skipped. Text in double
quotes (quoted UI text, quoted words of the user) is skipped by the word checks: style-rules.md §1.4 keeps it.
Errors (rules 2.3, 2.4, 3.1, 4.3) must be 0 after a rewrite. Warnings are heuristics for the reviewer:
passive voice (3.3), "-ing" words (3.8) and glossary terms that are not allowed (2.1).
"""
import argparse
import json
import re
import sys

MODALS = re.compile(r"\b(should|could|might|would)\b", re.I)
HEDGES = re.compile(r"\b(probably|likely|maybe|perhaps|seems?|apparently|presumably)\b", re.I)
BE = r"(?:is|are|was|were|be|been|being)"
IRREGULAR = ("shown|done|made|sent|set|kept|built|written|taken|given|hidden|seen|known|found|run|put|read|left|"
             "held|got|gotten|brought|bought|thrown|drawn|chosen|broken|spoken|driven|begun|cut|hit|split")
PASSIVE = re.compile(rf"\b{BE}\s+(?:\w+ly\s+)?(?:\w+ed|{IRREGULAR})\b", re.I)
ING_OK = {"string", "thing", "things", "during", "nothing", "something", "anything", "everything", "ring", "bring",
          "padding", "spacing", "heading", "headings", "loading", "missing", "pending", "existing", "following",
          "setting", "settings", "sharing", "routing", "swiping", "polling", "caching", "testing", "booking",
          "meeting", "meetings", "warning", "warnings", "mapping", "mappings", "spring", "king", "wing", "building",
          "rendering", "landing", "onboarding", "branding", "spelling", "timing", "listing", "logging", "according"}
ING = re.compile(r"\b[a-z]+ing\b")
NOT_ALLOWED = {  # glossary.md "Do not use" (lower-case prose only; OutSystems names keep their capital letters)
    r"\bpages?\b": "screen (or keep for a web page)", r"\bpopups?\b": "dialog", r"\bpop-ups?\b": "dialog",
    r"\bmodals?\b": "dialog", r"\bclones?\b": "React app", r"\btaps?\b": "click", r"\bstubs?\b": "mock",
    r"\bwaivers?\b": "exemption", r"\bsnapshots?\b": "capture", r"\bendpoints?\b": "call",
    r"\butili[sz]e[sd]?\b": "use", r"\bcommences?\b": "start",
}
IMPERATIVE = {"do", "use", "run", "write", "keep", "add", "put", "set", "open", "read", "check", "give", "make",
              "call", "copy", "remove", "delete", "start", "stop", "click", "select", "ask", "record", "send",
              "replace", "change", "create", "move", "save", "load", "show", "hide", "type", "enter", "go"}


def prose_lines(text):
    """(line number, text) of prose lines: no headings, code, tables, comments or front matter."""
    out, in_code, in_comment, in_front = [], False, False, False
    lines = text.splitlines()
    for i, line in enumerate(lines, 1):
        s = line.strip()
        if i == 1 and s == "---":
            in_front = True
            continue
        if in_front:
            in_front = s != "---"
            continue
        if s.startswith("```") or s.startswith("~~~"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if "<!--" in s and "-->" not in s:
            in_comment = True
            continue
        if in_comment:
            in_comment = "-->" not in s
            continue
        if not s or s.startswith("#") or s.startswith("|") or s.startswith("<"):
            out.append((i, ""))
            continue
        out.append((i, line))
    return out


def clean(s):
    s = re.sub(r"`[^`]*`", "CODE", s)                 # inline code = one word
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)    # link → its text
    s = re.sub(r"\[[^\]]*\]", "REF", s)               # evidence reference = one word
    s = re.sub(r"https?://\S+", "URL", s)
    s = re.sub(r"[*_]{1,2}", "", s)
    return s


def paragraphs(plines):
    """Group prose lines into paragraphs; a list item starts its own paragraph."""
    paras, cur = [], []
    for i, line in plines:
        item = re.match(r"\s*(?:[-*+]|\d+\.)\s+", line)
        if not line.strip() or item:
            if cur:
                paras.append(cur)
            cur = [(i, line[item.end():] if item else "")] if item else []
            continue
        cur.append((i, line.strip()))
    if cur:
        paras.append(cur)
    return [p for p in paras if any(t.strip() for _, t in p)]


def sentences(para):
    text = " ".join(clean(t) for _, t in para)
    first = para[0][0]
    parts = re.split(r"(?<=[.!?:;])\s+(?=[A-Z0-9\"“(])", text)
    return [(first, p.strip()) for p in parts if p.strip()]


def lint(text):
    found = []
    plines = prose_lines(text)
    for para in paragraphs(plines):
        sents = sentences(para)
        if len(sents) > 6:
            found.append(("error", "4.3 paragraph > 6 sentences", para[0][0], f"{len(sents)} sentences"))
        for line, s in sents:
            n = len(re.findall(r"[\w'’/-]+", s))
            first = (re.match(r"[A-Za-z]+", s) or [""])[0].lower()
            limit = 20 if first in IMPERATIVE else 25
            if n > limit:
                found.append(("error", f"3.1 sentence > {limit} words", line, f"{n} words: {s[:90]}…"))
    for line, raw in plines:
        if not raw:
            continue
        s = re.sub(r'"[^"\n]*"|“[^”\n]*”', "QUOTE", clean(raw))  # quoted UI text and quotes stay as written
        for m in MODALS.finditer(s):
            found.append(("error", "2.3 vague modal", line, m.group(0)))
        for m in HEDGES.finditer(s):
            found.append(("error", "2.4 hedge word", line, m.group(0)))
        for m in PASSIVE.finditer(s):
            found.append(("warn", "3.3 passive voice?", line, m.group(0)))
        for m in ING.finditer(s):
            if m.group(0) not in ING_OK:
                found.append(("warn", "3.8 -ing word", line, m.group(0)))
        for pat, use in NOT_ALLOWED.items():
            for m in re.finditer(pat, s):
                found.append(("warn", "2.1 glossary", line, f"{m.group(0)} → {use}"))
    return found


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("files", nargs="+")
    ap.add_argument("--detail", action="store_true")
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()
    result, total_err = {}, 0
    for f in a.files:
        found = lint(open(f, encoding="utf-8").read())
        errs = sum(1 for k, *_ in found if k == "error")
        total_err += errs
        result[f] = [{"kind": k, "rule": r, "line": ln, "text": t} for k, r, ln, t in found]
        if not a.json:
            by = {}
            for k, r, *_ in found:
                by[r] = by.get(r, 0) + 1
            print(f"{errs:4} errors {len(found) - errs:4} warnings  {f}  {by if by else ''}")
            if a.detail:
                for k, r, ln, t in sorted(found, key=lambda x: x[2]):
                    print(f"      {ln:5} {k:5} {r}: {t}")
    if a.json:
        json.dump(result, sys.stdout, indent=1, ensure_ascii=False)
    sys.exit(1 if total_err else 0)


if __name__ == "__main__":
    main()
