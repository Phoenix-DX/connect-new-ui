# Prototype guide

Optional. Once the React app is scaffolded, the app itself with MSW scenarios is the review prototype, and building a separate HTML prototype duplicates the work. Use this only before the scaffold exists, or to show a single screen to someone without the app.

How to turn a spec into a single-file review prototype that looks like the real app. Start from `assets/prototype-app-skeleton.js`.

## How the harness works

`scripts/build_prototype.py` combines:
- `assets/prototype-template.html`: review panel on the left, device frame on the right. The device is an `<iframe>` whose document gets the original stylesheet bundle, the captured `<html>`/`<body>` classes and body style variables. A second React root renders the screen inside it, so OutSystems global CSS applies exactly as in the app and never leaks into the panel.
- `analysis/<Screen>/styles/bundle.css` + `assets.json`: original CSS in load order, `url()` pointing to embedded fonts and images.
- your `<Screen>.app.js`.

Libraries: React 18 UMD + `htm` (JSX-like tagged templates, no build step). Write `html\`<div className="x">${value}</div>\``, components as `<${Comp} prop=${v} />`, close with `<//>`. Use `className`, `tabIndex`, `style=${{ ... }}` objects (custom properties allowed: `{'--grid-phone': 2}`).

## What app.js must define

```js
const APP_CONFIG = {
  title: '<Screen> · React prototype',
  lead: '<one sentence about sources>',
  sizes: { '390x844': [390, 844], '<captured w>x<h>': [w, h] },   // first = default
  scenarios: [['real', 'As captured (...)'], ['empty', 'No data'], ['error', 'Network error']],
  onScenarioChange: v => { /* clear caches */ },
  flags: [['flagKey', 'Readable flag name from code']],
  defaultFlags: { flagKey: true },
  flagNote: () => html`...`,            // optional
  sections: [['Try these', ['...']], ['Not in the capture', ['...']]],
};
function PhoneApp() { /* renders into #reactContainer of the iframe */ }
```

Helpers available: `html`, `store`/`useSettings()` (`scenario`, `latency`, `flags`, `epoch`), `flag(name)`, `log(msg)` (shows in the panel's call log), `delay(ms)`, `OSBlock({name,id})`, `Missing({name})`, `asset(path)`, `osImage('img/Module.file.png')` (real asset or a "not captured" marker), `missingImage(name)`, `mockPhoto(seed)`.

## Rules

1. **Markup from the DOM, not from screenshots.** Copy element types, class lists, `data-*` attributes and wrapper nesting from `dom/default.html`. Keep `OSBlockWidget` wrappers with their `data-block` names: some CSS targets them and they make review easy.
2. **Dynamic parts from expressions.** Every conditional class, image URL, text fallback, visibility rule and inline variable comes from the expression in the `.mvc.js` (spec section 3/8). Reproduce the expression in plain JS next to a comment naming its source.
3. **Mock data mirrors the capture.** Same number of items per list as captured, same field shapes, fictional values. Build responses in OutSystems wire shape (`{ List: [...] }`, Long as string, `""`/`1900-01-01` for empty) and map them through the same mapper the real React code will use. Optional scenarios can exercise branches the account did not show (empty, error, other groups), labelled as such.
4. **Behaviour from the controller.** Reproduce lifecycle (fetch on enter, view-cache on back), click handlers, call order, error branches and toasts. Log every simulated call with the original action name.
5. **Never invent what was not captured.** A block, state, image or popup that is not in the capture renders `<${Missing} name="Module › Block (state)">` with whatever real children are known inside it. Destinations that are not migrated render a Missing marker showing the URL, params and preload data the screen passed.
6. **App shell blocks** (layout, header, bottom bar) are rebuilt from their captured DOM too; they are part of what reviewers compare.
7. **Invisible infrastructure blocks** (PIN lock, offline sync, deeplink handlers) can be omitted; list them in the "Not in the capture" or notes section.
8. **Toasts/feedback messages**: use the captured markup if a `toast` state exists; otherwise OutSystems UI classes `feedback-message feedback-message-<type>` with a `.feedback-message-text` span, marked as inferred.

## Build and check

```bash
python3 scripts/build_prototype.py --analysis analysis/<Screen> --app <Screen>.app.js \
  --title "<Screen> · React prototype" --out <Screen>-prototype.html
```

Then open it and compare side by side with the real app at the captured viewport, state by state. A visual difference means the markup or the class list differs from `dom/default.html`; fix the markup, never patch it with new CSS.

The page is several MB because fonts are embedded. If icons do not render in the hosting environment, embedded fonts are being blocked; report it rather than replacing the icons.
