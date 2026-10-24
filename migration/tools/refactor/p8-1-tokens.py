#!/usr/bin/env python3
"""P8-1: writes app/src/styles/tokens.css from the original OutSystems CSS and the UBT static entities.

  python3 migration/tools/refactor/p8-1-tokens.py           # write app/src/styles/tokens.css
  python3 migration/tools/refactor/p8-1-tokens.py --check   # exit 1 when the file differs from the output; writes nothing

Run from the project root. A token is a `--color-*`, `--space-*` or `--font-*` custom property that the original CSS
sets on `:root` (a top-level rule whose selector list holds `:root` or `html`) with the same value on every route
screen: for each screen of app/src/app/routes.css.generated.ts the files load in their order and the last definition
wins. Properties with other values on some screens, or set by only some screens' files, stay legacy-only (the header of
the output names them). Every var() in a token value must name another token. Groups: the UBTConnectLibrary static
entities UBT_Color (--color-<Id>), UBT_Size (--space-<Id>), UBT_FontSize (--font-size-<Id>) and UBT_FontWeight
(--font-<Id>) of migration/knowledge/static-entities-tst.json, then the other OutSystems variables of each family; each
group in the order of the default screen's (HomeFeed) files. The output goes through the app's prettier (lower-case hex
colors), so `npm run format:check` accepts it. app/src/styles/tokens.test.ts checks the same rule on every test run.
"""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
NODE_BIN = os.path.expanduser("~/.nvm/versions/node/v24.21.0/bin")
CSS_DIR = ROOT / "app/public/UBTConnect/css"
SETS_TS = ROOT / "app/src/app/routes.css.generated.ts"
ENTITIES = ROOT / "migration/knowledge/static-entities-tst.json"
OUT = ROOT / "app/src/styles/tokens.css"
FAMILY = re.compile(r"^--(color|space|font)-")


def top_level_rules(text: str) -> list[tuple[str, str]]:
    """(selector, body) of the style rules outside any at-rule block; comments removed, at-rule blocks skipped."""
    t = re.sub(r"/\*[\s\S]*?\*/", "", text.replace(chr(0xFEFF), ""))
    out, i, start, n = [], 0, 0, len(t)
    while i < n:
        c = t[i]
        if c == ";" and t[start:i].strip().startswith("@"):  # @charset, @import, @layer statement
            start = i + 1
        elif c == "{":
            depth, j = 1, i + 1
            while j < n and depth:
                depth += {"{": 1, "}": -1}.get(t[j], 0)
                j += 1
            prelude = t[start:i].strip()
            if not prelude.startswith("@"):
                out.append((prelude, t[i + 1 : j - 1]))
            i = start = j
            continue
        elif c == "}":
            start = i + 1
        i += 1
    return out


def root_values(text: str) -> dict[str, str]:
    """Family custom properties set on the root element by top-level rules, last definition first-to-last."""
    vals: dict[str, str] = {}
    for selector, body in top_level_rules(text):
        if not any(s.strip() in (":root", "html") for s in selector.split(",")):
            continue
        for decl in re.split(r";(?![^()]*\))", body):
            if ":" not in decl:
                continue
            prop, value = (x.strip() for x in decl.split(":", 1))
            if FAMILY.match(prop) and not re.search(r"!\s*important\s*$", value, re.I):
                vals[prop] = " ".join(value.split())
    return vals


def route_sets() -> dict[str, list[str]]:
    sets: dict[str, list[str]] = {}
    current = None
    for line in SETS_TS.read_text(encoding="utf-8").splitlines():
        if line.startswith("export const ROUTE_CSS_ORIGIN"):
            break
        m = re.match(r"  (\w+): \[$", line)
        if m:
            current = m.group(1)
            sets[current] = []
            continue
        m = re.match(r"    '([^']+)',$", line)
        if m and current:
            sets[current].append(m.group(1))
    return sets


def build() -> str:
    per_file = {f.name: root_values(f.read_text(encoding="utf-8", errors="replace")) for f in CSS_DIR.glob("*.css")}
    sets = route_sets()
    finals = {}
    for screen, files in sets.items():
        vals: dict[str, str] = {}
        for f in files:
            vals.update(per_file[f])
        finals[screen] = vals
    names = sorted({p for v in finals.values() for p in v})
    tokens, differ, partial = {}, [], []
    for p in names:
        values = {finals[s].get(p) for s in sets}
        if None in values:
            partial.append(p)
        elif len(values) > 1:
            differ.append(p)
        else:
            tokens[p] = values.pop()
    for p, v in tokens.items():
        for ref in re.findall(r"var\(\s*(--[\w-]+)", v):
            if ref not in tokens:
                sys.exit(f"p8-1-tokens: {p} uses {ref}, which is not a token")

    # source order: the file and position of the winning definition on the default screen
    order: dict[str, int] = {}
    for f in sets["HomeFeed"]:
        for p in per_file[f]:
            order[p] = len(order) if p not in order else order[p]
    entities = json.loads(ENTITIES.read_text(encoding="utf-8"))
    groups = [
        ("UBT_Color: the color of the text-<Id>, background-<Id> and border-color-<Id> classes", "--color-",
         list(entities["UBTConnectLibrary.uBT_Color"].values())),
        ("UBT_Size: the padding-<Id>, margin-<Id> and gap-<Id> classes", "--space-",
         list(entities["UBTConnectLibrary.uBT_Size"].values())),
        ("UBT_FontSize: the font-size-<Id> classes", "--font-size-",
         list(entities["UBTConnectLibrary.uBT_FontSize"].values())),
        ("UBT_FontWeight: the font-<Id> classes", "--font-",
         list(entities["UBTConnectLibrary.uBT_FontWeight"].values())),
    ]
    in_source_order = lambda props: sorted(props, key=lambda p: order.get(p, 1 << 30))  # noqa: E731
    used: set[str] = set()
    blocks = []
    for title, prefix, ids in groups:
        props = in_source_order(prefix + i for i in ids if prefix + i in tokens and prefix + i not in used)
        used.update(props)
        blocks.append((title, props))
    rest = in_source_order(p for p in tokens if p not in used)
    blocks += [
        ("Other OutSystems color variables", [p for p in rest if p.startswith("--color-") and "-rgb-" not in p]),
        ("RGB channels of the colors (r, g, b)", [p for p in rest if p.startswith("--color-rgb-")]),
        ("Other OutSystems space and font variables", [p for p in rest if not p.startswith("--color-")]),
    ]

    def wrap(words: list[str], indent: str, width: int = 120) -> list[str]:
        lines, line = [], indent
        for w in words:
            if len(line) + len(w) + 1 > width and line.strip():
                lines.append(line.rstrip())
                line = indent
            line += w + " "
        if line.strip():
            lines.append(line.rstrip())
        return lines

    head = [
        "/* Design tokens (plan v2 §2.8, R3): the --color-*, --space-* and --font-* variables of the original OutSystems CSS",
        "   (public/UBTConnect/css), named by the UBTConnectLibrary static entities UBT_Color, UBT_Size, UBT_FontSize and",
        "   UBT_FontWeight (migration/knowledge/static-entities-tst.json). Written by migration/tools/refactor/p8-1-tokens.py.",
        "   Each token is a variable that the original CSS sets on :root with this value on every route screen, so the tokens",
        "   change no rendering. They are in the app layer (styles/layers.css): while the original files load, a token wins",
        "   over the legacy :root value, and tokens.test.ts keeps the two equal. New CSS uses the tokens.",
        "   Legacy only (other values on some screens):",
        *wrap(differ, "     "),
        "   Legacy only (set on some screens only):",
        *wrap(partial, "     "),
        "*/",
    ]
    body = ["@layer app {", "  :root {"]
    for i, (title, props) in enumerate(blocks):
        if not props:
            continue
        if i:
            body.append("")
        body.append(f"    /* {title} */")
        body += [f"    {p}: {tokens[p]};" for p in props]
    body += ["  }", "}", ""]
    return prettier("\n".join(head + body))


def prettier(text: str) -> str:
    """The text as `npm run format` writes it (app/.prettierrc): lower-case hex colors, long values on several lines."""
    env = dict(os.environ, PATH=NODE_BIN + os.pathsep + os.environ.get("PATH", ""))
    r = subprocess.run([str(ROOT / "app/node_modules/.bin/prettier"), "--stdin-filepath", "src/styles/tokens.css"],
                       input=text, capture_output=True, text=True, cwd=ROOT / "app", env=env)
    if r.returncode:
        sys.exit("p8-1-tokens: prettier failed: " + r.stderr)
    return r.stdout


def main() -> None:
    text = build()
    current = OUT.read_text(encoding="utf-8") if OUT.exists() else None
    if "--check" in sys.argv[1:]:
        if current != text:
            sys.exit("p8-1-tokens: app/src/styles/tokens.css is not up to date")
        print("p8-1-tokens: up to date")
        return
    if current != text:
        OUT.write_text(text, encoding="utf-8")
    print(f"p8-1-tokens: {text.count(chr(10) + '    --')} tokens; {'wrote' if current != text else 'unchanged'} "
          f"{OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
