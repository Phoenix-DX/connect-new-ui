# Route agent: one route, nothing else

You build or fix ONE route. Read this file, `migration/AGENTS.md` (the rules) and your `pack.md`. That is your whole starting context. Do not read the skill's SKILL.md, `route-loop.md`, `end-to-end.md` or other references: they are for the orchestrator. Commands below are `python3 <skill>/scripts/route.py …` (shortened to `route.py`).

## 1. Start

`route.py start <S> --owner <you>`, then do what it prints:
- **"route-spec.md and pack.md KEPT"**: the spec survived a reset. Go to section 3 (build). Do not rewrite the spec. If it lists answers recorded after spec-done, update only the spec parts those answers touch, then `route.py spec-done <S>`.
- **"restored to the last review checkpoint"**: you are fixing feedback. Go to section 5.
- **"capture needed"**: `route.py step <S> capture`, then `node <skill>/scripts/batch_capture.cjs run --only <S> --analyze …` (the orchestrator gives the arguments). If the capture fails: `route.py fail <S> --reason "…"` and stop.
- Otherwise: section 2.

## 2. Spec

1. `route.py step <S> spec`, then `python3 <skill>/scripts/context_pack.py --screen <S> --analysis migration/screens/<S>/analysis`. Read `pack.md` once, fully.
2. If the route has feature flags (pack section "Feature flags"): `python3 <skill>/scripts/flags.py questions --route <S>`.
3. Write `migration/screens/<S>/route-spec.md` from `<skill>/assets/route-spec-template.md` (lite) or `spec-template.md` (full). Required headings: Summary, Patterns used, Unclear points, Decisions to confirm, and Feature flags when the route has flags. Every statement cites its evidence.
4. Every point without evidence is a question (section 4). Ask during this step, before code.
5. When no blocking question is open: `route.py spec-done <S>`. It records the spec with the hashes of its inputs, so a later interruption does not cost a new spec. Run it again after any later edit of the spec or any new answer; `ready` checks this.

## 3. Build and parity

1. `route.py step <S> build`. Write only in `app/src/screens/<S>/` (AGENTS.md rules 4–21). Typecheck and build must pass. Flags through `useFlag`/`useFlagOn` (P-FLAGS); OutSystems UI patterns through `src/shared/osui/` (P-OSUI); mutations through `src/mocks/store.ts` (P-MUTATION); the same calls in the same phases as `analysis/calls.json` (P-CALLS). Mocks: if `app/src/mocks/fixtures/index.json` lists your actions and the stack uses recorded fixtures, use `recordedHandler(module, action)` (rule 10); read only `index.json` and the fixture files of your actions. A browser console line `[mock] no recorded call for inputs …` means a case was not recorded: ask the user (decision) rather than inventing data.
2. `route.py step <S> parity`, then `route.py parity <S> --app http://localhost:5173` (dev server running). It runs every captured state (viewports, flag variants, steps, loading/offline) with style, pseudo-element, position, text, pixel and call comparison, and stamps each report; the gates accept nothing else, and any later code change makes the reports stale, so run it again after your last change. Read the JSON (and `parity/<state>.diff.png` for a pixel difference) only for the differences you fix. Fix in markup; a `call` difference in the route's logic, never in the mock. A difference that needs shell/shared becomes a change request (rule 7). A difference that cannot be fixed becomes a decision question. `ready` also refuses a call of the capture without a mock handler, and a flag value decided "both" without a captured state.
3. Fill "Decisions to confirm", `route.py spec-done <S>` if the spec changed, then `route.py ready <S>`. Return the review message it prints. Stop: the user tests now.

## 4. Questions (never guess)

Known = capture, compiled code, `migration/knowledge/`, a recorded MCP or user answer, AGENTS.md, an exemption. Anything else:

| Kind | Examples | Who answers |
|---|---|---|
| fact | what an action does, a field or enum meaning, an unreadable condition, server-side authorization, a flag's meaning | OutSystems MCP first (read-only tools, owning module). If it is not clear-cut, the user. |
| decision | unobserved branch, uncapturable state, parity difference you cannot fix, change request priority, new package or pattern, native feature on the web, security handling, any divergence | the user only |

```bash
route.py ask <S> --kind fact --topic "<area>" --question "<what>" --evidence "<file/expression>" --mcp "<MCP answer> [OutSystems MCP: Module/Element]"
route.py answer <S> Q<n> --by mcp --answer "<fact>"          # only if the MCP answer is unambiguous; cache reusable answers in migration/knowledge/
route.py ask <S> --kind decision --topic "<area>" --question "<one decision>" --evidence "…" --mcp "…" --options "A|B" --recommend "A" --blocking
```

Check `migration/knowledge/actions/` and your `questions.json` before you ask the MCP. A recommendation is not an answer. Work that does not depend on an open question continues.

**As a subagent** you cannot talk to the user. Record the question, finish what does not depend on it, `route.py spec-done <S>` if the spec is complete apart from that question's part, and return the open question ids. When you start again after the answers, the recorded spec is kept (section 1).

## 5. Fixing feedback (status `fixing`)

Read only: `migration/screens/<S>/feedback.md` (open items), the route files those items touch, the matching part of `pack.md` or `analysis/dom/<state>.html` (by grep or line range), and the parity JSON of the affected state. Do not re-read the whole pack or the spec unless an item needs it.

For each item: fix or answer it (section 4 if unclear), then `route.py fixed <S> F<n> --note "<what changed>"`. Re-run `route.py parity <S> --app …` (all states: the fingerprint covers the whole route), `route.py spec-done <S>` if the spec changed, then `route.py ready <S>` and return the review message.

## 6. When something breaks

Network, tool crash, or a gate you cannot pass: `route.py fail <S> --reason "<why>"` and stop. Never finish a route yourself: `route.py finish` runs only after the user answered the latest review `confirm`.
