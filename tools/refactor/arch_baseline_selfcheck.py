#!/usr/bin/env python3
"""Self-check of arch_baseline.translate and old_path_of (W15 same-step moved imports; P7-6 file rows).
Run: python3 arch_baseline_selfcheck.py"""
import importlib.util, pathlib, tempfile
spec = importlib.util.spec_from_file_location("ab", pathlib.Path(__file__).with_name("arch_baseline.py"))
ab = importlib.util.module_from_spec(spec); spec.loader.exec_module(ab)
moved = [("src/shared/UBTConnect_Utils/NoteListActions", "src/containers/NoteListActions", "NoteListActionsContainer")]
old = "src/shared/UBTConnect_Utils/NoteListActions"
assert "src/containers/NoteListActions" in ab.translate(old, moved)
assert "src/containers/NoteListActions/NoteListActionsContainer" in ab.translate(old, moved)
assert "src/containers/NoteListActions/mocks" in ab.translate(old + "/mocks", moved)
assert "src/containers/NoteListActions/NoteListActionsContainer.stories" in ab.translate(old + "/NoteListActions.stories", moved)
assert ab.translate("src/shared/Other/Thing", moved) == set()
assert "src/containers/Other" not in ab.translate(old, moved)

# P7-6: file rows (a source with an extension), a folder row with a folder target, and a block row in one phase.
ROWS = """source,origin,shape,target,phase,routes,status,notes
src/shared/lib/OSLink.tsx,,ui,src/components/ui/os/OSLink.tsx,PX,,,
src/shared/NavigationHandler/lib/actions.ts,,,src/lib/navigationEvent.ts,PX,,,
src/shared/Kit/Block/mocks.ts,,mock,src/mocks/modules/Kit/Block/mocks.ts,PX,,,
src/shared/Kit/Block,,component,src/components/kit/NewBlock/NewBlock.tsx,PX,,,
src/shared/test,,,src/test,PX,,,
src/shared/lib/cssText.ts,,,src/lib/cssText.ts,PY,,,
src/shared/Gone/Thing,,delete,,PX,,,
"""
with tempfile.TemporaryDirectory() as tmp:
    ab.MOVE_MAP = pathlib.Path(tmp) / "move-map.csv"
    ab.MOVE_MAP.write_text(ROWS)
    of = ab.old_path_of
    assert of("src/components/ui/os/OSLink.tsx", "PX") == "src/shared/lib/OSLink.tsx"
    assert of("src/components/ui/os/OSLink.test.tsx", "PX") == "src/shared/lib/OSLink.test.tsx"
    assert of("src/components/ui/os/OSBlock.tsx", "PX") is None  # a file that was already there
    assert of("src/lib/navigationEvent.ts", "PX") == "src/shared/NavigationHandler/lib/actions.ts"
    assert of("src/lib/navigationEvent.test.ts", "PX") == "src/shared/NavigationHandler/lib/actions.test.ts"
    assert of("src/mocks/modules/Kit/Block/mocks.ts", "PX") == "src/shared/Kit/Block/mocks.ts"
    assert of("src/components/kit/NewBlock/NewBlock.tsx", "PX") == "src/shared/Kit/Block/Block.tsx"
    assert of("src/components/kit/NewBlock/NewBlock.stories.tsx", "PX") == "src/shared/Kit/Block/Block.stories.tsx"
    assert of("src/components/kit/NewBlock/types.ts", "PX") == "src/shared/Kit/Block/types.ts"
    assert of("src/test/PendingBlock.tsx", "PX") == "src/shared/test/PendingBlock.tsx"
    assert of("src/lib/cssText.ts", "PX") is None  # row of another phase
    mm = ab.moved_modules("PX")
    assert ab.translate("src/shared/lib/OSLink", mm) == {"src/components/ui/os/OSLink"}
    assert ab.translate("src/shared/NavigationHandler/lib/actions", mm) == {"src/lib/navigationEvent"}
    assert ab.translate("src/shared/Kit/Block/mocks", mm) == {"src/mocks/modules/Kit/Block/mocks"}  # file row first
    assert "src/components/kit/NewBlock/NewBlock" in ab.translate("src/shared/Kit/Block", mm)
    assert ab.translate("src/shared/test/PendingBlock", mm) == {"src/test/PendingBlock"}
    assert ab.translate("src/shared/lib/OSLinkX", mm) == set()
    assert ab.translate("src/shared/Gone/Thing", mm) == set()
print("ok")
