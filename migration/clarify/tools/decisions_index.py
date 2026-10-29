"""Index the recorded decisions and facts that name the screens, blocks and actions of one UI flow.

Usage (from the project root):
  python3 migration/clarify/tools/decisions_index.py [--flows migration/clarify/flows] [FLOW ...]
Reads <flows>/<Flow>/pack/meta.json, writes <flows>/<Flow>/pack/decisions.md: the lines of the decision sources
(board, app-shell.spec, change requests, ADRs in stack.md, known original bugs, knowledge pages, flags) that name an
element of the flow. These are the sources a `differs` row may cite. `migration/screens/**` is not read.
"""
import argparse, json, os, re, subprocess

SOURCES = [
    ("board", ["migration/board.md"]),
    ("app-shell.spec", ["migration/app-shell.spec.md"]),
    ("change requests", ["migration/change-requests"]),
    ("ADRs (stack.md)", ["app/docs/reference/stack.md"]),
    ("known original bugs", ["app/docs/known-original-bugs.md"]),
    ("knowledge", ["migration/knowledge"]),
    ("flags", ["migration/flags.md"]),
    ("parity exemptions", ["migration/parity-exemptions.json"]),
]


def grep(paths, name, max_hits=8):
    hits = []
    for p in paths:
        if not os.path.exists(p):
            continue
        r = subprocess.run(["grep", "-rnw", "--include=*.md", "--include=*.json", name, p], capture_output=True, text=True)
        hits += r.stdout.splitlines()
    return hits[:max_hits], len(hits)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--flows", default="migration/clarify/flows")
    ap.add_argument("flows_", nargs="*")
    a = ap.parse_args()
    targets = a.flows_ or sorted(d for d in os.listdir(a.flows) if os.path.isfile(os.path.join(a.flows, d, "pack", "meta.json")))
    for fl in targets:
        pd = os.path.join(a.flows, fl, "pack")
        meta = json.load(open(os.path.join(pd, "meta.json")))
        names = list(meta.get("screens", [])) + list(meta.get("ownBlocks", []))
        out = [f"# Recorded decisions and facts that name the elements of UI flow {fl}", "",
               "Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the",
               "screen or block name; the text is cut at 300 characters). A code comment is not a decision.", ""]
        total = 0
        for label, paths in SOURCES:
            rows = []
            for n in names:
                hits, c = grep(paths, n)
                for h in hits:
                    f, ln, txt = h.split(":", 2)
                    rows.append((n, f, ln, txt.strip()[:300]))
                total += c
            if rows:
                out.append(f"## {label}")
                out.append("")
                for n, f, ln, txt in rows:
                    out.append(f"- `{f}:{ln}` ({n}): {txt}")
                out.append("")
        # decision ids (U<n>, D<n>, CR-*) that appear in the board rows of the flow's screens
        ids = set()
        for n in meta.get("screens", []):
            r = subprocess.run(["grep", "-n", f"^| {n} ", "migration/board.md"], capture_output=True, text=True)
            ids |= set(re.findall(r"\b(U\d+|D\d+\(?[a-z]?\)?|V\d+[a-z]?|CR-[A-Za-z_]+-\d+|ADR-\d+)\b", r.stdout))
        if ids:
            out.append("## Decision ids on the board rows of the flow's screens")
            out.append("")
            out.append(", ".join(sorted(ids)))
            out.append("")
        open(os.path.join(pd, "decisions.md"), "w").write("\n".join(out))
        print(f"{fl:40s} names={len(names)} hits={total}")


if __name__ == "__main__":
    main()
