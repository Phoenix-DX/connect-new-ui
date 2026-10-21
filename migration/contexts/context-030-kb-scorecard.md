# context-030 · UBTConnect KB Scorecard (2026-10-20)

## Result
- English dashboard that scores the Build KB: https://claude.ai/artifact/XYMXRowyB1tzY6zmZ3YBFd (private).
  Local copy `migration/scorecard/site/index.html`; generator `migration/scorecard/build_scorecard.py`.
- 9 sections: Overview, Spec scorecard, Coverage heatmap, API & data, Components, Navigation, Architecture,
  Domain knowledge, Gaps & risks. No migration progress (no waves, parity status, finished dates).
- First scores: KB 82/100 (B) = 60% spec average 76.2 + 40% foundation 90.1. Specs: 21 A, 28 B, 3 C, 12 D.
  Weakest dimension: certainty (13.1/20), then behavior (14.3/20).

## Decisions (who, date)
- User 2026-10-20 approved the 9 sections, equal weights 20×5, a new artifact, and a static snapshot.
- Plain HTML page, not the Dashboard artifact type: this session cannot attach data files to that type.
  An empty Dashboard-type artifact was created first (https://claude.ai/artifact/LMdFF3WiAXbxPZ1NsCyuxZ); delete only if the user asks.

## Facts learned (evidence)
- Rubric is in `build_scorecard.py` (`score_screen`). Spec gaps (63, Vietnamese in the Atlas) are translated
  and categorised in `migration/scorecard/content/gaps-en.json`; the build stops if a new gap has no translation.
- 69 of 165 operations have no input description; 40 of 238 components are used by no screen.

## Files changed
- `migration/scorecard/**` (new).

## Next
- After a KB rebuild: `python3 migration/scorecard/build_scorecard.py`, then republish `site/index.html` to the URL above.
