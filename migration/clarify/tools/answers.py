"""Record the user's answers to the questions of the flow reports.

Usage (from the project root):
  python3 migration/clarify/tools/answers.py accept-recommendations --groups G1,G2,G3 --by user --date 2026-10-27
      For every question of those groups: the answer is the recommendation of the report (§7, last column).
  python3 migration/clarify/tools/answers.py set <Flow> <Qn> "<answer>" --by user --date YYYY-MM-DD
      One answer, when the user chooses another option.
  python3 migration/clarify/tools/answers.py render
      Writes migration/clarify/decisions.md from answers.json.
Store: migration/clarify/answers.json ({"<Flow>:<Qn>": {question, options, recommendation, answer, by, date, note}}).
collect.py reads the store for the "Answer" column of INDEX.md §3.
"""
import argparse, json, os, re, sys

sys.path.insert(0, os.path.dirname(__file__))
from collect import GROUPS, section, table_rows  # noqa: E402

STORE = "migration/clarify/answers.json"
OUT = "migration/clarify/decisions.md"
FLOWS = "migration/clarify/flows"


def load():
    return json.load(open(STORE)) if os.path.isfile(STORE) else {}


def option_text(options, recommendation):
    """The option the recommendation names, from the options column: '(a) …' → the text of (a)."""
    m = re.match(r"\s*\(?([a-cA-C])\)?", recommendation or "")
    if not m or not options:
        return ""
    letter = m.group(1).lower()
    parts = re.split(r"\(([a-cA-C])\)\s*", options)
    # parts: [prefix, 'a', text_a, 'b', text_b, ...]
    for i in range(1, len(parts) - 1, 2):
        if parts[i].lower() == letter:
            return parts[i + 1].strip().rstrip(";,. ")
    return ""


def questions_of(flow):
    rp = os.path.join(FLOWS, flow, "report.md")
    if not os.path.isfile(rp):
        return []
    rows = table_rows(section(open(rp, encoding="utf-8").read(), 7))
    out = []
    for r in rows:
        if len(r) >= 2 and re.match(r"Q\d+$", r[0]):
            out.append({"id": r[0], "question": r[1], "why": r[2] if len(r) > 2 else "", "options": r[3] if len(r) > 3 else "",
                        "recommendation": r[4] if len(r) > 4 else ""})
    return out


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    a = sub.add_parser("accept-recommendations")
    a.add_argument("--groups", required=True)
    a.add_argument("--by", default="user")
    a.add_argument("--date", required=True)
    a.add_argument("--note", default="the user accepted the recommendation of every question by id")
    s = sub.add_parser("set")
    s.add_argument("flow")
    s.add_argument("qid")
    s.add_argument("answer")
    s.add_argument("--by", default="user")
    s.add_argument("--date", required=True)
    s.add_argument("--note", default="")
    sub.add_parser("render")
    args = ap.parse_args()
    store = load()
    if args.cmd == "accept-recommendations":
        n = 0
        for g in args.groups.split(","):
            for fl in GROUPS.get(g, []):
                for q in questions_of(fl):
                    key = f"{fl}:{q['id']}"
                    if key in store and store[key].get("answer") and store[key].get("by") == "user" and store[key].get("note") != args.note:
                        continue  # an explicit answer stays
                    opt = option_text(q["options"], q["recommendation"])
                    ans = f"({q['recommendation'][:3].strip('(): ')}) {opt} — {q['recommendation']}" if opt else q["recommendation"]
                    store[key] = {**q, "flow": fl, "answer": ans, "by": args.by, "date": args.date, "note": args.note}
                    n += 1
        print("recorded", n)
    elif args.cmd == "set":
        key = f"{args.flow}:{args.qid}"
        q = next((x for x in questions_of(args.flow) if x["id"] == args.qid), {"id": args.qid, "question": "", "options": "", "recommendation": ""})
        store[key] = {**q, "flow": args.flow, "answer": args.answer, "by": args.by, "date": args.date, "note": args.note}
        print("set", key)
    json.dump(store, open(STORE, "w"), indent=1, ensure_ascii=False)
    # render
    out = ["# Decisions of the clarify-screens questions", "",
           "One row per question of the flow reports (§7). The answer is the user's. When the user accepted the recommendation",
           "by id, the answer is the recommendation text of the report. Facts settled by the orchestrator's review are in",
           "`review/G<n>-review.md`.", ""]
    by_flow = {}
    for key, v in store.items():
        by_flow.setdefault(v["flow"], []).append(v)
    for g, fls in GROUPS.items():
        for fl in fls:
            if fl not in by_flow:
                continue
            out.append(f"## {fl} ({g})")
            out.append("")
            out.append("| Id | Question | Answer | By, date |")
            out.append("|---|---|---|---|")
            for v in sorted(by_flow[fl], key=lambda x: int(re.sub(r"\D", "", x["id"]) or 0)):
                q = v["question"].split(". ")[0][:220]
                out.append(f"| {v['id']} | {q} | {v['answer'][:400]} | {v['by']}, {v['date']} |")
            out.append("")
    open(OUT, "w").write("\n".join(out))
    print("rendered", OUT, "answers:", len(store))


if __name__ == "__main__":
    main()
