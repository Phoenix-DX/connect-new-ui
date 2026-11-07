"""Unit tests of survey_diff.py (pure functions only; no TST access)."""
import os
import sys
import unittest

sys.path.insert(0, os.path.dirname(__file__))
import survey_diff as sd  # noqa: E402


class Normalise(unittest.TestCase):
    def test_masks_debugger_ids_and_whitespace(self):
        a = 'x = 1;\n  OutSystemsDebugger.A("abcdefghijklmnopqrst12", y);\r\n'
        b = 'x=1;\nOutSystemsDebugger.A("ZZZZZZZZZZZZZZZZZZZZZZ", y);'
        self.assertEqual(sd.normalise(a), sd.normalise(b))

    def test_keeps_other_strings(self):
        self.assertNotEqual(sd.normalise('f("abcdefghijklmnopqrst12")'), sd.normalise('f("ZZZZZZZZZZZZZZZZZZZZZZ")'))


class Surveys(unittest.TestCase):
    def test_added_removed_changed(self):
        live = {"a.js": "1", "b.js": "2 ", "c.js": "new"}
        prev = {"a.js": "1", "b.js": "3", "d.js": "old"}
        d = sd.diff_surveys(live, prev)
        self.assertEqual(d["added"], ["c.js"])
        self.assertEqual(d["removed"], ["d.js"])
        self.assertEqual(d["changed"], ["b.js"])
        self.assertEqual(d["same"], 1)


class Routes(unittest.TestCase):
    def test_changed_and_missing(self):
        live = {"M.F.A.mvc.js": "a2", "M.F.B.mvc.js": "b"}
        manifests = {
            "R1": {"raw": {"M.F.A.mvc.js": "raw/A", "M.F.B.mvc.js": "raw/B"}},
            "R2": {"raw": {"M.F.A.mvc.js": "raw/A", "M.F.Gone.mvc.js": "raw/G"}},
        }
        texts = {"raw/A": "a1", "raw/B": " b ", "raw/G": "g"}
        r = sd.compare_routes(live, manifests, texts.__getitem__)
        self.assertEqual(list(r["changed"]), ["M.F.A.mvc.js"])
        self.assertEqual(r["changed"]["M.F.A.mvc.js"]["routes"], ["R1", "R2"])
        self.assertEqual(r["missing"], {"M.F.Gone.mvc.js": ["R2"]})

    def test_short(self):
        self.assertEqual(sd.short("UBTConnect.Flow.Block.mvc.js"), "Block")
        self.assertEqual(sd.short("UBTConnect.model.js"), "model")


if __name__ == "__main__":
    unittest.main()
