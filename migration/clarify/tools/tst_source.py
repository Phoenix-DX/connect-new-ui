"""Print the TST compiled source of a screen or block (the code that TST runs) from the static survey.

Usage (from the project root):
  python3 migration/clarify/tools/tst_source.py list [Pattern]          # file names that contain Pattern
  python3 migration/clarify/tools/tst_source.py show <FileName|Pattern> # the source (first match), pretty-split
  python3 migration/clarify/tools/tst_source.py grep <Regex> [Pattern]  # lines that match, in files that contain Pattern
TST is the source of truth: use it when the DEV model (packs) and the React app differ, or when a DEV fact needs a check.
"""
import json, re, sys

SURVEY = "capture/survey-UBTConnect.json"


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return
    src = json.load(open(SURVEY))["sources"]
    cmd = sys.argv[1]
    if cmd == "list":
        pat = sys.argv[2] if len(sys.argv) > 2 else ""
        for k in sorted(src):
            if pat.lower() in k.lower():
                print(k, len(src[k]))
    elif cmd == "show":
        pat = sys.argv[2]
        keys = [k for k in sorted(src) if k == pat] or [k for k in sorted(src) if pat.lower() in k.lower()]
        if not keys:
            print("no file matches", pat)
            return
        print("//", keys[0])
        text = src[keys[0]]
        # split long minified lines at statement ends for readability
        print(re.sub(r";(?=\S)", ";\n", text))
    elif cmd == "grep":
        rx = re.compile(sys.argv[2])
        pat = sys.argv[3] if len(sys.argv) > 3 else ""
        for k in sorted(src):
            if pat.lower() not in k.lower():
                continue
            for i, line in enumerate(re.sub(r";(?=\S)", ";\n", src[k]).splitlines(), 1):
                if rx.search(line):
                    print(f"{k}:{i}: {line.strip()[:240]}")


if __name__ == "__main__":
    main()
