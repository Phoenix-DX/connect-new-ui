#!/usr/bin/env python3
"""English docs program (boss review, STE style): file inventory, backup and Vietnamese scan.

Run from the project root:
  python3 migration/tools/english_docs.py inventory        # writes migration/english-docs/inventory.json, prints counts
  python3 migration/tools/english_docs.py backup [--tag T]  # copies every in-scope file to migration/.ste-backup/<date>/
  python3 migration/tools/english_docs.py vi-scan [PATH…]   # files and lines with Vietnamese letters (default: in scope)

Scope (user, 2026-10-21; plan in migration/english-docs/PLAN.md):
- A: Vietnamese docs to translate, and Vietnamese quotes that get an English translation next to them.
- pilot: STE rewrite of 3 route specs, the app-shell spec and 10 shared READMEs, written to
  migration/english-docs/pilot/ first (the originals stay unchanged until the user approves the style).
- B: the other written specs and docs.
- generated: files that a script writes; change the generator, not the file.
- out: history records and agent instructions; never rewritten.
Nothing is read from .auth/ or migration/.raw/.
"""
import argparse
import datetime
import glob
import hashlib
import json
import os
import re
import shutil
import sys

ROOT = os.getcwd()
OUT = os.path.join(ROOT, "migration", "english-docs")
BACKUP = os.path.join(ROOT, "migration", ".ste-backup")
VI = re.compile(r"[đĐơƠưƯạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]"  # letters only Vietnamese uses
                r"|\b(?:[Mm]àn|là|và|có|các|nhãn|ngày|nếu|thì|không|chỉ|cả)\b")  # common words without such letters

PILOT_ROUTES = ["Login", "HomeFeed", "Locality_Details"]
PILOT_READMES = [
    "UBTConnect/BottomBarMenu", "UBTConnect/CommonUI_InsideLayout", "UBTConnectLibrary/Layout_LoginFlow",
    "UBTConnectLibrary/Layout_HomePage", "UBTConnect_Utils/ShareSheet", "UBTConnect/Directory_EntityDetailsActions",
    "osui/Carousel", "UBTConnectLibrary/TagToggle", "UBTConnect/App_NotificationIcon",
    "UBTConnect/UnsupportedVersion_Wrapper",
]
QUOTE_FILES = [
    "migration/contexts/context-003-scope-decided.md", "migration/contexts/context-005-catalog-flags.md",
    "migration/contexts/context-029-build-kb.md", "migration/knowledge/auto-decisions-2026-10-16.md",
    "migration/knowledge/orbit-assemble-ldm.md", "migration/knowledge/runtime-sources.md",
    "migration/screens/ConnectShare/questions.md", "migration/screens/ConnectShare/questions.json",
    "migration/screens/Menu/questions.md", "migration/screens/Menu/questions.json",
]
KNOWLEDGE_GENERATED = {"auto-decisions-2026-10-15.md"}
KNOWLEDGE_HISTORY = {"auto-decisions-2026-10-15.md", "auto-decisions-2026-10-16.md"}
APP_DOCS_GENERATED = {"app/docs/guides/screens.md"}


def g(pattern):
    return sorted(os.path.relpath(p, ROOT) for p in glob.glob(os.path.join(ROOT, pattern), recursive=True)
                  if os.path.isfile(p))


def scope():
    pilot = ([f"migration/screens/{r}/route-spec.md" for r in PILOT_ROUTES] + ["migration/app-shell.spec.md"]
             + [f"app/src/shared/{x}/README.md" for x in PILOT_READMES])
    a = ["RUNBOOK.md", "migration/scope-review.md", "migration/scope-plan.md", "migration/tools/sitemap.py",
         "migration/sitemap.md", "migration/sitemap.html"] + QUOTE_FILES
    b = (g("migration/screens/*/route-spec.md") + g("app/src/shared/**/README.md")
         + [p for p in g("app/docs/**/*.md") if not p.startswith("app/docs/reference/") and p not in APP_DOCS_GENERATED]
         + [p for p in g("migration/knowledge/*.md") if os.path.basename(p) not in KNOWLEDGE_HISTORY]
         + g("migration/patterns/*.md") + g("migration/shell/**/*.md")
         + ["migration/capture-notes.md", "migration/pwa/pwa-discussion-plan.md", "app/src/shell/testSession.ts"])
    b = [p for p in b if p not in pilot]  # two knowledge files are in A (quotes) and in B (STE): both apply
    generated = (g("app/docs/reference/*.md") + sorted(APP_DOCS_GENERATED) + g("migration/blocks/*.md")
                 + g("migration/catalog/*.md") + g("migration/survey/*.md")
                 + ["migration/architecture.md", "migration/flags.md", "migration/fixture-coverage.md",
                    "migration/board.md"] + [f"migration/knowledge/{x}" for x in sorted(KNOWLEDGE_GENERATED)])
    out = (g("migration/contexts/*.md") + g("migration/change-requests/*.md") + g("migration/screens/*/notes.md")
           + g("migration/screens/*/questions.md") + g("migration/screens/*/feedback.md")
           + ["migration/knowledge/auto-decisions-2026-10-16.md", "migration/foundation-plan.md",
              "migration/extras-plan.md", "migration/recording-coverage.md", "migration/AGENTS.md", "CLAUDE.md"])
    out = [p for p in out if p not in a]
    return {"A": a, "pilot": pilot, "B": sorted(set(b)), "generated": generated, "out": out}


def words(path):
    try:
        return len(open(os.path.join(ROOT, path), encoding="utf-8", errors="ignore").read().split())
    except OSError:
        return 0


def cmd_inventory(_a):
    s = scope()
    os.makedirs(OUT, exist_ok=True)
    data = {k: [{"path": p, "words": words(p)} for p in v] for k, v in s.items()}
    json.dump({"builtAt": datetime.datetime.now().isoformat(timespec="seconds"), "groups": data},
              open(os.path.join(OUT, "inventory.json"), "w"), indent=1)
    for k, v in data.items():
        print(f"{k:10} {len(v):4} files {sum(x['words'] for x in v):8} words")


def cmd_backup(a):
    s = scope()
    stamp = a.tag or datetime.date.today().isoformat()
    dest = os.path.join(BACKUP, stamp)
    if os.path.exists(dest):
        sys.exit(f"{dest} exists: pass another --tag; an existing backup is never overwritten")
    manifest = {}
    for p in sorted(set(s["A"] + s["pilot"] + s["B"])):
        src = os.path.join(ROOT, p)
        if not os.path.isfile(src):
            continue
        t = os.path.join(dest, p)
        os.makedirs(os.path.dirname(t), exist_ok=True)
        shutil.copy2(src, t)
        manifest[p] = hashlib.sha256(open(src, "rb").read()).hexdigest()
    json.dump({"at": datetime.datetime.now().isoformat(timespec="seconds"), "files": manifest},
              open(os.path.join(dest, "MANIFEST.json"), "w"), indent=1)
    print(f"backup: {len(manifest)} files → {os.path.relpath(dest, ROOT)}")


def cmd_vi_scan(a):
    paths = a.paths or sorted(set(sum(scope().values(), [])))
    total = 0
    for p in paths:
        try:
            lines = open(os.path.join(ROOT, p), encoding="utf-8").read().splitlines()
        except (OSError, UnicodeDecodeError):
            continue
        hits = [i + 1 for i, line in enumerate(lines) if VI.search(line)]
        if hits:
            total += len(hits)
            print(f"{len(hits):5} {p}  lines {hits[:12]}{' …' if len(hits) > 12 else ''}")
    print(f"total Vietnamese lines: {total}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("inventory")
    b = sub.add_parser("backup")
    b.add_argument("--tag")
    v = sub.add_parser("vi-scan")
    v.add_argument("paths", nargs="*")
    a = ap.parse_args()
    {"inventory": cmd_inventory, "backup": cmd_backup, "vi-scan": cmd_vi_scan}[a.cmd](a)


if __name__ == "__main__":
    main()
