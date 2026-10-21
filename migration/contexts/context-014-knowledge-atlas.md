# context-014 · Connect 2.0 Atlas: team knowledge dashboard (outside the pipeline)

Date: 2026-10-15 · Phase: none (knowledge sharing) · Status: superseded by context-031 (artifact deleted)

## Result
- Published the artifact **Connect 2.0 Atlas** (private, owner shares it): https://claude.ai/artifact/5YMSmix7wWYLjpZWtL7wXu
- Sections (Vietnamese): overview + progress by wave, screen map (12 areas, mermaid area graph), searchable catalog of
  83 screens, startup and sign-in (mermaid flow), app shell, architecture (OutSystems modules → React stack, patterns,
  rules, ADRs), data and integrations, feature flags, UI library, scope decisions, roadmap, glossary, source files.
- Built from `app/` excluded; sources were `migration/` and `capture/` only. No member data, no `.auth/`, no `.raw/`.

## Decisions
- None asked or taken. Wording of the page is a summary; the board, ADRs and knowledge files stay the source.

## Facts learned
- Status counts at publish (board): 6 finished, 1 review (MyEntertaining), 2 building (Search, Services),
  8 ready, 24 waiting for foundation, 42 skip.
- Screen purposes: grounded in a route spec for 9 screens; the other 74 are inferred from name, flow and links and are
  marked as such on the page.
- `catalog/blocks.json` `builtAt` counts 89 built blocks, while contexts 007/011/013 report 49 + 42 + 36 = 127; the
  page uses 127.

## Files changed
- `migration/metrics/ledger.csv`: 4 lines `_knowledge` / `other` (Sonnet extraction agents, 430k tokens).
- Page source and generator stayed in the session scratchpad (not in the repo).

## Open issues
- The page is a snapshot of 2026-10-15; numbers age as routes finish. Rebuilding needs the generator, which is not in
  the repo (ask the user whether to keep it under `migration/tools/`).

## Next
- Pipeline unchanged: MyEntertaining review, Search questions, Services review ([context-013](context-013-wave3-foundation.md)).
