#!/usr/bin/env python3
"""
har_to_fixtures.py: turn recorded OutSystems screenservice traffic (HAR) into anonymized MSW fixtures.

  python3 har_to_fixtures.py convert --har migration/.raw/session.har [--har ...] \
          --out app/src/mocks/fixtures [--rules migration/mock-rules.json] [--salt-file migration/.raw/salt]
  python3 har_to_fixtures.py review --out app/src/mocks/fixtures --by user      # after a person read REVIEW.md
  python3 har_to_fixtures.py check  --out app/src/mocks/fixtures               # exit 1 if not reviewed / changed
  python3 har_to_fixtures.py coverage --out app/src/mocks/fixtures --screens-dir migration/screens [--board-dir migration]
          per route: every call of the capture (analysis/calls.json, every phase and flag variant) with or without a
          recording -> migration/fixture-coverage.md (names only). What is missing: record it (record_har.cjs --plan
          with the step that triggers it), or mock it fictionally and list it under "Decisions to confirm".

The HAR comes from record_har.cjs (the person browses; agents never open the HAR). Only the person who owns
the data decides that the fixtures are safe: `review` refuses any --by other than "user", and records a hash of
every fixture, so a fixture changed or added later is "not reviewed" again (consistency_check.py fails routes
whose mocks use unreviewed fixtures).

What it keeps (so the UI renders exactly like the real app):
  - structure, field names, list sizes, ordering, OutSystems "no value" defaults ("", "0", 1900-01-01),
    booleans, enums/status codes, dates that drive logic, numbers;
  - text LENGTH and word shape (fake text has the same word lengths, so wrapping/ellipsis behave the same);
  - relations: every identifier is remapped with ONE table across all files, so the id a list returns
    is the id the detail call receives.
What it replaces: personal fields by name (names, emails, phones, addresses, birth dates, document
numbers, bank data, free-text notes...), any value that looks like an email/phone/long number,
identifiers (remapped, same format), image URLs and base64 images.

Output, per call:  <out>/<Module>/<Action>/<NN>-<hash>.json
  { "module", "action", "screen", "status", "inputs": {...}, "data": {...} }
plus <out>/index.json and <out>/REVIEW.md (fields replaced/kept, for a human check before commit).
Deterministic: same HAR + same salt -> same fixtures. Keep the salt and the HAR out of git.
"""
import argparse, base64, collections, datetime, glob, hashlib, hmac, json, os, re, secrets, sys

SENSITIVE_KEY = re.compile(
    r"(name|email|mail|phone|mobile|fax|address|street|suburb|city|postcode|postal|zip|birth|dob|age\b|"
    r"gender|ssn|tfn|passport|licen[cs]e|national|iban|bsb|swift|account(number|no)|card|tax|"
    r"note|comment|remark|message|signature|photo|avatar|image|picture|username|login|token|password|secret)", re.I)
ID_KEY = re.compile(r"(^[Ii][Dd]$|Id$|ID$|_id$|[Gg]uid|[Uu]uid)")
EMAIL = re.compile(r"^[\w.+-]+@[\w-]+\.[\w.-]+$")
PHONE = re.compile(r"^\+?[\d\s().-]{8,}$")
LONGNUM = re.compile(r"^\d{5,}$")
GUID = re.compile(r"^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", re.I)
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}")
OS_DEFAULTS = {"", "0", "0.0"}
WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur".split()
BY_LEN = collections.defaultdict(list)
for wd in WORDS:
    BY_LEN[len(wd)].append(wd)


class Anon:
    def __init__(self, salt, rules):
        self.salt, self.rules = salt, rules
        self.keep = set(rules.get("keep", []))          # field names never touched (status codes, labels...)
        self.force = set(rules.get("anonymize", []))    # field names always replaced
        self.ids = set(rules.get("ids", []))            # extra field names treated as identifiers
        self.idmap = {}
        self.report = collections.Counter()

    def h(self, *parts):
        return hmac.new(self.salt, "|".join(map(str, parts)).encode(), hashlib.sha256).digest()

    def fake_text(self, s, key):
        out = []
        for i, tok in enumerate(re.split(r"(\s+)", s)):
            if not tok or tok.isspace():
                out.append(tok); continue
            n = len(tok)
            pool = BY_LEN.get(n) or [("x" * n)]
            wd = pool[self.h(key, s, i)[0] % len(pool)]
            out.append(wd.capitalize() if tok[:1].isupper() else wd)
        return "".join(out)

    def fake_digits(self, s, tag):
        d = self.h(tag, s)
        digits = "".join(str(b % 10) for b in d)
        while len(digits) < len(s):
            d = self.h(tag, d); digits += "".join(str(b % 10) for b in d)
        res = digits[:len(s)]
        return ("1" + res[1:]) if res[0] == "0" and len(res) > 1 else res

    def remap_id(self, v):
        """Same original id -> same fake id everywhere (lists, details, request inputs)."""
        sv = str(v)
        if sv in OS_DEFAULTS:
            return v
        if sv not in self.idmap:
            if GUID.match(sv):
                hx = self.h("guid", sv).hex()
                new = f"{hx[:8]}-{hx[8:12]}-{hx[12:16]}-{hx[16:20]}-{hx[20:32]}"
            elif sv.isdigit():
                new = self.fake_digits(sv, "id")
            else:
                new = self.fake_text(sv, "id") if not re.search(r"\d", sv) else re.sub(
                    r"\d+", lambda m: self.fake_digits(m.group(), "idpart"), sv)
            self.idmap[sv] = new
        new = self.idmap[sv]
        return int(new) if isinstance(v, int) else new

    def value(self, v, key, path):
        k = key or ""
        if k in self.keep or isinstance(v, bool) or v is None:
            return v
        if isinstance(v, dict):
            return {kk: self.value(vv, kk, f"{path}.{kk}") for kk, vv in v.items()}
        if isinstance(v, list):
            return [self.value(x, key, f"{path}[]") for x in v]
        sv = str(v)
        if sv in OS_DEFAULTS or sv.startswith("1900-01-01"):
            return v                                   # OutSystems "no value": keep, the UI depends on it
        if k in self.ids or (ID_KEY.search(k) and not SENSITIVE_KEY.search(k)):
            self.report[f"id   {path}"] += 1
            return self.remap_id(v)
        if isinstance(v, (int, float)) and k not in self.force:
            return v                                   # amounts, counts: keep (adjust with rules if sensitive)
        if sv.startswith("data:image") or re.search(r"\.(png|jpe?g|gif|webp|svg)(\?|$)", sv, re.I):
            self.report[f"img  {path}"] += 1
            return ""                                  # rendered as 'no image' (same as an empty OS image)
        sensitive = k in self.force or SENSITIVE_KEY.search(k)
        if sensitive and DATE.match(sv):
            self.report[f"date {path}"] += 1
            y = 1960 + self.h("y", sv)[0] % 40
            return f"{y}{sv[4:]}"                      # birth dates etc.: shift the year, keep the format
        if EMAIL.match(sv):
            self.report[f"mail {path}"] += 1
            return f"user{self.fake_digits(sv, 'mail')[:5]}@example.test"
        if PHONE.match(sv) or LONGNUM.match(sv):
            self.report[f"num  {path}"] += 1
            return re.sub(r"\d+", lambda m: self.fake_digits(m.group(), "num"), sv)
        if GUID.match(sv):
            self.report[f"id   {path}"] += 1
            return self.remap_id(sv)
        if sensitive and isinstance(v, str):
            self.report[f"text {path}"] += 1
            return self.fake_text(sv, k)
        self.report[f"kept {path}"] += 1
        return v


def parse_call(entry):
    req, res = entry["request"], entry["response"]
    url = req["url"].split("?")[0]
    m = re.search(r"/screenservices/(.+)$", url)
    if not m or req["method"] != "POST":
        return None
    if not res.get("status") or res.get("_failureText") or res.get("status", 0) >= 500:
        return None                                    # aborted (read-only guard), failed or server error: no fixture
    parts = m.group(1).split("/")
    module, action = parts[0], parts[-1]
    screen = parts[-2] if len(parts) >= 4 else None
    try:
        body = json.loads((req.get("postData") or {}).get("text") or "{}")
    except ValueError:
        body = {}
    inputs = body.get("inputParameters")
    if inputs is None:
        inputs = (body.get("screenData") or {}).get("variables", {})
    content = res.get("content") or {}
    text = content.get("text") or ""
    if content.get("encoding") == "base64":
        text = base64.b64decode(text).decode("utf-8", "replace")
    try:
        payload = json.loads(text) if text else {}
    except ValueError:
        return None
    if isinstance(payload, dict) and payload.get("versionInfo", {}).get("hasApiVersionChanged"):
        print(f"  skip {module}/{action}: app was republished during recording (apiVersion changed)", file=sys.stderr)
        return None
    data = payload.get("data", payload) if isinstance(payload, dict) else payload
    # drop OutSystems bookkeeping variables from screen inputs (fetch status flags, internal _ vars)
    inputs = {k: v for k, v in (inputs or {}).items() if not k.startswith("_")}
    return {"module": module, "action": action, "screen": screen, "status": res.get("status", 200),
            "inputs": inputs, "data": data}


def protect_dir(d):
    """Raw material (HAR, salt) lives in a folder that ignores itself in git."""
    os.makedirs(d or ".", exist_ok=True)
    gi = os.path.join(d or ".", ".gitignore")
    if not os.path.exists(gi):
        open(gi, "w").write("*\n")


def fixtures_hash(out):
    h = hashlib.sha256()
    for f in sorted(glob.glob(os.path.join(out, "**", "*.json"), recursive=True)):
        if os.path.basename(f) == "reviewed.json":
            continue
        h.update(os.path.relpath(f, out).encode()); h.update(open(f, "rb").read())
    return h.hexdigest()


def check_reviewed(out):
    """Return a list of problems ([] when the fixtures are reviewed and unchanged)."""
    if not os.path.exists(os.path.join(out, "index.json")):
        return []
    rv = os.path.join(out, "reviewed.json")
    if not os.path.exists(rv):
        return [f"{out}: fixtures not reviewed by the user (read REVIEW.md, then har_to_fixtures.py review --by user)"]
    if json.load(open(rv, encoding="utf-8")).get("hash") != fixtures_hash(out):
        return [f"{out}: fixtures changed since the user's review (review REVIEW.md again)"]
    return []


def cmd_convert(a):
    protect_dir(os.path.dirname(a.salt_file))
    if os.path.exists(a.salt_file):
        salt = open(a.salt_file, "rb").read()
    else:
        salt = secrets.token_bytes(32)
        open(a.salt_file, "wb").write(salt)
    rules = json.load(open(a.rules, encoding="utf-8")) if a.rules else {}
    anon = Anon(salt, rules)
    only = None                                        # data minimisation: convert only these actions (second safety net)
    if a.only_actions:
        only = set(json.load(open(a.only_actions, encoding="utf-8"))["record"] if a.only_actions.endswith(".json")
                   else [x.strip() for x in a.only_actions.split(",") if x.strip()])
    skipped, dropped = collections.Counter(), collections.Counter()

    raw, seen_raw = [], set()
    for har in a.har:
        windows = []
        if os.path.exists(har + ".auth.json"):           # time windows of the automatic sign-in / PIN unlock (record_har.cjs)
            parse = lambda t: datetime.datetime.fromisoformat(t.replace("Z", "+00:00"))
            windows = [(parse(w["from"]), parse(w["to"])) for w in json.load(open(har + ".auth.json", encoding="utf-8")).get("windows", [])]
        for e in json.load(open(har, encoding="utf-8"))["log"]["entries"]:
            c = parse_call(e)
            if not c:
                continue
            if only is not None and c["action"] not in only:
                skipped[c["action"]] += 1
                continue
            for k in rules.get("dropInputs", []):       # screen state sent with data actions (user cache, forms): never kept
                if k in c["inputs"]:
                    del c["inputs"][k]
                    dropped[f'{c["action"]}.in.{k}'] += 1
            drop_out = set(rules.get("dropOutputs", []))   # person data inside an in-scope answer: filled by a fictional mock
            def strip(v, path):
                if isinstance(v, dict):
                    for k in [k for k in v if k in drop_out]:
                        del v[k]
                        dropped[f"{path}.{k}"] += 1
                    for k, x in v.items():
                        strip(x, f"{path}.{k}")
                elif isinstance(v, list):
                    for x in v:
                        strip(x, f"{path}[]")
            if drop_out:
                strip(c["data"], f'{c["action"]}.out')
            if windows and e.get("startedDateTime"):
                t = datetime.datetime.fromisoformat(e["startedDateTime"].replace("Z", "+00:00"))
                if any(f <= t <= to for f, to in windows):
                    continue
            k = json.dumps([c["module"], c["action"], c["inputs"], c["data"]], sort_keys=True)
            if k not in seen_raw:                      # identical call recorded twice
                seen_raw.add(k); raw.append(c)
    if skipped:
        print(f"skipped {sum(skipped.values())} call(s) of {len(skipped)} action(s) outside --only-actions")
    if not raw:
        sys.exit("no screenservice calls found in the HAR (not logged in, or no screen visited?)")

    os.makedirs(a.out, exist_ok=True)
    if not a.append:                                   # a fresh conversion replaces earlier fixtures
        for f in glob.glob(os.path.join(a.out, "**", "*.json"), recursive=True):
            os.remove(f)
    index, counter = [], collections.Counter()
    for c in raw:
        c["inputs"] = anon.value(c["inputs"], None, f"{c['action']}.in")
        c["data"] = anon.value(c["data"], None, f"{c['action']}.out")
        sig = hashlib.sha1(json.dumps([c["module"], c["action"], c["inputs"], c["data"]], sort_keys=True).encode()).hexdigest()[:8]
        d = os.path.join(a.out, c["module"], c["action"])
        os.makedirs(d, exist_ok=True)
        n = len(glob.glob(os.path.join(d, "*.json"))) + 1
        counter[(c["module"], c["action"])] += 1
        fn = os.path.join(d, f"{n:02d}-{sig}.json")
        json.dump(c, open(fn, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    for f in sorted(glob.glob(os.path.join(a.out, "*", "*", "*.json"))):
        c = json.load(open(f, encoding="utf-8"))
        index.append({"module": c["module"], "action": c["action"], "screen": c["screen"],
                      "file": os.path.relpath(f, a.out), "inputs": list(c["inputs"].keys())})
    json.dump(index, open(os.path.join(a.out, "index.json"), "w", encoding="utf-8"), indent=1)

    groups = collections.defaultdict(list)
    for p, n in sorted(anon.report.items()):
        groups[p[:4]].append(f"- `{p[5:]}` ×{n}")
    mode = "a" if a.append and os.path.exists(os.path.join(a.out, "REVIEW.md")) else "w"
    with open(os.path.join(a.out, "REVIEW.md"), mode, encoding="utf-8") as f:
        if mode == "w":
            f.write("# Fixture review (the user checks this before any commit)\n\nFields left unchanged are listed under "
                    "`kept`: if any holds personal data, add its name to `anonymize` in the rules file and convert again. "
                    "Labels that were replaced but are not personal (status names...) go to `keep`.\n")
        f.write(f"\n# Conversion {datetime.date.today().isoformat()}: {', '.join(os.path.basename(h) for h in a.har)}\n")
        for g, title in (("kept", "Kept as recorded"), ("text", "Fake text (same length)"), ("id  ", "Identifiers remapped"),
                         ("mail", "Emails"), ("num ", "Phone / long numbers"), ("date", "Sensitive dates shifted"), ("img ", "Images removed")):
            if groups.get(g):
                f.write(f"\n## {title}\n" + "\n".join(groups[g]) + "\n")
        if dropped:
            f.write("\n## Dropped (rules `dropInputs`: screen state not needed to match a call; `dropOutputs`: person data a "
                    "fictional mock fills at runtime)\n"
                    + "\n".join(f"- `{k}` ×{n}" for k, n in sorted(dropped.items())) + "\n")
    rv = os.path.join(a.out, "reviewed.json")
    if os.path.exists(rv):
        os.remove(rv)                                  # any conversion needs a new review
    print(f"{sum(counter.values())} new fixture(s) for {len(counter)} action(s) -> {a.out}\n"
          f"next: the USER reads {a.out}/REVIEW.md, then `har_to_fixtures.py review --out {a.out} --by user`; "
          f"delete the raw HAR")


def cmd_review(a):
    if a.by != "user":
        sys.exit("only the user can confirm that the fixtures hold no personal data (--by user)")
    if not os.path.exists(os.path.join(a.out, "index.json")):
        sys.exit(f"{a.out}: no fixtures (run convert first)")
    json.dump({"by": "user", "date": datetime.date.today().isoformat(), "hash": fixtures_hash(a.out), "note": a.note or ""},
              open(os.path.join(a.out, "reviewed.json"), "w", encoding="utf-8"), indent=1)
    print(f"{a.out}: reviewed by the user; any later change to a fixture needs a new review")


def cmd_check(a):
    probs = check_reviewed(a.out)
    for p in probs:
        print(p)
    sys.exit(1 if probs else 0)


def cmd_coverage(a):
    have = set()
    for p in glob.glob(os.path.join(a.out, "*", "*", "*.json")):
        mod, act = p.split(os.sep)[-3], p.split(os.sep)[-2]
        have.add((mod, act))
    build = None
    board = os.path.join(a.board_dir, "board.md")
    if os.path.exists(board):
        build = set()
        for line in open(board, encoding="utf-8"):
            c = [x.strip() for x in line.strip().strip("|").split("|")]
            if len(c) >= 8 and c[5] == "build":
                build.add(c[0])
    md = ["# Fixture coverage", "", "Generated by har_to_fixtures.py coverage (names only). A call without a recording is served by "
          "fictional data (P-MOCKS) and must be listed under \"Decisions to confirm\" in the route spec, or recorded.", "",
          "| Route | calls | recorded | missing (phase) |", "|---|---|---|---|"]
    total = miss_total = 0
    for cj in sorted(glob.glob(os.path.join(a.screens_dir, "*", "analysis", "calls.json"))):
        s = cj.split(os.sep)[-3]
        if build is not None and s not in build:
            continue
        ref = json.load(open(cj, encoding="utf-8"))
        rows = [c for c in ref.get("calls", []) + [x for v in (ref.get("variants") or {}).values() for x in v] if c.get("scope") == "this screen"]
        acts = {}
        for c in rows:
            acts.setdefault((c["module"], c["action"]), c.get("phase", "load"))
        missing = [f"{m}/{x} ({ph})" for (m, x), ph in sorted(acts.items()) if (m, x) not in have]
        total += len(acts); miss_total += len(missing)
        md.append(f"| {s} | {len(acts)} | {len(acts) - len(missing)} | {', '.join(missing) or '-'} |")
    md += ["", f"Total: {total} call(s), {total - miss_total} recorded, {miss_total} missing."]
    out = os.path.join(a.board_dir, "fixture-coverage.md")
    os.makedirs(a.board_dir, exist_ok=True)
    open(out, "w", encoding="utf-8").write("\n".join(md) + "\n")
    print(f"fixture coverage: {total - miss_total}/{total} call(s) recorded → {out}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("convert", help="HAR -> anonymized fixtures + REVIEW.md")
    c.add_argument("--har", action="append", required=True)
    c.add_argument("--out", required=True)
    c.add_argument("--rules", help='JSON: {"keep":[...], "anonymize":[...], "ids":[...], "dropInputs":[...], "dropOutputs":[...]}')
    c.add_argument("--salt-file", default="migration/.raw/salt")
    c.add_argument("--append", action="store_true", help="add to existing fixtures instead of replacing them (same salt!)")
    c.add_argument("--only-actions", help='convert only these actions: "A,B" or a JSON file with a "record" array (mock-scope.json)')
    r = sub.add_parser("review", help="record that the user checked REVIEW.md")
    r.add_argument("--out", required=True); r.add_argument("--by", required=True); r.add_argument("--note")
    k = sub.add_parser("check", help="exit 1 when fixtures are not reviewed or changed since review")
    k.add_argument("--out", required=True)
    v = sub.add_parser("coverage", help="per route: calls of the capture with and without a recording")
    v.add_argument("--out", required=True); v.add_argument("--screens-dir", default="migration/screens"); v.add_argument("--board-dir", default="migration")
    a = ap.parse_args()
    {"convert": cmd_convert, "review": cmd_review, "check": cmd_check, "coverage": cmd_coverage}[a.cmd](a)


if __name__ == "__main__":
    main()
