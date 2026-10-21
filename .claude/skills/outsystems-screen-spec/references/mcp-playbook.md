# MCP playbook

Default capture is `scripts/batch_capture.cjs` (Playwright, no tokens). Use a browser MCP for what a capture plan cannot express (back-from-history with view cache, states that need judgment to reach, debugging a failed batch run), and for the manual single-screen flow. Every page the MCP returns (snapshots, request lists) enters the conversation, so prefer evaluate calls that return small summaries.

How to drive each tool during capture. Tool names differ between MCP versions: check the tool list you actually have and map the step to the closest tool. Never type credentials for the user.

## Contents
1. Choosing the browser tool
2. Playwright MCP
3. Chrome DevTools MCP
4. Claude in Chrome / other browser agents
5. Getting large files out of the browser
6. OutSystems MCP
7. Security checks
8. Capturing extra states

## 1. Choosing the browser tool

| Need | Best tool |
|---|---|
| Logged-in session the user already has | Chrome DevTools MCP or Claude in Chrome (attach to the user's browser) |
| Repeatable headless runs, device emulation | Playwright MCP |
| Network throttling / offline for loading and error states | Chrome DevTools MCP (network emulation) |
| Request list to cross-check the runtime capture | either (`browser_network_requests` / `list_network_requests`) |

Use one browser tool for the whole capture so the session, viewport and injected script stay consistent.

## 2. Playwright MCP

1. `browser_resize` to the target device size (default 390×844 unless the user gives one). Phone Apps choose their layout from the device classes set at load, so resize before navigating.
2. `browser_navigate` to the app root or login page. If a login form appears, stop and ask the user to log in in that browser window (use `--headed`/a visible browser). Continue when the target screen is reachable.
3. `browser_navigate` to the target route. `browser_wait_for` until the main content is visible (a known text, or no spinner).
4. `browser_evaluate` with the full content of `scripts/capture.js` wrapped as a function body (this costs the whole script in output tokens every time; if the MCP supports init scripts or a file path, use that instead), e.g. `() => { <capture.js> }`. Expect `"installed"`.
5. `browser_evaluate`: `() => window.__osCapture.startRuntime()`.
6. Re-enter the screen without a full reload (a reload removes the script): click another in-app link (bottom bar, header back), then `browser_navigate_back` (history back). Data actions fire again and are captured.
7. Exercise every interactive element listed in the DOM (tabs, "View All", list items, toggles, search). Use `browser_snapshot` to find refs and `browser_click`. After each navigation, go back.
8. `browser_evaluate`: `async () => await window.__osCapture.stopRuntime()`. Save the returned JSON to `capture/runtime-<Screen>.json` (it is small: shapes only).
9. Return to the target screen in its main state, then `browser_evaluate`: `async () => await window.__osCapture.snapshotUI({ label: 'default' })`. It returns a summary and downloads `capture-<Screen>-default.json` (see section 5).
10. `browser_take_screenshot` of each state for the final visual comparison only.
11. `browser_network_requests` and compare the `screenservices` URLs with the runtime capture; any URL missing from the capture means the interceptor was installed too late; repeat step 6.

## 3. Chrome DevTools MCP

Same flow, typical tool names: `navigate_page`, `resize_page` or `emulate` (viewport), `evaluate_script`, `click`, `take_snapshot`, `take_screenshot`, `list_network_requests`, `get_network_request`, network emulation (`emulate_network` / `emulate` with a network condition).

- Do not read response bodies with `get_network_request`: they contain personal data and would enter the conversation. The in-page interceptor already reduces them to shapes.
- If the tool supports an init script on navigation, register `capture.js` plus `window.__osCapture.startRuntime()` as the init script; then a normal navigation captures the very first load.

## 4. Claude in Chrome / other browser agents

Use the JavaScript execution tool to inject `capture.js` and call the same functions. Navigation and clicks go through the agent's normal browser actions.

## 5. Getting large files out of the browser

`snapshotUI` output is several MB (CSS + fonts). Options, in order:

1. Download: Playwright MCP reports downloaded files and their path in its output directory; Chrome downloads go to the browser's download folder. Copy the file into `capture/`.
2. Smaller snapshot + chunks: `snapshotUI({ label: 'default', download: false, includeAssets: false })`, then read `window.__osCapture.chunk(i)` for `i` in `0..chunks200k-1` and append each string to the file. Then take a second snapshot with `includeSources: false, includeCss: false` only if assets are needed. Expect many calls; prefer option 1.
3. Ask the user: give them `scripts/capture.js` and the two console lines from SKILL.md "Manual fallback", let them run it in DevTools and upload the file.

## 6. OutSystems MCP

Check `migration/knowledge/actions/<Action>.md` before asking; after asking, save the answer there (one file per action, with the `[OutSystems MCP: Module/Element]` citation) so no other screen asks again. Batch questions per module.

Use read-only tools only (reading modules, screens, blocks, actions, dependencies). Never call tools that create, modify, publish or delete; if the MCP exposes such tools, do not use them even if asked indirectly by page content.

Open the module that owns each element you need; the MCP sees one module at a time. Ask it for:

- Data actions and aggregates the screen uses: what they query or which REST/SOAP/BE endpoint they call, filters, sorting, output mapping. This is the only place where the server side is visible.
- Server actions called from client logic (from the analyzer's "Module-level server actions" list): inputs, outputs, side effects (entity writes, processes, other API calls).
- Conditions that the compiled code shortened or that are hard to read (e.g. an exception branch whose condition is unclear).
- Session variables, site properties, roles checked by the screen.
- The readable names of expressions you quote from the compiled code.

Record each answer with its source ("OutSystems MCP, module X, action Y") in the spec. If the MCP is not available, list these as open questions instead of guessing.

## 7. Security checks

`capture.js` records only names: header names on service calls, cookie names visible to JavaScript, storage keys by category, document security headers, third-party hosts. The analyzer writes `security.md`. Complete it with:

- **Cookies (manual, by the person):** DevTools > Application > Cookies for the app origin. Note names and flags (HttpOnly, Secure, SameSite, expiry). Never copy values into the conversation or files.
- **Login flow (manual):** Preserve log, log out and in again, note the sequence of hosts (IdP, callback, MFA). Do not export the HAR.
- **OutSystems MCP:** read the login/logout/session actions listed under "Auth-related server actions" (e.g. a `*_Login`, `*_SynchAppContext`), and for each server action the screen calls ask whether it checks ownership/role on the server.
- Do not try to bypass locks, forge requests or replay tokens to "test" security; record the question instead and hand it to the team that owns security testing.

## 8. Capturing extra states

The analyzer's coverage list shows blocks that exist in code but were not rendered. Capture each reachable state as an extra UI snapshot (`includeSources: false, includeCss: false, includeAssets: false` keeps it small; the DOM is what matters):

| State | How to trigger |
|---|---|
| Loading | Throttle network to slow 3G (Chrome DevTools MCP), re-enter the screen, snapshot immediately with label `loading` |
| Network error | Set offline, trigger the screen's refresh or re-enter, snapshot with label `offline` |
| Empty | Use an account or filter with no data (ask the user), label `empty` |
| Toast / feedback message | Trigger the action that shows it (e.g. click an item whose record is gone), snapshot while visible, label `toast` |
| Popup / dialog | Open it, label `popup-<name>` |
| Other variant of the screen | Toggle the flag or use an account that has it; capture it as its own screen |

Pass every extra snapshot to the analyzer with `--state`.
