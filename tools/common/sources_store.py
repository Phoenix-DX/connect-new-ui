#!/usr/bin/env python3
"""The shared store of the compiled TST sources and styles of the captured routes.

Layout (repository root relative):
  migration/sources/raw/<name>          compiled file as TST serves it (one copy per distinct content)
  migration/sources/pretty/<name>       the pretty-printed copy (jsbeautifier) of the same file
  migration/sources/styles/<stem>@<sha8><ext>   bundle.css and assets.json of a capture (always suffixed)
  migration/sources/survey/<name>       copies of the live survey for files no capture holds (routes without a capture,
                                        the block packs); a copy of another survey version gets <stem>@<sha8><ext>
  migration/sources/runtime/<name>      the OutSystems runtime, module and plugin files fetched read-only from TST
                                        (index: migration/knowledge/runtime-sources.md); live-files.txt lists the
                                        files TST changed after the captures (the route check reads those live)
  migration/sources/contract/<name>     producer-module *.model.js fetched for the API contract (contract_gen.py)
  migration/sources/shell/<name>        module and UI flow controllers, client variables of the app shell
  migration/screens/<S>/analysis/manifest.json  {"raw": {name: path}, "pretty": {...}, "styles": {...}}

Only raw, pretty and styles are per route (manifest). The other four kinds are plain folders: `check` and `gc` leave
them alone. `migration/sources/pinned.txt` lists older versions that a document still cites: `check` and `gc` treat
them as referenced.

Rules:
  * a store file is never overwritten: same content (sha1) = no-op; another content under a used name gets
    <stem>@<sha8><ext>; the first version keeps the plain name and is never renamed;
  * the manifest keys are the file names the facts use (facts.json renderedFiles, otherSourceFiles, js); the values
    are store paths relative to the repository root;
  * the mtime of a store file is the newest mtime of the copies it replaced (contract_gen.py orders fetched copies
    by mtime).

Usage (project root):
  python3 tools/common/sources_store.py migrate [--keep-copies]   # build the store and the manifests from the per-route copies; delete the copies unless --keep-copies
  python3 tools/common/sources_store.py check        # every manifest entry exists, every store file is referenced
  python3 tools/common/sources_store.py gc           # delete the store files no manifest references (after a recapture)

Tools import it with: sys.path.insert(0, os.path.join(ROOT, "tools", "common")); import sources_store
"""
from __future__ import annotations

import glob
import hashlib
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
STORE = os.path.join(ROOT, "migration", "sources")
SCREENS = os.path.join(ROOT, "migration", "screens")
KINDS = ("raw", "pretty", "styles")
ALWAYS_SUFFIX = {"styles"}
SURVEY_KIND = "survey"  # copies of the live survey for the routes without a capture; no manifest names them
EXTRA_KINDS = ("survey", "runtime", "contract", "shell")  # plain folders, no manifest; check and gc leave them alone
RUNTIME = os.path.join(STORE, "runtime")
CONTRACT = os.path.join(STORE, "contract")
SHELL = os.path.join(STORE, "shell")
LIVE_LIST = os.path.join(RUNTIME, "live-files.txt")
PINNED = os.path.join(STORE, "pinned.txt")  # older versions a document still cites: check and gc keep them
SURVEY = os.path.join(ROOT, "migration", "survey", "survey-UBTConnect.json")
_SURVEY_SOURCES: dict | None = None


def _sha(data: bytes) -> str:
    return hashlib.sha1(data).hexdigest()


def _bytes(text) -> bytes:
    return text if isinstance(text, bytes) else text.encode("utf-8")


def rel(path: str) -> str:
    return os.path.relpath(path, ROOT)


def manifest_path(screen: str) -> str:
    return os.path.join(SCREENS, screen, "analysis", "manifest.json")


def manifest_dir(analysis_dir: str) -> dict:
    """The manifest of an analysis folder (any folder: analyze_capture may write to a scratch --out)."""
    return _load(os.path.join(analysis_dir, "manifest.json"))


def write_manifest_dir(analysis_dir: str, m: dict) -> None:
    _dump(os.path.join(analysis_dir, "manifest.json"), m)


def _load(p: str) -> dict:
    if not os.path.exists(p):
        return {k: {} for k in KINDS}
    m = json.load(open(p, encoding="utf-8"))
    for k in KINDS:
        m.setdefault(k, {})
    return m


def manifest(screen: str) -> dict:
    return _load(manifest_path(screen))


def write_manifest(screen: str, m: dict) -> None:
    _dump(manifest_path(screen), m)


def _dump(p: str, m: dict) -> None:
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        json.dump({k: dict(sorted(m.get(k, {}).items())) for k in KINDS}, f, indent=1, ensure_ascii=False)
        f.write("\n")


def put(kind: str, name: str, text, mtime: float | None = None) -> str:
    """Store `text` under `name`; return the store path (repository root relative)."""
    assert kind in KINDS or kind in EXTRA_KINDS, kind
    data = _bytes(text)
    sha = _sha(data)
    stem, ext = os.path.splitext(name)
    plain = os.path.join(STORE, kind, name)
    suffixed = os.path.join(STORE, kind, f"{stem}@{sha[:8]}{ext}")
    candidates = [suffixed] if kind in ALWAYS_SUFFIX else [plain, suffixed]
    target = None
    for p in candidates:
        if os.path.exists(p):
            if _sha(open(p, "rb").read()) == sha:
                target = p
                break
        else:
            target = p
            break
    if target is None:  # plain and suffixed both exist with other content: cannot happen for sha1-named files
        raise RuntimeError(f"store collision for {kind}/{name}")
    if not os.path.exists(target):
        os.makedirs(os.path.dirname(target), exist_ok=True)
        with open(target, "wb") as f:
            f.write(data)
        if mtime:
            os.utime(target, (mtime, mtime))
    elif mtime and mtime > os.path.getmtime(target):
        os.utime(target, (mtime, mtime))
    return rel(target)


def route_files(screen: str, kind: str) -> dict:
    """{name: store path} of one route."""
    return dict(manifest(screen).get(kind, {}))


def all_manifests() -> dict:
    """{screen: manifest} of every route that has one."""
    out = {}
    for p in sorted(glob.glob(os.path.join(SCREENS, "*", "analysis", "manifest.json"))):
        out[p.split(os.sep)[-3]] = manifest(p.split(os.sep)[-3])
    return out


def all_files(kind: str) -> dict:
    """{store path: [screens]} over every manifest, one entry per store file."""
    out: dict[str, list[str]] = {}
    for screen, m in all_manifests().items():
        for p in m.get(kind, {}).values():
            out.setdefault(p, []).append(screen)
    return out


def base_name(store_path: str) -> str:
    """The file name without the @<sha8> suffix."""
    b = os.path.basename(store_path)
    stem, ext = os.path.splitext(b)
    if "@" in stem and len(stem.rsplit("@", 1)[1]) == 8:
        stem = stem.rsplit("@", 1)[0]
    return stem + ext


def find(name: str, kind: str) -> list[str]:
    """Store paths (repository root relative) of every version of `name`, plain name first."""
    stem, ext = os.path.splitext(name)
    hits = []
    plain = os.path.join(STORE, kind, name)
    if os.path.exists(plain):
        hits.append(rel(plain))
    hits += sorted(rel(p) for p in glob.glob(os.path.join(STORE, kind, glob.escape(stem) + "@????????" + ext)))
    return hits


def read(store_path: str, errors: str = "replace") -> str:
    return open(os.path.join(ROOT, store_path), encoding="utf-8", errors=errors).read()


def survey_path(name: str) -> str | None:
    """The store copy (`survey/<name>`) of a compiled file that only the live survey has (a block no captured route
    loaded, or a route without a capture). Made from migration/survey/survey-UBTConnect.json on first use; None when the
    survey is missing and no copy exists. `check` and `gc` leave the `survey/` kind alone."""
    global _SURVEY_SOURCES
    existing = os.path.join(STORE, SURVEY_KIND, name)
    if os.path.exists(existing):
        return rel(existing)
    if _SURVEY_SOURCES is None:
        try:
            _SURVEY_SOURCES = json.load(open(SURVEY, encoding="utf-8")).get("sources", {})
        except (OSError, ValueError):
            _SURVEY_SOURCES = {}
    text = _SURVEY_SOURCES.get(name)
    if not isinstance(text, str) or not text:
        return None
    return put(SURVEY_KIND, name, text)


def live_files() -> set[str]:
    """The names of the compiled files TST changed after the captures (migration/sources/runtime/live-files.txt).
    The route check reads those from runtime/ in place of the captured copy (TST wins)."""
    try:
        return {ln.strip() for ln in open(LIVE_LIST, encoding="utf-8") if ln.strip() and not ln.startswith("#")}
    except OSError:
        return set()


def pinned() -> set[str]:
    """Absolute paths of the store files that pinned.txt keeps (an older version a document still cites)."""
    out = set()
    try:
        for ln in open(PINNED, encoding="utf-8"):
            ln = ln.split("#", 1)[0].strip()
            if ln:
                out.add(os.path.normpath(os.path.join(ROOT, ln)))
    except OSError:
        pass
    return out


def runtime_path(name: str) -> str | None:
    """Store path (repository root relative) of a runtime file, or None."""
    p = os.path.join(RUNTIME, name)
    return rel(p) if os.path.isfile(p) else None


# ------------------------------------------------------------------------------------------------- commands
def _route_dirs():
    for d in sorted(glob.glob(os.path.join(SCREENS, "*", "analysis"))):
        yield d.split(os.sep)[-2], d


def cmd_migrate(keep_copies: bool = False) -> int:
    """Build the store and the manifests from the per-route copies. Without --keep-copies the copies are deleted
    (they are tracked in git: `git checkout -- migration/screens` restores them)."""
    files = distinct_before = 0
    size_before = 0
    routes = 0
    for screen, an in _route_dirs():
        src_raw = os.path.join(an, "sources", "raw")
        styles = os.path.join(an, "styles")
        if not os.path.isdir(src_raw) and not os.path.isdir(styles):
            continue
        m = manifest(screen)
        plan = []  # (kind, name, path)
        for kind in ("raw", "pretty"):
            d = os.path.join(an, "sources", kind)
            if os.path.isdir(d):
                plan += [(kind, f, os.path.join(d, f)) for f in sorted(os.listdir(d)) if os.path.isfile(os.path.join(d, f))]
        if os.path.isdir(styles):
            plan += [("styles", f, os.path.join(styles, f)) for f in sorted(os.listdir(styles)) if os.path.isfile(os.path.join(styles, f))]
        for kind, name, p in plan:
            data = open(p, "rb").read()
            target = put(kind, name, data, os.path.getmtime(p))
            if open(os.path.join(ROOT, target), "rb").read() != data:
                raise SystemExit(f"byte-equality failed: {rel(p)} != {target}")
            m[kind][name] = target
            files += 1
            size_before += len(data)
        write_manifest(screen, m)
        if not keep_copies:
            for kind, name, p in plan:
                os.remove(p)
            for d in (os.path.join(an, "sources", "raw"), os.path.join(an, "sources", "pretty"), os.path.join(an, "sources"), styles):
                if os.path.isdir(d) and not os.listdir(d):
                    os.rmdir(d)
        routes += 1
    store_files = [p for p in glob.glob(os.path.join(STORE, "*", "*")) if os.path.isfile(p)]
    size_after = sum(os.path.getsize(p) for p in store_files)
    print(f"migrate: {routes} routes, {files} copies ({size_before / 2**20:.0f} MB) -> {len(store_files)} store files "
          f"({size_after / 2**20:.0f} MB); byte-equality checked for every copy")
    return 0


def cmd_check() -> int:
    bad = 0
    referenced = set(pinned())
    for p in referenced:
        if not os.path.isfile(p):
            print(f"pinned but missing: {rel(p)}"); bad += 1
    for screen, m in all_manifests().items():
        for kind in KINDS:
            for name, p in m.get(kind, {}).items():
                full = os.path.join(ROOT, p)
                if not os.path.isfile(full):
                    print(f"missing: {screen} {kind} {name} -> {p}"); bad += 1
                    continue
                referenced.add(os.path.normpath(full))
                if base_name(p) != name:
                    print(f"name mismatch: {screen} {kind} {name} -> {p}"); bad += 1
                b = os.path.basename(p)
                stem, ext = os.path.splitext(b)
                if "@" in stem:
                    sha8 = stem.rsplit("@", 1)[1]
                    if _sha(open(full, "rb").read())[:8] != sha8:
                        print(f"sha mismatch: {p}"); bad += 1
    orphans = [p for p in glob.glob(os.path.join(STORE, "*", "*")) if os.path.isfile(p) and os.path.normpath(p) not in referenced
               and os.path.basename(os.path.dirname(p)) not in EXTRA_KINDS]
    for p in sorted(orphans):
        print(f"unreferenced: {rel(p)}")
    print(f"check: {len(referenced)} store files referenced, {len(orphans)} unreferenced, {bad} problems")
    return 1 if bad else 0


def cmd_gc() -> int:
    referenced = set(pinned())
    for m in all_manifests().values():
        for kind in KINDS:
            referenced.update(os.path.normpath(os.path.join(ROOT, p)) for p in m.get(kind, {}).values())
    n = 0
    for p in glob.glob(os.path.join(STORE, "*", "*")):
        if os.path.isfile(p) and os.path.normpath(p) not in referenced and os.path.basename(os.path.dirname(p)) not in EXTRA_KINDS:
            os.remove(p); n += 1
    print(f"gc: {n} unreferenced store files deleted")
    return 0


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    cmds = {"migrate": lambda: cmd_migrate("--keep-copies" in sys.argv[2:]), "check": cmd_check, "gc": cmd_gc}
    sys.exit(cmds.get(cmd, lambda: print(__doc__) or 2)())
