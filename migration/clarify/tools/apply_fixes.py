"""Record fixed findings: report §5 gets a Status column, the checklist rows of the finding become `match`.

Usage (from the project root):
  python3 migration/clarify/tools/apply_fixes.py migration/clarify/fixes/manifest.json
Manifest: a list of {"flow", "finding", "group", "date", "status": "fixed"|"no-fix"|"open", "verified": "code"|"live",
"reason": "<text for no-fix or open>", "rows": [optional row ids; default every row of the finding; [] = no row], "suffix": "<optional text after the fixed status>"}.
A `fixed` entry sets verdict `match`, `verified`, `fixed: <date>` and a note prefix on the rows, and the §5 status cell
"fixed <date> (`fixes/<group>.md`)". A `no-fix` entry writes "no fix: <reason>" in the status cell and leaves the rows.
An `open` entry writes "open: <reason>" and leaves the rows. Running it twice is safe (the prefix is written once).
"""
import json, os, re, sys

C = "migration/clarify"


def set_status(report_path, fid, status):
    lines = open(report_path, encoding="utf-8").read().split("\n")
    i = next((k for k, l in enumerate(lines) if re.match(r"^## 5\.", l)), None)
    if i is None:
        raise SystemExit(f"no §5 in {report_path}")
    j = i + 1
    while j < len(lines) and not lines[j].startswith("|"):
        j += 1
    header = [c.strip() for c in lines[j].strip().strip("|").split("|")]
    if "Status" not in header:
        lines[j] = lines[j].rstrip() + " Status |"
        lines[j + 1] = lines[j + 1].rstrip() + "---|"
        k = j + 2
        while k < len(lines) and lines[k].startswith("|"):
            lines[k] = lines[k].rstrip() + " |"
            k += 1
        header.append("Status")
    col = header.index("Status")
    k = j + 2
    done = False
    while k < len(lines) and lines[k].startswith("|"):
        cells = [c.strip() for c in lines[k].strip().strip("|").split("|")]
        if cells and cells[0] == fid:
            while len(cells) <= col:
                cells.append("")
            cells[col] = status
            lines[k] = "| " + " | ".join(cells) + " |"
            done = True
        k += 1
    if not done:
        raise SystemExit(f"{fid} not in §5 of {report_path}")
    open(report_path, "w", encoding="utf-8").write("\n".join(lines))


def main():
    man = json.load(open(sys.argv[1]))
    n_rows = 0
    for e in man:
        fl, fid = e["flow"], e["finding"]
        rp = os.path.join(C, "flows", fl, "report.md")
        cp = os.path.join(C, "flows", fl, "checklist.json")
        if e["status"] == "fixed":
            set_status(rp, fid, f"fixed {e['date']} (`fixes/{e['group']}.md`)" + (f": {e['suffix']}" if e.get("suffix") else ""))
            d = json.load(open(cp))
            prefix = f"Fixed {e['date']} (fixes/{e['group']}.md)."
            for r in d["rows"]:
                if r.get("finding") != fid or ("rows" in e and r["id"] not in e["rows"]):
                    continue
                r["verdict"] = "match"
                r["verified"] = e.get("verified", "code")
                r["fixed"] = e["date"]
                if not (r.get("note") or "").startswith(prefix):
                    r["note"] = (prefix + " " + (r.get("note") or "")).strip()
                n_rows += 1
            json.dump(d, open(cp, "w"), indent=1, ensure_ascii=False)
        elif e["status"] == "no-fix":
            set_status(rp, fid, f"no fix: {e['reason']}")
        else:
            set_status(rp, fid, f"open: {e['reason']}")
        print(fl, fid, e["status"])
    print("rows updated:", n_rows)


if __name__ == "__main__":
    main()
