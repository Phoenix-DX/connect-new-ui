## Result
status: pass
summary: The Filter_Pills CustomContainer of Notes no longer sets HorizontalSizeId Base, so `padding-x-base` is gone (TST `UBTConnect.Notes.Notes.mvc@7627c137.js:539-543` sets only `verticalSizeIdAttr = extraSmall`). Notes.test.tsx now clicks "Apply" (the shared FilterSheet label). Loop 1: the skeleton card in `hooks/notesState.ts` now uses `OS_NULL_DATE_TIME` (`@/lib/osDateTime`, the same string `1900-01-01T00:00:00`) instead of the literal, so `consistency_check.py --screen Notes` is OK. `@/lib/os-wire` has no null DateTime constant (only `osDate`, a reader that returns null), so the shared constant of `@/lib/osDateTime` keeps the same value. Parity is clean in all 3 states.

## Files changed
app/src/pages/Notes/NotesPage.tsx
app/src/pages/Notes/Notes.test.tsx
app/src/pages/Notes/hooks/notesState.ts (loop 1)
migration/sync/handoffs/Notes/dev.md

## Commands run
Loop 1 (after the last code change):
python3 tools/pipeline/consistency_check.py --screen Notes → "consistency: Notes OK"
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/Notes → 5 files, 38 tests passed
cd app && npx eslint src/pages/Notes/hooks/notesState.ts → exit 0
npm --prefix app run arch → no dependency violations (139 known violations ignored)
python3 tools/pipeline/route.py parity Notes --app http://localhost:5173 → "parity clean":
- default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.15%, worst tile 8.8%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×54, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED×1, ignoreSubtrees×1, CAPTURE-MASKED-PILL-TEXT-NOTES-WIDTH×1
- loading: all 0; pixels 0.00%, worst tile 0.0%; exempted: ignoreSubtrees×1
- offline: all 0; pixels 0.02%, worst tile 2.2%; exempted: CAPTURE-LINK-HREF-CURSOR-HOMEFEED×54, CAPTURE-SKELETON-SHIMMER-PHASE×50, ignoreSubtrees×7, CAPTURE-BADGE-MASKED-TEXT-HOMEFEED×1

First pass: curl http://localhost:5173/UBTConnect/Notes → 200 (vite cwd /Users/khaitruong/Projects/connect-new/app); eslint of NotesPage.tsx and Notes.test.tsx → exit 0.

## Deviations from the brief
none. I did not use the grants for `app/src/components/filter/FilterSheet/**` and `app/src/components/filter/HorizontalFilterTagList/**`. The TagList id and the row ids (`b9-TagList`, `b9-l1-62_<n>-$b4` in the Notes capture) give no Notes parity row, so the shared component stays as it is. Loop 1: the constant comes from `@/lib/osDateTime`, not `@/lib/os-wire`, because os-wire has no such constant and lib is outside the allowed paths.

## Questions for the user
none
