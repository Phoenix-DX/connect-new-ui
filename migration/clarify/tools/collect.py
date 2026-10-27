"""Collect the flow reports into INDEX.md: verdict matrix, findings by severity, questions, DEV≠TST and KB notes.

Usage (from the project root):
  python3 migration/clarify/tools/collect.py [--flows migration/clarify/flows] [--out migration/clarify/INDEX.md]
  python3 migration/clarify/tools/collect.py --questions G1   # the questions of the flows of one group, for the user
Reads <flows>/<Flow>/checklist.json and report.md (sections 5, 6, 7). Flows without a report are listed as pending.
"""
import argparse, json, os, re, collections

GROUPS = {
    "G1": ["App_Common", "App_PIN", "App_Policies", "Home", "App_Menu", "App_Menu_ContactUs", "App_Notifications", "App_Profile", "App_Services"],
    "G2": ["Directory_Locality", "Directory_Household", "Directory_Search", "Directory_Photobook", "Directory_SupperMeetings", "Directory_OneSchoolGlobal", "Directory_Updates"],
    "G3": ["Bookmarks", "Notes", "Calendar", "ContactFlow", "Legacy_Share", "Legacy_MyNotificationsFlow"],
    "G4": ["Legacy_OrbitEventsFlow", "Legacy_OrbitAdminFlow", "Legacy_OrbitQRCodeFlow", "Legacy_LDMEventsFlow", "Legacy_LDMEventsFlow_V2", "Legacy_AssembleFlow"],
    "G5": ["Map", "Deprecated_Calendar_PersonalEvent", "zTemp_Flow", "zDEV_Directory_CommunityBusinessBlocks"],
    "X": ["App_Cache", "App_Common_Blocks", "App_Common_Blocks_PopupDialogs", "SubLayout", "App_CommonBlocks_Filter", "Directory_CommonBlocks",
          "Directory_Caroussel", "Directory_Interchange", "Directory_Household_Blocks", "Directory_OneSchoolGlobal_Blocks", "Calendar_Events",
          "_shared", "_libraries"],
}
VERDICTS = ["match", "partial", "missing", "differs", "mock-only", "n/a", "unclear"]
SEV = ["blocker", "major", "minor", "info"]


def section(text, number):
    """The markdown text of section '## <number>.' up to the next '## '."""
    m = re.search(r"^## %s\..*?$" % number, text, re.M)
    if not m:
        return ""
    rest = text[m.end():]
    n = re.search(r"^## ", rest, re.M)
    return rest[: n.start()] if n else rest


def table_rows(md):
    rows = []
    for line in md.splitlines():
        if line.startswith("|") and not re.match(r"^\|[-\s|]+\|$", line):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            rows.append(cells)
    return rows[1:] if rows else []


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--flows", default="migration/clarify/flows")
    ap.add_argument("--out", default="migration/clarify/INDEX.md")
    ap.add_argument("--questions", help="group id: print the questions of that group's flows")
    a = ap.parse_args()
    data = {}
    for g, fls in GROUPS.items():
        for fl in fls:
            cp = os.path.join(a.flows, fl, "checklist.json")
            rp = os.path.join(a.flows, fl, "report.md")
            if not os.path.isfile(cp):
                data[fl] = None
                continue
            c = json.load(open(cp))
            rep = open(rp, encoding="utf-8").read() if os.path.isfile(rp) else ""
            data[fl] = {"group": g, "rows": c.get("rows", []), "status": c.get("status", "draft"), "report": rep}
    if a.questions:
        for fl in GROUPS.get(a.questions, []):
            d = data.get(fl)
            if not d:
                continue
            q = section(d["report"], 7)
            rows = table_rows(q)
            if rows:
                print(f"\n### {fl} ({len(rows)} questions)  — report §7: migration/clarify/flows/{fl}/report.md\n")
                for r in rows:
                    print("| " + " | ".join(r) + " |")
        return
    out = ["# Clarify screens: index of the flow reports", "",
           "One report per UI flow of `UBTConnect` (DEV model through the MCP as the checklist; TST is the source of truth).",
           "Rows and verdicts come from `flows/<Flow>/checklist.json`; findings, questions and notes from `report.md` §5–§7.",
           "Verdicts: match · partial · missing · differs · mock-only · n/a · unclear (meaning in `PLAN.md` §4).", ""]
    out.append("## 1. Verdict matrix")
    out.append("")
    out.append("| Group | Flow | Status | Rows | " + " | ".join(VERDICTS) + " | Findings (B/M/m/i) | Questions |")
    out.append("|---|---|---|---|" + "---|" * len(VERDICTS) + "---|---|")
    tot = collections.Counter()
    sev_tot = collections.Counter()
    for g, fls in GROUPS.items():
        for fl in fls:
            d = data[fl]
            if d is None:
                out.append(f"| {g} | {fl} | pending | | " + " | ".join("" for _ in VERDICTS) + " | | |")
                continue
            cnt = collections.Counter(r.get("verdict") for r in d["rows"])
            tot.update(cnt)
            fnd = table_rows(section(d["report"], 5))
            sv = collections.Counter(r[1].lower() for r in fnd if len(r) > 1)
            sev_tot.update(sv)
            qs = table_rows(section(d["report"], 7))
            out.append(f"| {g} | [{fl}](flows/{fl}/report.md) | {d['status']} | {len(d['rows'])} | " + " | ".join(str(cnt.get(v, 0)) for v in VERDICTS)
                       + f" | {sv.get('blocker', 0)}/{sv.get('major', 0)}/{sv.get('minor', 0)}/{sv.get('info', 0)} | {len(qs)} |")
    done = sum(1 for d in data.values() if d)
    out.append(f"| | **total ({done}/{len(data)} flows)** | | {sum(tot.values())} | " + " | ".join(str(tot.get(v, 0)) for v in VERDICTS)
               + f" | {sev_tot.get('blocker', 0)}/{sev_tot.get('major', 0)}/{sev_tot.get('minor', 0)}/{sev_tot.get('info', 0)} | |")
    out.append("")
    # findings by severity
    out.append("## 2. Findings by severity (blocker and major first)")
    out.append("")
    out.append("| Flow | Id | Severity | Screen / element | Finding | React location |")
    out.append("|---|---|---|---|---|---|")
    allf = []
    for fl, d in data.items():
        if not d:
            continue
        for r in table_rows(section(d["report"], 5)):
            if len(r) >= 5:
                allf.append((SEV.index(r[1].lower()) if r[1].lower() in SEV else 9, fl, r))
    for _, fl, r in sorted(allf, key=lambda x: (x[0], x[1])):
        if r[1].lower() in ("blocker", "major", "minor"):
            out.append(f"| {fl} | {r[0]} | {r[1]} | {r[2]} | {r[3]} | {r[4] if len(r) > 4 else ''} |")
    info = [(fl, r) for _, fl, r in allf if r[1].lower() == "info"]
    out.append("")
    out.append(f"Info findings: {len(info)} (in the reports, §5).")
    out.append("")
    # questions
    out.append("## 3. Questions for the user, by group")
    out.append("")
    for g, fls in GROUPS.items():
        rows = []
        for fl in fls:
            d = data.get(fl)
            if d:
                for r in table_rows(section(d["report"], 7)):
                    rows.append((fl, r))
        if not rows:
            continue
        out.append(f"### {g}")
        out.append("")
        out.append("| Flow | Id | Question | Recommendation | Answer |")
        out.append("|---|---|---|---|---|")
        for fl, r in rows:
            out.append(f"| {fl} | {r[0]} | {r[1]} | {r[4] if len(r) > 4 else ''} | |")
        out.append("")
    # DEV≠TST and KB notes
    out.append("## 4. DEV vs TST differences and KB disagreements")
    out.append("")
    for fl, d in data.items():
        if not d:
            continue
        s6 = section(d["report"], 6)
        dev = [r for r in table_rows(s6) if r and r[0] not in ("-", "", "Id", "Element") and not re.match(r"K\d+$", r[0])]
        kb = [r for r in table_rows(s6) if r and re.match(r"K\d+", r[0])]
        if dev or kb:
            out.append(f"- **{fl}**: DEV≠TST rows {len(dev)}; KB disagreements {len(kb)} ({', '.join(r[0] for r in kb)}) — report §6")
    out.append("")
    open(a.out, "w").write("\n".join(out))
    print(f"INDEX: {done}/{len(data)} flows, rows {sum(tot.values())}, {dict(tot)}, findings {dict(sev_tot)}")


if __name__ == "__main__":
    main()
