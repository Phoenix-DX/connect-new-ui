# Parity and verification

## Contents
1. The gate
2. What is compared
3. Running it
4. Exemptions
5. States, viewports, flag variants and scenarios
6. Call parity
7. Independent verification
8. Reading a report

## 1. The gate

A route goes to review (`route.py ready`) and is finished (`route.py finish`) only when every captured state has a parity report that is:
- **current**: made by `route.py parity`, stamped with a fingerprint of the route code (`src/pages/<S>`), `src/api`, `src/containers`, `src/components`, `src/platform`, `src/legacy`, `src/lib`, `src/mocks` (fixtures included), `src/app`, `src/styles`, `src/vendor`, `public/UBTConnect`, `index.html`, the exemptions file, the captured reference of the state, its metadata and `calls.json`. Any change after the run makes the report stale;
- **full**: text, style, pixel and (when `calls.json` exists) call comparison all ran. `--no-text`, `--no-style`, `--no-pixel` exist for local debugging only; such reports never pass;
- **clean**: zero unexempted differences.

Every call of the capture also needs a mock handler (`no mock handler for <Module>/<Action>`), and every flag value the user decided to build with a captured reference needs a captured state (section 5).

## 2. What is compared

The reference is `analysis/dom/<state>.raw.html`: the captured DOM byte for byte. (`dom/<state>.html` is pretty-printed for reading; prettifying adds whitespace between inline elements, which moves them by a few pixels, so it is never a reference.) The reference is loaded with the app's stylesheets in its own browser context, at the state's viewport, with its `<html>` and `<body>` classes; the React route is loaded with the state's mock scenario, flags and steps. Then, element by element (children aligned by tag + `data-block` + classes):

| kind | what |
|---|---|
| structure | missing / extra elements, tag changes |
| class | class lists of matched elements, and of `<html>` / `<body>` (device classes from `src/lib/device.ts`) |
| attr | role, aria-*, data-block, type, tabindex (+ `compareAttributes`) |
| text | own text of elements whose captured text is a static label; masked user text (•) is never compared |
| style | ~80 computed properties: box model, flex/grid, position and offsets, typography, borders (width, style, colour, radius), shadows, transforms, filters, overflow, cursor |
| pseudo | `::before` / `::after` (content, icon font, colour, size): icon fonts live here |
| layout | width / height beyond `layoutTolerancePx`, skipped for elements that contain masked user text |
| position | x / y offset inside the parent, skipped after masked user text in the same parent (it moves what follows) |
| pixel | full-page screenshot diff, masked user text and user images painted out on both sides; fails on the page ratio (`maxRatio`) or on the worst 40px tile (`maxCellRatio`, catches small local changes). Writes `parity/<state>.diff.png` (red = different, yellow = masked) |
| call | service calls per phase vs the runtime capture (section 6) |

**How the reference is rebuilt.** The capture is `outerHTML` of the live page, but the live DOM can hold nesting the HTML parser never produces: OutSystems puts an `<a>` (badge link) inside an `<a>` (bottom-bar item), and the parser splits the outer anchor. A reference loaded through the parser therefore loses styles like `.list > a` and shows structure, layout and position differences that are not in TST. So `parity_check.cjs` lets the parser build only the shell (the `<html>` and `<body>` start tags with their attributes, and `<head>` with `<base>`, the app's stylesheets and inline CSS). The `<body>` content is built by `buildDom`, a stack-based builder using `createElement`, `createElementNS` (SVG, MathML) and `setAttribute(NS)` (`xlink:`, `xml:`, `xmlns`). It reads the capture as serializer output: every non-void element is closed and every attribute is quoted. Scripts are dropped and `<template>` content goes to `.content`. On all captures, the built tree serializes back byte for byte to the captured body. `--replay parser` keeps the old load for A/B checks, and `--self-test` checks the builder against a fixture. A report records the mode in `options.replay` and the builder's counts in `replay`. A non-zero `endTagMismatch` or `unclosed` count means the file is not plain `outerHTML`.

## 3. Running it

```bash
npm run dev                                                    # in app/ (or vite preview)
python3 scripts/route.py parity <S> --app http://localhost:5173 [--state <state>]
```
It reads `analysis/states.json` (written by `analyze_capture.py` from the metadata `batch_capture.cjs` stores with each snapshot), runs `parity_check.cjs` for each state not in `ignoreStates`, and writes `parity/<state>.json` + `.diff.png`. Mocks answer at once during parity (`latency=0`) except in the `loading` scenario, which never answers. Run `parity_check.cjs` by hand only to debug one state; the gate will not accept that report.

## 4. Exemptions

`migration/parity-exemptions.json` (template: `assets/parity-exemptions.example.json`) lists accepted differences, each with an id and a reason, decided by a person:

| Field | Use for |
|---|---|
| `ignoreClasses` | runtime classes of transitions and focus (`-enter`, `-exit`, `slide-…`) |
| `ignoreSubtrees` (`classRegex`, `blockRegex`, `idRegex`, `states`) | content outside the app's control: map tiles, third-party iframes (also painted out of the pixel diff); `states` limits an entry to some states |
| `listTolerance` | virtualised lists rendering a few rows more or less (OS List smoothing) |
| `ignoreStyleProps` | properties that depend on timing or fonts loading |
| `ignoreStates` | states compared by a person only (first frame mid-transition) |
| `callOrderFree` (`actions`, `states`, `countFree`) | server calls whose place among the app-start calls depends on network timing: their count is compared, their order is not; with `countFree` only their presence is compared (batched calls) | 
| `rules` (`kinds`, `pathRegex`, `states`, `props`) | anything else, narrowly; `states` is a regex on state names; `props` (style only) exempts just those CSS properties, so other style differences of the same element still count |
| `pixel`, `pixelByState` | pixel thresholds (`threshold`, `maxRatio`, `maxCellRatio`), globally or per state |
| `ignoreCalls` | regexes on action names that are not behaviour (telemetry, logging) |
| `layoutTolerancePx` | rounding (also used for positions and page height) |

The report counts how often each exemption fired. An exemption that suddenly fires on a new screen deserves a look. Agents never add exemptions; they propose them in `notes.md` and the person decides. Editing the exemptions file makes every report stale (fingerprint), so parity is run again.

## 5. States, viewports, flag variants and scenarios

Each captured state carries how it was reached (`states.json`): viewport, html/body classes, flag variant, the plan steps (with their `back`) and the mock scenario (`default` and steps → `real`, `offline` → `error`, `loading` → `loading`). Parity reproduces exactly that: same viewport, `?mock=<scenario>`, `?ff=<Key>:<value>` for a flag variant, the same steps with the same selectors.

- **Viewports**: the capture plan's `defaults.viewports` (stack item `viewports`) adds `<state>@<viewport>` states. The clone gets its device and OS classes per viewport from `src/lib/device-classes.json`, generated from the captures by the scaffold (re-run it after capturing a new viewport); a `class body` difference means the device classes are wrong.
- **Flag variants**: a flag decided `--branches both --reference capture` needs a captured state for every non-default value: `flags.py variants` prints the plan entries (`flagVariants`, set through a client variable in localStorage, another test account, another environment or a flag-service answer, as the MCP answer says). States are named `<state>+<Key>=<value>`. `route.py ready` refuses the route until each value has a state, unless the user decided `--reference none`.
- States that cannot be reached by interaction in the mock app (first frame mid-transition, back-restored with view cache) go to `ignoreStates` and are checked by the person.

## 6. Call parity

`analysis/calls.json` lists every service call of the capture with its **phase**: `load`, or the label of the plan step after which it started (`batch_capture.cjs` marks each step with `__osCapture.mark`). The clone logs every `callAction` in `window.__osCalls` with the phase `parity_check.cjs` sets before each step. Per phase of the state:
- every data action of the capture is called (as a set: refetch counts may differ),
- server actions are called in the same order, with no extra action,
- server action input parameter names match.

This catches behaviour the DOM cannot show: a save that calls the wrong action, an action fired twice after a refetch, a missing "mark as read". Calls of other screens and of the shell are ignored. For a flag variant the variant's own runtime capture is the reference.

## 7. Independent verification

A second agent re-checking a screen roughly doubles its cost. Use one for:
- full-tier screens (new blocks, server writes, multi-step flows),
- screens whose parity report has differences the builder could not explain,
- a random sample of lite screens per wave (one in five), to keep the gate honest.

The verifier reads the spec or pack, the parity reports and the diff images, runs the scenarios, and writes only a verification section in `notes.md` plus fixes or change requests.

## 8. Reading a report

`[kind] path: detail`, e.g. `[class] div#reactContainer > …div.card: missing .card-active`. Fix the markup at that path. A `style`, `layout` or `position` difference with no `structure`/`class` difference at the same path usually means a missing wrapper above it, a missing body/html class, a missing inline style the capture has, or a stylesheet not loaded; rarely a CSS problem. Never fix it with new CSS. A `pixel` difference alone: open the diff image at the hotspots; it is usually a pseudo-element, a background image, an icon font or an image that did not load. A `call` difference is fixed in the route's logic (page hooks, `app/src/api/<domain>/`, event handlers), never by changing the mock to hide it.
