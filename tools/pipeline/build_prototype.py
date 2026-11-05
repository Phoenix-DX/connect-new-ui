#!/usr/bin/env python3
"""
build_prototype.py: assemble a single-file review prototype from an analysis folder and screen code.

Usage:
  python3 build_prototype.py --analysis analysis/<Screen> --app <Screen>.app.js \
      --title "<Screen> · React prototype" --out <Screen>-prototype.html

--app is the per-screen code (see references/prototype-guide.md). It must define APP_CONFIG and
PhoneApp, and may use the harness helpers: html, store, useSettings, flag, log, delay, OSBlock,
Missing, asset, osImage, missingImage, mockPhoto.
The original stylesheets (styles/bundle.css) and assets (styles/assets.json) are embedded so the
page renders with the real CSS inside an isolated iframe.
"""
import argparse, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = os.path.join(HERE, "..", "assets", "prototype-template.html")

ap = argparse.ArgumentParser()
ap.add_argument("--analysis", required=True)
ap.add_argument("--app", required=True)
ap.add_argument("--title", default="Screen prototype")
ap.add_argument("--out", required=True)
a = ap.parse_args()

css = open(os.path.join(a.analysis, "styles", "bundle.css"), encoding="utf-8").read()
assets = open(os.path.join(a.analysis, "styles", "assets.json"), encoding="utf-8").read()
facts = json.load(open(os.path.join(a.analysis, "facts.json"), encoding="utf-8"))
app = open(a.app, encoding="utf-8").read()
env = facts.get("env", {})
env_min = {k: env.get(k) for k in ("htmlClass", "bodyClass", "bodyStyle", "viewport", "path")}
if "</script" in css.lower() or "</script" in app.lower():
    sys.exit("refusing to embed: '</script' found in CSS or app code")

page = open(TEMPLATE, encoding="utf-8").read()
for key, val in (("__TITLE__", a.title), ("__CSS__", css), ("__ASSETS__", assets), ("__ENV__", json.dumps(env_min)), ("__APP__", app)):
    page = page.replace(key, val, 1)
with open(a.out, "w", encoding="utf-8") as f:
    f.write(page)
print(f"wrote {a.out} ({len(page)/1e6:.1f} MB)")
