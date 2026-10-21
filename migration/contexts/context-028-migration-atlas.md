# context-028 · UBTConnect Migration Atlas (Vietnamese), generator + artifact (2026-10-17)

## Result
- **Artifact:** https://claude.ai/artifact/3hdwknwesDivgPhybgaMdE (private; the user shares it).
- **Local copy:** `migration/atlas/site/index.html`, which opens from the file system.
- **Generator:** `migration/atlas/build_atlas.py`.
  - It reads `migration/` and `app/docs/`, and only rewrites changed files.
  - `stale`, `check` and `stamp` keep the written text in step with its sources.
  - Guide: `migration/atlas/README.md`; schema: `CONTENT-SCHEMA.md`.
- **Contents:**
  - 8 narrative sections in Vietnamese: overview, capture, process, assumptions, architecture, data flows, PWA, update.
  - Reference pages: screens (64 build + 19 skip), stack and ADRs, patterns, exemptions (all kinds), `app/docs`,
    knowledge, contexts.
  - 64 route pages: states with TST (masked) and React screenshots side by side, actions, API calls, data flow and
    mermaid diagrams, assumptions and questions, deliberate differences, original spec.
- **Routes without a TST capture (14):** their `no-capture.json` reason is shown with a React screenshot
  (`migration/atlas/shoot.cjs`, dev server).

## Decisions (who, date)
- User, 2026-10-17:
  - Vietnamese first, English later;
  - a new artifact (the old Atlas of 2026-10-15, https://claude.ai/artifact/5YMSmix7wWYLjpZWtL7wXu, is left as is);
  - TST and React side by side.

## Facts learned (evidence)
- **Pre-publish review:**
  - 5 Sonnet reviewers read all published text: 0 sensitive data. The orchestrator viewed all 312 images on contact
    sheets.
  - About 60 content corrections were made in two passes. Most came from stale "proposed exemption" wording copied from
    specs.
  - The reviewers saw only `rules`. `callOrderFree` and `ignoreSubtrees` also hold applied exemptions; the generator
    now lists them.
- **Stale project docs fixed on the way:**
  - `app/docs/README.md` and `architecture/overview.md`: B1–B13; external apps are Trove, HR100, Community Tradelink
    and El Gusto.
  - `guides/shell.md`: NetworkDetection ping.
  - `app/docs/reference/*` regenerated (ADR-11 to ADR-14).
  - PWA plan: P10 accepted.
- **Specs lag behind later fixes** (e.g. the HomeFeed F1 search, CR-Profile-2 applied). The Atlas text follows
  `feedback.md`, the CRs and the code.

## Files changed
- `migration/atlas/**` (new), `app/docs/{README.md,architecture/overview.md,guides/shell.md,reference/*}`,
  `migration/pwa/pwa-discussion-plan.md`, `migration/metrics/ledger.csv` (agents: 5 writers, 5 reviewers, 5 fixers).

## Open issues
- Data worth the user's look:
  - "Test Noti 56" and "Save draft 02:50" are TST test notification titles;
  - the LegacyShareObject spec quotes a TST object id with the title "Test Household";
  - the Locality_Details spec names "Sample North".
- ADR-9's text says the manifest has scope `/UBTConnect/`. The TST manifest has no scope. The ADR is left as recorded.

## Next
- English version on request (`--lang en`). Rebuild and republish only the changed files after project changes.
