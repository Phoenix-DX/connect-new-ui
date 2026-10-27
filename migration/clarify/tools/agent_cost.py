"""Token-waste statistics of subagent transcripts (Claude Code task JSONL files).

Usage:
  python3 migration/clarify/tools/agent_cost.py <label>=<transcript.output> [...]
Per agent: tool calls, duplicated commands (same command text, or the same command with and without a `cd` prefix),
tool-result characters by category (brief, pack, react, kb, tst, decisions, scratch/assembly, other), the largest
results, and the number of calls that build the deliverables in pieces.
The transcript is never printed; only counts and the first 100 characters of a command.
"""
import json, re, sys, collections

CATS = [
    ("brief", r"migration/clarify/(AGENT\.md|templates/)"),
    ("pack", r"migration/clarify/flows/[^/]+/pack/"),
    ("tst", r"tst_source\.py"),
    ("kb", r"ubt_sharing_kb"),
    ("decisions", r"migration/(board\.md|change-requests|app-shell\.spec\.md|knowledge)|app/docs"),
    ("react", r"app/src"),
    ("assembly", r"scratchpad|/tmp/|python3 - <<|heredoc|cat > |json\.dump"),
]


def cat_of(arg):
    for name, rx in CATS:
        if re.search(rx, arg):
            return name
    return "other"


def analyse(path):
    calls, results = [], {}
    for line in open(path, encoding="utf-8", errors="ignore"):
        try:
            o = json.loads(line)
        except ValueError:
            continue
        msg = o.get("message") or o
        content = msg.get("content") if isinstance(msg, dict) else None
        if not isinstance(content, list):
            continue
        for c in content:
            if not isinstance(c, dict):
                continue
            if c.get("type") == "tool_use":
                inp = c.get("input", {}) or {}
                arg = inp.get("file_path") or inp.get("command") or inp.get("pattern") or inp.get("query") or ""
                calls.append((c.get("id"), c.get("name"), str(arg)))
            elif c.get("type") == "tool_result":
                cc = c.get("content")
                size = sum(len(x.get("text", "")) for x in cc if isinstance(x, dict)) if isinstance(cc, list) else len(str(cc or ""))
                results[c.get("tool_use_id")] = size
    norm = collections.Counter()
    for _, n, a in calls:
        norm[(n, re.sub(r"^cd \S+ && ", "", a.strip()))] += 1
    dup_calls = sum(v - 1 for v in norm.values() if v > 1)
    dup_chars = 0
    seen = {}
    for i, n, a in calls:
        key = (n, re.sub(r"^cd \S+ && ", "", a.strip()))
        if key in seen:
            dup_chars += results.get(i, 0)
        seen[key] = True
    by_cat = collections.Counter()
    by_tool = collections.Counter()
    rows = []
    for i, n, a in calls:
        s = results.get(i, 0)
        by_tool[n] += 1
        by_cat[cat_of(a) if n != "Read" else cat_of(a)] += s
        rows.append((s, n, a[:100].replace("\n", " ")))
    assembly = sum(1 for _, n, a in calls if n == "Bash" and re.search(r"scratchpad|python3 - <<|cat > ", a))
    return {
        "calls": len(calls), "by_tool": dict(by_tool), "dup_calls": dup_calls, "dup_chars": dup_chars,
        "result_chars": sum(results.values()), "by_cat": dict(by_cat), "assembly_calls": assembly,
        "largest": sorted(rows, reverse=True)[:8],
    }


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return
    print("| Agent | Calls | Dup calls | Dup chars | Result chars | brief | pack | react | kb | tst | decisions | assembly | other | Assembly calls |")
    print("|---|---|---|---|---|---|---|---|---|---|---|---|---|---|")
    details = []
    for arg in sys.argv[1:]:
        label, path = arg.split("=", 1) if "=" in arg else (arg, arg)
        r = analyse(path)
        c = r["by_cat"]
        print(f"| {label} | {r['calls']} | {r['dup_calls']} | {r['dup_chars']:,} | {r['result_chars']:,} | "
              + " | ".join(f"{c.get(k, 0):,}" for k in ("brief", "pack", "react", "kb", "tst", "decisions", "assembly", "other"))
              + f" | {r['assembly_calls']} |")
        details.append((label, r))
    for label, r in details:
        print(f"\n{label}: tools {r['by_tool']}; largest results:")
        for s, n, a in r["largest"]:
            print(f"  {s:>8,} {n:<6} {a}")


if __name__ == "__main__":
    main()
