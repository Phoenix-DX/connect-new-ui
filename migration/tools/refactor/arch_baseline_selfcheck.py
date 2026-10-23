#!/usr/bin/env python3
"""Self-check of arch_baseline.translate (W15 same-step moved imports). Run: python3 arch_baseline_selfcheck.py"""
import importlib.util, pathlib
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
print("ok")
