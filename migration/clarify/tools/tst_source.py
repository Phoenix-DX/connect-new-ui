"""Print the TST compiled source of a screen or block (the code that TST runs) from the static survey.

Usage (from the project root):
  python3 migration/clarify/tools/tst_source.py list [Pattern]          # file names that contain Pattern
  python3 migration/clarify/tools/tst_source.py show <FileName|Name|Pattern> # exact file, else `.<Name>.mvc.js`, else first substring match
  python3 migration/clarify/tools/tst_source.py grep <Regex> [Pattern]  # lines that match, in files that contain Pattern
Sources: capture/survey-UBTConnect.json (640 compiled screen and block files, `.mvc.js`) and migration/runtime-sources/
(module and flow controllers, plugins, libraries). Module client actions live in `<Module>.controller.js` files.
TST is the source of truth: use it when the DEV model (packs) and the React app differ, or when a DEV fact needs a check.
"""
import json, re, sys

SURVEY = "capture/survey-UBTConnect.json"
RUNTIME = "migration/runtime-sources"


def load():
    import os
    src = dict(json.load(open(SURVEY))["sources"])
    for f in sorted(os.listdir(RUNTIME)) if os.path.isdir(RUNTIME) else []:
        if f.endswith(".js") and f not in src:
            src[f] = open(os.path.join(RUNTIME, f), encoding="utf-8", errors="ignore").read()
    return src


def pick(src, pat):
    """Exact file name, else a file whose name ends with `.<pat>.mvc.js` or `.<pat>.js`, else the first substring match."""
    if pat in src:
        return [pat]
    exact = [k for k in sorted(src) if k.endswith(f".{pat}.mvc.js") or k.endswith(f".{pat}.js")]
    if exact:
        return exact
    return [k for k in sorted(src) if pat.lower() in k.lower()]


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return
    src = load()
    cmd = sys.argv[1]
    if cmd == "list":
        pat = sys.argv[2] if len(sys.argv) > 2 else ""
        for k in sorted(src):
            if pat.lower() in k.lower():
                print(k, len(src[k]))
    elif cmd == "show":
        pat = sys.argv[2]
        keys = pick(src, pat)
        if not keys:
            print("no file matches", pat)
            return
        if len(keys) > 1:
            print("// other matches:", ", ".join(keys[1:6]))
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
