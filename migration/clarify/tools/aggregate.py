"""Aggregate the 45 checklists for the P2 synthesis: what production needs outside the front end.

Usage (from the project root):
  python3 migration/clarify/tools/aggregate.py [--flows migration/clarify/flows] [--out migration/clarify/review/aggregate.md]
Tables: server and service actions behind mock-only rows (by flow); native-only rows; rows that differ by a recorded
decision (grouped by decision id); flags named in rows; findings by severity with their flow (from INDEX §2 source
reports); unclear rows; DEV≠TST lines (report §6.1) per flow; KB disagreements (K rows) per flow.
"""
import argparse, collections, json, os, re, sys

sys.path.insert(0, os.path.dirname(__file__))
from collect import GROUPS, section, table_rows  # noqa: E402

DEC_RE = re.compile(r"\b(U\d{1,2}|D\d{1,2}\(?[a-z]?\)?|ADR-\d+|CR-[A-Za-z_0-9]+-\d+|F\d{2}|V\d[a-z]?|BR-[A-Z0-9]+-\d+)\b")
FLAG_RE = re.compile(r"\b(getHas\w+|C2Enable\w+|C2New\w+|mobile[A-Z]\w+|Mobile-[A-Za-z-]+)\b")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--flows", default="migration/clarify/flows")
    ap.add_argument("--out", default="migration/clarify/review/aggregate.md")
    a = ap.parse_args()
    flows = [fl for fls in GROUPS.values() for fl in fls]
    mock = collections.defaultdict(list)
    native = []
    differs = collections.defaultdict(list)
    flags = collections.Counter()
    unclear = []
    devtst = {}
    kb = {}
    findings = []
    counts = collections.Counter()
    for fl in flows:
        cp = os.path.join(a.flows, fl, "checklist.json")
        if not os.path.isfile(cp):
            continue
        rows = json.load(open(cp))["rows"]
        for r in rows:
            v = r.get("verdict")
            counts[v] += 1
            text = " ".join(str(r.get(k, "")) for k in ("element", "os", "react", "note", "evidence"))
            for f in FLAG_RE.findall(text):
                flags[f] += 1
            if v == "mock-only":
                mock[fl].append((r["id"], r.get("element", "")[:90], (r.get("note") or "")[:160]))
            elif v == "n/a" and re.search(r"native", (r.get("note") or "") + (r.get("react") or ""), re.I):
                native.append((fl, r["id"], r.get("element", "")[:90], (r.get("note") or "")[:120]))
            elif v == "differs":
                ids = sorted(set(DEC_RE.findall((r.get("note") or "") + " " + (r.get("evidence") or ""))))
                key = ", ".join(i for i in ids if not i.startswith("BR-")) or "no id in the row"
                differs[key].append((fl, r["id"], r.get("element", "")[:80]))
            elif v == "unclear":
                unclear.append((fl, r["id"], r.get("element", "")[:80], (r.get("question") or r.get("note") or "")[:160]))
        rp = os.path.join(a.flows, fl, "report.md")
        if os.path.isfile(rp):
            rep = open(rp, encoding="utf-8").read()
            s6 = table_rows(section(rep, 6))
            devtst[fl] = [r for r in s6 if r and r[0] not in ("-", "", "Id", "Element") and not re.match(r"K\d+$", r[0])]
            kb[fl] = [r for r in s6 if r and re.match(r"K\d+$", r[0])]
            for r in table_rows(section(rep, 5)):
                if len(r) >= 4 and r[1].lower() in ("blocker", "major", "minor", "info"):
                    findings.append((r[1].lower(), fl, r[0], r[2][:80], r[3][:200]))
    out = ["# Aggregate of the 45 checklists (input of the P2 synthesis)", "",
           f"Rows: {sum(counts.values())}; " + ", ".join(f"{k} {v}" for k, v in sorted(counts.items())), ""]
    out.append("## 1. Server and service actions behind mock-only rows (production needs a backend for each)")
    out.append("")
    out.append("| Flow | Row | Element | Note |")
    out.append("|---|---|---|---|")
    for fl in flows:
        for rid, el, note in mock.get(fl, []):
            out.append(f"| {fl} | {rid} | {el} | {note} |")
    out.append("")
    out.append("## 2. Native-only rows (Cordova plugins, app links, push, camera, orientation)")
    out.append("")
    out.append("| Flow | Row | Element | Note |")
    out.append("|---|---|---|---|")
    for fl, rid, el, note in native:
        out.append(f"| {fl} | {rid} | {el} | {note} |")
    out.append("")
    out.append("## 3. Rows that differ by a recorded decision, grouped by decision id")
    out.append("")
    for key, items in sorted(differs.items(), key=lambda x: -len(x[1])):
        out.append(f"- **{key}** ({len(items)} rows): " + "; ".join(f"{fl} {rid} {el}" for fl, rid, el in items[:8]) + (" …" if len(items) > 8 else ""))
    out.append("")
    out.append("## 4. Flags named in the rows")
    out.append("")
    out.append(", ".join(f"{f} ({n})" for f, n in flags.most_common()))
    out.append("")
    out.append("## 5. Findings by severity")
    out.append("")
    out.append("| Severity | Flow | Id | Element | Finding |")
    out.append("|---|---|---|---|---|")
    order = {"blocker": 0, "major": 1, "minor": 2, "info": 3}
    for sev, fl, fid, el, txt in sorted(findings, key=lambda x: (order[x[0]], x[1])):
        out.append(f"| {sev} | {fl} | {fid} | {el} | {txt} |")
    out.append("")
    out.append("## 6. Rows still unclear")
    out.append("")
    out.append("| Flow | Row | Element | Question |")
    out.append("|---|---|---|---|")
    for fl, rid, el, q in unclear:
        out.append(f"| {fl} | {rid} | {el} | {q} |")
    out.append("")
    out.append("## 7. DEV vs TST lines per flow (report §6.1)")
    out.append("")
    for fl in flows:
        if devtst.get(fl):
            out.append(f"- **{fl}** ({len(devtst[fl])}): " + " · ".join(r[0][:60] for r in devtst[fl][:10]))
    out.append("")
    out.append("## 8. KB disagreements per flow (K rows)")
    out.append("")
    for fl in flows:
        if kb.get(fl):
            out.append(f"- **{fl}** ({len(kb[fl])}): " + " · ".join(f"{r[0]} {r[1][:70]}" for r in kb[fl]))
    out.append("")
    open(a.out, "w").write("\n".join(out))
    print(f"aggregate: mock-only {sum(len(v) for v in mock.values())}, native {len(native)}, differs groups {len(differs)}, findings {len(findings)}, unclear {len(unclear)}, KB rows {sum(len(v) for v in kb.values())}")


if __name__ == "__main__":
    main()
