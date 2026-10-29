"""Build the artifact page from the template and a data file.
Usage: python3 migration/clarify/tools/artifact_build.py [--template …/template.html] [--data …/data.vi.json] [--out …/infra-readiness.vi.html]
English page: --template template-gaps.html --data data.en.json --out react-gaps.en.html
"""
import argparse, json, os
ap = argparse.ArgumentParser()
ap.add_argument("--data", default="migration/clarify/artifact/data.vi.json")
ap.add_argument("--out", default="migration/clarify/artifact/infra-readiness.vi.html")
ap.add_argument("--template", default="migration/clarify/artifact/template.html")
a = ap.parse_args()
tpl = open(a.template, encoding="utf-8").read()
data = json.load(open(a.data, encoding="utf-8"))
js = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
html = tpl.replace("/*__DATA__*/", js)
open(a.out, "w", encoding="utf-8").write(html)
print(a.out, len(html) // 1024, "KB")
