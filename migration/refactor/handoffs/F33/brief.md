# Brief · F33 · One NetworkWarning with the OutSystems DOM ids

Fix step outside `steps.json` (no `rf.py` state). Decision: user, 2026-10-24 ("ok tôi duyệt hết"),
`migration/refactor/followups.md` row F33.

| Field | Value |
|---|---|
| Kind | merge of two ports of one block; DOM ids change on 2 routes (approved by the user) |
| Parity level | visual, all routes |
| Developer model | sonnet |
| Handoff folder | `migration/refactor/handoffs/F33/` |

## Facts

- `app/src/components/ui/NetworkWarning/NetworkWarning.tsx` (props `id?`, `onTryAgain?`) renders the inner
  `<Animate>` without an id. Users: `pages/LDM_MyEvents_V2/components/MyTimeline_V2.tsx` and
  `pages/LDM_Email_V2/components/LdmEventEmailView.tsx`.
- `app/src/pages/MyBookmarks/components/NetworkWarning.tsx` gives the inner Animate the id `<scope>-$b1`
  (`scope = id.replace('$','')`). User: `MyBookmarksView.tsx`.
- Both port `Connect2_LegacyShared.Widgets.NetworkWarning`. The OutSystems capture
  `app/src/components/ui/NetworkWarning/__captures__/v1.html` has `data-block="Interaction.Animate"` with
  `id="b1-b9-b5-$b1"`: the OutSystems DOM has the Animate id.

## Change

1. `components/ui/NetworkWarning`: when `id` is given, the inner Animate gets `${scope}-$b1` (same rule as the
   MyBookmarks copy); without `id`, no Animate id. Keep everything else of the ui copy (classes, texts, props).
   Compare both copies line by line first and keep any other difference that matches the capture.
2. Delete `pages/MyBookmarks/components/NetworkWarning.tsx`; `MyBookmarksView.tsx` imports the ui component. The
   MyBookmarks DOM must stay the same.
3. The two LDM routes gain the Animate id: this is the approved DOM change. No other DOM change.
4. Update the NetworkWarning test, story and README (the id rule, the capture as evidence); `@origin` tags as the
   file style.

## Tests

- NetworkWarning: with `id="b1-b9-$b5"` the Animate has `id="b1-b9-b5-$b1"` (the capture); without `id`, no id.
- MyBookmarks and the two LDM page tests still pass; add a DOM assertion of the Animate id on one LDM test.

## Gate commands for the tester

```
npm --prefix app run ci
npm --prefix app run lint:arch   # no new warning
python3 migration/tools/refactor/arch_baseline.py check   # 0 new
python3 migration/tools/refactor_parity.py --level visual --all --ref both --app http://localhost:5174 --report migration/refactor/handoffs/F33/parity.md
npm --prefix app run build && node app/build/bundle-report.mjs
cd app && npx jscpd --version >/dev/null 2>&1 && echo "check the NetworkWarning clone is gone (P7-4 jscpd command)"
```

## Not in this step

`migration/refactor/followups.md`, CHANGELOG, move-map: the master and the documenter do them after the test.
