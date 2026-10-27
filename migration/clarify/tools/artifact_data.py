"""Extract the data of the artifact "Infra & FE readiness" from the P2 documents into one JSON.

Usage (from the project root):
  python3 migration/clarify/tools/artifact_data.py [--out migration/clarify/artifact/data.en.json]
Sources: INDEX.md (§1 matrix), infra-gaps.md (§2 gap table, §3.1 contract by module, §10 tables, §10.4 build lists,
§11 order), architecture-current.md (§2 diagrams, §5.1 app-start table, §12 status table), review/aggregate.md
(§5 findings), answers.json (decisions). The JSON is the English source; a translation writes data.vi.json.
"""
import argparse, json, os, re, sys

sys.path.insert(0, os.path.dirname(__file__))
from collect import section, table_rows  # noqa: E402

C = "migration/clarify"


def read(p):
    return open(os.path.join(C, p), encoding="utf-8").read()


def sub(text, heading_regex):
    """Text of a '### x.y …' sub-section up to the next '###' or '##'."""
    m = re.search(heading_regex, text, re.M)
    if not m:
        return ""
    rest = text[m.end():]
    n = re.search(r"^##", rest, re.M)
    return rest[: n.start()] if n else rest


def tables(md):
    """All tables of a markdown text: list of (header cells, rows)."""
    out = []
    cur_h = None
    cur = []
    for line in md.splitlines():
        if line.startswith("|"):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if re.match(r"^\|[-\s|:]+\|$", line):
                continue
            if cur_h is None:
                cur_h = cells
            else:
                cur.append(cells)
        else:
            if cur_h is not None:
                out.append((cur_h, cur))
            cur_h, cur = None, []
    if cur_h is not None:
        out.append((cur_h, cur))
    return out


def numbered_items(md):
    items = []
    for m in re.finditer(r"^\d+\.\s+(.*?)(?=^\d+\.\s|\n\n|\Z)", md, re.M | re.S):
        items.append(re.sub(r"\s+", " ", m.group(1)).strip())
    return items


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=os.path.join(C, "artifact", "data.en.json"))
    a = ap.parse_args()
    data = {"generated": "2026-10-27", "sources": ["INDEX.md", "infra-gaps.md", "architecture-current.md", "review/aggregate.md", "decisions.md"]}
    # INDEX matrix
    idx = read("INDEX.md")
    t = tables(section(idx, 1))
    if t:
        h, rows = t[0]
        data["matrix"] = [dict(zip(h, r)) for r in rows if len(r) == len(h)]
    # infra-gaps
    ig = read("infra-gaps.md")
    t = tables(section(ig, 2))
    data["gaps"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if t else []
    t = tables(sub(ig, r"^### 3\.1 .*$"))
    data["contract_modules"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if t else []
    t = tables(sub(ig, r"^### 3\.2 .*$"))
    data["contract_flagged_inputs"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if t else []
    s10 = section(ig, 10)
    data["section10_tables"] = [{"header": h, "rows": rows} for h, rows in tables(s10)]
    s104 = sub(ig, r"^### 10\.4 .*$")
    t = tables(s104)
    data["build_items"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if len(t) > 0 else []
    data["keep_items"] = [dict(zip(t[1][0], r)) for r in t[1][1]] if len(t) > 1 else []
    data["check_items"] = [dict(zip(t[2][0], r)) for r in t[2][1]] if len(t) > 2 else []
    data["open_items"] = [l.strip("- ").strip() for l in sub(ig, r"^### 10\.5 .*$").splitlines() if l.startswith("- ")]
    data["setup_order"] = numbered_items(section(ig, 11))
    data["summary_text"] = section(ig, 1).strip()
    # architecture
    ac = read("architecture-current.md")
    data["diagrams"] = re.findall(r"```mermaid\n(.*?)```", ac, re.S)
    t = tables(sub(ac, r"^### 5\.1 .*$"))
    data["app_start"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if t else []
    t = tables(section(ac, 12))
    data["status"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if t else []
    t = tables(section(ac, 3))
    data["folders"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if t else []
    # aggregate findings
    ag = read("review/aggregate.md")
    t = tables(section(ag, 5))
    data["findings"] = [dict(zip(t[0][0], r)) for r in t[0][1]] if t else []
    data["unclear"] = [dict(zip(tt[0], r)) for tt in tables(section(ag, 6))[:1] for r in tt[1]]
    # decisions
    ans = json.load(open(os.path.join(C, "answers.json")))
    data["decisions"] = [{"flow": v["flow"], "id": v["id"], "question": v.get("question", ""), "answer": v.get("answer", ""), "by": v.get("by", ""), "date": v.get("date", "")} for v in ans.values()]
    os.makedirs(os.path.dirname(a.out), exist_ok=True)
    json.dump(data, open(a.out, "w"), indent=1, ensure_ascii=False)
    print({k: (len(v) if isinstance(v, list) else "text") for k, v in data.items() if k not in ("generated", "sources")})


if __name__ == "__main__":
    main()
