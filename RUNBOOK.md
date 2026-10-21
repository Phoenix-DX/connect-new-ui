# RUNBOOK: migrate UBTConnect → React with the Claude Code CLI

`$SK` = `.claude/skills/outsystems-screen-spec/scripts`. Run every command in the root folder `connect-new/`.

## A. Prepare the machine (normal terminal, do this once)

```bash
# 0. Required: Node 20 or 22, Python 3.10+, git, Claude Code (the `claude` command)
cd connect-new
cp ~/Downloads/credentials.json .auth/credentials.json      # the credentials file you received separately
git init && git add -A && git status                         # .auth/ must NOT appear in the list
git commit -m "chore: migration workspace"
npm install                                                   # Playwright for capture/parity
npx playwright install chromium
python3 -m pip install -r requirements.txt                    # beautifulsoup4, jsbeautifier
# (optional) OutSystems MCP, if you have it: claude mcp add --scope project <name> -- <command that runs the server>
claude
```

## B. In the Claude CLI

Each step below is a prompt. Type it, or paste it, into Claude. Your answers are in square brackets.

### Step 1. Check the skill
```
/skills
```
The list must show `outsystems-screen-spec`. If it does not, run `/reload-skills`.

### Step 2. Test the sign-in (UBT One + PIN)
```
Use the skill outsystems-screen-spec. Run `node $SK/batch_capture.cjs login --auto --headed --storage .auth/state.json`
to test the sign-in to UBTConnect TST (Login with UBT One → B2C → PIN). Do not read the .auth folder. Report the result of each step.
```
The correct result is `signed in at the identity provider`, `PIN unlocked`, `session saved`. If an error occurs, see section D.

### Step 3. Survey and screen list (phase 0–1)
```
Phase 0–1: run `batch_capture.cjs survey`, then survey_app.py (--agents-out migration/AGENTS.md), board.py init,
board.py triage. Show me all screens in the groups ?build / ?skip / ask, with the evidence for each screen,
so that I decide the scope in one pass. Do not capture anything yet.
```

### Step 4. You decide the scope
```
Scope: build = <Screen1, Screen2, ...>. Skip = <ScreenX> (reason: ...), <ScreenY> (...). All other screens: skip (outside the scope of wave 1).
Record the decisions with board.py set ... reason="<reason> (<your name>, <date>)", then show me the board.
```

### Step 5. Capture plan and capture (phase 2, costs no tokens while it runs)
```
Phase 2: create migration/capture-plan.json with init-plan. Viewports: phone 390x844 [+ desktop 1440x900 if you want].
Fill in waitFor and the steps (dialog, tab, filter...) from the compiled code of each screen. List the screens that need
parameters (id...) for me: I will paste the real URLs of the test account. Then run
`batch_capture.cjs run --plan migration/capture-plan.json --storage .auth/state.json --out migration/screens --analyze`
and summarize the coverage.md of each screen (missing states, blocks that did not render).
```
[Paste the URLs of the detail screens when Claude asks, for example `/UBTConnect/OrderDetail?OrderId=123`]

### Step 6. Catalog, OSUI, flags (phase 3)
```
Phase 3: run catalog.py, board.py tier, flags.py scan. Summarize: the foundation queue (including the OutSystems UI
patterns in survey/osui.md), the tier of each screen, and the list of feature flags with the screens they affect.
```

### Step 7. Decide the architecture and the stack (phase 4)
```
Phase 4: run stack.py init --screens migration/survey/screens.json, then stack.py questions. Show ALL items and
patterns (including viewports, mocking, the osui:<Pattern> items). Give each item a recommendation, the other options and the reason. Wait for my answer.
```
[Example answer: "Accept all recommendations, except: mocking = recorded fixtures; viewports = phone + desktop;
osui:DatePicker = the same provider library as the original app; osui:Tabs = write our own. Accept all patterns."]

Claude records the answers with `stack.py confirm … --by user` and `pattern accept … --by user`.

### Step 8. Decide the feature flags
```
For each flag in migration/flags.md: ask the OutSystems MCP (if it exists), then show me the meaning, the value in each
environment, and a recommendation (default-only or both). After I decide, run flags.py decide (--key --default --values --branches),
flags.py export --app app, flags.py variants. Then add flagVariants to capture-plan and capture the affected screens again.
```
[Example answer: "NewHome: both, default off. LegacyMenu: default-only (on). FooFlag: not a flag."]

### Step 9 (if you choose recorded fixtures). Mock data from the original app
```
Record the mock data: `record_har.cjs --plan migration/capture-plan.json --crawl --out migration/.raw/session-<date>.har`
(keep the read-only guard), then har_to_fixtures.py convert --out app/src/mocks/fixtures. Do not open the HAR. Report
recording-coverage.md and the REVIEW.md parts for me to read.
```
[Read `app/src/mocks/fixtures/REVIEW.md` yourself. If it is correct:]
```
I read REVIEW.md and I accept it. Run har_to_fixtures.py review --by user, coverage, then delete the raw HAR file.
```

### Step 10. Foundation: app, shell, shared blocks (phase 5)
```
Phase 5 (foundation owner): scaffold_react_app.py --survey migration/survey --shell-analysis migration/screens/<home screen>/analysis
--out app --stack migration/stack.json; npm install in app; npx msw init public. Write the app-shell spec, build the shell
and every block in foundation-queue.md (also the OSUI blocks, tag @os-block, one snapshot test for each state). Ask me about every unclear point.
When done, freeze and commit.
```
This phase can take several sessions. At the end of each session, say: "commit what is done".

### Step 11. The loop for each route (phase 6–8)
```
route.py plan. Work on route <Screen> as route-agent.md describes: start → capture (if needed) → spec (ask me about every
unclear point before you write code) → spec-done → build → run `npm --prefix app run dev` in the background → route.py parity <Screen> --app http://localhost:5173
until it is clean → ready. Stop at the review and give me the review message.
```
Test in the browser yourself:
- `http://localhost:5173/UBTConnect/<Screen>?mock=real`, then `?mock=empty`, `?mock=error`, `?mock=loading`
- `?ffpanel=1` turns the flags on and off. Make the window smaller, or use DevTools device mode, to see phone and desktop.
- Compare with the original app side by side. When needed, open `migration/screens/<Screen>/parity/*.diff.png`.

Feedback:
```
Review <Screen>: bug: <description>; todo: <description>; question: <description>
```
Claude records `route.py feedback … --by user`, fixes the issues, and runs parity and ready again. When all is correct:
```
Review <Screen>: confirm. Finish and commit.
```

### Step 12 (optional). Run several lite routes in parallel
```
The lite routes are ready (tier lite, they do not wait for the foundation): give each route to one subagent as described in references/route-agent.md,
a maximum of 3 routes at one time. Collect the questions of the subagents and ask me in one pass. Stop when all routes are in the review state.
```

### Step 13. Next session
```bash
claude -c          # continue the latest conversation, or run `claude` and then:
```
```
Continue the migration: run route.py plan and tell me where we are and what the next step is.
```

## C. Tips to keep token use low

- Run `/clear` between routes (CLAUDE.md, the board and the files stay). Run `/compact` when one route is long.
- Run `/usage` to see the cost. Tell Claude to run `ledger.py add` after each route, and `ledger.py report` after 2–3 routes.
- Start with the phone only. Add desktop when the shell is stable.

## D. When the sign-in fails

- `user field not found` / `password field not found`: the B2C page uses other selectors. Run again with `--headed`, take a screenshot, and send it to Claude. Claude then adjusts `login.user` / `login.password` in `assets/site-profiles/ubtconnect-tst.json` (or copies that profile to `migration/site.json` and edits it there).
- `did not return to the app … (MFA, captcha …)`: the account has MFA on. Use the normal `login` (you sign in yourself once). The session is still saved and reused.
- `still on the PIN page`: the PIN is wrong, or the page has a separate confirm button. Add the selector of that button to `pin.submit`.
- `secrets: NOT found`: the file `.auth/credentials.json` is missing.
