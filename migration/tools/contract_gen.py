#!/usr/bin/env python3
"""contract_gen.py: generate the API contract of the UBTConnect clone (app/src/api/openapi.yaml, OpenAPI 3.1).

One operation per OutSystems action that a screen in scope (board decision=build) calls:

    POST /api/<Module>/<Owner>/<Action>   data actions and aggregates (owner = the screen or block defining them)
    POST /api/<Module>/<Action>           server and service actions
         body = the action inputs (OutSystems names, wire types)
         200  = { "data": <the action outputs> };  default = components/schemas/Error
                ({ "error": message, "exception": OutSystems exception name, "specificType"?: user exception name },
                 see SERVER_EXCEPTIONS)

<Module>, <Owner> and <Action> are segments of the screenservice path exactly as the runtime calls it (calls.json
`module` / `action`, fixtures, mock-scope.json): module = first segment, action = last segment (e.g.
ActionCS_ShareObject for the server action CS_ShareObject, ServiceAPIGetHouseholdDetails for the service action
GetHouseholdDetails), owner = the segment just before the action (the fixtures' `screen`). When one module has
owners of the same name in different flows, those owners are written <Flow>.<Owner> (listed in the report).
operationId = <Module>.<Owner>.<Action> or <Module>.<Action>. The app calls callAction(module, 'Owner/Action', inputs)
(user decision 2026-10-14: same-named data actions of different blocks are separate, precisely typed endpoints).

Which actions (scope)
  * build screens: `board.py show --decision build`;
  * every call in migration/screens/<S>/analysis/calls.json of a build screen (captured at runtime, incl. app shell);
  * every entry of migration/contract/extra-actions.json (server calls reached only through a module client action);
  * every server call (data action, aggregate, server / service action) compiled into a build screen and its block
    closure: the screen's .mvc.js and every .mvc.js it requires, transitively (define() dependencies), read from the
    newest compiled code (below). migration/survey/screens.json (the source of migration/catalog/actions.md) only
    cross-checks it: calls it does not list are reported ("Call sites newer than the survey"), listed actions without a
    call site too. (Until 2026-10-16 the scope was the survey's per-screen lists and closure filtered by actions.md:
    it missed calls TST added after the survey and depended on actions.md being regenerated after a scope change.)

Evidence (types are never guessed)
  * Compiled code, newest TST copy per file name: route captures (migration/screens/*/analysis/sources/raw), files
    fetched read-only into migration/runtime-sources (knowledge/runtime-sources.md) and producer-module *.model.js in
    migration/contract/sources/raw, the most recently written copy winning; capture/survey-UBTConnect.json (static
    survey of 2026-10-13, all screens and blocks) only for files no later fetch has. TST changed after the survey, and
    a survey .mvc.js read with a newer *.model.js leaves structures unresolved (ScannedUserRec moved modules).
    Parsed constructs:
      - records:     define("<M>.model$<Name>") ... this.attr("Name", "nameAttr", "JsonName", mandatory, isId,
                     OS.DataTypes.DataTypes.<T>, default, ?, <ComplexType>)   (wire key = first argument)
      - lists:       <Name>.itemType = <Ref>  (OS.DataTypes.<T>List for built-in lists)
      - data action: callDataAction("<Name>", "screenservices/...") -> model.variables.<x>DataAct ->
                     <X>DataActRec attributes = outputs; screen VariablesRecord = the screen variables it sends
      - aggregate:   callAggregateWithStartIndexAndClientVars(...) -> <X>AggrRec.RecordListType
      - server/service action: callServerAction("<Name>", "screenservices/...", key, inputs, ...) with
                     inputs = { In: OS.DataConversion.ServerDataConverter.to(v, OS.DataTypes.DataTypes.<T>) } and
                     outputs from registerVariableGroupType(<getVariableGroupType of the .then>) (name, dataType,
                     complexType). Record / RecordList inputs carry no type in the converter: their structure is traced
                     to the argument passed at each call of <x>$ServerAction(...) in the same compiled file (a server
                     action is private to its module): $vars group entries, model.variables, client-action inputs
                     (vars.value.<x>InLocal), outputs of an earlier action call (<x>Var.value.<out> -> $outVars),
                     attribute chains, `new <Type>()` in typeConvertRecord(List) / record-building IIFEs.
  * Captures, as fallback only (structures of producer modules whose model.js was not downloaded, e.g.
    Connect_Services_CS, and actions without compiled evidence): reviewed fixtures app/src/mocks/fixtures/<M>/<A>/*.json
    (EmptyListItem gives the default record of an empty list) first, then migration/screens/<S>/analysis/types.ts.
    The types.ts generator reuses interfaces by name, so only interfaces created while it processed that action are
    used, and an interface that contains itself is ignored. Capture-typed schemas carry x-os-source: capture; they
    cannot tell Long Integer / Decimal / Date from Text (all strings on the wire).
  * Captures also cross-check the compiled types (report: "Cross-check").
  * Nothing found: {} with `x-unknown: true` (counted in the report).

Wire types (evidence: reviewed fixtures, captured shapes, app/src/lib/os-wire.ts; tallied by --check-fixtures)
  Text/Email/PhoneNumber -> string; Integer -> integer; Boolean -> boolean; Long Integer -> string (x-os-type
  LongInteger); Decimal -> string (x-os-type Decimal); Date -> string "YYYY-MM-DD" (1900-01-01 = no value);
  DateTime -> string (x-os-type DateTime; no `format`: the captures show no offset); Time -> string (x-os-type Time);
  BinaryData -> string (x-os-type BinaryData, base64 content: runtime ServerDataConverter); Object -> unknown.
  Items of built-in Decimal / Long Integer lists -> string | number (x-os-wire: sent as strings,
  Decimal list items received as numbers in the captures).
  Record list -> { "List": [items], "EmptyListItem": <default item> }: EmptyListItem is present only when the list is
  empty, so only List is required. Aggregate result -> { "List": <record list>, "Count": integer }.
  Records: every attribute is serialized (both directions), so all are required. Data-action / aggregate requests
  carry the screen variables (screenData.variables): all optional, additionalProperties: true,
  x-os-inputs: screen-variables, x-review: inputs; runtime bookkeeping (_<x>DataFetchStatus) is left out.
  Server-action inputs are all required (OutSystems always sends every input).

Several blocks may define a data action with the same name (e.g. DataActionGetCacheInfo in five CacheControl blocks):
each owner is its own operation. Should call sites of one operation still disagree on the outputs, they become
`oneOf` variants (x-os-block, x-os-paths) and the operation gets x-review: variants (none today).

Extensions per operation: x-os-kind (dataAction | aggregate | serverAction | serviceAPI | clientWrapper: a server
action called through a module-level client action, path screenservices/<Module>/Action<X>), x-os-screens,
x-os-phase (load / plan-step labels from calls.json; [] when never captured), x-os-paths (screenservice paths),
x-os-owner (flow/owner path of a data action or aggregate),
x-os-writes (not a read by the skill's read-only guard rule, readonly_guard.cjs, applied to the wire name),
x-mock-source (recorded when the action is in migration/mock-scope.json `record` and fixtures exist for that owner,
app/src/mocks/fixtures/<Module>/<Action>/*.json field `screen`; else fictional).
YAML: single-quoted scalars, flow collections only when the line fits 120 columns (stable under the app's prettier).

Usage (from the project root):
  python3 migration/tools/contract_gen.py [--out app/src/api/openapi.yaml] [--check-fixtures]
                                          [--report migration/catalog/contract-report.md]
Then: npm --prefix app run gen:api. Output is deterministic (sorted keys and operations, no timestamps).
"""
from __future__ import annotations

import argparse
import bisect
import glob
import json
import os
import re
import subprocess
import sys
from collections import defaultdict

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
SK = os.path.join(ROOT, ".claude", "skills", "outsystems-screen-spec", "scripts")
SURVEY = os.path.join(ROOT, "capture", "survey-UBTConnect.json")
SCREENS_DIR = os.path.join(ROOT, "migration", "screens")
RUNTIME_SOURCES = os.path.join(ROOT, "migration", "runtime-sources")  # files fetched read-only from TST (knowledge/runtime-sources.md)
CONTRACT_SOURCES = os.path.join(ROOT, "migration", "contract", "sources", "raw")  # producer *.model.js fetched from TST
FIXTURES_DIR = os.path.join(ROOT, "app", "src", "mocks", "fixtures")

# read-only guard rule of the skill (readonly_guard.cjs / record_har.cjs)
READ_RE = re.compile(r"^(DataAction|ScreenDataSet|Aggregate)[A-Z0-9_]|^Action(Get|List|Load|Fetch|Search|Find|Read|Count)(?=[A-Z0-9_]|$)")
WRITE_RE = re.compile(
    r"(Save|Create|Update|Delete|Remove|Submit|Send|Set(?![a-z])|Add|Insert|Upsert|Mark|Approve|Reject|Cancel|Confirm|"
    r"Register|Login|Logout|Reset|Change|Assign|Upload|Post|Put|Patch|Sync|Check(In|Out)|Pay|Book|Accept|Invite|Join|"
    r"Leave|Start|Stop|Finish|Complete|Close|Lock|Unlock|Enable|Disable|Toggle|Track|Log(?![a-z])|Increment|Decrement|"
    r"Store|Write|Generate|Process|Execute|Run|Trigger|Notify|Subscribe|Unsubscribe|Archive|Restore|Move|Copy|Import|"
    r"Export|Merge|Link|Unlink|Grant|Revoke|Claim|Redeem|Consume|Ack)")


# Reads whose names miss the guard rule, confirmed as reads by the user (capture plan defaults.allowActions, group
# "reads with non-standard names", 2026-10-14). App-start sync calls and Wrapper_NotificationOpened stay writes.
CONFIRMED_READS = {"ServiceAPIFetchData_CacheableHouseholds", "ServiceAPIFetchData_CacheableMapEntities",
                   "ServiceAPIGetHouseholdDetails", "ServiceAPIGet_UI_CommunityBusinessShareCard",
                   "ServiceAPIGet_UI_UpdateItems_UnreadCount_All", "ActionGet_RuntimeVersion"}


def is_read(name: str) -> bool:
    if name in CONFIRMED_READS:
        return True
    return bool(READ_RE.search(name)) and not (name.startswith("Action") and WRITE_RE.search(name[6:]))


def is_screen_data(action: str) -> bool:
    """Data actions and aggregates: fetched for a screen / block, owned by it."""
    return action.startswith(("DataAction", "ScreenDataSet", "Aggregate"))


def rel(p: str) -> str:
    return os.path.relpath(p, ROOT)


# ------------------------------------------------------------------------------------------------ JS scanning helpers
OPEN = {"(": ")", "[": "]", "{": "}"}


def skip_string(s: str, i: int) -> int:
    q = s[i]
    j = i + 1
    n = len(s)
    while j < n:
        c = s[j]
        if c == "\\":
            j += 2
            continue
        if c == q:
            return j + 1
        j += 1
    return n


def match_bracket(s: str, i: int) -> int:
    """s[i] is ( [ or {; returns the index of its closer (strings and comments skipped)."""
    stack = [OPEN[s[i]]]
    j = i + 1
    n = len(s)
    while j < n:
        c = s[j]
        if c in "\"'":
            j = skip_string(s, j)
            continue
        if c == "/" and j + 1 < n and s[j + 1] == "*":
            k = s.find("*/", j + 2)
            j = n if k < 0 else k + 2
            continue
        if c == "/" and j + 1 < n and s[j + 1] == "/" and (j == 0 or s[j - 1] in " \t\n;{}("):
            k = s.find("\n", j)
            j = n if k < 0 else k
            continue
        if c in OPEN:
            stack.append(OPEN[c])
        elif c in ")]}":
            if not stack or stack.pop() != c:
                return -1
            if not stack:
                return j
        j += 1
    return -1


def split_top(s: str) -> list[str]:
    """Split a JS argument / element list on top-level commas."""
    out, depth, cur, j, n = [], 0, 0, 0, len(s)
    while j < n:
        c = s[j]
        if c in "\"'":
            j = skip_string(s, j)
            continue
        if c == "/" and j + 1 < n and s[j + 1] == "*":
            k = s.find("*/", j + 2)
            j = n if k < 0 else k + 2
            continue
        if c in OPEN:
            depth += 1
        elif c in ")]}":
            depth -= 1
        elif c == "," and depth == 0:
            out.append(s[cur:j].strip())
            cur = j + 1
        j += 1
    tail = s[cur:].strip()
    if tail:
        out.append(tail)
    return out


def js_str(tok: str) -> str | None:
    tok = tok.strip()
    if len(tok) >= 2 and tok[0] == tok[-1] and tok[0] in "\"'":
        return tok[1:-1]
    return None


# ------------------------------------------------------------------------------------------------ compiled sources
class Define:
    __slots__ = ("file", "name", "start", "end", "alias")

    def __init__(self, file, name, start, end, alias):
        self.file, self.name, self.start, self.end, self.alias = file, name, start, end, alias


DEFINE_RE = re.compile(r'define\("([^"]*)",\s*\[([^\]]*)\],\s*function\s*\(([^)]*)\)\s*\{')
CLASS_RE = re.compile(r"var (\w+) = \(function\s*\(_super\)\s*\{")
ATTR_START = "this.attr("
MVC_DEP_RE = re.compile(r"(.+\.mvc)(?:\$\w+)?")  # "<Module>.<Flow>.<Block>.mvc$model" -> that block's .mvc file
CALL_RE = re.compile(r'controller\.(callDataAction|callServerAction|callAggregateWithStartIndexAndClientVars)\(\s*"([^"]+)",\s*"(screenservices/[^"]+)"')
RVGT_RE = re.compile(r'registerVariableGroupType\("([^"]+)",\s*\[')
SA_FUNC_RE = re.compile(r"(\w+\$ServerAction) = function\s*\(([^)]*)\)\s*\{")
PRIMS = {"Text", "Email", "PhoneNumber", "Integer", "LongInteger", "Decimal", "Boolean", "Date", "DateTime", "Time",
         "Currency", "Binary", "Object"}


class Sources:
    def __init__(self):
        self.text: dict[str, str] = {}
        self.origin: dict[str, str] = {}
        # Newest TST compiled code wins (TST is the source of truth): of the copies fetched from TST (route captures,
        # migration/runtime-sources, producer models in migration/contract/sources/raw) the most recently written file
        # is used; the static survey (2026-10-13) only for files no later fetch has. TST changed after the survey (e.g.
        # the Orbit / Assemble modules: ScreenBlock_OrbitLanding gained Handle_ViewPassportDetails, ScannedUserRec moved
        # from Connect2_OrbitMobile_MUI to Connect2_OrbitMobile_BL), and mixing a survey .mvc.js with a newer *.model.js
        # leaves its structures unresolved.
        fetched = glob.glob(os.path.join(SCREENS_DIR, "*", "analysis", "sources", "raw", "*.js")) + \
            glob.glob(os.path.join(RUNTIME_SOURCES, "*.js")) + glob.glob(os.path.join(CONTRACT_SOURCES, "*.js"))
        for p in sorted(fetched, key=lambda p: (-os.path.getmtime(p), p)):
            b = os.path.basename(p)
            if b not in self.text:
                self.text[b] = open(p, encoding="utf-8").read()
                self.origin[b] = rel(p)
        survey = json.load(open(SURVEY))
        norm = lambda t: t.replace("\ufeff", "").replace("\r\n", "\n").strip()  # BOM, line endings
        self.newer_than_survey = sorted(b for b in self.text if b in survey["sources"]
                                        and norm(self.text[b]) != norm(survey["sources"][b]))
        for name, txt in survey["sources"].items():
            if name not in self.text:
                self.text[name] = txt
                self.origin[name] = "capture/survey-UBTConnect.json#" + name
        self.defines: dict[str, list[Define]] = {}
        self.def_starts: dict[str, list[int]] = {}
        self.mvc_deps: dict[str, set[str]] = defaultdict(set)  # .mvc.js file -> the .mvc.js files it requires
        for f in sorted(self.text):
            s = self.text[f]
            ds = []
            for m in DEFINE_RE.finditer(s):
                deps = re.findall(r'"([^"]*)"', m.group(2))
                if f.endswith(".mvc.js"):
                    self.mvc_deps[f].update(m2.group(1) + ".js" for m2 in map(MVC_DEP_RE.fullmatch, deps) if m2)
                params = [x.strip() for x in m.group(3).split(",") if x.strip()]
                alias = {}
                for i, prm in enumerate(params):
                    if i < len(deps):
                        alias[prm] = deps[i]
                ds.append(Define(f, m.group(1), m.start(), len(s), alias))
            for a, b in zip(ds, ds[1:]):
                a.end = b.start
            self.defines[f] = ds
            self.def_starts[f] = [d.start for d in ds]
        self._classes: dict[tuple, dict] = {}
        self.records: dict[str, dict] = {}  # "<Module>.<Name>" -> {"kind": "record"|"list", ...}
        self._index_models()
        self.groups: dict[str, list[tuple]] = {}
        self._index_groups()
        self.calls = []
        for f in sorted(self.text):
            for m in CALL_RE.finditer(self.text[f]):
                self.calls.append({"file": f, "pos": m.start(), "helper": m.group(1), "name": m.group(2),
                                   "path": m.group(3)})

    def mvc_closure(self, f: str) -> set[str]:
        """f and every screen / block file it requires, transitively (define() dependencies on <...>.mvc)."""
        seen, stack = set(), [f]
        while stack:
            x = stack.pop()
            if x not in seen and x in self.text:
                seen.add(x)
                stack.extend(self.mvc_deps.get(x, ()))
        return seen

    # -- defines / aliases
    def define_at(self, f: str, pos: int) -> Define | None:
        i = bisect.bisect_right(self.def_starts[f], pos) - 1
        return self.defines[f][i] if i >= 0 else None

    def resolve_ref(self, f: str, pos: int, expr: str):
        """A complexType / itemType expression -> ("builtin", T) | ("rec", "<Module>.<Name>") | ("local", f, Name)."""
        expr = expr.strip()
        m = re.fullmatch(r"OS\.DataTypes\.(\w+)List", expr)
        if m:
            return ("builtin", m.group(1))
        m = re.fullmatch(r"(\w+)\.(\w+)", expr)
        if m:
            d = self.define_at(f, pos)
            dep = d.alias.get(m.group(1)) if d else None
            if dep and dep.endswith(".model"):
                return ("rec", dep[: -len(".model")] + "." + m.group(2))
            mm = re.fullmatch(r"(\w+)Model", m.group(1))
            if mm:
                return ("rec", mm.group(1) + "." + m.group(2))
            return None
        if re.fullmatch(r"\w+", expr):
            return ("local", f, expr)
        return None

    # -- classes
    def classes_in(self, d: Define) -> dict:
        key = (d.file, d.start)
        if key in self._classes:
            return self._classes[key]
        s = self.text[d.file]
        out = {}
        for m in CLASS_RE.finditer(s, d.start, d.end):
            o = s.index("(", m.start() + len("var " + m.group(1) + " = ") - 1)
            e = match_bracket(s, o)
            if e < 0:
                continue
            base = re.match(r"\)\s*\(([\w.]+)\)", s[e:e + 120])
            out[m.group(1)] = {"name": m.group(1), "start": o, "end": e, "base": base.group(1) if base else ""}
        self._classes[key] = out
        return out

    def parse_attrs(self, f: str, start: int, end: int) -> list[dict]:
        s = self.text[f]
        attrs = []
        i = s.find(ATTR_START, start, end)
        while 0 <= i < end:
            o = i + len(ATTR_START) - 1
            e = match_bracket(s, o)
            if e < 0:
                break
            args = split_top(s[o + 1:e])
            if len(args) >= 6:
                dt = re.fullmatch(r"OS\.DataTypes\.DataTypes\.(\w+)", args[5])
                attrs.append({"name": js_str(args[0]), "attrName": js_str(args[1]), "jsonName": js_str(args[2]),
                              "mandatory": args[3] == "true", "isIdentifier": args[4] == "true",
                              "dataType": dt.group(1) if dt else args[5],
                              "complex": self.resolve_ref(f, o, args[8]) if len(args) >= 9 else None,
                              "pos": o})
            i = s.find(ATTR_START, e, end)
        return attrs

    def class_info(self, f: str, d: Define, cname: str) -> dict | None:
        c = self.classes_in(d).get(cname)
        if not c:
            return None
        s = self.text[f]
        body = s[c["start"]:c["end"]]
        info = {"base": c["base"], "file": f}
        m = re.search(re.escape(cname) + r"\.itemType = ([\w.]+);", body)
        if m:
            info["kind"] = "list"
            info["item"] = self.resolve_ref(f, c["start"], m.group(1))
            return info
        m = re.search(re.escape(cname) + r"\.RecordListType = ([\w.]+);", body)
        if m:
            info["kind"] = "aggregate"
            info["list"] = self.resolve_ref(f, c["start"], m.group(1))
            return info
        info["kind"] = "record"
        info["attrs"] = self.parse_attrs(f, c["start"], c["end"])
        return info

    def _index_models(self):
        for f in sorted(self.text):
            if not f.endswith(".model.js"):
                continue
            for d in self.defines[f]:
                m = re.fullmatch(r"(\w+)\.model\$(\w+)", d.name)
                if not m:
                    continue
                info = self.class_info(f, d, m.group(2))
                if info:
                    info["define"] = d.name
                    self.records[m.group(1) + "." + m.group(2)] = info

    def local_class(self, f: str, cname: str) -> dict | None:
        for d in self.defines[f]:
            if d.name.endswith(".mvc$model"):
                info = self.class_info(f, d, cname)
                if info:
                    info["define"] = d.name
                    return info
        return None

    def variables_record(self, f: str) -> list[dict]:
        info = self.local_class(f, "VariablesRecord")
        return info["attrs"] if info and info.get("kind") == "record" else []

    # -- variable groups (server action outputs, client action $vars)
    def _index_groups(self):
        for f in sorted(self.text):
            s = self.text[f]
            for m in RVGT_RE.finditer(s):
                o = m.end() - 1
                e = match_bracket(s, o)
                if e < 0:
                    continue
                entries = []
                for obj in split_top(s[o + 1:e]):
                    nm = re.search(r'\bname:\s*"([^"]*)"', obj)
                    an = re.search(r'\battrName:\s*"([^"]*)"', obj)
                    dt = re.search(r"\bdataType:\s*OS\.DataTypes\.DataTypes\.(\w+)", obj)
                    ct = re.search(r"\bcomplexType:\s*([\w.]+)", obj)
                    if nm and an:
                        entries.append({"name": nm.group(1), "attrName": an.group(1),
                                        "dataType": dt.group(1) if dt else "?",
                                        "complex": self.resolve_ref(f, o, ct.group(1)) if ct else None})
                self.groups.setdefault(m.group(1), [])
                if not self.groups[m.group(1)]:
                    self.groups[m.group(1)] = [(f, entries)]


# ------------------------------------------------------------------------------------------------ YAML writer
PLAIN_KEY = re.compile(r"^[A-Za-z_][A-Za-z0-9_.\-]*$")
YAML_RESERVED = {"y", "n", "yes", "no", "on", "off", "true", "false", "null", "~"}


def yquote(s: str) -> str:
    """Quoted YAML string as prettier prints it with singleQuote: true (app/.prettierrc.json)."""
    if re.search(r"[\x00-\x1f\x7f]", s) or ("'" in s and '"' not in s):
        return json.dumps(s, ensure_ascii=False)
    return "'" + s.replace("'", "''") + "'"


def ykey(k: str) -> str:
    return k if PLAIN_KEY.match(k) and k.lower() not in YAML_RESERVED else yquote(k)


def yscalar(v) -> str:
    if isinstance(v, str):
        return yquote(v)
    return json.dumps(v)


def is_leafy(v) -> bool:
    if isinstance(v, dict):
        return all(not isinstance(x, (dict, list)) for x in v.values())
    if isinstance(v, list):
        return all(not isinstance(x, (dict, list)) for x in v)
    return True


def flow(v) -> str:
    if isinstance(v, dict):
        return "{ " + ", ".join(f"{ykey(k)}: {yscalar(v[k])}" for k in sorted(v)) + " }" if v else "{}"
    if isinstance(v, list):
        return "[" + ", ".join(yscalar(x) for x in v) + "]"
    return yscalar(v)


PRINT_WIDTH = 120  # app/.prettierrc.json printWidth: flow collections only when the whole line fits (prettier-stable)


def to_yaml(v, indent: int = 0) -> list[str]:
    pad = "  " * indent
    lines = []
    if isinstance(v, dict):
        for k in sorted(v):
            x = v[k]
            if isinstance(x, (dict, list)) and x:
                one = f"{pad}{ykey(k)}: {flow(x)}"
                if is_leafy(x) and len(one) <= PRINT_WIDTH:
                    lines.append(one)
                else:
                    lines.append(f"{pad}{ykey(k)}:")
                    lines.extend(to_yaml(x, indent + 1))
            else:
                lines.append(f"{pad}{ykey(k)}: {flow(x) if isinstance(x, (dict, list)) else yscalar(x)}")
    elif isinstance(v, list):
        for x in v:
            if isinstance(x, dict) and x:
                one = f"{pad}- {flow(x)}"
                if is_leafy(x) and len(one) <= PRINT_WIDTH:
                    lines.append(one)
                else:
                    sub = to_yaml(x, indent + 1)
                    lines.append(f"{pad}- " + sub[0].lstrip())
                    lines.extend(sub[1:])
            elif isinstance(x, list) and x:
                lines.append(f"{pad}-")
                lines.extend(to_yaml(x, indent + 1))
            else:
                lines.append(f"{pad}- {flow(x) if isinstance(x, (dict, list)) else yscalar(x)}")
    return lines


# ------------------------------------------------------------------------------------------------ captures
def sanitize(s: str) -> str:
    return re.sub(r"[^A-Za-z0-9_]", "_", s)


class TsFile:
    """types.ts of one screen: interfaces in creation order; Response interfaces own the ones created before them."""

    LINE = re.compile(r"^\s+(\w+)\??:\s*(.*?);\s*$")

    def __init__(self, path: str):
        self.path = path
        self.ifaces: dict[str, dict] = {}
        self.order: list[str] = []
        cur = None
        for line in open(path, encoding="utf-8"):
            m = re.match(r"^export interface (\w+) \{", line)
            if m:
                cur = m.group(1)
                self.ifaces[cur] = {}
                self.order.append(cur)
                continue
            if line.startswith("}"):
                cur = None
                continue
            if cur:
                mm = self.LINE.match(line)
                if mm:
                    self.ifaces[cur][mm.group(1)] = mm.group(2)

    def owned(self, response: str, responses: set[str]) -> set[str]:
        """Interfaces created while the generator processed `response` (between the previous action response and it)."""
        if response not in self.ifaces:
            return set()
        i = self.order.index(response)
        j = i - 1
        while j >= 0 and self.order[j] not in responses:
            j -= 1
        return set(self.order[j + 1:i + 1])


def ts_expr_sample(ts: TsFile, owned: set[str], expr: str, visiting: frozenset = frozenset()):
    """types.ts type expression -> sample node: ("prim", t) | ("obj", {k: node}) | ("list", node) | None.
    An interface that contains itself is a name reuse of the types.ts generator: unreliable."""
    comments = re.findall(r"/\*(.*?)\*/", expr)
    base = re.sub(r"/\*.*?\*/", "", expr).strip()
    is_arr = base.endswith("[]")
    if is_arr:
        base = base[:-2]
    if base == "unknown" or base == "null":
        node = None
    elif base in ("string", "number", "boolean"):
        node = ("prim", {"string": "string", "number": "number", "boolean": "boolean"}[base])
    elif base in ts.ifaces:
        if base not in owned or base in visiting:
            return ("unreliable",)
        props = {k: ts_expr_sample(ts, owned, v, visiting | {base}) for k, v in ts.ifaces[base].items()}
        if set(props) == {"List", "EmptyListItem"}:
            # an empty wire list { List: [], EmptyListItem: <default item> }: the item type is EmptyListItem's
            lst = props["List"]
            node = ("list", lst[1] if isinstance(lst, tuple) and lst[0] == "list" and lst[1] else props["EmptyListItem"])
        else:
            node = ("obj", props)
    else:
        node = None
    if is_arr or any("wire: { List" in c for c in comments):
        return ("list", node) if is_arr else node
    return node


# ------------------------------------------------------------------------------------------------ generator
class Gen:
    def __init__(self):
        self.src = Sources()
        self.schemas: dict[str, dict] = {}
        self.schema_evidence: dict[str, set] = defaultdict(set)
        self.missing: dict[str, list] = defaultdict(list)  # record key -> [(owner, relative path)]
        self.uses: dict[str, set] = defaultdict(set)  # schema name -> {(owner, relative path)}
        self.notes: list[str] = []
        self.wire_obs: dict[str, dict] = defaultdict(lambda: defaultdict(int))

    # -- scope ------------------------------------------------------------------------------------------------
    def build_screens(self) -> list[str]:
        out = subprocess.run([sys.executable, os.path.join(SK, "board.py"), "show", "--decision", "build"],
                             capture_output=True, text=True, cwd=ROOT, check=True).stdout
        rows = [l.split("|")[0].strip() for l in out.splitlines()[1:] if "|" in l]
        return sorted(r for r in rows if r)

    def catalog_names(self) -> set[str]:
        names = set()
        for line in open(os.path.join(ROOT, "migration", "catalog", "actions.md"), encoding="utf-8"):
            m = re.match(r"^\|\s*`([^`]+)`\s*\|", line)
            if m:
                names.add(m.group(1))
        return names

    def collect(self):
        self.screens = self.build_screens()
        mock = json.load(open(os.path.join(ROOT, "migration", "mock-scope.json")))
        self.recorded = set(mock.get("record", []))
        survey_screens = {v["screen"]: v for v in json.load(open(os.path.join(ROOT, "migration", "survey", "screens.json")))["screens"].values()}
        catalog = self.catalog_names()
        ops: dict[tuple, dict] = {}

        def op(module, action, path):
            # data actions / aggregates are owned by the screen or block that defines them (path segment before the
            # action); server and service actions are module-wide
            segs = path.split("/")
            owner_path = "/".join(segs[2:-1]) if is_screen_data(action) else ""
            k = (module, owner_path, action)
            if k not in ops:
                ops[k] = {"module": module, "action": action, "owner_path": owner_path,
                          "owner_name": owner_path.split("/")[-1] if owner_path else "", "screens": set(),
                          "phases": set(), "paths": set(), "sites": {}, "captured_inputs": set(),
                          "calls_by_screen": defaultdict(set), "catalog_names": set()}
            return ops[k]

        sites_by_path = defaultdict(list)
        for c in self.src.calls:
            sites_by_path[c["path"]].append(c)
        self.unmatched_catalog = []
        self.not_in_survey: set[tuple] = set()
        for s in self.screens:
            p = os.path.join(SCREENS_DIR, s, "analysis", "calls.json")
            if os.path.exists(p):
                for c in json.load(open(p))["calls"]:
                    path = "screenservices/" + c["path"].split("screenservices/", 1)[-1]
                    o = op(c["module"], c["action"], path)
                    o["screens"].add(s)
                    o["phases"].add(c.get("phase") or "load")
                    o["paths"].add(path)
                    o["calls_by_screen"][s].add(path)
                    if c.get("inputNames") is not None:
                        o["captured_inputs"].add(tuple(c["inputNames"]))
                    for site in sites_by_path.get(path, []):
                        o["sites"][(site["file"], site["pos"])] = site
            sv = survey_screens.get(s)
            if not sv:
                self.notes.append(f"{s}: not in migration/survey/screens.json (catalog actions not resolved)")
                continue
            # every server call compiled into the screen and its block closure (the newest compiled code, see
            # Sources); the survey's per-screen lists and closure only cross-check it, since TST changed after the survey
            files = self.src.mvc_closure(sv["file"])
            declared = set(sv.get("dataActions", []) + sv.get("aggregates", []) + sv.get("serverActions", []))
            called = set()
            for site in self.src.calls:
                if site["file"] not in files:
                    continue
                seg = site["path"].split("/")
                o = op(seg[1], seg[-1], site["path"])
                o["screens"].add(s)
                o["paths"].add(site["path"])
                if site["name"] in catalog:
                    o["catalog_names"].add(site["name"])
                o["sites"][(site["file"], site["pos"])] = site
                called.add(site["name"])
                if site["name"] not in declared:
                    self.not_in_survey.add((s, site["name"]))
            self.unmatched_catalog += [(s, n) for n in sorted(declared - called) if n in catalog]
        # extra operations (migration/contract/extra-actions.json): server calls a build screen reaches only through a
        # module client action that no capture recorded and no survey closure lists (e.g. a block's cache action);
        # each entry names the screenservice path, the screens and the evidence; types still come from compiled code
        extra = os.path.join(ROOT, "migration", "contract", "extra-actions.json")
        for x in (json.load(open(extra, encoding="utf-8")) if os.path.exists(extra) else []):
            seg = x["path"].split("/")
            sites = sites_by_path.get(x["path"], [])
            if not sites:
                self.notes.append(f"extra action {x['path']}: no compiled call site found (add its source to migration/contract/sources/raw)")
                continue
            o = op(seg[1], seg[-1], x["path"])
            for s in x.get("screens", []):
                if s in self.screens:
                    o["screens"].add(s)
            o["paths"].add(x["path"])
            for site in sites:
                o["sites"][(site["file"], site["pos"])] = site
        # owner label: the owner name; <Flow>.<Owner> when one module has owners of that name in different flows
        by_name = defaultdict(set)
        for o in ops.values():
            if o["owner_path"]:
                by_name[(o["module"], o["owner_name"])].add(o["owner_path"])
        self.flow_prefixed = sorted(f"{m}: {', '.join(sorted(x.replace('/', '.') for x in paths))}"
                                    for (m, _), paths in by_name.items() if len(paths) > 1)
        self.ops = {}
        for o in ops.values():
            if o["owner_path"]:
                clash = len(by_name[(o["module"], o["owner_name"])]) > 1
                o["owner"] = o["owner_path"].replace("/", ".") if clash else o["owner_name"]
            else:
                o["owner"] = ""
            self.ops[(o["module"], o["owner"], o["action"])] = o

    @staticmethod
    def api_path(key: tuple) -> str:
        return "/api/" + "/".join(x for x in key if x)

    @staticmethod
    def op_id(key: tuple) -> str:
        return ".".join(x for x in key if x)

    def route_of_fixture(self, module: str, action: str, screen) -> str | None:
        """API path of the operation a fixture belongs to (its owner = the fixture's `screen` for data actions)."""
        if is_screen_data(action):
            keys = [k for k, o in self.ops.items() if k[0] == module and k[2] == action and o["owner_name"] == screen]
        else:
            keys = [k for k in self.ops if k == (module, "", action)]
        return self.api_path(keys[0]) if len(keys) == 1 else None

    def owner_fixtures(self, op: dict) -> list:
        return [(p, fx) for p, fx in self.fixtures(op["module"], op["action"])
                if not op["owner_name"] or fx.get("screen") == op["owner_name"]]

    # -- types ------------------------------------------------------------------------------------------------
    def prim(self, t: str):
        if t in ("Text", "Email", "PhoneNumber"):
            return {"type": "string"}
        if t == "Integer":
            return {"type": "integer"}
        if t == "Boolean":
            return {"type": "boolean"}
        if t == "LongInteger":
            return {"type": "string", "x-os-type": "LongInteger"}
        if t == "Decimal":
            return {"type": "string", "x-os-type": "Decimal"}
        if t == "Date":
            return {"type": "string", "format": "date", "x-os-type": "Date"}
        if t == "DateTime":
            return {"type": "string", "x-os-type": "DateTime"}
        if t == "Time":
            return {"type": "string", "x-os-type": "Time"}
        if t == "BinaryData":
            # base64 content string both ways (runtime OutSystems.js ServerDataConverter: to = typeof e == "string" ?
            # e : e.content; from = new BinaryData(e)); records may add "_<Name>URL", not modelled
            return {"type": "string", "x-os-type": "BinaryData"}
        return self.unknown(f"OutSystems type {t}")

    def list_item(self, t: str) -> dict:
        """Item of a built-in list (OS.DataTypes.<T>List). Decimal list items reach the client as JSON numbers
        (ServiceAPIFetchData_CacheableHouseholds capture: Latlng, iconSize ...) but are sent as strings (fixture
        inputs: EmptyListItem "0"); Long Integer list items are sent as strings and were never received in a capture.
        Both are typed string | number, with the evidence in x-os-wire."""
        if t in ("Decimal", "LongInteger"):
            return {"type": ["string", "number"], "x-os-type": t,
                    "x-os-wire": "item of a built-in list: string when sent (fixture inputs); " +
                                 ("number when received (captured ServiceAPIFetchData_CacheableHouseholds)" if t == "Decimal"
                                  else "never captured when received")}
        return self.prim(t)

    @staticmethod
    def unknown(why: str) -> dict:
        return {"x-unknown": True, "description": why}

    @staticmethod
    def list_of(item: dict) -> dict:
        return {"type": "object", "required": ["List"], "x-os-list": True,
                "properties": {"List": {"type": "array", "items": item}, "EmptyListItem": item}}

    def schema_name(self, key: str) -> str:
        mod, name = key.split(".", 1)
        if name.endswith("Rec") and not name.endswith("Record"):
            name = name[:-3]
        return sanitize(mod) + "__" + sanitize(name)

    def ref(self, name: str) -> dict:
        return {"$ref": "#/components/schemas/" + name}

    def from_ref(self, r, ctx: dict, path: tuple) -> dict:
        """complexType ref -> schema. ctx["owner"]: ("op", op_key, variant_path, side) or ("schema", name); path is
        relative to the owner (used to find capture samples for structures missing from the compiled code)."""
        if r is None:
            return self.unknown("record type not found in the compiled code")
        if r[0] == "builtin":
            return self.list_of(self.list_item(r[1]))
        if r[0] == "prim":
            return self.prim(r[1])
        if r[0] == "local":
            info = self.src.local_class(r[1], r[2])
            if not info:
                return self.unknown(f"class {r[2]} not found in {r[1]}")
            return self.from_info(info, None, ctx, path)
        key = r[1]
        info = self.src.records.get(key)
        if not info:
            self.missing[key].append((ctx["owner"], path))
            return {"$missing": key}
        return self.from_info(info, key, ctx, path)

    def from_info(self, info: dict, key: str | None, ctx: dict, path: tuple) -> dict:
        if info["kind"] == "list":
            return self.list_of(self.from_ref(info["item"], ctx, path + ("[]",)))
        if info["kind"] == "aggregate":
            return {"type": "object", "required": ["Count", "List"],
                    "properties": {"List": self.from_ref(info["list"], ctx, path + ("List",)),
                                   "Count": {"type": "integer"}}}
        if key is None:
            return self.record_schema(info, ctx, path)
        name = self.schema_name(key)
        self.schema_evidence[name].add(self.src.origin[info["file"]])
        self.uses[name].add((ctx["owner"], path))
        if name not in self.schemas:
            self.schemas[name] = {}
            sch = self.record_schema(info, {"owner": ("schema", name)}, ())
            sch["x-os-structure"] = key
            self.schemas[name] = sch
        return self.ref(name)

    def record_schema(self, info: dict, ctx: dict, path: tuple) -> dict:
        """Every attribute of a record is serialized on the wire (both directions), so all are required."""
        props = {}
        for a in info["attrs"]:
            nm = a["name"]
            if a["dataType"] in ("Record", "RecordList"):
                props[nm] = self.from_ref(a["complex"], ctx, path + (nm,))
            else:
                props[nm] = self.prim(a["dataType"])
        out = {"type": "object", "properties": props}
        if props:
            out["required"] = sorted(props)
        return out

    def abs_contexts(self, owner, path: tuple, seen=None) -> list:
        """Expand a (owner, relative path) to [(op_key, variant, absolute path, side)] through schema uses."""
        seen = set() if seen is None else seen
        if owner[0] == "op":
            return [(owner[1], owner[2], path, owner[3])]
        if owner[1] in seen:
            return []
        seen = seen | {owner[1]}
        out = []
        for (o2, p2) in sorted(self.uses.get(owner[1], ()), key=lambda x: json.dumps(x)):
            out += self.abs_contexts(o2, p2 + path, seen)
        return out

    def type_schema(self, data_type: str, complex_ref, ctx: dict, path: tuple) -> dict:
        if data_type in ("Record", "RecordList"):
            if complex_ref is None:
                return self.unknown(f"{data_type} without a structure in the compiled code")
            return self.from_ref(complex_ref, ctx, path)
        return self.prim(data_type)

    # -- per-site extraction ------------------------------------------------------------------------------------
    def data_site(self, site: dict, ctx: dict) -> dict:
        f, s = site["file"], self.src.text[site["file"]]
        m = re.compile(r"model\.variables\.(\w+)\.replaceWith").search(s, site["pos"], site["pos"] + 1500)
        res = {"evidence": {self.src.origin[f]}, "out": None, "vars": {}}
        if not m:
            res["out"] = self.unknown("data action result variable not found")
            return res
        vrec = self.src.variables_record(f)
        target = next((a for a in vrec if a["attrName"] == m.group(1)), None)
        if not target or not target["complex"]:
            res["out"] = self.unknown("data action result type not found")
        else:
            res["out"] = self.from_ref(target["complex"], ctx, ())
        ictx = {"owner": ("op", ctx["owner"][1], ctx["owner"][2], "in")}
        for a in vrec:
            an = a["attrName"] or ""
            if an.endswith("DataAct") or an.endswith("Aggr") or re.fullmatch(r"_\w+DataFetchStatus", a["name"] or ""):
                continue
            res["vars"][a["name"]] = self.type_schema(a["dataType"], a["complex"], ictx, (a["name"],))
        return res

    def enclosing_sa(self, f: str, pos: int):
        s = self.src.text[f]
        best = None
        for m in SA_FUNC_RE.finditer(s, max(0, pos - 20000), pos):
            best = m
        if not best:
            return None
        body_end = match_bracket(s, best.end() - 1)
        if body_end < pos:
            return None
        return best, body_end

    def attr_of(self, base, attr_name: str):
        """Type of attribute <attr_name> (by attrName) of a resolved record type."""
        info = None
        if base and base[0] == "rec":
            info = self.src.records.get(base[1])
        elif base and base[0] == "local":
            info = self.src.local_class(base[1], base[2])
        for a in (info or {}).get("attrs", []):
            if a["attrName"] == attr_name:
                return a["complex"] or ("prim", a["dataType"])
        return None

    def output_group_of(self, f: str, method: str) -> str | None:
        """Output variable group of a client action (<m>$Action: $outVars) or server action (<m>$ServerAction)."""
        files = [f] + [g for g in sorted(self.src.text) if g != f]
        for g in files:
            t = self.src.text[g]
            m = re.search(r"\." + re.escape(method) + r" = function\s*\([^)]*\)\s*\{", t)
            if not m:
                continue
            e = match_bracket(t, m.end() - 1)
            body = t[m.end():e]
            if method.endswith("$ServerAction"):
                cs = body.find("callServerAction(")
                mm = re.search(r'getVariableGroupType\("([^"]+)"\)', body[cs:]) if cs >= 0 else None
            else:
                mm = re.search(r'getVariableGroupType\("([^"]+\$outVars)"\)', body)
            return mm.group(1) if mm else None
        return None

    def resolve_arg(self, f: str, pos: int, expr: str, depth: int = 0):
        """Type ref of an argument expression at a call site, or None (never a guess: only explicit constructs)."""
        s = self.src.text[f]
        expr = expr.strip()
        expr = re.sub(r"\.clone\(\)$", "", expr)
        if depth > 6:
            return None
        # OS.DataConversion.JSConversions.typeConvertRecordList(src, new <Type>(), ...) / typeConvertRecord(...)
        m = re.match(r"OS\.DataConversion\.JSConversions\.typeConvertRecord(?:List)?\(.*?,\s*new ([\w.]+)\(\)", expr, re.S)
        if m:
            return self.src.resolve_ref(f, pos, m.group(1))
        # function () { var rec = new <Type>(); ...; return rec; }()
        m = re.match(r"function\s*\(\)\s*\{\s*var (\w+) = new ([\w.]+)\(\);.*return \1;\s*\}\(\)$", expr, re.S)
        if m:
            return self.src.resolve_ref(f, pos, m.group(2))
        m = re.fullmatch(r"vars\.value\.(\w+)", expr)
        if m:
            g = None
            for mm in re.finditer(r'getVariableGroupType\("([^"]+\$vars)"\)', s[max(0, pos - 60000):pos]):
                g = mm.group(1)
            for _, entries in self.src.groups.get(g, []):
                for e in entries:
                    if e["attrName"] == m.group(1):
                        return e["complex"] or ("prim", e["dataType"])
            return None
        m = re.fullmatch(r"model\.variables\.(\w+)", expr)
        if m:
            for a in self.src.variables_record(f):
                if a["attrName"] == m.group(1):
                    return a["complex"] or ("prim", a["dataType"])
            return None
        # <x>Var.value.<out>: result of a client / server action called earlier in the same function
        m = re.fullmatch(r"(\w+Var)\.value\.(\w+)", expr)
        if m:
            var, out = m.group(1), m.group(2)
            last = None
            for mm in re.finditer(r"\b" + re.escape(var) + r"\.value = ", s[max(0, pos - 60000):pos]):
                last = max(0, pos - 60000) + mm.end()
            if last is None:
                return None
            method = None
            sync = re.match(r"[\w.]+\.(\w+\$(?:Action|ServerAction))\(", s[last:last + 300])
            if sync:
                method = sync.group(1)
            elif s.startswith("value;", last):
                for mm in re.finditer(r"\.(\w+\$(?:Action|ServerAction))\(", s[max(0, last - 8000):last]):
                    method = mm.group(1)
            if not method:
                return None
            g = self.output_group_of(f, method)
            for _, entries in self.src.groups.get(g, []):
                for e in entries:
                    if e["attrName"] == out:
                        return e["complex"] or ("prim", e["dataType"])
            return None
        m = re.fullmatch(r"(\w+In)", expr)
        if m and depth == 0:
            return self.resolve_arg(f, pos, f"vars.value.{m.group(1)}Local", 1)
        m = re.fullmatch(r"(.+)\.(\w+)", expr, re.S)
        if m and not expr.startswith("OS."):
            base = self.resolve_arg(f, pos, m.group(1), depth + 1)
            return self.attr_of(base, m.group(2))
        return None

    def server_site(self, site: dict, ctx: dict) -> dict:
        f, s = site["file"], self.src.text[site["file"]]
        res = {"evidence": {self.src.origin[f]}, "out": None, "in": {}}
        enc = self.enclosing_sa(f, site["pos"])
        if not enc:
            res["out"] = self.unknown("server action wrapper not found")
            res["in"] = None
            return res
        fm, body_end = enc
        method = fm.group(1)
        params = [x.strip() for x in fm.group(2).split(",") if x.strip()]
        body = s[fm.end():body_end]
        im = re.search(r"var inputs = \{", body)
        call_o = s.index("(", site["pos"])
        call_e = match_bracket(s, call_o)
        args = split_top(s[call_o + 1:call_e])
        inputs = []
        if im and len(args) > 3 and args[3] == "inputs":
            o = fm.end() + im.end() - 1
            e = match_bracket(s, o)
            for ent in split_top(s[o + 1:e]):
                mm = re.fullmatch(r'"?(\w+)"?\s*:\s*OS\.DataConversion\.ServerDataConverter\.to\((.*),\s*OS\.DataTypes\.DataTypes\.(\w+)\)', ent, re.S)
                if mm:
                    inputs.append((mm.group(1), mm.group(2).strip(), mm.group(3)))
                else:
                    inputs.append((ent.split(":")[0].strip().strip('"'), None, "?"))
        ictx = {"owner": ("op", ctx["owner"][1], ctx["owner"][2], "in")}
        for name, argexpr, dt in inputs:
            if dt in ("Record", "RecordList"):
                ref = None
                refs = set()
                if argexpr in params:
                    k = params.index(argexpr)
                    # a server action is private to its module: its callers are in the same compiled file
                    for cm in re.finditer(r"\." + re.escape(method) + r"\(", s):
                        if fm.start() <= cm.start() < fm.end():
                            continue
                        o = cm.end() - 1
                        e = match_bracket(s, o)
                        cargs = split_top(s[o + 1:e])
                        if k < len(cargs):
                            refs.add(json.dumps(self.resolve_arg(f, cm.start(), cargs[k])))
                resolved = [json.loads(x) for x in refs if x != "null"]
                if len(resolved) == 1 and resolved[0][0] != "prim":
                    ref = tuple(resolved[0])
                if ref:
                    res["in"][name] = self.from_ref(ref, ictx, (name,))
                else:
                    res["in"][name] = {"$unresolved_input": name, "dataType": dt}
            else:
                res["in"][name] = self.prim(dt)
        mm = re.compile(r'getVariableGroupType\("([^"]+)"\)').search(s, call_e, body_end)
        if not mm:
            res["out"] = {"type": "object", "properties": {}}
            return res
        groups = self.src.groups.get(mm.group(1), [])
        if not groups:
            res["out"] = self.unknown(f"output group {mm.group(1)} not registered")
            return res
        props, req = {}, []
        for e in groups[0][1]:
            props[e["name"]] = self.type_schema(e["dataType"], e["complex"], ctx, (e["name"],))
            req.append(e["name"])
        res["out"] = {"type": "object", "properties": props, "required": sorted(req)} if req else {"type": "object", "properties": {}}
        return res

    # -- captures -----------------------------------------------------------------------------------------------
    def fixtures(self, module: str, action: str) -> list[tuple[str, dict]]:
        out = []
        for p in sorted(glob.glob(os.path.join(FIXTURES_DIR, module, action, "*.json"))):
            out.append((p, json.load(open(p))))
        return out

    def ts_response(self, op: dict, variant_paths: set):
        """[(TsFile, response iface, owned)] for the screens whose types.ts describes this op (and variant path)."""
        out = []
        stripped = re.sub(r"^(DataAction|Action)", "", op["action"]) + "Response"
        for s in sorted(op["calls_by_screen"]):
            cj = os.path.join(SCREENS_DIR, s, "analysis", "calls.json")
            tp = os.path.join(SCREENS_DIR, s, "analysis", "types.ts")
            if not (os.path.exists(cj) and os.path.exists(tp)):
                continue
            calls = json.load(open(cj))["calls"]
            mine = [c for c in calls if c["action"] == op["action"]]
            first = ([c for c in mine if c.get("scope") == "this screen"] + [c for c in mine if c.get("scope") != "this screen"])
            if not first:
                continue
            path = "screenservices/" + first[0]["path"].split("screenservices/", 1)[-1]
            if variant_paths and path not in variant_paths:
                continue
            ts = TsFile(tp)
            responses = {re.sub(r"\W", "", re.sub(r"^(DataAction|Action)", "", c["action"]) + "Response") for c in calls}
            if stripped in ts.ifaces:
                out.append((ts, stripped, ts.owned(stripped, responses)))
        return out

    @staticmethod
    def walk_json(v, path):
        if not path:
            return [v]
        step, rest = path[0], path[1:]
        out = []
        if step == "[]":
            if isinstance(v, dict) and "List" in v:
                items = list(v.get("List") or [])
                if "EmptyListItem" in v:
                    items.append(v["EmptyListItem"])
                for x in items:
                    out += Gen.walk_json(x, rest)
            elif isinstance(v, list):
                for x in v:
                    out += Gen.walk_json(x, rest)
        elif isinstance(v, dict) and step in v:
            out += Gen.walk_json(v[step], rest)
        return out

    @staticmethod
    def walk_ts(node, path):
        if node is None or node == ("unreliable",):
            return []
        if not path:
            return [node]
        step, rest = path[0], path[1:]
        if step == "[]":
            return Gen.walk_ts(node[1], rest) if node[0] == "list" else []
        if node[0] == "obj" and step in node[1]:
            return Gen.walk_ts(node[1][step], rest)
        return []

    def schema_from_json(self, samples: list) -> dict:
        samples = [x for x in samples if x is not None]
        if not samples:
            return self.unknown("only null / empty values in the captures")
        if all(isinstance(x, bool) for x in samples):
            return {"type": "boolean"}
        if all(isinstance(x, (int, float)) and not isinstance(x, bool) for x in samples):
            return {"type": "integer"} if all(float(x).is_integer() for x in samples) else {"type": "number"}
        if all(isinstance(x, str) for x in samples):
            return {"type": "string"}
        if all(isinstance(x, dict) and "List" in x for x in samples):
            items = []
            for x in samples:
                items += list(x.get("List") or [])
                if "EmptyListItem" in x:
                    items.append(x["EmptyListItem"])
            return self.list_of(self.schema_from_json(items) if items else self.unknown("empty list in the captures"))
        if all(isinstance(x, list) for x in samples):
            items = [i for x in samples for i in x]
            return self.list_of(self.schema_from_json(items) if items else self.unknown("empty list in the captures"))
        if all(isinstance(x, dict) for x in samples):
            keys = sorted({k for x in samples for k in x})
            props = {k: self.schema_from_json([x[k] for x in samples if k in x]) for k in keys}
            req = [k for k in keys if all(k in x for x in samples)]
            out = {"type": "object", "properties": props}
            if req:
                out["required"] = req
            return out
        return self.unknown("mixed value types in the captures")

    def schema_from_ts(self, nodes: list) -> dict:
        nodes = [n for n in nodes if n is not None and n != ("unreliable",)]
        if not nodes:
            return self.unknown("not determinable from the captures")
        n = nodes[0]
        if n[0] == "prim":
            return {"type": n[1]}
        if n[0] == "list":
            inner = [x[1] for x in nodes if x[0] == "list"]
            return self.list_of(self.schema_from_ts(inner) if any(inner) else self.unknown("empty list in the captures"))
        if n[0] == "obj":
            objs = [x[1] for x in nodes if x[0] == "obj"]
            keys = sorted({k for o in objs for k in o})
            props = {k: self.schema_from_ts([o.get(k) for o in objs if k in o]) for k in keys}
            req = [k for k in keys if all(k in o for o in objs)]
            out = {"type": "object", "properties": props}
            if req:
                out["required"] = req
            return out
        return self.unknown("not determinable from the captures")

    def capture_samples(self, op: dict, variant: str | None, path: tuple, side: str):
        """JSON samples and TS nodes at `path` of an op's captured output (or fixture inputs)."""
        js, tsn, ev = [], [], set()
        block = variant.split("/")[-2] if variant and variant.count("/") >= 3 else (op["owner_name"] or None)
        for p, fx in self.fixtures(op["module"], op["action"]):
            if block and fx.get("screen") not in (None, block):
                continue
            root = fx.get("data") if side == "out" else fx.get("inputs")
            got = self.walk_json(root, list(path))
            if got:
                js += got
                ev.add(rel(p))
        if side == "out":
            for ts, resp, owned in self.ts_response(op, {variant} if variant else set(op["paths"])):
                rootnode = ("obj", {k: ts_expr_sample(ts, owned, v, frozenset({resp})) for k, v in ts.ifaces[resp].items()})
                got = self.walk_ts(rootnode, list(path))
                if got:
                    tsn += got
                    ev.add(rel(ts.path))
        return js, tsn, ev

    # -- operations ----------------------------------------------------------------------------------------------
    def kind(self, op: dict) -> str:
        a = op["action"]
        if a.startswith("DataAction"):
            return "dataAction"
        if a.startswith("ScreenDataSet") or a.startswith("Aggregate"):
            return "aggregate"
        if a.startswith("ServiceAPI"):
            return "serviceAPI"
        if any(p.count("/") == 2 for p in op["paths"]):
            return "clientWrapper"
        return "serverAction"

    def build(self):
        self.collect()
        self.opdata = {}
        for key in sorted(self.ops):
            op = self.ops[key]
            k = self.kind(op)
            sites = [op["sites"][x] for x in sorted(op["sites"])]
            variants = {}
            evidence = set()
            for site in sites:
                ctx = {"owner": ("op", key, site["path"], "out")}
                if site["helper"] == "callServerAction":
                    r = self.server_site(site, ctx)
                else:
                    r = self.data_site(site, ctx)
                evidence |= r["evidence"]
                variants.setdefault(site["path"], []).append(r)
            self.opdata[key] = {"kind": k, "variants": variants, "evidence": evidence}
        self.resolve_missing()
        self.make_paths()

    def resolve_missing(self):
        """Producer-module structures absent from the downloaded code: build them from the captures."""
        for key in sorted(self.missing):
            name = self.schema_name(key)
            js, tsn, ev = [], [], set()
            ctxs = []
            for owner, path in self.missing[key]:
                ctxs += self.abs_contexts(owner, path)
            for opk, variant, path, side in sorted(set(ctxs), key=lambda x: json.dumps(x)):
                a, b, e = self.capture_samples(self.ops[opk], variant, path, side)
                js += a
                tsn += b
                ev |= e
            if js:
                sch = self.schema_from_json(js)
            elif tsn:
                sch = self.schema_from_ts(tsn)
            else:
                sch = self.unknown(f"structure {key} (module not in the downloaded code) never captured")
            sch["x-os-structure"] = key
            sch["x-os-source"] = "capture"
            self.schemas[name] = sch
            self.schema_evidence[name] |= ev or {"none"}

        def fix(s):
            if isinstance(s, dict):
                if "$missing" in s:
                    return self.ref(self.schema_name(s["$missing"]))
                return {k: fix(v) for k, v in s.items()}
            if isinstance(s, list):
                return [fix(v) for v in s]
            return s

        for name in list(self.schemas):
            self.schemas[name] = fix(self.schemas[name])
        for d in self.opdata.values():
            for path, rs in d["variants"].items():
                for r in rs:
                    for k in ("out", "in", "vars"):
                        if r.get(k) is not None:
                            r[k] = fix(r[k])

    def capture_only_output(self, op: dict) -> tuple[dict, set]:
        js, tsn, ev = self.capture_samples(op, None, (), "out")
        if js:
            return self.schema_from_json(js), ev
        if tsn:
            return self.schema_from_ts(tsn), ev
        return self.unknown("no compiled evidence and never captured"), ev

    def input_from_capture(self, op: dict, name: str):
        js, _, ev = self.capture_samples(op, None, (name,), "in")
        if js:
            return self.schema_from_json(js), ev
        return None, ev

    def make_paths(self):
        self.paths = {}
        self.report_rows = []
        for key in sorted(self.ops):
            op = self.ops[key]
            d = self.opdata[key]
            mod, owner, act = key
            oid = self.op_id(key)
            base = "__".join(sanitize(x) for x in key if x)
            evidence = set(d["evidence"])
            kind = d["kind"]
            screen_vars = kind in ("dataAction", "aggregate")
            notes = []
            # ---- outputs
            outs = {}
            for path in sorted(d["variants"]):
                for r in d["variants"][path]:
                    if r["out"] is not None:
                        outs.setdefault(json.dumps(r["out"], sort_keys=True), []).append(path)
            if not outs:
                o, ev = self.capture_only_output(op)
                evidence |= ev
                outs = {json.dumps(o, sort_keys=True): sorted(op["paths"])}
                notes.append("outputs from captures only (no compiled call site)")
            out_name = base + "__Output"
            if len(outs) == 1:
                sch = json.loads(next(iter(outs)))
                self.schemas[out_name] = dict(sch, **{"x-os-output-of": oid})
            else:
                variants = []
                items = sorted(outs.items(), key=lambda kv: sorted(kv[1])[0])
                blocks = [sorted(paths)[0].split("/")[-2] for _, paths in items]
                for i, (sj, paths) in enumerate(items):
                    blk = sorted(paths)[0].split("/")
                    label = blk[-2] if blocks.count(blk[-2]) == 1 else "_".join(blk[2:-1])
                    vname = out_name + "__" + sanitize(label or str(i))
                    self.schemas[vname] = dict(json.loads(sj), **{"x-os-output-of": oid, "x-os-block": "/".join(blk[2:-1]),
                                                                    "x-os-paths": sorted(paths)})
                    variants.append(self.ref(vname))
                self.schemas[out_name] = {"oneOf": variants, "x-os-output-of": oid,
                                          "description": "One variant per block that defines this action (same name, different outputs)."}
                notes.append(f"{len(outs)} output variants (oneOf)")
            # ---- inputs
            in_name = base + "__Input"
            if screen_vars:
                props = {}
                for path in sorted(d["variants"]):
                    for r in d["variants"][path]:
                        for vn, vs in sorted(r.get("vars", {}).items()):
                            props.setdefault(vn, vs)
                captured = sorted({n for t in op["captured_inputs"] for n in t})
                for n in captured:
                    if n not in props:
                        sch, ev = self.input_from_capture(op, n)
                        evidence |= ev
                        props[n] = sch if sch else self.unknown("input captured, type not determinable")
                inp = {"type": "object", "properties": props, "additionalProperties": True,
                       "description": "Screen variables OutSystems sends with this call (screenData.variables). "
                                      "All optional; the backend spec decides which ones matter."}
            else:
                props, sigs = {}, set()
                unresolved = []
                for path in sorted(d["variants"]):
                    for r in d["variants"][path]:
                        if r.get("in") is None:
                            continue
                        sigs.add(tuple(sorted(r["in"])))
                        for n, sch in sorted(r["in"].items()):
                            if "$unresolved_input" in sch:
                                if n not in props:
                                    props[n] = None
                                continue
                            if props.get(n) is None:
                                props[n] = sch
                for n in sorted(props):
                    if props[n] is None:
                        sch, ev = self.input_from_capture(op, n)
                        if sch:
                            evidence |= ev
                            props[n] = sch
                            notes.append(f"input {n}: structure from the captures")
                        else:
                            props[n] = self.unknown("Record/RecordList input; structure not traceable in the compiled code")
                            unresolved.append(n)
                if not d["variants"] or not sigs:
                    for n in sorted({n for t in op["captured_inputs"] for n in t}):
                        sch, ev = self.input_from_capture(op, n)
                        evidence |= ev
                        props[n] = sch if sch else self.unknown("input captured, type not determinable")
                    if op["captured_inputs"]:
                        notes.append("inputs from captures only")
                if len(sigs) > 1:
                    notes.append("call sites disagree on input names: " + "; ".join(",".join(s) for s in sorted(sigs)))
                cap = {tuple(sorted(t)) for t in op["captured_inputs"]}
                if sigs and cap and cap != {tuple(sorted(props))}:
                    notes.append("captured input names differ from compiled: " + "; ".join(",".join(c) for c in sorted(cap)))
                inp = {"type": "object", "properties": props, "additionalProperties": False}
                if props:
                    inp["required"] = sorted(props)
            self.schemas[in_name] = dict(inp, **{"x-os-input-of": oid})
            # ---- operation
            phases = sorted(op["phases"])
            operation = {
                "operationId": oid,
                "summary": self.summary(op, kind),
                "tags": [mod],
                "requestBody": {"required": True, "content": {"application/json": {"schema": self.ref(in_name)}}},
                "responses": {
                    "200": {"description": "The action outputs.",
                            "content": {"application/json": {"schema": {
                                "type": "object", "required": ["data"],
                                "properties": {"data": self.ref(out_name)}}}}},
                    "default": {"description": "Error.",
                                "content": {"application/json": {"schema": self.ref("Error")}}},
                },
                "x-os-kind": kind,
                "x-os-screens": sorted(op["screens"]),
                "x-os-phase": phases,
                "x-os-paths": sorted(op["paths"]),
                "x-mock-source": "recorded" if act in self.recorded and self.owner_fixtures(op) else "fictional",
            }
            if owner:
                operation["x-os-owner"] = op["owner_path"]
            if act in self.recorded and not self.owner_fixtures(op):
                notes.append("in mock-scope `record`, but no fixture for this owner: fictional")
            if not is_read(act):
                operation["x-os-writes"] = True
            if screen_vars:
                operation["x-os-inputs"] = "screen-variables"
                operation["x-review"] = "inputs" if len(outs) == 1 else "inputs, variants"
            elif len(outs) > 1:
                operation["x-review"] = "variants"
            self.paths[self.api_path(key)] = {"post": operation}
            self.report_rows.append({"op": oid, "kind": kind, "screens": sorted(op["screens"]),
                                     "mock": operation["x-mock-source"], "writes": not is_read(act),
                                     "evidence": sorted(evidence), "notes": notes, "in": in_name, "out": out_name,
                                     "phases": phases, "screen_vars": screen_vars})

    def summary(self, op: dict, kind: str) -> str:
        label = {"dataAction": "Data action", "aggregate": "Aggregate", "serverAction": "Server action",
                 "serviceAPI": "Service action", "clientWrapper": "Server action (module client-action wrapper)"}[kind]
        names = sorted(op["catalog_names"]) or [re.sub(r"^(ServiceAPI|Action)", "", op["action"])]
        where = f"{op['module']}, {op['owner_path']}" if op["owner_path"] else op["module"]
        return f"{label} {', '.join(names)} ({where})"

    # -- unknown counting ---------------------------------------------------------------------------------------
    def unknown_nodes(self, s) -> int:
        """x-unknown nodes; a list's EmptyListItem mirrors its items and is not counted twice."""
        if isinstance(s, dict):
            if s.get("x-os-list"):
                return self.unknown_nodes(s["properties"]["List"])
            return (1 if s.get("x-unknown") else 0) + sum(self.unknown_nodes(v) for v in s.values())
        if isinstance(s, list):
            return sum(self.unknown_nodes(v) for v in s)
        return 0

    def reachable(self, name: str, seen: set) -> set:
        if name in seen or name not in self.schemas:
            return seen
        seen.add(name)

        def walk(s):
            if isinstance(s, dict):
                r = s.get("$ref")
                if isinstance(r, str) and r.startswith("#/components/schemas/"):
                    self.reachable(r.rsplit("/", 1)[1], seen)
                for v in s.values():
                    walk(v)
            elif isinstance(s, list):
                for v in s:
                    walk(v)

        walk(self.schemas[name])
        return seen

    # -- document -----------------------------------------------------------------------------------------------
    def document(self) -> dict:
        schemas = {"Error": ERROR_SCHEMA}
        schemas.update(self.schemas)
        return {"openapi": "3.1.0",
                "info": {"title": "UBTConnect API", "version": "0.1.0"},
                "paths": self.paths,
                "components": {"schemas": schemas}}


# Exceptions a server or service action can raise, by their client runtime class names (runtime-sources/OutSystems.js:2,
# OutSystems/ClientRuntime/Exceptions; the server answer's `exception` is rebuilt by getException, OutSystems.js:3).
# Not listed: CommunicationException (raised by the client when a request fails or times out) and the client-only system
# exceptions (ViewHasChanged, OutOfOrder, ControllerDisposed, ...). The class is DataBaseException (capital B).
SERVER_EXCEPTIONS = ["AbortActivityChangeException", "DataBaseException", "InvalidLoginException",
                     "NotRegisteredException", "SecurityException", "ServerException", "UserException"]
ERROR_SCHEMA = {
    "type": "object",
    "required": ["error", "exception"],
    "properties": {
        "error": {"type": "string", "description": "The exception message (OS.Exceptions.getMessage)."},
        "exception": {"type": "string", "enum": SERVER_EXCEPTIONS,
                      "description": "OutSystems exception class (OutSystems.js:2)."},
        "specificType": {"type": "string",
                         "description": "UserException / ServerException / DataBaseException / NotRegisteredException "
                                        "only: the specific type, e.g. Connect2_LegacyShared.ObjectNotFound for a user "
                                        "exception (Handle Error on a named user exception tests it)."},
    },
}

HEADER = """# API contract of the UBTConnect clone (stack item apiLayer, ADR "contract"). One endpoint per OutSystems action:
#   POST /api/<Module>/<Owner>/<Action>   data actions and aggregates (owner = defining screen or block)
#   POST /api/<Module>/<Action>           server and service actions
#   body:   the action inputs, with their OutSystems names and wire types (Long Integer as a string, "" / 1900-01-01 = no value)
#   200:    { "data": <the action outputs> }
#   error:  { "error": "<message>", "exception": "<OutSystems exception>", "specificType"?: "<Module>.<UserException>" }
#           with an HTTP error status; the client raises that exception (runtime OutSystems.js:2 getException). An error
#           answer without an exception name, or no answer, is a CommunicationException (client side only).
# Today MSW answers it (recorded or fictional data); later the backend implements the same contract.
# Generated and extended by the foundation owner only; routes never edit it (change request instead).
# After a change: npm run gen:api (writes src/api/schema.d.ts, which callAction is typed from).
# GENERATED by migration/tools/contract_gen.py from compiled code and captures (see its docstring); do not edit by hand.
# Extensions: x-os-kind, x-os-owner, x-os-screens, x-os-phase, x-os-paths, x-os-writes, x-mock-source, x-os-inputs, x-review,
#   x-os-type (wire type of a string), x-os-structure, x-os-source (capture = typed from captures), x-unknown (any).
"""


# ------------------------------------------------------------------------------------------------ fixture check
def check_fixtures(gen: Gen, doc: dict) -> list[str]:
    """Structural check of the reviewed fixtures against the contract (report only, never fatal):
    data must have the keys the response schema requires, with the wire types it declares; inputs are checked for
    types only (the converter drops screen state, mock-rules.json dropInputs). Also tallies, for schema nodes typed
    from the compiled code, which JSON value types the fixtures carry (the wire-type evidence)."""
    schemas = doc["components"]["schemas"]
    rules = json.load(open(os.path.join(ROOT, "migration", "mock-rules.json")))
    dropped_out = set(rules.get("dropOutputs", []))
    tally: dict[str, dict] = defaultdict(lambda: defaultdict(int))
    examples: dict[tuple, str] = {}
    lines = []

    def deref(sch, cap):
        while isinstance(sch, dict) and "$ref" in sch:
            sch = schemas[sch["$ref"].rsplit("/", 1)[1]]
            cap = cap or sch.get("x-os-source") == "capture"
        return sch, cap

    def shape(v) -> str:
        if isinstance(v, bool):
            return "boolean"
        if isinstance(v, int):
            return "integer"
        if isinstance(v, float):
            return "number"
        if isinstance(v, str):
            if re.fullmatch(r"-?\d+", v):
                return 'string "-?digits"'
            if re.fullmatch(r"-?\d+\.\d+", v):
                return 'string "-?digits.digits"'
            if re.fullmatch(r"\d{4}-\d{2}-\d{2}", v):
                return 'string "YYYY-MM-DD"'
            if re.fullmatch(r"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z?", v):
                return 'string "YYYY-MM-DDThh:mm:ss[Z]"'
            return "string" if v else 'string ""'
        return type(v).__name__

    def problems(sch, v, path, side, cap=False, depth=0, block=None) -> list[str]:
        sch, cap = deref(sch, cap)
        if depth > 14 or not isinstance(sch, dict):
            return []
        if "oneOf" in sch:
            alts = [deref(a, cap)[0] for a in sch["oneOf"]]
            pick = [a for a in sch["oneOf"] if block and deref(a, cap)[0].get("x-os-block", "").split("/")[-1] == block]
            if pick:
                return problems(pick[0], v, path, side, cap, depth + 1)
            best = None
            for a in sch["oneOf"]:
                p = problems(a, v, path, side, cap, depth + 1)
                if best is None or len(p) < len(best):
                    best = p
            return best or [] if alts else []
        if sch.get("x-unknown"):
            return []
        t = sch.get("type")
        if t == "object":
            if not isinstance(v, dict):
                return [f"{path}: expected object, got {shape(v)}"]
            out = []
            if side == "out":
                for k in sch.get("required", []):
                    if k not in v:
                        out.append(f"{path}.{k}: missing" + (" (mock-rules dropOutputs)" if k in dropped_out else ""))
            props = sch.get("properties", {})
            for k, x in v.items():
                if k in props:
                    out += problems(props[k], x, f"{path}.{k}", side, cap, depth + 1)
                elif sch.get("additionalProperties") is False:
                    out.append(f"{path}.{k}: not in the schema")
            return out
        if t == "array":
            if not isinstance(v, list):
                return [f"{path}: expected array, got {shape(v)}"]
            out = []
            for i, x in enumerate(v[:25]):
                out += problems(sch.get("items", {}), x, f"{path}[{i}]", side, cap, depth + 1)
            return out
        ostype = sch.get("x-os-type") or {"integer": "Integer", "boolean": "Boolean", "string": "Text",
                                          "number": "number"}.get(t if isinstance(t, str) else "", str(t))
        if not cap:
            label = ostype + (" (list item)" if isinstance(t, list) else "")
            tally[label][shape(v)] += 1
            examples.setdefault((label, shape(v)), path)
        if isinstance(t, list):
            if not any(problems({**sch, "type": tt}, v, path, side, True, depth + 1) == [] for tt in t):
                return [f"{path}: expected {'|'.join(t)}, got {json.dumps(v)[:30]}"]
            return []
        want = {"string": str, "integer": int, "number": (int, float), "boolean": bool}.get(t)
        if want and (not isinstance(v, want) or (t in ("integer", "number") and isinstance(v, bool))):
            return [f"{path}: expected {ostype}, got {json.dumps(v)[:30]}"]
        if want is str and sch.get("x-os-type") == "LongInteger" and not re.fullmatch(r"-?\d+", v):
            return [f"{path}: LongInteger digits expected, got {json.dumps(v)[:30]}"]
        if want is str and sch.get("x-os-type") == "Decimal" and not re.fullmatch(r"-?\d+(\.\d+)?", v):
            return [f"{path}: Decimal digits expected, got {json.dumps(v)[:30]}"]
        if want is str and sch.get("x-os-type") == "Date" and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", v):
            return [f"{path}: Date YYYY-MM-DD expected, got {json.dumps(v)[:30]}"]
        return []

    total = bad = 0
    for p in sorted(glob.glob(os.path.join(FIXTURES_DIR, "*", "*", "*.json"))):
        fx = json.load(open(p))
        if not isinstance(fx, dict) or "action" not in fx:
            continue
        total += 1
        path = gen.route_of_fixture(fx["module"], fx["action"], fx.get("screen"))
        if path is None or path not in doc["paths"]:
            lines.append(f"- `{rel(p)}`: no operation for {fx['module']}.{fx.get('screen') or ''}.{fx['action']}")
            bad += 1
            continue
        post = doc["paths"][path]["post"]
        out_ref = post["responses"]["200"]["content"]["application/json"]["schema"]["properties"]["data"]
        in_ref = post["requestBody"]["content"]["application/json"]["schema"]
        probs = problems(out_ref, fx.get("data"), "data", "out", block=fx.get("screen"))
        probs += problems(in_ref, fx.get("inputs") or {}, "inputs", "in", block=fx.get("screen"))
        if probs:
            bad += 1
            lines.append(f"- `{rel(p)}`: " + "; ".join(probs[:8]) + (f" (+{len(probs) - 8} more)" if len(probs) > 8 else ""))
    lines.insert(0, f"{total} fixtures checked (data: required keys and wire types; inputs: wire types), "
                    f"{total - bad} match, {bad} with mismatches (reported, not fatal).")
    lines += ["", "Wire types seen in the fixtures at schema nodes typed from the compiled code "
                  "(OutSystems type: JSON value shape x count, first path):", ""]
    for t in sorted(tally):
        lines.append(f"- {t}: " + ", ".join(f"{k} x{n} (`{examples[(t, k)]}`)" for k, n in sorted(tally[t].items())))
    return lines


# ------------------------------------------------------------------------------------------------ cross-check
def cross_check_types(gen: Gen, doc: dict) -> tuple[int, list[str]]:
    """Compare output schemas typed from the compiled code with the captured shapes in types.ts (same op, same path).
    Returns (number of leaves compared, mismatches)."""
    schemas = doc["components"]["schemas"]
    compared = 0
    bad: list[str] = []

    def deref(sch):
        while isinstance(sch, dict) and "$ref" in sch:
            sch = schemas[sch["$ref"].rsplit("/", 1)[1]]
        return sch

    def cmp(sch, node, path, depth=0):
        nonlocal compared
        sch = deref(sch)
        if depth > 12 or node is None or node == ("unreliable",) or not isinstance(sch, dict):
            return
        if sch.get("x-os-source") == "capture" or sch.get("x-unknown") or "oneOf" in sch:
            return
        if sch.get("x-os-list"):
            if node[0] == "list":
                cmp(sch["properties"]["List"]["items"], node[1], path + "[]", depth + 1)
            else:
                bad.append(f"{path}: compiled list, captured {node[0]}")
            return
        t = sch.get("type")
        if t == "object":
            if node[0] != "obj":
                bad.append(f"{path}: compiled object, captured {node[0]}")
                return
            for k, v in node[1].items():
                if k in sch.get("properties", {}):
                    cmp(sch["properties"][k], v, f"{path}.{k}", depth + 1)
                else:
                    bad.append(f"{path}.{k}: captured, not in the compiled structure")
            return
        if node[0] != "prim":
            bad.append(f"{path}: compiled {t}, captured {node[0]}")
            return
        compared += 1
        tt = t if isinstance(t, list) else [t]
        ok = set().union(*[{"string": {"string"}, "integer": {"number"}, "number": {"number"}, "boolean": {"boolean"}}.get(x, set()) for x in tt])
        if node[1] not in ok:
            bad.append(f"{path}: compiled {sch.get('x-os-type') or t}, captured {node[1]}")

    for key in sorted(gen.ops):
        op = gen.ops[key]
        post = doc["paths"][gen.api_path(key)]["post"]
        out = deref(post["responses"]["200"]["content"]["application/json"]["schema"]["properties"]["data"])
        if "oneOf" in out:
            alts = [(deref(a).get("x-os-paths", []), a) for a in out["oneOf"]]
        else:
            alts = [(sorted(op["paths"]), out)]
        for paths, sch in alts:
            for ts, resp, owned in gen.ts_response(op, set(paths)):
                root = ("obj", {k: ts_expr_sample(ts, owned, v, frozenset({resp})) for k, v in ts.ifaces[resp].items()})
                n0 = len(bad)
                cmp(sch, root, gen.op_id(key))
                screen = os.path.basename(os.path.dirname(os.path.dirname(ts.path)))
                bad[n0:] = [f"{b}\t{screen}" for b in bad[n0:]]
    grouped: dict[str, set] = defaultdict(set)
    for b in bad:
        msg, screen = b.split("\t")
        grouped[msg].add(screen)
    return compared, [f"{m} ({len(sc)} screen{'s' if len(sc) > 1 else ''})" for m, sc in sorted(grouped.items())]


# ------------------------------------------------------------------------------------------------ report
def write_report(gen: Gen, doc: dict, fixture_lines: list[str] | None, path: str):
    schemas = doc["components"]["schemas"]
    n_unknown = sum(gen.unknown_nodes(s) for s in schemas.values())
    contract_side: set = set()  # schemas reachable from outputs or explicit (server-action) inputs
    for r in gen.report_rows:
        gen.reachable(r["out"], contract_side)
        if not r["screen_vars"]:
            gen.reachable(r["in"], contract_side)
    u_contract = sum(gen.unknown_nodes(schemas[n]) for n in contract_side if n in schemas)
    rows = []
    for r in gen.report_rows:
        reach = gen.reachable(r["out"], set())
        reach_in = gen.reachable(r["in"], set())
        u_out = sum(gen.unknown_nodes(schemas[n]) for n in reach)
        u_in = sum(gen.unknown_nodes(schemas[n]) for n in reach_in)
        allev = set(r["evidence"])
        for n in reach | reach_in:
            allev |= gen.schema_evidence.get(n, set()) - {"none"}
        ev = sorted({os.path.basename(e.split("#", 1)[-1]) if e.endswith(".js") else e for e in allev})
        rows.append(f"| `{r['op']}` | {r['kind']} | {len(r['screens'])}: {', '.join(r['screens'])} | {r['mock']} | "
                    f"{'yes' if r['writes'] else ''} | {u_in} / {u_out} | {', '.join(r['phases']) or 'not captured'} | "
                    f"{'<br>'.join(ev) or '-'} | {'; '.join(r['notes'])} |")
    cap = sorted(n for n, s in schemas.items() if s.get("x-os-source") == "capture")
    lines = [
        "# API contract report",
        "",
        "Generated by `migration/tools/contract_gen.py` together with `app/src/api/openapi.yaml`. Do not edit by hand.",
        "",
        f"- Operations: {len(gen.paths)} ({sum(1 for r in gen.report_rows if r['writes'])} writes by the read-only guard rule)",
        f"- Schemas: {len(schemas)} ({len(cap)} typed from captures: producer-module structures not in the downloaded code)",
        f"- Unknown types (`x-unknown`): {n_unknown} nodes: {u_contract} reachable from outputs or server-action inputs, "
        f"{n_unknown - u_contract} only in data-action screen-variable inputs",
        "",
        f"- Data actions / aggregates: {sum(1 for k in gen.ops if k[1])} operations, one per owner; owners written "
        f"<Flow>.<Owner>: {'; '.join(gen.flow_prefixed) or 'none'}",
        f"- Output unions (oneOf): {sum(1 for s in schemas.values() if 'oneOf' in s)}",
        "",
        "Unknown count per operation: inputs / outputs (nodes reachable from the operation's schemas).",
        "",
        "| Operation | Kind | Screens | Mock | Writes | Unknown in / out | Phase | Evidence | Notes |",
        "|---|---|---|---|---|---|---|---|---|",
        *rows,
        "",
        "## Schemas typed from captures",
        "",
        *[f"- `{n}` ({schemas[n].get('x-os-structure')}): {', '.join(sorted(gen.schema_evidence[n]))}" for n in cap],
    ]
    if gen.unmatched_catalog:
        lines += ["", "## Catalog actions without a call site in the screen's closure", ""]
        lines += [f"- {s}: `{n}`" for s, n in sorted(gen.unmatched_catalog)]
    if gen.not_in_survey:
        lines += ["", "## Call sites newer than the survey", "",
                  "Compiled in the newest fetched code of the screen's closure, not in its survey lists "
                  "(migration/survey/screens.json); included.", ""]
        lines += [f"- {s}: `{n}`" for s, n in sorted(gen.not_in_survey)]
    if gen.src.newer_than_survey:
        lines += ["", "## Compiled files newer than the survey", "",
                  f"{len(gen.src.newer_than_survey)} files fetched from TST after the survey differ from it (beyond line "
                  "endings); the newest copy is used: " + ", ".join(f"`{b}`" for b in gen.src.newer_than_survey)]
    if gen.notes:
        lines += ["", "## Notes", ""] + [f"- {n}" for n in gen.notes]
    compared, mism = cross_check_types(gen, doc)
    lines += ["", "## Cross-check: compiled types vs captured shapes (types.ts)", "",
              f"{compared} leaves compared, {len(mism)} distinct mismatches. types.ts reuses an interface by name "
              "(e.g. `Options`, `LocalBookmarkItem`) for another structure, so a mismatch here can be an artifact of "
              "the capture; the compiled type is kept.", ""] + [f"- {m}" for m in mism]
    if fixture_lines is not None:
        lines += ["", "## Fixture check (`--check-fixtures`)", ""] + fixture_lines
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines) + "\n")


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    ap.add_argument("--out", default=os.path.join(ROOT, "app", "src", "api", "openapi.yaml"))
    ap.add_argument("--check-fixtures", action="store_true", help="validate reviewed fixtures against the response schemas")
    ap.add_argument("--report", help="write a markdown report (per operation: kind, screens, mock source, unknowns, evidence)")
    a = ap.parse_args()
    gen = Gen()
    gen.build()
    doc = gen.document()
    # top level in the usual OpenAPI order; everything below it is sorted
    text = HEADER + "\n".join(line for k in ("openapi", "info", "paths", "components") for line in to_yaml({k: doc[k]})) + "\n"
    with open(a.out, "w", encoding="utf-8") as fh:
        fh.write(text)
    schemas = doc["components"]["schemas"]
    n_unknown = sum(gen.unknown_nodes(s) for s in schemas.values())
    print(f"{rel(a.out)}: {len(gen.paths)} operations, {len(schemas)} schemas, {n_unknown} x-unknown nodes, "
          f"{sum(1 for r in gen.report_rows if r['writes'])} writes")
    fl = None
    if a.check_fixtures:
        fl = check_fixtures(gen, doc)
        print("\n".join(fl))
    if a.report:
        write_report(gen, doc, fl, a.report)
        print(f"report: {a.report}")


if __name__ == "__main__":
    main()
