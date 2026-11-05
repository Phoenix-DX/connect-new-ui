#!/usr/bin/env python3
"""
stack.py: architecture and tech stack of the React app, decided by the user before any route is built,
plus the shared references that keep every route consistent: an ADR log, a pinned dependency allow-list
and a registry of implementation patterns with reference implementations.

Files (in --migration-dir, default migration/):
  stack.json             source of truth (edit only through this script)
  architecture.md        generated, human-readable view of stack.json (do not edit by hand)
  patterns/<ID>.md       one implementation pattern each (how this app does X), seeded at init

Commands
  init [--screens survey/screens.json] [--force]
        proposals for every stack item (with reasons and options), items for third-party OutSystems modules
        found in the survey (each needs a web equivalent), seeded patterns. Everything starts "proposed".
  questions                       unconfirmed items and patterns, to present to the user in one batch
  confirm <key> --value V --by user [--note N]
        record the user's choice. Options with known packages add their pinned dependencies automatically.
  confirm-all-proposed --by user  the user accepted every proposal as listed (use only after showing the list)
  adr new --title T --context C --decision D --consequences Q     propose a change (status proposed)
  adr accept|reject <ADR-n> --by user
  dep add <name> <version> [--dev] --adr <ADR-n>    allow a package (ADR must be accepted)
  dep remove <name> --adr <ADR-n>
  pattern accept <ID> --by user
  pattern new <ID> --title T --applies "when" --rules "rule; rule" (proposed; the user accepts it)
  pattern reference <ID> --route <S> --files a,b       point a pattern at a finished route's code (the reference)
  render                          regenerate architecture.md
  check [--app-dir app]           stack confirmed, package.json matches the allow-list, references unchanged
  digest                          compact text for context packs

Only the user confirms items, ADRs and patterns (--by user is required). Route agents never change the stack:
they ask a decision question; if the user agrees, the change becomes an ADR applied by the foundation owner.
"""
import argparse, datetime, glob, hashlib, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))

# Stable baseline (rule: major line >= 9 months old, version >= 60 days old; security fixes taken at once). Checked
# together on Node 24.21.0 on 2026-10-14 (connect-new ADR-2: typecheck, tests, lint, build, Storybook, audit, browser).
BASE_DEPS = {"react": "19.2.8", "react-dom": "19.2.8", "react-router": "7.18.2", "@tanstack/react-query": "5.101.4",
             "openapi-fetch": "0.15.2"}
BASE_DEV = {"@types/react": "19.2.18", "@types/react-dom": "19.2.4", "@types/node": "24.13.3", "@vitejs/plugin-react": "5.2.0",
            "msw": "2.15.0", "typescript": "5.9.3", "vite": "7.3.6", "openapi-typescript": "7.13.0"}
# Pinned versions for options that bring packages. Verify they still resolve (npm view <pkg>@<v>) when confirming.
OPTION_DEPS = {
    "Zustand": ({"zustand": "4.5.5"}, {}),
    "Redux Toolkit": ({"@reduxjs/toolkit": "2.2.7", "react-redux": "9.1.2"}, {}),
    "React Hook Form": ({"react-hook-form": "7.53.0"}, {}),
    "React Hook Form + Zod": ({"react-hook-form": "7.53.0", "zod": "3.23.8", "@hookform/resolvers": "3.9.0"}, {}),
    "date-fns": ({"date-fns": "3.6.0"}, {}),
    "dayjs": ({"dayjs": "1.11.13"}, {}),
    "react-i18next": ({"i18next": "23.15.2", "react-i18next": "15.0.2"}, {}),
    "Vitest + Testing Library + parity_check": ({}, {"vitest": "4.1.11", "@testing-library/react": "16.3.2",
                                                     "@testing-library/dom": "10.4.1", "@testing-library/jest-dom": "6.10.0",
                                                     "@testing-library/user-event": "14.6.4", "jsdom": "27.4.0",
                                                     "playwright": "1.62.1"}),
    "ESLint 10 + Prettier": ({}, {"eslint": "10.8.1", "@eslint/js": "10.0.1", "prettier": "3.9.6", "typescript-eslint": "8.67.0",
                                  "eslint-plugin-react-hooks": "7.1.1", "globals": "17.11.0"}),
}
# Compatible with scripts/scaffold_react_app.py as written; anything else means adapting the scaffold (an ADR).
SCAFFOLD = {"buildTool": "Vite + React SPA", "react": "React 19", "routing": "React Router 7 (data router)",
            "serverState": "TanStack Query 5", "mocking": "MSW 2 in the browser", "language": "TypeScript (strict)"}


def scaffold_ok(key, value):
    """A choice is compatible when it is, or refines, what the scaffold implements (e.g. "MSW 2 in the browser, ...")."""
    v = SCAFFOLD.get(key)
    return v is None or not value or value == v or value.startswith(v + ",")

ITEMS = [
    ("language", "Language", "Language and compiler strictness?", ["TypeScript (strict)", "TypeScript (non-strict)"],
     "Typed adapters catch wire-format mistakes (Long as string, empty values)."),
    ("buildTool", "App framework / build", "Which app framework and build tool?", ["Vite + React SPA", "Next.js (App Router)"],
     "The OutSystems app is a client-side SPA/PWA; the mock phase needs no server rendering. The scaffold implements Vite."),
    ("react", "React version", "Which React version?", ["React 19", "React 18.3"], "Scaffold and pinned libraries target React 19."),
    ("routing", "Routing", "Router?", ["React Router 7 (data router)", "TanStack Router"],
     "Original paths and query parameters are kept as-is; the scaffold generates React Router routes."),
    ("serverState", "Server state", "How is server data fetched and cached?", ["TanStack Query 5", "SWR", "Plain hooks"],
     "Mirrors data actions (fetch on enter, refetch, background refresh on back) and caches per screen."),
    ("clientState", "Client state", "Where does app-wide client state live (client variables, flags, session mock)?",
     ["React context + hooks (no library)", "Zustand", "Redux Toolkit"],
     "OutSystems client variables are few and flat; start without a library unless the shell spec shows otherwise."),
    ("apiLayer", "API layer", "How do routes call the server?",
     ["Per-route adapters calling callAction(module, action) with wire mappers", "Generated client from an OpenAPI spec"],
     "Keeps OutSystems action names until a real backend exists; one place to swap mocks for real calls."),
    ("mocking", "Mocking", "How are server calls mocked, and where does mock data come from?",
     ["MSW 2 in the browser, fictional data with captured shapes",
      "MSW 2 in the browser, anonymized fixtures recorded from the real app (record_har.cjs + har_to_fixtures.py, reviewed by the user)"],
     "Same code path as real calls; scenarios per route. Recorded fixtures make lists, details and their ids match the real app; "
     "they need a test environment, a test account and the user's review of every conversion (references/recorded-mocks.md)."),
    ("styling", "Styling", "How is the UI styled?",
     ["Original OutSystems CSS unchanged + review-only CSS", "Rewrite styles (not parity)"],
     "Parity depends on reusing the original class names inside the original CSS."),
    ("forms", "Forms and validation", "How are forms built?", ["Controlled components, no library", "React Hook Form", "React Hook Form + Zod"],
     "Choose from the forms the survey shows; validation messages must match the original."),
    ("dates", "Dates and numbers", "Date/number formatting?", ["Intl only", "date-fns", "dayjs"], "Formats must match the original output."),
    ("strings", "Strings / i18n", "How are UI strings handled?", ["Literal strings as captured (no i18n library)", "react-i18next"],
     "Check whether the original uses multilingual resources (<Module>.languageResources.js)."),
    ("testing", "Testing", "Test tooling?", ["Vitest + Testing Library + parity_check", "Jest + Testing Library + parity_check"],
     "DOM snapshot tests for shared blocks, parity checks per route."),
    ("lint", "Lint and format", "Lint/format tooling?", ["ESLint 10 + Prettier", "Biome"], "One formatter keeps diffs small and merges clean."),
    ("packageManager", "Package manager", "Package manager?", ["npm", "pnpm", "yarn"], "One lockfile, changed only by the foundation owner."),
    ("node", "Node version", "Node version?", ["24 LTS", "22 LTS"], "Pin in .nvmrc and CI; Node 20 is end of life (2026-04-30)."),
    ("auth", "Authentication", "Authentication in this phase and later?",
     ["Mocked sign-in now; real identity provider later through a BFF", "Real identity provider now"],
     "The mock phase must not call real identity providers."),
    ("tokens", "Tokens and personal data in the browser", "Where may tokens and identifiers live?",
     ["Never in browser storage (BFF + HttpOnly cookie later)", "Same as the original app"],
     "The original may keep tokens in localStorage; the security inventory lists them."),
    ("pwa", "PWA / offline", "Service worker and offline behaviour?", ["No service worker in the mock phase", "PWA with Workbox now"],
     "MSW uses a service worker in development; a second one complicates the mock phase."),
    ("viewports", "Viewports to match", "At which viewports must the clone match the original (each is captured and parity-checked)?",
     ["phone 390x844 only", "phone 390x844 + tablet 820x1180 + desktop 1440x900", "Other (say which)"],
     "Each viewport is a capture run (capture-plan defaults.viewports) and a parity run per state; device classes come from the captures."),
    ("browsers", "Browser support", "Which browsers must pass parity?", ["Evergreen mobile (iOS Safari 16+, Chrome 110+)", "Other (say which)"],
     "Parity runs in Chromium; Safari differences are reviewed by a person."),
    ("folders", "Folder conventions", "Folder layout?",
     ["src/screens/<Screen>/{index.tsx,types.ts,api.ts,mocks.ts,components/}; shared in src/shared/<Block>/; shell in src/shell/"],
     "Every route touches only its own folder: parallel work without merge conflicts."),
    ("backend", "Target backend", "What happens after the mock phase?",
     ["Mock only now; adapters keep OutSystems action names", "Design the REST API now and map adapters to it"],
     "Decides whether api.ts names follow OutSystems actions or a new API."),
]
THIRD_PARTY = re.compile(r"(Leaflet|Map|Sortable|Sanitiz|Chart|Calendar|Carousel|Swiper|Slick|QR|Barcode|AdaptiveCard|Plugin|"
                         r"Signature|PDF|Video|Lottie|Markdown|Editor|Picker|Cropper|Firebase|OneSignal)", re.I)
SEED_PATTERNS = [
    ("P-DATA", "Server data in a route", "the route calls data or server actions",
     "api.ts exports one function per action using callAction(module, action, inputs) and maps the wire shape with os-wire helpers; "
     "components use TanStack Query hooks defined in api.ts; query keys are [<Screen>, <Action>, inputs]; components never see wire shapes"),
    ("P-MOCKS", "Mocks and scenarios", "the route has server calls",
     "mocks.ts exports MSW handlers for POST /api/<Module>/<Action>; when the stack uses recorded fixtures, a recorded action uses "
     "recordedHandler(module, action) from src/mocks/fixtures and the adapter sends the OutSystems input names; an action or branch "
     "never recorded gets fictional data with captured counts and shapes; never hand-edit a fixture; "
     "scenario() selects real/empty/error and one scenario per captured state; mockDelay() on every handler"),
    ("P-PARAMS", "Route inputs and navigation", "the route has inputs or navigates",
     "inputs read with useSearchParams using the original parameter names and types; navigation through the shell's navigate helper "
     "with the original names; preload objects through the shell's preload store"),
    ("P-STATES", "Loading, empty, error and not-captured states", "always (every route)",
     "states follow the original render conditions; loading and error UI use the shared blocks the capture shows; "
     "anything not captured renders <NotCaptured name=...> with the known content"),
    ("P-LIST", "Lists", "the route renders an OutSystems List",
     "use the shared OS list component (virtualisation, scroll ending, row keys from ids) instead of mapping arrays directly"),
    ("P-FORM", "Forms", "the route has inputs the user edits",
     "follow the confirmed forms choice; field markup and validation messages exactly as captured; submit through api.ts"),
    ("P-DIALOG", "Popups, sheets and toasts", "the route opens a popup, bottom sheet or shows a feedback message",
     "use the shell/shared dialog, sheet and feedback APIs; never a route-local overlay"),
    ("P-BACK", "Back navigation and view cache", "the original restores the view from cache on back",
     "use the shell's view-cache helper; no spinner when restoring; background refresh as the original does"),
    ("P-OSUI", "OutSystems UI patterns", "the route renders an OutSystems UI pattern block (survey/osui.md)",
     "use the shared component src/shared/osui/<Pattern> (tag @os-block OutSystemsUI.<Flow>.<Block>), built once by the foundation owner "
     "with the pattern's inputs as props and its events as callbacks; it renders the same DOM and osui-* classes as the capture in every "
     "captured state (open, closed, selected, disabled) and reproduces the behaviour (open/close, keyboard, selection, events); a provider "
     "library (date picker, dropdown search, carousel, slider) is the one the user chose in stack item osui:<Pattern>; never a route-local version"),
    ("P-FLAGS", "Feature flags", "the route reads a feature flag (flags.py route <S>)",
     "read flags only with useFlag/useFlagOn from src/lib/flags using the key of the user's decision; build the branches the decision says "
     "(both: every value renders exactly its captured variant state; default-only: only the default branch, the other renders nothing); "
     "never hard-code a value; the decided values are switched with ?ff=Key:value or the flag panel (?ffpanel=1)"),
    ("P-MUTATION", "Mutations keep state", "the route creates, updates or deletes data, or reads data another route changes",
     "data that a mutation changes lives in a collection from src/mocks/store.ts seeded from the fixture or the fictional data; list and detail "
     "handlers read it with statefulHandler, mutation handlers change it, so a saved item appears where the original shows it; the answer of the "
     "mutation keeps the recorded/captured shape"),
    ("P-CALLS", "Same calls as the original", "the route has server calls",
     "the route calls the same actions in the same phase as the capture (analysis/calls.json): data actions on enter, server actions on the "
     "same user events and in the same order, with the original input parameter names; call parity in route.py parity checks it"),
]
OSUI_PROVIDER_PATTERNS = re.compile(r"(DatePicker|DateRangePicker|MonthPicker|TimePicker|Dropdown|Carousel|RangeSlider|Slider|Tooltip|"
                                    r"Gallery|Rating|Sidebar|BottomSheet|Notification|Accordion|Tabs|Search|AnimatedLabel|Video|Map)", re.I)


def now():
    return datetime.datetime.now().isoformat(timespec="seconds")


def paths(a):
    d = a.migration_dir
    return os.path.join(d, "stack.json"), os.path.join(d, "architecture.md"), os.path.join(d, "patterns")


def load(a):
    p = paths(a)[0]
    if not os.path.exists(p):
        sys.exit(f"{p} not found: run stack.py init")
    return json.load(open(p, encoding="utf-8"))


def save(a, st):
    p, md, _ = paths(a)
    st["status"] = "confirmed" if all(i["status"] == "confirmed" for i in st["items"]) else "draft"
    tmp = p + ".tmp"
    json.dump(st, open(tmp, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    os.replace(tmp, p)
    render(a, st)


def item(st, key):
    it = next((i for i in st["items"] if i["key"] == key), None)
    if not it:
        sys.exit(f"unknown item {key}; see stack.py questions")
    return it


def need_user(by):
    if by != "user":
        sys.exit("only the user can confirm stack items, ADRs and patterns (--by user)")


# ------------------------------------------------------------------ patterns
def pattern_path(a, pid):
    return os.path.join(paths(a)[2], f"{pid}.md")


def read_pattern(a, pid):
    p = pattern_path(a, pid)
    if not os.path.exists(p):
        return None
    t = open(p, encoding="utf-8").read()
    meta = dict(re.findall(r"^- (\w[\w ]*): (.*)$", t, re.M))
    return {"id": pid, "title": re.search(r"^# \S+: (.*)$", t, re.M).group(1), "status": meta.get("Status", "proposed"),
            "applies": meta.get("Applies when", ""), "reference": meta.get("Reference", "none yet"), "text": t}


def write_pattern(a, pid, title, applies, rules, status="proposed", reference="none yet", fingerprint=""):
    os.makedirs(paths(a)[2], exist_ok=True)
    rl = "\n".join(f"- {r.strip()}" for r in re.split(r";\s*", rules) if r.strip())
    open(pattern_path(a, pid), "w", encoding="utf-8").write(
        f"# {pid}: {title}\n\n- Status: {status}\n- Applies when: {applies}\n- Reference: {reference}\n- Fingerprint: {fingerprint or '-'}\n\n"
        f"## Rules\n{rl}\n\n## Notes\nAdd notes below this line; stack.py keeps them only through `pattern reference`.\n")


def set_pattern_field(a, pid, field, value):
    p = pattern_path(a, pid)
    t = open(p, encoding="utf-8").read()
    t = re.sub(rf"^- {field}: .*$", f"- {field}: {value}", t, count=1, flags=re.M)
    open(p, "w", encoding="utf-8").write(t)


def all_patterns(a):
    return [read_pattern(a, os.path.basename(p)[:-3]) for p in sorted(glob.glob(os.path.join(paths(a)[2], "*.md")))]


def fp(files, app_dir):
    h = hashlib.sha256()
    for f in sorted(files):
        p = os.path.join(app_dir, f) if not os.path.isabs(f) else f
        h.update(f.encode()); h.update(open(p, "rb").read() if os.path.exists(p) else b"<missing>")
    return h.hexdigest()[:16]


# ------------------------------------------------------------------ render
def render(a, st):
    _, md, _ = paths(a)
    L = [f"# Architecture and tech stack: {st['app']}", "",
         f"Generated by `stack.py render` from `stack.json`; do not edit by hand. Status: **{st['status']}**.", "",
         "Every route is built with exactly this stack and these patterns. Route agents never change them: they ask a decision "
         "question; an accepted change becomes an ADR applied by the foundation owner.", "",
         "## Decisions", "", "| Item | Choice | Status | Why | Confirmed |", "|---|---|---|---|---|"]
    for i in st["items"]:
        L.append(f"| {i['topic']} | {i['value'] or '(proposed) ' + (i['proposed'] or 'no proposal')} | {i['status']} | {i['why']} | "
                 f"{(i.get('by') or '') + ' ' + (i.get('at') or '')} |")
    L += ["", "## Allowed dependencies (pinned)", "", "| Package | Version | Kind |", "|---|---|---|"]
    L += [f"| `{k}` | {v} | runtime |" for k, v in sorted(st["dependencies"].items())]
    L += [f"| `{k}` | {v} | dev |" for k, v in sorted(st["devDependencies"].items())]
    L += ["", "## Consistency rules (consistency_check.py)", ""]
    r = st["rules"]
    # requiredIfCalls and allowedImportRoots were dropped after the page-template refactor (user, 2026-10-29, I10-5 a):
    # folder imports are checked by `npm run arch`. Old stack.json files that still have them are rendered as before.
    L += [f"- Required files per route (in app/src/pages/<S>/, {{screen}} = route name): {', '.join(r.get('requiredFiles', []))}"
          + (f"; when the route has calls also {', '.join(r['requiredIfCalls'])}" if r.get("requiredIfCalls") else ""),
          f"- Imports allowed from: the route's own folder, {', '.join(r['allowedImportRoots'])}, and allowed packages"
          if r.get("allowedImportRoots") else "- Imports: packages only from the allow-list; folder imports are checked by `npm run arch`",
          *[f"- {f['id']}: {f['why']}" for f in r["forbidden"]]]
    L += ["", "## Patterns", "", "| ID | Title | Status | Applies when | Reference |", "|---|---|---|---|---|"]
    for p in all_patterns(a):
        L.append(f"| [{p['id']}](patterns/{p['id']}.md) | {p['title']} | {p['status']} | {p['applies']} | {p['reference']} |")
    L += ["", "## ADR log", ""]
    for d in st["adr"]:
        L += [f"### {d['id']}: {d['title']} ({d['status']})", f"- Context: {d['context']}", f"- Decision: {d['decision']}",
              f"- Consequences: {d['consequences']}", f"- {d['status']} by {d.get('by') or '-'} {d.get('at') or ''}", ""]
    if not st["adr"]:
        L.append("- none yet")
    open(md, "w", encoding="utf-8").write("\n".join(L) + "\n")


# ------------------------------------------------------------------ commands
def cmd_init(a):
    p, _, pdir = paths(a)
    if os.path.exists(p) and not a.force:
        sys.exit(f"{p} exists (use --force to start over)")
    app, mods = "App", {}
    if a.screens and os.path.exists(a.screens):
        data = json.load(open(a.screens, encoding="utf-8"))
        app = data.get("app", app)
        for i in data["screens"].values():
            for b in i.get("closure", []):
                m = b.split(".")[0]
                mods.setdefault(m, set()).add(i["screen"])
    items = [{"key": k, "topic": t, "question": q, "options": o, "proposed": o[0], "why": w, "status": "proposed",
              "value": None, "by": None, "at": None, "note": ""} for k, t, q, o, w in ITEMS]
    osui = {}
    if a.screens and os.path.exists(a.screens):
        for i in json.load(open(a.screens, encoding="utf-8"))["screens"].values():
            for b in i.get("osuiPatterns", []):
                osui.setdefault(b, set()).add(i["screen"])
    for b, users in sorted(osui.items()):
        name = b.split(".")[-1]
        if OSUI_PROVIDER_PATTERNS.search(name):
            items.append({"key": f"osui:{name}", "topic": f"OutSystems UI {name}",
                          "question": f"OutSystems UI pattern {b} is used by {len(users)} screen(s) ({', '.join(sorted(users)[:4])}"
                                      f"{' …' if len(users) > 4 else ''}). How is its behaviour reproduced (survey/osui.md lists the provider "
                                      "libraries the original loads)?",
                          "options": ["same provider library as the original, pinned to the version in the manifest (name it)",
                                      "hand-written component with the captured DOM and classes (no library)",
                                      "out of scope: render NotCaptured"],
                          "proposed": None, "why": "Pattern behaviour lives in OutSystems UI JavaScript, not in the captured .mvc.js; "
                          "one shared implementation (P-OSUI) avoids a different version per route.",
                          "status": "proposed", "value": None, "by": None, "at": None, "note": ""})
    for m, users in sorted(mods.items()):
        if THIRD_PARTY.search(m) and not m.startswith("OutSystems"):
            items.append({"key": f"equiv:{m}", "topic": f"Web equivalent of {m}",
                          "question": f"The OutSystems module {m} is used by {len(users)} screen(s) ({', '.join(sorted(users)[:4])}"
                                      f"{' …' if len(users) > 4 else ''}). How is it reproduced in React?",
                          "options": ["npm package (name it)", "port the module's JavaScript", "out of scope: render NotCaptured"],
                          "proposed": None, "why": "Third-party component found in the survey; no default without knowing its use.",
                          "status": "proposed", "value": None, "by": None, "at": None, "note": ""})
    st = {"app": app, "status": "draft", "items": items, "dependencies": dict(BASE_DEPS), "devDependencies": dict(BASE_DEV),
          "rules": {
              "requiredFiles": ["{screen}Page.tsx"],   # page template: app/src/pages/<S>/<S>Page.tsx; imports: npm run arch
              "forbidden": [
                  {"id": "NO-RAW-FETCH", "regex": r"\bfetch\s*\(|\baxios\b|XMLHttpRequest", "files": "*", "why": "server calls only through callAction in api.ts"},
                  {"id": "NO-BROWSER-STORAGE", "regex": r"\b(localStorage|sessionStorage|indexedDB)\b", "files": "*", "why": "no tokens or personal data in browser storage; use the shell's stores"},
                  {"id": "NO-ROUTE-CSS", "regex": r"""import\s+['"][^'"]+\.(css|scss|sass|less)['"]""", "files": "*", "why": "the original CSS is global; routes add no CSS"},
                  {"id": "NO-INLINE-COLOR", "regex": r"style=\{\{[^}]*(color|background|font|margin|padding)\s*:", "files": "*", "why": "visual differences are fixed in markup, not inline styles (inline CSS variables from the capture are fine)"},
                  {"id": "NO-RAW-HTML", "regex": r"dangerouslySetInnerHTML", "files": "*", "why": "HTML from data goes through the shared sanitizer component"},
                  {"id": "NO-WIRE-IN-COMPONENTS", "regex": r"\.List\b|1900-01-01", "files": "!api.ts,mocks.ts,types.ts", "why": "components see domain types only; wire shapes stay in api.ts/mocks.ts"},
                  {"id": "NO-CONSOLE", "regex": r"console\.(log|debug)", "files": "*", "why": "no debug output left in routes"},
              ]},
          "adr": []}
    os.makedirs(a.migration_dir, exist_ok=True)
    for pid, title, applies, rules in SEED_PATTERNS:
        if not os.path.exists(pattern_path(a, pid)) or a.force:
            write_pattern(a, pid, title, applies, rules)
    save(a, st)
    extra = len(items) - len(ITEMS)
    print(f"{len(items)} stack items to confirm ({extra} for third-party modules), {len(SEED_PATTERNS)} patterns → {p}, architecture.md")


def cmd_questions(a):
    st = load(a)
    open_items = [i for i in st["items"] if i["status"] != "confirmed"]
    for i in open_items:
        rec = f" (proposed: {i['proposed']})" if i["proposed"] else " (no proposal: needs a choice)"
        print(f"[{i['key']}] {i['question']}{rec}\n    options: {' | '.join(i['options'])}\n    why: {i['why']}")
    pats = [p for p in all_patterns(a) if p["status"] != "accepted"]
    for p in pats:
        print(f"[pattern {p['id']}] {p['title']} — applies when {p['applies']} ({p['status']}); rules in patterns/{p['id']}.md")
    adrs = [d for d in st["adr"] if d["status"] == "proposed"]
    for d in adrs:
        print(f"[{d['id']}] {d['title']}: {d['decision']} (proposed)")
    if not (open_items or pats or adrs):
        print("stack confirmed, all patterns accepted, no proposed ADR")


def apply_option_deps(st, value):
    for opt, (deps, dev) in OPTION_DEPS.items():
        if value.strip().lower() == opt.lower():
            st["dependencies"].update(deps)
            st["devDependencies"].update(dev)
            return list(deps) + list(dev)
    return []


def cmd_confirm(a):
    need_user(a.by)
    st = load(a)
    it = item(st, a.key)
    if "(name it)" in a.value or "(say which)" in a.value:
        sys.exit("give the concrete choice in --value (e.g. the package name and version), not the option label")
    it.update({"value": a.value, "status": "confirmed", "by": "user", "at": now(), "note": a.note or ""})
    added = apply_option_deps(st, a.value)
    save(a, st)
    msg = f"{a.key} = {a.value}"
    if added:
        msg += f"; allowed packages added: {', '.join(added)} (verify the pinned versions resolve)"
    if not scaffold_ok(a.key, a.value):
        msg += f"\nnote: scaffold_react_app.py implements '{SCAFFOLD[a.key]}'; the foundation owner must adapt the scaffold (record an ADR)"
    if a.value not in it["options"] and not added:
        msg += "\nnote: custom choice: add its packages with `dep add ... --adr` after an ADR the user accepts"
    print(msg)


def cmd_confirm_all(a):
    need_user(a.by)
    st = load(a)
    missing = [i["key"] for i in st["items"] if i["status"] != "confirmed" and not i["proposed"]]
    if missing:
        sys.exit("these items have no proposal and need an explicit choice first: " + ", ".join(missing))
    n = 0
    for i in st["items"]:
        if i["status"] != "confirmed":
            i.update({"value": i["proposed"], "status": "confirmed", "by": "user", "at": now(), "note": "accepted as proposed"})
            apply_option_deps(st, i["value"])
            n += 1
    save(a, st)
    print(f"{n} item(s) confirmed as proposed")


def cmd_adr(a):
    st = load(a)
    if a.action == "new":
        d = {"id": f"ADR-{len(st['adr']) + 1}", "title": a.title, "context": a.context, "decision": a.decision,
             "consequences": a.consequences or "", "status": "proposed", "by": None, "at": now()}
        st["adr"].append(d)
        save(a, st)
        print(f"{d['id']} proposed: ask the user to accept or reject it")
        return
    need_user(a.by)
    d = next((x for x in st["adr"] if x["id"] == a.id), None)
    if not d:
        sys.exit(f"no {a.id}")
    d.update({"status": "accepted" if a.action == "accept" else "rejected", "by": "user", "at": now()})
    save(a, st)
    print(f"{a.id} {d['status']}")


def cmd_dep(a):
    st = load(a)
    d = next((x for x in st["adr"] if x["id"] == a.adr), None)
    if not d or d["status"] != "accepted":
        sys.exit(f"{a.adr} is not an accepted ADR: packages change only through an ADR the user accepted")
    tgt = st["devDependencies"] if a.dev else st["dependencies"]
    if a.action == "add":
        tgt[a.name] = a.version
    else:
        st["dependencies"].pop(a.name, None); st["devDependencies"].pop(a.name, None)
    save(a, st)
    print(f"{a.action} {a.name} ({a.adr})")


def cmd_pattern(a):
    if a.action == "new":
        if os.path.exists(pattern_path(a, a.id)):
            sys.exit(f"{a.id} exists")
        write_pattern(a, a.id, a.title, a.applies, a.rules)
        print(f"{a.id} proposed: ask the user to accept it")
    elif a.action == "accept":
        need_user(a.by)
        if not read_pattern(a, a.id):
            sys.exit(f"no pattern {a.id}")
        set_pattern_field(a, a.id, "Status", "accepted")
        print(f"{a.id} accepted")
    elif a.action == "reference":
        p = read_pattern(a, a.id)
        if not p or p["status"] != "accepted":
            sys.exit(f"{a.id} must exist and be accepted before it gets a reference")
        files = [f.strip() for f in a.files.split(",") if f.strip()]
        board = os.path.join(a.migration_dir, "board.md")
        if a.route and os.path.exists(board):
            sys.path.insert(0, HERE)
            from board import read_board
            r = read_board(board).get(a.route)
            if not r or r["Status"] not in ("built", "verified"):
                sys.exit(f"route {a.route} is not finished: a reference must be confirmed, finished code")
        set_pattern_field(a, a.id, "Reference", f"route {a.route}: " + ", ".join(f"`{f}`" for f in files))
        set_pattern_field(a, a.id, "Fingerprint", fp(files, a.app_dir))
        print(f"{a.id} reference → {', '.join(files)}")
    render(a, load(a))


def cmd_check(a, quiet=False):
    st = load(a)
    probs = []
    unconf = [i["key"] for i in st["items"] if i["status"] != "confirmed"]
    if unconf:
        probs.append("stack items not confirmed by the user: " + ", ".join(unconf))
    pj = os.path.join(a.app_dir, "package.json")
    if os.path.exists(pj):
        pkg = json.load(open(pj, encoding="utf-8"))
        for kind, allowed in (("dependencies", st["dependencies"]), ("devDependencies", st["devDependencies"])):
            for name, ver in (pkg.get(kind) or {}).items():
                allow = st["dependencies"].get(name) or st["devDependencies"].get(name)
                if allow is None:
                    probs.append(f"package.json {kind}: {name} is not in the allow-list (needs an accepted ADR)")
                elif str(ver).lstrip("^~=") != allow:
                    probs.append(f"package.json {kind}: {name} {ver} differs from pinned {allow}")
    for p in all_patterns(a):
        m = re.findall(r"`([^`]+)`", p["reference"])
        f = re.search(r"^- Fingerprint: (\S+)", p["text"], re.M)
        if m and f and f.group(1) != "-" and fp(m, a.app_dir) != f.group(1):
            probs.append(f"pattern {p['id']}: reference files changed since they were set; re-confirm with the user")
    if not quiet:
        print("stack check: OK" if not probs else "stack check: problems\n  - " + "\n  - ".join(probs))
    return probs


def digest(migration_dir):
    """Compact conventions text for context packs (used by context_pack.py)."""
    class A: pass
    a = A(); a.migration_dir = migration_dir
    p = paths(a)[0]
    if not os.path.exists(p):
        return None
    st = json.load(open(p, encoding="utf-8"))
    L = [f"Stack status: {st['status']}. Full text: migration/architecture.md."]
    L += [f"- {i['topic']}: {i['value'] or '(not confirmed) ' + str(i['proposed'])}" for i in st["items"]]
    L.append("- Packages allowed: " + ", ".join(sorted(list(st["dependencies"]) + list(st["devDependencies"]))) + " (nothing else)")
    L.append("- Forbidden in routes: " + "; ".join(f"{f['id']} ({f['why']})" for f in st["rules"]["forbidden"]))
    L.append("Patterns (open the file of each pattern you use; follow its reference implementation):")
    for pt in all_patterns(a):
        L.append(f"- {pt['id']} {pt['title']} [{pt['status']}] when {pt['applies']}; reference: {pt['reference']}")
    return "\n".join(L)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--migration-dir", default="migration")
    ap.add_argument("--app-dir", default="app")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("init"); p.add_argument("--screens"); p.add_argument("--force", action="store_true")
    sub.add_parser("questions")
    p = sub.add_parser("confirm"); p.add_argument("key"); p.add_argument("--value", required=True); p.add_argument("--by", required=True); p.add_argument("--note")
    p = sub.add_parser("confirm-all-proposed"); p.add_argument("--by", required=True)
    p = sub.add_parser("adr"); p.add_argument("action", choices=["new", "accept", "reject"]); p.add_argument("id", nargs="?")
    for x in ("--title", "--context", "--decision", "--consequences", "--by"):
        p.add_argument(x)
    p = sub.add_parser("dep"); p.add_argument("action", choices=["add", "remove"]); p.add_argument("name"); p.add_argument("version", nargs="?")
    p.add_argument("--dev", action="store_true"); p.add_argument("--adr", required=True)
    p = sub.add_parser("pattern"); p.add_argument("action", choices=["new", "accept", "reference"]); p.add_argument("id")
    for x in ("--title", "--applies", "--rules", "--by", "--route", "--files"):
        p.add_argument(x)
    sub.add_parser("render")
    sub.add_parser("check")
    sub.add_parser("digest")
    a = ap.parse_args()
    if a.cmd == "adr" and a.action == "new" and not (a.title and a.context and a.decision):
        sys.exit("adr new needs --title, --context and --decision")
    if a.cmd == "check":
        sys.exit(1 if cmd_check(a) else 0)
    if a.cmd == "digest":
        print(digest(a.migration_dir) or "no stack.json"); return
    if a.cmd == "render":
        render(a, load(a)); print("architecture.md written"); return
    {"init": cmd_init, "questions": cmd_questions, "confirm": cmd_confirm, "confirm-all-proposed": cmd_confirm_all,
     "adr": cmd_adr, "dep": cmd_dep, "pattern": cmd_pattern}[a.cmd](a)


if __name__ == "__main__":
    main()
