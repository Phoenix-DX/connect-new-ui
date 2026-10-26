"""P6-G5-B-MilestoneDetail: strip the inline compiled-line references (`SB :2355-2410`, `MW :258-260`, `S :530-617`,
`C:2052-2132`) from the rewritten files of the route (plan v2 §2.4 rule 13). Prints what stays for a manual edit.

Usage: python3 -I migration/tools/refactor/strip-compiled-lines-milestonedetail.py <app/src/pages/MilestoneDetail>
"""
import pathlib
import re
import sys

FILES = [
    'MilestoneDetailPage.tsx',
    'components/AccommodationHostView.tsx',
    'components/MilestoneWrapperView.tsx',
    'hooks/accommodationHostState.ts',
    'hooks/milestoneWrapperState.ts',
    'hooks/useAccommodationHost.ts',
    'hooks/useMilestoneWrapper.ts',
]
RANGE = r'[0-9]+(?:-[0-9]+)?'
REF = rf'(?:SB|MW|S|C) ?:{RANGE}(?:,? (?:and )?:{RANGE})*'
PATTERNS = [
    # " (SB :2355-2410)", " (C:2052-2132)", " (SB :1974-2032, :2567-2616)", " (SB :430-487 and :1180-1240)"
    (re.compile(rf' \({REF}\)'), ''),
    # "(e.g. OnHandle_NavigateTo_GuestArrangements S :530-580)" → "(e.g. OnHandle_NavigateTo_GuestArrangements)"
    (re.compile(rf' {REF}\)'), ')'),
    # "(SB :2451-2535, :672)" handled above; "(OnHandle_ContactHelpdesk (S :656-723): ..." handled above
]

root = pathlib.Path(sys.argv[1])
for name in FILES:
    path = root / name
    text = path.read_text()
    new = text
    for pattern, repl in PATTERNS:
        new = pattern.sub(repl, new)
    if new != text:
        path.write_text(new)
        print('stripped', name)
    for n, line in enumerate(new.splitlines(), 1):
        if re.search(r':[0-9]{2,}|analysis/sources|runtime-sources', line):
            print(f'  left {name}:{n}: {line.strip()}')
