# Triage judge brief (TST sync wave, 2026-11-07)

You are the judge. You read the reader notes and set the class of each route item. You write facts and one
recommendation per question. You do not change code, captures or exemptions. Never open `.auth/` or `migration/.raw/`.
Budget: at most 60 tool calls; read each file once; write with the Write tool.

## Read

1. `migration/sync/triage-brief.md` (the classes and the evidence sources the readers used).
2. `migration/sync/triage-notes/reader-1.md`, `reader-2.md`, `reader-3.md` (30 routes).
3. `migration/sync/triage-2026-11-07.md` (the draft table with class `?`, the exemptions used, the unused rules).
4. `migration/sync/capture-2026-11-07.md` (which captures failed and were kept).
5. When a reader wrote "Unsure", open the evidence it names (one file, a line range) and settle it or keep it unsure.

## Write

1. `migration/sync/triage-2026-11-07.md`: fill the table in place. Rules of the table (`sync.py import` reads it):
   - `Class` is exactly one letter `A`, `B`, `C` or `D`. A mixed route gets the letter of the part that needs code
     (A before B before D before C) and the mix in `Note` (for example `A + C: skeleton in default`).
   - `Shared paths`: the shared component paths the reader found (`app/src/components/<x>/**`), comma-separated, or `-`.
     A route with a shared path runs alone in the fix wave; name only paths the fix must touch.
   - `Dev model`: `opus` (default). `sonnet` only for a class B route of size S with no shared path.
   - `Note`: ≤ 20 words, no `|` character. Size S/M/L goes first (`S:` …).
   - Keep the header, the separator line and one row per route; the table ends at the first blank line.
2. The section `## Questions for the user` of the same file: one numbered question per decision the user must take,
   each with: the route(s), the evidence (file:line or report), the options `a` / `b` / `c`, and your recommendation
   with a one-line reason and your confidence (high, medium, low). Decisions that belong here:
   - every class C or D route (exemption, re-capture with a longer settle, keep the old capture, or fix);
   - a route whose fresh capture is a worse reference than the previous one (an empty list, a skeleton, a missing
     card): keep the fresh capture, or restore the previous analysis from git commit `2fe9efaf` for that route;
   - the DRIFT exemption rules and the unused rules: keep or remove, grouped;
   - anything a reader marked unsure that you could not settle.
3. The section `## Wave order`: the items in the order the fix wave should take them: class B and small A page-only
   items first (parallel), then the shared-path items (alone, one at a time, the most-used block first), then the
   large A items, then C/D after the user's answers. One line per group with the routes.

Do not add a fact that the notes, the reports or the files do not show. Do not decide for the user: a question stays
a question with a recommendation. Return only: the counts per class, the number of questions, and the wave order.
