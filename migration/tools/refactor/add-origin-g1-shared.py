"""P6-G1-B-Shared: prepend the @origin JSDoc tag to the main file of each moved shared block.
Usage: python3 add-origin-g1-shared.py <csv with origin,target>. Run from the repository root."""
import csv, pathlib, sys
for r in csv.DictReader(open(sys.argv[1])):
    p = pathlib.Path('app') / r['target']
    t = p.read_text()
    if '@origin' not in t:
        p.write_text(f"/** @origin {r['origin']} */\n" + t)
