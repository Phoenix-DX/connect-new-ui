<!--
App shell spec template. Written once per app, after the survey and a UI capture of the home screen.
Inputs: survey/shell.md, survey/shared-blocks.md, survey/variants.md, shell/analysis/ (digest, dom, css-relevant, calls).
Same rules as the screen spec: every statement cites its source; unknowns go to section 12.
-->
# App shell spec: <App>

## 0. Summary
| Item | Value |
|---|---|
| App / platform | <App>, OutSystems 11 <Phone App as PWA / Reactive Web> |
| OutSystems UI version | <e.g. OutSystemsUI_2_23> |
| Home route | `<route>` |
| Captured | <date, env, viewport, account type> |
| Screens surveyed | <n> (see survey/routes.md) |

## 1. Document and global styles
- `<html>` class, `<body>` class and style variables (captured), and which ones are set at runtime (device classes, `--viewport-height`).
- Root containers the CSS expects: `#reactContainer > #transitionContainer > .active-screen.screen-container`, plus any sibling elements (e.g. bottom-bar slider).
- Screen transitions (do not skip: parity compares settled states only, so a missing transition never shows up as a diff):
  the runtime's TransitionGroup in `OutSystemsReactView.js` (two containers while a transition runs, classes
  `<name>-enter|-enter-active|-enter-done|-leave|-leave-active`, timeout), how `Default` resolves (app definition
  `defaultTransition`), the reverse on back, the transitions the compiled screens pass (`OS.Transitions.TransitionAnimation.X`),
  `--…-transition-duration` variables and any `dx-navigation-transition-*` events that blocks listen to. Verify with a
  headless probe sampled mid-transition.
- Stylesheets in load order (served unchanged as `public/os-legacy.css`), fonts and icon fonts, base typography.
- Theme tokens used across screens (from css-relevant.md), with resolved values.

## 2. Layouts
For each layout block used by screens (survey/shell.md "layout-level blocks"):
- markup skeleton from the DOM (header, content, footer, aside), wrapper classes required for CSS scoping,
- placeholders (title, header left/right, content, bottom bar, common UI) and what screens put in them,
- variants (with/without footer, root page vs inner page).

## 3. Header
Back/menu icon logic (navigateBack vs menu), title rendering, right-side actions, events.

## 4. Bottom bar / main navigation
| Item | Icon class | Label | Target route (and the logic/flags that choose it) | Badge (source call) |
|---|---|---|---|---|
Active-item rules, re-tap behaviour (scroll to top), slider/indicator markup.

## 5. Side menu / other global navigation
<if present>

## 6. Feedback messages (toasts)
Markup per type (captured in a `toast` state, or inferred from CSS and marked), position, auto-close timing, API used by screens (e.g. `showFeedback(text, type)`).

## 7. Shared dialogs and overlays
Each dialog block rendered by the shell or by most screens: purpose, trigger, markup (captured or not), events.

## 8. Shared states
Spinner, network warning, blank slate / empty state, skeletons: markup and when screens use them. Most are "not captured" until a screen capture includes them; list them here as they are found.

## 9. Global logic
| Concern | OutSystems element | Behaviour | React design | Captured / from MCP / unknown |
|---|---|---|---|---|
| Authentication & session | | | | |
| PIN / lock screen | | | | |
| Offline sync / network status | | | | |
| Deep links / app links | | | | |
| Back navigation handling | | | | |
| View cache & preload between screens | | | | |
| Feature flags (LaunchDarkly etc.) | | | | |
| Client variables | | | | |
| Telemetry | | | | |
Mark which ones are in scope for the mock-data phase (usually only navigation, view cache/preload, flags as mock toggles).

## 9a. Security inventory
Summarise `shell/analysis/security.md` (names and categories only, never values):
- Identity providers and login flow (every `auth config` entry), MFA, where the IdP token becomes the OutSystems session [OutSystems MCP: login actions].
- Session: cookie names and flags (checked manually), CSRF header name on service calls, lifetime, logout behaviour.
- Client storage that matters: tokens (`token/secret`), identifiers (`identity / personal`), client-side permissions and lock state, with the action that writes each one (table "Where sensitive client variables are written").
- Lock/PIN behaviour: what resets it on start (e.g. a config sync action), and whether the server enforces it.
- Document security headers and third-party hosts.
- Decisions for React: tokens stay server-side (BFF + HttpOnly cookie) unless a documented reason exists; what is mocked in the mock-data phase (login, session, PIN, permissions as toggles).

## 10. Shared calls
Calls made by the shell on every screen (e.g. unread counts): table like spec section 6, plus mocks.

## 11. Screen variants and routing decisions
From survey/variants.md: for each group, the variant to build (decided with the product team), the flag that selects it, and what the other variants become (skip / later).

## 12. Unknowns and gaps
| # | Unknown | Why | How to resolve |
|---|---|---|---|

## 13. Build order and acceptance
1. Document, styles, root containers. 2. Layout + header + bottom bar with mocked badge. 3. Feedback messages and dialogs. 4. View cache/preload helpers. 5. Flags as mock toggles.
Acceptance: an empty screen using the layout matches the captured shell markup and looks identical to the original at the captured viewport; bottom bar navigation reaches the right routes (unmigrated ones show the placeholder).
