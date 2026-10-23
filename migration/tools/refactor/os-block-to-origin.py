"""P6-G3-B (per route): replace the first-line `// @os-block <name>` tag of the files in a folder by the JSDoc tag
`/** @origin <name> */` (R4). The name and the rest of the file do not change.

  python3 migration/tools/refactor/os-block-to-origin.py app/src/pages/<Route>/components

Run from the project root. Prints each changed file.
"""
import pathlib
import re
import sys

TAG = re.compile(r"\A// @os-block ([\w.]+)\n")

for folder in sys.argv[1:]:
    for path in sorted(pathlib.Path(folder).glob("*.ts*")):
        text = path.read_text()
        hit = TAG.match(text)
        if hit is None:
            continue
        path.write_text(f"/** @origin {hit.group(1)} */\n" + text[hit.end():])
        print(path)
