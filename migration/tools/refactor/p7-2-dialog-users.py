#!/usr/bin/env python3
"""P7-2 Dialogs: update the users of the merged dialogs (import lines, JSX tags and prop names only).

  python3 migration/tools/refactor/p7-2-dialog-users.py          # from the project root; prints one line per file

- ActionConfirmationDialog (platform/feedback/dialogs) -> ConfirmDialog (components/ui/Dialog), same props.
- NavigationConfirmationDialog (shared/NavigationHandler) -> NavigationDialog (components/ui/Dialog), variant plain:
  dialogHeader/dialogBody/buttonLabelConfirm/buttonLabelDismiss -> header/body/confirmLabel/dismissLabel.
- NavigationDialog (was Dialog_Navigation) -> NavigationDialog variant="connect": onEventOnBackNavigation/
  placeholderHeader/placeholderBody -> onNavigation/header/body.
- ChoiceDialog: placeholderHeader/placeholderBody/placeholderButtonLabel/placeholderDismissButtonLabe ->
  header/body/confirmLabel/dismissLabel.
- Dialog_AccessRestrictedAction_Legacy (shared/UBTConnect_Utils) -> DialogAccessRestrictedActionLegacy
  (platform/feedback/dialogs), same props.
Run prettier on the changed files afterwards. Each replacement must match: the script stops when one does not.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
SRC = ROOT / "app/src"

PLATFORM_DIALOGS = "@/platform/feedback/dialogs"
UI_DIALOG = "@/components/ui/Dialog"


def element_spans(text: str, tag: str) -> list[tuple[int, int]]:
    """Spans of the self-closing JSX elements <tag ... /> (no nested elements inside the attributes' braces end the
    element early: braces are counted)."""
    spans = []
    for m in re.finditer(rf"<{tag}\b", text):
        i, depth = m.end(), 0
        while i < len(text):
            c = text[i]
            if depth == 0 and text.startswith("//", i):  # a line comment between the attributes
                i = text.index("\n", i)
                continue
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
            elif depth == 0 and text.startswith("/>", i):
                spans.append((m.start(), i + 2))
                break
            elif depth == 0 and c == ">":
                raise SystemExit(f"<{tag}> with children is not handled")
            i += 1
    return spans


def rename_props(text: str, tag: str, renames: dict[str, str], add: str = "", new_tag: str | None = None) -> tuple[str, int]:
    spans = element_spans(text, tag)
    for start, end in reversed(spans):
        element = text[start:end]
        for old, new in renames.items():
            element = re.sub(rf"(\s){old}=", rf"\g<1>{new}=", element)
        if new_tag:
            element = element.replace(f"<{tag}", f"<{new_tag}", 1)
        if add:
            name = new_tag or tag
            element = element.replace(f"<{name}", f"<{name} {add}", 1)
        text = text[:start] + element + text[end:]
    return text, len(spans)


def add_named_import(text: str, name: str, module: str) -> str:
    """Adds `name` to the import from `module`, or a new import line after the last import."""
    m = re.search(rf"import \{{([^}}]*)\}} from '{re.escape(module)}';", text)
    if m:
        names = [n.strip() for n in m.group(1).split(",") if n.strip()]
        if name in names:
            return text
        names.append(name)
        return text[: m.start()] + f"import {{ {', '.join(names)} }} from '{module}';" + text[m.end() :]
    imports = list(re.finditer(r"^import .*?;\n", text, flags=re.M | re.S))
    at = imports[-1].end() if imports else 0
    return text[:at] + f"import {{ {name} }} from '{module}';\n" + text[at:]


def remove_named_import(text: str, name: str, module: str) -> str:
    m = re.search(rf"import \{{([^}}]*)\}} from '{re.escape(module)}';\n", text)
    if not m:
        raise SystemExit(f"no import from {module}")
    names = [n.strip() for n in m.group(1).split(",") if n.strip() and n.strip() != name]
    line = f"import {{ {', '.join(names)} }} from '{module}';\n" if names else ""
    return text[: m.start()] + line + text[m.end() :]


def legacy_users() -> list[Path]:
    """Dialog_AccessRestrictedAction_Legacy -> DialogAccessRestrictedActionLegacy (platform/feedback/dialogs), same
    props. Also converts the first draft of this step (`<DialogAccessRestrictedAction legacy={{ id, scope }} />`)."""
    old = "@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy"
    draft = re.compile(r"<DialogAccessRestrictedAction legacy=\{\{ id: (.+?), scope: (.+?) \}\} />")

    def attr(expr: str) -> str:
        expr = expr.strip()
        if expr.startswith("'") and expr.endswith("'"):
            return '"' + expr[1:-1] + '"'
        return "{" + expr + "}"

    changed = []
    for path in sorted(SRC.rglob("*.tsx")):
        if "/platform/feedback/dialogs/" in str(path):
            continue
        text = path.read_text()
        if f"from '{old}';" in text:
            text = remove_named_import(text, "Dialog_AccessRestrictedAction_Legacy", old)
            text = add_named_import(text, "DialogAccessRestrictedActionLegacy", PLATFORM_DIALOGS)
            text, n = re.subn(r"<Dialog_AccessRestrictedAction_Legacy\b", "<DialogAccessRestrictedActionLegacy", text)
        elif draft.search(text):
            text, n = draft.subn(
                lambda m: f"<DialogAccessRestrictedActionLegacy id={attr(m.group(1))} scope={attr(m.group(2))} />", text
            )
            text = remove_named_import(text, "DialogAccessRestrictedAction", PLATFORM_DIALOGS)
            text = add_named_import(text, "DialogAccessRestrictedActionLegacy", PLATFORM_DIALOGS)
        else:
            continue
        if n != 1:
            raise SystemExit(f"{path}: {n} legacy elements")
        path.write_text(text)
        changed.append(path)
    return changed


def confirm_users() -> list[Path]:
    changed = []
    for path in sorted(SRC.rglob("*.tsx")):
        text = path.read_text()
        if "<ActionConfirmationDialog" not in text or any(
            folder in str(path) for folder in ("/platform/feedback/dialogs/", "/components/ui/Dialog/")
        ):
            continue
        before = text
        if f"from '{PLATFORM_DIALOGS}/ActionConfirmationDialog';" in text:
            text = remove_named_import(text, "ActionConfirmationDialog", f"{PLATFORM_DIALOGS}/ActionConfirmationDialog")
        else:
            text = remove_named_import(text, "ActionConfirmationDialog", PLATFORM_DIALOGS)
        text = add_named_import(text, "ConfirmDialog", UI_DIALOG)
        text, n = rename_props(text, "ActionConfirmationDialog", {}, new_tag="ConfirmDialog")
        if n == 0 or text == before:
            raise SystemExit(f"{path}: no ActionConfirmationDialog element")
        path.write_text(text)
        changed.append(path)
    return changed


def navigation_plain_users() -> list[Path]:
    old = "@/shared/NavigationHandler/NavigationConfirmationDialog"
    renames = {
        "dialogHeader": "header",
        "dialogBody": "body",
        "buttonLabelConfirm": "confirmLabel",
        "buttonLabelDismiss": "dismissLabel",
    }
    changed = []
    for path in sorted(SRC.rglob("*.tsx")):
        text = path.read_text()
        if f"from '{old}';" not in text or path.name.startswith("NavigationConfirmationDialog"):
            continue
        text = remove_named_import(text, "NavigationConfirmationDialog", old)
        text = add_named_import(text, "NavigationDialog", UI_DIALOG)
        text, n = rename_props(text, "NavigationConfirmationDialog", renames, new_tag="NavigationDialog")
        if n != 1:
            raise SystemExit(f"{path}: {n} NavigationConfirmationDialog elements")
        path.write_text(text)
        changed.append(path)
    return changed


def navigation_connect_users() -> list[Path]:
    renames = {"onEventOnBackNavigation": "onNavigation", "placeholderHeader": "header", "placeholderBody": "body"}
    changed = []
    for path in sorted(SRC.rglob("*.tsx")):
        text = path.read_text()
        if "<NavigationDialog" not in text or "onEventOnBackNavigation=" not in text or "/components/ui/Dialog/" in str(path):
            continue
        text, n = rename_props(text, "NavigationDialog", renames, add='variant="connect"')
        if n != 1:
            raise SystemExit(f"{path}: {n} NavigationDialog elements")
        path.write_text(text)
        changed.append(path)
    return changed


def choice_users() -> list[Path]:
    renames = {
        "placeholderHeader": "header",
        "placeholderBody": "body",
        "placeholderButtonLabel": "confirmLabel",
        "placeholderDismissButtonLabe": "dismissLabel",
    }
    changed = []
    for path in sorted(SRC.rglob("*.tsx")):
        text = path.read_text()
        if "<ChoiceDialog" not in text or "/components/ui/Dialog/" in str(path):
            continue
        text, n = rename_props(text, "ChoiceDialog", renames)
        if n == 0:
            raise SystemExit(f"{path}: no ChoiceDialog element")
        path.write_text(text)
        changed.append(path)
    return changed


NEW_IMPORTS = (
    f"import {{ DialogAccessRestrictedActionLegacy }} from '{PLATFORM_DIALOGS}';\n",
    f"import {{ ConfirmDialog }} from '{UI_DIALOG}';\n",
    f"import {{ NavigationDialog }} from '{UI_DIALOG}';\n",
)


def tidy_imports(paths: list[Path]) -> None:
    """A new import line that landed after the relative (`./`) imports moves before the first of them."""
    for path in paths:
        text = path.read_text()
        for line in NEW_IMPORTS:
            at = text.find(line)
            first_relative = text.find("from './")
            if at < 0 or first_relative < 0 or at < first_relative:
                continue
            start = text.rfind("\nimport ", 0, first_relative) + 1
            text = text[:at] + text[at + len(line) :]
            text = text[:start] + line + text[start:]
        path.write_text(text)


def main() -> int:
    changed: list[Path] = []
    for label, run in [
        ("legacy", legacy_users),
        ("confirm", confirm_users),
        ("navigation-plain", navigation_plain_users),
        ("navigation-connect", navigation_connect_users),
        ("choice", choice_users),
    ]:
        for path in run():
            changed.append(path)
            print(f"{label}\t{path.relative_to(ROOT)}")
    tidy_imports(changed if len(sys.argv) < 2 else [ROOT / p for p in sys.argv[1:]])
    return 0


if __name__ == "__main__":
    sys.exit(main())
